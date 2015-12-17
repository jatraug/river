// Serve river data

//   first try for node:

//  riverData = http://waterservices.usgs.gov/nwis/iv/?sites=12155500\&period=P7D\&format=json

var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'waterservices.usgs.gov',
  path: '/nwis/iv/?sites=12155500&period=P3D&format=json'
};


var handleData = function(dataArr) {
    console.log ("handleData");
    var data = "";

    dataArr.forEach( function (element, index, array) {
        data += ("<li>TimeDate: " + element.date +  "  -  " + "Feet: " + element.height + "</li>\r\n");

//        console.log ("TimeDate: " + element.date +  "  -  " + "Feet: " + element.height);
    });
    var buf= new Buffer(data, 'utf8');
    ourHtresp.get().send(data); //buf.toString());
};


var parseDateAndTime = function(dateTime){
//  2015-12-08T02:30:00.000-08:00
// put date and time in separate entities 
    var resp = "";
   var myre = /(\d\d\d\d-\d\d-\d\d)T(\d+:\d\d:\d\d)/;
    resp = dateTime.replace(myre, "$1  $2");

    return resp;
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
          var dTime = parseDateAndTime(element.dateTime);
          riverDataArr.push ({date: dTime, height: element.value});
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
