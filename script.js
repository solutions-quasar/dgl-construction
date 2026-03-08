document.addEventListener('DOMContentLoaded', () => {
    // Translations Object
    const translations = {
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_title: "Building Excellence in <span>Cap-Pelé</span>",
            hero_desc: "Premium craftsmanship for your home and business. From custom decks to commercial warehouses, we bring your vision to life.",
            hero_btn_work: "View Our Work",
            hero_btn_services: "Our Services",
            services_title: "Our Services",
            services_subtitle: "Comprehensive construction solutions tailored to your needs.",
            service_1_title: "General Construction",
            service_1_desc: "Complete building solutions from foundation to finish.",
            service_2_title: "Custom Decks",
            service_2_desc: "Beautiful, durable outdoor living spaces designed for your lifestyle.",
            service_3_title: "Garages & Skirting",
            service_3_desc: "Practical expansions and structural refinements for your property.",
            service_4_title: "Kitchen & Bathroom",
            service_4_desc: "Modern renovations that add value and elegance to your home.",
            service_5_title: "Commercial Warehouses",
            service_5_desc: "Large-scale construction built for efficiency and durability.",
            service_6_title: "And More",
            service_6_desc: "Whatever your project needs, we have the expertise to deliver.",
            portfolio_title: "Our Portfolio",
            portfolio_subtitle: "A glimpse into our recent craftsmanship and builds.",
            contact_title: "Ready to start your project?",
            contact_subtitle: "Contact Daniel G. Leger today for a consultation and estimate.",
            label_phone: "Phone",
            label_location: "Location",
            location_val: "Cap-Pelé, NB",
            cta_title: "Let's Build Together",
            cta_desc: "We pride ourselves on quality and reliability.",
            cta_btn: "Call 506-531-7550",
            btn_see_more: "See More",
            footer_copy: "&copy; 2026 D.G.L Construction. All rights reserved.",
            bottom_nav_menu: "MENU",
            bottom_nav_call: "CALL",
            bottom_nav_email: "EMAIL"
        },
        fr: {
            nav_home: "Accueil",
            nav_services: "Services",
            nav_projects: "Réalisations",
            nav_contact: "Contact",
            hero_title: "Excellence en Construction à <span>Cap-Pelé</span>",
            hero_desc: "Savoir-faire de qualité pour votre maison et votre entreprise. Des terrasses personnalisées aux entrepôts commerciaux, nous donnons vie à votre vision.",
            hero_btn_work: "Voir nos réalisations",
            hero_btn_services: "Nos services",
            services_title: "Nos Services",
            services_subtitle: "Des solutions de construction complètes adaptées à vos besoins.",
            service_1_title: "Construction Générale",
            service_1_desc: "Solutions de construction complètes, de la fondation à la finition.",
            service_2_title: "Terrasses sur mesure",
            service_2_desc: "Espaces de vie extérieurs magnifiques et durables conçus pour votre style de vie.",
            service_3_title: "Garages et Finitions",
            service_3_desc: "Agrandissements pratiques et raffinements structurels pour votre propriété.",
            service_4_title: "Cuisine et Salle de bain",
            service_4_desc: "Rénovations modernes qui ajoutent de la valeur et de l'élégance à votre maison.",
            service_5_title: "Entrepôts Commerciaux",
            service_5_desc: "Construction à grande échelle conçue pour l'efficacité et la durabilité.",
            service_6_title: "Et plus encore",
            service_6_desc: "Quel que soit votre projet, nous avons l'expertise pour le réaliser.",
            portfolio_title: "Notre Portfolio",
            portfolio_subtitle: "Un aperçu de notre savoir-faire et de nos constructions récentes.",
            contact_title: "Prêt à commencer votre projet ?",
            contact_subtitle: "Contactez Daniel G. Leger dès aujourd'hui pour une consultation et une estimation.",
            label_phone: "Téléphone",
            label_location: "Emplacement",
            location_val: "Cap-Pelé, NB",
            cta_title: "Bâtissons Ensemble",
            cta_desc: "Nous sommes fiers de notre qualité et de notre fiabilité.",
            cta_btn: "Appelez le 506-531-7550",
            btn_see_more: "Voir plus",
            footer_copy: "&copy; 2026 D.G.L Construction. Tous droits réservés.",
            bottom_nav_menu: "MENU",
            bottom_nav_call: "APPELER",
            bottom_nav_email: "COURRIEL"
        }
    };

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

    // Gallery Dynamic Loading
    const galleryGrid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const projectImages = [
        '475165562_122204191796245484_6213852786478120702_n.jpg',
        '475248309_122204191562245484_5233948028689497339_n.jpg',
        '475307691_122204911130245484_716092246010723574_n.jpg',
        '475383604_122204911190245484_5002618565173898544_n.jpg',
        '475777806_122204911244245484_6496805272254471405_n.jpg',
        '482128514_122214799712245484_7493595130847445642_n.jpg',
        '482273629_122214334478245484_674082355752496382_n.jpg',
        '495529841_122230041674245484_7395449921688620004_n.jpg',
        '496006241_122231026940245484_6140543784594025167_n.jpg',
        '497500042_122232809090245484_1846065888602483604_n.jpg',
        '499891747_122233159646245484_3516018439512168993_n.jpg',
        '500702765_122235442610245484_5935274952131116699_n.jpg',
        '501317843_122235442280245484_2151381413600840595_n.jpg',
        '501983421_122235442364245484_2801433719374913847_n.jpg',
        '502635767_122235870332245484_4508535127867177139_n.jpg',
        '502843560_122236215026245484_7435148269790994260_n.jpg',
        '508976413_122240148314245484_3427008442587434425_n.jpg',
        '509357727_122240148338245484_2681489289328105368_n.jpg',
        '511091428_122242129634245484_5636196328295239802_n.jpg',
        '513831680_122242129670245484_4095542154599866977_n.jpg',
        '528262163_122249591492245484_3235560333233863481_n.jpg',
        '533486567_122252301188245484_4681591192570448919_n.jpg',
        '536539375_122252873078245484_3301347017811446018_n.jpg',
        '539636452_122254360202245484_4075892185517496763_n.jpg',
        '550473528_122258966636245484_9003378979520251278_n.jpg',
        '592947947_122272807130245484_5948537675873296776_n.jpg',
        '624232492_122282387426245484_8801594742813172050_n.jpg'
    ];

    let itemsShown = 6;

    const renderImages = (start, end) => {
        const imagesToRender = projectImages.slice(start, end);
        imagesToRender.forEach(img => {
            const item = document.createElement('div');
            item.className = 'gallery-item reveal';
            item.innerHTML = `<img src="images/${img}" alt="D.G.L Construction Project" loading="lazy">`;

            item.addEventListener('click', () => {
                const lb = document.createElement('div');
                lb.className = 'lightbox';
                lb.innerHTML = `<img src="images/${img}" alt="Enlarged View"><div class="close-lb">&times;</div>`;
                document.body.appendChild(lb);
                setTimeout(() => lb.classList.add('active'), 10);

                lb.addEventListener('click', () => {
                    lb.classList.remove('active');
                    setTimeout(() => lb.remove(), 500);
                });
            });

            galleryGrid.appendChild(item);
            observer.observe(item);
        });
    };

    if (galleryGrid) {
        renderImages(0, itemsShown);

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                renderImages(itemsShown, projectImages.length);
                loadMoreBtn.style.display = 'none';
                itemsShown = projectImages.length;
            });
        }
    }

    // Mobile Menu Toggle
    const burger = document.getElementById('burger');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    const toggleMenu = () => {
        burger.classList.toggle('toggle');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    };

    if (burger) burger.addEventListener('click', toggleMenu);
    if (menuToggleBtn) menuToggleBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Language Switcher Functionality
    const langBtns = document.querySelectorAll('.lang-btn');

    const translatePage = (lang) => {
        const elements = document.querySelectorAll('[data-t]');
        elements.forEach(el => {
            const key = el.getAttribute('data-t');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update document title if meta_title exists
        if (translations[lang] && translations[lang].meta_title) {
            document.title = translations[lang].nav_home === "Accueil" ?
                `D.G.L Construction | Construction d'Excellence à Cap-Pelé, NB` :
                `D.G.L Construction | Premium General Construction in Cap-Pelé, NB`;
        }

        document.documentElement.lang = lang;
        localStorage.setItem('dgl_lang', lang);
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            translatePage(lang);
        });
    });

    // Set initial language
    const savedLang = localStorage.getItem('dgl_lang') || 'en';
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (activeBtn) {
        langBtns.forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
        translatePage(savedLang);
    }
});
