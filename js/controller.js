var app = angular.module('myApp', []);

app.controller('controller',['$scope', function ($scope){
  $scope.MyMath = Math;

  $scope.incomes = [];
  $scope.expenses = [];
  $scope.casualIncomes = [];
  $scope.casualExpenses = [];
  $scope.monthLabels = [];

  $scope.addNewIncome = function(){
    var income = {apply: true, title:'', amount: 0, freq: 30.4166666666667}
    $scope.incomes.push(income);
  }

  $scope.removeIncome = function(index){
    $scope.incomes.splice(index, 1);
  }

  $scope.addNewExpense = function(){
    var expense = {apply: true, title:'', amount: 0, freq: 30.4166666666667}
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

    for(var i = 0; i<12; i++){

      curMonth += 1;
      if(curMonth > 11){
        curMonth = 0;
        currYear += 1;
      }
      $scope.monthLabels.push({id: i, name:months[curMonth] + ' ' + currYear});      
    }
      
  }

  $scope.getMonthLabels();
}]);
