const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const destinationDir = path.join(__dirname, 'files-copy');

fs.mkdir(destinationDir, { recursive: true }, (err) => {
  if (err) throw err;
});
fs.readdir(dirname, (err, files) => {
  if (err) {
    throw err;
  }
  for (let i = 0; i < files.length; i++) {
    fs.copyFile((`${dirname}\\${files[i]}`), (`${destinationDir}\\${files[i]}`), function (error) {
      if (error) {
        throw error;
      } else {
        console.log('success!');
      }
    });
  }

});