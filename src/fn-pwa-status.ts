/**
 *  A custom pwa offline and online status banner
 * 
 * @author Abishek 
 */

import {html, customElement,  css,  LitElement, property} from 'lit-element';

/**
 *  A custom pwa offline and online status banner
 * 
 */
@customElement('fn-pwa-status')
export class FnPwaStatus extends LitElement{
    private show: boolean;
    constructor(){
        super();
        this.show = false;
    }
  static styles = css`
    :host{
        position:fixed;
        bottom:10px;
        width:80vw;
        left: 50%;
        transform: translateX(-50%);
        background:transparent;
        border-radius:8px;
    }
    div{
        width:100%;
        height:50px;
        background-color:var(--fn-pwa-status);
        color:var(--fn-pwa-status-color);
        border-radius:8px;
        line-height:50px;
        display:flex;
        font-family: Segoe UI,system-ui,-apple-system,sans-serif;
        -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
        cursor:pointer;
        align-items:center;
        justify-content:space-between;
        animation-name: fade;
        animation-duration: .25s;
        transition: opacity 0.25s ease-in;
        text-align:center;
    }

    @keyframes fade{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
    @-webkit-keyframes fade{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }

    @media (min-width: 1264px){
    :host{
        width:300px;
    }
  }
  `

    /**
   * Defines the background color
   */
  @property({type: String})
    background = "#602ac1";

  /**
   * Defines the color for text 
   * 
   */
  @property({type: String})
    color = "#fff"; 

  @property({type: String})
    value = "It looks like you're offline";

  render() {
    return this.show ? html`
        <div @click="${this._onClick}" style="--fn-pwa-status: ${this.background}; --fn-pwa-status-color: ${this.color}">
            <span style="margin-left:30px">${this.value}</span>
            <span style="display:flex;margin-right:30px;">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                    />
                </svg>
            </span>
       </div>
    `: '';
  }

  private _onClick(){
      this.show = false;
      this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('online', () => {
        this.show = false;
        this.requestUpdate();
    });

    window.addEventListener('offline', () => {
        this.show = true;
        this.requestUpdate();
    })
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fn-pwa-status': FnPwaStatus;
  }
}
