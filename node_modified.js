var fs = require('fs')

path = process.argv[2]

var stats = fs.stat(path, function cb (err, stats) {
  if (err) {
    throw error
  }

  console.log('Year = ' + stats['mtime'].getFullYear())
  console.log('Month = ' + stats['mtime'].getMonth())

})
