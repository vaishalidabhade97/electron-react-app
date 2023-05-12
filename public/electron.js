const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
// const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 625,
    height: 624,
    minWidth: 400,
  });

   // and load the index.html of the app.
//   win.loadFile("index.html");
// console.log("pathh", url.format({
//     pathname: path.join(__dirname, '../build/index.html'),
//     protocol: 'file:',
//     slashes: true,
// }))
// win.loadURL('http://localhost:3000')
// win.setIcon(path.join(__dirname, '../src/github-mark-white.ico'));
win.loadURL('https://electron-react-7e490.web.app')
// console.log(`file://${path.join(__dirname, 'index.html')}`, "kkkk")
//   win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
//   win.loadURL(
//     isDev
//       ? 'http://localhost:3000'
//       : `file://${path.join(__dirname, 'index.html')}`
//   );
//   // Open the DevTools.
// win.webContents.openDevTools({ mode: 'detach' });
//   if (isDev) {
//     console.log('path', `file://${path.join(__dirname, 'index.html')}`);

//     win.webContents.openDevTools({ mode: 'detach' });
//   }
let tray
const icon = nativeImage.createFromPath('public/logo.png' )
  tray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Close', type: 'normal', click: () => {
      
        win.close();
    }}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

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