/**
 * Page-Specific Interactive Logic
 * Dream Mall Payyoli
 */

// Centralized Store Database for directory filtering, details loading, and indexing
const storeDatabase = [
    {
        id: "zara",
        name: "Zara",
        category: "Fashion",
        floor: "Ground Floor",
        phone: "+91 496 220 0110",
        hours: "10:00 AM - 10:00 PM",
        description: "Experience premium fashion and global trends with Zara's curated collections for men, women, and kids. Known for design innovation and rapid retail, it delivers fashion-forward apparel right here in Payyoli.",
        banner: "assets/images/banner_fashion.webp",
        logo: "assets/images/store_zara.webp",
        gallery: [
            "assets/images/store_zara.webp",
            "assets/images/gallery_1.webp",
            "assets/images/gallery_2.webp"
        ],
        website: "https://www.zara.com",
        location: "Zone A, Main Atrium Ground"
    },
    {
        id: "hm",
        name: "H&M",
        category: "Fashion",
        floor: "Ground Floor",
        phone: "+91 496 220 0112",
        hours: "10:00 AM - 10:00 PM",
        description: "H&M offers sustainable, stylish and high-quality clothing for everyone. Find standard essentials, streetwear, denim, accessories, and shoes at unmatched value and with eco-conscious practices.",
        banner: "assets/images/banner_fashion.webp",
        logo: "assets/images/store_hm.webp",
        gallery: [
            "assets/images/store_hm.webp",
            "assets/images/gallery_3.webp",
            "assets/images/gallery_4.webp"
        ],
        website: "https://www.hm.com",
        location: "Zone B, Ground Floor Frontage"
    },
    {
        id: "sony",
        name: "Sony Center",
        category: "Electronics",
        floor: "First Floor",
        phone: "+91 496 220 0120",
        hours: "10:00 AM - 09:30 PM",
        description: "Immerse yourself in high-definition entertainment. Discover Sony's flagship line of Bravia Smart TVs, PlayStation consoles, high-fidelity noise-canceling headphones, and alpha-series mirrorless cameras.",
        banner: "assets/images/banner_electronics.webp",
        logo: "assets/images/store_sony.webp",
        gallery: [
            "assets/images/store_sony.webp",
            "assets/images/gallery_5.webp",
            "assets/images/gallery_6.webp"
        ],
        website: "https://www.sony.co.in",
        location: "Zone C, First Floor East Wing"
    },
    {
        id: "apple",
        name: "Apple iStore",
        category: "Mobile Stores",
        floor: "First Floor",
        phone: "+91 496 220 0122",
        hours: "10:00 AM - 10:00 PM",
        description: "The authorized iStore features the complete suite of Apple innovations. Explore iPhones, iPads, MacBook Pros, Apple Watches, and original accessories under the expert guidance of Apple consultants.",
        banner: "assets/images/banner_electronics.webp",
        logo: "assets/images/store_apple.webp",
        gallery: [
            "assets/images/store_apple.webp",
            "assets/images/gallery_7.webp",
            "assets/images/gallery_8.webp"
        ],
        website: "https://www.apple.com/in",
        location: "Central Court, First Floor Lobby"
    },
    {
        id: "malabar",
        name: "Malabar Gold & Diamonds",
        category: "Jewellery",
        floor: "Ground Floor",
        phone: "+91 496 220 0100",
        hours: "09:30 AM - 09:00 PM",
        description: "Renowned for timeless craftsmanship and purity, Malabar Gold showcases exquisite collections of wedding gold, diamonds, platinum, and local traditional Keralite designer ornaments.",
        banner: "assets/images/banner_jewellery.webp",
        logo: "assets/images/store_jewellery.webp",
        gallery: [
            "assets/images/store_jewellery.webp",
            "assets/images/gallery_9.webp",
            "assets/images/gallery_10.webp"
        ],
        website: "https://www.malabargoldanddiamonds.com",
        location: "South Entrance Lobby, Ground Floor"
    },
    {
        id: "kfc",
        name: "KFC",
        category: "Food Court",
        floor: "Second Floor",
        phone: "+91 496 220 0130",
        hours: "11:00 AM - 11:00 PM",
        description: "Satisfy your cravings with KFC's signature Hot & Crispy chicken, delicious Zinger burgers, fresh wraps, and custom family bucket combos in our expansive central food court area.",
        banner: "assets/images/banner_food.webp",
        logo: "assets/images/store_food.webp",
        gallery: [
            "assets/images/store_food.webp",
            "assets/images/gallery_11.webp",
            "assets/images/gallery_12.webp"
        ],
        website: "https://online.kfc.co.in",
        location: "Counter 2, Second Floor Food Court"
    },
    {
        id: "toy-palace",
        name: "Toy Palace",
        category: "Kids",
        floor: "Second Floor",
        phone: "+91 496 220 0132",
        hours: "10:00 AM - 09:30 PM",
        description: "A wonderland for children. Toy Palace offers educational toys, action figures, board games, video game consoles, stuffed animals, and dolls from premier brands worldwide.",
        banner: "assets/images/banner_kids.webp",
        logo: "assets/images/store_kids.webp",
        gallery: [
            "assets/images/store_kids.webp",
            "assets/images/gallery_13.webp",
            "assets/images/gallery_14.webp"
        ],
        website: "#",
        location: "Zone D, Adjacent to Play Area, Second Floor"
    },
    {
        id: "lulu",
        name: "Lulu Hypermarket",
        category: "Grocery",
        floor: "Ground Floor",
        phone: "+91 496 220 0101",
        hours: "09:00 AM - 10:30 PM",
        description: "Lulu Hypermarket offers an unparalleled shopping experience under one roof. Stock up on fresh farm produce, groceries, bakery delights, imported goods, fresh meats, household appliances, and electronics.",
        banner: "assets/images/banner_grocery.webp",
        logo: "assets/images/store_grocery.webp",
        gallery: [
            "assets/images/store_grocery.webp",
            "assets/images/gallery_15.webp",
            "assets/images/gallery_16.webp"
        ],
        website: "https://www.luluhypermarket.in",
        location: "North wing Anchor, Ground Floor"
    },
    {
        id: "bata",
        name: "Bata",
        category: "Footwear",
        floor: "Ground Floor",
        phone: "+91 496 220 0115",
        hours: "10:00 AM - 09:30 PM",
        description: "Walk in comfort and style. Bata delivers high-quality formal leather shoes, casual sneakers, sports shoes, school shoes, and fashion footwear for the whole family with orthopedic and modern designs.",
        banner: "assets/images/banner_footwear.webp",
        logo: "assets/images/store_footwear.webp",
        gallery: [
            "assets/images/store_footwear.webp",
            "assets/images/gallery_17.webp",
            "assets/images/gallery_18.webp"
        ],
        website: "https://www.bata.in",
        location: "Shop 14, Ground Floor West Corridor"
    },
    {
        id: "lakme",
        name: "Lakme Salon",
        category: "Beauty",
        floor: "Third Floor",
        phone: "+91 496 220 0140",
        hours: "10:00 AM - 08:30 PM",
        description: "Lakme Salon brings global beauty trends, state-of-the-art hair treatments, and premium facial therapies to Payyoli. Pamper yourself with services by national-certified beauty experts.",
        banner: "assets/images/banner_beauty.webp",
        logo: "assets/images/store_beauty.webp",
        gallery: [
            "assets/images/store_beauty.webp",
            "assets/images/gallery_19.webp",
            "assets/images/gallery_20.webp"
        ],
        website: "https://www.lakmesalon.in",
        location: "Shop 4, Third Floor Wellness Wing"
    }
];

