// Interface provides an easy way to define objects and are immutable
interface Vehicle {
    name: string;
   // year: Date;
   // broken: boolean;
    summary(): string;
}

const oldCivic = {
   name: 'Ford',
   year: new Date(),
   broken: true,
   summary(): string {
    return `Name: ${this.name}`
   }
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);