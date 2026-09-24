/* ============================================
   AZIS DIGITAL HUB — Core JS
   ============================================ */

/* ── DATA ── */
let SERVICES = [
  {
    id: 'website-design',
    icon: '🌐',
    title: 'Website Design',
    desc: 'Modern, responsive websites crafted for businesses, portfolios, and brands.',
    price: 'Starting ₹1,999',
    category: 'digital',
    features: ['Responsive Design', 'SEO Ready', 'Fast Loading', 'WhatsApp Integration', '1 Year Support'],
    detail: 'We design clean, conversion-focused websites that work beautifully on every device. From landing pages to full business portals — built to impress your clients and rank on Google.'
  },
  {
    id: 'wedding-invitations',
    icon: '💍',
    title: 'Wedding Invitation Videos',
    desc: 'Cinematic digital wedding invitations that captivate your guests before the big day.',
    price: 'Starting ₹499',
    category: 'creative',
    features: ['HD Video Quality', 'Custom Music', 'WhatsApp Shareable', 'Quick 24hr Delivery', 'Multiple Styles'],
    detail: 'Premium animated wedding invitation videos with your photos, music, and details. Share instantly on WhatsApp with stunning first impressions for your guests.'
  },
  {
    id: 'pan-card',
    icon: '🪪',
    title: 'PAN Card Services',
    desc: 'New PAN card application, corrections, and name/address updates — done fast.',
    price: 'Starting ₹149',
    category: 'government',
    features: ['New Application', 'Corrections', 'Lost Card Reprint', 'Status Tracking', 'E-PAN Available'],
    detail: 'Hassle-free PAN card services handled professionally. We fill, verify, and submit your application — saving you time and avoiding rejection errors.'
  },
  {
    id: 'passport',
    icon: '🛂',
    title: 'Passport Services',
    desc: 'Fresh passport applications, renewals, and police verification guidance.',
    price: 'Starting ₹299',
    category: 'government',
    features: ['Fresh Application', 'Renewal Help', 'Tatkal Assistance', 'Document Checklist', 'Online Slot Booking'],
    detail: 'Expert help with passport applications from form filling to appointment booking. We make the process smooth and error-free.'
  },
  {
    id: 'samagra',
    icon: '📋',
    title: 'Samagra ID Services',
    desc: 'Samagra registration, member additions, corrections and eKYC updates.',
    price: 'Starting ₹99',
    category: 'government',
    features: ['New Registration', 'Member Addition', 'Name Correction', 'eKYC Update', 'Family ID'],
    detail: 'Complete Samagra portal assistance for MP residents. We handle corrections, additions, and eKYC updates quickly and accurately.'
  },
  {
    id: 'admission-forms',
    icon: '🎓',
    title: 'Admission Form Filling',
    desc: 'School, college, and university admission forms filled accurately — on time.',
    price: 'Starting ₹99',
    category: 'education',
    features: ['Online & Offline Forms', 'All Boards', 'Document Upload', 'Fee Payment Help', 'Quick Turnaround'],
    detail: 'Never miss a deadline. We fill admission forms for Class 1 to Graduation and beyond — accurately, with all required documents attached.'
  },
  {
    id: 'scholarship-forms',
    icon: '📚',
    title: 'Scholarship Forms',
    desc: 'State and central scholarship form assistance for eligible students.',
    price: 'Starting ₹99',
    category: 'education',
    features: ['MP Scholarship Portal', 'NSP Applications', 'Income Certificate Help', 'Status Check', 'Document Guidance'],
    detail: 'Don\'t miss out on government scholarships. We fill and submit your scholarship applications with complete accuracy to maximize approval chances.'
  },
  {
    id: 'project-cover',
    icon: '📁',
    title: 'Project Cover Pages',
    desc: 'Professional academic and corporate project cover pages designed in minutes.',
    price: 'Starting ₹49',
    category: 'design',
    features: ['College Standards', 'Multiple Formats', 'Print Ready', 'Same Day Delivery', 'Custom Branding'],
    detail: 'Impress your professors with a sleek, properly formatted project cover page. Aligned to your college\'s guidelines and ready to print.'
  },
  {
    id: 'resume-cv',
    icon: '📄',
    title: 'Resume / CV Design',
    desc: 'ATS-friendly, visually sharp resumes that get you shortlisted.',
    price: 'Starting ₹199',
    category: 'design',
    features: ['ATS Optimized', 'Modern Templates', 'LinkedIn Format', 'PDF & Word', 'Unlimited Edits'],
    detail: 'A great resume opens doors. We design professional resumes that are both human-readable and machine-friendly for today\'s job market.'
  },
  {
    id: 'certificate-design',
    icon: '🏅',
    title: 'Certificate Design',
    desc: 'Custom certificates for events, competitions, courses, and achievements.',
    price: 'Starting ₹149',
    category: 'design',
    features: ['Event Certificates', 'Course Completion', 'Appreciation Certs', 'Bulk Orders', 'Print Ready'],
    detail: 'Make every achievement feel official. We design premium certificates with your logo, signature fields, and event details — print ready.'
  },
  {
    id: 'graphic-design',
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Posters, banners, social media creatives, and marketing visuals.',
    price: 'Starting ₹149',
    category: 'creative',
    features: ['Social Media Posts', 'Posters & Banners', 'Flyers', 'YouTube Thumbnails', 'Quick Delivery'],
    detail: 'Eye-catching graphic design for every platform. From festival posts to product banners — built to stop the scroll and drive engagement.'
  },
  {
    id: 'business-branding',
    icon: '💼',
    title: 'Business Branding',
    desc: 'Logo, visiting card, letterhead, and complete brand identity packages.',
    price: 'Starting ₹499',
    category: 'creative',
    features: ['Logo Design', 'Visiting Cards', 'Letterhead', 'Brand Color Palette', 'Brand Guidelines'],
    detail: 'Your brand is your promise. We craft logos and brand identities that are memorable, professional, and built to grow with your business.'
  },
  {
    id: 'form-filling',
    icon: '🖊️',
    title: 'Online Form Filling',
    desc: 'Any government, banking, or portal form — filled correctly and submitted.',
    price: 'Starting ₹79',
    category: 'government',
    features: ['Bank Forms', 'Government Portals', 'Insurance Forms', 'ITR Assistance', 'Error-Free Guarantee'],
    detail: 'Complicated portals and confusing forms — we handle them for you. Accurate, quick, and error-free submission every time.'
  }
];

