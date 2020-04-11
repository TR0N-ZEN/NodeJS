const socket = io();

//DOM Interaction----------------------------------------------------------
$('#login form').submit(function (e) {
    e.preventDefault(); // prevents default action of e/the button so page reloading
    socket.emit('Login', $('#login form #loginName').val());
    $('#login').slideUp();
    return false;
});

$('.chat > button').click(function () {
    $('.info .chat .window').slideToggle("fast", "swing");
});

$('.chat .window > form').submit(function (e) {
    e.preventDefault(); // prevents page reloading
    socket.emit('ClientMessage', PlayerObject.name + ": " + $('.chat .window form #message').val());
    $('.chat .window form #message').val('');
    return false;
});
//END DOM Interaction------------------------------------------------------

//Event Receiver List------------------------------------------------------
socket.on('ServerMessage', function (message) {
    $('.chat .window > ul').prepend($('<li>').text(message));
});

socket.on('PlayerObject', (JSON_PlayerObject) => {
    PlayerObject = JSON.parse(JSON_PlayerObject);
    $('.wrapper .info #Name').append(PlayerObject.name);
    $('.wrapper .info #Points').append(PlayerObject.points);
    $('.wrapper .info #Guesses').append(PlayerObject.guesses);
});
//END Event Receiver List--------------------------------------------------