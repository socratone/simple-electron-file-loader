const loadButton = document.getElementById('load-button');
const resultArea = document.getElementById('result-area');
const fs = require('fs');

loadButton.addEventListener('click', () => {
  const fileNames = fs.readdirSync(__dirname);
  resultArea.append(fileNames);
});