let TESTIMONIALS = [
  {
    text: 'The wedding invitation video was absolutely stunning. All our relatives were asking who made it. Delivery was in 12 hours!',
    name: 'Priya Sharma',
    role: 'Bride, Jabalpur',
    initials: 'PS',
    stars: 5
  },
  {
    text: 'Got my resume designed here — got shortlisted in 3 companies within a week. Very professional work.',
    name: 'Rahul Gupta',
    role: 'Job Seeker, MP',
    initials: 'RG',
    stars: 5
  },
  {
    text: 'PAN card correction done in one day. No rejection, no back and forth. Very helpful team.',
    name: 'Sunita Verma',
    role: 'Homemaker, Jabalpur',
    initials: 'SV',
    stars: 5
  },
  {
    text: 'Best digital services in Jabalpur. My business logo, visiting cards, and website — all from one place.',
    name: 'Mohd. Arshad',
    role: 'Business Owner',
    initials: 'MA',
    stars: 5
  },
  {
    text: 'Scholarship form filled perfectly. Approved on first submission. Thank you so much!',
    name: 'Anjali Patel',
    role: 'Student, Jabalpur',
    initials: 'AP',
    stars: 5
  },
  {
    text: 'Very fast, very professional. Got my Samagra ID corrected and passport form filled in the same visit.',
    name: 'Deepak Mishra',
    role: 'Government Employee',
    initials: 'DM',
    stars: 5
  }
];

let FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Simply send us a WhatsApp message or fill the contact form. Share your requirements and we\'ll get started right away — most orders are processed within 24 hours.'
  },
  {
    q: 'What is the typical delivery time?',
    a: 'Invitation videos and graphic design: 12–24 hours. Government forms (PAN, Passport, Samagra): same day to 2 days. Website design: 3–7 days depending on complexity. Urgent delivery available on request.'
  },
  {
    q: 'Do you deliver files on WhatsApp?',
    a: 'Yes! All digital deliverables (videos, PDFs, design files) are shared directly on WhatsApp or Google Drive for your convenience.'
  },
  {
    q: 'Do you offer revisions?',
    a: 'Absolutely. We offer free revisions until you are satisfied. Our goal is your complete happiness with the final output.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI (PhonePe, GPay, Paytm), bank transfer, and cash. Payment details are shared once you confirm your order.'
  },
  {
    q: 'Can I visit your office in Jabalpur?',
    a: 'Yes! We are located at 1581/4 Nav Nivesh Colony, Ganga Nagar, Garha, Jabalpur – 482003. Open 24 hours. Call or WhatsApp before visiting for faster service.'
  }
];

