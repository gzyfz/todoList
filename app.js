const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["buy food","cook food","eat food"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs")
app.get("/",function(req,res){
	let today = new Date();
	let options = {
		day : "numeric",
		weekday : "long",
		month : "long"
	}
	let day = today.toLocaleString("en-US",options);
	res.render("index",{day :day, items: items});
})
app.post("/",function(req,res){
	let item = req.body.newItem;
	items.push(item);
	res.redirect("/");
})


app.listen(3000,function(){
	console.log("server running on port 3000");
})

