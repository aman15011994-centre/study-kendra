/* ==========================================
STUDY KENDRA - CGPA CALCULATOR
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const calcBtn = document.getElementById("calculateCGPA");
    const resultBox = document.getElementById("cgpaResult");

    if (!calcBtn || !resultBox) return;

    calcBtn.addEventListener("click", () => {

        const cgpa = parseFloat(document.getElementById("cgpaInput").value);

        if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
            resultBox.textContent = "Please enter a valid CGPA between 0 and 10.";
            resultBox.classList.remove("show-result");
            return;
        }

        const percentage = (cgpa * 9.5).toFixed(2);

        resultBox.textContent = "Percentage: " + percentage + "%";
        resultBox.classList.add("show-result");

    });

});
