const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
// const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  console.log(path.join(__dirname, '../src/github-mark-white.png'), "patttt")
  const win = new BrowserWindow({
    width: 625,
    height: 624,
    icon: path.join(__dirname, '../src/github-mark-white.ico')
    // resizable: false
    // webPreferences: {
    //   nodeIntegration: true,
    // },
  });

   // and load the index.html of the app.
//   win.loadFile("index.html");
// console.log("pathh", url.format({
//     pathname: path.join(__dirname, '../build/index.html'),
//     protocol: 'file:',
//     slashes: true,
// }))
win.loadURL('http://localhost:3000')
win.setIcon(path.join(__dirname, '../src/github-mark-white.ico'));
// win.loadURL('http://10.0.28.73:3000')
//   win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
//   win.loadURL(
//     isDev
//       ? 'http://localhost:3000'
//       : `file://${path.join(__dirname, 'index.html')}`
//   );
//   // Open the DevTools.
win.webContents.openDevTools({ mode: 'detach' });
//   if (isDev) {
//     console.log('path', `file://${path.join(__dirname, 'index.html')}`);

//     win.webContents.openDevTools({ mode: 'detach' });
//   }
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});