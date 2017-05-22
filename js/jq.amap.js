(function( $ ) {
    'use strict';
    $.fn.amap = function( options ){
        var that = this;
        var SingletonLoadMapResource = (function(){
            var instantiated = null;
            return {
                getInstance: function(){
                    var interval = window.setInterval(function(){
                        if( typeof window.initAmap === 'undefined' ){
                            window.initAmap = 'loading';
                            $.getScript('http://webapi.amap.com/maps?v=1.3&key=0eb030454d05a6f2bf80394b6245f54e', function(){window.initAmap = true;});
                        }else if('loading' === window.initAmap){
                            return false;
                        }else{
                            window.clearInterval(interval);
                            initMap();
                        }
                    }, 500);
                }
            }
        })();
        
        // 1、如果地图没有初始化，则先进行初始化
        SingletonLoadMapResource.getInstance();
        
        // default options
        var defaults = {
            width: '100%',
            height: '100%',
            resizeEnable: true,
            zoom: 10,
            center: [116.397428, 39.90923], // 北京天安门
        }
//      console.info( options );
        options = $.extend( defaults, options );
//      console.info( options );
        
        /**
         * 根据ID初始化地图
         */
        function initMap(){
            if(that.length > 1){
                alert('ID must only one');
            }
            new AMap.Map(that.get(0).id, options);
        }
    }
})( jQuery );
