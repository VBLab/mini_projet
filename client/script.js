var express = require("express");
var http = require("http");
var app = express();

http.Server(app).listen(80, () => console.log("Lecture du port 80"));
app.use("/", express.static(__dirname + "/../client"));