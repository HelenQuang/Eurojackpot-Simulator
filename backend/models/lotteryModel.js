const mongoose = require("mongoose");

const lotterySchema = new mongoose.Schema({
  id: String,
  tickets: [
    {
      mainNum: [
        {
          type: Number,
          required: [true, "Lottery ticket must have 5 main numbers"],
          max: 50,
          min: 1,
        },
      ],

      starNum: [
        {
          type: Number,
          required: [true, "Lottery ticket must have 2 star numbers"],
          max: 12,
          min: 1,
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
