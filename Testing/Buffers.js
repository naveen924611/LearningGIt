// const buffer = Buffer.from("HABC");  
// const buffer2 = Buffer.from("Hello Worl1d");  
// console.log(buffer.toString()==buffer2.toString()); //prints the Hexa decimal value of the string 
// // buffer.
// // console.log(buffer.sort().toString())
// console.log(buffer.compare(buffer2)) // gives output 1 if buffer is greater than buffer2, -1 if buffer is less than buffer2 and 0 if equal.
// console.log(Buffer.compare(buffer,buffer2)) // gives output 1 if buffer is greater than buffer2, -1 if buffer is less than buffer2 and 0 if equal.
//  buffer.copy(buffer2,2,0,5); // copies the buffer to buffer2 from 0 to 5 index
//  console.log(buffer2.toString());
 
// //  console.log(buffer.toJSON())
//  console.log(buffer.toString("utf8",0,5)) // prints the string from 0 to 5 index
//  const un = new Uint16Array(buffer.toJSON().data);
//  console.log(buffer)
//  console.log(un.toString("latin1"));
//  console.log([...buffer]);

//  const fs = require('fs');
// //  fs.writeFileSync("Testing/Buffers.txt", "Hello World 1111");
 
// //  fs.writeFile("Testing/Buffers.txt", "Hello World 1111", {flag:'a+' }, (err) => {
// //      if (err) {
// //          console.error(err);
// //          return;
// //         }else{
// //             console.log("File written successfully");
// //            const rsss= fs.readFileSync("Testing/Buffers.txt");
// //             console.log(rsss);
// //         }
// //     })
//  const rsss= fs.readFileSync("Testing/image.png");
//  const rs1= fs.readFileSync("Testing/image1.png");
//             console.log(rsss.compare(rs1));
//             console.log(rsss.equals(rs1));

// const img1 = Buffer.from('./image.png');
// const img2 = Buffer.from('./image1.png');
// console.log(img1);
// console.log(img2);
// const crypto = require('crypto');
// const hash = crypto.createHash('sha256');
// const hased = hash.update("Helleo").digest();
// const rand = crypto.randomBytes(16).toString('hex');

// const dek = crypto.scryptSync("1234",rand,32);

// console.log("Rand: ", dek);


// function hashData(data) {
//     return crypto
//         .createHash("sha256")
//         .update(data)
//         .digest("hex");
// }
// console.log(hashData("hello"));
// console.log(hashData("hello"));
// console.log(hashData("hello"));
// // const hased1 = hash.update("Hello").digest('hex');
// console.log(hased);
// // console.log(hased1);

// // const  readstream = fs.createReadStream('./Buffers.txt');
// // readstream.on('data', (chunk) => {
     

// // });
// // fs.open()


const crypto = require('crypto');

const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(12);
const iv = "hwhwhehrhthy";

const cipher = crypto.createCipheriv(
    'aes-256-gcm',
    key,
    iv
);

let encrypted = cipher.update(
    'Hello Naveen',
    'utf8',
    'hex'
);

console.log(encrypted);
encrypted += cipher.final('hex');
console.log(encrypted);
const decyp = crypto.createDecipheriv(
      'aes-256-gcm',
    key,
    iv
)

let data = decyp.update(
    encrypted,
    'hex',
    'utf8'
);
console.log("data ", data);
const authTag = cipher.getAuthTag();

console.log({ encrypted, iv: iv.toString('hex'), authTag: authTag.toString('hex') });