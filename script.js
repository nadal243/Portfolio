/* ==========================================================
   Portfolio ingénieur — script.js
   1. CONFIG & DONNÉES (à personnaliser)   2. RENDU   3. INTERACTIONS
   ========================================================== */
"use strict";

/* ---------- 1. CONFIG & DONNÉES ---------- */

const CONFIG = {
  firstName: "Nadal",
  lastName: "NGAKI",
  email: "raphaelnadal963@gmail.com",
  github: "https://github.com/nadal243",
  linkedin: "https://www.linkedin.com/in/nadal-ngaki-998344322/",
  cvPath: "assets/cv.pdf",
  formEndpoint: "https://formspree.io/f/mrezbovr",
};

// Données réelles issues du CV
const EXPERIENCES = [
  {
    company: "CLAAS",
    role: "Apprenti ingénieur logiciel embarqué",
    status: "Alternance",
    dates: "Septembre 2026 – aujoud'hui · Woippy, Grand-Est, France",
    context: "Alternance en ingénierie logicielle embarquée au sein de CLAAS, en parallèle de la formation à Polytech Sorbonne.",
    tasks: [
      "Développement de logiciels embarqués en C pour les systèmes électroniques de machines agricoles.",
      "Développement de scripts Python pour l'acquisition, l'analyse et le traitement des signaux issus des capteurs.",
      "Intégration de nouvelles fonctionnalités dans les logiciels embarqués des presses à balles rondes et carrées.",
      "Rédaction de spécifications électroniques et participation à la définition des besoins techniques.",
      "Participation aux campagnes d'essais et à la validation fonctionnelle des prototypes sur le terrain."
    ],
    tech: ["C", "Python", "Systèmes embarqués", "Capteurs", "Traitement du signal", "Spécifications techniques", "Essais terrain", "CAN"],
    achievements: [],
  },
  {
    company: "Blanchisserie de Paris",
    role: "Stagiaire en Maintenance industrielle",
    status: "Stage",
    dates: "7 Avril 2026 – 29 Mai 2026 · Chilly-Mazarin, Île-de-France, France",
    context: "Maintenance préventive et corrective en environnement industriel sur équipements électromécaniques.",
    tasks: [
      "Assistance aux techniciens durant la maintenance préventive et corrective sur équipements électromécaniques.",
      "Intervention dans la gestion de la maintenance assistée par ordinateur (GMAO).",
      "Formalisation des procédures de maintenance industrielle et des protocoles de sécurité."
    ],
    tech: ["Électromécanique", "GMAO", "Maintenance industrielle", "Sécurité"],
    achievements: [],
  },
  {
    company: "OptiStock",
    role: "Co-fondateur & Développeur",
    status: "Projet entrepreneurial",
    dates: "Mai 2026 – Présent",
    context: "Co-fondation et développement d'une application web innovante de gestion des stocks.",
    tasks: [
      "Développement de l'application web (interface utilisateur et logique de gestion).",
      "Technologies utilisées : HTML, CSS, React, Supabase, JavaScript, etc.",
      "Gestion de projet technique et développement d'une méthodologie de travail rigoureuse.",
      "Apprentissage et mise en pratique des techniques de marketing produit."
    ],
    tech: ["React", "JavaScript", "Supabase", "HTML/CSS", "Gestion de projet", "Marketing"],
    achievements: [],
  },
  {
    company: "OCTAVE (Organisme de Création Technologique et Aérospatiale d'Évry)",
    role: "Membre actif — Projets technologiques",
    status: "Projet associatif",
    dates: "Février 2026 – Présent · Évry-Courcouronnes, Île-de-France, France",
    context: "Participation active aux activités d'ingénierie et d'innovation aérospatiale au sein de l'association.",
    tasks: [
      "Participation active au développement de projets technologiques innovants.",
      "Collaboration multidisciplinaire et travail en équipe sur des systèmes d'ingénierie avancés."
    ],
    tech: ["Aérospatiale", "Mécatronique", "Travail d'équipe", "Prototypage"],
    achievements: [],
  },
  {
    company: "McDonald's",
    role: "Équipier polyvalent",
    status: "Emploi saisonnier",
    dates: "Mai 2026 – Août 2026 · Montlhéry, Île-de-France, France",
    context: "Activité opérationnelle soutenue axée sur l'efficacité, la cadence et l'esprit d'équipe.",
    tasks: [
      "Gestion efficace du stress et maintien des exigences de qualité en période d'affluence.",
      "Travail en équipe et coordination fluide avec l'ensemble des postes de travail.",
      "Sens aigu du service, de l'accueil et satisfaction de la clientèle."
    ],
    tech: ["Gestion du stress", "Travail en équipe", "Sens du contact", "Rigueur"],
    achievements: [],
  },
];

