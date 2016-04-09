/*
    NOTE:
       This code should is intended only for testing locally. In production, we
    should handle this better through Node.js, IIS, etc.
*/

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
  console.log("Server running on 8080");
});