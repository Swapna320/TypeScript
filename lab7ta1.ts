function greetUser(name:string,title?:string):void{
    if(title){
        console.log("Hello,"+title+" "+name+"!");
    }
    else {
        console.log("Hello,"+name+"!")
    }
}
greetUser("Swapna","Korapati");
greetUser("Spurthi");