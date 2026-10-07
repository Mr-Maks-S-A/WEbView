(function () {
  const projects = window.PROJECTS || [];
  const $ = (id) => document.getElementById(id);
  const gallery = $("gallery");
  const filters = $("filters");
  const modal = $("modal");

  function cover(el, p) {
    el.style.backgroundImage = p.image
      ? `url("${p.image}")`
      : `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})`;
    el.textContent = p.image ? "" : p.title.charAt(0);
  }

  function renderGallery(category) {
    gallery.innerHTML = "";
    projects
      .filter((p) => category === "Все" || p.category === category)
      .forEach((p) => {
        const card = document.createElement("button");
        card.className = "card";
        card.type = "button";
        card.innerHTML = '<div class="cover"></div><div class="card-body"><h3></h3><span class="cat"></span></div>';
        cover(card.querySelector(".cover"), p);
        card.querySelector("h3").textContent = p.title;
        card.querySelector(".cat").textContent = p.category;
        card.addEventListener("click", () => openModal(p));
        gallery.appendChild(card);
      });
  }

  function renderFilters() {
    const cats = ["Все", ...new Set(projects.map((p) => p.category))];
    cats.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (i === 0 ? " active" : "");
      b.textContent = c;
      b.addEventListener("click", () => {
        filters.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        renderGallery(c);
      });
      filters.appendChild(b);
    });
  }

  function openModal(p) {
    cover($("modal-cover"), p);
    $("modal-title").textContent = p.title;
    $("modal-desc").textContent = p.description;
    $("modal-tags").innerHTML = "";
    (p.tags || []).forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      $("modal-tags").appendChild(li);
    });
    const links = $("modal-links");
    links.innerHTML = "";
    const names = { demo: "Демо", code: "Код" };
    Object.entries(p.links || {}).forEach(([k, href]) => {
      const a = document.createElement("a");
      a.className = "btn" + (k === "demo" ? " primary" : "");
      a.href = href;
      a.rel = "noopener";
      a.textContent = names[k] || k;
      links.appendChild(a);
    });
    modal.showModal();
  }

  $("modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

  // Навыки, год
  (window.SKILLS || []).forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    $("skills").appendChild(li);
  });
  $("year").textContent = new Date().getFullYear();

  // Тема
  const root = document.documentElement;
  const saved = (() => { try { return localStorage.getItem("theme"); } catch (e) { return null; } })();
  if (saved) root.dataset.theme = saved;
  $("theme-toggle").addEventListener("click", () => {
    const dark = (root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")) === "dark";
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  renderFilters();
  renderGallery("Все");
})();
