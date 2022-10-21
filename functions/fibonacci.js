function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('fibonacci 0: ', fibonacci(0));
console.log('fibonacci 1: ', fibonacci(1));
console.log('fibonacci 3: ', fibonacci(3));
console.log('fibonacci 8: ', fibonacci(8));
