import "./scss/style.scss"; // we add sass package to make connet sass codes automaticly, this one of benefits of vite and node.js

// console.log("olaaaaa")

const form = document.querySelector("header form"); //we can use form instead input since form submits as well.
// console.log(form)
const input = document.querySelector("header form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form triggered"); //after we used preventDefault we prevent the form from submitting

  getInputVal(); // we call a function to able to run input and enter our values into it.
});

const getInputVal = () => {
  // console.log(input.value) // when we click on "search" the button triggered and showed the value we entered on console (dont forget we added .value)
  
};
