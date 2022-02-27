const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

tabs.forEach((tab, index) => {
    const pane = panes[index];
  
    tab.onclick = function () {
      $(".tab-item.active").classList.remove("active");
      $(".tab-item.active-bg").classList.remove("active-bg");
      $(".tab-pane.active").classList.remove("active");
  
      this.classList.add("active");
      this.classList.add("active-bg");
      pane.classList.add("active");
    };
  });


//   Tab UI Testimonial

const testimonial_tabs = $$(".testimonial__tab-item");
const testimonial_panes = $$(".testimonial__tab-pane");

testimonial_tabs.forEach((tab, index) => {
    const pane = testimonial_panes[index];
  
    tab.onclick = function () {
      $(".testimonial__tab-item.active-item").classList.remove(".active-item")
      $(".testimonial__tab-pane.active-pane").classList.remove(".active-pane");
  
      this.classList.add("active-item");
      pane.classList.add("active-pane");
    };
  });