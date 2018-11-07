const brain = require('brain.js');

const config = {
  hiddenLayers: [10, 10]
};

const LSTM = brain.recurrent.LSTM;
const net = new LSTM(config);

net.train([
  { input: 'I feel great about the world!', output: 'happy' },
  { input: 'The world is a terrible place!', output: 'sad' },
]);

const outputs = [
  net.run('I feel great about the world'), // 'happy'
  net.run('I feel great'),                 // 'happy'
  net.run('great'),                        // 'happy'
  net.run('This is terrible')              // 'sad'
]

outputs.map((output, index) => console.log(`Output ${index + 1}`, output));