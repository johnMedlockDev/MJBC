document.title = "Axios";

// axios can make server and client side request // it also parses the data after getting a response unlike base fetch

const fetchNextPlanets = (url = "https://swapi.co/api/planets") => {
  return axios.get(url);
};
const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};
// axios
//   .get("https://swapi.co/api/planets")
fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("In Catch!");
    console.log(err);
  });
