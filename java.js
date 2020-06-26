//-- Google Maps API Key
var APIkey = "AIzaSyBb0CDUuXsKE2EwQDS79oQZXtUoAA77HXc";

//What we need in the html:

// get location data from user
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(posit=>{
      var lat = posit.coords.latitude;
      var lng = posit.coords.longitude;
      // do stuff with location
    }, error=>{
      alert('Could not get geolocation');
    });
  }

// current location on map
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyBb0CDUuXsKE2EwQDS79oQZXtUoAA77HXc";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";

    console.log(latlon);
};
// look up weather for location


// then populate each id with data from api

//city-name
//current_temp
//current_condition

function populateCityWeather() {
    //user browser location to get longitutde and lattidude
  
    // Current weather
    
    let queryURL =
   "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&apikey=&appid=33076c7235c2a39d07b0fde1994a80b1"

  
    let latitude;
  
    let longitude;
  
    $.ajax({
      url: queryURL,
      method: "GET",
    })
      // Stores data into "weather"
      .then(function (weather) {
        // Log the queryURL
        console.log(queryURL);
  
        // Log the resulting object
        console.log(weather);
  
        let nowMoment = moment();
  
        let displayMoment = $("<h3>");
        $("#city-name").empty();
        $("#city-name").append(
          displayMoment.text("(" + nowMoment.format("M/D/YYYY") + ")")
        );
  
        let cityName = $("<h3>").text(weather.name);
        $("#city-name").prepend(cityName);
  
        let weatherIcon = $("<img>");
        weatherIcon.attr(
          "src",
          "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
        );
        $("#current-condition").empty();
        $("#current-condition").append(weatherIcon);
  
        $("#current-temp").text("Temperature: " + weather.main.temp + " °F");
        
  
        latitude = weather.coord.lat;
        longitude = weather.coord.lon;
 })

populateCityWeather()