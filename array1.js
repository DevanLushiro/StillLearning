let angka = [1,2,10,5,20,3,6,8,4]
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join(" - "))