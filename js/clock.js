const clock = document.querySelector("#clock")



function getClock(params) {
    const date = new Date()
    const seconds = date.getSeconds().toString().padStart(2,"0")
    const minutes = date.getMinutes().toString().padStart(2,"0")
    const hours = date.getHours().toString().padStart(2,"0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock()
setInterval(getClock,1000)