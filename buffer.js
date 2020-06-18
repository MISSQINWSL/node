// 在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
// 原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

// 1.创建 Buffer 类
// Buffer 提供了以下 API 来创建 Buffer 类：
// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

// 实例演示：
// 创建一个长度为10、每个空间都用0填充的Buffer
const buf1 = Buffer.alloc(10);
// 创建一个长度为10、每个空间都用0x1填充的Buffer
const buf2 = Buffer.alloc(10, 1);
// 创建一个长度为10、且未初始化的Buffer，这个方法比alloc()更快，但返回的Buffer实例可能包含旧数据，因此需要使用fill()或write()重写
const buf3 = Buffer.allocUnsafe(10);
// 创建一个包含[0x1, 0x2, 0x3]的Buffer
const buf4 = Buffer.from([1, 2, 3]);
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5 = Buffer.from('test');
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer
const buf6 = Buffer.from('test', 'latin1');

// 2.写入缓冲区
// 写入 Node 缓冲区的语法如下所示：
// buf.write(string[, offset[, length]][, encoding])
const buf = Buffer.alloc(256);
let len = buf.write('sarah, fighting!');
console.log("写入字节个数：" + len);

// 3.从缓冲区读取数据
// 读取 Node 缓冲区数据的语法如下所示：
// buf.toString([encoding[, start[, end]]])
console.log(buf.toString('ascii'));

// 4.将 Buffer 转换为 JSON 对象
// 将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
// buf.toJSON()
const json = JSON.stringify(buf);
// 输出{"type":"Buffer","data":[115,97,114,97,104,44,32,102,105,103,104,116,105,110,103,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
console.log(json);
const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);

// 除了上面的方法外，还有关于字符串处理的方法，诸如：Buffer.concat, Buffer.compare, Buffer.copy, Buffer.slice, Buffer.length