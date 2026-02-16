/* ======================================================
   1) FAKE DATABASE CLASSES
====================================================== */

class News {
  constructor({ id, type, title, excerpt, content, date, readTime, tag, image }) {
    this.id = id;
    this.type = type; // "Vijesti" or "Kolumne"
    this.title = title;
    this.excerpt = excerpt; // short preview
    this.content = content; // full text (string)
    this.date = date;
    this.readTime = readTime;
    this.tag = tag ?? type;
    this.image = image ?? null;
  }
}

class Udruga {
  constructor({ id, name, description, content, category, image }) {
    this.id = id;
    this.name = name;
    this.description = description; // short preview
    this.content = content;         // FULL TEXT
    this.category = category;
    this.image = image ?? null;
  }
}


class Projekt {
  constructor({ id, name, description, content, status, image }) {
    this.id = id;
    this.name = name;
    this.description = description; // short preview
    this.content = content;         // FULL TEXT
    this.status = status;
    this.image = image ?? null;
  }
}

class Event {
  constructor({ id, title, date, location, description }) {
    this.id = id;
    this.title = title;
    this.date = date;           // "DD.MM.YYYY."
    this.location = location;   // NEW
    this.description = description;
  }
}

/* ======================================================
   2) FAKE DATA (SIMULATED DATABASE)
====================================================== */

const NEWS_DB = [
  new News({
    id: "n1",
    type: "Vijesti",
    title: "Otvoren natječaj za stipendiju — provjeri uvjete",
    excerpt: "Kratki uvod (2–3 rečenice) kao na news portalu.",
    content:
      "Objavljen je novi natječaj za stipendije za akademsku godinu 2026./2027.\n\n" +
      "Prijave su otvorene do 01.03.2026. Potrebno je pripremiti dokumentaciju (potvrde o upisu, ocjene i ostale priloge).\n\n" +
      "Detalje uvjeta i potrebne dokumente provjeri na službenoj stranici institucije.",
    date: "12.02.2026.",
    readTime: "3 min",
    image: "../images/library.jpg",
  }),
  new News({
    id: "n2",
    type: "Vijesti",
    title: "Produženo radno vrijeme knjižnice",
    excerpt: "Knjižnica radi dulje tijekom ispitnih rokova.",
    content:
      "Tijekom ispitnih rokova knjižnica produljuje radno vrijeme kako bi studentima olakšala pripremu.\n\n" +
      "Provjeri novi raspored na oglasnoj ploči ili web stranici knjižnice.\n\n" +
      "Preporuka: rezerviraj mjesto ranije u danu ako planiraš duže učenje.",
    date: "11.02.2026.",
    readTime: "2 min",
    image: "../images/library.jpg",
  }),
  new News({
    id: "n3",
    type: "Vijesti",
    title: "Otvorene prijave za praksu",
    excerpt: "Prijavi se na programe prakse i stekni iskustvo.",
    content:
      "Otvorene su prijave za stručnu praksu u više partnerskih tvrtki.\n\n" +
      "Pripremi životopis i kratko motivacijsko pismo, a zatim se prijavi putem obrasca.\n\n" +
      "Praksa traje 6–8 tjedana i uključuje mentorstvo te rad na stvarnim zadacima.",
    date: "09.02.2026.",
    readTime: "3 min",
    image: "../images/library.jpg",
  }),
  new News({
    id: "n4",
    type: "Kolumne",
    title: "Kako preživjeti ispitne rokove (bez panike)",
    excerpt: "Savjeti za fokus, odmor i planiranje.",
    content:
      "Ispitni rokovi nisu sprint — više su kao maraton s pauzama.\n\n" +
      "Planiraj učenje u blokovima (npr. 25–50 minuta), a pauze koristi za kratko kretanje ili vodu.\n\n" +
      "Najvažnije: spavanje nije luksuz. Dobar san često vrijedi više od dodatnog sata učenja.",
    date: "10.02.2026.",
    readTime: "4 min",
    tag: "Kolumna",
    image: "../images/library.jpg",
  }),
  new News({
    id: "n5",
    type: "Kolumne",
    title: "Studentski budžet: realnost vs plan",
    excerpt: "Kako rasporediti troškove i izbjeći zadnji tjedan u minusu.",
    content:
      "Budžet zvuči dosadno dok ga ne zatrebaš.\n\n" +
      "Kreni od stvarnih troškova: hrana, prijevoz, skripte i neplanirane sitnice.\n\n" +
      "Trik: odvoji mali iznos za “nepredviđeno” — tako te manje boli kad se dogodi.",
    date: "08.02.2026.",
    readTime: "5 min",
    tag: "Kolumna",
    image: "../images/library.jpg",
  }),
  new News({
    id: "n6",
    type: "Kolumne",
    title: "Učenje pametnije, ne duže",
    excerpt: "Pomodoro i aktivno prisjećanje kao metode učenja.",
    content:
      "Dužina učenja nije isto što i kvalitetno učenje.\n\n" +
      "Aktivno prisjećanje (quiz, pitanja, objašnjavanje naglas) jača pamćenje više od ponovnog čitanja.\n\n" +
      "Pomodoro ti pomaže da ostaneš fokusiran — ali prilagodi trajanje sebi, ne obrnuto.",
    date: "06.02.2026.",
    readTime: "4 min",
    tag: "Kolumna",
    image: "../images/library.jpg",
  }),
];

