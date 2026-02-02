// Excercise 1:
// Create a typescript function that takes first name and last nameas
// 2 parameters and uses console.log() to output the person's name.
// Check that it works and is printed correctly.

// over complicated
class Person {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
let person1 = new Person("Layla", "noget");
console.log(" with constructor", person1);

//simplified?
function SimplePerson(firstname: string, lastname: string): string {
  return firstname + " " + lastname;
}
const nameResult = SimplePerson("Hello", "World");
console.log("simplified", nameResult);

//Excercise 2:
// Create a typescript function that calculates the area of a rectangle.
// The function should return the result. Test that it works.
function Rectangle(width: number, length: number): number {
  //let result = width * length;
  //return result;
  return width * length;
}
const rectangleResult = Rectangle(2, 3);
console.log("rectangle Area", rectangleResult);

//Excercise 3:
//Create a typescript function that takes speed and time as 2 parameters and calculates and returns the distance.
//Use the function to test that it works by using the 'log' again.
// Print out "You have travelled *x* km" where *x* is replaced by the result from the function.

function Distance(speed: number, time: number): number {
  return speed * time;
}
const distanceResult = Distance(3, 3);
console.log("You have travelled" + " " + distanceResult + " " + "km");
