"use strict";

const addButton = document.getElementById("button-add");
const removeButton = document.getElementById("button-remove");
const clearButton = document.getElementById("button-clear");
const todoList = document.getElementById("todo-list");

// Todoアイテムの追加
addButton.addEventListener("click", function () {
  // Todoリストのアイテムを生成する
  const todoListItem = document.createElement("li");
  todoListItem.innerHTML = "Todoアイテム";
  // アイテムをTodoリストに追加する
  todoList.appendChild(todoListItem);
});

// Todoアイテムの削除
removeButton.addEventListener("click", function () {
  // 末尾のアイテムから順に削除する
  todoList.removeChild(todoList.lastChild);
});

// すべてのTodoアイテムを削除
clearButton.addEventListener("click", function () {
  //すべてのアイテムを削除 : Todoリストの要素がなくなるまで実行
  while (todoList.lastChild) {
    todoList.removeChild(todoList.lastChild);
  }
});
