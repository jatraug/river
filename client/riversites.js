// riversites - site number from array index




var mkgetSiteFromIndex = function() {
var riverArr = [
    {'siteIndex' : '12170300', 'siteName': 'STILLAGUAMISH RIVER NEAR STANWOOD, WA'},
    {'siteIndex' : '12161000', 'siteName': 'SF STILLAGUAMISH RIVER NEAR GRANITE FALLS, WA'},
    {'siteIndex' : '12178000', 'siteName': 'SKAGIT RIVER AT NEWHALEM, WA'},
    {'siteIndex' : '12200500', 'siteName': 'SKAGIT RIVER NEAR MOUNT VERNON, WA'},
    {'siteIndex' : '12155300', 'siteName': 'PILCHUCK RIVER NEAR SNOHOMISH, WA'},
    {'siteIndex' : '12155500', 'siteName': 'SNOHOMISH RIVER AT SNOHOMISH, WA'},
    {'siteIndex' : '12194000', 'siteName': 'SKAGIT RIVER NEAR CONCRETE, WA'}

];

    return (function(index) {
        return riverArr[index].siteIndex;
    });
};
