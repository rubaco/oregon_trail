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
  this.capacity = capacity;


}

//Create a new traveler object with the specified name, a random amount of food, and isHealthy = true.
makeTraveler= function(travelerName){

Traveler.name = travelerName; // FIXME: You want to be initializing an instance of the Traveler class. Traveler is our abstract concept, our pattern which all the new Travelers will follow. So when you do something like Traveler.name = 'foo', what you are doing is setting a property on the "abstract" Traveler object itself -- not on any particular traveler. So assign `new Traveler()` to a variable and set a `name` property to it. This applies for `food`, `isHealthy`.
let randomFood = getRandomIntInclusive(5,100);
Traveler.food = randomFood;
Traveler.isHealthy = true;

console.log("make traveler: " + Traveler.name);
console.log("make food " + Traveler.food);
console.log("make healthy" + Traveler.isHealthy);

  }

//Create a new wagon with an empty passenger list and the specified capacity.
  makeWagon= function(capacity){
  Wagon.capacity = capacity;  // FIXME: This will also need you to use `new` to initialize an instance of the Wagon class. And then you'll set the capacity of the particular wagon you've assigned to a variable.
  Wagon.passengerList = [];
  console.log("made wagon with capacity" + Wagon.capacity )
    }

//    Create a new wagon with an empty passenger list and the specified capacity.

hunt= function(){ // FIXME: This function will need you to pass in an argument, which will represent your traveler, so that the function knows WHO is hunting. The NewLine path says it expects a syntax like `hunt(traveler)`. You can do it without passing in the particular traveler, but you'd have to make the hunt function a method assigned to a hunt property on the Traveler object, so that all travelers can do something like `traveler4.hunt()`. Either way would be fine. The latter would be closer to best practice. The former would be matching the NewLine requirement (which is totally fine for right now). Pick whichever you're comfortable with at the moment.

console.log("initial food:" + Traveler.food);  // FIXME: Remember: you'll want to be checking the `food` property of the particular traveler, not of the Traveler class object itself. As I said above, you'll either need to pass in the particular traveler as an argument, or you'll need to make the `hunt()` a method attached to the Traveler class object -- whichever you're comfortable doing right now.
let foodIncrease = Math.random() < 0.5 ? true : false;
console.log("increase by 100 percent is" + this.foodIncrease);

if (this.foodIncrease) {

  Traver.food = Traver.food * 2; // NOTE: This would throw an error "Traver is not defined". Just a simple misspelling. But as above, you won't actually want to be checking the Traveler class object's food property.
}
  else {

    Traveler.food = Traveler.food * 1.5;
  }

  console.log("increase by 100 true or false?" + foodIncrease);
  console.log("final food is " + Traveler.food + " for " + Traveler.name);

}


  //  eat(traveler)
//Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.
    eat= function(){ // FIXME: Same issue as with `hunt()`

    let foodStart = Traveler.food;
    newfood = foodStart - (foodStart * .20);
    console.log ("eat function food starts at " + Traveler.food + " eat food ends at " + newfood)
    if (this.food != 20)
      {
      Traveler.unhealthy = false;
      }

  }

  //Add a travelerto a wagon
  join = function(wagon, traveler){ // FIXME: This is what you want `eat()` and `hunt()` to look like, only without the `wagon` argument.

    if (Wagon.capacity != 0){
      // FIXME: Nothing is happening here yet, which you probably know.
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
