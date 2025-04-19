document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");

    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.alt = img.alt;
    fullImg.classList.add("fullscreen-img");

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});
