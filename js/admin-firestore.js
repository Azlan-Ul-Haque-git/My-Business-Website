/* ═══════════════════════════════════════════════
   ADMIN FIRESTORE CRUD — Azis Digital Hub
   Replaces localStorage with real cloud storage.
   Requires: firebase-config.js, db.js, admin-auth.js
   ═══════════════════════════════════════════════ */

(function () {
    'use strict';

    if (!window.DB) {
        console.error('[admin-firestore] DB not loaded');
        return;
    }

    // ─── State ───
    var state = {
        enquiries: [],
        services: [],
        testimonials: [],
        portfolio: [],
        templates: [],
        settings: null,
        loading: false
    };

    // ─── Admin API ───
    var AdminStore = {
        state: state,

        // Load all data
        loadAll: loadAll,

        // Enquiries
        getEnquiries: function () { return state.enquiries; },

        // Services
        addService: function (data) { return addItem('services', data); },
        updateService: function (id, data) { return updateItem('services', id, data); },
        deleteService: function (id) { return deleteItem('services', id); },

        // Testimonials
        addTestimonial: function (data) { return addItem('testimonials', data); },
        updateTestimonial: function (id, data) { return updateItem('testimonials', id, data); },
        deleteTestimonial: function (id) { return deleteItem('testimonials', id); },

        // Portfolio
        addPortfolio: function (data) { return addItem('portfolio', data); },
        updatePortfolio: function (id, data) { return updateItem('portfolio', id, data); },
        deletePortfolio: function (id) { return deleteItem('portfolio', id); },

        // Templates
        addTemplate: function (data) { return addItem('templates', data); },
        updateTemplate: function (id, data) { return updateItem('templates', id, data); },
        deleteTemplate: function (id) { return deleteItem('templates', id); },

        // Settings
        saveSettings: saveSettings,

        // Bulk import from hardcoded main.js arrays
        importFromMainJS: importFromMainJS
    };

    // ─── Load all ───
    function loadAll() {
        state.loading = true;
        return Promise.all([
            DB.getAll('services').catch(function () { return []; }),
            DB.getAll('testimonials').catch(function () { return []; }),
            DB.getAll('portfolio').catch(function () { return []; }),
            DB.getAll('templates').catch(function () { return []; }),
            DB.getSettings().catch(function () { return null; })
        ]).then(function (results) {
            state.services = results[0];
            state.testimonials = results[1];
            state.portfolio = results[2];
            state.templates = results[3];
            state.settings = results[4];
            state.loading = false;
            console.log('[admin-firestore] Loaded:',
                state.services.length + ' services,',
                state.testimonials.length + ' testimonials,',
                state.portfolio.length + ' portfolio items');
            return state;
        });
    }

    // ─── Generic CRUD ───
    function addItem(collection, data) {
        return DB.create(collection, data).then(function (result) {
            var idx = state[collection].findIndex(function (x) { return x._id === result._id; });
            if (idx === -1) state[collection].push(result);
            console.log('[admin-firestore] Added to', collection, ':', result._id);
            return result;
        });
    }

    function updateItem(collection, id, data) {
        return DB.update(collection, id, data).then(function () {
            var idx = state[collection].findIndex(function (x) { return x._id === id; });
            if (idx !== -1) state[collection][idx] = Object.assign({}, state[collection][idx], data);
            console.log('[admin-firestore] Updated', collection, '/', id);
        });
    }

    function deleteItem(collection, id) {
        return DB.remove(collection, id).then(function () {
            state[collection] = state[collection].filter(function (x) { return x._id !== id; });
            console.log('[admin-firestore] Deleted', collection, '/', id);
        });
    }

    // ─── Settings ───
    function saveSettings(data) {
        return DB.create('settings', Object.assign({ _id: 'main' }, data)).then(function (result) {
            state.settings = result;
            console.log('[admin-firestore] Settings saved');
            return result;
        });
    }

    // ─── Bulk import from main.js hardcoded arrays ───
    function importFromMainJS() {
        var promises = [];
        var imported = { services: 0, testimonials: 0 };

        // Import SERVICES
        if (typeof SERVICES !== 'undefined' && Array.isArray(SERVICES)) {
            SERVICES.forEach(function (s) {
                // Check if already exists
                var exists = state.services.some(function (existing) { return existing._id === s.id; });
                if (!exists) {
                    promises.push(DB.create('services', {
                        _id: s.id,
                        id: s.id,
                        icon: s.icon,
                        title: s.title,
                        desc: s.desc,
                        price: s.price,
                        category: s.category,
                        features: s.features || [],
                        detail: s.detail || ''
                    }));
                    imported.services++;
                }
            });
        }

        // Import TESTIMONIALS
        if (typeof TESTIMONIALS !== 'undefined' && Array.isArray(TESTIMONIALS)) {
            TESTIMONIALS.forEach(function (t, i) {
                var id = 'testimonial-' + (i + 1);
                var exists = state.testimonials.some(function (existing) { return existing._id === id; });
                if (!exists) {
                    promises.push(DB.create('testimonials', {
                        _id: id,
                        text: t.text,
                        name: t.name,
                        role: t.role,
                        initials: t.initials,
                        stars: t.stars || 5
                    }));
                    imported.testimonials++;
                }
            });
        }

        return Promise.all(promises).then(function () {
            console.log('[admin-firestore] Imported:', imported.services, 'services,', imported.testimonials, 'testimonials');
            return loadAll().then(function () {
                return imported;
            });
        });
    }

    // ─── Expose globally ───
    window.AdminStore = AdminStore;
    console.log('[admin-firestore] Ready');
})();