var homePage=require('../pages/homePage.js')
var bankModulePage=require('../pages/bankModulePage.js')
var addCustomer=require('../pages/addCustomer.js')
var data =require('../data/data.json')
var hpObj=new homePage()
var bmpObj=new bankModulePage()
var acObj=new addCustomer()

describe("Home Page test",function(){


    beforeEach(function(){
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(5000);
        hpObj.openUrl("http://www.way2automation.com/angularjs-protractor/banking/#/login")

    })

    // afterEach(function(){
    //     browser.sleep(5000)
    //     browser.close()
    // })
 
    it(" Home Page title test",function(){
        hpObj.hm_clickOnbankManagerLogin()
        var title= hpObj.hm_gethomePageTitle()
        title.then(function(title2){
         //  console.log("out put is "+title2)
       })
       expect(title).toBe("Protractor practice website - Banking App")

       bmpObj.bmp_clickOnAddCustomer();
       acObj.ac_sendfirstname(data.firstname)
       acObj.ac_sendlastname(data.lastname)
       acObj.ac_sendpostCode(data.postCode)

       acObj.ac_clickOnAddCustomer();
      expect(acObj.ac_popAccept).toBe("Customer added successfully with customer id :6")






    })
    // it(" Home Page title test2",function(){
    //     hpObj.hm_clickOnbankManagerLogin()
    //     var title= hpObj.hm_gethomePageTitle()
    //     title.then(function(title2){
    //      //  console.log("out put is "+title2)
    //    })
    //    expect(title).toBe("xyz")

    // })

})

