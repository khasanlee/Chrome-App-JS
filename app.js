const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting")

function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add("hidden") 
    const username = loginInput.value
    greeting.innerText = "hello " + username
    greeting.classList.remove("hidden")
    console.log(greeting)
}
function handleLinkClick(event) {
    event.preventDefault()
    console.dir(event)
}
loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click", handleLinkClick)