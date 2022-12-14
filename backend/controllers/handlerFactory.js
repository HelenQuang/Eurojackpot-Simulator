const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find();

    if (!doc) {
      return next(new AppError("Cannot find any document", 404));
    }

    res.status(200).json({ status: "success", results: doc.length, data: doc });
  });

exports.getSpecificOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return next(new AppError("Cannot find any document with this ID", 404));
    }

    res.status(200).json({ status: "success", data: doc });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //A new updated doc will be returned
      runValidators: true, //When update doc, validators in schema run again
    });

    if (!doc) {
      return next(new AppError("Cannot find any document with this ID", 404));
    }

    res.status(200).json({ status: "success", data: doc });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);

    res.status(201).json({ status: "success", data: newDoc });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("Cannot find any document with this ID", 404));
    }

    res.status(204).json({ status: "success", data: null });
  });
