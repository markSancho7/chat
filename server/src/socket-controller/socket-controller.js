const establishSocketConnection = (socket, io) => {
  console.log("Cliente conectado");

  // form
  socket.on("form", (data) => {
    console.log(data);
    io.emit("responseForm", data);
  });
  // users
  socket.on("users", (data) => {
    console.log(data);
    io.emit("responseUsers", data);
  });
};

module.exports = establishSocketConnection;
