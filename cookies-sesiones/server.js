const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['hf65uilhv56uifd1v','sfoho66ehyfyubf56'],
}));

app.get('/',function(req,res){
  req.session.visits = req.session.visits || 0;
  req.session.visits ++;

  res.send(`${req.session.visits} visita(s)`);
});



app.listen(3000,()=> console.log(`Started server at http://localhost:3000`));
