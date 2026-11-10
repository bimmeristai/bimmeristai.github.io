import React, { useState } from 'react';
import {
  Phone,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Gauge,
  Cpu,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Sliders,
  Compass,
} from 'lucide-react';

const LOGO_URL = 'https://i.postimg.cc/wjW2sKHS/bimmeristai-logo.jpg';

type ServiceCategory = 'all' | 'diagnostics' | 'coding' | 'repair';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  price?: string;
  duration: string;
  category: Exclude<ServiceCategory, 'all'>;
  specialist: 'diagnostics' | 'repair';
  featured?: boolean;
  highlights: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'chain-check',
    number: '01.',
    title: 'Variklio grandinės patikra (B serijos varikliams)',
    description:
      'Neardant variklio, diagnostikos pagalba patikrinamas grandinės išsitempimas (B38, B48, B58, B47). Tikslus būdas išvengti kapitalinio remonto.',
    price: '30€',
    duration: '~30 min.',
    category: 'diagnostics',
    specialist: 'diagnostics',
    featured: true,
    highlights: [
      'B47 / B57 dyzeliniams – tikslus veleno kampas laipsniais (°)',
      'B38 / B48 / B58 benzininiams – automatizuotas apsukų kėlimo testas',
      'Jokių ardymo darbų – patikra atliekama per OEM diagnostinę jungtį',
    ],
  },
  {
    id: 'full-diagnostics',
    number: '02.',
    title: 'Diagnostinis patikrinimas',
    description: 'Pilna kompiuterinė klaidų analizė, mazgų parametrų stebėjimas.',
    price: '30€',
    duration: '~30 min.',
    category: 'diagnostics',
    specialist: 'diagnostics',
    highlights: [
      'Visų elektroninių valdymo blokų (ECU) klaidų nuskaitymas ir analizė',
      'Purkštukų korekcijų, DPF suodžių filtro ir turbinos slėgio patikra',
      'Ridos ir serviso istorijos tikrinimas prieš perkant automobilį',
    ],
  },
  {
    id: 'carplay-coding',
    number: '03.',
    title: 'CarPlay aktyvavimas & Kodavimas',
    description:
      'Fullscreen Apple CarPlay / Android Auto aktyvacija, paslėptų gamyklinių funkcijų atskleidimas.',
    duration: '30–60 min.',
    category: 'coding',
    specialist: 'diagnostics',
    featured: true,
    highlights: [
      'Pilno ekrano (Fullscreen) Apple CarPlay aktyvacija NBT EVO ID5 / ID6 ir MGU',
      'Start/Stop sistemos paskutinės būsenos atmintis ir Sport+ režimas',
      'Video in Motion, M-Performance skydelio temos, JAV -> EU konversija',
    ],
  },
  {
    id: 'navigation-maps',
    number: '04.',
    title: 'Navigacijos žemėlapių atnaujinimas',
    description:
      'Naujausi Europos žemėlapiai (EVO, NEXT, HIGH, ROUTE) greitesniam ir tikslesniam maršrutui.',
    duration: '30–45 min.',
    category: 'coding',
    specialist: 'diagnostics',
    highlights: [
      'Naujausi 2026 m. visos Europos ir Lietuvos kelių duomenys',
      'Tinka CIC, NBT, NBT EVO, ROUTE, WAY ir MGU Live Cockpit sistemoms',
      'Oficialūs FSC aktyvacijos kodai be sistemos strigimų',
    ],
  },
  {
    id: 'repair-troubleshooting',
    number: '05.',
    title: 'Remontas ir gedimų šalinimas',
    description:
      'Variklio, transmisijos, važiuoklės bei elektros įrangos gedimų nustatymas ir šalinimas.',
    duration: 'Pagal gedimą',
    category: 'repair',
    specialist: 'repair',
    highlights: [
      'Variklio paskirstymo grandinių komplektų keitimas (B ir N serijos)',
      'Važiuoklės, stabdžių, aušinimo ir tepimo sistemų remontas',
      'Sudėtingų elektros instaliacijos ir valdymo blokų gedimų šalinimas',
    ],
  },
];

interface EngineSpec {
  key: string;
  label: string;
  series: string;
  models: string;
  eligibleForComputerChainCheck: boolean;
  methodTitle: string;
  methodDescription: string;
  price: string;
  specialistName: string;
  specialistPhone: string;
}

