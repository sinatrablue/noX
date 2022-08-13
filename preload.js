const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  electron: () => process.versions.electron,
  nox: () => process.env.npm_package_version,
})

contextBridge.exposeInMainWorld('noxApi', {
  revealTitle: (title) => ipcRenderer.send('reveal-title', title),
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', callback),
  revealSoberTitle: (callback) => ipcRenderer.on('reveal-title-v2', callback)
})
