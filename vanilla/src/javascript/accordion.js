class Accordion {
  currentId = '690bd0669ab893857e6e02ec';

  constructor() {
    this.accordionElements = document.querySelectorAll('.accordion-items');
    this.init();
  }

  init() {
    this.accordionElements.forEach(accordion => {
      accordion.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('tab')) {
          const itemId = target.getAttribute('id');
          this.toggleAccordion(itemId);
        }
      });
    });
  }

  toggleAccordion(itemId) {
    console.log('Toggling accordion for itemId:', itemId);
    if (this.currentId === itemId) {
      this.currentId = null;
    } else {
      this.currentId = itemId;
    }
    this.updateAccordionDisplay();
  }

  updateAccordionDisplay() {
    this.accordionElements.forEach(accordion => {
      const items = accordion.querySelectorAll('.item');
      items.forEach(item => {
        const itemId = item.querySelector('.tab').getAttribute('id');
        if (this.currentId === itemId) {
          item.classList.add('current');
        } else {
          item.classList.remove('current');
        }
      });
    });
  }

}

export default Accordion;