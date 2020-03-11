const net = require('net');
const stdin = process.stdin;

const connection = net.createConnection({
  host: '172.46.2.49',
  port: 3000
});

connection.setEncoding('utf8');
stdin.setEncoding('utf8');
connection.on('connect', () => {
  //connection.write(undefined);
});

connection.on('data', (data) => {
  console.log('Server replied: ', data);
});

stdin.on('data', (input) => {
  console.log("I wrote this: ", input);
  connection.write('\x07');
});