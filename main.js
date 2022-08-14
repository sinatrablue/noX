const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
let win;

function handleRevealTitle(event, title) {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
}

const createWindow = () => {
    return new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });
}

const showLoginWindow = () => {
    win.loadFile('login.html').then(() => {win.show()})
}

const showMainWindow = () => {
    const menu = Menu.buildFromTemplate([
        {
        label: app.name,
        submenu: [
            {
            click: () => win.webContents.send('update-counter', 1),
            label: 'Increment',
            },
            {
            click: () => win.webContents.send('update-counter', -1),
            label: 'Decrement',
            }
        ]
        }
    ])
    Menu.setApplicationMenu(menu)

    win.loadFile('index.html').then(() => {win.show()})
}

app.whenReady().then( () => {
    ipcMain.on('reveal-title', handleRevealTitle);
    win = createWindow();
    showLoginWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.on('counter-value', (_event, value) => {
    console.log('value: ', value)
    const win = BrowserWindow.fromWebContents(_event.sender);
    if (value == 3) win.webContents.send('reveal-title-v2')
})

ipcMain.on('authentification-ok', () => {
    showMainWindow()
})