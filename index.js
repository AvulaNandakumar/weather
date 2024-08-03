const request = require("request");
const express = require("express");
const app = express();

//starting server 
app.listen(3000, () => console.log("server is running"));

//calling api
app.get("/weather/:city/",(req, res) => {

    let { city } = req.params;
    const accessKey = "311e76a7dc052d20dbfa31225e764b1a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${accessKey}`;
     request(url, (err, response) => {
        if (err) {
            console.log(err);
        }
        console.log(response.statusCode, response.statusMessage);
        res.send(JSON.parse(response.body));
    });
});