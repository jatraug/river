

// river.js - made from old server/river.js


var riverArr = [
    {'siteIndex' : '12170300', 'siteName': 'STILLAGUAMISH RIVER NEAR STANWOOD, WA'},
    {'siteIndex' : '12161000', 'siteName': 'SF STILLAGUAMISH RIVER NEAR GRANITE FALLS, WA'},
    {'siteIndex' : '12178000', 'siteName': 'SKAGIT RIVER AT NEWHALEM, WA'},
    {'siteIndex' : '12200500', 'siteName': 'SKAGIT RIVER NEAR MOUNT VERNON, WA'},
    {'siteIndex' : '12155300', 'siteName': 'PILCHUCK RIVER NEAR SNOHOMISH, WA'},
    {'siteIndex' : '12155500', 'siteName': 'SNOHOMISH RIVER AT SNOHOMISH, WA'},
    {'siteIndex' : '12194000', 'siteName': 'SKAGIT RIVER NEAR CONCRETE, WA'}

];

var clearScreen = function() {
    context.clearRect(0,0, 1000, 500);
};


var trythis = function() {


    var riverIndex = document.getElementById('riverlist').selectedIndex;
    console.log(riverIndex);
    var url = 'https://waterservices.usgs.gov/nwis/iv/?sites=' + riverArr[riverIndex].siteIndex + '&period=P1D&format=json';
    var request = new Request(url, {method: 'get'});
    clog("yup");
    clearScreen();
    //  fetch('riverdata').then(function(response) {

    fetch(request).then(function(response) {
        response.text().then(function(text) {
            var rdata = doJson(text);
            drawGraph(rdata);
        });
    });
};



var doJson = function(str) {
    var riverDataArr = [];
    var riverData = JSON.parse(str);
    // Put needed river data in array:
    var ind = determineWhichTimeseries(riverData.value.timeSeries);
    clog("ind = " + ind);
    riverData.value.timeSeries[ind].values[0].value.forEach (function (element, index, array) {

        var dTime = parseDateAndTime(element.dateTime);
        riverDataArr.push ({date: dTime, height: element.value});
    });

    return (handleData (riverDataArr));

}; // end of call



var handleData = function(dataArr) {


    var darr = [];
    dataArr.forEach( function (element, index, array) {

        darr.push({'time': element.date,'height': parseFloat(element.height) });

    });

    return darr;
};
try{
// Determine which timeseies
var determineWhichTimeseries = function(arr){
    var ind = undefined;
    arr.forEach ( function (element, index, array) {
        console.log(element.variable.variableDescription);
        if(element.variable.variableDescription === "Gage height, feet") {
            ind = index;
        }
    });
    //    assert(ind);
    if (ind === undefined) {
        console.log('Nope!');
        throw('No timeseries data hoo');
    }
    return ind;
};
} catch(e) {
    console.log(e);
    alert(e);
}




    
var parseDateAndTime = function(dateTime){
//  2015-12-08T02:30:00.000-08:00
// put date and time in separate entities 
    var resp = "";
   var myre = /(\d\d\d\d-\d\d-\d\d)T(\d+:\d\d:\d\d)/;
    resp = dateTime.replace(myre, "$1  $2");

    return resp;
};
