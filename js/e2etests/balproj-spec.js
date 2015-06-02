describe('Protractor Demo App', function() {
  var startAmountFld = element(by.model('startAmount'));
  var incomeFlds = element.all(by.repeater('income in incomes'));
  var expenseFlds = element.all(by.repeater('expense in expenses'));
  var casualIncomeFlds = element.all(by.repeater('casualIncome in casualIncomes'));
  var casualExpenseFlds = element.all(by.repeater('casualExpense in casualExpenses'));
  var addIncomeButtn = element(by.id('addIncomeBttn'));
  var addExpenseButtn = element(by.id('addExpenseBttn'));
  var addCasualIncomeButtn = element(by.id('addCasualIncomeBttn'));
  var addCasualExpenseBttn = element(by.id('addCasualExpenseBttn'));
  var incomeList = element.all(by.repeater('netIncome in getNetIncomes() track by $index'));

  var importedModule = require('./helper-file.js');


  beforeEach(function() {
    browser.get('/');
    browser.driver.manage().window().maximize();﻿
  });

  
  it('expects new income object to be added to incomes array', function(){
   
    var initialIncomesLength;
    incomeFlds.count().then(function(value){
      initialIncomesLength = value;
    });
    addIncomeButtn.click();

    incomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(1);
      initialIncomesLength = value;
    });
    
    for (var i = 0; i < 3; i++) {
      addIncomeButtn.click();
    }
    
    incomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(3);
    });

  });


  it('expects new expense object to be added to expenses array', function(){
    var initialExpensesLength;

    expenseFlds.count().then(function(value){
      initialExpensesLength = value;
    });

    addExpenseButtn.click();

    expenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(1);
    });

    for (var i = 0; i < 3; i++) {
      addExpenseButtn.click();
    };
    expenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(4);
    });
  });

  

  it('expects an income object to be removed from incomes array', function(){
    
    var initialIncomesLength;
    incomeFlds.count().then(function(value){
      initialIncomesLength = value;
    });
    addIncomeButtn.click();

    incomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(1);
      initialIncomesLength = value;
    });

    incomeFlds.get(0).element(by.tagName('button')).click();

    incomeFlds.count().then(function(value){
      expect(initialIncomesLength - value).toEqual(1);
      initialIncomesLength = value;
    });

    for (var i = 0; i < 3; i++) {
      addIncomeButtn.click();
    };

    incomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(3);
      initialIncomesLength = value;
    });

    incomeFlds.get(1).element(by.tagName('button')).click();

    incomeFlds.count().then(function(value){
      expect(initialIncomesLength - value).toEqual(1);      
    });
    
    incomeFlds.get(0).element(by.tagName('button')).click();    
    incomeFlds.count().then(function(value){
      expect(initialIncomesLength - value).toEqual(2);      
    });
    
  });



  it('expects an expense object to be removed from to expenses array', function(){
    
    var initialExpensesLength;

    expenseFlds.count().then(function(value){
      initialExpensesLength = value;
    });

    addExpenseButtn.click();

    expenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(1);
      initialExpensesLength = value;
    });


    expenseFlds.get(0).element(by.tagName('button')).click();
    
    
    expenseFlds.count().then(function(value){
      expect(initialExpensesLength - value).toEqual(1);
      initialExpensesLength = value;
    });

    for (var i = 0; i < 3; i++) {
      addExpenseButtn.click();
    };
    
    expenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(3);
      initialExpensesLength = value;
    });

    expenseFlds.get(1).element(by.tagName('button')).click(); 
      
    expenseFlds.count().then(function(value){
      expect(initialExpensesLength - value).toEqual(1);      
    });

    expenseFlds.get(0).element(by.tagName('button')).click();    
    expenseFlds.count().then(function(value){
      expect(initialExpensesLength - value).toEqual(2);      
    });
  });

  it('expects new casual income object to be added to casual incomes array', function(){
    
    var initialIncomesLength;
    casualIncomeFlds.count().then(function(value){
      initialIncomesLength = value;
    });
    addCasualIncomeButtn.click();

    casualIncomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(1);
      initialIncomesLength = value;
    });    
    
    for (var i = 0; i < 3; i++) {
      addCasualIncomeButtn.click();
    }
    
    casualIncomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(3);
    });
  });

  it('expects new casual expense object to be added to casual expenses array', function(){
    
    var initialExpensesLength;

    casualExpenseFlds.count().then(function(value){
      initialExpensesLength = value;
    });

    addCasualExpenseBttn.click();

    casualExpenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(1);
    });

    for (var i = 0; i < 3; i++) {
      addCasualExpenseBttn.click();
    };
    casualExpenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(4);
    });
  });

  it('expects an income object to be removed from the casual incomes array', function(){
    
    var initialIncomesLength;
    casualIncomeFlds.count().then(function(value){
      initialIncomesLength = value;
    });
    addCasualIncomeButtn.click();

    casualIncomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(1);
      initialIncomesLength = value;
    });

    casualIncomeFlds.get(0).element(by.tagName('button')).click();

    casualIncomeFlds.count().then(function(value){
      expect(initialIncomesLength - value).toEqual(1);
      initialIncomesLength = value;
    });

    for (var i = 0; i < 3; i++) {
      addCasualIncomeButtn.click();
    };

    casualIncomeFlds.count().then(function(value){
      expect(value - initialIncomesLength).toEqual(3);
      initialIncomesLength = value;
    });

    casualIncomeFlds.get(1).element(by.tagName('button')).click();

    casualIncomeFlds.count().then(function(value){
      expect(initialIncomesLength - value).toEqual(1);      
    });
    
    casualIncomeFlds.get(0).element(by.tagName('button')).click();    
    casualIncomeFlds.count().then(function(value){
      expect(initialIncomesLength - value).toEqual(2);      
    });
  });

  it('expects an expense object to be removed from to casual expenses array', function(){
    
    var initialExpensesLength;

    casualExpenseFlds.count().then(function(value){
      initialExpensesLength = value;
    });

    addCasualExpenseBttn.click();

    casualExpenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(1);
      initialExpensesLength = value;
    });


    casualExpenseFlds.get(0).element(by.tagName('button')).click();
    
    
    casualExpenseFlds.count().then(function(value){
      expect(initialExpensesLength - value).toEqual(1);
      initialExpensesLength = value;
    });

    for (var i = 0; i < 3; i++) {
      addCasualExpenseBttn.click();
    };
    
    casualExpenseFlds.count().then(function(value){
      expect(value - initialExpensesLength).toEqual(3);
      initialExpensesLength = value;
    });

    casualExpenseFlds.get(1).element(by.tagName('button')).click(); 
      
    casualExpenseFlds.count().then(function(value){
      expect(initialExpensesLength - value).toEqual(1);      
    });

    casualExpenseFlds.get(0).element(by.tagName('button')).click();    
    casualExpenseFlds.count().then(function(value){
      expect(initialExpensesLength - value).toEqual(2);      
    });
  
  });



  it('expects first and last net incomes to increase based on the newly added income item value', function(){
   
    var startAmount;
    var initialFirstIncome;
    var initialLastIncome;
    var incomeIncrement;    

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
      initialFirstIncome = value;      
    });

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      initialLastIncome = value;      
    });

    addIncomeButtn.click();  

    incomeFlds.last().element(by.model('dataobject.amount')).clear();
    incomeFlds.last().element(by.model('dataobject.amount')).sendKeys("100");
    
    var selectedOption;

    incomeFlds.last().element(by.tagName('select')).getAttribute('value').then(function(value){
      selectedOption = value;
      incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
        incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
        expect(value - initialFirstIncome).toEqual(incomeIncrement);
      });

    });          

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(value - initialLastIncome).toEqual(incomeIncrement);
    });

  });


  
  it('expects first and last net incomes to decrease based on the newly added expense item value', function(){
   
    var startAmount;
    var initialFirstIncome;
    var initialLastIncome;
    var incomeIncrement;    

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
      initialFirstIncome = value;      
    });

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      initialLastIncome = value;      
    });

    addExpenseButtn.click();  

    expenseFlds.last().element(by.model('dataobject.amount')).clear();
    expenseFlds.last().element(by.model('dataobject.amount')).sendKeys("100");


    var selectedOption;

    expenseFlds.last().element(by.tagName('select')).getAttribute('value').then(function(value){
      selectedOption = value;
      incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
        incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
        expect(initialFirstIncome - value).toEqual(incomeIncrement);
      });

    }); 
        
    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(initialLastIncome - value).toEqual(incomeIncrement);
    });

  });


  it('expects first and last net incomes to decrease accordingly on deselect of the apply income checkbox', function(){
   
    var startAmount;
    var initialFirstIncome;
    var initialLastIncome;
    var incomeIncrement;    

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
      initialFirstIncome = value;      
    });

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      initialLastIncome = value;      
    });

    addIncomeButtn.click();  

    incomeFlds.last().element(by.model('dataobject.amount')).clear();
    incomeFlds.last().element(by.model('dataobject.amount')).sendKeys("100");
    
    var selectedOption;

    incomeFlds.last().element(by.tagName('select')).getAttribute('value').then(function(value){
      selectedOption = value;
      incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
        incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
        expect(value - initialFirstIncome).toEqual(incomeIncrement);
        initialFirstIncome = value;
      });

    });    

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(value - initialLastIncome).toEqual(incomeIncrement);
      initialLastIncome = value;
    });

    incomeFlds.last().element(by.model('dataobject.apply')).click();

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){

      incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
      expect(initialFirstIncome - value).toEqual(incomeIncrement);      
    });    

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(initialLastIncome - value).toEqual(incomeIncrement);      
    });
  

  });


  
  it('expects first and last net incomes to increase accordingly on deselect of the apply expense checkbox', function(){
   
    var startAmount;
    var initialFirstIncome;
    var initialLastIncome;
    var incomeIncrement;    

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
      initialFirstIncome = value;      
    });

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      initialLastIncome = value;      
    });

    addExpenseButtn.click();  

    expenseFlds.last().element(by.model('dataobject.amount')).clear();
    expenseFlds.last().element(by.model('dataobject.amount')).sendKeys("100");
    
    var selectedOption;

    expenseFlds.last().element(by.tagName('select')).getAttribute('value').then(function(value){
      selectedOption = value;
      incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
        incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
        expect(initialFirstIncome - value).toEqual(incomeIncrement);
        initialFirstIncome = value;
      });

    });     

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(initialLastIncome - value).toEqual(incomeIncrement);
      initialLastIncome = value;
    });

    expenseFlds.last().element(by.model('dataobject.apply')).click();

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){

      incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
      expect(value - initialFirstIncome).toEqual(incomeIncrement);      
    });    

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(value - initialLastIncome).toEqual(incomeIncrement);      
    });

  });


  it('expects first and last net incomes to decrease accordingly on delete of income item', function(){
   
    var startAmount;
    var initialFirstIncome;
    var initialLastIncome;
    var incomeIncrement;    

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
      initialFirstIncome = value;      
    });

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      initialLastIncome = value;      
    });

    addIncomeButtn.click();

    incomeFlds.last().element(by.model('dataobject.amount')).clear();
    incomeFlds.last().element(by.model('dataobject.amount')).sendKeys("100");

    var selectedOption;

    incomeFlds.last().element(by.tagName('select')).getAttribute('value').then(function(value){
      selectedOption = value;
      incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
        incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
        expect(value - initialFirstIncome).toEqual(incomeIncrement);
        initialFirstIncome = value;
      });

    });    

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(value - initialLastIncome).toEqual(incomeIncrement);
      initialLastIncome = value;
    });

    incomeFlds.last().element(by.tagName('button')).click();

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){

      incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
      expect(initialFirstIncome - value).toEqual(incomeIncrement);      
    });    

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(initialLastIncome - value).toEqual(incomeIncrement);      
    });

  });


  
  it('expects first and last net incomes to increase accordingly on delete of income object', function(){
   
    var startAmount;
    var initialFirstIncome;
    var initialLastIncome;
    var incomeIncrement;    

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
      initialFirstIncome = value;      
    });

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      initialLastIncome = value;      
    });

    addExpenseButtn.click();  

    expenseFlds.last().element(by.model('dataobject.amount')).clear();
    expenseFlds.last().element(by.model('dataobject.amount')).sendKeys("100");
    
    var selectedOption;

    expenseFlds.last().element(by.tagName('select')).getAttribute('value').then(function(value){
      selectedOption = value;
      incomeList.first().element(by.css('.netIncome')).getText().then(function(value){
        incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
        expect(initialFirstIncome - value).toEqual(incomeIncrement);
        initialFirstIncome = value;
      });

    });     

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(initialLastIncome - value).toEqual(incomeIncrement);
      initialLastIncome = value;
    });

    expenseFlds.last().element(by.tagName('button')).click();

    incomeList.first().element(by.css('.netIncome')).getText().then(function(value){

      incomeIncrement = importedModule.getIncomeIncrement(100, 1, selectedOption);
      expect(value - initialFirstIncome).toEqual(incomeIncrement);      
    });    

    incomeList.last().element(by.css('.netIncome')).getText().then(function(value){
      incomeIncrement = importedModule.getIncomeIncrement(100, 12, selectedOption);
      expect(value - initialLastIncome).toEqual(incomeIncrement);      
    });

  });
  


  it('expects first and last balance amount in the table to increase by 10000', function(){
   
    var startAmount;
    var initialFirstBalance;
    var initialLastBalance;

    incomeList.first().element(by.css('.balance')).getText().then(function(value){
      initialFirstBalance = value;
    });

    incomeList.last().element(by.css('.balance')).getText().then(function(value){
      initialLastBalance = value;
    });

    startAmountFld.clear();    

    startAmountFld.getText().then(function(value){
      startAmount = isNaN(Number(value)) ? 0 : Number(value);
      startAmount += 10000;
      startAmountFld.sendKeys(startAmount);
    });

    incomeList.first().element(by.css('.balance')).getText().then(function(value){
      expect(value - initialFirstBalance).toEqual(10000);
    });

    incomeList.last().element(by.css('.balance')).getText().then(function(value){
      expect(value - initialLastBalance).toEqual(10000);
    });

  });


  
});