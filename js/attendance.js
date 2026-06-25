/* ==========================================
STUDY KENDRA - ATTENDANCE CALCULATOR
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const calcBtn = document.getElementById("calculateAttendance");
    const resultBox = document.getElementById("attendanceResult");

    if (!calcBtn || !resultBox) return;

    calcBtn.addEventListener("click", () => {

        const attended = parseFloat(document.getElementById("classesAttended").value);
        const total = parseFloat(document.getElementById("totalClasses").value);

        if (isNaN(attended) || isNaN(total) || total <= 0) {
            resultBox.textContent = "Please enter valid numbers.";
            resultBox.classList.remove("show-result");
            return;
        }

        if (attended > total) {
            resultBox.textContent = "Classes attended cannot be more than total classes.";
            resultBox.classList.remove("show-result");
            return;
        }

        const percentage = (attended / total) * 100;
        const rounded = percentage.toFixed(2);

        if (percentage >= 75) {
            resultBox.textContent = "Attendance: " + rounded + "% (Good)";
        } else {
            resultBox.textContent = "Attendance: " + rounded + "% (Low — below 75%)";
        }

        resultBox.classList.add("show-result");

    });

});
