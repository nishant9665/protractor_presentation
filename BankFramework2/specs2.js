var EC = protractor.ExpectedConditions;
describe("verify add customer",function(){
    browser.ignoreSynchronization = true;
   
    beforeEach(function(){
       browser.manage().window().maximize();
       browser.manage().deleteAllCookies();
       browser.manage().timeouts().implicitlyWait(5000);
       browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
    })

    afterEach(function(){
        browser.sleep(5000)
        browser.close();
    })

    it("Verify only customer Test",function(){
        element(by.css('[ng-click="manager()"]')).click()
        element(by.css('[ng-click="addCust()"]')).click()
      //  browser.wait(EC.presenceOf())
     // browser.sleep(2000)
     browser.wait(EC.presenceOf(element(by.model('fName')),5000))
     
     element(by.model('fName')).sendKeys("Nishant")
     browser.wait(EC.presenceOf(element(by.model('lName')),5000))
     element(by.model('lName')).sendKeys("Narwade")
     browser.wait(EC.presenceOf(element(by.model('postCd')),5000))
     element(by.model('postCd')).sendKeys("431713")
     element(by.xpath("//button[@type='submit']")).click()
     var alertText=browser.switchTo().alert();
     alertText.getText().then(function(alerttextGet){
         console.log("Alert text is :"+alerttextGet)
         alertText.accept();
         element(by.css('[ng-click="openAccount()"]')).click()
     })
      browser.wait(element(by.id('userSelect')),5000)
      var selectTag=element(by.id('userSelect'));
      selectTag.click();

        var optionTag=selectTag.all(by.tagName('option'));
       optionTag.then(function(optiontagName){
          for(let i=0;i<optiontagName.length;i++){
            optiontagName[i].getText().then(function(tagName){
                 if(tagName=="Nishant Narwade"){
                     optiontagName[i].click();
                 }
             })
         }
      })
// // currency 
      browser.wait(element(by.id('currency')),5000)
      var selectTagCurrency=element(by.id('currency'));
      selectTagCurrency.click();

      var optionTagCurrency=selectTagCurrency.all(by.tagName('option'));
      optionTagCurrency.then(function(currencyList){
          for(let i=0;i<currencyList.length;i++){
             currencyList[i].getText().then(function(CurrencyName){
                 if(CurrencyName=="Rupee"){
                     currencyList[i].click();
                 }
             })
         }
      })
 element(by.xpath("//button[@type='submit']")).click();
 var alertText2=browser.switchTo().alert();
 alertText2.getText().then(function(alerttextGet2){
     console.log("Alert text is2 :"+alerttextGet2)
     alertText2.accept();
 })
//      //delete customer
     
//      browser.wait(element(by.css('[ng-click="showCust()"]')),5000)
//      var selectTagCustomer=(by.css('[ng-click="showCust()"]'));
//      selectTagCustomer.click();
//      var customerList=element.all(by.tagName('tr'));
//      customerList.then(function(ListName){
//          for(let i=0;i<ListName.length;i++){
//             ListName[i].getText().then(function(list2Name){
//                 if(list2Name=="Delete"){
//                     ListName[i].click();
//                 }
//             })
//         }
//      })


    })
})