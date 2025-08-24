// we will work here with modules, the function we call it in main.js ( getCoin()) means: "Hey! take this function and use it outside"

const getCoin = () => {
  console.log("works !");
}; // since we opened this function outside need to export it !

export default getCoin;
