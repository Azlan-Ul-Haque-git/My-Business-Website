/* 3D Form Tilt — moves the form card based on cursor position */

(function () {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    // Skip on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    var rafId = null;

    form.addEventListener('mousemove', function (e) {
        if (rafId) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(function () {
            var rect = form.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;

            var centerX = rect.width / 2;
            var centerY = rect.height / 2;

            // Tilt strength (max degrees)
            var tiltX = ((y - centerY) / centerY) * -4;
            var tiltY = ((x - centerX) / centerX) * 4;

            form.style.transform =
                'perspective(1200px) ' +
                'rotateX(' + tiltX + 'deg) ' +
                'rotateY(' + tiltY + 'deg) ' +
                'translateY(-4px)';

            // Move the cursor glow
            form.style.setProperty('--mouse-x', x + 'px');
            form.style.setProperty('--mouse-y', y + 'px');
        });
    });

    form.addEventListener('mouseleave', function () {
        form.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateY(0)';
        form.style.setProperty('--mouse-x', '50%');
        form.style.setProperty('--mouse-y', '50%');
    });
})();

/* Premium Contact Form — Formspree + animated states */

(function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var submitBtn = document.getElementById('submit-btn');
    var statusEl = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset state
        submitBtn.classList.remove('success');
        submitBtn.classList.add('loading');
        statusEl.className = 'form-status';
        statusEl.textContent = '';

        // Collect form data
        var formData = new FormData(form);

        // Send to Formspree
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then(function (response) {
                if (response.ok) {
                    // Success
                    submitBtn.classList.remove('loading');
                    submitBtn.classList.add('success');
                    statusEl.className = 'form-status success';
                    statusEl.textContent = 'Thank you! Your enquiry has been sent. We will reach out shortly.';
                    form.reset();

                    // Reset button after 3 seconds
                    setTimeout(function () {
                        submitBtn.classList.remove('success');
                    }, 3500);
                } else {
                    // Server returned error
                    response.json().then(function (data) {
                        throw new Error(data.error || 'Submission failed');
                    });
                }
            })
            .catch(function (error) {
                submitBtn.classList.remove('loading');
                statusEl.className = 'form-status error';
                statusEl.textContent = 'Something went wrong. Please try again or WhatsApp us directly.';
                console.error('Form error:', error);
            });
    });
})();