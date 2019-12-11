var customerLoginButton = element(by.buttonText('Customer Login'))

class LoginPage{

    constructor(x,y){
/* this.x=10;
this.y=20 */
    }

clickOnCustomerLogin(){
    customerLoginButton.click()
}

}

module.exports = LoginPage