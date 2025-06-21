
document.addEventListener("DOMContentLoaded", () => {
  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");

  const data = [
    {
      chapter: "Electrostatics",
      year: 2024,
      question: "Electric field at the center of a uniformly charged ring is:",
      options: ["Zero", "Infinity", "kQ/r²", "None"],
      answer: "Zero"
    },
    {
      chapter: "Current Electricity",
      year: 2025,
      question: "The unit of resistance is:",
      options: ["Ohm", "Farad", "Henry", "Volt"],
      answer: "Ohm"
    }
  ];

  const quizContainer = document.getElementById("quiz-container");

  data.forEach((q, idx) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div><strong>[${q.year}] ${q.chapter}</strong>: ${q.question}</div>
      ${q.options.map(opt => `<button class='opt'>${opt}</button>`).join("")}
      <div class='msg'></div>
      <hr>
    `;
    quizContainer.appendChild(div);
    const buttons = div.querySelectorAll(".opt");
    const msg = div.querySelector(".msg");
    buttons.forEach(btn => {
      btn.onclick = () => {
        buttons.forEach(b => b.disabled = true);
        if (btn.innerText === q.answer) {
          btn.style.background = "#c8f7dc";
          correctSound.currentTime = 0;
          correctSound.play();
          msg.innerHTML = "<b>✅ Correct!</b>";
        } else {
          btn.style.background = "#ffd4d4";
          wrongSound.currentTime = 0;
          wrongSound.play();
          msg.innerHTML = "<b>❌ Wrong! Correct: " + q.answer + "</b>";
        }
      };
    });
  });
});
