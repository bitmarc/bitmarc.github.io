/* ============================================================
   Comportamiento del sitio: idioma, tema, navegación activa,
   apariciones al hacer scroll y animación de las métricas.

   Script clásico a propósito (no es un módulo ES) para que la
   página también funcione al abrir index.html con file://
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(lang, key) {
    var dict = CONTENT[lang] || CONTENT.es;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
  }

  /* ---------- Idioma ---------- */

  function applyLang(lang) {
    if (lang !== "es" && lang !== "en") lang = "es";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n"));
      if (value !== null) el.textContent = value;
    });

    // data-i18n-attr="aria-label:rail.navAria" (admite varios separados por coma)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var value = t(lang, parts[1].trim());
        if (value !== null) el.setAttribute(parts[0].trim(), value);
      });
    });

    root.setAttribute("lang", lang);
    document.title = t(lang, "meta.title");
    setMeta("name", "description", t(lang, "meta.desc"));
    setMeta("property", "og:title", t(lang, "meta.title"));
    setMeta("property", "og:description", t(lang, "meta.ogDesc"));

    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    syncThemeLabel();

    try { localStorage.setItem("mr-lang", lang); } catch (e) {}

    // Deja el idioma en la URL para poder compartir el enlace.
    // Algunos navegadores rechazan replaceState sobre file://, de ahí el try.
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) {}
  }

  function setMeta(attr, name, value) {
    if (!value) return;
    var el = document.querySelector("meta[" + attr + '="' + name + '"]');
    if (el) el.setAttribute("content", value);
  }

  function currentLang() {
    return root.getAttribute("lang") === "en" ? "en" : "es";
  }

  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  /* ---------- Tema ---------- */

  function syncThemeLabel() {
    var dark = root.getAttribute("data-theme") === "dark";
    var label = t(currentLang(), dark ? "theme.toLight" : "theme.toDark");
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      if (label) btn.setAttribute("aria-label", label);
    });
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("mr-theme", next); } catch (e) {}
      syncThemeLabel();
    });
  });

  /* ---------- Datos de contacto ---------- */

  function wireContact() {
    var email = CONTACT.emailUser + "@" + CONTACT.emailDomain;
    var phone = "+" + CONTACT.phoneCountry + CONTACT.phoneNumber;

    var hrefs = {
      email: "mailto:" + email,
      phone: "tel:" + phone,
      whatsapp: "https://wa.me/" + CONTACT.phoneCountry + CONTACT.phoneNumber,
      linkedin: "https://www.linkedin.com/in/" + CONTACT.linkedin,
      github: "https://github.com/" + CONTACT.github,
      instagram: "https://instagram.com/" + CONTACT.instagram
    };
    var texts = {
      email: email,
      phone: CONTACT.phonePretty,
      linkedin: "linkedin.com/in/" + CONTACT.linkedin,
      github: "github.com/" + CONTACT.github,
      instagram: "instagram.com/" + CONTACT.instagram
    };

    document.querySelectorAll("[data-contact]").forEach(function (el) {
      var key = el.getAttribute("data-contact");
      if (hrefs[key]) el.setAttribute("href", hrefs[key]);
    });
    document.querySelectorAll("[data-contact-text]").forEach(function (el) {
      var key = el.getAttribute("data-contact-text");
      if (texts[key]) el.textContent = texts[key];
    });
  }

  /* ---------- Sección activa en la navegación ---------- */

  function wireScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".rail__nav a"));
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    links.forEach(function (link) {
      byId[link.getAttribute("href").slice(1)] = link;
    });

    function setActive(id) {
      links.forEach(function (link) {
        if (link === byId[id]) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-40% 0px -58% 0px", threshold: 0 });

    document.querySelectorAll(".stream .section").forEach(function (section) {
      observer.observe(section);
    });

    setActive("sobre-mi");
  }

  /* ---------- Apariciones al entrar en pantalla ---------- */

  function wireReveals() {
    var items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
      // El margen inferior positivo dispara la aparición antes de que el
      // elemento entre en pantalla, así al hacer scroll rápido no se ven huecos.
    }, { rootMargin: "0px 0px 18% 0px", threshold: 0 });


    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Métricas: barras y conteo ---------- */

  function countUp(el, to) {
    var duration = 900;
    var start = null;

    function step(now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / duration, 1);
      // Salida suave: rápido al principio, se asienta al final.
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(step);
    }

    el.textContent = "0";
    requestAnimationFrame(step);
  }

  // Fuera de wireDeltas porque los modales también la llaman: el
  // IntersectionObserver no dispara sobre contenido en display:none.
  function revealDelta(delta) {
    if (delta.classList.contains("is-visible")) return;
    delta.classList.add("is-visible");
    if (reduceMotion) return;
    delta.querySelectorAll("[data-count]").forEach(function (el, i) {
      var to = parseInt(el.getAttribute("data-count"), 10);
      if (isNaN(to)) return;
      setTimeout(function () { countUp(el, to); }, i === 0 ? 150 : 400);
    });
  }

  function wireDeltas() {
    var deltas = document.querySelectorAll("[data-delta]");

    if (!("IntersectionObserver" in window)) {
      deltas.forEach(function (d) { d.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        revealDelta(entry.target);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -5% 0px", threshold: 0.5 });

    deltas.forEach(function (d) { observer.observe(d); });
  }

  /* ---------- Modales de proyectos ---------- */

  function lockScroll(on) {
    var d = document.documentElement;
    if (on) {
      var bar = window.innerWidth - d.clientWidth;
      d.style.overflow = "hidden";
      if (bar > 0) d.style.paddingRight = bar + "px";
    } else {
      d.style.overflow = "";
      d.style.paddingRight = "";
    }
  }

  function openModal(dlg) {
    if (typeof dlg.showModal !== "function") return;
    // Ya abierto, o todavía cerrándose: showModal lanzaría InvalidStateError.
    if (dlg.open) return;

    // El observador de apariciones no ve lo que está en display:none,
    // así que el contenido del modal se activa aquí.
    dlg.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });

    lockScroll(true);
    dlg.showModal();
    requestAnimationFrame(function () {
      dlg.classList.add("is-open");
      dlg.querySelectorAll("[data-delta]").forEach(revealDelta);
    });
  }

  function closeModal(dlg) {
    if (!dlg.open) return;
    dlg.classList.remove("is-open");

    var done = false;
    function finish() {
      if (done) return;
      done = true;
      dlg.close();
      lockScroll(false);
    }

    if (reduceMotion) { finish(); return; }
    dlg.addEventListener("transitionend", finish, { once: true });
    setTimeout(finish, 400); // por si la transición no llega a emitirse
  }

  function wireModals() {
    document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dlg = document.getElementById(btn.getAttribute("data-modal-open"));
        if (dlg) openModal(dlg);
      });
    });

    document.querySelectorAll("dialog.modal").forEach(function (dlg) {
      // Esc: se intercepta para que salga con la misma transición.
      dlg.addEventListener("cancel", function (e) {
        e.preventDefault();
        closeModal(dlg);
      });
      // Clic en el fondo, es decir sobre el propio dialog y no sobre el panel.
      dlg.addEventListener("click", function (e) {
        if (e.target === dlg) closeModal(dlg);
      });
      dlg.querySelectorAll("[data-modal-close]").forEach(function (btn) {
        btn.addEventListener("click", function () { closeModal(dlg); });
      });
    });
  }

  /* ---------- Arranque ---------- */

  wireContact();
  applyLang(currentLang());
  wireScrollSpy();
  wireReveals();
  wireDeltas();
  wireModals();
})();
