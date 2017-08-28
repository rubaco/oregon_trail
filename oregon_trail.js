
(function(){

function getRandomIntInclusive(min, max){
  main = Math.ceil(min)
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min + 1)) + min;
}

function Traveler (food, name, isHealthy) {



  this.food = food;
  this.name = name;
  this.isHealthy = isHealthy;

  //Create a new traveler object with the specified name, a random amount of food, and isHealthy = true.
  this.makeTraveler= function(travelerName){
  this.name = travelerName;

  let randomFood = getRandomIntInclusive(5,100);
  this.food = randomFood;
  this.isHealthy = true;

  console.log(this.name);
  console.log(this.food);
  console.log(this.isHealthy);

    }

    //2.   hunt(traveler)
    // 50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).
    this.hunt= function(){

    console.log("initial food:" + this.food);
    let foodIncrease = Math.random() < 0.5 ? true : false;
    console.log("increase by 100 percent is" + this.foodIncrease);

    if (this.foodIncrease) {

      food = food * 2;
    }
      else {

        food = food * 1.5;
      }

      console.log("increase by 100 true or false?" + foodIncrease);
      console.log("final food is " + this.food);

    }

  //  eat(traveler)
//Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.
    this.eat= function(){

    let foodStart = this.food;
    newfood = foodStart - (foodStart * .20);
    console.log ("eat function food starts at " + this.food + " eat food ends at " + newfood)
    if (this.food != 20)
      {
      this.unhealthy = false;
      }

  }

}



function Wagon(capacity) {

  Traveler.call();

  this.passengerList = [];
  this.capacity = capacity;
  //Create a new wagon with an empty passenger list and the specified capacity.
  this.makeWagon = function(capacity){
  this.capacity = capacity;
  console.log("the capacity added is: " + this.capacity);

}

//Add a travelerto a wagon
this.join = function(traveler){

  // **need to add logic that evaluates if passengerList Count array has notreached capacity)
  this.passengerList.push(traveler);
  console.log (traveler)
  console.log("display passenger:" + this.passengerList[0].name)
//  console.log("display healthy:" + this.passengerList[0].isHealthy)
  console.log("show array" + this.capacity)

  }


//quarantine
    this.quarantine= function(){
    for (let i = 0; this.passengerList[i]; i++){
      console.log("display passenger from quarantine:" + this.passengerList[i].name)
      console.log("display health from quarantine:" + this.passengerList[i].isHealthy)
      let travelerHealth = this.passengerList[i].isHealthy;
        if (travelerHealth == false){
            console.log("is healthy but let's quarantine")
          break;
      }
    }



  }

  //  food(wagon)
//Return the total amount of food among all occupants of the wagon.
  this.food= function(){
    let foodTotal = 0;

    for (let i = 0; this.passengerList[i]; i++){
      console.log("traveler food amount" + this.passengerList[i].food)
      let travelerFood = this.passengerList[i].food;
      foodTotal = foodTotal + travelerFood;
    }
    console.log(foodTotal);
    return foodTotal


  }

}

//testing the traveler
// Create a new traveler object with the specified name, a random amount of food, and isHealthy = true.


let newestTraveler = new Traveler();
let secondTraveler = new Traveler();
newestTraveler.makeTraveler("Henrietta");
secondTraveler.makeTraveler("John");
newestTraveler.hunt();

let firstWagon = new Wagon();
firstWagon.makeWagon(10);

newestTraveler.eat();

let test = new Wagon();

firstWagon.join(newestTraveler);
firstWagon.join(secondTraveler);
secondTraveler.isHealthy = false;

firstWagon.quarantine();

firstWagon.food();






})();
