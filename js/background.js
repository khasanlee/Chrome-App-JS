const images = ["0.webp", "1.webp", "2.webp"]

const chosenImages = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img")

bgImage.src= `img/${chosenImages}`

document.body.appendChild(bgImage)