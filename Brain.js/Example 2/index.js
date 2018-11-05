const brain = require('brain.js');

const LSTM = brain.recurrent.LSTM;
const net = new LSTM();

const mathProblems = [];

net.train(mathProblems, { log: true, errorThresh: 0.03 });

for (let i = 0; i < mathProblems.length; i++) {
  const input = `${mathProblems[i].split('=')[0]}=`;
  const output = net.run(input);
  console.log(input + output);
}