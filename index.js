const fs = require('fs');
const { parse } = require('csv-parse');

const results = [];

fs.createReadStream('kepler_data.csv')
  .on('data', data => {
    results.push(data);
  })
  .on('end', () => {
    console.log(results);
    console.log('done');
  })
  .on('error', error => {
    console.error(error);
  });
