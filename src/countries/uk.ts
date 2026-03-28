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

const uk: CountryData = {
  country: Country.UK,

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 4,
        text: 'The Global Talent visa (Tier 1) is one of the world\'s best researcher immigration instruments: covers all disciplines, requires no employer sponsor, and applies equally to PhD students, postdocs, and senior PIs. Endorsement through Royal Society, Royal Academy of Engineering, or British Academy takes 5–8 weeks. The Skilled Worker route is an additional fallback for institution-sponsored roles.',
        links: [{ label: 'Global Talent Visa', url: 'https://www.gov.uk/global-talent', comment: 'UKVI Global Talent route — no employer sponsorship required for researchers' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 4,
        text: 'UKVI target: 3-week decision for out-of-country Global Talent applications; in-country switches typically faster. Home Office priority service (£500) delivers in 5 working days. Digital application fully online since 2023; biometrics at UKVCAS appointments widely available. Significantly faster than the US O-1 or EU Blue Card for most nationalities.',
        links: [{ label: 'UKVI Processing Times', url: 'https://www.gov.uk/guidance/visa-decision-waiting-times-applications-outside-the-uk', comment: 'Official UK visa processing times dashboard' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 4,
        text: 'UK universities and research councils (UKRI) recognise foreign doctoral degrees without re-examination for grant eligibility. NARIC (now ENIC-UK) provides certificates for visa purposes, but institutions typically conduct their own assessment, which is fast for degrees from major international universities. Full automatic recognition for ICH partner countries.',
        links: [{ label: 'ENIC-UK Credential Recognition', url: 'https://www.enic.org.uk/', comment: 'UK National Recognition Information Centre — foreign credential assessment' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 4,
        text: 'Global Talent visa has no minimum salary or income threshold — a key advantage over Skilled Worker. Postdocs on UKRI fellowship stipends (£33–38k/year) qualify straightforwardly. Exceptional Promise track targets candidates within 5 years of PhD without requiring demonstrated achievement. Wellcome Trust and BBSRC fellowships routinely held by non-UK nationals.',
        links: [{ label: 'Global Talent Exceptional Promise', url: 'https://www.ukri.org/what-we-do/creating-people-and-skills/the-global-talent-visa/', comment: 'UKRI endorsement pathway — includes Exceptional Promise track for early-career researchers' }],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 4,
        text: 'Global Talent holders can apply for Indefinite Leave to Remain (ILR) after 3 years — the shortest pathway available in any major research nation. Naturalisation after 12 months of ILR. No backlog system. UKRI runs the Talent Retention Scheme, matching displaced researchers to UK institutions. Post-Brexit, EU nationals face the same process as non-EU, but Global Talent largely compensates.',
        links: [{ label: 'ILR from Global Talent', url: 'https://www.gov.uk/indefinite-leave-to-remain', comment: 'Settlement eligibility after 3 years on Global Talent visa' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 3,
        text: 'GMC registration for International Medical Graduates (IMGs) requires passing the PLAB exam (2 parts) unless from a country with a GMC-approved medical school. PLAB 2 includes OSCE-style stations. The UKMLA (replacing PLAB from 2024) will apply uniformly to UK and IMG graduates. EEA mutual recognition ended with Brexit — EU doctors now follow IMG pathway, a significant post-Brexit regression. Process takes 6–18 months depending on exam availability and English language test.',
        links: [{ label: 'GMC IMG Registration', url: 'https://www.gmc-uk.org/registration-and-licensing/join-the-register/before-you-apply/img-guidance', comment: 'GMC guidance for international medical graduates seeking UK registration' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 4,
        text: 'GMC publishes a comprehensive step-by-step guide for IMGs with clearly delineated stages, timelines, and responsible bodies. NHS England runs the International Recruitment programme with dedicated pre-arrival support, accommodation assistance, and clinical adaptation periods. BMA IMG Support Service provides free pastoral support. NHS Trusts increasingly hire dedicated international recruitment leads.',
        links: [{ label: 'NHS International Recruitment', url: 'https://www.nhsemployers.org/articles/international-recruitment', comment: 'NHS Employers international recruitment hub — includes country-specific guidance and support' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 3,
        text: 'PLAB exams are held 5× per year globally; PLAB 2 in the UK has limited slots creating waits of 3–9 months. From qualified IMG to GMC registration: 8–14 months typical. NHS Managed Recruitment from India/Philippines via the International Recruitment Programme can compress this to 4–6 months with Trust sponsorship, structured clinical adaptation, and guaranteed job offers.',
        links: [{ label: 'PLAB Exam Dates', url: 'https://www.gmc-uk.org/registration-and-licensing/join-the-register/plab/plab-1/plab-1-test-dates-venues-and-booking', comment: 'GMC PLAB 1 test schedule — availability is a key bottleneck' }],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 3,
        text: 'Provisional GMC registration is granted for IMGs who have passed PLAB 1 while awaiting PLAB 2, allowing supervised clinical practice in NHS trusts. Clinical Assessment Periods (CAP) of 3 months are offered through NHS England\'s programme. Full independent practice requires full GMC registration. Scope while on CAP is broad — meaningful clinical work in both inpatient and outpatient settings.',
        links: [{ label: 'GMC Provisional Registration', url: 'https://www.gmc-uk.org/registration-and-licensing/join-the-register/provisional-registration', comment: 'GMC provisional registration — allows supervised practice during PLAB 2 wait' }],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 4,
        text: 'NHS Academic Clinical Fellow (ACF) and Clinical Lecturer (CL) posts are explicitly designed for dual research-practice careers and are routinely held by IMGs. ACF provides 25% protected research time alongside NHS clinical work; CL provides 50%. NIHR and Wellcome actively fund international clinician-researchers in these dual-role positions. This infrastructure is globally exemplary for clinician-scientist integration.',
        links: [{ label: 'NIHR Academic Careers', url: 'https://www.nihr.ac.uk/career-development/training-and-fellowships/', comment: 'NIHR training pathway — ACF/CL positions available to international clinician-researchers' }],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'Aging biology increasingly integrated in biomedical science and medicine undergraduate programmes at Oxford, Cambridge, UCL, Edinburgh, and others. MRC-funded research summer studentships (Wellcome ISSF bursaries) place undergrads in aging labs. MedBio courses cover hallmarks of aging. More systematic than most countries but not yet uniformly part of core curriculum across all institutions.',
        links: [{ label: 'Wellcome ISSF', url: 'https://wellcome.org/grant-funding/schemes/institutional-strategic-support-fund', comment: 'Wellcome ISSF funds undergraduate research bursaries at UK universities — aging labs commonly participate' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 5,
        text: 'UK has a globally leading aging PhD ecosystem. BBSRC and MRC Doctoral Training Partnerships (DTPs) at Cambridge (MRC LMB, Gurdon Institute), UCL (Institute of Healthy Ageing), Imperial, Oxford, Manchester and Edinburgh have dedicated aging biology cohorts. Wellcome Sanger Institute, Babraham Institute, and Institute of Healthy Ageing at UCL attract the world\'s best aging PhD students. UKRI Longevity Researcher Training grant launched 2023 specifically targets healthspan science.',
        links: [{ label: 'UCL Institute of Healthy Ageing', url: 'https://www.ucl.ac.uk/biosciences/research/research-domains/genetics-evolution-and-environment/institute-healthy-ageing', comment: 'UCL IHA — one of world\'s leading aging research PhD hubs' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 5,
        text: 'Wellcome Trust, MRC, BBSRC, and CRUK collectively fund hundreds of aging-related postdoc positions annually. Fellowships include Wellcome Career Development Awards (5 years, ~£500k+), BBSRC Future Leader Fellowships, and MRC Career Development Awards — all explicitly supporting postdoc-to-PI transitions in aging biology. Concordat to Support the Career Development of Researchers mandates structured career development. UK is a primary destination for international aging postdocs.',
        links: [{ label: 'Wellcome Career Development Award', url: 'https://wellcome.org/grant-funding/schemes/career-development-awards', comment: '5-year independent fellowship for outstanding postdocs — aging biology a major theme' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 4,
        text: 'UKRI covers tuition and stipend for most aging PhD positions via BBSRC and MRC DTPs (stipend ~£19,668/year in 2024). International PhD students increasingly covered (UKRI opened DTP funding to international students from 2024). Wellcome PhD studentships have higher stipends. Still below real cost of living in London (where many aging labs are based), but among the best-funded systems in Europe.',
        links: [{ label: 'UKRI PhD Stipend Rates', url: 'https://www.ukri.org/what-we-do/developing-people-and-skills/find-studentships-and-doctoral-training/guidance-for-students/', comment: 'UKRI PhD stipend rates — 2024 minimum £19,668/year' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 4,
        text: 'CASE (Collaborative Awards in Science and Engineering) studentships provide formal industry co-supervision with guaranteed industrial placement; many in aging-adjacent biotech (GSK, AstraZeneca, Sanofi). UKRI iCASE adds enhanced industrial stipend. Knowledge Transfer Partnerships (KTPs) allow seamless researcher movement. Cambridge and Oxford biotech clusters (the "Golden Triangle") provide exceptional industry-academia bridge infrastructure for aging scientists.',
        links: [{ label: 'UKRI iCASE Studentships', url: 'https://www.ukri.org/opportunity/icase-studentships/', comment: 'Industry co-supervised PhD studentships — major pharma and biotech companies participate' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 4,
        text: 'Geriatric Medicine is a well-established and respected NHS specialty with a 5-year Core Medical Training + specialist training pathway. JRCPTB-accredited Geriatric Medicine curriculum covers frailty, multi-morbidity, falls, delirium, end-of-life, and rehabilitation. BGSA (British Geriatrics Society) is an influential professional body. Sub-specialisation in complex frailty and community geriatrics is growing. However, geriatrics remains less prestigious and less compensated than cardiology or oncology — a workforce recruitment challenge.',
        links: [{ label: 'JRCPTB Geriatric Medicine', url: 'https://www.jrcptb.org.uk/specialties/geriatric-medicine', comment: 'GMC-approved Geriatric Medicine training curriculum — 5-year specialist pathway' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 3,
        text: 'UK medical schools (5-year MBChB/MBBS) include aging biology and geriatric clinical training but depth varies. GMC Tomorrow\'s Doctors framework mandates clinical exposure to older patients, frailty, and multi-morbidity. Aging mechanisms (senescence, inflammaging) are in some but not all pre-clinical curricula. Oxford and UCL have stronger biological aging content than average. Systematic national integration of longevity medicine into pre-clinical years remains incomplete.',
        links: [{ label: 'GMC Medical Education Outcomes', url: 'https://www.gmc-uk.org/education/standards-guidance-and-curricula/standards-and-outcomes/outcomes-for-graduates', comment: 'GMC Outcomes for Graduates framework — includes older patient and frailty competencies' }],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 4,
        text: 'Geriatric Medicine ST3–ST8 training is comprehensive: covers comprehensive geriatric assessment (CGA), frailty syndromes, delirium management, orthogeriatrics, and perioperative medicine. ARCP (Annual Review of Competency Progression) provides structured quality assurance. Many geriatric registrars rotate through specialist units (falls clinics, memory services, stroke rehabilitation). British Geriatrics Society actively promotes longevity medicine education and runs dedicated training days for trainees.',
        links: [{ label: 'British Geriatrics Society', url: 'https://www.bgs.org.uk/resources/medical-education-training', comment: 'BGS training and education resources for geriatric medicine trainees' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 3,
        text: 'NHS mandatory CPD requirements (50 hours/year for licensed doctors) include aging-relevant content for specialties routinely managing older patients. BGS runs an annual conference with aging biology tracks. Academy of Medical Royal Colleges supports multi-specialty frailty education. However, longevity medicine specifically (senolytics, biological age interventions, healthspan optimisation) is not yet in formal CME frameworks — it remains conference- and society-driven rather than mandated.',
        links: [{ label: 'BGS Annual Conference', url: 'https://www.bgs.org.uk/events/bgs-autumn-meeting', comment: 'BGS Annual Meeting — major CME event for UK geriatric medicine and longevity science' }],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 3,
        text: 'NHS Long Term Workforce Plan (2023) projects need for 170k additional staff by 2037, including significant geriatrics expansion. NHS England publishes annual specialty training supply/demand analysis. However, geriatrics faces persistent recruitment shortfalls relative to demand — declared "at risk" specialty by RCP. International recruitment is filling gaps. Workforce planning exists and is evidence-based but has not yet solved the structural underinvestment in geriatrics relative to the aging demographic.',
        links: [{ label: 'NHS Long Term Workforce Plan', url: 'https://www.england.nhs.uk/publication/nhs-long-term-workforce-plan/', comment: 'NHS Long Term Workforce Plan 2023 — includes aging specialty training expansion targets' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 5,
        text: 'UK has multiple routes: (1) MBPhD — Oxford, Cambridge, UCL, Imperial offer fully integrated 7-year medical degrees with embedded 3-year PhD; (2) Academic Foundation Programme (AFP) — 2-month research block plus competitive research allocation after FY1; (3) Academic Clinical Fellowships (ACF) — competitive national scheme at ST1–ST3 with 25% protected research time across all specialties including geriatrics. Multiple entry points across the entire training continuum make this one of the world\'s best-designed clinician-scientist pipelines.',
        links: [{ label: 'NIHR Academic Clinical Fellowships', url: 'https://www.nihr.ac.uk/career-development/training-and-fellowships/researcher-led-career-fellowships/academic-clinical-fellowships', comment: 'National ACF programme — competitive posts with 25% protected research time' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 5,
        text: 'ACFs are NIHR-funded with full NHS salary during training (not a stipend penalty). Wellcome Clinical Research Career Development Awards and Clinical PhD Programme provide 3-year full salary plus research costs for MDs moving into lab science. MRC Clinician Scientist Fellowships (5 years, full salary) are among the most generous in the world. CRUK Clinical Research Training Fellowships cover oncology. No financial penalty for entering academic track is a defining feature of the UK system.',
        links: [{ label: 'Wellcome Clinical PhD Programme', url: 'https://wellcome.org/grant-funding/schemes/clinical-phd-programme', comment: 'Full salary + research costs — no financial penalty to clinician-scientist transition' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 4,
        text: 'NIHR Biomedical Research Centres (BRCs) at Oxford, Cambridge, UCL, Manchester explicitly fund aging-focused ACF and Clinical Lecturer positions. Wellcome Human Developmental Biology Initiative and Aging Cell Biology themes attract clinician-scientists. NIHR Applied Research Collaborations (ARCs) fund frailty and multi-morbidity clinician researchers. A genuine aging specialisation ecosystem exists through which a geriatric ACF can build a longevity research career with full salary support.',
        links: [{ label: 'NIHR BRC — Ageing Theme', url: 'https://www.nihr.ac.uk/about-us/what-we-do/infrastructure/biomedical-research-centres', comment: 'NIHR BRC network — multiple centres with dedicated ageing research themes supporting clinician-scientists' }],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 4,
        text: 'ACFs have 25% protected research time contractually guaranteed by NHS England. Clinical Lecturers have 50% protected time funded jointly by HEI and NHS Trust. NHS job planning rules allow consultants to negotiate SPAs (Supporting Professional Activities) for research — typically 1–2 SPAs per week (10–20% time). Wellcome and MRC career development awards cover full salary for 100% research time. Multiple levels mean researchers can calibrate their research-practice balance across career stages.',
        links: [{ label: 'NHS Job Planning SPA Guidance', url: 'https://www.bma.org.uk/pay-and-contracts/contracts/consultant-contract/job-planning', comment: 'BMA guidance on Supporting Professional Activities — route for research time in consultant contracts' }],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 5,
        text: 'Clinician-scientist is a mainstream, prestigious career in UK academic medicine. NHS Clinical Academic Careers framework provides clear progression from ACF → Clinical Lecturer → Senior Lecturer → Reader/Professor, all with maintained clinical practice. Most top UK medical schools have clinical professoriates where clinical work and research both form part of the job. Wellcome and NIHR-funded clinical professors (e.g., at Babraham, LMB, Sanger) are among the world\'s leading researchers. No other country offers a more structured and funded dual-career pathway at scale.',
        links: [{ label: 'NHS Clinical Academic Careers Framework', url: 'https://www.nihr.ac.uk/documents/clinical-academic-careers-in-the-nhs-a-framework-for-action-and-guidance-for-implementation/12363', comment: 'NIHR framework — defines ACF → CL → Professor progression within NHS structure' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 3,
        text: 'UKRI annual budget ~£8.9B (2023/24) spans all research domains via BBSRC, MRC, EPSRC. MRC dedicates ~£900M/year to human health research with aging and dementia as major themes. Wellcome Trust (~£1.2B/year independently) is one of the world\'s largest private biomedical funders with explicit aging biology investment. Combined public+private aging-specific spend is in the £300–500M range — meaningful but below NIA\'s $3.9B.',
        links: [{ label: 'UKRI Annual Report', url: 'https://www.ukri.org/what-we-do/our-performance/annual-report-and-accounts/', comment: 'UKRI annual report — breakdown of MRC and BBSRC spend on aging research' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 5,
        text: 'BBSRC funds hallmarks of aging (senescence, proteostasis, NAD metabolism, epigenetics, mTOR signalling) as first-class basic science. MRC funds translational and clinical aging research. Wellcome funds both basic and translational with exceptional freedom for high-risk ideas. Alzheimer\'s Research UK, British Heart Foundation, and Cancer Research UK collectively cover aging-adjacent disease applications. The portfolio depth and balance across mechanisms, translational, and clinical is arguably the best-distributed in the world outside the US.',
        links: [{ label: 'BBSRC Healthy Ageing', url: 'https://www.ukri.org/what-we-do/browse-our-areas-of-investment-and-support/healthy-ageing/', comment: 'UKRI Healthy Ageing cross-council priority — funds across all aging biology research stages' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 4,
        text: 'UKRI Healthy Ageing Challenge Programme (£98M, 5-year); MRC Centres (5–10 year commitments); Wellcome Trust endowment-funded grants (multi-year stability). Sanger Institute and Babraham Institute have core-funded aging research with guaranteed institutional baseline. UK government\'s 2.5% GDP R&D target (2025) provides statutory stability signal. Budget uncertainty post-Brexit has been partially compensated by UKRI ring-fencing of key programmes.',
        links: [{ label: 'UKRI Healthy Ageing Challenge', url: 'https://www.ukri.org/our-work/our-main-funds-and-areas-of-support/industrial-strategy-challenge-fund/healthy-ageing/', comment: '£98M Healthy Ageing Challenge — 5-year funded programme; industry-academia co-design' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 5,
        text: 'Wellcome Trust (~£37B endowment) is the world\'s second-largest private biomedical funder after Gates Foundation. Actively co-invests with BBSRC and MRC in aging biology. Garry Weston Foundation, Gatsby Charitable Foundation, and CRUK supplement. Cambridge biotech cluster (Abcam, Bicycle Therapeutics, Kymab, Immunocore) and Oxford cluster (multiple spinouts from Weatherall Institute, NDM) are substantial industry partners. LifeArc, a charity commercialising MRC science, provides a unique public-private bridge. UK longevity VC (Juvenescence, formerly) has funded age-reverse biotechs.',
        links: [{ label: 'Wellcome Trust Aging Research', url: 'https://wellcome.org/what-we-do/our-work/ageing', comment: 'Wellcome aging research portfolio — one of the world\'s largest private aging research investors' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 4,
        text: 'Wellcome Investigator Awards are explicitly designed for high-risk, long-time-horizon basic science — rejection of "fashionable" paradigms is encouraged in the assessment criteria. BBSRC responsive mode includes transformative research grants. UKRI New Horizons programme funds genuinely unconventional ideas (£300k for 12–24 months of exploratory work). Wellcome Open Research platform supports rapid dissemination of negative results. Risk appetite is above European average, though below NIH\'s EUREKA or DARPA benchmark.',
        links: [{ label: 'Wellcome Investigator Awards', url: 'https://wellcome.org/grant-funding/schemes/investigator-awards-science', comment: 'Wellcome Investigator Awards — explicitly encourage high-risk, high-impact basic aging science' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 5,
        text: 'MHRA regulates somatic gene editing as Advanced Therapy Medicinal Products (ATMPs). UK is one of the world\'s fastest regulators for somatic gene editing trials — Casgevy (Vertex/CRISPR Therapeutics), the first approved CRISPR therapy globally, was approved by MHRA in November 2023 — ahead of FDA and EMA. Clinical Innovation Pathway and Innovative Licensing and Access Pathway (ILAP) provide rapid trial-to-market routes. UK has the highest density of active gene editing clinical trials per capita in Europe.',
        links: [{ label: 'MHRA Casgevy Approval', url: 'https://www.gov.uk/government/news/uk-first-in-the-world-to-approve-crispr-treatment-for-two-sickle-cell-conditions', comment: 'MHRA approved Casgevy November 2023 — world\'s first approved CRISPR therapy' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 5,
        text: 'Casgevy approval demonstrates real-world speed: MHRA completed review in parallel with FDA; approval came 5 weeks before FDA. ILAP (Innovative Licensing and Access Pathway) includes Roadmap meetings from pre-Phase I, rolling submissions, and target approval date commitment. MHRA\'s post-Brexit independence allows it to move independently of EMA, enabling faster decisions. UK is now setting the pace for gene editing regulatory timelines globally.',
        links: [{ label: 'MHRA ILAP', url: 'https://www.gov.uk/guidance/innovative-licensing-and-access-pathway', comment: 'ILAP — MHRA\'s fastest pathway; used for novel gene editing therapies' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 5,
        text: 'MHRA established a dedicated Advanced Therapies team post-Brexit with explicit mandate to lead global regulation of novel modalities. Horizon Scanning reports on base editing, prime editing, and epigenetic reprogramming published proactively. MHRA participates in International Coalition of Medicines Regulatory Authorities (ICMRA) gene therapy working groups. Pre-CTA scientific advice for novel modalities is available within 90 days. Considered a global model for adaptive gene editing regulation.',
        links: [{ label: 'MHRA Advanced Therapies', url: 'https://www.gov.uk/guidance/advanced-therapy-medicinal-products-regulation-and-licensing', comment: 'MHRA ATMP regulatory framework — includes gene editing, cell therapy, and emerging modalities' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 3,
        text: 'Clinical germline gene editing is prohibited under the Human Fertilisation and Embryology Act 1990 (amended). However, UK is unique globally in having the most permissive basic research framework: the HFEA licenses embryo research including germline editing up to 14 days. The Nuffield Council on Bioethics in 2018 concluded germline editing "could be morally permissible" under specific conditions — signalling future openness. HFEA-approved research on CRISPR in human embryos has been conducted (Kathy Niakan\'s group, Francis Crick Institute).',
        links: [{ label: 'HFEA Embryo Research Licensing', url: 'https://www.hfea.gov.uk/research/', comment: 'HFEA research licensing — UK allows human embryo editing research under 14-day rule' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 3,
        text: 'MHRA has not yet created a dedicated longevity-gene-editing pathway, but aging-adjacent indications (Duchenne muscular dystrophy — associated with premature aging; progeria) have received ATMP designation and fast-track review. MHRA\'s Innovative Licensing and Access Pathway is available for aging-targeted gene editing trials. NIHR BRC aging themes have published scientific frameworks for aging-endpoint trials. The regulatory infrastructure is present but longevity-specific precedents remain thin.',
        links: [{ label: 'MHRA ATMP Designation', url: 'https://www.gov.uk/guidance/advanced-therapy-medicinal-products-regulation-and-licensing', comment: 'MHRA ATMP designation — available for aging-targeted gene therapies' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 4,
        text: 'ARIA (Advanced Research and Invention Agency), launched in 2023 with £800M over 5 years, is an explicitly ARPA-modelled agency with Programme Manager-led directed research, milestone-based contracts, and tolerance for ambitious failure. Innovate UK (part of UKRI) runs challenge-based Innovation Competitions. UKRI Healthy Ageing Challenge operates with defined industry-academia co-design goals. ARIA represents a genuine breakthrough from UK\'s traditional grant-making approach, though it is early-stage and not yet longevity-focused.',
        links: [{ label: 'ARIA', url: 'https://www.aria.org.uk/', comment: 'ARIA — UK\'s ARPA-model agency; £800M over 5 years; Programme Manager-led challenge research' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 3,
        text: 'UKRI Healthy Ageing cross-council priority (£250M+ committed) is an explicit aging mission connecting basic biology to products and services. The UK Longevity Science Panel (formed 2022, chaired by Jim Mellon) advises government on longevity investment priorities. Government Office for Science published a Future of Ageing foresight report. However, ARIA has not yet announced a longevity-specific programme, and there is no single agency with a sole longevity mandate equivalent to NIA.',
        links: [{ label: 'UK Longevity Science Panel', url: 'https://www.longevitysciencepanel.co.uk/', comment: 'UK Government-convened Longevity Science Panel — advises on aging research investment priorities' }],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 4,
        text: 'ARIA uses milestone-based non-dilutive contracts (not grants) — developers retain IP. Innovate UK grants are non-dilutive for SMEs. SBRI (Small Business Research Initiative) provides 100% non-dilutive challenge contracts to health biotech companies. UKRI\'s Healthy Ageing Challenge used non-dilutive co-development contracts as standard. Post-Brexit Horizon exclusion created pressure to increase domestic non-dilutive industrial R&D support, which the government has responded to.',
        links: [{ label: 'ARIA Funding Model', url: 'https://www.aria.org.uk/our-approach/', comment: 'ARIA programme model — milestone-based contracts, not grants; full IP retention for developers' }],
      },
      [BreakthroughAgencyClaim.IP_FRAMEWORK]: {
        score: 4,
        text: 'Lambert Agreement templates (UKRI-managed) are the standard for academic-industry IP sharing — providing a fast-track framework that removes negotiation friction. UK universities retain IP under Bayh-Dole-equivalent provisions but have strong TTO infrastructure (Oxford Technology and Innovation, Cambridge Enterprise, UCL Business). MHRA\'s Innovation Office facilitates IP-strategy alignment for drug regulatory submissions. ARIA contracts explicitly leave IP with developers.',
        links: [{ label: 'Lambert Agreements', url: 'https://www.gov.uk/guidance/lambert-toolkit', comment: 'Lambert toolkit — UKRI-standard IP sharing agreements for academic-industry collaboration' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 3,
        text: 'UKRI Healthy Ageing Challenge had explicit goals: more years of healthy independent living, and measurable product/service outputs. Innovate UK missions use quantified targets. UK government\'s Healthy Ageing Grand Challenge (part of Industrial Strategy) set market-creation goals. However, the specificity of biological aging targets (e.g., "demonstrate reversal of epigenetic age by X years") is not yet embedded in UK challenge frameworks — the framing remains health-economic rather than mechanistic.',
        links: [{ label: 'UKRI Healthy Ageing Challenge', url: 'https://www.ukri.org/our-work/our-main-funds-and-areas-of-support/industrial-strategy-challenge-fund/healthy-ageing/', comment: 'Healthy Ageing Challenge — industry-academia co-design with defined healthy independence outcomes' }],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'MHRA\'s Innovative Licensing and Access Pathway (ILAP) is the most comprehensive integrated adaptive approval route in Europe. ILAP includes: Promising Innovative Medicine (PIM) designation, Medicines and Healthcare products Innovation Passport, rolling review, multi-stakeholder Roadmap meetings, and target approval date. Multiple ATMPs and novel biologics have been conditionally approved via ILAP since its 2021 launch. MHRA operates faster than EMA for conditional approval decisions.',
        links: [{ label: 'MHRA ILAP', url: 'https://www.gov.uk/guidance/innovative-licensing-and-access-pathway', comment: 'ILAP — integrated adaptive pathway from pre-Phase I to conditional approval; world-leading design' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'Rolling review is a formal component of ILAP and can be activated for any medicine meeting priority criteria. MHRA explicitly supports concurrent rolling submission and review of data modules as they are generated. During COVID-19, MHRA demonstrated capacity to conduct rolling review at unprecedented speed. Post-Brexit, MHRA has institutionalised rolling review as a permanent offer for novel therapeutics, not just emergency use.',
        links: [{ label: 'MHRA Rolling Review', url: 'https://www.gov.uk/guidance/novel-coronavirus-covid-19-standard-operating-procedures-for-mhra-rolling-review', comment: 'MHRA rolling review — standard procedure for priority medicines under ILAP' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'MHRA accepts disease-validated surrogates (HbA1c, LDL, viral load) as primary endpoints across many indications. For aging-adjacent indications (frailty, sarcopenia, functional decline), functional composites are accepted under ILAP. MHRA has engaged with the Alliance for Longevity Initiatives on aging endpoint frameworks. Pure biological age surrogates (epigenetic clocks) remain exploratory — not yet accepted as primary for conditional approval — but there is active dialogue.',
        links: [{ label: 'MHRA Endpoint Guidance', url: 'https://www.gov.uk/government/collections/guidance-on-publishing-clinical-trial-results', comment: 'MHRA guidance on clinical trial endpoints — functional aging composites accepted under ILAP' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 4,
        text: 'MHRA\'s post-market surveillance framework includes mandatory phase IV commitments under ILAP conditional approvals, with defined confirmatory timelines and published withdrawal criteria. Yellow Card pharmacovigilance system is UK-specific and robust. MHRA has exercised withdrawal authority for medicines failing post-market confirmation. UK\'s NHS and NICE provide a uniquely integrated real-world evidence generation infrastructure for confirmatory studies.',
        links: [{ label: 'MHRA Post-Market Surveillance', url: 'https://www.gov.uk/guidance/post-market-surveillance-for-medical-devices', comment: 'MHRA PMS framework — mandatory confirmatory requirements with enforcement authority' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 4,
        text: 'MHRA Specials and Unlicensed Products framework enables named-patient access outside trials. Early Access to Medicines Scheme (EAMS) provides systematic expanded access for life-threatening conditions — one of Europe\'s most structured compassionate use frameworks. EAMS products receive an MHRA scientific opinion, providing liability clarity for prescribers. Evidence collected during EAMS period is formally considered in subsequent approval decisions — a model for other regulators.',
        links: [{ label: 'MHRA Early Access to Medicines', url: 'https://www.gov.uk/guidance/early-access-to-medicines-scheme-eams', comment: 'EAMS — structured expanded access with MHRA scientific opinion and evidence collection' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 5,
        text: 'MHRA published dedicated adaptive design guidance and is considered a global leader. The UK has run several landmark adaptive trials: RECOVERY (COVID), STAMPEDE (prostate cancer), and ASCOT-LEGACY (cardiovascular). MHRA regulatory scientists co-author adaptive trial methodology papers. FDA-EMA-MHRA trilateral guidance alignment means UK-designed adaptive trials are globally acceptable. UK academic statisticians (MRC Biostatistics Unit, Birmingham, UCL) set international methodology standards.',
        links: [{ label: 'MHRA Adaptive Design Guidance', url: 'https://www.gov.uk/government/publications/adaptive-designs-for-clinical-trials-guidance-for-industry', comment: 'MHRA adaptive design guidance — RECOVERY trial is global benchmark for adaptive design execution' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 4,
        text: 'MHRA formally accepts synthetic and external controls under ILAP for indications where randomisation is infeasible. NHS Digital (now NHS England Digital) provides curated datasets for synthetic control construction — structured hospital episode statistics, primary care, and prescribing data. NICE Real-World Evidence Framework explicitly validates synthetic controls for HTA purposes. UK biobank data has been used as external control arms in several oncology submissions.',
        links: [{ label: 'NICE RWE Framework', url: 'https://www.nice.org.uk/about/what-we-do/our-programmes/nice-guidance/nice-technology-appraisals/nice-real-world-evidence-framework', comment: 'NICE RWE Framework — validates synthetic controls for health technology assessment decisions' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 4,
        text: 'MHRA published UK-specific DCT guidance in 2022 — one of the first national regulators to do so post-COVID. NHS permits home visits by research nurses under institutional sponsor oversight. CTIMVP (Clinical Trial Information Management Validation Process) accommodates remote biomarker collection. NHS app and GP record integration enables passive outcome monitoring in decentralised settings. UK Biobank participants can contribute digital biomarker data remotely — a model for DCT integration.',
        links: [{ label: 'MHRA DCT Guidance', url: 'https://www.gov.uk/guidance/decentralised-clinical-trials-guidance', comment: 'MHRA DCT guidance 2022 — includes home visits, remote monitoring, and digital biomarker acceptance' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 5,
        text: 'UK invented and leads platform trial methodology. RECOVERY (COVID, 35+ treatments evaluated on single platform), STAMPEDE (prostate cancer), and I-SPY (breast cancer collaboration with US) are global benchmarks. MHRA grants single approval for the master protocol with streamlined amendment process for new arms. The UK National Institute for Health Research funds a dedicated platform trial infrastructure support service. Cambridge, UCL, and Birmingham maintain permanent platform trial statistical capacity.',
        links: [{ label: 'RECOVERY Trial', url: 'https://www.recoverytrial.net/', comment: 'RECOVERY — world\'s largest COVID platform trial; proof of UK\'s platform trial leadership capacity' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 5,
        text: 'UK has the world\'s most integrated trial-RWE infrastructure. OpenSAFELY (access to 60M+ NHS patient records in a privacy-preserving environment), CPRD (Clinical Practice Research Datalink — 50M+ patient records), and Hospital Episode Statistics enable regulatory-grade real-world evidence generation at scale. NICE routinely uses RWE for HTA decisions. MHRA and NICE\'s Medicines and Medical Devices Act (2021) explicitly empowers RWE use in licensing decisions. Register-based randomised trials within NHS are achievable within months.',
        links: [{ label: 'OpenSAFELY', url: 'https://www.opensafely.org/', comment: 'OpenSAFELY — privacy-preserving access to 60M+ NHS records; world-leading RWE platform' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 4,
        text: 'MHRA operates the Innovative Licensing and Access Pathway (ILAP), which functions as a de facto regulatory sandbox: flexible evidence requirements, iterative regulatory dialogue, and real-time protocol adaptation. Innovate UK\'s Biomedical Catalyst provides matched non-dilutive funding for companies in regulatory development phases. The government\'s AI Safety Institute (AISI) additionally runs a regulatory sandbox for AI-in-health. Multiple active cohorts are running under ILAP at any given time.',
        links: [{ label: 'MHRA ILAP Innovation Passport', url: 'https://www.gov.uk/guidance/innovative-licensing-and-access-pathway#innovation-passport', comment: 'ILAP Innovation Passport — entry point to UK\'s most flexible adaptive regulatory programme' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 5,
        text: 'ILAP explicitly covers all therapeutic modalities: small molecules, biologics, ATMPs (gene therapy, cell therapy, tissue engineering), combination products, and AI/software as a medical device. MHRA was first to approve CRISPR therapy globally. Prime editing and base editing therapies can enter ILAP. Epigenetic reprogramming therapeutics have been in pre-ILAP scientific advice discussions at MHRA. No therapeutic category is excluded.',
        links: [{ label: 'MHRA ATMP Coverage', url: 'https://www.gov.uk/guidance/advanced-therapy-medicinal-products-regulation-and-licensing', comment: 'MHRA ATMP framework — explicitly covers gene editing, cell therapy, and novel combination approaches' }],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 4,
        text: 'EAMS (Early Access to Medicines Scheme) covers patients with serious, life-threatening conditions including aging-related diseases. MHRA\'s ILAP has been used for prevention-focused therapeutics (cardiovascular prevention, T2D prevention). Frailty and sarcopenia indications (aging prevention) have been accepted for ILAP entry. Broader longevity prevention (healthy individuals) remains in regulatory development but MHRA\'s Innovation Office has held pre-submission meetings on such programmes.',
        links: [{ label: 'MHRA EAMS Patient Access', url: 'https://www.gov.uk/guidance/early-access-to-medicines-scheme-eams', comment: 'EAMS — structured patient access pre-approval; available for aging-mechanism-targeting medicines' }],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 4,
        text: 'EAMS MHRA Scientific Opinion provides legal basis for physicians prescribing pre-approval medicines — liability framework is clear. ILAP regulatory decisions are legally binding on NHS commissioning via the Medicines and Medical Devices Act 2021. MHRA sandbox participants receive documented regulatory position on novel evidence approaches, reducing legal uncertainty for developers. UK\'s Medicines Act provides a clearer liability framework than most EU member states for innovative clinical programmes.',
        links: [{ label: 'Medicines and Medical Devices Act 2021', url: 'https://www.legislation.gov.uk/ukpga/2021/3/contents', comment: 'UK law empowering MHRA\'s innovative licensing frameworks, including RWE admissibility' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 3,
        text: 'Aging-adjacent indications (frailty, sarcopenia, age-related macular degeneration, NASH) have been accepted into ILAP. MHRA Innovation Office has held meetings with companies developing senolytic and metformin-for-aging programmes. Longevity Science Panel has recommended that MHRA establish an explicit longevity medicine regulatory track. To date, pure longevity prevention (targeting healthy individuals with aging biology endpoints) remains exploratory — a clear longevity sandbox track is the next step the UK is poised to take.',
        links: [{ label: 'Longevity Science Panel Recommendations', url: 'https://www.longevitysciencepanel.co.uk/', comment: 'UK Longevity Science Panel — recommends dedicated MHRA longevity regulatory pathway' }],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'MHRA accepts functional composite aging endpoints (gait speed, grip strength, 6-minute walk, frailty index) as primary for geriatric indications. NICE accepts multi-domain aging composites for HTA purposes. Biological age surrogates (epigenetic clocks, proteomic age) are accepted as secondary endpoints in UK-based trials. Primary registration approval based on biological age is not yet established — MHRA and NICE are in discussion with academic groups on this.',
        links: [{ label: 'NICE Technology Appraisals — Aging', url: 'https://www.nice.org.uk/', comment: 'NICE HTA — accepts multi-domain aging composites for frailty and sarcopenia assessments' }],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 4,
        text: 'MHRA participates in the EMA CHMP Biomarker Qualification procedure (retained post-Brexit via parallel process). UK-specific biomarker qualification can be submitted to MHRA directly. Wellcome Trust and MRC are funding pre-competitive biomarker qualification consortia (UK Biomarker Qualification Group). MHRA\'s Innovation Office provides expedited pre-submission scientific advice on aging biomarker qualification strategies — a 2–3 year pathway is achievable for well-characterised markers.',
        links: [{ label: 'MHRA Biomarker Qualification', url: 'https://www.gov.uk/guidance/regulatory-decision-making-and-scientific-advice#biomarker-qualification', comment: 'MHRA biomarker qualification guidance — applicable to aging clocks and proteomic age markers' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 3,
        text: 'MHRA permits co-development of therapeutic and companion diagnostic within a single CTA. ILAP Roadmap meetings include biomarker strategy discussion alongside therapeutic development plan. UK Biobank can serve as reference population for co-developed aging biomarkers. However, a formal co-development pathway specifically for aging endpoints (therapeutic + aging clock) is not yet codified — MHRA addresses these case-by-case under ILAP.',
        links: [{ label: 'MHRA CTA Companion Diagnostic', url: 'https://www.gov.uk/guidance/companion-diagnostics', comment: 'MHRA companion diagnostic guidance — basis for aging endpoint co-development strategies' }],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 5,
        text: 'UK Biobank (500,000 participants, WGS complete for all, multi-omic data, 15+ years of linked NHS follow-up) is the world\'s premier aging biomarker reference population. It is used by thousands of researchers globally for building normative aging biomarker reference panels. CPRD and Understanding Society provide complementary longitudinal cohorts. DNAm aging clocks (Hannum, Horvath, GrimAge, DunedinPACE) were largely developed and validated on UK cohorts. No other country has equivalent reference infrastructure for aging biomarker validation.',
        links: [{ label: 'UK Biobank', url: 'https://www.ukbiobank.ac.uk/', comment: 'UK Biobank — 500k participants; world\'s primary aging biomarker reference dataset' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 4,
        text: 'UK Biobank Enhanced Assay Protocol provides standardised measurement procedures adopted by dozens of cohort studies globally. MRC Epidemiology Unit and UCL publishes standardised aging phenotype measurement protocols. UK Biomarker Partnership (industry-MRC collaboration) develops harmonised biomarker measurement standards. Epigenetic clock standardisation was led by UK teams; GrimAge (developed on UK Biobank) is the most widely-used aging clock in regulatory submissions. UK effectively sets global standards in this space.',
        links: [{ label: 'UK Biobank Assay Protocols', url: 'https://www.ukbiobank.ac.uk/enable-your-research/approved-research/additional-resources', comment: 'UK Biobank enhanced protocols — adopted as de facto global standard for aging biomarker research' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: { score: ScreeningLevel.PROACTIVE, text: 'NHS Health Check (ages 40–74, every 5 years) proactively invites all eligible adults for CVD risk assessment including cholesterol, blood pressure, BMI, lifestyle. GPs automatically recall patients. Results trigger clinical action pathways. ~1.4M checks per year. One of the world\'s most comprehensive universal CVD prevention programmes.', links: [{ label: 'NHS Health Check Programme', url: 'https://www.nhs.uk/conditions/nhs-health-check/', comment: 'NHS proactive CVD screening — invites all adults 40–74 every 5 years' }] },
      [PopulationScreeningClaim.BREAST_CANCER]: { score: ScreeningLevel.PROACTIVE, text: 'NHS Breast Screening Programme invites all women aged 50–70 by letter every 3 years for mammography. Digitally managed call-recall system. UK piloting age extension to 47–73 (AgeX trial). Coverage ~72% of eligible women. Digital mammography with AI-assisted reading rolled out from 2023.', links: [{ label: 'NHS Breast Screening', url: 'https://www.nhs.uk/conditions/breast-screening-mammogram/', comment: 'NHS breast screening — proactive letter invitation every 3 years for all eligible women' }] },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: { score: ScreeningLevel.PROACTIVE, text: 'NHS Bowel Cancer Screening Programme (ages 50–74, biennial FIT test by postal kit) is proactive letter-based invitation. Positive FIT triggers colonoscopy. UK was first to implement home FIT at national scale (2019). Bowel Scope Screening (flexible sigmoidoscopy at 55) runs in parallel. Combined programme is among the world\'s most comprehensive colorectal cancer screening systems.', links: [{ label: 'NHS Bowel Cancer Screening', url: 'https://www.nhs.uk/conditions/bowel-cancer-screening/', comment: 'NHS Bowel Cancer Screening — postal FIT kit sent proactively; first national home-FIT programme' }] },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: { score: ScreeningLevel.PROACTIVE, text: 'NHS Cervical Screening Programme (England: 25–64, every 3 or 5 years; Scotland/Wales: similar) uses HPV primary screening — UK was first national programme globally to adopt HPV primary testing (2019). Invitation letters sent by call-recall system. GPs automatically notified of overdue patients. 72% coverage. Model for other national programmes transitioning to HPV primary.', links: [{ label: 'NHS Cervical Screening', url: 'https://www.nhs.uk/conditions/cervical-screening/', comment: 'NHS cervical screening — HPV primary testing; first national programme to adopt HPV-first (2019)' }] },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: { score: ScreeningLevel.PROACTIVE, text: 'NHS Abdominal Aortic Aneurysm Screening Programme invites all men at 65 for a single ultrasound scan. Digital call-recall system; letters sent by NHS Digital. Coverage ~80% attendance. Includes referral and surveillance pathways for detected AAA. One of few AAA programmes globally run at national scale with proactive invitation.', links: [{ label: 'NHS AAA Screening', url: 'https://www.nhs.uk/conditions/aortic-aneurysm/screening/', comment: 'NHS AAA screening — all men invited at age 65; proactive letter; national programme since 2013' }] },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: { score: ScreeningLevel.PROACTIVE, text: 'NHS Diabetes Prevention Programme (NDPP) proactively identifies at-risk individuals through GP record extraction (QDiabetes risk score) and offers referral to structured lifestyle programme. HbA1c for pre-diabetes detection embedded in NHS Health Check. ~110,000 referrals per year to NDPP. One of the world\'s largest diabetes prevention programmes integrated with population screening.', links: [{ label: 'NHS Diabetes Prevention Programme', url: 'https://www.england.nhs.uk/diabetes/diabetes-prevention/', comment: 'NDPP — largest national diabetes prevention programme globally; proactive identification from GP records' }] },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: { score: ScreeningLevel.FUNDED_PASSIVE, text: 'DEXA scanning is NHS-funded and NICE-guideline recommended for women >65 and at-risk groups identified via FRAX risk score by GP. No proactive national invitation — depends on GP FRAX assessment during consultations. Fracture Liaison Services (FLS) provide systematic secondary fracture prevention at over 350 sites. FRAX integration in GP systems enables opportunistic identification but not proactive population invitation.', links: [{ label: 'NICE Osteoporosis Guideline', url: 'https://www.nice.org.uk/guidance/cg146', comment: 'NICE CG146 — recommends FRAX-based DEXA referral; GP-initiated; no proactive invitation programme' }] },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: { score: ScreeningLevel.PROACTIVE, text: 'NHS Targeted Lung Health Checks (TLHC) programme proactively invites current and former smokers aged 55–74 with a GP-invitation letter in areas of highest lung cancer burden. Following NELSON trial success, UK committed to national rollout by 2030. ~700k invitations in pilot phase (2023). TLHC model is one of the world\'s most operationally sophisticated lung cancer screening implementations.', links: [{ label: 'NHS Targeted Lung Health Checks', url: 'https://www.england.nhs.uk/cancer/lung/', comment: 'TLHC — UK proactive lung cancer screening for eligible smokers; national rollout underway' }] },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: { score: ScreeningLevel.FUNDED_PASSIVE, text: 'NICE guidelines recommend opportunistic AF screening (pulse check or ECG) in adults >65 during any healthcare contact. NHS Health Check does not currently include AF screening. MHRA-approved AliveCor Kardia devices are used in NHS pilots. AF detection app integrated in NHS App under evaluation. Systematic proactive AF invitation programme not yet implemented — policy landscape is evolving with SAFER trial results expected 2025.', links: [{ label: 'NICE AF Detection Guidance', url: 'https://www.nice.org.uk/guidance/ng196', comment: 'NICE NG196 — opportunistic AF screening recommended; no proactive national programme yet' }] },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: { score: ScreeningLevel.FUNDED_PASSIVE, text: 'NHS Dementia case-finding: GPs are incentivised via Quality Outcomes Framework (QOF) to identify and register dementia patients. GPs can refer for cognitive assessment. No proactive population-wide cognitive screening programme. The PREVENT Dementia project (Cambridge, Edinburgh, Kings) runs research-based screening in mid-life. Policy community is actively debating national cognitive screening as disease-modifying treatments (lecanemab) emerge.', links: [{ label: 'NHS Dementia Case Finding', url: 'https://www.england.nhs.uk/mental-health/dementia/', comment: 'NHS Dementia strategy — QOF incentivises GP case finding; no proactive population invitation' }] },
      [PopulationScreeningClaim.POLYGENIC_RISK]: { score: ScreeningLevel.COST_SHARING, text: 'UK Biobank\'s genomic data is available to researchers for PRS validation. GenoME study (NHS Genomics Medicine Service) is piloting return of polygenic risk scores to patients at scale. NHS Long-Term Plan includes genomic medicine as a priority with PRS integration planned. Genomics England is developing NHS-grade PRS pipelines. PRS is in pilot/research phase — not yet a funded population-wide screening programme, but the UK is the most advanced nationally in readiness.', links: [{ label: 'Genomics England PRS', url: 'https://www.genomicsengland.co.uk/initiatives/polygenic-risk-scores', comment: 'Genomics England PRS programme — NHS integration of polygenic risk scoring in active development' }] },

      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: 3,
        text: 'No national proactive screening programme. NICE Guidance recommends muscle-mass assessment in at-risk populations. NHS DEXA capacity is available for osteoporosis, and some CCGs extend to muscle-mass assessment. Geriatric assessments in NHS frailty pathways routinely include SARC-F screening questionnaire.',
        links: [{ label: 'NICE – Older People Multimorbidity', url: 'https://www.nice.org.uk/guidance/ng56', comment: 'NICE guidance recommending functional assessment including muscle mass in high-risk older adults' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: 3,
        text: 'No national population-level sleep apnoea screening programme. NICE Clinical Guideline provides evidence-based referral pathways. NHS provides funded home sleep testing on clinical referral. STOP-BANG and Epworth questionnaires are embedded in primary care pathways. NHS Accelerated Access Collaborative is piloting AI-based OSA triage.',
        links: [{ label: 'NICE – CPAP for OSA', url: 'https://www.nice.org.uk/guidance/ta139', comment: 'NICE guidance on CPAP for OSA — funded pathway via GP referral' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 4,
        text: 'UK National Screening Committee (UK NSC) is a world benchmark for evidence-based rapid screening evaluation. UK NSC conducts reviews on a rolling basis and can recommend policy changes within 12–18 months for priority items. Horizon-scanning is systematic. NHS pilots can be commissioned rapidly through the Accelerated Access Collaborative.',
        links: [
          { label: 'UK National Screening Committee', url: 'https://www.gov.uk/government/organisations/uk-national-screening-committee', comment: 'UK NSC — world benchmark; rolling horizon-scan programme; 12–18 month evaluation cycle for priority topics' },
          { label: 'NHS Accelerated Access Collaborative', url: 'https://www.england.nhs.uk/aac/', comment: 'NHS rapid pathway for adopting innovative health technologies' },
        ],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 4,
        text: 'UK Biobank uses opt-in model but achieved 500,000 participants. NHS-linked cohort studies (CPRD, HES, Understanding Society) use soft opt-out approaches. NHS Genomics Medicine Service collects samples from NHS patients under broad consent with opt-out available. The combination of large opt-in research cohorts and NHS clinical data under broad consent creates near-optimal coverage at lower participation friction than many countries.',
        links: [{ label: 'UK Biobank Participation', url: 'https://www.ukbiobank.ac.uk/enable-your-research/about-our-data/imaging-data', comment: 'UK Biobank — 500k participants under opt-in broad research consent; linked to NHS records' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 4,
        text: 'UK Biobank Repeat Assessment collected ~20,000 participants at 9-year follow-up with full multi-omic resampling (proteomics, metabolomics, epigenetics). Imaging visit (brain MRI, DEXA, cardiac MRI, carotid ultrasound) completed for 100,000 participants with 5-year recall. Third visit planned. CPRD provides continuous GP record linkage. The longitudinal depth for a large cohort is unmatched globally.',
        links: [{ label: 'UK Biobank Repeat Assessment', url: 'https://www.ukbiobank.ac.uk/enable-your-research/about-our-data/repeat-visits', comment: 'UK Biobank repeat assessment — 9-year full multi-omic resampling for 20k participants' }],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 5,
        text: 'UK Biobank has delivered: WGS (500k), WES (500k), Olink proteomic panel (2,923 proteins, 54k participants), NMR metabolomics (118 metabolite measures, all 500k), methylation array (epigenetics, ~5k; clock expansion underway), physical function tests (grip, gait, lung function), MRI (brain, cardiac, abdominal, DEXA — 100k+), accelerometry (87,000+), retinal imaging and fundus photography. This is the world\'s most comprehensive multi-omic aging dataset in a general population.',
        links: [{ label: 'UK Biobank Data Showcase', url: 'https://biobank.ndph.ox.ac.uk/showcase/', comment: 'UK Biobank data showcase — full inventory of 5,000+ available data fields including multi-omic panels' }],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 5,
        text: 'UK Biobank is fully linked to: NHS hospital episode statistics (HES), primary care GP records (EMIS/TPP), death registry, cancer registry, mental health services data, primary care prescriptions, COVID test records, and accelerometry. Bidirectional linkage enables both discovery (biomarker → disease) and reverse causation analysis. CPRD provides 30+ years of longitudinal primary care data for matched controls. Real-time NHS linkage updates are performed annually.',
        links: [{ label: 'UK Biobank NHS Linkage', url: 'https://biobank.ndph.ox.ac.uk/showcase/label.cgi?id=100313', comment: 'UK Biobank NHS record linkage — HES, GP records, death registry, cancer registry all linked' }],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 5,
        text: 'UK Biobank operates a streamlined international researcher access process: applications reviewed in 4–6 weeks, no geographic restriction, researchers from 100+ countries have accessed data. Approved researchers get direct access to de-identified datasets via Biobank TRE, or managed download for approved analysis. Data Access Committee decisions are publicly logged for transparency. 30,000+ registered researchers globally. UK Biobank is cited as the gold standard for open population biobank access.',
        links: [{ label: 'UK Biobank Access', url: 'https://www.ukbiobank.ac.uk/enable-your-research/apply-for-data', comment: 'UK Biobank researcher access — international, open, 4–6 week review; 30k+ global researchers' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 5,
        text: 'UK is a global leader in trial efficiency through register-based randomised designs. RECOVERY trial randomised 44,000 patients with near-zero marginal cost using NHS routine care data and existing consent frameworks. ASPIRIN trial, TIPS-3 (India-UK), and multiple CPRD-embedded trials demonstrate complete NHS integration. Clinical Practice Research Datalink enables passive outcome capture without patient contact. NIHR Clinical Research Network (14 regional networks) can enrol patients at 900+ NHS sites.',
        links: [{ label: 'NIHR Clinical Research Network', url: 'https://www.nihr.ac.uk/explore-nihr/infrastructure/clinical-research-network.htm', comment: 'NIHR CRN — 14 networks, 900+ NHS sites, enables large-scale efficient preventive trial enrolment' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 5,
        text: 'MHRA and NICE both formally accept RWE from register-based and pragmatic NHS trials. NICE Real-World Evidence Framework (2022) provides guidance on RWE standards for HTA. MHRA has explicitly accepted NHS RWE from CPRD and HES in label extension applications. UK Medical Research Council sponsors pragmatic NHS-embedded trials that regulatory agencies treat as primary evidence. OpenSAFELY analyses have informed MHRA regulatory decisions during COVID.',
        links: [{ label: 'NICE RWE Framework', url: 'https://www.nice.org.uk/about/what-we-do/our-programmes/nice-guidance/nice-technology-appraisals/nice-real-world-evidence-framework', comment: 'NICE RWE Framework 2022 — defines standards for RWE in HTA and regulatory submissions' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'UK-based trials increasingly pre-specify functional aging composites (SPPB, frailty index) as secondary endpoints. TAME trial (metformin for aging) has international steering committee with UK representation and uses validated aging composites. UK Biobank-linked trial analyses include epigenetic clock secondary endpoints. GrimAge and DunedinPACE were validated on UK cohorts and are appearing in UK-sponsored aging trial protocols. Regulatory-accepted primary biological age endpoint in a registration trial remains the next milestone.',
        links: [{ label: 'TAME Trial UK Involvement', url: 'https://www.afar.org/tame-trial', comment: 'TAME trial — international aging prevention trial with UK academic involvement and aging composite endpoints' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 3,
        text: 'UK clinical trials of aging-targeting agents: senolytic dasatinib+quercetin trials at Cambridge and UCL; NAD precursor trials; rapamycin immune aging study at Edinburgh (TRIIM-UK equivalent); omega-3 and exercise synergy studies. CRUK-funded prevention trials relevant to aging biology. UK is a major recruitment site for international aging prevention trials. No national programme specifically funding aging-agent prevention trials at Phase III scale yet.',
        links: [{ label: 'UCL Senolytic Trial', url: 'https://www.ucl.ac.uk/', comment: 'UCL and Cambridge running UK academic senolytic trials — Phase I/II of aging prevention agents' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 4,
        text: 'NIHR Clinical Research Network provides national coordination infrastructure across all 14 NHS regions. MRC Trials Unit, UCL CTU, and Birmingham CTU specialise in aging prevention trial methodology. UK Dementia Research Institute coordinates dementia prevention trials. Longevity Science Panel has proposed a national aging trial coordination body. The infrastructure for national coordination exists; a formal aging-specific mandate is the remaining step.',
        links: [{ label: 'NIHR Trials Infrastructure', url: 'https://www.nihr.ac.uk/explore-nihr/infrastructure/clinical-research-network.htm', comment: 'NIHR CRN — national trial coordination infrastructure across 14 NHS regional networks' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 4,
        text: 'NIHR "Be Part of Research" is a national platform matching NHS patients to open trials via GP and hospital systems. Automated EHR-based eligibility matching is implemented in multiple NHS Trusts and expanding nationally through the NIHR CRN. RECOVERY and other NHS-embedded trials demonstrated near-zero friction enrolment via NHS care pathway integration.',
        links: [
          { label: 'NIHR Be Part of Research', url: 'https://bepartofresearch.nihr.ac.uk/', comment: 'National NHS patient-trial matching platform' },
        ],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 2,
        text: 'MHRA does not formally recognise aging itself as an indication. Organ-specific aging indications (frailty, sarcopenia, age-related macular degeneration) are accepted and have approved products. NICE and MHRA have both acknowledged that the regulatory framework for systemic aging prevention requires development. Longevity Science Panel has made this a formal recommendation to government. The policy trajectory is toward recognition, but clinical approval for systemic aging as primary indication is not yet established.',
        links: [{ label: 'MHRA Innovation Aging', url: 'https://www.gov.uk/guidance/innovative-licensing-and-access-pathway', comment: 'MHRA ILAP — entry point for aging-adjacent indications; systemic aging indication not yet defined' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'MHRA accepts frailty indices, SPPB, grip strength, and 6-minute walk as primary endpoints in geriatric indications. Multi-domain functional composites accepted for sarcopenia and frailty. Biological age surrogates (epigenetic clocks, proteomic age) accepted as secondary endpoints in UK-sponsored clinical trials. For primary registration approval, biological age surrogates are in regulatory dialogue but not yet formally qualified. UK Biobank-derived normative data is referenced in discussions.',
        links: [{ label: 'MHRA Geriatric Endpoints', url: 'https://www.gov.uk/guidance/regulatory-decision-making-and-scientific-advice', comment: 'MHRA scientific advice — functional aging composites accepted as primary for geriatric indications' }],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 3,
        text: 'NICE has published methodological guidance acknowledging that standard QALY may not adequately capture the value of healthy aging and prevention. NICE\'s Highly Specialised Technologies framework allows higher cost-effectiveness thresholds for rare diseases with aging components. The Office for National Statistics has developed Healthy Life Expectancy as a national metric. NICE\'s Value Assessment Framework review (2022) included healthspan as a dimension. A validated HTA model for longevity intervention value is in development but not yet formally adopted.',
        links: [{ label: 'NICE Value Assessment Framework', url: 'https://www.nice.org.uk/about/what-we-do/our-programmes/nice-guidance/nice-technology-appraisals/changes-to-technology-appraisal-guidance', comment: 'NICE methodology review — includes healthspan valuation as emerging dimension in HTA framework' }],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 3,
        text: 'NICE provides the UK\'s primary coverage mechanism through technology appraisals. NICE approved multiple aging-related preventive agents (statins for broad prevention, bone-targeted agents for osteoporosis prevention). NHS Commissioning Policy enables coverage for NICE-approved preventive agents. A conditional coverage pilot (Coverage with Evidence Development) allows provisional NHS reimbursement for aging prevention agents under observational follow-up. No specific aging-prevention coverage pathway exists yet but the infrastructure is present.',
        links: [{ label: 'NICE Technology Appraisals', url: 'https://www.nice.org.uk/about/what-we-do/our-programmes/nice-guidance/nice-technology-appraisals', comment: 'NICE TA process — primary route for NHS coverage of aging-prevention medicines' }],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 3,
        text: 'ILAP (Innovative Licensing and Access Pathway) is available for aging medicine compounds and has been used for aging-adjacent indications. Breakthrough Therapy equivalent (PRIME in EMA, Promising Innovative Medicine in MHRA) has been granted to some age-related disease programmes. A specific expedited pathway for geroprotectors with aging biology endpoints is not yet established. MHRA Innovation Office actively advises aging medicine developers on optimising use of existing expedited tools.',
        links: [{ label: 'MHRA PIM Designation', url: 'https://www.gov.uk/guidance/promising-innovative-medicine-pim-designation', comment: 'MHRA Promising Innovative Medicine — designation equivalent to Breakthrough Therapy; available for aging medicines' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 5,
        text: 'NHS England\'s Secure Data Environment (SDE) programme provides tiered researcher access to NHS data through a single-application process. UK Biobank applications are reviewed in 4–6 weeks with a standardised online form. OpenSAFELY allows near-instant analysis within a federated environment for pre-approved institutions. CPRD has a fast-track research application. The UK has invested heavily post-COVID in streamlining health data access — it is now among the fastest and most accessible systems globally.',
        links: [{ label: 'NHS Secure Data Environment', url: 'https://digital.nhs.uk/services/secure-data-environment-service', comment: 'NHS SDE — tiered access to NHS data; single application; multiple security levels for different research needs' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 5,
        text: 'NHS data is linked via NHS Number (a unique patient identifier held by every registered patient) across: GP records (CPRD: 60M+ patients), hospital episodes (HES: all NHS inpatient, outpatient, A&E since 1989), cancer registry, mental health services (MHSDS), death records (ONS), prescriptions, COVID, and biobank data. UK Biobank provides full NHS linkage. OpenSAFELY enables cross-GP-system queries without data leaving practice. Passive wearable and app data being integrated (Apple Watch via NHS App).',
        links: [{ label: 'NHS Data Linkage via NHS Number', url: 'https://digital.nhs.uk/data-and-information/data-tools-and-services/data-services/linked-data', comment: 'NHS data linkage — NHS Number enables deterministic cross-domain linkage across all NHS datasets' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 5,
        text: 'OpenSAFELY (code-to-data model: analysis runs inside NHS without data leaving) is considered the world\'s gold standard for privacy-preserving research on identifiable health data. NHS Secure Data Environments use Five Safes framework. CPRD provides access to pseudonymised data via secure analysis environments. Synthetic data generation is funded via NHS AI Lab. HDR UK (Health Data Research UK) operates federated compute infrastructure across all four nations.',
        links: [{ label: 'OpenSAFELY', url: 'https://www.opensafely.org/', comment: 'OpenSAFELY — code-to-data model; analysis inside NHS without raw data movement; world-leading privacy framework' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 5,
        text: 'NHS AI Lab provides infrastructure and governance for AI use on NHS data. NHS England\'s Artificial Intelligence in Health and Care framework defines AI research tiers and fast-track access for registered AI labs. HDR UK\'s HDRUK-AIDA programme (AI in health data analysis) supports GPU-based NHS dataset training. UKRI ExaHEAL programme funds national AI infrastructure for health data. The AI Safety Institute has a health data track. UK is the most advanced large democracy for AI use on population health data.',
        links: [{ label: 'NHS AI Lab', url: 'https://transform.england.nhs.uk/ai-lab/', comment: 'NHS AI Lab — funds AI health data infrastructure and fast-track research access for AI applications' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 4,
        text: 'UK maintains GDPR-equivalent adequacy with the EEA (UK GDPR). Data sharing agreements with USA (under UK-US Data Access Agreement for scientific research). UK Biobank operates globally — data is shared with researchers in 100+ countries under data access agreements that do not restrict nationality. UK participates in EOSC (European Open Science Cloud) federated compute framework. Post-Brexit some friction with EU data transfer, but adequacy decision maintains legal basis for most research sharing.',
        links: [{ label: 'UK GDPR Adequacy', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/', comment: 'ICO guidance on UK GDPR international transfers — adequacy decisions with EEA and other jurisdictions' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 4,
        text: 'NHS primary care is essentially 100% electronic — UK has one of the highest GP EHR coverage rates globally (EMIS Health and TPP SystmOne cover ~99% of GP practices in England). Secondary care EHR rollout is progressing under NHS\'s Global Digital Exemplar programme and NHS SPINE. NHS App provides patients with access to their GP records. Structured coding (Read codes → SNOMED CT) is mandated. Secondary care interoperability lags primary — some trusts still use paper or legacy systems.',
        links: [{ label: 'NHS Digital Maturity', url: 'https://digital.nhs.uk/data-and-information/publications/statistical/mi-digital-maturity-assessment', comment: 'NHS Digital Maturity Assessment — tracks EHR adoption across NHS trusts' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 4,
        text: 'SNOMED CT is the mandated clinical terminology for NHS England (NHS Digital mandate since 2020). LOINC is adopted for laboratory results. ICD-10 for hospital episode coding (transitioning to ICD-11). FHIR R4 is the mandated interoperability standard for NHS APIs (NHS API platform). Compliance is high in primary care; secondary care trusts in migration. SNOMED CT International maintains its headquarters in the UK — the UK is a global leader in clinical terminology.',
        links: [{ label: 'NHS Data Standards', url: 'https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions', comment: 'NHS information standards — SNOMED CT mandated; FHIR R4 NHS API platform mandated' }],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 5,
        text: 'UK national registries are globally comprehensive: National Cancer Registration and Analysis Service (NCRAS), NHS Hospital Episode Statistics (1989-present), Civil Registration Deaths, NHS Prescription Services, National Diabetes Audit, National Hip Fracture Database, Mental Health Services Dataset, Learning Disabilities Mortality Review, and 60+ other condition-specific registries. All are FHIR-enabled and most are linkable via NHS Number. NHS-wide registry coverage is the most complete in the world for a population of this size.',
        links: [{ label: 'NCRAS Cancer Registry', url: 'https://www.ncin.org.uk/', comment: 'National Cancer Registration and Analysis Service — complete national cancer registry since 1971, FHIR-linked' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 4,
        text: 'CPRD data updated monthly for primary care; HES data available with 3–4 month lag for hospital episodes; cancer registry has 6-month lag for full validation. NHS SPINE updates in near-real-time for prescription events. OpenSAFELY provides weekly data updates for approved researchers. COVID demonstrated that NHS can achieve near-real-time research data linkage — the CPRD COVID rapid cohort had data available within 2 weeks of record creation.',
        links: [{ label: 'CPRD Data Updates', url: 'https://www.cprd.com/data', comment: 'CPRD — monthly primary care data refresh; fastest research cohort data in Europe' }],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 5,
        text: 'UK has the world\'s most advanced computable phenotyping infrastructure. HDR UK Phenotype Library contains 2,000+ validated phenotyping algorithms for NHS data (all published, SNOMED-CT-mapped, version-controlled). CALIBER programme developed 300+ validated phenotypes used globally. OpenSAFELY provides self-service phenotype queries. CPRD GOLD and AURUM provide pre-built cohort definitions. Any researcher can define a phenotype query and retrieve a cohort from 60M+ patients without manual chart review.',
        links: [{ label: 'HDR UK Phenotype Library', url: 'https://phenotypes.healthdatagateway.org/', comment: 'HDR UK Phenotype Library — 2,000+ validated NHS phenotyping algorithms; open access; world-leading' }],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 4,
        text: 'UK adopted OMOP CDM as standard for NHS Secure Data Environments (NHS SDE). HDR UK national datasets are mapped to OMOP. All UK Biobank data is available in OMOP-compatible format. SNOMED CT is mandated in NHS — shared with research datasets without manual mapping. UK participated in EHDEN (European Health Data Evidence Network) OMOP harmonisation — UK data is interoperable with European research datasets.',
        links: [{ label: 'NHS SDE OMOP Mapping', url: 'https://digital.nhs.uk/services/secure-data-environment-service', comment: 'NHS SDE programme uses OMOP CDM as standard — enables cross-dataset research joins' }],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 5,
        text: 'Research cohort linkage to NHS registries is routine in UK. UK Biobank participants are automatically linked to all NHS records via NHS Number at enrolment — no additional consent step required. Understanding Society, EPIC-Norfolk, Whitehall II, and dozens of other UK cohorts have standardised NHS linkage. NIHR BioResource provides cohort-to-EHR linkage infrastructure for clinical trials. Lifelong longitudinal follow-up through NHS is the default, not the exception.',
        links: [{ label: 'UK Biobank NHS Linkage', url: 'https://biobank.ndph.ox.ac.uk/showcase/label.cgi?id=100313', comment: 'UK Biobank NHS linkage — automatic, lifelong linkage to all NHS data sources for all 500k participants' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 4,
        text: 'UKRI mandates FAIR data deposition for all publicly funded research (Data Management Plans required). HDR UK Health Data Gateway provides FAIR-compliant catalogue of UK health datasets with persistent DOIs, standardised metadata, and machine-readable access. BBSRC and MRC require data sharing in approved repositories within 12 months of publication. UK Open Access mandate (Wellcome, UKRI) is fully in force. UK compliance rates among the highest in the world.',
        links: [{ label: 'HDR UK Health Data Gateway', url: 'https://www.healthdatagateway.org/', comment: 'HDR UK Data Gateway — FAIR-compliant catalogue of UK health research datasets; open metadata' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 4,
        text: 'MHRA Yellow Card system collects ADR reports and MHRA publishes regular signal summaries. NHS CPRD is used for active pharmacovigilance: MHRA commissions CPRD studies to investigate signals identified from Yellow Card. OpenSAFELY was used to generate real-time pharmacovigilance evidence (AstraZeneca vaccine VITT) that directly informed regulatory decisions within days. This signal-to-research-to-regulation loop is among the fastest demonstrated globally.',
        links: [{ label: 'MHRA Yellow Card', url: 'https://yellowcard.mhra.gov.uk/', comment: 'MHRA Yellow Card — national ADR reporting; integrated with CPRD for active pharmacovigilance studies' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 4,
        text: 'UKRI and Wellcome require open access publication (APC-funded) for all grants. Pre-registration is required for NIHR-funded trials on ISRCTN. NIHR journals (BMJ Open, Trials) mandate full data sharing. UKRI Concordat on Open Research Data mandates data + code sharing for funded research. UK Research Integrity Office (UKRIO) provides compliance oversight. Compliance audit linked to future funding is active. UK has one of the strongest open science mandates in the world.',
        links: [{ label: 'UKRI Open Research', url: 'https://www.ukri.org/what-we-do/supporting-healthy-research-and-innovation-culture/open-research/', comment: 'UKRI open research mandate — open access, data sharing, and code sharing required for funded research' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 4,
        text: 'MHRA routinely accepts foreign trial data from ICH E5-compliant countries as primary evidence. Project Orbis (MHRA, FDA, Health Canada, TGA, Swissmedic) involves concurrent multi-regulator review of oncology submissions — UK accepts co-review outcomes. Post-Brexit MHRA has maintained and expanded international data acceptance, explicitly stating it will not require UK-only data replication. Bilateral agreements with FDA, EMA, Health Canada, and TGA formalise data recognition.',
        links: [{ label: 'Project Orbis', url: 'https://www.gov.uk/guidance/project-orbis', comment: 'Project Orbis — MHRA simultaneous international review; mutual acceptance of trial data from multiple regulators' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 5,
        text: 'MHRA is a co-founding and active participant in Project Orbis (oncology joint review), ICMRA (international coalition), and Access Consortium (with TGA, Swissmedic, Health Canada, Singapore HSA). MHRA chairs ICMRA working groups on gene therapy and rare disease. Post-Brexit, MHRA has actively deepened bilateral review relationships to maintain international standing. UK is considered a reference regulator globally alongside FDA and EMA.',
        links: [{ label: 'MHRA Access Consortium', url: 'https://www.gov.uk/government/publications/access-consortium', comment: 'Access Consortium — MHRA joint review with TGA, Swissmedic, Health Canada, Singapore HSA' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'MHRA is an ICH founding member and active standard-setter. UK experts chair ICH Expert Working Groups on topics including E9(R1) (estimands), E17 (multi-regional trials), and M13 (bioequivalence). MHRA contributed core expertise to VICH, ICH, and ISO standards. Post-Brexit, MHRA has adopted all existing ICH guidelines and actively participates in new guideline development. UK is a global standard-setting authority for pharmaceutical regulation.',
        links: [{ label: 'MHRA ICH Participation', url: 'https://www.gov.uk/guidance/the-medicines-and-healthcare-products-regulatory-agency-mhra-and-the-international-council-for-harmonisation-of-technical-requirements-for-pharmaceuticals-for-human-use-ich', comment: 'MHRA ICH — founding member; active in standard-setting across multiple guidelines' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'MHRA\'s Reliance Route allows UK approval based on a foreign marketing authorisation from a trusted regulator (FDA, EMA, Health Canada, TGA, Swissmedic, Japan PMDA). Under the Reliance Route, MHRA review is abbreviated — typically 67-day assessment clock rather than full assessment. For ATMP (gene and cell therapy), MHRA reliance on EMA approval is routinely granted. UK was the first to use this pathway post-Brexit, approving multiple products faster than any EU member state.',
        links: [{ label: 'MHRA Reliance Route', url: 'https://www.gov.uk/guidance/regulatory-reliance-routes', comment: 'MHRA Reliance Route — abbreviated UK approval based on trusted foreign regulator approval' }],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 4,
        text: 'UK has bilateral MRAs covering GMP inspection with EU, USA, Canada, Australia, New Zealand, Japan, and Switzerland. Project Orbis and Access Consortium provide de facto mutual recognition for oncology review outcomes. Post-Brexit, UK negotiated standalone MRAs to replace EU agreements. MHRA GMP inspections are accepted by FDA and EMA — a high degree of bilateral trust. Full multilateral approval mutual recognition (à la EU mutual recognition) is not in place but bilateral agreements broadly compensate.',
        links: [{ label: 'MHRA GMP Mutual Recognition', url: 'https://www.gov.uk/guidance/good-manufacturing-practice-and-good-distribution-practice', comment: 'MHRA GMP MRA — bilateral GMP inspection recognition with FDA, EMA countries, TGA, Health Canada' }],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 4,
        text: 'UK has national BSL-3 capacity at multiple university and public health institutions: PHE Porton Down (BSL-4, one of only 3 in Europe), London School of Hygiene & Tropical Medicine, and multiple BSL-3 centres. UK Health Security Agency manages shared access to high-containment facilities. Academic researchers can access BSL-3 via UKCRIC network. UK is above European average in containment infrastructure density, with some shared-access protocols for aging-adjacent pathogen research.',
        links: [{ label: 'UK BSL-4 at Porton Down', url: 'https://www.gov.uk/government/organisations/ukhsa-porton-down', comment: 'UKHSA Porton Down — UK\'s BSL-4 facility; one of 3 in Europe; shared access programme exists' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 4,
        text: 'UK has an established and growing CDMO sector for ATMPs (gene and cell therapy): Lonza Slough, Oxford Biomedica, Autolus (now owned by Autolus Therapeutics), Cobra Biologics. Academic GMP facilities at Catapult Cell and Gene Therapy (CGT Catapult, Stevenage) provide publicly accessible GMP manufacturing for academic groups at clinical trial grade. UK is one of Europe\'s top 3 ATMP manufacturing locations. CGT Catapult specifically supports aging-adjacent gene therapy development.',
        links: [{ label: 'CGT Catapult', url: 'https://ct.catapult.org.uk/', comment: 'Cell and Gene Therapy Catapult — UK\'s public GMP manufacturing facility; accessible to academic researchers' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'UKRI funds JASMIN (shared scientific data analysis facility), ARCHER2 (world-class HPC for research), and National Genomics Research and Healthcare Network compute clusters. The UK AI Research Resource (AIRR) provides access to frontier GPU compute for AI research including genomics workloads. Wellcome Sanger Institute has dedicated high-throughput compute for population-scale genomics. NHS AI Lab provides cloud compute infrastructure for health data AI workloads. The NHS Federated Data Platform (FDP) adds distributed compute capability.',
        links: [{ label: 'UK AIRR', url: 'https://www.ukri.org/what-we-do/creating-people-and-skills/frontier-research/frontier-research-guarantees/uk-ai-research-resource/', comment: 'UK AI Research Resource — national GPU compute infrastructure for AI and genomics workloads' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 5,
        text: 'Wellcome Sanger Institute is one of the world\'s leading genome sequencing centres and processes hundreds of thousands of samples per year. UK Biobank WGS completed (500k whole genomes). Genomics England completed 300k WGS (100,000 Genomes Project + COVID-19 NBS + rare disease). NHS Genomics Medicine Service is sequencing all rare disease and cancer patients as part of routine care — target 500k WGS/year by 2025. UK is #2 globally in public-sector sequencing capacity after US.',
        links: [{ label: 'Wellcome Sanger Institute', url: 'https://www.sanger.ac.uk/', comment: 'Sanger Institute — world-leading sequencing capacity; key partner in 500k UK Biobank WGS' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 4,
        text: 'UK Medical Research Council maintains the Harwell Institute for Functional Genomics (mouse aging models), Mary Lyon Centre (MRC mouse breeding), and the Wellcome Centre for Human Genetics (mouse phenotyping). Institute of Healthy Ageing (UCL) maintains C. elegans aging platforms. The MRC National Mouse Genetics Network provides coordinated access. UK aging mouse research is globally recognised — lifespan interventions including rapamycin, senolytics, and dietary restriction have been systematically studied in MRC-maintained colonies.',
        links: [{ label: 'MRC Harwell Institute', url: 'https://www.har.mrc.ac.uk/', comment: 'MRC Harwell — national mouse genetics and aging model organism platform; shared access for academic researchers' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 5,
        text: 'UK is a founding and leading participant in major international aging consortia: CHARGE (genome-wide aging associations), GIANT (anthropometric aging traits), UKBB-based consortia (hundreds of international collaborations), IAGG (International Association of Geriatrics), and Ageing + You (EU-UK collaboration on dementia). UK researchers lead or co-lead the largest GWAS meta-analyses for aging traits globally. UK Biobank is the backbone dataset for the majority of international aging genomics consortia.',
        links: [{ label: 'CHARGE Consortium', url: 'https://www.chargeconsortium.com/', comment: 'CHARGE Consortium — major international aging genomics consortium; UK is a founding and leading participant' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 5,
        text: 'UK Biobank has established the global standard for population biobank data sharing: international access, standardised application process, 30,000+ approved researchers in 100+ countries. CPRD data sharing agreements extend to multiple international research consortia. OpenSAFELY\'s federated model is being adopted internationally (OpenSAFELY-US, OpenSAFELY-EMIS Global). UK participates in Global Alliance for Genomics and Health (GA4GH) governance frameworks. UK is a net exporter of data governance frameworks internationally.',
        links: [{ label: 'GA4GH UK Participation', url: 'https://www.ga4gh.org/', comment: 'Global Alliance for Genomics and Health — UK researchers and institutions lead multiple working groups' }],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 4,
        text: 'Post-Brexit, UK regained access to Horizon Europe as an associated country from 2024. MRC-NIH bilateral research funding programme is active. UK-Canada, UK-Australia, and UK-Japan joint funding programmes exist through UKRI. Wellcome Trust co-funds international aging consortia with Gates Foundation and NIH. UK researchers are eligible for ERC grants as associated country nationals. The Horizon re-association restores UK access to one of the world\'s largest research funding pools.',
        links: [{ label: 'UK Horizon Europe Association', url: 'https://www.gov.uk/government/publications/uk-association-to-horizon-europe', comment: 'UK-Horizon Europe association from 2024 — restores full access to EU research funding for UK researchers' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 5,
        text: 'UK institutions set the global agenda in aging biology: MRC LMB (protein quality control, proteostasis), Babraham Institute (epigenetics of aging), UCL Institute of Healthy Ageing (IIS pathway, C. elegans aging), Sanger Institute (genomics of aging), Cambridge Ageing Biology group (lifespan genetics). UK researchers hold editorial positions in Nature Aging, Aging Cell, eLife, GeroScience. Peter Lansdorp (telomeres), Aubrey de Grey (originally UK-based), Linda Partridge, David Gems are globally recognised field leaders from UK institutions.',
        links: [{ label: 'Nature Aging UK Editorial', url: 'https://www.nature.com/nataging/', comment: 'Nature Aging — UK editors and authors disproportionately represented; field-defining papers routinely from UK institutions' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 4,
        text: 'UK Intellectual Property Office is a member of the European Patent Convention and participates in PCT. UK-EPO reciprocal recognition allows UK patents to be converted to European patents efficiently. UKIPO participated in the AI and Life Sciences Patent Thematic Report (2023) — first to provide specific guidance on AI-assisted aging drug discovery patents. Lambert Agreement templates facilitate international IP cooperation in academic-industry consortia. UK biotech IP for aging therapies (Juvenescence, Decidous Therapeutics) has been internationally licensed.',
        links: [{ label: 'UKIPO Life Sciences Patents', url: 'https://www.gov.uk/government/publications/artificial-intelligence-and-intellectual-property-call-for-views/artificial-intelligence-and-intellectual-property-call-for-views', comment: 'UKIPO — active in AI + life sciences IP guidance; PCT and EPC member; international patent cooperation' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 4,
        text: 'NHS is the most trusted public institution in the UK (Ipsos Veracity Index consistently ranks NHS nurses #1). Trust in science is high: UK Science Media Centre and Wellcome Monitor (2023) report 77% of UK adults say they trust scientists. COVID vaccine rollout — UK\'s fastest among large nations — demonstrated public willingness to participate in national health programmes. However, trust in government handling of health data has been eroded by GPDPR (GP Data programme) controversy (2021) — requiring careful re-building for data access programmes.',
        links: [{ label: 'Wellcome Global Monitor 2023', url: 'https://wellcome.org/reports/wellcome-global-monitor/2020', comment: 'Wellcome Monitor — 77% of UK adults trust scientists; NHS trust scores consistently highest among institutions' }],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 4,
        text: 'UK public and media discourse on longevity science is sophisticated and broadly positive. BBC, Guardian, and Times Science sections regularly cover aging biology research as aspirational rather than dystopian. UK Biobank\'s 500k participants are arguably the world\'s largest single expression of public willingness to contribute to longevity research. The Longevity Science Panel\'s prominence in public discourse signals political mainstream acceptance. Religious and ethical objections to life extension are a minority position in UK discourse.',
        links: [{ label: 'UK Longevity Science Panel Public Reports', url: 'https://www.longevitysciencepanel.co.uk/', comment: 'UK Longevity Science Panel — publicly prominent, mainstream political coverage; signals government and public acceptance' }],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 3,
        text: 'UK government has established the Longevity Science Panel (2022), published an Ageing Society Grand Challenge, and committed to the Healthy Ageing Industrial Strategy. UKRI Healthy Ageing priority has cross-party support. However, unlike China\'s explicit Five-Year Plan targets or Singapore\'s Healthy Longevity Initiative, UK political will is not yet expressed in quantified biological age or healthy lifespan targets. NHS Long Term Plan mentions healthy ageing as a priority but lacks specific longevity science milestones. The political infrastructure is present; the ambition level falls short of world-leading.',
        links: [{ label: 'UK Ageing Society Grand Challenge', url: 'https://www.gov.uk/government/publications/ageing-society-grand-challenge-industry-forum', comment: 'UK government Ageing Society Grand Challenge — includes healthy ageing as an industrial strategy priority' }],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 3,
        text: 'ASA (Advertising Standards Authority) is one of the most active advertising regulators globally for health claims and proactively challenges unsubstantiated anti-aging claims in cosmetics, supplements, and clinics. MHRA enforces the drug/cosmetics borderline strictly — products claiming systemic anti-aging effects are classified as unlicensed medicines. The "longevity clinic" market (IV drips, NAD+, hormone therapy) has grown rapidly and the GMC has issued warnings, but systematic practitioner sanctions remain limited.',
        links: [
          { label: 'ASA – Health & Beauty Claims Rulings', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html', comment: 'ASA proactive enforcement — rulings regularly remove unsubstantiated anti-aging claims' },
          { label: 'MHRA – Borderline Products', url: 'https://www.gov.uk/guidance/borderline-products', comment: 'MHRA borderline product guidance — systemic anti-aging claims trigger drug classification' },
        ],
      },
    },
  },
}

export default uk
