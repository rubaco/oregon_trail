// NOTE: Use the Atom package 'Todo-Show' to see the notes I've added all together in one place. If you have the Todo-Show package, go to Packages > Todo-Show > Find in Active File
(function(){

function getRandomIntInclusive(min, max){
  main = Math.ceil(min) // FIXME: Typo `main` > `min`
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
  this.capacity;


}

//Create a new traveler object with the specified name, a random amount of food, and isHealthy = true.
makeTraveler = function(travelerName){

  let brandNewTraveler = new Traveler();
  brandNewTraveler.name = travelerName;

  let randomFood = getRandomIntInclusive(5,100);
  brandNewTraveler.food = randomFood;
  this.isHealthy = true;

  console.log("make traveler: " + brandNewTraveler.name);
  console.log("make food " + brandNewTraveler.food);
  console.log("make healthy" + brandNewTraveler.isHealthy);
  return brandNewTraveler;
}

// }≥≥';l'≥



//Create a new wagon with an empty passenger list and the specified capacity.
  makeWagon = function(capacity) {
    const brandNewWagon = new Wagon();
    brandNewWagon.capacity = capacity;  // FIXME: This will also need you to use `new` to initialize an instance of the Wagon class. And then you'll set the capacity of the particular wagon you've assigned to a variable.
    brandNewWagon.passengerList = [];
    console.log("made wagon with capacity" + brandNewWagon.capacity )
    return brandNewWagon;
  }

//    Create a new wagon with an empty passenger list and the specified capacity.

hunt = function(Traveler){

  console.log("initial food:");
  let foodIncrease = Math.random() < 0.5 ? true : false;

  if (foodIncrease) {
    console.log(foodIncrease)
    traveler.food *= 2;
  }
  else {
    traveler.food *= 1.5;
  }

  console.log("final food is " + traveler.food);

}


  //  eat(traveler)
//Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.
    eat = function(thisTraveler){

    this.traveler = thisTraveler; //?
    // eatTraveler = new Traveler(); ?

    let foodStart = this.traveler.food;
    console.log("food start:" + foodStart)
    newfood = foodStart - (foodStart * .20);
    console.log ("eat function food starts at " + foodStart + " eat food ends at " + newfood)
    if (this.traveler.food != 20)
      {
      this.traveler.unhealthy = false;
      }

  }

  //Add a travelerto a wagon
  join = function(wagon, traveler){


    if (wagon.capacity != 0){
      // FIXME: Nothing is happening here yet, which you probably know.
      wagon.passengerList.push(traveler);
      wagon.capacity = wagon.capacity - 1;
    }

    console.log ("traveler:" + traveler.name + "was pushed to the wagon" + "and the new capacity of wagon is at: " + wagon.capacity)

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
