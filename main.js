// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

const exec = require('child_process').exec;

// 任何你期望执行的cmd命令，ls都可以
let cmdStr = 'adb shell'
// 执行cmd命令的目录，如果使用cd xx && 上面的命令，这种将会无法正常退出子进程
let cmdPath = '执行cmd命令的目录' 
// 子进程名称
let workerProcess

function runExec() {
  // exec('npm run start', function(err, stdout) {
  //   console.log(stdout)
  // })

  // // 执行命令行，如果命令不需要路径，或就是项目根目录，则不需要cwd参数：
  // workerProcess = exec(cmdStr, {cwd: cmdPath})
  // // 不受child_process默认的缓冲区大小的使用方法，没参数也要写上{}：workerProcess = exec(cmdStr, {})

  // // 打印正常的后台可执行程序输出
  // workerProcess.stdout.on('data', function (data) {
  //   console.log('stdout: ' + data);
  // });

  // // 打印错误的后台可执行程序输出
  // workerProcess.stderr.on('data', function (data) {
  //   console.log('stderr: ' + data);
  // });

  // // 退出之后的输出
  // workerProcess.on('close', function (code) {
  //   console.log('out code：' + code);
  // })
}

//   // 然后去ready里面去调用
// app.on('ready', function() {
//   const menu = Menu.buildFromTemplate(template)
//   Menu.setApplicationMenu(menu)

//   runExec() // 生效啦，可以做些什么执行一种相对的同步状态，例如判断输出内容到什么了

//   createWindow()
// })


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      // webviewTag: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  runExec();

  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
