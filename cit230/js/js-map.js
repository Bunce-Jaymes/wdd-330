 function myMap() {
                    var myCenter = new google.maps.LatLng(43.8231096, -111.79242369999997);
                    var mapCanvas = document.getElementById("map");
                    var mapOptions = {
                        center: new google.maps.LatLng(43.8231096, -111.79242369999997),
                        zoom: 5,
                        panControl: true,
                        zoomControl: true,
                        mapTypeControl: true,
                        scaleControl: true,
                        streetViewControl: true,
                        overviewMapControl: true,
                        rotateControl: true
                    };
                    var map = new google.maps.Map(mapCanvas, mapOptions);
                    var marker = new google.maps.Marker({
                        position: myCenter
                    });
                    marker.setMap(map);


                    // Zoom to 9 when clicking on marker
                    google.maps.event.addListener(marker, 'click', function() {
                        var pos = map.getZoom();
                            map.setZoom(9);
                        map.setCenter(marker.getPosition());
                        window.setTimeout(function() {
                            map.setZoom(pos);
                        }, 3000
                    )});

                }