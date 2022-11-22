/* LOGIC:
const mainNumByUser = [1, 2, 3, 4, 5];
const mainNumResult = [1, 2, 13, 14, 15];

const starNumByUser = [1, 2];
const starNumResult = [2, 3];

const lotteryByUser = {
  mainNumByUser,
  starNumByUser,
};

const lotteryResult = {
  mainNumResult,
  starNumResult,
};
*/

const compareLottery = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

const calculateWin = (lotteryByUser, lotteryResult) => {
  const { mainNum: mainNumByUser, starNum: starNumByUser } = lotteryByUser;

  const { mainNum: mainNumResult, starNum: starNumResult } = lotteryResult;

  const winMainNum = compareLottery(mainNumByUser, mainNumResult).length;

  const winStarNum = compareLottery(starNumByUser, starNumResult).length;

  if (winMainNum === 2 && winStarNum === 1) {
    return 9;
  }

  if (winMainNum === 1 && winStarNum === 2) {
    return 11;
  }

  if (winMainNum === 3 && winStarNum === 0) {
    return 17;
  }

  if (winMainNum === 3 && winStarNum === 1) {
    return 19;
  }

  if (winMainNum === 2 && winStarNum === 2) {
    return 23;
  }

  if (winMainNum === 4 && winStarNum === 0) {
    return 106;
  }

  if (winMainNum === 3 && winStarNum === 2) {
    return 120;
  }

  if (winMainNum === 4 && winStarNum === 1) {
    return 287;
  }

  if (winMainNum === 4 && winStarNum === 2) {
    return 4501;
  }

  if (winMainNum === 5 && winStarNum === 0) {
    return 129814;
  }

  if (winMainNum === 5 && winStarNum === 1) {
    return 718812;
  }

  if (winMainNum === 5 && winStarNum === 2) {
    return 45622698;
  } else {
    return 0;
  }
};

export default calculateWin;
