
var express = require('express');
var log = require('../client/tools.js')('clog');

log.clogOff();


var app = express();

app.get('/', function(request, response) {
//    log.clog(request);
    log.clog("====================");
    var fs = require('fs');	
    var ind = fs.readFileSync('client/index.html');
    var buf= new Buffer(ind, 'utf8');
    response.send(buf.toString());
    response.end();
    //  response.send('Hello World Two!');
});


app.get('/client/graph.js', function(request, response) {
    log.clog("D");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/graph.js');
    log.clog("E");
      var buf= new Buffer(ind, 'utf8');
    log.clog("F");
      response.send(buf.toString());
    log.clog("G");
    response.end();
//    response.sendFile("/client/graph.js", { root: __dirname });
//    response.end(); 
});

app.get('/client/tools.js', function(request, response) {
    log.clog("D");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/tools.js');
      var buf= new Buffer(ind, 'utf8');
      response.send(buf.toString());
    response.end();
});


app.get('/client/river.js', function(request, response) {
    log.clog("RJS");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/river.js');
    log.clog("E");
      var buf= new Buffer(ind, 'utf8');
    log.clog("F");
      response.send(buf.toString());
    log.clog("G");
    response.end();
//    response.sendFile("/client/graph.js", { root: __dirname });
//    response.end(); 
});
app.get('/client/riversites.js', function(request, response) {
    log.clog("RJS");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/riversites.js');
    log.clog("E");
      var buf= new Buffer(ind, 'utf8');
    log.clog("F");
      response.send(buf.toString());
    log.clog("G");
    response.end();
//    response.sendFile("/client/graph.js", { root: __dirname });
//    response.end(); 
});

app.get('/client/drawgraph.js', function(request, response) {
    log.clog("D");
 var fs = require('fs');	


      var ind = fs.readFileSync('client/drawgraph.js');
    log.clog("E");
      var buf= new Buffer(ind, 'utf8');
    log.clog("F");
      response.send(buf.toString());
    log.clog("G");
    response.end();
//    response.sendFile("/client/graph.js", { root: __dirname });
//    response.end(); 
});

app.use(express.static(__dirname));


var port = process.env.PORT || 8080;
app.listen(port, function() {
  log.clog("Listening on " + port);
});
