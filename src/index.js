import express from "express";
import { add } from "./arithmetica";

const app = express();
const port = 3000;


app.get('/add/:n/:m', (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let sum = add(n, m);
  
  res.json(sum);
});

app.get('/sub/:number1/:number2', (req, res) => {
  const number1 = parseFloat(req.params.number1);
  const number2 = parseFloat(req.params.number2);
  const diff = number1 - number2;
  
  res.json({ result: diff });
});

app.get('/mul/:number1/:number2', (req, res) => {
  const number1 = parseFloat(req.params.number1);
  const number2 = parseFloat(req.params.number2);
  const product = number1 * number2;
  
  res.json({ result: product });
});

app.get('/div/:number1/:number2', (req, res) => {
  const number1 = parseFloat(req.params.number1);
  const number2 = parseFloat(req.params.number2);
  const coeff = number1 / number2;
  
  res.json({ result: coeff });
});


app.get('/', (req, res) => {
  res.send('Arithmetic service-Hello 222Worrrrld!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
