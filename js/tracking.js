/* ============================================================
   TRACKING — GA4 / Google Ads
   Leave the IDs empty until analytics / ads are set up:
   while empty, this script sends nothing.
   Lead conversion fires ONLY on /thank-you/, once per submission.
   ============================================================ */
(function () {
  'use strict';

  var CFG = {
    GA4_ID:         '',   // e.g. 'G-XXXXXXXXXX'
    ADS_ID:         '',   // e.g. 'AW-1234567890'
    ADS_LEAD_LABEL: '',   // conversion label for the form lead (thank-you page)
    ADS_CALL_LABEL: ''    // conversion label for phone-click
  };

  var ids = [CFG.GA4_ID, CFG.ADS_ID].filter(Boolean);
  if (!ids.length) {
    if (/^\/thank-you\/?$/.test(location.pathname)) {
      try { sessionStorage.removeItem('tar_lead_ctx'); } catch (e) {}
    }
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ids[0]);
  document.head.appendChild(s);
  window.gtag('js', new Date());
  ids.forEach(function (id) { window.gtag('config', id); });

  // Phone click (all pages)
  document.addEventListener('click', function (e) {
    if (!e.target.closest('a[href^="tel:"]')) return;
    window.gtag('event', 'phone_click', { page_path: location.pathname });
    if (CFG.ADS_ID && CFG.ADS_CALL_LABEL) {
      window.gtag('event', 'conversion', { send_to: CFG.ADS_ID + '/' + CFG.ADS_CALL_LABEL });
    }
  });

  // Lead conversion — thank-you page only, consumed once
  if (/^\/thank-you\/?$/.test(location.pathname)) {
    var raw = null;
    try {
      raw = sessionStorage.getItem('tar_lead_ctx');
      sessionStorage.removeItem('tar_lead_ctx');
    } catch (err) {}
    if (!raw) return;
    var ctx = {};
    try { ctx = JSON.parse(raw) || {}; } catch (err2) {}
    window.gtag('event', 'generate_lead', {
      equipment_type: ctx.equipment || '',
      landing_page:   ctx.landing   || '',
      lead_source:    ctx.source    || '',
      device_type:    ctx.device    || ''
    });
    if (CFG.ADS_ID && CFG.ADS_LEAD_LABEL) {
      window.gtag('event', 'conversion', { send_to: CFG.ADS_ID + '/' + CFG.ADS_LEAD_LABEL });
    }
  }
})();
