/* ============================================================
   TIME APPLIANCE REPAIR — SHARED COMPONENTS
   Inject via: TAR.injectNav(), TAR.injectFooter()
   ============================================================ */

window.TAR = window.TAR || {};

/* ─── CONFIG ─── */
TAR.config = {
  phone:    '(980) 990-2911',
  phoneTel: 'tel:+19809902911',
  email:    'timeappliancerepair@gmail.com',
  city:     'Charlotte, NC',
  brand:    'Time Appliance Repair',
};

/* ─── NAV HTML ─── */
TAR.navHTML = `
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <img src="/images/logo.png" alt="Time Appliance Repair Logo" width="160" height="44">
    </a>

    <div class="nav-links">
      <div class="nav-dropdown">
        <a href="/services/" class="nav-link">Services ▾</a>
        <div class="nav-dropdown-menu">
          <a href="/refrigerator-repair/" class="nav-dropdown-item">🧊 Refrigerator Repair</a>
          <a href="/washer-repair/" class="nav-dropdown-item">🫧 Washer Repair</a>
          <a href="/dryer-repair/" class="nav-dropdown-item">🌀 Dryer Repair</a>
          <a href="/dishwasher-repair/" class="nav-dropdown-item">🍽️ Dishwasher Repair</a>
          <a href="/oven-repair/" class="nav-dropdown-item">🔥 Oven Repair</a>
          <a href="/freezer-repair/" class="nav-dropdown-item">❄️ Freezer Repair</a>
          <a href="/ice-maker-repair/" class="nav-dropdown-item">🧊 Ice Maker Repair</a>
          <a href="/range-repair/" class="nav-dropdown-item">🍳 Range Repair</a>
          <a href="/cooktop-repair/" class="nav-dropdown-item">🔥 Cooktop Repair</a>
          <a href="/wine-cooler-repair/" class="nav-dropdown-item">🍷 Wine Cooler Repair</a>
        </div>
      </div>

      <div class="nav-dropdown">
        <a href="/brands/" class="nav-link">Brands ▾</a>
        <div class="nav-dropdown-menu" style="min-width:260px; grid-template-columns:1fr 1fr;">
          <a href="/sub-zero-appliance-repair/" class="nav-dropdown-item">Sub-Zero</a>
          <a href="/wolf-appliance-repair/" class="nav-dropdown-item">Wolf</a>
          <a href="/thermador-appliance-repair/" class="nav-dropdown-item">Thermador</a>
          <a href="/bosch-appliance-repair/" class="nav-dropdown-item">Bosch</a>
          <a href="/miele-appliance-repair/" class="nav-dropdown-item">Miele</a>
          <a href="/lg-appliance-repair/" class="nav-dropdown-item">LG</a>
          <a href="/samsung-appliance-repair/" class="nav-dropdown-item">Samsung</a>
          <a href="/whirlpool-appliance-repair/" class="nav-dropdown-item">Whirlpool</a>
          <a href="/kitchenaid-appliance-repair/" class="nav-dropdown-item">KitchenAid</a>
          <a href="/ge-monogram-appliance-repair/" class="nav-dropdown-item">GE Monogram</a>
        </div>
      </div>

      <div class="nav-dropdown">
        <a href="/service-areas/" class="nav-link">Service Areas ▾</a>
        <div class="nav-dropdown-menu" style="min-width:260px; grid-template-columns:1fr 1fr;">
          <a href="/service-areas/" class="nav-dropdown-item" style="grid-column:1/-1;color:var(--orange);font-weight:700;">📍 All Service Areas</a>
          <a href="/charlotte-appliance-repair/" class="nav-dropdown-item">Charlotte</a>
          <a href="/ballantyne-appliance-repair/" class="nav-dropdown-item">Ballantyne</a>
          <a href="/matthews-appliance-repair/" class="nav-dropdown-item">Matthews</a>
          <a href="/mint-hill-appliance-repair/" class="nav-dropdown-item">Mint Hill</a>
          <a href="/huntersville-appliance-repair/" class="nav-dropdown-item">Huntersville</a>
          <a href="/cornelius-appliance-repair/" class="nav-dropdown-item">Cornelius</a>
          <a href="/davidson-appliance-repair/" class="nav-dropdown-item">Davidson</a>
          <a href="/mooresville-appliance-repair/" class="nav-dropdown-item">Mooresville</a>
          <a href="/concord-appliance-repair/" class="nav-dropdown-item">Concord</a>
          <a href="/fort-mill-appliance-repair/" class="nav-dropdown-item">Fort Mill SC</a>
          <a href="/tega-cay-appliance-repair/" class="nav-dropdown-item">Tega Cay SC</a>
          <a href="/indian-land-appliance-repair/" class="nav-dropdown-item">Indian Land SC</a>
        </div>
      </div>

      <a href="/faq/" class="nav-link">FAQ</a>
      <a href="/blog/" class="nav-link">Blog</a>
      <a href="/index.html#reviews" class="nav-link">Reviews</a>
    </div>

    <div class="nav-cta">
      <a href="${TAR.config.phoneTel}" class="nav-phone" data-track="nav_phone_click">
        📞 ${TAR.config.phone}
      </a>
      <a href="#book" class="btn btn-primary btn-sm" data-track="nav_book_click">Book Now</a>
    </div>

    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Nav -->
<div class="mobile-nav" id="mobile-nav">
  <div class="mobile-nav-parent">
    <a href="/services/" class="mobile-nav-link">
      Services
      <button class="mobile-nav-toggle">+</button>
    </a>
    <div class="mobile-nav-sub">
      <a href="/refrigerator-repair/" class="mobile-nav-sub-link">Refrigerator Repair</a>
      <a href="/washer-repair/" class="mobile-nav-sub-link">Washer Repair</a>
      <a href="/dryer-repair/" class="mobile-nav-sub-link">Dryer Repair</a>
      <a href="/dishwasher-repair/" class="mobile-nav-sub-link">Dishwasher Repair</a>
      <a href="/oven-repair/" class="mobile-nav-sub-link">Oven Repair</a>
      <a href="/freezer-repair/" class="mobile-nav-sub-link">Freezer Repair</a>
      <a href="/ice-maker-repair/" class="mobile-nav-sub-link">Ice Maker Repair</a>
      <a href="/range-repair/" class="mobile-nav-sub-link">Range Repair</a>
      <a href="/cooktop-repair/" class="mobile-nav-sub-link">Cooktop Repair</a>
      <a href="/wine-cooler-repair/" class="mobile-nav-sub-link">Wine Cooler Repair</a>
    </div>
  </div>
  <div class="mobile-nav-parent">
    <a href="/brands/" class="mobile-nav-link">
      Brands
      <button class="mobile-nav-toggle">+</button>
    </a>
    <div class="mobile-nav-sub">
      <a href="/sub-zero-appliance-repair/" class="mobile-nav-sub-link">Sub-Zero</a>
      <a href="/wolf-appliance-repair/" class="mobile-nav-sub-link">Wolf</a>
      <a href="/thermador-appliance-repair/" class="mobile-nav-sub-link">Thermador</a>
      <a href="/bosch-appliance-repair/" class="mobile-nav-sub-link">Bosch</a>
      <a href="/miele-appliance-repair/" class="mobile-nav-sub-link">Miele</a>
      <a href="/lg-appliance-repair/" class="mobile-nav-sub-link">LG</a>
      <a href="/samsung-appliance-repair/" class="mobile-nav-sub-link">Samsung</a>
      <a href="/whirlpool-appliance-repair/" class="mobile-nav-sub-link">Whirlpool</a>
    </div>
  </div>
  <div class="mobile-nav-parent">
    <a href="/service-areas/" class="mobile-nav-link">
      Service Areas
      <button class="mobile-nav-toggle">+</button>
    </a>
    <div class="mobile-nav-sub">
      <a href="/service-areas/" class="mobile-nav-sub-link" style="color:var(--orange);font-weight:700;">📍 All Service Areas</a>
      <a href="/charlotte-appliance-repair/" class="mobile-nav-sub-link">Charlotte</a>
      <a href="/ballantyne-appliance-repair/" class="mobile-nav-sub-link">Ballantyne</a>
      <a href="/matthews-appliance-repair/" class="mobile-nav-sub-link">Matthews</a>
      <a href="/huntersville-appliance-repair/" class="mobile-nav-sub-link">Huntersville</a>
      <a href="/mint-hill-appliance-repair/" class="mobile-nav-sub-link">Mint Hill</a>
      <a href="/fort-mill-appliance-repair/" class="mobile-nav-sub-link">Fort Mill SC</a>
      <a href="/tega-cay-appliance-repair/" class="mobile-nav-sub-link">Tega Cay SC</a>
    </div>
  </div>
  <a href="/faq/" class="mobile-nav-link">FAQ</a>
  <a href="/blog/" class="mobile-nav-link">Blog</a>
  <a href="/index.html#reviews" class="mobile-nav-link">Reviews</a>

  <div class="mobile-nav-cta">
    <a href="${TAR.config.phoneTel}" class="btn btn-primary btn-lg btn-full">
      📞 Call ${TAR.config.phone}
    </a>
    <a href="#book" class="btn btn-outline btn-lg btn-full">Book Appointment</a>
  </div>
</div>

<!-- Sticky Mobile CTA Bar — Always visible on mobile -->
<div class="sticky-mobile" id="sticky-mobile">
  <div class="sticky-mobile-inner">
    <a href="tel:+19809902911" class="sticky-btn-call" data-track="sticky_call">
      <span class="scta-label">CALL NOW</span>
      <span class="scta-number">(980) 990-2911</span>
    </a>
    <button class="sticky-btn-book" id="sticky-book-btn" data-track="sticky_book" onclick="TAR.scrollToForm()">
      <span class="scta-label">TAP TO</span>
      <span class="scta-text">BOOK APPOINTMENT</span>
    </button>
  </div>
</div>
`;

