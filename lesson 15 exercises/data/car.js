class Car {
  brand;
  model;

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }
}

const car1 = new Car ({
  brand: 'Toyota',
  model: 'Corola'
})

const car2 = new Car ({
  brand: 'Tesla',
  model: 'Corola'
})

console.log(car1);
console.log(car2);