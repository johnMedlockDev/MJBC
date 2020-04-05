document.title = "Fetch API";

const checkStatusAndParse = response => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

  return response.json();
};

const printPlanets = data => {
  // for (let planet of data.results) {
  //   console.log(planet.name);
  // }
  console.log("Loaded 10 more planets....");
  // const filmURL = data.results[0].films[0];
  // return fetch(filmURL);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  // const nextURL = data.next;
  // return fetch(nextURL);
  return Promise.resolve(data.next);
};

const fetchNextPlanets = url => {
  return fetch(url);
};
fetch("https://swapi.co/api/planets/")
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch(error => {
    console.log("Something went wrong with fetch");
    console.log(error);
  });
// fetch will not catch errors on the 404 || 500 pages of the api // Fetch will catch network errors
