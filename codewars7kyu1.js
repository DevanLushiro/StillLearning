// Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

// (You can mutate the input if you want, but it is a better practice to not mutate the input)

// Example:

// Input array

// let array2D = [
//     [-1,  4, -5, -9,  3 ],
//     [ 6, -4, -7,  4, -5 ],
//     [ 3,  5,  0, -9, -1 ],
//     [ 1,  5, -7, -8, -9 ],
//     [-3,  2,  1, -5,  6 ]
// ]
//   Output array
// [
//     [ 0,  4, -5, -9,  3 ],
//     [ 6,  0, -7,  4, -5 ],
//     [ 3,  5,  1, -9, -1 ],
//     [ 1,  5, -7,  0, -9 ],
//     [-3,  2,  1, -5,  1 ]
// ]

// let arrayBaru = [];
// for(let i = 0; i < array2D.length; i++){
//     console.log(array2D[i])
// }
// for (let i = 0; i < array2D.length; i++) {
//     for (let j = 0; j < array2D[i].length; j++) {
//         for(let k = j; k < array2D[i].length; k++){
//             if(array2D[i][k] == array2D[i][j]){
//                 array2D[i][k] *= -1;
//             }
//         }
//     }
// }
// console.log(array2D)
// function segitigaAlternatif(tinggi) {
//     let pola = '';
//     for (let i = 0; i < tinggi; i++) {
//         for (let j = 0; j < tinggi; j++) {
//             if (j === i) {
//                 pola += '*';
//             } else {
//                 pola += ' ';
//             }
//         }
//         pola += '\n';
//     }
//     console.log(pola);
// }


// // Contoh penggunaan
// segitigaAlternatif(5);

// function matrix(array){
//     for (let i = 0; i < array.length; i++) {
        // console.log(array[i][i])
        // if(array[i][i] < 0){
        //     array[i][i] = 0
        // }else{
        //     array[i][i] = 1
        // };
//     }
//     return array
// }

function matrix(array){
    array.forEach(function(element,i){
        if (element[i] < 0) {
            element[i] = 0;
        } else {
            element[i] = 1;
        }
    });
    return array
}
let array = [
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
];

console.log(matrix(array))