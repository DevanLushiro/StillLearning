let baris = 5
    for (let i = 0; i < baris; i++) {
        let bintang = '';
        let rumus = 1;
        for (let j = 0; j < baris - i - 1; j++) {
            bintang += ' ';
         }
        for (let k = 0; k <= i; k++) {
            bintang += rumus + ' ';
            rumus = rumus * (i - k) / (k + 1);
        }
        console.log(bintang);
    }
