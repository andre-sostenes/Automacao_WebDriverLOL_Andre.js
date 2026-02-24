class DragPage {
  // Menu Drag
  get menuDrag() {
    return $("accessibility id:Drag");
  }
  // Peças Drag
  get peca1() {
    return $("accessibility id:drag-l1");
  }
  get peca2() {
    return $("accessibility id:drag-c1");
  }
  get peca3() {
    return $("accessibility id:drag-r1");
  }
  get peca4() {
    return $("accessibility id:drag-l2");
  }
  get peca5() {
    return $("accessibility id:drag-c2");
  }
  get peca6() {
    return $("accessibility id:drag-r2");
  }
  get peca7() {
    return $("accessibility id:drag-l3");
  }
  get peca8() {
    return $("accessibility id:drag-c3");
  }
  get peca9() {
    return $("accessibility id:drag-r3");
  }
  // Alvos Drag
  get alvo1() {
    return $("accessibility id:drop-l1");
  }
  get alvo2() {
    return $("accessibility id:drop-c1");
  }
  get alvo3() {
    return $("accessibility id:drop-r1");
  }
  get alvo4() {
    return $("accessibility id:drop-l2");
  }
  get alvo5() {
    return $("accessibility id:drop-c2");
  }
  get alvo6() {
    return $("accessibility id:drop-r2");
  }
  get alvo7() {
    return $("accessibility id:drop-l3");
  }
  get alvo8() {
    return $("accessibility id:drop-c3");
  }
  get alvo9() {
    return $("accessibility id:drop-r3");
  }

  // Métodos / Ações
  async abrirMenuDrag() {
    await this.menuDrag.click();
  }
}

export default new DragPage();
