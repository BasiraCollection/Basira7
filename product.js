const categories = {
  "Patches": "images/patches",
  "Borders": "images/borders",
  "Laces": "images/laces",
  "Boutique Items": "images/boutique"
};

const maxImages = 50;
const container = document.getElementById("product-sections");

for (const [title, path] of Object.entries(categories)) {
  const section = document.createElement("section");
  section.innerHTML = `<h2>${title}</h2><div class="products"></div>`;
  const grid = section.querySelector(".products");

  for (let i = 1; i <= maxImages; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = `${path}/${i}.jpg`;
    img.loading = "lazy";

    img.onerror = () => card.remove();

    card.appendChild(img);
    card.innerHTML += `
      <p>${title} ${i}</p>
      <span>Contact for price</span>
    `;

    grid.appendChild(card);
  }

  container.appendChild(section);
}
