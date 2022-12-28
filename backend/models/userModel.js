const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please tell us your name"] },
  email: {
    type: String,
    required: [true, "Please provide us your email address"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide us a valid email"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    require: [true, "Please provide us your password"],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    require: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
  transaction: [
    {
      amount: {
        type: Number,
        required: [true, "Please choose the amount you want to top up"],
        min: 10,
      },
      paidAt: Date,
    },
  ],
  gameAccount: { type: Number, default: 100, min: 0 },
  lotteries: [{ type: mongoose.Schema.ObjectId, ref: "Lottery" }],
  active: { type: Boolean, default: true, select: false },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

/////////////////////////////////////////////
//MIDDLEWARE to populate lotteries data before .find() query
userSchema.pre(/^find/, function (next) {
  this.populate("lotteries");
  next();
});

/////////////////////////////////////////////
//MIDDLEWARE to bcrypt password and remove passwordConfirm bf saving to DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

//MIDDLEWARE to update passwordChangedAt property when password property is modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) {
    return next();
  }

  this.passwordChangedAt = Date.now() - 1000;

  next();
});

//////////////////////////////////////
//INSTANCE METHOD to check if the input password when log in is the same as the password in database
userSchema.methods.comparePassword = async function (
  inputPassword,
  databasePassword
) {
  return await bcrypt.compare(inputPassword, databasePassword);
};

//INSTANCE METHOD to check if user has recently change password
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp; //return TRUE when the time that JWT issued < the time that user changed password
  }
  return false; //return FALSE when there is no change
};

//INSTANCE METHOD to create new token when reset password
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; //expires in 10mins

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
