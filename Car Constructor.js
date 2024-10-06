function Car(model, milesPerGallon) {
    Car.model = model;
    Car.milesPerGallon = milesPerGallon;
    Car.tank = 0;
    Car.odometer = 0;
}

Car.prototype.fill = function(gallons) {
    Car.tank += gallons;
    console.log(`${gallons} gallons added to the tank. Total: ${Car.tank} gallons.`);
};

Car.prototype.drive = function(distance) {
    const maxDistance = Car.tank * Car.milesPerGallon;
    if (distance <= maxDistance) {
        Car.odometer += distance;
        Car.tank -= distance / Car.milesPerGallon;
        console.log(`Drove ${distance} miles. Odometer: ${Car.odometer}, Remaining fuel: ${Car.tank} gallons.`);
    } else {
        Car.odometer += maxDistance;
        Car.tank = 0;
        console.log(`I ran out of fuel at ${Car.odometer} miles!`);
    }
};