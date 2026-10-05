// ==========================================================================
// Translation Dictionary (English, Portuguese, Spanish)
// ==========================================================================
const translations = {
    en: {
        "app-title": "Movie Picks AI",
        "label-lang": "Select Language",
        "catalog-heading": "AI Classic Collection",
        "catalog-description": "Explore our curated bootcamp selection of legendary anime and animated movies.",
        "tag-anime": "Anime",
        "tag-animation": "Animation",
        "toggle-light": "Toggle light theme",
        "toggle-dark": "Toggle dark theme"
    },
    pt: {
        "app-title": "Filmes Escolhidos IA",
        "label-lang": "Selecionar Idioma",
        "catalog-heading": "Coleção Clássica de IA",
        "catalog-description": "Explore nossa seleção de animes e animações lendárias do bootcamp.",
        "tag-anime": "Anime",
        "tag-animation": "Animação",
        "toggle-light": "Ativar tema claro",
        "toggle-dark": "Ativar tema escuro"
    },
    es: {
        "app-title": "Cine Selecciones IA",
        "label-lang": "Seleccionar Idioma",
        "catalog-heading": "Colección Clásica de IA",
        "catalog-description": "Explore nuestra selección seleccionada de anime y películas animadas legendarias.",
        "tag-anime": "Anime",
        "tag-animation": "Animación",
        "toggle-light": "Activar tema claro",
        "toggle-dark": "Activar tema oscuro"
    }
};

// ==========================================================================
// Dataset mapping to the uploaded images
// ==========================================================================
const localizedMovies = {
    en: [
        { title: "Yu-Gi-Oh! The Movie", year: "2004", type: "tag-anime", img: "assets/mini11.jpg" },
        { title: "Yu-Gi-Oh! The Dark Side of Dimensions", year: "2016", type: "tag-anime", img: "assets/mini12.jpg" },
        { title: "Pokémon The Movie 2000", year: "1999", type: "tag-anime", img: "assets/mini13.jpg" },
        { title: "Pokémon: Mewtwo Strikes Back - Evolution", year: "2019", type: "tag-anime", img: "assets/mini14.jpg" },
        { title: "Dragon Ball Z: Broly – The Legendary Super Saiyan", year: "1993", type: "tag-anime", img: "assets/mini15.jpg" },
        { title: "Dragon Ball GT: A Hero's Legacy", year: "1997", type: "tag-anime", img: "assets/mini16.jpg" },
        { title: "Street Fighter II: The Animated Movie", year: "1994", type: "tag-anime", img: "assets/mini17.jpg" },
        { title: "Madagascar", year: "2005", type: "tag-animation", img: "assets/mini18.jpg" },
        { title: "Ice Age", year: "2002", type: "tag-animation", img: "assets/mini19.jpg" },
        { title: "The Lion King", year: "1994", type: "tag-animation", img: "assets/mini20.jpg" }
    ],
    pt: [
        { title: "Yu-Gi-Oh! O Filme", year: "2004", type: "tag-anime", img: "assets/mini11.jpg" },
        { title: "Yu-Gi-Oh! O Lado Negro das Dimensões", year: "2016", type: "tag-anime", img: "assets/mini12.jpg" },
        { title: "Pokémon O Filme 2000", year: "1999", type: "tag-anime", img: "assets/mini13.jpg" },
        { title: "Pokémon: Mewtwo Contra-Ataca — Evolução", year: "2019", type: "tag-anime", img: "assets/mini14.jpg" },
        { title: "Dragon Ball Z: O Lendário Super Saiyajin", year: "1993", type: "tag-anime", img: "assets/mini15.jpg" },
        { title: "Dragon Ball GT: O Legado de um Herói", year: "1997", type: "tag-anime", img: "assets/mini16.jpg" },
        { title: "Street Fighter II: O Filme Animado", year: "1994", type: "tag-anime", img: "assets/mini17.jpg" },
        { title: "Madagascar", year: "2005", type: "tag-animation", img: "assets/mini18.jpg" },
        { title: "A Era do Gelo", year: "2002", type: "tag-animation", img: "assets/mini19.jpg" },
        { title: "O Rei Leão", year: "1994", type: "tag-animation", img: "assets/mini20.jpg" }
    ],
    es: [
        { title: "Yu-Gi-Oh! La Película", year: "2004", type: "tag-anime", img: "assets/mini11.jpg" },
        { title: "Yu-Gi-Oh! El Lado Oscuro de las Dimensiones", year: "2016", type: "tag-anime", img: "assets/mini12.jpg" },
        { title: "Pokémon 2: El Poder de Uno", year: "1999", type: "tag-anime", img: "assets/mini13.jpg" },
        { title: "Pokémon: Mewtwo contraataca - Evolución", year: "2019", type: "tag-anime", img: "assets/mini14.jpg" },
        { title: "Dragon Ball Z: El Poder Inmenso", year: "1993", type: "tag-anime", img: "assets/mini15.jpg" },
        { title: "Dragon Ball GT: 100 Años Después", year: "1997", type: "tag-anime", img: "assets/mini16.jpg" },
        { title: "Street Fighter II: La Película Animada", year: "1994", type: "tag-anime", img: "assets/mini17.jpg" },
        { title: "Madagascar", year: "2005", type: "tag-animation", img: "assets/mini18.jpg" },
        { title: "La Era de Hielo", year: "2002", type: "tag-animation", img: "assets/mini19.jpg" },
        { title: "El Rey León", year: "1994", type: "tag-animation", img: "assets/mini20.jpg" }
    ]
};

// ==========================================================================
// App State Variables
// ==========================================================================
let currentLanguage = "en";

// DOM References
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const langSelect = document.getElementById("lang-select");
const movieCatalog = document.getElementById("movie-catalog");

// ==========================================================================
// Theme Management Engine
// ==========================================================================
themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme", !isDark);
    
    // Icon toggling smooth configuration
    if (isDark) {
        themeIcon.className = "fas fa-moon";
        themeToggle.setAttribute("aria-label", translations[currentLanguage]["toggle-light"]);
    } else {
        themeIcon.className = "fas fa-sun";
        themeToggle.setAttribute("aria-label", translations[currentLanguage]["toggle-dark"]);
    }
});

// ==========================================================================
// i18n Localization Engine
// ==========================================================================
function updateLocalization(lang) {
    currentLanguage = lang;
    
    // Update structural text elements matching keys
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update screen-reader interactive accessibility text labels
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.setAttribute("aria-label", isDark ? translations[lang]["toggle-light"] : translations[lang]["toggle-dark"]);

    renderCatalog(lang);
}

function renderCatalog(lang) {
    movieCatalog.innerHTML = "";
    const list = localizedMovies[lang] || localizedMovies["en"];

    list.forEach(movie => {
        const typeLabel = translations[lang][movie.type];
        
        const card = document.createElement("article");
        card.className = "movie-card";
        card.innerHTML = `
            <div class="image-wrapper">
                <img src="${movie.img}" alt="${movie.title} Movie Poster" class="movie-poster" loading="lazy">
            </div>
            <div class="movie-info">
                <h3 class="movie-title" title="${movie.title}">${movie.title}</h3>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-tag">${typeLabel}</span>
                </div>
            </div>
        `;
        movieCatalog.appendChild(card);
    });
}

// Interaction Listeners
langSelect.addEventListener("change", (e) => {
    updateLocalization(e.target.value);
});

// Initialize Framework defaults
document.addEventListener("DOMContentLoaded", () => {
    updateLocalization("en");
});