const UDRUGE_DB = [
  new Udruga({
    id: "u1",
    name: "Volonterska udruga",
    description: "Humanitarne akcije i volontiranje.",
    category: "Volonterstvo",
    image: "../images/library.jpg",
  }),
  new Udruga({
    id: "u2",
    name: "IT udruga",
    description: "Radionice programiranja i hackathoni.",
    content:
      "Volonterska udruga okuplja studente koji žele pomagati zajednici.\n\n" +
      "Organiziramo humanitarne akcije, prikupljanje donacija i volontiranje u lokalnim ustanovama.\n\n" +
      "Članovi udruge razvijaju socijalne vještine i osjećaj solidarnosti.",
    category: "IT",
    image: "../images/library.jpg",
  }),
  new Udruga({
    id: "u3",
    name: "Sportska udruga",
    description: "Turniri i sportska druženja.",
    content:
      "Volonterska udruga okuplja studente koji žele pomagati zajednici.\n\n" +
      "Organiziramo humanitarne akcije, prikupljanje donacija i volontiranje u lokalnim ustanovama.\n\n" +
      "Članovi udruge razvijaju socijalne vještine i osjećaj solidarnosti.",
    category: "Sport",
    image: "../images/library.jpg",
  }),
];

const PROJEKTI_DB = [
  new Projekt({
    id: "p1",
    name: "Hackathon 2026",
    description: "Timsko natjecanje u 24 sata.",
    content:
      "Volonterska udruga okuplja studente koji žele pomagati zajednici.\n\n" +
      "Organiziramo humanitarne akcije, prikupljanje donacija i volontiranje u lokalnim ustanovama.\n\n" +
      "Članovi udruge razvijaju socijalne vještine i osjećaj solidarnosti.",
    status: "Otvorene prijave",
    image: "../images/library.jpg",
  }),
  new Projekt({
    id: "p2",
    name: "Startup inkubator",
    description: "Mentorstvo i razvoj studentskih ideja.",
    content:
      "Volonterska udruga okuplja studente koji žele pomagati zajednici.\n\n" +
      "Organiziramo humanitarne akcije, prikupljanje donacija i volontiranje u lokalnim ustanovama.\n\n" +
      "Članovi udruge razvijaju socijalne vještine i osjećaj solidarnosti.",
    status: "U tijeku",
    image: "../images/library.jpg",
  }),
  new Projekt({
    id: "p3",
    name: "Digitalni vodič kampusa",
    description: "Interaktivna mapa lokacija.",
    content:
      "Volonterska udruga okuplja studente koji žele pomagati zajednici.\n\n" +
      "Organiziramo humanitarne akcije, prikupljanje donacija i volontiranje u lokalnim ustanovama.\n\n" +
      "Članovi udruge razvijaju socijalne vještine i osjećaj solidarnosti.",
    status: "U razvoju",
    image: "../images/library.jpg",
  }),
];

const EVENTS_DB = [
  new Event({
    id: "e1",
    title: "Brucošijada",
    date: "20.02.2026.",
    location: "Studentski kampus",
    description: "Druženje studenata uz glazbu i aktivnosti na kampusu.",
  }),
  new Event({
    id: "e2",
    title: "IT radionica: Uvod u JavaScript",
    date: "18.02.2026.",
    location: "Računalna učionica A2",
    description: "Praktična radionica za početnike (osnove JS + mini projekt).",
  }),
  new Event({
    id: "e3",
    title: "Studentski sportski dan",
    date: "25.02.2026.",
    location: "Sportska dvorana",
    description: "Turniri i rekreativne aktivnosti (nogomet, košarka, odbojka).",
  }),
];