/* ─── FOOTER HTML ─── */
TAR.footerHTML = `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-logo">
        <img src="/images/logo.png" alt="Time Appliance Repair" width="160" height="48">
      </div>
      <p class="footer-desc">
        Charlotte's trusted appliance repair experts. Same-day service, upfront pricing, 
        and a warranty you can count on. Serving Charlotte and surrounding areas.
      </p>
      <a href="${TAR.config.phoneTel}" class="footer-phone">${TAR.config.phone}</a>
      <a href="mailto:${TAR.config.email}" class="footer-email">${TAR.config.email}</a>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="Facebook">f</a>
        <a href="#" class="social-link" aria-label="Instagram">ig</a>
        <a href="#" class="social-link" aria-label="Google">G</a>
        <a href="#" class="social-link" aria-label="Yelp">Y</a>
      </div>
    </div>

    <div>
      <p class="footer-h">Services</p>
      <a href="/refrigerator-repair/" class="footer-link">Refrigerator Repair</a>
      <a href="/washer-repair/" class="footer-link">Washer Repair</a>
      <a href="/dryer-repair/" class="footer-link">Dryer Repair</a>
      <a href="/dishwasher-repair/" class="footer-link">Dishwasher Repair</a>
      <a href="/oven-repair/" class="footer-link">Oven Repair</a>
      <a href="/range-repair/" class="footer-link">Range Repair</a>
      <a href="/cooktop-repair/" class="footer-link">Cooktop Repair</a>
      <a href="/freezer-repair/" class="footer-link">Freezer Repair</a>
      <a href="/ice-maker-repair/" class="footer-link">Ice Maker Repair</a>
      <a href="/wine-cooler-repair/" class="footer-link">Wine Cooler Repair</a>
    </div>

    <div>
      <p class="footer-h">Service Areas</p>
      <a href="/service-areas/" class="footer-link" style="color:var(--orange);font-weight:600;">📍 All Service Areas →</a>
      <a href="/charlotte-appliance-repair/" class="footer-link">Charlotte</a>
      <a href="/ballantyne-appliance-repair/" class="footer-link">Ballantyne</a>
      <a href="/matthews-appliance-repair/" class="footer-link">Matthews</a>
      <a href="/mint-hill-appliance-repair/" class="footer-link">Mint Hill</a>
      <a href="/indian-trail-appliance-repair/" class="footer-link">Indian Trail</a>
      <a href="/huntersville-appliance-repair/" class="footer-link">Huntersville</a>
      <a href="/cornelius-appliance-repair/" class="footer-link">Cornelius</a>
      <a href="/davidson-appliance-repair/" class="footer-link">Davidson</a>
      <a href="/mooresville-appliance-repair/" class="footer-link">Mooresville</a>
      <a href="/fort-mill-appliance-repair/" class="footer-link">Fort Mill SC</a>
    </div>

    <div>
      <p class="footer-h">Company</p>
      <a href="/index.html#about" class="footer-link">About Us</a>
      <a href="/index.html#reviews" class="footer-link">Reviews</a>
      <a href="/faq/" class="footer-link">FAQ</a>
      <a href="/index.html#contact" class="footer-link">Contact</a>
      <br>
      <p class="footer-h" style="margin-top:20px;">Legal</p>
      <a href="/privacy-policy/" class="footer-link">Privacy Policy</a>
      <a href="/terms-of-service/" class="footer-link">Terms of Service</a>
      <a href="/warranty-policy/" class="footer-link">Warranty Policy</a>
      <a href="/accessibility/" class="footer-link">Accessibility</a>
    </div>
  </div>

  <div class="footer-bottom" style="max-width:1300px; margin:60px auto 0; padding:24px; border-top:1px solid rgba(255,255,255,.08); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
    <p class="footer-copy">© <span class="current-year"></span> Time Appliance Repair. All rights reserved. Serving Charlotte, NC and surrounding areas.</p>
    <div class="footer-legal">
      <a href="/privacy-policy/">Privacy</a>
      <a href="/terms-of-service/">Terms</a>
      <a href="/cookie-policy/">Cookies</a>
      <a href="/accessibility/">Accessibility</a>
    </div>
  </div>
</footer>

<!-- Cookie Banner -->
<div id="cookie-banner" style="display:none; position:fixed; bottom:80px; left:0; right:0; background:var(--gray-900); border-top:2px solid var(--orange); padding:16px 24px; z-index:997; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
  <p style="font-size:.875rem; color:rgba(255,255,255,.8); margin:0;">
    We use cookies to improve your experience. 
    <a href="/cookie-policy/" style="color:var(--orange);">Learn more</a>
  </p>
  <button id="accept-cookies" class="btn btn-primary btn-sm">Accept</button>
</div>

<!-- Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Time Appliance Repair",
  "@id": "https://timeapplianceservice.com",
  "url": "https://timeapplianceservice.com",
  "telephone": "+19809902911",
  "email": "timeappliancerepair@gmail.com",
  "image": "https://timeapplianceservice.com/images/logo.png",
  "description": "Professional appliance repair service in Charlotte, NC. Same-day service for refrigerators, washers, dryers, dishwashers, ovens and more. Serving Charlotte and surrounding areas.",
  "areaServed": [
    {"@type": "City", "name": "Charlotte"},
    {"@type": "City", "name": "Ballantyne"},
    {"@type": "City", "name": "Matthews"},
    {"@type": "City", "name": "Mint Hill"},
    {"@type": "City", "name": "Huntersville"},
    {"@type": "City", "name": "Cornelius"},
    {"@type": "City", "name": "Davidson"},
    {"@type": "City", "name": "Mooresville"},
    {"@type": "City", "name": "Concord"},
    {"@type": "City", "name": "Fort Mill"}
  ],
  "serviceType": [
    "Refrigerator Repair", "Washer Repair", "Dryer Repair",
    "Dishwasher Repair", "Oven Repair", "Range Repair",
    "Cooktop Repair", "Freezer Repair", "Ice Maker Repair", "Wine Cooler Repair"
  ],
  "openingHours": "Mo-Sa 07:00-20:00",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check",
  "sameAs": [
    "https://www.facebook.com/timeappliancerepair",
    "https://www.instagram.com/timeappliancerepair"
  ]
}
</script>
`;

