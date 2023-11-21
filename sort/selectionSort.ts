/*
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-08-16 16:21:48
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-11-01 10:47:47
 * @FilePath: \TypeScript\sort\selectionSort.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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