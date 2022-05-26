class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    const icon = wrapper.appendChild(document.createElement('span'));
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabIndex', 0);

    const img = icon.appendChild(document.createElement('img'));
    img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png';
    icon.appendChild(img);

    const info = wrapper.appendChild(document.createElement('span'));
    info.setAttribute('class', 'info');

    info.textContent = this.getAttribute('data-text');

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'popup-info-style.css');

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

customElements.define('popup-info', PopUpInfo);
