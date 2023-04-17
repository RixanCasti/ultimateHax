const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', createWindow);
app.on('activate', createWindow);
app.on('window-all-closed', app.quit);

const flags = [
    'disable-http-cache',
    'enable-pre-commit-input',
    'disable-frame-rate-limit',
    'disable-arc-cpu-restriction',
    'enable-accelerated-2d-canvas'
];

flags.forEach(flag => app.commandLine.appendSwitch(flag));

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
