(() => {
  const views = [...document.querySelectorAll("[data-view]")];
  const navDashboard = document.querySelector(".dashboard-nav");
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function navigate() {
    const requested = window.location.hash.replace("#", "").toLowerCase();
    const view = ["login", "signup", "dashboard"].includes(requested) ? requested : "home";
    views.forEach(section => {
      const isActive = section.dataset.view === view;
      section.classList.toggle("active", isActive);
      section.setAttribute("aria-hidden", String(!isActive));
    });
    navDashboard.style.display = view === "dashboard" ? "inline" : "";
    document.querySelector(".site-header").classList.toggle("dashboard-header", view === "dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = view === "home" ? "ClassIQ — Empower Your Learning Journey" :
      view === "dashboard" ? "Courses Dashboard — ClassIQ" :
      `${view === "login" ? "Login" : "SignUp"} — ClassIQ`;
  }

  window.addEventListener("hashchange", navigate);
  navigate();

  function validateForm(form, successMessage) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      const fields = [...form.querySelectorAll("input")];
      const invalid = fields.find(field => !field.checkValidity());
      if (invalid) {
        message.textContent = invalid.validity.typeMismatch ? "Please enter a valid email address." :
          invalid.validity.tooShort ? `Please enter at least ${invalid.minLength} characters.` :
          "Please complete this field.";
        invalid.focus();
        return;
      }
      message.textContent = successMessage;
      form.reset();
      if (form.id === "login-form" || form.id === "signup-form") {
        setTimeout(() => { window.location.hash = "dashboard"; }, 900);
      }
    });
  }

  validateForm(document.getElementById("login-form"), "Login validated! Opening your learning dashboard…");
  validateForm(document.getElementById("signup-form"), "Account details validated! Opening your learning dashboard…");

  const search = document.getElementById("course-search");
  const courseCards = [...document.querySelectorAll(".course-card")];
  const emptyState = document.getElementById("empty-state");
  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    courseCards.forEach(card => {
      const matches = `${card.dataset.course} ${card.textContent}`.toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    });
    emptyState.hidden = visible > 0;
  });

  document.querySelectorAll(".course-action").forEach(button => {
    button.addEventListener("click", () => {
      const title = button.closest(".course-card").querySelector("h3").textContent;
      showToast(`${title} — course details coming soon.`);
    });
  });

  document.getElementById("subscribe-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("subscribe-email");
    const message = document.querySelector(".subscribe-message");
    if (!input.checkValidity()) { input.reportValidity(); return; }
    message.textContent = "Thanks for subscribing! You're on the list.";
    input.value = "";
  });
})();
