//TEST1 - Register random user => check for success pop up window
//TEST2 - Login previously created test user account => check for "Welcome <userName>" on home page
//TEST3 - Add laptop to cart => check for success pop up window
//TEST4 - Remove previously added product from cart => Test for null?
//TEST5 - Send message through contact window => check for success pop up window

import {Elements} from "./Elements.cy";
import {Functions} from "./Functions.cy";
const webElements = new Elements();
const webFunctions = new Functions();




describe("Tests", () => {
  beforeEach(()=>{
    cy.visit("https://www.demoblaze.com/");
  });

  it("SignUp", ()=>{
    webFunctions.SignUp();
    webFunctions.AlertMessageCheck('Sign up successful.');
  });

  it("Login", ()=>{
    webFunctions.Login();
    webElements.welcomeUserMessage().should("contain", "EldinMesic");
  });

  it("AddProductToCart", ()=>{
    webFunctions.AddProductToCart();
    webFunctions.AlertMessageCheck('Product added');
  });

  it("RemoveProductFromCart", ()=>{
    webFunctions.RemoveProductFromCart();
    webElements.cartTable().children().should('have.length', 0);
  });

  it("ContactSupport", ()=>{
    webFunctions.ContactSupport();
    webFunctions.AlertMessageCheck('Thanks for the message!!');
  });

});