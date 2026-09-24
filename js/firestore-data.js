/* ═══════════════════════════════════════════════
   FIRESTORE DATA OVERRIDE — Azis Digital Hub
   Loads live content from Firestore after page
   load. Falls back to hardcoded data if Firestore
   is empty or unreachable.
   ═══════════════════════════════════════════════ */

(function () {
    'use strict';

    window.addEventListener('load', function () {
        if (typeof window.DB === 'undefined' || !window.DB.ready) {
            console.warn('[firestore-data] DB not ready — using hardcoded data.');
            return;
        }

        console.log('[firestore-data] Loading content from Firestore...');

        // Fetch all collections in parallel
        Promise.all([
            DB.getServices().catch(function (e) {
                console.warn('[firestore-data] Services failed:', e.message);
                return null;
            }),
            DB.getTestimonials().catch(function (e) {
                console.warn('[firestore-data] Testimonials failed:', e.message);
                return null;
            }),
            DB.getPortfolio().catch(function (e) {
                console.warn('[firestore-data] Portfolio failed:', e.message);
                return null;
            })
        ]).then(function (results) {
            var services = results[0];
            var testimonials = results[1];
            var portfolio = results[2];

            var updated = false;

            // ── Override SERVICES ──
            if (services && services.length > 0) {
                console.log('[firestore-data] ' + services.length + ' services loaded');
                window.SERVICES = services.map(function (s) {
                    return {
                        id: s.id || s._id,
                        icon: s.icon || '⚙️',
                        title: s.title || '',
                        desc: s.desc || '',
                        price: s.price || '',
                        category: s.category || 'digital',
                        features: Array.isArray(s.features) ? s.features : [],
                        detail: s.detail || ''
                    };
                });
                updated = true;
            } else {
                console.log('[firestore-data] No services in Firestore — using defaults');
            }

            // ── Override TESTIMONIALS ──
            if (testimonials && testimonials.length > 0) {
                console.log('[firestore-data] ' + testimonials.length + ' testimonials loaded');
                window.TESTIMONIALS = testimonials.map(function (t) {
                    return {
                        text: t.text || '',
                        name: t.name || '',
                        role: t.role || '',
                        initials: t.initials || (t.name || 'XX').substring(0, 2).toUpperCase(),
                        stars: parseInt(t.stars) || 5
                    };
                });
                updated = true;
            }

            // ── Override PORTFOLIO (if used) ──
            if (portfolio && portfolio.length > 0) {
                console.log('[firestore-data] ' + portfolio.length + ' portfolio items loaded');
                window.PORTFOLIO = portfolio;
                updated = true;
            }

            // ── Re-render if anything changed ──
            if (updated && typeof window.refreshAllData === 'function') {
                console.log('[firestore-data] Re-rendering page...');
                window.refreshAllData();
            } else {
                console.log('[firestore-data] Site using hardcoded defaults');
            }
        });
    });
})();