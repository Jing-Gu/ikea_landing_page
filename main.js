document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    document.body.style.display = "block";
  });

  var tl = gsap.timeline();

  tl.staggerFrom(
    "section",
    2,
    {
      opacity: 0,
      scale: 0.5,
      ease: "Power2.easeOut"
    },
    0.2
  );

  tl.staggerFrom(
    ".logo,.menu",
    1,
    {
      opacity: 0,
      y: -40,
      ease: "Power2.easeOut"
    },
    0.2,
    "-=1.8"
  );

  tl.staggerFrom(
    ".content,.cta-btn",
    2,
    {
      opacity: 0,
      y: -40,
      ease: "Power2.easeOut"
    },
    0.2,
    "-=1.5"
  );
});
