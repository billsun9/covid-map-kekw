// Initialize and add the map
function initMap() {
    // map params
    let options = {
        zoom: 6.5,
        center: {lat:32.8407, lng:-83.6324} //centers at Macon, GA
    }
    // The map object
    let map = new google.maps.Map(
        document.getElementById('map'), options);

    //array of all markers
    let markers = [
        {coords:{lat:30.832230, lng:-83.279860}, content:'<h3>Lowndes County Health Department</h3>'},
        {coords:{lat:34.267520, lng:-85.205170}, content:'<h3>West Rome Baptist Church</h3>'},
        {coords:{lat:34.262190, lng:-83.793700}, content:'<h3>Allen Creek Soccer Complex</h3>'},
        {coords:{lat:33.476310, lng:-81.970280}, content:'<h3>Augusta Fire Station One</h3>'},
        {coords:{lat:33.09553, lng:-83.22359}, content:'<h3>Baldwin County Health Department</h3>'},
        {coords:{lat:31.6948, lng:-83.25678}, content:'<h3>Ben Hill County Health Department</h3>'},
        {coords:{lat:31.19968, lng:-83.25009}, content:'<h3>Berrien County Health Department</h3>'},
        {coords:{lat:33.69688, lng:-84.29638}, content:'<h3>Beulah Baptist Church</h3>'},
    ];
    //let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    const addMarker = (data) => {
        // New marker
        let marker = new google.maps.Marker({
            position: data.coords, 
            map: map,
            //icon: image,
        });
        if(data.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: data.content,
            });
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        }
    }
    for(let i = 0; i<markers.length; i++) {
        addMarker(markers[i]);
    }
}