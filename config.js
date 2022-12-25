const path = require('path');

const NEW_FILES_DIRECTORY_PATH = ['some', 'path']; // Path to folder with new files
const OLD_FILES_ROOT_DIRECTORY_PATH = ['some', 'path']; // Path to folder in which files will be replaced
const IGNORE_DIRECTORIES = ['node_modules', 'build']; // Folders that will be ignored when looking for files to replace

const config = {
    NEW_FILES_DIRECTORY_PATH: path.join(__dirname, '..', ...NEW_FILES_DIRECTORY_PATH),
    OLD_FILES_ROOT_DIRECTORY_PATH: path.join(__dirname, '..', ...OLD_FILES_ROOT_DIRECTORY_PATH),
    IGNORE_DIRECTORIES
};

module.exports = config;
