const express = require('express');
const {
  getAllUsers,
  getSpecificUser,
  updateUser,
  createUser,
  deleteUser,
  getMe,
  updateMe,
  deleteMe,
  updateTransaction,
} = require('../controllers/userController');
const {
  signUp,
  logIn,
  logOut,
  protect,
  restrict,
  forgotPassword,
  resetPassword,
  updatePassword,
} = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signUp);
router.route('/login').post(logIn);
router.route('/logout').post(logOut);

router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);

router.use(protect);
router.route('/updatePassword').patch(updatePassword);
router.route('/me').get(getMe, getSpecificUser);
router.route('/updateMe').patch(updateMe);
router.route('/deleteMe').delete(deleteMe);
router.route('/updateTransaction').post(updateTransaction);

router.use(restrict);
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getSpecificUser).patch(updateUser).delete(deleteUser);

module.exports = router;