/* ======================================================
   3) HELPERS
====================================================== */

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getPageTypeByPath() {
  const file = (location.pathname.split("/").pop() || "").toLowerCase();
  if (file === "vijesti.html") return "Vijesti";
  if (file === "kolumne.html") return "Kolumne";
  return null; // index or other pages
}

function makeLead(news) {
  const imgSrc = news.image ?? "../images/hero.jpg";
  const href = `article.html?id=${encodeURIComponent(news.id)}`;

  return `
    <article class="lead">
      <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(news.title)}">
      <div class="lead-text">
        <span class="tag">${escapeHtml(news.tag)}</span>
        <h2>
          <a class="title-link" href="${href}">${escapeHtml(news.title)}</a>
        </h2>
        <p class="muted">${escapeHtml(news.excerpt)}</p>
        <div class="meta">${escapeHtml(news.date)} • ${escapeHtml(news.readTime)} čitanja</div>
      </div>
    </article>
  `;
}

function makeNewsCard(news) {
  const href = `article.html?id=${encodeURIComponent(news.id)}`;
  const img = news.image
    ? `<img class="card-img" src="${escapeHtml(news.image)}" alt="${escapeHtml(news.title)}">`
    : "";

  return `
    <article class="card">
      ${img}
      <span class="tag">${escapeHtml(news.tag)}</span>
      <h3>
        <a class="title-link" href="${href}">${escapeHtml(news.title)}</a>
      </h3>
      <p class="muted">${escapeHtml(news.excerpt)}</p>
      <div class="meta">${escapeHtml(news.date)} • ${escapeHtml(news.readTime)} čitanja</div>
    </article>
  `;
}

function makeSearchCard(r) {
  const href = `article.html?kind=${encodeURIComponent(r.kind)}&id=${encodeURIComponent(r.id)}`;
  const imgSrc = r.image ?? "img/hero.jpg";

  return `
    <article class="card">
      <img class="card-img" src="${escapeHtml(imgSrc)}" alt="${escapeHtml(r.title)}">
      <span class="tag">${escapeHtml(r.tag)}</span>
      <h3>
        <a class="title-link" href="${href}">${escapeHtml(r.title)}</a>
      </h3>
      <p class="muted">${escapeHtml(r.excerptOrMeta)}</p>
      <div class="meta">${escapeHtml(r.meta)}</div>
      <a class="more" href="${href}">Otvori →</a>
    </article>
  `;
}

/* ======================================================
   4) RENDER: LIST PAGES (index/vijesti/kolumne)
====================================================== */

function renderNewsList({ type = null } = {}) {
  const list = document.getElementById("newsList");
  const leadSlot = document.getElementById("leadSlot");
  if (!list) return;

  let items = [...NEWS_DB];
  if (type) items = items.filter(n => n.type === type);

  if (!items.length) {
    if (leadSlot) leadSlot.innerHTML = "";
    list.innerHTML = `<div class="card"><p class="muted">Nema rezultata.</p></div>`;
    return;
  }

  const [lead, ...rest] = items;

  if (leadSlot) leadSlot.innerHTML = makeLead(lead);

  if (!rest.length) {
    list.innerHTML = `<div class="card"><p class="muted">Trenutno nema više objava.</p></div>`;
    return;
  }

  list.innerHTML = rest.map(makeNewsCard).join("");
}

/* ======================================================
   5) RENDER: ARTICLE PAGE (NEWS + UDRUGE + PROJEKTI)
====================================================== */

