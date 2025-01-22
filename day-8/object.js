const car1 = {
    engine: "V8",
    model: "E6",
    brand: "Audi",
    };
    console.log("car1:", car1);
    
    car1.model = "Square";
    car1.mileage = 25;
    
    // const car2 = car1; // SHALLOW COPY

    const car2 = { ...car1 }; // ... --> SPREAD OPERATOR (IT IS NOT DEEP COPY)
    // (We are creating a new object and putting old properties and methods in it)
    
    car2.engine = "V6";
    
    console.log("Updated car1:", car1);
    console.log("Car2:", car2);