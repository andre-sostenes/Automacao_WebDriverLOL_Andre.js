import loginPage from "../pageobjects/login.page.js";

describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    loginPage.abrirMenu();
  });
  afterEach(async () => {
    await browser.relaunchActiveApp();
  });
  it("Deve fazer login com sucesso", async () => {
    await loginPage.preencherLogin("usuario@ebac.com", "teste123");
    expect(await loginPage.mensagemAlerta()).toEqual("You are logged in!");
  });

  it("Deve falhar ao fazer login com email inválido", async () => {
    await loginPage.preencherLogin("emailinvalido", "teste123");
    await loginPage.mensagemErro("Please enter a valid email address");
  });

  it("Deve falhar ao fazer login com senha inválida", async () => {
    await loginPage.preencherLogin("usuario@ebac.com", "123");
    await loginPage.mensagemErro("Please enter at least 8 characters");
  });
});
