
class HeapSort {
    // 构建最大堆
    private static buildMaxHeap(arr: number[]): void {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            HeapSort.heapify(arr, n, i);
        }
    }

    // 使以根节点为 i 的子树成为最大堆
    private static heapify(arr: number[], n: number, i: number): void {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            // 交换根节点和最大值节点
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            // 递归地对交换后的子树进行堆化
            HeapSort.heapify(arr, n, largest);
        }
    }

    // 堆排序算法
    public static sort(arr: number[]): number[] {
        const n = arr.length;

        // 构建最大堆
        HeapSort.buildMaxHeap(arr);

        // 从堆顶开始取出最大值，然后调整堆
        for (let i = n - 1; i > 0; i--) {
            // 交换堆顶和当前未排序部分的最后一个元素
            [arr[0], arr[i]] = [arr[i], arr[0]];
            // 调整堆，保证堆的性质
            HeapSort.heapify(arr, i, 0);
        }

        return arr;
    }
}

// 使用示例
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = HeapSort.sort(unsortedArray);
console.log(sortedArray);
