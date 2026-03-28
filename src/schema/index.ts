// ============================================================
// LONGEVITY STATE — Master Schema
// ============================================================

// ------------------------------------------------------------
// COUNTRIES
// ------------------------------------------------------------
export enum Country {
  USA = 'usa',
  GERMANY = 'germany',
  FRANCE = 'france',
  UK = 'uk',
  NETHERLANDS = 'netherlands',
  SPAIN = 'spain',
  ITALY = 'italy',
  BELGIUM = 'belgium',
  SWEDEN = 'sweden',
  CZECH_REPUBLIC = 'czech_republic',
  SLOVENIA = 'slovenia',
  UAE = 'uae',
  MEXICO = 'mexico',
  VENEZUELA = 'venezuela',
  GEORGIA = 'georgia',
  CHINA = 'china',
  ISRAEL = 'israel',
  SINGAPORE   = 'singapore',
  JAPAN       = 'japan',
  SWITZERLAND = 'switzerland',
}

// ------------------------------------------------------------
// POLICY GROUPS
// ------------------------------------------------------------
export enum PolicyGroup {
  TALENTS = 'talents',
  SCIENCE = 'science',
  TRANSLATION = 'translation',
  HEALTHCARE = 'healthcare',
  DATA = 'data',
  INTERNATIONAL = 'international',
  SOCIETAL = 'societal',
}

// ------------------------------------------------------------
// FIELDS PER GROUP
// ------------------------------------------------------------
export enum TalentsField {
  RESEARCHER_IMMIGRATION      = 'researcher_immigration',
  CLINICIAN_IMMIGRATION       = 'clinician_immigration',
  RESEARCH_TRAINING_PIPELINE  = 'research_training_pipeline',
  CLINICIAN_AGING_TRAINING    = 'clinician_aging_training',
  CLINICIAN_SCIENTIST_PATHWAY = 'clinician_scientist_pathway',
}

export enum ScienceField {
  RESEARCH_FUNDING = 'research_funding',
  GENE_EDITING_REGULATION = 'gene_editing_regulation',
}

export enum TranslationField {
  BIOTECH_BREAKTHROUGH_AGENCIES = 'biotech_breakthrough_agencies',
  ADAPTIVE_LICENSING            = 'adaptive_licensing',
  TRIAL_DESIGN_MODERNIZATION    = 'trial_design_modernization',
  REGULATORY_SANDBOXES          = 'regulatory_sandboxes',
  AGING_ENDPOINT_ECOSYSTEM      = 'aging_endpoint_ecosystem',
}

export enum HealthcareField {
  POPULATION_SCREENINGS = 'population_screenings',
  AGING_BIOMARKER_COLLECTIONS = 'aging_biomarker_collections',
  PREVENTIVE_TRIALS = 'preventive_trials',
  GERO_THERAPEUTIC_ENDPOINTS = 'gero_therapeutic_endpoints',
}

export enum DataField {
  OPEN_ACCESS_TO_HEALTH_DATA = 'open_access_to_health_data',
  INTEROPERABILITY_STANDARDS = 'interoperability_standards',
  STANDARDIZED_TRIAL_ENDPOINTS = 'standardized_trial_endpoints',
}

export enum InternationalField {
  REGULATORY_HARMONIZATION       = 'regulatory_harmonization',
  SHARED_PHYSICAL_INFRASTRUCTURE = 'shared_physical_infrastructure',
  INTERNATIONAL_RESEARCH_NETWORK = 'international_research_network',
}

export enum SocietalField {
  SOCIETAL_READINESS = 'societal_readiness',
}

// ------------------------------------------------------------
// CLAIMS PER FIELD
// Each claim is a specific, verifiable statement about policy.
// Score 1–5: 1 = absent, 3 = partial, 5 = exemplary.
// ------------------------------------------------------------

export enum ResearcherImmigrationClaim {
  VISA_PATHWAY            = 'visa_pathway',
  PROCESSING_SPEED        = 'processing_speed',
  CREDENTIAL_RECOGNITION  = 'credential_recognition',
  EARLY_CAREER_ACCESS     = 'early_career_access',
  LONG_TERM_RETENTION     = 'long_term_retention',
}

export enum ClinicianImmigrationClaim {
  LICENSE_RECOGNITION       = 'license_recognition',
  PATHWAY_CLARITY           = 'pathway_clarity',
  PROCESSING_TIME           = 'processing_time',
  SCOPE_OF_PRACTICE         = 'scope_of_practice',
  RESEARCH_PRACTICE_BALANCE = 'research_practice_balance',
}

export enum ResearchTrainingClaim {
  UNDERGRADUATE_EXPOSURE   = 'undergraduate_exposure',
  GRADUATE_PROGRAMS_DEPTH  = 'graduate_programs_depth',
  POSTDOC_ECOSYSTEM        = 'postdoc_ecosystem',
  PUBLIC_FUNDING_COVERAGE  = 'public_funding_coverage',
  INDUSTRY_ACADEMIA_BRIDGE = 'industry_academia_bridge',
}

export enum ClinicianAgingTrainingClaim {
  GERIATRICS_AS_SPECIALTY    = 'geriatrics_as_specialty',
  MEDICAL_SCHOOL_INTEGRATION = 'medical_school_integration',
  RESIDENCY_QUALITY          = 'residency_quality',
  LONGEVITY_CME              = 'longevity_cme',
  WORKFORCE_PLANNING         = 'workforce_planning',
}

export enum ClinicianScientistClaim {
  COMBINED_DEGREE_EXISTS  = 'combined_degree_exists',
  PUBLIC_FUNDING          = 'public_funding',
  AGING_SPECIALIZATION    = 'aging_specialization',
  PROTECTED_RESEARCH_TIME = 'protected_research_time',
  CAREER_VIABILITY        = 'career_viability',
}

