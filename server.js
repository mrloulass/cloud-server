'use strict';

const express = require('express');

const app = express ();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
  res.status(200).send ('Hello from Elastic Beanstalk')
})

app.listen(PORT, ()=>{
  console.log(console.log(`Beanstalk app listening on, ${PORT}`));
});
