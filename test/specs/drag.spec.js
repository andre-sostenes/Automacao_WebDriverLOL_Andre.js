import dragPage from "../pageobjects/drag.page.js";

describe("Testes na tela de Drag", () => {
  before(async () => {
    await dragPage.abrirMenuDrag();
    // Aguardar que o primeiro elemento de arraste esteja visível antes de iniciar o teste
    await dragPage.peca1.waitForDisplayed({ timeout: 5000 });
  });

  it("Deve arrastar os elementos para os alvos corretos", async () => {
    // Arrastar elemento 1 para o alvo 1
    await dragPage.peca1.dragAndDrop(dragPage.alvo1);
    // Arrastar elemento 2 para o alvo 2
    await dragPage.peca2.dragAndDrop(dragPage.alvo2);
    // Arrastar elemento 3 para o alvo 3
    await dragPage.peca3.dragAndDrop(dragPage.alvo3);
    // Arrastar elemento 4 para o alvo 4
    await dragPage.peca4.dragAndDrop(dragPage.alvo4);
    // Arrastar elemento 5 para o alvo 5
    await dragPage.peca5.dragAndDrop(dragPage.alvo5);
    // Arrastar elemento 6 para o alvo 6
    await dragPage.peca6.dragAndDrop(dragPage.alvo6);
    // Arrastar elemento 7 para o alvo 7
    await dragPage.peca7.dragAndDrop(dragPage.alvo7);
    // Arrastar elemento 8 para o alvo 8
    await dragPage.peca8.dragAndDrop(dragPage.alvo8);
    // Arrastar elemento 9 para o alvo 9
    await dragPage.peca9.dragAndDrop(dragPage.alvo9);
  });
  it("Deve validar se o objetivo foi alcançado", async () => {
    const mensagem = $(`//android.widget.TextView[@text="Congratulations"]`);
    await expect(mensagem).toBeDisplayed();
  });
});
