require('./index.less');

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
    if (!this._session.answer) {
      this._session.answer = false;
    }
    this._rerender();
  }

  get session() {
    return this._session;
  }

  _rerender() {
    let feedback = this._model && this._model.feedback ? this._model.feedback : '';
    let feedbackTag = feedback ? `<div class="feedback">${feedback}</div>` : '';

    let checked = this._session ? this._session.answer : false;

    this.innerHTML = `
      <label class="switch">
        <input type="checkbox" ${checked ? 'checked=""' : ''}>
        <div class="slider round"></div>
      </label>
      ${feedbackTag}`;

    this.querySelector('input').addEventListener('change', (e) => {
      this._session.answer = e.target.checked;
    });
  }

  connectedCallback() {
    this.dispatchEvent(new CustomEvent('pie.register', { bubbles: true }));
    this._rerender();
  }

}