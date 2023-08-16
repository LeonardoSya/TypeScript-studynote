function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

const arrSelectionSort = [2, 3, 665, 23, 97, 24, 6, 2];
console.log(selectionSort(arrSelectionSort));