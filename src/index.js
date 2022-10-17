const fs = require('fs/promises');

const quakeLog = fs.readFile('./src/logs/qgames.log');

quakeLog.then((data) => {
  const logInfos = data.toString();

  console.log(logInfos);
})

quakeLog.catch((error) => {
  console.log(error);
})