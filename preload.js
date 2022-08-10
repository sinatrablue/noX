const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  electron: () => process.versions.electron,
  nox: () => process.env.npm_package_version,
});