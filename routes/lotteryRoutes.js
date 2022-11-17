const express = require("express");
const {
  getAllLotteries,
  getSpecificLottery,
} = require("../controllers/lotteryController");

const router = express.Router();

router.route("/").get(getAllLotteries);
router.route("/:id").get(getSpecificLottery);

module.exports = router;
