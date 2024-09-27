"use strict";

const translations = {
    en: {
        hello: "👋 Hello!",
        homepage: "This is the homepage of",
        contactMe: "💬 Contact Me",
        mail: "📩 Email",
        corporate: "🎓 Corporate Email",
        telegram: "📩 Telegram (Business only)",
        seeAlso: "👀 See Also",
        linkedIn: "💻 LinkedIn",
        gitHub: "👨‍💻 GitHub",
        wallets: "💰 Wallets",
        currentlyListening: "Currently listening to: 🎵 Checking Apple Music...",
        statusPrefix: "Right now I’m:",
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
        mail: "📩 Sähköposti",
        corporate: "🎓 Yrityssähköposti",
        telegram: "📩 Telegramissa",
        seeAlso: "👀 Katso Myös",
        linkedIn: "💻 LinkedIn:ssä",
        gitHub: "👨‍💻 GitHubissa",
        wallets: "💰 Lompakot",
        currentlyListening: "Tällä hetkellä kuunnellaan: 🎵 Tarkistetaan Apple Music...",
        statusPrefix: "Tällä hetkellä olen:",
        statusMessages: {
            SLEEPING: "💤 Nukkumassa...",
            BUSY: "⚠️ Kiireinen. ⛔ Älä häiritse",
            AVAILABLE: "✅ Viesteille avoin, puhelut kieltäydytään 📵",
            WEEKEND: "✨ Viikonloppu. 📳 Nauttii oikeasta elämästä 🏞️",
            HOLIDAY: "🎉 Lomalla perheen kanssa!"
        },
        footerGreetings: "Terveisiä",
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
    document.querySelector("h2.wallets").textContent = translations[lang].wallets;
    document.querySelector("#song-status").textContent = translations[lang].currentlyListening;
    document.querySelector("#status-prefix").textContent = translations[lang].statusPrefix;

    document.querySelector(".footer-greetings").textContent = translations[lang].footerGreetings;
    document.querySelector(".footer-copyright").textContent = translations[lang].footerCopyright;

    updateStatusMessage(lang);
}

function updateStatusMessage(lang) {
    const currentHour = new Date().getHours();
    let status = "";

    if (currentHour >= 22 || currentHour < 7) {
        status = translations[lang].statusMessages.SLEEPING;
    } else if (currentHour >= 7 && currentHour < 18) {
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

// Hide banner when clicking outside the image
banner.addEventListener('click', (event) => {
    if (event.target === banner) {
        banner.classList.remove('show');
    }
});

// Popup functionality
const showPopup = (() => {
    let timeoutId = null;
    const popup = document.querySelector(".popup");
    const popupText = document.querySelector(".popup-text");

    const animation = [
        { opacity: 1, offset: 0 },
        { opacity: 0, offset: 0.4 },
        { opacity: 0, offset: 0.6 },
        { opacity: 1, offset: 1 },
    ];

    const sleep = async (ms) => new Promise(resolve => {
        setTimeout(resolve, ms);
    });

    return async (content, isError = false, durationMs = 3000) => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            popupText.animate(animation, 300);
            await sleep(150);
        }

        popupText.textContent = content;

        if (isError) {
            popup.classList.add("error");
        } else {
            popup.classList.remove("error");
        }

        await sleep(10);

        popup.classList.add("show");

        timeoutId = setTimeout(() => popup.classList.remove("show"), durationMs);
    };
})();

// Schedule and Status logic
const now = () => new Date();

const year = now().getUTCFullYear();

const range = (start, end, base, value) => {
    const keys = Array.from(
        { length: end - start + 1 },
        (_, i) => (start + i) % base
    );

    return keys.reduce(
        (acc, cur) => ({ ...acc, [cur]: value }),
        {}
    );
};

const SLEEPING = "💤 Sleeping...";
const BUSY = "⚠️ Busy. ⛔ Do Not Disturb";
const AVAILABLE = "✅ Available for messaging, calls will be declined 📵";
const WEEKEND = "✨ On a weekend. 📳 Enjoying real life 🏞️";
const HOLIDAY = "🎉 On a holiday celebration with my family!";

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
    // Other fixed holidays
    '12-29': 'my Dad\'s Birthday',
    '12-31': 'New Year\'s Eve',
};

const movableHolidays = {
    [calculateEaster(year)]: 'Easter Sunday',
};

// Combine fixed and movable holidays
const holidays = { ...fixedHolidays, ...movableHolidays };

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

    // Check if today is a holiday
    if (holidays[formattedDate]) {
        statusContainer.textContent = `${HOLIDAY} Today is ${holidays[formattedDate]} 👨‍👩‍👧‍👦`;
    } else {
        // Existing schedule logic
        const status = schedule[dayOfWeek][hour];
        if (status !== statusContainer.textContent) {
            statusContainer.textContent = status.message;
        }
    }
}, 1000);

// Music status logic
const songs = [
    { title: "Freestyle", artist: "Lil Baby" },
    { title: "THANK GOD", artist: "Travis Scott" },
    { title: "Gang Gang", artist: "Polo G" },
    { title: "The Woo", artist: "Pop Smoke" },
    { title: "For The Night", artist: "Pop Smoke" },
    // ... (rest of the song list)
];

let currentSongIndex = 0;

function getRandomSong() {
    const randomSongIndex = Math.floor(Math.random() * songs.length);
    return songs[randomSongIndex];
}

function updateSongStatus() {
    const now = new Date();
    const hour = now.getUTCHours() + 3;
    const day = now.getUTCDay();
    const songStatusElement = document.querySelector("#song-status");

    if (hour >= 11 && hour < 19 && day !== 0) {
        const currentSong = getRandomSong();
        songStatusElement.textContent = `🎧 ${currentSong.title} by ${currentSong.artist}`;
    } else {
        songStatusElement.textContent = "🔇 Not playing any song at the moment";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateSongStatus, 1000); // Update after 1-second delay
    setInterval(updateSongStatus, 240000); // Update every 4 minutes
});

// Copy wallet addresses to clipboard
const copyElements = document.querySelectorAll(".copy");

for (const element of copyElements) {
    element.addEventListener("click", () => {
        navigator.clipboard.writeText(element.textContent.trim());
        showPopup("Address copied to clipboard!");
    });
}

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

// Set the year in the footer
const yearSpan = document.querySelector("#year");
yearSpan.textContent = now().getUTCFullYear();

// Banner logic for showing and hiding images
const showBanner = () => {
    banner.classList.add("show");
};

const hideBanner = () => {
    banner.classList.remove("show");
};

banner.addEventListener("click", (event) => {
    if (event.target === banner) {
        hideBanner();
    }
});

const bannerButton = document.querySelector(".show-banner");

bannerButton.addEventListener("click", () => showBanner());