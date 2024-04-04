function tambah(a,b){
    return a + b
}

console.log(tambah(1,2,3,4,5))
arguments = [1,2,3,4,5]
function tambah(){
    return Array.from(arguments)
    ;
}

console.log(tambah(1,2,3,4,5))