// Global routing anchor hook called by main.js
window.initPageSpecifics = function(page, params) {
    if (page === "index.html" || page === "") {
        initHomePage();
    } else if (page === "stores.html") {
        initStoresDirectoryPage();
    } else if (page === "store-details.html") {
        initStoreDetailsPage(params);
    } else if (page === "offers.html") {
        initOffersPage();
    } else if (page === "events.html") {
        initEventsPage();
    } else if (page === "gallery.html") {
        initGalleryPage();
    } else if (page === "careers.html") {
        initCareersPage();
    } else if (page === "corporate.html") {
        initCorporatePage();
    } else if (page === "enquiry.html") {
        initFormHandler("enquiry-form", "Enquiry submitted successfully! We will contact you soon.");
    } else if (page === "contact.html") {
        initFormHandler("contact-form", "Your message has been sent successfully!");
        initContactMap();
    } else if (page === "location.html") {
        initLocationPage();
    }
};

/* =========================================
   1. HOME PAGE LOGIC
   ========================================= */
function initHomePage() {
    // Hero Slider Carousel
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".slider-dots");
    const prevArrow = document.querySelector(".slider-arrow-prev");
    const nextArrow = document.querySelector(".slider-arrow-next");
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    // Create Navigation Dots
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        slides.forEach((_, idx) => {
            const dot = document.createElement("button");
            dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
            dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
            dot.addEventListener("click", () => {
                goToSlide(idx);
                resetSlideTimer();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function goToSlide(n) {
        slides[currentSlide].classList.remove("active");
        const dots = document.querySelectorAll(".slider-dot");
        if (dots.length > 0) dots[currentSlide].classList.remove("active");

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add("active");
        if (dots.length > 0) dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    if (prevArrow && nextArrow) {
        prevArrow.addEventListener("click", () => {
            prevSlide();
            resetSlideTimer();
        });
        nextArrow.addEventListener("click", () => {
            nextSlide();
            resetSlideTimer();
        });
    }

    function startSlideTimer() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    startSlideTimer();

    // Home Page Testimonials Slider
    const testimonies = document.querySelectorAll(".testimonial-slide");
    if (testimonies.length > 0) {
        let activeTestimony = 0;
        setInterval(() => {
            testimonies[activeTestimony].classList.remove("active");
            activeTestimony = (activeTestimony + 1) % testimonies.length;
            testimonies[activeTestimony].classList.add("active");
        }, 5000);
    }

    // Home Quick Search Redirect hook
    const quickSearchForm = document.getElementById("quick-search-form");
    if (quickSearchForm) {
        quickSearchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const keyword = document.getElementById("quick-search-input").value;
            const category = document.getElementById("quick-search-cat").value;
            const floor = document.getElementById("quick-search-floor").value;

            // Generate query parameters and redirect to directory
            const params = new URLSearchParams();
            if (keyword) params.append("search", keyword);
            if (category) params.append("cat", category);
            if (floor) params.append("floor", floor);

            navigateTo("stores.html?" + params.toString());
        });
    }

    // Add Your Store Form dynamic submission
    initFormHandler("add-store-form", "Store submission requested! Our leasing team will evaluate your request and respond via email.");
}

/* =========================================
   2. STORES DIRECTORY PAGE LOGIC
   ========================================= */
function initStoresDirectoryPage() {
    const storesContainer = document.getElementById("directory-stores-container");
    if (!storesContainer) return;

    let activeCategory = "All";
    let activeFloor = "All";
    let activeView = "grid"; // grid or list
    let searchKeyword = "";
    let sortOrder = "a-z"; // a-z or z-a

    // Setup Category click listeners
    document.querySelectorAll(".category-filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".category-filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            renderFilteredStores();
        });
    });

    // Setup Floor click listeners
    document.querySelectorAll(".floor-filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".floor-filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFloor = btn.getAttribute("data-floor");
            renderFilteredStores();
        });
    });

    // Sort order selector
    const sortSelect = document.getElementById("directory-sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            sortOrder = e.target.value;
            renderFilteredStores();
        });
    }

    // Search input field
    const dirSearch = document.getElementById("directory-search-input");
    if (dirSearch) {
        dirSearch.addEventListener("input", (e) => {
            searchKeyword = e.target.value.toLowerCase().trim();
            renderFilteredStores();
        });
    }

    // Grid/List Layout toggle triggers
    const gridBtn = document.getElementById("view-grid-btn");
    const listBtn = document.getElementById("view-list-btn");
    
    if (gridBtn && listBtn) {
        gridBtn.addEventListener("click", () => {
            gridBtn.classList.add("active");
            listBtn.classList.remove("active");
            activeView = "grid";
            storesContainer.className = "stores-directory-grid";
            renderFilteredStores();
        });

        listBtn.addEventListener("click", () => {
            listBtn.classList.add("active");
            gridBtn.classList.remove("active");
            activeView = "list";
            storesContainer.className = "stores-directory-list";
            renderFilteredStores();
        });
    }

    // Check query parameters (Home page quick search redirects)
    const params = new URLSearchParams(window.location.search);
    const qSearch = params.get("search");
    const qCat = params.get("cat");
    const qFloor = params.get("floor");

    if (qSearch && dirSearch) {
        dirSearch.value = qSearch;
        searchKeyword = qSearch.toLowerCase().trim();
    }
    if (qCat) {
        activeCategory = qCat;
        document.querySelectorAll(".category-filter-btn").forEach(b => {
            if (b.getAttribute("data-category") === qCat) {
                document.querySelectorAll(".category-filter-btn").forEach(x => x.classList.remove("active"));
                b.classList.add("active");
            }
        });
    }
    if (qFloor) {
        activeFloor = qFloor;
        document.querySelectorAll(".floor-filter-btn").forEach(b => {
            if (b.getAttribute("data-floor") === qFloor) {
                document.querySelectorAll(".floor-filter-btn").forEach(x => x.classList.remove("active"));
                b.classList.add("active");
            }
        });
    }

    // Dynamic filtering and rendering
    function renderFilteredStores() {
        let filtered = storeDatabase.filter(store => {
            const matchesCat = (activeCategory === "All" || store.category === activeCategory);
            const matchesFloor = (activeFloor === "All" || store.floor.includes(activeFloor));
            const matchesSearch = (store.name.toLowerCase().includes(searchKeyword) ||
                                   store.category.toLowerCase().includes(searchKeyword) ||
                                   store.description.toLowerCase().includes(searchKeyword));
            return matchesCat && matchesFloor && matchesSearch;
        });

        // Sorting
        filtered.sort((a, b) => {
            if (sortOrder === "a-z") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        // Update total counts
        const countBadge = document.getElementById("directory-results-count");
        if (countBadge) countBadge.textContent = filtered.length;

        if (filtered.length === 0) {
            storesContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align:center; padding: 60px 20px; background-color:#fff; border-radius: var(--radius-lg);">
                    <i class="fa-search" style="font-size: 3rem; color: var(--color-accent-gold); margin-bottom:15px; display:block;"></i>
                    <h3>No Stores Found</h3>
                    <p style="color:var(--color-text-muted); margin-top:5px;">We couldn't find any stores matching your criteria. Try adjusting your filters.</p>
                </div>
            `;
            return;
        }

        const getFloorAbbr = (f) => {
            if (f.includes("Ground")) return "GF";
            if (f.includes("First")) return "1F";
            if (f.includes("Second")) return "2F";
            if (f.includes("Third")) return "3F";
            return "GF";
        };

        storesContainer.innerHTML = filtered.map(store => `
            <article class="store-card card reveal reveal-visible">
                <div class="card-img">
                    <img src="${store.logo}" class="store-banner-cover" alt="${store.name} storefront" loading="lazy">
                    <div class="store-floor-circle">
                        <span class="floor-abbr">${getFloorAbbr(store.floor)}</span>
                        <span class="floor-label">FLOOR</span>
                    </div>
                    <span class="card-tag">${store.category}</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${store.name}</h3>
                    <p class="card-text">${store.description}</p>
                    <div class="card-footer">
                        <span class="store-contact"><i class="fa-phone"></i> ${store.phone}</span>
                        <a href="store-details.html?id=${store.id}" class="btn btn-gold btn-sm" data-router-link>View Details</a>
                    </div>
                </div>
            </article>
        `).join("");
    }

    renderFilteredStores();
}

/* =========================================
   3. STORE DETAILS PAGE LOGIC
   ========================================= */
function initStoreDetailsPage(params) {
    const storeId = params.get("id") || "zara";
    const store = storeDatabase.find(s => s.id === storeId) || storeDatabase[0];

    // Populate metadata and details fields
    const titleEl = document.getElementById("detail-store-name");
    const titleBreadcrumb = document.getElementById("detail-breadcrumb-name");
    const catEl = document.getElementById("detail-store-cat");
    const descEl = document.getElementById("detail-store-desc");
    const phoneEl = document.getElementById("detail-store-phone");
    const hoursEl = document.getElementById("detail-store-hours");
    const webEl = document.getElementById("detail-store-website");
    const locEl = document.getElementById("detail-store-location");
    const floorEl = document.getElementById("detail-store-floor");
    const largeImg = document.getElementById("detail-large-img");
    const thumbsContainer = document.getElementById("detail-thumbnails");

    if (titleEl) titleEl.textContent = store.name;
    if (titleBreadcrumb) titleBreadcrumb.textContent = store.name;
    if (catEl) catEl.textContent = store.category;
    if (descEl) descEl.textContent = store.description;
    if (phoneEl) phoneEl.textContent = store.phone;
    if (hoursEl) hoursEl.textContent = store.hours;
    if (locEl) locEl.textContent = store.location;
    if (floorEl) floorEl.textContent = store.floor;
    if (webEl) {
        if (store.website !== "#") {
            webEl.setAttribute("href", store.website);
            webEl.textContent = store.name + " Website";
            webEl.style.display = "inline-flex";
        } else {
            webEl.style.display = "none";
        }
    }

    // Set layout floor maps marker offsets for simulated visual floor plan
    const floorMarker = document.getElementById("detail-floor-marker");
    if (floorMarker) {
        // Mock floor positions based on category/id
        if (store.floor.includes("Ground")) {
            floorMarker.style.top = "40%";
            floorMarker.style.left = "35%";
        } else if (store.floor.includes("First")) {
            floorMarker.style.top = "60%";
            floorMarker.style.left = "70%";
        } else if (store.floor.includes("Second")) {
            floorMarker.style.top = "20%";
            floorMarker.style.left = "50%";
        } else {
            floorMarker.style.top = "50%";
            floorMarker.style.left = "50%";
        }
    }

    // Render Gallery
    if (largeImg && store.gallery && store.gallery.length > 0) {
        largeImg.src = store.gallery[0];
        largeImg.alt = `${store.name} Detail Photo`;

        if (thumbsContainer) {
            thumbsContainer.innerHTML = store.gallery.map((imgUrl, idx) => `
                <div class="store-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                    <img src="${imgUrl}" alt="${store.name} Thumbnail ${idx + 1}" loading="lazy">
                </div>
            `).join("");

            // Setup Thumbnail switcher behavior
            thumbsContainer.querySelectorAll(".store-thumb").forEach(thumb => {
                thumb.addEventListener("click", () => {
                    thumbsContainer.querySelectorAll(".store-thumb").forEach(t => t.classList.remove("active"));
                    thumb.classList.add("active");
                    const index = parseInt(thumb.getAttribute("data-index"));
                    largeImg.src = store.gallery[index];
                });
            });
        }
    }
}

/* =========================================
   4. OFFERS PAGE LOGIC
   ========================================= */
function initOffersPage() {
    // Setup Countdown timers
    const countdowns = document.querySelectorAll(".offer-countdown");
    if (countdowns.length === 0) return;

    countdowns.forEach(container => {
        const targetHours = parseInt(container.getAttribute("data-hours-left")) || 48;
        
        // Compute end time based on static page load offset
        const targetTime = new Date().getTime() + (targetHours * 60 * 60 * 1000);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetTime - now;

            if (difference < 0) {
                clearInterval(timer);
                container.innerHTML = "<div style='grid-column: span 4; color:red; font-weight:700;'>OFFER ENDED</div>";
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            const dEl = container.querySelector(".days-val");
            const hEl = container.querySelector(".hours-val");
            const mEl = container.querySelector(".minutes-val");
            const sEl = container.querySelector(".seconds-val");

            if (dEl) dEl.textContent = String(days).padStart(2, '0');
            if (hEl) hEl.textContent = String(hours).padStart(2, '0');
            if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
            if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
        }, 1000);
    });
}

/* =========================================
   5. EVENTS PAGE LOGIC
   ========================================= */
function initEventsPage() {
    // Render static Interactive Month Calendar
    const calendarGrid = document.querySelector(".calendar-grid");
    if (!calendarGrid) return;

    // Build June 2026 Grid
    // June 1st, 2026 is a Monday. June has 30 days.
    // Monday = col 1, Sunday = col 7 (Let's make Monday first column or Sunday)
    // Layout headers: Sun, Mon, Tue, Wed, Thu, Fri, Sat
    // June 1, 2026 is Monday, so Monday index is 1. Empty spots before June 1st: 1 (Sunday)
    const startDayOffset = 1; // 1 empty spot (Sunday)
    const daysInMonth = 30;

    // Core mock events database for Calendar
    const calendarEvents = {
        5: { name: "Summer Fashion Fiesta", desc: "Premium styling fashion workshops", time: "04:00 PM", type: "sale" },
        14: { name: "Tech Launch Expo 2026", desc: "Discover next-generation electronics", time: "11:00 AM", type: "entertainment" },
        21: { name: "Father's Day Kids Carnival", desc: "Children's games & fun play zones", time: "02:00 PM", type: "kids" },
        28: { name: "Kerala Food Fusion Festival", desc: "Local delicacy cooking contests", time: "05:00 PM", type: "food" }
    };

    let calendarHTML = "";

    // Empty cells
    for (let i = 0; i < startDayOffset; i++) {
        calendarHTML += `<div class="calendar-day empty"></div>`;
    }

    // Days listing
    for (let day = 1; day <= daysInMonth; day++) {
        const hasEvent = calendarEvents[day];
        const activeClass = hasEvent ? "active-event" : "";
        const eventTypeClass = hasEvent ? `event-type-${hasEvent.type}` : "";
        const eventDot = hasEvent ? `<span class="calendar-event-dot"></span>` : "";
        const eventLabel = hasEvent ? `
            <span class="calendar-day-event" title="${hasEvent.name}">
                ${hasEvent.name}
            </span>
        ` : "";

        calendarHTML += `
            <div class="calendar-day ${activeClass} ${eventTypeClass}" data-day="${day}">
                <span class="calendar-day-num">${day}</span>
                ${eventDot}
                ${eventLabel}
            </div>
        `;
    }

    calendarGrid.innerHTML = calendarHTML;

    // Calendar Click trigger events
    calendarGrid.querySelectorAll(".active-event").forEach(dayEl => {
        dayEl.addEventListener("click", () => {
            const dayNum = dayEl.getAttribute("data-day");
            const ev = calendarEvents[dayNum];
            if (ev) {
                // Trigger event detail preview modal/toast
                showToast(`Event June ${dayNum}: ${ev.name} at ${ev.time}`, "info");
            }
        });
    });

    // Handle dynamic modal signup clicks
    const modalTrigger = document.querySelector("#event-register-form");
    if (modalTrigger) {
        initFormHandler("event-register-form", "Event registration successful! Your entry pass is emailed.");
    }
}

/* =========================================
   6. GALLERY PAGE LIGHTBOX & FILTERS (GSAP Interactive Showcase)
   ========================================= */
function initGalleryPage() {
    const premiumWrap = document.getElementById("gallery-premium-wrap");
    if (!premiumWrap) return;

    // Loader helper for scripts
    function loadScript(src, callback) {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            if ((src.includes("gsap.min.js") && window.gsap) || 
                (src.includes("ScrollTrigger.min.js") && window.ScrollTrigger)) {
                callback();
            } else {
                existing.addEventListener("load", callback);
            }
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    }

    // Load GSAP and ScrollTrigger sequentially
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js", () => {
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js", () => {
            // Register plugin
            if (window.gsap && window.ScrollTrigger) {
                window.gsap.registerPlugin(window.ScrollTrigger);
                runGalleryAnimations();
            }
        });
    });

    function runGalleryAnimations() {
        const gsap = window.gsap;
        
        // 1. Intro Animation Timeline
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        
        // Rise up the "Small team," text
        tl.to("#gallery-premium-wrap #smallTeam .word > span", {
            y: "0%",
            duration: 1.2,
            stagger: 0.15
        });
        
        // Bring in "big results" letters
        tl.fromTo("#gallery-premium-wrap #bigResults .letter", 
            { y: 80, rotationX: -90, opacity: 0 },
            { y: 0, rotationX: 0, opacity: 1, duration: 1.4, stagger: 0.04, ease: "power4.out" },
            "-=1.0"
        );
        
        // Subline button fade in
        tl.fromTo("#gallery-premium-wrap #subline", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
            "-=0.8"
        );
        
        // 2. Floating Animations & Parallax setup for cards
        const cards = document.querySelectorAll("#gallery-premium-wrap #cardsRow .card");
        
        cards.forEach((card, i) => {
            const rot = parseFloat(card.getAttribute("data-rot")) || 0;
            const img = card.querySelector("img");
            
            // Set initial state
            gsap.set(card, { rotation: rot, transformOrigin: "center center" });
            
            // Floating image effect inside card to prevent transform conflicts on the card itself
            if (img) {
                gsap.set(img, { scale: 1.15 });
                gsap.to(img, {
                    y: 8,
                    duration: 3 + (i % 3) * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.2
                });
            }
        });

        // Mouse move parallax inside Hero (Optimized using gsap.quickTo to avoid lag)
        const heroSection = document.querySelector("#gallery-premium-wrap .hero");
        if (heroSection) {
            // Pre-create quickTo triggers for hardware-accelerated transforms
            cards.forEach(card => {
                const rot = parseFloat(card.getAttribute("data-rot")) || 0;
                card.quickX = gsap.quickTo(card, "x", { duration: 0.8, ease: "power2.out" });
                card.quickY = gsap.quickTo(card, "y", { duration: 0.8, ease: "power2.out" });
                card.quickRot = gsap.quickTo(card, "rotation", { duration: 0.8, ease: "power2.out" });
            });

            heroSection.addEventListener("mousemove", (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                cards.forEach(card => {
                    const depth = parseFloat(card.getAttribute("data-depth")) || 10;
                    const rot = parseFloat(card.getAttribute("data-rot")) || 0;
                    
                    const moveX = (x * depth) / 140;
                    const moveY = (y * depth) / 140;
                    const tilt = x * 0.012;
                    
                    if (card.quickX && card.quickY && card.quickRot) {
                        card.quickX(moveX);
                        card.quickY(moveY);
                        card.quickRot(rot + tilt);
                    }
                });
            });
            
            // Reset to original positions on mouseleave
            heroSection.addEventListener("mouseleave", () => {
                cards.forEach(card => {
                    const rot = parseFloat(card.getAttribute("data-rot")) || 0;
                    if (card.quickX && card.quickY && card.quickRot) {
                        card.quickX(0);
                        card.quickY(0);
                        card.quickRot(rot);
                    }
                });
            });
        }

        // 3. Scroll Trigger Card Fan-out Scrub
        gsap.timeline({
            scrollTrigger: {
                trigger: "#gallery-premium-wrap .hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        })
        .to("#gallery-premium-wrap .card-1", { x: -160, y: -60, rotation: -26 }, 0)
        .to("#gallery-premium-wrap .card-2", { x: -110, y: -40, rotation: -18 }, 0)
        .to("#gallery-premium-wrap .card-3", { x: -70, y: -15, rotation: -10 }, 0)
        .to("#gallery-premium-wrap .card-4", { x: -35, y: 10, rotation: -4 }, 0)
        .to("#gallery-premium-wrap .card-5", { x: 35, y: 10, rotation: 4 }, 0)
        .to("#gallery-premium-wrap .card-6", { x: 70, y: -15, rotation: 10 }, 0)
        .to("#gallery-premium-wrap .card-7", { x: 110, y: -40, rotation: 18 }, 0)
        .to("#gallery-premium-wrap .card-8", { x: 160, y: -60, rotation: 26 }, 0)
        .to("#gallery-premium-wrap #bigResults", { y: -60, scale: 0.96 }, 0);

        // 4. Team Grid Entry Animation
        gsap.from("#gallery-premium-wrap #teamGrid .t-card", {
            scrollTrigger: {
                trigger: "#gallery-premium-wrap #teamGrid",
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            rotation: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out"
        });

        // 5. Statistics Number Counters Animation
        const statNums = document.querySelectorAll("#gallery-premium-wrap .stats .num");
        statNums.forEach(numContainer => {
            const span = numContainer.querySelector("span");
            const target = parseInt(numContainer.getAttribute("data-count")) || 0;
            const obj = { val: 0 };
            
            gsap.to(obj, {
                val: target,
                duration: 2.2,
                ease: "power2.out",
                onUpdate: function() {
                    if (span) {
                        span.textContent = Math.floor(obj.val);
                    }
                },
                scrollTrigger: {
                    trigger: numContainer,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }
}

/* =========================================
   7. CAREERS PAGE LOGIC
   ========================================= */
function initCareersPage() {
    // Vacancy Accordions selector
    const headers = document.querySelectorAll(".vacancy-header");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains("open");
            
            // Close all
            document.querySelectorAll(".vacancy-item").forEach(v => v.classList.remove("open"));

            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });

    // Form attachment label handler
    const fileInput = document.getElementById("career-resume");
    const fileLabel = document.getElementById("file-upload-label");
    if (fileInput && fileLabel) {
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                // Size validation (< 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    showToast("Resume file size must be less than 5MB.", "error");
                    fileInput.value = "";
                    fileLabel.innerHTML = `<i class="fa-cloud-upload"></i> Choose PDF/DOCX Resume`;
                    return;
                }
                fileLabel.innerHTML = `<i class="fa-file-pdf" style="color:#10b981;"></i> <strong>${file.name}</strong> (${(file.size/1024/1024).toFixed(2)} MB)`;
            }
        });
    }

    // Submit Application handler
    initFormHandler("career-apply-form", "Application submitted successfully! Our HR department will contact you soon.");
}

/* =========================================
   8. CORPORATE PAGE LOGIC (Calculator)
   ========================================= */
function initCorporatePage() {
    const spaceInput = document.getElementById("calc-space-sqft");
    const spaceVal = document.getElementById("calc-space-val");
    const estRent = document.getElementById("calc-rent-val");
    const spaceType = document.getElementById("calc-space-type");

    if (!spaceInput || !spaceVal || !estRent) return;

    function calculateEstimatedLease() {
        const sqft = parseInt(spaceInput.value);
        const type = spaceType ? spaceType.value : "retail";
        
        spaceVal.textContent = sqft.toLocaleString();

        // Base rate configurations per square foot in Payyoli Mall
        // Retail: 120 Rs/sqft, Food Court: 160 Rs/sqft, Kiosk: 200 Rs/sqft, Office: 90 Rs/sqft
        let rate = 120;
        if (type === "food") rate = 160;
        else if (type === "kiosk") rate = 200;
        else if (type === "office") rate = 90;

        const totalRent = sqft * rate;
        estRent.textContent = "₹ " + totalRent.toLocaleString("en-IN") + " / month";
    }

    spaceInput.addEventListener("input", calculateEstimatedLease);
    if (spaceType) spaceType.addEventListener("change", calculateEstimatedLease);

    calculateEstimatedLease();
}

/* =========================================
   9. FORMS SUBMISSION HANDLER (AJAX Simulation)
   ========================================= */
function initFormHandler(formId, successMsg) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Front-end inputs validation
        let isValid = true;
        form.querySelectorAll("input[required], select[required], textarea[required]").forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = "#ef4444";
                isValid = false;
            } else {
                input.style.borderColor = "";
            }
        });

        if (!isValid) {
            showToast("Please fill in all required fields.", "error");
            return;
        }

        // Simulate AJAX request
        const submitBtn = form.querySelector("button[type='submit']");
        const originalText = submitBtn ? submitBtn.innerHTML : "Submit";
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner" style="display:inline-block; width:16px; height:16px; border:2px solid #fff; border-top-color:transparent; border-radius:50%; animation:spin 0.8s linear infinite; margin-right:8px; vertical-align:middle;"></span> Submitting...`;
        }

        // Inject simulated spin keyframes
        if (!document.getElementById("spinner-styles")) {
            const style = document.createElement("style");
            style.id = "spinner-styles";
            style.innerHTML = "@keyframes spin { to { transform: rotate(360deg); } }";
            document.head.appendChild(style);
        }

        setTimeout(() => {
            // Success response
            showToast(successMsg, "success");
            form.reset();
            
            // Reset files upload wrapper labels if present
            const fileLabel = form.querySelector("#file-upload-label");
            if (fileLabel) {
                fileLabel.innerHTML = `<i class="fa-cloud-upload"></i> Choose PDF/DOCX Resume`;
            }

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        }, 1500);
    });
}

