import {Elements} from "./Elements.cy";
const webElements = new Elements();

const randomNumber = Math.floor(Math.random() * 1000);


export class Functions {
  SignUp(){
      webElements.signUpButton().click();
      cy.wait(500);
      webElements.signUpUsernameInput().type('Eldin' + randomNumber);
      cy.wait(500);
      webElements.signUpPasswordInput().type('Eldin12345');
      cy.wait(1000);   
      webElements.signUpFormButton().click();
  }

  Login(){
    webElements.loginButton().click();
    cy.wait(500);
    webElements.loginUsernameInput().type('EldinMesic');
    cy.wait(500);
    webElements.loginPasswordInput().type('Eldin12345');
    cy.wait(1000);
    webElements.loginFormButton().click();
  }

  AddProductToCart(){
    webElements.productPageButton().click();
    cy.wait(1000);
    webElements.productAddToCartButton().click();
  }

  RemoveProductFromCart(){
    webElements.productPageButton().click();
    cy.wait(500);
    webElements.productAddToCartButton().click();
    cy.wait(500);
    webElements.cartButton().click();
    cy.wait(1000);
    webElements.productRemoveFromCartButton().click();  
  }

  ContactSupport(){
    webElements.contactButton().click();
    cy.wait(500);
    webElements.contactEmailInput().type('eldinmesic' + randomNumber + '@gmail.com');
    cy.wait(500);
    webElements.contactNameInput().type('Eldin Mešić');
    cy.wait(500);
    webElements.contactMessageInput().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend urna at orci hendrerit semper. Mauris tempor metus rutrum nibh pharetra, vel lobortis lorem dignissim.');
    cy.wait(1000);
    webElements.contactFormButton().click();
    }

  AlertMessageCheck(str){
    cy.on('window:alert',(t)=>{
        expect(t).to.contains(str);
     });
  }
}