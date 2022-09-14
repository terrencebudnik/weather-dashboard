var cityInput = $('#cityInput'); 
var cityList = $('#cityList'); 
var searchBtn = $('.btn');
var prevCitylist = $('#prevCitylist');
var cityHistory=[];
var currentWeatherEl = $('#currentWeather'); 
var currentDate = moment().format('L'); 





searchBtn.on("click", function(){
    currentWeatherEl.empty(); 
    
    var cityName = cityInput.val(); 
    var baseURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=88edceb9c80c8ecdb62a33fcca135c3e&units=imperial";
    

    fetch(baseURL)
     .then(function(response) {
        return response.json();
    })
     .then(function(cityData){
       console.log(cityData); 
   

    var currentHeader = $('<h5>');
    currentHeader.attr('class', 'card-header');
    currentHeader.text(cityData.name + " -- " + currentDate);
    currentWeatherEl.append(currentHeader);

    var currentBodyEl = $('<div>');
    currentBodyEl.attr('class', 'card-body');
    currentWeatherEl.append(currentBodyEl);

    var currentTempEl = $('<p>');
    currentTempEl.text("Temp: " + cityData.main.temp);
    currentBodyEl.append(currentTempEl);

    var currentWindEl = $('<p>');
    currentWindEl.text("Wind: " + cityData.wind.speed);
    currentBodyEl.append(currentWindEl);

});

    var cityEl = $('<p>');
    cityList.append(cityEl);
    cityEl.text(cityInput.val()); 

    cityHistory.push(cityInput.val()); 

    localStorage.setItem("cityName", JSON.stringify(cityHistory));


})
   


var addCitylist = function(){
    if (localStorage.length > 0) {
    cityHistory = JSON.parse(localStorage.getItem("cityName")); 
   
        for (var x=0; x < 10; x++){
            var cityListEl = $('<li>');
            cityListEl.text(cityHistory[x]);
            prevCitylist.append(cityListEl); 
        }
    }
}

addCitylist(); 