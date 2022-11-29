const Lottery = require("../models/lotteryModel");
const User = require("../models/userModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const generateLottery = require("../utils/generateLottery");
const calculateWin = require("../utils/calculateWin");

exports.getAllLotteries = factory.getAll(Lottery);
exports.getSpecificLottery = factory.getSpecificOne(Lottery);

exports.submitLottery = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const { tickets } = req.body;

  const lotteryResult = generateLottery();

  if (tickets.length > 0) {
    const totalCost = +tickets.length * 2;

    const prizeArr = tickets.map((ticket) =>
      calculateWin(ticket, lotteryResult)
    );

    const totalPrize = prizeArr.reduce((acc, val) => acc + val, 0);

    if (user.gameAccount > 0) {
      const updatedGameAccount = user.gameAccount - totalCost + totalPrize;
      user.gameAccount = updatedGameAccount;
      // await user.save();
    } else {
      return next(
        new AppError(
          "There is not enough money to play. Please top up your game account.",
          400
        )
      );
    }

    const lottery = {
      tickets: req.body.tickets,
      cost: totalCost,
      result: lotteryResult,
      prize: totalPrize,
    };

    user.lotteries = [...user.lotteries, lottery];

    await user.save();
    console.log(user);
    const newLottery = await Lottery.create(lottery);

    res.status(201).json({ status: "success", data: { data: newLottery } });
  }

  if (!tickets.length > 0) {
    return next(new AppError("Invalid lottery", 400));
  }
});
