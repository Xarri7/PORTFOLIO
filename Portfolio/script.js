(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const header = document.querySelector(".site-header");
  const year = document.querySelector("[data-year]");

  if (year) year.textContent = new Date().getFullYear();

  if (header) {
    let headerFrame = 0;
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
      headerFrame = 0;
    };
    const scheduleHeaderUpdate = () => {
      if (headerFrame) return;
      headerFrame = requestAnimationFrame(updateHeader);
    };
    window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true });
    updateHeader();
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Открыть меню");
        nav.classList.remove("is-open");
      }
    });
  }

  const closeMenuOnEscape = (event) => {
    if (event.key === "Escape" && menuButton && nav) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Открыть меню");
      nav.classList.remove("is-open");
      menuButton.focus();
    }
  };
  document.addEventListener("keydown", closeMenuOnEscape);

  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const navSections = ["styles", "services", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const progressBar = document.querySelector(".scroll-progress");

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const active = link.hash === `#${id}`;
      link.classList.toggle("is-current", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const updateProgress = () => {
    if (!progressBar) return;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  };

  const observeActiveSection = () => {
    if (!("IntersectionObserver" in window)) return;
    const visibleSections = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });
      const currentSection = Array.from(visibleSections)
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
      setActiveLink(currentSection ? currentSection.id : "main");
    }, { rootMargin: "-42% 0px -48% 0px" });
    navSections.forEach((section) => observer.observe(section));
  };

  const hasGsap = Boolean(window.gsap && window.ScrollTrigger);
  if (reducedMotion || !hasGsap) observeActiveSection();
  if (reducedMotion || !hasGsap) {
    let progressFrame = 0;
    const scheduleProgressUpdate = () => {
      if (progressFrame) return;
      progressFrame = requestAnimationFrame(() => {
        updateProgress();
        progressFrame = 0;
      });
    };
    window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
    updateProgress();
  }
  if (reducedMotion) return;

  body.classList.add("js-motion");
  requestAnimationFrame(() => body.classList.add("is-ready"));

  if (hasGsap) {
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    body.classList.add("motion-gsap");

    gsap.fromTo(".hero-reveal", { autoAlpha: 0, y: 22 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.85,
      delay: 0.12,
      stagger: 0.12,
      ease: "power3.out"
    });

    gsap.fromTo(".hero-art-reveal", { autoAlpha: 0 }, {
      autoAlpha: 1,
      duration: 0.95,
      delay: 0.2,
      ease: "power2.out"
    });

    document.querySelectorAll(".reveal").forEach((element) => {
      gsap.fromTo(element, { autoAlpha: 0, y: 24 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true }
      });
    });

    if (progressBar) {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (trigger) => gsap.set(progressBar, { scaleX: trigger.progress })
      });
    }

    navSections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveLink(section.id),
        onEnterBack: () => setActiveLink(section.id),
        onLeaveBack: () => setActiveLink(index ? navSections[index - 1].id : "main")
      });
    });

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.querySelectorAll(".style-card").forEach((card) => {
        const tiltX = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3.out" });
        const tiltY = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3.out" });

        card.addEventListener("pointermove", (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          tiltX(y * -3);
          tiltY(x * 3);
        });
        card.addEventListener("pointerleave", () => {
          tiltX(0);
          tiltY(0);
        });
      });
    }

    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  } else {
    document.querySelectorAll(".hero-reveal, .hero-art-reveal").forEach((element, index) => {
      window.setTimeout(() => element.classList.add("is-visible"), 120 + index * 120);
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    } else {
      document.querySelectorAll(".reveal, .hero-reveal, .hero-art-reveal").forEach((element) => element.classList.add("is-visible"));
    }
  }

})();