const EDUCATION = [
  {
    school: "Polytech Sorbonne",
    degree: "Cycle d'ingénieur — Électronique et Informatique",
    dates: "2026 – 2029",
    text: "Formation d'ingénieur d'État suivie en alternance (chez CLAAS). Cursus d'excellence alliant l'Électronique et l'Informatique avec une approche pointue aux systèmes embarqués.",
  },
  {
    school: "Université d'Évry Paris-Saclay",
    degree: "Licence 2 Sciences pour l'Ingénieur (L1 & L2)",
    dates: "2024 – 2026",
    text: "Licence 2 validé avec 15,4/20 de moyenne générale. Solide formation théorique et pratique : Mathématiques, Physique et les Sciences de l'Ingénieur.",
  },
  {
    school: "Lycée Sadisana",
    degree: "Baccalauréat Scientifique",
    dates: "2023",
    text: "Obtenu avec 15/20 de moyenne générale, Mention BIEN.",
  },
  {
    school: "Certification professionnelle",
    degree: "Python : des fondamentaux aux concepts avancés du langage",
    dates: "2026",
    text: "Certification attestant la maîtrise avancée du langage Python : programmation orientée objet (POO), traitement et manipulation de données, scripts d'automatisation et analyse de signaux de capteurs.",
  },
];

const CATEGORIES = {
  hardware: "Électronique et hardware", embedded: "Systèmes embarqués", software: "Logiciel et développement",
  iot: "IoT et systèmes connectés", web: "Web et projets entrepreneuriaux",
};

// Exemples de démonstration : remplacez-les par vos vrais projets.
const PROJECTS = [
  { id: "p1", title: "Carte d'acquisition (exemple)", category: "hardware", demo: true,
    summary: "Exemple de fiche : conception d'une carte et validation des mesures.",
    tech: ["KiCad", "Instrumentation"], github: "", demoUrl: "",
    detail: { problem: "[Problématique]", architecture: "[Architecture matérielle et logicielle]", choices: "[Choix techniques]", difficulties: "[Difficultés et solutions]", results: "[Résultats et enseignements]" } },
  { id: "p2", title: "Firmware STM32 (exemple)", category: "embedded", demo: true,
    summary: "Exemple de fiche : firmware sur microcontrôleur avec communication série.",
    tech: ["C", "STM32", "UART"], github: "", demoUrl: "",
    detail: { problem: "[Problématique]", architecture: "[Architecture]", choices: "[Choix techniques]", difficulties: "[Difficultés et solutions]", results: "[Résultats]" } },
  { id: "p3", title: "Outil d'analyse de trames (exemple)", category: "software", demo: true,
    summary: "Exemple de fiche : outil logiciel de décodage et de visualisation.",
    tech: ["Python", "Git"], github: "", demoUrl: "",
    detail: { problem: "[Problématique]", architecture: "[Architecture]", choices: "[Choix techniques]", difficulties: "[Difficultés et solutions]", results: "[Résultats]" } },
  { id: "p4", title: "Capteur connecté (exemple)", category: "iot", demo: true,
    summary: "Exemple de fiche : remontée de mesures vers une interface.",
    tech: ["I²C", "Linux embarqué"], github: "", demoUrl: "",
    detail: { problem: "[Problématique]", architecture: "[Architecture]", choices: "[Choix techniques]", difficulties: "[Difficultés et solutions]", results: "[Résultats]" } },
];

