const clock = document.querySelector("#clock")



function getClock(params) {
    const date = new Date()
    
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock()
setInterval(getClock,1000)