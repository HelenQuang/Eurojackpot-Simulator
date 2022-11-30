import lotteryModel from "./lotteryModel";
import transactionModel from "./transactionModel";

interface userInfoModel {
  name: string;
  email: string;
  photo: string;
  gameAccount: number;
  role: string;
  lotteries?: [lotteryModel];
  transaction: [transactionModel];
  token?: string;
}

export default userInfoModel;
