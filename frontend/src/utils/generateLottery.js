/* LOGIC 
randomNum = Math.floor((Math.random() * (max - min + 1)) + min

indexOf() === -1 --> No match found
*/

const generateLottery = () => {
  let generatedMainNum = [];

  while (generatedMainNum.length < 5) {
    let randomNum = Math.floor(Math.random() * 50) + 1;

    if (generatedMainNum.indexOf(randomNum) === -1) {
      generatedMainNum.push(randomNum);
    }
  }

  let generatedStarNum = [];

  while (generatedStarNum.length < 2) {
    let randomNum = Math.floor(Math.random() * 12) + 1;

    if (generatedStarNum.indexOf(randomNum) === -1) {
      generatedStarNum.push(randomNum);
    }
  }

  return {
    mainNum: generatedMainNum.sort((a, b) => a - b),
    starNum: generatedStarNum.sort((a, b) => a - b),
  };
};

module.exports = generateLottery;
