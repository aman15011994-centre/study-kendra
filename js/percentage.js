/* ==========================================
STUDY KENDRA - PERCENTAGE CALCULATOR
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const calcBtn = document.getElementById("calculatePercentage");
    const resultBox = document.getElementById("percentageResult");

    if (!calcBtn || !resultBox) return;

    calcBtn.addEventListener("click", () => {

        const obtained = parseFloat(document.getElementById("obtainedMarks").value);
        const total = parseFloat(document.getElementById("totalMarks").value);

        if (isNaN(obtained) || isNaN(total) || total <= 0) {
            resultBox.textContent = "Please enter valid marks.";
            resultBox.classList.remove("show-result");
            return;
        }

        if (obtained > total) {
            resultBox.textContent = "Obtained marks cannot be more than total marks.";
            resultBox.classList.remove("show-result");
            return;
        }

        const percentage = ((obtained / total) * 100).toFixed(2);

        resultBox.textContent = "Percentage: " + percentage + "%";
        resultBox.classList.add("show-result");

    });

});
