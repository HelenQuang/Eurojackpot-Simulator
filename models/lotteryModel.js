const mongoose = require("mongoose");

const lotterySchema = new mongoose.Schema({
  tickets: [{ mainNum: [Number], starNum: [Number] }],
  cost: Number,
  result: [{ mainNum: [Number], starNum: [Number] }],
  win: Number,
  playAt: { type: Date, default: Date.now() },
});

const Lottery = mongoose.model("Lottery", lotterySchema);

module.exports = Lottery;
