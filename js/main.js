const header = document.querySelector('.header:not(.header--fixed)');
const fixedHeader = document.querySelector('.header--fixed');
const mainNav = document.querySelector('.main-nav');

function updateHeader() {

    const fixedHeight = fixedHeader.offsetHeight;

    // main-nav qaysi joydan sticky boshlanishi
    mainNav.style.top = fixedHeight + 'px';

    if (window.scrollY > 50) {
        fixedHeader.classList.add('is-visible');
    } else {
        fixedHeader.classList.remove('is-visible');
    }

}

window.addEventListener('scroll', updateHeader);
window.addEventListener('resize', updateHeader);
window.addEventListener('load', updateHeader);


document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (!target) return;

        const header = document.querySelector('.header--fixed');
        const nav = document.querySelector('.main-nav');

        const offset =
            (header?.offsetHeight || 0) +
            (nav?.offsetHeight || 0);

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        animateScroll(targetPosition, 1000);
    });
});

function animateScroll(target, duration) {

    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {

        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;

        const progress = Math.min(timeElapsed / duration, 1);

        const ease =
            progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}


const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".main-nav__item");

function updateActiveNav() {

    const headerHeight =
        (fixedHeader?.offsetHeight || 0) +
        (mainNav?.offsetHeight || 0);

    let currentSection = "";

    sections.forEach(section => {
        const top = section.offsetTop - headerHeight - 50;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            currentSection = section.id;
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");

        const link = item.querySelector("a");

        if (!link) return;

        if (link.getAttribute("href") === "#" + currentSection) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


const reviewsSwiperEl = document.querySelector('.reviews__swiper');

if (reviewsSwiperEl && typeof Swiper !== 'undefined') {
    const reviewsSwiper = new Swiper(reviewsSwiperEl, {
        spaceBetween: 30,
        slidesPerView: 4,
        grabCursor: true,
        autoHeight: true,
        navigation: {
            nextEl: '.reviews__nav--next',
            prevEl: '.reviews__nav--prev',
        },
        pagination: {
            el: '.reviews__pagination',
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                autoHeight: true,
            },
            768: {
                slidesPerView: 2,
                autoHeight: false,
            },
            1201: {
                slidesPerView: 3,
                autoHeight: false,
            },
            1401: {
                slidesPerView: 4,
                autoHeight: false,
            },
        },
    });

    // Update height on slide change for better mobile experience
    const updateSwiperHeight = () => {
        setTimeout(() => {
            reviewsSwiper.updateAutoHeight();
        }, 100);
    };

    reviewsSwiper.on('slideChange', updateSwiperHeight);
    reviewsSwiper.on('init', updateSwiperHeight);
}

const discountSwiperEl = document.querySelector('.clients__swiper');

if (discountSwiperEl && typeof Swiper !== 'undefined') {
    new Swiper(discountSwiperEl, {
        spaceBetween: 14,
        slidesPerView: 7,
        grabCursor: true,
        navigation: {
            nextEl: '.clients__nav--next',
            prevEl: '.clients__nav--prev',
        },
        pagination: {
            el: '.clients__pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1201: {
                slidesPerView: 4,
            },
            1401: {
                slidesPerView: 6,
            },
            1601: {
                slidesPerView: 7,
            },
        },
    });
}

const examplesSwiperEl = document.querySelector('.works__swiper');

if (examplesSwiperEl && typeof Swiper !== 'undefined') {
    new Swiper(examplesSwiperEl, {
        slidesPerView: 3,
        spaceBetween: 90,
        slideToClickedSlide: true,
        // grabCursor: true,
        navigation: {
            nextEl: '.works__nav--next',
            prevEl: '.works__nav--prev',
        },
        pagination: {
            el: '.works__pagination',
            clickable: true,
        },
        clickable: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1380: {
                slidesPerView: 3,
            },
        },
    });
}

// Initialize steps swiper for mobile
const stepsSwiperEl = document.querySelector('.steps-wrapper-swiper');

