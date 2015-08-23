var Quandl = require('quandl');
var quandl = new Quandl({
    auth_token: "Zdc7xqF9Y5tFuJh8dTjn"
});


module.exports = function(app) {
    app.get('/api/stock/:stock_name', function(req, res) {
        quandl.dataset({source: 'WIKI', table: req.params.stock_name}, function(err, response) {
            if(err) res.send(err);

            res.send(response);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
}