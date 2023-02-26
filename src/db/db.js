import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connection = {};

const connect = async () => {
  if (connection.isConnected) {
    return console.log("Already Connected");
  }

  if (mongoose.connections.length > 0) {
    connect.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return console.log("use previous connection");
    }

    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGO_URI);
  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
};

const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnected");
    }
  }
};

export { connect, disconnect };
