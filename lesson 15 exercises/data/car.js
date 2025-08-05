class Car {
  brand;
  model;
  speed = 0;

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo(){
    const carInfo = `${this.brand} ${this.model}`;
    const speedInfo = `${this.speed}`

    console.log(carInfo, '- Speed:', speedInfo)
  }

  go(){
    this.speed += 5;

    if(this.speed > 200){
      this.speed = 200;
    }
  }

  brake(){
    this.speed -= 5;

    if(this.speed < 0){
      this.speed = 0
    }
  }
}

const car1 = new Car ({
  brand: 'Toyota',
  model: 'Corola',
})

const car2 = new Car ({
  brand: 'Tesla',
  model: 'Model 3'
})

console.log(car1)
car1.go()
car1.displayInfo()
car1.go()

car1.brake()
car1.brake()
car1.go()
car1.go()
car1.go()
car1.brake()
car1.brake()
car1.brake()
car1.brake()
car1.displayInfo()

console.log(car2)
car2.go()
car2.displayInfo()
car2.go()

car2.brake()
car2.brake()
car2.go()
car2.go()
car2.go()
car2.brake()
car2.brake()
car2.brake()
car2.brake()

car2.displayInfo()
