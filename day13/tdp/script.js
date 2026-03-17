/**
 * 1. 할 일 추가 함수
 */
function addTodo() {
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    const text = input.value.trim();

    if (text === "") {
        alert("내용을 입력해주세요!");
        return;
    }

    // 한 줄(li) 생성
    const li = document.createElement("li");

    // 체크박스 생성 및 기능 연결
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    };

    // 텍스트(span) 생성
    const span = document.createElement("span");
    span.textContent = text;

    // 개별 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };

    // li에 자식 요소들 조립
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // ul(리스트 바구니)에 최종 추가
    list.appendChild(li);

    // 입력창 초기화
    input.value = "";
    input.focus();
}

/**
 * 2. 전체 삭제 함수
 */
function clearAll() {
    if (confirm("정말로 모든 목록을 삭제하시겠습니까?")) {
        const list = document.getElementById("todo-list");
        // 리스트(ul) 안의 모든 내용을 비워버립니다.
        list.innerHTML = ""; 
    }
}

/**
 * 3. 엔터키 지원 기능
 */
document.getElementById("todo-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTodo();
    }
});