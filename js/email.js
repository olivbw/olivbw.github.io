const user = "olivier.bouet-willaumez";
const domain = "u-pec.fr";
const emailElement = document.getElementById("email");
emailElement.innerHTML = user + "@" + domain;
const emailAddress = `${user}@${domain}`;
emailElement.innerHTML = `<a href="mailto:${emailAddress}" class="contact-link">${emailAddress}</a>`;
