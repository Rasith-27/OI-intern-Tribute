/**
 * Dr. A. P. J. Abdul Kalam — Black Space & Rocket Tribute
 * OASIS INFOBYTE SIP (Level 2 — Task 2)
 * Core Interactive Logic (Vanilla JavaScript)
 * Author: Mohamed Rasith M
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DOM ELEMENT REFERENCES
  // ==========================================================================
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const portraitImg = document.getElementById('hero-portrait-img');
  const portraitFallback = document.getElementById('portrait-fallback');
  const cosmicCanvas = document.getElementById('cosmic-canvas');

  // Interactive Wisdom Tabs
  const wisdomTabs = document.querySelectorAll('.wisdom-tab');
  const wisdomPanels = document.querySelectorAll('.wisdom-panel');

  // Rocket Launch Simulator Elements
  const btnLaunchSim = document.getElementById('btn-launch-sim');
  const launchBtnText = document.getElementById('launch-btn-text');
  const simRocket = document.getElementById('sim-rocket');
  const thrusterFire = document.getElementById('thruster-fire');
  const telStatus = document.getElementById('tel-status');
  const telAlt = document.getElementById('tel-alt');
  const telVel = document.getElementById('tel-vel');
  const telProp = document.getElementById('tel-prop');

  // ==========================================================================
  // 2. STICKY NAVBAR SCROLL HANDLER
  // ==========================================================================
  const handleScroll = () => {
    const scrollPos = window.scrollY || window.pageYOffset;
    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ==========================================================================
  // 3. MOBILE HAMBURGER MENU & ACCESSIBLE FOCUS TRAP
  // ==========================================================================
  let isMenuOpen = false;

  const openMobileMenu = () => {
    isMenuOpen = true;
    menuToggle.setAttribute('aria-expanded', 'true');
    primaryNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    isMenuOpen = false;
    menuToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('open');
    document.body.style.overflow = '';
  };

  const toggleMobileMenu = () => {
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close when clicking any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMenuOpen) {
          closeMobileMenu();
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu();
        menuToggle.focus();
      }
    });

    // Close on click outside header
    document.addEventListener('click', (e) => {
      if (isMenuOpen && !header.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // 4. INTERACTIVE SLV-III ROCKET LAUNCH SIMULATOR
  // ==========================================================================
  let isLaunching = false;

  if (btnLaunchSim && simRocket && thrusterFire) {
    btnLaunchSim.addEventListener('click', () => {
      if (isLaunching) return;
      isLaunching = true;
      btnLaunchSim.disabled = true;

      // Stage 1: Countdown
      let count = 3;
      launchBtnText.textContent = `COUNTDOWN: T-0${count}...`;
      telStatus.textContent = `TERMINAL COUNTDOWN ACTIVE (T-0${count})`;
      telStatus.style.color = '#facc15';

      const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
          launchBtnText.textContent = `COUNTDOWN: T-0${count}...`;
          telStatus.textContent = `TERMINAL COUNTDOWN ACTIVE (T-0${count})`;
        } else {
          clearInterval(countdownInterval);
          startLiftoff();
        }
      }, 1000);

      const startLiftoff = () => {
        // Ignition
        launchBtnText.textContent = '🚀 LIFTOFF! ASCENDING TO ORBIT';
        telStatus.textContent = 'STAGE 1 SOLID MOTOR IGNITION // LIFTOFF!';
        telStatus.style.color = '#ef4444';
        thrusterFire.classList.add('active');
        simRocket.classList.add('launching');

        // Telemetry increment animation
        let alt = 0;
        let vel = 0;
        const telemetryTimer = setInterval(() => {
          alt += 12;
          vel += 0.32;
          if (alt <= 305) {
            telAlt.textContent = `${alt.toFixed(1)} KM`;
            telVel.textContent = `${vel.toFixed(2)} KM/S`;
          }

          if (alt > 60 && alt < 140) {
            telStatus.textContent = 'STAGE 1 SEPARATION // STAGE 2 IGNITION';
            telStatus.style.color = '#f97316';
            telProp.textContent = 'STAGE 2 SOLID MOTOR FIRING';
          } else if (alt >= 140 && alt < 260) {
            telStatus.textContent = 'PAYLOAD FAIRING JETTISONED // STAGE 3/4 ACTIVE';
            telStatus.style.color = '#38bdf8';
            telProp.textContent = 'STAGE 3/4 UPPER MOTOR GUIDANCE';
          }
        }, 120);

        // Completion & Orbit Insertion (after 3.5s)
        setTimeout(() => {
          clearInterval(telemetryTimer);
          telAlt.textContent = '305.0 KM (LEO)';
          telVel.textContent = '7.80 KM/S (ORBITAL)';
          telStatus.textContent = 'MISSION SUCCESS: ROHINI RS-1 SATELLITE IN ORBIT! 🛰️';
          telStatus.style.color = '#4ade80';
          telProp.textContent = 'MISSION COMPLETED (ALL STAGES SUCCESSFUL)';
          simRocket.classList.remove('launching');
          simRocket.classList.add('in-orbit');
          thrusterFire.classList.remove('active');

          launchBtnText.textContent = '🔄 RESET & LAUNCH AGAIN';
          btnLaunchSim.disabled = false;
          isLaunching = false;

          // Re-arm trigger to reset
          btnLaunchSim.onclick = () => {
            simRocket.classList.remove('in-orbit');
            telAlt.textContent = '0.0 KM';
            telVel.textContent = '0.0 KM/S';
            telStatus.textContent = 'PAD READY // T-00:00';
            telStatus.style.color = '#4ade80';
            telProp.textContent = '4-STAGE ALL-SOLID MOTOR';
            launchBtnText.textContent = 'IGNITE & LAUNCH SLV-III';
            btnLaunchSim.onclick = null; // Revert to standard click listener
          };
        }, 3600);
      };
    });
  }

  // ==========================================================================
  // 5. INTERSECTION OBSERVER FOR ACTIVE NAV LINK HIGHLIGHTING
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // ==========================================================================
  // 6. INTERACTIVE WISDOM TABS (LEGACY SECTION)
  // ==========================================================================
  if (wisdomTabs.length > 0 && wisdomPanels.length > 0) {
    wisdomTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetPanelId = tab.getAttribute('aria-controls');

        // Update Tabs
        wisdomTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Update Panels
        wisdomPanels.forEach(panel => {
          if (panel.getAttribute('id') === targetPanelId) {
            panel.classList.add('active');
            panel.removeAttribute('hidden');
          } else {
            panel.classList.remove('active');
            panel.setAttribute('hidden', 'true');
          }
        });
      });

      // Keyboard navigation between tabs (Arrow Left / Right)
      tab.addEventListener('keydown', (e) => {
        const tabList = Array.from(wisdomTabs);
        const currentIndex = tabList.indexOf(tab);
        let nextIndex = null;

        if (e.key === 'ArrowRight') {
          nextIndex = (currentIndex + 1) % tabList.length;
        } else if (e.key === 'ArrowLeft') {
          nextIndex = (currentIndex - 1 + tabList.length) % tabList.length;
        }

        if (nextIndex !== null) {
          e.preventDefault();
          tabList[nextIndex].focus();
          tabList[nextIndex].click();
        }
      });
    });
  }

  // ==========================================================================
  // 7. BACK TO TOP SMOOTH SCROLL
  // ==========================================================================
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 8. PORTRAIT IMAGE INITIALIZATION
  // ==========================================================================
  if (portraitImg) {
    portraitImg.setAttribute('draggable', 'false');
  }

  // ==========================================================================
  // 9. PURE BLACK SPACE CANVASS: TWINKLING STARS & CELESTIAL STARDUST
  // ==========================================================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (cosmicCanvas && !prefersReducedMotion) {
    const ctx = cosmicCanvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 55;

    const resizeCanvas = () => {
      width = cosmicCanvas.width = window.innerWidth;
      height = cosmicCanvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    const starColors = [
      'rgba(255, 255, 255, ',
      'rgba(56, 189, 248, ',
      'rgba(251, 191, 36, ',
      'rgba(192, 132, 252, '
    ];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.18;
        this.speedY = (Math.random() - 0.5) * 0.18;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.colorPrefix = starColors[Math.floor(Math.random() * starColors.length)];
        this.pulseSpeed = Math.random() * 0.02 + 0.008;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.006;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const alpha = Math.max(0.1, Math.min(0.95, this.opacity));
        ctx.fillStyle = `${this.colorPrefix}${alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    });
  }
});
