let message = "Hello World!";
console.log(message);

// a = is always a number b = is always a number  then : returns always a number.
function add(a: number, b: number): number {
  return a + b;
}

// Never use js 'var' since it's old and only works globally, which sucks because you want the posibility of scoped.
//this file transpiles Typescript into an older JS version which uses var, which is not recommendable, but this is just a simple exercise.

// here I am creating a constant called result
// It is populated with the result og calling the function ass with parameters
// 5 and 7
const result = add(5, 7);
console.log(result);

class Cat {
  catName: string;
  gender: string;
  species: string;
  color: string;
  birthdate?: Date;

  constructor(
    catName: string,
    gender: string,
    species: string,
    color: string,
    birthdate?: Date,
  ) {
    this.catName = catName;
    this.gender = gender;
    this.species = species;
    this.color = color;
    this.birthdate = birthdate;
  }
}
// here i am using the constructor (the template) to create cats.
let myCat1 = new Cat("Whiskers", "Female", "Main Coon", "White");
let myCat2 = new Cat("Burney", "Male", "Sphinx", "Beige");
let myCat3 = new Cat("noget", "Male", "2", "Beige", new Date(2026, 0, 1));
console.log("myCat1", myCat1, "myCat2", myCat2, "myCat3", myCat3);

let cat = { name: "Charlie", gender: "Male", species: "Maine Coon", color: "" };
cat.color = "Brown";
console.log(cat);

//destrukturing
const { catName, gender, species, color } = myCat2;
console.log("destrukturing", catName);

//Arrays
let numbers: number[] = [1, 5, 3, 8, 3];
numbers.push(5);
console.log(numbers);

let people = [];
people.push({
  firstname: "Christian",
  lastname: "Kirschberg",
  email: "kirs@cphbusiness.dk",
});
people.push({
  firstname: "Mathias",
  lastname: "Nielsen",
  email: "mtnl@cphbusiness.dk",
});
console.log(people);
