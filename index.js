const { ipcRenderer } = require('electron');

const loadButton = document.getElementById('load-button');
const resultArea = document.getElementById('result-area');

loadButton.addEventListener('click', () => {
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log('renderer process');
    console.log('arg:', arg);
    resultArea.append(arg);
  });
  ipcRenderer.send('asynchronous-message', '비어 있는 값');
});
