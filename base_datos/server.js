const sqlite3 = require('sqlite3');
const express = require('express');
const Sequelize = require('sequelize');


const app = express();

const tasks = require('./controllers/tasks');

const sequelize = new Sequelize('proyecto-backend',null,null,{
  dialect: 'sqlite',
  storage: './proyecto-backend'
});
//let db = new sqlite3.Database('proyecto-backend');

app.set('view engine','pug');

app.post('/pendientes',function(req,res){
  //db.run(`INSERT INTO tasks(description) VALUES(?)`,req.query.description);
  res.send("insercion hecha");
});

app.get('/tasks',tasks.home);

/*db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255) )');*/

app.listen(3000,()=> console.log("Server Started"));

process.on('SIGINT',function(){
  console.log("Terminamos, saludos");
  //db.close();
  process.exit();
});
