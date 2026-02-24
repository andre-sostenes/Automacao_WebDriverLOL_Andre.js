import formPage from "../pageobjects/forms.page.js";

describe("Funcionalidade: Tela de formulário", () => {
  beforeEach(async () => {
    await formPage.abrirMenuForm();
  });

  it("Deve validar se o teste foi preenchido corretamente", async () => {
    await formPage.preencherTexto("Teste Appium");
    expect(await formPage.validarTexto()).toEqual("Teste Appium");
  });

  it("Validar a seleção do dropwdown", async () => {
    await formPage.selecionarOpcao("This app is awesome");
    expect(await formPage.validarOpcao()).toEqual("This app is awesome");
  });

  it("Deve trocar o botão de ON para OFF", async () => {
    // Deve trocar para OFF com um clique
    const botaoOnOff = await driver.$("accessibility id:switch");
    await botaoOnOff.click();
    // Deve trocar para ON utilizando o swipe
    await browser.swipe({
      direction: "left",
      duration: 5000,
      percent: 0.1,
      scrollableElement: botaoOnOff,
    });
  });
});
