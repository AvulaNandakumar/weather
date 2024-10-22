const request = require("request");
const express = require("express");
const app = express();
const path = require("path");
const {open}=require("sqlite");
const sqlite3=require("sqlite3");


const dbPath=path.join(__dirname,"data.db");
let db = null;
//starting server 
const initializingDBAndServer = async() => {
    try {
       db = await open({
            filename: dbPath, driver: sqlite3.Database,
        });
        app.listen(3000, () => console.log("server is running"));

    }
    catch (e) {
        console.log(e.message)
        process.exit(1);
    }
}

initializingDBAndServer();
//calling api
//app.use("/", express.static(path.join(__dirname, "/frontend")));
app.post("/cityname/:city/", async(req, res) => {
   let { city } = req.params;

    /////////////////////////////////////////////////////

    // const accessKey = "311e76a7dc052d20dbfa31225e764b1a";
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${accessKey}`;
    // request(url, (err, response) => {
    //  if (err) {
    //  console.log(err);
    //}
    //console.log(response.statusCode, response.statusMessage);
    //res.send(response.body);
    //});

    /////////////////////////////////////////////////////////////

const query=`insert into register(id,user_name,password) values (1,"${city}",1234)`;
const result=await db.run(query);
res.send(result);
});
app.get("/cityname",async(req,res)=>{
const query=`select * from register`;
const result=await db.all(query);
res.send(result);
});