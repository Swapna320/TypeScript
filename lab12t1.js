var Direction;
(function (Direction) {
    Direction["up"] = "Up";
    Direction["down"] = "Down";
    Direction["left"] = "Left";
    Direction["right"] = "Right";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
})(Status || (Status = {}));
Status.Success;
function printStatusOrDirection(value) {
    console.log(value);
}
var dir = Direction.left;
var sta = Status.Success;
printStatusOrDirection(dir);
printStatusOrDirection(sta);
console.log(dir);
console.log(sta);
