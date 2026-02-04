type PointType={x:number;y:number};
interface PointInterface{
    x:number;
    y:number;
}
function printPoint(point:PointType|PointInterface):void{
    console.log("x="+point.x,"y="+point.y);
}
const point1:PointType={x:2,y:4};
const point2:PointInterface={x:6,y:8};
printPoint(point1);
printPoint(point2);
// Difference between type and interface:
// 1. interface is mainly used to define the structure of objects and can be extended (merged) multiple times.
// 2. type is more flexible; it can define primitive types, union types, intersection types, and object shapes.
// 3. interface supports declaration merging, but type does not.
// 4. interface is preferred for object shapes, while type is often used for unions and complex types.a 
