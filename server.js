// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db			 = require('./server/config/db');
const path			 = require("path"); 

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.use('/libs', express.static(path.join(__dirname, 'node_modules')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/tests', express.static(path.join(__dirname, 'tests')));




MongoClient.connect(db.url, (err, database) => {
  // Make sure you add the database name and not the collection name
  this.db = database.db("work-manager-test")
  require('./server/app/routes')(app, this.db);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})