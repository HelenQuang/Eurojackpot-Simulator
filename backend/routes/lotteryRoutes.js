const express = require("express");
const {
  getAllLotteries,
  getSpecificLottery,
  submitLottery,
} = require("../controllers/lotteryController");
const { protect, restrict } = require("../controllers/authController");
const { createTransaction } = require("../controllers/transactionController");

const router = express.Router();
router.use(protect);
router.route("/createTransaction").post(createTransaction);
router.route("/").get(getAllLotteries).post(submitLottery);
router.route("/:id").get(getSpecificLottery);

module.exports = router;
