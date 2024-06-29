// Question 1: Given an array of numbers, use the map function with an arrow function to square each element of the array.
const numbers = [1,2,3,4,5,6,7,8,9,0];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// Question 2: Write a JavaScript function that takes a student's score as a parameter and return their grade (A,B,C,D, or F) using a series of ternary operators...
function getGrade(score) {
    return  score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
}
console.log(getGrade(85));

// Question 3: Create a object representing a car with properties like Company name, model, and year. Write a function to change the car year property. Also use object destructuring to extract and print the car Model and Year.
let car = {
    companyName : 'Rolls-Roycs',
    model : 'GHOST',
    year : 2023,
}
function changeYear(carObject, newYear){
    carObject.year = newYear;
}
changeYear(car, 2024);
const {model, year} = car;
console.log('Car Model : '+model+' Year : '+year);

// Question 4: Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
const isPrime = num =>{
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}
const numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const primeNumbers = numbers2.filter(num => isPrime(num));
console.log(primeNumbers);

// Question 5: State different use cases of map, filter and reduce functions.
//Map : Transforming each element of an array into something else.
//Filter : Selecting elements from an array based on a condition.
//Reduce : Aggregating elements of an array into a single value.

// Question 6: Write an asynchronous function using async-await to fetch data from an API and log the result. (use JSONPlaceholder API).
const fetchData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch(e){
        console.log('Error fetching data : ',e);
    }
};
fetchData();

// Question 7: Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the persons phone number, even if the contact property is missing.
const person = {
    name : 'Rohit Patil',
    address : {
        city : 'Mumbai',
        zipcode : '400075'
    }
};
const phoneNumber = person.contact?.phone;
console.log('Phone Number:', phoneNumber);
