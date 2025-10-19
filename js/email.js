window.addEventListener("DOMContentLoaded", () => {
  const user = "olivier.bouet-willaumez";
  const domain = "u-pec.fr";
  const emailElement = document.getElementById("email");

  if (emailElement) {
    const emailAddress = `${user}@${domain}`;
    emailElement.innerHTML = `<a href="mailto:${emailAddress}" class="contact-link">${emailAddress}</a>`;
  } else {
    console.warn("L’élément #email est introuvable.");
  }
});