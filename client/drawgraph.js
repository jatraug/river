
var drawGraph = function() {
    var lineWidth   = 1;
    var baseline = 400;
    context.beginPath();
        context.lineWidth = lineWidth;
    var config = {height: 500, width: 800};
    var graph = new Graph(config);
    graph.setMinMax(rdata);
    //do legend:
    doLegend(graph, rdata, baseline);

    context.beginPath();
    context.strokeStyle = '#1D8DB3';
    var amount = graph.Xscale();
    var yinit = baseline - Math.ceil( graph.Yscale() * (rdata[0].height- graph.min()));
    context.moveTo(100+ amount,yinit);
//    amount +=9;
    rdata.forEach( function (element, index, array) {
        context.lineTo(100 + amount, baseline -( Math.ceil(graph.Yscale() * (element.height- graph.min()))));
        amount +=  graph.Xscale();
    });
    context.stroke();
};

var doLegend = function(graph, rdata, baseline) {
    context.strokeStyle = "#8a9194";
    // do Y (feet):
    var elem = graph.min();
    while (elem <= graph.max()) { 
        var Selem = elem - graph.min();
        context.moveTo(25, baseline  - (Selem * graph.Yscale())); 
        context.lineTo(1000, baseline - (Selem * graph.Yscale() )); 
        context.fillText(elem, 10, baseline - (Selem * graph.Yscale()));
        elem +=1; 
    } 
    
    context.stroke();
    // now do X(time):
    var minre = /\d\d:00:00\./;
    var amount = graph.Xscale();
    var yOffset = 350;
    rdata.forEach( function (element, index, array) {

        if(minre.test(element.time)) {
            var ltime = element.time.match(minre).toString();
            ltime = ltime.replace(/:00\./, " ");
            context.moveTo(100+ amount,baseline);
            context.lineTo(100 + amount,0);
//            context.moveTo(100+ amount,yOffset);
            context.fillText(ltime, 100+amount, baseline,  graph.Xscale()*4);
        }
        amount +=  graph.Xscale();
    });

    context.stroke();
};
