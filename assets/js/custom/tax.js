/* Listen for changes in job category dropdown */
document.getElementById("job_category").addEventListener("change", function () {
  const mode = this.value;
  const fullTimeElements = document.querySelectorAll(".full-time-only");
  const contractElements = document.querySelectorAll(".contract-only");
  const deductionToggles = document.querySelectorAll(".deduction-toggle");
  const inputs = document.querySelectorAll(".form-input");
  const topCard = document.getElementById("top-card");
  const secondColumn = document.querySelector(".second_column"); // Target right column container
  const rightCol = document.getElementById("right-col"); // 👈 wrapper

  /* Reset all form inputs when switching modes */
  inputs.forEach((input) => (input.value = ""));

  if (mode === "full-time") {
    /* Show Full Time elements (ATI, tax table, full-time bottom card, tooltips, toggles) */
    fullTimeElements.forEach((el) => el.classList.remove("hidden"));
    /* Hide Contract bottom card */
    contractElements.forEach((el) => el.classList.add("hidden"));
    /* Enable deduction toggles */
    deductionToggles.forEach((toggle) => (toggle.checked = true));
    /* Remove contract-mode class to restore top card and second_column */
    topCard.classList.remove("contract-mode");
    secondColumn.classList.remove("contract-mode");
    rightCol.classList.remove("contract-mode"); // 👈 reset wrapper
  } else if (mode === "contract") {
    /* Hide Full Time elements (ATI, tax table, full-time bottom card, tooltips, toggles) */
    fullTimeElements.forEach((el) => el.classList.add("hidden"));
    /* Show Contract bottom card */
    contractElements.forEach((el) => el.classList.remove("hidden"));
    /* Disable deduction toggles */
    deductionToggles.forEach((toggle) => (toggle.checked = false));
    /* Add contract-mode class to shrink top card and remove max-height from second_column */
    topCard.classList.add("contract-mode");
    secondColumn.classList.add("contract-mode");
    rightCol.classList.add("contract-mode"); // 👈 no space-between
  }
});
