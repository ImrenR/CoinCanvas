// we will work here with modules, the function we call it in main.js ( getCoin()) means: "Hey! take this function and use it outside"
//! Important note : whenever we click to submit our value the result will come "works!" therefore we need to call input as parameter inside getCoin() ==> main.js!

const getCoin = (query) => {
  console.log("works !", query); // this will work when we import this module file otherwise does not work !

  const url = `https://api.coinranking.com/v2/coins?search=${query}`; // I defined the API in this URL as a variable ${query}

  const options = {
    headers: {
      "x-access-token":
        "coinranking80243c50e232ab1eeddadb0935e226d1e9661848afaed4c2", //we got the second value from API key usage- cointranking website-generate API
    },
  };
 
  fetch(url, options) // change the link with our url
    .then((response) => response.json())
    .then((result) => console.log(result.data.coins[2]));
}; 

export default getCoin; // since we opened this function outside need to export it !
