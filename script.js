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
