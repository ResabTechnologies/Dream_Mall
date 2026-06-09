/**
 * Central JavaScript Controller & AJAX Router
 * Dream Mall Payyoli
 */

// Mock Database representing all stores and pages for global search
const globalSearchIndex = [
    { name: "Zara", category: "Fashion", floor: "Ground Floor", url: "store-details.html?id=zara", keywords: "clothes, fashion, luxury" },
    { name: "H&M", category: "Fashion", floor: "Ground Floor", url: "store-details.html?id=hm", keywords: "apparel, clothes, trend" },
    { name: "Sony Center", category: "Electronics", floor: "First Floor", url: "store-details.html?id=sony", keywords: "tv, headphone, sound, audio" },
    { name: "Apple iStore", category: "Mobile Stores", floor: "First Floor", url: "store-details.html?id=apple", keywords: "iphone, ipad, mac, laptop" },
    { name: "Malabar Gold", category: "Jewellery", floor: "Ground Floor", url: "store-details.html?id=malabar", keywords: "gold, diamond, ring, ornament" },
    { name: "KFC", category: "Food Court", floor: "Second Floor", url: "store-details.html?id=kfc", keywords: "chicken, burger, food, dining" },
    { name: "Toy Palace", category: "Kids", floor: "Second Floor", url: "store-details.html?id=toy-palace", keywords: "toys, kids, play, children" },
    { name: "Lulu Hypermarket", category: "Grocery", floor: "Ground Floor", url: "store-details.html?id=lulu", keywords: "vegetables, shopping, items, grocery" },
    { name: "Bata", category: "Footwear", floor: "Ground Floor", url: "store-details.html?id=bata", keywords: "shoes, sandals, slippers" },
    { name: "Lakme Salon", category: "Beauty", floor: "Third Floor", url: "store-details.html?id=lakme", keywords: "hair, makeup, facial, massage" }
];

document.addEventListener("DOMContentLoaded", () => {
    initGlobalComponents();
    initRouter();
    initScrollReveal();
    triggerPageSpecificLogic();
});

let globalComponentsInitialized = false;

/* =========================================
   1. GLOBAL SYSTEM COMPONENTS
   ========================================= */
function initGlobalComponents() {
    if (globalComponentsInitialized) return;
    globalComponentsInitialized = true;

    // Header Scroll behavior
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Navigation Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    if (hamburger && navMenu) {
        // Toggle Active
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close Menu when clicking a link
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // Global Search Modal Toggle
    const searchTrigger = document.querySelector(".search-trigger");
    const searchModal = document.querySelector(".search-modal");
    const searchClose = document.querySelector(".search-modal-close");
    const searchInput = document.querySelector(".search-modal-input");
    const searchResults = document.querySelector(".search-results-preview");

    if (searchTrigger && searchModal && searchClose) {
        searchTrigger.addEventListener("click", () => {
            searchModal.style.display = "flex";
            setTimeout(() => searchModal.classList.add("active"), 10);
            searchInput.focus();
        });

        const closeModalFunc = () => {
            searchModal.classList.remove("active");
            setTimeout(() => {
                searchModal.style.display = "none";
                searchInput.value = "";
                searchResults.innerHTML = "";
            }, 300);
        };

        searchClose.addEventListener("click", closeModalFunc);
        
        // Close on ESC key
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && searchModal.classList.contains("active")) {
                closeModalFunc();
            }
        });

        // Search Input Typing Auto-complete
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                searchResults.innerHTML = "";
                return;
            }

            const matches = globalSearchIndex.filter(item => 
                item.name.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.keywords.toLowerCase().includes(query)
            );

            if (matches.length === 0) {
                searchResults.innerHTML = `<div style="padding:15px; color:#fff; text-align:center;">No results match "${e.target.value}"</div>`;
                return;
            }

            searchResults.innerHTML = matches.map(item => `
                <a href="${item.url}" class="search-result-item" data-router-link>
                    <div class="search-result-details">
                        <h5>${item.name}</h5>
                        <p>${item.category} • ${item.floor}</p>
                    </div>
                </a>
            `).join("");

            // Re-bind links inside search results
            searchResults.querySelectorAll("a").forEach(link => {
                link.addEventListener("click", () => {
                    closeModalFunc();
                });
            });
        });
    }

    // Newsletter subscription form handler
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector(".newsletter-input");
            const message = newsletterForm.nextElementSibling;
            if (input && input.value.trim() !== "") {
                message.textContent = "Thank you for subscribing to our newsletter!";
                message.className = "newsletter-message success";
                input.value = "";
                setTimeout(() => {
                    message.className = "newsletter-message";
                }, 5000);
            }
        });
    }
}

