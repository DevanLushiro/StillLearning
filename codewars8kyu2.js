let numbers = [1, 5.2, 4, 0, -1]
function sum(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
      sum += number;
      if(number == []){
        return 0
      }
    });
    return sum;
  }
  console.log(sum(numbers)); 

