const apikey="c7c2e65f9351d0234d1f47785a2eaa55";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather_icon");

 async function checkWeather(city){
    const response = await fetch(apiurl +  city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

    if(data.Weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
     }
     else if(data.Weather[0].main=="Clouds"){
        weatherIcon.src="images/clear.png";
     }
     else if(data.Weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
     }
     else if(data.Weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
     }
     else if(data.Weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
     }
 }
  searchBtn.addEventListener("click",()=>{

     checkWeather(searchBox.value);
    
 })

