//Array Exercises
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
people.forEach(person => console.log(person));
people.shift();
people.pop();
people.unshift("Matt");
people.push("Keira");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[1] === "Mary") {
        break;
    }
}
let copy = people.slice(2);
console.log(copy);
people = ["Greg", "Mary", "Devon"];
people [0] = "Matt"
people.splice(2, 1, "Elizabeth", "Artie");
people.push("Keira");
console.log(people)
let withBob = people.concat("Bob");
console.log(withBob)


//Object Exercises
let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
programming.languages.push("Go");
programming["difficulty"] = 7;
delete programming.jokes;
programming.isFun = true;
let updatedLanguages = programming.languages.map((lang, index) => `${index} = ${lang}`);
console.log(updatedLanguages);