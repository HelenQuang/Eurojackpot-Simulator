const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");

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
// app.use("/api/v1/lotteries", lotteryRouter);

module.exports = app;
