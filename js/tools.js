/* ==========================================
   STUDY KENDRA - TOOLS
   tools.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializePercentageCalculator();
    initializeCGPACalculator();
    initializeAttendanceCalculator();
    initializeStudyTimer();

});

/* ==========================================
   PERCENTAGE CALCULATOR
========================================== */

function initializePercentageCalculator() {

    const calculateBtn =
        document.getElementById("calculatePercentage");

    if (!calculateBtn) return;

    calculateBtn.addEventListener("click", () => {

        const obtainedMarks = parseFloat(
            document.getElementById("obtainedMarks").value
        );

        const totalMarks = parseFloat(
            document.getElementById("totalMarks").value
        );

        const resultBox =
            document.getElementById("percentageResult");

        if (
            isNaN(obtainedMarks) ||
            isNaN(totalMarks) ||
            totalMarks <= 0
        ) {
            resultBox.innerHTML =
                "❌ Please enter valid marks.";
            return;
        }

        if (obtainedMarks > totalMarks) {
            resultBox.innerHTML =
                "❌ Obtained marks cannot be greater than total marks.";
            return;
        }

        const percentage =
            (obtainedMarks / totalMarks) * 100;

        resultBox.innerHTML =
            `✅ Percentage: <strong>${percentage.toFixed(2)}%</strong>`;
    });

}

/* ==========================================
   CGPA CALCULATOR
========================================== */

function initializeCGPACalculator() {

    const calculateBtn =
        document.getElementById("calculateCGPA");

    if (!calculateBtn) return;

    calculateBtn.addEventListener("click", () => {

        const cgpa = parseFloat(
            document.getElementById("cgpaInput").value
        );

        const resultBox =
            document.getElementById("cgpaResult");

        if (
            isNaN(cgpa) ||
            cgpa < 0
        ) {
            resultBox.innerHTML =
                "❌ Please enter a valid CGPA.";
            return;
        }

        const percentage = cgpa * 9.5;

        resultBox.innerHTML =
            `✅ Percentage Equivalent: <strong>${percentage.toFixed(2)}%</strong>`;
    });

}

/* ==========================================
   ATTENDANCE CALCULATOR
========================================== */

function initializeAttendanceCalculator() {

    const calculateBtn =
        document.getElementById("calculateAttendance");

    if (!calculateBtn) return;

    calculateBtn.addEventListener("click", () => {

        const attended = parseFloat(
            document.getElementById("classesAttended").value
        );

        const total = parseFloat(
            document.getElementById("totalClasses").value
        );

        const resultBox =
            document.getElementById("attendanceResult");

        if (
            isNaN(attended) ||
            isNaN(total) ||
            total <= 0
        ) {
            resultBox.innerHTML =
                "❌ Please enter valid values.";
            return;
        }

        if (attended > total) {
            resultBox.innerHTML =
                "❌ Attended classes cannot exceed total classes.";
            return;
        }

        const attendance =
            (attended / total) * 100;

        resultBox.innerHTML =
            `✅ Attendance: <strong>${attendance.toFixed(2)}%</strong>`;
    });

}

/* ==========================================
   STUDY TIMER
========================================== */

let timerInterval = null;
let totalSeconds = 0;
let remainingSeconds = 0;
let timerRunning = false;

function initializeStudyTimer() {

    const startBtn =
        document.getElementById("startTimer");

    const pauseBtn =
        document.getElementById("pauseTimer");

    const resetBtn =
        document.getElementById("resetTimer");

    const minutesInput =
        document.getElementById("timerMinutes");

    const display =
        document.getElementById("timerDisplay");

    if (
        !startBtn ||
        !pauseBtn ||
        !resetBtn ||
        !minutesInput ||
        !display
    ) {
        return;
    }

    updateTimerDisplay(display, 0);

    /* ===== START ===== */

    startBtn.addEventListener("click", () => {

        if (!timerRunning) {

            if (remainingSeconds <= 0) {

                const minutes =
                    parseInt(minutesInput.value);

                if (
                    isNaN(minutes) ||
                    minutes <= 0
                ) {
                    alert("Please enter valid minutes.");
                    return;
                }

                totalSeconds = minutes * 60;
                remainingSeconds = totalSeconds;
            }

            startTimer(display);
        }
    });

    /* ===== PAUSE ===== */

    pauseBtn.addEventListener("click", () => {

        clearInterval(timerInterval);
        timerRunning = false;
    });

    /* ===== RESET ===== */

    resetBtn.addEventListener("click", () => {

        clearInterval(timerInterval);

        timerRunning = false;

        remainingSeconds = 0;
        totalSeconds = 0;

        updateTimerDisplay(display, 0);

        minutesInput.value = "";
    });

}

/* ==========================================
   TIMER START FUNCTION
========================================== */

function startTimer(display) {

    timerRunning = true;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        if (remainingSeconds <= 0) {

            clearInterval(timerInterval);

            timerRunning = false;

            updateTimerDisplay(display, 0);

            alert("⏰ Time's Up!");

            return;
        }

        remainingSeconds--;

        updateTimerDisplay(
            display,
            remainingSeconds
        );

    }, 1000);

}

/* ==========================================
   UPDATE TIMER DISPLAY
========================================== */

function updateTimerDisplay(display, seconds) {

    const mins =
        Math.floor(seconds / 60);

    const secs =
        seconds % 60;

    const formattedTime =
        `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    display.textContent =
        formattedTime;
}

/* ==========================================
   FUTURE EXPANSION NOTES

   Add More Tools Easily:

   - GPA Calculator
   - Age Calculator
   - Unit Converter
   - Exam Countdown
   - BMI Calculator

========================================== */