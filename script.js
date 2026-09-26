/**
 * Bimmeristai Kaunas — BMW Diagnostika, Kodavimas ir Remontas
 * Production Interactive Script (script.js)
 */

(function () {
  'use strict';

  const ENGINE_DIAGNOSTIC_DATA = {
    B47: {
      code: 'B47 (2.0d Dyzelinas)',
      models: '118d, 120d, 220d, 318d, 320d, 420d, 518d, 520d, X1, X3, X4 (F ir G serijos)',
      eligible: true,
      method:
        'Kompiuteris per OEM ISTA+ įrangą tiksliai išmatuoja paskirstymo veleno fazės poslinkio kampą laipsniais (°) neardant nei vienos variklio detalės.',
      price: '30€',
      duration: '~30 min.',
      specialist: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialistPhone: '+37063305031',
    },
    B57: {
      code: 'B57 (3.0d Dyzelinas)',
      models: '330d, 430d, 530d, 540d, 730d, 740d, X3 30d/M40d, X5 30d/40d/M50d, X6, X7',
      eligible: true,
      method:
        'Kompiuterinė sinchronizacijos ir paskirstymo veleno kampo patikra laipsniais (°) realiuoju laiku, kartu įvertinant DPF, purkštukų korekcijas ir turbinų slėgio parametrus.',
      price: '30€',
      duration: '~30 min.',
      specialist: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialistPhone: '+37063305031',
    },
    B48: {
      code: 'B48 (2.0i Benzinas)',
      models: '220i, 230i, 320i, 330i, 330e, 420i, 430i, 520i, 530i, X1, X2, X3, X4',
      eligible: true,
      method:
        'Diagnostikos programa atlieka automatizuotą apsukų kėlimo ir VANOS fazių testą bei nustato grandinės išsitampymo reikšmę. Jei pasiekiama keitimo riba, sistema išduoda aiškią rekomendaciją.',
      price: '30€',
      duration: '~30 min.',
      specialist: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialistPhone: '+37063305031',
    },
    B58: {
      code: 'B58 (3.0i Benzinas)',
      models: 'M140i, M240i, 340i, M340i, 440i, M440i, 540i, 740i, 840i, X3 M40i, X5 40i',
      eligible: true,
      method:
        'Atliekamas kompiuterinis apsukų kėlimo grandinės įtempimo testas, VANOS vožtuvų reakcijos analizė, aukšto slėgio kuro siurblio (HPFP) ir uždegimo vėlinimo patikra.',
      price: '30€',
      duration: '~30 min.',
      specialist: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialistPhone: '+37063305031',
    },
    B38: {
      code: 'B38 (1.5i Benzinas)',
      models: '116i, 118i, 218i, 318i, X1 sDrive18i, X2 sDrive18i, i8',
      eligible: true,
      method:
        'Atliekamas kompiuterinis apsukų kėlimo grandinės testas ir alkūninio veleno ašinio laisvumo bei VANOS parametrų įvertinimas neardant variklio.',
      price: '30€',
      duration: '~30 min.',
      specialist: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialistPhone: '+37063305031',
    },
    N_SERIES: {
      code: 'N47 / N57 / N20 (N serija)',
      models: 'E90, E60, F10, F30, F25, E70, F15 ankstyvieji modeliai',
      eligible: false,
      method:
        'Kompiuterinė grandinės išsitampymo patikra laipsniais galima tik B serijos varikliams. N serijos varikliams atliekama fizinė/akustinė patikra, klaidų diagnostika ir grandinės komplekto keitimas.',
      price: '30€ (bendroji diagnostika)',
      duration: '~40 min.',
      specialist: 'Karolis | Remontas ir gedimai (+37068644262)',
      specialistPhone: '+37068644262',
    },
  };

  function getMileageAdvice(mileageRange, isBSeries) {
    if (!isBSeries) {
      return 'N serijos varikliams rekomenduojama nedelsti išgirdus pašalinį grandinės šnarėjimą šaltam varikliui.';
    }
    switch (mileageRange) {
      case 'under120':
        return 'Profilaktinė patikra ypač rekomenduojama perkant automobilį arba norint įsitikinti tikra rida.';
      case '120to180':
        return 'Optimalus laikas atlikti kompiuterinę grandinės patikrą (30€) ir įvertinti laipsninį nuokrypį.';
      case '180to240':
        return 'Aukštesnės rizikos intervalas – primygtinai rekomenduojame patikrinti grandinės išsitampymą prieš planuojant ilgesnes keliones.';
      case 'over240':
        return 'Kritinis ridos intervalas – būtina kompiuterinė patikra; jei riba viršyta, suplanuosime savalaikį keitimą.';
      default:
        return 'Rekomenduojama patikra prieš kiekvieną didesnį techninį aptarnavimą arba automobilio pirkimą.';
    }
  }

  function initStandaloneDOM() {
    if (window.__BIMMERISTAI_REACT_ACTIVE__) {
      return;
    }

    // Mobile nav toggle
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu-drawer');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', String(!isExpanded));
        mobileMenu.classList.toggle('hidden', isExpanded);
      });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
          }
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // FAQ Accordion
    const faqTriggers = document.querySelectorAll('[data-faq-trigger]');
    faqTriggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const currentExpanded = btn.getAttribute('aria-expanded') === 'true';
        const targetPanelId = btn.getAttribute('aria-controls');
        const targetPanel = targetPanelId ? document.getElementById(targetPanelId) : null;

        faqTriggers.forEach(function (otherBtn) {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherId = otherBtn.getAttribute('aria-controls');
            const otherPanel = otherId ? document.getElementById(otherId) : null;
            if (otherPanel) otherPanel.classList.add('hidden');
          }
        });

        btn.setAttribute('aria-expanded', String(!currentExpanded));
        if (targetPanel) {
          targetPanel.classList.toggle('hidden', currentExpanded);
        }
      });
    });

    // Engine checker
    const engineSelect = document.getElementById('checker-engine');
    const mileageSelect = document.getElementById('checker-mileage');
    const resultTitle = document.getElementById('checker-result-title');
    const resultModels = document.getElementById('checker-result-models');
    const resultMethod = document.getElementById('checker-result-method');
    const resultAdvice = document.getElementById('checker-result-advice');
    const resultPrice = document.getElementById('checker-result-price');
    const resultSpecialist = document.getElementById('checker-result-specialist');

    function updateCheckerOutput() {
      if (!engineSelect || !mileageSelect) return;
      const engineKey = engineSelect.value || 'B47';
      const mileageKey = mileageSelect.value || '120to180';
      const data = ENGINE_DIAGNOSTIC_DATA[engineKey] || ENGINE_DIAGNOSTIC_DATA.B47;

      if (resultTitle) resultTitle.textContent = data.code;
      if (resultModels) resultModels.textContent = data.models;
      if (resultMethod) resultMethod.textContent = data.method;
      if (resultAdvice) resultAdvice.textContent = getMileageAdvice(mileageKey, data.eligible);
      if (resultPrice) resultPrice.textContent = data.price;
      if (resultSpecialist) resultSpecialist.textContent = data.specialist;
    }

    if (engineSelect) engineSelect.addEventListener('change', updateCheckerOutput);
    if (mileageSelect) mileageSelect.addEventListener('change', updateCheckerOutput);
    updateCheckerOutput();

    // Copy Phone Number Buttons
    const copyBtns = document.querySelectorAll('[data-copy-phone]');
    copyBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const phone = btn.getAttribute('data-copy-phone');
        if (!phone || !navigator.clipboard) return;
        navigator.clipboard.writeText(phone).then(function () {
          const originalText = btn.textContent;
          btn.textContent = 'Nukopijuota!';
          setTimeout(function () {
            btn.textContent = originalText;
          }, 1800);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStandaloneDOM);
  } else {
    initStandaloneDOM();
  }
})();
