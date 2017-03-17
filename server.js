const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const model = require("./models/registration");
const model2 = require("./models/address");
const routes = require('./routes/routes');

app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/controllers'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', routes);

app.listen(app.get("port"), () => {
	console.log("Server started on port " + app.get("port"));
});
