export default class Toggle extends HTMLElement {

  constructor() {
    super();
    this._model = null;
    this._session = null;
  }

  set model(m) {
    this._model = m;
    this._rerender();
  }

  set session(s) {
    this._session = s;
    this._rerender();
  }

  get session() {
    return this._session;
  }

  _message() {
    return this._model ? this._model.message : 'hello, world';
  }

  _rerender() {
    this.innerHTML = `<div>${this._message()}</div>`;
  }

  connectedCallback() {
    this.dispatchEvent(new CustomEvent('pie.register', { bubbles: true }));
    this._rerender();
  }

}