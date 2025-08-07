class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo(){
    const carInfo = `${this.#brand} ${this.#model}`;
    const speedInfo = `${this.speed}`;
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(carInfo, '- Speed:', speedInfo, 'km/h', '- trunk:', trunkStatus)
  }

  go(){
    if(!this.isTrunkOpen){
    this.speed += 5;
    }

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

  openTrunk(){
    if(this.speed === 0){
    this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    this.speed += this.acceleration;

    if(this.speed > 300){
      this.speed = 300;
    }
  }

  openTrunk(){
    console.log('Race cars do not have a trunk')
  }

  closeTrunk(){
    console.log('Race cars do not have a trunk')
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

const raceCar = new RaceCar ({
  brand: 'Mclaren',
  model: 'F1',
  acceleration: 20
}) 

// new tests
console.log(raceCar)
raceCar.displayInfo()

raceCar.go()
raceCar.displayInfo()

raceCar.openTrunk()
raceCar.closeTrunk()
raceCar.go()
raceCar.go()
raceCar.go()
raceCar.displayInfo()


console.log(car1)
car1.displayInfo()

car1.openTrunk()
car1.displayInfo()

car1.go()
car1.displayInfo()

car1.closeTrunk()
car1.displayInfo()

car1.go()
car1.openTrunk()
car1.displayInfo()

car1.brake()
car1.openTrunk()
console.log(car1)



console.log(car2)
car2.displayInfo()

car2.openTrunk()
car2.displayInfo()

car2.go()
car2.displayInfo()

car2.closeTrunk()
car2.displayInfo()

car2.go()
car2.openTrunk()
car2.displayInfo()

car2.brake()
car2.openTrunk()
console.log(car2)