function renderArticlePage() {
  const container = document.getElementById("article");
  if (!container) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const kind = (params.get("kind") || "").toLowerCase();

  const findItem = () => {
    if (kind === "udruga") return { kind: "udruga", item: UDRUGE_DB.find(x => x.id === id) };
    if (kind === "projekt") return { kind: "projekt", item: PROJEKTI_DB.find(x => x.id === id) };

    const n = NEWS_DB.find(x => x.id === id);
    if (n) return { kind: "news", item: n };

    const u = UDRUGE_DB.find(x => x.id === id);
    if (u) return { kind: "udruga", item: u };

    const p = PROJEKTI_DB.find(x => x.id === id);
    if (p) return { kind: "projekt", item: p };

    return { kind: "unknown", item: null };
  };

  const { kind: foundKind, item } = findItem();

  if (!item) {
    container.innerHTML = `
      <div class="section-title">
        <h1>Članak nije pronađen</h1>
        <p class="muted">Provjeri link ili se vrati na <a class="more" href="../index.html">naslovnicu</a>.</p>
      </div>
    `;
    return;
  }

  let title = "";
  let meta = "";
  let imgSrc = "../images/hero.jpg";
  let bodyHtml = "";
  let backHref = "../index.html";

  if (foundKind === "news") {
    title = item.title;
    meta = `${item.type} • ${item.date} • ${item.readTime} čitanja`;
    imgSrc = item.image ?? imgSrc;

    const paragraphs = String(item.content || "")
      .split(/\n\s*\n/g)
      .filter(Boolean)
      .map(p => `<p>${escapeHtml(p)}</p>`)
      .join("");

    bodyHtml = paragraphs;
    backHref = item.type === "Kolumne" ? "kolumne.html" : "vijesti.html";
  } else if (foundKind === "udruga") {
      title = item.name;
      meta = `Udruga • ${item.category}`;
      imgSrc = item.image ?? imgSrc;

      const paragraphs = String(item.content || item.description || "")
        .split(/\n\s*\n/g)
        .filter(Boolean)
        .map(p => `<p>${escapeHtml(p)}</p>`)
        .join("");

      bodyHtml = paragraphs;
      backHref = "udruge.html";
  } else if (foundKind === "projekt") {
      title = item.name;
      meta = `Projekt • ${item.status}`;
      imgSrc = item.image ?? imgSrc;

      const paragraphs = String(item.content || item.description || "")
        .split(/\n\s*\n/g)
        .filter(Boolean)
        .map(p => `<p>${escapeHtml(p)}</p>`)
        .join("");

      bodyHtml = paragraphs;
      backHref = "projekti.html";
  }

  document.title = `Studentski Portal | ${title}`;

  container.innerHTML = `
    <div class="section-title">
      <h1>${escapeHtml(title)}</h1>
      <p class="muted">${escapeHtml(meta)}</p>
    </div>

    <img class="article-img" src="${escapeHtml(imgSrc)}" alt="${escapeHtml(title)}">

    <div class="article-body">
      ${bodyHtml}
    </div>

    <div style="margin-top:14px;">
      <a class="more" href="${escapeHtml(backHref)}">← Natrag</a>
    </div>
  `;
}

/* ======================================================
   6) RENDER: UDRUGE / PROJEKTI
====================================================== */

function renderUdruge() {
  const list = document.getElementById("udrugeList");
  if (!list) return;

  list.innerHTML = UDRUGE_DB.map(u => {
    const href = `article.html?kind=udruga&id=${encodeURIComponent(u.id)}`;
    const imgSrc = u.image ?? "../images/hero.jpg";

    return `
      <article class="card">
        <img class="card-img" src="${escapeHtml(imgSrc)}" alt="${escapeHtml(u.name)}">
        <span class="tag">${escapeHtml(u.category)}</span>
        <h3>
          <a class="title-link" href="${href}">${escapeHtml(u.name)}</a>
        </h3>
        <p class="muted">${escapeHtml(u.description)}</p>
        <a class="more" href="${href}">Detalji →</a>
      </article>
    `;
  }).join("");
}

function renderProjekti() {
  const list = document.getElementById("projektiList");
  if (!list) return;

  list.innerHTML = PROJEKTI_DB.map(p => {
    const href = `article.html?kind=projekt&id=${encodeURIComponent(p.id)}`;
    const imgSrc = p.image ?? "../images/hero.jpg";

    return `
      <article class="card">
        <img class="card-img" src="${escapeHtml(imgSrc)}" alt="${escapeHtml(p.name)}">
        <span class="tag">${escapeHtml(p.status)}</span>
        <h3>
          <a class="title-link" href="${href}">${escapeHtml(p.name)}</a>
        </h3>
        <p class="muted">${escapeHtml(p.description)}</p>
        <a class="more" href="${href}">Detalji →</a>
      </article>
    `;
  }).join("");
}

