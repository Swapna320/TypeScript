function greetUser(name, title) {
    if (title) {
        console.log("Hello," + title + " " + name + "!");
    }
    else {
        console.log("Hello," + name + "!");
    }
}
greetUser("Swapna", "Mr/Ms.");
greetUser("Spurthi");
