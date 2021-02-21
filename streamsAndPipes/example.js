const fs = require('fs');

const readStream = fs.createReadStream('./sample-text-file.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./example-output-2');

// readStream.on('data', (chunk) => {
//   console.log('---NEW CHUNK---');
//   console.log(chunk);
//   writeStream.write('\n---NEW CHUNK---\n');
//   writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);