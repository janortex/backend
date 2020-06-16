const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use('/assets',express.static('assets',{
  etag: true,
  maxAge: '1m'
}));

app.get('/',function(req,res){
  //res.send(`Hola ${req.query.name}`);
  /*res.sendFile('index.html',{
    root: __dirname
  });
  */
  res.render('index');
});

app.post('/',function(req,res){
  res.send(`Hola ${req.query.name}`);
});

app.listen(3000,()=> console.log(`Started server at http://localhost:3000`));
