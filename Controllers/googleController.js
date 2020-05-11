//Google Places API
Geo-location
navigator.geolocation.getCurrentPosition(
    position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    },
    error => {
        console.log("Unable to find location");
    }
)
var latitude = position.coords.latitude;
var longitude = position.coords.longitude; 

// URL
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=YOURAPIKEY&location=latitude,longitude&radius=5000&type=restaurant
var apiKey =
         "AIzaSyBVbcko5gMzL50MmzOJnfAk86hsIJVvu6A";
    
 var queryUrl = encodeURI(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" +
        apiKey +
        "&location=" +
        latitude + longitude +
        "&radius=24000&type=restaurant" );

        console.log(queryUrl);
$.ajax({
        url: queryUrl,
        method: "GET",
        }).then(function(response) {
        //console.log(response);
        restaurantName.textContent= results.name;
        $("#restaurantPhoto").attr("src", results.photos)
      });
      