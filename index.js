const express = require("express");
 const sequelize = require('./database');
// const User = require('./User');

 sequelize.sync({ force: true }).then(() => console.log('db is ready'));

const app = express();

app.use(express.json());


app.listen(3000, () => {
  console.log("app is running");
});