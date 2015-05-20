var app = angular.module('myApp', ['n3-line-chart','ngStorage']);

app.directive('incomeExpenseItems', function(){

  return {
    restrict: 'A',
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
    restrict: 'A',
    require: ['^dataobject','^buttonclick','^monthlabelsobj'],
    scope: {
      dataobject: '=',
      monthlabelsobj: '=',
      buttonclick: '&'
    },
    templateUrl: 'partials/casualincexp.html'
  }
});


