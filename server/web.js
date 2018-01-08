
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

app.get('/client/tools.js', function(request, response) {
    console.log("D");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/tools.js');
      var buf= new Buffer(ind, 'utf8');
      response.send(buf.toString());
    response.end();
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
app.get('/client/riversites.js', function(request, response) {
    console.log("RJS");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/riversites.js');
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
