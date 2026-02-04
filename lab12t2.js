function printInputValue() {
    var input = document.getElementById("username");
    if (input) {
        console.log(input.value);
    }
}
window.printInputValue = printInputValue;
