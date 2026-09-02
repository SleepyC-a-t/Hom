const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".main_content section");

document.getElementById("home").classList.add("active");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pageId = this.dataset.page;

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(pageId).classList.add("active");
    });
});