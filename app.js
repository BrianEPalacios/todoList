const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

///////////////////// Home page / Root ///////////////////////////
app.get("/", function(req, res){
  /// calling our module date.js /////
  const day = date.getDate();
  //res.render looks in folder called views for list, I get my tag and send
  // it the variable day
  //previously had sent day[currentDay]
  res.render("list", {listTitle: day, newListItems: items});
});
app.post("/", function(req, res){
  const item = req.body.newItem;
  if (req.body.list === 'Work'){
    workItems.push(item);
    res.redirect("/Work");
  }else {
    items.push(item);
    res.redirect("/");
  }
});
//////////////////////// Work list page /////////////////////////////////
app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems})
});
// app.post("/work", function(req, res){
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
