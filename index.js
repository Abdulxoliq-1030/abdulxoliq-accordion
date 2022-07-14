function collapse(wrap, items = []) {
  for (let i = 0; i < items.length; i++) {
    const fragment = document.createDocumentFragment();
    const btn = document.createElement("button");
    const panel = document.createElement("div");
    const text = document.createElement("p");

    btn.className = "accordion";
    btn.innerText = `Item ${i + 1}`;
    btn.style.fontSize = "30px";
    btn.style.backgroundColor = "#777";
    btn.style.cursor = "pointer";
    btn.style.padding = "20px";
    btn.style.width = "100%";
    btn.style.textAlign = "start";
    btn.style.border = "none";

    panel.style.borderBottom = "1px solid #555";

    text.style.padding = "1rem";
    text.style.fontSize = "24px";
    text.style.display = "none";

    text.innerText = items[i].title;

    panel.appendChild(text);
    fragment.appendChild(btn);
    fragment.appendChild(panel);

    wrap.appendChild(fragment);
  }

  const buttons = document.querySelectorAll(".accordion");
  const texts = document.querySelectorAll("p");

  buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
      if (texts[idx].style.display === "block") {
        texts[idx].style.display = "none";
      } else if (texts[idx].style.display === "none") {
        texts[idx].style.display = "block";
      }
    });
  });
}

module.exports = {
  collapse,
};
