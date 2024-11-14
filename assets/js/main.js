"use strict";

const translations = {
    en: {
        hello: "👋 Hello!",
        homepage: "This is the homepage of",
        contactMe: "💬 Contact Me",
        mail: "📧 Email",
        corporate: "🎓 Corporate email",
        telegram: "💌 Telegram",
        seeAlso: "👀 See Also",
        linkedIn: "💻 LinkedIn",
        gitHub: "👨‍💻 GitHub",
        portfolio: "💼 Portfolio",
        holdings: "📈 Holdings",
        wallets: "💰 Wallets",
        statusPrefix: "Right now I’m:",
        checkingStatus: "⏳ Checking the status...",
        statusMessages: {
            SLEEPING: "💤 Sleeping...",
            BUSY: "⚠️ Busy. ⛔ Do Not Disturb",
            AVAILABLE: "✅ Available for messaging, calls will be declined 📵",
            WEEKEND: "✨ On a weekend. 📳 Enjoying real life 🏞️",
            HOLIDAY: "🎉 On a holiday celebration with my family!"
        },
        footerGreetings: "Greetings to",
        footerCopyright: "© Rakin Ilia"
    },
    fi: {
        hello: "👋 Tervetuloa!",
        homepage: "Tämä on ",
        contactMe: "💬 Ota Yhteyttä",
        mail: "📧 Sähköposti",
        corporate: "🎓 Yrityssähköposti",
        telegram: "💌 Telegramissa",
        seeAlso: "👀 Katso Myös",
        linkedIn: "💻 LinkedIn:ssä",
        gitHub: "👨‍💻 GitHubissa",
        portfolio: "💼 Salkku",
        holdings: "📈 Pääoma",
        wallets: "💰 Lompakot",
        statusPrefix: "Tällä hetkellä olen:",
        checkingStatus: "⏳ Tarkistetaan tilanne...",
        statusMessages: {
            SLEEPING: "💤 Nukkumassa...",
            BUSY: "⚠️ Kiireinen. ⛔ Älä häiritse",
            AVAILABLE: "✅ Viesteille avoin, puhelut kieltäydytään 📵",
            WEEKEND: "✨ Viikonloppu. 📳 Nauttii oikeasta elämästä 🏞️",
            HOLIDAY: "🎉 Lomalla perheen kanssa!"
        },
        footerGreetings: "Terveisiä",
        footerCopyright: "© Rakin Ilia"
    },
    ru: {
        hello: "👋 Привет!",
        homepage: "Это сайт-визитка у ",
        contactMe: "💬 Свяжитесь со мной",
        mail: "📧 Личная почта",
        corporate: "🎓 Корпоративная почта",
        telegram: "💌 Телеграм",
        seeAlso: "👀 Также смотрите",
        linkedIn: "💻 LinkedIn",
        gitHub: "👨‍💻 GitHub",
        portfolio: "💼 Портфель",
        holdings: "📈 Активы",
        wallets: "💰 Кошельки",
        statusPrefix: "Сейчас я:",
        checkingStatus: "⏳ Проверяю статус...",
        statusMessages: {
            SLEEPING: "💤 Сплю...",
            BUSY: "⚠️ Занят. ⛔ Не беспокоить",
            AVAILABLE: "✅ Доступен для сообщений, но звонки не принимаю 📵",
            WEEKEND: "✨ На выходных. 📳 Наслаждаюсь жизнью 🏞️",
            HOLIDAY: "🎉 На отдыхе с семьей!"
        },
        footerGreetings: "Передаю привет",
        footerCopyright: "© Илья Ракин"
    },
    de: {
        hello: "👋 Hallo!",
        homepage: "Dies ist die Homepage von",
        contactMe: "💬 Kontaktiere mich",
        mail: "📧 E-Mail",
        corporate: "🎓 Firmen-E-Mail",
        telegram: "💌 Telegram",
        seeAlso: "👀 Siehe auch",
        linkedIn: "💻 LinkedIn",
        gitHub: "👨‍💻 GitHub",
        portfolio: "💼 Portfolio",
        holdings: "📈 Beteiligungen",
        wallets: "💰 Wallets",
        statusPrefix: "Zurzeit bin ich:",
        checkingStatus: "⏳ Status wird überprüft...",
        statusMessages: {
            SLEEPING: "💤 Schläft...",
            BUSY: "⚠️ Beschäftigt. ⛔ Nicht stören",
            AVAILABLE: "✅ Verfügbar für Nachrichten, Anrufe werden abgelehnt 📵",
            WEEKEND: "✨ Am Wochenende. 📳 Genieße das echte Leben 🏞️",
            HOLIDAY: "🎉 Feiert mit der Familie!"
        },
        footerGreetings: "Grüße an",
        footerCopyright: "© Rakin Ilia"
    }
};