/* =========================================
   2. SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================= */
function initScrollReveal() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                obs.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
}

/* =========================================
   3. PROGRESSIVE AJAX ROUTER
   ========================================= */
function initRouter() {
    // Intercept clicks on links with clean relative paths, avoiding external ones
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href) return;

        // Skip non-local anchors, phone/email actions, and dynamic triggers
        if (
            href.startsWith("http") || 
            href.startsWith("mailto:") || 
            href.startsWith("tel:") || 
            href.startsWith("#") ||
            link.hasAttribute("download") ||
            link.hasAttribute("target")
        ) {
            return;
        }

        e.preventDefault();
        navigateTo(href);
    });

    // Handle back/forward navigation
    window.addEventListener("popstate", () => {
        loadPageContent(window.location.pathname + window.location.search, false);
    });
}

function navigateTo(url) {
    loadPageContent(url, true);
}

function loadPageContent(url, pushState = true) {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    // Fade out main content
    mainContent.style.transition = "opacity 0.2s ease";
    mainContent.style.opacity = "0";

    // Show top load bar if needed
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            // Parse response
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            // Extract content and page title
            const newContent = doc.getElementById("main-content");
            const newTitle = doc.title;

            if (!newContent) {
                window.location.href = url; // Fallback
                return;
            }

            // Update title
            document.title = newTitle;

            // Update Header nav state (Active link style)
            updateActiveNavbarLink(url);

            // Update main content structure
            setTimeout(() => {
                mainContent.innerHTML = newContent.innerHTML;
                mainContent.style.opacity = "1";
                
                // Reset scroll position
                window.scrollTo({ top: 0, behavior: "instant" });

                if (pushState) {
                    history.pushState(null, "", url);
                }

                // Re-initialize scripts, lightbox, map hooks, etc.
                initScrollReveal();
                triggerPageSpecificLogic();
            }, 200);
        })
        .catch(err => {
            console.error("Router error: ", err);
            window.location.href = url; // Fallback if fetch fails
        });
}

function updateActiveNavbarLink(url) {
    const path = url.split("?")[0].split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPath = link.getAttribute("href").split("?")[0];
        if (linkPath === path) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

/* =========================================
   4. PAGE-SPECIFIC INITIALIZATIONS TRIGGER
   ========================================= */
function triggerPageSpecificLogic() {
    const page = window.location.pathname.split("/").pop() || "index.html";
    const params = new URLSearchParams(window.location.search);
    
    // Call external functions from js/page-logic.js
    if (typeof window.initPageSpecifics === "function") {
        window.initPageSpecifics(page, params);
    }
}

// Global toast notifier helper
window.showToast = function(message, type = "success") {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "fa-check-circle";
    if (type === "error") icon = "fa-exclamation-circle";
    else if (type === "info") icon = "fa-info-circle";

    toast.innerHTML = `
        <div class="toast-body">
            <span style="font-weight:600;">${message}</span>
        </div>
    `;

    container.appendChild(toast);
    
    // Animate display
    setTimeout(() => toast.classList.add("show"), 10);

    // Remove toast after delay
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 4000);
};