function parseCroDateToISO(dateStr) {
  // expects "DD.MM.YYYY." or "DD.MM.YYYY"
  const clean = String(dateStr || "").trim().replace(/\.$/, "");
  const m = clean.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!m) return null;
  const [, dd, mm, yyyy] = m;
  return `${yyyy}-${mm}-${dd}`; // ISO string for reliable sorting
}

function renderEventsPage() {
  const tbody = document.getElementById("eventsTbody");
  if (!tbody) return;

  const items = [...EVENTS_DB].sort((a, b) => {
    const aIso = parseCroDateToISO(a.date) || "";
    const bIso = parseCroDateToISO(b.date) || "";
    return aIso.localeCompare(bIso); // ascending (oldest -> newest)
  });

  tbody.innerHTML = items
    .map((e) => `
      <tr>
        <td>${escapeHtml(e.date)}</td>
        <td>${escapeHtml(e.title)}</td>
        <td>${escapeHtml(e.location)}</td>
        <td>${escapeHtml(e.description)}</td>
      </tr>
    `)
    .join("");
}


/* ======================================================
   7) SEARCH: build + render results on search.html
====================================================== */

function buildSearchResults(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];

  const results = [];

  // NEWS
  for (const n of NEWS_DB) {
    const hay = `${n.title} ${n.excerpt} ${n.content} ${n.tag} ${n.type}`.toLowerCase();
    if (hay.includes(q)) {
      results.push({
        kind: "news",
        id: n.id,
        title: n.title,
        tag: n.tag || n.type,
        image: n.image ?? null,
        excerptOrMeta: n.excerpt,
        meta: `${n.type} • ${n.date} • ${n.readTime} čitanja`,
      });
    }
  }

  // UDRUGE
  for (const u of UDRUGE_DB) {
    const hay = `${u.name} ${u.description} ${u.category}`.toLowerCase();
    if (hay.includes(q)) {
      results.push({
        kind: "udruga",
        id: u.id,
        title: u.name,
        tag: u.category,
        image: u.image ?? null,
        excerptOrMeta: u.description,
        meta: `Udruga • ${u.category}`,
      });
    }
  }

  // PROJEKTI
  for (const p of PROJEKTI_DB) {
    const hay = `${p.name} ${p.description} ${p.status}`.toLowerCase();
    if (hay.includes(q)) {
      results.push({
        kind: "projekt",
        id: p.id,
        title: p.name,
        tag: p.status,
        image: p.image ?? null,
        excerptOrMeta: p.description,
        meta: `Projekt • ${p.status}`,
      });
    }
  }

  return results;
}

function renderSearchPage() {
  const wrap = document.getElementById("searchResults");
  if (!wrap) return;

  const metaEl = document.getElementById("searchMeta");
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";

  // Keep input in header filled
  const input = document.getElementById("globalSearch");
  if (input) input.value = q;

  const results = buildSearchResults(q);

  if (metaEl) {
    metaEl.textContent = q
      ? `Upit: "${q}" • Pronađeno: ${results.length}`
      : "Upiši pojam za pretraživanje.";
  }

  if (!q.trim()) {
    wrap.innerHTML = `<div class="card"><p class="muted">Nema upita. Upiši pojam u pretraživanju.</p></div>`;
    return;
  }

  if (!results.length) {
    wrap.innerHTML = `<div class="card"><p class="muted">Nema rezultata za "${escapeHtml(q)}".</p></div>`;
    return;
  }

  wrap.innerHTML = results.map(makeSearchCard).join("");
}

/* ======================================================
   8) PAGE ROUTING
====================================================== */

(() => {
  const file = (location.pathname.split("/").pop() || "").toLowerCase();

  // Single-item pages
  if (file === "article.html") {
    renderArticlePage();
    return;
  }

  // Search
  if (file === "search.html") {
    renderSearchPage();
    return;
  }

  // Events
  if (file === "events.html") {
    renderEventsPage();
    return;
  }

  // Udruge / Projekti pages
  if (file === "udruge.html") {
    renderUdruge();
    return;
  }

  if (file === "projekti.html") {
    renderProjekti();
    return;
  }

  // News list pages (index/vijesti/kolumne) if placeholder exists
  const type = getPageTypeByPath();
  if (document.getElementById("newsList")) {
    renderNewsList({ type });
  }
})();

