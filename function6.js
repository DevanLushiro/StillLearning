function printSpiral(n) {
    // Inisialisasi matriks spiral
    let spiralMatrix = [];
    for (let i = 0; i < n; i++) {
        spiralMatrix.push(new Array(n).fill(0));
        console.log(spiralMatrix)
    }

    let row = 0,
        col = 0,
        num = 1;

    // Mulai cetak spiral
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        // Cetak baris atas
        for (let j = col; j < n - i; j++) {
            spiralMatrix[row][j] = num++;
        }
        row++;

        // Cetak kolom kanan
        for (let j = row; j < n - i; j++) {
            spiralMatrix[j][n - 1 - i] = num++;
        }
        col++;

        // Cetak baris bawah
        for (let j = n - 1 - i - 1; j >= i; j--) {
            spiralMatrix[n - 1 - i][j] = num++;
        }

        // Cetak kolom kiri
        for (let j = n - 1 - i - 1; j >= i + 1; j--) {
            spiralMatrix[j][i] = num++;
        }
    }

    // Cetak matriks spiral
    for (let i = 0; i < n; i++) {
        console.log(spiralMatrix[i].join(" "));
    }
}

// Contoh penggunaan
printSpiral(4); // Anda bisa mengganti angka 4 dengan ukuran matriks spiral yang diinginkan
