let apiKey = "4be678d7892572285bd927c35289d48c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchInputElament = document.querySelector(".search-input")

const weatherImage = document.querySelector(".weather-img")
async function checkWeather(city){

    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    if (response.status===404){
        document.querySelector(".weather").style.display = "none"
        document.querySelector(".invalid-text").style.display="block"
    }
    else{
        const data = await response.json()
        console.log(data);
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C"
        document.querySelector(".humidity-percentage").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind-speed").innerHTML = data.wind.speed +"km/h"

        if(data.weather[0].main="Rain"){
            weatherImage.src = "images/Rain.png"
        }
        else if (data.weather[0].main="Clouds"){
            weatherImage.src = "images/Clouds.png"
        }
        else if (data.weather[0].main="Drizzle"){
            weatherImage.src = "images/Drizzle.png"
        }
        else if (data.weather[0].main="Snow"){
            weatherImage.src = "images/Snow.png"
        }
        else if (data.weather[0].main="Clear"){
            weatherImage.src = "images/Clear.png"
        }
        else if (data.weather[0].main="Haze"){
            weatherImage.src = "images/Mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".invalid-text").style.display="none"
    }
}

document.querySelector(".search-btn").addEventListener("click",()=>{
    checkWeather(searchInputElament.value)
})

