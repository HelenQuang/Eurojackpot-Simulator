import React, { useEffect } from "react";
import styles from "../../../styles/Number.module.css";

interface MainNumberTableProps {
  mainNum: number[];
  setMainNum: React.Dispatch<React.SetStateAction<number[]>>;
  maxMainNum: boolean;
  setMaxMainNum: React.Dispatch<React.SetStateAction<boolean>>;
}

const mainNumberArr = Array.from({ length: 50 }, (_, i) => i + 1);

const MainNumberTable = ({
  mainNum,
  setMainNum,
  maxMainNum,
  setMaxMainNum,
}: MainNumberTableProps) => {
  const selectNumberHandler = (selectNumber: number) => {
    const currentMainNumArr = [...mainNum];
    const existingNum = currentMainNumArr.includes(selectNumber);

    if (existingNum) {
      setMainNum(currentMainNumArr);
    } else {
      setMainNum([...currentMainNumArr, selectNumber]);
    }
  };

  useEffect(() => {
    if (mainNum.length === 5) {
      setMaxMainNum(true);
    } else {
      setMaxMainNum(false);
    }
  }, [mainNum, setMaxMainNum]);

  const numberClasses = (selectNumber: number) =>
    `${styles.number} ${
      mainNum.find((num) => num === selectNumber) ? styles.active : ""
    } ${maxMainNum ? styles.disable : ""}`;

  return (
    <div className={styles.numberBox}>
      <h4 className={styles.label}>Select 5 main numbers</h4>
      <div className={styles.numberGrid}>
        {mainNumberArr.map((number, index) => (
          <div
            key={`mainNum_${index}`}
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

export default MainNumberTable;
