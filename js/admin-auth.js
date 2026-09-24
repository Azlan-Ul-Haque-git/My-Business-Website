/* ═══════════════════════════════════════════════
   ADMIN AUTH — Azis Digital Hub
   Uses Firebase Auth. Only one authorized admin
   email can log in. Any other account is rejected.
   ═══════════════════════════════════════════════ */

(function () {
    'use strict';

    // ─── Configuration ───
    // The ONLY email allowed to access the admin panel.
    // Change this to your real admin email.
    var AUTHORIZED_ADMIN = 'azisinvites@gmail.com';

    var SESSION_KEY = 'adh_admin_session';
    var SESSION_TIMEOUT = 1000 * 60 * 60 * 8; // 8 hours

    window.AdminAuth = {
        login: login,
        logout: logout,
        checkSession: checkSession,
        requireAuth: requireAuth,
        getEmail: function () { return AUTHORIZED_ADMIN; }
    };

    // ─── Login ───
    function login(email, password) {
        // Email must match the authorized admin
        if (email.toLowerCase() !== AUTHORIZED_ADMIN.toLowerCase()) {
            return Promise.reject(new Error('This email is not authorized as an admin.'));
        }
        // Use Firebase Auth
        return window.DB.signIn(email, password).then(function (user) {
            // Store session timestamp for timeout
            try {
                sessionStorage.setItem(SESSION_KEY, JSON.stringify({
                    email: email,
                    uid: user.user.uid,
                    at: Date.now()
                }));
            } catch (e) { }
            return user;
        });
    }

    // ─── Logout ───
    function logout() {
        try { sessionStorage.removeItem(SESSION_KEY); } catch (e) { }
        return window.DB.signOut();
    }

    // ─── Check session ───
    function checkSession() {
        try {
            var raw = sessionStorage.getItem(SESSION_KEY);
            if (!raw) return null;
            var s = JSON.parse(raw);
            if (Date.now() - s.at > SESSION_TIMEOUT) {
                sessionStorage.removeItem(SESSION_KEY);
                return null;
            }
            return s;
        } catch (e) {
            return null;
        }
    }

    // ─── Guard: redirect to login if not authed ───
    function requireAuth() {
        return new Promise(function (resolve, reject) {
            if (!window.DB) return reject(new Error('db.js not loaded'));
            window.DB.onAuthChange(function (user) {
                if (!user) {
                    reject(new Error('Not authenticated'));
                    return;
                }
                if (user.email.toLowerCase() !== AUTHORIZED_ADMIN.toLowerCase()) {
                    // Sign out unauthorized users immediately
                    window.DB.signOut();
                    reject(new Error('Unauthorized account'));
                    return;
                }
                resolve(user);
            });
        });
    }
})();