const ENGINE_SPECS: Record<string, EngineSpec> = {
  B47: {
    key: 'B47',
    label: 'B47 — 2.0d Dyzelinas',
    series: 'F ir G serijos (nuo 2014 m.)',
    models: '118d, 120d, 220d, 318d, 320d, 420d, 518d, 520d, X1, X3, X4',
    eligibleForComputerChainCheck: true,
    methodTitle: 'Tikslus veleno kampo matavimas laipsniais (°)',
    methodDescription:
      'Dyzeliniams B47 varikliams kompiuteris per OEM diagnostiką tiksliai parodo paskirstymo veleno fazės kampą laipsniais neardant variklio.',
    price: '30€',
    specialistName: 'Karolis | Diagnostika ir kodavimas',
    specialistPhone: '+37063305031',
  },
  B57: {
    key: 'B57',
    label: 'B57 — 3.0d Dyzelinas',
    series: 'G serija (nuo 2015 m.)',
    models: '330d, 430d, 530d, 540d, 730d, 740d, X3 30d/M40d, X5 30d/40d/M50d, X6, X7',
    eligibleForComputerChainCheck: true,
    methodTitle: 'Kompiuterinis fazės kampo įvertinimas laipsniais (°)',
    methodDescription:
      '6 cilindrų B57 dyzeliniams varikliams kompiuteriu nuskaitomas tikslus veleno sinchronizacijos kampas laipsniais bei patikrinamas kuro ir turbinų darbas.',
    price: '30€',
    specialistName: 'Karolis | Diagnostika ir kodavimas',
    specialistPhone: '+37063305031',
  },
  B48: {
    key: 'B48',
    label: 'B48 — 2.0i Benzinas',
    series: 'F LCI ir G serijos (nuo 2015 m.)',
    models: '220i, 230i, 320i, 330i, 330e, 420i, 430i, 520i, 530i, X1, X2, X3, X4',
    eligibleForComputerChainCheck: true,
    methodTitle: 'Automatizuotas apsukų kėlimo ir VANOS testas',
    methodDescription:
      'Benzininiams B48 varikliams diagnostinė įranga atlieka specialų apsukų kėlimo testą ir pagal VANOS fazių darbą nustato grandinės išsitampymą.',
    price: '30€',
    specialistName: 'Karolis | Diagnostika ir kodavimas',
    specialistPhone: '+37063305031',
  },
  B58: {
    key: 'B58',
    label: 'B58 — 3.0i Benzinas',
    series: 'F LCI ir G serijos (nuo 2015 m.)',
    models: 'M140i, M240i, 340i, M340i, 440i, M440i, 540i, 740i, 840i, X3 M40i, X5 40i',
    eligibleForComputerChainCheck: true,
    methodTitle: 'Apsukų kėlimo testas ir VANOS sinchronizacijos patikra',
    methodDescription:
      'Galingiems 6 cilindrų B58 varikliams atliekamas kompiuterinis apsukų kėlimo testas, nustatantis grandinės būklę bei VANOS mazgų tikslumą neardant variklio.',
    price: '30€',
    specialistName: 'Karolis | Diagnostika ir kodavimas',
    specialistPhone: '+37063305031',
  },
  B38: {
    key: 'B38',
    label: 'B38 — 1.5i Benzinas',
    series: 'F ir G serijos (nuo 2014 m.)',
    models: '116i, 118i, 218i, 318i, X1 sDrive18i, X2 sDrive18i',
    eligibleForComputerChainCheck: true,
    methodTitle: 'Kompiuterinis apsukų kėlimo grandinės testas',
    methodDescription:
      'B38 benzininiams varikliams diagnostika atlieka apsukų kėlimo testą ir tiksliai įvertina grandinės išsitampymo ribą be variklio ardymo.',
    price: '30€',
    specialistName: 'Karolis | Diagnostika ir kodavimas',
    specialistPhone: '+37063305031',
  },
  N_SERIES: {
    key: 'N_SERIES',
    label: 'N47 / N57 / N20 (Senesnė N serija)',
    series: 'E ir ankstyva F serija (iki 2015 m.)',
    models: 'E90, E60, F10, F30, F25, E70, F15 ankstyvieji modeliai',
    eligibleForComputerChainCheck: false,
    methodTitle: 'Mechaninė / akustinė patikra ir bendra diagnostika',
    methodDescription:
      'Kompiuterinė grandinės patikra laipsniais galima tik B serijos varikliams. N serijos varikliams atliekama pilna kompiuterinė klaidų diagnostika arba mechaninė apžiūra.',
    price: '30€',
    specialistName: 'Karolis | Remontas ir gedimai',
    specialistPhone: '+37068644262',
  },
};

