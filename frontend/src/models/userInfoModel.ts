import lotteryModel from "./lotteryModel";
import transactionModel from "./transactionModel";

interface userInfoModel {
  _id: string;
  name: string;
  email: string;
  photo: string;
  gameAccount: number;
  role: string;
  lotteries?: [lotteryModel];
  transaction: [transactionModel];
}

export default userInfoModel;
