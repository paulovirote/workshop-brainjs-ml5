const brain = require("brain.js");

const LSTM = brain.recurrent.LSTM;
const net = new LSTM();

const mathProblems = [];

net.train(mathProblems, { log: true, errorThresh: 0.03 });

mathProblems.forEach(problem => {
  const input = `${problem.split("=")[0]}=`;
  const output = net.run(input);
  console.log(input + output);
});
