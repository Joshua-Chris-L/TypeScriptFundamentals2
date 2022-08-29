// class Veehicle {
//     color: string = 'red';
//     constructor( color: string) {
//             this.color = color;
//     }
//     public drive(): void {
//         console.log('chugga chugga')
//     }

//     honk(): void {
//         console.log("beep")
//     }

// }
// const veehicle = new Veehicle('red')
// console.log(veehicle.color)

// class CCar extends Veehicle{
//  drive(): void {
//     console.log("vroom")
//    }
//  startDrivingProcess(): void{
//     this.drive
//  }
// }

// const ccar = new CCar('');
// ccar.drive();

// const veehicle = new Veehicle();
// veehicle.drive() 

//constructors are ways to pass in astring to a function
class Veehicle {
    constructor (public color: string){}

    protected honk(): void {
        console.log('beep')
    }
}

const veehicle = new Veehicle("red")
console.log(veehicle.color)

class CCar extends Veehicle{
    //super calls the constructor function in the parent class veehicle
    constructor (public wheels: number, color: string){
       super(color);   
    }
    private drive(): void {
        console.log("vroom")
       }
     startDrivingProcess(): void{
        this.drive
     }
    }
const ccar = new CCar(4, "orange");
console.log(ccar.color);