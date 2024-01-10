const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const album = document.querySelector(".album");
const specializations = document.querySelector("#specializations");
const ourmission = document.querySelector("#ourmission");
const whyus = document.querySelector("#whyus");
const reviews = document.querySelector("#reviews");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
    });
});
observer.observe(title);
observer.observe(subtitle);
observer.observe(album);
observer.observe(specializations);
observer.observe(ourmission);
observer.observe(whyus);
observer.observe(reviews);
