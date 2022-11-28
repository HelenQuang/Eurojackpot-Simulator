const express = require("express");
const {
  getAllLotteries,
  getSpecificLottery,
  createLottery,
} = require("../controllers/lotteryController");
const { protect, restrict } = require("../controllers/authController");

const router = express.Router();

router.use(protect);

router.route("/").get(restrict, getAllLotteries).post(createLottery);
router.route("/:id").get(getSpecificLottery);

module.exports = router;
