"use strict";

const button = document.getElementById("disabled-button");
button.addEventListener("click", function () {
  this.innerHTML = "クリック済みです!";
  this.setAttribute("disabled", true);
});
