const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({icon:'icon.png'});
	mainWindow.setIco
	mainWindow.loadURL('http://beta.communiquons.org/login');
	
	mainWindow.on('closed', () =>{
		mainWindow = null;
	});
}

app.on('ready', createWindow);