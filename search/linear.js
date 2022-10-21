const array = [1, 54, 32, 1, 23, 3, 231, 321, 2, 123, 23, 321, 231];

function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

console.log('find 2: ', linearSearch(array, 2));
console.log('find 2123: ', linearSearch(array, 2123));