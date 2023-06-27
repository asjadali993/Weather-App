// for live timing 
function refreshTime() {
    const timeDisplay = document.querySelector("#time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 10);


let cityName = document.querySelector("#cityName");
let temp = document.querySelector("#temp");
let feels_like = document.querySelector("#feels_like");
let temp_min = document.querySelector("#temp_min");
let temp_max = document.querySelector("#temp_max");
let pressure = document.querySelector("#pressure");
let humidity = document.querySelector("#humidity");
let speed = document.querySelector("#speed");
let country = document.querySelector(".country");
let temp1 = document.querySelector("#temp1");
let description = document.querySelector("#description");
let locationIcon = document.querySelector('.weather-icon');


async function getData(city) {
    try {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=417e5e47e007f7938b48ffa2581405b0&units=metric`;
       
       

        let response = await fetch(apiUrl);
        let data = await response.json();
        
        cityName.innerHTML = data.name
        temp.innerHTML = data.main.temp
        temp1.innerHTML = data.main.temp
        feels_like.innerHTML = data.main.feels_like
        temp_min.innerHTML = data.main.temp_min
        temp_max.innerHTML = data.main.temp_max
        pressure.innerHTML = data.main.pressure
        humidity.innerHTML = data.main.humidity
        speed.innerHTML = data.wind.speed
        country.innerHTML = data.sys.country
       description.innerHTML = data.weather[0].description 
       let iconCode= data.weather[0].icon
       let iconUrl= `https://openweathermap.org/img/wn/${iconCode}.png`
       locationIcon.src = iconUrl;
    }

    catch (error) {
        alert("something went wrong");
        console.log(error);
    }
}

document.querySelector("#input").addEventListener("keyup", function (e) {
    if (13 == e.keyCode) {
        let inputdata =input.value
        getData(inputdata)
    }

})

document.querySelector("#button").addEventListener("click", function(){
    let inputdata =input.value
    getData(inputdata)
});







