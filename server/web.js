
var express = require('express');



var app = express();

app.get('/', function(request, response) {
//    console.log(request);
    console.log("====================");
    var fs = require('fs');	
    var ind = fs.readFileSync('client/index.html');
    var buf= new Buffer(ind, 'utf8');
    response.send(buf.toString());
    response.end();
    //  response.send('Hello World Two!');
});

app.get('/riverData', function(request, response) {
//    console.log("Request: " + "HaHHa" );
    var rData = river.getRiverData(response);
    // above here works!
     var fs = require('fs');	
     var ind = fs.readFileSync('client/graph.html');
     var buf= new Buffer(ind, 'utf8');
     response.send(buf.toString());
    response.end();
});

app.get('/data/rdata.js', function(request, response) {
    var rData = river.getRiverData(response);
  //  response.sendFile("../data/rdata.js", {
  //  root: __dirname });
///home/jimt/work/heroku/riverHeroku
      var fs = require('fs');	


      var ind = fs.readFileSync('data/rdata.js');
    console.log("A");
      var buf= new Buffer(ind, 'utf8');
    console.log("B");
      response.send(buf.toString());
    console.log("C");
    response.end();

});

app.get('/client/graph.js', function(request, response) {
    console.log("D");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/graph.js');
    console.log("E");
      var buf= new Buffer(ind, 'utf8');
    console.log("F");
      response.send(buf.toString());
    console.log("G");
    response.end();
//    response.sendFile("/client/graph.js", { root: __dirname });
//    response.end(); 
});


app.get('/client/river.js', function(request, response) {
    console.log("RJS");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/river.js');
    console.log("E");
      var buf= new Buffer(ind, 'utf8');
    console.log("F");
      response.send(buf.toString());
    console.log("G");
    response.end();
//    response.sendFile("/client/graph.js", { root: __dirname });
//    response.end(); 
});

app.get('/client/drawgraph.js', function(request, response) {
    console.log("D");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/drawgraph.js');
    console.log("E");
      var buf= new Buffer(ind, 'utf8');
    console.log("F");
      response.send(buf.toString());
    console.log("G");
    response.end();
//    response.sendFile("/client/graph.js", { root: __dirname });
//    response.end(); 
});

app.use(express.static(__dirname));


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