// Initiatives et projets d'entrepreneuriat
const INITIATIVES = [
  {
    title: "OptiStock — Plateforme web de gestion de stock",
    text: "Développeur et cofondateur d'une solution applicative complète (React, Supabase, JavaScript, HTML/CSS). Développement de la logique produit, gestion de projet agile, structuration de la méthodologie de travail et mise en œuvre des leviers d'acquisition marketing.",
    url: "https://optistock.stellarbrightsoftware.com/",
  },
  {
    title: "OCTAVE (Organisme de Création Technologique et Aérospatiale d'Évry)",
    text: "Membre actif participant à la recherche, la conception et l'assemblage de solutions techniques innovantes et aérospatiales en synergie avec des équipes pluridisciplinaires d'élèves-ingénieurs.",
  },
];

// Compétences techniques, transversales et linguistiques issues du parcours et des projets
const SKILLS = [
  { group: "Programmation", items: ["C", "Python", "C++", "JavaScript", "HTML / CSS"] },
  { group: "Systèmes embarqués", items: ["Logiciels embarqués", "Microcontrôleurs", "Acquisition de signaux", "Gestion de capteurs", "CAN", "Conception des cartes électroniques", "FPGA"] },
  { group: "Logiciels utilisés", items: ["Visual Studio Code", "Arduino IDE", "DIAdem", "STM32Cube", "SolidWorks", "Kicad"] },
  { group: "Électronique & Industrie", items: ["Électronique analogique et numérique", "Automatisme", "Mécanique", "Électromécanique", "GMAO", "Sécurité industrielle"] },
  { group: "Web & Outils", items: ["React", "Supabase", "Git", "Linux", "Gestion de projet"] },
  { group: "Compétences transversales", items: ["Gestion de projet", "Travail en équipe", "Gestion du stress", "Aisance orale et écrite", "Sens du contact"] },
  { group: "Langues", items: ["Français (Langue natale)", "Lingala (Langue natale)", "Anglais (B1 / B2)"] },
];

const LANGUAGES = [
  {
    name: "Français",
    level: "Langue natale",
    note: "Langue maternelle · Expression écrite et orale maîtrisée",
    badge: "Langue natale",
  },
  {
    name: "Lingala",
    level: "Langue natale",
    note: "Langue maternelle · Bilingue",
    badge: "Langue natale",
  },
  {
    name: "Anglais",
    level: "Niveau B1 / B2",
    note: "Anglais technique & professionnel · Spécifications, documentation technique et code",
    badge: "Niveau B1 / B2",
  },
];

const CODE_LINES = [
  "<span class=\"ok\">#include</span> &lt;stdint.h&gt;",
  "",
  "<span class=\"ok\">#define</span> SAMPLE_COUNT 8U",
  "",
  "<span class=\"ok\">static uint16_t</span> read_sensor(void)",
  "{",
  "    uint16_t value = adc_read();",
  "    return value;",
  "}",
  "",
  "<span class=\"ok\">int</span> main(void)",
  "{",
  "    hardware_init();",
  "    <span class=\"ok\">while</span> (1) {",
  "        log_sensor(read_sensor());",
  "    }",
  "}",
];

/* ---------- 2. RENDU ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Crée un élément avec attributs et enfants (échappement automatique via textContent). */
function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  children.flat().filter(Boolean).forEach(c => node.append(c));
  return node;
}

const demoBadge = () => el("span", { class: "badge badge-demo", text: "Exemple à remplacer" });
const badgeList = items => el("ul", { class: "badges" }, items.map(t => el("li", { class: "badge", text: t })));
const fullName = () => [CONFIG.firstName, CONFIG.lastName].filter(Boolean).join(" ");

function renderExperiences() {
  const list = $("[data-experiences]");
  EXPERIENCES.forEach(x => list.append(el("li", {},
    el("h3", { text: `${x.role} — ${x.company}` }),
    el("p", { class: "meta", text: `${x.dates} · ${x.status}` }),
    x.demo ? demoBadge() : null,
    el("p", { text: x.context }),
    x.tasks.length ? el("ul", { class: "tasks" }, x.tasks.map(t => el("li", { text: t }))) : null,
    x.tech.length ? badgeList(x.tech) : null,
    x.achievements.length ? el("ul", { class: "tasks" }, x.achievements.map(t => el("li", { text: t }))) : null,
  )));
}

