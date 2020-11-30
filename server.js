
// Modules
const express = require("express");
const path = require('path');

const app = express();

// Configuration 
app.set('views', path.join(__dirname + 'views'));

app.use(express.static('static'));


// Routing
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login/index.html");
  console.log("Accediendo al login");
  console.dir(res.headersSent);
});


const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
