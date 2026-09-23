/* =====================================================
   やさい畑 サイト共通スクリプト
   - ページ表示フェード / ページ遷移
   - ヘッダー（スクロールで背景付与）／モバイルメニュー
   - ヒーローの「書」を一文字ずつ現す
   - 写真スペース（画像が読み込めたら自動で表示）
   - スクロールで現れるアニメーション（IntersectionObserver）
   - 墨の線・円相を描くアニメーション
   - パララックス
   - きょうの日付と季節（旬のたよりのタブを自動選択）
   - トップへ戻る
   ===================================================== */
(function () {
  "use strict";

  var body = document.body;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.remove("no-js");

  /* ---------- ページ表示 ---------- */
  window.addEventListener("load", function () {
    requestAnimationFrame(function () { body.classList.add("is-ready"); });
  });
  // フォントの読み込みが遅くても表示されるよう保険
  setTimeout(function () { body.classList.add("is-ready"); }, 1500);

  /* ---------- ページ遷移フェード ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a) return;
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#" || a.target === "_blank" || /^(https?:|mailto:|tel:)/.test(href)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    // 同じページ内のアンカー（index.html#about など）はそのまま
    var url = new URL(a.href, location.href);
    if (url.pathname === location.pathname && url.hash) return;
    e.preventDefault();
    body.classList.add("is-leaving");
    setTimeout(function () { window.location.href = href; }, reduceMotion ? 0 : 420);
  });
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) { body.classList.remove("is-leaving"); body.classList.add("is-ready"); }
  });

  /* ---------- ヘッダー ---------- */
  var header = document.querySelector(".header");
  var heroEl = document.querySelector(".hero, .page-hero");
  function updateHeader() {
    if (!header) return;
    var threshold = heroEl ? Math.min(heroEl.offsetHeight - 90, 400) : 40;
    header.classList.toggle("is-solid", window.scrollY > threshold);
  }
  updateHeader();

  /* ---------- 現在ページのナビ強調 ---------- */
  var page = body.getAttribute("data-page");
  if (page) {
    document.querySelectorAll('.nav a[data-nav="' + page + '"], .mobile-nav a[data-nav="' + page + '"]').forEach(function (a) {
      a.classList.add("is-current");
    });
  }

  /* ---------- モバイルメニュー ---------- */
  var menuBtn = document.querySelector(".menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = body.classList.toggle("menu-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });
    document.querySelectorAll(".mobile-nav a").forEach(function (a) {
      a.addEventListener("click", function () { body.classList.remove("menu-open"); menuBtn.setAttribute("aria-expanded", "false"); });
    });
  }

  /* ---------- ヒーローの書を一文字ずつ ---------- */
  document.querySelectorAll("[data-split]").forEach(function (el) {
    var text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    el.textContent = "";
    Array.from(text).forEach(function (ch, i) {
      var s = document.createElement("span");
      s.className = "ch";
      s.style.setProperty("--i", i);
      s.setAttribute("aria-hidden", "true");
      s.textContent = ch;
      el.appendChild(s);
    });
  });

  /* ---------- 写真スペース：画像が読めたら表示 ---------- */
  document.querySelectorAll(".photo img").forEach(function (img) {
    function show() { var f = img.closest(".photo"); if (f) f.classList.add("has-img"); }
    if (img.complete && img.naturalWidth > 0) { show(); }
    else { img.addEventListener("load", show); }
  });

  /* ---------- 墨の線・円相：描く準備 ---------- */
  document.querySelectorAll(".draw").forEach(function (svg) {
    svg.querySelectorAll("path, circle").forEach(function (p) {
      var len = 1000;
      try { len = p.getTotalLength(); } catch (err) { /* noop */ }
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
    });
  });
  function drawNow(svg) {
    svg.querySelectorAll("path, circle").forEach(function (p) { p.style.strokeDashoffset = 0; });
  }

  /* ---------- スクロールアニメーション ---------- */
  var revealTargets = document.querySelectorAll(".reveal, .reveal-l, .reveal-r, .reveal-scale, .reveal-img, .stagger, .sho-reveal, .draw");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("draw")) drawNow(entry.target);
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
      if (el.classList.contains("draw")) drawNow(el);
    });
  }

  /* ---------- パララックス ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var toTop = document.querySelector(".to-top");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateHeader();
      if (!reduceMotion) {
        var vh = window.innerHeight;
        parallaxEls.forEach(function (el) {
          var base = el.parentElement || el;
          var rect = base.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > vh) return;
          var speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
          var center = rect.top + rect.height / 2 - vh / 2;
          var shift = center * speed * -1;
          var limit = Math.max(rect.height * 0.12, 30);
          shift = Math.max(-limit, Math.min(limit, shift));
          el.style.transform = "translate3d(0," + shift.toFixed(1) + "px,0)";
        });
      }
      if (toTop) toTop.classList.toggle("is-show", window.scrollY > 600);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- きょうの日付と季節 ---------- */
  var now = new Date();
  var month = now.getMonth() + 1;
  var season = (month >= 3 && month <= 5) ? "spring" : (month >= 6 && month <= 8) ? "summer" : (month >= 9 && month <= 11) ? "autumn" : "winter";
  var seasonName = { spring: "春", summer: "夏", autumn: "秋", winter: "冬" };
  var days = ["日", "月", "火", "水", "木", "金", "土"];
  document.querySelectorAll("[data-today]").forEach(function (el) {
    el.textContent = "きょうは " + month + "月" + now.getDate() + "日（" + days[now.getDay()] + "）。" + seasonName[season] + "の野菜が並ぶ頃です。";
  });

  /* ---------- 旬のたより タブ ---------- */
  var tabs = document.querySelectorAll(".season__tab");
  var panels = document.querySelectorAll(".season__panel");
  function setSeason(key) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-season") === key;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach(function (p) {
      var on = p.getAttribute("data-season") === key;
      p.classList.toggle("is-active", on);
      if (on) {
        // パネル内の stagger をあらためて再生
        p.querySelectorAll(".stagger").forEach(function (s) {
          s.classList.remove("is-visible");
          void s.offsetWidth;
          s.classList.add("is-visible");
        });
      }
    });
  }
  if (tabs.length) {
    tabs.forEach(function (t) {
      if (t.getAttribute("data-season") === season) t.classList.add("is-now");
      t.addEventListener("click", function () { setSeason(t.getAttribute("data-season")); });
    });
    setSeason(season);
  }

  /* ---------- トップへ戻る ---------- */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }
})();
