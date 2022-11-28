const Lottery = require("../models/lotteryModel");
const factory = require("./handlerFactory");

exports.getAllLotteries = factory.getAll(Lottery);
exports.getSpecificLottery = factory.getSpecificOne(Lottery);
exports.createLottery = factory.createOne(Lottery);
