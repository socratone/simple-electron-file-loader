const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');

ipcMain.on('asynchronous-message', (event, arg) => {
  const fileNames = fs.readdirSync(__dirname);
  console.log('main process');
  console.log('arg:', arg);
  event.reply('asynchronous-reply', fileNames);
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
