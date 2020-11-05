
	//Funktion som laver min Kelvin om til Celsius
	var hideTemperature = document.getElementById("temperature-value");
	hideTemperature.style.display = "none";
	var hideLocation = document.getElementById("notifikationer");
	hideLocation.style.display = "none";
	var  hideWeatherIcon = document.getElementById("weather-icon")
	hideWeatherIcon.style.display = "none";

function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)'
	} else {
		return (kelvin-273.15);
	}
}

function getCity(city){
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){

        if(ajaxRequest.readyState == 4){
            //the request is completed, now check its status
            if(ajaxRequest.status == 200){
              //turn JSON into object
              var jsonObj = JSON.parse(ajaxRequest.responseText);
							showIcon(jsonObj.weather[0].icon);
              // console.log(jsonObj.weather[0].main);
              // console.log(jsonObj.weather[0].description);
			  //Temperatur-value som nu viser temperaturen i celsius
			  var element = document.getElementById("temperature-value");
			  document.getElementById("temperature-value").style.fontSize = "35px";
			  document.getElementById("temperature-value").style.fontWeight = "800";
			  document.getElementById("temperature-value").style.display = "block";
			  element.innerHTML = Math.round(convertKelvinToCelsius(jsonObj.main.temp).toFixed(2)) + " C\u00B0";
			  //sys-country siger hvilket land byen er i så fx DK, SE, GB, NO osv
			  var element = document.getElementById("notifikationer");
			  document.getElementById("notifikationer").style.fontSize = "45px";
			  document.getElementById("notifikationer").style.display = "block";
              element.innerHTML = jsonObj.name;

            }
        }
	}




    x = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=547d9d614973c7dc888cd7cc61b23c04'
    ajaxRequest.open('GET', x);
    ajaxRequest.send();
}




var EnterKey = document.getElementById("input");
var click = document.getElementById("btn");

function makeVisible(){
	document.getElementById('city').style.visibility = 'visible';
	document.getElementById('getWeather').style.visibility = 'visible';
	document.getElementById('SearchVisibility').style.visibility = 'collapse';
}

function showIcon(icon) {
	hideWeatherIcon.style.display = "block";
  hideWeatherIcon.firstChild.src = 'https://openweathermap.org/img/wn/'+ icon + '@2x.png';
};


click.addEventListener("click", function () {
  console.log(EnterKey.value);
	getCity(EnterKey.value);
} );

EnterKey.addEventListener("keypress", function() {
  sendURL(event.key);
})

function sendURL (enter) {
	if(event.key=="Enter"){
    getCity(EnterKey.value);

	}
	else {

	}
}
