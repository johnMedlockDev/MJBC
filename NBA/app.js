const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];

// // create container || ul
// const ulParent = document.createElement("ul");

// // loop over state
// for (let game of warriorsGames) {
//   // destructing this means you don't have to drill with game
//   const { homeTeam, awayTeam } = game;
//   // further destructoring
//   const { team: aTeam, points: aPoints } = awayTeam;
//   const { team: hTeam, points: hPoints } = homeTeam;

//   // define the element you want to make from the data
//   const gameLi = document.createElement("li");
//   // define what you want to place within the created element
//   // gameLi.innerText = `${awayTeam.team} @ ${homeTeam.team}`;

//   // console.log(awayTeam.team, homeTeam.team);

//   const teamNames = `${aTeam} @ ${hTeam}`;
//   // define string to display for obj
//   let scoreLine;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//   } else {
//     scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//   }
//   // define warriors team
//   const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
//   gameLi.classList.add(warriors.isWinner ? "win" : "loss");
//   // test if formated correctly
//   // console.log(scoreLine);

//   gameLi.innerHTML = `${teamNames} ${scoreLine}`;
//   // define where you want to append the element
//   ulParent.append(gameLi);
// }

// // prepend the container defined above to the body // used prepend because it will be before other eles (script tag)
// document.body.prepend(ulParent);

// refactor

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: aTeam, points: aPoints } = awayTeam;
  const { team: hTeam, points: hPoints } = homeTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;

  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
};

const gsSection = document.querySelector("#gs");
const houstonSection = document.querySelector("#hr");
const gsChart = makeChart(warriorsGames, "Golden State");
const hrChart = makeChart(warriorsGames, "Houston");

gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);
