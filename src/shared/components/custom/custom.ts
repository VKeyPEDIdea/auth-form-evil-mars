class GradientBoxComponent extends HTMLElement {
  constructor() {
    super();
  }
}
class CardBoxComponent extends HTMLElement {
  constructor() {
    super();
  }
}

class CardBoxActionsComponent extends HTMLElement {
  constructor() {
    super();
  }
}

class ListGridComponent extends HTMLElement {
  constructor() {
    super();
  }
}

class MyButtonComponent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('gradient-box', GradientBoxComponent);
customElements.define('card-box', CardBoxComponent);
customElements.define('card-box-actions', CardBoxActionsComponent);
customElements.define('list-grid', ListGridComponent);
customElements.define('my-button', MyButtonComponent, { extends: 'button' });
