/**
 * A button component with ripple effect
 * 
 * @author Abishek 
 */

import {html, customElement,  css, property, LitElement, query} from 'lit-element';

/**
 * A button with ripple effect
 * 
 * @background Defaults to 'dark pink color'
 * @color Defaults to white
 * @slot This component has slot
 */
@customElement('fn-ripple-btn')
export class FnRippleBtn extends LitElement{

    constructor(){ 
        super();        
        this.addEventListener('click', this._onClick);
    }

  static styles = css` 
  button {
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: #fff;
    background-color:#602ac1;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    }
    span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
          transform: scale(4);
          opacity: 0;
      }
    }
    @-webkit-keyframes ripple {
      to {
          transform: scale(4);
          opacity: 0;
      }
    }
  `;

  /**
   * Defines the background color
   * 
   * Default color #602ac1
   */
  @property({type: String})
    background = "#602ac1";

  /**
   * Defines the color for text and icon
   * 
   * Default color #fff
   */
  @property({type: String})
    color = "#fff";  

  @query('#fn-material-button')
  _fnbutton!:  NodeListOf<HTMLButtonElement> | any;

  render() {
    return html`
    <button id="fn-material-button"
     style="background-color: ${this.background};color: ${this.color}">
        <slot></slot>
    </button>
    `;
  }

  private _onClick(event: HTMLButtonElement | any) {
      /**
       * Click event
       * 
       */
      const e = new CustomEvent('fn-click');
      this.dispatchEvent(e);
      const button = this._fnbutton;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
  
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");
  
      const ripple = button.getElementsByClassName("ripple")[0];
  
      if (ripple) {
        ripple.remove();
      }
  
      button.appendChild(circle);
 }

}

declare global {
  interface HTMLElementTagNameMap {
    'fn-ripple-btn': FnRippleBtn;
  }
}
