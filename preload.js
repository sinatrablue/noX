const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  electron: () => process.versions.electron,
  nox: () => process.env.npm_package_version,
})

contextBridge.exposeInMainWorld('noxApi', {
  reveal_title: (title) => ipcRenderer.send('reveal-title', title),
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', callback)
})

window.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter')
  ipcRenderer.on('update-counter', (_event, value) => {
      const oldValue = Number(counter.innerText)
      const newValue = oldValue + value
      counter.innerText = newValue
  })
})