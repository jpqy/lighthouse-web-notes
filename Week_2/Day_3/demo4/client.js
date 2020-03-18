const net = require('net');
const stdin = process.stdin;

const connection = net.createConnection({
    host: 'localhost',
    port: 3000
  })

connection.setEncoding('utf8');
stdin.setEncoding('utf8');


connection.on('data', (data) => {
  console.log("SERVER replied:", data);
})

stdin.on('data', (input) => {
  console.log("I wrote this:", input);
  connection.write(input);
})
