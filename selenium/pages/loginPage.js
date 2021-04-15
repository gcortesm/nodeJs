'use strict';
const BasePage = require('./basePage');

const PAGE_IDENTIFIER = '#login-container';
const PAGE_USEREMAIL_TEXTBOX = '#emailId';
const PAGE_USEPASSWORD_TEXTBOX = '#passwordId';
const PAGE_LOGIN_BUTTON = '#singInButtonId';
const PAGE_LOGIN_HEADER = '#login-header';
const PAGE_EMAIL_LABEL = '#email-label';
const PAGE_PASSWORD_LABEL = '#password-label';

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver, PAGE_IDENTIFIER);
  }


  async isPageLoaded() {
    return await this.exists();
  }

  async getUserEmailTextBox() {
    const email = await this.findElementByCss(PAGE_USEREMAIL_TEXTBOX);
    return email;
  }
  async getPasswordTextBox() {
    const password = await this.findElementByCss(PAGE_USEPASSWORD_TEXTBOX);
    return password;
  }
  async getSignInButton() {
    const button = await this.findElementByCss(PAGE_LOGIN_BUTTON);
    return button;
  }
  async getLoginHeader() {
    const header = await this.findElementByCss(PAGE_LOGIN_HEADER);
    return header;
  }
  async getEmailLabel() {
    const emailLabel = await this.findElementByCss(PAGE_EMAIL_LABEL);
    return emailLabel;
  }
  async getPasswordLabel() {
    const passwordLabel = await this.findElementByCss(PAGE_PASSWORD_LABEL);
    return passwordLabel;
  }

  async signIn() {
    const loginButton = await this.findElementByCss(PAGE_LOGIN_BUTTON);
    loginButton().click();
  }

  async enterUserEmail(emailTest) {
    const emailTextBox = await this.getUserEmailTextBox();
    emailTextBox.sendKeys(emailTest);
  }
  async enterUserPassword(passTest) {
    const passTextBox = await this.getPasswordTextBox();
    passTextBox.sendKeys(passTest);
  }
}

module.exports = { LoginPage };
