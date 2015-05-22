describe('Directive', function(){
  beforeEach(module('myApp'));
  beforeEach(module('template'));

  var $compile;
  var $scope;

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    
  }));

  it('expects three income-expense-items(directive) elements to be created', inject(function(){
    //var htmlStr = angular.element("<div>abc</div>");
    
    var htmlStr = angular.element('<form><li ng-repeat="income in incomes"><income-expense-items dataobject="income" buttonclick="removeIncome($index)"></income-expense-items></li></form>');
      
    $scope.incomes = [{apply: true, title:'Salary',amount: 10,freq:'D'},{apply: true, title:'Salary',amount: 20,freq:'D'},{apply: true, title:'Salary',amount: 20,freq:'D'}];
       
    var element = $compile(htmlStr)($scope);
    
    $scope.$digest();
    var list = element.find('li');
    expect(list.length).toBe(3);

    list = element.find('input');
    expect(list.length).toBe(9);

    list = element.find('select');
    expect(list.length).toBe(3);

  }));


  it('expects three income-expense-items(directive) elements to be created', inject(function(){
    //var htmlStr = angular.element("<div>abc</div>");
    
    var htmlStr = angular.element('<form><li ng-repeat="casualExpense in casualExpenses"><casual-income-expense-items dataobject="income" buttonclick="removeIncome($index)"></casual-income-expense-items></li></form>');
    
    $scope.casualExpenses = [{apply: true, title:'Rent',amount: 10,month:'1'},{apply: true, title:'Feeding',amount: 20,month:'2'}];

    var element = $compile(htmlStr)($scope);
    
    $scope.$digest();
    var list = element.find('li');
    expect(list.length).toBe(2);

    list = element.find('input');
    expect(list.length).toBe(6);

    list = element.find('select');
    expect(list.length).toBe(2);

  }));

});