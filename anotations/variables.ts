let apples: number = 5;
let speed: string = "I love Jesus";
let nothingMuch:null = null;
let nothing:undefined = undefined;
let array:string[] = ["red", "green", "blue"]
let myNumbers: number[] = [1, 2,3,3,4];

//clases
class Car {

}
let car: Car = new Car()

// object Literal
let pont:{x:number; y:number} = {
    x:10,
    y:20
};

// Function
const logNumber: (i:number) => void = (i: number) => {
    console.log(i)
}

// When to use annotations
// When we have a fuction that returs 'any' type
const json = '{"x":10, "y":20}';
const coordinate = JSON.parse(json)
console.log(coordinate)

//
let words = ["red", "green", "blue"]
let foundWord = false;

for (let index = 0; index < words.length; index++) {
    if (words[index] === "green"){
       foundWord = true;
    }
    
}