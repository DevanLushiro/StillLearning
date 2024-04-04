let penumpang = [];

let tambahPenumpang = function(namaPenumpang, penumpang){
    
    if (typeof namaPenumpang !== 'string') {
        console.log("Oi " + namaPenumpang + " temee, robotto ka?");
        return penumpang
    }

    if(penumpang.length == 0){
        penumpang.push(namaPenumpang)
        return penumpang
    }
    let indexKursiKosong = penumpang.findIndex(function(item) {
        return item === undefined;
    });

    let isSudahNaik = penumpang.find(function(item) {
        return item === namaPenumpang;
    });
    
    if (indexKursiKosong !== -1) {
        penumpang[indexKursiKosong] = namaPenumpang;
    } else if (isSudahNaik !== undefined) {
        console.log("Lu Udah Di Dalem Angkot");
        return penumpang;
    } else {
        penumpang.push(namaPenumpang);
        return penumpang
    }
    
    
    
    // if(penumpang.length == 0){
    //     penumpang.push(namaPenumpang)
    //     return penumpang
    // }else{
        
        // for(let i = 0; i < penumpang.length; i++){
        //     if(penumpang[i] == undefined){
        //         penumpang[i] = namaPenumpang
        //         return penumpang
        //     }else if( penumpang[i] == namaPenumpang){
        //         console.log("Lu Udah Di Dalem Angkot")
        //         return penumpang
        //     }else if(i == penumpang.length - 1){
        //         penumpang.push(namaPenumpang)
        //         return penumpang
        //     }
        // }
    // }
    
}

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("Angkot masih kosong.");
        return penumpang;
    }else{

        let indexKursiKosong = penumpang.findIndex(function(item) {
            return item === namaPenumpang;
        });
        
        if (indexKursiKosong !== -1) {
            penumpang[indexKursiKosong] = undefined;
            let lastIndex = penumpang.lastIndexOf(undefined);
            // Menghapus elemen undefined terakhir dari array penumpang
            if (lastIndex !== -1 && lastIndex === penumpang.length - 1) {
                penumpang.splice(lastIndex, 1);
            }
            let flagUndefined = penumpang[penumpang.length - 1] === undefined;

            // Jika elemen terakhir adalah undefined, hapus elemen tersebut
            if (flagUndefined) {
                penumpang.pop();
            }
            return penumpang
        }else{
            console.log("Oi " + namaPenumpang + " temee, nanimono darou?")
            return penumpang
        }
    }

}
// hapusPenumpang("Namida", penumpang)
tambahPenumpang("A",penumpang)
tambahPenumpang("B",penumpang)
tambahPenumpang("C",penumpang)
tambahPenumpang("D",penumpang)
hapusPenumpang("C",penumpang)
hapusPenumpang("D",penumpang)
hapusPenumpang("G",penumpang)
tambahPenumpang(1,penumpang)

console.log(penumpang)
console.log(penumpang)