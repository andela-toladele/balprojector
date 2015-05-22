'use strict';

app.directive('incomeExpenseItems', function(){

  return {
    restrict: 'EA',
    require: ['^dataobject','^buttonclick'],
    scope: {
      dataobject: '=',
      buttonclick: '&'
    },
    templateUrl: 'partials/incexp.html'
  }
});


app.directive('casualIncomeExpenseItems', function(){

  return {
    restrict: 'EA',
    require: ['^dataobject','^buttonclick','^monthlabelsobj'],
    scope: {
      dataobject: '=',
      monthlabelsobj: '=',
      buttonclick: '&'
    },
    templateUrl: 'partials/casualincexp.html'
  }
});


