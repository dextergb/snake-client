const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542}, () => {
      console.log("Connection established!");
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

  return conn;
};

console.log("Connecting ...");
connect();