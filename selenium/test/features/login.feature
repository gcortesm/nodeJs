@LoginBanco
Feature: Login Banco 

    Como usuario del banco online 
    yo quiero visitar el sitio web del banco.
    para yo poder hacer login y entrar a mi cuenta.

Scenario: Visitar la pagina del login
    Then Yo deberia ver una caja de texto para ingresar mi email
    And yo deberia ver una caja de texto para ingresar la password
    And yo deberia ver un boton para sign
    And Yo deberia ver un login header con el texto "CryptoBank" 
    And yo deberia ver un Label de direccion email con el texto de "Email Address"     
