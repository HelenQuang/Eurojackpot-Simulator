import { useEffect } from "react";
import styles from "../../../styles/Number.module.css";

interface StarNumberTableProps {
  starNum: number[];
  setStarNum: React.Dispatch<React.SetStateAction<number[]>>;
  maxStarNum: boolean;
  setMaxStarNum: React.Dispatch<React.SetStateAction<boolean>>;
}
const starNumberArr = Array.from({ length: 12 }, (_, i) => i + 1);

const StarNumberTable = ({
  starNum,
  setStarNum,
  maxStarNum,
  setMaxStarNum,
}: StarNumberTableProps) => {
  const selectNumberHandler = (selectNumber: number) => {
    const currentStarNumArr = [...starNum];
    const existingNum = currentStarNumArr.includes(selectNumber);

    if (existingNum) {
      setStarNum(currentStarNumArr);
    } else {
      setStarNum([...currentStarNumArr, selectNumber]);
    }
  };

  useEffect(() => {
    if (starNum.length === 2) {
      setMaxStarNum(true);
    } else {
      setMaxStarNum(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starNum, setMaxStarNum]);

  const numberClasses = (selectNumber: number) =>
    `${styles.number} ${
      starNum.find((num) => num === selectNumber) ? styles.active : ""
    } ${maxStarNum ? styles.disable : ""}`;

  return (
    <div className={styles.numberBox}>
      <h4 className={styles.label}>Select 2 star numbers</h4>
      <div className={styles.numberGrid}>
        {starNumberArr.map((number, index) => (
          <div
            key={`starNum_${index}`}
            className={numberClasses(number)}
            onClick={() => {
              selectNumberHandler(number);
            }}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarNumberTable;
