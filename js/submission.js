document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("consultation-form");

    if (!form) return;

    if (form.hasAttribute("data-netlify")) {
        form.setAttribute("action", "/thank-you/");
    }
});