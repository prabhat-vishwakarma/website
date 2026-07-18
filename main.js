(function () {
  var page = document.querySelector(".page");
  if (!page) return;

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  page.style.opacity = "0";
  page.style.transform = "translateY(8px)";
  page.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      page.style.opacity = "1";
      page.style.transform = "translateY(0)";
    });
  });
})();
