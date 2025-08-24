import "./scss/style.scss";

// console.log("olaaaaa")

const form = document.querySelector("header form");
// console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form triggered"); //after we used preventDefault we prevent the form from submitting

  getInputVal();
});

const getInputVal = () => {
  const input = document.querySelector("header form input");
  // console.log(input) // when we click on "search" the button triggered
};
