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
console.log(heading);

const contactHeading = document.querySelector("#contact");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);


