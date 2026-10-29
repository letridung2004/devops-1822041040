document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const button = document.getElementById("helloButton");
  const message = document.getElementById("message");

  if (year) year.textContent = new Date().getFullYear();

  if (button && message) {
    button.addEventListener("click", () => {
      message.textContent = "Cảm ơn bạn đã ghé thăm website của mình!";
    });
  }
});
