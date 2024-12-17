function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }
    else {
        const arrayMid = Math.floor(array.length / 2);
        const arrayFirst = mergeSort(array.slice(0, arrayMid));
        const arraySecond = mergeSort(array.slice(arrayMid)); // one more if array is odd
        const sortedArray = [];
        let i = 0;
        let j = 0;
        while (i < arrayFirst.length && j < arraySecond.length) {
            if (arrayFirst[i] < arraySecond[j]) {
                sortedArray.push(arrayFirst[i]);
                i++;
            }
            else {
                sortedArray.push(arraySecond[j]);
                j++;
            }
        }
        // concat to append any leftovers from the comparison loop
        return sortedArray.concat(arrayFirst.slice(i),arraySecond.slice(j));
    }
}

const arrayTest1 = [3, 2, 1, 13, 8, 5];
const arrayTest2 = [105, 79, 100, 110];
console.log(mergeSort(arrayTest1));