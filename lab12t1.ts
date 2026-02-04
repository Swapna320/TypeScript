enum Direction{
    up="Up",
    down="Down",
    left="Left",
    right="Right"
}
enum Status {
Pending = "PENDING",
Success = "SUCCESS",
Failure = "FAILURE"
}
Status.Success;
function printStatusOrDirection(value:Direction|Status):void{
    console.log(value)
}
const dir:Direction=Direction.left;
const sta:Status=Status.Success;
printStatusOrDirection(dir);
printStatusOrDirection(sta);
console.log(dir);
console.log(sta);