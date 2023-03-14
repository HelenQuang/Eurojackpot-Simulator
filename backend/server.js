const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
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

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! SHUTING DOWN...".bold.bgRed);
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful".bold.bgYellow);
  });


const port = process.env.PORT || 8000;

//To log development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//To read data from body into req.body
app.use(express.json({ limit: "10kb" }));

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

//Serving static files
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(port, () => {
  console.log(`App running on port ${port}`.bold.bgCyan);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! SHUTING DOWN...".bold.bgRed);
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});