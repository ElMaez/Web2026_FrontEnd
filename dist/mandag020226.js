// Excercise 1:
// Create a typescript function that takes first name and last nameas
// 2 parameters and uses console.log() to output the person's name.
// Check that it works and is printed correctly.
// over complicated
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Person;
}());
var person1 = new Person("Layla", "noget");
console.log(" with constructor", person1);
//simplified?
function SimplePerson(firstname, lastname) {
    return firstname + " " + lastname;
}
var nameResult = SimplePerson("Hello", "World");
console.log("simplified", nameResult);
//Excercise 2:
// Create a typescript function that calculates the area of a rectangle.
// The function should return the result. Test that it works.
function Rectangle(width, length) {
    //let result = width * length;
    //return result;
    return width * length;
}
var rectangleResult = Rectangle(2, 3);
console.log("rectangle Area", rectangleResult);
//Excercise 3:
//Create a typescript function that takes speed and time as 2 parameters and calculates and returns the distance.
//Use the function to test that it works by using the 'log' again.
// Print out "You have travelled *x* km" where *x* is replaced by the result from the function.
function Distance(speed, time) {
    return speed * time;
}
var distanceResult = Distance(3, 3);
console.log("You have travelled" + " " + distanceResult + " " + "km");
//# sourceMappingURL=mandag020226.js.map