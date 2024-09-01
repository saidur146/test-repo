const prompt = require("prompt-sync")();
let a = prompt("what is your age?");
//console.log(a);
a = Number.parseInt(a);
if(a<0){
    console.log("This is an invalid age");
}
else if(a<9){
    console.log("you are a kid and you cannot driving");
}
else if(a<18 && a>=9){
    console.log("you are a kid and you can driving after 18");
}
else{
    console.log("you can now drive as you are above 18");
}
