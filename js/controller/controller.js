app.controller('ProjectorController',['$scope','$localStorage', function ($scope,$localStorage){
  $scope.MyMath = Math;
  $scope.incomes = $localStorage.incomes || [];
  $scope.expenses = $localStorage.expenses || [];
  $scope.casualIncomes =$localStorage.casualIncomes ||  [];
  $scope.casualExpenses =$localStorage.casualExpenses || [];
  $scope.netIncomes = $localStorage.netIncomes || new Array(12);
  $scope.monthLabels = [];
  $scope.startAmount = $localStorage.startAmount || 0;    

  //Function to initiaze data for graph
  $scope.initGraph = function(){

    $scope.data = new Array(12);

    for(var i=0; i<12; i++){
      $scope.data[i] = {x: i,value: 0,otherValue: 0};
    }
  }  

  //Graph properties
  $scope.options = {
    axes: {
      x: {key: 'x', labelFunction: function(value) {return $scope.getMonthLabel(value);}, type: 'linear'},
      y: {type: 'linear'},
      y2: {type: 'linear'}
    },
    series: [
      {y: 'value', color: 'steelblue', thickness: '4px', type: 'linear', label: 'Net Income Graph', drawDots: false, dotSize: 0},
      {y: 'otherValue', axis: 'y', color: 'black',thickness: '2px', type: 'area', label: 'Balance Graph', visible: true, drawDots: false, dotSize: 0}
    ],
    lineMode: 'linear',
    tension: 0.7,
    drawLegend: true,
    drawDots: false,
    columnsHGap: 5
  }

  $scope.addNewIncome = function(){
    var income = {apply: true, title:'', amount: 0, freq: 'D'}
    $scope.incomes.push(income);
  }

  $scope.removeIncome = function(index){
    $scope.incomes.splice(index, 1);
  }

  $scope.addNewExpense = function(){
    var expense = {apply: true, title:'', amount: 0, freq: 'D'}
    $scope.expenses.push(expense);
  }

  $scope.removeExpense = function(index){
    $scope.expenses.splice(index, 1);
  }

   $scope.addNewCasualIncome = function(){
    var income = {apply: true, title:'', amount: 0, month:0}
    $scope.casualIncomes.push(income);
  }

  $scope.removeCasualIncome = function(index){
    $scope.casualIncomes.splice(index, 1);    
  }

  $scope.addNewCasualExpense = function(){
    var expense = {apply: true, title:'', amount: 0, month:0}
    $scope.casualExpenses.push(expense);
  }

  $scope.removeCasualExpense = function(index){
    $scope.casualExpenses.splice(index, 1);
  }

  $scope.getMonthLabels = function(){
    
    var date = new Date();
    var curMonth = date.getMonth() - 1;
    var currYear = date.getFullYear();
    
    var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'];

    for(var i = 0; i<=11; i++){

      curMonth += 1;
      if(curMonth > 11){
        curMonth = 0;
        currYear += 1;
      }
      $scope.monthLabels.push({id: i, name:months[curMonth] + ' ' + currYear});      
    }
      
  }

  $scope.getMonthLabel = function(month){
    
    var date = new Date();
    var curMonth = date.getMonth();
    var currYear = date.getFullYear();
    
    var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'];

    curMonth += month + 1;

  
    if(curMonth > 11){
      curMonth -= 12
      currYear += 1;
    }
    return months[curMonth] + ' ' + currYear;         
  }

  //Method to generate net incomes for the next 12 months
  $scope.getNetIncomes = function(){
    var regularIncome;
    var regularExpense;
    var nonRegIncome;
    var nonRegExpense;

    var date = new Date();
    var curMonth = date.getMonth() - 1;
    var currYear = date.getFullYear();

    for(var i=0; i<12; i++){
      regularIncome = 0;
      regularExpense = 0;
      nonRegIncome = 0;
      nonRegExpense = 0;
      curMonth += 1;

      if(curMonth > 11){
        curMonth = 0;
        currYear += 1;
      }

      angular.forEach($scope.incomes, function(income) {        
        if(income.apply && income.amount){
          regularIncome += Math.abs(parseFloat(income.amount)) * $scope.multiplier(curMonth, currYear, income.freq);          
        }        
      });

      angular.forEach($scope.expenses, function(expense) {
        if(expense.apply && expense.amount){
          regularExpense -= Math.abs(parseFloat(expense.amount)) * $scope.multiplier(curMonth, currYear, expense.freq);
        }
      });

      angular.forEach($scope.casualIncomes, function(income) {
        if(income.month === i && income.apply && income.amount){
          nonRegIncome += Math.abs(parseFloat(income.amount));
        }
        
      });

      angular.forEach($scope.casualExpenses, function(expense) {

        if(expense.month === i && expense.apply && expense.amount){
          nonRegExpense -= Math.abs(parseFloat(expense.amount));
        }
        
      });

      $scope.netIncomes[i] = regularIncome + regularExpense + nonRegIncome + nonRegExpense;
      
      if(i !== 0){
        $scope.netIncomes[i] += $scope.netIncomes[i-1];
      }           
    }

    $scope.startBalance = $scope.startAmount || 0;
    
    return $scope.netIncomes;
  }

  //Function to generate the multiplier for income amount based on the
  // frequency type chosen, and the current month and year in iteration
  $scope.multiplier = function(monthIn, yearIn, freq){

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
  }

  $scope.updateGraph = function(){  

    var i = 0;
    angular.forEach($scope.netIncomes, function(netIncome) {
      $scope.data[i].value = netIncome;
      $scope.data[i].otherValue = netIncome + $scope.startBalance;
      ++i   
    });

  }

  $scope.saveData = function(){

    $localStorage.incomes = $scope.incomes;
    $localStorage.expenses = $scope.expenses;
    $localStorage.casualIncomes = $scope.casualIncomes ;
    $localStorage.casualExpenses = $scope.casualExpenses;
    $localStorage.netIncomes = $scope.netIncomes;
    $localStorage.startAmount = $scope.startAmount;    
  }

  $scope.getMonthLabels();
  $scope.initGraph();
 
}]);
