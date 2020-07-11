// Import express
let express = require('express');
// Import Body parser

// Import Mongoose

// Initialise the app
let app = express();

// Import routes

// Configure bodyparser to handle post requests



// Setup server port
var port = process.env.PORT || 3040;

app.use("/image",  express.static(__dirname + '/image'));
app.use("/css",  express.static(__dirname + '/css'));
app.use("/js",  express.static(__dirname + '/js'));
app.use("/fonts",  express.static(__dirname + '/fonts'));
app.use("/scss",  express.static(__dirname + '/scss'));
app.use("/plugins",  express.static(__dirname + '/plugins'));


// Send message for default URL

//app.get('/', (req, res) => res.send('Hello World with Express'));
app.get('/', function(req, res) {
    /* res.sendFile('/home/pankaj/websites/ScanIN/index.html'); */
    res.sendfile(__dirname + '/index.html');
});
     


app.listen(port, function () {
    
    console.log("Running website on port " + port);
});