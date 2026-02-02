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

//Array Exercises
//Create an array with 5 names. Print out the first element (name) using console.log()
let names: string[] = ["Hej", "med", "dig", "!", "?"];
console.log("array names index 0", names[0]);

//Use the indexOf function to get the index of a name that exists in your array.
console.log("indexOf dig", names.indexOf("dig"));

//Try the indexOf function with a name that does not exist. What is returned?
console.log(
  "indexOf 'noget' that does not exist in array",
  names.indexOf("noget"),
);

//Use the push function to add a new name to the array of names, so you have 6 names in the array. 'log' the array to verify.
names.push("whua");
console.log(names);

//Use the slice function on the array, to create a new array with the first 3 names. 'log' the array to verify.
console.log(names.slice(3));

//Create 2 objects with firstname, lastname, email – values. Add the two objects to a new array.
// 'log' the array to verify. Also 'log' the first objects' email in a separate 'log'.
let peopleAnother = [];
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

class Student {
  id: number;
  studentName: string;
  grades: number[]; // dette skal nok laves om til en Array

  constructor(id: number, studentName: string, grades: number[]) {
    this.id = id;
    this.studentName = studentName;
    this.grades = grades;
  }

  //Add Grades:
  //Write a method named addGrade that takes a grade (number) as parameter, and adds the grade to the student's grades array.

  addGrade(grade: number) {
    this.grades.push(grade);
  }
}
let student1 = new Student(1, "navn1", [4, 10]);

//Update Student Name:
//Write a function named updateStudentName that takes a new name as parameter and updates the student's name.

function updateStudentName(newStudentName: string): string {
  student1.studentName = newStudentName;
  return student1.studentName;
}

//Test the Functions:
//Create a student object.
//Add a few grades to the student.
//Update the student's name and print the updated object.
console.log(
  "test and running the method and function",
  student1.addGrade(7),
  updateStudentName("nyt navn"),
  student1,
);
