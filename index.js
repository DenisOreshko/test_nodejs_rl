const http = require('http');
const PORT = 3000;
const brain = require('brain.js')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 5,
    hiddenLayers: [15,25,25],
    outputSize: 5
  });
  res.end('Node js Railway 1.6.1!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
