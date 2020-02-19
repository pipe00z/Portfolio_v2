$(".container").isotope({
  itemSelector: ".card",
  layoutMode: "fitRows"
});

$(".menu-gallery ul li a").click(function() {
  $(".menu-gallery ul li a").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".container").isotope({
    filter: selector
  });
  return false;
});
