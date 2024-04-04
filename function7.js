function segitigaSamaKaki(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        // Tambahkan spasi di awal baris
        for (let j = 1; j <= n - i ; j++) {
            row += "#";
        }
        // Tambahkan bintang
            for (let k = 1; k <= 2 * i - 1 ; k++) {
                row += "*";
            }
        console.log(row);
    }
}

segitigaSamaKaki(5);
