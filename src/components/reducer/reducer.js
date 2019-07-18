import axios from "axios";

async function getUsers() {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=ce56fb84&t="
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

let movie = getUsers();

const reducer = (state = movie) => {
  return state;
};
console.log(movie);
export default reducer;
