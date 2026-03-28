import {
  Country, CountryData, ScreeningLevel,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField, SocietalField,
  ResearcherImmigrationClaim, ClinicianImmigrationClaim, ResearchTrainingClaim, ClinicianAgingTrainingClaim, ClinicianScientistClaim,
  ResearchFundingClaim, GeneEditingClaim,
  BreakthroughAgencyClaim, AdaptiveLicensingClaim, TrialDesignClaim, RegulatorySandboxClaim, AgingEndpointClaim,
  PopulationScreeningClaim, BiomarkerCollectionClaim, PreventiveTrialsClaim, GeroEndpointsClaim,
  OpenDataClaim, InteroperabilityClaim, ResearchClinicalClaim,
  RegulatoryHarmonizationClaim, SharedPhysicalInfraClaim, IntlResearchNetworkClaim,
  SocietalReadinessClaim,
} from '../schema'

const japan: CountryData = {
  country: Country.JAPAN,

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'Japan offers the Highly Skilled Professional (HSP) visa with a points-based system and the J-Skip visa (2023) for top global talents — no employer sponsor required for the latter. Researcher visas exist and are straightforward for institution-sponsored applicants. However, real-world uptake of foreign researchers remains low due to language barriers (Japanese required for most administrative processes), cultural insularity at many institutions, and slower improvement than government targets suggest.',
        links: [{ label: 'METI Highly Skilled Professional Visa', url: 'https://www.meti.go.jp/english/policy/mono_info_service/it_policy/documents/hsp.pdf', comment: 'HSP visa points system — researchers score highly; 5-year residence from day one' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 3,
        text: 'COE (Certificate of Eligibility) processing: 1–3 months. J-Skip visa: 10 days from COE issue. Institution-sponsored research visas are processed at standard MOFA timelines — competitive but not exceptional. The administrative burden (Japanese-language forms, in-person requirements for some processes) adds de facto friction beyond the formal processing time.',
        links: [{ label: 'MOFA Visa for Researchers', url: 'https://www.mofa.go.jp/j_info/visit/visa/index.html', comment: 'MOFA — researcher visa processing; COE required from hosting institution' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 3,
        text: 'MEXT and leading universities (Tokyo, Kyoto, Osaka) accept major international doctoral degrees without re-qualification. However, Japanese institutions often require Japanese language proficiency for full career integration, limiting the practical utility of credential recognition. NISTEP data shows foreign researcher share at national universities is ~5% — among the lowest for an OECD country of this scientific stature.',
        links: [{ label: 'MEXT International Researcher Policy', url: 'https://www.mext.go.jp/en/policy/science_technology/policy/title02/detail02/sdetail02/1373839.htm', comment: 'MEXT — credential recognition policy; practical barriers remain due to language requirements' }],
      },
    },
    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.MEDICAL_LICENCE_PORTABILITY]: {
        score: 1,
        text: 'Japan has among the most restrictive medical licensing in the OECD for foreign-trained physicians. International medical graduates must pass the Japanese National Medical Licensing Examination — conducted entirely in Japanese. There is no fast-track for specialty recognition, no bilateral recognition agreements, and no exemption for holders of US USMLE or UK GMC licenses. In practice, almost no foreign-trained physicians practise clinically in Japan.',
        links: [{ label: 'Japan Medical Licensing – MHLW', url: 'https://www.mhlw.go.jp/english/policy/health-medical/health/index.html', comment: 'MHLW — medical licensing; Japanese exam required for all foreign graduates; no bilateral recognition' }],
      },
      [ClinicianImmigrationClaim.FAST_TRACK_SPECIALIST]: {
        score: 1,
        text: 'No fast-track pathway for international specialist physicians exists in Japan. The medical licensing bottleneck blocks virtually all foreign geriatricians from practising. This is widely recognised as a policy gap but has not been substantively reformed. Academic research roles (non-clinical) can be filled by foreign scientists, but clinical practice requires Japanese licensure regardless of prior credentials.',
        links: [{ label: 'Japan Specialist Board System', url: 'https://jmsb.or.jp/en/', comment: 'Japan Medical Specialty Board — specialist accreditation requires Japanese medical licence as prerequisite' }],
      },
    },
    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.PHD_THROUGHPUT]: {
        score: 4,
        text: 'Japan produces ~15,000 doctoral graduates per year across all disciplines — the third largest in the OECD. In life sciences and biomedical fields, PhD output is substantial. The declining trend in PhD enrolment (down 20% since 2003) is a recognised concern. MEXT and JSPS have multiple fellowship programmes to support doctoral training, including the SPRING (Support for Pioneering Research Initiated by the Next Generation) programme.',
        links: [{ label: 'MEXT PhD Statistics', url: 'https://www.mext.go.jp/b_menu/shingi/chukyo/chukyo0/toushin/attach/1337243.htm', comment: 'MEXT — doctoral graduation statistics; declining enrolment trend; SPRING programme for young researchers' }],
      },
      [ResearchTrainingClaim.POSTDOC_CONDITIONS]: {
        score: 2,
        text: 'Japanese postdoctoral salaries average JPY 3–4M (approximately USD 20–27k at 2024 rates) — substantially below US, UK, or Singapore equivalents. Fixed-term contracts with limited renewal are the norm; permanent research positions are scarce and seniority-dependent. JSPS Research Fellowships provide competitive stipends but cover only a fraction of postdocs. Japan\'s "postdoc problem" (高学歴ワーキングプア) is well-documented and drives emigration of talented young researchers.',
        links: [{ label: 'JSPS Research Fellowships', url: 'https://www.jsps.go.jp/english/e-fellow/', comment: 'JSPS fellowships — competitive; covers only minority of postdocs; majority face poor conditions' }],
      },
      [ResearchTrainingClaim.AGING_SPECIFIC_TRAINING]: {
        score: 4,
        text: 'Japan is arguably the world\'s most experienced country in aging biology training by necessity — it has been a super-aged society since 2005. The Tokyo Metropolitan Institute of Gerontology (TMIG), RIKEN Center for Biosystems Dynamics Research (aging focus), Nagoya University Institute for Advanced Research, and multiple medical schools have dedicated aging research training. MEXT\'s "Science of Aging" grant programme funds aging-specific PhD training at several universities.',
        links: [{ label: 'Tokyo Metropolitan Institute of Gerontology', url: 'https://www.tmghig.jp/en/', comment: 'TMIG — Japan\'s oldest and most established aging research institute; dedicated training pipeline' }],
      },
    },
    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_CURRICULUM]: {
        score: 5,
        text: 'Japan has the world\'s most developed geriatric medicine training system by any measure: ~7,000 board-certified geriatricians (Japanese Society of Geriatrics), mandatory geriatrics rotations in all medical schools, and a 3-year specialist training programme. Every medical student in Japan receives substantial geriatrics training — the demographic necessity has made this unavoidable. Japan leads the world in per-capita geriatrician density.',
        links: [{ label: 'Japanese Society of Geriatrics', url: 'https://www.jpn-geriat-soc.or.jp/english/', comment: 'JSG — 7,000+ board-certified geriatricians; mandatory rotation in medical curriculum; 3-year specialist programme' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_SCIENCE_IN_CME]: {
        score: 3,
        text: 'Japanese Society of Geriatrics and Japanese Gerontological Society run extensive CME programmes on aging biology and frailty. Senescence biology, sarcopenia management, and polypharmacy in older adults are standard CME topics. Biological age and longevity biomarkers are beginning to appear in specialist CME but are not yet mainstream in GP-level continuing education. The depth of geriatric CME is world-class; longevity science specifically is an emerging addition.',
        links: [{ label: 'Japanese Gerontological Society CME', url: 'https://www.jageront.org/', comment: 'JGS — annual congress and CME covering senescence biology, sarcopenia, frailty; longevity biomarkers emerging' }],
      },
    },
    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 3,
        text: 'MEXT\'s Tenure Track Programme and JSPS research fellowships provide protected research time for clinician-scientists at national universities. However, the dual-track system (clinician vs. researcher) is institutionally entrenched in Japan. Full clinical duties are often incompatible with research time commitments. The AMED (Japan Agency for Medical Research and Development) clinician-scientist support programme is improving the situation, but protected time allocation remains below UK or Singapore standards.',
        links: [{ label: 'AMED Clinician-Scientist Support', url: 'https://www.amed.go.jp/en/', comment: 'AMED — Japan\'s medical research agency; funding mechanism for clinician-scientists; improving but below global best' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.PUBLIC_FUNDING_INTENSITY]: {
        score: 4,
        text: 'Japan spends ~0.7% of GDP on public R&D (government GERD), with total R&D at ~3.3% of GDP — among the highest in the OECD. MEXT, JSPS, and AMED collectively provide over JPY 1 trillion in biomedical and basic science funding annually. The absolute scale is large; however, funding concentration in large established institutions and limited flexibility for high-risk proposals are persistent critiques.',
        links: [{ label: 'MEXT Science and Technology Budget', url: 'https://www.mext.go.jp/en/policy/science_technology/whitepaper/1417027.htm', comment: 'MEXT — annual S&T whitepaper; public research funding statistics; JPY 1T+ biomedical allocation' }],
      },
      [ResearchFundingClaim.AGING_SPECIFIC_PROGRAMMES]: {
        score: 5,
        text: 'Japan has more dedicated public aging research programmes than any other country: AMED\'s Research on Geriatric Diseases, MEXT\'s Science of Aging initiative, RIKEN\'s aging biology programme, NIBIOHN (National Institute of Biomedical Innovation, Health and Nutrition) longevity studies, and TMIG\'s integrated aging research. The Moonshot Research and Development Programme (Moonshot Goal 7: disease-free life to 100 years) allocates JPY 50B over 10 years explicitly to healthy longevity.',
        links: [
          { label: 'AMED Geriatric Disease Research', url: 'https://www.amed.go.jp/en/program/list/04/01/001.html', comment: 'AMED — dedicated geriatric disease research programme; major funder of Japan aging biology' },
          { label: 'Moonshot Goal 7 – Healthy Longevity', url: 'https://www.jst.go.jp/moonshot/en/research/goal7/', comment: 'JST Moonshot Goal 7 — JPY 50B for disease-free life to 100; most explicit longevity funding mandate globally' },
        ],
      },
      [ResearchFundingClaim.PRIVATE_LONGEVITY_INVESTMENT]: {
        score: 3,
        text: 'Japan\'s longevity biotech industry includes: Samumed (US, JP-partnered), HEALIOS, Healink, and several stealth-stage companies focused on senolytics and regenerative medicine. SoftBank Vision Fund has made longevity-adjacent investments. Venture investment in longevity biotech is growing but Japan\'s VC ecosystem remains conservative relative to the US or Israel. Corporate R&D in aging (Kirin, Suntory, Kao) is significant in supplements and functional foods but not in therapeutics.',
        links: [{ label: 'Japan Regenerative Medicine Industry', url: 'https://www.jhsf.or.jp/en/', comment: 'Japan Healthcare and Science Foundation — regenerative medicine industry; longevity-adjacent biotech sector' }],
      },
    },
    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.RESEARCH_PERMISSIVENESS]: {
        score: 3,
        text: 'Japan\'s gene editing guidelines (MHLW/MEXT, 2019 revised) permit somatic cell gene therapy research and gene editing of human embryos for research only, with strict ethical review. CRISPR-based aging research at the somatic level is permitted without specific restrictions. Japan was notably the first country to approve a CRISPR therapy for a non-oncology indication (heart disease, 2023). The framework is science-enabling but not as permissive as Singapore or the UK.',
        links: [{ label: 'MHLW Gene Therapy Guidelines', url: 'https://www.mhlw.go.jp/english/policy/health-medical/health/index.html', comment: 'MHLW — gene editing and gene therapy regulatory framework; somatic applications well-governed' }],
      },
      [GeneEditingClaim.CLINICAL_TRANSLATION_PATHWAY]: {
        score: 3,
        text: 'PMDA (Pharmaceuticals and Medical Devices Agency) has a dedicated regenerative medicine regulation track under the Act on the Safety of Regenerative Medicine and the Act on Pharmaceuticals and Medical Devices. SAKIGAKE (breakthrough designation) is available for innovative gene therapies. Japan approved CAR-T and gene therapy products and has shown regulatory innovation in this space — though the overall pipeline remains slower than the US.',
        links: [{ label: 'PMDA SAKIGAKE Programme', url: 'https://www.pmda.go.jp/english/review-services/expedited-procedures/0001.html', comment: 'PMDA SAKIGAKE — Japanese breakthrough designation; gene therapy fast-track; aging applications eligible' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.DEDICATED_BODY]: {
        score: 4,
        text: 'AMED (Japan Agency for Medical Research and Development) was established in 2015 as Japan\'s NIH/DARPA hybrid — with authority to fund, coordinate, and accelerate medical research translation. The Moonshot R&D Programme functions as a genuine high-risk/high-reward funding mechanism. JST (Japan Science and Technology Agency) has a CREST/PRESTO programme for bold basic science. These represent real institutional infrastructure for translational breakthroughs, though coordination between AMED, MEXT, and MHLW remains complex.',
        links: [{ label: 'AMED Overview', url: 'https://www.amed.go.jp/en/', comment: 'AMED — Japan\'s central medical research agency; translation from basic to clinical; established 2015' }],
      },
      [BreakthroughAgencyClaim.FUNDING_SCALE]: {
        score: 4,
        text: 'AMED budget: approximately JPY 130B per year (USD ~900M). Moonshot Goal 7 (healthy longevity): JPY 50B over 10 years. Total biomedical R&D funding including MEXT and JSPS: JPY 1T+ per year. In absolute terms, Japan\'s public biomedical research funding scale is among the largest in the world — comparable to the UK MRC+NIHR combined budget.',
        links: [{ label: 'AMED Annual Budget', url: 'https://www.amed.go.jp/en/aboutus/organization/budget.html', comment: 'AMED — JPY 130B annual budget; largest single medical research funder in Japan' }],
      },
      [BreakthroughAgencyClaim.RISK_TOLERANCE]: {
        score: 3,
        text: 'Moonshot Programme explicitly funds "ambitious, challenging targets that drastically change our society" — the highest institutional risk appetite in Japan\'s funding landscape. However, traditional MEXT/JSPS/AMED grant mechanisms are conservative and incremental. The Moonshot model represents a significant improvement, but most Japanese public science funding remains risk-averse compared to NIH\'s Pioneer Awards or ARPA-H.',
        links: [{ label: 'JST Moonshot Programme', url: 'https://www.jst.go.jp/moonshot/en/', comment: 'Moonshot — Japan\'s most risk-tolerant public research programme; Goal 7 for longevity' }],
      },
    },
    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'SAKIGAKE designation (2015) provides Japan with a breakthrough therapy-equivalent pathway: priority review, early PMDA consultation, and conditional approval with post-market surveillance. Japan has approved CAR-T therapies, gene therapies, and regenerative medicine products under this mechanism faster than FDA or EMA in several instances. For aging-related biologics, SAKIGAKE is explicitly accessible.',
        links: [{ label: 'PMDA SAKIGAKE Designation', url: 'https://www.pmda.go.jp/english/review-services/expedited-procedures/0001.html', comment: 'SAKIGAKE — Japanese breakthrough pathway; conditional approval with post-market data collection' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 3,
        text: 'PMDA accepts rolling submissions for SAKIGAKE-designated products. Under the standard review pathway, rolling submission is available for innovative products approved abroad by FDA or EMA first. Japan\'s "conditional-and-time-limited" approval mechanism for regenerative medicine is a genuine innovation in adaptive licensing, though complex to navigate.',
        links: [{ label: 'PMDA Rolling Submission', url: 'https://www.pmda.go.jp/english/review-services/expedited-procedures/0002.html', comment: 'PMDA — rolling submission available for SAKIGAKE and overseas-approved innovative products' }],
      },
      [AdaptiveLicensingClaim.REGISTRY_LINKAGE]: {
        score: 3,
        text: 'Japan has the National Database of Health Insurance Claims and Specific Health Checkups (NDB) — a comprehensive claims database linkable for post-market surveillance. PMDA uses NDB data for pharmacovigilance. For conditional approvals, post-market registry linkage is feasible but not yet automated. The infrastructure exists; the process is still primarily manual.',
        links: [{ label: 'Japan NDB Health Insurance Database', url: 'https://www.mhlw.go.jp/english/database/db-insurance/dl/national_database.pdf', comment: 'NDB — national claims database; PMDA-accessible for post-market surveillance of approved products' }],
      },
    },
    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.PLATFORM_TRIALS]: {
        score: 3,
        text: 'AMED has funded platform trial infrastructure in oncology (MASTER KEY Project) and COVID-19. No active aging platform trial in Japan. The capability exists; the Moonshot Goal 7 programme may catalyse an aging platform trial infrastructure. Japanese trial methodology has historically been conservative — single-arm, Japan-only designs — but this is improving.',
        links: [{ label: 'AMED MASTER KEY Platform Trial', url: 'https://www.amed.go.jp/en/', comment: 'AMED — MASTER KEY precision oncology platform trial; proof of concept for Japanese platform trial design' }],
      },
      [TrialDesignClaim.REGISTER_BASED_TRIALS]: {
        score: 3,
        text: 'Japan\'s NDB (National Database) contains ~1 billion claims records and is increasingly used for registry-based evidence generation. J-MIHARI project demonstrates prospective registry use for drug evaluation. Full register-based RCT methodology (Scandinavian model) has not been implemented for aging trials but the infrastructure would permit it.',
        links: [{ label: 'J-MIHARI Registry Evidence', url: 'https://www.pmda.go.jp/english/about-pmda/0014.html', comment: 'PMDA J-MIHARI — registry-based drug evaluation using NDB claims data' }],
      },
      [TrialDesignClaim.BAYESIAN_ADAPTIVE]: {
        score: 2,
        text: 'PMDA guidelines are primarily frequentist. Bayesian adaptive designs are accepted in specific oncology and paediatric contexts but are not the norm. Japan\'s regulatory conservatism means adaptive designs require extensive pre-discussion with PMDA and face higher evidence standards. The academic biostatistics capability exists (University of Tokyo, Keio), but regulatory acceptance lags significantly behind FDA and EMA.',
        links: [{ label: 'PMDA Statistical Guidelines', url: 'https://www.pmda.go.jp/english/review-services/expedited-procedures/0001.html', comment: 'PMDA — statistical guidance; Bayesian accepted in limited contexts; mostly frequentist standard' }],
      },
    },
    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTS]: {
        score: 3,
        text: 'Japan\'s Regulatory Sandbox System (2019, Ministry of Economy, Trade and Industry) enables testing of new business models and technologies without full compliance. The "Conditional-Time-Limited" approval for regenerative medicine products functions as a therapeutic sandbox — products can be approved with limited evidence and used under controlled conditions while more data is gathered.',
        links: [{ label: 'Japan Regulatory Sandbox', url: 'https://www.meti.go.jp/english/policy/economy/regulatory_sandbox.html', comment: 'METI regulatory sandbox system — technology and business model testing; Conditional-Time-Limited approval for regenerative medicine' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_SPECIFIC]: {
        score: 2,
        text: 'No longevity-specific regulatory sandbox. The Moonshot Goal 7 programme and AMED\'s Geriatric Disease Research create institutional context, but PMDA has not established a named longevity innovation pathway. The closest equivalent is the regenerative medicine conditional approval track, which some longevity biologics could qualify for.',
        links: [{ label: 'Moonshot Goal 7 Programme', url: 'https://www.jst.go.jp/moonshot/en/research/goal7/', comment: 'Moonshot Goal 7 — JPY 50B for healthy longevity; creates demand but not a PMDA regulatory sandbox' }],
      },
    },
    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.BIOMARKER_QUALIFICATION]: {
        score: 3,
        text: 'PMDA has not formally qualified aging biomarkers as regulatory endpoints. However, Japan has world-class cohort data for endpoint validation: JAGES (Japan Gerontological Evaluation Study, 350k+ participants), JSTAR (Japanese Study of Aging and Retirement), and Hisayama study (60+ years of longitudinal data). Functional endpoints (grip strength, gait speed per Japanese Society of Geriatrics sarcopenia criteria) are accepted. Epigenetic clock research is active at RIKEN and Kyoto University.',
        links: [{ label: 'JAGES – Japan Gerontological Evaluation Study', url: 'https://jages.net/', comment: 'JAGES — 350k+ participants; world\'s largest aging social determinants cohort; used for endpoint validation' }],
      },
      [AgingEndpointClaim.COMPOSITE_ENDPOINTS]: {
        score: 4,
        text: 'Japan has developed its own sarcopenia diagnostic criteria (AWGS — Asian Working Group for Sarcopenia) that differ from Western standards in cut-points. PMDA accepts AWGS-derived composite endpoints for sarcopenia indications. The Hisayama and Circulatory Risk in Communities Study provide 40–60-year longitudinal data validating composite aging endpoints in Japanese populations. Japan\'s endpoint science for Asian populations is the most developed globally.',
        links: [{ label: 'AWGS Sarcopenia Criteria', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8640867/', comment: 'AWGS — Asian sarcopenia criteria; lower muscle mass thresholds than Western EWGSOP; PMDA-accepted' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CANCER_SCREENING_COVERAGE]: {
        score: ScreeningLevel.NATIONAL_PROGRAMME,
        text: 'Japan has a comprehensive national cancer screening programme under the Cancer Control Act: gastric, colorectal, lung, breast, and cervical cancer with municipality-level delivery and national subsidies. Uptake rates are 40–50% — below Scandinavian levels but improving. The gastric cancer programme is unique globally in scale.',
        links: [{ label: 'Japan Cancer Screening Programme', url: 'https://www.mhlw.go.jp/english/wp/wp-hw10/dl/P0002.pdf', comment: 'MHLW — national cancer screening; gastric, colorectal, lung, breast, cervical; municipality delivery' }],
      },
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK_SCREENING]: {
        score: ScreeningLevel.NATIONAL_PROGRAMME,
        text: 'The Specific Health Checkup and Specific Health Guidance programme (Tokutei Kenshin, 2008) mandates metabolic syndrome screening for all insured adults aged 40–74. Employers and health insurers are legally required to offer this screening. ~30M adults screened annually. Japan\'s metabolic syndrome screening programme is one of the largest mandatory employer-based programmes globally.',
        links: [{ label: 'Tokutei Kenshin – Specific Health Checkup', url: 'https://www.mhlw.go.jp/english/database/db-hss/dl/shu_01e.pdf', comment: 'MHLW — mandatory health checkup for 40–74 year-olds; 30M+ screened annually; metabolic syndrome focus' }],
      },
      [PopulationScreeningClaim.METABOLIC_SCREENING]: {
        score: ScreeningLevel.NATIONAL_PROGRAMME,
        text: 'The Tokutei Kenshin programme is explicitly a metabolic syndrome screening system — the most systematic employer-mandated metabolic health check in the OECD. Covers waist circumference, blood pressure, blood glucose, HbA1c, and lipids. Results feed into National Database (NDB) with 1B+ claims records for population monitoring.',
        links: [{ label: 'Tokutei Kenshin Metabolic Screening', url: 'https://www.mhlw.go.jp/english/database/db-hss/dl/shu_01e.pdf', comment: 'MHLW — most comprehensive national metabolic syndrome screening programme in OECD' }],
      },
      [PopulationScreeningClaim.COGNITIVE_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Dementia screening is integrated into municipal elderly health programmes and the Tokutei Kenshin (cognitive questions added for 70+). The "Ninchisho (dementia) initiatives" include GP-level screening with MMSE and HDS-R. Not universal — coverage varies by municipality. Japan has the world\'s largest dementia prevalence by proportion and significant infrastructure, though universal national screening is not mandated.',
        links: [{ label: 'Japan Dementia Measures Promotion Plan', url: 'https://www.mhlw.go.jp/english/policy/care-welfare/care-welfare-elderly/dl/dementia_e.pdf', comment: 'MHLW — national dementia plan; cognitive screening in health checkups and municipal programmes' }],
      },
      [PopulationScreeningClaim.BONE_DENSITY_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'DXA bone density screening is available in the Tokutei Kenshin system as an optional component in some municipalities, and is standard in post-menopausal women\'s check programmes. The Japanese Society for Bone and Mineral Research guidelines are widely implemented in gynaecological and geriatric settings. Coverage is good but not universal.',
        links: [{ label: 'Japanese Society for Bone and Mineral Research', url: 'https://jsbmr.umin.jp/index.html', comment: 'JSBMR — osteoporosis screening guidelines widely implemented; DXA in Tokutei Kenshin optional module' }],
      },
      [PopulationScreeningClaim.VISION_HEARING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Japan\'s school-based screening is excellent (annual hearing and vision checks). Adult hearing screening is not nationally mandated but is offered by many municipalities as part of elderly health programmes. The JHEAR (Japan Hearing Aid Research) initiative is expanding screening awareness. Presbycusis is screened in some geriatric health programmes.',
        links: [{ label: 'Japan Hearing Health Initiatives', url: 'https://www.mhlw.go.jp/', comment: 'MHLW — elderly health programmes include hearing assessment; not yet universal for adults' }],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Japan is a global leader in sarcopenia screening: the Frailty and Sarcopenia Programme (Koki/Koureisha Frailty Screening) is integrated into municipal elderly health programmes. JSG has defined Japanese-specific sarcopenia criteria (lower thresholds). AWGS criteria are used clinically. The Tokutei Kenshin includes grip strength measurement in some municipalities. Coverage is significant but not yet universal.',
        links: [{ label: 'Japan Society of Geriatrics Sarcopenia', url: 'https://www.jpn-geriat-soc.or.jp/english/', comment: 'JSG — frailty and sarcopenia screening guidelines; AWGS criteria for Asian populations; municipal implementation' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.NO_PROGRAMME,
        text: 'No national sleep apnea screening programme despite Japan\'s high OSA prevalence (~23% of adults). Occupational health guidelines for commercial drivers include OSA screening (MHLW guidance), but there is no general population programme. The sleeping disorders landscape is primarily managed via hospital referrals. Japan\'s culture around sleep deprivation (karoshi context) creates complex social dynamics around sleep health identification.',
        links: [{ label: 'MHLW Sleep Disorder Guidelines', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — occupational OSA screening for high-risk workers; no general population programme' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'Japan\'s screening programme changes require MHLW committee review, Cancer Control Act amendments (for cancer), and municipal government buy-in — a multi-year process typically requiring 4–6 years from evidence to implementation. The federated municipal delivery system creates additional inertia. Japan has world-class evidence generation capacity but slow administrative adoption of new screening protocols.',
        links: [{ label: 'MHLW Cancer Screening Committee', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW cancer screening committee — review cycle; municipal implementation adds further delay; 4–6 year typical timeline' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.LONGITUDINAL_COHORT]: {
        score: 5,
        text: 'Japan has the world\'s longest-running aging cohorts: Hisayama Study (1961, 7,000+ participants, 60+ years continuous), JAGES (Japan Gerontological Evaluation Study, 350,000+), JSTAR (Japanese Study of Aging and Retirement), and multiple prefectural centenarian studies. The Okinawa Centenarian Study (1975–) is the oldest continuous centenarian research programme globally. No other country comes close to Japan\'s depth of longitudinal aging data.',
        links: [
          { label: 'Hisayama Study', url: 'https://www.hisayama.med.kyushu-u.ac.jp/english/', comment: 'Hisayama — 60+ years of continuous aging cohort; world\'s longest cardiovascular and dementia aging study' },
          { label: 'JAGES', url: 'https://jages.net/', comment: 'JAGES — 350,000+ participants across 40+ municipalities; largest aging social determinants cohort' },
        ],
      },
      [BiomarkerCollectionClaim.BIOBANK_DEPTH]: {
        score: 4,
        text: 'Tohoku Medical Megabank (ToMMo, 150,000 participants, whole-genome sequencing) is Japan\'s largest population biobank with aging-specific modules. BBJ (BioBank Japan, 200,000+ participants, 51 diseases) provides disease-aging linkage. NCGM (National Center for Global Health and Medicine) biobank links to NDB claims data. Japan\'s biobank infrastructure is among the world\'s largest in absolute terms.',
        links: [{ label: 'Tohoku Medical Megabank', url: 'https://www.megabank.tohoku.ac.jp/english/', comment: 'ToMMo — 150,000 participants, whole-genome sequencing, aging biomarker modules' }],
      },
      [BiomarkerCollectionClaim.OMICS_DEPTH]: {
        score: 4,
        text: 'RIKEN Center for Integrative Medical Sciences (IMS) conducts comprehensive multi-omics aging research — immune aging, methylation, proteomics. RIKEN has published extensively on Japanese-specific epigenetic aging clocks. Kyoto University, Keio, and University of Tokyo have active multi-omics aging programmes. Japan\'s omics aging research output is second only to the US in absolute volume.',
        links: [{ label: 'RIKEN IMS Aging Research', url: 'https://www.ims.riken.jp/english/', comment: 'RIKEN IMS — multi-omics aging; immunosenescence; Japanese epigenetic clock validation' }],
      },
      [BiomarkerCollectionClaim.EHR_LINKAGE]: {
        score: 3,
        text: 'Japan\'s NDB (1B+ claims, 60M+ patients) is linkable to some biobank samples and research datasets, but full individual-level EHR linkage for research is complex due to privacy law (Act on the Protection of Personal Information) and fragmented EHR systems across hospitals. The Next Generation Medical Infrastructure Law (2018) improved research data governance, but practical EHR-biobank linkage still requires multi-step IRB and ministry approval.',
        links: [{ label: 'Japan Next Generation Medical Infrastructure Law', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — 2018 law enabling anonymised medical data utilisation; EHR-biobank linkage framework' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 3,
        text: 'Japan has the capacity for large-scale trials given its population of 125M and established AMED trial network. However, Japanese trial initiation is slow: average 6–12 months from approval to first patient due to multi-site IRB approvals, PMDA consultations, and Japanese-language protocol requirements. International sponsors often exclude Japan from global trials for these reasons. Japan-only trial designs are less efficient than international sites in global context.',
        links: [{ label: 'AMED Clinical Trial Network', url: 'https://www.amed.go.jp/en/program/list/04/01/002.html', comment: 'AMED — clinical trial infrastructure; 6–12 month initiation times; PMDA consultation required' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'PMDA has published RWE guidelines (2020) accepting NDB-based evidence for post-market and some label extension uses. Japan participated in the ICH E18 genomics guideline and is implementing RWD frameworks. For preventive aging trials, RWE is accepted as supportive evidence but primary clinical endpoints remain mandatory. The J-MIHARI project is building PMDA\'s RWE capacity.',
        links: [{ label: 'PMDA Real World Data Guidelines', url: 'https://www.pmda.go.jp/english/review-services/expedited-procedures/0001.html', comment: 'PMDA — RWE guidelines 2020; NDB-based evidence accepted for post-market surveillance' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'AWGS-defined sarcopenia endpoints (grip strength, gait speed, muscle mass by DXA/BIA) are used in Japanese aging trials and accepted by PMDA for sarcopenia indications. Frailty indices (J-CHS criteria) are used. Biological aging biomarkers (epigenetic clocks, telomere length) appear as secondary exploratory endpoints in academic trials. PMDA accepts physical function composites but not biological age surrogates as primary endpoints.',
        links: [{ label: 'AWGS Sarcopenia Endpoint Criteria', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8640867/', comment: 'AWGS 2019 — Japanese sarcopenia endpoints; PMDA-accepted for regulatory trials' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 4,
        text: 'Japan is the global leader in registered aging intervention trials by volume. Metformin aging trials, NMN/NR supplement trials (Keio University), rapamycin pilot studies, senolytic trials, fisetin trials, and multiple traditional medicine (Kampo) aging trials are registered. The Moonshot Goal 7 programme specifically funds Phase II aging prevention trials. Japan has more active aging intervention trials per capita than any other country.',
        links: [{ label: 'Japan NMN Aging Trials – Keio', url: 'https://www.keio.ac.jp/en/research/', comment: 'Keio University — NMN metabolism and aging trials; among most cited NMN human trial programmes' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 4,
        text: 'AMED\'s clinical research network (Japan Clinical Research Network, JCRN) coordinates multi-site aging trials. The Moonshot Goal 7 programme funds a dedicated coordination office. JGA (Japan Geriatrics Society) and JAGS coordinate aging trial methodology. National university hospitals (Tokyo, Kyoto, Osaka, Tohoku) form a de facto coordinated aging trial network. Japan\'s national coordination is mature, though slow.',
        links: [{ label: 'AMED Japan Clinical Research Network', url: 'https://www.amed.go.jp/en/', comment: 'AMED JCRN — national clinical trial coordination; aging trials specifically funded under Moonshot Goal 7' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 2,
        text: 'UMIN-CTR (University Hospital Medical Information Network Clinical Trials Registry) is the national registry with ~20,000 registered trials. Patient-facing search is available in Japanese only. No national EHR-based patient-trial matching exists. Recruitment relies on physician referral and hospital-based notice boards. Japan\'s language barrier substantially limits trial accessibility for non-Japanese speakers and constrains proactive recruitment outreach.',
        links: [{ label: 'UMIN Clinical Trials Registry', url: 'https://www.umin.ac.jp/ctr/index-j.htm', comment: 'UMIN-CTR — national trial registry; ~20,000 trials registered; patient search in Japanese only' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 3,
        text: 'PMDA does not recognise aging as a therapeutic indication. However, sarcopenia, frailty, and age-related cognitive decline are accepted indication categories with approved products (frailty: some unapproved agents have received compassionate use; sarcopenia: no approved drug yet but active regulatory dialogue). MHLW\'s Moonshot Goal 7 creates political momentum for aging indication recognition. Japan is closer to formal recognition than most countries, given the Moonshot framework.',
        links: [{ label: 'PMDA Geriatric Indications', url: 'https://www.pmda.go.jp/english/review-services/reviews/0006.html', comment: 'PMDA — geriatric medicine drug review; sarcopenia and frailty under discussion; systemic aging not yet an indication' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 4,
        text: 'PMDA accepts AWGS sarcopenia endpoints, J-CHS frailty index, Barthel ADL, and MMSE/MoCA as primary endpoints for geriatric indications. For the Alzheimer\'s pipeline (lecanemab approved 2023 in Japan), PMDA showed willingness to accept amyloid PET as a surrogate endpoint — a significant precedent for biomarker surrogate acceptance. Japan\'s endpoint regulatory science is more advanced than most Asian jurisdictions.',
        links: [{ label: 'PMDA Lecanemab Approval', url: 'https://www.pmda.go.jp/english/review-services/reviews/0006.html', comment: 'PMDA — lecanemab approved 2023; amyloid PET accepted as surrogate endpoint; significant biomarker precedent' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.NATIONAL_HEALTH_DATA_PLATFORM]: {
        score: 3,
        text: 'The National Database of Health Insurance Claims and Specific Health Checkups (NDB) is the world\'s largest single health claims database (~1B claims, 60M+ individuals). Research access is via MHLW application — approved researchers can analyse aggregated or pseudonymised data. The Next Generation Medical Infrastructure Law (2018) enabled anonymised EHR data utilisation for research. Full individual-level linkage for external researchers is restricted and slow.',
        links: [{ label: 'Japan NDB National Database', url: 'https://www.mhlw.go.jp/english/database/db-insurance/index.html', comment: 'NDB — 1B+ claims, 60M+ individuals; research access via MHLW application; world\'s largest health claims database' }],
      },
      [OpenDataClaim.RESEARCH_ACCESS_SPEED]: {
        score: 2,
        text: 'NDB research access approval takes 6–12 months. Individual hospital EHR research access adds further institutional IRB review time. Japan\'s data governance is thorough but slow — driven by strict personal information protection law and extensive committee review processes. The practical research access speed is among the slowest of advanced economies with comparable data infrastructure.',
        links: [{ label: 'NDB Access Application Process', url: 'https://www.mhlw.go.jp/english/database/db-insurance/index.html', comment: 'NDB — 6–12 month approval process; strict MHLW and ethics committee review requirements' }],
      },
      [OpenDataClaim.DATA_LINKAGE_CAPABILITY]: {
        score: 3,
        text: 'NDB linkage with biobank data (BBJ, ToMMo) is possible under specific research protocols using anonymised linking keys. Death registry linkage is available for epidemiological research. The Next Generation Medical Infrastructure Law improved legal basis for linkage. In practice, multi-step ministry approvals and fragmented EHR systems across 8,000+ hospitals limit seamless large-scale linkage.',
        links: [{ label: 'Japan Medical Information Utilisation Law', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — Next Generation Medical Infrastructure Law; improved data linkage legal framework for research' }],
      },
    },
    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.HL7_FHIR_ADOPTION]: {
        score: 3,
        text: 'MHLW has designated HL7 FHIR as Japan\'s national healthcare interoperability standard and set implementation targets for hospitals. FHIR adoption in practice is early-stage — Japan\'s hospital IT systems are highly fragmented (8,000+ hospitals, many with legacy proprietary systems). The Digital Agency\'s Health DX (Digital Transformation) plan prioritises FHIR rollout by 2030.',
        links: [{ label: 'MHLW Health IT Standards', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — FHIR designated as national standard; implementation timeline 2025–2030; fragmented hospital IT is main barrier' }],
      },
      [InteroperabilityClaim.CROSS_BORDER_DATA]: {
        score: 2,
        text: 'Japan has bilateral data transfer agreements with EU (adequacy decision 2019) and several other jurisdictions under the APPI adequacy framework. Research data sharing internationally is possible but requires NDB-specific permissions and is not streamlined. Japan\'s biobanks (ToMMo, BBJ) have international sharing policies but actual data export is tightly controlled. In practice, federated analysis without data leaving Japan is the preferred approach.',
        links: [{ label: 'Japan EU Adequacy Decision', url: 'https://www.ppc.go.jp/en/personalinfo/legal/APPI/', comment: 'PPC — Japan-EU mutual adequacy; cross-border health data transfer legal framework' }],
      },
    },
    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.COMMON_DATA_MODELS]: {
        score: 3,
        text: 'Japanese research institutes are adopting OMOP-CDM through OHDSI membership. AMED-funded research networks are implementing OMOP for multi-site trial data harmonisation. BBJ and ToMMo have partial OMOP mapping. Not universal — many Japanese hospital databases use proprietary formats. Progress is real but behind Singapore, Sweden, and the US in standardisation.',
        links: [{ label: 'OHDSI Japan Chapter', url: 'https://www.ohdsi.org/', comment: 'OHDSI Japan — OMOP-CDM adoption growing in AMED research network hospitals' }],
      },
      [ResearchClinicalClaim.FEDERATED_ANALYSIS]: {
        score: 3,
        text: 'Japan\'s federated analysis infrastructure is developing — AMED\'s Federated Learning platform and the MID-NET pharmacovigilance network (PMDA) both implement federated computation. MHLW\'s cloud-based NDB analysis environment allows analysis at the data source. Federated capability is real but less mature than Singapore\'s TRUST platform or Sweden\'s register-based analysis infrastructure.',
        links: [{ label: 'PMDA MID-NET', url: 'https://www.pmda.go.jp/english/safety/mid-net/0001.html', comment: 'PMDA MID-NET — federated pharmacovigilance network across Japanese hospitals; post-market surveillance' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.ICH_PARTICIPATION]: {
        score: 5,
        text: 'Japan was an ICH founding member in 1990 and has been central to every major ICH guideline. PMDA is one of three core ICH members alongside FDA and EMA. Japanese regulators have led development of ICH guidelines on geriatric clinical trials (E7), multi-regional trials (E17), and genomics (E18). Japan\'s ICH leadership is second to none.',
        links: [{ label: 'PMDA ICH Founding Membership', url: 'https://www.pmda.go.jp/english/int-activities/0004.html', comment: 'PMDA — ICH founding member; co-authors major regulatory guidelines; highest possible ICH engagement' }],
      },
      [RegulatoryHarmonizationClaim.MUTUAL_RECOGNITION]: {
        score: 3,
        text: 'PMDA has a work-sharing arrangement with FDA and EMA for innovative product review (consultations, data sharing) but not full mutual recognition. GMP mutual recognition with several partners. Japan is not in the PIC/S like some European countries. PMDA approval is increasingly respected globally but does not trigger automatic approval elsewhere. Japan\'s regulatory decisions are referenced but not mutually accepted.',
        links: [{ label: 'PMDA International Work Sharing', url: 'https://www.pmda.go.jp/english/int-activities/0004.html', comment: 'PMDA — work-sharing with FDA and EMA; not full mutual recognition; GMP recognition agreements' }],
      },
    },
    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BIOBANK_ACCESS]: {
        score: 3,
        text: 'ToMMo and BBJ have international researcher access programmes but require individual application and Japanese institution collaboration. Sample sharing follows strict export controls. Japan\'s centenarian study samples (Okinawa Centenarian Study) are unique globally but access for international researchers is limited. The value is enormous; the access difficulty is also substantial.',
        links: [{ label: 'Tohoku Medical Megabank International Access', url: 'https://www.megabank.tohoku.ac.jp/english/', comment: 'ToMMo — international researcher access; requires Japanese institution collaboration; unique aging cohort samples' }],
      },
      [SharedPhysicalInfraClaim.COMPUTING_INFRASTRUCTURE]: {
        score: 4,
        text: 'Japan has world-class supercomputing infrastructure: Fugaku (previously world\'s fastest supercomputer) is operated by RIKEN and available for biomedical research via application. AMED\'s computational biology platforms support aging genomics. Japan invested heavily in bioinformatics infrastructure as part of the Moonshot and beyond.',
        links: [{ label: 'Fugaku Supercomputer', url: 'https://www.riken.jp/en/facilities/labs/r-ccs/', comment: 'RIKEN Fugaku — world-class HPC; available for biomedical and aging genomics research' }],
      },
    },
    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_MEMBERSHIP]: {
        score: 4,
        text: 'Japan participates in: TAME trial (Japanese centenarian studies as reference cohorts), Human Cell Atlas, International Longevity Alliance, OHDSI, and APEC health research frameworks. RIKEN has bilateral agreements with leading international aging institutes. Japan\'s aging research output is the second largest globally; its international network reflects this position.',
        links: [{ label: 'RIKEN International Collaborations', url: 'https://www.riken.jp/en/collab/', comment: 'RIKEN — extensive international collaboration network; aging research bilateral agreements with NIH, ERC, and others' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_AGREEMENTS]: {
        score: 3,
        text: 'Japan has EU adequacy decision, bilateral agreements with Canada, Australia, and select US research institutions for health data sharing. NBDC (National Bioscience Database Centre) manages international genomic data sharing for Japanese biobanks. Data sharing is possible but bureaucratic — requires individual MoU and strict anonymisation protocols.',
        links: [{ label: 'NBDC Data Sharing', url: 'https://biosciencedbc.jp/en/', comment: 'NBDC — Japanese biobank international data sharing framework; EU adequacy and bilateral agreements' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 3,
        text: 'Japanese institutional trust has been declining since the 1990s lost decade and was further damaged by Fukushima (2011). Edelman Trust Barometer shows Japan at ~50% trust in government (below global average) but ~65% in science/medicine. Trust in healthcare specifically is high — Japanese patients follow medical advice and engage with national screening programmes. The gap between healthcare trust and general institutional trust is striking.',
        links: [{ label: 'Edelman Trust Barometer 2024 – Japan', url: 'https://www.edelman.com/trust/2024/trust-barometer', comment: 'Japan: ~50% government trust, ~65% science/medicine trust; declining trend since 1990s' }],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 4,
        text: 'Japan is a super-aged society — 29% of the population is over 65, the world\'s highest proportion. Longevity is a lived reality and deeply embedded cultural aspiration (JJukyu — longevity/prosperity wish). The Okinawan centenarian cultural tradition and the concept of "Ikigai" (reason for being) make longevity culturally resonant. Public acceptance of aging research is high, though longevity extension beyond current norms faces some cultural ambivalence among the very elderly themselves.',
        links: [{ label: 'Japan Aging Statistics 2024', url: 'https://www.stat.go.jp/english/data/nenkan/index.html', comment: 'Japan Statistics Bureau — 29% over-65 population; world\'s most aged society; cultural longevity context' }],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 4,
        text: 'Moonshot Goal 7 ("Realise a society in which people can be free from the fear of cancer, cardiovascular, and other diseases and be healthy and active to 100 years of age by 2050") is the most explicit quantified longevity political commitment made by any government. JPY 50B is allocated. Japan\'s aging demographic makes longevity policy politically mandatory — no party can avoid it. The commitment is real; execution speed is slower than Singapore.',
        links: [{ label: 'JST Moonshot Goal 7', url: 'https://www.jst.go.jp/moonshot/en/research/goal7/', comment: 'Moonshot Goal 7 — explicit 100-year healthy life target; JPY 50B funding; government priority endorsed by cabinet' }],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 2,
        text: 'Japan has a large and culturally embedded supplement and functional food market (Tokuho — Food for Specified Health Uses, FOSHU) with thousands of products making indirect health claims. The anti-aging supplement and traditional medicine (Kampo) market is vast. Consumer Affairs Agency and MHLW regulate health claims but enforcement on implicit anti-aging messaging is weak. "Anti-aging" is one of Japan\'s most commercially exploited terms, with limited biomarker evidence requirements. A4M-equivalent practitioners operate, though the Japan Society of Anti-Aging Medicine (JAAM) is more science-oriented than A4M.',
        links: [
          { label: 'FOSHU Functional Food System', url: 'https://www.mhlw.go.jp/english/topics/foodsafety/fhc/02.html', comment: 'MHLW FOSHU — functional food labelling; thousands of products; indirect anti-aging claims common' },
          { label: 'Japan Society of Anti-Aging Medicine', url: 'https://www.anti-aging.gr.jp/', comment: 'JAAM — more science-oriented than A4M but operates in same anti-aging medicine space' },
        ],
      },
    },
  },
}

export default japan
