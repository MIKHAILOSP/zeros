module.exports = function zeros(expression) {
  // your solution
  let result1=0;
  let result2=0;
  let count = 0;
  let two = 0;
  let oddfive = 0;
  let twowaste = 0;
  let umnog=expression.split("*");
  let a = 0; 
  
  umnog.forEach(function(e,i){
    result=e; 
    let factorial=result.split("!");
    let factorialmylti=result.split("!!");
    if ((factorialmylti[0][factorialmylti[0].length-1])!= "!") {
      result2=factorialmylti[0];
      if (result2 % 2 == 0) {
        for (let i = 2; result2/i >= 1; i *= 2) {
          two+=Math.floor(result2/i);
        }
        for (let i = 10; result2/i >=1; i *= 10) {
          oddfive+= Math.trunc(result2/i);       
          if ((result2/i)/5>=1) {
            oddfive+=1;
            }
          }
      }
      else {
        for (let i = 5; i<=result2; i +=2) {
          a=i;    
          if (a % 5 == 0) {
            do {       
              oddfive+=1;
              a=a/5;
              } while (a % 5 == 0);
           }
        }
       // oddfive+=oddfive;
      }
    } 
    else {
      result1=factorial[0];
      for (let i = 5; result1/i >= 1; i *= 5){
        count += Math.floor(result1/i);
      }
      for (let i = 2; result1/i >= 1; i *= 2){
        twowaste+=Math.floor(result1/i);
      }
      twowaste=twowaste-count;
    }

  });
  if (twowaste>0 ){
    count+= oddfive;}
    else {
      count+= Math.min(two,oddfive) ;
    }
  return count;
}