/* =========================================
   10. CONTACT US GOOGLE MAP OVERLAY
   ========================================= */
function initContactMap() {
    const mapContainer = document.getElementById("contact-map-wrapper");
    if (!mapContainer) return;
    
    // Google Map with interactive directions iframe
    mapContainer.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.3703901968875!2d75.6425982!3d11.5252876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba68fac87c10b4f%3A0xad0e77d01869e578!2sPayyoli%2C%20Kerala!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin" 
            style="border:0; width:100%; height:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
}

/* =========================================
   11. MALL LOCATION PAGE DIRECTION SOLVER
   ========================================= */
function initLocationPage() {
    const selectLoc = document.getElementById("location-start-point");
    const directionsOutput = document.getElementById("directions-solver-output");

    if (!selectLoc || !directionsOutput) return;

    // Simulated guide data from landmarks
    const directionsData = {
        clt: {
            dist: "40 km",
            time: "1 hour 15 mins",
            steps: [
                "Start from Kozhikode City center towards NH 66 heading North.",
                "Pass through Elathur, Koyilandy, and Nandi.",
                "Once you cross Nandi, proceed 5 km North to enter Payyoli town.",
                "Dream Mall is on the right-hand side of NH 66, next to the central signal junction."
            ]
        },
        can: {
            dist: "55 km",
            time: "1 hour 30 mins",
            steps: [
                "Head South from Kannur town along NH 66.",
                "Cross Dharmadam Bridge, pass through Thalassery, Mahe (UT), and Vatakara.",
                "Drive South from Vatakara for approximately 12 km to reach Payyoli town.",
                "Dream Mall is on the left-hand side of NH 66, just before the central junction."
            ]
        },
        vat: {
            dist: "12 km",
            time: "20 mins",
            steps: [
                "Follow NH 66 South from Vatakara Bus Stand/Railway station area.",
                "Pass through Moorad Bridge and Iringal.",
                "Continue straight into Payyoli town limits.",
                "Dream Mall is located on the left side of NH 66."
            ]
        }
    };

    selectLoc.addEventListener("change", (e) => {
        const val = e.target.value;
        if (!val) {
            directionsOutput.innerHTML = `<p style="color:var(--color-text-muted);">Select a starting point above to calculate distances and generate step-by-step route directions.</p>`;
            return;
        }

        const data = directionsData[val];
        if (data) {
            directionsOutput.innerHTML = `
                <div style="background-color:var(--color-bg-light); padding:20px; border-radius:var(--radius-md); border-left:4px solid var(--color-accent-gold); margin-bottom:20px;">
                    <div style="display:flex; justify-content:space-between; font-weight:600; color:var(--color-text-dark);">
                        <span>Estimated Distance: ${data.dist}</span>
                        <span>Approximate Duration: ${data.time}</span>
                    </div>
                </div>
                <div class="route-guide-steps">
                    ${data.steps.map((step, idx) => `
                        <div class="route-step">
                            <span class="route-step-num">${idx + 1}</span>
                            <p class="route-step-text">${step}</p>
                        </div>
                    `).join("")}
                </div>
            `;
        }
    });
}
