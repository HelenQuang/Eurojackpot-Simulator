const express = require("express");
const {
  getAllLotteries,
  getSpecificLottery,
  submitLottery,
} = require("../controllers/lotteryController");
const { protect, restrict } = require("../controllers/authController");
const { createTransaction } = require("../controllers/transactionController");

const router = express.Router();
router.route("/createTransaction").post(createTransaction);
// router.use(protect);

router.route("/").get(restrict, getAllLotteries).post(submitLottery);
router.route("/:id").get(getSpecificLottery);

module.exports = router;
