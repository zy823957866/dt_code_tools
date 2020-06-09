// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const fs = require("fs");

// document.getElementById('btn').onclick = function() {
//   console.log(process.env)
// }

// //拖拽功能测试
// let dragTest = document.getElementById('drag_test');
// dragTest.addEventListener('drop', (e) => {
//   e.preventDefault();

//   let files = e.dataTransfer.files;

//   if(files && files.length > 0) {
//     console.log("path:", files[0].path)
//     document.getElementById("content").innerHTML = fs.readFileSync(files[0].path).toString();
//     console.log(JSON.parse(fs.readFileSync(files[0].path)))
//   }
// })

// dragTest.addEventListener('dragover', (e) => {
//   e.preventDefault();
// })


// const webview = document.querySelector('webview')
// const indicator = document.querySelector('.indicator')

// const loadstart = () => {
//   indicator.innerText = 'loading...'
// }

// const loadstop = () => {
//   indicator.innerText = 'ok'
// }

// webview.addEventListener('did-start-loading', loadstart)
// webview.addEventListener('did-stop-loading', loadstop)


/**
 * 读取文件
 */

//  setTimeout(() => {
  // fs.readFile(__dirname + '/file/test.txt', 'utf8', (err, fd) => {
  //   //fd is our file descriptor
  //   alert("ahahah")
  //   console.log(err, fd)
  // })
  // fs.readFile(__dirname + '/file/test.json', 'utf8' , (err, data) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
    
  //   //打印文件
  //   console.log(data)
  // })

  try {
    const data = fs.readFileSync(__dirname + '/file/test.json', 'utf-8');

    //获取文件内容
    let _data = JSON.parse(data);

    console.log(_data)

    //设置新的内容
    let _nData = Object.assign({}, _data, {
      name: '张三',
      height: 180,
      count: new Date().getTime()
    });

    writeFile(_nData)

  } catch (err) {
    console.log(err)
  }


  function writeFile(content) {
    try {
      const data = fs.writeFileSync(__dirname + '/file/test.json', JSON.stringify(content, null, 4))
      //file written successfully
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

//  }, 5000);

