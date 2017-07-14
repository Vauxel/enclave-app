const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;

require('electron-reload')(__dirname);

const path = require('path');
const url = require('url');

let mainWindow;

function createMainWindow() {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		center: true,
		frame: false,
		backgroundColor: '#282C34'
	});

	mainWindow.loadURL(`file://${__dirname}/app/index.html`);

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

app.on('ready', function() {
	createMainWindow();
});

app.on('window-all-closed', function() {
	if(process.platform != 'darwin') {
		app.quit();
	}
});