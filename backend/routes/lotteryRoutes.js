const express = require("express");
const {
  getAllLotteries,
  getSpecificLottery,
  submitLottery,
} = require("../controllers/lotteryController");
const { protect, restrict } = require("../controllers/authController");

const router = express.Router();

router.use(protect);

router.route("/").get(restrict, getAllLotteries).post(submitLottery);
router.route("/:id").get(getSpecificLottery);

module.exports = router;
