import "./index.css";
import React, { useEffect, useState } from "react";

import SortingController from "../SortingController";

import { generateRandom, mergeSort } from "../helpers";

const Sorter = () => {
  const [arrayItems, setArrayItems] = useState([]);
  const [original, setOriginal] = useState([]);
  const [leftPointer, setLeftPointer] = useState(null);
  const [rightPointer, setRightPointer] = useState(null);

  const resetArray = () => {
    console.log("resetttttttttttttttttttttttttttt");
    let tempArray = [];
    //allow duplicate values
    for (let i = 0; i < 10; i++) {
      tempArray.push(generateRandom(5, 500));
    }

    setArrayItems([...tempArray]);
    setOriginal([...tempArray]);
  };

  useEffect(() => {
    resetArray();
    return () => {
      setArrayItems([]);
      setOriginal([]);
    };
  }, []);
  return (
    <>
      <div style={{ height: "200px" }}>
        {original.toString()}
        <div>
          {leftPointer !== null && rightPointer !== null ? (
            <span>{`merge sorting subarray betwwen ${leftPointer}, ${rightPointer}`}</span>
          ) : null}
        </div>
      </div>

      <div className="array-container">
        {arrayItems.map((item, index) => {
          return (
            <div
              className={`array-container--item ${
                leftPointer !== null &&
                rightPointer !== null &&
                leftPointer <= index &&
                index <= rightPointer
                  ? "picked"
                  : null
              }`}
              style={{ height: `${item}px` }}
              data-index={index}
              data-value={item}
              key={index}
            >
              {/* {item} */}
            </div>
          );
        })}
      </div>
      <button onClick={resetArray}>Generate New Array</button>
      <SortingController
        arrayItems={arrayItems}
        setArrayItems={setArrayItems}
        setLeftPointer={setLeftPointer}
        setRightPointer={setRightPointer}
      />
    </>
  );
};

export default Sorter;
