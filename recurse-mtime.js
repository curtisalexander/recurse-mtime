var dir = require('node-dir');
var fs = require('fs');

path = process.argv[2];

var allFiles = [];

function unique (arr) {
  var n = {};
  var r = [];

  for (var i = 0; i < arr.length; i++) {
    if (!n[arr[i]]) {
      n[arr[i]] = true;
      r.push(this[i]);
    };
  };
  return r;
};

function fileYearMonth (file, idx) {
  fs.stat(file, function (err, stats) {
    if (err) throw error;
    allFiles[idx] = {'file': file, 'year': stats['mtime'].getFullYear(), 'month': stats['mtime'].getMonth()};
  console.log(allFiles[idx]);
  });
  console.log(unique(allFiles.year));
};

dir.files(path, function (err, files) {
  if (err) throw err;
  for(var i = 0; i < files.length; i++) {
    fileYearMonth(files[i], i); 
  };
});
