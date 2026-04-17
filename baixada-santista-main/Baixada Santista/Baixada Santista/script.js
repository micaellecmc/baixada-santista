document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll("h1, h2, h3");

  headings.forEach((heading) => {
    if (heading.dataset.processed === "true") {
      return;
    }

    const text = heading.textContent.trim();
    const wrapped = Array.from(text)
      .map((char) => {
        if (char === " ") {
          return '<span class="space">&nbsp;</span>';
        }
        return `<span>${char}</span>`;
      })
      .join("");

    heading.innerHTML = wrapped;
    heading.dataset.processed = "true";
  });
});
