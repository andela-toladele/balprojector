"use strict";
describe('ProjectorController', function(){
  beforeEach(module('myApp'));

  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_
  }));

  var scope;
  var controller;

  beforeEach(function(){
    scope = {};
    controller = $controller('ProjectorController', {$scope: scope});

  });

  it('expects new income object to be added to incomes array', function(){
   
    var initialIncomesLength = scope.incomes.length;
    scope.addNewIncome();
    expect(scope.incomes.length - initialIncomesLength).toEqual(1);
    initialIncomesLength = scope.incomes.length;
    for (var i = 0; i < 3; i++) {
      scope.addNewIncome();
    };
    expect(scope.incomes.length - initialIncomesLength).toEqual(3);
  });

  it('expects new expense object to be added to expenses array', function(){
    var initialExpensesLength = scope.expenses.length;
    scope.addNewExpense();
    expect(scope.expenses.length - initialExpensesLength ).toEqual(1);

    for (var i = 0; i < 3; i++) {
      scope.addNewExpense();
    };
    expect(scope.expenses.length - initialExpensesLength).toEqual(4);
  });

  it('expects an income object to be removed from to incomes array', function(){
    var initialIncomesLength = scope.incomes.length;
    scope.addNewIncome();
    expect(scope.incomes.length - initialIncomesLength).toEqual(1);
    initialIncomesLength = scope.incomes.length;
    scope.removeIncome(0);
    expect(initialIncomesLength - scope.incomes.length).toEqual(1);
    initialIncomesLength = scope.incomes.length;
    
    for (var i = 0; i < 3; i++) {
      scope.addNewIncome();
    };
    expect(scope.incomes.length - initialIncomesLength).toEqual(3);
    initialIncomesLength = scope.incomes.length;

    scope.removeIncome(1);    
    expect(initialIncomesLength - scope.incomes.length).toEqual(1);
    
    scope.removeIncome(0);    
    expect(initialIncomesLength - scope.incomes.length).toEqual(2);
    
  });

  it('expects an expense object to be removed from to expenses array', function(){
    
    var initialExpensesLength = scope.expenses.length;
    scope.addNewExpense();
    expect(scope.expenses.length - initialExpensesLength).toEqual(1);
    initialExpensesLength = scope.expenses.length;
    scope.removeExpense(0);
    expect(initialExpensesLength - scope.expenses.length).toEqual(1);
    initialExpensesLength = scope.expenses.length;

    for (var i = 0; i < 3; i++) {
      scope.addNewExpense();
    };
    
    expect(scope.expenses.length - initialExpensesLength).toEqual(3);
    initialExpensesLength = scope.expenses.length;

    scope.removeExpense(1);    
    expect(initialExpensesLength - scope.expenses.length).toEqual(1);

    scope.removeExpense(0);    
    expect(initialExpensesLength - scope.expenses.length).toEqual(2);
  });

  it('expects new casual income object to be added to casual incomes array', function(){
    
    var initialIncomesLength = scope.casualIncomes.length;
    scope.addNewCasualIncome();
    expect(scope.casualIncomes.length - initialIncomesLength).toEqual(1);
    initialIncomesLength = scope.casualIncomes.length;
    for (var i = 0; i < 3; i++) {
      scope.addNewCasualIncome();
    };
    expect(scope.casualIncomes.length - initialIncomesLength).toEqual(3);
  });

  it('expects new casual expense object to be added to casual expenses array', function(){
    
    var initialExpensesLength = scope.casualExpenses.length;
    scope.addNewCasualExpense();
    expect(scope.casualExpenses.length - initialExpensesLength).toEqual(1);
    initialExpensesLength = scope.casualExpenses.length;
    for (var i = 0; i < 3; i++) {
      scope.addNewCasualExpense();
    };
    expect(scope.casualExpenses.length - initialExpensesLength).toEqual(3);

  });

  it('expects an income object to be removed from to casual incomes array', function(){
    
    var initialIncomesLength = scope.incomes.length;
    scope.addNewCasualIncome();
    expect(scope.casualIncomes.length - initialIncomesLength).toEqual(1);
    initialIncomesLength = scope.casualIncomes.length;
    scope.removeCasualIncome(0);
    expect(initialIncomesLength - scope.casualIncomes.length).toEqual(1);
    initialIncomesLength = scope.casualIncomes.length;
    
    for (var i = 0; i < 3; i++) {
      scope.addNewCasualIncome();
    };
    expect(scope.casualIncomes.length - initialIncomesLength).toEqual(3);
    initialIncomesLength = scope.casualIncomes.length;

    scope.removeCasualIncome(1);    
    expect(initialIncomesLength - scope.casualIncomes.length).toEqual(1);
    
    scope.removeCasualIncome(0);    
    expect(initialIncomesLength - scope.casualIncomes.length).toEqual(2);
  });

  it('expects an expense object to be removed from to casual expenses array', function(){
    
    var initialExpensesLength = scope.casualExpenses.length;
    scope.addNewCasualExpense();
    expect(scope.casualExpenses.length - initialExpensesLength).toEqual(1);
    initialExpensesLength = scope.casualExpenses.length;
    scope.removeCasualExpense(0);
    expect(initialExpensesLength - scope.casualExpenses.length).toEqual(1);
    initialExpensesLength = scope.casualExpenses.length;

    for (var i = 0; i < 3; i++) {
      scope.addNewCasualExpense();
    };
    
    expect(scope.casualExpenses.length - initialExpensesLength).toEqual(3);
    initialExpensesLength = scope.casualExpenses.length;

    scope.removeCasualExpense(1);    
    expect(initialExpensesLength - scope.casualExpenses.length).toEqual(1);

    scope.removeCasualExpense(0);    
    expect(initialExpensesLength - scope.casualExpenses.length).toEqual(2);
  });

});

