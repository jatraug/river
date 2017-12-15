



 




var doJson = function(str) {
    var riverDataArr = [];
    var riverData = JSON.parse(str);
    // Put needed river data in array:
    var ind = determineWhichTimeseries(riverData.value.timeSeries);
    console.log("ind = " + ind);
    riverData.value.timeSeries[ind].values[0].value.forEach (function (element, index, array) {
//        console.log ( "Date & Time:  " + element.dateTime + "  Height: " + element.value + " feet");
        var dTime = parseDateAndTime(element.dateTime);
        riverDataArr.push ({date: dTime, height: element.value});
    });
    console.log("Call handleData");
    return (handleData (riverDataArr));

}; // end of call


var handleData = function(dataArr) {
    console.log ("handleData");

    var data = "[";
    var darr = [];
    dataArr.forEach( function (element, index, array) {
        //        data += ("<li>TimeDate: " + element.date +  "  -  " + "Feet: " + element.height + "</li>\r\n");
        data += "{time: \"" + element.date + "\", height: " + element.height + " },";
        darr.push("{time: \"" + element.date + "\", height: " + element.height + " },");
        console.log(element.date + "***" + element.height);
    });
    data += ']';
    console.log(darr[5]);
    return darr;
};

// Determine which timeseies
var determineWhichTimeseries = function(arr){
    var ind = undefined;
    arr.forEach ( function (element, index, array) {
        console.log("varDesc: " + element.variable.variableDescription);
        if(element.variable.variableDescription === "Gage height, feet") {
            ind = index;
        }
    });
    return ind;
};

var parseDateAndTime = function(dateTime){
//  2015-12-08T02:30:00.000-08:00
// put date and time in separate entities 
    var resp = "";
   var myre = /(\d\d\d\d-\d\d-\d\d)T(\d+:\d\d:\d\d)/;
    resp = dateTime.replace(myre, "$1  $2");

    return resp;
};
