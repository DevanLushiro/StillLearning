function removeExclamationMarks(s) {
    if (typeof s !== 'string') {
        throw new Error('Parameter harus berupa string');
    }

    let tampung = "";
    for (let i = 0; i < s.length; i++) {
        // Periksa apakah karakter saat ini bukan tanda seru
        if (s[i] !== '!') {
            // Tambahkan karakter ke tampung
            tampung += s[i];
        }
    }
    return tampung;
}

console.log(removeExclamationMarks("Hello!")); // Output: Hello
