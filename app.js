const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo </h1> <h4>Message: Successfully deploy using AWS Ec2-code deploy and code pipeline</h4> <p>Version 5.0</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 200
    },
    {
      productId: '102',
      price: 300
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
