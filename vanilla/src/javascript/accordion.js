const ACCORDION_DATA_ID = {
  '690bd0669ab893857e6e02ec': 'accordion-1',
  '5f4dcc3b5aa765d61d8327deb882cf99': 'accordion-2',
  '9b74c9897bac770ffc029102a200c5de': 'accordion-3',
};


class Accordion {
  currentId = '690bd0669ab893857e6e02ec';

  constructor() {
    this.accordionElements = document.querySelectorAll('.accordion-items');
    this.init();

  }

  init() {
    console.log('init!', this.accordionElements)
    this.accordionElements.forEach(accordion => {
      accordion.addEventListener('click', (event) => {
        console.log('clcick!')
        const target = event.target;
        if (target.classList.contains('item')) {
          const itemId = target.getAttribute('id');
          this.toggleAccordion(itemId);
        }
      });
    });
  }

  toggleAccordion(itemId) {
    console.log('Toggling accordion for itemId:', itemId)
    if (this.currentId === itemId) {
      this.currentId = null;
    } else {
      this.currentId = itemId;
    }
    this.updateAccordionDisplay();
  }

  updateAccordionDisplay() {
    this.accordionElements.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion-items');
      items.forEach(item => {
        const itemId = item.querySelector('.item').getAttribute('id');
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