// Language Switcher Logic
function switchLanguage(lang) {
    document.querySelector("h1.hello").textContent = translations[lang].hello;
    document.querySelector(".homepage-text").textContent = translations[lang].homepage;
    document.querySelector("h2.contact-me").textContent = translations[lang].contactMe;
    document.querySelector("span.mail-label").textContent = translations[lang].mail + ":";
    document.querySelector("span.corporate-label").textContent = translations[lang].corporate + ":";
    document.querySelector("span.telegram-label").textContent = translations[lang].telegram + ":";
    document.querySelector("h2.see-also").textContent = translations[lang].seeAlso;
    document.querySelector("span.linkedIn-label").textContent = translations[lang].linkedIn + ":";
    document.querySelector("span.github-label").textContent = translations[lang].gitHub + ":";
    document.querySelector("h2.portfolio").textContent = translations[lang].portfolio + ":";
    document.querySelector("span.holdings").textContent = translations[lang].holdings + ":";
    document.querySelector("h2.wallets").textContent = translations[lang].wallets;
    document.querySelector("#song-status").textContent = translations[lang].currentlyListening;
    document.querySelector("#status-prefix").textContent = translations[lang].statusPrefix;

    document.querySelector("#status").textContent = translations[lang].checkingStatus;

    document.querySelector(".footer-greetings").textContent = translations[lang].footerGreetings;
    document.querySelector(".footer-copyright").textContent = translations[lang].footerCopyright;

    setTimeout(() => {
        updateStatusMessage(lang);
    }, 1000);
}

function updateStatusMessage(lang) {
    const currentHour = new Date().getHours();
    let status = "";

    if (currentHour >= 23 || currentHour < 9) {
        status = translations[lang].statusMessages.SLEEPING;
    } else if (currentHour >= 9 && currentHour < 17) {
        status = translations[lang].statusMessages.BUSY;
    } else {
        status = translations[lang].statusMessages.AVAILABLE;
    }

    document.querySelector("#status").textContent = status;
}

function saveLanguagePreference(lang) {
    localStorage.setItem("preferredLanguage", lang);
}

function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return savedLanguage || 'en'; // default to English if no preference is found
}

document.getElementById("languageSwitcher").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    switchLanguage(selectedLanguage);
    saveLanguagePreference(selectedLanguage); // Save the choice to localStorage
});

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = loadLanguagePreference();
    document.getElementById("languageSwitcher").value = preferredLanguage;
    switchLanguage(preferredLanguage);
});

// Banner display toggle on name click
const nameClickable = document.getElementById('name-clickable');
const banner = document.querySelector('.banner');

nameClickable.addEventListener('click', () => {
    banner.classList.toggle('show');
});

banner.addEventListener('click', (event) => {
    if (event.target === banner) {
        banner.classList.remove('show');
    }
});

// Schedule and Status logic
const now = () => new Date();

const year = now().getUTCFullYear();

const range = (start, end, base, value) => {
    const keys = Array.from(
        {length: end - start + 1},
        (_, i) => (start + i) % base
    );

    return keys.reduce(
        (acc, cur) => ({...acc, [cur]: value}),
        {}
    );
};

