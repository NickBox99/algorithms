const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];

function bubbleSort(arr) {
    const result = arr;

    for (let i = 0; i < result.length; i++) {
        for (let j = 1; j < result.length - i; j++) {
            if (result[j + 1] < result[j]) {
                const tmp = result[j + 1];
                result[j + 1] = result[j];
                result[j] = tmp;
            }
        }
    }

    return result;
}

console.log(bubbleSort(array));