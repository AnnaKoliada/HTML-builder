const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'secret-folder');
function readfiles(dirname1) {
  console.log(dirname1);
  fs.readdir(dirname1, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        readfiles(`${dirname1}/${file.name}`);
      } else {

        let fileName;
        if (file.name[0] === '.') {
          fileName = file.name.slice(1);
        } else {
          fileName = file.name.slice(0, file.name.lastIndexOf('.'));
        }
        const ext = path.extname(file.name).slice(1, path.extname(file.name).length);

        fs.stat(`${dirname1}/${file.name}`, (err, stats) => {
          (console.log(`${fileName} - ${ext} - ${stats.size / 1024}kb`));
        });
      }


    });

  });

}
readfiles(dirname);