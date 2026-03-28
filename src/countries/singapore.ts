import {
  Country, CountryData, ScreeningLevel,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField, SocietalField,
  ResearcherImmigrationClaim, ClinicianImmigrationClaim, ResearchTrainingClaim, ClinicianAgingTrainingClaim, ClinicianScientistClaim,
  ResearchFundingClaim, GeneEditingClaim,
  BreakthroughAgencyClaim, AdaptiveLicensingClaim, TrialDesignClaim, RegulatorySandboxClaim, AgingEndpointClaim,
  PopulationScreeningClaim, BiomarkerCollectionClaim, PreventiveTrialsClaim, GeroEndpointsClaim,
  OpenDataClaim, InteroperabilityClaim, ResearchClinicalClaim,
  RegulatoryHarmonizationClaim, SharedPhysicalInfraClaim, IntlResearchNetworkClaim,
  SocialReadinessClaim, PoliticalReadinessClaim,
} from '../schema'

const singapore: CountryData = {
  country: Country.SINGAPORE,

  metrics: {
    lifeExpectancy: { value: 82.9, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 73.6, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.24, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 5,
        text: 'Singapore offers the Employment Pass (EP) for professionals and the Overseas Networks & Expertise (ONE) Pass (2023), purpose-built for top global talent — no employer sponsorship required, covers entire family, renewable after 5 years. The Tech.Pass provides equivalent freedom for established tech-science leaders. MOM processing is fully digitised and highly predictable. Singapore is effectively the easiest major research hub in Asia to immigrate to as a senior scientist.',
        links: [{ label: 'ONE Pass – MOM Singapore', url: 'https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass', comment: 'ONE Pass — no employer sponsor required; covers top researchers, entrepreneurs, artists' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 5,
        text: 'EP applications: 3–8 weeks. ONE Pass: 8 weeks. A*STAR-affiliated institutions can apply via fast-track channels with decisions in 2–3 weeks. MOM\'s online portal provides real-time status tracking. No legacy paper processing; fully digital end-to-end. Singapore has consistently the shortest processing times for research immigration among major Asia-Pacific science hubs.',
        links: [{ label: 'MOM EP Processing Times', url: 'https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-an-employment-pass', comment: 'MOM EP application guide — typical 3–8 week processing; A*STAR fast-track available' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 5,
        text: 'Singapore universities and A*STAR accept foreign doctoral degrees from all major international institutions without re-examination. MOM does not require credential re-verification for EP beyond degree confirmation by employer. NUS, NTU, and A*STAR have direct academic equivalence agreements with leading global institutions. No barriers for graduates from QS top-500 universities; effective instant recognition.',
        links: [{ label: 'A*STAR Research Careers', url: 'https://www.a-star.edu.sg/Scholarships/About-ASTAR-Scholarships', comment: 'A*STAR hiring — full recognition of international degrees; no re-qualification required' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 4,
        text: 'The SINGA (Singapore International Graduate Award) programme funds ~1,000 international PhD students at A*STAR research institutes with full stipend and research support, with no income threshold barrier for postdocs. EP eligibility thresholds are calibrated so postdoc salaries (SGD 4,500+) qualify comfortably. The NRF Healthy Longevity Catalyst Award includes fellowship components for early-career researchers. Singapore explicitly designs programmes to attract early-stage international scientists.',
        links: [{ label: 'SINGA Graduate Award', url: 'https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa', comment: 'A*STAR SINGA — 1,000+ international PhD scholars; aging biology featured track' }],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 4,
        text: 'Permanent residency (PR) is available after 2–3 years for EP holders; one of the fastest PR pathways in Asia. NRF and A*STAR run active researcher retention programmes — investigators who receive major grants are supported for 5–10 year tenures. The ONE Pass provides 5-year renewable status with pathways to PR. Singapore faces brain drain to higher-salary jurisdictions (US, Europe) but partially counteracts this through outstanding infrastructure and quality of life.',
        links: [{ label: 'MOM Permanent Residence', url: 'https://www.ica.gov.sg/reside/PR/apply', comment: 'ICA — PR application; EP holders eligible after 2–3 years; fast pathway vs. comparable jurisdictions' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 4,
        text: 'Singapore Medical Council (SMC) recognises medical degrees from approximately 160 approved schools across 30 countries for full registration, making it among the most open licensing frameworks in Asia. Specialists from recognised institutions can apply for full registration without re-sitting local licensing exams — a major advantage over most comparable jurisdictions. UK, US, Australian, and most EU medical degrees qualify directly.',
        links: [{ label: 'Singapore Medical Council Registration', url: 'https://www.smc.gov.sg/registration/overview', comment: 'SMC — medical registration for foreign-trained doctors; ~160 recognised schools from 30 countries' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 4,
        text: 'SMC provides detailed online guidance covering every step of foreign medical graduate registration. MOH Specialist Accreditation Board publishes transparent assessment criteria. The NHG, SingHealth, and NUHS academic medical centres all have dedicated international recruitment offices that guide clinicians through the process from pre-arrival. Outcomes are highly predictable — the process is well-documented and consistently applied.',
        links: [{ label: 'SMC Practitioner Registration Guide', url: 'https://www.smc.gov.sg/registration', comment: 'SMC — step-by-step foreign medical graduate registration guidance; English-language, clear timelines' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 4,
        text: 'Geriatric medicine specialists from recognised institutions achieve conditional registration within 2–3 months — considerably faster than the UK (12–18 months), Australia (6–12 months), or the US (18–36 months). MOH and the three academic medical centres (NUHS, SingHealth, NHG) have experienced a sustained shortage of geriatricians and actively expedite recruitment. Full registration after supervised period: additional 3–6 months.',
        links: [{ label: 'MOH Specialist Accreditation', url: 'https://www.moh.gov.sg/hpp/doctors/registration-for-medical-practitioners', comment: 'MOH — Specialist Accreditation Board; 2–3 month conditional registration for qualified specialists' }],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 3,
        text: 'Conditional registration permits supervised clinical practice in the sponsoring institution with meaningful scope — geriatricians can conduct clinics, manage inpatients, and participate in multidisciplinary teams under senior oversight. Conditional practitioners may not practise independently or at unaffiliated institutions. The supervised period (typically 6–12 months) is shorter than in most comparable jurisdictions and includes structured mentoring.',
        links: [{ label: 'SMC Conditional Registration', url: 'https://www.smc.gov.sg/registration/overview', comment: 'SMC — conditional registration scope; supervised clinical practice with senior oversight' }],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 4,
        text: 'Singapore\'s three academic medical centres (NUHS, SingHealth, NHG) have structured clinician-scientist tracks for international recruits. The A*STAR Clinician-Scientist Investigator Award (CSIA) provides salary support and protected research time for foreign clinicians in academic posts. Research and clinical work are treated as complementary rather than competing. Singapore has among the most actively managed dual-role career infrastructure in Asia for international clinician-scientists.',
        links: [{ label: 'A*STAR CSIA', url: 'https://www.a-star.edu.sg/Scholarships/for-medical-professionals/clinician-scientist-investigator-award', comment: 'A*STAR CSIA — salary support + protected research time; available to foreign clinicians in academic posts' }],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'NUS and NTU both include aging biology modules in biomedical science undergraduate programmes. Duke-NUS Medical School integrates geroscience into its pre-clinical curriculum. The NUS Centre for Healthy Longevity runs undergraduate research attachment programmes. Singapore\'s small size limits absolute numbers, but undergraduate-to-research pipeline density is high. Aging electives and final-year projects in longevity biology are available and actively promoted.',
        links: [{ label: 'NUS Centre for Healthy Longevity', url: 'https://medicine.nus.edu.sg/chl/', comment: 'NUS CHL — undergraduate research attachments in longevity biology; geroscience curriculum integration' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 3,
        text: 'NUS and NTU each produce ~1,000 PhDs per year across all disciplines. A*STAR funds ~1,000 local and international PhD students at any time via SINGA (Singapore International Graduate Award). Singapore deliberately maintains quality over quantity in PhD production. A*STAR\'s Human Aging Programme, NUS CHL, and Duke-NUS Geriatric Medicine provide dedicated aging PhD tracks with international-quality supervision and infrastructure.',
        links: [{ label: 'SINGA Graduate Award', url: 'https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa', comment: 'A*STAR SINGA — 1,000+ international PhD scholars; aging biology a featured research area' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 4,
        text: 'A*STAR International Fellowship and NUS postdoctoral programmes offer SGD 60–80k salaries — competitive in the Asia-Pacific context — with clear paths to permanent research positions and full EP immigration support. A*STAR explicitly provides transition pathways into the Singapore Biomedical Cluster for industry. Cost of living is high, moderating real-terms advantage, but conditions compare well to UK/EU postdoc positions.',
        links: [{ label: 'A*STAR International Fellowship', url: 'https://www.a-star.edu.sg/Scholarships/for-postdoctoral-researchers/astar-international-fellowship', comment: 'A*STAR IF — SGD 60–80k salary; career development; industry transition pathways included' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 4,
        text: 'SINGA provides fully funded PhD positions covering tuition, stipend, and settlement allowance for international students. A*STAR Graduate Fellowships and NUS Research Scholarships fund the vast majority of PhD students. Postdoc positions at A*STAR are salaried employment with CPF (Central Provident Fund) contributions. The RIE2025 SGD 25B allocation includes dedicated training funding. Near-universal public funding for PhD positions with competitive, structured stipends.',
        links: [{ label: 'NRF Research Innovation Enterprise 2025', url: 'https://www.nrf.gov.sg/rie2025', comment: 'RIE2025 — SGD 25B national R&D plan; dedicated training and manpower development component' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 4,
        text: 'Singapore\'s Biopolis (world-class biomedical research hub co-located with industry partners) creates exceptional industry-academia proximity. A*STAR Industry Alignment Fund co-funds PhD and postdoc positions with industry. Biomedical cluster companies (Roche, MSD, Novartis Asia hubs, Genentech) co-supervise researchers. NUS and NTU technology transfer offices actively commercialise aging research. PhD students routinely do industry rotations as part of structured programmes.',
        links: [{ label: 'Biopolis Singapore', url: 'https://www.a-star.edu.sg/biopolis', comment: 'Biopolis — co-located academic/industry biomedical campus; seamless researcher mobility between sectors' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 4,
        text: 'Geriatric Medicine is a fully recognised specialty in Singapore via the Joint Committee on Specialist Training (JCST). A formal geriatric medicine specialist track produces ~20–25 new geriatricians per year through Duke-NUS, NUS, and the three academic medical centres. Longevity medicine is emerging as a sub-specialisation. Singapore\'s aging demographic (target: 20%+ over 65 by 2030) drives sustained investment in the specialty and its prestige.',
        links: [{ label: 'Duke-NUS Geriatric Medicine', url: 'https://www.duke-nus.edu.sg/research/research-programmes/geriatric-medicine', comment: 'Duke-NUS — geriatric medicine training programme; geroscience modules and longevity research integrated' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 3,
        text: 'Duke-NUS and NUS Yong Soo Lin School of Medicine both include mandatory geriatrics rotations and emerging geroscience content. MOH Polyclinics incorporate healthy ageing and frailty screening into GP training. Aging biology (senescence, inflammaging, sarcopenia mechanisms) is integrated into Duke-NUS\'s problem-based curriculum. The integration is above the regional average but not yet placing aging mechanisms at the core of all pre-clinical training.',
        links: [{ label: 'Duke-NUS MD Programme', url: 'https://www.duke-nus.edu.sg/education/md-programme', comment: 'Duke-NUS MD — integrated geriatrics and geroscience modules; problem-based curriculum' }],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 4,
        text: 'Geriatric medicine residency in Singapore covers comprehensive geriatric assessment, frailty, dementia management, falls prevention, and rehabilitation — structured to JCST standards across SGH, Tan Tock Seng, NUH, and Khoo Teck Puat hospitals. Academic centres incorporate research training. Duke-NUS and NUS CHL provide longevity science exposure. Residents engage with the AIC community geriatrics system — gaining a full spectrum from acute to community aging care.',
        links: [{ label: 'Singapore Geriatric Society', url: 'https://www.sgs.org.sg/', comment: 'Singapore Geriatric Society — residency standards, professional development, and longevity science CPD' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 3,
        text: 'Singapore Medical Association and College of Physicians offer CME modules on healthy aging, frailty, and preventive medicine. A*STAR has run longevity science workshops for clinicians since 2022. The Healthy Ageing Programme includes CPD credit for frailty assessment training. Biological aging biomarkers are not yet a standard CME topic — coverage is good but not yet systematic or mandatory for relevant specialties.',
        links: [{ label: 'SMA CME Programmes', url: 'https://www.sma.org.sg/cme/', comment: 'Singapore Medical Association CME — includes healthy ageing and geriatric medicine modules' }],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 4,
        text: 'MOH\'s Action Plan for Successful Ageing includes explicit geriatric medicine workforce targets. AIC (Agency for Integrated Care) coordinates aging workforce strategy spanning hospital geriatricians, polyclinic physicians, and community care providers. Singapore proactively recruits internationally to fill the geriatrician gap. The MOH Healthcare Manpower Report tracks supply-demand balance with 5-year projections and funds training expansion accordingly.',
        links: [{ label: 'Action Plan for Successful Ageing', url: 'https://www.moh.gov.sg/our-healthcare-system/action-plan-for-successful-ageing', comment: 'MOH — national successful ageing plan; includes geriatric workforce expansion targets' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 4,
        text: 'Duke-NUS Medical School (MD) and NUS (MD-PhD) both offer combined clinician-scientist training programmes. Duke-NUS\'s Clinician-Scientist Pathway provides protected research time and PhD supervision during the MD programme. NUS Yong Soo Lin School offers a structured Research Track MD programme. Multiple tracks exist at different career stages (medical student, resident, junior consultant), creating flexible entry points.',
        links: [{ label: 'Duke-NUS Clinician-Scientist Pathway', url: 'https://www.duke-nus.edu.sg/research/research-programmes/clinician-scientist-programme', comment: 'Duke-NUS CSP — structured combined clinical training and PhD; protected research time built in' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 4,
        text: 'NMRC (National Medical Research Council) Clinician-Scientist Award and A*STAR CSIA provide salary support and research funding for clinician-scientists — eliminating the financial disincentive to the dual-track career. Stipends are at or near full clinical salary level. A*STAR and NMRC jointly fund ~200 active clinician-scientist positions across Singapore\'s public health clusters. No financial penalty for choosing the clinician-scientist track is the explicit design goal.',
        links: [{ label: 'NMRC Clinician-Scientist Award', url: 'https://www.nmrc.gov.sg/grants/research-training-grants/clinician-scientist-award', comment: 'NMRC CSA — full salary support; near-clinical salary compensation for dual-track career' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 4,
        text: 'NUS CHL (Centre for Healthy Longevity) provides a specific aging research track for clinician-scientists, with dedicated supervisors, laboratory infrastructure, and clinical trial capacity. Duke-NUS Geriatric Medicine programme incorporates aging biology as a flagship research domain. NMRC Strategic Research Programme for Healthy Aging funds clinician-scientist investigators specifically working on longevity mechanisms in human clinical cohorts.',
        links: [{ label: 'NUS Centre for Healthy Longevity', url: 'https://medicine.nus.edu.sg/chl/', comment: 'NUS CHL — flagship aging research hub for clinician-scientists; longevity biology and clinical trials' }],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 4,
        text: 'A*STAR CSIA provides 50–75% protected research time with salary support for clinician-scientists at Singapore\'s academic medical centres. SingHealth Duke-NUS Academic Medical Centre has a formal Clinician-Scientist Development Programme with explicit career tracks and contractual research time protections. NUHS and NHG have equivalent programmes. Research time is separately budgeted and not subject to clinical throughput pressure.',
        links: [{ label: 'A*STAR CSIA', url: 'https://www.a-star.edu.sg/Scholarships/for-medical-professionals/clinician-scientist-investigator-award', comment: 'A*STAR CSIA — 50–75% protected research time; salary support for academic clinicians' }],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 4,
        text: 'Singapore has established a coherent clinician-scientist career ladder — from resident researcher to senior principal investigator — with equivalent prestige and compensation to pure clinical or academic tracks. The three academic medical centre groups (SingHealth, NUHS, NHG) each have active clinician-scientist pipelines with dedicated track positions. MOH strategic manpower plans explicitly target growth of the clinician-scientist cohort as a national priority.',
        links: [{ label: 'SingHealth Clinician-Scientist Programme', url: 'https://www.singhealth.com.sg/research/clinician-scientist', comment: 'SingHealth — established clinician-scientist career track; comparable prestige and compensation' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 5,
        text: 'Singapore spends ~1.0% of GDP on public R&D through NRF, with total R&D at ~2.2% of GDP including industry. NRF, A*STAR, and MOH Holdings collectively provide SGD 600M+ annually in biomedical research funding. The Research, Innovation and Enterprise (RIE) 2025 plan allocated SGD 25B over 5 years. Per-researcher public funding is among the highest globally — extraordinary for a city-state of 5.9M people.',
        links: [{ label: 'NRF Research Innovation Enterprise 2025', url: 'https://www.nrf.gov.sg/rie2025', comment: 'SGD 25B allocation over 5 years — biomedical sciences as priority domain; longevity explicitly included' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 4,
        text: 'Singapore\'s biomedical research portfolio spans basic biology (A*STAR GIS, IBN, IMB), translational science (Duke-NUS, NUS CHL), clinical trials (SCRI), and health system innovation (AIC). The Healthy Longevity programme explicitly funds across all stages — from hallmark-of-aging mechanism research to clinical interventions. No single disease area dominates more than 30% of the longevity-adjacent budget; portfolio breadth is a stated government objective.',
        links: [{ label: 'A*STAR Research Entities', url: 'https://www.a-star.edu.sg/research/research-entities', comment: 'A*STAR — 14 research institutes spanning basic biology to clinical translation; aging biology distributed across portfolio' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 4,
        text: 'RIE is structured in 5-year cycles (RIE2015, RIE2020, RIE2025) with multi-year committed envelopes — insulating researchers from annual budget volatility. A*STAR research institutes are funded institutionally on long-term budgets, not grant-by-grant. NRF Investigatorship grants provide 5-year independent investigator support. Centre-level grants at NUS CHL and Duke-NUS provide 5–7 year programme stability.',
        links: [{ label: 'NRF Investigatorship', url: 'https://www.nrf.gov.sg/programmes/nrf-investigatorship', comment: 'NRF — 5-year investigatorship grants; long-term career support for top researchers' }],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 3,
        text: 'NUS, NTU, and A*STAR typically own IP from publicly funded research; InnovationQ and Exploit Technologies run structured licensing and spinout paths with defined inventor royalty sharing. Individual PIs do not own IP by default — the institution does — but practice is relatively fast and template-driven versus many peers.',
        links: [{ label: 'Exploit Technologies A*STAR', url: 'https://www.etpl.sg/', comment: 'A*STAR TTO — licensing and spinouts' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 3,
        text: 'Singapore\'s biomedical VC ecosystem is growing: Temasek, GIC-backed funds, and international longevity VCs (Longevity Vision Fund) have Singapore portfolio companies. Hummingbird Biosciences, Gero.ai (Singapore operations), and several stealth longevity biotechs are HQ\'d or have R&D in Singapore. Industry presence (Novartis, Roche, MSD Asia hubs) creates some co-funding. Ecosystem is smaller than Israel or the US but growing rapidly from a significant base.',
        links: [{ label: 'Singapore Biomedical Sciences Industry', url: 'https://www.edb.gov.sg/en/our-industries/biomedical-sciences.html', comment: 'EDB — Singapore biomedical sciences sector profile; Temasek and GIC funds active in longevity' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 4,
        text: 'The Healthy Longevity Catalyst Awards (USD 1.5M per award) explicitly fund speculative, early-stage longevity interventions — a prize structure designed to incentivise radical hypotheses rather than safe incremental advances. A*STAR\'s funding culture accepts higher failure rates than most European research councils. NRF\'s exploratory research programmes (white space grants) require applicants to take on high scientific risk. This institutional risk tolerance is unusual among government funders.',
        links: [{ label: 'Healthy Longevity Catalyst Awards', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity-catalyst-awards', comment: 'NRF — USD 1.5M prize awards for speculative longevity breakthroughs; radical hypothesis encouraged' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 4,
        text: 'Singapore\'s Bioethics Advisory Committee (BAC) framework permits somatic gene editing research and clinical trials under ethical oversight. CRISPR-based aging research is unrestricted at the somatic level. A*STAR Genome Institute of Singapore actively conducts gene editing research. HSA has a Cell, Tissue and Gene Therapy (CTGT) framework with pre-submission consultation for gene therapy products, enabling clinical translation without the regulatory paralysis seen in many EU member states.',
        links: [{ label: 'Bioethics Advisory Committee Singapore', url: 'https://www.bioethics-singapore.gov.sg/', comment: 'BAC — human biomedical research governance; permits somatic gene editing research and trials' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 3,
        text: 'HSA CTGT pre-submission consultation is available and typically completed within 3 months. IND-equivalent CTA processing for gene therapy trials runs 6–12 months — faster than most EU competent authorities but slower than the FDA\'s current streamlined timelines. HSA follows ICH guidelines and has mutual recognition with FDA and EMA for GMP standards, reducing duplicative review burden for multi-site trials.',
        links: [{ label: 'HSA Cell Tissue Gene Therapy', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/cell-tissue-and-gene-therapy-products', comment: 'HSA CTGT framework — gene therapy regulation; pre-submission consultation within 3 months' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 4,
        text: 'HSA proactively engages the research community on new modalities — base editing, prime editing, and epigenome editing have been the subject of consultative dialogues. BAC updates its guidelines through public consultation processes that have been responsive (2–3 year turnaround for major revisions). Singapore participated in the WHO Expert Advisory Committee on Human Genome Editing, contributing to international standards. Regulatory science capacity is genuinely embedded in HSA\'s structure.',
        links: [{ label: 'HSA International Collaborations', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/international-collaborations', comment: 'HSA — active in WHO and ICH standard development for novel gene editing modalities' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 3,
        text: 'Singapore permits embryo research up to 14 days under BAC oversight — equivalent to UK standards. Clinically, germline gene editing is prohibited, but basic research on human embryos is explicitly permitted under ethics committee review. The regulatory framework is clear: research yes, clinical application no. This provides a more permissive basic science environment than most jurisdictions while maintaining clinical prohibition.',
        links: [{ label: 'BAC Human Embryo Research Guidelines', url: 'https://www.bioethics-singapore.gov.sg/', comment: 'BAC — 14-day embryo research permitted; clinical germline editing prohibited; explicit regulatory framework' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 3,
        text: 'No specific longevity gene therapy regulatory pathway exists in Singapore. However, the Healthy Longevity national programme creates political and institutional context that makes longevity applications of gene therapy a recognised area. HSA engages pre-submission on longevity-adjacent indications (sarcopenia, frailty). Aging biomarkers as exploratory endpoints in gene therapy trials are accepted by HSA following ICH guidance.',
        links: [{ label: 'NRF Healthy Longevity Programme', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'NRF — national longevity programme creating regulatory context for aging-targeted gene therapies' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 4,
        text: 'NRF (National Research Foundation) functions as Singapore\'s ARPA-equivalent — funding high-risk translational research with defined programme goals. The Biomedical Sciences Industry Partnership Office (IPO) at A*STAR specifically bridges basic research and clinical translation with milestone-based management. The Healthy Longevity Catalyst Programme is explicitly structured as a prize-based breakthrough programme with measurable targets. Singapore\'s small scale enables inherently faster coordination between research and clinical translation.',
        links: [{ label: 'NRF Healthy Longevity Initiative', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'NRF — dedicated healthy longevity programme; ARPA-style milestone-based management' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 5,
        text: 'Singapore has uniquely explicit national aging research mandates: the NRF Healthy Longevity programme is PM-office endorsed. Singapore co-founded the Global Healthy Longevity Challenge. The Healthy Longevity Catalyst Awards (USD 1.5M per award) demonstrate commitment at the level of prize-funded breakthrough science. A*STAR\'s Human Aging Programme, NUS CHL, and the Healthy Longevity national strategy together represent one of the world\'s most explicit government commitments to longevity science relative to country size.',
        links: [
          { label: 'NRF Healthy Longevity', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'PM-office endorsed national healthy longevity programme; catalyst prize awards' },
          { label: 'Global Healthy Longevity Challenge', url: 'https://www.healthylongevitychallenge.org/', comment: 'Singapore co-founded global longevity challenge; USD 25M prize pool across jurisdictions' },
        ],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 4,
        text: 'The Healthy Longevity Catalyst Awards are non-dilutive prize grants — developers retain full IP. NRF exploratory research grants are non-dilutive with no IP encumbrance. A*STAR Industry Alignment Fund provides non-dilutive co-investment for industry partnerships with IP terms negotiated but generally favourable to developers. Singapore does not require IP sharing as a condition of public funding, unlike many European national funders.',
        links: [{ label: 'Healthy Longevity Catalyst Awards Criteria', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity-catalyst-awards', comment: 'Non-dilutive prize grants — developer retains IP; no government equity stake required' }],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 5,
        text: 'Healthy Longevity Catalyst Awards and NRF exploratory grants are non-dilutive with published intent that developers retain foreground IP; no government equity in prize structures. Agency-style instruments align with performer retention and narrow sponsor rights.',
        links: [{ label: 'Healthy Longevity Catalyst Awards', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity-catalyst-awards', comment: 'Prize grants — developer retains IP' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 4,
        text: 'The Healthy Longevity Catalyst Awards have specific quantified challenge goals — demonstrating measurable improvement in a validated healthspan metric or longevity biomarker. The Global Healthy Longevity Challenge includes specific biological target metrics. NRF programmes articulate explicit aging biology targets rather than vague "improve health" goals. Singapore is among the few jurisdictions to have translated longevity science goals into prize-quantifiable challenge metrics.',
        links: [{ label: 'Healthy Longevity Catalyst Awards', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity-catalyst-awards', comment: 'Awards require demonstrable effect on specific longevity biomarkers or healthspan metrics' }],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'HSA\'s provisional authorisation pathway allows approval of products with promising early data where full evidence package is pending — applicable to innovative therapies including gene and cell therapies. Singapore is not just a regulatory follower; HSA has been ahead of FDA/EMA in some regulatory innovations, e.g. for CAR-T therapies in Asian populations. Conditional approval with post-market surveillance commitments is actively used.',
        links: [{ label: 'HSA Provisional Authorisation', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/provisional-authorisation', comment: 'HSA — provisional authorisation pathway for innovative therapies pending full evidence package' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 3,
        text: 'HSA accepts rolling submission for innovative products — companies can submit data modules as they become available rather than waiting for a complete package. This is standard for products using the innovative product pathway. No distinct rolling review track with a formal name exists for longevity products specifically, but the innovative product pathway accommodates this approach.',
        links: [{ label: 'HSA Drug Registration', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/drug-registration', comment: 'HSA drug registration — rolling submission accepted for innovative therapeutic products' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'HSA accepts functional aging composites (SPPB, grip strength, Fried frailty criteria) as endpoints in geriatric indications following ICH E7. Epigenetic clock and proteomic aging biomarkers are in early regulatory dialogue with HSA — accepted as exploratory endpoints, not yet as primary for regulatory submissions. Singapore\'s NUS CHL is actively working with HSA on Asian-norm aging endpoint standards that may eventually gain surrogate status.',
        links: [{ label: 'HSA Scientific Guidelines', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/scientific-guidelines', comment: 'HSA — functional aging endpoints accepted; biological age surrogates in active regulatory dialogue' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 3,
        text: 'Singapore\'s National Registry of Diseases (NRDO) and NEHR provide infrastructure for post-market surveillance tied to conditional approvals. Post-market study commitments are required for provisionally authorised products. Data collection from conditionally approved therapies is systematised through the academic medical centres. Not yet fully automated, but the infrastructure for registry-linked adaptive licensing exists and has been applied in oncology.',
        links: [{ label: 'National Registry of Diseases', url: 'https://www.nrdo.gov.sg/', comment: 'NRDO — national disease registries; supports post-market surveillance for conditionally approved products' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 3,
        text: 'HSA has a compassionate use (Special Access Route) programme for unregistered or unapproved products for individual patients. Processing time is 4–8 weeks; physician liability framework is defined. The academic medical centres have dedicated compassionate use coordinators. Not yet proactive — sponsors are not required to make products available on request — but the pathway is functional and well-documented.',
        links: [{ label: 'HSA Special Access Route', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/special-access-route', comment: 'HSA — compassionate use pathway for unregistered products; 4–8 week processing' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 3,
        text: 'HSA accepts adaptive designs in regulatory submissions; SCRI statisticians are trained in adaptive and Bayesian trial design. Singapore has participated in international adaptive trial consortia. Platform trial capability exists and has been used in oncology (ETOP) and COVID-19. Systematic use in aging trials specifically lags behind theoretical capability, but the regulatory acceptance and statistical infrastructure are established.',
        links: [{ label: 'Singapore Clinical Research Institute', url: 'https://www.scri.edu.sg/', comment: 'SCRI — adaptive trial design expertise; Bayesian methodology; HSA-accepted protocol support' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'Singapore\'s NEHR (National Electronic Health Record) linking all public hospital records provides infrastructure for synthetic control arm construction. HSA accepts external controls in rare disease contexts where randomisation is infeasible. The TRUST federated platform enables analysis of historical controls without data export. Register-based RCT methodology is feasible; no formal aging-focused register-based trial has been run at national scale yet.',
        links: [{ label: 'NEHR National Electronic Health Record', url: 'https://www.ihis.com.sg/', comment: 'NEHR — national EHR system; historical control data available for synthetic arm construction' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'Singapore\'s compact geography (city-state) and comprehensive NEHR make some decentralized trial elements straightforward. Telemedicine and electronic PRO are accepted by HSA. Home visits and local labs are operationally feasible given Singapore\'s infrastructure density. A DCT framework has not been formally published by HSA, but individual elements are accommodated in trial applications. The digital health ecosystem (HealthHub app, TeleConsult) provides participant-facing infrastructure.',
        links: [{ label: 'MOH Telehealth Singapore', url: 'https://www.moh.gov.sg/', comment: 'MOH — telehealth framework; electronic PRO and telemedicine accepted in trial designs' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 3,
        text: 'SCRI has the statistical and operational capacity to run complex platform trials. Singapore participated in international platform trial consortia for COVID-19 and oncology. No aging-specific platform trial is currently running. The NUS CHL has proposed adaptive platform designs for aging interventions. Platform trial regulatory acceptance by HSA is established from prior oncology precedents; aging-specific deployment is the clear next step.',
        links: [{ label: 'SCRI Platform Trials', url: 'https://www.scri.edu.sg/', comment: 'SCRI — platform trial operational capacity; oncology and COVID precedents; aging platform in development' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 3,
        text: 'HSA\'s RWE guidance (2019, updated 2022) enables real-world evidence for post-market studies and label extensions. Singapore participates in the APEC harmonisation of RWE standards. For aging prevention trials, RWE as primary evidence is feasible under the provisional authorisation pathway, but traditional RCT remains standard for pivotal submissions. The TRUST platform infrastructure positions Singapore well for future RWE integration.',
        links: [{ label: 'HSA Real-World Evidence Guidance', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/real-world-evidence', comment: 'HSA RWE framework — accepted for post-market; selective pre-market acceptance for innovative products' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 4,
        text: 'HSA\'s Regulatory Sandbox for medical devices and digital health products is one of the most active in Asia-Pacific. Therapeutic sandboxes exist via the provisional authorisation pathway. The Singapore government explicitly uses sandbox mechanisms across sectors (MAS FinTech sandbox, IMDA, MOH) as a deliberate policy tool for innovation. For longevity biotech, the combination of provisional authorisation and HSA pre-submission consultation functions as an effective sandbox.',
        links: [{ label: 'HSA Regulatory Sandbox', url: 'https://www.hsa.gov.sg/medical-devices/overview/regulatory-sandbox', comment: 'HSA medical device regulatory sandbox — active; novel devices and digital health prioritised' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 3,
        text: 'The HSA CTGT (Cell, Tissue and Gene Therapy) framework covers gene editing, cell therapies, and advanced biologics — including novel modalities beyond traditional drugs. Device sandbox covers digital diagnostics and AI-based tools. Combination products (drug-device) have a defined regulatory pathway. The main gap is that longevity-mechanism biologics (senolytics, geroprotectors) fall into the standard drug regulatory pathway without sandbox-specific accommodation.',
        links: [{ label: 'HSA CTGT Framework', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/cell-tissue-and-gene-therapy-products', comment: 'HSA — gene therapy and advanced biologic regulatory pathway; pre-submission consultation available' }],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 3,
        text: 'The HSA Special Access Route and compassionate use pathway allow patients with target indications to access unapproved products under defined conditions. Prevention and longevity intervention participants could theoretically enter sandbox-style programmes under the provisional authorisation framework. Broader eligibility beyond terminal conditions is possible but requires strong justification. Singapore\'s ethics framework permits aging prevention studies with healthy adults.',
        links: [{ label: 'HSA Special Access Route', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/special-access-route', comment: 'HSA — compassionate use and expanded access for patients with target indications' }],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 3,
        text: 'Developers operating under HSA\'s provisional authorisation have defined regulatory status that provides clarity on liability. Physician liability for administering conditionally approved products is defined in the Healthcare Services Act. Safe harbour for sandbox participants is not explicitly legislated but is effectively provided through the regulated status of provisional authorisation. IP protection during sandbox participation is governed by standard IP law.',
        links: [{ label: 'HSA Provisional Authorisation Framework', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/provisional-authorisation', comment: 'HSA — provisional authorisation provides defined legal status for developer and physician' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 3,
        text: 'No longevity-specific regulatory sandbox exists as a named programme. However, the Healthy Longevity national strategy creates institutional context for HSA to apply sandbox principles to longevity product candidates. A*STAR and HSA have held dialogue sessions on longevity regulatory pathways. Aging-adjacent indications (frailty, sarcopenia) can enter sandbox-equivalent processes; general longevity is the next frontier for explicit inclusion.',
        links: [{ label: 'NRF Healthy Longevity Programme', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'NRF — national longevity programme; creates political context for HSA sandbox application to longevity products' }],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'HSA accepts functional aging composites (SPPB, grip strength, Fried frailty index) as primary endpoints for geriatric indications following ICH E7. Biological age surrogates are in early regulatory dialogue — accepted as exploratory secondaries but not yet as primary for regulatory submissions. Singapore Longitudinal Ageing Studies (SLAS) have validated composite frailty and functional decline endpoints in the local population. Pan-Asian endpoint standards are an active research area.',
        links: [{ label: 'Singapore Longitudinal Ageing Studies', url: 'https://blog.nus.edu.sg/slas/', comment: 'SLAS — national aging cohort; composite endpoint validation for Asian populations' }],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 3,
        text: 'HSA has not formally qualified any biological aging biomarkers as surrogate endpoints, but SCRI and NUS CHL are actively developing epigenetic clock validation in the Singapore Chinese Health Study cohort (65k+ participants). The ICH biomarker qualification framework applies; Singapore researchers are building the evidence base toward qualification. Asian-specific norm calibration for epigenetic clocks (GrimAge, DunedinPACE) is a specific NUS CHL priority.',
        links: [{ label: 'Singapore Chinese Health Study', url: 'https://www.sph.nus.edu.sg/research/research-centres-programmes-groups/singapore-chinese-health-study/', comment: 'NUS SPH — 65k+ longitudinal cohort; aging biomarker validation including epigenetic clocks' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'Singapore\'s HSA has a companion diagnostic framework designed for treatment-selection biomarkers rather than co-development of aging endpoints with therapeutics. For aging biomarker-therapeutic co-development, no dedicated integrated pathway exists. Standard IND/CTA applications can include aging biomarker components, but integration into a single co-development submission requires case-by-case negotiation with HSA. The framework is functional but not specifically designed for this use case.',
        links: [{ label: 'HSA Companion Diagnostic Framework', url: 'https://www.hsa.gov.sg/therapeutic-products/overview', comment: 'HSA — companion diagnostic and co-development framework; aging-specific extension requires case-by-case negotiation' }],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 4,
        text: 'The Singapore Chinese Health Study (65k+), Singapore Longitudinal Ageing Studies (SLAS I and II), and PRECISE national biobank provide exceptionally well-characterised reference populations with aging biomarker panels. Singapore\'s multi-ethnic composition (Chinese, Malay, Indian) provides unique value for developing pan-Asian aging biomarker norms. NEHR-linked longitudinal data enables construction of normative aging trajectories across ethnic groups.',
        links: [{ label: 'PRECISE National Precision Medicine', url: 'https://www.nrf.gov.sg/programmes/precision-medicine', comment: 'PRECISE — 100,000 WGS target; multi-ethnic aging biomarker reference infrastructure' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 3,
        text: 'SCRI provides standardised measurement protocols for functional aging endpoints in clinical trials. Duke-NUS has proposed modified aging composites appropriate for Asian populations (different sarcopenia thresholds, gait speed norms based on Asian body composition). Singapore participates in APEC biomarker standardisation efforts. Pan-Asian endpoint harmonisation is an active area, with Singapore positioned to be the standard-setting hub for Asian aging biomarker norms.',
        links: [{ label: 'SCRI Clinical Research Standards', url: 'https://www.scri.edu.sg/', comment: 'SCRI — standardised aging endpoint protocols; Asian-norm calibration in development with Duke-NUS' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Screen for Life (SFL) includes proactive cardiovascular risk assessment (hypertension, dyslipidaemia, diabetes) at polyclinics for all eligible Singaporeans. Invitation letters are sent to age-eligible residents; polyclinic integration ensures high geographic accessibility. The National Chronic Disease Management Programme provides structured follow-up after abnormal results.',
        links: [{ label: 'Screen for Life', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'SFL — cardiovascular risk screening at polyclinics; proactive invitation system for eligible residents' }],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'SFL provides subsidised mammography for women aged 40–69. Reminder letters are sent at recommended intervals. The Singapore Cancer Society supports outreach. Coverage is above 50% in target age groups. Automated invitation via HealthHub app is implemented. Screening results are linked to NEHR.',
        links: [{ label: 'Screen for Life – Breast Cancer', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'SFL — subsidised mammography; proactive invitation; 40–69 age group coverage' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'SFL covers FIT stool testing for colorectal cancer screening for Singaporeans aged 50+. Polyclinic-distributed, subsidised. Participation rate has improved post-pandemic with digital reminder campaigns. Positive results trigger colonoscopy referral through NCIS (National Cancer Centre Singapore). One of the better-integrated cancer screening programmes in Asia.',
        links: [{ label: 'Screen for Life – Colorectal', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'SFL — FIT stool test; subsidised; proactive reminder; colonoscopy referral pathway integrated' }],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'SFL covers HPV primary testing for women aged 25–69, transitioning from cytology-based approach. Subsidised at polyclinics. Proactive invitation via HealthHub. Singapore adopted HPV primary screening ahead of most regional peers. Results linked to colposcopy referral pathway. National HPV vaccination programme complements screening by reducing incident cases.',
        links: [{ label: 'Screen for Life – Cervical', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'SFL — HPV primary testing; adopted ahead of regional peers; proactive invitation system' }],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No national AAA screening programme exists in Singapore. Abdominal aortic aneurysm ultrasound is available at private clinics and specialist referral but not covered under SFL or Medishield Life for screening purposes. Given Singapore\'s relatively younger demographic profile (compared to Scandinavian countries), AAA prevalence may be lower, but no population screening has been evaluated in the local context.',
        links: [{ label: 'Screen for Life Programme', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'SFL — AAA ultrasound not included; private specialist referral pathway only' }],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Diabetes and metabolic syndrome are screened systematically at polyclinics under SFL. The National Registry of Diseases tracks diabetes prevalence. Pre-diabetes intervention programmes are integrated into primary care. Singapore has one of the most comprehensive metabolic disease screening and management infrastructures in Asia, driven by high local diabetes prevalence (~9% of adults).',
        links: [{ label: 'National Registry of Diseases – Diabetes', url: 'https://www.nrdo.gov.sg/', comment: 'NRDO — comprehensive diabetes registry; polyclinic-integrated SFL metabolic screening' }],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Singapore Bone Health Foundation and polyclinics provide osteoporosis screening for high-risk groups (post-menopausal women, older adults with risk factors). Not a universal age-triggered programme. FRAX tool is used in primary care. Subsidised but not fully funded — patients contribute co-payment. MOH guidelines were updated in 2022 to strengthen risk-group targeting.',
        links: [{ label: 'Singapore Bone Health Foundation', url: 'https://www.sbhf.org.sg/', comment: 'Osteoporosis risk-group screening; polyclinic-integrated; subsidised co-payment model' }],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No national low-dose CT lung cancer screening programme. Available at private radiology centres and specialist hospitals. MOH has not yet introduced CT lung screening under SFL; evidence review is ongoing. Singapore\'s lower smoking prevalence relative to historical rates may moderate the public health case for universal screening, though targeted screening for high-risk smokers is under policy discussion.',
        links: [{ label: 'Screen for Life Programme', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'SFL — lung CT not included; private referral pathway; policy review ongoing for high-risk smokers' }],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No systematic national AF screening programme. The SFL cardiovascular risk visit includes pulse check and some physicians apply STOP-AF questionnaire informally. Polyclinic ECG is available but not systematically applied for AF at specific age thresholds. Pilots using wearable-based AF detection have been conducted at NUHS. National protocol for opportunistic AF screening is under development.',
        links: [{ label: 'NUHS AF Screening Pilot', url: 'https://www.nuhs.edu.sg/', comment: 'NUHS — wearable-based AF detection pilot; national opportunistic screening protocol in development' }],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'AIC (Agency for Integrated Care) operates cognitive impairment screening (CIST) at polyclinics and active ageing centres. Not yet universal — concentrated in higher-risk groups (adults 60+, diabetes patients) but not triggered at specific age thresholds for the general population. The Dementia Action Alliance supports community-level outreach. Singapore is one of few Asian countries with a structured national cognitive screening pathway.',
        links: [{ label: 'Agency for Integrated Care – Dementia', url: 'https://www.aic.sg/care-services/dementia', comment: 'AIC — cognitive screening programme; polyclinic and community level; not yet age-universal' }],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'Polygenic risk scoring is not offered under any national programme. The PRECISE national biobank project has generated PRS data for research purposes. Private genomic testing companies offer PRS. MOH has not yet integrated PRS-based risk stratification into SFL. Singapore\'s multi-ethnic population creates complexity for PRS deployment (European-trained PRS performs less well in Asian populations), which the PRECISE programme is working to address.',
        links: [{ label: 'PRECISE National Precision Medicine', url: 'https://www.nrf.gov.sg/programmes/precision-medicine', comment: 'PRECISE — PRS generated for research; clinical deployment under evaluation for Asian populations' }],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'AIC runs the Integrated Frailty Programme which includes grip strength and gait speed assessment (SARC-F tool) for adults over 65. Funded but not universally proactive — concentrated at polyclinics and active ageing centres where patients must initiate contact. Singapore is one of few countries where sarcopenia screening is part of a formal national aging programme, with diagnostic criteria adapted for Asian body composition thresholds.',
        links: [{ label: 'AIC Frailty Programme', url: 'https://www.aic.sg/care-services/frailty', comment: 'AIC — frailty and sarcopenia screening; Asian sarcopenia thresholds applied; funded passive model' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national sleep apnea screening programme. Singapore General Hospital and NUH Sleep Centres handle referrals from primary care. Polyclinic-based STOP-BANG questionnaire is used informally by some physicians but not systematised. Given Singapore\'s high OSA prevalence (estimated 30%+ of adults) and the strong dementia and CVD prediction value, this is a recognised gap that MOH is evaluating.',
        links: [{ label: 'SGH Sleep Centre', url: 'https://www.sgh.com.sg/', comment: 'SGH Sleep Centre — referral-based; no national proactive OSA screening programme' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 3,
        text: 'MOH can initiate new national screening programmes through HPB (Health Promotion Board) in 2–3 year cycles — faster than most comparable jurisdictions but not as adaptive as the fastest systems. HPB runs pilots before national rollout; the small population enables rapid evaluation. SFL has expanded to include new conditions (hepatitis B, lipid disorders) in successive updates. Formal rapid evaluation pathway exists but is not on a fixed annual commissioning cycle.',
        links: [{ label: 'Health Promotion Board', url: 'https://www.hpb.gov.sg/', comment: 'HPB — Screen for Life administrator; 2–3 year programme expansion cycles; pilot-then-scale model' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 4,
        text: 'The PRECISE (Precision Health Research, Singapore) national biobank operates on an opt-in basis with a target of 100,000 whole-genome sequences, with active re-contact for longitudinal follow-up. The Singapore Chinese Health Study (SCHS, 65k+) and SLAS (Singapore Longitudinal Ageing Studies, 4,500+) are large opt-in cohorts with high retention. Residual clinical samples from public hospitals are collected under broad consent. Coverage is high given Singapore\'s small population.',
        links: [{ label: 'PRECISE National Precision Medicine', url: 'https://www.nrf.gov.sg/programmes/precision-medicine', comment: 'PRECISE — 100,000 WGS target; active re-contact; multi-ethnic biobank for aging research' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 4,
        text: 'SLAS has re-sampled participants at 2–5 year intervals over 15+ years, providing genuine longitudinal aging trajectories. SCHS conducts follow-up biomarker collection every 5 years. PRECISE Phase II includes re-sampling protocols. These are among the most regular longitudinal aging biomarker follow-up schedules in Asia-Pacific, enabling analysis of biological aging rates in multi-ethnic populations.',
        links: [{ label: 'Singapore Longitudinal Ageing Studies', url: 'https://blog.nus.edu.sg/slas/', comment: 'SLAS — 2–5 year re-sampling intervals; 15+ year longitudinal follow-up; multi-ethnic aging trajectories' }],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 4,
        text: 'A*STAR GIS (Genome Institute of Singapore) runs comprehensive multi-omics (genomics, transcriptomics, proteomics, metabolomics) on aging cohorts. Singapore Immunology Network (SIgN) profiles immune aging (immunosenescence). Epigenetic clock validation (PhenoAge, GrimAge, DunedinPACE) has been conducted in SCHS and SLAS samples. Functional aging phenotypes (grip, gait, frailty scoring) are integrated with molecular data in SLAS. Singapore\'s omics capability is world-class in absolute terms.',
        links: [{ label: 'A*STAR Genome Institute of Singapore', url: 'https://www.a-star.edu.sg/gis', comment: 'GIS — multi-omics aging research; immunosenescence profiling; epigenetic clocks in Singapore cohorts' }],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 4,
        text: 'NEHR (National Electronic Health Record) links public hospital records across all three public health clusters (SingHealth, NUHS, NHG). Research linkage is available with IRB approval and is actively used for cohort studies. The SingHealth Duke-NUS Academic Medical Centre data warehouse integrates EHR, biobank, and research data. Coverage is near-complete for the 85%+ of Singapore residents using public healthcare.',
        links: [{ label: 'NEHR Research Linkage', url: 'https://www.ihis.com.sg/', comment: 'NEHR — national EHR; research linkage protocol; 85%+ population coverage via public health clusters' }],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 3,
        text: 'PRECISE national biobank access requires IRB approval and data governance review — process takes approximately 3–6 months. Individual cluster data access (SingHealth SHERPA, NUHS DataSpace) can be faster for in-house researchers. TRUST platform provides controlled access with privacy-preserving federated compute. Access speed is competitive by international standards but slower than the most efficient systems (e.g. Danish or Estonian health data registers). International researcher access is possible but adds negotiation steps.',
        links: [{ label: 'TRUST Health Data Platform', url: 'https://www.trustplatform.sg/', comment: 'TRUST — 3–6 month IRB and data governance process; federated access without data export' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 4,
        text: 'Singapore\'s small, well-organised population with comprehensive EHR coverage enables fast trial enrolment. SCRI provides professional trial operations. Academic medical centres (SGH, NUH, Tan Tock Seng) have high clinical trial volumes. Average initiation-to-first-patient timelines are 3–4 months — among the fastest in Asia-Pacific. Singapore\'s strategic location as a regional hub attracts international sponsors seeking efficient Asian recruitment.',
        links: [{ label: 'Singapore Clinical Research Institute', url: 'https://www.scri.edu.sg/', comment: 'SCRI — national trial operations hub; 3–4 month initiation timeline; international sponsor preferred site' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'HSA\'s RWE guidance (2022 update) enables real-world evidence for post-market studies and label extensions. Accepted for pre-market in select contexts under provisional authorisation. Singapore participates in APEC RWE standards harmonisation. For aging prevention trials, RWE as primary evidence is feasible under the provisional authorisation pathway, but traditional RCT remains standard for pivotal submissions.',
        links: [{ label: 'HSA Real-World Evidence Guidance', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/real-world-evidence', comment: 'HSA RWE framework — post-market accepted; selective pre-market acceptance for innovative products' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'Functional aging composites (gait speed, grip strength, SPPB, Fried frailty criteria) are used in Singapore aging trials run by NUS CHL and Duke-NUS. Biological age surrogate endpoints (epigenetic clocks) have been used as exploratory secondaries in A*STAR-funded studies. Not yet in regulatory submissions to HSA. Singapore is ahead of most Asian jurisdictions in aging endpoint sophistication, particularly for Asian-calibrated functional norms.',
        links: [{ label: 'NUS CHL Clinical Studies', url: 'https://medicine.nus.edu.sg/chl/', comment: 'NUS CHL — aging trials using functional composites and biological age surrogates as exploratory endpoints' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 3,
        text: 'Several aging mechanism studies run in Singapore: NMN trials at NUS, senolytic pilot studies at Duke-NUS, and metformin aging prevention via TAME (Singapore co-investigator site). Singapore is an active Phase I–II hub for aging mechanism interventions. No Singapore-initiated Phase III longevity prevention trial is currently registered. The NRF Catalyst Awards are designed to accelerate Phase II development of such agents.',
        links: [{ label: 'TAME Trial Information', url: 'https://www.afar.org/tame-trial', comment: 'TAME — Singapore is a co-investigator site; metformin aging prevention Phase III multi-site' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 4,
        text: 'SCRI provides national clinical trial coordination. NUS CHL acts as a hub for aging intervention trials. MOH Holdings provides coordinated access to all three public health clusters for multi-site trials. The Singapore Consortium for Longevity (informal network of NUS, Duke-NUS, A*STAR, NUHS) coordinates aging research. A single-IRB system covering all public health clusters eliminates duplicative ethics review — a major efficiency gain.',
        links: [{ label: 'SCRI National Coordination', url: 'https://www.scri.edu.sg/', comment: 'SCRI — national trial coordination; single-IRB system covering all public health clusters' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'ClinicalTrials.gov and the WHO-registered CTRI are primary trial registries. HealthHub patient portal provides trial information, but proactive EHR-based patient-trial matching is not yet systematised nationally. Singapore\'s polyclinic system enables GP-level referral to trials efficiently. Small population size partly compensates — researchers can enumerate eligible patients directly. No automated matching platform comparable to NHS Digital exists.',
        links: [{ label: 'Singapore trials on ClinicalTrials.gov', url: 'https://clinicaltrials.gov/search?cntry=SG', comment: '1,500+ Singapore-site registered trials; HealthHub provides patient-facing information' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 3,
        text: 'HSA does not formally recognise aging as a therapeutic indication. However, the Healthy Longevity national strategy creates political and institutional context that is closer to recognition than any other Asian jurisdiction. Sarcopenia and frailty are accepted aging-adjacent indications. HSA has engaged in international dialogues on aging as an indication (FDA TAME discussions, EMA concept papers). The trajectory is clearly toward recognition with active government interest.',
        links: [{ label: 'HSA Innovative Medicines', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/drug-registration', comment: 'HSA — frailty and sarcopenia accepted as aging-adjacent indications; systemic aging under active discussion' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'HSA accepts functional aging endpoints (SPPB, grip strength, frailty indices) following ICH E7. Biological age surrogates are in early regulatory dialogue. The SCRI and NUS CHL have proposed Asian-adapted aging endpoint standards to HSA. Singapore may be the most natural jurisdiction to qualify Asian-norm aging endpoints — sarcopenia thresholds and functional performance baselines differ significantly from Western populations in ways that SLAS has quantified.',
        links: [{ label: 'HSA Geriatric Indication Guidelines', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/scientific-guidelines', comment: 'HSA — functional aging endpoints accepted; Asian-norm aging endpoint qualification in active dialogue' }],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 2,
        text: 'Singapore\'s HTA framework (Agency for Care Effectiveness, ACE) uses QALY-based cost-effectiveness analysis. No explicit guidance on valuing healthspan extension or morbidity compression beyond standard QALY. ACE has not published methodology for aging-prevention HTA. The strong government commitment to healthy aging creates political appetite for developing such methodology, but it has not yet been formalised.',
        links: [{ label: 'Agency for Care Effectiveness', url: 'https://www.ace-hta.gov.sg/', comment: 'ACE — Singapore HTA body; QALY-based methodology; healthspan valuation framework not yet published' }],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 2,
        text: 'No specific reimbursement pathway for aging-prevention agents under Medishield Life or Chas. Off-label coverage is possible via physician request through specific drug panels. The strong national healthy aging commitment creates political will for development of such pathways, and Medishield Life covers approved geriatric treatments. The gap is for novel aging-mechanism agents not yet approved for any indication.',
        links: [{ label: 'Medishield Life', url: 'https://www.cpf.gov.sg/member/healthcare-financing/medishield-life', comment: 'Medishield Life — national insurance; covers approved geriatric treatments; no pathway for aging-prevention agents yet' }],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 3,
        text: 'HSA\'s provisional authorisation and innovative product pathways are available to aging agents — there is no specific "aging" expedited designation, but the general innovative product fast-track applies. Singapore participates in Project Orbis (international oncology collaboration) and similar frameworks. Some aging-adjacent agents (frailty, sarcopenia) have received priority review consideration. A dedicated aging pathway is not yet published but is under policy development.',
        links: [{ label: 'HSA Provisional Authorisation', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/provisional-authorisation', comment: 'HSA — innovative product fast-track available for aging agents; no specific aging designation yet' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 3,
        text: 'MOH Holdings and IHiS maintain the NEHR and related national data infrastructure. Controlled research access is via the TRUST (Trusted Research and Real World-Data Utilisation and Sharing Tech) platform — Singapore\'s national health data research platform with privacy-preserving compute. TRUST requires IRB approval and data governance review: 3–6 month typical turnaround. Individual cluster access (SingHealth SHERPA) can be faster for in-house researchers.',
        links: [{ label: 'TRUST Health Data Platform', url: 'https://www.trustplatform.sg/', comment: 'TRUST — national health data research platform; 3–6 month IRB and governance review required' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 4,
        text: 'NEHR enables longitudinal record linkage across all three public health clusters. PRECISE national biobank data is linkable to NEHR. Registry linkage (NRDO disease registries, cancer registry, death registry) is available for approved research. Wearable and digital health data (HealthHub) is increasingly linked to clinical records. Singapore has one of the most complete national health data linkage capabilities in Asia-Pacific.',
        links: [{ label: 'IHiS Data Integration', url: 'https://www.ihis.com.sg/', comment: 'IHiS — national health IT; NEHR + registry + biobank + wearable data linkage capability' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 4,
        text: 'TRUST platform implements federated analytics — algorithms run at the data source without raw data leaving secure environments, equivalent to a high-quality Trusted Research Environment. SingHealth SHERPA and NUHS DataSpace support in-situ analysis. Synthetic data generation is available for exploration. Singapore is among the most technically advanced in Asia for privacy-preserving health analytics.',
        links: [{ label: 'TRUST Federated Analytics', url: 'https://www.trustplatform.sg/', comment: 'TRUST — privacy-preserving federated compute; code to data; automated disclosure control' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 3,
        text: 'MOH AI governance framework permits AI use on health data under the TRUST platform with dedicated AI researcher tier. Pre-approved model classes exist; 4–8 week approval for registered AI labs. IMDA Model AI Governance Framework applies to health AI applications. Singapore is proactively developing AI-ready health data infrastructure; bulk API access is available for accredited researchers with defined governance requirements.',
        links: [{ label: 'IMDA Model AI Governance Framework', url: 'https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/factsheets/2019/model-ai-governance-framework', comment: 'Singapore AI governance — applies to health AI; dedicated researcher tier in TRUST platform' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 3,
        text: 'Singapore\'s Personal Data Protection Act (PDPA) permits cross-border health data transfers to jurisdictions with adequate protection. Bilateral research MoUs with UK Biobank, NIA (NIH), and Estonian Genome Centre are in place. TRUST platform supports controlled international federated analysis without data leaving Singapore. Singapore participates in APEC CBPR (Cross-Border Privacy Rules) for health data. An Asia-Pacific health data compact is under development.',
        links: [{ label: 'PDPA Cross-Border Data Framework', url: 'https://www.pdpc.gov.sg/', comment: 'PDPA — approved jurisdictions for health data transfer; research MoUs with UK Biobank and NIA' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 4,
        text: 'Electronic health records are near-universal across Singapore\'s three public health clusters (SingHealth, NUHS, NHG), covering 85%+ of residents. NEHR aggregates key clinical data across clusters. Private sector EHR adoption is growing under MOH mandate. The National Digital Health Blueprint (2023) sets targets for full structured EHR coverage including medications, diagnoses, procedures, and lab results.',
        links: [{ label: 'National Digital Health Blueprint', url: 'https://www.moh.gov.sg/resources-statistics/reports/national-digital-health-blueprint', comment: 'MOH — digital health blueprint; near-universal EHR in public sector; structured data elements mandated' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 4,
        text: 'IHiS has mandated FHIR R4 for all new health IT systems in Singapore\'s public clusters since 2022. The National Digital Health Blueprint sets FHIR as the national interoperability standard. SNOMED CT rollout is underway. LOINC is used for lab results. Singapore is one of the more advanced FHIR adopters in Asia-Pacific, enabling machine-readable API access at major providers.',
        links: [{ label: 'IHiS FHIR Implementation', url: 'https://www.ihis.com.sg/', comment: 'IHiS — FHIR R4 mandated 2022; SNOMED CT rollout; LOINC for labs; machine-readable APIs' }],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 4,
        text: 'NRDO (National Registry of Diseases) maintains comprehensive registries covering cancer, diabetes, renal failure, myocardial infarction, and stroke — all digital and accessible for research. Death registry and birth registry are complete and linked via national ID. Rare disease registries are developing. Registry data is API-accessible for approved researchers via TRUST. Near-complete coverage for major chronic conditions.',
        links: [{ label: 'National Registry of Diseases', url: 'https://www.nrdo.gov.sg/', comment: 'NRDO — comprehensive digital registries; cancer, diabetes, CVD, renal; API access via TRUST platform' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 4,
        text: 'Major NRDO registries are updated quarterly to monthly. Some systems are near-real-time — NEHR captures clinical events within hours. Death registry lag is typically 1–4 weeks. For approved TRUST researchers, registry data with 1–3 month lag is available. Singapore\'s small population and centralised IT infrastructure means data latency is lower than in larger countries with more fragmented systems.',
        links: [{ label: 'TRUST Data Access', url: 'https://www.trustplatform.sg/', comment: 'TRUST — quarterly-to-monthly registry updates; near-real-time clinical data for approved researchers' }],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 3,
        text: 'SCRI and TRUST use OMOP-CDM for federated research analyses. IHiS has mapped NEHR data to OMOP for research. Validated phenotyping algorithms exist for common conditions (diabetes, hypertension, CKD). The national research data infrastructure is converging on OMOP as the common data model, enabling participation in OHDSI federated networks. Custom cohort queries are possible for TRUST platform researchers with appropriate data governance approval.',
        links: [{ label: 'OHDSI Singapore participation', url: 'https://www.ohdsi.org/', comment: 'Singapore participates in OHDSI federated network via SCRI and TRUST OMOP-mapped data' }],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 3,
        text: 'SCRI and TRUST use OMOP-CDM mapping for cross-dataset joins. IHiS has mapped NEHR to OMOP, enabling automated joins for major entities. HPO (Human Phenotype Ontology) is used in rare disease contexts. Full semantic interoperability is not yet achieved across all research datasets, but the national infrastructure is converging on OMOP as the common data model for research applications.',
        links: [{ label: 'SCRI Data Standards', url: 'https://www.scri.edu.sg/', comment: 'SCRI — OMOP-CDM adoption; automated joins for common clinical entities' }],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 4,
        text: 'NEHR enables research cohort linkage to mortality, hospitalisation, cancer, and disease registry data for IRB-approved studies. SLAS and SCHS cohorts have active registry follow-up. The TRUST platform supports bidirectional linkage. Standardised consent frameworks are in place; registry linkage is routine for major research cohorts. Longitudinal follow-up of aging cohort participants via passive registry data is well-established.',
        links: [{ label: 'Singapore Longitudinal Ageing Studies', url: 'https://blog.nus.edu.sg/slas/', comment: 'SLAS — active NEHR and registry linkage; longitudinal follow-up via passive data for all participants' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 3,
        text: 'NRF requires FAIR data management plans for publicly funded research. Approved repositories and TRUST platform support FAIR principles with machine-readable metadata and persistent identifiers. A national research data catalog is under development. The culture of FAIR compliance is stronger in basic science than in clinical research, but mandates are tightening across both.',
        links: [{ label: 'NRF Open Data Policy', url: 'https://www.nrf.gov.sg/', comment: 'NRF — FAIR data management plans required; national research data catalog in development' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 3,
        text: 'HSA\'s PRISM (Pharmacovigilance Repository and Information on Safety Management) system collects adverse event reports. Automated signal detection from NEHR feeds into research hypothesis generation. HSA-to-research feedback loop for safety signals is established via the academic medical centres. Real-time pharmacovigilance dashboard for researchers is in development. The loop is functional but not yet fully automated.',
        links: [{ label: 'HSA Pharmacovigilance', url: 'https://www.hsa.gov.sg/therapeutic-products/safety-information', comment: 'HSA PRISM — pharmacovigilance reporting; NEHR-based signal detection with research linkage' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 3,
        text: 'Trial registration is required for all human studies (WHO Primary Registries). NRF and NMRC grant recipients must report results within 12 months and share data where possible. Code sharing and pre-registration are encouraged but not universally mandated. Singapore\'s open science compliance is solid by regional standards but lags behind Nordic or UK requirements for full data and code sharing.',
        links: [{ label: 'NRF Open Science Policy', url: 'https://www.nrf.gov.sg/', comment: 'NRF — results reporting within 12 months mandated; data sharing encouraged; pre-registration required for new grants' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 4,
        text: 'HSA routinely accepts trial data from ICH-member country trials as primary evidence. Singapore was the first Asian regulator (outside Japan) to formally adopt ICH E17 (multi-regional clinical trials), enabling seamless data pooling across regions. Foreign trial data from FDA/EMA/TGA jurisdictions is accepted without domestic replication requirements for most product categories.',
        links: [{ label: 'HSA ICH E17 Adoption', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/international-collaborations', comment: 'HSA — first Asian regulator outside Japan to adopt ICH E17; accepts foreign trial data as primary evidence' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 3,
        text: 'HSA participates in ad-hoc international joint review on selected submissions and is an active observer in Project Orbis. Joint reviews with TGA (Australia) and Health Canada have been conducted for specific oncology products. HSA does not chair any joint review programme but is a consistent and credible participant. Systemic joint review for aging-medicine products has not been conducted.',
        links: [{ label: 'HSA International Collaborations', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/international-collaborations', comment: 'HSA — Project Orbis observer; ad-hoc joint reviews with TGA and Health Canada' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 4,
        text: 'HSA is an ICH observer and implements ICH guidelines as domestic regulatory standards — one of the most complete ICH adopters in Asia. Singapore has proactively adopted newer ICH guidelines (E17, E14 update, S12) ahead of many larger regulators. Active participation in developing new ICH standards through expert working group observer roles. Model regulatory system for ASEAN.',
        links: [{ label: 'HSA ICH Implementation', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/international-collaborations', comment: 'HSA — ICH observer; early adopter of new guidelines; ASEAN model regulator' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'HSA has a formal Immediate Access pathway that allows FDA or EMA approval to trigger expedited Singapore review — abbreviated assessment with defined timeline rather than full independent review. For some product categories, foreign approval provides near-automatic provisional access while domestic assessment proceeds. This significantly shortens time-to-market for innovative products in Singapore.',
        links: [{ label: 'HSA Immediate Access', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/drug-registration', comment: 'HSA — Immediate Access pathway; FDA/EMA approval triggers expedited Singapore review' }],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 4,
        text: 'HSA has mutual GMP reliance arrangements with FDA, EMA, Health Canada, TGA, and Swissmedic. ASEAN MRA for pharmaceutical products is partially implemented. HSA GMP certification is itself accepted by several regional regulators. For innovative products, Singapore regulatory approval serves as supporting reference for ASEAN registration. The network of mutual reliance agreements is the broadest of any Asian regulator outside Japan.',
        links: [{ label: 'HSA Mutual Recognition', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/international-collaborations', comment: 'HSA — FDA, EMA, TGA, Swissmedic, Health Canada mutual GMP reliance; ASEAN MRA participation' }],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'BSL-3 facilities are available at multiple sites including A*STAR GIS, National University Hospital, and Duke-NUS. Shared access programmes exist for academic researchers. BSL-4 capacity is not available domestically — Singapore researchers requiring BSL-4 work travel to partner institutions. For aging research, BSL-3 is sufficient for most work including viral vectors for gene therapy.',
        links: [{ label: 'A*STAR GIS Facilities', url: 'https://www.a-star.edu.sg/gis', comment: 'A*STAR GIS — BSL-3 facilities for gene therapy and aging research; shared access for academic groups' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 4,
        text: 'Singapore\'s Tuas Biomedical Park hosts major pharmaceutical manufacturers (GSK, Pfizer, MSD) with GMP-certified facilities. A*STAR Bioprocessing Technology Institute (BTI) provides academic GMP manufacturing for cell and gene therapy. Multiple CDMOs (AGC Biologics, Rentschler) have Singapore operations. The GMP ecosystem is mature, commercially available, and capable of clinical-grade cell and gene therapy manufacturing.',
        links: [{ label: 'A*STAR Bioprocessing Technology Institute', url: 'https://www.a-star.edu.sg/bti', comment: 'BTI — academic GMP manufacturing for cell and gene therapy; clinical-grade production for aging trials' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'NSCC (National Supercomputing Centre Singapore) provides HPC infrastructure accessible to academic researchers including dedicated GPU clusters for AI workloads. A*STAR ACRC (Advanced Computing & Research Centre) has purpose-built biomedical computing infrastructure. TRUST platform provides secure cloud-based federated compute. Singapore has invested significantly in shared biomedical computing as national infrastructure.',
        links: [{ label: 'NSCC Singapore', url: 'https://www.nscc.sg/', comment: 'National Supercomputing Centre — HPC and GPU capacity for biomedical research; A*STAR ACRC linked' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 4,
        text: 'PRECISE Phase II targets 100,000 whole-genome sequences — extraordinary for a country of 5.9M people, representing ~1.7% of the entire population. A*STAR GIS has national-scale sequencing infrastructure with short-read WGS and long-read (PacBio) capabilities. The multi-ethnic composition (Chinese, Malay, Indian) of this sequencing cohort is unique internationally and directly relevant to aging population genetics.',
        links: [{ label: 'PRECISE Phase II Sequencing', url: 'https://www.nrf.gov.sg/programmes/precision-medicine', comment: 'PRECISE — 100,000 WGS target (1.7% of population); multi-ethnic cohort; A*STAR GIS sequencing infrastructure' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 3,
        text: 'A*STAR\'s Biological Resource Centre (BRC) provides genetically modified mouse models for aging research with shared access arrangements. Zebrafish aging models are available at multiple A*STAR institutes. C. elegans and Drosophila platforms exist at NUS and NTU. Singapore has adequate model organism infrastructure for aging biology; the limitation is scale — fewer distinct aging model platforms than major EU or US hubs.',
        links: [{ label: 'A*STAR Biological Resource Centre', url: 'https://www.a-star.edu.sg/brc', comment: 'BRC — genetically modified mouse models; shared access for aging research programmes' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 4,
        text: 'Singapore co-founded the Global Healthy Longevity Challenge (with NRF as lead funder). Participates in TAME trial network, OHDSI federated network, Human Cell Atlas, and multiple ASEAN biomedical research networks. A*STAR has active collaboration agreements with NIH, Wellcome Trust, and European aging research institutes. Singapore consistently punches well above its weight in international research consortium leadership relative to population size.',
        links: [{ label: 'Healthy Longevity Global Challenge', url: 'https://www.healthylongevitychallenge.org/', comment: 'Singapore NRF is a co-founding member and lead funder of the global Healthy Longevity Challenge' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 3,
        text: 'Singapore has bilateral data sharing MoUs with UK Biobank, NIA (NIH), and several European biobanks. PDPA permits data export to whitelisted jurisdictions with adequate protection. TRUST platform supports controlled international federated analysis without data leaving Singapore. A formal Asia-Pacific health data sharing compact is in development under APEC. The PRECISE multi-ethnic biobank is a sought-after partner for international aging consortia.',
        links: [{ label: 'PDPA International Data Transfers', url: 'https://www.pdpc.gov.sg/', comment: 'PDPA — approved jurisdictions; research MoUs with UK Biobank and NIA; APEC data compact in development' }],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 4,
        text: 'Singapore participates in Horizon Europe through association-like bilateral agreements, providing access to collaborative EU research funding. NRF-NIH bilateral grants fund US-Singapore aging research collaborations. BSF (Binational Science Foundation) equivalent exists with several countries. ASEAN Science and Technology Fund provides regional co-funding. Singapore researchers are among the most active in securing international joint grants relative to population.',
        links: [{ label: 'NRF International Collaboration', url: 'https://www.nrf.gov.sg/programmes/international-collaboration', comment: 'NRF — bilateral R&D collaboration frameworks with EU, US, and regional partners' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 4,
        text: 'Singapore is the recognised leading Asian longevity research nation — NUS CHL and Duke-NUS publish in top-tier journals (Nature Aging, Cell, NEJM) and are regularly cited by WHO and international aging bodies as Asian reference institutions. Singaporean researchers chair international aging science committees and contribute to global longevity consensus documents. The Healthy Longevity Challenge has amplified Singapore\'s international profile in the field substantially.',
        links: [{ label: 'NUS Centre for Healthy Longevity Publications', url: 'https://medicine.nus.edu.sg/chl/', comment: 'NUS CHL — high-impact publications; WHO aging advisory contributions; Asian longevity research reference institution' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 3,
        text: 'Singapore is a PCT (Patent Cooperation Treaty) member. IPOS (Intellectual Property Office of Singapore) has mutual cooperation agreements with USPTO, EPO, and JPO. A*STAR and NUS hold significant patent portfolios in aging-adjacent biology. Singapore\'s IP framework is robust but not a distinctive advantage over peer jurisdictions — the patent cooperation landscape is comparable to other advanced economies.',
        links: [{ label: 'IPOS International Cooperation', url: 'https://www.ipos.gov.sg/', comment: 'IPOS — PCT member; agreements with USPTO, EPO, JPO; active aging technology patent portfolio' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {

      [SocialReadinessClaim.PUBLIC_TRUST_CLINICAL_SYSTEM]: {
        score: 5,
        text: 'MOH-led delivery and hospital quality still enjoy very strong confidence; Healthier SG uptake remains consistent with a high-trust clinical system despite broader economic-anxiety and insularity themes in 2026 barometer commentary.',
        links: [
          { label: 'Edelman — Trust Barometer 2026', url: 'https://www.edelman.com/trust/2026/trust-barometer', date: 'Jan 2026', comment: 'Global launch; online interviews Oct 25–Nov 16, 2025 (~1,200/country)' },
          { label: 'The Straits Times — Edelman trust survey (Singapore)', url: 'https://www.straitstimes.com/singapore/growing-insularity-in-spore-amid-economic-anxiety-worries-about-the-future-edelman-trust-survey', date: '2026', comment: 'National press — Edelman 2026 domestic headlines' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_SCIENCE_RESEARCH]: {
        score: 5,
        text: 'Edelman national trust remains in the top global band for institutions; science- and health-innovation narratives still draw on high baseline credibility even as insularity and economic-worry indicators rise.',
        links: [
          { label: 'Edelman — Trust Barometer 2026', url: 'https://www.edelman.com/trust/2026/trust-barometer', date: 'Jan 2026', comment: 'Methodology: Oct 25–Nov 16, 2025 fieldwork' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_STATE_HEALTH]: {
        score: 4.5,
        text: 'Government remains highly trusted vs most democracies, but Edelman 2026 reports modest erosion (e.g. national trust in the mid-60s % range in headline coverage) alongside insularity and future-pessimism — still enough for aggressive MOH programmes, with less margin than mid-2020s peaks.',
        links: [
          { label: 'Edelman — Trust Barometer 2026', url: 'https://www.edelman.com/trust/2026/trust-barometer', date: 'Jan 2026', comment: 'Institution trust trends; SG local report in Edelman hub' },
          { label: 'The Straits Times — Edelman trust survey (Singapore)', url: 'https://www.straitstimes.com/singapore/growing-insularity-in-spore-amid-economic-anxiety-worries-about-the-future-edelman-trust-survey', date: '2026', comment: 'Domestic reporting on 2026 barometer' },
        ],
      },
      [SocialReadinessClaim.AGING_MEDIA_FRAMING]: {
        score: 2,
        text: 'Rapid ageing and "successful ageing" make elder health a routine news theme. National newspapers report life tables, system capacity, and prevention programmes in accessible language; the dominant frame is high life expectancy, active ageing, and care — not geroscience as everyday vocabulary. University research on biology of ageing remains specialist relative to mainstream outlets.',
        links: [
          { label: 'The Straits Times — life expectancy 2024 (DOS)', url: 'https://www.straitstimes.com/singapore/life-expectancy-of-singapores-population-rises-in-2024-marking-improvement-over-covid-19-years', date: 'May 2025', comment: 'Flagship daily — vital statistics and public-health context' },
          { label: 'The Straits Times — super-aged society and health system', url: 'https://www.straitstimes.com/opinion/singapore-crosses-the-super-aged-threshold-in-2026-can-its-health-system-cope', comment: 'Opinion — demographic transition and care/prevention framing' },
        ],
      },
      [SocialReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 3,
        text: 'HSA bars therapeutic and disease claims on health supplements and requires substantiation on request; dealer guidelines list impermissible endocrine and “anti-aging”-adjacent claims. Health products regulation includes removal orders for non-compliant articles. SMC ethical codes restrict unjustified treatment claims and advertising. TCM practice is separately licensed; general wellness/longevity e-commerce still creates enforcement lag — composite rung 3.',
        links: [
          { label: 'HSA — Health supplement claims', url: 'https://www.hsa.gov.sg/health-supplements/claims', comment: 'L+B — prohibited claim classes and substantiation duty' },
          { label: 'HSA — Health products regulation', url: 'https://www.hsa.gov.sg/health-products-regulation', comment: 'L — regulatory framework for health products' },
          { label: 'SMC — Guidelines', url: 'https://www.smc.gov.sg/guidelines', comment: 'L — professional conduct and advertising expectations' },
        ],
      },
    },
    [SocietalField.POLITICAL_READINESS]: {
      [PoliticalReadinessClaim.POLICY_COMMITMENT]: {
        score: 4,
        text: 'R: NRF Healthy Longevity programme and NMRC Healthy Longevity Grand Challenge provide named research funding lines (L+B). P: MOH Action Plan for Successful Ageing and Healthier SG are executive-led national programmes with quantified service and population-health targets — P. I: National AI strategy and Smart Nation / health IT (GovTech, MOH digital services under Healthier SG) supply the I bucket with L tied to health delivery. Inter-ministry coordination (MOH, NRF, GovTech) supports rung-3-style breadth. Cap at 4: rung 5 would require plan-law-level statutory KPI plus protected baseline appropriations for R, P, and I evidenced together across two political cycles in primary budget law — Singapore\'s model is strong but not scored 5 under that bar.',
        links: [
          { label: 'NRF — Healthy Longevity National Programme', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'R+L+B — national research programme (NRF)' },
          { label: 'MOH — Action Plan for Successful Ageing', url: 'https://www.moh.gov.sg/our-healthcare-system/action-plan-for-successful-ageing', comment: 'P+L — cross-agency plan; quantified targets to 2030' },
          { label: 'MOH — Healthier SG', url: 'https://www.moh.gov.sg/healthier-sg', date: 'from 2023', comment: 'P+I — national preventive care enrolment; digital and primary-care infrastructure' },
        ],
      },
      [PoliticalReadinessClaim.LEGISLATIVE_SALIENCE]: {
        score: 3,
        text: 'Government and statutory research funders treat "healthy longevity" as a named national R&D line (NMRC Healthy Longevity Global Grand Challenge through 2025; NRF ecosystem initiative on Human Health and Potential; MOH Action Plan for Successful Ageing). PM-level National Day Rally 2024 acknowledged demographic ageing and family-size trends as national context. Parliament is not a competitive multi-party arena, so the rung-4 "parties compete" criterion is weak; the score reflects documented elite and agency mission language plus budgetary follow-through, not electoral bidding wars.',
        links: [
          { label: 'NMRC — Healthy Longevity Global Grand Challenge', url: 'https://www.nmrc.gov.sg/grants/competitive-research-grants/healthy-longevity-global-grand-challenge/', date: 'through 2025', comment: 'Research council programme scope and timeline' },
          { label: 'NRF — Human Health and Potential (RIE)', url: 'https://www.nrf.gov.sg/rie-ecosystem/ecosystem-wide-fis/hhp-fis', comment: 'NRF ecosystem funding initiative including longevity-relevant framing' },
          { label: 'PMO — National Day Rally 2024', url: 'https://www.pmo.gov.sg/Newsroom/National-Day-Rally-2024', date: 'Aug 2024', comment: 'Official PMO page — demographic ageing in national narrative' },
        ],
      },
    },

  },
}

export default singapore
