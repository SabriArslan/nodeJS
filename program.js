var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hello, World!");
});
app.get("/api/test", function(req, res){
	res.send("success");
});

app.listen(3000);
console.log("Server ready...");
