"use strict";

const button = document.getElementById("button-id");
button.addEventListener("click", function () {
  this.innerHTML = "クリック済みです!";
  this.setAttribute("disabled", true);
});
