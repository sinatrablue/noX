const info = document.getElementById('info');
info.innerText = `noX v-${versions.nox()}, using Electron v-${versions.electron()}`;

const revealBtn = document.getElementById('reveal-btn');
const titlePage = document.getElementById('title-page');
revealBtn.addEventListener('click', () => {
    const title = "noX";
    window.noxApi.revealTitle(title); 
    const title_h1 = "### Welcome to noX ###";
    titlePage.innerText = title_h1;
})

const counter = document.getElementById('counter')
window.noxApi.onUpdateCounter((_event, value) => {
    const oldValue = Number(counter.innerText)
    const newValue = oldValue + value
    counter.innerText = newValue
    _event.sender.send('counter-value', newValue)
})

window.noxApi.revealSoberTitle(() => {
    titlePage.innerText = "Welcome To noX  (="
}) 