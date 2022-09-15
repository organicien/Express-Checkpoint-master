const express = require('express');
const app = express();
const port = 4000;
const hbs = require('hbs');
app.listen(port, (err) => {
    err ? console.log(err) : console.log('the server is running in port 4000')
})
const myLogger = (req, res, next) => {
    let time = new Date();
    if (
        time.getDay() <= 5 &&
        time.getDay() >= 0 &&
        time.getHours() <= 16 &&
        time.getHours() >= 9
    ) {
        next();
    } else res.render("closed.hbs", { time: time.toUTCString() });
};
app.use(myLogger);
app.set("view-engine", hbs);

app.use(express.static("styles"));

app.get("/Home", (req,res) => {
    res.render("Home.hbs", {
        image: "images/Music.jpg",
        style : "CSS/style.css",
    });
});

app.get("/Services", (req,res) => {
    res.render("Services.hbs", {
        image:"images/Music.jpg",
        style: "CSS/style.css",
    });
});

app.get("/contact", (req,res) => {
    res.render("contact.hbs" , {
        image:"images/Music.jpg",
        style:"CSS/style.css",   
    });
});

app.get("/closed", (req,res) => {
    res.render("closed.hbs");
});
 