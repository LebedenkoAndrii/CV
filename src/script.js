$(".menu-btn").on("click", function (e) {
  e.preventDefault();
  $(".menu").toggleClass("menu-active");
  $(".menu-btn").toggleClass("active");
  $("body").toggleClass("lock");
  $(".main").toggleClass("main-active");
});
// scroll-bar
function scrollBarWidth() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.body.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}
window.onscroll = scrollBarWidth;

AOS.init();
