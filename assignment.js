 
 //kilometerToMeter function
 function kilometerToMeter (num){
     if (num < 0){
         return "Input value is not Correct";
    }
     else{
       return num*1000;
     }
 }

 //budgetCalculator function
function budgetCalculator(watch, mobile, laptop){
  var watchPrice = watch*50;
  var mobilePrice = mobile*100;
  var laptopPrice = laptop*500;
  return watchPrice + mobilePrice + laptopPrice;

}

//hotelCost function
function hotelCost(day){
  if(day == 0 || day < 0){
    return "--ERROR-- plese give right value";
  }
  else if(day <=10){
    return day*100;
  }
  else if(day <= 20 ){
    var fristStep = 10*100;
    var remaining = day-10;
    var secondStep = remaining*80;
    return fristStep+secondStep;
  }
  else {
    var fristStep = 10*100;
    var secondStep = 10*80
    var remaining = day-20;
    var thiredStep =  remaining*50;
    return fristStep+secondStep+thiredStep;
  }
}
