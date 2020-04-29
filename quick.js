// quick sort
// partition based on a pivot point
// sort in place
// pivot will be last element

const readline = require('readline-sync');

function quickSort() {
    let pivot = unsorted.length - 1;
    let low = 0;
    let high = pivot - 1;

    if (unsorted.length < 2) {
        return;
    }

    partition(low, high, pivot);

}

function partition(left, right, pivotPt) {
    // if value > pivot -> right
    // if value < pivot -> left

    let low = left;
    let high = right;
    let pivot = pivotPt;


    if (left >= right) {
        // two or fewer left
        if (left >= pivotPt) {
            // empty array or one number 
            return;
        } else if (unsorted[left] > unsorted[pivot]) {
            // two numbers left - compare
            [unsorted[left], unsorted[pivot]] = [unsorted[pivot], unsorted[left]];
            return;
        }


        console.log("Exit time: ", left, right, pivotPt);
        return unsorted;
    }
    // console.log(unsorted.slice(low,high));
    // console.log(unsorted);

    while (low < high) {
        if (unsorted[low] < unsorted[pivot]) {
            // move right
            low++;
            console.log("low: ", low);
        } else if (unsorted[high] >= unsorted[pivot]) {
            // move left
            high--;
            console.log("high: ", high);
        } else if (unsorted[low] >= unsorted[pivot] && unsorted[high] < unsorted[pivot]) {
            // swap
            [unsorted[low], unsorted[high]] = [unsorted[high], unsorted[low]];
            low++;
            high--;
            console.log("low: ", low, " high: ", high);
        }
    }
    // swap with high
    console.log("low: ", low, " high: ", high);

    
    let i=0;
    while (unsorted[i]<unsorted[pivot]){
        i++;
    }

    console.log(i);
    
    if (unsorted[i] > unsorted[pivot]) {
        [unsorted[i], unsorted[pivot]] = [unsorted[pivot], unsorted[i]];
        pivot = i;
    }

    // if (unsorted[low] > unsorted[pivot]) {
    //     [unsorted[low], unsorted[pivot]] = [unsorted[pivot], unsorted[low]];
    //     pivot = low;
    // }

    // if (unsorted[high+1] > unsorted[pivot]) {
    //     [unsorted[high+1], unsorted[pivot]] = [unsorted[pivot], unsorted[high+1]];
    //     pivot = high+1;
    // }



    console.log(unsorted);

    console.log("left: ", unsorted.slice(left, pivot));
    console.log("Pivot: ", unsorted[pivot]);
    console.log("right: ", unsorted.slice(pivot + 1, pivotPt + 1));

    readline.question('hit enter to continue');

    partition(left, pivot - 2, pivot - 1);
    partition(pivot + 1, pivotPt - 1, pivotPt);


}
// let unsorted = [5, 13, 88, 24, 12, 373, -14, 7, 33, 44, 34, 77];
// let unsorted = [2, 3, 5, 8, 14, 83, 34, 44, 87, 74, 34, 73 ];
// let unsorted = [92, 83, 65, 8, 14, 83, 4, 6, 34, 44, 87, 74, 34, 73, 99 ];
let unsorted = [9,8,7,6,5,4,3,2,1];
quickSort();
console.log(unsorted);