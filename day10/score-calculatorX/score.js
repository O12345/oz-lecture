let input = prompt("점수를 입력하세요.");
// console.log(input);
let number = Number(input)

var finalScore = number + 5;
console.log("Final Score:", finalScore)

// const finalScore = maxScore;
if (finalScore >= 100) {
    grade = "S";
    console.log("Grade:", "S");
} else if (finalScore >= 90) {
    grade = "A";
    console.log("Grade:", "A");
} else if (finalScore >= 80) {
    grade = "B";
    console.log("Grade:", "B");
} else if (finalScore >= 70) {
    grade = "C";
    console.log("Grade:", "C");
} else if (finalScore >= 60) {
    grade = "D";
    console.log("Grade:", "D");
} else {
    grade = "F"
    console.log("Grade:", "F");
}

let passFail = (finalScore >= 60) ? "Pass" : "Fail";
console.log("Status:", passFail)
// if (finalScore >= 60) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

switch (grade) {
    case "S":
        console.log("Message:", "Super!!");
        break;
    case "A":
        console.log("Message:", "Excellent work!");
        break;
    case "B":
        console.log("Message:", "Good job!");
        break;
    case "C":
        console.log("Message:", "Satisfactory performance.");
        break;
    case "D":
        console.log("Message:", "Needs improvement.");
        break;
    default:
        console.log("Message:", "Please try harder!");
        break;
}