var express = require('express');
var app = express();
app.use(express.static('html'));
app.use('/action',express.urlencoded({extended:true}));

var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/submit-message', function (req, res) {
    //res.send('Submit route !!');
    var name = req.query.inputName;
    var email = req.query.inputEmail;
    var message = req.query.inputMessage;
    console.log('Success');
    res.send(req.query);
    // res.redirect('index.html');
});


app.get('*', function(req, res){
  res.status(404).sendFile('404page.html', { root: '.' });
});

// // Handle 404 - Keep this as a last route
// app.use(function(req, res, next) {
//     res.status(404);
//     res.render('404page.html');
// });

app.listen(5500, function () {
    console.log('Example app listening on port 5500!');
});