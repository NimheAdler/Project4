const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const apikey = process.env.API_KEY;

const app = express()

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve("src/client/views/index.html"));
})

// Setup empty JS object to act as endpoint for all routes
const https = require("https");
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//prueba post
/* app.post('/', function (req, res) {
    let data = req.body;
    console.log(data);
    data.push(req.body);
    console.log(`Your API key is ${process.env.API_KEY}`);
    res.send(response);
}); */

app.post("/", async function (req, res) {
    const response = await meaningCloud(req.body.text);
    try {
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  });
  const meaningCloud = (text) => {
    return new Promise((resolve, reject) => {
    https
      .get(
        `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&lang=en&model=general&txt=${text}`,
        (res) => {
          console.log(res);
          res.on("data", (d) => {
            const apicall = JSON.parse(d);
            console.log(apicall.irony);
            resolve(apicall);
          });
          res.on("error", (error) => {
            //console.log(error);
            reject(error);
          });
        }
      )
      .on("error", (e) => {
        console.error(e);
      });
  });
};