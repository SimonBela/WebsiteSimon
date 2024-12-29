import fs from 'fs';
import archiver from 'archiver';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a file to stream archive data to
const output = fs.createWriteStream('project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', () => {
  console.log('Archive created successfully');
});

archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files and directories
archive.glob('**/*', {
  ignore: [
    'node_modules/**',
    'dist/**',
    '.git/**',
    'project.zip',
    'download.js'
  ]
});

// Finalize the archive
archive.finalize();