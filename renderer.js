const info = document.getElementById('info');
info.innerText = `noX v-${versions.nox()}, using Electron v-${versions.electron()}`;

const ping_pong = async () => {
    const res = await window.versions.ping();
    console.log('res: ', res);
} 
ping_pong();