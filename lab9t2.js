function formatValue(a) {
    if (typeof a === "string") {
        console.log(a.toUpperCase());
    }
    else if (typeof a === "number") {
        console.log(Math.round(a));
    }
}
formatValue("hi i am swapna");
formatValue(23.5);
