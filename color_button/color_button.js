"use strict";

const colorButton = document.querySelectorAll(".button");
const listColor = document.getElementById("list-color");

// ボタンクリック時にカードに適用されている色名(実際にはコンテンツの値)を表示する関数
const displayButtonsColor = function () {
  let item = document.createElement("li");
  item.innerHTML = this.innerHTML;
  listColor.appendChild(item);
};

for (let i = 0; i < colorButton.length; i++) {
  colorButton[i].addEventListener("click", displayButtonsColor);
}
