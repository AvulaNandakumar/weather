const request = require("request");
const express = require("express");
const app = express();
const path=require("path");

//starting server 
app.listen(3000, () => console.log("server is running"));

//calling api

<<<<<<< HEAD
app.use("/",express.static(path.join(__dirname,"/frontend")));
=======
app.get("/",(req,res)=>res.send("enter city name as a path parameter to get weather information of the city."));
>>>>>>> 6f0789c163e26fcc48de3caa903b292215c8eda9
app.get("/:city/",(req, res) => {

    let { city } = req.params;
    const accessKey = "311e76a7dc052d20dbfa31225e764b1a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${accessKey}`;
     request(url, (err, response) => {
        if (err) {
            console.log(err);
        }
        console.log(response.statusCode, response.statusMessage);
        res.send(response.body);
    });
});
