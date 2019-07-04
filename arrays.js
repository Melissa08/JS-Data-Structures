function getPrimeNumber(num){
   let primeNumbers = [];
   
   if(num > 2)
    primeNumbers = [2];
    
   for(let a = 3; a <= num; a += 2){
    let isPrime = true;
       for(let b = 2; b <= Math.sqrt(a); b++){
        if(a%b == 0){
            isPrime = false;
            break;
        }
      }
      if(isPrime)
        primeNumbers.push(a);
   }
   
   return primeNumbers;
}

console.log(getPrimeNumber(100));

