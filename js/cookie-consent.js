/* Cookie Consent Banner — Azis Digital Hub
   Loads on every page. Blocks analytics until consent is given. */

(function () {
    var CONSENT_KEY = 'azis_cookie_consent';

    // 1. Inject the banner HTML into the page
    function injectBanner() {
        // Avoid duplicate injection if script runs twice
        if (document.getElementById('cookie-banner')) return;

        var bannerHTML =
            '<div id="cookie-banner" style="display:none;">' +
            '<div class="cookie-banner-inner">' +
            '<div class="cookie-banner-text">' +
            'We use cookies to analyse website traffic and improve your experience. ' +
            'Essential cookies are always active. Optional analytics cookies help us ' +
            'understand how visitors use our site. ' +
            'Read our <a href="privacy.html">Privacy Policy</a>.' +
            '</div>' +
            '<div class="cookie-banner-actions">' +
            '<button id="cookie-reject" class="cookie-btn cookie-btn-reject">Reject</button>' +
            '<button id="cookie-accept" class="cookie-btn cookie-btn-accept">Accept</button>' +
            '</div>' +
            '</div>' +
            '</div>';

        var wrapper = document.createElement('div');
        wrapper.innerHTML = bannerHTML;
        document.body.appendChild(wrapper.firstChild);
    }

    // 2. Consent helpers
    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }

    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { }
        var banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'none';
        if (value === 'accepted') loadAnalytics();
    }

    // 3. Analytics loader — fires only after consent
    function loadAnalytics() {
        // Avoid double-loading
        if (window._gaLoaded) return;
        window._gaLoaded = true;

        // Load the GA4 library
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-M4M4ZKG2WJ';
        document.head.appendChild(script);

        // Initialize GA4
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-M4M4ZKG2WJ', {
            anonymize_ip: true
        });

        if (window.console && console.log) {
            console.log('GA4 loaded after consent.');
        }
    }

    // 4. Public function so the footer "Cookie Settings" link works
    window.resetCookieConsent = function () {
        try { localStorage.removeItem(CONSENT_KEY); } catch (e) { }
        location.reload();
    };

    // 5. Init
    function init() {
        injectBanner();
        var banner = document.getElementById('cookie-banner');
        var acceptBtn = document.getElementById('cookie-accept');
        var rejectBtn = document.getElementById('cookie-reject');

        if (!banner || !acceptBtn || !rejectBtn) return;

        var consent = getConsent();
        if (!consent) {
            banner.style.display = 'block';
        } else if (consent === 'accepted') {
            loadAnalytics();
        }

        acceptBtn.addEventListener('click', function () { setConsent('accepted'); });
        rejectBtn.addEventListener('click', function () { setConsent('rejected'); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();