const MILEAGE_OPTIONS = [
  {
    value: 'under120',
    label: 'Iki 120 000 km',
    recommendation:
      'Profilaktinė patikra ypač naudinga perkant automobilį, norint įsitikinti tikra rida bei grandinės būkle.',
  },
  {
    value: '120to180',
    label: '120 000 – 180 000 km',
    recommendation:
      'Optimalus ridos intervalas kompiuterinei grandinės patikrai (30€), nustatant tikslų grandinės likutį.',
  },
  {
    value: '180to240',
    label: '180 000 – 240 000 km',
    recommendation:
      'Aukštesnio dėmesio intervalas – primygtinai rekomenduojama patikrinti grandinės išsitampymą.',
  },
  {
    value: 'over240',
    label: 'Virš 240 000 km',
    recommendation:
      'Kritinė rida – būtina kompiuterinė patikra; pasiekus keitimo ribą, suplanuosime savalaikį keitimą.',
  },
];

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Kokia kaina variklio grandinės patikros?',
    answer: 'Diagnostinis patikrinimas ir grandinės būklės įvertinimas kainuoja 30€.',
  },
  {
    id: 'faq-2',
    question: 'Kas geriau: B serijos ar N serijos BMW varikliai?',
    answer:
      'B serijos varikliuose yra ištaisyta dauguma N serijos klaidų – grandinės tarnauja daug geriau, indėklai patikimesni, o varikliai atlaiko didesnę galią.',
  },
  {
    id: 'faq-3',
    question: 'Kokiems varikliams galima atlikti kompiuterinę grandinės patikrą?',
    answer:
      'Visiems B serijos (B38, B48, B58, B47 ir t.t.) benzininiams ir dyzeliniams BMW varikliams (F3x, F1x, G serijai ir kt.).',
  },
  {
    id: 'faq-4',
    question: 'Kaip veikia grandinės diagnostika neardant variklio?',
    answer:
      'Dyzeliniams B47 varikliams kompiuteris tiksliai rodo veleno kampą laipsniais. Benzininiams varikliams diagnostika atlieka apsukų kėlimo testą ir nustato išsitampymą. Jei parodoma keitimo riba, rekomenduojama keisti.',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Interactive Service Filter
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  // Interactive Hero Telemetry Preview Mode
  const [heroTelemetryMode, setHeroTelemetryMode] = useState<'diesel' | 'petrol'>('diesel');

  // Interactive Engine Chain Checker State
  const [selectedEngine, setSelectedEngine] = useState<string>('B47');
  const [selectedMileage, setSelectedMileage] = useState<string>('120to180');

  // Interactive FAQ Accordion State (first item open by default)
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Phone Copy State
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((item) => item.category === activeCategory);

  const currentEngineSpec = ENGINE_SPECS[selectedEngine] || ENGINE_SPECS.B47;
  const currentMileageObj =
    MILEAGE_OPTIONS.find((m) => m.value === selectedMileage) || MILEAGE_OPTIONS[1];

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyPhone = (phone: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phone).then(() => {
        setCopiedPhone(phone);
        setTimeout(() => {
          setCopiedPhone(null);
        }, 2000);
      });
    }
  };

  return (
    <div id="pradzia" className="min-h-screen bg-[#0d0e12] text-[#f0f2f5] flex flex-col">
      {/* Top 3px M-Performance Stripe */}
      <div className="m-stripe-bar" aria-hidden="true" />

      {/* 1. HEADER / NAVIGATION */}
      <header className="site-header-glass sticky top-0 z-50">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 sm:px-6 h-16">
          <a
            href="#pradzia"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('pradzia');
            }}
            className="flex items-center gap-3 text-xl font-bold tracking-wider text-white font-display shrink-0"
          >
            {!logoError ? (
              <img
                src={LOGO_URL}
                alt="Bimmeristai logotipas"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="h-9 w-9 rounded object-cover border border-white/15 shrink-0"
              />
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded bg-[#0066bf] text-sm font-bold text-white font-display">
                BM
              </span>
            )}
            <span>BIMMERISTAI</span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Pagrindinė navigacija"
          >
            <a
              href="#paslaugos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('paslaugos');
              }}
              className="nav-link-clean"
            >
              Paslaugos
            </a>
            <a
              href="#patikra"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('patikra');
              }}
              className="nav-link-clean"
            >
              Grandinės patikra
            </a>
            <a
              href="#duk"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('duk');
              }}
              className="nav-link-clean"
            >
              D.U.K.
            </a>
            <a
              href="#kontaktai"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('kontaktai');
              }}
              className="nav-link-clean"
            >
              Kontaktai
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kontaktai"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('kontaktai');
              }}
              className="btn-m-danger text-xs sm:text-sm py-2 px-3.5 sm:px-4"
            >
              Registracija Būtina
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label={mobileMenuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded border border-white/15 bg-[#16181f] text-white hover:border-[#0066bf] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="md:hidden border-t border-white/10 bg-[#0d0e12]/98 px-6 py-5"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobili navigacija">
              <a
                href="#paslaugos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('paslaugos');
                }}
                className="text-base font-medium text-[#f0f2f5] hover:text-white py-1"
              >
                Paslaugos ir kainos
              </a>
              <a
                href="#patikra"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('patikra');
                }}
                className="text-base font-medium text-[#f0f2f5] hover:text-white py-1"
              >
                Variklio grandinės patikra
              </a>
              <a
                href="#duk"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('duk');
                }}
                className="text-base font-medium text-[#f0f2f5] hover:text-white py-1"
              >
                D.U.K.
              </a>
              <a
                href="#kontaktai"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('kontaktai');
                }}
                className="text-base font-medium text-[#f0f2f5] hover:text-white py-1"
              >
                Kontaktai Kaune
              </a>
              <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:+37063305031"
                  className="btn-m-primary text-sm w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>Diagnostika: +370 633 05031</span>
                </a>
                <a
                  href="tel:+37068644262"
                  className="btn-m-secondary text-sm w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>Remontas: +370 686 44262</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-white/10">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(circle at 18% 20%, rgba(0, 102, 191, 0.16) 0%, transparent 45%), radial-gradient(circle at 82% 75%, rgba(224, 0, 0, 0.1) 0%, transparent 45%)',
            }}
          />

          <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="warning-callout-bar mb-6">
                  <span>⚠️ REGISTRACIJA BŪTINA prieš atvykstant</span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.08] headline-balance mb-5">
                  Bimmeristai – BMW diagnostika, kodavimas ir remontas Kaune
                </h1>

                <p className="text-base sm:text-lg text-[#f0f2f5]/85 max-w-[64ch] leading-relaxed mb-8">
                  Kompiuterinė variklio grandinių patikra neardant variklio, CarPlay aktyvavimas,
                  žemėlapių atnaujinimas ir profesionalus gedimų šalinimas.
                </p>

                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
                  <a
                    href="#kontaktai"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('kontaktai');
                    }}
                    className="btn-m-primary text-base py-3.5 px-6 w-full sm:w-auto"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>Registruotis patikrai / Skambinti</span>
                  </a>

                  <a
                    href="#paslaugos"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('paslaugos');
                    }}
                    className="btn-m-secondary text-base py-3.5 px-6 w-full sm:w-auto"
                  >
                    <span>Peržiūrėti paslaugas</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#9aa1b2] pt-4 border-t border-white/10 w-full">
                  <span className="text-white font-medium">Kaunas</span>
                  <span aria-hidden="true">·</span>
                  <span>B38 / B47 / B48 / B57 / B58 grandinių patikra</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tabular text-white">Diagnostika 30€</span>
                  <span aria-hidden="true">·</span>
                  <span>OEM ISTA+ įranga</span>
                </div>
              </div>

              {/* Right Column: Telemetry & Engine Logic Card */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-white/15 bg-[#16181f] p-6 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <span className="m-stripe-pill" aria-hidden="true" />
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#9aa1b2]">
                        Kompiuterinė telemetrija
                      </span>
                    </div>
                    <span className="font-mono-tabular text-sm font-bold text-emerald-400">
                      30€ PATIKRA
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Patikra neardant variklio
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9aa1b2] mb-5">
                    Perjunkite variklio tipą ir pažiūrėkite, kaip atliekama diagnostika:
                  </p>

                  <div className="flex rounded-lg bg-[#0d0e12] p-1 border border-white/10 mb-5">
                    <button
                      type="button"
                      onClick={() => setHeroTelemetryMode('diesel')}
                      className={`flex-1 py-2 text-xs font-semibold rounded transition-colors ${
                        heroTelemetryMode === 'diesel'
                          ? 'bg-[#0066bf] text-white shadow'
                          : 'text-[#9aa1b2] hover:text-white'
                      }`}
                    >
                      Dyzeliniai (B47 / B57)
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroTelemetryMode('petrol')}
                      className={`flex-1 py-2 text-xs font-semibold rounded transition-colors ${
                        heroTelemetryMode === 'petrol'
                          ? 'bg-[#0066bf] text-white shadow'
                          : 'text-[#9aa1b2] hover:text-white'
                      }`}
                    >
                      Benzininiai (B38 / B48 / B58)
                    </button>
                  </div>

                  {heroTelemetryMode === 'diesel' ? (
                    <div className="space-y-3 rounded-lg bg-[#0d0e12] p-4 border border-white/5 text-xs sm:text-sm">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#9aa1b2]">Metodas:</span>
                        <span className="font-medium text-white text-right">
                          Veleno fazės kampas laipsniais (°)
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#9aa1b2]">Variklio ardymas:</span>
                        <span className="font-medium text-emerald-400">
                          Nereikalingas (100% per OBD)
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-[#9aa1b2]">Trukmė ir kaina:</span>
                        <span className="font-mono-tabular font-semibold text-white">
                          ~30 min. · 30€
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 rounded-lg bg-[#0d0e12] p-4 border border-white/5 text-xs sm:text-sm">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#9aa1b2]">Metodas:</span>
                        <span className="font-medium text-white text-right">
                          Apsukų kėlimo &amp; VANOS fazių testas
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#9aa1b2]">Rezultatas:</span>
                        <span className="font-medium text-emerald-400">
                          Nustatoma tiksli išsitampymo riba
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-[#9aa1b2]">Trukmė ir kaina:</span>
                        <span className="font-mono-tabular font-semibold text-white">
                          ~30 min. · 30€
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#9aa1b2]">Registracija telefonu:</span>
                    <a
                      href="tel:+37063305031"
                      className="text-xs font-semibold text-[#1e88e5] hover:underline"
                    >
                      +370 633 05031 →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES & PRICING SECTION */}
        <section id="paslaugos" className="py-16 lg:py-24 border-b border-white/10">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="m-stripe-pill" aria-hidden="true" />
                  <span className="text-xs font-medium text-[#9aa1b2]">
                    Specializuotos BMW paslaugos Kaune
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white headline-balance">
                  Paslaugos ir kainoraštis
                </h2>
              </div>

              <div
                className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#16181f] border border-white/10"
                role="group"
                aria-label="Filtruoti paslaugas"
              >
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-[#0066bf] text-white'
                      : 'text-[#9aa1b2] hover:text-white'
                  }`}
                >
                  Visos (5)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('diagnostics')}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                    activeCategory === 'diagnostics'
                      ? 'bg-[#0066bf] text-white'
                      : 'text-[#9aa1b2] hover:text-white'
                  }`}
                >
                  Diagnostika &amp; Grandinės
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('coding')}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                    activeCategory === 'coding'
                      ? 'bg-[#0066bf] text-white'
                      : 'text-[#9aa1b2] hover:text-white'
                  }`}
                >
                  CarPlay &amp; Kodavimas
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('repair')}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                    activeCategory === 'repair'
                      ? 'bg-[#0066bf] text-white'
                      : 'text-[#9aa1b2] hover:text-white'
                  }`}
                >
                  Remontas
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <article
                  key={service.id}
                  className="carbon-surface rounded-xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <span className="font-mono-tabular text-sm font-semibold text-[#1e88e5]">
                        {service.number}
                      </span>
                      {service.price && (
                        <span className="font-mono-tabular text-lg font-bold text-white">
                          {service.price}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-[#f0f2f5]/85 text-sm sm:text-base leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6 border-t border-white/10 pt-4 text-xs sm:text-sm text-[#f0f2f5]/80">
                      {service.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0066bf] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 text-xs">
                    <span className="text-[#9aa1b2]">
                      Meistras:{' '}
                      <strong className="text-white font-medium">
                        {service.specialist === 'diagnostics'
                          ? 'Karolis (Diagnostika)'
                          : 'Karolis (Remontas)'}
                      </strong>
                    </span>

                    <a
                      href={
                        service.specialist === 'diagnostics'
                          ? 'tel:+37063305031'
                          : 'tel:+37068644262'
                      }
                      className="inline-flex items-center gap-1 font-semibold text-[#1e88e5] hover:text-white transition-colors"
                    >
                      <span>Skambinti</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE ENGINE CHAIN CHECKER */}
        <section id="patikra" className="py-16 lg:py-24 bg-[#11131a] border-b border-white/10">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="m-stripe-pill" aria-hidden="true" />
                <span className="text-xs font-medium text-[#9aa1b2]">
                  Interaktyvus B serijos variklių įrankis
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white headline-balance mb-3">
                Sužinokite, kaip tikrinama Jūsų BMW variklio grandinė
              </h2>
              <p className="text-sm sm:text-base text-[#f0f2f5]/80">
                Pasirinkite savo BMW variklio kodą bei dabartinę ridą – sistema iš karto parodys,
                kokiu metodu atliekama kompiuterinė grandinės išsitampymo patikra neardant variklio.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 carbon-surface rounded-xl p-6 sm:p-7 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="checker-engine"
                      className="block text-xs sm:text-sm font-semibold text-white mb-2"
                    >
                      1. Pasirinkite BMW variklio kodą:
                    </label>
                    <select
                      id="checker-engine"
                      value={selectedEngine}
                      onChange={(e) => setSelectedEngine(e.target.value)}
                      className="w-full rounded-lg bg-[#0d0e12] border border-white/15 px-4 py-3 text-sm text-white focus:border-[#0066bf]"
                    >
                      {Object.values(ENGINE_SPECS).map((spec) => (
                        <option key={spec.key} value={spec.key}>
                          {spec.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="block text-xs sm:text-sm font-semibold text-white mb-2">
                      2. Pasirinkite automobilio ridą (km):
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {MILEAGE_OPTIONS.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSelectedMileage(option.value)}
                          className={`px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium border text-left transition-colors cursor-pointer ${
                            selectedMileage === option.value
                              ? 'bg-[#0066bf]/20 border-[#0066bf] text-white'
                              : 'bg-[#0d0e12] border-white/10 text-[#9aa1b2] hover:text-white'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#9aa1b2]">
                  <span>Naudojama įranga: OEM ISTA+</span>
                  <span className="font-mono-tabular text-white font-semibold">
                    Patikros kaina: 30€
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 rounded-xl border border-[#0066bf]/40 bg-[#16181f] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
                    <div>
                      <span className="text-xs text-[#9aa1b2] block">Pasirinktas variklis</span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {currentEngineSpec.label}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#9aa1b2] block">Patikros kaina</span>
                      <span className="font-mono-tabular text-2xl font-bold text-white">
                        {currentEngineSpec.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-semibold text-[#1e88e5] block mb-1">
                        Pritaikymas modeliams ({currentEngineSpec.series}):
                      </span>
                      <p className="text-sm text-[#f0f2f5]/90">{currentEngineSpec.models}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0d0e12] border border-white/10">
                      <span className="text-xs font-semibold text-white block mb-1">
                        Diagnostikos eiga ({currentEngineSpec.methodTitle}):
                      </span>
                      <p className="text-sm text-[#f0f2f5]/85 leading-relaxed">
                        {currentEngineSpec.methodDescription}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-[#9aa1b2] block mb-1">
                        Rekomendacija pagal pasirinktą ridą ({currentMileageObj.label}):
                      </span>
                      <p className="text-sm text-[#f0f2f5]/85 leading-relaxed">
                        {currentMileageObj.recommendation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#9aa1b2] block">Atsakingas specialistas:</span>
                    <strong className="text-sm font-semibold text-white">
                      {currentEngineSpec.specialistName}
                    </strong>
                  </div>

                  <a
                    href={`tel:${currentEngineSpec.specialistPhone}`}
                    className="btn-m-primary text-xs sm:text-sm py-2.5 px-4 w-full sm:w-auto"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Skambinti: {currentEngineSpec.specialistPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE FAQ SECTION (ACCORDION) */}
        <section id="duk" className="py-16 lg:py-24 border-b border-white/10">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="m-stripe-pill" aria-hidden="true" />
                <span className="text-xs font-medium text-[#9aa1b2]">
                  Atsakymai į dažniausius klausimus
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white headline-balance">
                Dažniausiai užduodami klausimai (D.U.K.)
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-xl border border-white/15 bg-[#16181f] overflow-hidden transition-colors hover:border-[#0066bf]/60"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                    >
                      <span className="font-display text-lg sm:text-xl font-bold text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#1e88e5] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#f0f2f5]/85 leading-relaxed border-t border-white/5"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="kontaktai" className="py-16 lg:py-24 bg-[#0d0e12]">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0066bf]/15 border border-[#0066bf]/30 text-xs font-semibold text-white mb-3">
                <span>📍 Kaunas · Registracija būtina prieš atvykstant</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white headline-balance">
                Kuriam Karoliui skambinti?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="carbon-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#1e88e5] block mb-2">
                    Diagnostika · Kodavimas · Grandinių patikra · CarPlay
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                    Karolis | Diagnostika ir kodavimas
                  </h3>
                  <p className="text-sm text-[#f0f2f5]/80 mb-6">
                    Kreipkitės dėl kompiuterinės B serijos grandinės patikros (30€), pilnos klaidų
                    analizės, Fullscreen CarPlay, navigacijos atnaujinimo ir valdymo blokų kodavimo.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href="tel:+37063305031"
                    className="btn-m-primary text-base font-mono-tabular flex-1 justify-center"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+37063305031</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPhone('+37063305031')}
                    className="btn-m-secondary text-sm px-4"
                  >
                    {copiedPhone === '+37063305031' ? 'Nukopijuota!' : 'Kopijuoti'}
                  </button>
                </div>
              </div>

              <div className="carbon-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#e00000] block mb-2">
                    Mechaninis remontas · Grandinių keitimas · Važiuoklė
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                    Karolis | Remontas ir gedimai
                  </h3>
                  <p className="text-sm text-[#f0f2f5]/80 mb-6">
                    Kreipkitės dėl variklių grandinių keitimo, mechaninių defektų šalinimo,
                    agregatų remonto, transmisijos bei važiuoklės darbų Kaune.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href="tel:+37068644262"
                    className="btn-m-danger text-base font-mono-tabular flex-1 justify-center"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+37068644262</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPhone('+37068644262')}
                    className="btn-m-secondary text-sm px-4"
                  >
                    {copiedPhone === '+37068644262' ? 'Nukopijuota!' : 'Kopijuoti'}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bimmeristai+Kaunas"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-m-secondary text-base py-3.5 px-8"
              >
                <span>Kur mus rasti (Google Maps · Kaunas)</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="border-t border-white/10 bg-[#0a0b0e] py-10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {!logoError ? (
              <img
                src={LOGO_URL}
                alt="Bimmeristai logotipas"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="h-8 w-8 rounded object-cover border border-white/15"
              />
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#0066bf] text-xs font-bold text-white font-display">
                BM
              </span>
            )}
            <span className="font-display font-bold text-white tracking-wider">BIMMERISTAI</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#9aa1b2]">
            <a
              href="#paslaugos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('paslaugos');
              }}
              className="hover:text-white"
            >
              Paslaugos
            </a>
            <a
              href="#patikra"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('patikra');
              }}
              className="hover:text-white"
            >
              Grandinės patikra
            </a>
            <a
              href="#duk"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('duk');
              }}
              className="hover:text-white"
            >
              D.U.K.
            </a>
            <a
              href="#kontaktai"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('kontaktai');
              }}
              className="hover:text-white"
            >
              Kontaktai
            </a>
          </div>

          <p className="text-xs text-[#9aa1b2]">
            © {new Date().getFullYear()} Bimmeristai Kaunas. Visos teisės saugomos.
          </p>
        </div>
      </footer>
    </div>
  );
}
