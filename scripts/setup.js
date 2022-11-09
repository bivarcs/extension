const syncDir = require('../scripts/utils').syncDir;

const fs = require("fs");

Promise.all([
  ['./node_modules/@bivarcs/emitter/src/js/Emitter', './src/js/Emitter',],
].map(async (entry) => {
  const src = entry[0];
  const dist = entry[1];

  if (fs.existsSync(dist)) {
    await fs.promises.rm(dist, {
      force: true,
      recursive: true,
    })
  }

  return syncDir(src, dist)
})).catch(console.error);