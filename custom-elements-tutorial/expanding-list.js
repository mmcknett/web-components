class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    const uls = Array.from(this.querySelectorAll('ul'));
    const lis = Array.from(this.querySelectorAll('li'));
    
    // Hide child uls
    uls.forEach(ul => ul.style.display = 'none');
    lis.forEach(li => {
      if (li.querySelectorAll('ul').length == 0) {
        return; // Ignore this list item if it has no sub-lists.
      }
    
      li.setAttribute('class', 'closed');
    
      const childText = li.childNodes[0];
      const newSpan = document.createElement('span');
    
      newSpan.textContent = childText.textContent;
      newSpan.style.cursor = 'pointer';
    
      newSpan.onclick = this.showul;

      childText.parentNode.insertBefore(newSpan, childText);
      childText.parentNode.removeChild(childText);
    });
  }

  showul = (e) => {
    console.log("clicked");
    const nextul = e.target.nextElementSibling;

    if (nextul.style.display == 'block') {
      nextul.style.display = 'none';
      nextul.parentNode.setAttribute('class', 'closed');
    } else {
      nextul.style.display = 'block';
      nextul.parentNode.setAttribute('class', 'open');
    }
  }
}

customElements.define('expanding-list', ExpandingList, { extends: 'ul' });