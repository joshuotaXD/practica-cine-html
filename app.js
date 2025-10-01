// Estado simple
const moviesEl = document.getElementById("movies");
console.log(moviesEl);

const favoriteIds = new Set(); // guarda solo IDs
console.log("favoriteIds", favoriteIds);

// Un solo listener para todos los botones .fav (delegación)
moviesEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav");
  if (!btn) return;

  const id = btn.getAttribute("data-id");
  if (favoriteIds.has(id)) {
    favoriteIds.delete(id);
  } else {
    favoriteIds.add(id);
  }
  console.log("favoriteIds", favoriteIds);
  // Actualiza solo ese botón (simple y rápido)
  const isFav = favoriteIds.has(id);
  btn.classList.toggle("active", isFav);
  btn.textContent = isFav ? "♥ Quitar favorito" : "♡ Marcar favorito";
});
const movies = [
  {
    id: 1,
    title: "AVENGERS",
    imagen: "https://es.web.img3.acsta.net/pictures/14/03/10/10/35/587504.jpg",
  },
  { 
    id: 2,
     title: "AVENGERS2",
     imagen: "https://es.web.img3.acsta.net/pictures/14/03/10/10/35/587504.jpg",
  },
];
moviesEl.innerHTML = movies
  .map(
    (movie) =>
      `<article><h2>${movie.title}</h2><img width="140px" src="${movie.imagen}" /></article>`
  )
  .join("");
lol