/* Bubble Sort
 * Compare each element to every other element
 * O(n) = n^2 - n 
 */

function bubbleSort(unsorted){
    let swapped = true;
    let counter = 0;
    while (swapped){
        swapped = false;
        for (let i=1; i<unsorted.length; i++){
            if (unsorted[i-1]>unsorted[i]){
                [unsorted[i-1],unsorted[i]]=[unsorted[i],unsorted[i-1]];
                swapped = true;
            }
            counter ++;
            console.log(unsorted, counter);
        }
    }


}

bubbleSort([8,7,6,5,4,3,2,1]);