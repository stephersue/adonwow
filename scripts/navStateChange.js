// get elements by ID
var navs = document.getElementsByClassName('btn')

// toggle function
let toggle = function () {
  // find the active elements and turn them off
  let active = document.getElementsByClassName('active')
  for ( let i = 0; i < active.length; i++ ) {
    active[i].classList.remove('active')
  }
  // change the clicked to active
  this.classList.add('active')
}

// add event listeners to each nav item
for ( let i = 0; i < navs.length; i++ ) {
  navs[i].addEventListener('click', toggle, false)
}
//
// $(document).ready(function () {
//
//   // Set BaseURL
//   var baseURL = 'index.html'
//
//   // Get current URL and replace baseURL
//   var href = window.location.href.replace(baseURL, '');
//
//   // Remove trailing slash
//   href = href.substr(-1) == '/' ? href.substr(0, href.length - 1) : href;
//
//   // Get last part of current URL
//   var page = href.substr(href.lastIndexOf('/') + 1);
//
//   // Add trailing slash if not empty (empty means we're currently at baseURL)
//   page = page != '' ? page + '/' : page;
//
//   // Select link based on href attribute and set it's closest 'li' to 'active'.
//   // .siblings('.active').removeClass() is only needed if you have a default 'active li'.
//   $('a[href="' + baseURL + page + '"]', '.nav li').closest('li').addClass('active').siblings('.active').removeClass();
//
// });
