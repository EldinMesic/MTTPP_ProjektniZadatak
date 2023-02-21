export class Elements {
    signUpButton(){
        return cy.xpath('/html/body/nav/div[1]/ul/li[8]/a');
    }
    signUpUsernameInput(){
        return cy.get('#sign-username');
    }
    signUpPasswordInput(){
        return cy.get('#sign-password');
    }
    signUpFormButton(){
        return cy.xpath('/html/body/div[2]/div/div/div[3]/button[2]');
    }
    

    loginButton(){
        return cy.xpath('/html/body/nav/div[1]/ul/li[5]/a');
    }
    loginUsernameInput(){
        return cy.get('#loginusername');
    }
    loginPasswordInput(){
        return cy.get('#loginpassword');
    }
    loginFormButton(){
        return cy.xpath('/html/body/div[3]/div/div/div[3]/button[2]');
    }
    welcomeUserMessage(){
        return cy.get('#nameofuser');
    }


    productPageButton(){
        return cy.xpath('/html/body/div[5]/div/div[2]/div/div[1]/div/div/h4/a');
    }
    productAddToCartButton(){
        return cy.xpath('/html/body/div[5]/div/div[2]/div[2]/div/a');
    }


    cartButton(){
        return cy.xpath('/html/body/nav/div/div/ul/li[4]/a');
    }
    productRemoveFromCartButton(){
        return cy.xpath('/html/body/div[6]/div/div[1]/div/table/tbody/tr/td[4]/a');
    }
    cartTable(){
        return cy.get('#tbodyid');
    }


    contactButton(){
        return cy.xpath('/html/body/nav/div[1]/ul/li[2]/a');
    }
    contactEmailInput(){
        return cy.get('#recipient-email');
    }
    contactNameInput(){
        return cy.get('#recipient-name');
    }
    contactMessageInput(){
        return cy.get('#message-text');
    }
    contactFormButton(){
        return cy.xpath('/html/body/div[1]/div/div/div[3]/button[2]');
    }
}