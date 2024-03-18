let bintang = "";
let spasi = " "
for(let i = 0; i < 5; i++){
    if(i % 2){
        bintang += " ";
    }
    for(let j = 0; j < 5; j++){
        bintang += " ";
        bintang += "#"
    }
    bintang += "\n";
}

console.log(bintang)