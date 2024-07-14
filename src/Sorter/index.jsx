import "./index.css";
import React, { useEffect, useState } from "react";

import SortingController from "../SortingController";
import Bars from "./components/bars";
import { generateRandom, mergeSort } from "../helpers";

const Sorter = ({ count = 10 }) => {
  const [arrayItems, setArrayItems] = useState([]);
  const [original, setOriginal] = useState([]);
  const [leftPointer, setLeftPointer] = useState(null);
  const [rightPointer, setRightPointer] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const resetArray = () => {
    let barObjects = [];
    for (let i = 0; i < count; i++) {
      barObjects.push(getBarObj(i));
    }
    setArrayItems([...barObjects]);
    setOriginal([...barObjects]);
  };
  const getBarObj = (keyIndex) => {
    return {
      height: generateRandom(5, 500),
      isSorted: false,
      isSorting: false,
      keyIndex: keyIndex,
    };
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
        {original.map((o) => o.height).toString()}

        <div>
          {leftPointer !== null && rightPointer !== null ? (
            <span>{`merge sorting subarray betwwen ${leftPointer}, ${rightPointer}`}</span>
          ) : null}
        </div>
      </div>

      <Bars
        rects={arrayItems}
        leftPointer={leftPointer}
        rightPointer={rightPointer}
      />

      <button onClick={resetArray}>Generate New Array</button>
      <SortingController
        arrayItems={arrayItems}
        setArrayItems={setArrayItems}
        setLeftPointer={setLeftPointer}
        setRightPointer={setRightPointer}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />
    </>
  );
};

export default Sorter;
