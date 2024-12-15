document.addEventListener("DOMContentLoaded", function() {
    const countryName = document.getElementById("countryName");
    const countryText = document.getElementById("countryFlavourText");
    const countryLink = document.getElementById("countryLink");

    const countryInfo = {
        germany: {
            name: "Vācija",
            text: "Pazemota Versaļas līguma dēļ.",
            link: "./pages/germany.html",
        },
        russia: {
            name: "Krievijas teritorija",
            text: "Dziļā pilsoņu karā.",
            link: "./pages/russia.html",
        },
        italy: {
            name: "Itālija",
            text: "Kaitina mazie ieguvumi.",
            link: "./pages/italy.html",
        },
        austriahungary: {
            name: "Austro-Ungārijas teritorija",
            text: "Sadalīts vairākos gabalos.",
            link: "./pages/austriahungary.html",
        },
        baltics: {
            name: "Polija un Baltijas valstis",
            text: "Jaunas cerības republikām.",
            link: "./pages/baltics.html",
        },
    };

    const germanyBtn = document.getElementById("germanyButton");
    const russiaBtn = document.getElementById("russiaButton");
    const italyBtn = document.getElementById("italyButton");
    const austriahungaryBtn = document.getElementById("austriahungaryButton");
    const balticsBtn = document.getElementById("balticsButton");

    // Check if buttons exist before adding event listeners
    if (germanyBtn && russiaBtn) {
        germanyBtn.addEventListener("click", function() {
            showCountryText("germany");
        });
        russiaBtn.addEventListener("click", function() {
            showCountryText("russia");
        });
        italyBtn.addEventListener("click", function() {
            showCountryText("italy");
        });
        austriahungaryBtn.addEventListener("click", function() {
            showCountryText("austriahungary");
        });
        balticsBtn.addEventListener("click", function() {
            showCountryText("baltics");
        });
    }

    function showCountryText(country) {
        countryName.innerHTML = countryInfo[country].name;
        countryText.innerHTML = countryInfo[country].text;
        countryLink.href = countryInfo[country].link;
        countryLink.innerHTML = "Vairāk informācijas...";
    }
});