if (stepsSwiperEl && typeof Swiper !== 'undefined') {
    new Swiper(stepsSwiperEl, {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 1,
        grabCursor: true,
        pagination: {
            el: '.steps__pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
        },
    });
}

const documentsSwiperEl = document.querySelector('.documents__swiper');

new Swiper('.documents__swiper', {
    observer: true,
    observeParents: true,

    slidesPerView: 6,
    spaceBetween: 30,

    navigation: {
        nextEl: '.documents__nav--next',
        prevEl: '.documents__nav--prev',
    },

    pagination: {
        el: '.documents__pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        }
    }
});

const faqItems = document.querySelectorAll('.faq__item');

if (faqItems) {
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}


// header menu modals
const headerHamburger = document.querySelector('.header__hamburger');
const headerMenu = document.querySelector('.header__menu');
const headerMenuClose = document.querySelector('.menu__close');
const consultationModal = document.querySelector('.consultation-modal');
const consultationModalOpenButtons = document.querySelectorAll('.js-open-consultation');
const consultationModalCloseButtons = consultationModal ? consultationModal.querySelectorAll('[data-modal-close]') : [];
const privacyModal = document.querySelector('.privacy-modal');
const privacyModalOpenButtons = document.querySelectorAll('.js-open-privacy');
const privacyModalCloseButtons = privacyModal ? privacyModal.querySelectorAll('[data-privacy-close]') : [];
const mapModal = document.querySelector('.map-modal');
const mapModalOpenButtons = document.querySelectorAll('.js-open-map-modal');
const mapModalCloseButtons = mapModal ? mapModal.querySelectorAll('[data-map-close]') : [];
const thanksModal = document.querySelector('.thanks_modal');
const thanksModalOpenButtons = document.querySelectorAll('.js-open-thanks');
const thanksModalCloseButtons = thanksModal
    ? thanksModal.querySelectorAll('[data-modal-close]')
    : [];
const skidkaModal = document.querySelector('.skidka-modal');
const skidkaModalOpenButtons = document.querySelectorAll('.js-open-skidka');
const skidkaModalCloseButtons = skidkaModal
    ? skidkaModal.querySelectorAll('[data-modal-close]')
    : [];
const stockModal = document.querySelector('.stock-modal');
const stockModalOpenButtons = document.querySelectorAll('.js-open-stock');
const stockModalCloseButtons = stockModal
    ? stockModal.querySelectorAll('[data-modal-close]')
    : [];
const serviceModal = document.querySelector('.service-modal');
const serviceModalOpenButtons = document.querySelectorAll('.js-open-service');
const serviceModalCloseButtons = serviceModal
    ? serviceModal.querySelectorAll('[data-modal-close]')
    : [];

const rashetModal = document.querySelector('.rashet-modal');
const rashetModalOpenButtons = document.querySelectorAll('.js-open-rashet');
const rashetModalCloseButtons = rashetModal
    ? rashetModal.querySelectorAll('[data-modal-close]')
    : [];




if (headerHamburger && headerMenu) {
    headerHamburger.addEventListener('click', () => {
        headerMenu.classList.add('active');
    });
}

if (headerMenuClose && headerMenu) {
    headerMenuClose.addEventListener('click', () => {
        headerMenu.classList.remove('active');
    });
}

