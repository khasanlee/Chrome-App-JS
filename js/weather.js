function onGeoOk(position) {
    console.log(position)
}

function onGeoError(params) {
    alert("cant find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)