# Dr. A. P. J. Abdul Kalam — Black Space & Rocket Tribute

[![OASIS INFOBYTE SIP](https://img.shields.io/badge/OASIS%20INFOBYTE-SIP%20Level%202%20Task%202-38bdf8?style=for-the-badge)](https://oasisinfobyte.com/)
[![Web Development](https://img.shields.io/badge/Domain-Web%20Development%20%26%20Designing-818cf8?style=for-the-badge)](#)
[![Theme: Black Space & Rockets](https://img.shields.io/badge/Theme-Black%20Space%20%26%20Rockets-000000?style=for-the-badge)](#)

A state-of-the-art, interactive, **pure black space and rocket tribute website** celebrating the life, scientific leadership, and enduring national legacy of **Dr. A. P. J. Abdul Kalam** (1931–2015) — India's Missile Man, 11th President, and pioneer of indigenous rocketry.

---

## 📌 Project Overview

This project was developed for the **OASIS INFOBYTE Internship Program (SIP)** under **Level 2 — Task 2: Tribute Page**. 

The website is styled in a **pure pitch-black space visual system** with dynamic stars, animated shooting stars (meteors), ascending rockets, and an interactive **SLV-III Rocket Launch Simulator** commemorating India's historic July 18, 1980 orbital mission.

---

## 🚀 Black Space Theme, Stars & Rockets Visual System

* **Pitch-Black Space Foundation**:
  * Base Palette: `#000000` (Obsidian deep space void)
  * Secondary Gradients: `#020409`, `#050814`, `#080d22`, and `#140b29`
* **Dynamic Stars & Celestial Atmosphere**:
  * Multi-tiered CSS starfield with shimmering diamond stars in white, cyan, gold, and violet.
  * **Shooting Stars / Meteors**: Periodic diagonal streaks across the black void with glowing luminous tails.
  * Canvas-rendered ambient stardust particle clusters.
* **Rocketry & Launch Vehicles**:
  * **SLV-III Interactive Launch Simulator**: Live countdown, animated thruster fire with smoke particles, gantry arm retraction, altitude/velocity telemetry, and Rohini RS-1 satellite orbital deployment.
  * **The Kalam Rocket Fleet**: Detailed technical showcase of **SLV-III**, **Rohini Satellite (RS-1)**, **Agni & Prithvi Strategic Deterrents**, and **PSLV Heritage**.
  * **Hero Orbital System**: Central portrait framed by concentric celestial orbit rings with an orbiting spacecraft.
  * **Ambient Ascending Background Rockets**: Rocket silhouettes traversing deep space with glowing fiery exhaust trails.

---

## 🌟 Key Features

1. **Cinematic Hero Section**:
   * Live status beacon: `INDIA'S MISSILE MAN & SPACE PIONEER`.
   * Main heading with gradient glow and 4-pillar tagline (*Scientist • Rocket Pioneer • Visionary • People's President*).
   * Direct CTAs: `🚀 LAUNCH SLV-III SIMULATOR` and `EXPLORE HIS JOURNEY`.
   * Key metric ribbons (11th President, SLV-III First Indian Rocket, 1980 Rohini Orbit, 5M+ Mentored).
2. **Chapter 01: The Man Behind The Dream (Biographical Archive)**:
   * 4 original editorial chapters covering his early life in Rameswaram, MIT aeronautical education, ISRO launch vehicle leadership, DRDO strategic missile program, presidency, and educational mission.
   * Mission dossier fast facts card and Kalam Philosophy tags.
3. **Chapter 02: The Kalam Rocket Fleet & Launch Simulator**:
   * Fully interactive **ISRO Mission Control Simulator** with live liftoff sequence and telemetry tracking.
   * 4 dedicated rocket cards with specifications (Height, Stages, Payload, Orbit).
4. **Chapter 03: From Dreams to Orbit (Orbital Timeline)**:
   * Vertical orbital trajectory timeline with 7 verified historical milestones (1931–2015).
5. **Chapter 04: Mission: Innovation (Scientific Contributions)**:
   * 6 glassmorphic achievement cards (Space Research, Launch Vehicle Development, Defence Technology, Scientific Leadership, National Service & Healthcare, Youth & Education).
6. **Chapter 05: Cinematic Quote**:
   * Verified quotation: *"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."* (Address to Students / *Ignited Minds*).
7. **Chapter 06: The Legacy Continues**:
   * Narrative exploring India's interplanetary ambitions (Chandrayaan-3, Gaganyaan) and an **Interactive Wisdom Explorer** (Vision, Courage, Humility, Knowledge).
8. **Mission Transmission Directive**:
   * Closing inspirational charge: *"KEEP DREAMING. KEEP EXPLORING."*

---

## 🛠️ Technologies Used

* **HTML5**: Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`), ARIA accessibility roles and landmarks.
* **CSS3**: Pure black space tokens, shooting star keyframes, rocket thruster fire animations, glassmorphism (`backdrop-filter`), CSS Grid & Flexbox.
* **Vanilla JavaScript (ES6+)**: Pure `addEventListener` event-driven architecture, interactive rocket liftoff engine, telemetry counter, `IntersectionObserver` navigation tracking, HTML5 Canvas star particles.

---

## 📁 Project Structure

```
WebDev-L2-Task2-TributePage/
│
├── index.html              # Main semantic HTML5 markup
├── style.css               # Black space theme, stars, rocket animations
├── script.js               # Rocket launch simulation & interactive logic
│
├── assets/
│   └── images/
│       ├── apj-abdul-kalam.jpg    # Tribute portrait image asset
│       └── apj-abdul-kalam.svg    # High-resolution vector portrait asset
│
├── screenshots/            # Showcase screenshots
│   └── README.md
│
└── README.md               # Complete project documentation
```

---

## 📱 Responsive Testing & Breakpoints

| Viewport | Target Resolution | Status | Verification Notes |
| :--- | :--- | :---: | :--- |
| **Desktop (Large)** | `1440px`+ | ✅ Passed | 4-column rocket fleet, full simulator, 3-column achievements |
| **Desktop / Laptop** | `1024px` | ✅ Passed | 2-column rocket fleet, responsive launch pad |
| **Tablet** | `768px` | ✅ Passed | Hamburger menu active, single-column vertical timeline |
| **Smartphone** | `390px` / `480px` | ✅ Passed | Full-width launch controls, zero horizontal scroll |
| **Ultra Compact** | `320px` | ✅ Passed | Legible typography, proportional badges |

---

## ♿ Accessibility Features

* **WCAG AA/AAA Contrast**: High-contrast text on pure black `#000000` background.
* **Reduced Motion Support**: All continuous animations (orbit rings, shooting stars, background rockets) disable smoothly under `@media (prefers-reduced-motion: reduce)`.
* **Keyboard Navigation**: Full focus indicators, Tab order, and Escape key dismissal for mobile navigation.
* **100% Vanilla JavaScript**: Zero inline onclick handlers.

---

## 👨‍💻 Author

* **Author**: Mohamed Rasith M
* **Internship**: OASIS INFOBYTE SIP — Level 2 — Task 2
* **Domain**: Web Development & Designing
