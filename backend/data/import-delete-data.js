const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

const User = require("../models/userModel");
const Lottery = require("../models/lotteryModel");

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

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const lotteries = JSON.parse(
  fs.readFileSync(`${__dirname}/lotteries.json`, "utf-8")
);

const importData = async () => {
  try {
    await User.create(users);
    await Lottery.create(lotteries);

    console.log("Data successfully imported!".bgGreen);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Lottery.deleteMany();

    console.log("Data successfully deleted!".bgMagenta);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else {
  deleteData();
}
