const sort = (unsortedArray) => {
  let arr = [...unsortedArray];
  let steps = [];

  const mergeSortInPlace = (arr, start, end) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      mergeSortInPlace(arr, start, mid);
      mergeSortInPlace(arr, mid + 1, end);
      mergeInPlace(arr, start, mid, end);
      console.log(`merged between ${start}, ${end}`, arr);
      steps.push({
        left: start,
        right: end,
        arr: [...arr],
      });
    }
  };

  mergeSortInPlace(arr, 0, arr.length - 1);
  console.log("final", arr, steps);
  return {
    ans: arr,
    steps: steps,
  };
};

const mergeInPlace = (arr, start, mid, end) => {
  //   console.log("now merging", arr, start, mid, end);
  // Calculate lengths of two subarrays to be merged
  let leftLength = mid - start + 1;
  let rightLength = end - mid;

  // Create temporary arrays to hold left and right halves
  let leftArr = new Array(leftLength);
  let rightArr = new Array(rightLength);

  // Copy data to temporary arrays
  for (let i = 0; i < leftLength; i++) {
    leftArr[i] = arr[start + i];
  }
  for (let j = 0; j < rightLength; j++) {
    rightArr[j] = arr[mid + 1 + j];
  }

  // Merge the temporary arrays back into arr[start...end]
  let i = 0; // Initial index of left subarray
  let j = 0; // Initial index of right subarray
  let k = start; // Initial index of merged subarray

  while (i < leftLength && j < rightLength) {
    if (leftArr[i].height <= rightArr[j].height) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  // Copy any remaining elements of leftArr[], if any
  while (i < leftLength) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  // Copy any remaining elements of rightArr[], if any
  while (j < rightLength) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
};

// const mergeInPlace = (arr, s, m, e) => {};

// const ans = sort([6, 3, 5, 2, 0, 9]);

// console.log(ans);
export default sort;

// const mergeSort = (arr) => {
//   if (arr.length < 2) return arr;

//   const midIndex = Math.floor(arr.length / 2);

//   const leftArray = arr.slice(0, midIndex);
//   const rightArray = arr.slice(midIndex);

//   return merge(mergeSort(leftArray), mergeSort(rightArray));
// };

// const merge = (arr1, arr2) => {
//   let tempArray = [];

//   let pointer1 = 0;
//   let pointer2 = 0;

//   while (pointer1 < arr1.length && pointer2 < arr2.length) {
//     if (arr1[pointer1] < arr2[pointer2]) {
//       tempArray.push(arr1[pointer1++]);
//     } else {
//       tempArray.push(arr2[pointer2++]);
//     }
//   }

//   if (pointer1 < arr1.length) tempArray.push(...arr1.slice(pointer1));
//   if (pointer2 < arr2.length) tempArray.push(...arr2.slice(pointer2));

//   console.log("merged", tempArray);

//   return tempArray;
// };