// Function to calculate Easter
function calculateEaster(year) {
    const f = Math.floor,
        G = year % 19,
        C = f(year / 100),
        H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
        I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
        L = I - J,
        month = 3 + f((L + 40) / 44),
        day = L + 28 - 31 * f(month / 4);

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

const fixedHolidays = {
    '01-01': 'Feast of the Circumcision of Christ (New Year\'s Day)',
    '01-06': 'Epiphany',
    '02-14': 'Valentine\'s Day',
    '03-08': 'International Women\'s Day',
    '03-14': 'Pi Day',
    '03-17': 'St. Patrick\'s Day',
    '04-01': 'April Fools\' Day',
    '04-07': 'World Health Day',
    '04-22': 'Earth Day',
    '05-01': 'International Workers\' Day',
    '05-04': 'Star Wars Day',
    '05-09': 'Europe Day',
    '05-12': 'International Nurses Day',
    '05-25': 'Towel Day',
    '06-01': 'International Children\'s Day',
    '06-05': 'World Environment Day',
    '06-12': 'World Day Against Child Labour',
    '06-21': 'Summer Solstice',
    '07-04': 'Independence Day',
    '07-14': 'Bastille Day',
    '08-15': 'Assumption of Mary',
    '09-08': 'International Literacy Day',
    '09-21': 'International Day of Peace',
    '10-04': 'World Animal Day',
    '10-31': 'Halloween',
    '11-01': 'All Saints\' Day',
    '11-11': 'Veterans Day',
    '11-20': 'Universal Children\'s Day',
    '11-22': 'Thanksgiving',
    '12-06': 'St. Nicholas Day',
    '12-24': 'Christmas Eve',
    '12-25': 'Christmas Day',
    '12-29': 'my Dad\'s Birthday',
    '12-31': 'New Year\'s Eve',
};

const movableHolidays = {
    [calculateEaster(year)]: 'Easter Sunday',
};

// Combine fixed and movable holidays
const holidays = {...fixedHolidays, ...movableHolidays};

const schedule = {
    ...range(1, 5, 7, {
        ...range(0, 6, 24, {
            message: SLEEPING,
            dnd: true,
        }),
        ...range(7, 17, 24, {
            message: BUSY,
            dnd: false,
        }),
        ...range(18, 23, 24, {
            message: AVAILABLE,
            dnd: false,
        }),
    }),
    ...range(6, 7, 7, {
        ...range(0, 23, 24, {
            message: WEEKEND,
            dnd: true,
        }),
    }),
};

const statusContainer = document.querySelector("#status");

// Function to format date in 'MM-DD' format
const formatDate = (date) => {
    return `${date.getUTCMonth() + 1}`.padStart(2, '0') + '-' + `${date.getUTCDate()}`.padStart(2, '0');
};

setInterval(() => {
    const currentDate = now();
    const formattedDate = formatDate(currentDate);
    const dayOfWeek = currentDate.getUTCDay();
    const hour = currentDate.getUTCHours() + 3;

    if (holidays[formattedDate]) {
        statusContainer.textContent = `${translations.en.statusMessages.HOLIDAY} Today is ${holidays[formattedDate]} 👨‍👩‍👧‍👦`;
    } else {
        const status = schedule[dayOfWeek][hour];
        if (status !== statusContainer.textContent) {
            statusContainer.textContent = status.message;
        }
    }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
    // Popup functionality
    const showPopup = (() => {
        let timeoutId = null;
        const popup = document.querySelector(".popup");
        const popupText = document.querySelector(".popup-text");

        return (content, isError = false, durationMs = 3000) => {
            clearTimeout(timeoutId);

            popupText.textContent = content;

            // Toggle error styling based on isError flag
            popup.classList.toggle("error", isError);

            // Show the popup by adding the .show class
            popup.classList.add("show");

            // Hide the popup after the specified duration
            timeoutId = setTimeout(() => {
                popup.classList.remove("show");
            }, durationMs);
        };
    })();

    // Copy-to-clipboard functionality for elements with .copy class
    const copyElements = document.querySelectorAll(".copy");

    copyElements.forEach(element => {
        element.addEventListener("click", () => {
            const textToCopy = element.textContent.trim();

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Show success popup
                    showPopup("Address copied to clipboard!");
                })
                .catch(err => {
                    // Show error popup if copy fails
                    console.error("Copy failed:", err);
                    showPopup("Failed to copy", true);
                });
        });
    });

    // Block contact links when status is Do Not Disturb
    const contactLinks = document.querySelectorAll(".contact");

    for (const link of contactLinks) {
        link.addEventListener("click", (event) => {
            const day = now().getUTCDay();
            const hour = now().getUTCHours() + 3;

            const status = schedule[day][hour];

            if (status.dnd) {
                event.preventDefault();
                showPopup("Please, contact me later. I'm sleeping", true);
            }
        });
    }

    // Banner toggle logic
    const bannerButton = document.querySelector(".show-banner");
    const banner = document.querySelector(".banner");

    const showBanner = () => {
        banner.classList.add("show");
    };

    const hideBanner = () => {
        banner.classList.remove("show");
    };

    bannerButton.addEventListener("click", showBanner);

    banner.addEventListener("click", (event) => {
        if (event.target === banner) hideBanner();
    });
});
