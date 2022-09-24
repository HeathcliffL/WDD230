const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdated").textContent = document.lastModified;
// const lastmodified = new Date(document.lastModified);
// document.getElementById("lastupdated").textContent = `${lastmodified.getDate()}/${lastmodified.getMonth()}/${lastmodified.getFullYear()}`;