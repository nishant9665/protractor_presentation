var customer = require('../pages/LoginPage')
var bank = require('../pages/BankPage')

describe('customer login',function(){
    it('validate customer login',function(){
        
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')

        new customer().clickOnCustomerLogin()
        new bank().selectValuesFromDropDown()
    })

})