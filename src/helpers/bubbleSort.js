// const bubbleSort = () => {
//   console.log("hhhhh");
// };
// export default bubbleSort;

const bubbleSort = (arr) => {
  const pairs = [];
  let n = arr.length;
  const prevRect = arr.slice();
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (prevRect[j].height > prevRect[j + 1].height) {
        // swap arr[j+1] and arr[j]
        const recti = { ...prevRect[j] };
        const rectj = { ...prevRect[j + 1] };
        prevRect[j + 1] = recti;
        prevRect[j] = rectj;
        pairs.push({
          xx: j,
          yy: j + 1,
          changed: true,
        });
      } else {
        pairs.push({
          xx: j,
          yy: j + 1,
          changed: false,
        });
      }
      if (j === n - i - 2) {
        pairs.push({
          xx: n - i - 1,
          yy: n - i - 1,
          changed: false,
        });
      }
    }
  }
  pairs.push({
    xx: 0,
    yy: 0,
    changed: false,
  });
  return { steps: pairs, bars: prevRect };
};

export default bubbleSort;
