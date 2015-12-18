var river = require('./river');
var express = require('express');



var app = express();

app.get('/', function(request, response) {
    console.log(request);
    console.log("====================");
    var fs = require('fs');	
    var ind = fs.readFileSync('index.html');
    var buf= new Buffer(ind, 'utf8');
    response.send(buf.toString());
    //  response.send('Hello World Two!');
});

app.get('/riverData', function(request, response) {
    console.log("Request: " + "HaHHa" );
    var rData = river.getRiverData(response);
    // above here works!
     var fs = require('fs');	
     var ind = fs.readFileSync('graph.html');
     var buf= new Buffer(ind, 'utf8');
     response.send(buf.toString());

});

app.use(express.static(__dirname));


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
