const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
let win;

function createWindow () {
	win = new BrowserWindow(
		{
			width: 800,
		   	height: 1500,
			icon: __dirname + '/favicon.ico',
        	/*webPreferences: {
            	nodeIntegration: false
		   }*/
    	}
	);
	// win.webContents.openDevTools();
//	win.loadURL('http://140.113.199.199:7788/connection');
		 win.loadURL(url.format({
				 pathname: path.join(__dirname, 'index.html'),
				protocol: 'file:',
			   slashes: true
		}))
	 
	let contents = win.webContents;
}

app.on('ready', createWindow);
