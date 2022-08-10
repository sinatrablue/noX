const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  electron: () => process.versions.electron,
  nox: () => require('root-require')('package.json').version
})