const mongoose = require("mongoose");

const lotterySchema = new mongoose.Schema({
  tickets: [{ mainNumbers: [Number], starNumbers: [Number] }],
  cost: Number,
  result: [{ mainNumbers: [Number], starNumbers: [Number] }],
  win: Number,
  playAt: { type: Date, default: Date.now() },
});

const Lottery = mongoose.model("Lottery", lotterySchema);

module.exports = Lottery;
