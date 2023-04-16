var fs = require('fs');

// Create File.
fs.open('myfile.txt', 'w', function(err, file) {
    if (err) {
        console.log('Error opening a new file.');
        throw err;
    } else {
        console.log('File opened successfully');
    }
});

// Write to file.
// fs.writeFile('myfile.txt', 'File created with writeFile().', function(err) {
//     if (err) {
//         console.log('Error writing into new file.');
//         throw err;
//     } else {
//         console.log('File created successfully');
//     }
// });

// Append to a file.
// fs.appendFile('myfile.txt', 'appended using appendFile().', function(err) {
//     if (err) {
//         console.log('Error appending into the file.');
//         throw err;
//     } else {
//         console.log('File appened successfully');
//     }
// });

// Read from file.
// fs.readFile('myfile.txt', function(err, success) {
//     if (err) {
//         console.log('Error reading from file.');
//         throw err;
//     } else {
//         console.log('File read successfully : ', success.toString());
//     }
// });

// Rename file.
// fs.rename('myfile.txt', 'newName.txt', function(err) {
//     if (err) {
//         console.log('Error renaming file.');
//     } else {
//         console.log('File renamed successfully');
//     }
// });

// Delete file.
// fs.unlink('newName.txt', function(err) {
//     if (err) {
//         console.log('Error reading from file.');
//         throw err;
//     } else {
//         console.log('File deleted successfully');
//     }
// });

