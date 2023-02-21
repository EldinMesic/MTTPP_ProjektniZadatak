# MTTPP_ProjektniZadatak

Projekt je napravljen koristeći javascript programski jezik, a napisan preko visual studio code-a. Testni slučajevi su testirani koristeći Cypress (https://www.cypress.io/) alat za automatizirane testove.


Stranica nad kojom su se izvršavali testovi je DemoBlaze (https://www.demoblaze.com/), lažna e-shop stranica za elektroničku opremu.

Testovi koji su se izvršavali nad tom stranicom su: 
        1. Testiranje registracije nasumičnog korisnika (SignUp)
        2. Testiranje prijave prethodno registriranog korisnika (Login)
        3. Testiranje dodavanja proizvoda u košaricu (AddProductToCart)
        4. Testiranje micanja proizvoda iz košarice (RemoveProductFromCart)
        5. Testiranje slanja poruke preko contact opcije (ContactSupport)


Unutar projektne datoteke nalaze se 3 skripte (Elements.cy.js, Functions.cy.js, Tests.cy.js) koje služe za obavljanje testova. 
Datoteka Elements.cy.js sadrži pozive koji dohvačaju razne elemente sa testne stranice.
Datoteka Functions.cy.js poziva elemente iz ELements.cy.js i nad njima radi razne akcije (click, type) te ih grupira u veće funkcije.
Datoteka Tests.cy.js sadrži testove koji koriste funkcije iz Functions.cy.js te provjerava ispravnost testnih slučajeva.


Za korištenje ovog testnog programa potrebno je imati instaliran program Cypress koji se može preuzeti sa službene stranice i MTTPP_ProjektniZadatak datoteku.
Koraci:
    1. Otvoriti Cypress
    2. Kliknuti na "Add Project"
    3. Odabrati ili povući datoteku "MTTPP_ProjektniZadatak"
    4. Kliknuti na E2E Testing
    5. Odabrati željeni pretraživač
    6. Kliknuti na Start E2E Testing
    7. Kliknuti na Tests.cy.js dugme u otvorenom sučelju
