/**
 * A custom pwa install button
 * 
 * @author Abishek 
 */

import {html, customElement,  css, property, LitElement} from 'lit-element';

/**
 * A custom pwa install button
 * 
 * @value Defaults to 'Install'
 * @background Defaults to 'dark pink color'
 * @color Defaults to white
 */
@customElement('fn-pwa-button')
export class FnPwaButton extends LitElement{
    private _prompt: any;
    private _trigger: boolean;

    constructor(){
        super();
        this._prompt = false;
        this._trigger = false;
    }

  static styles = css`
  .fn-pwa-button{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: var(--fn-pwa-install-background);
    border: 0;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
    color: #fff;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: Segoe UI,system-ui,-apple-system,sans-serif;
    font-size: .875em;
    font-weight: 600;
    height: var(--fn-pwa-install-size);
    letter-spacing: 1px;
    overflow: hidden;
    padding: 0;
    justify-content:center;
    position: relative;
    text-indent: -9999px;
    text-overflow: initial;
    text-transform: uppercase;
    width: var(--fn-pwa-install-size);
  } 

  .fn-pwa-button:focus{
      outline:none;
  }
  .fn-pwa-button:hover{
      opacity:0.95;
  }
  .fn-pwa-install-message{
      display:none;
      margin-left:4px;
  }
  @media (min-width: 1264px){
    .fn-pwa-button {
        border-radius: 28px;
        padding: 0 24px 0 24px;
        text-indent: 0;
        width: auto;
    }
    .fn-pwa-install-message{
        display:block;
    }
  }
  `;
  /**
   * Sets value for the button
   * 
   */ 
  @property({type: String})
    value = 'Install';

  /**
   * Defines the background color
   */
  @property({type: String})
    background = "#602ac1";

  /**
   * Defines the color for text and icon
   * 
   */
  @property({type: String})
    color = "#fff"; 

  @property({type: String})
    size = "56px";

  render() {
    return this._trigger ? html`
       <button @click="${this._onClick}"
             style="--fn-pwa-install-background: ${this.background};
                 color: ${this.color};
                 --fn-pwa-install-size: ${this.size}
             "                 
             class="fn-pwa-button" role="button" aria-label="Install this app">
                <!-- Icon from https://css.gg/software-download -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" /><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" />
                </svg>
                <span class="fn-pwa-install-message">
                    ${this.value}
                </span>
        </button>
    `: '';
  }
  private _onClick() {
    // Hide the button
    this._trigger = false;
    // Request for rerender
    this.requestUpdate();
    // Show the prompt
    this._prompt.prompt();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        this._prompt = e;
        // Update UI notify the user they can install the PWA
        this._trigger = true;
        this.requestUpdate();
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fn-pwa-button': FnPwaButton;
  }
}
