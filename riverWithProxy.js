// Serve river data

//   first try for node:

//  riverData = http://waterservices.usgs.gov/nwis/iv/?sites=12155500\&period=P7D\&format=json

var http = require('http');


var proxying = require('proxying-agent');
var proxyingOptions = {
    proxy: 'http://jtraug:Sadarar5@uscache-vs.sonosite.com:3128'
    // http://username:password@proxy.example.com:8080'
//    tunnel: true
  };
  var proxyingAgent = new proxying.ProxyingAgent(proxyingOptions);





//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
    host: 'waterservices.usgs.gov',
    path: '/nwis/iv/?sites=12155500&period=P3D&format=json',
    agent: proxyingAgent
};


var handleData = function(dataArr) {
    console.log ("handleData");
    var data = "";

    dataArr.forEach( function (element, index, array) {
        data += ("TimeDate: " + element.date +  "  -  " + "Feet: " + element.height + "\r\n");

       // console.log ("TimeDate: " + element.date +  "  -  " + "Feet: " + element.height);
    });
    var buf= new Buffer(data, 'utf8');
    ourHtresp.get().send(data); //buf.toString());
};




// for period above: P2D past 2 days. PT2H past 2 hours
// P2ST2H = past 50 hours (from tool)
// ISO 8601 duration format (see wikipedia)

var htResponse = function(responseIn) {
    this.response = responseIn;
};

htResponse.prototype.get = function() {
    return this.response;
};


callback = function(response) {
    var str = '';
    // Hold needed river data:
    var riverDataArr = [];

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
      riverData = JSON.parse(str);
      // Put needed river data in array:
      riverData.value.timeSeries[0].values[0].value.forEach (function (element, index, array) {
//          console.log ( "Date & Time:  " + element.dateTime + "  Height: " + element.value + " feet");
          riverDataArr.push ({date: element.dateTime, height: element.value});
      });
      console.log("Call handleData");
      handleData (riverDataArr);
  });

}; // end of call

var ourHtresp; //  = new htResponse(htresponse);


var getRiverData = function(htresponse) {
    ourHtresp = new htResponse(htresponse);
    http.request(options, callback).end();
};





//getRiverData();

module.exports.getRiverData = getRiverData;


// see: https://www.npmjs.com/package/proxying-agent