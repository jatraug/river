
var drawGraph = function() {
    var lineWidth   = 1;

    context.beginPath();
        <!-- context.strokeStyle = '#f00'; -->
        context.lineWidth = lineWidth;
    var config = {height: 500, width: 1000};
    var graph = new Graph(config);
    graph.setMinMax(rdata);
    //do legend:
    context.strokeStyle = "#8a9194";
    var elem = graph.min();
    while (elem <= graph.max()) { 
        context.moveTo(25, 500  - (elem * graph.Yscale())); 
        context.lineTo(1000, 500 - (elem * graph.Yscale() )); 
        context.fillText(elem, 10, 500 - (elem * graph.Yscale()));
        elem +=1; 
    } 
    context.stroke();
    context.beginPath();
    context.strokeStyle = '#1D8DB3';
    var amount = graph.Xscale();
    var yinit = 500 - Math.ceil( graph.Yscale() * rdata[0].height);
    context.moveTo(100+ amount,yinit);
    amount +=9;
    rdata.forEach( function (element, index, array) {
        context.lineTo(100 + amount, 500 -( Math.ceil(graph.Yscale() * element.height)));
        amount +=  graph.Xscale();
    });
    context.stroke();
};
