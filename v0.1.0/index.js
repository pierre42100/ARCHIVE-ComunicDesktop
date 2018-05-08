const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({icon:'resources/app/icon.png'});
	mainWindow.setIco
	mainWindow.loadURL('http://communiquons.org');
	
	mainWindow.on('closed', () =>{
		mainWindow = null;
	});
}

app.on('ready', createWindow);