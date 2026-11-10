/**
 * Bimmeristai Kaunas — BMW Diagnostika, Kodavimas ir Remontas
 * Production Interactive Script (script.js)
 * Standalone vanilla JS - 100% suderinama su GitHub Pages
 */

(function () {
  'use strict';

  // Variklių duomenų bazė kompiuterinei patikrai
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

  // BMW Coding Simulator Presets
  const BMW_CODING_PRESETS = {
    carplay: {
      name: 'Fullscreen CarPlay / Android Auto',
      tag: 'NBT EVO / MGU',
      modelText: 'BMW F30 / G30 / G20 (NBT EVO ID5/ID6 / MGU)',
      ecu: 'HU_NBT_EVO [0x63]',
      logLines: [
        { type: 'dim', text: '>>> Prisijungiama prie ENET sąsajos (169.254.199.99:6801)...' },
        { type: 'info', text: 'Nuskaitytas valdymo blokas: HU_NBT_EVO (I-Level: S15A-23-07-530)' },
        { type: 'info', text: 'FSC sertifikatų analizė: 0143006F (Apple CarPlay Fullscreen)...' },
        { type: 'm', text: 'Konfigūruojama: CARPLAY_FULLSCREEN = aktiv (Widescreen 1920x720)' },
        { type: 'info', text: 'Kodavimas įrašomas į iDrive NVM flash atmintį...' },
        { type: 'success', text: '✓ KODAVIMAS SĖKMINGAS! Perkrovus iDrive CarPlay rodomas per visą ekraną.' },
      ],
      ecuStatus: 'HU_NBT_EVO: OK',
      voltage: '13.8V',
      resultTag: 'FULLSCREEN AKTYVUOTA',
    },
    startstop: {
      name: 'Start/Stop atmintis & Sport+',
      tag: 'DME / FEM / BDC',
      modelText: 'BMW F-Serija / G-Serija visi modeliai',
      ecu: 'BDC_BODY2 [0x40]',
      logLines: [
        { type: 'dim', text: '>>> Skaitomi DME / BDC variantų kodai...' },
        { type: 'info', text: 'Modifikuojama funkcija: TC_MSA_MEMORY = aktiv (prisiminti išjungtą būseną)' },
        { type: 'info', text: 'Aktyvuojamas režimas: FesSportWorldMode1 = SportExpert (Sport+)' },
        { type: 'm', text: 'CAFD failo generavimas ir parašo tikrinimas per E-Sys...' },
        { type: 'success', text: '✓ KODAVIMAS BAIGTAS! Start/Stop nebeįkyri po kiekvieno automobilio užvedimo.' },
      ],
      ecuStatus: 'BDC_BODY: OK',
      voltage: '14.1V',
      resultTag: 'ATLAIKYTA ATMINTIS',
    },
    cluster: {
      name: 'M-Performance skydelis & 330 km/h',
      tag: 'KOMBI',
      modelText: 'BMW F / G serijos 6WB / Live Cockpit',
      ecu: 'DKOMBI4 [0x60]',
      logLines: [
        { type: 'dim', text: '>>> Prieiga prie prietaisų skydelio bloko (KOMBI)...' },
        { type: 'info', text: 'Nustatoma skydelio tema: LOGO_SCHRIFTZUG = m_performance' },
        { type: 'm', text: 'Greičio skalės modifikavimas: SPEEDO_SCALE = 330_kmh' },
        { type: 'info', text: 'Skaitmeninio greičio rodymas borto kompiuterio centre: BC_DIGITAL_V = aktiv' },
        { type: 'success', text: '✓ SĖKMINGAI AKTYVUOTA! Skydelyje šviečia autentiška M-Performance grafika.' },
      ],
      ecuStatus: 'DKOMBI: OK',
      voltage: '13.9V',
      resultTag: 'M-SPORT TEMA AKTYVI',
    },
    maps: {
      name: '2026 Europos žemėlapių FSC atnaujinimas',
      tag: 'FSC REPAIR',
      modelText: 'Road Map Europe EVO / NEXT / HIGH / LIVE',
      ecu: 'NAVIGATION [0x63]',
      logLines: [
        { type: 'dim', text: '>>> Tikrinamas esamas navigacijos FSC sertifikatas...' },
        { type: 'info', text: 'Rastas pasenęs žemėlapis: Road Map Europe EVO 2019-2' },
        { type: 'info', text: 'Generuojamas autorizuotas 00F000xx sertifikatas 2026-1 versijai...' },
        { type: 'm', text: 'Įrašomi 3D pastatai, reljefas ir naujausi Lietuvos greičio radarų duomenys' },
        { type: 'success', text: '✓ ŽEMĖLAPIAI ATNAUJINTI! Greitesnis maršruto planavimas ir tikslūs Kauno apvažiavimai.' },
      ],
      ecuStatus: 'NAV_CORE: OK',
      voltage: '14.2V',
      resultTag: '2026 MAPS ACTIVE',
    },
    exhaust: {
      name: 'Išmetimo sklendžių valdymas & ASD Off',
      tag: 'DME / ASD',
      modelText: 'BMW B48 / B58 / S58 (M140i, M340i, M3, M4)',
      ecu: 'DME_BAC3 [0x12]',
      logLines: [
        { type: 'dim', text: '>>> Nuskaitytas variklio kompiuteris (DME Bosch MG1)...' },
        { type: 'info', text: 'Sintetinio garso modulis: ASD_SOUND_OFF = aktiv (švarus natūralus garsas)' },
        { type: 'm', text: 'Išmetimo sklendės logika: EXHAUST_FLAP_SPORT = always_open' },
        { type: 'info', text: 'Sutrumpinta sklendžių atsidarymo delsa Sport / Sport+ režimuose' },
        { type: 'success', text: '✓ AKTYVUOTA! Švarus 6 ar 4 cilindrų garsas be kolonėlių simuliacijos.' },
      ],
      ecuStatus: 'DME_MG1: OK',
      voltage: '14.0V',
      resultTag: 'EXHAUST ACTIVE',
    },
  };

  function initStandaloneDOM() {
    // 1. Mobile nav toggle
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu-drawer');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', String(!isExpanded));
        mobileMenu.classList.toggle('hidden', isExpanded);
      });
    }

    // 2. Smooth scroll for anchor links
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

    // 3. FAQ Accordion
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

    // 4. Engine checker
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

    // 5. BMW Car Coding Interactive Simulator
    const presetButtons = document.querySelectorAll('[data-coding-preset]');
    const carChips = document.querySelectorAll('[data-car-chip]');
    const consoleLog = document.getElementById('coding-console-stream');
    const consoleEcu = document.getElementById('coding-gauge-ecu');
    const consoleVolt = document.getElementById('coding-gauge-volt');
    const consoleResult = document.getElementById('coding-gauge-result');
    const consoleCarModel = document.getElementById('coding-selected-car');

    let activeCarModel = 'BMW 3 Serija (F30 / G20)';

    if (carChips.length > 0) {
      carChips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          carChips.forEach(function (c) { c.classList.remove('active'); });
          chip.classList.add('active');
          activeCarModel = chip.getAttribute('data-car-chip') || 'BMW';
          if (consoleCarModel) consoleCarModel.textContent = activeCarModel;

          // Re-trigger current active coding preset with new car
          const currentActiveBtn = document.querySelector('[data-coding-preset].active') || presetButtons[0];
          if (currentActiveBtn) {
            triggerCodingSim(currentActiveBtn.getAttribute('data-coding-preset'));
          }
        });
      });
    }

    function triggerCodingSim(presetKey) {
      const preset = BMW_CODING_PRESETS[presetKey] || BMW_CODING_PRESETS.carplay;

      if (consoleEcu) consoleEcu.textContent = preset.ecuStatus;
      if (consoleVolt) consoleVolt.textContent = preset.voltage;
      if (consoleResult) consoleResult.textContent = preset.resultTag;

      if (consoleLog) {
        consoleLog.innerHTML = '';
        const initialLines = [
          `<div class="coding-log-line log-dim">[VIN: WBA5R... Kaunas] Automobilis: ${activeCarModel}</div>`,
          `<div class="coding-log-line log-info">Jungtis: OBD-II / ENET sąsaja aktyvi (100 Mbit/s)</div>`,
        ];
        initialLines.forEach(function (line) {
          consoleLog.innerHTML += line;
        });

        preset.logLines.forEach(function (lineObj, idx) {
          setTimeout(function () {
            if (!consoleLog) return;
            const cls = lineObj.type === 'info' ? 'log-info' : (lineObj.type === 'm' ? 'log-m' : (lineObj.type === 'success' ? 'log-success' : 'log-dim'));
            consoleLog.innerHTML += `<div class="coding-log-line ${cls}">${lineObj.text}</div>`;
            consoleLog.scrollTop = consoleLog.scrollHeight;
          }, (idx + 1) * 160);
        });
      }
    }

    if (presetButtons.length > 0) {
      presetButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          presetButtons.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          const key = btn.getAttribute('data-coding-preset');
          triggerCodingSim(key);
        });
      });
      // Initial run
      triggerCodingSim('carplay');
    }

    // 6. Copy Phone Number Buttons
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
