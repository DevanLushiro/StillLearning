let jumlahAngkot = 10;
let angkotDiMarkas = 2;
for (let angkot = 1; angkot <= jumlahAngkot; angkot++) {
    if (angkot == angkotDiMarkas || angkot == 4) {
        console.log("Angkot No." + angkot + " Angkot Di Markas.");
    } else if (angkot == 7) {
        for (let angkotRusak = 7; angkotRusak <= 9; angkotRusak++) {
            console.log("Angkot No." + angkotRusak + " Angkot Rusak.");
        }
        angkot = 9;
    } else {
        console.log("Angkot No." + angkot + " beroperasi dengan baik.");
    }
}
