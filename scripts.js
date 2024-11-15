function checkAnswer(exerciseNumber) {
    let userMean = parseFloat(document.getElementById(`mean${exerciseNumber}`).value);
    let correctMean = 12; // Ejemplo

    let feedback = document.getElementById(`feedback${exerciseNumber}`);
    if (userMean === correctMean) {
        feedback.textContent = "Respuesta correcta!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
        feedback.style.color = "red";
    }
}
