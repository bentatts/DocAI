! function(e) {
    function t(e) {
        "undefined" != typeof map && (map.setOptions({
            styles: null
        }), map.setOptions({
            styles: [{
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "landscape",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 60
                }]
            }, {
                featureType: "road.local",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 40
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "transit",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "administrative.province",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                stylers: [{
                    visibility: "on"
                }, {
                    lightness: 30
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: e
                }, {
                    lightness: 40
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{
                    color: e
                }, {
                    lightness: 60
                }, {
                    saturation: -40
                }]
            }, {}]
        }))
    }
    e.fn.styleSwitcher = function(o) {
        var l = {
                slidein: !0,
                preview: !0,
                container: this.selector
            },
            i = e.extend(l, o);
        localStorage && (void 0 !== localStorage.quickadColor ? (document.documentElement.style.setProperty("--theme-color", localStorage.quickadColor), t(localStorage.quickadColor)) : (document.documentElement.style.setProperty("--theme-color", themecolor), t(mapcolor))), i.slidein ? e(i.container).slideDown("slow") : e(i.container).show(), i.preview && e(i.container + " a").click(function() {
            document.documentElement.style.setProperty("--theme-color", e(this).html()), t(e(this).html())
        }), e(i.container + " a").click(function() {
            document.documentElement.style.setProperty("--theme-color", e(this).html()), t(e(this).html()), localStorage && (localStorage.quickadColor = e(this).html())
        })
    }
}(jQuery);