/* ─── INJECT FUNCTIONS ─── */
TAR.injectNav = function () {
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = TAR.navHTML;
};

TAR.injectFooter = function () {
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = TAR.footerHTML;
};

/* ─── LEAD FORM HTML ─── */
TAR.leadFormHTML = `
<div class="lead-form-box" id="book">
  <p class="form-title">Get Fast Service Today</p>
  <p class="form-subtitle">Fill out the form — we'll contact you within 60 minutes.</p>
  <div class="discount-note">🎁 Mention this form to save <strong>$50 OFF Labor</strong></div>

  <form class="lead-form" novalidate autocomplete="on">
    <!-- Honeypot anti-spam (hidden from humans, bots fill it) -->
    <div style="position:absolute;left:-9999px;top:-9999px;" aria-hidden="true">
      <input type="text" name="website" tabindex="-1" autocomplete="off" value="">
    </div>

    <!-- Row 1: Name + Phone -->
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label" for="lf-name">Your Name <span>*</span></label>
        <input type="text" id="lf-name" name="name" class="form-control"
               placeholder="John Smith" autocomplete="name" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="lf-phone">Phone Number <span>*</span></label>
        <input type="tel" id="lf-phone" name="phone" class="form-control"
               placeholder="(980) 000-0000" autocomplete="tel" required
               pattern="[0-9\\s\\-\\(\\)\\+]{7,}">
      </div>
    </div>

    <!-- Row 2: Email + Address -->
    <div class="form-group">
      <label class="form-label" for="lf-email">Email Address</label>
      <input type="email" id="lf-email" name="email" class="form-control"
             placeholder="you@email.com" autocomplete="email">
    </div>

    <div class="form-group">
      <label class="form-label" for="lf-address">Service Address <span>*</span></label>
      <input type="text" id="lf-address" name="address" class="form-control"
             placeholder="123 Main St, Charlotte NC" autocomplete="street-address" required>
    </div>

    <!-- Row 3: Appliance + Brand -->
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label" for="lf-appliance">Appliance Type <span>*</span></label>
        <select id="lf-appliance" name="appliance_type" class="form-control" required>
          <option value="">Select appliance...</option>
          <option>Refrigerator</option>
          <option>Washer</option>
          <option>Dryer</option>
          <option>Dishwasher</option>
          <option>Oven / Range</option>
          <option>Cooktop</option>
          <option>Freezer</option>
          <option>Ice Maker</option>
          <option>Wine Cooler</option>
          <option>Other</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="lf-brand">Appliance Brand</label>
        <select id="lf-brand" name="brand" class="form-control">
          <option value="">Select brand...</option>
          <option>Sub-Zero</option>
          <option>Wolf</option>
          <option>Thermador</option>
          <option>Bosch</option>
          <option>Miele</option>
          <option>Viking</option>
          <option>GE Monogram</option>
          <option>GE Cafe</option>
          <option>JennAir</option>
          <option>KitchenAid</option>
          <option>Whirlpool</option>
          <option>Maytag</option>
          <option>LG</option>
          <option>Samsung</option>
          <option>Frigidaire</option>
          <option>Electrolux</option>
          <option>Fisher &amp; Paykel</option>
          <option>Other</option>
        </select>
      </div>
    </div>

    <!-- Problem description -->
    <div class="form-group">
      <label class="form-label" for="lf-problem">Describe the Problem <span>*</span></label>
      <textarea id="lf-problem" name="problem" class="form-control" rows="3"
                placeholder="Tell us what's happening — e.g. 'refrigerator stopped cooling overnight'" required></textarea>
    </div>

    <!-- Preferred time -->
    <div class="form-group">
      <label class="form-label" for="lf-time">Preferred Appointment Time</label>
      <select id="lf-time" name="appointment_time" class="form-control">
        <option value="">Select preferred time...</option>
        <option>Today – Morning (8am–12pm)</option>
        <option>Today – Afternoon (12pm–5pm)</option>
        <option>Today – Evening (5pm–8pm)</option>
        <option>Tomorrow – Morning</option>
        <option>Tomorrow – Afternoon</option>
        <option>This Week – Flexible</option>
        <option>Next Week – Flexible</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary btn-lg btn-full" data-track="form_submit">
      🚀 Request Service — Get $50 Off
    </button>

    <p style="font-size:.72rem;color:var(--gray-400);margin-top:10px;text-align:center;line-height:1.5;">
      By submitting you agree to our
      <a href="/privacy-policy/" style="color:var(--orange);">Privacy Policy</a>.
      We only contact you about your repair request.
    </p>
  </form>
</div>
`;

