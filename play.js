//First few parts
/*

const name = 'Don';
let age = 29;
const hasHobbies = true;

age = 30;


const summarizeUser = (userName, userAge, userHasHobbies) => {
	return (
		'Name is ' + 
		userName + 
		', age is ' + 
		userAge + 
		', and the user has hobbies: ' +
		userHasHobbies
	);
}

//const add = (a, b) => a + b;
//const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

//console.log(add(4, 8));
//console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));

*/

// Objects, properties, and methods 

const person = {
	name: 'Don',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name);
	}
};

const printName = ({name}) => {
	console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);

//const coppiedPerson = {...person};
//console.log(person);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/*
//for (let hobby of hobbies){
//	console.log(hobby)
//}
//console.log(hobbies.map(hobby => 'Hobby: hobby'));
//console.log(hobbies);
const coppiedArray = [...hobbies];
console.log(coppiedArray);


const toArray = (...args) => {
	return args;
}

console.log(toArray(1, 2, 3, 4));
*/

















