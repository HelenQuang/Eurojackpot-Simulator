/* LOGIC 
randomNum = Math.floor((Math.random() * (max-min+1)) + min

indexOf() === -1 --> No match found
*/

const generateLottery = () => {
  let selectedMainNum = [];

  while (selectedMainNum.length < 5) {
    let randomNum = Math.floor(Math.random() * 50) + 1;

    if (selectedMainNum.indexOf(randomNum) === -1) {
      selectedMainNum.push(randomNum);
    }
  }

  let selectedStarNum = [];

  while (selectedStarNum.length < 2) {
    let randomNum = Math.floor(Math.random() * 12) + 1;

    if (selectedStarNum.indexOf(randomNum) === -1) {
      selectedStarNum.push(randomNum);
    }
  }

  return {
    mainNum: selectedMainNum.sort((a, b) => a - b),
    starNum: selectedStarNum.sort((a, b) => a - b),
  };
};

export default generateLottery;
