document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname !== '/') return;
  const container = document.querySelector(".sneak-peek-container");
  if (!container) return;

  // Grab all sneak-peek items
  const items = container.querySelectorAll(".sneak-peek-item");

  if (items.length > 0) {
    // Create wrapper div
    const flexbox = document.createElement("div");
    flexbox.className = "flexbox";

    // Move all items (and their .clear divs) into the wrapper
    items.forEach((item) => {
      item.classList.remove('g240');
      item.classList.add('g320');
      flexbox.appendChild(item);
    });

    // Also move any stray .clear divs into the wrapper
    const clears = container.querySelectorAll(".clear");
    clears.forEach((clr) => {
      flexbox.appendChild(clr);
    });

    // Append wrapper to the container
    container.appendChild(flexbox);
  }


  // Upcoming Events Slider
  function carouselEvent() {
    const widgetContent = document.querySelector(".widget_content.index_format");
    if (!widgetContent) return;

    // Grab items
    const items = Array.from(widgetContent.querySelectorAll(".item"));

    // Create parent container
    const carouselContainer = document.createElement("div");
    carouselContainer.className = "carousel_container";

    // Create Glide root
    const glideWrapper = document.createElement("div");
    glideWrapper.className = "glide glide-events";

    // Controls wrapper (INSIDE glide now ✅)
    const controlsWrapper = document.createElement("div");
    controlsWrapper.className = "carousel_controls";
    controlsWrapper.setAttribute("data-glide-el", "controls");

    // Heading wrapper
    const headingWrapper = document.createElement("div");
    headingWrapper.className = "heading_wrapper";

    // Prev button
    const prevBtn = document.createElement("button");
    prevBtn.className = "glide__arrow glide__arrow--prev";
    prevBtn.setAttribute("data-glide-dir", "<");
    prevBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M16 9H3.83L8 13.18V16L0 8L8 0V2.82L3.83 7H16V9Z" fill="#93928E"/>
      </svg>
    `;

    // Heading
    const heading = document.createElement("div");
    heading.className = "carousel_heading";
    heading.textContent = "Upcoming Events";

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.className = "glide__arrow glide__arrow--next";
    nextBtn.setAttribute("data-glide-dir", ">");
    nextBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M16 9H3.83L8 13.18V16L0 8L8 0V2.82L3.83 7H16V9Z" fill="#93928E"/>
      </svg>
    `;

    // Build heading wrapper
    headingWrapper.appendChild(prevBtn);
    headingWrapper.appendChild(heading);

    // Append controls
    controlsWrapper.appendChild(headingWrapper);
    controlsWrapper.appendChild(nextBtn);

    // Glide track
    const track = document.createElement("div");
    track.className = "glide__track";
    track.setAttribute("data-glide-el", "track");

    const slides = document.createElement("ul");
    slides.className = "glide__slides";

    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "glide__slide";
      li.appendChild(item);
      slides.appendChild(li);
    });

    track.appendChild(slides);

    // Build glide
    glideWrapper.appendChild(controlsWrapper);
    glideWrapper.appendChild(track);

    // Replace old content
    carouselContainer.appendChild(glideWrapper);
    widgetContent.parentNode.replaceChild(carouselContainer, widgetContent);

    // Init glide
    const glide = new Glide(glideWrapper, {
      type: "slider",
      autoplay: false,
      animationDuration: 800,
      animationTimingFunc: "ease",
      startAt: 0,
      perView: 3.2,
      gap: 20,
      peek: { before: 0, after: 120 },
      focusAt: 0,
      breakpoints: {
        2560: { perView: 3, peek: { before: 0, after: 0 } },
        1399: { perView: 3.2, peek: { before: 0, after: 0 } },
        1024: { perView: 3, peek: { before: 0, after: 80 } },
        900: { perView: 2, peek: { before: 0, after: 120 } },
        500: { perView: 1, peek: { before: 0, after: 80 } }
      }
    });

    glide.mount();

    // 🔒 Fallback manual binding (guarantees arrows work)
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      glide.go("<");
    });
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      glide.go(">");
    });
  }

  carouselEvent();


  function addSection() {
    const wrapperTwo = document.querySelector(".hp-row:nth-child(4) .wrapper");
    // const wrapperTwo = document.querySelector(".widget-4.message.custom.v420 .wrapper");

    if (wrapperTwo) {
      // Create about_image
      const futureImage = document.createElement("div");
      futureImage.classList.add("about_image");

      const futureImageContainer = document.createElement("div");
      futureImageContainer.classList.add("about_image_container");

      futureImage.appendChild(futureImageContainer);

      // Find widget_header
      const widgetHeader = wrapperTwo.querySelector(".widget_header");

      // Insert about_image before widget_header
      wrapperTwo.insertBefore(futureImage, widgetHeader);

      // Find widget_content
      const widgetContent = wrapperTwo.querySelector(".widget_content.message_format");

      if (widgetHeader && widgetContent) {
        // Create about_items wrapper
        const futureItems = document.createElement("div");
        futureItems.classList.add("about_items");

        // Insert about_items before widget_header
        widgetHeader.before(futureItems);

        // Create section_headline
        const sectionHeadline = document.createElement("div");
        sectionHeadline.classList.add("section_headline");
        sectionHeadline.textContent = "About us";

        // Append section_headline, header, and content
        futureItems.appendChild(sectionHeadline);
        futureItems.appendChild(widgetHeader);
        futureItems.appendChild(widgetContent);
      }
    }
  }

  addSection();

  // Tourist Info Section
  function updateTouristInfo() {

    const container = document.querySelector(".hp-table > :nth-of-type(5n) .sneak-peek-container.clearfix");
    if (!container) return;

    // --- Step 1: Wrap header-title ---
    const headerTitle = container.querySelector(".hp-table > :nth-of-type(5n) .header-title");
    if (headerTitle) {
      const touristWrapper = document.createElement("div");
      touristWrapper.classList.add("tourist_item");

      // Move header-title inside wrapper
      headerTitle.parentNode.insertBefore(touristWrapper, headerTitle);
      touristWrapper.appendChild(headerTitle);

      // Add image after header-title
      const img = document.createElement("img");
      img.src = "https://cdn.webmk.co/chabad-maine/assets/tower.png"; // replace with your image path
      img.alt = "Tourist Icon";
      touristWrapper.appendChild(img);
    }

    // --- Step 2: Wrap all sneak-peek-item into flexbox ---
    const items = container.querySelectorAll(".hp-table > :nth-of-type(5n) .sneak-peek-item, .clear");
    if (items.length > 0) {
      const flexbox = document.createElement("div");
      flexbox.classList.add("flexbox");

      // Insert flexbox before first item
      container.insertBefore(flexbox, items[0]);

      items.forEach(item => {
        flexbox.appendChild(item);
      });
    }
  }

  updateTouristInfo();

  // Donate Section
  function updateDonateSection() {

    const wrapper = document.querySelector(".hp-table > :nth-of-type(6n) .wrapper");
    if (!wrapper) return;

    const widgetHeader = wrapper.querySelector(".hp-table > :nth-of-type(6n) .widget_header");
    const widgetContent = wrapper.querySelector(".hp-table > :nth-of-type(6n) .widget_content.message_format");

    if (widgetHeader && widgetContent) {
      // Step 1: Create donate_header wrapper
      const donateHeader = document.createElement("div");
      donateHeader.classList.add("donate_header");

      // Insert before widgetHeader
      wrapper.insertBefore(donateHeader, widgetHeader);

      // Move widgetHeader + widgetContent inside
      donateHeader.appendChild(widgetHeader);
      donateHeader.appendChild(widgetContent);

      // Step 2: Create donate_items div
      const donateItems = document.createElement("div");
      donateItems.classList.add("donate_items");

      const headline = document.createElement("h5");
      headline.innerHTML = "Every person matters.<br>Every gift makes a difference.";

      const donateImage = document.createElement("div");
      donateImage.classList.add("donate_image");

      donateItems.appendChild(headline);
      donateItems.appendChild(donateImage);

      // Insert donate_items after donate_header
      donateHeader.after(donateItems);
    }
  }

  updateDonateSection();


  // Chai Club Section
  function updateChaiSection() {

    const wrapper = document.querySelector(".hp-table > :nth-of-type(7n) .wrapper");
    if (!wrapper) return;

    const h5Text = wrapper.querySelector("h5").textContent;

    const widgetHeader = wrapper.querySelector(".hp-table > :nth-of-type(7n) .widget_header");
    const widgetContent = wrapper.querySelector(".hp-table > :nth-of-type(7n) .widget_content.message_format");

    if (widgetHeader && widgetContent) {
      // Step 1: Create chai_image
      const chaiImage = document.createElement("div");
      chaiImage.classList.add("chai_image");

      const chaiImageContainer = document.createElement("div");
      chaiImageContainer.classList.add("chai_image_container");

      chaiImage.appendChild(chaiImageContainer);

      // Step 2: Create chai_club_heading_items
      const headingItems = document.createElement("div");
      headingItems.classList.add("chai_club_heading_items");

      const chaiTitle = document.createElement("div");
      chaiTitle.classList.add("chai_club_title");
      chaiTitle.textContent = h5Text;
      // "The Chai Club is our monthly giving circle — the steady heartbeat of our community";

      const chaiSubtitle = document.createElement("div");
      chaiSubtitle.classList.add("chai_club_subtitle");
      chaiSubtitle.textContent =
        "Your ongoing support sustains programs and services all year long, making a lasting difference for Jewish life in Maine.";

      headingItems.appendChild(chaiTitle);
      headingItems.appendChild(chaiSubtitle);

      // Step 3: Create chai_header and move widgetHeader + widgetContent
      const chaiHeader = document.createElement("div");
      chaiHeader.classList.add("chai_header");

      wrapper.insertBefore(chaiImage, widgetHeader);
      wrapper.insertBefore(headingItems, widgetHeader);
      wrapper.insertBefore(chaiHeader, widgetHeader);

      chaiHeader.appendChild(widgetHeader);
      chaiHeader.appendChild(widgetContent);
    }
  }

  updateChaiSection();

  let triedGallery = false;
  // Gallery
  function updateGallerySection() {
    const widget = document.querySelector(".widget-4.latest_photos");
    if (!widget) return;

    const wrapper = widget.querySelector(".wrapper");
    const widgetHeader = wrapper.querySelector(".widget_header");
    const widgetContent = wrapper.querySelector(".widget_content");
    const ul = widgetContent.querySelector("ul");
    const liItems = ul ? ul.querySelectorAll("li") : [];
    if (!ul) {
      triedGallery = true;
      setTimeout(updateGallerySection, 1000);
    }
    // Grab readMore before we wipe out wrapper
    const readMore = widgetContent.querySelector(".readMore");
    if (!widgetHeader || !widgetContent || !ul) return;

    // Step 1: Create carousel_container
    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel_container");

    // Step 2: Create glide wrapper
    const glide = document.createElement("div");
    glide.className = "glide";

    // Controls wrapper (inside glide so Glide can also optionally bind)
    const controls = document.createElement("div");
    controls.classList.add("carousel_controls");
    controls.setAttribute("data-glide-el", "controls");

    const headingWrapper = document.createElement("div");
    headingWrapper.classList.add("heading_wrapper");

    // Prev arrow
    const prevBtn = document.createElement("button");
    prevBtn.className = "glide__arrow glide__arrow--prev";
    prevBtn.setAttribute("data-glide-dir", "<");
    prevBtn.setAttribute("aria-label", "Previous");
    prevBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M16 9L3.83 9L8 13.1775L8 16L0 8L8 0L8 2.82253L3.83 7L16 7L16 9Z" fill="#93928E"/>
      </svg>
    `;

    // Next arrow
    const nextBtn = document.createElement("button");
    nextBtn.className = "glide__arrow glide__arrow--next";
    nextBtn.setAttribute("data-glide-dir", ">");
    nextBtn.setAttribute("aria-label", "Next");
    nextBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M0 7H12.17L8 2.82253V0L16 8L8 16V13.1775L12.17 9H0V7Z" fill="#93928E"/>
      </svg>
    `;

    // Build heading wrapper (prev + header only)
    headingWrapper.appendChild(prevBtn);
    headingWrapper.appendChild(widgetHeader);

    // Add to controls (prev inside heading_wrapper, next outside it but inside controls)
    controls.appendChild(headingWrapper);
    controls.appendChild(nextBtn);

    // Step 3: Build Glide track
    const track = document.createElement("div");
    track.className = "glide__track";
    track.setAttribute("data-glide-el", "track");

    const slides = document.createElement("ul");
    slides.className = "glide__slides";

    liItems.forEach(li => {
      const slide = document.createElement("li");
      slide.className = "glide__slide";
      // move the anchor (with image) into the slide
      slide.appendChild(li.firstElementChild);
      slides.appendChild(slide);
    });

    track.appendChild(slides);

    // Append controls + track INSIDE glide (Glide expects controls inside the glide root)
    glide.appendChild(controls);
    glide.appendChild(track);

    // Step 4: Replace wrapper content
    wrapper.innerHTML = "";
    carouselContainer.appendChild(glide);
    wrapper.appendChild(carouselContainer);

    // Re-append readMore if it exists (placed under the slider)
    if (readMore) {
      wrapper.appendChild(readMore);
    }

    // Step 5: Initialize Glide on this specific element
    const glideInstance = new Glide(glide, {
      type: "slider",
      autoplay: false,
      animationDuration: 800,
      animationTimingFunc: "ease",
      startAt: 0,
      perView: 3.2,
      gap: 20,
      peek: { before: 0, after: 100 },
      focusAt: 0,
      breakpoints: {
        2560: { perView: 3, peek: { before: 0, after: 0 } },
        1399: { perView: 3.2, peek: { before: 0, after: 120 } },
        900: { perView: 2, peek: { before: 0, after: 80 } },
        500: { perView: 1, peek: { before: 0, after: 50 } }
      }
    });

    glideInstance.mount();

    // ----- Robust manual bindings (guarantee prev/next work) -----
    // If Glide's automatic binding misses the prev button (rare), these handlers will always work.
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      glideInstance.go("<");
    });

    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      glideInstance.go(">");
    });

    // Small style fallback to ensure prev is clickable if overlapped by heading:
    prevBtn.style.position = "relative";
    prevBtn.style.zIndex = "10";
    prevBtn.style.cursor = "pointer";
  }

  updateGallerySection();










  const cards = document.querySelectorAll(".item"); // target all .item cards

  cards.forEach(card => {
    const icon = card.querySelector(".icon");
    const readMore = card.querySelector(".readMore");
    const title = card.querySelector(".title");
    const subtitle = card.querySelector(".subtitle");

    if (!icon || !readMore || !title || !subtitle) return;

    // Create wrappers
    const boxOne = document.createElement("div");
    boxOne.className = "box_one";

    const mergeOne = document.createElement("div");
    mergeOne.className = "mergeone";

    const mergeTwo = document.createElement("div");
    mergeTwo.className = "mergetwo";

    const arrow = document.createElement("div");
    arrow.className = "arrow_point";
    arrow.innerHTML = `<img src="https://cdn.webmk.co/chabad-maine/assets/right_icon_orange.svg" alt="arrow">`; 
    // replace with your arrow image URL

    // Build structure
    mergeOne.appendChild(readMore);
    mergeOne.appendChild(title);

    mergeTwo.appendChild(subtitle);
    mergeTwo.appendChild(arrow);

    boxOne.appendChild(mergeOne);
    boxOne.appendChild(mergeTwo);

    // Insert boxOne after icon
    icon.insertAdjacentElement("afterend", boxOne);
  });

});
