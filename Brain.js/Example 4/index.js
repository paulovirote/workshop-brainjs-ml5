const brain = require("brain.js");

const config = {
  hiddenLayers: [15]
};

const net = new brain.recurrent.LSTM(config);
// const net = new brain.recurrent.RNN(config);

console.log("> Training data...");
net.train(
  [
    { input: "o louco bicho", output: "Faustão" },
    { input: "as 8 e 7", output: "Faustão" },
    { input: "porra meu", output: "Faustão" },
    { input: "tá pegando fogo", output: "Faustão" },
    { input: "quem sabe faz ao vivo", output: "Faustão" },
    { input: "olha essa video-cassetada", output: "Faustão" },
    {
      input: "o mundo é legal porque é uma bola se fosse duas seria um saco",
      output: "Faustão"
    },

    { input: "má oi", output: "Silvio Santos" },
    { input: "vem pra cá vem pra cá", output: "Silvio Santos" },
    { input: "vale dez reais", output: "Silvio Santos" },
    { input: "hihi", output: "Silvio Santos" },
    { input: "quem quer dinheiro", output: "Silvio Santos" },
    { input: "olha o aviãozinho", output: "Silvio Santos" }
  ],
  { log: true, iterations: 1000 }
);

const outputs = [
  net.run("o louco bicho"), // 1 'Faustão'
  net.run("tá pegando fogo"), // 2 'Faustão'
  net.run("é uma bola bicho"), // 3 'Faustão'
  net.run("porra olha essa video-cassetada"), // 4 'Faustão'
  net.run("são 8 e 7"), // 5 'Faustão'
  net.run("video-cassetada"), // 6 'Faustão'
  net.run("o mundo é um saco"), // 7 'Faustão'
  net.run("quem quer dinheiro"), // 8 'Silvio Santos'
  net.run("má oi aviãozinho"), // 9 'Silvio Santos'
  net.run("má oi hihi"), // 10 'Silvio Santos'
  net.run("quer dez reais") // 11 'Silvio Santos'
];

outputs.map((output, index) => console.log(`Output ${index + 1}`, output));
