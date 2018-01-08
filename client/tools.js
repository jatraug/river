// logger.js - control logging
// Originally from work/tools

// turn on of off

function toolsSetup(tool) {
    if (tool === 'clog') {
        return clogSetup();
    }
};

function clogSetup() {
    var dolog = false;
    return ({
        clogOn : function() {
            dolog = true;
        },
        clogOff : function()  {
            dolog = false;
        },
        clog : function(message) {
            if(dolog) {
                console.log(message);
            }
        }
    });
};



if ( typeof(window) === 'undefined') {
    module.exports =toolsSetup;
}

    
