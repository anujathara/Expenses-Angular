var express = require("express");
var bodyParser = require("body-parser");
var _sqlPackage = require("mssql");
const cors = require("cors");

//Initilize app with express web framework  
var app = express();

// var corsOptions = {
//     origin: "http://localhost:4000"
// };

// app.use(cors(corsOptions));

//To parse result in json format  
app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

//Here we will enable CORS, so that we can access api on cross domain.  
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Lets set up our local server now.  
var server = app.listen(process.env.PORT || 4000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//Set up your sql connection string, i am using here my own, you have to replace it with your own.  
var dbConfig = {
    user: "sa",
    password: "DhanuSQL*1",
    server: "DESKTOP-39UIVOB",
    database: "Construction",
    requestTimeout : 10000,
    connectionTimeout: 1500,
    options: {
        encrypt: false, // Use this if you're on Windows Azure
        instanceName: 'SQL2019EXPRESS'
    }
};

//Function to connect to database and execute query  
var QueryToExecuteInDatabase = function (response, strQuery) {
    //close sql connection before creating an connection otherwise you will get an error if connection already exists.  
    _sqlPackage.close();
    //Now connect your sql connection  
    _sqlPackage.connect(dbConfig, function (error) {
        if (error) {
            console.log("Error while connecting to database :- " + error);
            response.send(error);
        }
        else {
            //let's create a request for sql object  
            var request = new _sqlPackage.Request();
            //Query to run in our database  
            request.query(strQuery, function (error, responseResult) {
                if (error) {
                    console.log("Error while connecting to database:- " + error);
                    response.send(error);
                }
                else {
                    response.send(responseResult);
                }
            });
        }
    });
}

//GET API - LoadData
app.get("/loadData", function (_req, _res) {
    var Sqlquery = "LoadData";
    QueryToExecuteInDatabase(_res, Sqlquery);
});