/******************************************************
 * Filename: complexExample.js
 * Description: A complex example demonstrating advanced
 * JavaScript techniques and coding practices.
 ******************************************************/

// --- Utility Functions ---
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --- Complex Code Example ---

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

async function main() {
  try {
    // Data initialization
    const people = [
      new Person("John", 30),
      new Person("Alice", 25),
      new Person("Bob", 40),
      new Person("Emily", 35)
    ];

    const colors = ["red", "blue", "green", "yellow"];

    // Some complex iterative operations
    for (let i = 0; i < 10; i++) {
      const randomIndex = getRandomInt(0, people.length - 1);
      const randomPerson = people[randomIndex];
      
      console.log(`Iteration ${i + 1}:`);
      randomPerson.sayHello();
      
      await sleep(1000);
    }

    // Advanced data manipulation
    const filteredPeople = people.filter(person => person.age > 30);
    const colorMapping = filteredPeople.map((person, index) => ({
      name: person.name,
      color: colors[index % colors.length]
    }));

    console.log("Filtered People:");
    console.log(filteredPeople);

    console.log("Color Mapping:");
    console.log(colorMapping);

    // More complex tasks
    const flattenMapping = colorMapping.reduce((accumulator, current) => {
      accumulator[current.name] = current.color;
      return accumulator;
    }, {});

    console.log("Flattened Color Mapping:");
    console.log(flattenMapping);

    // Calling a complex API
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();

    console.log("Fetched Data:");
    console.log(data);

    // Complex error handling
    if (!data.success) {
      throw new Error("Failed to fetch data!");
    }

    console.log("Example code execution completed successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Program entry point
main();