var express = require('express')
var app = express()

app.use(express.static('public'))

//app.use(express.static(__dirname + '/public'));

app.listen(function () {
  console.log('Example app listening on port 3000!')
})
