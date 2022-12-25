const fs = require('fs');
const path = require('path');

const config = require('../config');
const notTouchedFileNames = require('./not-touched-file-names');

// Recursively goes through all folders and replaces all
// old files with new ones if they have the same name
const replaceFilesDeep = (oldFilesDirPath, newFiles) => {
    const newFileNames = Object.keys(newFiles);
    const oldFileNames = fs.readdirSync(oldFilesDirPath);

    for (let oldFileName of oldFileNames) {
        const oldFilePath = path.join(oldFilesDirPath, oldFileName);
        const isDir = fs.statSync(oldFilePath).isDirectory();

        if (isDir) {
            if (config.IGNORE_DIRECTORIES.includes(oldFileName)) continue;

            replaceFilesDeep(oldFilePath, newFiles);
        } else {
            if (!newFileNames.includes(oldFileName)) continue;

            fs.writeFileSync(oldFilePath, newFiles[oldFileName]);
            // Removes new file from not touched new files array
            notTouchedFileNames.splice(notTouchedFileNames.findIndex(notFoundFileName => notFoundFileName === oldFileName), 1);
            console.log(`File ${oldFileName} with path ${oldFilePath}`);
        }
    }
};

module.exports = replaceFilesDeep;
