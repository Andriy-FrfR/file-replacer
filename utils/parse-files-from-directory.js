const fs = require('fs');
const path = require('path');

// Takes directory path as argument and returns object
// that has all files of the directory in next form:
// { [fileName]: fileBody }
const parseFilesFromDirectory = (dirPath) => {
    const fileNames = fs.readdirSync(dirPath);
    const files = {};
    
    for (let fileName of fileNames) {
        const fileBody = fs.readFileSync(path.join(dirPath, fileName));
        files[fileName] = fileBody;
    };

    return files;
};

module.exports = parseFilesFromDirectory;
