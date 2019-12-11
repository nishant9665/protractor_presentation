var addCustomer=function(){
    var ac_firstName=element(by.model('fName'))
    var ac_lastname=element(by.model('lName'))
    var ac_postalCode=element(by.model('postCd'))
    var ac_addCustomerBtn=element(by.xpath("//button[@type='submit']"))

    this.ac_sendfirstname=function(fname){
        ac_firstName.sendKeys(fname)
    }
    this.ac_sendlastname=function(lname){
        ac_lastname.sendKeys(lname)
    }
    this.ac_sendpostCode=function(postcode){
        ac_postalCode.sendKeys(postcode)
    }
    this.ac_clickOnAddCustomer=function(){
        ac_addCustomerBtn.click();
    }

    // this.ac_popAccept=function(){
    //     var alertText=browser.switchTo().alert();
    //     alertText.getText().then(function(alerttextGet){
    //         console.log("Alert text is :"+alerttextGet)
    //         alertText.accept();
    //     })
            
    //}
    }

module.exports=addCustomer