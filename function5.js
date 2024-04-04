function deretAngka(n) {
    let angka = "";
    let penampung = undefined;
    for (let i = 0; i < n; i++) {
        if (i < 3) {
            angka += i;
        } else if (i < 5) {
            angka += penampung; // Mengganti urutan angka 783 menjadi 654
        } else if (i < 6) {
            angka += (i === 5 ? 3 : 5); // Mengganti urutan angka 783 menjadi 654
        } else {
            angka += (12 - i); // Untuk grup setelah 654
        }

        if ((i + 1) % 3 === 0 && i !== n - 1) {
            angka += "\n"; // Tambahkan newline setelah setiap grup 3 angka kecuali untuk angka terakhir
        }
    }

    console.log(angka);
}

deretAngka(9);
