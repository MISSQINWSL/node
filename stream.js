// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
// 1.从流中读取数据
// 实例如下
let fs = require('fs');
let data = '';
// 创建可读流
let readerStream = fs.createReadStream('test.txt');
// 设置编码为utf8
readerStream.setEncoding('UTF8');
// 处理流事件中的data, end, error
readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('end', function() {
    console.log(data);
});
readerStream.on('error', function(error) {
    console.log(error.stack);
});
console.log("读取操作执行完毕");

// 2.写入流
// 实例如下
let writeData = 'it is fine';
let writerStream = fs.createWriteStream('test.txt');
// 使用utf8编码写入数据
writerStream.write(writeData, 'utf8');
// 标记文件结尾
writerStream.end();
// 处理流事件中的finish, error
writerStream.on('finish', function() {
    console.log("数据写入完成");
});
writerStream.on('error', function(error) {
    console.log(error.stack);
});
console.log("写入程序执行完毕");

// 管道流：管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中
// 管道读写操作，先读取readerStream里的文件内容，再将其写到writerStream流对应的文件中
readerStream.pipe(writerStream);
console.log("管道程序执行完毕");