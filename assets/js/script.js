'use strict';



// element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Jquery
const elementToggleFunc = function (elem) {
  $(elem).toggleClass("active");
};




// sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");  
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });  



$(document).ready(function () {
  const $sidebar = $("[data-sidebar]");
  const $sidebarBtn = $("[data-sidebar-btn]");

  $sidebarBtn.on("click", function () {
      $sidebar.toggleClass("active");
  });
});




// testimonials variables 
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// Jquery
const $testimonialsItem = $("[data-testimonials-item]");
const $modalContainer = $("[data-modal-container]");
const $modalCloseBtn = $("[data-modal-close-btn]");
const $overlay = $("[data-overlay]");


// modal variable
  // const modalImg = document.querySelector("[data-modal-img]");
  // const modalTitle = document.querySelector("[data-modal-title]");
  // const modalText = document.querySelector("[data-modal-text]");

// Jquery
const $modalImg = $("[data-modal-img]");
const $modalTitle = $("[data-modal-title]");
const $modalText = $("[data-modal-text]");

// modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);


// jQuery 


// Function to toggle the modal
const testimonialsModalFunc = function () {
    $modalContainer.toggleClass("active");
    $overlay.toggleClass("active");
};

// Add click event to all modal items
$testimonialsItem.on("click", function () {
    const $this = $(this);
    
    $modalImg.attr("src", $this.find("[data-testimonials-avatar]").attr("src"));
    $modalImg.attr("alt", $this.find("[data-testimonials-avatar]").attr("alt"));
    $modalTitle.html($this.find("[data-testimonials-title]").html());
    $modalText.html($this.find("[data-testimonials-text]").html());

    testimonialsModalFunc();
});

// Add click event to modal close button and overlay to close modal
$modalCloseBtn.on("click", testimonialsModalFunc);
$overlay.on("click", testimonialsModalFunc);



// custom select variables

// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-select-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Jquery
const $select = $("[data-select]");
const $selectItems = $("[data-select-item]");
const $selectValue = $("[data-select-value]");
const $filterBtn = $("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });
$select.on("click", function () {
  elementToggleFunc($select.get(0)); // Pass the DOM element
});

// add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);    
//     filterFunc(selectedValue);

//   });
// }

$selectItems.on("click", function () {
  let selectedValue = $(this).text().toLowerCase();
  $selectValue.text($(this).text());
  elementToggleFunc($select.get(0));
  filterFunc(selectedValue);
});




// filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");
const $filterItems = $("[data-filter-item");

const filterFunc = function (selectedValue) {

  // for (let i = 0; i < filterItems.length; i++) {

  //   if (selectedValue === "all") {
  //     filterItems[i].classList.add("active");
  //   } else if (selectedValue === filterItems[i].dataset.category) {
  //     filterItems[i].classList.add("active");
  //   } else {
  //     filterItems[i].classList.remove("active");
  //   }

  // }

  //Jquery
  $filterItems.each(function () {
    const $item = $(this);

    if (selectedValue === "all" || selectedValue === $item.data("category")) {
        $item.addClass("active");
    } else {
        $item.removeClass("active");
    }
  });

}

// add event in all filter button items for large screen
let $lastClickedBtn = $filterBtn.eq(0);

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }

// Jquery
$filterBtn.on("click", function () {
  const $this = $(this);

  let selectedValue = $this.text().toLowerCase();
  $selectValue.text($this.text()); 
  filterFunc(selectedValue);

  $lastClickedBtn.removeClass("active");
  $this.addClass("active");
  $lastClickedBtn = $this;

});



// contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

//Jquery
const $form = $("[data-form]");
const $formInputs = $("[data-form-input]");
const $formBtn = $("[data-form-btn]");

// add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }

//Jquery
$formInputs.on("input", function () {
  // Check form validation
  if ($form[0].checkValidity()) {
      $formBtn.removeAttr("disabled");
  } else {
      $formBtn.attr("disabled", "disabled");
  }
});



// page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

//Jquery
const $navigationLinks = $("[data-nav-link]");
const $pages = $("[data-page]");

// add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }

// Jquery
$navigationLinks.on("click", function () {
  const $this = $(this);
  const selectedPage = $this.text().toLowerCase();

  $pages.each(function (index) {
      const $page = $(this);

      if (selectedPage === $page.data("page")) {
          $page.addClass("active");
          $navigationLinks.eq(index).addClass("active");
          window.scrollTo(0, 0);
      } else {
          $page.removeClass("active");
          $navigationLinks.eq(index).removeClass("active");
      }
  });
});
