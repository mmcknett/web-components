class WordCount extends HTMLParagraphElement {
  constructor() {
    super();

    const shadowDom = this.attachShadow({ mode: 'open' });
    this.textContainer = document.createElement('span');
    shadowDom.appendChild(this.textContainer);

    // this.updateTextContainer();

    // Update when content changes
    setInterval(this.updateTextContainer, 200);
  }

  countWordsInParent = () => {
    const wcParent = this.parentNode;
    const text = wcParent.innerText || wcParent.textContent;
    const count = text
      .trim()
      .split(/\s+/g)
      .filter(a => a.trim().length > 0)
      .length;

    return count;
  }

  updateTextContainer = () => {
    const countText = `Words: ${this.countWordsInParent()}`;
    this.textContainer.textContent = countText;
  }
}

customElements.define('word-count', WordCount, { extends: 'p' });