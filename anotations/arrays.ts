const carMakers:string[] = ["ford", "toyota", "chevy"];

const dates = [new Date()]


const carsByMake:string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help With type inference when extracting values
 carMakers.map((car:string): string => {
    return car;
 });

 const importantDates: (Date| string)[] = [new Date() ]