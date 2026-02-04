type Direction = "up" | "down" | "left" | "right";
function move(direction:Direction):void{
    console.log("Moving " + direction);
}
move("up");
move("left");
move("down");
move("right");