const student = { name: "Chidi", score: 50 };
student.score = 90;
console.log(student);
 
const grades = [1, 2, 3];
grades.push(4);
console.log(grades);
 
// student = { name: "Bola", score: 70 };

//Demarcating for b)
console.log("=====================");

const Student = {name: "Chidi", score: 50};

//Freezing the object to prevent any future modifications
Object.freeze(Student);

//Attempting to modify student score
Student.score = 90;

console.log(Student);