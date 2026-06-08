/* ============================================================
   TIME APPLIANCE REPAIR — MAIN JS
   Lead form: Web3Forms → timeappliancerepair@gmail.com
   Backup:    Google Apps Script → Google Sheets
   ============================================================ */

(function () {
  'use strict';

  /* ─── CONFIG ─────────────────────────────────────────────────── */
  const CFG = {
    // Web3Forms — получи бесплатный ключ за 1 минуту:
    // 1. Зайди на https://web3forms.com
    // 2. Введи timeappliancerepair@gmail.com
    // 3. Нажми "Create Access Key"  
    // 4. Скопируй ключ и вставь сюда:
    WEB3FORMS_KEY: '8932e55d-0bd6-4c13-9fb9-afc97478f601',

    // Google Apps Script (для бэкапа в Google Sheets — опционально):
    SHEETS_WEBHOOK: 'YOUR_GOOGLE_APPS_SCRIPT_URL',

    EMAIL:         'timeappliancerepair@gmail.com',
    PHONE_DISPLAY: '(980) 990-2911',
    PHONE_TEL:     'tel:+19809902911',
    DEDUP_SECONDS: 30,
  };

  /* ─── NAV SCROLL ─────────────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── HAMBURGER / MOBILE NAV ─────────────────────────────────── */
  // Single authoritative handler — runs after components.js injects the nav.
  // Uses event delegation so it works regardless of injection timing.

  let menuOpen = false;

  function openMenu() {
    const h = document.getElementById('hamburger');
    const m = document.getElementById('mobile-nav');
    if (!h || !m) return;
    menuOpen = true;
    h.classList.add('open');
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    const h = document.getElementById('hamburger');
    const m = document.getElementById('mobile-nav');
    if (!h || !m) return;
    menuOpen = false;
    h.classList.remove('open');
    m.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Delegated click on hamburger button
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('#hamburger');
    if (btn) {
      e.stopPropagation();
      menuOpen ? closeMenu() : openMenu();
      return;
    }
    // Close when clicking mobile-nav backdrop (the nav element itself, not its children)
    const mNav = document.getElementById('mobile-nav');
    if (mNav && mNav.classList.contains('open') && e.target === mNav) {
      closeMenu();
      return;
    }
    // Close when clicking a mobile nav link
    if (e.target.closest('.mobile-nav-link') || e.target.closest('.mobile-nav-sub-link')) {
      const toggle = e.target.closest('.mobile-nav-toggle');
      if (!toggle) closeMenu(); // don't close if tapping the sub-menu toggle
    }
  }, true); // capture phase so it fires before anything else

  // Mobile sub-menus (accordion expand/collapse)
  document.addEventListener('click', e => {
    const btn = e.target.closest('.mobile-nav-toggle');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const sub = btn.closest('.mobile-nav-parent')?.querySelector('.mobile-nav-sub');
    if (sub) {
      sub.classList.toggle('open');
      btn.textContent = sub.classList.contains('open') ? '−' : '+';
    }
  });

  /* ─── FAQ ACCORDION ──────────────────────────────────────────── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });

  /* ─── REVIEWS SLIDER ─────────────────────────────────────────── */
  function initSlider() {
    const track = document.querySelector('.reviews-track');
    if (!track) return;
    const cards = track.querySelectorAll('.review-card');
    if (!cards.length) return;
    let current = 0;
    const visible = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3;
    const maxIdx  = () => Math.max(0, cards.length - visible());
    const goTo = idx => {
      current = Math.max(0, Math.min(idx, maxIdx()));
      const w = cards[0].offsetWidth + 24;
      track.style.transform = `translateX(-${current * w}px)`;
    };
    document.querySelector('.slider-prev')?.addEventListener('click', () => goTo(current - 1));
    document.querySelector('.slider-next')?.addEventListener('click', () => goTo(current + 1));
    const auto = setInterval(() => goTo(current >= maxIdx() ? 0 : current + 1), 5000);
    window.addEventListener('resize', () => { goTo(0); }, { passive: true });
  }
  document.addEventListener('DOMContentLoaded', initSlider);

  /* ─── SCROLL REVEAL ──────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    els.forEach(el => obs.observe(el));
  });

  /* ─── COUNTER ANIMATION ──────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur = 1800;
        const start = performance.now();
        const tick = now => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
  });

  /* ─── YEAR ────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  });

  /* ─── COOKIE BANNER ──────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    if (banner && !localStorage.getItem('tar_cookies')) {
      banner.style.display = 'flex';
      document.getElementById('accept-cookies')?.addEventListener('click', () => {
        localStorage.setItem('tar_cookies', '1');
        banner.style.display = 'none';
      });
    }
  });

  /* ─── LAZY IMAGES ─────────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', () => {
      const imgs = document.querySelectorAll('img[data-src]');
      if (!imgs.length) return;
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.src = e.target.dataset.src;
            e.target.removeAttribute('data-src');
            obs.unobserve(e.target);
          }
        });
      });
      imgs.forEach(img => obs.observe(img));
    });
  }

  /* ─── TRACKING ────────────────────────────────────────────────── */
  function track(event, label) {
    try {
      if (window.gtag) {
        window.gtag('event', event, { event_category: 'Lead', event_label: label });
      }
      if (window.fbq) window.fbq('track', 'Lead');
    } catch(e) {}
  }

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-track]');
    if (el) track(el.dataset.track, el.textContent.trim().slice(0, 60));
    if (e.target.closest('a[href^="tel:"]')) track('phone_click', 'call');
  });

  /* ──────────────────────────────────────────────────────────────
     LEAD FORM — Web3Forms (прямая отправка на Gmail)
  ────────────────────────────────────────────────────────────── */

  /* Anti-spam rate-limit */
  let lastSubmitTime = 0;

  /* UTM capture */
  function getUTM() {
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source:   p.get('utm_source')   || '',
      utm_medium:   p.get('utm_medium')   || '',
      utm_campaign: p.get('utm_campaign') || '',
    };
  }

  /* Collect all form fields into a plain object */
  function collectData(form) {
    const fd  = new FormData(form);
    const d   = Object.fromEntries(fd.entries());
    d.page_url     = window.location.href;
    d.page_title   = document.title;
    d.submitted_at = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    Object.assign(d, getUTM());
    return d;
  }

  /* ── Отправка через Web3Forms API ── */
  async function sendWeb3Forms(data) {
    const payload = {
      access_key: CFG.WEB3FORMS_KEY,

      // Эти поля управляют письмом:
      subject:    `🔧 New Service Request — ${data.appliance_type || 'Appliance'} Repair`,
      from_name:  'Time Appliance Repair Website',

      // Всё содержимое формы:
      name:             data.name        || '',
      phone:            data.phone       || '',
      email:            data.email       || '',
      address:          data.address     || '',
      appliance_type:   data.appliance_type || '',
      brand:            data.brand       || '',
      problem:          data.problem     || '',
      appointment_time: data.appointment_time || '',

      // Мета-данные
      page_url:     data.page_url,
      submitted_at: data.submitted_at,
      utm_source:   data.utm_source   || '',
      utm_medium:   data.utm_medium   || '',
      utm_campaign: data.utm_campaign || '',

      // Redirect after success — отключаем (мы показываем своё сообщение)
      redirect: 'false',

      // Honeypot field name
      botcheck: '',
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok || json.success === false) {
      throw new Error(json.message || `HTTP ${res.status}`);
    }
    return json;
  }

  /* ── Бэкап в Google Sheets (fire-and-forget) ── */
  function saveToSheets(data) {
    if (!CFG.SHEETS_WEBHOOK || CFG.SHEETS_WEBHOOK === 'YOUR_GOOGLE_APPS_SCRIPT_URL') return;
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(CFG.SHEETS_WEBHOOK, blob);
      } else {
        fetch(CFG.SHEETS_WEBHOOK, { method: 'POST', mode: 'no-cors', body: blob }).catch(() => {});
      }
    } catch(e) {}
  }

  /* ── Показ успеха ── */
  function showFormSuccess(form) {
    const box = form.closest('.lead-form-box') || form;

    let el = box.querySelector('.form-success-msg');
    if (!el) {
      el = document.createElement('div');
      el.className = 'form-success-msg';
      el.style.cssText = [
        'background:#22c55e','color:#fff','border-radius:10px',
        'padding:20px 24px','font-family:var(--font-body)','font-size:1rem',
        'font-weight:600','display:flex','align-items:flex-start',
        'gap:12px','margin-top:12px','line-height:1.6',
      ].join(';');
      el.innerHTML =
        '<span style="font-size:1.6rem;flex-shrink:0">✅</span>' +
        '<span>Thank you! Your request has been received.<br>' +
        'We will contact you within <strong>60 minutes</strong>.</span>';
      form.parentNode.insertBefore(el, form.nextSibling);
    }
    el.style.display = 'flex';

    form.style.opacity       = '0.25';
    form.style.pointerEvents = 'none';

    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // GA4 / Ads conversion
    track('form_submit_success', 'lead_form');
    try {
      if (window.gtag)
        window.gtag('event', 'conversion', { send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL' });
      if (window.fbq) window.fbq('track', 'Lead');
    } catch(e) {}
  }

  /* ── Показ ошибки под кнопкой ── */
  function showFormError(form, msg) {
    let el = form.querySelector('.form-error-msg');
    if (!el) {
      el = document.createElement('div');
      el.className = 'form-error-msg';
      el.style.cssText = [
        'background:#fef2f2','color:#dc2626','border:1.5px solid #fca5a5',
        'border-radius:8px','padding:13px 17px','font-size:.9rem',
        'font-weight:600','margin-top:10px','display:flex','gap:8px','align-items:center',
      ].join(';');
      form.appendChild(el);
    }
    el.innerHTML = `⚠️ ${msg}`;
    el.style.display = 'flex';
    setTimeout(() => { if (el) el.style.display = 'none'; }, 7000);
  }

  /* ── Главный обработчик submit ── */
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Honeypot — боты заполняют скрытое поле, люди нет
    if (form.querySelector('[name="website"]')?.value) return;

    // Rate-limit
    const now = Date.now();
    if (now - lastSubmitTime < CFG.DEDUP_SECONDS * 1000) {
      showFormError(form, 'You already submitted recently. Please wait a moment.');
      return;
    }

    // Валидация обязательных полей
    const name  = form.querySelector('[name="name"]')?.value?.trim();
    const phone = form.querySelector('[name="phone"]')?.value?.trim();
    const appli = form.querySelector('[name="appliance_type"]')?.value;

    if (!name) {
      form.querySelector('[name="name"]')?.focus();
      showFormError(form, 'Please enter your name.');
      return;
    }
    if (!phone || phone.replace(/\D/g,'').length < 10) {
      form.querySelector('[name="phone"]')?.focus();
      showFormError(form, 'Please enter a valid phone number (10 digits).');
      return;
    }
    if (!appli) {
      form.querySelector('[name="appliance_type"]')?.focus();
      showFormError(form, 'Please select the appliance type.');
      return;
    }

    // Блокировка кнопки
    const btn     = form.querySelector('[type="submit"]');
    const origTxt = btn.innerHTML;
    btn.innerHTML = '⏳ Sending…';
    btn.disabled  = true;

    const data = collectData(form);
    lastSubmitTime = now;

    try {
      // Проверяем что ключ заменён
      if (!CFG.WEB3FORMS_KEY || CFG.WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Ключ не вставлен — показываем номер телефона вместо технической ошибки
        showFormError(form,
          'To request service please call us: (980) 990-2911 — or email: timeappliancerepair@gmail.com'
        );
        btn.innerHTML = origTxt;
        btn.disabled  = false;
        return;
      }

      await sendWeb3Forms(data);
      saveToSheets(data);       // fire-and-forget бэкап

      showFormSuccess(form);
      form.reset();

    } catch(err) {
      console.error('Form error:', err.message);
      showFormError(form,
        'Something went wrong. Please call us at (980) 990-2911 or try again.'
      );
    } finally {
      btn.innerHTML = origTxt;
      btn.disabled  = false;
    }
  }

  /* Делегированный обработчик — работает для всех форм включая динамически вставленные */
  document.addEventListener('submit', e => {
    if (e.target.classList.contains('lead-form')) handleSubmit(e);
  });

  /* ──────────────────────────────────────────────────────────────
     SMOOTH SCROLL for #hash links
  ────────────────────────────────────────────────────────────── */
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#book' || href === '#book-form') {
      e.preventDefault();
      if (window.TAR && TAR.scrollToForm) TAR.scrollToForm();
      return;
    }
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
      const ctaH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cta-bar-h')) || 46;
      const offset = window.innerWidth <= 768 ? navH + ctaH + 8 : navH + 8;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });

})();
