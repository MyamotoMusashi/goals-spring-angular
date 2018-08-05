const fs = require('fs');
const path = require('path');
const util = require('util');

function createDirectory(directoryPath) {
  const directory = path.normalize(directoryPath);

  return new Promise((resolve, reject) => {
    fs.stat(directory, (error) => {
      if (error) {
        if (error.code === 'ENOENT') {
          fs.mkdir(directory, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(directory);
            }
          });
        } else {
          reject(error);
        }
      } else {
        resolve(directory);
      }
    });
  });
}


const readdir = util.promisify(fs.readdir);
const lstat = util.promisify(fs.lstat);
const unlink = util.promisify(fs.unlink);
const rmdir = util.promisify(fs.rmdir);

module.exports.removeDirectoryUtil = async (id) => {
	const dir = `${__dirname}/${id}`;
    try {
        const files = await readdir(dir);
        await Promise.all(files.map(async (file) => {
            try {
                const p = path.join(dir, file);
                const stat = await lstat(p);
                if (stat.isDirectory()) {
                    await removeDir(p);
                } else {
                    await unlink(p);
                    console.log(`Removed file ${p}`);
                }
            } catch (err) {
                console.error(err);
            }
        }))
        await rmdir(dir);
        console.log(`Removed dir ${dir}`);
    } catch (err) {
      console.error(err);
    }
}

module.exports.createDirectoryUtil = function createDirectoryUtil(id) {
  const directoryPath = `${__dirname}/${id}`;
  createDirectory(directoryPath).then((path) => {
    console.log(`Successfully created directory: '${path}'`);
  }).catch((error) => {
    console.log(`Problem creating directory: ${error.message}`)
  });
}

module.exports.openDirectoryUtil = function openDirectoryUtil(id) {
	const directoryPath = `${__dirname}/${id}`
	return new Promise ((resolve, reject) => {
			resolve(require('child_process').exec(`start "" "${directoryPath}"`))
	})
}

