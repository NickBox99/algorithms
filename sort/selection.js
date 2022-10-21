const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];

function selectionSort(arr) {
    const result = [];

    while (arr.length) {
        let idx = 0;
        let min = arr[0];

        for (let i = 1; i < arr.length; i++) {
            const item = arr[i];
            if (item < min) {
                min = item;
                idx = i;
            }
        }
        
        result.push(arr.splice(idx, 1));
    }
    
    return result;
}

console.log(selectionSort(array));