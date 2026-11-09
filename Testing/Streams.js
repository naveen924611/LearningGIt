// // const {Duplix,Transform} = require('fs');
// // const fs =require('fs');
// // const readStream = fs.createReadStream('Buffers.txt');

// // // const writeStream = fs.createWriteStream('Buffers.txt');

// // // const duplix = new Duplix();
// // // const transform = new Transform();

// // // writeStream.on('finish',()=>{

// // // })
// // readStream.on('data',(data)=>{
// //     console.log(data);
// // })
// // readStream.emit('data');
// // // console.log(readStream);

// const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'Buffers.txt');
// console.log(__dirname);
// const readStream = fs.createReadStream(filePath, {
//     encoding: 'utf8',
//     highWaterMark: 100
// });

// readStream.on('data', (chunk) => {
//     console.log('Received chunk:');
//     console.log(chunk);
// });

// readStream.on('end', () => {
//     console.log('Reading completed!');
// });

// readStream.on('error', (err) => {
//     console.log('Error:', err.message);
// });

// readStream.addListener('d1',(d)=>{
//     console.log(d);
// })
// readStream.emit('d1',"HelloNavee");

// const writeStream = fs.createWriteStream('./output.txt');

// writeStream.write('Hello Naveen!\n');

// writeStream.write('Learning Node.js streams.\n');

// writeStream.write('This is writable stream.\n');

// writeStream.end('Writing completed!');
// writeStream.on('finish', () => {
//     console.log('All data written successfully!');
// });
// readStream.pipe(writeStream);
// writeStream.on('finish',()=>{
//     console.log("done copying");
// })
// writeStream.on('error',(err)=>{
//     console.log('error',err);
// })

// const fs = require('fs');

// const readStream = fs.createReadStream(filePath);

// const writeStream = fs.createWriteStream('./copy.txt');

// readStream.pipe(writeStream);

// writeStream.on('finish', () => {
//     console.log('File copied successfully!');
// });

// readStream.on('error', (err) => {
//     console.log('Reading error:', err.message);
// });

// writeStream.on('error', (err) => {
//     console.log('Writing error:', err.message);
// });


const { Duplex } = require('stream');
// const fs =require('fs');
// const duplex = new Duplex({

//     read(size) {
    //     this.push('Hello from readable side!\n');
    //     this.push(null); //no more readable thing is there
    // },

//     write(chunk, encoding, callback) {
//         console.log('Received:', chunk); // here chunks reacive in the Buffer hex form
//         callback();
//         /** chunk contains incoming data.
//             encoding describes its encoding.
//             callback() signals that the write operation has completed. */
//     }

// });

const duplex = new Duplex();
duplex._read =function (size){
this.push('Hello from readable side!\n');
        this.push(null); //no more readable thing is there
}
duplex._write=function (chunk, encoding, callback){
        console.log('Received:', chunk); // here chunks reacive in the Buffer hex form
        callback();
        /** chunk contains incoming data.
            encoding describes its encoding.
            callback() signals that the write operation has completed. */
    }

// Reading
duplex.on('data', (chunk) => {
    console.log('Read:', chunk.toString());
});

// Writing
duplex.write('Hello from writable side!');

duplex.end();