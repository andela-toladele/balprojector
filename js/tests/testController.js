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
   
    expect(scope.incomes.length).toEqual(0);
    scope.addNewIncome();
    expect(scope.incomes.length).toEqual(1);

    for (var i = 0; i < 3; i++) {
      scope.addNewIncome();
    };
    expect(scope.incomes.length).toEqual(4);
  });

  it('expects new expense object to be added to expenses array', function(){
    
    expect(scope.expenses.length).toEqual(0);
    scope.addNewExpense();
    expect(scope.expenses.length).toEqual(1);

    for (var i = 0; i < 3; i++) {
      scope.addNewExpense();
    };
    expect(scope.expenses.length).toEqual(4);
  });

  it('expects an income object to be removed from to incomes array', function(){
    
    expect(scope.incomes.length).toEqual(0);
    scope.addNewIncome();
    expect(scope.incomes.length).toEqual(1);
    scope.removeIncome(0);
    expect(scope.incomes.length).toEqual(0);

    for (var i = 0; i < 3; i++) {
      scope.addNewIncome();
    };
    expect(scope.incomes.length).toEqual(3);

    scope.removeIncome(1);    
    expect(scope.incomes.length).toEqual(2);

    scope.removeIncome(0);    
    expect(scope.incomes.length).toEqual(1);
    
  });

  it('expects an expense object to be removed from to expenses array', function(){
    
    expect(scope.expenses.length).toEqual(0);
    scope.addNewExpense();
    expect(scope.expenses.length).toEqual(1);
    scope.removeExpense(0);
    expect(scope.expenses.length).toEqual(0);

    for (var i = 0; i < 3; i++) {
      scope.addNewExpense();
    };
    expect(scope.expenses.length).toEqual(3);

    scope.removeExpense(1);    
    expect(scope.expenses.length).toEqual(2);

    scope.removeExpense(0);    
    expect(scope.expenses.length).toEqual(1);
  });

  it('expects new casual income object to be added to casual incomes array', function(){
   
    expect(scope.casualIncomes.length).toEqual(0);
    scope.addNewCasualIncome();
    expect(scope.casualIncomes.length).toEqual(1);

    for (var i = 0; i < 3; i++) {
      scope.addNewCasualIncome();
    };
    expect(scope.casualIncomes.length).toEqual(4);
  });

  it('expects new casual expense object to be added to casual expenses array', function(){
    
    expect(scope.casualExpenses.length).toEqual(0);
    scope.addNewCasualExpense();
    expect(scope.casualExpenses.length).toEqual(1);

    for (var i = 0; i < 3; i++) {
      scope.addNewCasualExpense();
    };
    expect(scope.casualExpenses.length).toEqual(4);
  });

  it('expects an income object to be removed from to casual incomes array', function(){
    
    expect(scope.casualIncomes.length).toEqual(0);
    scope.addNewCasualIncome();
    expect(scope.casualIncomes.length).toEqual(1);
    scope.removeCasualIncome(0);
    expect(scope.casualIncomes.length).toEqual(0);

    for (var i = 0; i < 3; i++) {
      scope.addNewCasualIncome();
    };
    expect(scope.casualIncomes.length).toEqual(3);

    scope.removeCasualIncome(1);    
    expect(scope.casualIncomes.length).toEqual(2);

    scope.removeCasualIncome(0);    
    expect(scope.casualIncomes.length).toEqual(1);
  });

  it('expects an expense object to be removed from to casual expenses array', function(){
    
    expect(scope.casualExpenses.length).toEqual(0);
    scope.addNewCasualExpense();
    expect(scope.casualExpenses.length).toEqual(1);
    scope.removeCasualExpense(0);
    expect(scope.casualExpenses.length).toEqual(0);

    for (var i = 0; i < 3; i++) {
      scope.addNewCasualExpense();
    };
    expect(scope.casualExpenses.length).toEqual(3);

    scope.removeCasualExpense(1);    
    expect(scope.casualExpenses.length).toEqual(2);

    scope.removeCasualExpense(0);    
    expect(scope.casualExpenses.length).toEqual(1);
  });

});

