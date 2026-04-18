const name = "Aki";
let age = 20;

const greet = (userName = "Guest") => {
    return `Hi, ${userName}!`;
};

const message = `${greet(name)} You are ${age} years old. Welcome to Student Information.`;

const student = {
    firstName: "Aki",
    lastName: "Secret",
    course: "BSIT"
};

const { firstName, lastName, course } = student;

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const [firstNum, secondNum, thirdNum] = num1;
const combinedNumbers = [...num1, ...num2];

const displayOutput = () => {
    return `
        ${message}
        <br>
        Student: ${firstName} ${lastName}
        <br>
        Course: ${course}
        <br>
        Destructured Array:
        ${firstNum}, ${secondNum}, ${thirdNum}
        <br>
        Numbers: ${combinedNumbers.join(", ")}
    `;
};

document.getElementById("output").innerHTML = displayOutput();