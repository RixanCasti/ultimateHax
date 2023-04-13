const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', createWindow);
app.on('activate', createWindow);
app.on('window-all-closed', app.quit);

app.commandLine.appendSwitch('disable-http-cache');
app.commandLine.appendSwitch('enable-pre-commit-input');
app.commandLine.appendSwitch('disable-frame-rate-limit');
app.commandLine.appendSwitch('disable-arc-cpu-restriction');
app.commandLine.appendSwitch('enable-accelerated-2d-canvas');

function createWindow () {
    const win = new BrowserWindow({
        show: false,
        fullscreen: true,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadURL('https://www.haxball.com/play');
    win.once('ready-to-show', win.show);

    app.on('open-url', (e, url) => {
        e.preventDefault();
        win.loadURL(url);
    });
}