/* ======================================================
   9) UI BEHAVIOR (year, nav, global search redirect)
====================================================== */

// Footer year
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

// Mobile nav toggle
(() => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (!burger || !nav) return;
  burger.addEventListener("click", () => nav.classList.toggle("open"));
})();

// Global search (always visible): redirect to search.html?q=...
(() => {
  const input = document.getElementById("globalSearch");
  const btn = document.getElementById("doSearch");
  if (!input || !btn) return;

  const runSearch = () => {
    const q = (input.value || "").trim();
    if (!q) return;
    window.location.href = `search.html?q=${encodeURIComponent(q)}`;
  };

  btn.addEventListener("click", runSearch);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runSearch();
    }
  });
})();

// Sidebar tabs (if present)
(() => {
  const tabs = document.querySelectorAll(".tab");
  const most = document.getElementById("tab-most");
  const newest = document.getElementById("tab-new");
  if (!tabs.length || !most || !newest) return;

  tabs.forEach(t => {
    t.addEventListener("click", () => {
      tabs.forEach(x => x.classList.remove("active"));
      t.classList.add("active");

      const showMost = t.dataset.tab === "most";
      most.hidden = !showMost;
      newest.hidden = showMost;
    });
  });
})();

(() => {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav .nav-link").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("?")[0].toLowerCase();
    if (href === current) a.classList.add("active");
  });
})();

/* ======================================================
   CONTACT FORM VALIDATION (contact.html)
====================================================== */
(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("closeModal");
  const okBtn = document.getElementById("okModal");

  const closeModal = () => {
    modal.hidden = true;
  };

  closeBtn.addEventListener("click", closeModal);
  okBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullName || !email || !subject || !message) {
      alert("Molimo ispuni sva obavezna polja.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Unesi ispravnu email adresu.");
      return;
    }

    // SHOW SUCCESS POPUP
    modal.hidden = false;

    form.reset();
    document.getElementById("toEmail").value = "kontakt@studentski-portal.hr";
  });
})();

/* ======================================================
   AUTH FORMS: LOGIN + REGISTER (demo)
====================================================== */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

function setErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg || "";
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.hidden = false;

  const close = () => { modal.hidden = true; };

  // Close buttons inside modal
  modal.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", close, { once: true });
  });

  // Overlay click closes too
  const overlay = modal.querySelector(".modal-overlay");
  if (overlay) overlay.addEventListener("click", close, { once: true });

  // ESC closes
  const onKey = (e) => {
    if (e.key === "Escape") {
      close();
      document.removeEventListener("keydown", onKey);
    }
  };
  document.addEventListener("keydown", onKey);
}

// LOGIN
(() => {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value;

    setErr("loginEmailErr", "");
    setErr("loginPasswordErr", "");

    let ok = true;

    if (!isValidEmail(email)) {
      setErr("loginEmailErr", "Unesi ispravan email.");
      ok = false;
    }
    if (!pass || pass.length < 6) {
      setErr("loginPasswordErr", "Lozinka mora imati barem 6 znakova.");
      ok = false;
    }

    if (!ok) return;

    form.reset();
    openModal("loginModal");
  });
})();

// REGISTER
(() => {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("regFullName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const pass1 = document.getElementById("regPassword").value;
    const pass2 = document.getElementById("regPassword2").value;
    const terms = document.getElementById("regTerms").checked;

    setErr("regFullNameErr", "");
    setErr("regEmailErr", "");
    setErr("regPasswordErr", "");
    setErr("regPassword2Err", "");
    setErr("regTermsErr", "");

    let ok = true;

    if (name.length < 3 || !name.includes(" ")) {
      setErr("regFullNameErr", "Unesi ime i prezime (npr. Ivan Horvat).");
      ok = false;
    }
    if (!isValidEmail(email)) {
      setErr("regEmailErr", "Unesi ispravan email.");
      ok = false;
    }
    if (!pass1 || pass1.length < 6) {
      setErr("regPasswordErr", "Lozinka mora imati barem 6 znakova.");
      ok = false;
    }
    if (pass2 !== pass1) {
      setErr("regPassword2Err", "Lozinke se ne podudaraju.");
      ok = false;
    }
    if (!terms) {
      setErr("regTermsErr", "Moraš prihvatiti uvjete.");
      ok = false;
    }

    if (!ok) return;

    form.reset();
    openModal("registerModal");
  });
})();