function renderEducation() {
  const box = $("[data-education]");
  EDUCATION.forEach(e => box.append(el("article", { class: "edu-item" },
    el("h3", { text: e.school }),
    el("p", { class: "meta", text: `${e.degree} · ${e.dates}` }),
    e.demo ? demoBadge() : null,
    el("p", { text: e.text }),
  )));
}

/** Petite illustration SVG générée par catégorie (remplaçable par une vraie image). */
function projectVisual(seed) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 320 140"); svg.setAttribute("aria-hidden", "true");
  const y = 30 + (seed % 4) * 20;
  svg.innerHTML = `<g fill="none" stroke="#5b9dff" stroke-width="1.5" opacity=".7"><path d="M0 ${y}h90l20 20h60l20-20h130M0 110h120l20-20h50l20 20h110"/><rect x="130" y="45" width="60" height="50" rx="3"/><circle cx="90" cy="${y}" r="3"/><circle cx="260" cy="110" r="3"/></g>`;
  return svg;
}

let activeFilter = "all";

function renderFilters() {
  const bar = $("[data-filters]");
  const entries = [["all", "Tous"], ...Object.entries(CATEGORIES)];
  entries.forEach(([key, label]) => {
    const b = el("button", { type: "button", "aria-pressed": String(key === activeFilter), "data-filter": key, text: label });
    b.addEventListener("click", () => { activeFilter = key; renderProjects(); });
    bar.append(b);
  });
}

function renderProjects() {
  $$("[data-filter]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === activeFilter)));
  const grid = $("[data-projects]");
  grid.replaceChildren();
  const shown = PROJECTS.filter(p => activeFilter === "all" || p.category === activeFilter);
  shown.forEach((p, i) => {
    const visual = el("div", { class: "card-visual" });
    visual.append(projectVisual(i));
    const actions = el("div", { class: "card-actions" });
    const more = el("button", { class: "btn btn-small", type: "button", text: "Voir la fiche" });
    more.addEventListener("click", () => openProject(p));
    actions.append(more);
    if (p.github) actions.append(el("a", { class: "btn btn-small btn-ghost", href: p.github, target: "_blank", rel: "noopener noreferrer", text: "GitHub" }));
    if (p.demoUrl) actions.append(el("a", { class: "btn btn-small btn-ghost", href: p.demoUrl, target: "_blank", rel: "noopener noreferrer", text: "Démo" }));
    grid.append(el("article", { class: "card" }, visual, el("div", { class: "card-body" },
      el("span", { class: "card-cat", text: CATEGORIES[p.category] }),
      el("h3", { text: p.title }),
      p.demo ? demoBadge() : null,
      el("p", { text: p.summary }),
      badgeList(p.tech), actions)));
  });
  $("[data-empty]").hidden = shown.length > 0;
  $("[data-filter-count]").textContent = `${shown.length} projet${shown.length > 1 ? "s" : ""} affiché${shown.length > 1 ? "s" : ""}`;
}

function renderInitiatives() {
  const box = $("[data-initiatives]");
  if (!INITIATIVES.length) { box.append(el("p", { class: "empty-state", text: "Les initiatives et prototypes seront présentés ici." })); return; }
  INITIATIVES.forEach(i => {
    const card = el("article", { class: "edu-item" },
      el("h3", { text: i.title }), i.demo ? demoBadge() : null, el("p", { text: i.text }));
    if (i.url) {
      card.append(el("a", {
        class: "btn btn-small",
        href: i.url,
        target: "_blank",
        rel: "noopener noreferrer",
        text: "Visiter le site OptiStock",
      }));
    }
    box.append(card);
  });
}

function renderSkills() {
  const box = $("[data-skills]");
  SKILLS.forEach(s => box.append(el("div", { class: "skill-group" }, el("h3", { text: s.group }), badgeList(s.items))));
}

function renderLanguages() {
  const box = $("[data-languages]");
  if (!box) return;
  box.replaceChildren();
  LANGUAGES.forEach(lang => {
    box.append(el("article", { class: "language-card" },
      el("div", { class: "language-header" },
        el("h4", { class: "language-name", text: lang.name }),
        el("span", { class: "language-badge", text: lang.badge })
      ),
      el("p", { class: "language-level", text: lang.level }),
      el("p", { class: "language-desc", text: lang.note })
    ));
  });
}

/** Applique les liens et le nom configurés ; signale visuellement ceux à compléter. */
function applyConfig() {
  $$("[data-fullname]").forEach(n => (n.textContent = fullName()));
  $("[data-brand]").textContent = fullName();
  $$("[data-year]").forEach(n => (n.textContent = new Date().getFullYear()));
  $$("[data-link]").forEach(a => {
    const key = a.dataset.link;
    const url = key === "email" ? (CONFIG.email && `mailto:${CONFIG.email}`) : CONFIG[key];
    if (url) { a.href = url; return; }
    a.removeAttribute("href");                 // lien non configuré : pas de faux lien
    a.setAttribute("aria-disabled", "true");
    a.title = "À configurer dans script.js";
    a.style.opacity = ".5";
  });
}

/* ---------- 3. INTERACTIONS ---------- */

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function initNav() {
  const toggle = $(".nav-toggle"), nav = $("#site-nav");
  const setOpen = open => { nav.classList.toggle("is-open", open); toggle.setAttribute("aria-expanded", String(open)); };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); } });
  // Section active
  const links = $$('.site-nav ul a');
  const obs = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(a => {
      if (a.getAttribute("href") === `#${en.target.id}`) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }), { rootMargin: "-40% 0px -55% 0px" });
  links.forEach(a => { const s = $(a.getAttribute("href")); if (s) obs.observe(s); });
}

