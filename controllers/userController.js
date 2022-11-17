const User = require("../models/userModel");
const factory = require("./handlerFactory");

exports.getAllUsers = factory.getAll(User);
exports.getSpecificUser = factory.getSpecificOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined. Please use /signup instead.",
  });
};