if (consultationModal) {
    const openConsultationModal = (e) => {
        e.preventDefault();
        if (privacyModal) {
            privacyModal.classList.remove('active');
            privacyModal.setAttribute('aria-hidden', 'true');
        }
        consultationModal.classList.add('active');
        consultationModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeConsultationModal = (e) => {
        consultationModal.classList.remove('active');
        consultationModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    };

    consultationModalOpenButtons.forEach(button => {
        button.addEventListener('click', openConsultationModal);
    });

    consultationModalCloseButtons.forEach(button => {
        button.addEventListener('click', closeConsultationModal);
    });

    consultationModal.addEventListener('click', (event) => {
        if (event.target === consultationModal) {
            closeConsultationModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && consultationModal.classList.contains('active')) {
            closeConsultationModal();
        }
    });
}

if (privacyModal) {
    let consultationWasOpen = false; // Track if consultation modal was open before opening privacy modal

    const openPrivacyModal = (event) => {
        if (event) {
            event.preventDefault();
        }
        // Track if consultation modal is currently open
        consultationWasOpen = consultationModal && consultationModal.classList.contains('active');

        privacyModal.classList.add('active');
        privacyModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closePrivacyModal = () => {
        privacyModal.classList.remove('active');
        privacyModal.setAttribute('aria-hidden', 'true');

        // Only remove modal-open class if consultation modal is not open
        if (!consultationWasOpen) {
            document.body.classList.remove('modal-open');
        }
    };

    privacyModalOpenButtons.forEach(button => {
        button.addEventListener('click', openPrivacyModal);
    });

    privacyModalCloseButtons.forEach(button => {
        button.addEventListener('click', closePrivacyModal);
    });

    privacyModal.addEventListener('click', (event) => {
        if (event.target === privacyModal) {
            closePrivacyModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && privacyModal.classList.contains('active')) {
            closePrivacyModal();
        }
    });
}

if (mapModal) {
    const openMapModal = (event) => {
        if (event) {
            event.preventDefault();
        }

        mapModal.classList.add('active');
        mapModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeMapModal = () => {
        mapModal.classList.remove('active');
        mapModal.setAttribute('aria-hidden', 'true');

        if (!consultationModal?.classList.contains('active') && !privacyModal?.classList.contains('active')) {
            document.body.classList.remove('modal-open');
        }
    };

    mapModalOpenButtons.forEach(button => {
        button.addEventListener('click', openMapModal);
    });

    mapModalCloseButtons.forEach(button => {
        button.addEventListener('click', closeMapModal);
    });

    mapModal.addEventListener('click', (event) => {
        if (event.target === mapModal) {
            closeMapModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mapModal.classList.contains('active')) {
            closeMapModal();
        }
    });
}

if (thanksModal) {
    const openThanksModal = (event) => {
        if (event) event.preventDefault();

        if (consultationModal) {
            consultationModal.classList.remove('active');
            consultationModal.setAttribute('aria-hidden', 'true');
        }

        if (skidkaModal) {
            skidkaModal.classList.remove('active');
            skidkaModal.setAttribute('aria-hidden', 'true');
        }

        if (stockModal) {
            stockModal.classList.remove('active');
            stockModal.setAttribute('aria-hidden', 'true');
        }

        if (serviceModal) {
            serviceModal.classList.remove('active');
            serviceModal.setAttribute('aria-hidden', 'true');
        }

        if (rashetModal) {
            rashetModal.classList.remove('active');
            rashetModal.setAttribute('aria-hidden', 'true');
        }

        thanksModal.classList.add('active');
        thanksModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeThanksModal = () => {
        thanksModal.classList.remove('active');
        thanksModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    };

    thanksModalOpenButtons.forEach(button => {
        button.addEventListener('click', openThanksModal);
    });

    thanksModalCloseButtons.forEach(button => {
        button.addEventListener('click', closeThanksModal);
    });

    thanksModal.addEventListener('click', (event) => {
        if (event.target === thanksModal) {
            closeThanksModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && thanksModal.classList.contains('active')) {
            closeThanksModal();
        }
    });
}

if (skidkaModal) {
    const openSkidkaModal = (event) => {
        if (event) event.preventDefault();

        skidkaModal.classList.add('active');
        skidkaModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeSkidkaModal = () => {
        skidkaModal.classList.remove('active');
        skidkaModal.setAttribute('aria-hidden', 'true');

        document.body.classList.remove('modal-open');
    };

    skidkaModalOpenButtons.forEach(button => {
        button.addEventListener('click', openSkidkaModal);
    });

    skidkaModalCloseButtons.forEach(button => {
        button.addEventListener('click', closeSkidkaModal);
    });

    skidkaModal.addEventListener('click', (event) => {
        if (event.target === skidkaModal) {
            closeSkidkaModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && skidkaModal.classList.contains('active')) {
            closeSkidkaModal();
        }
    });
}

if (stockModal) {
    const openStockModal = (event) => {
        if (event) event.preventDefault();

        stockModal.classList.add('active');
        stockModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeStockModal = () => {
        stockModal.classList.remove('active');
        stockModal.setAttribute('aria-hidden', 'true');

        if (
            !consultationModal?.classList.contains('active') &&
            !privacyModal?.classList.contains('active') &&
            !thanksModal?.classList.contains('active')
        ) {
            document.body.classList.remove('modal-open');
        }
    };

    stockModalOpenButtons.forEach(button => {
        button.addEventListener('click', openStockModal);
    });

    stockModalCloseButtons.forEach(button => {
        button.addEventListener('click', closeStockModal);
    });

    stockModal.addEventListener('click', (event) => {
        if (event.target === stockModal) {
            closeStockModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && stockModal.classList.contains('active')) {
            closeStockModal();
        }
    });
}

if (serviceModal) {
    const openServiceModal = (event) => {
        if (event) event.preventDefault();

        serviceModal.classList.add('active');
        serviceModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeServiceModal = () => {
        serviceModal.classList.remove('active');
        serviceModal.setAttribute('aria-hidden', 'true');

        if (
            !consultationModal?.classList.contains('active') &&
            !privacyModal?.classList.contains('active') &&
            !thanksModal?.classList.contains('active')
        ) {
            document.body.classList.remove('modal-open');
        }
    };

    serviceModalOpenButtons.forEach(button => {
        button.addEventListener('click', openServiceModal);
    });

    serviceModalCloseButtons.forEach(button => {
        button.addEventListener('click', closeServiceModal);
    });

    serviceModal.addEventListener('click', (event) => {
        if (event.target === serviceModal) {
            closeServiceModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && serviceModal.classList.contains('active')) {
            closeServiceModal();
        }
    });
}

if (rashetModal) {
    const openRashetModal = (event) => {
        if (event) event.preventDefault();

        rashetModal.classList.add('active');
        rashetModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeRashetModal = () => {
        rashetModal.classList.remove('active');
        rashetModal.setAttribute('aria-hidden', 'true');

        if (
            !consultationModal?.classList.contains('active') &&
            !privacyModal?.classList.contains('active') &&
            !thanksModal?.classList.contains('active')
        ) {
            document.body.classList.remove('modal-open');
        }
    };

    rashetModalOpenButtons.forEach(button => {
        button.addEventListener('click', openRashetModal);
    });

    rashetModalCloseButtons.forEach(button => {
        button.addEventListener('click', closeRashetModal);
    });

    rashetModal.addEventListener('click', (event) => {
        if (event.target === rashetModal) {
            closeRashetModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && rashetModal.classList.contains('active')) {
            closeRashetModal();
        }
    });
}







document.querySelectorAll('.card_catalog').forEach(card => {

    const main = card.querySelector('.texts_main_card');
    const chars = card.querySelector('.charecters_texts');
    const price = card.querySelector('.pricing_texts');

    const links = card.querySelectorAll('.charecters a');

    function hideAll() {
        main.classList.remove('active');
        chars.classList.remove('active');
        price.classList.remove('active');

        links.forEach(link => link.classList.remove('active'));
    }

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const isActive = this.classList.contains('active');

            hideAll();

            // Agar shu tab oldin active bo'lgan bo'lsa,
            // hammasini yopib mainni qaytaramiz
            if (isActive) {
                main.classList.add('active');
                return;
            }

            // Aks holda tanlangan tabni ochamiz
            this.classList.add('active');

            if (this.dataset.tab === 'char') {
                chars.classList.add('active');
            }

            if (this.dataset.tab === 'price') {
                price.classList.add('active');
            }
        });
    });

    // Sahifa ochilganda asosiy blok
    main.classList.add('active');
});



