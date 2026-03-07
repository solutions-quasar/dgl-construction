document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.add('active');
            }
        });
    };

    // Correcting a small logical error in the check
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

    // Gallery Dynamic Loading (Simulated for now with provided images)
    const galleryGrid = document.getElementById('gallery-grid');
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

    projectImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item reveal';
        item.innerHTML = `<img src="images/${img}" alt="D.G.L Construction Project" loading="lazy">`;

        // Simple Lightbox
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

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
    });
});
