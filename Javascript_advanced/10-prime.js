function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)){
            count++;
        }
    }
    return count
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

const start = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const end = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds`);