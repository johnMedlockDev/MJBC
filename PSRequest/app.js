document.title = "Async Request";

// async function get3Pokemon() {
//   //   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   //   console.log(poke1.data);
//   //   Sequential Requests
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   console.log(poke1.data);
//   console.log(poke2.data);
// }
// get3Pokemon();

// async function get2Pokemon() {
//   // Parallel Requests
//   //   better if your request aren't related
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   console.log(poke1.data);
//   console.log(poke2.data);
// }
// get2Pokemon();

async function get2Pokemon() {
  // Parallel Requests
  //   better if your request aren't related
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const results = await Promise.all([prom1, prom2]);
  //   console.log(results[0].data.name);
  for (result of results) {
    console.log(result.data.name);
  }
}
get2Pokemon();
