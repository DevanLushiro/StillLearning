function bilanganFibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        // return bilanganFibonacci(n-1) + bilanganFibonacci(n-2);
        let f0 = 0;
        let f1 = 1;
        let fn = 0;

        for(let i = 2; i <= n; i++){
            fn = f0 + f1
            f0 = f1
            f1 = fn
        }
             
        return fn
    }
}

console.log(bilanganFibonacci(5));
