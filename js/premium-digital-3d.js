// js/wedding-3d.js

// ==========================================
// PART 1: HERO SECTION ANIMATION (3D Matrix)
// ==========================================
const heroCanvas = document.getElementById('wedding-canvas');

if (heroCanvas) {
    // 1. Scene Setup
    const heroScene = new THREE.Scene();

    // 2. Size Setup
    const width = heroCanvas.clientWidth;
    const height = heroCanvas.clientHeight;

    const heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
    heroRenderer.setSize(width, height);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 3. Camera Setup
    const heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    heroCamera.position.z = 8;
    heroCamera.position.x= -3;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    heroScene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xd4a017, 2, 50);
    pointLight.position.set(5, 5, 5);
    heroScene.add(pointLight);

    // 5. The Core: A Golden Wireframe Sphere
    const sphereGeo = new THREE.SphereGeometry(2.2, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
        color: 0xd4a017,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    heroScene.add(coreSphere);

    // 6. The Orbit: 3D icons representing services
    const orbitGroup = new THREE.Group();
    heroScene.add(orbitGroup);

    function createIcon(type, color) {
        let geo;
        if (type === 'video') geo = new THREE.ConeGeometry(0.3, 0.6, 4);
        if (type === 'code') geo = new THREE.TorusGeometry(0.25, 0.08, 16, 100);
        if (type === 'doc') geo = new THREE.BoxGeometry(0.4, 0.5, 0.1);
        if (type === 'diamond') geo = new THREE.OctahedronGeometry(0.35);

        const mat = new THREE.MeshStandardMaterial({
            color: color,
            metalness: 0.9,
            roughness: 0.1,
            emissive: color,
            emissiveIntensity: 0.2
        });
        return new THREE.Mesh(geo, mat);
    }

    const videoIcon = createIcon('video', 0xff4081); // Pink
    const codeIcon = createIcon('code', 0x00e5ff); // Cyan
    const docIcon = createIcon('doc', 0xffffff); // White
    const diamondIcon = createIcon('diamond', 0xffd700); // Gold

    orbitGroup.add(videoIcon, codeIcon, docIcon, diamondIcon);

    videoIcon.position.set(3.0, 0, 0);
    codeIcon.position.set(-3.0, 0, 0);
    docIcon.position.set(0, 0, 4);
    diamondIcon.position.set(0, 0, -3.0);

    // 7. Scroll & Mouse Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(heroScene.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(heroScene.rotation, { y: x * 0.2, x: -y * 0.2, duration: 1.5, ease: "power2.out" });
    });

// --- 3D LOGO ADD KARO (Ab bilkul transparent) ---
    const textureLoader = new THREE.TextureLoader();

    // Path check kar lena, agar assets folder me hai to yahi rahega
    textureLoader.load('assets/logo.png', function (texture) {

        // Texture ko smooth aur sharp karne ke liye
        texture.colorSpace = THREE.SRGBColorSpace;

        const logoGeo = new THREE.PlaneGeometry(3.0, 3.0); // Size adjust kar sakte ho

        const logoMat = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 1.0,
            depthWrite: false,
            side: THREE.DoubleSide
        });

        const logoMesh = new THREE.Mesh(logoGeo, logoMat);
        logoMesh.position.set(0, 0, 0);
        heroScene.add(logoMesh);
    });

    // 8. Hero Animation Loop
    const clock = new THREE.Clock();
    function animateHero() {
        requestAnimationFrame(animateHero);
        const elapsedTime = clock.getElapsedTime();

        coreSphere.rotation.y = elapsedTime * 0.1;
        coreSphere.rotation.x = elapsedTime * 0.05;
        orbitGroup.rotation.y = elapsedTime * 0.3;
        orbitGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

        videoIcon.rotation.y += 0.02;
        codeIcon.rotation.y -= 0.03;
        docIcon.rotation.x += 0.02;
        diamondIcon.rotation.y += 0.01;

        heroRenderer.render(heroScene, heroCamera);
    }
    animateHero();

    // 9. Resize Handler (Only for Hero)
    window.addEventListener('resize', () => {
        const newWidth = heroCanvas.clientWidth;
        const newHeight = heroCanvas.clientHeight;
        heroCamera.aspect = newWidth / newHeight;
        heroCamera.updateProjectionMatrix();
        heroRenderer.setSize(newWidth, newHeight);
    });
}


