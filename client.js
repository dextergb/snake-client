const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("it's connected")
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  const name = 'DGB';
  conn.write(`Name: ${name}`);
  // setTimeout(() => {
  //   conn.write("Move: up");
  
  // }, 1000);
  
  



  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
};

// Supported Move Commands
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)