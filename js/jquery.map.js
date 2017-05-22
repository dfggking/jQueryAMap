// 0eb030454d05a6f2bf80394b6245f54e
/**
 * jQuery Map Util v1.0.0
 * @param {Object} factory
 */
(function(factory) {
    'use strict';
    if(typeof define === 'function' && define.amd) {
        // AMD register as an anonymous module
        define(['jquery'], factory);
    }else if( typeof exports === 'object' ){
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    }else{
        // Browser globals
        factory(jQuery);
    }
})(function($) {
    var key = '0eb030454d05a6f2bf80394b6245f54e'; // 地图key秘钥
    var amap = null;
    // http://webapi.amap.com/maps?v=1.3&key=0eb030454d05a6f2bf80394b6245f54e&callback=init
    $.getScript('http://webapi.amap.com/maps?v=1.3&key='+ key, function(){
        amap = new AMap.Map('J_amap_container', {
          resizeEable: true,
          zoom: 10,
          center: [116.480983, 40.0958]
        });
    });
    
    
    
})