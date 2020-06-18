let fs = require("fs");
fs.readFile('test.txt', function(error, data) {
    if(error) {
        return console.log(error);
    }
    console.log(data.toString());
});
console.log("程序执行结束！");