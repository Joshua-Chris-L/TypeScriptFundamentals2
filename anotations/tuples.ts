
const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};

// Makes the array a tuple
// does not create an array but forces this arrays but a tuple with the defiition types
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['brown', false, 60]