/* ── UTILITIES ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function stars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

/* ── NAVBAR ── */
function initNav() {
  const navbar = $('.navbar');
  const toggle = $('.nav-toggle');
  const mobileMenu = $('.mobile-menu');

  // Skip if this page has no navbar (e.g., admin.html)
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = $$('span', toggle);
      const isOpen = mobileMenu.classList.contains('open');
      spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
      spans[1].style.opacity = isOpen ? '0' : '1';
      spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });
  }

  $$('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
    });
  });
}

/* ── SCROLL ANIMATIONS ── */
function initAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.fade-up').forEach(el => obs.observe(el));
}

/* ── FAQ ── */
function initFAQ() {
  $$('.faq-item').forEach(item => {
    const question = $('.faq-question', item);
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      $$('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── TABS ── */
function initTabs() {
  $$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      filterPortfolio(filter);
    });
  });
}

function filterPortfolio(cat) {
  $$('.portfolio-item').forEach(item => {
    const match = cat === 'all' || item.dataset.cat === cat;
    item.style.display = match ? '' : 'none';
  });
}

/* ── RENDER: HOME SERVICES ── */
function renderHomeServices(container, limit = 12) {
  if (!container) return;
  const items = SERVICES.slice(0, limit);
  container.innerHTML = items.map((s, i) => `
    <a href="service.html?id=${s.id}" class="service-card fade-up fade-up-d${(i % 4) + 1}" style="--i:${i}">
      <div class="service-icon">${s.icon}</div>
      <div class="service-card-title">${s.title}</div>
      <div class="service-card-desc">${s.desc}</div>
      <div class="service-card-footer">
        <span class="service-price">${s.price}</span>
        <span class="service-arrow">→</span>
      </div>
    </a>
  `).join('');
  initAnimations();
}

/* ── RENDER: ALL SERVICES ── */
function renderAllServices(container) {
  if (!container) return;
  const categories = {
    digital: 'Digital & Web',
    creative: 'Creative & Design',
    government: 'Government Services',
    education: 'Education & Academic',
    design: 'Document Design'
  };
  const grouped = {};
  SERVICES.forEach(s => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  });

  container.innerHTML = Object.entries(grouped).map(([cat, services]) => `
    <div class="services-category-group" style="margin-bottom:64px;">
      <h3 style="color:var(--gold-bright);font-family:var(--font-mono);font-size:0.8rem;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:28px;display:flex;align-items:center;gap:12px;">
        <span style="width:32px;height:1px;background:var(--gold-bright);display:inline-block;"></span>
        ${categories[cat] || cat}
      </h3>
      <div class="services-grid">
        ${services.map(s => `
          <a href="service.html?id=${s.id}" class="service-card fade-up">
            <div class="service-icon">${s.icon}</div>
            <div class="service-card-title">${s.title}</div>
            <div class="service-card-desc">${s.desc}</div>
            <div class="service-card-footer">
              <span class="service-price">${s.price}</span>
              <span class="service-arrow">→</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
  initAnimations();
}

/* ── RENDER: TESTIMONIALS ── */
function renderTestimonials(container) {
  if (!container) return;
  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card fade-up">
      <div class="testimonial-stars">${stars(t.stars)}</div>
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
  initAnimations();
}

/* ── RENDER: FAQ ── */
function renderFAQ(container) {
  if (!container) return;
  container.innerHTML = FAQS.map(f => `
    <div class="faq-item">
      <div class="faq-question">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">${f.a}</div>
    </div>
  `).join('');
  initFAQ();
}

