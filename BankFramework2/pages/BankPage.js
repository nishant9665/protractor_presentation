//var selectDropDown = element.all(by.xpath("//select[@id='userSelect']"))


class BankPage{

    constructor(){

    }

    selectValuesFromDropDown(){
        var optionTagCurrency=selectTagCurrency.all(by.tagName('option'));
      optionTagCurrency.then(function(currencyList){
          for(let i=0;i<currencyList.length;i++){
             currencyList[i].getText().then(function(CurrencyName){
                 if(CurrencyName=="Harry Potter"){
                     currencyList[i].click();
                 }
             })
         }
      })
    }
}

module.exports=BankPage