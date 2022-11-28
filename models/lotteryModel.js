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
    required: [true, "Lottery ticket must have a cost amount"],
  },
  result: [
    {
      mainNum: [
        {
          type: Number,
          required: [true, "Lottery result must have 5 main numbers"],
        },
      ],
      starNum: [
        {
          type: Number,
          required: [true, "Lottery result must have 2 star numbers"],
        },
      ],
    },
  ],
  prize: Number,
  playAt: { type: Date, default: Date.now() },
  user: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
});

const Lottery = mongoose.model("Lottery", lotterySchema);

module.exports = Lottery;
