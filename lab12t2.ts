function printInputValue(): void {
    const input= document.getElementById("username") as HTMLInputElement|null;
    if(input){
        console.log(input.value);
    }
}
(window as any).printInputValue=printInputValue;