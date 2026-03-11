let name = "sm";
console.log(name);

var mame = "sm"
console.log(name);

let boolean1 = 1 > 2;
let boolean2 = 1 < 2;
console.log("boolean1", boolean1);
console.log("boolean2", boolean2);

const date = 11;
console.log(date);

let escape1 = "이스케이프\n문자1";
console.log(escape1);

let escape2 = "이스케이프\t문자2";
console.log(escape2);

let myName = "sm";
let sentence1 = "나의 이름은 "+ myName + "입니다.";
let sentence2 = `나의 이름은 ${myName}입니다.`;
console.log(sentence1);
console.log(sentence2);

let hobbise = ["reading", "gaming", "coding"];
console.log(hobbise);

let string1 = "나의 이름은"
let string2 = "이번 달은"
let string3 = "저는 학생임이"
let string4 = "입니다."

let information = {
    name: "sm",
    month: 3,
    student: true
}

console.log("sentence1", string1 + information.name + string4);
console.log("sentence2", string2 + information.month + string4);
console.log("sentence3", string3 + information.student + string4);

console.log("typeof name", typeof name);
console.log("typeof month", typeof month);