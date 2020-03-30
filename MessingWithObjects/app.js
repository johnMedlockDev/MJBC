const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  569: "must use bracket notation // 569 is a string",
  "asdf asdf": "Still must use Braket notation"
};
// Objects are used to cluster data

console.log(fitBitData["569"]);
console.log(fitBitData["asdf asdf"]);
console.log(fitBitData.totalMiles);
// if you try to access keys that don't exist it will return undefined

// setting data

fitBitData.name = "John";
console.log(fitBitData.name);
fitBitData.totalMiles += 1;
console.log(fitBitData.totalMiles);

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88
  }
};

console.log((student.exams.final + student.exams.midterm) / 2);
