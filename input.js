let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (key) => {
    if (key === "\u0003") {
      console.log("exiting");
      process.exit();
    }
    if (key === "w") {
      conn.write("Move: up");
    }
    if (key === "a") {
      conn.write("Move: left");
    }
    if (key === "s") {
      conn.write("Move: down");
    }
    if (key === "d") {
      conn.write("Move: right");
    }
    if (key === "f") {
      conn.write("Say: EAT MY DUST!");
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};
