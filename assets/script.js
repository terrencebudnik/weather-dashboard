var cityName= "chicago"; 

var baseURL= "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=88edceb9c80c8ecdb62a33fcca135c3e";





var cityInput = $('#cityInput'); 
var cityList = $('#cityList'); 
var searchBtn = $('.btn');
var prevCitylist = $('#prevCitylist');
var cityHistory = [];




searchBtn.on("click", function(){

    fetch(baseURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(cityData){
        console.log(cityData);
    });

    var currentHeader = $('<h5>');
    
    

    var cityEl = $('<p>');
    cityList.append(cityEl);
    cityEl.text(cityInput.val()); 

    cityHistory.push(cityInput.val()); 

    localStorage.setItem("cityName", JSON.stringify(cityHistory));


 
});

var addCitylist = function(){
    cityHistory = JSON.parse(localStorage.getItem("cityName")); 
    for (x=0; x < 10; x++){
        var cityListEl = $('<li>');
        cityListEl.text(cityHistory[x]);
        prevCitylist.append(cityListEl); 
    }

}

addCitylist(); 