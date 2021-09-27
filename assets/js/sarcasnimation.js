// const observerFade = (entries) => {
const observerFade = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("sarcasmoution");
      this.unobserve(entry.target);
      entry.target.classList.remove("sarcasmoution-fade-out");
    } else {
      entry.target.classList.remove("sarcasmoution");
    }
  });
};

const initAnimation = () => {
  const observer = new IntersectionObserver(observerFade, { threshold: 1 });

  document.querySelectorAll("[data-sarcasnimation]").forEach((el) => {
    el.classList.add("sarcasmoution-fade-out");
    observer.observe(el);
  });
};

export default initAnimation;
