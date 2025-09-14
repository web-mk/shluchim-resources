document.addEventListener("DOMContentLoaded", function () {

  // Adding Progress Bar Container & Heading
  function addProgress() {
    const wrapper = document.querySelector(".widget-4.banner.custom.v380 .wrapper");

    if (wrapper) {
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("carousel-header");

      const heading = document.createElement("h5");
      heading.textContent = "Upcoming Events"; // <-- Change text as needed

      const progressBarContainer = document.createElement("div");
      progressBarContainer.classList.add("progress-bar-container");

      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");

      progressBarContainer.appendChild(progressBar);
      headerDiv.appendChild(heading);
      headerDiv.appendChild(progressBarContainer);

      // Insert before widget_content
      const widgetContent = wrapper.querySelector(".widget_content");
      wrapper.insertBefore(headerDiv, widgetContent);
    };
  }

  addProgress();


  // Image add to the Building Jewish Cary. Building Our Future Section
  function addSection() {
    const wrapperTwo = document.querySelector(".widget-4.message.custom.v420 .wrapper");

    if (wrapperTwo) {

      const futureImage = document.createElement("div");
      futureImage.classList.add("future_image");

      const futureImageContainer = document.createElement("div");
      futureImageContainer.classList.add("future_image_container");

      futureImage.appendChild(futureImageContainer);


      const widgetHeader = wrapperTwo.querySelector(".widget_header");
      wrapperTwo.insertBefore(futureImage, widgetHeader);


      const widgetContent = wrapperTwo.querySelector(".widget_content.message_format");

      if (widgetHeader && widgetContent) {
        const futureItems = document.createElement("div");
        futureItems.classList.add("future_items");

        widgetHeader.before(futureItems);
        futureItems.appendChild(widgetHeader);
        futureItems.appendChild(widgetContent);
      }
    }
  }

  addSection();


  // Gallery Slide - Mobile Only
  function gallerySlide() {
    if (window.innerWidth > 767) {
      console.log("gallerySlide skipped (desktop)");
      return;
    } // only run on mobile

    const widgetContent = document.querySelector(".latest_photos .widget_content");
    if (!widgetContent) {
      console.warn("gallerySlide: .latest_photos .widget_content not found");
      return;
    }

    const ul = widgetContent.querySelector("ul");
    if (!ul) {
      console.warn("gallerySlide: ul not found inside widget_content");
      return;
    }

    const slides = ul.querySelectorAll("li");
    if (slides.length === 0) {
      console.warn("gallerySlide: no slides found");
      return;
    }

    console.log("gallerySlide initialized with", slides.length, "slides");

    // Create Glide structure
    const glideWrapper = document.createElement("div");
    glideWrapper.className = "glide glide-gallery"; // unique class for gallery

    glideWrapper.innerHTML = `
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides"></ul>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]"></div>
    `;

    const slidesContainer = glideWrapper.querySelector(".glide__slides");
    const bulletsContainer = glideWrapper.querySelector(".glide__bullets");

    // Move li slides into Glide structure
    slides.forEach((slide, index) => {
      const li = document.createElement("li");
      li.className = "glide__slide";
      li.appendChild(slide); // move the existing slide inside
      slidesContainer.appendChild(li);

      const bullet = document.createElement("button");
      bullet.className = "glide__bullet";
      bullet.setAttribute("data-glide-dir", `=${index}`);
      bulletsContainer.appendChild(bullet);
    });

    // Replace old UL with Glide wrapper
    widgetContent.innerHTML = "";
    widgetContent.appendChild(glideWrapper);

    // Initialize Glide only for gallery
    const glideGallery = new Glide(".glide-gallery", {
      type: "carousel",
      autoplay: 3000,
      animationDuration: 600,
      animationTimingFunc: "ease",
      startAt: 0,
      perView: 1,
      gap: 16,
      peek: {
        before: 0,
        after: 50
      }
    });

    glideGallery.mount();
  }

  gallerySlide();



  // Carousel Upcoming Events
  const widgetContent = document.querySelector(".widget_content.index_format");
  if (!widgetContent) return;

  // Grab items
  const items = Array.from(widgetContent.querySelectorAll(".item"));

  // Create Glide structure
  const glideWrapper = document.createElement("div");
  glideWrapper.className = "glide";

  glideWrapper.innerHTML = `
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides"></ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]"></div>
  `;

  const slidesContainer = glideWrapper.querySelector(".glide__slides");
  const bulletsContainer = glideWrapper.querySelector(".glide__bullets");

  // Move items into Glide structure
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "glide__slide";
    li.appendChild(item);
    slidesContainer.appendChild(li);

    const bullet = document.createElement("button");
    bullet.className = "glide__bullet";
    bullet.setAttribute("data-glide-dir", `=${index}`);
    bulletsContainer.appendChild(bullet);
  });

  // Replace old container with new Glide wrapper
  widgetContent.parentNode.replaceChild(glideWrapper, widgetContent);

  // Initialize Glide
  const glide = new Glide('.glide', {
    type: 'slider',
    autoplay: false,
    animationDuration: 800,
    animationTimingFunc: 'ease',
    startAt: 0,
    perView: 3.2,
    gap: 16,
    peek: {
        before: 0,
        after: 200
    },
    focusAt: 0,
    breakpoints: {
        900: {
            perView: 2,
            peek: {
                before: 0,
                after: 100
            }
        },
        500: {
            perView: 1,
            peek: {
                before: 0,
                after: 50
            }
        }
    }
  });

  const progressBar = document.querySelector('.progress-bar');
  const totalSlides = document.querySelectorAll('.glide__slide').length;

  if (progressBar && totalSlides > 0) {
      glide.on(['mount.after', 'run'], function () {
          const currentIndex = glide.index + 1 - glide.settings.focusAt;
          let progressPercentage = (currentIndex / totalSlides) * 100;

          if (currentIndex === totalSlides) {
              progressPercentage = 100;
          }

          progressBar.style.width = progressPercentage + '%';
      });

      glide.on('run.after', function () {
          if (glide.index === 0) {
              progressBar.style.width = '20%';
          }
      });
  }

  // Prevent sliding into empty space
  // glide.on('run.after', function () {
  //     const lastVisibleIndex = totalSlides - Math.ceil(glide.settings.perView);

  //     if (glide.index >= lastVisibleIndex) {
  //         // Delay a bit so the last slide animation finishes
  //         setTimeout(() => {
  //             glide.go('=0'); // animate back to start
  //         }, 1500);
  //     }
  // });


  glide.mount();



  // Menu Hover Fizx
  (() => {
    const MENU_SELECTOR = ".co_menu_item.arrow.multi_level";
    const CAPTION_SELECTOR = ".hp-table .hp-row-first .promo_slider .slider .cycle-caption";
    const Z_CLASS = "z99"; // class we add to captions to bump z-index
    const Z_VALUE = "99";
    const attached = new WeakSet();
    let useClass = true;

    // try injecting a CSS rule first (preferred)
    try {
      const style = document.createElement("style");
      style.textContent = `${CAPTION_SELECTOR}.${Z_CLASS} { z-index: ${Z_VALUE} !important; }`;
      document.head.appendChild(style);
    } catch (e) {
      useClass = false;
    }

    function setCaptions(active) {
      const caps = document.querySelectorAll(CAPTION_SELECTOR);
      caps.forEach(el => {
        if (useClass) el.classList.toggle(Z_CLASS, !!active);
        else el.style.zIndex = active ? Z_VALUE : "";
      });
    }

    function handleStateChange(item) {
      // if *any* matching menu item is currently hovered (has .hover),
      // we want the captions raised. (Matches earlier request.)
      const anyHover = Array.from(document.querySelectorAll(MENU_SELECTOR)).some(i => i.classList.contains("hover"));
      setCaptions(anyHover);
    }

    function attach(item) {
      if (attached.has(item)) return;
      attached.add(item);

      // observe class changes on the menu item
      const mo = new MutationObserver(muts => {
        for (const m of muts) {
          if (m.type === "attributes" && m.attributeName === "class") {
            handleStateChange(item);
          }
        }
      });
      mo.observe(item, { attributes: true, attributeFilter: ["class"] });

      // fallback mouse events (covers pseudo-hover or if CMS doesn't toggle .hover)
      item.addEventListener("mouseenter", () => setCaptions(true));
      item.addEventListener("mouseleave", () => handleStateChange(item));

      // if already hovered when we attach
      handleStateChange(item);
    }

    function scanAndAttach() {
      const nodes = document.querySelectorAll(MENU_SELECTOR);
      nodes.forEach(attach);
      return nodes.length > 0;
    }

    // watch for newly added menu items or captions (dynamic CMS loads)
    const bodyObserver = new MutationObserver(muts => {
      muts.forEach(m => {
        if (m.addedNodes && m.addedNodes.length) {
          m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.matches && node.matches(MENU_SELECTOR)) attach(node);
            if (node.querySelectorAll) node.querySelectorAll(MENU_SELECTOR).forEach(attach);

            // if captions were injected, re-apply state
            if (node.matches && node.matches(CAPTION_SELECTOR)) handleStateChange(node);
            if (node.querySelectorAll) {
              if (node.querySelectorAll(CAPTION_SELECTOR).length) handleStateChange(node);
            }
          });
        }
        // also if a menu item gains attributes later (rare), ensure it's attached
        if (m.type === "attributes" && m.target && m.target.matches && m.target.matches(MENU_SELECTOR)) {
          attach(m.target);
        }
      });
    });
    bodyObserver.observe(document.documentElement || document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    // initial attach (with retry loop for CMS that loads late)
    if (!scanAndAttach()) {
      let attempts = 0;
      const maxAttempts = 30;
      const iv = setInterval(() => {
        attempts++;
        if (scanAndAttach() || attempts > maxAttempts) clearInterval(iv);
      }, 300);
    }

  })
();



});
