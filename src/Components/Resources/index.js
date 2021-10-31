import Header from "../Header/Header.js";

function index() {
  let arr = [];
  fetch("https://api.datamuse.com/words?rel_trg=photosynthesis&max=4")
    .then((res) => res.json())
    .then((data) => {
      return data.map((value) => {
        return arr.push(value.word);
      });
    });

  return <Header title="Free Resources" />;
}

export default index;
