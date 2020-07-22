const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; // 나중에 내용 추가

function saveToDos() {
  // toDos 배열을 LS에 저장한다
  // LS에는 string만 저장 가능
  // 그래서 object를 JSON 으로 만든 뒤 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // 어떤 버튼이 click됐는지 알기 위해 target 사용
  // console.log(event); // mouse event
  // console.log(event.target);
  const btn = event.target; // <button>del</button>
  const li = btn.parentNode; // <li id="1">...</li>
  toDoList.removeChild(li);
  // filter: 함수 돌리고, true인 것들만 배열로 return
  // todo.id는 number, li.id는 string이라서 parseInt 해준다
  const cleanToDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li"); // 비어있는 li 생성
  const delBtn = document.createElement("button"); // 비어있는 Button 생성
  const span = document.createElement("span"); // 비어있는 span 생성
  const newId = toDos.length + 1;
  delBtn.innerText = "del";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  // span과 button을 li안에 넣는다
  // 순서변경 가능
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); // toDos에 하나 push
  saveToDos(); // push 끝낸 뒤에 호출!
}

function handleSubmit(event) {
  // todo 적고 submit 하면 실행
  event.preventDefault(); // 기본동작 막고
  const currentValue = toDoInput.value; // submit 한 value
  paintToDo(currentValue);

  toDoInput.value = ""; // form input 입력했던거 초기화
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // JSON을 object로 다시 변환
    const parsedToDos = JSON.parse(loadedToDos);
    // foreach: 원소들마다 함수 실행
    parsedToDos.forEach((todo) => {
      paintToDo(todo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
