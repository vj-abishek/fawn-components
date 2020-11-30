/**
 * A custom pwa install banner
 * 
 * @author Abishek 
 */

import {html, customElement,  css, property, LitElement} from 'lit-element';

/**
 * A custom pwa install banner
 * 
 * @value Defaults to 'Install'
 * @background Defaults to 'dark pink color'
 * @color Defaults to white
 */
@customElement('fn-pwa-banner')
export class FnPwaBanner extends LitElement{
    _prompt: any;
    _trigger: boolean;

    constructor(){
        super();
        this._prompt = false;
        this._trigger = false;

        // timeout to remove banner
        setTimeout(() => {
            this._trigger = false;
            // Request for rerender
            this.requestUpdate();
        }, 7000)
    }

  static styles = css`
  .fn-pwa-banner{
      width: calc(100vw - 20px);
      border-radius: 0px;
      padding: 10px;
      position:fixed;
      z-index:999;
      bottom: 0px;
      left: 0px;
      color:var(--fn-pwa-banner-color);
      background-color:var(--fn-pwa-banner-background);
      font-family: Segoe UI,system-ui,-apple-system,sans-serif;
      display: flex;
      flex-direction:row;
      overflow: hidden;
      animation-name: slide;
      animation-duration: .25s;
      transition: transform 0.25s ease-in;
  } 
  @keyframes slide{
      0%{
        transform:translate(-500px);
        opacity:0;
      }
      100%{
        transform:translate(0px);
        opacity:1;
      }
  }
  @-webkit-keyframes slide{
    0%{
        transform:translate(-500px);
        opacity:0;
      }
      100%{
        transform:translate(0px);
        opacity:1;
      }
  }

  .fn-pwa-banner > div{
      display: flex;
      flex-direction:column;
  }

  .fn-pwa-banner-title{
    font-weight: 600;
    margin-bottom:5px;
    font-size:1.2em;
  }
  .fn-pwa-banner-button{
      align-self:center;
      height:40px;
      border-radius: 24px;
      font-weight:600;
      color: var(--fn-pwa-banner-background);
      width: auto;
      padding: 0 24px 0 24px;
      cursor: pointer;
      border:0px;
      text-overflow: initial;
      font-size:1em;
      line-height:30px;
      font-family: Segoe UI,system-ui,-apple-system,sans-serif;
      text-transform: uppercase;
      background-color:#f4f4f9;
  }


  @media (min-width: 720px){
    .fn-pwa-banner {
       max-width: 500px;
       width:auto;
       bottom: 8px;
       left: 8px;
       -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
       box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
       border-radius: 6px;
       padding:20px;
    }
  }
  `;
  /**
   * Sets value for the button
   * 
   */
  @property({type: String})
    value = `Installing uses almost no storage and provides a quick way  to return to this app`;

  /**
   * Sets the title 
   */
  @property({type: String})
    title = `Install`;

  /**
   * Defines the background color
   */
  @property({type: String})
    background = "#602ac1";

  /**
   * If defined as show="false", The componenet is not shown
   */
  @property({type: String})
    show = "true";

  /**
   * Defines color
   */
  @property({type: String})
    color = "#fff";

  render() {
    return this._trigger && this.show === "true" ? html`
        <div class="fn-pwa-banner" 
             style= "--fn-pwa-banner-background: ${this.background};--fn-pwa-banner-color: ${this.color}"
        >
            <div>
                <span class="fn-pwa-banner-title">${this.title}</span>
                <span>${this.value}</span>
            </div>

            <div style="align-self:center;margin-left:15px;" @click="${this._onClick}">
                <button class="fn-pwa-banner-button">Install</button>
            </div>
        </div>
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
    'fn-pwa-banner': FnPwaBanner;
  }
}
