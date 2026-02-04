interface Calculator {
   add(a:number,b:number):number;
   multiply(a:number,b:number):number;
}
const calculator:Calculator={
    add(a,b){
        return a+b;
    },
    multiply(a,b){
        return a*b;
    }
}
console.log(calculator.add(10,2));
console.log(calculator.multiply(2,3));
