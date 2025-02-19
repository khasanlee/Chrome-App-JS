const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

function onLoginBtnClick(params) {
    if (loginInput.value === "") {
        alert("please input your name")
    } else {
        console.log("hello", loginInput.value)
    }
}

loginButton.addEventListener("click", onLoginBtnClick)