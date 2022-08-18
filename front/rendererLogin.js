const loginBtn = document.getElementById('login-btn');
const loginTxt = document.getElementById('login-txt');
loginBtn.addEventListener('click', () => {
    window.noxLogin.loginOk(loginTxt.value)
})