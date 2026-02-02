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
//Array Exercises
//Create an array with 5 names. Print out the first element (name) using console.log()
var names = ["Hej", "med", "dig", "!", "?"];
console.log("array names index 0", names[0]);
//Use the indexOf function to get the index of a name that exists in your array.
console.log("indexOf dig", names.indexOf("dig"));
//Try the indexOf function with a name that does not exist. What is returned?
console.log("indexOf 'noget' that does not exist in array", names.indexOf("noget"));
//Use the push function to add a new name to the array of names, so you have 6 names in the array. 'log' the array to verify.
names.push("whua");
console.log(names);
//Use the slice function on the array, to create a new array with the first 3 names. 'log' the array to verify.
console.log(names.slice(3));
//Create 2 objects with firstname, lastname, email – values. Add the two objects to a new array.
// 'log' the array to verify. Also 'log' the first objects' email in a separate 'log'.
var peopleAnother = [];
peopleAnother.push({
    fistname: "FirstNavn1",
    lastname: "LastName1",
    email: "TotallyLegitEmail1",
});
peopleAnother.push({
    fistname: "FirstNavn2",
    lastname: "LastName2",
    email: "TotallyLegitEmail2",
});
console.log("add two objects with values into an Array", peopleAnother);
//Exercise: Student Grades Management
//Create a Student Class:
//Define a Student class with properties: name, id, and grades (an array of numbers).
var Student = /** @class */ (function () {
    function Student(id, name, grades) {
        this.id = id;
        this.name = name;
        this.grades = grades;
    }
    return Student;
}());
var student1 = new Student(1, "name1", [7, 4]);
//Add Grades:
//Write a method named addGrade that takes a grade (number) as parameter, and adds the grade to the student's grades array.
addGrade(grades);
{
    this.grades.push(7);
}
//Update Student Name:
//Write a function named updateStudentName that takes a new name as parameter and updates the student's name.
//Test the Functions:
//Create a student object.
//Add a few grades to the student.
//Update the student's name and print the updated object.
//# sourceMappingURL=mandag020226.js.map