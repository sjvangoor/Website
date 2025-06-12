document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded!");

  // Simple message after sending the form
  const form = document.querySelector(".contact-form");
  const toast = document.getElementById("toast");
  if (form && toast) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      toast.textContent = "Thank you! I will get back to you soon.";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
      form.reset();
    });
  }

  // Apply stored theme preference on load
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark");
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  if (navLinks && navbar) {
    const currentPage = document.createElement("span");
    currentPage.className = "current-page";
    const currentPath = window.location.pathname.split("/").pop();
    const activeLink = Array.from(navLinks.querySelectorAll("a")).find(
      (link) => link.getAttribute("href") === currentPath,
    );
    if (activeLink) {
      currentPage.textContent = activeLink.textContent;
      activeLink.classList.add("selected");
    }
    navbar.insertBefore(currentPage, navLinks);
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
      menuToggle.textContent = menuToggle.classList.contains("active")
        ? "✕"
        : "☰";
    });
    navLinks.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.textContent = "☰";
      }),
    );
  }

  function updateIcon() {
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
  }

  // Language toggle
  const langToggle = document.getElementById("lang-toggle");

  const flags = { en: "\ud83c\uddec\ud83c\udde7", nl: "\ud83c\uddf3\ud83c\uddf1" };
  const languageNames = { en: "English", nl: "Nederlands" };

  let langHint;
  let themeHint;

  const translations = {
    nl: {
      "nav-about": "Over mij",
      "nav-skills": "Skills",
      "nav-projects": "Projecten",
      "nav-ambition": "Ambitie",
      "nav-contact": "Contact",
      "nav-faq": "FAQ",
      "index-title": "Over mij",
      "index-subtitle":
        "Stan van Goor is een creatieve marketingprofessional met een analytische achtergrond. Als Marketing Data Analist bij een snelgroeiend bedrijf vertaalt hij data naar strategische inzichten en voelt hij zich thuis op het snijvlak van data, branding en content.",
      "index-cta": "Vraag een consult aan",
      "biography-heading": "Biografie",
      "biography-text":
        "Gedreven door nieuwsgierigheid verbindt Stan cijfers met verhalen. Hij onderzoekt graag hoe data merken kan versterken en is een zelfstarter die inzichten omzet in actie.",
      "experience-heading": "Ervaring",
      "experience-text1":
        "In zijn huidige rol bouwt Stan dashboards, analyseert hij advertentieprestaties op Google, Meta en LinkedIn, en levert hij het marketingteam duidelijke inzichten voor betere beslissingen.",
      "experience-text2":
        "Daarvoor werkte hij als marketingspecialist bij Student Consultant, waar hij merkstrategie bepaalde, campagnes coördineerde en stagiairs aanstuurde. Hij realiseerde API-koppelingen, bouwde een marketingdatabase en structureerde data uit onder andere Power BI en MySQL. Zo laat hij zien dat hij zowel strategisch denkt als hands-on oplossingen bouwt.",
      "education-heading": "Opleiding",
      "education-text":
        "Stan behaalde een Bachelor of Science in International Business en vervolgens een master in Marketing Analytics. Tijdens zijn studie sloeg hij de brug tussen harde data en zachte merkcommunicatie en hij blijft zich verdiepen in SEO, gedragspsychologie en advertising automation.",
      "skills-title": "Skills",
      "skills-subtitle":
        "Een kort overzicht van de technologieën die Stan gebruikt om responsieve ervaringen te bouwen.",
      "skill-uiux": "UI/UX Ontwerp",
      "skills-text1":
        "Versiebeheer met Git houdt projecten georganiseerd, terwijl buildtools zoals Webpack de uitrol stroomlijnen.",
      "skills-text2":
        "Stan gebruikt ook Figma en Sketch om concepten om te zetten in verfijnde interfaces en toegankelijke gebruikersstromen.",
      "projects-title": "Projecten",
      "projects-subtitle":
        "Een selectie van recente front-end- en designprojecten.",
      "projects-intro":
        "Van interactieve prototypes tot dynamische webapps, deze voorbeelden tonen Stan\u2019s veelzijdigheid.",
      "recommendations-heading": "Aanbevelingen",
      "rec1-quote":
        "Werken met Stan was een masterclass in samenwerking. Elk oplevermoment was doordacht en op tijd.",
      "rec2-quote":
        "Stans scherpe oog voor design tilde onze app naar een hoger niveau. Het was echt een plezier om mee samen te werken.",
      "ambition-title": "Ambitie",
      "ambition-subtitle":
        "Een kijkje in Stan\u2019s doelen en wat dit werk drijft.",
      "ambition-text1":
        "Stan streeft ernaar inclusieve digitale ervaringen te creëren en tegelijk de ontwikkelvaardigheden te blijven aanscherpen.",
      "ambition-text2":
        "De volgende mijlpaal is het leiden van een team dat zich richt op toegankelijke design systemen en het begeleiden van nieuwe ontwikkelaars.",
      "ambition-text3":
        "Nieuwsgierig blijven, experimenteren met nieuwe frameworks en samenwerken met creatieve vakgenoten houdt de passie levend.",
      "contact-title": "Contact",
      "contact-subtitle":
        "Stan praat graag over het vak. Laat hieronder een bericht achter.",
      "placeholder-name": "Je naam",
      "placeholder-email": "jij@voorbeeld.nl",
      "placeholder-message": "Hoi Stan, ik...",
      "send-button": "Verstuur bericht",
      "contact-email": "E-mail:",
      "contact-linkedin": "LinkedIn:",
      "faq-title": "FAQ",
      "faq-subtitle":
        "Antwoorden op een aantal veelgestelde vragen over Stan\u2019s werk.",
      "faq-q1": "Welke diensten bied je aan?",
      "faq-a1":
        "Ik ben gespecialiseerd in front-end ontwikkeling, UI/UX design en toegankelijkheidsaudits.",
      "faq-q2": "Waar ben je gevestigd?",
      "faq-a2":
        "Ik ben gevestigd in Amsterdam maar werk samen met klanten over de hele wereld.",
      "faq-q3": "Hoe kunnen we samen een project starten?",
      "faq-a3":
        "Neem contact op via de contactpagina met details over je idee en ik neem contact op.",
      "enterprise-subtitle":
        "Een datarijke portal voor realtime zakelijke inzichten.",
      "enterprise-desc-heading": "Beschrijving",
      "enterprise-desc-text":
        "Dit dashboard bundelt belangrijke statistieken van verschillende afdelingen en geeft leidinggevenden een duidelijk overzicht van de bedrijfsresultaten.",
      "enterprise-rec-quote":
        "Stan leverde een robuuste interface waar ons team dagelijks op vertrouwt. De aandacht voor detail was uitstekend.",
      "marketing-subtitle":
        "Een moderne site die een nieuwe productlancering toont.",
      "marketing-desc-heading": "Beschrijving",
      "marketing-desc-text":
        "Deze single-page site combineert vloeiende animaties met pakkende teksten om de nieuwste service van een klant te belichten.",
      "marketing-rec-quote":
        "De nieuwe site vangt ons merk perfect en laadt ontzettend snel. Prachtig werk!",
      "realestate-subtitle": "Zoek en vergelijk aanbiedingen met gemak.",
      "realestate-desc-heading": "Beschrijving",
      "realestate-desc-text":
        "Een online marktplaats die kopers verbindt met makelaars, inclusief interactieve kaarten en filtertools.",
      "realestate-rec-quote":
        "Het portaal ziet er fantastisch uit en is ongelooflijk eenvoudig te navigeren. Stan overtrof onze verwachtingen.",
      "mobile-subtitle":
        "Een intuïtieve winkelervaring gebouwd voor telefoons.",
      "mobile-desc-heading": "Beschrijving",
      "mobile-desc-text":
        "Een responsieve e-commerceapp met een veilige checkout en naadloos productoverzicht op alle apparaten.",
      "mobile-rec-quote":
        "Stan creëerde een mobiele shop waar onze klanten dol op zijn. De verkoop steeg direct na de lancering.",
      "analytics-subtitle": "Ruwe data omzetten in bruikbare grafieken.",
      "analytics-desc-heading": "Beschrijving",
      "analytics-desc-text":
        "Een lichte app die KPI\u2019s voor kleine bedrijven visualiseert, inclusief exporteerbare rapporten en aangepaste dashboards.",
      "analytics-rec-quote":
        "Stan begreep onze eisen snel en leverde een strak interface waar onze klanten lovend over zijn.",
      "event-subtitle": "Publiek verbinden met onvergetelijke ervaringen.",
      "event-desc-heading": "Beschrijving",
      "event-desc-text":
        "Een schaalbaar eventmanagementsysteem dat kaartverkoop, schema's en netwerkmogelijkheden voor deelnemers ondersteunt.",
      "event-rec-quote":
        "Van concept tot lancering zorgde Stan's professionaliteit ervoor dat onze conferentie een succes was.",
      "duration-heading": "Duur",
      "recommendation-heading": "Aanbeveling",
      "contact-me": "Vraag een consult aan",
    },
  };

  const englishTexts = {};
  const englishPlaceholders = {};

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    englishTexts[el.getAttribute("data-i18n")] = el.textContent;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    englishPlaceholders[el.getAttribute("data-i18n-placeholder")] =
      el.getAttribute("placeholder");
  });

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "nl") {
        if (translations.nl[key]) el.textContent = translations.nl[key];
      } else {
        el.textContent = englishTexts[key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (lang === "nl") {
        if (translations.nl[key])
          el.setAttribute("placeholder", translations.nl[key]);
      } else {
        el.setAttribute("placeholder", englishPlaceholders[key]);
      }
    });
    if (langToggle) {
      langToggle.textContent = flags[lang];
    }
  }

  const storedLang = localStorage.getItem("lang") || "en";
  applyTranslations(storedLang);

  if (langToggle) {
    langToggle.setAttribute("title", "Select language");
    langHint = document.createElement("span");
    langHint.id = "lang-hint";
    langHint.className = "help-hint";
    langHint.textContent = "\ud83c\udf10";
    langToggle.after(langHint);

    const langMenu = document.createElement("ul");
    langMenu.id = "lang-menu";
    langMenu.className = "lang-menu";
    Object.keys(languageNames).forEach((code) => {
      const li = document.createElement("li");
      li.dataset.lang = code;
      li.textContent = `${flags[code]} ${languageNames[code]}`;
      langMenu.appendChild(li);
    });
    langHint.after(langMenu);

    langToggle.addEventListener("click", () => {
      langMenu.classList.toggle("open");
    });

    langMenu.addEventListener("click", (e) => {
      const selected = e.target.getAttribute("data-lang");
      if (selected) {
        localStorage.setItem("lang", selected);
        applyTranslations(selected);
        langMenu.classList.remove("open");
      }
    });

    document.addEventListener("click", (e) => {
      if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove("open");
      }
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.setAttribute("title", "Toggle dark mode");
    themeHint = document.createElement("span");
    themeHint.id = "theme-hint";
    themeHint.className = "help-hint";
    themeHint.textContent = "\u2600";
    themeToggle.after(themeHint);
    themeToggle.classList.add("pulse-once");
    setTimeout(() => themeToggle.classList.remove("pulse-once"), 3000);
    updateIcon();
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const theme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", theme);
      updateIcon();
    });
  }

  const showHints = () => {
    langHint?.classList.add("visible");
    themeHint?.classList.add("visible");
  };
  setTimeout(showHints, 2000);

  const hideHints = () => {
    langHint?.classList.remove("visible");
    themeHint?.classList.remove("visible");
  };
  document.addEventListener("scroll", hideHints, { once: true });
  document.addEventListener("click", hideHints, { once: true });

  // Skill switcher
  const switchButtons = document.querySelectorAll(".switch-btn");
  const skillPanels = document.querySelectorAll(".skill-panel");
  switchButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const skill = btn.getAttribute("data-skill");
      switchButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      skillPanels.forEach((panel) => {
        if (panel.getAttribute("data-skill") === skill) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    });
  });

  // Reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".section:not(#menu-blocks), .hero-content")
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

  // Landing page scroll fade
  const heroSection = document.getElementById("hero");
  if (heroSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const fadeOutEnd = window.innerHeight / 1.5;
      let opacity = 1 - scrollPosition / fadeOutEnd;
      if (opacity < 0) opacity = 0;
      heroSection.style.opacity = opacity.toString();
      if (opacity === 0) {
        heroSection.classList.add("faded");
      } else {
        heroSection.classList.remove("faded");
      }
    });
  }
});
