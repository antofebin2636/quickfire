import "../styles/theme.scss";


const appearTitles = require('./modules/appear-title').default;


appearTitles();


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-module]").forEach((el) => {
        const name = el.getAttribute("data-module");
        const moduleInit = require(`./modules/${name}`).default;
        console.log(name);
        moduleInit({ el });
    });
});