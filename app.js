const cars = ["Volvo", "Bmw", "Audi"];

const realCars = [
  { id: 1, brand: "Volvo", model: "XC60", year: "2021", country: "Swedish" },
  { id: 2, brand: "BMW", model: "320d", year: "2020", country: "German" },
  { id: 3, brand: "Audi", model: "A4", year: "2019", country: "German" },
];

//
//array.foreach() - iterates over an array and performs an operation for each iteration
//

cars.forEach((car) => {
  if (car === "Volvo") {
    alert(`${car} is swedish`);
  } else {
    alert(car + " is not swedish");
  }
});

//
//array.map() - Return an array of values based on another array
//

//Iterates over cars and set every value to uppercase and pushes them into a new array
//which is returned and set to the const carsInUpperCase
const carsInUpperCase = cars.map((car) => {
  return car.toUpperCase();
});

//iterates over realCars-array and pushes the model property of each iterated value to a new array
//which gets returned and set to the const germanCars
const carModels = realCars.map((car) => {
  return car.model;
});

//
//array.filter() - Return an array of filtered values based on another array
//

//iterates over realCars-array and pushes all values that has the property country: "German" to a new array
//which gets returned and set to the const germanCars
const germanCars = realCars.filter((car) => {
  return car.country === "German";
});

//oneline arrow function example of previous example
const swedishCars = realCars.filter((car) => car.country === "Swedish");

//a new cars array to be used in code below
let filterableCars = [
  { brand: "Volvo", model: "XC60" },
  { brand: "BMW", model: "320d" },
  { brand: "Audi", model: "A4" },
];

//function that filter the filterableCars array based on the carBrand parameter, we iterate over filterableCars
//and pushes every array item that doesnt contain the property brand being equal to the carBrand parameter to a new array
//which then replaces the value of the let filterableCars, after this we access the html-element with the id car-list and
//sets its innerHTML to a string based on the filterableCars array by mapping over the array and returning
//a <p>-element for every iteration before converting the array into a string with the join()-method
const removeCar = (carBrand) => {
  filterableCars = filterableCars.filter((car) => car.brand !== carBrand);
  document.getElementById("car-list").innerHTML = filterableCars
    .map((car) => `<p onclick="removeCar(this.innerHTML)">${car.brand}</p>`) //the <p>-element contains an onclick event which calls removeCar() taking the elements innerHTML asan argument
    .join("");
};

//accesses the html-element with the id car-list and sets its innerHTML to a a string based on the filterableCars array
//by mapping over the array and returning  a <p>-element for every iteration before converting the array into a
//string with the join()-method
document.getElementById("car-list").innerHTML = filterableCars
  .map((car) => `<p onclick="removeCar(this.innerHTML)">${car.brand}</p>`) //the <p>-element contains an onclick event which calls removeCar() taking the elements innerHTML asan argument
  .join("");

//
//array.reduce() - reduces an array of values to a single value, by adding each iterated value to a total held by the functions first parameter
//

const numbers = [1, 2, 3, 4, 5];

//iterates over the array number and adds the value of each iteration (number) to a total (sumOfNumbers)
//before it's returned and set to the const sum
const sum = numbers.reduce((sumOfNumbers, number) => {
  return sumOfNumbers + number;
});

//an array representing a webshop basket of diffrent items
const basket = [
  { name: "Chips", price: 20 },
  { name: "Pasta", price: 30 },
  { name: "cola", price: 15 },
];

//accesses the html-element with the id products and sets its innerHTML to a a string based on the basket array
//by mapping over the array and returning  a <p>-element for every iteration before converting the array into a
//string with the join()-method
document.getElementById("products").innerHTML = basket
  .map(
    (product) =>
      `<p>product: ${product.name}<br> price: ${product.price} kr</p>`
  )
  .join("");

//iterates over the basket array and returnes a new array with only the values of each items price property
const productPrices = basket.map((product) => product.price);

//accesses the html-element with the id total-price and sets its innerHTML to a a string containing a variable that
//holds the returned result of the productPrices array being reduced into a sum of all its values
document.getElementById("total-price").innerHTML = `${productPrices.reduce(
  (totalPrice, price) => {
    return totalPrice + price;
  }
)} kr`;

//
//array.some() - iterates over an array and returnes true or false based on if any of its values meet a certain condition
//

const fruits = ["Pear", "Orange", "Banana"];

//iterates over the fruits array and returnes true if any of the values in the array is equal to "Apple"
console.log(
  fruits.some((fruit) => {
    return fruit === "Apple";
  })
);

//a function with an if condition that evaluates to true if any of the values of the fruits array is
//equal to the passedFruit parameter, if so we alert "That fruit exists" else if the expression evaluates to false
//it proceeds to its else which alerts "Test another fruit"
const checkFruits = (passedFruit) => {
  if (fruits.some((fruit) => fruit === passedFruit)) {
    alert("that fruit exists");
  } else {
    alert("Test another fruit");
  }
};

//calling the checkfruits function supplying "Kiwi" as an argument
checkFruits("Kiwi");

//
//sorting arrays
//

const stringsArray = ["Apple", "Orange", "Banana"];

const numbersArray = [47, 667, 2709, 923, 1000000, 5];

const objectsArray = [
  { name: "Christian", age: 31 },
  { name: "Adam", age: 10000 },
  { name: "Hans", age: 70 },
];

console.log(stringsArray.sort());

console.log(
  numbersArray.sort((a, b) => {
    return a - b;
  })
);

/*var numArray = new Float64Array([140000, 104, 99]);
numArray = numArray.sort();
console.log(numArray);*/

const byAge = objectsArray.sort((a, b) => a.age - b.age);

const byName = objectsArray.sort((a, b) => {
  let x = a.name.toUpperCase();
  let y = b.name.toUpperCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log(byName);

console.log(byAge);
