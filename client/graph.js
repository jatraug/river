

log.clogOff();

var Graph = function ( config) {
    this.config = config;
    this.config.width = config.width;
    this.config.height = config.height;
    this.config.max = 0;
    this.config.min = 0;
    this.config.Xscale = 0;
    this.config.Yscale = 0.001;
    this.config.elements = 0;
    
};

Graph.prototype.elements = function() {
    return this.config.elements;
};

Graph.prototype.Xscale = function() {
    return this.config.Xscale;
};


Graph.prototype.Yscale = function() {
    log.clog("returning Yscale = " + this.config.Yscale);
//    log.clog("Height " + this.config.height + " Max " + this.config.max + " Min " + this.config.min);
    return this.config.Yscale;
};

Graph.prototype.width = function() {
    return this.config.width;
};

Graph.prototype.height = function() {
    return this.config.height;
};
// control min/max settings for height:
Graph.prototype.setMinMax =  function(numarr) {
    var config = this.config;
    var elements =0;
    numarr.forEach(function (data, index, array) {
//        log.clog("SMM" + data);
        var val = data.height;
//        log.clog("val: " + val);
        elements++;
        if (config.min === 0) {
            config.min = val;
        }else{
            if (val < config.min) {
            config.min = val;
            }
        }
        if (config.max === 0) {
            config.max = val;
        }else{
            if (val > config.max) {
                config.max = val;
            }
        }
        // keep all from happening in the ame place:
        if(config.min === config.max) {
            config.max +=1;
        }
    });
    this.config = config;
    this.config.elements = elements;
    this.config.Xscale = Math.floor(this.config.width/this.config.elements);
    this.config.Yscale = Math.floor(this.config.height/((this.config.max - this.config.min)* 4));
};

Graph.prototype.max = function() {
    return Math.ceil(this.config.max);
};

Graph.prototype.min = function() {
    return  Math.floor(this.config.min);
};

//module.exports.Graph = Graph;


