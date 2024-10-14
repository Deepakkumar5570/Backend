const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;

    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
   
    res.render("instagram.ejs",  {data });
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/roledic", (req, res) => {
    res.render("roledic.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
