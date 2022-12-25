const config = require('./config');
const parseFilesFromDirectory = require('./utils/parse-files-from-directory');
const replaceFilesDeep = require('./utils/replace-files-deep');
const notTouchedFileNames = require('./utils/not-touched-file-names');

// Parses new files from directory that is specified in config
const newFiles = parseFilesFromDirectory(config.NEW_FILES_DIRECTORY_PATH);

// Initializes not touched new files
notTouchedFileNames.push(...Object.keys(newFiles));

// Replaces files from directory that is specified in config with new files
replaceFilesDeep(config.OLD_FILES_ROOT_DIRECTORY_PATH, newFiles);
console.log('Replaced successfully!');

// Shows files that were not used to replace old ones
notTouchedFileNames.length !== 0 && console.log(`Files ${notTouchedFileNames.join(', ')} were not found`);
