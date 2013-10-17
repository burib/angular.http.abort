var express = require('express'),
    http = require('http'),
	app = express();

app.set('port', process.env.PORT || 666);
app.use(express.static(__dirname + '/public', { maxAge: 666 }));

app.get('/data', function (req,res) {
    res.type('application/json');
    setTimeout(function () {
        res.send({});
    }, 6000);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
