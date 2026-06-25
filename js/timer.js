/* ==========================================
STUDY KENDRA - STUDY TIMER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const display = document.getElementById("timerDisplay");
    const minutesInput = document.getElementById("timerMinutes");
    const startBtn = document.getElementById("startTimer");
    const pauseBtn = document.getElementById("pauseTimer");
    const resetBtn = document.getElementById("resetTimer");
    const soundToggle = document.getElementById("soundToggle");

    if (!display || !startBtn) return;

    let totalSeconds = parseInt(minutesInput.value || 25) * 60;
    let remainingSeconds = totalSeconds;
    let timerInterval = null;
    let isRunning = false;

    /* ==========================================
    DISPLAY UPDATE
    ========================================== */

    function updateDisplay(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        display.textContent =
            String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    }

    /* ==========================================
    SOUND: code-generated repeating alarm
    (no audio file needed - built with Web Audio API)
    Plays a gentle chime every 2 seconds for up to
    1 minute, or until Pause/Reset is pressed.
    ========================================== */

    let alarmIntervalId = null;
    let alarmStopTimeoutId = null;

    function playSingleChime() {

        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioCtx();

            // A gentle three-note ascending chime: C5 -> E5 -> G5
            const notes = [523.25, 659.25, 783.99];
            const noteDuration = 0.5;
            const noteGap = 0.25;

            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = "sine";
                osc.frequency.value = freq;

                const startTime = ctx.currentTime + i * noteGap;

                gain.gain.setValueAtTime(0, startTime);
                gain.gain.linearRampToValueAtTime(0.4, startTime + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + noteDuration);
            });

            const totalTime = notes.length * noteGap + noteDuration;

            setTimeout(() => {
                ctx.close();
            }, totalTime * 1000 + 200);

        } catch (e) {
            // Web Audio not supported - silently ignore
        }
    }

    function startAlarm() {

        if (soundToggle && !soundToggle.checked) return;

        // Play the first chime immediately
        playSingleChime();

        // Repeat the chime every 2 seconds
        alarmIntervalId = setInterval(() => {
            playSingleChime();
        }, 2000);

        // Automatically stop the alarm after 1 minute
        alarmStopTimeoutId = setTimeout(() => {
            stopAlarm();
        }, 60000);

    }

    function stopAlarm() {

        if (alarmIntervalId) {
            clearInterval(alarmIntervalId);
            alarmIntervalId = null;
        }

        if (alarmStopTimeoutId) {
            clearTimeout(alarmStopTimeoutId);
            alarmStopTimeoutId = null;
        }

    }

    /* ==========================================
    TIMER CONTROLS
    ========================================== */

    function startTimer() {

        if (isRunning) return;

        if (remainingSeconds <= 0) {
            remainingSeconds = parseInt(minutesInput.value || 25) * 60;
        }

        isRunning = true;
        display.classList.remove("timer-done");
        display.classList.add("timer-running");

        timerInterval = setInterval(() => {

            remainingSeconds--;
            updateDisplay(remainingSeconds);

            if (remainingSeconds <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                display.classList.remove("timer-running");
                display.classList.add("timer-done");
                display.textContent = "Done!";
                startAlarm();
            }

        }, 1000);

    }

    function pauseTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        display.classList.remove("timer-running");
        stopAlarm();
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        remainingSeconds = parseInt(minutesInput.value || 25) * 60;
        updateDisplay(remainingSeconds);
        display.classList.remove("timer-running", "timer-done");
        stopAlarm();
    }

    /* ==========================================
    EVENT LISTENERS
    ========================================== */

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);

    minutesInput.addEventListener("change", () => {
        if (!isRunning) {
            remainingSeconds = parseInt(minutesInput.value || 25) * 60;
            updateDisplay(remainingSeconds);
            display.classList.remove("timer-done");
        }
    });

    // Initialize display
    updateDisplay(remainingSeconds);

});
