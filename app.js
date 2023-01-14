console.log("it works");

// Exercises

// Generating arrays

function generateArray(){
    let array = [];

    for (let i = 1; i <= 1000; i++){
    if (i % 3 === 0){
        array.push(i);
    }
    }
    console.log(array);
}

generateArray();

console.log("-------------------------------------");


function generateArrayTwo(){
    let arrayTwo = [];

    for (let i = 1; i <= 1000; i++){
        if (i % 4 === 0 && i / 2){
            arrayTwo.push(i);
        }
    }
    console.log(arrayTwo);
}

generateArrayTwo();

console.log("-------------------------------------");


function generateArrayThree(){
    let arrayThree = [];

    for( let i = 1; i <= 1000; i++){
        if (i % 10 === 1){
            arrayThree.push(i);
        }
    }
    console.log(arrayThree);
}

generateArrayThree();

console.log("-------------------------------------");

// Clean arrays

function cleanArray (){
    let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

    let cleanedArray = [];

    for(let i = 0; i < test.length; i++){
        if(typeof test[i] === `string`){
            cleanedArray.push(test[i]);
        }
    }
    console.log(cleanedArray);
}

cleanArray();

console.log("-------------------------------------");


function numArray(){
    let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

    let cleanedArray = [];

    for(let i = 0; i < test.length; i++){
                if(typeof test[i] === `number`){
                    cleanedArray.push(test[i]);
                }
            }
            console.log(cleanedArray);
}

numArray();

console.log("-------------------------------------");


function undefinedArray(){
    let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

    let clearedArray = [];

    for(let i = 0; i < test.length; i++){
        if (test[i]){
            clearedArray.push(test[i]);
        }
    }
    console.log(clearedArray);
}

undefinedArray();

console.log("-------------------------------------");

// Random Color Page

function randomColorHTML() {
    const body = document.querySelector(`body`);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
body.innerHTML += `<h1>rgb(${r},${g},${b})</h1>`
  }

  randomColorHTML();

console.log("-------------------------------------");


// Title Generator 

function generateTitle(){
const colorInput = document.querySelector("#color");
const fontSizeInput = document.querySelector("#fontSize");
const textInput = document.querySelector("#text");
const btn = document.querySelector("#btn");
const h1 = document.querySelector("#h1");

let color = colorInput.value;
let fontSize = fontSizeInput.value;
let text = textInput.value;
colorInput.value = ``;
fontSizeInput.value = ``;
textInput.value = ``;

h1.style.color = `${color}`;
h1.style.fontSize = `${fontSize}rem`;
h1.innerText = `${text}`;

}

console.log("-------------------------------------");


// Student Constructor Function


function Student(firstName,lastName,birthYear,academy,grades = []){

    this.firstName =  firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.academy = academy
    this.grades = grades
    this.getAge = function(){
            console.log(2023 - this.birthYear);
    }
    this.getInfo = function(){
        console.log(`This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`);
    }
    this.getGradesAverage = function(){
        let sum = 0;
        for(let i = 0; i < this.grades.length; i++){
            sum +=this.grades[i];
        }
         sum = sum / this.grades.length;
        console.log(sum);
     }
}

const student = [

new Student ('joce','nikolov',2003,'sedc',[2,3,4,1,2,3]),
new Student ('mirko','velkov',2005,'tama',[2,5,1,2,5]),
new Student ('AH','velksaasov',2015,'tasama',[2,5,5,5,2,5])
];

student[0].getInfo();
student[1].getInfo();
student[2].getInfo();


console.log("-------------------------------------");