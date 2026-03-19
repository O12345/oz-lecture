const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

// 1. 입력창 초기화 (내용 비우고 커서 올리기)
const resetTimerInput = () => {
  timerInput.value = "";
  timerInput.focus();
};

// 2. 디스플레이 초기화 (텍스트 및 색상)
const resetTimerDisp = () => {
  timerDisplay.innerText = "";
  timerDisplay.style.color = "black";
};

// 3. 초 표시
const showTimerSec = (sec) => {
  timerDisplay.innerText = `타이머: ${sec}초`;
};

// 4. 완료 메시지
const showTimerComplete = () => {
  timerDisplay.innerText = "타이머 종료!";
  setTimeout(() => {
      timerDisplay.innerText = "";
    }, 5000);
};

// 5. 에러 메시지 (빨간색)
const showTimerError = (message) => {
  timerDisplay.innerText = message;
  timerDisplay.style.color = "red";
};

// 6. 타이머 핵심 로직
const processTimer = (sec) => {
  showTimerSec(sec);
  
  const timer = setInterval(() => {
    sec -= 1;
    
    if (sec > 0) {
      showTimerSec(sec);
    } else {
      clearInterval(timer);
      showTimerComplete();
    }
  }, 1000);
};

// 7. 실행 함수 (검증 및 시작)
function handleClickTimer() {
  try {
    const value = timerInput.value;
    const time = Number(value);

    // 유효성 검사 (1~10 사이의 숫자인지 확인)
    if (isNaN(time) || value.trim() === "" || time < 1 || time > 10) {
      throw new Error("유효한 숫자(1-10)를 입력하세요!");
    }

    resetTimerDisp();
    processTimer(time);
    resetTimerInput(); // 시작 후 입력창 비우기

  } catch (error) {
    showTimerError(error.message);
    resetTimerInput(); // 에러 발생 시 입력창 비우기
  }
}

// --- 이벤트 리스너 등록 ---

// 클릭 이벤트
startTimer.addEventListener("click", handleClickTimer);

// 엔터키 이벤트 추가
timerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleClickTimer();
  }
});