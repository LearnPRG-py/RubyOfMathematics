window.addEventListener("scroll", () => {
    const tagline = document.getElementById("tagline");
    const rect = tagline.getBoundingClientRect();
    const fadePoint = window.innerHeight / 2 + 200;
    const distanceFromFadePoint = rect.top - fadePoint;

    const fadeFactor = 1 - Math.max(0, Math.min(1, distanceFromFadePoint / 200));
    tagline.style.opacity = fadeFactor;
});

window.addEventListener("scroll", () => {
    const topics = document.querySelectorAll("#topics > div");

    topics.forEach((topic, index) => {
        const rect = topic.getBoundingClientRect();
        const fadePoint = window.innerHeight / 2;
        const distanceFromFadePoint = rect.top - fadePoint;

        const fadeFactor = 1 - Math.max(0, Math.min(1, distanceFromFadePoint / 200));
        topic.style.opacity = fadeFactor;
        topic.style.transform = `translateY(${distanceFromFadePoint / 5}px)`;
    });
});
window.addEventListener("scroll", () => {
    const tagline = document.getElementById("gamifiedimage");
    const rect = tagline.getBoundingClientRect();
    const fadePoint = window.innerHeight / 2 + 200;
    const distanceFromFadePoint = rect.top - fadePoint;

    const fadeFactor = 1 - Math.max(0, Math.min(1, distanceFromFadePoint / 200));
    tagline.style.opacity = fadeFactor;
});
window.addEventListener("scroll", () => {
    const tagline = document.getElementById("tagline2");
    const rect = tagline.getBoundingClientRect();
    const fadePoint = window.innerHeight / 2 + 200;
    const distanceFromFadePoint = rect.top - fadePoint;

    const fadeFactor = 1 - Math.max(0, Math.min(1, distanceFromFadePoint / 200));
    tagline.style.opacity = fadeFactor;
});
window.addEventListener("scroll", () => {
    const tagline = document.getElementById("tagline3");
    const rect = tagline.getBoundingClientRect();
    const fadePoint = window.innerHeight / 2 + 200;
    const distanceFromFadePoint = rect.top - fadePoint;

    const fadeFactor = 1 - Math.max(0, Math.min(1, distanceFromFadePoint / 200));
    tagline.style.opacity = fadeFactor;
});