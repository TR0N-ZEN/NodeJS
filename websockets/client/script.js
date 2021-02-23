const ws = new WebSocket("ws://localhost:3021");
ws.addEventListener("open", () => {
    console.log("Connected to WebSocket on server");
});
ws.addEventListener("message", (message) => {
    console.log(message.data);//`${message}`);
    chat.list.append(`<li>${message.data}</li>`);
});

let chat = {
    list: $(".chat > ul"),
    message: $(".chat > form > input"),
    button: $(".chat > form > button")
};

chat.button.on("click", (button) => {
    button.preventDefault();
    ws.send(chat.message.val());
    chat.message.val("");
});