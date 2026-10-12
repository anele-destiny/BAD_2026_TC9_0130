//I am predicting that the code output would be that a=10 and b=20 because when we 
//declared b we used the let keyword that didn't strictly assign b to be equal to a i.e. 10
// let a = 10;
// let b = a;
// b = 20;
// console.log(a, b);

//On this section, i am predicting that the output of the code would be 40
//Because the value of userTwo was inherited from userOne's value
//I further believed that if we had only logged userOne we definitely gotten the same 
//datas contained in userOne's declaration
// let userOne = { name: "Amaka", age: 22 };
// let userTwo = userOne;
// userTwo.age = 40;
// console.log(userOne.age);

//Code Demarcation for .b)
console.log("==============================");

let userOne = {
    name: "Amaka",
    age: 22,
    address: {city: "Owerri", state: "Imo"}
}

//Fixing shallow copy using the spread operator
let userTwo = { ...userOne };
userTwo.age = 40; //Successfully keeps userOne.age unchanged

//Testing nested object mutation
userTwo.address.city = "Lagos"; //Effect change on userOne


console.log(userOne);
console.log(userTwo);