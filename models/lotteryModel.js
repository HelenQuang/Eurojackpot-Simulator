const mongoose = require("mongoose");

const lotterySchema = new mongoose.Schema({
  tickets: [
    {
      mainNum: [
        {
          type: Number,
          required: [true, "Lottery ticket must have 5 main numbers"],
        },
      ],

      starNum: [
        {
          type: Number,
          required: [true, "Lottery ticket must have 2 star numbers"],
        },
      ],
    },
  ],
  cost: {
    type: Number,
  },
  result: [
    {
      mainNum: [Number],
      starNum: [Number],
    },
  ],
  prize: Number,
  playAt: { type: Date, default: Date.now() },
});

const Lottery = mongoose.model("Lottery", lotterySchema);

module.exports = Lottery;
