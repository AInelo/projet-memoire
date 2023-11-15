// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');
  
//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
//   }
  
//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));



// Documentation
// https://jolty.dev/docs/tablist

import { Tablist } from "https://cdn.jsdelivr.net/npm/jolty/dist/jolty.esm.min.js";

Tablist.data("faq", {
  tab: ".faq-tab",
  tabpanel: ".faq-tabpanel",
  hideMode: "class-shown"
});

Tablist.data("faq-mobile", {
  data: "faq",
  breakpoints: {
    640: {
      destroy: true
    }
  }
});

Tablist.initAll();
