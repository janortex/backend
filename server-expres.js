const express = require('express');

const app = express();

app.get('/',function(req,res){
  res.send('Hola desde Express :D')
});

app.listen(3000);
