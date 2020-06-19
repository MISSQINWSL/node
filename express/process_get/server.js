let express = require('express'),
    app = express();

app.use('/public', express.static('public'));
app.get('/index.html', function(request, response) {
    response.sendFile(__dirname + '/' + 'index.html');
});
app.get('/process_get', function(request, response) {
    // 输出JSON格式
    let res = {
        "first_name": request.query.first_name,
        "last_name": request.query.last_name
    };
    console.log(res);
    response.end(JSON.stringify(res));
});
let server = app.listen(8888, function() {
    let host = server.address().address,
        port = server.address().port;
    console.log("应用实例，访问地址为：http://%s:%s", host, port);
});