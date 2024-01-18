const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require("dotenv").config();


// app first configuration

const app = express();
const port = process.env.PORT || 3000;
const server = process.env.SERVER || "localhost";

app.set('views engine',"ejs");
app.set('views', path.join(__dirname,'src','views'));
app.set('public',express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
console.log(path.resolve('public'));
// routes for application

app.get('/', (req, res) => {
  res.render('index.ejs')
})


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

// luanche server
app.listen(port, '127.0.0.1', () => {
  console.log(`Example app listening at http://${server}:${port}`)
});
