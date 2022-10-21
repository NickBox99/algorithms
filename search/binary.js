const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function searchBinaryIteration(arr, item) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        const selectedItem = arr[middle];

        if (selectedItem === item) {
            return middle;
        } else if (selectedItem < item) {
            start = middle + 1;
        } else if (selectedItem > item) {
            end = middle - 1;
        }
    }

    return -1;
}

function searchBinaryRecursive(arr, item, start, end) {
    if (start > end) {
        return -1;
    }
    
    const middle = Math.floor((start + end) / 2);
    const selectedItem = arr[middle];

    if (selectedItem === item) {
        return middle;
    } else if (selectedItem < item) {
        return searchBinaryRecursive(arr, item, middle + 1, end);
    } else if (selectedItem > item) {
        return searchBinaryRecursive(arr, item, start, middle - 1);
    }
}

console.log('find 1: ', searchBinaryIteration(array, 1));
console.log('find 6: ', searchBinaryIteration(array, 6));
console.log('find 13: ', searchBinaryIteration(array, 13));
console.log('find 15: ', searchBinaryIteration(array, 15));
console.log('find 30: ', searchBinaryIteration(array, 30));

console.log('find 1: ', searchBinaryRecursive(array, 1, 0, array.length - 1));
console.log('find 6: ', searchBinaryRecursive(array, 6, 0, array.length - 1));
console.log('find 13: ', searchBinaryRecursive(array, 13, 0, array.length - 1));
console.log('find 15: ', searchBinaryRecursive(array, 15, 0, array.length - 1));
console.log('find 30: ', searchBinaryRecursive(array, 30, 0, array.length - 1));