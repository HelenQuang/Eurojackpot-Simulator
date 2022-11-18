const express = require("express");
const morgan = require("morgan");
const path = require("path");

const userRouter = require("./routes/userRoutes");
const lotteryRouter = require("./routes/lotteryRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();

/////////////////MIDDLEWARES
//Serving static files
app.use(express.static(path.join(__dirname, "public")));

//To read data from body into req.body
app.use(express.json({ limit: "10kb" }));

//To log development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

////////////////ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/lotteries", lotteryRouter);

///////////////HANDLE PAGE NOT FOUND AND GLOBAL ERROR
app.all("*", (req, res, next) => {
  next(new AppError(`${req.originalUrl} cannot find in this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
