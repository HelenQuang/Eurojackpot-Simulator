import ticketModel from "../models/ticketModel";

const compareLottery = (arr1: number[], arr2: number[]) => {
  return arr1.filter((value) => arr2.includes(value));
};

const showMatchNumbers = (
  lotteryByUser: ticketModel,
  lotteryResult: ticketModel
) => {
  const { mainNum: mainNumByUser, starNum: starNumByUser } = lotteryByUser;
  const { mainNum: mainNumResult, starNum: starNumResult } = lotteryResult;

  const matchMainNum = compareLottery(mainNumByUser, mainNumResult);
  const matchStarNum = compareLottery(starNumByUser, starNumResult);

  return { matchMainNum, matchStarNum };
};

export default showMatchNumbers;
