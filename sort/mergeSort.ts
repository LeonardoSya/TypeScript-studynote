/*
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-11-01 11:10:08
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-11-21 13:40:02
 * @FilePath: \TypeScript\sort\mergeSort.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left); 
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));

}

const unsortedArray2 = [64, 34, 25, 12, 22, 11, 90];

console.log(mergeSort(unsortedArray2));

