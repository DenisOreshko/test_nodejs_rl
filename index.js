const express = require('express')
const brain = require('brain.js')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
const net = new brain.recurrent.LSTMTimeStep({
  inputSize: 5,
  hiddenLayers: [15,25,25],
  outputSize: 5
});
function scaleDown(step, min, max){
  return {
      one: (step.one-min)/(max-min),
      two:(step.two-min)/(max-min),
      three:(step.three-min)/(max-min),
      four:(step.four-min)/(max-min),
      five:(step.five-min)/(max-min)
  };
}
function scaleUp(step, min, max){
  return {
      one: step.one*(max-min)+min,
      two: step.two*(max-min)+min,
      three: step.three*(max-min)+min,
      four: step.four*(max-min)+min,
      five: step.five*(max-min)+min
  };
}

app.use(bodyParser.json());
app.get('/', (req, res) => {  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Node js Railway 1.6.1 brain.js!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

