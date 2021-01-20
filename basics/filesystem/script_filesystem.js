const fs = require("fs");

function print_file_content(filepath) {
    let text = fs.readFileSync(filepath, "utf-8");
    console.log(text);
}

fs.writeFileSync("./text.txt", "yeees");

print_file_content("./text.txt");

fs.writeFileSync("./text.txt", "noooo");

print_file_content("./text.txt");

fs.appendFileSync("./text.txt", "appened", "utf-8");

print_file_content("./text.txt");