const {
    app,
    BrowserWindow
} = require('electron');
let appWindow
function createWindow() {
    appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        useContentSize: true
    })
    appWindow.setMenu(null)
    appWindow.loadFile('index.html')
    appWindow.on('closed', function() {
        appWindow = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if (appWindow === null) {
        createWindow()
    }
})