// ==========================================
// PART 2: SERVICES SECTION ANIMATION (Floating Particles)
// ==========================================
const servicesSection = document.querySelector('.services-section');
if (servicesSection) {
    const servicesCanvas = document.createElement('canvas');
    servicesCanvas.style.position = 'absolute';
    servicesCanvas.style.top = '0';
    servicesCanvas.style.left = '0';
    servicesCanvas.style.width = '100%';
    servicesCanvas.style.height = '100%';
    servicesCanvas.style.zIndex = '0';
    servicesCanvas.style.pointerEvents = 'none';
    servicesCanvas.style.opacity = '0.4';
    servicesSection.style.position = 'relative';
    servicesSection.insertBefore(servicesCanvas, servicesSection.firstChild);

    const servicesScene = new THREE.Scene();
    const servicesCamera = new THREE.PerspectiveCamera(45, servicesSection.offsetWidth / servicesSection.offsetHeight, 0.1, 1000);
    servicesCamera.position.z = 10;

    const servicesRenderer = new THREE.WebGLRenderer({ canvas: servicesCanvas, alpha: true, antialias: true });
    servicesRenderer.setSize(servicesSection.offsetWidth, servicesSection.offsetHeight);
    servicesRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 100;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMat = new THREE.PointsMaterial({ size: 0.05, color: 0xd4a017, transparent: true, opacity: 0.8 });
    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    servicesScene.add(particlesMesh);

    function animateServices() {
        requestAnimationFrame(animateServices);
        particlesMesh.rotation.y += 0.002;
        servicesRenderer.render(servicesScene, servicesCamera);
    }
    animateServices();
}


// ==========================================
// PART 3: WHY US SECTION ANIMATION
// ==========================================
const whySection = document.querySelector('.why-section');
if (whySection) {
    whySection.style.position = 'relative';
    whySection.style.overflow = 'hidden';

    const whyCanvas = document.createElement('canvas');
    whyCanvas.style.position = 'absolute';
    whyCanvas.style.top = '0';
    whyCanvas.style.left = '0';
    whyCanvas.style.width = '100%';
    whyCanvas.style.height = '100%';
    whyCanvas.style.zIndex = '0';
    whyCanvas.style.pointerEvents = 'none';
    whyCanvas.style.opacity = '0.2';
    whySection.insertBefore(whyCanvas, whySection.firstChild);

    const whyScene = new THREE.Scene();
    const whyCamera = new THREE.PerspectiveCamera(45, whySection.offsetWidth / whySection.offsetHeight, 0.1, 1000);
    whyCamera.position.z = 10;
    const whyRenderer = new THREE.WebGLRenderer({ canvas: whyCanvas, alpha: true, antialias: true });
    whyRenderer.setSize(whySection.offsetWidth, whySection.offsetHeight);

    const whyGeo = new THREE.TorusKnotGeometry(0.8, 0.2, 100, 16);
    const whyMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, wireframe: true, transparent: true, opacity: 0.5 });
    const whyMesh = new THREE.Mesh(whyGeo, whyMat);
    whyScene.add(whyMesh);

    function animateWhy() {
        requestAnimationFrame(animateWhy);
        whyMesh.rotation.x += 0.005;
        whyMesh.rotation.y += 0.005;
        whyRenderer.render(whyScene, whyCamera);
    }
    animateWhy();
}


// ==========================================
// PART 4: THEME (Dark/Light) COLOR AUTO-FIX
// ==========================================
setInterval(() => {
    const isLight = document.body.classList.contains('light-mode');
    if (typeof particleMat !== 'undefined') {
        particleMat.color.setHex(isLight ? 0xB8860B : 0xd4a017);
    }
    if (typeof sphereMat !== 'undefined') {
        sphereMat.color.setHex(isLight ? 0xB8860B : 0xd4a017);
    }
}, 500);