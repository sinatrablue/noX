const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  electron: () => process.versions.electron,
  nox: () => process.env.npm_package_version,
})

contextBridge.exposeInMainWorld('noxApi', {
  reveal_title: (title) => ipcRenderer.send('reveal-title', title),
})