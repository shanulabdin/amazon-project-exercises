class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo(){
    const carInfo = `${this.brand} ${this.model}`;
    const speedInfo = `${this.speed}`;
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(carInfo, '- Speed:', speedInfo, 'km/h -', 'trunk:', trunkStatus)
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
      this.isTrunkOpen = true
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false
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

// my tests
console.log(car1)

car1.openTrunk()
car1.displayInfo()

car1.closeTrunk()
car1.displayInfo()

car1.go()
car1.displayInfo()

car1.go()
car1.openTrunk()
car1.displayInfo()

console.log(car2)

car2.openTrunk()
car2.displayInfo()

car2.openTrunk()
car2.go()
car2.displayInfo()

car2.closeTrunk()
car2.displayInfo()

car2.go()
car2.openTrunk()
car2.displayInfo()