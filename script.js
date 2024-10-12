var number = 10;
var string = "Hello! ";
var istrue = "true";

console.log("print anything you like!");
console.log("number is: ", number);
console.log("string is: ", string);
console.log("istrue boolean is: ", istrue);

document.getElementById("js").innerHTML = number+5;

if (number == 10) {
    console.log ("correct")
}
else {
    console.log ("Not correct")
}

function getValue() {
    name = document.getElementById("input_id").value;
    Output = string + name
    document.getElementById("js1").innerHTML = Output;
}