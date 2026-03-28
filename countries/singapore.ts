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

const singapore: CountryData = {
  country: Country.SINGAPORE,

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 5,
        text: 'Singapore offers the Employment Pass (EP) for professionals and the Tech.Pass for established tech leaders; both are fast and employer-independent at the senior level. The Overseas Networks & Expertise (ONE) Pass (2023) is purpose-built for top global talent — no employer sponsorship required, covers entire family, renewable after 5 years. MOM processing is digitised and predictable. Singapore is effectively the easiest major research hub in Asia to immigrate to as a senior scientist.',
        links: [{ label: 'ONE Pass – MOM Singapore', url: 'https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass', comment: 'ONE Pass — no employer sponsor required; covers top researchers, entrepreneurs, artists' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 5,
        text: 'EP applications: 3–8 weeks. ONE Pass: 8 weeks. In practice, A*STAR-affiliated institutions can apply via fast-track channels with decisions in 2–3 weeks. MOM\'s online portal provides real-time status. No legacy paper processing; fully digital. Singapore has consistently the shortest processing times for research immigration of any major science hub.',
        links: [{ label: 'MOM EP Processing Times', url: 'https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-an-employment-pass', comment: 'MOM EP application guide — typical 3–8 week processing' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 5,
        text: 'Singapore universities and A*STAR accept foreign doctoral degrees from all major international institutions without re-examination. MOM does not require credential verification for EP beyond degree confirmation by employer. NUS, NTU, and A*STAR have direct academic equivalence agreements with leading global institutions. No barriers for graduates from QS top-500 universities.',
        links: [{ label: 'A*STAR Research Careers', url: 'https://www.a-star.edu.sg/Scholarships/About-ASTAR-Scholarships', comment: 'A*STAR hiring — full recognition of international degrees; no re-qualification required' }],
      },
    },
    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.MEDICAL_LICENCE_PORTABILITY]: {
        score: 4,
        text: 'SMC (Singapore Medical Council) recognises medical degrees from approximately 160 approved schools across 30 countries for full registration. Specialists from recognised institutions can apply directly without re-sitting licensing exams; many achieve provisional registration within 3 months. Faster than most comparable jurisdictions — UK, US, and Australia take significantly longer for equivalent specialists.',
        links: [{ label: 'Singapore Medical Council Registration', url: 'https://www.smc.gov.sg/registration/overview', comment: 'SMC — medical registration for foreign-trained doctors; ~160 recognised schools' }],
      },
      [ClinicianImmigrationClaim.FAST_TRACK_SPECIALIST]: {
        score: 4,
        text: 'MOH and the academic medical centres (NUHS, SingHealth, NHG) actively recruit senior international specialists via the Specialist Accreditation Board. Geriatric medicine specialists from UK, Australia, and US can achieve conditional registration within 2–3 months. Singapore has experienced a sustained shortage of geriatricians, creating strong institutional pull for international recruitment.',
        links: [{ label: 'MOH Specialist Accreditation', url: 'https://www.moh.gov.sg/hpp/doctors/registration-for-medical-practitioners', comment: 'MOH — Specialist Accreditation Board; fast-track for senior international clinicians' }],
      },
    },
    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.PHD_THROUGHPUT]: {
        score: 3,
        text: 'NUS and NTU each produce ~1,000 PhDs per year across all disciplines. A*STAR funds ~1,000 local and international PhD students at any time via the SINGA (Singapore International Graduate Award) programme. Singapore deliberately keeps PhD numbers moderate — quality over quantity is the explicit policy. International PhD students constitute ~40% of enrolees, maintaining high standards.',
        links: [{ label: 'SINGA Graduate Award', url: 'https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa', comment: 'A*STAR SINGA — 1,000+ international PhD scholars; aging biology featured track' }],
      },
      [ResearchTrainingClaim.POSTDOC_CONDITIONS]: {
        score: 4,
        text: 'A*STAR International Fellowship and NUS postdoctoral programmes offer SGD 60–80k salaries (competitive in Asia-Pacific context), clear paths to permanent research positions, and full EP immigration support. A*STAR explicitly offers transition pathways to industry (Singapore Biomedical Cluster). Cost of living is high, moderating the real-terms advantage, but conditions compare well to UK/EU for postdocs.',
        links: [{ label: 'A*STAR International Fellowship', url: 'https://www.a-star.edu.sg/Scholarships/for-postdoctoral-researchers/astar-international-fellowship', comment: 'A*STAR IF — SGD 60–80k salary; return to Singapore for postdoctoral research' }],
      },
      [ResearchTrainingClaim.AGING_SPECIFIC_TRAINING]: {
        score: 3,
        text: 'NUS Centre for Healthy Longevity (CHL), Duke-NUS Geriatric Medicine Programme, and A*STAR\'s Human Aging Programme provide specialised training tracks. The Healthy Longevity Catalyst Award specifically supports early-career scientists in longevity biology. NUHS has a formal geriatric medicine training programme. Singapore\'s small scale limits absolute PhD numbers in aging, but per-capita training density is world-class.',
        links: [{ label: 'NUS Centre for Healthy Longevity', url: 'https://medicine.nus.edu.sg/chl/', comment: 'NUS CHL — longevity research training; Healthy Longevity Catalyst Award for early-career researchers' }],
      },
    },
    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_CURRICULUM]: {
        score: 4,
        text: 'Singapore\'s JCST (Joint Committee on Specialist Training) geriatric medicine programme is one of the most structured in Asia. Duke-NUS and NUS Yong Soo Lin School of Medicine both include mandatory geriatrics rotations and geroscience modules. MOH Polyclinics incorporate healthy ageing and frailty screening into GP training. A formal geriatric medicine specialist track produces ~20–25 new geriatricians per year.',
        links: [{ label: 'Duke-NUS Geriatric Medicine', url: 'https://www.duke-nus.edu.sg/research/research-programmes/geriatric-medicine', comment: 'Duke-NUS — geriatric medicine training programme; geroscience modules included' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_SCIENCE_IN_CME]: {
        score: 3,
        text: 'Singapore Medical Association and College of Physicians offer CME modules on healthy aging, frailty, and preventive medicine. A*STAR has run longevity science workshops for clinicians since 2022. The Healthy Ageing Programme includes CPD credit for frailty assessment training. Biological aging biomarkers are not yet a standard CME topic; coverage is good but not yet systematic.',
        links: [{ label: 'SMA CME Programmes', url: 'https://www.sma.org.sg/cme/', comment: 'Singapore Medical Association CME — includes healthy ageing and geriatric medicine modules' }],
      },
    },
    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 4,
        text: 'A*STAR Clinician-Scientist Investigator Award (CSIA) provides 50–75% protected research time and salary support for clinician-scientists at Singapore\'s academic medical centres. SingHealth Duke-NUS Academic Medical Centre has a formal Clinician-Scientist Development Programme with explicit career tracks. NUHS and NHG have equivalent programmes. Singapore has the most formalised clinician-scientist pathway in Southeast Asia.',
        links: [{ label: 'A*STAR CSIA', url: 'https://www.a-star.edu.sg/Scholarships/for-medical-professionals/clinician-scientist-investigator-award', comment: 'A*STAR CSIA — 50–75% protected research time; salary support for academic clinicians' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.PUBLIC_FUNDING_INTENSITY]: {
        score: 5,
        text: 'Singapore spends ~1.0% of GDP on public R&D (National Research Foundation budget), with total R&D at ~2.2% of GDP including industry. NRF, A*STAR, and MOH Holdings collectively provide SGD 600M+ annually in biomedical research funding. The Research, Innovation and Enterprise (RIE) 2025 plan allocated SGD 25B over 5 years for national R&D. Per-researcher public funding is among the highest in the world.',
        links: [{ label: 'NRF Research Innovation Enterprise 2025', url: 'https://www.nrf.gov.sg/rie2025', comment: 'SGD 25B allocation over 5 years — includes biomedical sciences as priority domain' }],
      },
      [ResearchFundingClaim.AGING_SPECIFIC_PROGRAMMES]: {
        score: 5,
        text: 'Singapore has uniquely explicit national aging research mandates: A*STAR\'s Human Aging Programme, the NUS Centre for Healthy Longevity (CHL), the Healthy Longevity Catalyst Award (USD 1.5M prizes), and the Singapore Programme for Integrative Neuroscience (aging focus). The "Healthy Longevity" initiative is part of the national strategy with explicit government commitment. Singapore has one of the world\'s highest per-capita investments in longevity science.',
        links: [
          { label: 'Healthy Longevity Catalyst Awards', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity-catalyst-awards', comment: 'NRF — USD 1.5M awards for longevity research breakthroughs; part of national healthy aging strategy' },
          { label: 'A*STAR Human Aging Programme', url: 'https://www.a-star.edu.sg/research/research-entities/institutes/gis', comment: 'A*STAR GIS Human Aging Programme — systems biology of human aging' },
        ],
      },
      [ResearchFundingClaim.PRIVATE_LONGEVITY_INVESTMENT]: {
        score: 3,
        text: 'Singapore\'s biomedical VC ecosystem is growing: Temasek, GIC-backed Helios Investment Partners, and international longevity VCs (Longevity Vision Fund, Khosla Ventures) have Singapore portfolio companies. Gero.ai, Hummingbird Biosciences, and several stealth-mode longevity biotech companies are HQ\'d or have R&D presence in Singapore. The ecosystem is smaller than Israel or the US but larger than Sweden or Switzerland in longevity-specific private investment.',
        links: [{ label: 'Singapore Biomedical Sciences Industry', url: 'https://www.edb.gov.sg/en/our-industries/biomedical-sciences.html', comment: 'EDB — Singapore biomedical sciences sector; Temasek and GIC funds active in longevity space' }],
      },
    },
    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.RESEARCH_PERMISSIVENESS]: {
        score: 4,
        text: 'BAC (Bioethics Advisory Committee) framework permits somatic gene editing research and germline research for scientific purposes under strict oversight. Singapore allows research on human embryos up to 14 days — comparable to the UK. CRISPR-based aging research is unrestricted at the somatic level. A*STAR Genome Institute of Singapore actively conducts gene editing research without the bureaucratic barriers present in most EU member states.',
        links: [{ label: 'Bioethics Advisory Committee Singapore', url: 'https://www.bioethics-singapore.gov.sg/', comment: 'BAC — human biomedical research governance; permits somatic and limited germline research' }],
      },
      [GeneEditingClaim.CLINICAL_TRANSLATION_PATHWAY]: {
        score: 3,
        text: 'HSA (Health Sciences Authority) has a Cell, Tissue and Gene Therapy (CTGT) framework that includes a pre-submission consultation for gene therapy products. Clinical trials of gene therapies in aging-related conditions are feasible under current regulations. HSA follows ICH guidelines and has mutual recognition with FDA and EMA for GMP standards. No specific fast-track for longevity gene therapies, but the regulatory environment is clear and efficient.',
        links: [{ label: 'HSA Cell Tissue Gene Therapy', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/cell-tissue-and-gene-therapy-products', comment: 'HSA CTGT framework — gene therapy regulation; pre-submission consultation available' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.DEDICATED_BODY]: {
        score: 4,
        text: 'NRF (National Research Foundation) functions as a DARPA-equivalent for Singapore, funding high-risk translational research. The Biomedical Sciences Industry Partnership Office (IPO) at A*STAR specifically bridges basic research and clinical translation. The Healthy Longevity Catalyst Programme is explicitly structured as a prize-based breakthrough programme. Singapore\'s small size means coordination between research and clinical translation is inherently faster than in larger countries.',
        links: [{ label: 'NRF Healthy Longevity Initiative', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'NRF — dedicated healthy longevity programme with catalyst prizes and institutional coordination' }],
      },
      [BreakthroughAgencyClaim.FUNDING_SCALE]: {
        score: 4,
        text: 'RIE2025 allocates SGD 25B for national R&D over 5 years. Within biomedical sciences, the allocation is substantial in per-capita terms — Singapore has ~5.9M people. The Healthy Longevity programme has dedicated envelopes. For a city-state, this is extraordinary — equivalent to a large European country\'s biomedical research budget concentrated on 5.9M people.',
        links: [{ label: 'RIE2025 Biomedical Sciences', url: 'https://www.nrf.gov.sg/rie2025', comment: 'SGD 25B RIE plan — biomedical sciences is a core priority domain; longevity explicitly included' }],
      },
      [BreakthroughAgencyClaim.RISK_TOLERANCE]: {
        score: 4,
        text: 'Singapore\'s government has demonstrated willingness to invest in novel and unproven longevity research: the Healthy Longevity Catalyst Awards explicitly fund early-stage, speculative longevity interventions. A*STAR\'s funding culture accepts higher failure rates than most European research councils. The prize structure encourages ambitious target-setting. This risk appetite is unusual for a government funder.',
        links: [{ label: 'Healthy Longevity Catalyst Awards Criteria', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity-catalyst-awards', comment: 'Prize programme criteria — explicitly funds speculative longevity intervention research' }],
      },
    },
    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'HSA has a provisional authorisation pathway for products with promising early data where full evidence is pending — applicable to orphan and innovative therapies. The CTGT framework includes conditional approval with post-market surveillance requirements. Singapore is not just a regulatory follower; HSA has been ahead of FDA/EMA in some regulatory innovations, e.g. for CAR-T therapies in Asian populations.',
        links: [{ label: 'HSA Provisional Authorisation', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/provisional-authorisation', comment: 'HSA — provisional authorisation pathway for innovative therapies pending full evidence' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 3,
        text: 'HSA accepts rolling submission for innovative products — companies can submit data modules as they become available rather than waiting for a complete package. This is standard for ASEAN-context products. For longevity products specifically, no distinct rolling review track exists, but the innovative product pathway accommodates this.',
        links: [{ label: 'HSA Rolling Submission', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/drug-registration', comment: 'HSA drug registration — rolling submission for innovative therapeutic products' }],
      },
      [AdaptiveLicensingClaim.REGISTRY_LINKAGE]: {
        score: 3,
        text: 'Singapore\'s National Registry of Diseases Office (NRDO) maintains disease registries that can inform adaptive approval decisions. SingHealth and NUHS EHR systems allow post-market surveillance data collection tied to conditional approvals. Not yet automated, but the infrastructure for registry-linked adaptive licensing exists and has been used in oncology.',
        links: [{ label: 'National Registry of Diseases', url: 'https://www.nrdo.gov.sg/', comment: 'NRDO — national disease registries; supports post-market surveillance for conditional approvals' }],
      },
    },
    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.PLATFORM_TRIALS]: {
        score: 3,
        text: 'Singapore has run platform trials in oncology (ETOP, SingTrials) and COVID-19, but no dedicated aging platform trial is running. The NUS CHL has proposed adaptive platform designs for aging interventions. SCRI (Singapore Clinical Research Institute) has the statistical and operational capacity to run complex adaptive trials. Platform trial capability exists; aging-specific deployment is the next step.',
        links: [{ label: 'Singapore Clinical Research Institute', url: 'https://www.scri.edu.sg/', comment: 'SCRI — Singapore\'s clinical trial coordination hub; adaptive trial expertise' }],
      },
      [TrialDesignClaim.REGISTER_BASED_TRIALS]: {
        score: 3,
        text: 'Singapore\'s national EHR system (NEHR — National Electronic Health Record) links all public hospital records. Several trials have used EHR extraction for eligibility screening. The population is small (~5.9M) but highly surveilled — near-complete coverage in public healthcare. Register-based RCT methodology is feasible; no formal aging-focused register-based trial has been run at national scale.',
        links: [{ label: 'NEHR National Electronic Health Record', url: 'https://www.ihis.com.sg/Project_Showcase/Healthcare_IT_Standards/Pages/National_Electronic_Health_Record.aspx', comment: 'NEHR — national EHR system; all public hospital records linked; used for trial eligibility screening' }],
      },
      [TrialDesignClaim.BAYESIAN_ADAPTIVE]: {
        score: 3,
        text: 'SCRI statisticians are trained in Bayesian adaptive design. HSA accepts Bayesian approaches in regulatory submissions. Singapore participated in international Bayesian adaptive trial consortia. The academic capacity is there; systematic use in aging trials specifically lags behind the theoretical capability.',
        links: [{ label: 'SCRI Statistics', url: 'https://www.scri.edu.sg/research/statistics-research', comment: 'SCRI statistics group — Bayesian adaptive trial design expertise' }],
      },
    },
    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTS]: {
        score: 4,
        text: 'HSA\'s Regulatory Sandbox for medical devices and digital health products is one of the most active in Asia-Pacific. Therapeutics sandboxes exist via the provisional authorisation pathway. The Singapore government explicitly uses sandbox mechanisms across sectors (MAS, IMDA, MOH) as a policy tool. For longevity biotech, the combination of provisional authorisation and HSA\'s pre-submission consultation process functions as an effective sandbox.',
        links: [{ label: 'HSA Regulatory Sandbox', url: 'https://www.hsa.gov.sg/medical-devices/overview/regulatory-sandbox', comment: 'HSA medical device regulatory sandbox — active; digital health and novel devices prioritised' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_SPECIFIC]: {
        score: 3,
        text: 'No longevity-specific regulatory sandbox exists as a named programme. However, the Healthy Longevity national programme creates institutional context for HSA to apply sandbox principles to longevity product candidates. A*STAR and HSA have held dialogue sessions on longevity regulatory pathways. The sandbox readiness exists; formal instantiation for longevity specifically has not yet occurred.',
        links: [{ label: 'NRF Healthy Longevity Programme', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'NRF healthy longevity — creates political context for HSA sandbox application to longevity products' }],
      },
    },
    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.BIOMARKER_QUALIFICATION]: {
        score: 3,
        text: 'HSA has not formally qualified any biological aging biomarkers as surrogate endpoints. However, SCRI and NUS CHL are actively developing epigenetic clock validation in the Singapore Chinese Health Study cohort (65k+ participants). Functional aging composites (SPPB, grip strength) are accepted in regulatory submissions by HSA following ICH guidance. The qualification science is progressing; regulatory formalisation is the next step.',
        links: [{ label: 'Singapore Chinese Health Study', url: 'https://www.sph.nus.edu.sg/research/research-centres-programmes-groups/singapore-chinese-health-study/', comment: 'NUS SPH — 65k+ longitudinal cohort; used for aging biomarker validation studies' }],
      },
      [AgingEndpointClaim.COMPOSITE_ENDPOINTS]: {
        score: 3,
        text: 'HSA accepts composite functional endpoints for geriatric indications following ICH E7 guidance. The Singapore Longitudinal Ageing Study (SLAS) has validated composite frailty and functional decline endpoints in the local population. Duke-NUS has proposed modified aging composites appropriate for Asian populations (different sarcopenia thresholds, gait speed norms). Pan-Asian endpoint standards are an active area.',
        links: [{ label: 'Singapore Longitudinal Ageing Studies', url: 'https://blog.nus.edu.sg/slas/', comment: 'SLAS — national aging cohort; composite endpoint validation for Asian populations' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CANCER_SCREENING_COVERAGE]: {
        score: ScreeningLevel.NATIONAL_PROGRAMME,
        text: 'Screen for Life (SFL) is Singapore\'s national programme covering colorectal, breast, and cervical cancer with subsidised rates for Singaporeans. The Integrated Screening Programme extends to additional chronic conditions. Uptake rates are improving but below Scandinavian standards.',
        links: [{ label: 'Screen for Life', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'National subsidised cancer screening programme for Singapore residents' }],
      },
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK_SCREENING]: {
        score: ScreeningLevel.NATIONAL_PROGRAMME,
        text: 'Screen for Life includes cardiovascular risk assessment (hypertension, dyslipidaemia, diabetes) at polyclinics for all eligible Singaporeans. The National Chronic Disease Management Programme provides structured follow-up. Polyclinic-based delivery ensures high geographic accessibility.',
        links: [{ label: 'Screen for Life – Cardiovascular', url: 'https://www.healthhub.sg/programmes/61/Screen_For_Life', comment: 'SFL — cardiovascular risk screening at polyclinics; subsidised for Singaporeans' }],
      },
      [PopulationScreeningClaim.METABOLIC_SCREENING]: {
        score: ScreeningLevel.NATIONAL_PROGRAMME,
        text: 'Diabetes and metabolic syndrome are screened systematically at polyclinics under SFL. The National Registry of Diseases tracks diabetes prevalence. Singapore has one of the most comprehensive metabolic disease registries in Asia. Pre-diabetes intervention programmes are integrated into primary care.',
        links: [{ label: 'National Registry of Diseases – Diabetes', url: 'https://www.nrdo.gov.sg/', comment: 'NRDO — comprehensive diabetes and metabolic disease registry' }],
      },
      [PopulationScreeningClaim.COGNITIVE_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'The Agency for Integrated Care (AIC) operates dementia screening via Cognitive Impairment Screening (CIST) at polyclinics and AIC centres. Not yet universal — coverage is significant in higher-risk groups but not mandated for all adults at specific age thresholds. The Dementia Action Alliance supports community-level screening outreach.',
        links: [{ label: 'Agency for Integrated Care – Dementia', url: 'https://www.aic.sg/care-services/dementia', comment: 'AIC — dementia and cognitive screening programme; polyclinic and community level' }],
      },
      [PopulationScreeningClaim.BONE_DENSITY_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Singapore Bone Health Foundation and polyclinics provide osteoporosis screening for high-risk groups (post-menopausal women, older adults with risk factors). Not a universal age-triggered programme. FRAX tool is used in primary care. Uptake improved post-MOH guidelines update in 2022.',
        links: [{ label: 'Singapore Bone Health Foundation', url: 'https://www.sbhf.org.sg/', comment: 'Osteoporosis screening and prevention — polyclinic-integrated for risk groups' }],
      },
      [PopulationScreeningClaim.VISION_HEARING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Primary care includes vision and hearing referral pathways. No universal national hearing screening programme for adults, though neonatal screening is complete. The National Eye Centre provides structured diabetic retinopathy screening (all diabetic patients) and cataract screening.',
        links: [{ label: 'Singapore National Eye Centre', url: 'https://www.snec.com.sg/', comment: 'Structured retinopathy and cataract screening — high coverage in diabetic populations' }],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'AIC runs the Integrated Frailty Programme which includes grip strength and gait speed assessment (SARC-F tool) for adults over 65. Not yet universal — concentrated in polyclinic and active ageing centres. Singapore is one of few countries where sarcopenia screening is part of a formal national aging programme, with diagnostic criteria adapted for Asian body composition.',
        links: [{ label: 'AIC Frailty Programme', url: 'https://www.aic.sg/care-services/frailty', comment: 'AIC — frailty and sarcopenia screening in polyclinics; Asian sarcopenia thresholds applied' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.NO_PROGRAMME,
        text: 'No national sleep apnea screening programme. Singapore General Hospital and NUH Sleep Centres handle referrals from primary care. Polyclinic-based STOP-BANG questionnaire screening is used informally by some physicians but not systematised. Given Singapore\'s high prevalence of OSA (estimated 30%+ of adults), this is a recognised gap.',
        links: [{ label: 'Singapore General Hospital Sleep Centre', url: 'https://www.sgh.com.sg/', comment: 'SGH Sleep Centre — referral-based; no national proactive OSA screening programme' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 3,
        text: 'MOH can initiate new national screening programmes through the Health Promotion Board relatively quickly — the Screen for Life expansion to additional conditions has been done in 2–3 year cycles. HPB runs pilots before national rollout, and the small population enables rapid evaluation. The process is faster than most comparable jurisdictions but not as adaptive as the most agile systems.',
        links: [{ label: 'Health Promotion Board', url: 'https://www.hpb.gov.sg/', comment: 'HPB — national health promotion; Screen for Life administration; 2–3 year programme expansion cycles' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.LONGITUDINAL_COHORT]: {
        score: 4,
        text: 'The Singapore Chinese Health Study (SCHS, 65k participants), Singapore Longitudinal Ageing Studies (SLAS I and II, 4,500+), and the MEC (Multi-Ethnic Cohort) provide foundational longitudinal aging data. All three follow participants with regular biomarker collection. Singapore\'s multi-ethnic population (Chinese, Malay, Indian) provides unique value for generalisation across Asian populations.',
        links: [{ label: 'Singapore Longitudinal Ageing Studies', url: 'https://blog.nus.edu.sg/slas/', comment: 'SLAS — 4,500+ participants; comprehensive aging biomarker collection with deep phenotyping' }],
      },
      [BiomarkerCollectionClaim.BIOBANK_DEPTH]: {
        score: 4,
        text: 'The Singapore Biobank (SBB) and A*STAR\'s PRECISE (Precision Health Research, Singapore) national biobank collect genomic, proteomic, and metabolomic data linked to clinical records. PRECISE Phase II (2021–2025) targets 100,000 whole-genome sequences. The multi-ethnic composition is a unique scientific asset for aging biomarker research. Aging-specific biobank samples include epigenetic clock profiling from several cohorts.',
        links: [{ label: 'PRECISE National Precision Medicine', url: 'https://www.nrf.gov.sg/programmes/precision-medicine', comment: 'PRECISE — 100,000 WGS target; multi-ethnic biobank with aging biomarker linkage' }],
      },
      [BiomarkerCollectionClaim.OMICS_DEPTH]: {
        score: 4,
        text: 'A*STAR Genome Institute of Singapore (GIS) runs comprehensive multi-omics (genomics, transcriptomics, proteomics, metabolomics) on aging cohorts. The Singapore Immunology Network (SIgN) profiles immune aging (immunosenescence). Epigenetic clock validation using PhenoAge, GrimAge, and DunedinPACE has been conducted in SCHS and SLAS samples. Singapore\'s omics capability is world-class in absolute terms.',
        links: [{ label: 'A*STAR Genome Institute of Singapore', url: 'https://www.a-star.edu.sg/gis', comment: 'GIS — multi-omics aging research; immunosenescence and epigenetic clock profiling in Singapore cohorts' }],
      },
      [BiomarkerCollectionClaim.EHR_LINKAGE]: {
        score: 4,
        text: 'NEHR (National Electronic Health Record) links public hospital records across all three public health clusters (SingHealth, NUHS, NHG). Research linkage is available with IRB approval and is actively used for cohort studies. The SingHEALTH Duke-NUS Academic Medical Centre data warehouse integrates EHR, biobank, and research data. Coverage is near-complete for the 85%+ of Singapore residents using public healthcare.',
        links: [{ label: 'NEHR Research Linkage', url: 'https://www.ihis.com.sg/', comment: 'NEHR — national EHR; research linkage protocol available; 85%+ population coverage via public health clusters' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 4,
        text: 'Singapore\'s small, well-organised population with comprehensive EHR coverage enables fast trial enrolment. SCRI provides professional trial operations. Academic medical centres (SGH, NUH, Tan Tock Seng) have high clinical trial volumes. Singapore\'s strategic location as Asia-Pacific hub attracts international sponsors. Average initiation-to-first-patient timelines are 3–4 months — among the fastest in the region.',
        links: [{ label: 'Singapore Clinical Research Institute', url: 'https://www.scri.edu.sg/', comment: 'SCRI — Singapore trial operations hub; fast initiation timelines; international sponsor preferred site' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'HSA\'s RWE guidance (2019, updated 2022) enables real-world evidence for post-market studies and label extensions. Accepted for pre-market in select contexts. Singapore participates in the APEC harmonisation of RWE standards. For aging prevention trials, RWE as primary evidence is feasible under the provisional authorisation pathway, but traditional RCT remains the standard for pivotal submissions.',
        links: [{ label: 'HSA Real-World Evidence Guidance', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/real-world-evidence', comment: 'HSA RWE framework — accepted for post-market; selective pre-market acceptance for innovative products' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'Functional aging composites (gait speed, grip strength, SPPB, Fried frailty criteria) are used in Singapore aging trials including those run by NUS CHL and Duke-NUS. Biological age surrogate endpoints (epigenetic clocks) have been used as exploratory secondary endpoints in A*STAR-funded studies. Not yet in regulatory submissions to HSA. Singapore is ahead of most Asian jurisdictions in endpoint sophistication.',
        links: [{ label: 'NUS CHL Clinical Studies', url: 'https://medicine.nus.edu.sg/chl/', comment: 'NUS CHL — aging trials using functional composites and biological age surrogates as exploratory endpoints' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 3,
        text: 'Several aging mechanism studies are running in Singapore: NMN trials at NUS, senolytic pilot studies at Duke-NUS, metformin aging prevention studies in collaboration with TAME (Singapore site). Singapore is a co-investigator site for the TAME trial (metformin). The scale is Phase I–II; no Singapore-initiated Phase III longevity prevention trial is registered.',
        links: [{ label: 'TAME Trial Information', url: 'https://www.afar.org/tame-trial', comment: 'TAME — Singapore site included; metformin aging prevention trial; Phase III multi-site' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 4,
        text: 'SCRI provides national clinical trial coordination. The NUS CHL acts as a hub for aging intervention trials. MOH Holdings provides coordinated access to all three public health clusters for multi-site trials. The Singapore Consortium for Longevity (informal network of NUS, Duke-NUS, A*STAR, NUHS) coordinates aging research. For a city-state, this level of coordination is equivalent to a national system.',
        links: [{ label: 'SCRI National Coordination', url: 'https://www.scri.edu.sg/research/coordination', comment: 'SCRI — national trial coordination; single-IRB system covering all public health clusters' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'ClinicalTrials.gov and the local CTRI (Clinical Trials Registry, part of WHO network) are the primary registers. HealthHub patient portal provides some trial information, but proactive EHR-based patient-trial matching is not yet systematised nationally. Singapore\'s polyclinic system enables GP-level referral to trials efficiently, but no automated matching platform exists. Small population size partly compensates — researchers can enumerate eligible patients directly.',
        links: [{ label: 'Singapore ClinicalTrials.gov entries', url: 'https://clinicaltrials.gov/search?cond=&term=singapore&type=&rslt=&age_v=&gndr=&intr=&titles=&outc=&spons=&lead=&id=&cntry=SG&state=&city=&dist=&locn=&rsub=&strd_s=&strd_e=&prcd_s=&prcd_e=&sfpd_s=&sfpd_e=&rfpd_s=&rfpd_e=&lupd_s=&lupd_e=&sort=', comment: 'Active Singapore-site clinical trials — 1,500+ registered studies' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 3,
        text: 'HSA does not formally recognise aging as a therapeutic indication. However, the Healthy Longevity national strategy creates political and institutional context that is closer to recognition than any other Asian jurisdiction. Sarcopenia and frailty are accepted aging-adjacent indications. HSA has engaged in international dialogues (FDA TAME discussions, EMA concept papers) on aging as an indication. The trajectory is clearly toward recognition, with active government interest.',
        links: [{ label: 'HSA Innovative Medicines', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/drug-registration', comment: 'HSA drug registration — aging-adjacent indications (frailty, sarcopenia) accepted; systemic aging under discussion' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'HSA accepts functional aging endpoints (SPPB, grip strength, frailty indices) following ICH E7. Biological age surrogates are in early regulatory dialogue. The SCRI and NUS CHL have proposed Asian-adapted aging endpoint standards to HSA. For Asian populations specifically, Singapore may be the most natural place to qualify Asian-norm aging endpoints, which differ from Western populations in sarcopenia thresholds and functional performance baselines.',
        links: [{ label: 'HSA Geriatric Indication Guidelines', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/scientific-guidelines', comment: 'HSA scientific guidelines — functional aging endpoints accepted; biological age surrogates in dialogue' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.NATIONAL_HEALTH_DATA_PLATFORM]: {
        score: 4,
        text: 'MOH Holdings and the Integrated Health Information Systems (IHiS) maintain the NEHR and related national data infrastructure. Controlled research access is available via the TRUST (Trusted Research and Real World-Data Utilisation and Sharing Tech) platform — Singapore\'s first health data research platform with privacy-preserving compute. TRUST allows federated analysis without data leaving secure environments.',
        links: [{ label: 'TRUST Health Data Platform', url: 'https://www.trustplatform.sg/', comment: 'TRUST — Singapore national health data research platform; privacy-preserving federated compute' }],
      },
      [OpenDataClaim.RESEARCH_ACCESS_SPEED]: {
        score: 3,
        text: 'TRUST platform access requires IRB approval and data governance review — process takes approximately 3–6 months. Individual cluster data access (SingHealth SHERPA, NUHS Data Access) can be faster for in-house researchers. Access speed is competitive by international standards but slower than the most efficient systems (e.g. Danish health data registers).',
        links: [{ label: 'TRUST Data Access Process', url: 'https://www.trustplatform.sg/', comment: 'TRUST — 3–6 month access process; IRB and data governance review required' }],
      },
      [OpenDataClaim.DATA_LINKAGE_CAPABILITY]: {
        score: 4,
        text: 'NEHR enables longitudinal record linkage across all three public health clusters. PRECISE national biobank data is linkable to NEHR. Registry linkage (NRDO disease registries, cancer registry, death registry) is available for research. Singapore has one of the most complete national-level health data linkage capabilities in Asia-Pacific, comparable in architecture (if not scale) to the Nordic systems.',
        links: [{ label: 'IHiS Data Integration', url: 'https://www.ihis.com.sg/', comment: 'IHiS — national health IT; NEHR + registry + biobank linkage capability' }],
      },
    },
    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.HL7_FHIR_ADOPTION]: {
        score: 4,
        text: 'IHiS (Integrated Health Information Systems) has mandated FHIR R4 for all new health IT systems in Singapore\'s public clusters since 2022. National Digital Health Blueprint (2023) sets FHIR as the national interoperability standard. All new EHR modules must be FHIR-compliant. Singapore is one of the more advanced FHIR adopters in Asia-Pacific.',
        links: [{ label: 'Singapore Digital Health Blueprint', url: 'https://www.moh.gov.sg/resources-statistics/reports/national-digital-health-blueprint', comment: 'MOH National Digital Health Blueprint — FHIR R4 mandated as national interoperability standard' }],
      },
      [InteroperabilityClaim.CROSS_BORDER_DATA]: {
        score: 3,
        text: 'Singapore has bilateral health data sharing agreements with Malaysia (emergency data) and is a founding member of ASEAN health data frameworks. Personal Data Protection Act (PDPA) permits cross-border data transfers under adequate protection arrangements. For research data specifically, international sharing is feasible under IRB and TRUST platform governance. Singapore is an active participant in APEC CBPR for health data.',
        links: [{ label: 'PDPA Cross-Border Transfers', url: 'https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act', comment: 'PDPA — cross-border data transfer framework; research data sharing with adequate protection' }],
      },
    },
    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.COMMON_DATA_MODELS]: {
        score: 3,
        text: 'SCRI and TRUST use OMOP-CDM for federated research analyses. IHiS has mapped NEHR data to OMOP for research purposes. Not yet universal across all datasets, but the national research infrastructure is converging on OMOP as the common data model. This enables participation in global federated networks (OHDSI).',
        links: [{ label: 'OHDSI Singapore participation', url: 'https://www.ohdsi.org/', comment: 'Singapore participates in OHDSI federated network via SCRI and TRUST OMOP-mapped data' }],
      },
      [ResearchClinicalClaim.FEDERATED_ANALYSIS]: {
        score: 4,
        text: 'TRUST platform is specifically designed for federated analysis — algorithms run at the data source without raw data leaving the secure environment. SingHealth SHERPA and NUHS DataSpace support in-situ analysis. Singapore is among the most technically advanced in Asia for federated health analytics, driven by the government\'s commitment to privacy-preserving research infrastructure.',
        links: [{ label: 'TRUST Federated Analytics', url: 'https://www.trustplatform.sg/', comment: 'TRUST — privacy-preserving federated compute; algorithms run at source without data export' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.ICH_PARTICIPATION]: {
        score: 4,
        text: 'HSA is an ICH observer and implements ICH guidelines as regulatory standards. Singapore was the first Asian regulator (outside Japan) to formally adopt ICH E17 (multi-regional clinical trials). HSA cooperates with FDA, EMA, and TGA under mutual reliance agreements for GMP inspections. Singapore has a history of being ahead of peer regulators in adopting new ICH standards.',
        links: [{ label: 'HSA ICH Participation', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/international-collaborations', comment: 'HSA — ICH observer; early adopter of ICH E17 and other novel guidelines' }],
      },
      [RegulatoryHarmonizationClaim.MUTUAL_RECOGNITION]: {
        score: 4,
        text: 'HSA has mutual reliance arrangements with FDA, EMA, Health Canada, TGA, and Swissmedic for GMP inspections. ASEAN MRA for pharmaceutical products is partially implemented. For innovative products, HSA accepts FDA or EMA approval as supporting evidence in accelerated review. Singapore\'s regulatory credibility makes HSA approval itself accepted by FDA and EMA as reference.',
        links: [{ label: 'HSA International Cooperation', url: 'https://www.hsa.gov.sg/therapeutic-products/overview/international-collaborations', comment: 'HSA — FDA, EMA, TGA, Swissmedic mutual GMP reliance; ASEAN MRA participation' }],
      },
    },
    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BIOBANK_ACCESS]: {
        score: 4,
        text: 'PRECISE national biobank is accessible to qualified international researchers under data sharing agreements. Singapore\'s biobank is particularly valuable for Asian population genetics and aging research. A*STAR has formal sample sharing arrangements with international partners (UK Biobank, Estonian Genome Centre, GISAID). Singapore positions itself explicitly as the gateway biobank for Asian aging research.',
        links: [{ label: 'PRECISE Biobank Access', url: 'https://www.npm.sg/for-researchers/', comment: 'PRECISE/NPM — national precision medicine biobank; international researcher access programme' }],
      },
      [SharedPhysicalInfraClaim.COMPUTING_INFRASTRUCTURE]: {
        score: 4,
        text: 'NSCC (National Supercomputing Centre Singapore) provides HPC infrastructure accessible to academic researchers. A*STAR ACRC (Advanced Computing & Research Centre) has dedicated biomedical computing clusters. TRUST platform has secure cloud-based federated compute. Singapore has invested significantly in shared biomedical computing as a national infrastructure.',
        links: [{ label: 'NSCC Singapore', url: 'https://www.nscc.sg/', comment: 'National Supercomputing Centre — HPC for biomedical research; A*STAR-linked compute clusters' }],
      },
    },
    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_MEMBERSHIP]: {
        score: 4,
        text: 'Singapore participates in: Healthy Longevity Global Challenge (NRF co-founder), TAME trial network, OHDSI federated network, Human Cell Atlas, and multiple ASEAN biomedical research networks. A*STAR has active collaboration agreements with NIH, Wellcome Trust, and European aging research institutes. Singapore consistently punches above its weight in international research consortium leadership.',
        links: [{ label: 'Healthy Longevity Global Challenge', url: 'https://www.healthylongevitychallenge.org/', comment: 'Singapore NRF is a co-founding member and lead funder of the global Healthy Longevity Challenge' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_AGREEMENTS]: {
        score: 3,
        text: 'Singapore has bilateral data sharing MoUs with UK Biobank, NIA (NIH), and several European biobanks. PDPA permits data export to "whitelisted" jurisdictions with adequate protection. The TRUST platform supports controlled international federated analysis without data leaving Singapore. A formal Asia-Pacific health data sharing compact is in development under APEC.',
        links: [{ label: 'PDPA Whitelist Jurisdictions', url: 'https://www.pdpc.gov.sg/', comment: 'PDPA — approved jurisdictions for health data transfer; research MoUs with UK Biobank and NIA' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 5,
        text: 'Singapore consistently ranks among the world\'s highest for institutional trust. Edelman Trust Barometer (2024) shows Singapore at ~85% trust in government and ~80% in science/medicine — among the highest globally. The government\'s competence track record (pandemic management, economic development, healthcare quality) has generated unusually high public confidence in state-directed health programmes. This enables rapid uptake of national screening and preventive interventions.',
        links: [{ label: 'Edelman Trust Barometer 2024 – Singapore', url: 'https://www.edelman.com/trust/2024/trust-barometer', comment: 'Singapore: ~85% government trust, ~80% science/medicine trust — among world\'s highest' }],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 4,
        text: 'Singapore\'s rapidly aging population (20%+ over 65 by 2030) makes longevity science personally relevant to a large and growing segment. The government\'s Action Plan for Successful Ageing frames longevity as a national priority. Media coverage of longevity science is positive and sophisticated. "Healthy aging" has cross-generational resonance in Singapore\'s Confucian-influenced culture. Public acceptance of longevity research is high.',
        links: [{ label: 'Action Plan for Successful Ageing', url: 'https://www.moh.gov.sg/our-healthcare-system/action-plan-for-successful-ageing', comment: 'MOH — national successful ageing action plan; frames longevity as public good' }],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 5,
        text: 'Singapore\'s government has made healthy longevity one of the most explicit national priorities of any government in the world. The Healthy Longevity national programme is PM-office endorsed. NRF co-founded the global Healthy Longevity Challenge. The Healthy Longevity Catalyst Awards (USD 1.5M per award) demonstrate commitment at the level of prize-funded breakthrough science. No country has more explicitly made longevity a government agenda item at this level relative to its size.',
        links: [
          { label: 'NRF Healthy Longevity National Programme', url: 'https://www.nrf.gov.sg/programmes/healthy-longevity', comment: 'NRF — PM-office endorsed national healthy longevity programme; catalyst prize awards' },
          { label: 'Global Healthy Longevity Challenge', url: 'https://www.healthylongevitychallenge.org/', comment: 'Singapore co-founded global longevity challenge; USD 25M prize pool across jurisdictions' },
        ],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 3,
        text: 'HSA enforces the Health Products Act strictly — cosmetic and supplement "anti-aging" claims undergo pre-market review for health claims. The Complementary Health Products (CHP) framework requires safety evidence before sale. HSA proactively removes illegal health products and false anti-aging advertising. Singapore Medical Council sanctions doctors making unsubstantiated anti-aging claims. However, TCM-adjacent anti-aging practices occupy a grey zone, and the booming wellness market has outpaced enforcement capacity in some areas.',
        links: [
          { label: 'HSA Health Products Regulation', url: 'https://www.hsa.gov.sg/health-products-regulation', comment: 'HSA — pre-market control of health product claims; anti-aging advertising requires substantiation' },
          { label: 'SMC Ethical Guidelines', url: 'https://www.smc.gov.sg/guidelines', comment: 'SMC — ethical guidelines including restrictions on unproven treatments and advertising' },
        ],
      },
    },
  },
}

export default singapore
