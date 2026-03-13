const STAR = "*";

const getPromptInput = () => {
    let input;
    let isNotValid = true;
    
    while (isNotValid) {
        // 1. 사용자에게 물어보기
        let inputStr = prompt("출력할 별 갯수를 입력하세요.");
        
        // 만약 취소를 누르면 그냥 끝내기
        if (inputStr === null) return null;

        input = Number(inputStr);

        // 2. 숫자인지, 그리고 1~10 사이인지 꼼꼼히 검사하기!
        if (isNaN(input) || input < 1 || input > 10) {
            alert("Invalid input! Enter a number between 1 and 10.");
            console.log('오류');
            continue; // 다시 물어보러 가기
        } else {
            isNotValid = false; // "통과!" 이제 반복문 나가기
        }
    }
    return input;
}

// 3. 별을 그려주는 함수 완성하기
function printStar(count) {
    if (count === null) return; // 취소했을 땐 아무것도 안 함
    
    // 별(*)을 count 숫자만큼 반복해서 출력해!
    console.log(STAR.repeat(count));
}

const input = getPromptInput(); // 숫자를 받고
printStar(input);               // 별을 그려요!