export const TALENTS_CLAIM_SCALES: {
  [TalentsField.RESEARCHER_IMMIGRATION]:      Record<ResearcherImmigrationClaim, Record<number, string>>
  [TalentsField.CLINICIAN_IMMIGRATION]:       Record<ClinicianImmigrationClaim, Record<number, string>>
  [TalentsField.RESEARCH_TRAINING_PIPELINE]:  Record<ResearchTrainingClaim, Record<number, string>>
  [TalentsField.CLINICIAN_AGING_TRAINING]:    Record<ClinicianAgingTrainingClaim, Record<number, string>>
  [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: Record<ClinicianScientistClaim, Record<number, string>>
} = {
  [TalentsField.RESEARCHER_IMMIGRATION]: {
    [ResearcherImmigrationClaim.VISA_PATHWAY]: {
      0: 'No researcher-specific visa; must use general work permit, often employer-tied',
      1: 'Researcher category exists but requires full employer sponsorship; onerous documentation',
      2: 'Dedicated researcher visa covering postdocs with institutional affiliation; some flexibility',
      3: 'Streamlined researcher visa; covers self-employed researchers; clear requirements',
      4: 'Fast-track researcher visa; digital application; covers all career stages including junior researchers',
      5: 'Open talent visa or free movement; effectively friction-free entry for researchers',
    },
    [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
      0: '>12 months or unpredictable',
      1: '6–12 months typical',
      2: '3–6 months; premium processing available at extra cost',
      3: '1–3 months; expedited track for academic institutions',
      4: '<6 weeks standard; digital processing; real-time status',
      5: '<2 weeks; digital or on-arrival for priority institutions',
    },
    [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
      0: 'Foreign degrees not recognised; full re-evaluation required by local authority',
      1: 'Case-by-case evaluation; months-long process; requires local supervisor endorsement',
      2: 'Recognition framework exists; major-university PhDs assessed within 3 months',
      3: 'Automatic recognition from major partner countries; others streamlined (<2 months)',
      4: 'Near-automatic recognition; competency-based rather than institution-based assessment',
      5: 'Any PhD from accredited institution recognised instantly; no local re-evaluation',
    },
    [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
      0: 'Visa requires employer sponsorship only; postdocs excluded unless on payroll',
      1: 'Theoretically possible but income thresholds unrealistic for postdoc salaries',
      2: 'Postdoc fellowship visa exists; institutional affiliation required; not fully portable',
      3: 'Income thresholds calibrated to academic salaries; postdocs qualify on standard permit',
      4: 'Dedicated early-career researcher track; fellowship holders automatically qualify',
      5: 'Early-career researchers treated equally to senior staff; no income threshold barrier',
    },
    [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
      0: 'No pathway to permanent residency via research career',
      1: 'Technically possible but points systems disadvantage academia vs. industry',
      2: 'Research career counts toward permanent residency; 5+ year pathway',
      3: 'Accelerated PR pathway for researchers; 3–4 years',
      4: 'Fast-track PR for outstanding researchers; active diaspora recruitment programmes',
      5: 'Automatic PR eligibility after short qualifying period; active national retention campaigns',
    },
  },

  [TalentsField.CLINICIAN_IMMIGRATION]: {
    [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
      0: 'Foreign medical licences not recognised; full local re-examination required',
      1: 'EU/bilateral licences only recognised; all others require full re-examination (2+ years)',
      2: 'Structured evaluation pathway for non-EU; partial credit given for foreign training',
      3: 'Competency-based assessment rather than exam-repeat; 6–12 month pathway',
      4: 'Streamlined recognition for internationally trained clinicians from approved countries; <6 months',
      5: 'Near-automatic recognition with brief supervised practice period; global equivalence framework',
    },
    [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
      0: 'No documented pathway; clinicians navigate case-by-case with no support',
      1: 'Process exists but poorly documented and inconsistently applied',
      2: 'Published process with clear steps; designated support contact available',
      3: 'Digital one-stop portal; clear timelines published; dedicated support unit',
      4: 'Pre-arrival advisory service; checklist-based process; predictable outcome',
      5: 'Fully transparent digital pathway; real-time status tracking; outcome highly predictable',
    },
    [ClinicianImmigrationClaim.PROCESSING_TIME]: {
      0: '>2 years from arrival to licensed independent practice',
      1: '12–24 months',
      2: '6–12 months',
      3: '3–6 months for qualified applicants from partner countries',
      4: '1–3 months; supervised provisional licence issued promptly',
      5: '<1 month fast-track; provisional independent scope granted from day 1',
    },
    [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
      0: 'No provisional practice permitted; clinicians cannot work during licensing',
      1: 'Direct supervision only; very limited to one approved setting',
      2: 'Supervised practice in academic hospitals; meaningful clinical scope',
      3: 'Supervised practice in most clinical settings; broad scope with senior oversight',
      4: 'Near-full scope with light oversight; independent after short orientation period',
      5: 'Full provisional practice from day 1; supervisor available but not mandatory',
    },
    [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
      0: 'Foreign clinicians must choose: practice or research; dual role not facilitated',
      1: 'Dual role theoretically possible but requires separate permissions; no structural support',
      2: 'Academic hospital positions allow combined role; few slots available',
      3: 'Defined combined research-practice positions available for foreign clinicians',
      4: 'Active recruitment of foreign clinician-researchers; protected time built into contracts',
      5: 'Foreign clinician-researchers treated identically to nationals; full dual-role career available',
    },
  },

  [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
    [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
      0: 'Aging biology not in standard biology or medicine undergraduate curriculum',
      1: 'Brief mention in physiology or elective geriatrics course; not systematic',
      2: 'Dedicated aging biology module in biomedical/life science degrees',
      3: 'Aging integrated across multiple programmes; dedicated electives; undergrad research opportunities',
      4: 'Aging biology required in pre-med and life sciences; undergrad-to-lab pipeline structured',
      5: 'Comprehensive aging curriculum from year 1; summer research pipelines; strong undergrad-to-PhD conversion',
    },
    [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
      0: 'No dedicated aging research PhD programmes; studied incidentally within disease research',
      1: '1–2 institutions with aging-focused tracks within broader programmes',
      2: 'Dedicated aging PhD programmes at 3–5 institutions; publicly funded positions exist',
      3: 'Network of aging PhD programmes; common curriculum elements; active international recruitment',
      4: 'Well-resourced national aging PhD network; aging research a high-prestige career choice',
      5: 'World-class aging PhD ecosystem; multiple top-ranked programmes; strong global talent magnet',
    },
    [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
      0: 'No postdoc infrastructure; positions uncoordinated, precarious, typically <1 year',
      1: 'Postdoc positions exist in aging labs but uncoordinated; short-term and insecure',
      2: 'Dedicated aging postdoc fellowships available; 2–3 year positions with basic support',
      3: 'National postdoc programme with career development; aging fellowships; mentoring structures',
      4: 'Competitive stipends; structured career transition support to faculty or industry',
      5: 'Postdoc ecosystem with clear career paths, industry rotation, and high retention into longevity field',
    },
    [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
      0: 'No public funding; all training positions self-funded or tuition-only',
      1: 'Some national fellowships; highly competitive; cover <20% of positions',
      2: 'Majority of PhD positions covered by grants or training awards; modest stipends',
      3: 'Near-universal PhD funding; competitive stipends aligned with local cost of living',
      4: 'Well-funded national training grants; stipends meaningfully above field median',
      5: 'Full public funding from undergrad research to postdoc; trainee stipends at professional level',
    },
    [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
      0: 'No industry-academia links in training; purely academic track with no industry exposure',
      1: 'Ad-hoc industry placements; no formal programme or IP framework',
      2: 'Some PhD programmes offer industry co-supervision or optional placement',
      3: 'Structured industry rotation available in most aging PhD programmes',
      4: 'Industry-academia dual PhD tracks; biotech/pharma co-funded positions; clear IP framework',
      5: 'Seamless industry-academia mobility; researchers move between sectors without career penalty',
    },
  },

  [TalentsField.CLINICIAN_AGING_TRAINING]: {
    [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
      0: 'Geriatrics not recognised as a specialty; aging care embedded in internal medicine without dedicated training',
      1: 'Geriatrics recognised but underfunded and low-prestige; few training positions',
      2: 'Geriatrics as established specialty with residency programme; moderate national workforce',
      3: 'Well-resourced geriatrics specialty; competitive positions; adequate workforce planning',
      4: 'High-prestige, well-compensated geriatrics; longevity medicine emerging as sub-specialisation',
      5: 'Aging medicine as mainstream prestigious specialty; longevity medicine formally recognised; pipeline fully funded',
    },
    [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
      0: 'Aging biology not systematically taught in medical school',
      1: 'Brief geriatrics rotation in final year only; no mechanistic aging biology taught',
      2: 'Aging biology in basic science years; geriatrics clinical rotation required',
      3: 'Aging integrated across multiple clinical rotations; longevity prevention in curriculum',
      4: 'Comprehensive aging medicine curriculum; biological mechanisms taught alongside pathology',
      5: 'Aging as a through-line across all years; graduating doctors competent in longevity interventions',
    },
    [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
      0: 'No geriatrics residency; aging care managed by generalists without specific training',
      1: 'Short geriatrics rotation within internal medicine; not a standalone residency',
      2: 'Standalone geriatrics residency (1–2 years) at academic centres',
      3: 'Well-structured geriatrics residency with longevity medicine exposure; multiple national centres',
      4: 'Residency includes aging biology, preventive longevity, and research components',
      5: 'World-class aging medicine residency with longevity sub-specialisation; clinical research integrated',
    },
    [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
      0: 'No CME in longevity or aging medicine; not in national CME framework',
      1: 'Occasional conference-based education; no structured longevity CME track',
      2: 'CME modules in geriatrics available; not specific to longevity interventions',
      3: 'Dedicated longevity medicine CME accessible to clinicians across all specialties',
      4: 'Required CME in aging medicine for specialties seeing older patients; longevity interventions included',
      5: 'National longevity medicine CPD framework; all practising clinicians updated on aging science advances',
    },
    [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
      0: 'No national geriatrics workforce plan; workforce left to market forces',
      1: 'Workforce shortage acknowledged; no coordinated response',
      2: 'National plan exists; training capacity modestly expanded',
      3: 'Funded expansion of geriatrics training; supply-demand gap actively tracked and published',
      4: 'National aging medicine workforce strategy with 10-year targets; shortfall systematically addressed',
      5: 'Fully coordinated plan; supply meets projected demand; regional distribution actively managed',
    },
  },

  [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
    [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
      0: 'No combined MD-PhD or equivalent; impossible to pursue both in a structured way',
      1: 'Informal parallel enrolment possible but unsupported; rare individual arrangements only',
      2: 'Formal combined MD-PhD programme at 1–2 institutions',
      3: 'Multiple institutions offer MD-PhD; structured curriculum; protected research time guaranteed',
      4: 'National MD-PhD programme with standardised curriculum; multiple tracks including aging',
      5: 'Diverse combined degree options (MD-PhD, MD-MSc, clinical research fellowship); multiple entry points',
    },
    [ClinicianScientistClaim.PUBLIC_FUNDING]: {
      0: 'No public funding; students self-fund or rely entirely on PI grants',
      1: 'Limited competitive fellowships; cover <20% of combined degree students',
      2: 'Most positions have partial public support; stipend adequate but modest',
      3: 'Near-full public funding of combined positions; competitive stipends',
      4: 'Well-funded national programme; stipends at clinical salary level; no financial penalty',
      5: 'Full public funding with salary parity; no financial disincentive to clinician-scientist track',
    },
    [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
      0: 'No aging or longevity track available in combined programmes',
      1: 'Aging research possible but no structured support or dedicated supervisors',
      2: 'Aging biology available as one of many PhD options in combined programme',
      3: 'Dedicated aging track with specialist supervisors and structured curriculum',
      4: 'Aging as a flagship track; full ecosystem including aging coursework, mentors, and industry links',
      5: 'National centre of excellence for clinician-scientist aging training; best-resourced track',
    },
    [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
      0: 'No mechanism; clinicians must choose full clinical or full research — no hybrid',
      1: 'Protected time theoretically permitted but not funded; clinicians self-negotiate informally',
      2: '20–30% protected research time available in academic hospital contracts',
      3: '40–50% protected time standard in academic appointments; formally contractualised',
      4: 'Protected time funded separately from clinical budget; no performance penalty for research',
      5: 'Full dual-track career: research and clinical time separately budgeted, evaluated, and paid',
    },
    [ClinicianScientistClaim.CAREER_VIABILITY]: {
      0: 'Clinician-scientist career not viable; graduates drift to one identity or face severe disadvantage',
      1: 'Possible for exceptional individuals; typical outcome is drift to full clinical or full research',
      2: 'Career path exists but narrow; few positions, high competition, modest compensation',
      3: 'Growing number of positions; viable for motivated individuals with institutional support',
      4: 'Established career track; competitive compensation; equal prestige to pure academic or clinical',
      5: 'Clinician-scientist as mainstream, high-prestige, well-paid career; active pipeline management',
    },
  },
}

export enum ResearchFundingClaim {
  FUNDING_SCALE     = 'funding_scale',
  PORTFOLIO_BREADTH = 'portfolio_breadth',
  FUNDING_STABILITY = 'funding_stability',
  IP_FRAMEWORK      = 'ip_framework',
  PRIVATE_LEVERAGE  = 'private_leverage',
  RISK_APPETITE     = 'risk_appetite',
}

export enum GeneEditingClaim {
  SOMATIC_PERMISSIVENESS  = 'somatic_permissiveness',
  APPROVAL_SPEED          = 'approval_speed',
  REGULATORY_ADAPTABILITY = 'regulatory_adaptability',
  GERMLINE_PERMISSIVENESS = 'germline_permissiveness',
  LONGEVITY_PATHWAY       = 'longevity_pathway',
}

export enum BreakthroughAgencyClaim {
  AGENCY_MODEL           = 'agency_model',
  LONGEVITY_MANDATE      = 'longevity_mandate',
  FUNDING_TYPE           = 'funding_type',
  AGENCY_FOREGROUND_IP   = 'agency_foreground_ip',
  CHALLENGE_SPECIFICITY  = 'challenge_specificity',
}

export enum AdaptiveLicensingClaim {
  CONDITIONAL_APPROVAL  = 'conditional_approval',
  ROLLING_REVIEW        = 'rolling_review',
  SURROGATE_ENDPOINTS   = 'surrogate_endpoints',
  POST_MARKET_FRAMEWORK = 'post_market_framework',
  EXPANDED_ACCESS       = 'expanded_access',
}

export enum TrialDesignClaim {
  ADAPTIVE_DESIGNS      = 'adaptive_designs',
  SYNTHETIC_CONTROLS    = 'synthetic_controls',
  DECENTRALIZED_TRIALS  = 'decentralized_trials',
  PLATFORM_PROTOCOLS    = 'platform_protocols',
  RWE_INTEGRATION       = 'rwe_integration',
}

export enum RegulatorySandboxClaim {
  SANDBOX_EXISTENCE        = 'sandbox_existence',
  BIOTECH_COVERAGE         = 'biotech_coverage',
  PATIENT_SCOPE            = 'patient_scope',
  LEGAL_PROTECTION         = 'legal_protection',
  LONGEVITY_APPLICABILITY  = 'longevity_applicability',
}

export enum AgingEndpointClaim {
  ENDPOINT_ACCEPTANCE       = 'endpoint_acceptance',
  QUALIFICATION_PATHWAY     = 'qualification_pathway',
  CODEV_FRAMEWORK           = 'codev_framework',
  REFERENCE_INFRASTRUCTURE  = 'reference_infrastructure',
  STANDARDIZATION           = 'standardization',
}

// ── 0–6 maturity ladder for population screening programmes ────────────────
// Ordinal: each level implies all levels below it.
// Half-points allowed for edge cases (e.g. 3.5 = proactive but narrow demographic subset).
// Use ScreeningLevel named constants in country files — never raw numbers.

export const ScreeningLevel = {
  ABSENT:          0,
  PRIVATE_ONLY:    1,
  COST_SHARING:    2,  // also covers: pilot, opportunistic, narrow demographic
  FUNDED_PASSIVE:  3,
  PROACTIVE:       4,
  INTEGRATED:      5,
  ACTIONABLE_LOOP: 6,
} as const satisfies Record<string, Score>

// Human-readable descriptions keyed by level — single source of truth.
export const SCREENING_SCALE: Record<number, { label: string; description: string }> = {
  [ScreeningLevel.ABSENT]:          { label: 'Absent',          description: 'No national programme or clinical pathway' },
  [ScreeningLevel.PRIVATE_ONLY]:    { label: 'Private only',    description: 'Available but patient or insurance pays fully' },
  [ScreeningLevel.COST_SHARING]:    { label: 'Cost-sharing',    description: 'Partially subsidised; or limited to a pilot / narrow demographic' },
  [ScreeningLevel.FUNDED_PASSIVE]:  { label: 'Funded, passive', description: 'Government pays; patient or doctor must initiate' },
  [ScreeningLevel.PROACTIVE]:       { label: 'Proactive',       description: 'Government actively invites via letter or system trigger' },
  [ScreeningLevel.INTEGRATED]:      { label: 'Integrated',      description: 'Results automatically linked to patient EHR / clinical record' },
  [ScreeningLevel.ACTIONABLE_LOOP]: { label: 'Actionable loop', description: 'Results trigger automated follow-up care pathway' },
}

// ── Established (strong RCT / USPSTF A–B / EU equivalent) ─────────────────
// ── Longevity-frontier (growing evidence; score reflects current clinical integration) ──
// → Add new targets below as national guidance solidifies
export enum PopulationScreeningClaim {
  CARDIOVASCULAR_RISK  = 'cardiovascular_risk',
  BREAST_CANCER        = 'breast_cancer',
  COLORECTAL_CANCER    = 'colorectal_cancer',    // FIT stool test or colonoscopy
  CERVICAL_CANCER_HPV  = 'cervical_cancer_hpv',  // HPV primary testing
  AAA_ULTRASOUND       = 'aaa_ultrasound',        // abdominal aortic aneurysm, men 65–75 ever-smokers
  DIABETES_METABOLIC   = 'diabetes_metabolic',    // HbA1c / fasting glucose + lifestyle offer
  OSTEOPOROSIS_DEXA    = 'osteoporosis_dexa',     // DEXA scan, women 65+, men 70+
  LUNG_CANCER_CT       = 'lung_cancer_ct',        // low-dose CT, heavy smokers only
  ATRIAL_FIBRILLATION  = 'atrial_fibrillation',   // ECG / pulse; early AF → anticoagulation reduces stroke
  COGNITIVE_DECLINE    = 'cognitive_decline',     // pending scalable disease-modifying treatments
  POLYGENIC_RISK              = 'polygenic_risk',              // genome-wide PRS-based risk stratification
  SARCOPENIA_MUSCLE_MASS      = 'sarcopenia_muscle_mass',      // DEXA/BIA muscle mass; independent mortality predictor
  SLEEP_APNEA                 = 'sleep_apnea',                 // 10–15% adults undiagnosed; strong dementia/CVD predictor
  SCREENING_PROGRAMME_AGILITY = 'screening_programme_agility', // meta: how fast can new screenings be added/piloted/removed
}

// Separate 0–5 scale for SCREENING_PROGRAMME_AGILITY — measures system meta-capability,
// not presence of a specific screening; cannot use ScreeningLevel.
export const SCREENING_PROGRAMME_AGILITY_SCALE: Record<number, string> = {
  0: 'Screenings set by statute; legislative change required; process takes 5–10 years',
  1: 'Process exists but slow (3–5 years); no pilot pathway; highly risk-averse',
  2: 'Pilot programmes possible with MOH approval; results inform policy within 2–3 years',
  3: 'Formal rapid evaluation pathway; evidence review leading to policy within 12–18 months',
  4: 'Systematic horizon-scanning; pilots funded by default; commissioning authority for promising screenings',
  5: 'Adaptive commissioning model; new screenings added/removed in 6–12 months; continuous programme evaluation built in',
}

export enum BiomarkerCollectionClaim {
  PARTICIPATION_MODEL  = 'participation_model',   // How people are enrolled (opt-in → opt-out coverage)
  RESAMPLING_FREQUENCY = 'resampling_frequency',  // How often biosamples are retaken over time
  BIOMARKER_DEPTH      = 'biomarker_depth',       // Which molecular layers are measured
  CLINICAL_LINKAGE     = 'clinical_linkage',      // Whether biobank data is linked to health records
  RESEARCHER_ACCESS    = 'researcher_access',     // Who can access and how easily
}

export const BREAKTHROUGH_AGENCY_CLAIM_SCALES: Record<BreakthroughAgencyClaim, Record<number, string>> = {
  [BreakthroughAgencyClaim.AGENCY_MODEL]: {
    0: 'Traditional grant-making council only; no challenge-driven or programme-manager model agency',
    1: 'Innovation agency exists but uses traditional competitive grants only; no ARPA-style PM model',
    2: 'Innovation agency runs occasional challenge calls; no dedicated PM-model programme',
    3: 'PM-model innovation agency (ARPA-style) with directed challenge goals and defined milestones',
    4: 'Full ARPA model with longevity-adjacent programmes; active PM-driven challenges with measurable targets',
    5: 'ARPA-model agency with explicit longevity mandate; measurable healthspan/lifespan targets as programme goals',
  },
  [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
    0: 'No agency mandate near longevity; general biomedical R&D only',
    1: 'Aging mentioned in general health strategy documents; not an agency priority or budget line',
    2: 'Aging is one of several health priority areas in main innovation agency; modest allocation',
    3: 'Dedicated aging/longevity programme within existing innovation agency; ring-fenced budget',
    4: 'Standalone longevity programme with published goals and multi-year ring-fenced budget',
    5: 'National longevity mission with cross-agency coordination and quantified healthy lifespan targets',
  },
  [BreakthroughAgencyClaim.FUNDING_TYPE]: {
    0: 'No public innovation funding beyond traditional grants or loans',
    1: 'Only co-investment or match-grants with private sector; no pure non-dilutive challenge funding',
    2: 'Non-dilutive grants available but competitive and general; no longevity specificity',
    3: 'Non-dilutive challenge contracts available for aging-adjacent areas; some longevity specificity',
    4: 'Non-dilutive contracts for longevity-specific challenges; typical agency-style terms',
    5: 'Fully non-dilutive, challenge-based longevity funding; foreground IP terms align with top agency practice (see agency foreground IP)',
  },
  [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
    0: 'Foreground IP vests with state/agency or assignment is mandatory; commercial use blocked or requires discretionary approval',
    1: 'Commercialisation possible in theory but heavy encumbrances (broad government licence, revenue share, long approvals) make typical spinouts impractical',
    2: 'Standard government/sponsor-purpose licence and reporting; outcome depends on contract and host; no published exit terms',
    3: 'Agency programme terms published: title with performer/consortium, narrow sponsor rights, spinout clearance typically within ~6 months in standard cases',
    4: 'Dominant PM-agency practice: milestone-based, non-dilutive, no agency equity; foreground IP with performer; sponsor rights within industry-narrow set',
    5: 'Statute/policy clearly assigns performer retention for this instrument class; prizes without IP claw-back; march-in rare in practice; rules predictable across programmes',
  },
  [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
    0: 'No measurable challenge objectives; general "improve health" framing',
    1: 'Broad disease reduction targets; aging mentioned but not as primary quantified metric',
    2: 'Some quantified health targets; aging included but not a primary challenge metric',
    3: 'Explicit aging biology targets (e.g., demonstrate reversal of a specific hallmark of aging)',
    4: 'Specific longevity challenge with quantified healthy lifespan or morbidity compression metric',
    5: 'National longevity challenge with measurable biological age targets, independent validation, and prize mechanism',
  },
}

export const BREAKTHROUGH_AGENCY_CLAIM_ORDER: readonly BreakthroughAgencyClaim[] = [
  BreakthroughAgencyClaim.AGENCY_MODEL,
  BreakthroughAgencyClaim.LONGEVITY_MANDATE,
  BreakthroughAgencyClaim.FUNDING_TYPE,
  BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP,
  BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY,
]

export const ADAPTIVE_LICENSING_CLAIM_SCALES: Record<AdaptiveLicensingClaim, Record<number, string>> = {
  [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
    0: 'No conditional or accelerated approval mechanism; full traditional evidence package always required',
    1: 'Orphan designation available but no conditional approval pathway; full evidence still needed',
    2: 'Conditional approval exists but rarely used; burden of evidence close to traditional approval',
    3: 'Well-established conditional approval used across multiple areas; defined confirmatory requirements',
    4: 'Multiple accelerated designations (Fast Track, Breakthrough, PRIME); actively and routinely used',
    5: 'World-leading integrated accelerated pathways; breakthrough designation routine; fastest approval globally',
  },
  [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
    0: 'No rolling review; full data package required at submission',
    1: 'Pre-submission meeting available; no formal rolling review',
    2: 'Rolling review in exceptional circumstances only (pandemic, orphan)',
    3: 'Rolling review available as formal programme for priority medicines; well-defined process',
    4: 'Rolling review standard for any product meeting priority criteria; real-time submissions accepted',
    5: 'Continuous review model; regulator processes data modules in real-time as generated; concurrent assessment',
  },
  [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
    0: 'Only clinical outcomes accepted (morbidity/mortality); no surrogate endpoints',
    1: 'Surrogates only for well-validated disease biomarkers (e.g., LDL for CV); no novel endpoints',
    2: 'Disease surrogates accepted across many areas; no aging-specific or longevity endpoints',
    3: 'Some aging-adjacent surrogates accepted (functional decline composites, frailty indices)',
    4: 'Aging biomarkers accepted as surrogate endpoints for specific aging-related indications',
    5: 'Composite longevity endpoints accepted as primary for conditional approval across aging indications',
  },
  [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
    0: 'No post-market confirmation requirement; conditional approval is de facto permanent',
    1: 'Post-market study requested but no timeline or enforcement mechanism',
    2: 'Post-market confirmation required with defined timeline; enforcement weak',
    3: 'Well-defined confirmatory trial requirements; withdrawal authority exists and has been exercised',
    4: 'Robust confirmatory framework; real-world evidence systematically collected; withdrawal actively enforced',
    5: 'Seamless integration: RWE feeds back into approval decision; adaptive label updates; benchmark for other regulators',
  },
  [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
    0: 'No compassionate use or named patient mechanism',
    1: 'Named patient access theoretically possible but no structured pathway; purely case-by-case',
    2: 'Compassionate use programme exists; 4–8 week process; physician liability unclear',
    3: 'Streamlined named patient pathway; < 4 weeks; physician liability protection defined',
    4: 'Proactive expanded access; sponsor required to respond to requests; systematic evidence collection',
    5: 'Structured expanded access with insurer coverage for eligible patients and mandated observational data collection',
  },
}

export const TRIAL_DESIGN_CLAIM_SCALES: Record<TrialDesignClaim, Record<number, string>> = {
  [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
    0: 'Only traditional fixed-design RCT accepted; adaptive designs require extensive justification and typically rejected',
    1: 'Adaptive dose-finding (Phase 1) accepted; adaptive efficacy trials very rarely approved',
    2: 'Adaptive Phase 2 accepted; seamless Phase 2/3 possible in limited contexts',
    3: 'Adaptive designs widely accepted across Phase 2 and Phase 3; published guidance',
    4: 'Adaptive designs mainstream; biomarker-adaptive enrichment and response-adaptive randomisation accepted',
    5: 'Any scientifically justified adaptive design accepted; regulator co-designs protocol as collaborator',
  },
  [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
    0: 'Only concurrent randomised controls accepted; external controls never acceptable',
    1: 'Historical controls accepted only in very limited orphan contexts with no alternatives',
    2: 'Synthetic/external controls accepted for rare disease indications where randomisation is infeasible',
    3: 'Synthetic controls accepted for any indication where randomisation is ethically infeasible; guidance published',
    4: 'Synthetic controls routinely used across therapeutic areas; real-world register data accepted as control arm',
    5: 'Synthetic controls accepted as primary control arm based on pre-specified analytical framework; standard tool',
  },
  [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
    0: 'All clinical activities must occur at approved trial site; no remote participation',
    1: 'Remote informed consent only; all clinical visits must be in-person at investigator site',
    2: 'Some remote assessments permitted (ePRO, telemedicine) under site oversight',
    3: 'DCT framework published; home visits, local labs, remote monitoring accepted',
    4: 'Fully decentralized trials approved; wearable-derived endpoints and digital biomarkers accepted',
    5: 'Fully virtual trials standard; digital biomarkers as primary registration endpoints',
  },
  [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
    0: 'Platform/master protocol trials not recognised; must run as separate independent trials',
    1: 'Platform trials theoretically possible but require individual approval per arm; very burdensome',
    2: 'Platform trials approved in exceptional circumstances only',
    3: 'Platform trial framework established; regulatory guidance published; multiple active platforms',
    4: 'Platform trials encouraged by regulator; adaptive arm addition with expedited review',
    5: 'National platform trial infrastructure; pre-approved master protocol; new arms added within weeks',
  },
  [TrialDesignClaim.RWE_INTEGRATION]: {
    0: 'Real-world evidence not acceptable for any regulatory purpose',
    1: 'RWE acceptable for safety surveillance only; not for efficacy decisions',
    2: 'RWE acceptable as supportive evidence in some contexts; cannot replace trial data',
    3: 'RWE accepted as primary evidence for defined purposes (label extension, post-market)',
    4: 'RWE integrated into pivotal evidence packages for certain indications; published guidance',
    5: 'RWE routinely integrated into approval dossiers; mandated registries for longevity therapies; longitudinal data feeds regulatory updates',
  },
}

export const REGULATORY_SANDBOX_CLAIM_SCALES: Record<RegulatorySandboxClaim, Record<number, string>> = {
  [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
    0: 'No regulatory sandbox of any kind in health or biotech sector',
    1: 'Sandbox under consultation or discussion only; no implementation',
    2: 'Digital health sandbox exists but excludes drug, biologic, or gene therapy interventions',
    3: 'Biotech sandbox with defined rules, application process, and time-limited participation',
    4: 'Full biotech regulatory sandbox with active cohorts; novel therapeutic categories explicitly included',
    5: 'Established sandbox ecosystem; multiple parallel cohorts; transparent exit pathway to full approval',
  },
  [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
    0: 'No coverage for drugs, biologics, or gene therapies; digital health only if sandbox exists',
    1: 'Sandbox covers repurposed approved drugs only; novel modalities excluded',
    2: 'Sandbox covers some novel drug combinations; advanced therapies (gene/cell) excluded',
    3: 'Sandbox covers novel drug modalities including gene editing and regenerative medicine',
    4: 'Sandbox covers all therapeutic modalities including AI-guided dosing and combination approaches',
    5: 'All therapeutic categories including longevity-specific interventions and aging prevention explicitly included',
  },
  [RegulatorySandboxClaim.PATIENT_SCOPE]: {
    0: 'No real patients; bench or pre-clinical only',
    1: 'Healthy volunteer studies only; patient exposure not permitted',
    2: 'Patients with terminal conditions only, under strict compassionate use criteria',
    3: 'Patients with target indication can participate under ethics-approved protocol',
    4: 'Broad eligibility including prevention and healthspan studies; real-world monitoring',
    5: 'Prevention and longevity intervention participants eligible; proactive recruitment for aging cohorts',
  },
  [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
    0: 'No legal safe harbour; full standard liability applies to all sandbox participants',
    1: 'Some informal regulator assurance but no legal protection',
    2: 'Limited safe harbour for developers on novel modality claims; physician liability unchanged',
    3: 'Defined safe harbour for developers and physicians in approved sandbox programmes',
    4: 'Full safe harbour for developers, physicians, and institutions; data from sandbox admissible in approval',
    5: 'Comprehensive legal framework: indemnity, liability shield, IP protection, and admissible regulatory data',
  },
  [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
    0: 'Sandbox cannot be used for aging/longevity interventions; disease-specific only',
    1: 'Longevity interventions theoretically possible but no precedent; strong regulatory resistance',
    2: 'Aging-adjacent indications (frailty, sarcopenia) can enter sandbox; general longevity excluded',
    3: 'Longevity interventions explicitly included in sandbox scope; one or more active cases',
    4: 'Dedicated longevity track within sandbox; aging biomarker-driven trial designs actively recruited',
    5: 'National longevity sandbox programme; aging biology interventions with composite endpoint designs supported',
  },
}

export const AGING_ENDPOINT_CLAIM_SCALES: Record<AgingEndpointClaim, Record<number, string>> = {
  [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
    0: 'Only disease-specific endpoints accepted; aging biomarkers inadmissible as primary or secondary',
    1: 'Aging biomarkers accepted as exploratory only; no regulatory use in submissions',
    2: 'Aging biomarkers accepted as secondary endpoints for specific aging-adjacent indications',
    3: 'Composite aging endpoints accepted as primary for defined aging-adjacent indications',
    4: 'Multi-domain aging composites accepted for conditional approval; biological age surrogates accepted',
    5: 'Composite longevity endpoints accepted as primary for registration across aging indications',
  },
  [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
    0: 'No pathway to qualify aging biomarkers; sponsors negotiate case-by-case with no precedent',
    1: 'Qualification theoretically possible but no guidance or precedent for aging biomarkers',
    2: 'Full biomarker qualification process required; 5–10 year typical timeline for aging biomarkers',
    3: 'Structured qualification pathway; expedited track for aging biomarkers; 2–4 year timeline',
    4: 'Regulator co-develops qualification strategy; consortium submissions accepted; 1–2 year pathway',
    5: 'Pre-competitive biomarker qualification programme; aging biomarker menu updated regularly; community-validated markers accepted',
  },
  [AgingEndpointClaim.CODEV_FRAMEWORK]: {
    0: 'Biomarker and therapeutic must be developed entirely separately; no co-development pathway',
    1: 'Co-development technically possible but requires separate regulatory submissions; no integration',
    2: 'Companion diagnostic framework allows co-development but designed for treatment-selection, not aging endpoints',
    3: 'Co-development IND/CTA framework available for novel aging endpoints; biomarker feedback included in review',
    4: 'Dedicated co-development pathway; single IND covers therapeutic and novel aging endpoint together',
    5: 'Parallel licensing track for therapeutic + aging endpoint; biomarker validated simultaneously with efficacy',
  },
  [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
    0: 'No publicly accessible normative aging biomarker database; every sponsor starts from scratch',
    1: 'Some population cohort data available but not structured for biomarker reference use',
    2: 'National cohort with some aging biomarkers; partial coverage; significant access friction',
    3: 'Well-characterised reference population with aging biomarker panels; accessible for research',
    4: 'Publicly accessible normative aging biomarker database; stratified reference populations; usable for synthetic controls',
    5: 'National aging biomarker reference infrastructure: harmonised protocol, longitudinal follow-up, open-access API; synthetic control construction routine',
  },
  [AgingEndpointClaim.STANDARDIZATION]: {
    0: 'No standardised measurement protocols for aging biomarkers; results incomparable across studies',
    1: 'Some disease-specific biomarker standards; no aging-specific standardisation effort',
    2: 'International aging biomarker working group active but guidance not yet widely adopted',
    3: 'Adopted measurement standards for major aging biomarkers; cross-study comparison feasible',
    4: 'Regulatory-grade measurement standards published; studies using standard protocols can pool data',
    5: 'Full harmonisation: national/international aging standards, accredited labs, cross-study data pooling routine',
  },
}

export const RESEARCH_FUNDING_CLAIM_SCALES: Record<ResearchFundingClaim, Record<number, string>> = {
  [ResearchFundingClaim.FUNDING_SCALE]: {
    0: 'No ring-fenced aging budget; aging funded only incidentally within disease programmes',
    1: 'Aging mentioned in generic health research strategies; no dedicated budget line',
    2: 'Small dedicated aging fund (<$100M equivalent); one or two named programmes',
    3: 'Meaningful ring-fenced budget ($100–500M); dedicated national institute or major programme',
    4: 'Major national aging institute with >$500M ring-fenced annual budget',
    5: 'World-leading dedicated aging funder (>$1B); independent institute with protected mandate (NIA-level)',
  },
  [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
    0: 'Budget almost entirely captured by one disease; basic aging mechanisms and early-stage science unfunded',
    1: 'Disease dominance >80%; basic biology occasionally funded as spillover from disease grants',
    2: 'Disease dominance 60–80%; some basic aging science grants available but scarce and under-resourced',
    3: 'Balanced portfolio across disease + mechanisms + translational; no single disease exceeds 50%',
    4: 'Full spectrum funded: hallmarks, biomarkers, trials, translational; mechanisms explicitly prioritised',
    5: 'Strategic portfolio spanning all stages; aging mechanisms treated as first-class alongside disease applications',
  },
  [ResearchFundingClaim.FUNDING_STABILITY]: {
    0: 'Annual discretionary grants only; programme existence uncertain year to year',
    1: 'Mostly 1–2 year grants; occasional 3-year awards; no structural multi-year commitment',
    2: '3–5 year grants standard; dedicated centre funding at a few flagship institutions',
    3: 'Structured multi-year centre grants (5–7 years); renewal pathways defined; moderate institutional stability',
    4: 'Long-term institutional commitments (10-year centres or endowments); immune to annual budget cycles',
    5: 'Permanent institutional infrastructure with guaranteed baseline; politically insulated from annual appropriations',
  },
  [ResearchFundingClaim.IP_FRAMEWORK]: {
    0: 'Default title with employer/state; no realistic licence or assignment path to spinout; inventor share opaque or effectively zero',
    1: 'Licensing possible but 12–24+ months of opaque negotiation; no standard terms; outcome depends on administration',
    2: 'Working TTO but 6–18 months and wide variance across institutions; spinouts possible but high transaction cost',
    3: 'Published spinout option or licence templates, upfront/royalty bands, defined inventor share after costs; typical standard cases close within ~6 months',
    4: 'Strong ecosystem: institution usually holds title where customary, but grantee-election norms (Bayh-Dole-type) plus high inventor-share norms and steady startup licensing as the rule',
    5: 'Best class: either statutory PI/researcher title with viable patenting and licensing support, or institutional title with world-class transparent spinout licensing, meaningful inventor upside, and clear abandonment or transfer rules',
  },
  [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
    0: 'No meaningful private investment in aging research; no philanthropy or industry co-funding',
    1: 'Scattered private donations; no strategic coordination with public funding',
    2: 'Active philanthropic foundations; limited industry-academia co-funding; early longevity VC presence',
    3: 'Major private funders active (Glenn, Wellcome, etc.); moderate biotech cluster; some public-private programmes',
    4: 'Strong philanthropic ecosystem + established biotech hub; coordinated public-private co-funding mechanisms',
    5: 'Elite private leverage at scale (Bezos/Milner-level); dense longevity VC cluster; public-private ecosystem fully integrated',
  },
  [ResearchFundingClaim.RISK_APPETITE]: {
    0: 'Only safe, disease-linked hypotheses funded; peer review systematically rejects unconventional targets',
    1: 'Rare exceptions for novel approaches; mainstream grant committees heavily favour established paradigms',
    2: 'Exploratory mechanisms exist (EUREKA, R21) but represent <5% of budget and are highly competitive',
    3: 'Dedicated high-risk mechanisms (Pioneer Award, HFSP-style) with meaningful budget; unconventional theories fundable',
    4: 'Substantial allocation to radical hypotheses; alternative aging theories explicitly invited; ARPA-style programme active',
    5: 'National programme for transformative longevity research; unconventional targets strategically supported at scale',
  },
}

export const RESEARCH_FUNDING_CLAIM_ORDER: readonly ResearchFundingClaim[] = [
  ResearchFundingClaim.FUNDING_SCALE,
  ResearchFundingClaim.PORTFOLIO_BREADTH,
  ResearchFundingClaim.FUNDING_STABILITY,
  ResearchFundingClaim.IP_FRAMEWORK,
  ResearchFundingClaim.PRIVATE_LEVERAGE,
  ResearchFundingClaim.RISK_APPETITE,
]

export const GENE_EDITING_CLAIM_SCALES: Record<GeneEditingClaim, Record<number, string>> = {
  [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
    0: 'Somatic gene editing categorically prohibited or in complete legal vacuum — no pathway exists',
    1: 'Legal in principle but no functional regulatory pathway; de facto impossible to run trials',
    2: 'Pathway exists but only for narrowest indications; precautionary framework dominates',
    3: 'Approved trials in multiple therapeutic areas; moderate oversight burden; framework maturing',
    4: 'Streamlined approval with dedicated review office; approved products on market; broad therapeutic coverage',
    5: 'Highly permissive and functional framework; trials across many indications including aging-adjacent; world-leading approval record',
  },
  [GeneEditingClaim.APPROVAL_SPEED]: {
    0: '>3 years from IND/CTA submission to trial start; or de facto rejection',
    1: '2–3 years; multiple sequential committee reviews with no scientific dialogue',
    2: '12–24 months; some scientific engagement but process opaque and burdensome',
    3: '6–12 months; predictable process; pre-submission meetings available',
    4: '3–6 months; fast-track mechanisms for priority programmes; real-time agency feedback',
    5: '<3 months; adaptive review; sponsor-agency co-development of regulatory strategy from early stage',
  },
  [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
    0: 'New modalities (base editing, prime editing, epigenetic reprogramming) fall into legal vacuum or are auto-prohibited',
    1: 'New modalities handled by analogy to existing categories; no dedicated guidance; multi-year uncertainty',
    2: 'Guidance issued retrospectively after 3–5 years of ambiguity; reactively updated frameworks',
    3: 'Dedicated guidance for new gene editing modalities issued within 2–3 years of emergence; scientific dialogue possible',
    4: 'Regulator proactively engages pre-IND; guidance co-developed with field; dedicated expert unit exists',
    5: 'Regulatory science capacity embedded in agency; guidance for new modalities published ahead of first trials; model for global regulators',
  },
  [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
    0: 'Legal vacuum — no defined position; any germline research is in regulatory limbo with no ethical oversight framework',
    1: 'Blanket prohibition on both research and clinical application; no exceptions for basic science',
    2: 'Clinically prohibited; basic research technically legal but no defined oversight framework; effectively discouraged',
    3: 'Clinically prohibited; basic research explicitly permitted under ethics committee oversight; clear rules for embryo research',
    4: 'Research fully permitted and regulated; clinical pathway acknowledged and under active regulatory development',
    5: 'Clinical pathway formally defined with ethics oversight; research-to-clinic translational framework operational',
  },
  [GeneEditingClaim.LONGEVITY_PATHWAY]: {
    0: 'No regulatory acknowledgment of aging/longevity endpoints; aging biology not recognized as a valid application domain for gene editing',
    1: 'Aging used only as contextual background; longevity endpoints inadmissible as primary or secondary in IND/CTA',
    2: 'Aging biomarkers accepted as exploratory secondary endpoints; no regulatory guidance specific to longevity applications',
    3: 'Composite aging biomarkers accepted as primary endpoints in IND review for specific aging-related indications',
    4: 'Dedicated regulatory guidance for aging/longevity endpoints in gene editing applications; longevity endpoints accepted for approval',
    5: 'Longevity medicine pathway formally recognised; aging biology endpoints sufficient for registration; gene editing for healthspan an approved therapeutic category',
  },
}

// Per-claim 0–5 ordinal scales — each level is specific to that claim dimension.
// Use these descriptions in tooltips so the reader understands what a score of 3 means
// for PARTICIPATION_MODEL vs BIOMARKER_DEPTH (they are very different concepts).
export const BIOMARKER_CLAIM_SCALES: Record<BiomarkerCollectionClaim, Record<number, string>> = {
  [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
    0: 'No population biobank exists',
    1: 'Opt-in volunteer cohorts only (self-selected, any size)',
    2: 'Large opt-in cohort (>100 k), general research consent',
    3: 'Residual clinical samples collected by default (waiver / soft opt-out)',
    4: 'Dedicated opt-out biobank with active re-contact capability',
    5: 'Universal opt-out, >30 % population coverage, active renewal programme',
  },
  [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
    0: 'One-time collection only, no follow-up',
    1: 'Re-sampling only on clinical triggers (disease events)',
    2: 'Longitudinal subset, infrequent or irregular (>10 years between samples)',
    3: 'Systematic follow-up, 5–10 year intervals',
    4: 'Regular re-sampling ≤5 years',
    5: 'Dense ≤3 years with active re-contact',
  },
  [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
    0: 'Standard clinical samples only (or none)',
    1: 'Stored specimens (serum, DNA) without aging-specific analysis',
    2: 'Genomics added (SNP array or WGS)',
    3: 'Genomics + one aging-specific layer (epigenetics, proteomics, or metabolomics)',
    4: 'Multi-omic: genomics + epigenetics + proteomics or metabolomics',
    5: 'Full multi-omic + functional aging phenotypes (grip, cognition, gait, frailty)',
  },
  [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
    0: 'No linkage to clinical records',
    1: 'Minimal linkage (death records only)',
    2: 'Registry linkage (cancer, hospitalisation, prescriptions)',
    3: 'Full EHR linkage — longitudinal clinical records accessible',
    4: 'EHR + passive data capture (wearables, apps)',
    5: 'Real-time bidirectional: biobank data informs clinical care',
  },
  [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
    0: 'Data not accessible to external researchers',
    1: 'Internal / affiliated institution use only',
    2: 'National research access via application',
    3: 'International research access via application',
    4: 'Streamlined international access with well-documented data models',
    5: 'Open access or federated model with pre-approved data packages',
  },
}

export enum PreventiveTrialsClaim {
  TRIAL_EFFICIENCY           = 'trial_efficiency',           // Cost & seamlessness of enrolling patients at scale
  REGULATORY_RWE_ACCEPTANCE  = 'regulatory_rwe_acceptance',  // Regulator accepts real-world evidence from pragmatic trials
  LONGEVITY_ENDPOINTS_USED   = 'longevity_endpoints_used',   // Aging-specific endpoints in active trials
  AGING_AGENTS_IN_PREVENTION = 'aging_agents_in_prevention', // Active trials of agents targeting aging mechanisms
  NATIONAL_COORDINATION      = 'national_coordination',      // Body coordinating aging trial infrastructure & standards
  PATIENT_TRIAL_ACCESS       = 'patient_trial_access',       // Ease for patients to discover, match to, and enrol in trials
}

// Per-claim 0–5 ordinal scales for Preventive Trials.
// Each level describes what a score means for that specific dimension.
export const PREVENTIVE_TRIAL_CLAIM_SCALES: Record<PreventiveTrialsClaim, Record<number, string>> = {
  [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
    0: 'No trial infrastructure; each study built from scratch',
    1: 'Standard academic model — separate sites, paper consent, >$20k per patient',
    2: 'Electronic consent + partial EHR integration; outcomes still require active follow-up',
    3: 'Register-based outcome capture; consent still requires explicit separate enrolment',
    4: 'Point-of-care randomisation + register-based outcomes; participation indistinguishable from routine care',
    5: 'Fully seamless — waiver/broad consent, automatic randomisation on clinical trigger, outcomes entirely passive; near-zero marginal cost per patient',
  },
  [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
    0: 'Only classic RCT accepted; RWE not recognised in any regulatory context',
    1: 'RWE accepted for post-market surveillance and pharmacovigilance only',
    2: 'RWE accepted for label expansions in selected categories',
    3: 'Register-based RCTs recognised as primary evidence in some approval categories',
    4: 'Explicit regulatory framework for pragmatic trials in primary prevention',
    5: 'Full regulatory equivalence; embedded RWE routinely used for primary approvals',
  },
  [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
    0: 'Disease endpoints only (MI, stroke, cancer incidence, mortality)',
    1: 'Functional aging endpoints in some trials (grip strength, gait speed, cognitive tests)',
    2: 'Composite aging score as pre-specified secondary (frailty index, multi-morbidity, organ function composite, or clinical biological age score from standard labs)',
    3: 'Validated biological age surrogate — any type (epigenetic clock, proteomic age, multi-organ functional age) as pre-specified secondary in ≥1 national trial',
    4: 'Biological age surrogate accepted by regulator as secondary evidence of drug effect (with regulatory agreement)',
    5: 'Biological age surrogate as primary endpoint in an approved trial; or approved agent with aging-mechanism label',
  },
  [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
    0: 'No trials of aging-targeting agents in a prevention context',
    1: 'Academic-only pilots (<100 participants): senolytics, rapamycin, NAD precursors, etc.',
    2: 'Phase II trials of aging-mechanism agents; no national coordination',
    3: 'National or multinational Phase II/III trial of an aging-mechanism intervention',
    4: 'Regulatory pathway for aging prevention agents established; pivotal trials underway',
    5: 'Approved preventive aging agents in clinical use; ongoing Phase IV and next-generation trials',
  },
  [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
    0: 'No coordination; each trial operates independently',
    1: 'Voluntary networks without standardisation',
    2: 'National clinical trial network with shared protocols',
    3: 'National coordination body with an aging/longevity mandate; standardised endpoints',
    4: 'National body + active collaboration with international aging trial networks',
    5: 'Integrated into an international harmonised platform; trials span borders with shared endpoints and mutual regulatory recognition',
  },
  [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
    0: 'No registry or mechanism; patients learn of trials only by chance or clinician referral',
    1: 'National trials registry exists (ClinicalTrials.gov equivalent) but patient-facing search is poor',
    2: 'Patient-facing search with lay summaries; no matching or EHR integration',
    3: 'Automated EHR-based eligibility matching; patients notified of relevant open trials',
    4: 'HMO- or NHS-style population-level identification; patients proactively contacted; near-zero friction enrolment',
    5: 'Seamless EHR-triggered enrolment; open trials are a routine clinical touchpoint; participation rates >15% in eligible populations',
  },
}

export enum GeroEndpointsClaim {
  AGING_AS_INDICATION      = 'aging_as_indication',      // Is aging itself a regulatorily targetable indication?
  ENDPOINT_ACCEPTANCE      = 'endpoint_acceptance',      // Which aging endpoints has the regulator formally accepted?
  HEALTHSPAN_VALUATION     = 'healthspan_valuation',     // Can HTA quantify the value of healthspan extension?
  COVERAGE_PATHWAY         = 'coverage_pathway',         // Is there a funded route for patients to access geroprotectors?
  EXPEDITED_PATHWAY_ACCESS = 'expedited_pathway_access', // Can aging agents qualify for accelerated regulatory review?
}

// Per-claim 0–5 ordinal scales for Gero-Therapeutic Endpoints.
// Scale: can aging be targeted? → what can you measure? → how is value assessed? → does anyone pay? → how fast?
export const GERO_ENDPOINT_CLAIM_SCALES: Record<GeroEndpointsClaim, Record<number, string>> = {
  [GeroEndpointsClaim.AGING_AS_INDICATION]: {
    0: 'Aging explicitly not an indication; disease-only endpoints required',
    1: 'Regulatory guidance acknowledges aging as a biological process; no indication category',
    2: 'Organ-specific aging indications recognised (sarcopenia, frailty, AMD, etc.)',
    3: 'Organ-specific aging indication with approved drug precedent; systemic aging pathway under active regulatory development',
    4: 'Systemic aging accepted as primary indication; IND for aging prevention accepted, pivotal trials underway',
    5: 'Approved drug with systemic aging as its primary indication',
  },
  [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
    0: 'Hard clinical events only (MI, stroke, death)',
    1: 'Single functional endpoints accepted in geriatric indications (grip strength, gait speed, SPPB)',
    2: 'Multi-domain functional composite accepted as primary in some geriatric indications',
    3: 'Validated biological age surrogate — any type (epigenetic clock, proteomic age, multi-organ functional age) — accepted as secondary with regulatory agreement',
    4: 'Validated surrogate accepted as primary endpoint with regulatory precedent',
    5: 'Multiple surrogate types validated; routinely used in approvals',
  },
  [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
    0: 'QALY only; no mechanism to value compression of morbidity or healthspan extension',
    1: 'Standard QALY can theoretically capture some healthspan value; no explicit HTA guidance',
    2: 'HTA guidance explicitly acknowledges healthspan as a relevant outcome dimension',
    3: 'Methodological framework published for valuing aging-prevention interventions beyond standard QALY',
    4: 'Validated health-economic model applied in ≥1 HTA assessment with positive outcome for an aging-mechanism intervention',
    5: 'Established norm — multiple positive HTA assessments; healthspan valuation is standard practice',
  },
  [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
    0: 'No reimbursement pathway for aging-prevention agents',
    1: 'Off-label coverage theoretically possible via individual physician request',
    2: 'Conditional or pilot coverage pathway defined for aging-prevention agents',
    3: 'Defined reimbursement pathway with active assessment processes for aging agents',
    4: '≥1 aging-mechanism agent reimbursed; value-based pricing under development',
    5: 'Aging-prevention agents covered with established value-based pricing linked to aging endpoints',
  },
  [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
    0: 'No expedited pathway; standard review only',
    1: 'Aging agents can apply for existing expedited pathways (Breakthrough Therapy, PRIME) — no aging-specific designation',
    2: 'Some aging agents have received Breakthrough/PRIME designation for disease indications',
    3: 'Regulatory guidance published on expedited pathways specifically for geroscience-informed drugs',
    4: 'Dedicated aging-prevention pathway established with pre-defined endpoint acceptance criteria',
    5: 'Multiple aging agents approved via expedited pathway; regulatory precedent firmly established',
  },
}

export enum OpenDataClaim {
  ACCESS_PROCESS       = 'access_process',
  LINKABILITY          = 'linkability',
  PRIVACY_RESOLUTION   = 'privacy_resolution',
  AI_USE_GOVERNANCE    = 'ai_use_governance',
  CROSS_BORDER_SHARING = 'cross_border_sharing',
}

export const OPEN_DATA_CLAIM_SCALES: Record<OpenDataClaim, Record<number, string>> = {
  [OpenDataClaim.ACCESS_PROCESS]: {
    0: 'No formalised access process; data effectively unavailable',
    1: 'Multi-agency manual approvals; months-long wait; fragmented requirements',
    2: 'Standardised application form; single agency lead; 4–8 week decision',
    3: 'Digital single-window application; 2–4 week decision; clear rejection reasons given',
    4: 'Tiered researcher accreditation; accredited researchers approved in days; lightweight re-application',
    5: 'Machine-readable DAA framework; near-instant access for pre-vetted tiers; self-service API provisioning',
  },
  [OpenDataClaim.LINKABILITY]: {
    0: 'Siloed registers; no cross-domain linkage possible',
    1: 'Ad-hoc linkage on request; inconsistent identifiers; low success rate',
    2: 'Standardised national ID enables EHR and disease registry linkage',
    3: 'Passive data streams (wearables, apps) partially linked to clinical records',
    4: 'Deterministic cross-domain linkage: biobank ↔ claims ↔ disease registries ↔ full EHR',
    5: 'Comprehensive: all above + longitudinal passive data + near-real-time streams + imaging linked',
  },
  [OpenDataClaim.PRIVACY_RESOLUTION]: {
    0: 'No formal privacy controls; raw identifiable data or no meaningful access',
    1: 'Basic pseudonymisation; manual output review; very limited analytical tools',
    2: 'Standardised de-identification (k-anonymity / SDC); basic secure environment',
    3: 'High-quality TRE (code-to-data paradigm); standard stats + ML tooling; synthetic data for exploration',
    4: 'Best-in-class TRE (OpenSAFELY / SAIL tier): rich tooling, automated disclosure control, synthetic twins',
    5: 'Full self-service stack: level-4 TRE + federated computation for cross-site work + on-demand synthetic data generation',
  },
  [OpenDataClaim.AI_USE_GOVERNANCE]: {
    0: 'AI use on health data explicitly prohibited',
    1: 'AI use theoretically possible but no defined pathway; case-by-case review taking >1 year',
    2: 'Formal AI access pathway exists; 3–6 month review; narrow permitted use cases',
    3: 'Dedicated AI researcher tier; pre-approved model classes; 4–8 week approval',
    4: 'Registered AI lab fast-track; model outputs auto-checked; bulk API access available',
    5: 'Proactive AI infrastructure: AI-optimised export formats, pre-built data loaders, federated training support',
  },
  [OpenDataClaim.CROSS_BORDER_SHARING]: {
    0: 'Data cannot legally cross national borders; no sharing framework',
    1: 'Ad-hoc bilateral MOU required; each transfer separately negotiated',
    2: 'Formal bilateral agreements in place; sector-specific (e.g. clinical research only)',
    3: 'Multi-party framework (GDPR adequacy / equivalents); standardised intra-bloc sharing',
    4: 'Federated cross-border compute enabled; raw data transfer not required',
    5: 'Full international federated infrastructure with harmonised governance and researcher self-service access',
  },
}

export enum InteroperabilityClaim {
  EHR_COVERAGE           = 'ehr_coverage',
  TERMINOLOGY_COMPLIANCE = 'terminology_compliance',
  REGISTRY_COMPLETENESS  = 'registry_completeness',
  DATA_FRESHNESS         = 'data_freshness',
  COMPUTABLE_PHENOTYPING = 'computable_phenotyping',
}

export const INTEROPERABILITY_CLAIM_SCALES: Record<InteroperabilityClaim, Record<number, string>> = {
  [InteroperabilityClaim.EHR_COVERAGE]: {
    0: 'Paper-dominant; no national EHR mandate',
    1: 'EHR adoption >50% but fragmented; proprietary formats dominate',
    2: 'National standard defined; major providers comply; significant gaps remain',
    3: 'Near-universal EHR adoption with active enforcement',
    4: 'Mandatory structured elements (diagnoses, procedures, medications, labs) + compliance audit mechanism',
    5: 'Full structured coverage including patient-reported outcomes and social determinants of health',
  },
  [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
    0: 'No common coding; each provider uses own terminology',
    1: 'ICD codes used but inconsistently; local extensions break cross-system comparability',
    2: 'ICD + LOINC mandated nationally; partial compliance',
    3: 'FHIR R4 mandated and audited; SNOMED CT rollout underway',
    4: 'FHIR + SNOMED CT + LOINC consistently implemented; machine-readable APIs at all major providers',
    5: 'Full semantic interoperability — any system query returns comparable data without manual mapping',
  },
  [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
    0: 'No systematic national health registries',
    1: 'Basic registries (mortality, cancer) exist but manual or PDF-based',
    2: 'Core registries (cancer, hospital discharge, prescriptions) are digital and accessible',
    3: 'Broad coverage including rare diseases and mental health; API access available',
    4: 'Near-complete coverage; registries linked to EHR via national identifier',
    5: 'All registries FHIR-compatible, fully linked, covering the complete patient lifespan',
  },
  [InteroperabilityClaim.DATA_FRESHNESS]: {
    0: 'Data unavailable for research, or lag exceeds 5 years',
    1: 'Annual release; 12–24 month lag from clinical event',
    2: 'Annual release; 6–12 month lag',
    3: 'Quarterly updates for key registries',
    4: 'Monthly updates; some registries near-real-time',
    5: 'Near-real-time access for approved researchers — days, not months',
  },
  [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
    0: 'No computable phenotyping; all cohort selection requires manual chart review',
    1: 'ICD codes available but dirty — high false-positive rate, no validated algorithms',
    2: 'Validated phenotyping algorithms exist for select common conditions',
    3: 'National phenotype library; researchers can run pre-built cohort queries via API',
    4: 'Open library + self-service API — researchers define their own cohort, system resolves it automatically',
    5: 'Cross-institutional queries without data movement — code goes to registries, returns aggregated result only',
  },
}

export enum ResearchClinicalClaim {
  SHARED_ONTOLOGIES          = 'shared_ontologies',
  RESEARCH_COHORT_LINKAGE    = 'research_cohort_linkage',
  FAIR_DATA_COMPLIANCE       = 'fair_data_compliance',
  PHARMACOVIGILANCE_FEEDBACK = 'pharmacovigilance_feedback',
  OPEN_SCIENCE_MANDATE       = 'open_science_mandate',
}

export const RESEARCH_CLINICAL_CLAIM_SCALES: Record<ResearchClinicalClaim, Record<number, string>> = {
  [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
    0: 'No common ontologies; arbitrary formats, manual mapping required for any join',
    1: 'Some ontologies shared, but most cross-dataset joins require manual curation',
    2: 'National mandate to use standard ontologies (HPO, OBO, OMOP) when depositing research data',
    3: 'Harmonised ontology mapping exists nationally; automated join possible for major entities',
    4: 'Research and clinical data interoperable at API level via shared FHIR profiles; AI-queryable catalog',
    5: 'Seamless — any research dataset joins to clinical registries without manual mapping',
  },
  [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
    0: 'No infrastructure; research cohorts are isolated, no registry follow-up possible',
    1: 'Ad-hoc only; each study requires months of separate negotiation',
    2: 'Standardised consent framework exists; registry linkage possible with extra procedural steps',
    3: 'Routine linkage to core registries (mortality, hospitalisation) for most research cohorts',
    4: 'Full linkage to all registries (prescriptions, cancer, EHR); linked datasets available for ML pipelines',
    5: 'Automatic and bidirectional — participants consent once for lifelong follow-up; clinical events can trigger research re-contact',
  },
  [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
    0: 'No mandate; data stays in researcher\'s lab, commonly lost after publication',
    1: 'Discipline-specific repositories used (GenBank, PDB) but no national requirement',
    2: 'National mandate to deposit in approved repositories; basic metadata required',
    3: 'FAIR principles required for publicly funded research; machine-readable metadata with persistent identifiers',
    4: 'Rich metadata + standard ontologies + DOI/ORCID; AI-queryable national research data catalog',
    5: 'Full FAIR stack: data linked to publications, reuse metrics tracked, federated ML APIs available',
  },
  [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
    0: 'No systematic feedback; adverse event reports collected but do not reach research pipelines',
    1: 'Yellow Card / MedWatch-style collection exists but is disconnected from research infrastructure',
    2: 'Signals escalated to regulator, which may commission targeted follow-up research',
    3: 'Automated signal detection from EHR / registries feeds into research hypothesis generation',
    4: 'Real-time pharmacovigilance dashboard for researchers; signals linkable to biobank and genomic data; AI-assisted detection',
    5: 'Full loop: EHR signal → automated cohort identification → trial protocol pre-population → regulatory notification',
  },
  [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
    0: 'No mandate; most trials unregistered, most results unpublished — substantial dark data problem',
    1: 'Trial registration required for journal publication; results reporting weak',
    2: 'Results reporting within 12 months mandated for grant recipients; code sharing encouraged',
    3: 'Full open science stack required for public funding: pre-registration + data + code sharing',
    4: 'Automated compliance audit; non-compliance leads to loss of future funding access',
    5: 'Systemic linkage: trial registry → results → datasets → publication → reuse metrics — all machine-readable',
  },
}

export enum RegulatoryHarmonizationClaim {
  TRIAL_DATA_ACCEPTANCE      = 'trial_data_acceptance',
  JOINT_REVIEW_PARTICIPATION = 'joint_review_participation',
  STANDARD_ALIGNMENT         = 'standard_alignment',
  FOREIGN_APPROVAL_RELIANCE  = 'foreign_approval_reliance',
  RECIPROCAL_RECOGNITION     = 'reciprocal_recognition',
}

export enum SharedPhysicalInfraClaim {
  BSL_ACCESS               = 'bsl_access',
  GMP_CAPACITY             = 'gmp_capacity',
  COMPUTE_INFRA            = 'compute_infra',
  SEQUENCING_SCALE         = 'sequencing_scale',
  MODEL_ORGANISM_PLATFORMS = 'model_organism_platforms',
}

export enum IntlResearchNetworkClaim {
  CONSORTIUM_DEPTH         = 'consortium_depth',
  DATA_SHARING_FRAMEWORKS  = 'data_sharing_frameworks',
  JOINT_FUNDING_ACCESS     = 'joint_funding_access',
  FIELD_INFLUENCE          = 'field_influence',
  PATENT_COOPERATION       = 'patent_cooperation',
}

export enum SocietalReadinessClaim {
  PUBLIC_TRUST         = 'public_trust',
  LONGEVITY_ACCEPTANCE = 'longevity_acceptance',
  POLITICAL_WILL       = 'political_will',
  QUACKERY_RESISTANCE  = 'quackery_resistance', // protection against unproven anti-aging claims: supplements, cosmetics, pseudo-specialists
}

export const REGULATORY_HARMONIZATION_CLAIM_SCALES: Record<RegulatoryHarmonizationClaim, Record<number, string>> = {
  [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
    0: 'No acceptance of foreign trial data — foreign trials must be replicated domestically',
    1: 'Foreign data accepted as supporting evidence only; primary data must be domestic',
    2: 'Foreign data from select partner countries accepted for approval on a case-by-case basis',
    3: 'Foreign trial data from ICH-member countries routinely accepted as primary evidence',
    4: 'Broad acceptance with formal bilateral or multilateral agreements; fast-track for aligned-country data',
    5: 'Full mutual recognition; foreign approval from trusted regulator sufficient without additional review',
  },
  [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
    0: 'No participation in any international joint review programme',
    1: 'Observer status or informal liaison; no formal joint reviews conducted',
    2: 'Participates in some joint reviews on ad-hoc basis; no systematic programme',
    3: 'Active participant in established programmes (Project Orbis, PRIME/Breakthrough alignment)',
    4: 'Core participant; joint reviews are standard offering for eligible submissions',
    5: 'Leadership role in international joint review; co-chairs programmes and sets standards',
  },
  [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
    0: 'Non-signatory to ICH; major divergence from international GCP/GMP/regulatory standards',
    1: 'Partial ICH adoption; some divergence in key guidelines',
    2: 'Full ICH signatory; most guidelines adopted but implementation gaps exist',
    3: 'Full ICH implementation; active participation in developing new standards',
    4: 'Standard-setting participant; contributes to ICH Expert Working Groups',
    5: 'Standard-setting leader; multiple ICH EWG chairs; model regulatory system referenced globally',
  },
  [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
    0: 'Cannot reference or rely on foreign approval in any way',
    1: 'Foreign approvals noted as context but provide no regulatory credit',
    2: 'Foreign approval from select regulators can trigger expedited review',
    3: 'Foreign approval from trusted regulator (FDA/EMA) enables abbreviated review or provisional approval',
    4: 'Full reliance pathways defined; foreign approval sufficient for conditional domestic approval',
    5: 'Automatic recognition of approvals from trusted regulators; no additional review required',
  },
  [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
    0: 'No mutual recognition agreements in place',
    1: 'Recognition of specific product categories under a single bilateral agreement',
    2: 'Bilateral MRA(s) covering GMP inspection and/or specific product categories',
    3: 'Multiple bilateral agreements covering trials and/or approvals',
    4: 'Regional multilateral agreement (e.g., EU MRA with multiple non-EU partners)',
    5: 'Broad multilateral recognition network; approvals by member regulators mutually accepted',
  },
}

export const SHARED_PHYSICAL_INFRA_CLAIM_SCALES: Record<SharedPhysicalInfraClaim, Record<number, string>> = {
  [SharedPhysicalInfraClaim.BSL_ACCESS]: {
    0: 'No BSL-3/4 facilities accessible; researchers must travel abroad for containment work',
    1: 'Limited BSL-3 capacity at 1–2 academic institutions; long wait times, restricted access',
    2: 'BSL-3 available at multiple sites; some shared access to national researchers; limited BSL-4',
    3: 'Well-distributed BSL-3 network; formal shared-access programmes; BSL-4 accessible within country or region',
    4: 'BSL-3/4 network with dedicated longevity/gene-therapy research allocation; streamlined access protocols',
    5: 'World-class containment infrastructure; BSL-4 on-site; open-access model for academic researchers',
  },
  [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
    0: 'No domestic GMP capacity for cell/gene therapy; fully dependent on foreign CMOs',
    1: 'Very limited GMP capacity; academic GMP suites only; no commercial-scale capability',
    2: 'Small-scale GMP available; emerging CDMO sector; academic-to-clinical manufacturing possible',
    3: 'Established GMP ecosystem; multiple CDMOs; clinical-grade cell and gene therapy manufacturing available',
    4: 'Mature CDMO sector with gene-therapy specialisation; public GMP facilities for academic groups',
    5: 'World-leading GMP/CDMO hub; fully integrated clinical manufacturing ecosystem; attracts global biotech',
  },
  [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
    0: 'No dedicated HPC for biological research; researchers rely on personal workstations',
    1: 'Limited HPC access; shared national cluster with long queues; no GPU specialisation',
    2: 'National HPC with biological workloads; some GPU capacity; accessible but not purpose-built',
    3: 'Dedicated bioinformatics/AI research compute; GPU clusters; fast queues for genomics workloads',
    4: 'National AI research infrastructure with biological focus; multi-petaflop capacity; competitive allocation',
    5: 'World-class dedicated biomedical compute; AI accelerators; real-time genomics at population scale',
  },
  [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
    0: 'No population-scale sequencing infrastructure; all major sequencing outsourced',
    1: 'Academic sequencing capacity only; NGS available but no large cohort throughput',
    2: 'National sequencing capacity for research cohorts of 1k–10k; limited throughput',
    3: 'National programme supporting 10k–100k scale cohorts; short-read WGS/WES at reasonable cost',
    4: 'Population-scale sequencing; 100k+ throughput; long-read and multi-omics capability available',
    5: 'World-class sequencing programme; 500k+ scale; integrated multi-omics; real-time population genomics',
  },
  [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
    0: 'No shared aging model-organism facilities; researchers maintain individual colonies at high cost',
    1: 'Aging model organisms available at individual labs; no shared infrastructure or standardisation',
    2: 'Some shared aging rodent facilities; limited lifespan study capacity at national scale',
    3: 'National shared aging model-organism platform; standardised protocols; accessible to academic researchers',
    4: 'Dedicated multi-site aging intervention programme (ITP-style); standardised lifespan endpoints; open compound testing',
    5: 'World-leading aging biology platform; mouse, primate, C. elegans, other systems; international access',
  },
}

export const INTL_RESEARCH_NETWORK_CLAIM_SCALES: Record<IntlResearchNetworkClaim, Record<number, string>> = {
  [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
    0: 'Not participating in any major international aging/longevity consortium',
    1: 'Observer status or minimal participation in 1–2 consortia',
    2: 'Active participation in select consortia (e.g., UKBB access, CALERIE collaboration)',
    3: 'Core contributor to multiple major consortia; national data shared internationally; co-PI roles',
    4: 'Leadership roles in multiple international aging consortia; hosting major collaboration hubs',
    5: 'Defining institution for global aging science; multiple consortium chairs; sets research agenda',
  },
  [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
    0: 'No international data sharing frameworks; national data inaccessible to foreign researchers',
    1: 'Ad-hoc bilateral data sharing only; no formal frameworks; case-by-case approval required',
    2: 'Some frameworks in place (e.g., GDPR-compliant access for EU partners); limited scope',
    3: 'GA4GH-aligned frameworks; federated analysis capability; national data accessible under defined protocols',
    4: 'FAIR data principles fully implemented; API-level access for international researchers; federated network',
    5: 'Model data sharing infrastructure; benchmark for international federation; real-time cross-border analytics',
  },
  [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
    0: 'Not eligible for or not accessing international research funding',
    1: 'Limited bilateral agreements; few active joint grants',
    2: 'Participates in select international programmes; some Horizon or bilateral grants active',
    3: 'Full Horizon Europe participation; active bilateral R&D agreements with major research nations',
    4: 'Multiple active joint funding programmes; national agencies co-fund with foreign counterparts at scale',
    5: 'Deeply integrated into global research funding; full Horizon + major bilateral programmes + large-scale co-PI grants',
  },
  [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
    0: 'Negligible contribution to global longevity science; no leadership positions in field',
    1: 'Minor contributor; some national publications but limited citation impact in longevity',
    2: 'Recognised national longevity research community; growing international collaboration and citations',
    3: 'Significant global contributor; researchers hold positions in major journals, societies, guideline panels',
    4: 'Major field leader; multiple top-cited labs; researchers chair international societies and guideline committees',
    5: 'Global longevity science hub; defines research agenda; highest per-capita or absolute publication impact',
  },
  [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
    0: 'Not member of PCT; very limited international IP protection for researchers',
    1: 'PCT member but limited use; weak commercialisation culture in academic research',
    2: 'PCT member with active use; basic bilateral patent treaties in place',
    3: 'Full PCT participation; active patent prosecution culture; academic tech transfer offices operational',
    4: 'Strong patent cooperation with major economies; expedited processing agreements; IP attracts foreign biotech',
    5: 'Leading IP framework for biomedical research; internationally referenced as model; researchers retain rights by default',
  },
}

export const SOCIETAL_READINESS_CLAIM_SCALES: Record<SocietalReadinessClaim, Record<number, string>> = {
  [SocietalReadinessClaim.PUBLIC_TRUST]: {
    0: 'Very low public trust in science and medicine; widespread scepticism or active anti-science movement',
    1: 'Below-average trust; significant scepticism about medical institutions; vaccine hesitancy or similar',
    2: 'Moderate trust; general acceptance of medicine but notable scepticism toward emerging technologies',
    3: 'Good general trust in science and medicine; above-average acceptance of biotechnology and clinical research',
    4: 'High institutional trust; strong public support for medical research funding; low anti-science sentiment',
    5: 'Exceptional trust; among the highest globally; strong social contract around science and public health',
  },
  [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
    0: 'Longevity extension widely viewed as unnatural or unethical; strong cultural/religious resistance',
    1: 'Longevity research accepted for disease treatment but not healthspan extension; life extension seen as fringe',
    2: 'Growing acceptance of preventive medicine; longevity framing uncommon; seen as aspirational, not political',
    3: 'Mainstream acceptance of healthy aging as policy goal; longevity research positively covered in media',
    4: 'Longevity extension widely discussed and positively received; public figures advocate for healthspan policy',
    5: 'Strong public mandate for longevity science; political parties compete on aging policy; national priority',
  },
  [SocietalReadinessClaim.POLITICAL_WILL]: {
    0: 'No political attention to longevity; aging policy limited to pension and social care',
    1: 'Aging mentioned in health policy but no longevity-specific programmes or dedicated funding',
    2: 'Some research investment in aging; occasional political statements but no sustained programme',
    3: 'Dedicated longevity or healthy aging strategy with funded programme; cross-ministry coordination',
    4: 'Longevity as explicit national priority; multi-year funded programme; dedicated agency or mandate',
    5: 'Longevity is defining national policy axis; largest-in-class per-capita investment; global leadership role',
  },
  [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
    0: '"Anti-aging" is an unregulated marketing term. Supplements and cosmetics may freely claim to reverse aging without evidence. A4M-style pseudo-specialist certifications are unchallenged by professional licensing bodies and can be used to claim clinical authority. No enforcement mechanism specific to anti-aging pseudoscience.',
    1: 'General consumer protection and advertising standards apply, but enforcement is reactive — complaints-only, no proactive monitoring. Anti-aging claims may be challenged after the fact if reported to the advertising regulator. Professional licensing bodies neither endorse nor sanction members for promoting unproven interventions.',
    2: 'Advertising regulator has issued domain-specific guidance on anti-aging claims; unsubstantiated "anti-aging" and "reverses aging" claims in cosmetics and supplements are routinely challenged and removed. Professional medical associations have published position statements against specific pseudo-practices (A4M-style, IV drip clinics, hormone optimisation without indication). No pre-market requirement; enforcement remains complaint-driven.',
    3: 'Products cannot carry "anti-aging" or equivalent systemic claims without substantiated clinical data on file with the regulator. Medical licensing boards have explicit rules: members endorsing unproven anti-aging interventions face disciplinary proceedings. A4M-type certifications are explicitly listed as insufficient clinical qualification; practitioners using them to justify prescribing unlicensed agents can be sanctioned.',
    4: 'Systemic anti-aging effect claims require biomarker evidence reviewed by the regulator before marketing is permitted. Advertising regulator proactively monitors and issues removal orders on non-compliant claims. Public registry distinguishes validated from non-validated anti-aging claims. Practitioners at dedicated "longevity clinics" promoting disproven regimens face license review.',
    5: 'Anti-aging effect claims require the same evidence standard as drug efficacy claims — validated biomarker endpoints from a regulator-approved list must be demonstrated. Pseudo-certification bodies that grant clinical authority without recognised medical training are banned from doing so. Country is a global reference for evidence-based consumer protection in the longevity space.',
  },
}

// ------------------------------------------------------------
// BASE DATA TYPES
// ------------------------------------------------------------
// Standard claims use 1–5. Population screening claims use the 0–6 maturity ladder.
// Half-points (e.g. 3.5) are allowed for edge cases (e.g. proactive but narrow subset).
export type Score = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6

export interface Link {
  label: string
  url: string
  comment: string
}

export interface ClaimData {
  score: Score
  text: string
  links: Link[]
}

export interface CountryMetric { value: number; year: number; source: string }
export interface CountryMetrics { lifeExpectancy: CountryMetric; healthyLifeExpectancy: CountryMetric; populationShare60Plus: CountryMetric }

// ------------------------------------------------------------
// COUNTRY DATA — each field is a record of claims
// ------------------------------------------------------------
export interface CountryData {
  country: Country
  metrics: CountryMetrics

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]:      Record<ResearcherImmigrationClaim, ClaimData>
    [TalentsField.CLINICIAN_IMMIGRATION]:       Record<ClinicianImmigrationClaim, ClaimData>
    [TalentsField.RESEARCH_TRAINING_PIPELINE]:  Record<ResearchTrainingClaim, ClaimData>
    [TalentsField.CLINICIAN_AGING_TRAINING]:    Record<ClinicianAgingTrainingClaim, ClaimData>
    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: Record<ClinicianScientistClaim, ClaimData>
  }

  science: {
    [ScienceField.RESEARCH_FUNDING]:        Record<ResearchFundingClaim, ClaimData>
    [ScienceField.GENE_EDITING_REGULATION]: Record<GeneEditingClaim, ClaimData>
  }

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: Record<BreakthroughAgencyClaim, ClaimData>
    [TranslationField.ADAPTIVE_LICENSING]:            Record<AdaptiveLicensingClaim, ClaimData>
    [TranslationField.TRIAL_DESIGN_MODERNIZATION]:    Record<TrialDesignClaim, ClaimData>
    [TranslationField.REGULATORY_SANDBOXES]:          Record<RegulatorySandboxClaim, ClaimData>
    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]:      Record<AgingEndpointClaim, ClaimData>
  }

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]:       Record<PopulationScreeningClaim, ClaimData>
    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: Record<BiomarkerCollectionClaim, ClaimData>
    [HealthcareField.PREVENTIVE_TRIALS]:           Record<PreventiveTrialsClaim, ClaimData>
    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]:  Record<GeroEndpointsClaim, ClaimData>
  }

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]:   Record<OpenDataClaim, ClaimData>
    [DataField.INTEROPERABILITY_STANDARDS]:   Record<InteroperabilityClaim, ClaimData>
    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: Record<ResearchClinicalClaim, ClaimData>
  }

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]:       Record<RegulatoryHarmonizationClaim, ClaimData>
    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: Record<SharedPhysicalInfraClaim, ClaimData>
    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: Record<IntlResearchNetworkClaim, ClaimData>
  }

  societal: {
    [SocietalField.SOCIETAL_READINESS]: Record<SocietalReadinessClaim, ClaimData>
  }
}
