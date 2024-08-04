class BackgroundBox extends HTMLElement {
  constructor() {
    super();
  }
}
class CardBox extends HTMLElement {
  constructor() {
    super();
  }
}

class CardBoxActions extends HTMLElement {
  constructor() {
    super();
  }
}

class ListGrid extends HTMLElement {
  constructor() {
    super();
  }
}

class MyButton extends HTMLButtonElement {
  constructor() {
    super();
  }
}

class BackgroundBoxContent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('background-box', BackgroundBox);
customElements.define('card-box', CardBox);
customElements.define('card-box-actions', CardBoxActions);
customElements.define('background-box-content', BackgroundBoxContent);
customElements.define('list-grid', ListGrid);
customElements.define('my-button', MyButton, { extends: 'button' });
