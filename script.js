document.addEventListener("DOMContentLoaded", () => {
    const openLightbox = document.getElementById("open-lightbox");
    const closeLightbox = document.getElementById("close-lightbox");
    const lightbox = document.getElementById("lightbox");
    const form = document.getElementById("love-check-form");
    const result = document.getElementById("result");

    openLightbox.addEventListener("click", () => {
        // Clear form inputs and result
        form.reset();
        result.textContent = "";
        lightbox.classList.add("visible");
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.classList.remove("visible");
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });
});

function evaluateLove() {
    const daysKnown = parseInt(document.getElementById("days-known").value);
    const vibeCheck = document.getElementById("vibe-check").value;
    const chemistry = document.getElementById("chemistry").value;
    const comfort = document.getElementById("comfort").value;
    const timing = document.getElementById("timing").value;

    let result = "";
    let unmetConditions = [];

    // Check if all conditions are met
    if (vibeCheck !== "yes") unmetConditions.push("Vibe Check");
    if (chemistry !== "yes") unmetConditions.push("Romantic Chemistry");
    if (comfort !== "yes") unmetConditions.push("Comfort");
    if (timing !== "yes") unmetConditions.push("Timing");

    if (daysKnown < 31) {
        result = "This is a crush. You can't like someone in less than 30 days.";
    } else if (unmetConditions.length === 0) {
        result = "It's love!";
    } else if (daysKnown > 365) {
        result = `You may be chasing your tail. Unmet conditions: ${unmetConditions.join(", ")}.`;
    } else {
        result = `This is a like. More time is needed. Unmet conditions: ${unmetConditions.join(", ")}.`;
    }

    document.getElementById("result").textContent = result;
}
