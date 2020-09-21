"use strict";

const ft_btn = document.querySelector(".footer__btn");
const ft_input = document.querySelector(".footer__input");
const list = document.querySelector(".list");
const middle = document.querySelector(".middle");

function enterkey() {
  // html input onkeydown="enterkey();"
  if (window.event.keyCode == 13) {
    // 엔터키가 눌렸을 때 실행할 내용
    handleFtbtn();
  }
}

function handleDel(event) {
  const del_node = event.target.parentElement;
  del_node.remove();
}

function create_item() {
  const new_li = document.createElement("li");
  const new_span = document.createElement("span");
  const new_del = document.createElement("button");

  new_span.setAttribute("class", "list__span");
  new_del.setAttribute("class", "list__del");

  const temp = ft_input.value;

  new_span.innerHTML = temp;
  new_del.innerHTML = "del";
  list.appendChild(new_li);
  new_li.appendChild(new_span);
  new_li.appendChild(new_del);
  // new_del.addEventListener("click", handleDel); // 이벤트 위임으로 구현해보기

  new_li.scrollIntoView({ block: "center" });

  ft_input.value = "";
  ft_input.focus(); // 없어도 되네? 뭐지?
}

function handleFtbtn(event) {
  if (ft_input.value == "") return;
  create_item();
}

function middle_click(event) {
  if (event.target.nodeName === "BUTTON") {
    // 이벤트 위임
    console.log("delete button clicked");
    event.target.parentElement.remove();
  }
}

ft_btn.addEventListener("click", handleFtbtn);
middle.addEventListener("click", middle_click);
