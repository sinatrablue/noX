const info = document.getElementById('info');
info.innerText = `noX v-${versions.nox()}, using Electron v-${versions.electron()}`;

const revealBtn = document.getElementById('reveal-btn');
const titlePage = document.getElementById('title-page');
revealBtn.addEventListener('click', () => {
    const title = "noX";
    window.noxApi.reveal_title(title); 
    const title_h1 = "### Welcome to noX ###";
    titlePage.innerText = title_h1;
})

const counter = document.getElementById('counter')
window.electronAPI.onUpdateCounter((_event, value) => {
    const oldValue = Number(counter.innerText)
    const newValue = oldValue + value
    counter.innerText = newValue
})