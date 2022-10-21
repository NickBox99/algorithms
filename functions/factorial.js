function factorial(n) {
    if (n <= 1) {
        return  1;
    }
    
    return n * factorial(n - 1);
}

console.log('factorial 1: ', factorial(1));
console.log('factorial 3: ', factorial(3));
console.log('factorial 10: ', factorial(10));