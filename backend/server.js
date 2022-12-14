const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const colors = require("colors");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! SHUTING DOWN...".bold.bgRed);
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful".bold.bgYellow);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`.bold.bgCyan);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! SHUTING DOWN...".bold.bgRed);
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