/* Auto-inject on DOM ready */
/* ─── SCROLL TO FORM (Book Appointment) ─── */
TAR.scrollToForm = function () {
  // Try to find the form on the current page
  const targets = [
    document.getElementById('book'),
    document.querySelector('.lead-form-box'),
    document.querySelector('.lead-form'),
    document.querySelector('#contact'),
  ];
  const target = targets.find(el => el !== null);

  if (target) {
    const navH = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')) || 64;
    const ctaH = window.innerWidth <= 768
      ? parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--cta-bar-h')) || 46
      : 0;
    const offset = navH + ctaH + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    // Focus first input after scroll lands
    setTimeout(() => {
      const firstInput = target.querySelector('input:not([type="hidden"]), select, textarea');
      if (firstInput) firstInput.focus({ preventScroll: true });
    }, 650);
  } else {
    // No form on this page — redirect to homepage booking section
    window.location.href = '/index.html#book';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  TAR.injectNav();
  TAR.injectFooter();

  // Inject lead form wherever placeholder exists
  document.querySelectorAll('.lead-form-placeholder').forEach(el => {
    el.innerHTML = TAR.leadFormHTML;
  });
  // Note: hamburger binding is handled exclusively by main.js (event delegation)
  // to avoid double-binding race conditions.
});
