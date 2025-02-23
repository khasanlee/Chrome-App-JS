const API_KEY = "52c5975cdeaa82ac7ebcf40d57d12594"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log(lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError(params) {
    alert("cant find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)