/* ── SERVICE DETAIL ── */
function renderServiceDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const service = SERVICES.find(s => s.id === id);
  if (!service) {
    window.location.href = 'catalogue.html';
    return;
  }

  document.title = `${service.title} — Azis Digital Hub`;

  const icon = $('#service-icon');
  const title = $('#service-title');
  const desc = $('#service-desc');
  const price = $('#service-price');
  const features = $('#service-features');
  const detail = $('#service-detail');
  const breadcrumb = $('#service-breadcrumb');
  const waLink = $$('.wa-service-link');

  if (icon) icon.textContent = service.icon;
  if (title) title.textContent = service.title;
  if (desc) desc.textContent = service.desc;
  if (price) price.textContent = service.price;
  if (detail) detail.textContent = service.detail;
  if (breadcrumb) breadcrumb.textContent = service.title;

  if (features) {
    features.innerHTML = service.features.map(f => `
      <div class="feature-item">
        <span class="feature-check">✦</span>
        <span>${f}</span>
      </div>
    `).join('');
  }

  const waMsg = encodeURIComponent(`Hi! I'm interested in your ${service.title} service. (${service.price}) Please share more details.`);
  waLink.forEach(el => {
    el.href = `https://wa.me/919685325881?text=${waMsg}`;
  });
}

/* ── CONTACT FORM ── */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const service = form.querySelector('[name="service"]').value;
    const message = form.querySelector('[name="message"]').value;
    const phone = form.querySelector('[name="phone"]').value;

    const text = encodeURIComponent(
      `Hello! I'm ${name} (${phone}).\n\nService interested in: ${service}\n\nMessage: ${message}`
    );
    window.open(`https://wa.me/919685325881?text=${text}`, '_blank');
  });
}

/* ── COUNTER ANIMATION ── */
function animateCounters() {
  $$('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 16);
  });
}

/* ── TICKER DUPLICATE ── */
function initTicker() {
  const inner = $('.ticker-inner');
  if (!inner) return;
  // Duplicate for seamless loop
  inner.innerHTML += inner.innerHTML;
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnimations();
  initTicker();

  // Home page
  renderHomeServices($('#services-grid'));
  renderTestimonials($('#testimonials-grid'));
  renderFAQ($('#faq-list'));
  initContactForm();

  // Services page
  renderAllServices($('#all-services-container'));

  // Service detail page
  if (document.body.dataset.page === 'service-detail') {
    renderServiceDetail();
  }

  // Counter animation on scroll
  const counters = $$('[data-count]');
  if (counters.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounters();
          obs.disconnect();
        }
      });
    }, { threshold: 0.5 });
    obs.observe(counters[0]);
  }

  // Portfolio tabs
  initTabs();
});

/* ── SERVICE WORKER REGISTRATION ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => { });
  });
}

/* ── EXPOSE FOR FIRESTORE OVERRIDE ── */
window.SERVICES = SERVICES;
window.TESTIMONIALS = TESTIMONIALS;
window.FAQS = FAQS;

window.renderServices = renderHomeServices;
window.renderAllServices = renderAllServices;
window.renderTestimonials = renderTestimonials;
window.renderFAQ = renderFAQ;
window.renderServiceDetail = renderServiceDetail;

/* Re-read data from window and re-render everything.
   Called by firestore-data.js after Firestore loads. */
window.refreshAllData = function () {
  // Sync local variables with window (in case firestore-data.js overrode them)
  SERVICES = window.SERVICES;
  TESTIMONIALS = window.TESTIMONIALS;
  FAQS = window.FAQS;

  // Re-render all page elements that might exist
  renderHomeServices($('#services-grid'));
  renderAllServices($('#all-services-container'));
  renderTestimonials($('#testimonials-grid'));
  renderFAQ($('#faq-list'));

  if (document.body.dataset.page === 'service-detail') {
    renderServiceDetail();
  }
};

console.log('[main.js] Globals exposed for Firestore override');


/* ── EXPOSE FOR FIRESTORE OVERRIDE ── */
window.SERVICES = SERVICES;
window.TESTIMONIALS = TESTIMONIALS;
window.FAQS = FAQS;

window.renderServices = renderHomeServices;
window.renderAllServices = renderAllServices;
window.renderTestimonials = renderTestimonials;
window.renderFAQ = renderFAQ;
window.renderServiceDetail = renderServiceDetail;

/* Re-read data from window and re-render everything.
   Called by firestore-data.js after Firestore loads. */
window.refreshAllData = function () {
  // Sync local variables with window (in case firestore-data.js overrode them)
  SERVICES = window.SERVICES;
  TESTIMONIALS = window.TESTIMONIALS;
  FAQS = window.FAQS;

  // Re-render all page elements that might exist
  renderHomeServices($('#services-grid'));
  renderAllServices($('#all-services-container'));
  renderTestimonials($('#testimonials-grid'));
  renderFAQ($('#faq-list'));

  if (document.body.dataset.page === 'service-detail') {
    renderServiceDetail();
  }
};