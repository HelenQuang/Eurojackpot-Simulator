const express = require("express");
const {
  getAllUsers,
  getSpecificUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getSpecificUser).patch(updateUser).delete(deleteUser);

module.exports = router;
