// You should train your network in order to recognize speeches
// as being happy or sad.
// Use LSTM for this example with two hidden layers of 20 neurons each.

const brain = require('brain.js');

const outputs = [
  net.run('I feel great about the world!'), // 'happy'
  net.run('I feel great!'),                 // 'happy'
  net.run('great'),                         // 'happy'
  net.run('I wanna die.'),                  // 'sad'
  net.run('This is terrible')               // 'sad'
]

outputs.map((output, index) => console.log(`Output ${index + 1}`, output));