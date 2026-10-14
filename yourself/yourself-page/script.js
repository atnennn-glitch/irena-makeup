const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.setProperty("--delay", `${entry.target.dataset.delay || 0}ms`);
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll("[data-lead]").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.fbq === "function") window.fbq("track", "Lead");
  });
});

document.querySelectorAll("[data-dialog]").forEach((button) => {
  button.addEventListener("click", () => document.querySelector(`#${button.dataset.dialog}`).showModal());
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});
