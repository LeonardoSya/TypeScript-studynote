function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const array: number[] = [35, 7, 3, 33, 13, 9, 65];
console.log(bubbleSort(array));