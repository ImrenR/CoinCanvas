import "./scss/style.scss"; // we add sass package to make connet sass codes automaticly, this one of benefits of vite and node.js

// console.log("olaaaaa")

const form = document.querySelector("header form"); //we can use form instead input since form submits as well.
// console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("form triggered"); //after we used preventDefault we prevent form from submitting

  getInputVal(); // when we trigger form by submittin this function has to be run, below we open that function
  form.reset(); // to clean the data inside the form
});

const getInputVal = () => {
  // console.log(input.value) // when we click on "search" the button triggered and showed the value we entered on console (dont forget we added .value)
  const input = document.querySelector("header form input").value ;
  //  console.log(input)
   if (!input.trim()) { // if you leave spacevand run this button still be working to prevent this we add trim()
    alert("You cant leave this empty")
   } else {
    console.log(input)
   }





};
