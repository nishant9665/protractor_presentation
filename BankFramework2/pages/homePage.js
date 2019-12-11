var homePage=function(){

    var hm_bankManagerLoginBtn=element(by.css('[ng-click="manager()"]'))
    var hm_customerLoginBtn=element(by.css('[ng-click="customer()"]'))

    this.openUrl=function(url){
        browser.get(url)
    }

    this.hm_clickOnbankManagerLogin=function(){
        hm_bankManagerLoginBtn.click();
    }

    this.hm_clickOncustomerLogin=function(){
        hm_customerLoginBtn.click();
    }

    this.hm_gethomePageTitle=function(){
      return  browser.getTitle();
    }

}
module.exports=homePage