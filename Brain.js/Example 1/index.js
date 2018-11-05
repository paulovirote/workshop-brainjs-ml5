const brain = require('brain.js');

const config = {
  inputSize: 20,
  inputRange: 20,
  hiddenLayers: [20,20],
  outputSize: 20,
  learningRate: 0.01,
  decayRate: 0.999,
};

// create a simple recurrent neural network
const net = new brain.recurrent.RNN(config);

console.log('> Training data...');
net.train([]);

const outputs = [
  net.run([0, 0]),
  net.run([0, 1]),
  net.run([1, 0]),
  net.run([1, 1])
]

outputs.map(output => console.log(output));