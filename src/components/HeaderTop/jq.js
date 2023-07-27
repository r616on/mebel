var navbarFixed = $('nav.navbar-fixed');

// When reload page - check if page has offset
if ($(document).scrollTop() > 94) {
  navbarFixed.addClass('navbar-sticked');
}
// Add sticky menu on scroll
$(document).on('bind ready scroll', function () {
  var docScroll = $(document).scrollTop();
  if (docScroll >= 10) {
    navbarFixed.addClass('navbar-sticked');
  } else {
    navbarFixed.removeClass('navbar-sticked');
  }
});
