$(".title").mouseover(function(){
        $(".title").css("color", "red");
    });
    $(".title").mouseout(function(){
        $(".title").css("color", "");
    });




var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/cc668ba61ce0dc9e/conditions/q/IL/Chicago.json", false);
weather.send(null);

var r = JSON.parse(weather.response);

var weather = "Current location: " + r.current_observation.display_location.full + "<br/>";
var temp = r.current_observation.temperature_string + "<br/>";
var wind = r.current_observation.wind_string + "<br/>";

// function Display(){
//   document.getElementById('weather').innerHTML = weather;
//   document.getElementById('temp').innerHTML = temp;
//   document.getElementById('wind').innerHTML = wind;
// }

$("#button").click(function(){
  document.getElementById('weather').innerHTML = weather;
  document.getElementById('temp').innerHTML = temp;
  document.getElementById('wind').innerHTML = wind;
});
// document.getElementById('weather').innerHTML = weather;
// document.getElementById('temp').innerHTML = temp;
// document.getElementById('wind').innerHTML = wind;
