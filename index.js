var express = require('express');
var bodyParser = require('body-parser')
var util = require('util');

var app = express();
var router  = express.Router();
app.use(bodyParser.json());
app.use('/', router);

function getHtContent() {
  return new Date().toISOString();
}

router.get('/', function(req, res) {
  
  var htHeader = '<HTML>' + 
                   '<HEAD><STYLE> ' +
                       'body{ background-color: lightblue; padding-top: 150px; text-align: center; }' +
                   '</HEAD></STYLE>' + 
                   '<BODY><H1>';                                         
  var htContent = getHtContent(); 
  var htFooter = '</H1></BODY></HTML>';
  
  res.send( htHeader + htContent + htFooter).end();
});

router.get('/plain', function(req, res) {
   res.send( getHtContent() ).end();
});

app.listen(3000);

