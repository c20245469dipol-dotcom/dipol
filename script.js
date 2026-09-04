console.log("Hello World.");
console.log("From script.js file.");

const myName ="John Emmanuel";
let age = 60;
const number = 9487489016;
const address = "Napla";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings, names=[]){
        if (Array.isArray(names)){
            names = names.join(", ");
    }
    return `${greetings} sa enyu, ${names}`;

}
console.log(greet("Mayong aga", ["John Emmanuel" , "Bai", "Soy" , "Tol" , "Erp"]));

const heading = document.querySelector("h1");
heading.textContent = "Dennis Dipol";
heading.style.fontSize = "100px";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
console.log(heading);

heading.addEventListener("click", function(){
    heading.style.color = "red";
    console.log("heading was Clicked.");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isOff = false;

toggleButton.addEventListener("click", function(){
    if (isOff){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        isOff = false;
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        isOff = true;   
    }

});



