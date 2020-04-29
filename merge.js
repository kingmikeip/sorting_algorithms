// merge sort
// partition until each array is length 1
// merge the arrays recursively and sort them that way

function mergeSort(unsorted) {
    if (unsorted.length < 2) {
        return unsorted;
    }
    // cut array into two
    let left = unsorted.slice(0, Math.ceil(unsorted.length / 2));
    let right = unsorted.slice(Math.ceil(unsorted.length / 2));
    // console.log(left, right);

    return merge(mergeSort(left), mergeSort(right));
    // recursively calls mergeSort until array is broken down to smaller
    // arrays of size 1 or 2
}

function merge(left, right) {
    // merges sorted smaller arrays
    let leftIndex = 0;
    let rightIndex = 0;
    let combinedArray = [];

    console.log("23: ", left, right);

    while (leftIndex < left.length && rightIndex < right.length) {
        // merge the two arrays
        if (left[leftIndex] < right[rightIndex]) {
            combinedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            combinedArray.push(right[rightIndex]);
            rightIndex++;
        }

    }

    //copies remaining
    while (leftIndex < left.length) {
        combinedArray.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        combinedArray.push(right[rightIndex]);
        rightIndex++
    }
    console.log(combinedArray);
    return combinedArray;
}

// console.log(mergeSort([5, 3, 6, 8, 3, 1, 14]));
console.log(mergeSort([43,6,33,8,94,1,0,5, 3, 6, 8, 3, 1, 14]));