function initTerminal() {
  const out = $("[data-terminal]");
  if (reducedMotion) { out.innerHTML = CODE_LINES.join("\n"); return; }
  let i = 0;
  out.classList.add("cursor");
  const next = () => {
    if (i >= CODE_LINES.length) {
      setTimeout(() => {
        i = 0;
        out.innerHTML = "";
        next();
      }, 1400);
      return;
    }
    out.innerHTML = CODE_LINES.slice(0, ++i).join("\n");
    setTimeout(next, 380);
  };
  next();
}

const dialog = $("[data-dialog]");
function openProject(p) {
  $("[data-dialog-title]").textContent = p.title;
  const d = p.detail, body = $("[data-dialog-body]");
  body.replaceChildren(
    ...[["Problématique et objectifs", d.problem], ["Architecture matérielle et logicielle", d.architecture],
        ["Choix techniques", d.choices], ["Difficultés et solutions", d.difficulties], ["Résultats et enseignements", d.results]]
      .flatMap(([h, t]) => [el("h4", { text: h }), el("p", { text: t })]));
  dialog.showModal();
}
function initDialog() {
  $("[data-dialog-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); }); // clic sur le fond
}

/** Informe les visiteurs que le CV n'est pas encore disponible. */
function initCv() {
  const status = $("[data-cv-status]");
  let timeout;
  $$("[data-cv]").forEach(button => {
    button.addEventListener("click", () => {
      status.textContent = "Mon CV sera bientôt disponible.";
      clearTimeout(timeout);
      timeout = setTimeout(() => { status.textContent = ""; }, 5000);
    });
  });
}

function initForm() {
  const form = $("[data-form]"), status = $("[data-form-status]"), btn = $("[data-submit]");
  const rules = {
    name: v => v.trim().length >= 2 || "Indiquez votre nom (2 caractères minimum).",
    "first-name": v => v.trim().length >= 2 || "Indiquez votre prénom (2 caractères minimum).",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Saisissez une adresse e-mail valide, par exemple nom@domaine.fr.",
    subject: v => v.trim().length >= 3 || "Indiquez un sujet (3 caractères minimum).",
    message: v => v.trim().length >= 10 || "Écrivez un message d'au moins 10 caractères.",
  };
  const check = field => {
    const res = rules[field.name](field.value);
    const err = $("[data-error]", field.closest(".field"));
    err.textContent = res === true ? "" : res;
    field.setAttribute("aria-invalid", String(res !== true));
    return res === true;
  };
  $$("input, textarea", form).forEach(f => f.addEventListener("blur", () => check(f)));

  form.addEventListener("submit", async e => {
    e.preventDefault();
    status.className = "form-status";
    const fields = $$("input, textarea", form);
    const invalid = fields.filter(f => !check(f));
    if (invalid.length) { status.classList.add("is-error"); status.textContent = "Corrigez les champs signalés avant de continuer."; invalid[0].focus(); return; }
    const data = Object.fromEntries(new FormData(form));

    if (CONFIG.formEndpoint) {                          // Envoi réel via un service externe
      btn.disabled = true; status.textContent = "Envoi en cours…";
      try {
        const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        if (!r.ok) throw new Error(r.status);
        status.textContent = "Message envoyé. Merci, je reviens vers vous rapidement."; form.reset();
      } catch {
        status.classList.add("is-error"); status.textContent = "L'envoi a échoué. Réessayez ou écrivez directement par e-mail.";
      } finally { btn.disabled = false; }
      return;
    }
    if (!CONFIG.email) {                                 // Aucun moyen de contact configuré : on le dit
      status.classList.add("is-error"); status.textContent = "Aucune adresse de contact n'est configurée sur ce site (CONFIG.email dans script.js).";
      return;
    }
    const body = `${data.message}\n\n— ${data["first-name"]} ${data.name} (${data.email})`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Votre messagerie s'ouvre avec le message prérempli. Rien n'est envoyé tant que vous n'avez pas validé l'envoi dans celle-ci.";
  });
}

/**
 * Fond interactif : circuit imprimé généré (traces orthogonales et à 45°, puces, vias),
 * parcouru par des impulsions de signal. Le curseur éclaire les traces proches et
 * injecte une impulsion depuis le nœud le plus proche.
 * Couche statique dessinée une seule fois ; seule la couche dynamique est animée.
 */
function initBackground() {
  const canvas = $("[data-bg]");
  const ctx = canvas && canvas.getContext("2d");
  if (!ctx) return;
  const RGB = "91, 157, 255";                       // = --accent
  const pointer = { x: -9999, y: -9999, lastSpawn: 0 };
  let w = 0, h = 0, dpr = 1, step = 72, cols = 0;
  let nodes = [], edges = [], adj = [], chips = [], pulses = [], layer = null;
  let rafId = 0, running = false, last = 0;

  function build() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    step = w < 700 ? 56 : 72;
    cols = Math.ceil(w / step) + 1;
    const rows = Math.ceil(h / step) + 1;
    nodes = []; edges = []; chips = []; pulses = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) nodes.push({ x: c * step, y: r * step });
    adj = nodes.map(() => []);
    const link = (a, b) => { edges.push([a, b]); adj[a].push(b); adj[b].push(a); };
    nodes.forEach((_, i) => {
      const c = i % cols, r = Math.floor(i / cols);
      if (c < cols - 1 && Math.random() < .42) link(i, i + 1);
      if (r < rows - 1 && Math.random() < .42) link(i, i + cols);
      if (c < cols - 1 && r < rows - 1 && Math.random() < .12) link(i, i + cols + 1);
      if (Math.random() < .035) chips.push(i);
    });
    chips = chips.filter(i => adj[i].length);
    drawLayer();
  }

  /** Couche statique : traces, vias et puces avec leurs broches. */
  function drawLayer() {
    layer = document.createElement("canvas");
    layer.width = canvas.width; layer.height = canvas.height;
    const g = layer.getContext("2d");
    g.scale(dpr, dpr);
    g.lineWidth = 1;
    g.strokeStyle = `rgba(${RGB}, .13)`;
    g.beginPath();
    edges.forEach(([a, b]) => { g.moveTo(nodes[a].x, nodes[a].y); g.lineTo(nodes[b].x, nodes[b].y); });
    g.stroke();
    g.fillStyle = "#0d1117";
    nodes.forEach((n, i) => {
      if (!adj[i].length) return;
      g.beginPath(); g.arc(n.x, n.y, 2, 0, Math.PI * 2); g.fill(); g.stroke();
    });
    g.strokeStyle = `rgba(${RGB}, .28)`;
    chips.forEach(i => {
      const { x, y } = nodes[i];
      g.fillRect(x - 16, y - 11, 32, 22);
      g.strokeRect(x - 16, y - 11, 32, 22);
      g.beginPath();
      for (let k = -1; k <= 1; k++) {
        g.moveTo(x + k * 9, y - 11); g.lineTo(x + k * 9, y - 16);
        g.moveTo(x + k * 9, y + 11); g.lineTo(x + k * 9, y + 16);
      }
      g.stroke();
    });
  }

  /** Lance une impulsion depuis un nœud : elle suit les traces au hasard puis s'éteint. */
  function spawn(from) {
    if (!adj[from] || !adj[from].length) return;
    const to = adj[from][Math.floor(Math.random() * adj[from].length)];
    pulses.push({ prev: from, from, to, t: 0, hops: 0, max: 6 + Math.floor(Math.random() * 8), speed: 90 + Math.random() * 90 });
  }
  const spawnRandom = () => { for (let k = 0; k < 8; k++) { const i = Math.floor(Math.random() * nodes.length); if (adj[i].length) return spawn(i); } };

  function frame(ts) {
    const dt = Math.min((ts - last) / 1000 || 0, .05); last = ts;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(layer, 0, 0, w, h);

    // Éclairage des traces proches du curseur
    const R = 170;
    ctx.lineWidth = 1.5;
    edges.forEach(([a, b]) => {
      const A = nodes[a], B = nodes[b];
      const d = Math.hypot((A.x + B.x) / 2 - pointer.x, (A.y + B.y) / 2 - pointer.y);
      if (d > R) return;
      ctx.strokeStyle = `rgba(${RGB}, ${(1 - d / R) * .5})`;
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
    });

    // Impulsions de signal
    const target = Math.max(6, Math.min(18, Math.round(w * h / 100000)));
    if (pulses.length < target && Math.random() < .04) spawnRandom();
    pulses = pulses.filter(p => {
      const A = nodes[p.from], B = nodes[p.to], len = Math.hypot(B.x - A.x, B.y - A.y);
      p.t += (p.speed * dt) / len;
      if (p.t >= 1) {
        p.hops++; p.prev = p.from; p.from = p.to; p.t = 0;
        const options = adj[p.from].filter(n => n !== p.prev);
        if (p.hops >= p.max || !options.length) return false;
        p.to = options[Math.floor(Math.random() * options.length)];
        return true;
      }
      const alpha = Math.min(1, (p.max - p.hops - p.t) / 2);
      const x = A.x + (B.x - A.x) * p.t, y = A.y + (B.y - A.y) * p.t;
      const tt = Math.max(0, p.t - 22 / len);
      ctx.strokeStyle = `rgba(${RGB}, ${.6 * alpha})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(A.x + (B.x - A.x) * tt, A.y + (B.y - A.y) * tt); ctx.lineTo(x, y); ctx.stroke();
      ctx.fillStyle = `rgba(${RGB}, ${alpha})`;
      ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fill();
      return true;
    });
    rafId = requestAnimationFrame(frame);
  }

  const start = () => { if (running || reducedMotion) return; running = true; last = performance.now(); rafId = requestAnimationFrame(frame); };
  const stop = () => { running = false; cancelAnimationFrame(rafId); };
  const drawStatic = () => { ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h); ctx.drawImage(layer, 0, 0, w, h); };

  build();
  if (reducedMotion) { drawStatic(); }       // version fixe : aucun mouvement
  else {
    start();
    addEventListener("pointermove", e => {
      pointer.x = e.clientX; pointer.y = e.clientY;
      const now = performance.now();
      if (now - pointer.lastSpawn < 350) return;
      pointer.lastSpawn = now;
      const c = Math.min(cols - 1, Math.max(0, Math.round(e.clientX / step)));
      spawn(Math.min(nodes.length - 1, Math.round(e.clientY / step) * cols + c));
    }, { passive: true });
    document.documentElement.addEventListener("pointerleave", () => { pointer.x = pointer.y = -9999; });
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  }
  let timer;
  addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => { if (innerWidth !== w || innerHeight > h) { build(); if (reducedMotion) drawStatic(); } }, 200);
  });
}

/* ---------- Initialisation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderExperiences(); renderEducation(); renderInitiatives(); renderSkills(); renderLanguages();
  applyConfig(); initNav(); initTerminal(); initDialog(); initCv(); initForm(); initBackground();
});
