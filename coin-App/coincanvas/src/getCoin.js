// we will work here with modules, the function we call it in main.js ( getCoin()) means: "Hey! take this function and use it outside"
//! Important note : whenever we click to submit our value the result will come "works!" therefore we need to call input as parameter inside getCoin() ==> main.js!

import axios from "axios";
import displayCoin from "./displayCoin";

//? with fetch
// export const getCoin = (query) => {
//   console.log("works !", query); // this will work when we import this module file otherwise does not work !
//   const url = `https://api.coinranking.com/v2/coins?search=${query}`; // I defined the API in this URL as a variable ${query}

//   const options = {
//     headers: {
//       "x-access-token":
//         "coinranking80243c50e232ab1eeddadb0935e226d1e9661848afaed4c2", 
//   };
 
//   fetch(url, options) // change the link with our url
//     .then((response) => response.json())
    // .then((result) => console.log(result.data.coins[2]));
//     .then((result) => console.log(result))
// }; 

//? with async await

// const getCoin = async(query) => {
//   console.log("works !", query); 

//   const url =`https://api.coinranking.com/v2/coins?search=${query}`; 

//   const options = {
//     headers: {
//       "x-access-token":
//         "coinranking80243c50e232ab1eeddadb0935e226d1e9661848afaed4c2", 
//     },
//   };
//  try { // catch the error
//   const res = await fetch(url,options) 
//   const coinData = await res.json() 
//   console.log(coinData)
//  } catch (error) {
//   console.error("there is an error")
//  }
// }; 

//? with axios

const getCoin = async(query) => {
  // console.log("works !", query); 

  const url =`https://api.coinranking.com/v2/coins?search=${query}`; 

  const options = {
    headers: {
      "x-access-token":
        "coinranking80243c50e232ab1eeddadb0935e226d1e9661848afaed4c2", 
    },
  }; 
 const res = await axios(url,options) //data cekme islemleri async dur. burada json islemine gerek yoktur. otomatik olarak axios yapar
const coins = res.data.data.coins
 
 if (!coins.length) { //eger length 0 ise 
  alert("couldnt found coins")
  
 } else {
  // console.log(coins)
  
  displayCoin(coins)
 }
}; 

export default getCoin;













//? The difference between Axios and Fetch:
//*Axios
// A popular third-party HTTP client library for making requests.
// Works in both browsers and Node.js.
// Automatically transforms JSON data (no need to call .json()).
// Provides simpler syntax and built-in features like request/response interceptors, timeout handling, and error handling.
// Requires installation: //! npm install axios.
//* Fetch
// A built-in JavaScript API for making HTTP requests.
// Works in modern browsers (and Node.js with node-fetch).
// Returns a Promise that resolves to a Response object—you need to call .json() to parse data.
// Has fewer features out of the box (no interceptors, no automatic timeout).

