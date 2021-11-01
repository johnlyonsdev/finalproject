const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../connect4.html'));
});

app.get('/js',function(req,res) {
    res.sendFile(path.join(__dirname, '../main.js'));
  });

const port = process.env.PORT || 4321

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})