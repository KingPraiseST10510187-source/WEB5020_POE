/* ============================================
   GREENFIELD UNITED FOOTBALL CLUB
   Part 3: JavaScript Interactivity
   Student: ST10510187 | DISD1
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // 1. ACTIVE NAVIGATION HIGHLIGHT
    // ------------------------------------------
    const currentPage = window.location.pathname.split("/").pop() || "home.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });


    // ------------------------------------------
    // 2. MOBILE HAMBURGER MENU
    // ------------------------------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("open");
            menuToggle.classList.toggle("open");
            const isOpen = nav.classList.contains("open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    nav.classList.remove("open");
                    menuToggle.classList.remove("open");
                    menuToggle.setAttribute("aria-expanded", "false");
                }
            });
        });
    }


    // ------------------------------------------
    // 3. BACK TO TOP BUTTON
    // ------------------------------------------
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    // ------------------------------------------
    // 4. GALLERY LIGHTBOX
    // ------------------------------------------
    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    if (galleryImages.length > 0 && lightbox && lightboxImg) {
        galleryImages.forEach(function (img) {
            img.addEventListener("click", function () {
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt || "Gallery image";
                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";
            });
        });

        function closeLightbox() {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }

        if (lightboxClose) {
            lightboxClose.addEventListener("click", closeLightbox);
        }

        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && lightbox.classList.contains("active")) {
                closeLightbox();
            }
        });
    }


    // ------------------------------------------
    // 5. ACCORDION
    // ------------------------------------------
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            const item = this.parentElement;
            const isOpen = item.classList.contains("open");

            // Close all other items
            document.querySelectorAll(".accordion-item").forEach(function (el) {
                el.classList.remove("open");
            });

            // Toggle current
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });


    // ------------------------------------------
    // 6. SEARCH / FILTER (Teams & Services)
    // ------------------------------------------
    const searchInput = document.getElementById("teamSearch");
    const teamCards = document.querySelectorAll(".team-card");
    const noResults = document.getElementById("noResults");

    if (searchInput && teamCards.length > 0) {
        searchInput.addEventListener("input", function () {
            const query = this.value.toLowerCase().trim();
            let visibleCount = 0;

            teamCards.forEach(function (card) {
                const text = card.textContent.toLowerCase();
                const ageGroup = card.getAttribute("data-age") || "";
                const match = text.includes(query) || ageGroup.includes(query);

                if (match) {
                    card.style.display = "";
                    card.classList.add("fade-in");
                    visibleCount++;
                } else {
                    card.style.display = "none";
                    card.classList.remove("fade-in");
                }
            });

            if (noResults) {
                noResults.style.display = visibleCount === 0 ? "block" : "none";
            }
        });
    }


    // ------------------------------------------
    // 7. DYNAMIC NEWS / CONTENT LOADER
    // ------------------------------------------
    const newsContainer = document.getElementById("dynamicNews");

    if (newsContainer) {
        const newsData = [
            {
                title: "U15 Team Wins Regional Tournament",
                date: "12 October 2026",
                body: "Our Under-15 team brought home the trophy after a thrilling 3-2 victory in the Regional Youth Championship final. Congratulations to the players and coaching staff!"
            },
            {
                title: "New Training Facilities Open",
                date: "5 October 2026",
                body: "We are excited to announce the opening of our new training facilities at Greenfield Park, featuring two full-size pitches and a modern clubhouse."
            },
            {
                title: "Volunteer Coaches Needed",
                date: "28 September 2026",
                body: "We are looking for passionate volunteer coaches for our Under-11 and Under-13 teams. No formal qualification required – just a love of the game and a willingness to learn."
            },
            {
                title: "Sponsorship Drive Launched",
                date: "15 September 2026",
                body: "Local businesses are invited to partner with GUFC. Multiple sponsorship packages are available. Contact us for a full media pack."
            }
        ];

        newsContainer.innerHTML = "";
        newsData.forEach(function (item, index) {
            const article = document.createElement("article");
            article.className = "news-card fade-in";
            article.style.animationDelay = (index * 0.15) + "s";
            article.innerHTML =
                "<h3>" + item.title + "</h3>" +
                "<p class='news-date'>" + item.date + "</p>" +
                "<p>" + item.body + "</p>";
            newsContainer.appendChild(article);
        });
    }


    // ------------------------------------------
    // 8. FORM VALIDATION - REGISTRATION / ENQUIRY
    // ------------------------------------------
    const registrationForm = document.getElementById("registrationForm");
    const enquiryForm = document.getElementById("enquiryForm");

    function validateRegistrationForm(form) {
        clearErrors(form);
        let isValid = true;

        const playerName = form.querySelector("#playerName");
        if (playerName) {
            if (!playerName.value.trim()) {
                showError(playerName, "Player full name is required.");
                isValid = false;
            } else if (playerName.value.trim().length < 3) {
                showError(playerName, "Please enter a valid full name (at least 3 characters).");
                isValid = false;
            }
        }

        const dob = form.querySelector("#dob");
        if (dob) {
            if (!dob.value) {
                showError(dob, "Date of birth is required.");
                isValid = false;
            } else {
                const birthDate = new Date(dob.value);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
                if (age < 5 || age > 50) {
                    showError(dob, "Player age must be between 5 and 50 years.");
                    isValid = false;
                }
            }
        }

        const ageGroup = form.querySelector("#ageGroup");
        if (ageGroup && !ageGroup.value) {
            showError(ageGroup, "Please select an age group.");
            isValid = false;
        }

        const email = form.querySelector("#email") || form.querySelector("#enquiryEmail");
        if (email) {
            if (!email.value.trim()) {
                showError(email, "Email address is required.");
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError(email, "Please enter a valid email address.");
                isValid = false;
            }
        }

        const phone = form.querySelector("#phone") || form.querySelector("#enquiryPhone");
        if (phone) {
            if (!phone.value.trim()) {
                showError(phone, "Contact number is required.");
                isValid = false;
            } else if (!isValidPhone(phone.value.trim())) {
                showError(phone, "Please enter a valid South African phone number.");
                isValid = false;
            }
        }

        const consent = form.querySelector("#consent");
        if (consent && !consent.checked) {
            showError(consent, "You must agree to the terms and conditions.");
            isValid = false;
        }

        const enquiryType = form.querySelector("#enquiryTypeSelect");
        if (enquiryType && !enquiryType.value) {
            showError(enquiryType, "Please select an enquiry type.");
            isValid = false;
        }

        return isValid;
    }

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (validateRegistrationForm(registrationForm)) {
                // Simulate AJAX submission
                simulateAjaxSubmit(registrationForm,
                    "Registration submitted successfully! A club representative will contact you within 48 hours.");
            }
        });
    }

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (validateRegistrationForm(enquiryForm)) {
                const type = document.getElementById("enquiryTypeSelect");
                let responseMsg = "Thank you for your enquiry! ";
                if (type) {
                    switch (type.value) {
                        case "sponsorship":
                            responseMsg += "Our sponsorship packages start from R2,500/year. A committee member will contact you with the full media pack.";
                            break;
                        case "volunteer":
                            responseMsg += "We currently need coaches for U11 and U13 teams. Someone will reach out within 2 working days.";
                            break;
                        case "registration":
                            responseMsg += "Registration fees are R850 per season. A representative will confirm availability for the selected age group.";
                            break;
                        default:
                            responseMsg += "We will get back to you shortly with the relevant information.";
                    }
                }
                simulateAjaxSubmit(enquiryForm, responseMsg);
            }
        });
    }


    // ------------------------------------------
    // 9. FORM VALIDATION - CONTACT FORM
    // ------------------------------------------
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            clearErrors(contactForm);
            let isValid = true;

            const fullName = document.getElementById("fullName");
            if (!fullName.value.trim()) {
                showError(fullName, "Full name is required.");
                isValid = false;
            } else if (fullName.value.trim().length < 3) {
                showError(fullName, "Please enter a valid full name.");
                isValid = false;
            }

            const contactEmail = document.getElementById("contactEmail");
            if (!contactEmail.value.trim()) {
                showError(contactEmail, "Email address is required.");
                isValid = false;
            } else if (!isValidEmail(contactEmail.value.trim())) {
                showError(contactEmail, "Please enter a valid email address.");
                isValid = false;
            }

            const enquiryType = document.getElementById("enquiryType");
            if (!enquiryType.value) {
                showError(enquiryType, "Please select an enquiry type.");
                isValid = false;
            }

            const message = document.getElementById("message");
            if (!message.value.trim()) {
                showError(message, "Please enter your message.");
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError(message, "Message must be at least 10 characters long.");
                isValid = false;
            }

            if (isValid) {
                // Build mailto link as required by brief
                const subject = encodeURIComponent("GUFC Contact: " + enquiryType.value);
                const body = encodeURIComponent(
                    "Name: " + fullName.value + "\n" +
                    "Email: " + contactEmail.value + "\n" +
                    "Phone: " + (document.getElementById("contactPhone").value || "N/A") + "\n" +
                    "Type: " + enquiryType.value + "\n\n" +
                    message.value
                );
                // Simulate AJAX then offer mailto
                simulateAjaxSubmit(contactForm,
                    "Message prepared successfully! Click the button below to open your email client.",
                    function () {
                        const mailtoBtn = document.createElement("a");
                        mailtoBtn.href = "mailto:info@greenfieldunitedfc.co.za?subject=" + subject + "&body=" + body;
                        mailtoBtn.className = "mailto-btn";
                        mailtoBtn.textContent = "Open Email Client to Send";
                        mailtoBtn.target = "_blank";
                        const success = contactForm.querySelector(".success-message");
                        if (success) success.appendChild(document.createElement("br"));
                        if (success) success.appendChild(mailtoBtn);
                    }
                );
            }
        });
    }


    // ------------------------------------------
    // HELPER FUNCTIONS
    // ------------------------------------------
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        const cleaned = phone.replace(/[\s\-\(\)]/g, "");
        return /^(\+27|0)[1-9][0-9]{8}$/.test(cleaned);
    }

    function showError(input, message) {
        let errorSpan = input.parentElement.querySelector(".error-message");
        if (input.type === "checkbox") {
            errorSpan = document.createElement("span");
            errorSpan.className = "error-message";
            errorSpan.textContent = message;
            input.parentElement.appendChild(errorSpan);
        } else {
            if (!errorSpan) {
                errorSpan = document.createElement("span");
                errorSpan.className = "error-message";
                input.insertAdjacentElement("afterend", errorSpan);
            }
            errorSpan.textContent = message;
        }
        input.classList.add("input-error");
    }

    function clearErrors(form) {
        form.querySelectorAll(".error-message").forEach(function (msg) { msg.remove(); });
        form.querySelectorAll(".input-error").forEach(function (input) {
            input.classList.remove("input-error");
        });
        const successMsg = form.querySelector(".success-message");
        if (successMsg) successMsg.remove();
    }

    function simulateAjaxSubmit(form, message, callback) {
        // Show loading state
        const submitBtn = form.querySelector('input[type="submit"]');
        const originalValue = submitBtn ? submitBtn.value : "";
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.value = "Sending...";
        }

        // Simulate network delay (AJAX)
        setTimeout(function () {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.value = originalValue;
            }
            showSuccessMessage(form, message);
            form.reset();
            if (typeof callback === "function") callback();
        }, 800);
    }

    function showSuccessMessage(form, message) {
        const existing = form.querySelector(".success-message");
        if (existing) existing.remove();

        const successDiv = document.createElement("div");
        successDiv.className = "success-message";
        successDiv.textContent = message;
        form.insertBefore(successDiv, form.firstChild);
        successDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    }

});
