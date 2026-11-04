const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

// Automatically remove fbclid from the browser address bar
(function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('fbclid')) {
    urlParams.delete('fbclid');
    const cleanQuery = urlParams.toString();
    const cleanURL = window.location.pathname + (cleanQuery ? '?' + cleanQuery : '') + window.location.hash;
    window.history.replaceState(null, '', cleanURL);
  }
})();
