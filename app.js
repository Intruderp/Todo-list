const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var items=["submit the feedback form","Complete the remaining assignments"];                                       //empty array=>empty to-do list

app.get("/", function (req, res) {
    var today = new Date();

    var options = { weekday: 'long', month: 'long', day: 'numeric' };

    var day = today.toLocaleDateString("en-us", options);

    res.render("list", { day: day ,items:items});
});



app.post("/", function (req, res) {
    if(req.body.newItem!="")
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {                                      //for both locally and heroku
    console.log("server is running on port 3000");
});
