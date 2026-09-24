/* ═══════════════════════════════════════════════
   FIRESTORE DATA LAYER — Azis Digital Hub v2
   Requires these scripts loaded BEFORE this file:
   1. firebase-config.js
   2. firebase-app-compat.js
   3. firebase-firestore-compat.js
   4. firebase-auth-compat.js
   ═══════════════════════════════════════════════ */

(function () {
    'use strict';

    // Check prerequisites
    if (typeof firebase === 'undefined') {
        console.error('[db.js] firebase SDK not loaded. Check script tags in HTML.');
        return;
    }
    if (!window.FIREBASE_CONFIG) {
        console.error('[db.js] FIREBASE_CONFIG not found. Check firebase-config.js.');
        return;
    }

    // Initialize Firebase (once)
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(window.FIREBASE_CONFIG);
        }
    } catch (e) {
        console.error('[db.js] Firebase init failed:', e);
    }

    var _db = firebase.firestore();
    var _auth = firebase.auth();

    // ─── Public API ───
    var DB = {
        ready: true,

        // Auth
        auth: function () { return _auth; },
        signIn: function (email, password) {
            return _auth.signInWithEmailAndPassword(email, password);
        },
        signOut: function () { return _auth.signOut(); },
        onAuthChange: function (cb) { _auth.onAuthStateChanged(cb); },
        currentUser: function () { return _auth.currentUser; },

        // Generic CRUD
        getAll: getAll,
        getById: getById,
        create: create,
        update: update,
        remove: remove,

        // Convenience
        getServices: function () { return getAll('services'); },
        getTestimonials: function () { return getAll('testimonials'); },
        getPortfolio: function () { return getAll('portfolio'); },
        getTemplates: function () { return getAll('templates'); },
        getSettings: function () { return getById('settings', 'main'); }
    };

    function getAll(collection) {
        return _db.collection(collection).get().then(function (snap) {
            var items = [];
            snap.forEach(function (doc) {
                items.push(Object.assign({ _id: doc.id }, doc.data()));
            });
            return items;
        });
    }

    function getById(collection, id) {
        return _db.collection(collection).doc(id).get().then(function (doc) {
            if (!doc.exists) return null;
            return Object.assign({ _id: doc.id }, doc.data());
        });
    }

    function create(collection, data) {
        var id = data._id || data.id;
        if (id) {
            delete data._id;
            return _db.collection(collection).doc(id).set(data).then(function () {
                return Object.assign({ _id: id }, data);
            });
        }
        return _db.collection(collection).add(data).then(function (ref) {
            return Object.assign({ _id: ref.id }, data);
        });
    }

    function update(collection, id, data) {
        return _db.collection(collection).doc(id).update(data);
    }

    function remove(collection, id) {
        return _db.collection(collection).doc(id).delete();
    }

    // Expose globally
    window.DB = DB;
    console.log('[db.js] Ready. Firestore project:', window.FIREBASE_CONFIG.projectId);
})();