const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname,'text.txt');
console.log(dirname);

fs.readFile(dirname, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});