const {app, BrowserWindow} = require('electron');
let win;

function createWindow () {
	win = new BrowserWindow({width: 800, height: 1500,
        webPreferences: {
            nodeIntegration: false }
    });
	win.loadURL('http://140.113.199.199:7788/connection');
	let contents = win.webContents;
	console.log(contents);
}

app.on('ready', createWindow);
