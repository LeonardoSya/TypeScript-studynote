function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];
    console.log(`pivot:${pivot}`);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
            console.log(`left:${left}`);
        } else {
            right.push(arr[i]);
            console.log(`right:${right}`);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));

}

const unsortedArray1 = [64, 34, 25, 12, 22, 11, 90]

console.log(quickSort(unsortedArray1));