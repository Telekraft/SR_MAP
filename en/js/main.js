
red_marker = L.icon({
    iconUrl: 'img/red_marker.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [36, 50], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [18, 50], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});
blue_marker = L.icon({
    iconUrl: 'img/blue_marker.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [36, 50], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [18, 50], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});
blue_marker_bottom = L.icon({
    iconUrl: 'img/blue_marker.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [36, 50],
    iconAnchor:   [18, 50],
    popupAnchor:  [0, 35]
});


$(document).ready(function(){
    $('.toggle_menu').click(function(){
        if($('#menu1').hasClass('deploy')){
            $('#menu1').removeClass('deploy');
        }else{
            $('#menu1').addClass('deploy');
        }
    });
});


$(window).resize(function(){
    DescriptionZone();
});

$(window).on('load',function(){

    DescriptionZone();
    // var layer;

    mapMinZoom = 3;
    mapMaxZoom = 6;
    map = L.map('map', {
        maxZoom: mapMaxZoom,
        minZoom: mapMinZoom,
        zoom: 3,
        zoomDelta: 0.25,
        zoomSnap: 0,
        closePopupOnClick: false,
        crs: L.CRS.Simple
    }).setView([-110, 70], mapMinZoom+1);

    mapBounds = new L.LatLngBounds(
        map.unproject([0, 10000], mapMaxZoom),
        map.unproject([10000, 0], mapMaxZoom));

    map.setMaxBounds(mapBounds);
    // map.fitBounds(mapBounds);
    layer = L.tileLayer('MAP1/{z}/{x}/{y}.png', {
      minZoom: mapMinZoom, maxZoom: mapMaxZoom,
      bounds: mapBounds,
      attribution: '',
      noWrap: true,
      tms: false
    }).addTo(map);


    marker_A1 = L.marker([-137.7, 29.7],{icon: blue_marker});
    marker_A2 = L.marker([-122.7, 37],{icon: blue_marker});
    marker_A3 = L.marker([-115, 42],{icon: blue_marker});
    marker_A4 = L.marker([-115.7, 47],{icon: blue_marker});
    marker_A5 = L.marker([-117.5, 70],{icon: blue_marker});
    marker_A6 = L.marker([-118.2, 92],{icon: blue_marker});
    marker_A7 = L.marker([-118, 105],{icon: blue_marker});
    marker_A8 = L.marker([-116.5, 109.7],{icon: blue_marker});
    marker_A9 = L.marker([-114.9, 117.7],{icon: blue_marker});
    // marker_A10 = L.marker([-114.9, 67.7],{icon: red_marker});

    popup_A1 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A4">Max. walking distance</a>');
    popup_A2 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A2">Capacity</a>');
    popup_A3 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A3">Exit</a>');
    popup_A4 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A5">Shuttle Bus Stop</a>');
    popup_A5 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A5">Shuttle Bus Stop</a>');
    popup_A6 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A5">Shuttle Bus Stop</a>');
    popup_A7 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A3">Entrance</a>');
    popup_A8 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A5">Shuttle Bus Stop</a>');
    popup_A9 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="A" rel="A3">Exit</a>');
    // popup_A10 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent("<a href='#' class='A'>test link</a>");

    all_A_markers = [marker_A1, marker_A2, marker_A3, marker_A4, marker_A5, marker_A6, marker_A7, marker_A8, marker_A9];

    function displayA(){
        LayerA = L.layerGroup(all_A_markers).addTo(map);
        marker_A1.bindPopup(popup_A1);
        marker_A2.bindPopup(popup_A2);
        marker_A3.bindPopup(popup_A3);
        marker_A4.bindPopup(popup_A4);
        marker_A5.bindPopup(popup_A5);
        marker_A6.bindPopup(popup_A6);
        marker_A7.bindPopup(popup_A7);
        marker_A8.bindPopup(popup_A8);
        marker_A9.bindPopup(popup_A9);
        // marker_A10.bindPopup(popup_A10);
        openAPopup();
    }
    displayA();

    marker_B1 = L.marker([-137.7, 29.7],{icon: red_marker});
    marker_B2 = L.marker([-124, 34.7],{icon: red_marker});
    marker_B3 = L.marker([-124.7, 57.5],{icon: red_marker});
    marker_B4 = L.marker([-119.8, 74.7],{icon: red_marker});
    marker_B5 = L.marker([-117.3, 83.2],{icon: red_marker});

    popup_B1 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="B" rel="A4">Max. walking distance</a>');
    popup_B2 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="B" rel="A2">Capacity</a>');
    popup_B3 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="B" rel="A7">Robot</a>');
    popup_B4 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="B" rel="A6">Drop-off / Pick-up cabins</a>');
    popup_B5 = L.popup({autoClose:false, closeOnClick:false,closeButton:false}).setContent('<a href="javascript:void(0);" class="B" rel="A5">Shuttle Bus Stop</a>');

    all_B_markers = [marker_B1, marker_B2, marker_B3, marker_B4, marker_B5];
    function displayB(){
        LayerB = L.layerGroup(all_B_markers).addTo(map);
        marker_B1.bindPopup(popup_B1);
        marker_B2.bindPopup(popup_B2);
        marker_B3.bindPopup(popup_B3);
        marker_B4.bindPopup(popup_B4);
        marker_B5.bindPopup(popup_B5);
        openBPopup();
    }

    // MAP SWITCH
    $('#map_toggle').click(function(){
        event.preventDefault();
        if($(this).attr('rel') == "MAP2"){
            layer = L.tileLayer('MAP1/{z}/{x}/{y}.png', {
              minZoom: mapMinZoom, maxZoom: mapMaxZoom,
              bounds: mapBounds,
              // attribution: 'Powered by <b>Stanley Robotics</b>',
              noWrap: true,
              tms: false
            }).addTo(map);
            map.removeLayer(LayerB);
            displayA();
            $(this).attr('rel','MAP1');
            $('#logo h2').html('8 000 spaces <br /> 4 shuttle bus stops');
        }else{
            layer = L.tileLayer('MAP2/{z}/{x}/{y}.png', {
              minZoom: mapMinZoom, maxZoom: mapMaxZoom,
              bounds: mapBounds,
              noWrap: true,
              tms: false
            }).addTo(map);
            map.removeLayer(LayerA);
            displayB();
            $(this).attr('rel','MAP2');
            $('#logo h2').html('12 000 spaces <br />  1 shuttle bus stop');
        }
    });
    // !MAP SWITCH

    // OPEN DESCRIPTION ZONE
    $('.close_ a').click(function(){
        $('.description_zone').removeClass('deploy');
        openAPopup();
        openBPopup();
    });
    // !OPEN DESCRIPTION ZONE



    $(marker_A1).click(function(){
        $('#A4').addClass('deploy');
        popup_A1.openPopup();
    });
    $(marker_A2).click(function(){
        $('#A2').addClass('deploy');
        popup_A2.openPopup();
    });
    $(marker_A3).click(function(){
        $('#A3').addClass('deploy');
        popup_A3.openPopup();
    });
    $(marker_A4).click(function(){
        $('#A5').addClass('deploy');
        popup_A4.openPopup();
    });
    $(marker_A5).click(function(){
        $('#A5').addClass('deploy');
        popup_A5.openPopup();
    });
    $(marker_A6).click(function(){
        $('#A5').addClass('deploy');
        popup_A6.openPopup();
    });
    $(marker_A7).click(function(){
        $('#A3').addClass('deploy');
        popup_A7.openPopup();
    });
    $(marker_A8).click(function(){
        $('#A5').addClass('deploy');
        popup_A8.openPopup();
    });
    $(marker_A9).click(function(){
        $('#A3').addClass('deploy');
        popup_A9.openPopup();
    });

    $(marker_B1).click(function(){
        $('#A4').addClass('deploy');
        popup_A1.openPopup();
    });
    $(marker_B2).click(function(){
        $('#A2').addClass('deploy');
        popup_A2.openPopup();
    });
    $(marker_B3).click(function(){
        $('#A7').addClass('deploy');
        popup_A3.openPopup();
    });
    $(marker_B4).click(function(){
        $('#A6').addClass('deploy');
        popup_A4.openPopup();
    });
    $(marker_B5).click(function(){
        $('#A5').addClass('deploy');
        popup_A5.openPopup();
    });


    $(".menu .target").click(function(){
        target = $(this).attr('rel');
        $(target).addClass('deploy');
    });

    // ./TEST

});

function openAPopup(){
        marker_A1.openPopup();
        marker_A2.openPopup();
        marker_A3.openPopup();
        marker_A4.openPopup();
        marker_A5.openPopup();
        marker_A6.openPopup();
        marker_A7.openPopup();
        marker_A8.openPopup();
        marker_A9.openPopup();
        $('.A').click(function(){
            target = $(this).attr('rel');
            $('#'+target).addClass('deploy');
        });
}
function openBPopup(){
        marker_B1.openPopup();
        marker_B2.openPopup();
        marker_B3.openPopup();
        marker_B4.openPopup();
        marker_B5.openPopup();
        $('.B').click(function(){
            target = $(this).attr('rel');
            // console.log(target);
            $('#'+target).addClass('deploy');
        });
}


// function DescriptionZone(){
//     $('.description_zone .illustration').each(function(){
//         padding = 50;
//         $('.text_').height($(window).height()-2*padding);
//         $(this).height($(window).height()-2*padding);
//         $('.description_zone .illustration img').height($(window).height()-2*padding);
//     });
// }


function DescriptionZone(){
    refH = $(window).height();
    $('.description_zone iframe').height($('.description_zone iframe').width()*9/16);
    if($(window).width() > 768){
        $('.description_zone .illustration').each(function(){
            $(this).css('margin-top',(refH-$(this).height())/2);
        });
        $('.description_zone .text_').each(function(){
            $(this).css('margin-top',(refH-$(this).height())/2);
        });
    }else{
        $('.description_zone .text_').css('margin-top','40px');
        $('.description_zone .illustration').css('margin-top','40px');
    }
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}