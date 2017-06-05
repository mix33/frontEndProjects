var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0;


while (slaying){
  if (youHit === 1){
  console.log("Congrat!U hit Dragon");
  totalDamage += damageThisRound;
      if (totalDamage >= 4){
      console.log("You Slew it!");
      slaying = false;
      }else{
      youHit = Math.floor(Math.random()*2);
      }
  }else{
  console.log("Defeated");
  }
  slaying = false;
  }
