const prompt = require('prompt-sync')();
const comp = Math.floor(Math.random() * 10 + 1);
let hasil = "";
let player = parseInt(prompt("Tebak Angkanya Berapa? "))

hasil += comp
if(player == comp){
    console.log("Lu Bener : " + player + ". " + "Jawabannya : " + comp)
}else if (isNaN(player)){
    console.log("Lu Ngasal!")
}else if (player > 10){
    console.log("1 - 10 Doang Anjay.")
}
else{
    console.log("Lu Salah! : " + player + ". " + "Yang Bener : " + comp)
}