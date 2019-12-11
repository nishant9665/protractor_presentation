var bankModulePage=function(){

    var bmp_AddcustomerBtn=element(by.css('[ng-click="addCust()"]'))
    var bmp_OpenAccoutBtn=element(by.css('[ng-click="openAccount()"]'))
    var bmp_showCustomerBtn=element(by.css('[ng-click="showCust()"]'))


    this.bmp_clickOnAddCustomer=function(){
        bmp_AddcustomerBtn.click()
    }

    this.bmp_clickOnOpenAccoutn=function(){
        bmp_OpenAccoutBtn.click()
    }


    this.bmp_clickOnShowcustomer=function(){
        bmp_showCustomerBtn.click()
    }
}
module.exports=bankModulePage