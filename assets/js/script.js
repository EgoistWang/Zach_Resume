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
const $select = $("[data-select]");
// const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");


// const $selectItems = $("[data-select-items]");
// const $selectValue = $("[data-select-value]");
// const $filterBtn = $("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });
$select.on("click", function () {
  elementToggleFunc($select.get(0)); // Pass the DOM element
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);    
    filterFunc(selectedValue);

  });
}




// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// 'use strict';

// $(document).ready(function () {
//   // Element toggle function
//   const elementToggleFunc = (elem) => $(elem).toggleClass("active");

//   // Sidebar toggle functionality for mobile
//   $("[data-sidebar-btn]").on("click", function () {
//     elementToggleFunc($("[data-sidebar]"));
//   });

//   // Testimonials modal functionality
//   $("[data-testimonials-item]").on("click", function () {
//     const $this = $(this);
//     $("[data-modal-img]").attr({
//       src: $this.find("[data-testimonials-avatar]").attr("src"),
//       alt: $this.find("[data-testimonials-avatar]").attr("alt"),
//     });
//     $("[data-modal-title]").html($this.find("[data-testimonials-title]").html());
//     $("[data-modal-text]").html($this.find("[data-testimonials-text]").html());

//     elementToggleFunc($("[data-modal-container]"));
//     elementToggleFunc($("[data-overlay]"));
//   });

//   // Close modal
//   $("[data-modal-close-btn], [data-overlay]").on("click", function () {
//     elementToggleFunc($("[data-modal-container]"));
//     elementToggleFunc($("[data-overlay]"));
//   });

//   // Custom select functionality
//   $("[data-select]").on("click", function () {
//     elementToggleFunc(this);
//   });

//   $("[data-select-item]").on("click", function () {
//     const selectedValue = $(this).text().toLowerCase();
//     $("[data-selecct-value]").text($(this).text());
//     elementToggleFunc($("[data-select]"));
//     filterFunc(selectedValue);
//   });

//   // Filter function
//   const filterFunc = (selectedValue) => {
//     $("[data-filter-item]").each(function () {
//       const category = $(this).data("category");
//       $(this).toggleClass("active", selectedValue === "all" || selectedValue === category);
//     });
//   };

//   // Filter button functionality for large screen
//   let lastClickedBtn = $("[data-filter-btn]").first().addClass("active");

//   $("[data-filter-btn]").on("click", function () {
//     const selectedValue = $(this).text().toLowerCase();
//     $("[data-selecct-value]").text($(this).text());
//     filterFunc(selectedValue);

//     lastClickedBtn.removeClass("active");
//     $(this).addClass("active");
//     lastClickedBtn = $(this);
//   });

//   // Enable/Disable form submit button based on form validation
//   $("[data-form-input]").on("input", function () {
//     const formIsValid = $("[data-form]")[0].checkValidity();
//     $("[data-form-btn]").prop("disabled", !formIsValid);
//   });

//   // Page navigation functionality
//   $("[data-nav-link]").on("click", function () {
//     const pageName = $(this).text().toLowerCase();

//     $("[data-page]").each(function (index) {
//       const isActive = pageName === $(this).data("page");
//       $(this).toggleClass("active", isActive);
//       $("[data-nav-link]").eq(index).toggleClass("active", isActive);
//     });

//     window.scrollTo(0, 0);
//   });
// });

