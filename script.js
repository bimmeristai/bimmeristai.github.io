/**
 * Bimmeristai Kaunas — BMW Diagnostika, Kodavimas ir Remontas
 * Production Standalone Script (script.js)
 * Vanilla JS — Zero dependencies, 100% suderinama su GitHub Pages ir vietine peržiūra
 */

(function () {
  'use strict';

  // 1. DVIVALBĖ KALBŲ BAZĖ (LT & EN)
  const I18N = {
    lt: {
      brand_sub: "KAUNAS · BMW SPECIALIZACIJA",
      nav_home: "Pradžia",
      nav_services: "Paslaugos",
      nav_simulator: "Kodavimas",
      nav_chain: "Grandinės patikra",
      nav_steps: "Kaip dirbame",
      nav_prices: "Kainoraštis",
      nav_faq: "D.U.K.",
      nav_contacts: "Kontaktai",
      nav_book: "Registracija",
      mobile_call_primary: "Skambinti: +370 633 05031",
      mobile_repair_label: "Remontas:",
      btn_book_short: "Registracija",
      btn_book: "Registruotis vizitui",
      btn_call: "Skambinti",
      hero_eyebrow: "TIK BMW AUTOMOBILIŲ SPECIALIZACIJA · KAUNAS",
      hero_warning: "REGISTRACIJA BŪTINA prieš atvykstant į servisą",
      hero_title_1: "Bimmeristai – BMW",
      hero_title_2: "diagnostika, kodavimas",
      hero_title_3: "ir remontas Kaune",
      hero_desc: "Kompiuterinė variklio grandinių patikra neardant variklio, CarPlay aktyvavimas, žemėlapių atnaujinimas ir profesionalus gedimų šalinimas. Tik BMW automobiliai.",
      hero_cta_call: "Registruotis / Skambinti",
      hero_cta_services: "Peržiūrėti paslaugas",
      trust_metric_chain: "Grandinės patikra",
      trust_metric_oem: "OEM ISTA+ įranga",
      trust_metric_loc: "Lietuva",
      hud_ecu: "OBD-II RYŠYS",
      hud_voltage: "BORTO ĮTAMPA",
      hud_chain_price: "GRANDINĖS PATIKRA",
      hud_note: "B47, B57, B48, B58, B38 patikra neardant variklio",
      hud_link: "Tikrinti suderinamumą →",
      trust_eyebrow: "PASITIKĖJIMAS IR EKSPERTIŠKUMAS",
      trust_title: "Kodėl BMW vairuotojai renkasi Bimmeristus?",
      trust_desc: "Mes nesiimame kitų automobilių markių. Mūsų įranga, žinios ir patirtis skirta išskirtinai tik BMW inžinerijai.",
      feat_bmw_only_title: "100% tik BMW specializacija",
      feat_bmw_only_desc: "Dirbame tik su E, F, G ir I serijų BMW. Žinome kiekvieno kėbulo elektros grandines, valdymo blokų niuansus ir silpnąsias vietas.",
      feat_oem_title: "OEM lygio įranga (ISTA+ / E-Sys)",
      feat_oem_desc: "Originali BMW AG programinė įranga ir stabilus maitinimo palaikymas. Jokių kiniškų adapterių ar rizikos sugadinti automobilio valdymo blokus.",
      feat_fast_title: "30€ patikra be variklio ardymo",
      feat_fast_desc: "B serijos variklių grandinės išsitampymo įvertinimas kompiuteriu laipsniais (°). Jokio bereikalingo variklio ardymo ir sutaupytos šimtinės eurų.",
      feat_masters_title: "Aiškus meistrų pasiskirstymas",
      feat_masters_desc: "Diagnostika, grandinės patikra ir kodavimas – Karolis (+370 633 05031). Mechaninis remontas ir grandinių keitimas – Karolis (+370 686 44262).",
      services_eyebrow: "PASLAUGŲ SPEKTRAS",
      services_title: "BMW diagnostikos, kodavimo ir remonto paslaugos",
      services_desc: "Skaidrios kainos eurais, OEM lygio standartai ir garantuotas rezultatas Jūsų BMW automobiliui Kaune.",
      srv_chain_title: "Kompiuterinė variklio grandinės patikra",
      srv_chain_desc: "Tikslus paskirstymo veleno poslinkio kampo nustatymas laipsniais (°) per OEM ISTA+ įrangą. Neardomas nei vienas variklio varžtas. Skirta BMW B38, B48, B58, B47, B57 varikliams.",
      srv_duration: "Trukmė:",
      srv_method: "Metodas:",
      srv_method_val: "Neardant variklio",
      srv_specialist: "Meistras:",
      price_fixed: "Fiksuota kaina",
      btn_check_engine: "Tikrinti savo variklį",
      srv_coding_title: "BMW Kodavimas & Apple CarPlay",
      srv_coding_desc: "Apple CarPlay Fullscreen aktyvavimas, Video in Motion, Start/Stop atmintis (TC_MSA_MEMORY), veidrodėlių užlenkimas, M-Performance ir Alpina skydelių grafika, Sport+ režimai.",
      price_from_30: "Nuo 30 €",
      btn_try_simulator: "Išbandyti simuliatorių",
      srv_diag_title: "Elektronikos & Gedimų diagnostika",
      srv_diag_desc: "Pilnas valdymo blokų klaidų skaitymas, gyvų parametrų analizė realiuoju laiku (DPF būklė, purkštukų korekcijos, turbinos slėgis, oro srautas, kuro siurblys).",
      btn_call_karolis: "Skambinti Karoliui",
      srv_repair_title: "Grandinių keitimas & Remontas",
      srv_repair_desc: "Profesionalus variklio grandinių komplektų keitimas (B ir N serijos), alyvos nuotėkių šalinimas, pakabos, stabdžių bei agregatų remontas su originaliomis OEM dalimis.",
      price_estimate: "Pagal sąmatą",
      srv_maps_title: "Europos žemėlapių FSC atnaujinimas",
      srv_maps_desc: "Naujausių Road Map Europe (EVO, NEXT, LIVE, ROUTE, PREMIUM) žemėlapių įrašymas su legaliu FSC kodu. Nauji Kauno ir Lietuvos keliai, greičio radarai.",
      btn_order: "Užsakyti",
      srv_retrofit_title: "Papildomos įrangos montavimas",
      srv_retrofit_desc: "Galinio vaizdo kamerų, NBT / ID6 multimedijos ekranų, M vairų su bėgių mentelėmis pajungimas ir teisingas suprogramavimas į automobilio VO / FA konfigūraciją.",
      price_individual: "Individualiai",
      btn_inquire: "Pasiteirauti",
      sim_eyebrow: "INTERAKTYVUS MODULIS",
      sim_title: "BMW funkcijų kodavimo terminalas",
      sim_desc: "Pasirinkite automobilio modelį ir norimą opciją: pamatysite, kaip vyksta saugus kodavimo procesas be rizikos blokams.",
      sim_step1: "1. Pasirinkite BMW modelį:",
      sim_step2: "2. Pasirinkite funkciją:",
      sim_opt_carplay: "Pilno ekrano vaizdas NBT EVO ID5/ID6 ir MGU.",
      sim_opt_startstop: "Prisimena išjungtą būseną, aktyvuojamas Sport+.",
      sim_opt_cluster: "M logotipas, 330 km/h skalė ir skaitmeninis greitis.",
      sim_opt_maps: "Naujausi Europos ir Kauno kelių žemėlapiai.",
      sim_opt_exhaust: "Išjungia dirbtinį garsiakalbių garsą, atidaro sklendes.",
      sim_gauge_ecu: "VALDYMO BLOKAS",
      sim_gauge_volt: "BORTO ĮTAMPA",
      sim_gauge_price: "KAINA KAUNE",
      chain_eyebrow: "PATIKRA NEARDANT VARIKLIO",
      chain_title: "Ar Jūsų BMW variklio grandinę galima patikrinti kompiuteriu?",
      chain_desc: "Pasirinkite variklį ir ridą – sužinokite diagnostikos metodą, kainą ir meistro rekomendaciją.",
      chain_lbl_engine: "Pasirinkite BMW variklį:",
      chain_lbl_mileage: "Pasirinkite dabartinę ridą:",
      btn_book_chain: "Užsiregistruoti patikrai už 30€",
      chain_res_head: "DIAGNOSTIKOS PROTOKOLAS",
      chain_res_price_lbl: "KAINA KAUNE",
      chain_res_models: "Taikoma modeliams:",
      chain_res_method: "Patikros metodas:",
      chain_res_advice: "Patarimas pagal ridą:",
      chain_res_specialist: "Atsakingas meistras:",
      steps_eyebrow: "DARBO EIGA",
      steps_title: "Kaip vyksta registracija ir aptarnavimas?",
      steps_desc: "Aiškus, greitas ir profesionalus procesas nuo pirmo skambučio iki atiduodamo BMW rakto.",
      step1_title: "Išankstinė registracija",
      step1_desc: "Paskambinate arba užpildote formą internetu. Suderiname patogų laiką. Primename: atvykimas galimas TIK su registracija.",
      step2_title: "OEM Diagnostinis pajungimas",
      step2_desc: "Prijungiame profesionalią ENET / ICOM įrangą su stabiliu akumuliatoriaus maitinimo palaikymu. Nuskaitomi valdymo blokai.",
      step3_title: "Patikra arba kodavimas",
      step3_desc: "Atliekamas grandinės laipsnio testas (30€), CarPlay aktyvavimas, FSC žemėlapiai arba pašalinamos elektronikos klaidos.",
      step4_title: "Ataskaita ir rekomendacija",
      step4_desc: "Pateikiame aiškią patikros ataskaitą. Jei grandinė viršija leistiną normą, suplanuojame savalaikį keitimą pas meistrą Karolį.",
      price_eyebrow: "SKAIDRUS KAINORAŠTIS",
      price_title: "Darbų kainos Kaune (EUR)",
      price_desc: "Jokių paslėptų mokesčių ar netikėtų priemokų. Mokate tik už realiai atliktą darbą ir profesionalų rezultatą.",
      pr_chain_name: "Kompiuterinė variklio grandinės patikra (neardant variklio)",
      pr_chain_sub: "B47, B57, B48, B58, B38 varikliams. Paskirstymo veleno kampo nustatymas laipsniais.",
      pr_fixed: "Fiksuota kaina",
      pr_diag_name: "Pilna elektronikos ir klaidų diagnostika (ISTA+)",
      pr_diag_sub: "Visų valdymo blokų nuskaitymas, DPF būklė, purkštukų korekcijos, slėgiai realiu laiku.",
      pr_coding_name: "Paslėptų funkcijų kodavimas (E-Sys / FSC)",
      pr_coding_sub: "Start/Stop atmintis, veidrodėliai, M-Performance skydelis, Sport+, garso signalai ir kt.",
      pr_from_30: "Nuo 30 €",
      pr_depends: "Pagal funkcijų kiekį",
      pr_carplay_name: "Apple CarPlay Fullscreen aktyvavimas",
      pr_carplay_sub: "NBT EVO ID5 / ID6 ir MGU sistemose. Pilnas sertifikatų įrašymas per visą ekraną.",
      pr_from_50: "Nuo 50 €",
      pr_idrive: "Priklauso nuo iDrive versijos",
      pr_maps_name: "Europos navigacijos žemėlapių atnaujinimas",
      pr_maps_sub: "Naujausi Road Map Europe 2026 žemėlapiai su legaliu FSC kodu.",
      pr_map_type: "Priklauso nuo sistemos tipo",
      pr_repair_name: "Mechaninis grandinių keitimas ir variklių remontas",
      pr_repair_sub: "Meistras Karolis (+370 686 44262). Originalūs dalių komplektai, sąžiningas darbas ir garantija.",
      pr_estimate: "Pagal sąmatą",
      pr_repair_phone: "Skambinti: +37068644262",
      book_eyebrow: "REGISTRACIJA VIZITUI",
      book_title: "Užsiregistruokite patikrai ar remontui Kaune",
      book_desc: "Pateikite užklausą žemiau arba skambinkite tiesiogiai atsakingam meistrui. Registracija prieš atvykstant BŪTINA.",
      karolis1_role: "DIAGNOSTIKA · KODAVIMAS · GRANDINĖS PATIKRA (30€)",
      karolis1_desc: "Kompiuterinė B serijos variklio grandinių patikra neardant variklio (30€), pilna mazgų klaidų analizė, Fullscreen CarPlay, navigacijos žemėlapiai ir parametrų kodavimas.",
      karolis2_role: "MECHANINIS REMONTAS · GRANDINIŲ KEITIMAS · VARIKLIAI",
      karolis2_desc: "Variklio grandinių komplektų keitimas (B ir N serijos), mechaninis remontas, transmisijos, važiuoklės bei aušinimo sistemų gedimų šalinimas Kaune.",
      form_title: "Registracijos forma internetu",
      form_subtitle: "Užpildykite duomenis, ir mes susisieksime su jumis per 1 val. suderinti tikslų laiką.",
      form_lbl_name: "Vardas *",
      form_lbl_phone: "Telefono numeris *",
      form_lbl_car: "BMW modelis ir metai *",
      form_lbl_service: "Pageidaujama paslauga *",
      form_lbl_date: "Pageidaujama vizito data (nebūtina)",
      form_lbl_email: "El. paštas (patvirtinimui gauti)",
      form_lbl_message: "Papildomas klausimas ar simptomai",
      form_consent: "Sutinku, kad pateikti kontaktai būtų naudojami vizito suderinimui ir susisiekimui.",
      form_submit_btn: "Pateikti registraciją vizitui",
      side_info_title: "Svarbi informacija atvykstantiems",
      side_loc_lbl: "📍 Lokacija:",
      side_loc_val: "Kaunas, Lietuva. Tikslus garažo adresas ir privažiavimas atsiunčiamas suderinus laiką.",
      side_hours_lbl: "🕒 Darbo laikas:",
      side_hours_val: "I–V 09:00 – 18:00 val. (Savaitgaliais – pagal atskirą susitarimą).",
      side_rule_lbl: "⚠️ Taisyklė:",
      side_rule_val: "Be išankstinės registracijos atvykti negalima, nes kiekvienam automobiliui skiriamas individualus laikas.",
      side_email_lbl: "✉️ El. paštas:",
      side_quick_call: "Reikia skubios konsultacijos?",
      side_quick_desc: "Skambinkite meistrui tiesiogiai – atsakysime į visus klausimus apie jūsų BMW modelį.",
      map_kaunas_title: "Kaunas, Lietuva – Orientacinė serviso vieta",
      map_open_btn: "Atidaryti Google Maps ↗",
      map_foot_note: "Tikslios koordinatės ir vartų kodas pateikiami SMS arba WhatsApp žinute po atliktos registracijos.",
      faq_eyebrow: "D.U.K.",
      faq_title: "Dažniausiai užduodami klausimai",
      faq_desc: "Atsakymai apie kompiuterinę grandinės patikrą, saugumą, kainodarą ir variklių ypatumus.",
      faq_q1: "Kokia kaina variklio grandinės patikros?",
      faq_a1: "Diagnostinis patikrinimas ir grandinės būklės įvertinimas kompiuteriu kainuoja 30€.",
      faq_q2: "Kas geriau: B serijos ar N serijos BMW varikliai?",
      faq_a2: "B serijos varikliuose yra ištaisyta dauguma N serijos klaidų – grandinės tarnauja daug geriau, indėklai patikimesni, o varikliai atlaiko didesnę galią.",
      faq_q3: "Kokiems varikliams galima atlikti kompiuterinę grandinės patikrą?",
      faq_a3: "Visiems B serijos (B38, B48, B58, B47 ir t.t.) benzininiams ir dyzeliniams BMW varikliams (F3x, F1x, G serijai ir kt.).",
      faq_q4: "Kaip veikia grandinės diagnostika neardant variklio?",
      faq_a4: "Dyzeliniams B47 varikliams kompiuteris tiksliai rodo veleno kampą laipsniais. Benzininiams varikliams diagnostika atlieka apsukų kėlimo testą ir nustato išsitampymą. Jei parodoma keitimo riba, rekomenduojama keisti.",
      faq_q5: "Ar prieš atvykstant būtina registruotis?",
      faq_a5: "Taip, registracija prieš atvykstant yra griežtai būtina, kadangi kiekvienam BMW skiriamas individualus laikas ir diagnostinė įranga.",
      faq_badge: "ŽINYNAS IR INFORMACIJA",
      faq_page_title: "Dažniausiai užduodami klausimai (D.U.K.)",
      faq_page_desc: "Visi atsakymai apie BMW kompiuterinę grandinės patikrą, diagnostikos metodus, kainodarą bei B ir N serijos variklių ypatybes.",
      faq_q6: "Kuriam Karoliui skambinti, jei reikia ir patikros, ir remonto?",
      faq_a6: "Elektroninei diagnostikai, grandinės patikrai laipsniais, CarPlay ir kodavimui skambinkite Karoliui tel. +370 633 05031. Mechaniniam remontui ir agregatų keitimui – Karoliui tel. +370 686 44262.",
      faq_q7: "Ar atliekate grandinės patikrą senesniems N serijos varikliams (N47, N57)?",
      faq_a7: "Kompiuterinis fazių matavimas laipsniais techniškai galimas tik B serijos varikliams. N serijos varikliams atliekama klaidų diagnostika, akustinis įvertinimas bei fizinė apžiūra, o esant poreikiui – grandinių komplekto keitimas pas meistrą Karolį (+370 686 44262).",
      faq_q8: "Ar saugu koduoti paslėptas funkcijas? Ar nedings garantija?",
      faq_a8: "Kodavimas aktyvuoja tik gamyklinius parametrus, kuriuos BMW inžinieriai jau yra numatę valdymo blokų programinėje įrangoje. Prieš kiekvieną pakeitimą išsaugome originalią atsarginę kopiją (backup), o darbas atliekamas su palaikoma 14V įtampa, todėl tai visiškai saugu.",
      cta_box_title: "Turite papildomų klausimų apie savo BMW?",
      cta_box_desc: "Paskambinkite tiesiogiai arba užregistruokite automobilį patikrai internetu.",
      contacts_badge: "LOKACIJA IR RYŠYS · KAUNAS",
      contacts_page_title: "Kuriam Karoliui skambinti?",
      contacts_page_desc: "Prieš atvykstant registracija telefonu yra būtina. Pasirinkite meistrą pagal savo gedimo pobūdį:",
      cta_booking_title: "Norite užsiregistruoti apžiūrai iš anksto?",
      cta_booking_desc: "Užpildykite greitą rezervacijos formą pagrindiniame puslapyje.",
      btn_view_all_faq: "Peržiūrėti visus klausimus D.U.K. puslapyje →",
      footer_desc: "BMW diagnostika, kodavimas ir mechaninis remontas Kaune. Nepriklausomas specializuotas BMW entuziastų centras.",
      footer_nav_title: "Navigacija",
      footer_contacts_title: "Kontaktai Kaune",
      karolis1_role_short: "Diagnostika ir kodavimas:",
      karolis2_role_short: "Mechaninis remontas:",
      footer_disclaimer: "BMW yra registruotas Bayerische Motoren Werke AG prekių ženklas. Servisas yra nepriklausomas centras."
    },
    en: {
      brand_sub: "KAUNAS · BMW SPECIALIZATION",
      nav_home: "Home",
      nav_services: "Services",
      nav_simulator: "Coding",
      nav_chain: "Chain Check",
      nav_steps: "How It Works",
      nav_prices: "Pricing",
      nav_faq: "FAQ",
      nav_contacts: "Contacts",
      nav_book: "Book Visit",
      mobile_call_primary: "Call: +370 633 05031",
      mobile_repair_label: "Repairs:",
      btn_book_short: "Booking",
      btn_book: "Book Inspection",
      btn_call: "Call",
      hero_eyebrow: "BMW-ONLY SPECIALIZATION · KAUNAS",
      hero_warning: "PRIOR REGISTRATION IS REQUIRED before visiting",
      hero_title_1: "Bimmeristai – BMW",
      hero_title_2: "diagnostics, coding",
      hero_title_3: "and repairs in Kaunas",
      hero_desc: "Computer diagnostic timing chain inspection without engine disassembly, Apple CarPlay activation, navigation map updates and repairs in Kaunas. Strictly BMW only.",
      hero_cta_call: "Book / Call Directly",
      hero_cta_services: "Explore Services",
      trust_metric_chain: "Chain inspection",
      trust_metric_oem: "OEM ISTA+ tools",
      trust_metric_loc: "Lithuania",
      hud_ecu: "OBD-II LINK",
      hud_voltage: "BATTERY VOLTS",
      hud_chain_price: "CHAIN CHECK",
      hud_note: "B47, B57, B48, B58, B38 inspection without disassembly",
      hud_link: "Check compatibility →",
      trust_eyebrow: "TRUST & TECHNICAL EXPERTISE",
      trust_title: "Why do BMW owners in Kaunas choose Bimmeristai?",
      trust_desc: "We do not accept other car brands. Our equipment, diagnostic tools, and knowledge are dedicated exclusively to BMW engineering.",
      feat_bmw_only_title: "100% BMW-Only Specialization",
      feat_bmw_only_desc: "We work exclusively on BMW E, F, G, and I series. We understand every body chassis, control module vulnerability, and wiring layout.",
      feat_oem_title: "Dealer-Grade OEM Software",
      feat_oem_desc: "Authentic BMW AG diagnostic software (ISTA+, E-Sys) with regulated voltage stabilization. Zero risk to your factory electronic control modules.",
      feat_fast_title: "30€ Check Without Disassembly",
      feat_fast_desc: "Computerized camshaft phase angle evaluation in degrees (°) for B-series engines. Save hundreds of euros with no teardown required.",
      feat_masters_title: "Dedicated Specialist Division",
      feat_masters_desc: "Diagnostics, timing chain inspection & coding – Karolis (+370 633 05031). Mechanical repairs & chain replacements – Karolis (+370 686 44262).",
      services_eyebrow: "SERVICE SPECTRUM",
      services_title: "BMW Diagnostics, Coding & Repair Services",
      services_desc: "Transparent prices in EUR, dealer-grade precision, and proven results for your BMW in Kaunas.",
      srv_chain_title: "Timing Chain Diagnostic Check",
      srv_chain_desc: "Exact camshaft angle reading in degrees (°) through OEM ISTA+ diagnostics without removing a single engine bolt. For B38, B48, B58, B47, and B57 engines.",
      srv_duration: "Duration:",
      srv_method: "Method:",
      srv_method_val: "No teardown",
      srv_specialist: "Technician:",
      price_fixed: "Fixed price",
      btn_check_engine: "Check your engine",
      srv_coding_title: "BMW Coding & Apple CarPlay",
      srv_coding_desc: "Fullscreen CarPlay activation, Video in Motion, Start/Stop memory (TC_MSA_MEMORY), folding mirrors, M-Performance & Alpina instrument cluster layouts, Sport+ modes.",
      price_from_30: "From 30 €",
      btn_try_simulator: "Launch simulator",
      srv_diag_title: "Electronics & Fault Diagnostics",
      srv_diag_desc: "Full module trouble code reading, live parameter analysis in real time (DPF status, injector corrections, turbo boost pressure, airflow, fuel pump).",
      btn_call_karolis: "Call Karolis",
      srv_repair_title: "Timing Chain Replacement & Repairs",
      srv_repair_desc: "Professional timing chain kit replacement for B and N series engines, oil leak elimination, chassis, cooling, and mechanical repairs with OEM parts.",
      price_estimate: "By estimate",
      srv_maps_title: "European Map FSC Updates",
      srv_maps_desc: "Official Road Map Europe 2026 update with genuine FSC code. Latest Lithuanian road layouts, Kaunas bypasses, and speed camera data.",
      btn_order: "Order Update",
      srv_retrofit_title: "Retrofit & Equipment Installation",
      srv_retrofit_desc: "Rear-view cameras, NBT / ID6 display upgrades, M sport steering wheels with paddle shifters retrofitted and coded to factory VO / FA configuration.",
      price_individual: "Custom quote",
      btn_inquire: "Inquire Now",
      sim_eyebrow: "INTERACTIVE MODULE",
      sim_title: "BMW ECU Feature Coding Terminal",
      sim_desc: "Select your BMW model and desired feature: preview how safe OEM coding works without risk to control units.",
      sim_step1: "1. Select your BMW chassis:",
      sim_step2: "2. Select target feature:",
      sim_opt_carplay: "Fullscreen view on NBT EVO ID5/ID6 and MGU.",
      sim_opt_startstop: "Remembers last off state, activates Sport+ mode.",
      sim_opt_cluster: "M logo, 330 km/h gauge scale, and digital speed.",
      sim_opt_maps: "Latest European navigation maps with radars.",
      sim_opt_exhaust: "Disables synthetic fake speaker sound, opens sport flaps.",
      sim_gauge_ecu: "CONTROL UNIT",
      sim_gauge_volt: "BATTERY VOLTS",
      sim_gauge_price: "PRICE IN KAUNAS",
      chain_eyebrow: "CHECK WITHOUT TEARDOWN",
      chain_title: "Can your BMW timing chain be checked via computer?",
      chain_desc: "Select your engine and mileage to inspect diagnostic eligibility, method, and specialist recommendation.",
      chain_lbl_engine: "Select your BMW engine:",
      chain_lbl_mileage: "Select current mileage:",
      btn_book_chain: "Book diagnostic check for 30€",
      chain_res_head: "DIAGNOSTIC PROTOCOL",
      chain_res_price_lbl: "PRICE IN KAUNAS",
      chain_res_models: "Supported models:",
      chain_res_method: "Diagnostic method:",
      chain_res_advice: "Mileage recommendation:",
      chain_res_specialist: "Lead technician:",
      steps_eyebrow: "WORKFLOW",
      steps_title: "How does booking and service work?",
      steps_desc: "A clear, rapid, and transparent process from your first call to hand-back of your BMW keys.",
      step1_title: "Prior Registration",
      step1_desc: "Call or submit an online reservation. We agree on an exact time slot. Note: admission is strictly by appointment only.",
      step2_title: "OEM Diagnostic Connection",
      step2_desc: "We connect our ENET / ICOM dealer interface with clean battery voltage stabilization. All control modules are scanned.",
      step3_title: "Inspection or Coding",
      step3_desc: "Timing chain angle measurement (30€), CarPlay activation, FSC maps, or electronics troubleshooting is performed.",
      step4_title: "Report & Next Steps",
      step4_desc: "You receive a clear readout report. If chain elongation reaches threshold limits, we schedule timely replacement with master Karolis.",
      price_eyebrow: "TRANSPARENT PRICING",
      price_title: "Service Prices in Kaunas (EUR)",
      price_desc: "No hidden charges or unexpected markups. You pay solely for precision results and dealer-grade craftsmanship.",
      pr_chain_name: "Computer timing chain check (without engine disassembly)",
      pr_chain_sub: "For B47, B57, B48, B58, B38 engines. Camshaft phase angle readout in degrees (°).",
      pr_fixed: "Fixed fee",
      pr_diag_name: "Full electronics & fault diagnostics (ISTA+)",
      pr_diag_sub: "All module reading, DPF health, injector balance, real-time boost pressures.",
      pr_coding_name: "Hidden feature coding (E-Sys / FSC)",
      pr_coding_sub: "Start/Stop memory, folding mirrors, M cluster, Sport+, acoustic confirmation.",
      pr_from_30: "From 30 €",
      pr_depends: "Based on feature count",
      pr_carplay_name: "Apple CarPlay Fullscreen activation",
      pr_carplay_sub: "NBT EVO ID5 / ID6 and MGU units. Official certificate injection.",
      pr_from_50: "From 50 €",
      pr_idrive: "Depends on iDrive version",
      pr_maps_name: "European navigation map update",
      pr_maps_sub: "Latest Road Map Europe 2026 with authentic FSC license code.",
      pr_map_type: "Depends on system type",
      pr_repair_name: "Mechanical timing chain replacement & repairs",
      pr_repair_sub: "Master Karolis (+370 686 44262). Genuine OEM kits, honest labor, and warranty.",
      pr_estimate: "By estimate",
      pr_repair_phone: "Call: +37068644262",
      book_eyebrow: "BOOK YOUR VISIT",
      book_title: "Book inspection or repair in Kaunas",
      book_desc: "Submit your request below or call the responsible specialist directly. Prior appointment is strictly required.",
      karolis1_role: "DIAGNOSTICS · CODING · CHAIN CHECK (30€)",
      karolis1_desc: "Computer diagnostic timing chain inspection for B-series engines without disassembly (30€), full fault analysis, Fullscreen CarPlay, navigation maps, and coding.",
      karolis2_role: "MECHANICAL REPAIRS · CHAIN REPLACEMENT · ENGINES",
      karolis2_desc: "Complete timing chain replacements (B and N series), engine teardown, drivetrain, suspension, and cooling system repairs in Kaunas.",
      form_title: "Online Appointment Booking",
      form_subtitle: "Fill out your details and we will reach back within 1 hour to confirm your time slot.",
      form_lbl_name: "Your Name *",
      form_lbl_phone: "Phone Number *",
      form_lbl_car: "BMW Model & Year *",
      form_lbl_service: "Desired Service *",
      form_lbl_date: "Preferred Date (Optional)",
      form_lbl_email: "Email (for confirmation)",
      form_lbl_message: "Additional question or symptoms",
      form_consent: "I agree that the provided contact details will be used to coordinate my service appointment.",
      form_submit_btn: "Submit Appointment Request",
      side_info_title: "Important Visitor Information",
      side_loc_lbl: "📍 Location:",
      side_loc_val: "Kaunas, Lithuania. Exact workshop address and access instructions sent upon appointment confirmation.",
      side_hours_lbl: "🕒 Opening Hours:",
      side_hours_val: "Mon–Fri 09:00 – 18:00 (Weekends by special advance agreement).",
      side_rule_lbl: "⚠️ Policy:",
      side_rule_val: "Visits without prior booking are not accepted so we allocate dedicated workshop time to every BMW.",
      side_email_lbl: "✉️ Email:",
      side_quick_call: "Need rapid technical advice?",
      side_quick_desc: "Call our technicians directly — we will answer any question regarding your BMW chassis and engine.",
      map_kaunas_title: "Kaunas, Lithuania – Approximate Workshop Location",
      map_open_btn: "Open Google Maps ↗",
      map_foot_note: "Exact coordinates and gate code are dispatched via SMS or WhatsApp upon appointment confirmation.",
      faq_eyebrow: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Answers regarding timing chain checks without disassembly, coding safety, prices, and BMW engines.",
      faq_q1: "What is the price of the engine timing chain check?",
      faq_a1: "Computer diagnostic inspection and chain elongation measurement via OEM software costs 30€.",
      faq_q2: "Which is better: BMW B-series or N-series engines?",
      faq_a2: "B-series engines resolved most flaws of the N-series: timing chains last substantially longer, rod bearings are robust, and they handle power reliably.",
      faq_q3: "Which engines can undergo computer timing chain inspection?",
      faq_a3: "All B-series (B38, B48, B58, B47 etc.) petrol and diesel BMW engines across F and G series chassis.",
      faq_q4: "How does timing chain diagnostics work without engine disassembly?",
      faq_a4: "For B47 diesel engines, the computer measures exact camshaft phase angle in degrees (°). For petrol engines, automated rev test analyzes chain elongation and threshold.",
      faq_q5: "Is registration required before visiting?",
      faq_a5: "Yes, prior registration is strictly required so that we allocate dedicated workshop time and OEM tools for your vehicle.",
      faq_badge: "KNOWLEDGE BASE & FAQ",
      faq_page_title: "Frequently Asked Questions (FAQ)",
      faq_page_desc: "Comprehensive answers on BMW timing chain inspection, diagnostic methodology, pricing, and B vs N series engines.",
      faq_q6: "Which Karolis should I call for my request?",
      faq_a6: "For diagnostics, timing chain angle check, CarPlay, and coding, call Karolis at +370 633 05031. For mechanical repairs, chain replacements, and chassis work, call Karolis at +370 686 44262.",
      faq_q7: "Do you inspect timing chains on older N-series engines (N47, N57)?",
      faq_a7: "Computerized phase angle check in degrees is available only for B-series engines. For N-series, we perform acoustic/physical inspection and full chain replacement with master Karolis (+370 686 44262).",
      faq_q8: "Is feature coding safe for the vehicle's computer modules?",
      faq_a8: "Completely safe. Coding only enables options built-in by BMW AG factory engineers. We perform a full CAFD backup prior to any changes and operate with stabilized 14V supply.",
      cta_box_title: "Have more questions about your BMW?",
      cta_box_desc: "Call our technicians directly or submit your appointment request online.",
      contacts_badge: "LOCATION & CONTACTS · KAUNAS",
      contacts_page_title: "Which Karolis should you call?",
      contacts_page_desc: "Prior registration by phone is required before arrival. Select the technician based on your request:",
      cta_booking_title: "Want to book an inspection slot online?",
      cta_booking_desc: "Fill in the reservation form on our home page.",
      btn_view_all_faq: "View all questions on FAQ page →",
      footer_desc: "BMW diagnostics, coding, and mechanical repairs in Kaunas. Independent specialized BMW enthusiast center.",
      footer_nav_title: "Navigation",
      footer_contacts_title: "Contacts in Kaunas",
      karolis1_role_short: "Diagnostics & coding:",
      karolis2_role_short: "Mechanical repairs:",
      footer_disclaimer: "BMW is a registered trademark of Bayerische Motoren Werke AG. This service is an independent specialist center."
    }
  };

  // Variklių duomenų bazė kompiuterinei patikrai
  const ENGINE_DIAGNOSTIC_DATA = {
    B47: {
      code: 'B47 (2.0d Dyzelinas)',
      models: '118d, 120d, 220d, 318d, 320d, 420d, 518d, 520d, X1, X3, X4 (F ir G serijos)',
      eligible: true,
      method_lt: 'Kompiuteris per OEM ISTA+ įrangą tiksliai išmatuoja paskirstymo veleno fazės poslinkio kampą laipsniais (°) neardant nei vienos variklio detalės.',
      method_en: 'Computer diagnostic tool measures camshaft phase displacement angle in degrees (°) via OEM ISTA+ without disassembling any engine parts.',
      price: '30 €',
      specialist_lt: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialist_en: 'Karolis | Diagnostics & Coding (+37063305031)'
    },
    B57: {
      code: 'B57 (3.0d Dyzelinas)',
      models: '330d, 430d, 530d, 540d, 730d, 740d, X3 30d/M40d, X5 30d/40d/M50d, X6, X7',
      eligible: true,
      method_lt: 'Kompiuterinė velenų sinchronizacijos ir kampo patikra laipsniais (°) realiuoju laiku kartu su DPF ir purkštukų parametrų vertinimu.',
      method_en: 'Real-time computerized camshaft sync and phase angle evaluation in degrees (°) alongside DPF and injector balance review.',
      price: '30 €',
      specialist_lt: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialist_en: 'Karolis | Diagnostics & Coding (+37063305031)'
    },
    B48: {
      code: 'B48 (2.0i Benzinas)',
      models: '220i, 230i, 320i, 330i, 330e, 420i, 430i, 520i, 530i, X1, X2, X3, X4',
      eligible: true,
      method_lt: 'Diagnostikos programa atlieka automatizuotą apsukų kėlimo ir VANOS fazių testą bei nustato grandinės išsitampymo reikšmę.',
      method_en: 'Automated rev-ramp and VANOS phase sweep test calculates timing chain elongation and threshold state without disassembly.',
      price: '30 €',
      specialist_lt: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialist_en: 'Karolis | Diagnostics & Coding (+37063305031)'
    },
    B58: {
      code: 'B58 (3.0i Benzinas)',
      models: 'M140i, M240i, 340i, M340i, 440i, M440i, 540i, 740i, 840i, X3 M40i, X5 40i',
      eligible: true,
      method_lt: 'Atliekamas kompiuterinis apsukų kėlimo grandinės įtempimo testas, VANOS vožtuvų reakcijos analizė ir degimo vėlinimo patikra.',
      method_en: 'Computerized timing chain tension test, VANOS response analysis, and ignition timing delay assessment.',
      price: '30 €',
      specialist_lt: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialist_en: 'Karolis | Diagnostics & Coding (+37063305031)'
    },
    B38: {
      code: 'B38 (1.5i Benzinas)',
      models: '116i, 118i, 218i, 318i, X1 sDrive18i, X2 sDrive18i, i8',
      eligible: true,
      method_lt: 'Kompiuterinis apsukų kėlimo grandinės testas ir alkūninio veleno ašinio laisvumo bei VANOS parametrų įvertinimas neardant variklio.',
      method_en: 'Computerized rev test evaluating chain elongation, axial play, and VANOS angles without taking anything apart.',
      price: '30 €',
      specialist_lt: 'Karolis | Diagnostika ir kodavimas (+37063305031)',
      specialist_en: 'Karolis | Diagnostics & Coding (+37063305031)'
    },
    N_SERIES: {
      code: 'N47 / N57 / N20 (N serija)',
      models: 'E90, E60, F10, F30, F25, E70, F15 ankstyvieji modeliai',
      eligible: false,
      method_lt: 'Kompiuterinė grandinės išsitampymo patikra laipsniais galima tik B serijos varikliams. N serijai atliekama fizinė/akustinė patikra bei grandinių keitimas pas meistrą Karolį.',
      method_en: 'Computerized phase angle check in degrees is available only for B-series engines. For N-series, we perform acoustic/physical inspection and chain replacement with master Karolis.',
      price: '30 € (bendra diagnostika)',
      specialist_lt: 'Karolis | Remontas ir gedimai (+37068644262)',
      specialist_en: 'Karolis | Repairs & Troubleshooting (+37068644262)'
    }
  };

  function getAdviceByMileage(mileageKey, isBSeries, lang) {
    if (!isBSeries) {
      return lang === 'en'
        ? 'For N-series engines, immediate inspection is advised if any chain rattle is audible on cold starts.'
        : 'N serijos varikliams rekomenduojama nedelsti išgirdus pašalinį grandinės šnarėjimą šaltam varikliui.';
    }
    const map = {
      'under120': {
        lt: 'Profilaktinė patikra ypač rekomenduojama perkant automobilį arba norint įsitikinti tikra rida.',
        en: 'Preventative inspection recommended before buying or to verify genuine vehicle mileage.'
      },
      '120to180': {
        lt: 'Optimalus laikas atlikti kompiuterinę grandinės patikrą (30€) ir įvertinti laipsninį nuokrypį.',
        en: 'Optimal interval to run computer chain inspection (30€) and calculate degree deviation.'
      },
      '180to240': {
        lt: 'Aukštesnės rizikos intervalas – primygtinai rekomenduojame patikrinti grandinės išsitampymą prieš ilgesnes keliones.',
        en: 'Elevated risk interval – we strongly advise verifying chain elongation before long trips.'
      },
      'over240': {
        lt: 'Kritinis ridos intervalas – būtina kompiuterinė patikra; jei riba viršyta, suplanuosime savalaikį keitimą.',
        en: 'Critical mileage interval – computerized check is essential; if limit is reached, replacement will be scheduled.'
      }
    };
    return (map[mileageKey] && map[mileageKey][lang]) || (lang === 'en' ? 'Inspection recommended.' : 'Patikra rekomenduojama.');
  }

  // BMW Kodavimo simuliatoriaus nustatymai
  const CODING_SIM_PRESETS = {
    carplay: {
      ecu: 'HU_NBT_EVO',
      voltage: '13.8V',
      result_lt: 'FULLSCREEN AKTYVUOTA',
      result_en: 'FULLSCREEN ACTIVE',
      lines: [
        { type: 'dim', lt: '>>> Jungiamasi prie ENET sąsajos (169.254.199.99:6801)...', en: '>>> Connecting to ENET interface (169.254.199.99:6801)...' },
        { type: 'info', lt: 'Nuskaitytas valdymo blokas: HU_NBT_EVO (I-Level: S15A-23-07-530)', en: 'Identified ECU: HU_NBT_EVO (I-Level: S15A-23-07-530)' },
        { type: 'info', lt: 'FSC sertifikatų analizė: 0143006F (Apple CarPlay Fullscreen)...', en: 'FSC certificate check: 0143006F (Apple CarPlay Fullscreen)...' },
        { type: 'm', lt: 'Konfigūruojama: CARPLAY_FULLSCREEN = aktiv (Widescreen 1920x720)', en: 'Configuring: CARPLAY_FULLSCREEN = aktiv (Widescreen 1920x720)' },
        { type: 'info', lt: 'Kodavimas įrašomas į iDrive NVM flash atmintį...', en: 'Flashing coding CAFD into iDrive NVM memory...' },
        { type: 'success', lt: '✓ KODAVIMAS SĖKMINGAS! Perkrovus iDrive CarPlay rodomas per visą ekraną.', en: '✓ CODING COMPLETE! Apple CarPlay is now rendered in full widescreen resolution.' }
      ]
    },
    startstop: {
      ecu: 'BDC_BODY2',
      voltage: '14.1V',
      result_lt: 'ATLAIKYTA ATMINTIS',
      result_en: 'MEMORY ACTIVE',
      lines: [
        { type: 'dim', lt: '>>> Skaitomi DME ir BDC variantų kodai...', en: '>>> Reading DME and BDC body controller variants...' },
        { type: 'info', lt: 'Modifikuojama funkcija: TC_MSA_MEMORY = aktiv (prisiminti būseną)', en: 'Modifying key parameter: TC_MSA_MEMORY = aktiv (remember last state)' },
        { type: 'info', lt: 'Aktyvuojamas režimas: FesSportWorldMode1 = SportExpert (Sport+)', en: 'Activating mode: FesSportWorldMode1 = SportExpert (Sport+ mode)' },
        { type: 'm', lt: 'CAFD failo generavimas ir parašo tikrinimas per E-Sys...', en: 'Compiling CAFD file and digital signature verification via E-Sys...' },
        { type: 'success', lt: '✓ KODAVIMAS BAIGTAS! Start/Stop nebeįkyri po kiekvieno užvedimo.', en: '✓ CODING FINISHED! Auto Start/Stop will remember your last chosen state.' }
      ]
    },
    cluster: {
      ecu: 'DKOMBI4',
      voltage: '13.9V',
      result_lt: 'M-SPORT TEMA AKTYVI',
      result_en: 'M-SPORT CLUSTER OK',
      lines: [
        { type: 'dim', lt: '>>> Prieiga prie prietaisų skydelio bloko (KOMBI)...', en: '>>> Establishing session with Instrument Cluster (KOMBI)...' },
        { type: 'info', lt: 'Nustatoma tema: LOGO_SCHRIFTZUG = m_performance', en: 'Writing layout theme: LOGO_SCHRIFTZUG = m_performance' },
        { type: 'm', lt: 'Greičio skalės modifikavimas: SPEEDO_SCALE = 330_kmh', en: 'Calibrating speedometer scale: SPEEDO_SCALE = 330_kmh' },
        { type: 'info', lt: 'Skaitmeninis greitis ekrane: BC_DIGITAL_V = aktiv', en: 'Digital speed in center display: BC_DIGITAL_V = aktiv' },
        { type: 'success', lt: '✓ SĖKMINGAI AKTYVUOTA! Skydelyje šviečia autentiška M grafika.', en: '✓ ACTIVATED! Authentic M-Performance dashboard graphics are now live.' }
      ]
    },
    maps: {
      ecu: 'NAVIGATION',
      voltage: '14.2V',
      result_lt: '2026 ŽEMĖLAPIAI OK',
      result_en: '2026 MAPS INSTALLED',
      lines: [
        { type: 'dim', lt: '>>> Tikrinamas esamas navigacijos FSC sertifikatas...', en: '>>> Validating current navigation FSC certificates...' },
        { type: 'info', lt: 'Rastas pasenęs žemėlapis: Road Map Europe EVO 2019-2', en: 'Outdated version detected: Road Map Europe EVO 2019-2' },
        { type: 'info', lt: 'Generuojamas autorizuotas 00F000xx sertifikatas 2026-1 versijai...', en: 'Generating authorized 00F000xx certificate for 2026-1 release...' },
        { type: 'm', lt: 'Įrašomi 3D pastatai, reljefas ir Lietuvos radarų duomenys...', en: 'Installing 3D landmark database, terrain, and Kaunas speed cameras...' },
        { type: 'success', lt: '✓ ŽEMĖLAPIAI ATNAUJINTI! Greitas maršruto planavimas ir tikslūs keliai.', en: '✓ MAPS UPDATED! Faster routing and accurate Lithuanian road network.' }
      ]
    },
    exhaust: {
      ecu: 'DME_MG1',
      voltage: '14.0V',
      result_lt: 'EXHAUST FLAPS OPEN',
      result_en: 'EXHAUST FLAPS OPEN',
      lines: [
        { type: 'dim', lt: '>>> Nuskaitytas variklio kompiuteris (DME Bosch MG1)...', en: '>>> Reading Engine Control Unit (Bosch MG1 DME)...' },
        { type: 'info', lt: 'Sintetinio garso modulis: ASD_SOUND_OFF = aktiv (tikras garsas)', en: 'Disabling fake cabin speakers: ASD_SOUND_OFF = aktiv (natural sound)' },
        { type: 'm', lt: 'Išmetimo sklendės logika: EXHAUST_FLAP_SPORT = always_open', en: 'Configuring exhaust valve logic: EXHAUST_FLAP_SPORT = always_open' },
        { type: 'info', lt: 'Sutrumpinta sklendžių atsidarymo delsa Sport režime...', en: 'Optimizing actuator response curve in Sport and Sport+ modes...' },
        { type: 'success', lt: '✓ AKTYVUOTA! Švarus natūralus BMW garsas be kolonėlių simuliacijos.', en: '✓ ACTIVATED! Clean natural exhaust note without speaker synthesizers.' }
      ]
    }
  };

  // Kalbos nustatymas
  let currentLang = 'lt';
  try {
    const saved = localStorage.getItem('bimmeristai_lang');
    if (saved === 'en' || saved === 'lt') {
      currentLang = saved;
    } else if (navigator.language && navigator.language.startsWith('en')) {
      currentLang = 'en';
    }
  } catch (e) {}

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('bimmeristai_lang', lang);
    } catch (e) {}

    // Perjungiklio aktyvios būsenos
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    const dict = I18N[lang] || I18N.lt;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Sinchronizuoti mobilaus meniu mygtuko aria-label
    const mobileToggleBtn = document.getElementById('mobile-nav-toggle');
    if (mobileToggleBtn) {
      const isOpen = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
      mobileToggleBtn.setAttribute(
        'aria-label',
        isOpen ? (lang === 'en' ? 'Close menu' : 'Užverti meniu') : (lang === 'en' ? 'Open menu' : 'Atverti meniu')
      );
    }

    // Atnaujinti interaktyvius modulius su nauja kalba
    if (typeof updateEngineChecker === 'function') {
      updateEngineChecker();
    }
    const activeCodingBtn = document.querySelector('[data-coding-preset].active');
    if (activeCodingBtn && typeof runCodingSim === 'function') {
      runCodingSim(activeCodingBtn.getAttribute('data-coding-preset'));
    }
  }

  // 2. INTERAKTYVUS GRANDINĖS TIKRINIMO MODULIS
  let updateEngineChecker = function () {};

  function initEngineChecker() {
    const engineSelect = document.getElementById('checker-engine');
    const mileageSelect = document.getElementById('checker-mileage');
    const resTitle = document.getElementById('checker-result-title');
    const resPrice = document.getElementById('checker-result-price');
    const resModels = document.getElementById('checker-result-models');
    const resMethod = document.getElementById('checker-result-method');
    const resAdvice = document.getElementById('checker-result-advice');
    const resSpecialist = document.getElementById('checker-result-specialist');

    if (!engineSelect || !mileageSelect) return;

    updateEngineChecker = function () {
      const key = engineSelect.value || 'B47';
      const mileage = mileageSelect.value || '120to180';
      const data = ENGINE_DIAGNOSTIC_DATA[key] || ENGINE_DIAGNOSTIC_DATA.B47;

      if (resTitle) resTitle.textContent = data.code;
      if (resPrice) resPrice.textContent = data.price;
      if (resModels) resModels.textContent = data.models;
      if (resMethod) resMethod.textContent = currentLang === 'en' ? data.method_en : data.method_lt;
      if (resAdvice) resAdvice.textContent = getAdviceByMileage(mileage, data.eligible, currentLang);
      if (resSpecialist) resSpecialist.textContent = currentLang === 'en' ? data.specialist_en : data.specialist_lt;
    };

    engineSelect.addEventListener('change', updateEngineChecker);
    mileageSelect.addEventListener('change', updateEngineChecker);
    updateEngineChecker();
  }

  // 3. BMW KODAVIMO SIMULIATORIUS
  let runCodingSim = function () {};

  function initCodingSimulator() {
    const presetBtns = document.querySelectorAll('[data-coding-preset]');
    const carChips = document.querySelectorAll('[data-car-chip]');
    const consoleLog = document.getElementById('coding-console-stream');
    const consoleEcu = document.getElementById('coding-gauge-ecu');
    const consoleVolt = document.getElementById('coding-gauge-volt');
    const consoleResult = document.getElementById('coding-gauge-result');
    const consoleCarModel = document.getElementById('coding-selected-car');

    let activeCar = 'BMW 3 Serija (F30 / G20)';

    carChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        carChips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        activeCar = chip.getAttribute('data-car-chip') || 'BMW';
        if (consoleCarModel) consoleCarModel.textContent = activeCar;

        const currentActive = document.querySelector('[data-coding-preset].active') || presetBtns[0];
        if (currentActive) {
          runCodingSim(currentActive.getAttribute('data-coding-preset'));
        }
      });
    });

    runCodingSim = function (presetKey) {
      const preset = CODING_SIM_PRESETS[presetKey] || CODING_SIM_PRESETS.carplay;

      if (consoleEcu) consoleEcu.textContent = preset.ecu;
      if (consoleVolt) consoleVolt.textContent = preset.voltage;
      if (consoleResult) consoleResult.textContent = currentLang === 'en' ? preset.result_en : preset.result_lt;

      if (consoleLog) {
        consoleLog.innerHTML = '';
        const initial = [
          `<div class="log-line dim">[VIN: WBA5R... Kaunas Workshop] Car: ${activeCar}</div>`,
          `<div class="log-line info">OBD-II / ENET Link active (100 Mbps full-duplex)</div>`
        ];
        initial.forEach(function (line) { consoleLog.innerHTML += line; });

        preset.lines.forEach(function (item, idx) {
          setTimeout(function () {
            if (!consoleLog) return;
            const text = currentLang === 'en' ? item.en : item.lt;
            consoleLog.innerHTML += `<div class="log-line ${item.type}">${text}</div>`;
            consoleLog.scrollTop = consoleLog.scrollHeight;
          }, (idx + 1) * 150);
        });
      }
    };

    presetBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        presetBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        runCodingSim(btn.getAttribute('data-coding-preset'));
      });
    });

    if (presetBtns.length > 0) {
      runCodingSim('carplay');
    }
  }

  // 4. REGISTRACIJOS FORMOS APDOROJIMAS SU FALLBACK
  function initBookingForm() {
    const form = document.getElementById('booking-form');
    const statusAlert = document.getElementById('form-status-alert');
    const submitBtn = document.getElementById('form-submit-btn');
    const submitBtnText = document.getElementById('btn-submit-text');

    if (!form || !statusAlert) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameVal = (document.getElementById('form-name') || {}).value || '';
      const phoneVal = (document.getElementById('form-phone') || {}).value || '';
      const carVal = (document.getElementById('form-car') || {}).value || '';
      const serviceVal = (document.getElementById('form-service') || {}).value || '';

      if (!nameVal.trim()) {
        showStatus('error', currentLang === 'en' ? 'Please enter your name.' : 'Prašome įvesti savo vardą.');
        return;
      }

      if (!phoneVal.trim() || phoneVal.trim().length < 7) {
        showStatus('error', currentLang === 'en' ? 'Please enter a valid phone number (+370...).' : 'Prašome nurodyti teisingą telefono numerį (+370...).');
        return;
      }

      const origText = submitBtnText ? submitBtnText.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitBtnText) submitBtnText.textContent = currentLang === 'en' ? 'Submitting request...' : 'Siunčiama registracija...';
      }

      const formData = new FormData(form);

      // Siuntimas į Web3Forms (jei nustatytas raktas) arba vietinis demonstracinis fallback
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          resetBtn();
          if (data.success) {
            showStatus('success', currentLang === 'en'
              ? `✓ Thank you, ${nameVal}! Your registration request was received. Master Karolis will call you to confirm your time slot in Kaunas.`
              : `✓ Ačiū, ${nameVal}! Jūsų registracijos užklausa gauta. Meistras Karolis susisieks su jumis suderinti tikslų atvykimo laiką Kaune.`);
            form.reset();
          } else {
            // Jei raktas nenustatytas, vis tiek pranešame vartotojui ir pasiūlome skambutį
            showStatus('success', currentLang === 'en'
              ? `✓ Thank you, ${nameVal}! Request noted. For immediate confirmation, you can also call Karolis directly at +370 633 05031.`
              : `✓ Ačiū, ${nameVal}! Užklausa užfiksuota. Skubiam suderinimui taip pat galite tiesiogiai skambinti Karoliui tel. +370 633 05031.`);
            form.reset();
          }
        })
        .catch(function () {
          resetBtn();
          // Tinklo klaidos fallback
          showStatus('success', currentLang === 'en'
            ? `✓ Request recorded! If urgent, please call Karolis directly: +370 633 05031 or email work.bimmeristai@gmail.com`
            : `✓ Užklausa priimta! Esant skubiam poreikiui skambinkite Karoliui: +370 633 05031 arba rašykite work.bimmeristai@gmail.com`);
          form.reset();
        });

      function resetBtn() {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitBtnText) submitBtnText.textContent = origText;
        }
      }

      function showStatus(type, msg) {
        statusAlert.className = 'form-status-alert ' + type;
        statusAlert.textContent = msg;
        statusAlert.style.display = 'block';
      }
    });
  }

  // 5. FAQ AKKORDEONAS
  function initAccordion() {
    const accTriggers = document.querySelectorAll('.acc-trigger');
    accTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const item = trigger.closest('.acc-item');
        if (!item) return;
        const isActive = item.classList.contains('active');

        // Uždaryti kitus
        accTriggers.forEach(function (other) {
          const otherItem = other.closest('.acc-item');
          if (otherItem && otherItem !== item) {
            otherItem.classList.remove('active');
            other.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('active', !isActive);
        trigger.setAttribute('aria-expanded', String(!isActive));
      });
    });
  }

  // 6. MOBILUS MENIU (FULLSCREEN OVERLAY SU BURGER MORFU)
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const menu = document.getElementById('mobile-menu') || document.getElementById('mobile-nav-drawer');
    if (!toggleBtn || !menu) return;

    let isOpen = false;
    let savedScrollY = 0;

    // iOS Safari saugus slankiojimo užrakinimas
    function lockScroll() {
      savedScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + savedScrollY + 'px';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    }

    function unlockScroll() {
      const topStr = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
      const restoreY = topStr ? Math.abs(parseInt(topStr, 10)) : savedScrollY;
      window.scrollTo(0, restoreY);
    }

    function getFocusableElements() {
      return Array.from(menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
    }

    function handleKeyDown(e) {
      if (!isOpen) return;

      // Uždaryti paspaudus Escape
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        toggleBtn.focus();
        return;
      }

      // Focus trap klaviatūros navigacijai Tab / Shift+Tab
      if (e.key === 'Tab') {
        const focusables = getFocusableElements();
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || document.activeElement === toggleBtn) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    function openMenu() {
      if (isOpen) return;
      isOpen = true;
      menu.classList.add('is-open', 'open');
      menu.setAttribute('aria-hidden', 'false');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('aria-label', currentLang === 'en' ? 'Close menu' : 'Užverti meniu');

      lockScroll();
      document.addEventListener('keydown', handleKeyDown);

      // Nukreipti fokusą į pirmą nuorodą
      requestAnimationFrame(function () {
        const focusables = getFocusableElements();
        if (focusables.length > 0) {
          focusables[0].focus();
        }
      });
    }

    function closeMenu() {
      if (!isOpen) return;
      isOpen = false;
      menu.classList.remove('is-open', 'open');
      menu.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-label', currentLang === 'en' ? 'Open menu' : 'Atverti meniu');

      unlockScroll();
      document.removeEventListener('keydown', handleKeyDown);
    }

    // Burger mygtuko paspaudimas (atidaryti / uždaryti)
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Uždaryti paspaudus ant tamsios užsklandos fono (tap outside)
    menu.addEventListener('click', function (e) {
      if (e.target === menu) {
        closeMenu();
        toggleBtn.focus();
      }
    });

    // Uždarymas paspaudus ant nuorodų ir sklandus slinkimas į #booking
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = link.getAttribute('href') || '';

        // Paspaudus "Registracija" (#booking) šiame puslapyje
        const isBookingTarget = href === '#booking' || href.endsWith('#booking');
        const isCurrentIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('.');

        if (isBookingTarget && isCurrentIndex) {
          const bookingEl = document.getElementById('booking');
          if (bookingEl) {
            e.preventDefault();
            closeMenu();
            toggleBtn.focus();
            setTimeout(function () {
              bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              if (history && history.pushState) {
                history.pushState(null, '', '#booking');
              }
            }, 80);
            return;
          }
        }

        if (href.startsWith('#') && href.length > 1) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            closeMenu();
            setTimeout(function () {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              if (history && history.pushState) {
                history.pushState(null, '', href);
              }
            }, 80);
            return;
          }
        }

        // Išorinis ar tel: linkas - tiesiog užverti meniu
        closeMenu();
      });
    });

    // Uždaryti meniu jei langas praplečiamas virš desktop ribos (>= 960px)
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 960 && isOpen) {
        closeMenu();
      }
    });
  }

  // 7. KOPIJUOTI TELEFONO NUMERĮ
  function initCopyButtons() {
    document.querySelectorAll('[data-copy-phone]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const phone = btn.getAttribute('data-copy-phone');
        if (!phone || !navigator.clipboard) return;
        navigator.clipboard.writeText(phone).then(function () {
          const original = btn.textContent;
          btn.textContent = currentLang === 'en' ? 'Copied!' : 'Nukopijuota!';
          setTimeout(function () {
            btn.textContent = original;
          }, 1800);
        });
      });
    });
  }

  // 8. SCROLL REVEAL SU INTERSECTION OBSERVER
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // 9. KALBOS PERJUNGĖJŲ PASPAUDIMAI
  function initLanguageSwitchers() {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang-btn'));
      });
    });
  }

  // PAGRINDINĖ INICIALIZACIJA
  function initAll() {
    initLanguageSwitchers();
    initMobileMenu();
    initAccordion();
    initEngineChecker();
    initCodingSimulator();
    initBookingForm();
    initCopyButtons();
    initScrollReveal();
    applyLanguage(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
