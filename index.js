var fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) throw err;
    console.log(files);
    fs.writeFile('files.txt',files, function(err) {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});