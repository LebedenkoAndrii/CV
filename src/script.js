$(".menu-btn").on("click", function (e) {
  e.preventDefault();
  $(".menu").toggleClass("menu-active");
  $(".menu-btn").toggleClass("active");
  $(".main").toggleClass("main-active");
});
AOS.init();
