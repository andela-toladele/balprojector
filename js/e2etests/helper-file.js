var ProjectorMethods = function(){

  //Function to generate the multiplier for income amount based on the
  // frequency type chosen, and the current month and year in iteration
  this.multiplier = function(monthIn, yearIn, freq){

    var date = new Date();
    var month = date.getMonth();

    if(freq === "M" || freq === "ME"){
      if(monthIn !== month){
        return 1;
      }               
      if(freq === "ME"){
        return 0;
      }
      return 1;      
    }
    
    var year = date.getFullYear();
    var dayOfWeek = date.getDay(); //day of the week (0-6)
    var day = date.getDate(); // day of the month (1-31)

    var lastDayOfMonth = new Date(yearIn, monthIn + 1, 0);

    var lastDay = lastDayOfMonth.getDate(); // day of the month (1-31)
    var lastDayOfWeek = lastDayOfMonth.getDay(); //day of the week (0-6)
    
    switch(freq){
      
      case "D": 
        if(month === monthIn){
          return lastDay - day + 1;
        }else{
          return lastDay;
        }
        break;

      case "WD":        
        var retVal = 20;

        if(month === monthIn && day !== 1){
          retVal = 29 - day - ( 2 * parseInt((28 - day)/7));        
          var diff = 8 - parseInt(day % 7);
          if(diff === 8){
            diff = 1;
          }
          var dayLoop = dayOfWeek - 1;

          for(var i=1; i<=diff; i++){
            dayLoop += 1;
            if(dayLoop === 7){
              dayLoop = 0;
            }
            if(dayLoop === 0 || dayLoop === 6){
              retVal -= 1;
            }
          }
        }        
        if(lastDay === 28){
          return retVal;
        }
        var offset;
        if(lastDayOfWeek < 2){
          offset = 1;
        }else if(lastDayOfWeek === 6){
          offset = 2;
        }else{
          offset = 3;
        }
        offset -= 31 - lastDay;

        if(offset > 0){
           retVal += offset;
        }
        return retVal;

      case "WE":
        var retVal = 8;
        if(month === monthIn && day !== 1){
          retVal -= 2 * (parseInt((day - 1)/7) + 1);        
          var diff = 8 - parseInt(day % 7);
          if(diff === 8){
            diff = 1;
          }
          var dayLoop = dayOfWeek - 1;
          for(var i=1; i<=diff; i++){
            dayLoop += 1;
            if(dayLoop === 7){
              dayLoop = 0;
            }

            if(dayLoop === 0 || dayLoop === 6){
              retVal += 1;
            }
          }
        }

        if(lastDay=== 28){
          return retVal;
        }
        var offset = 0;
        if(lastDay === 29 && (lastDayOfWeek === 6 || lastDayOfWeek === 0)){                    
            offset = 1;
        }else if (lastDayOfWeek === 0){
          offset = 2;
        }else if(lastDay > 29 && lastDayOfWeek === 6){
              offset = 1;
        }else if (lastDayOfWeek === 1){
          if(lastDay === 30){
            offset = 1;
          }else if(lastDay === 31){
            offset = 2;
          }
        }
       
        if(offset > 0){
           retVal += offset;
        }
        return retVal;
        
      case "W":
        var retVal = 4;
        if(month === monthIn && day !== 1){
          retVal -= parseInt((day - 1)/7) + 1;
        
          var diff = 8 - parseInt(day % 7);
          if(diff === 8){
            diff = 1;
          }

          var dayLoop = dayOfWeek - 1;
          for(var i=1; i<=diff; i++){
            dayLoop += 1;
            if(dayLoop === 7){
              dayLoop = 0;
            }

            if(dayLoop === 6){
              retVal += 1;
            }
          }
        }
                
        if(lastDay === 28){
          return retVal;
        }
        if(lastDayOfWeek === 6){
          retVal += 1;
        }else if(lastDay === 31 && (lastDayOfWeek < 2)){
          retVal += 1;
        }else if(lastDay === 30 && (lastDayOfWeek === 0)){
          retVal += 1;
        }

        return retVal;
        
      case "2W":

        //to be modified later
        if(month === monthIn && day !== 1){
           //retVal -= parseInt((day - 1)/14);
           return (day > 14)?13/12:13/6
        }                
        return 13/6; 
    }
  };


  this.getIncomeIncrement = function(amount, nextNumOfMonths, freq){
      
      var regularIncome = 0;
      var date = new Date();
      var curMonth = date.getMonth() - 1;
      var currYear = date.getFullYear();

      for(var i=0; i<nextNumOfMonths; i++){
        
        curMonth += 1;

        if(curMonth > 11){
          curMonth = 0;
          currYear += 1;
        }

        regularIncome += Math.abs(parseFloat(amount)) * this.multiplier(curMonth, currYear, freq);          
          
      }
      return regularIncome; 
  };
}

module.exports = new ProjectorMethods();