type Point={
    x:number,
    y:number
};
function printPoint(point:Point):void {
console.log("x:"+point.x ," y:"+point.y);
}
let p:Point={x:2,y:4};
printPoint(p);