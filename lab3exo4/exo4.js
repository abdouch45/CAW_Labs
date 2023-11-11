const fs = require('fs');

const text = process.argv[3];
const fileName = process.argv[2] ;

fs.writeFile(fileName, text, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('The file has been saved!');

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
});