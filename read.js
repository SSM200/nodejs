const fs = require('fs');//in built module

/*
 utf8:
 standard encoding format.
 Variable length character encoding and transformation format version 8. 
 Each character is 1-4 bytes.
 require: 
 functionality of require in nodejs is easiest way to include any module that exist in separate files
*/

fs.readFile('./demofile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});