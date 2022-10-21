const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const size = arr.length;
    const middleIndex = Math.floor(size / 2);
    const middleItem = arr[middleIndex];

    const less = [], more = [];

    for (let i = 0; i < size; i++) {
        if (i === middleIndex) {
            continue;
        }
        const item = arr[i];
        if (item < middleItem) {
            less.push(item);
        }else {
            more.push(item);
        }
    }
    
    return [...quickSort(less), middleItem, ...quickSort(more)];
}

console.log(quickSort(array));