
(function(){

function getRandomIntInclusive(min, max){
  main = Math.ceil(min)
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min + 1)) + min;
}


function Traveler () {

  this.food = "";
  this.name = "";
  this.isHealthy = true;


}

function Wagon() {

//  Traveler.call();

  this.passengerList = [];
  this.capacity = capacity;


}

//Create a new traveler object with the specified name, a random amount of food, and isHealthy = true.
makeTraveler= function(travelerName){

Traveler.name = travelerName;
let randomFood = getRandomIntInclusive(5,100);
Traveler.food = randomFood;
Traveler.isHealthy = true;

console.log("make traveler: " + Traveler.name);
console.log("make food " + Traveler.food);
console.log("make healthy" + Traveler.isHealthy);

  }

//Create a new wagon with an empty passenger list and the specified capacity.
  makeWagon= function(capacity){
  Wagon.capacity = capacity;
  Wagon.passengerList = [];
  console.log("made wagon with capacity" + Wagon.capacity )
    }

//    Create a new wagon with an empty passenger list and the specified capacity.

hunt= function(){

console.log("initial food:" + Traveler.food);
let foodIncrease = Math.random() < 0.5 ? true : false;
console.log("increase by 100 percent is" + this.foodIncrease);

if (this.foodIncrease) {

  Traver.food = Traver.food * 2;
}
  else {

    Traveler.food = Traveler.food * 1.5;
  }

  console.log("increase by 100 true or false?" + foodIncrease);
  console.log("final food is " + Traveler.food + " for " + Traveler.name);

}


  //  eat(traveler)
//Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.
    eat= function(){

    let foodStart = Traveler.food;
    newfood = foodStart - (foodStart * .20);
    console.log ("eat function food starts at " + Traveler.food + " eat food ends at " + newfood)
    if (this.food != 20)
      {
      Traveler.unhealthy = false;
      }

  }

  //Add a travelerto a wagon
  join = function(wagon, traveler){

    if (Wagon.capacity != 0){

    }
    Wagon.passengerList.push(traveler);

    console.log ("pushed traveler" + Traveler.name)
    console.log("show wagon capacity" + Wagon.capacity)

    }








  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');

  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry

  join(wagon, traveler);
  join(wagon, traveler2);



})();
