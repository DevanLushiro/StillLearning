// Rekursif

// function faktorial(n){
//     if(n === 0) return 1;
//     return n * faktorial(n-1)
// }

// console.log(faktorial(5))

function faktorial(n){
    let hasil = 1
    for(let i = n; i > 0; i--){
        hasil *= i;
    }
    return hasil
}

console.log(faktorial(5))