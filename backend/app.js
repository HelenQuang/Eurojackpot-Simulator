const express = require("express");
const morgan = require("morgan");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const compression = require("compression");

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

//Compress text response sent to client
app.use(compression());

//To set security headers
app.use(helmet());

//To limit the requests coming from 1 IP => block these requests
const limiter = rateLimit({
  max: 200, //number of max requests
  windowMs: 60 * 60 * 1000, //Milisecond time window (1hour)
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

//To read data from browser cookie
app.use(cookieParser());

//To sanitize data against NoSQL query injection
app.use(mongoSanitize());

//To sanitize data against XSS attacks
app.use(xss());

////////////////ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/lotteries", lotteryRouter);

///////////////HANDLE PAGE NOT FOUND AND GLOBAL ERROR
app.all("*", (req, res, next) => {
  next(new AppError(`${req.originalUrl} cannot find in this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
