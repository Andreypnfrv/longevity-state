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
}

// ------------------------------------------------------------
// FIELDS PER GROUP
// ------------------------------------------------------------
export enum TalentsField {
  VISAS_FOR_SCIENTISTS = 'visas_for_scientists',
  VISAS_FOR_CLINICIANS = 'visas_for_clinicians',
  PHD_PROGRAMS = 'phd_programs',
  PHD_MD_PROGRAMS_FOR_CLINICIANS = 'phd_md_programs_for_clinicians',
}

export enum ScienceField {
  RESEARCH_FUNDING = 'research_funding',
  GENE_EDITING_REGULATION = 'gene_editing_regulation',
}

export enum TranslationField {
  BIOTECH_BREAKTHROUGH_AGENCIES = 'biotech_breakthrough_agencies',
  ADAPTIVE_LICENSING = 'adaptive_licensing',
  SYNTHETIC_CONTROL_ARMS = 'synthetic_control_arms',
  REGULATORY_SANDBOXES = 'regulatory_sandboxes',
  RIGHT_TO_TRY = 'right_to_try',
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
  PERTURBATION_SCREENING = 'perturbation_screening',
  MUTUAL_RECOGNITION = 'mutual_recognition',
  SHARED_INFRASTRUCTURE = 'shared_infrastructure',
  PUBLIC_ENGAGEMENT = 'public_engagement',
}

// ------------------------------------------------------------
// CLAIMS PER FIELD
// Each claim is a specific, verifiable statement about policy.
// Score 1–5: 1 = absent, 3 = partial, 5 = exemplary.
// ------------------------------------------------------------

export enum VisasScientistsClaim {
  DEDICATED_CATEGORY      = 'dedicated_category',
  FAST_PROCESSING         = 'fast_processing',
  CREDENTIAL_RECOGNITION  = 'credential_recognition',
  EARLY_CAREER_ACCESSIBLE = 'early_career_accessible',
}

export enum VisasCliniciansClaim {
  EU_AUTO_RECOGNITION  = 'eu_auto_recognition',
  NON_EU_PATHWAY       = 'non_eu_pathway',
  PROCESSING_UNDER_6M  = 'processing_under_6m',
  NO_LANGUAGE_BARRIER  = 'no_language_barrier',
}

export enum PhdProgramsClaim {
  DEDICATED_AGING_TRACK    = 'dedicated_aging_track',
  PUBLICLY_FUNDED          = 'publicly_funded',
  INTERNATIONAL_RECRUITMENT = 'international_recruitment',
  INDUSTRY_ACADEMIA_LINKS  = 'industry_academia_links',
}

export enum PhdMdProgramsClaim {
  COMBINED_PROGRAM_EXISTS  = 'combined_program_exists',
  PUBLICLY_FUNDED          = 'publicly_funded',
  AGING_TRACK_AVAILABLE    = 'aging_track_available',
  RETENTION_MECHANISMS     = 'retention_mechanisms',
}

export enum ResearchFundingClaim {
  DEDICATED_AGING_BUDGET   = 'dedicated_aging_budget',
  NOT_DISEASE_SILOED       = 'not_disease_siloed',
  LONG_TERM_HORIZON        = 'long_term_horizon',
  BASIC_RESEARCH_PROTECTED = 'basic_research_protected',
}

export enum GeneEditingClaim {
  NO_BLANKET_BAN         = 'no_blanket_ban',
  RISK_PROPORTIONATE     = 'risk_proportionate',
  APPROVED_TRIALS_EXIST  = 'approved_trials_exist',
  GERMLINE_PATHWAY_DEFINED = 'germline_pathway_defined',
}

export enum LongevityAgencyClaim {
  DEDICATED_AGENCY_EXISTS = 'dedicated_agency_exists',
  CHALLENGE_DRIVEN        = 'challenge_driven',
  NON_DILUTIVE_FUNDING    = 'non_dilutive_funding',
  IP_RETAINED_BY_DEVS     = 'ip_retained_by_devs',
}

export enum AdaptiveLicensingClaim {
  CONDITIONAL_APPROVAL_EXISTS = 'conditional_approval_exists',
  SURROGATE_ENDPOINTS_ACCEPTED = 'surrogate_endpoints_accepted',
  POST_MARKET_CONFIRMATION    = 'post_market_confirmation',
  AGING_SPECIFIC_PATHWAY      = 'aging_specific_pathway',
}

export enum SyntheticControlClaim {
  REGULATORY_ACCEPTED      = 'regulatory_accepted',
  NATIONAL_DATA_AVAILABLE  = 'national_data_available',
  AI_READY_INFRASTRUCTURE  = 'ai_ready_infrastructure',
  USED_IN_APPROVALS        = 'used_in_approvals',
}

export enum RegulatorySandboxClaim {
  SANDBOX_EXISTS           = 'sandbox_exists',
  COMBINATION_THERAPIES    = 'combination_therapies',
  REPURPOSED_DRUGS         = 'repurposed_drugs',
  LEGAL_SAFE_HARBOUR       = 'legal_safe_harbour',
}

export enum RightToTryClaim {
  LAW_EXISTS              = 'law_exists',
  COVERS_TERMINAL         = 'covers_terminal',
  PHYSICIAN_PROTECTION    = 'physician_protection',
  COMPANY_PARTICIPATION   = 'company_participation',
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
  POLYGENIC_RISK       = 'polygenic_risk',        // genome-wide PRS-based risk stratification
}

export enum BiomarkerCollectionClaim {
  PARTICIPATION_MODEL  = 'participation_model',   // How people are enrolled (opt-in → opt-out coverage)
  RESAMPLING_FREQUENCY = 'resampling_frequency',  // How often biosamples are retaken over time
  BIOMARKER_DEPTH      = 'biomarker_depth',       // Which molecular layers are measured
  CLINICAL_LINKAGE     = 'clinical_linkage',      // Whether biobank data is linked to health records
  RESEARCHER_ACCESS    = 'researcher_access',     // Who can access and how easily
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
  FREE_RESEARCHER_ACCESS   = 'free_researcher_access',
  AI_USE_PERMITTED         = 'ai_use_permitted',
  ANONYMIZATION_STANDARD   = 'anonymization_standard',
  CROSS_BORDER_SHARING     = 'cross_border_sharing',
}

export enum InteroperabilityClaim {
  NATIONAL_STANDARD_EXISTS = 'national_standard_exists',
  FHIR_IMPLEMENTED         = 'fhir_implemented',
  REGISTRIES_LINKED        = 'registries_linked',
  REAL_TIME_ACCESS         = 'real_time_access',
}

export enum TrialEndpointsClaim {
  STANDARDIZED_DEFINED     = 'standardized_defined',
  REGULATORY_ACCEPTED      = 'regulatory_accepted',
  CROSS_STUDY_COMPARABLE   = 'cross_study_comparable',
  AGING_SPECIFIC_INCLUDED  = 'aging_specific_included',
}

export enum PerturbationScreeningClaim {
  NATIONAL_HTS_EXISTS      = 'national_hts_exists',
  AI_READY                 = 'ai_ready',
  SHARED_ACCESS            = 'shared_access',
  AGING_PROGRAM            = 'aging_program',
}

export enum MutualRecognitionClaim {
  BILATERAL_AGREEMENTS     = 'bilateral_agreements',
  TRIAL_RESULTS_ACCEPTED   = 'trial_results_accepted',
  SANDBOX_OUTCOMES_SHARED  = 'sandbox_outcomes_shared',
  HARMONIZED_STANDARDS     = 'harmonized_standards',
}

export enum SharedInfraClaim {
  WET_LAB_SHARING          = 'wet_lab_sharing',
  COMPUTE_SHARING          = 'compute_sharing',
  MODEL_ORGANISMS_SHARED   = 'model_organisms_shared',
  OPEN_TO_FOREIGN          = 'open_to_foreign',
}

export enum PublicEngagementClaim {
  NATIONAL_PROGRAM         = 'national_program',
  COUNTER_MISINFORMATION   = 'counter_misinformation',
  EQUITY_NARRATIVE         = 'equity_narrative',
  HIGH_PUBLIC_TRUST        = 'high_public_trust',
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

// ------------------------------------------------------------
// COUNTRY DATA — each field is a record of claims
// ------------------------------------------------------------
export interface CountryData {
  country: Country

  talents: {
    [TalentsField.VISAS_FOR_SCIENTISTS]:          Record<VisasScientistsClaim, ClaimData>
    [TalentsField.VISAS_FOR_CLINICIANS]:          Record<VisasCliniciansClaim, ClaimData>
    [TalentsField.PHD_PROGRAMS]:                  Record<PhdProgramsClaim, ClaimData>
    [TalentsField.PHD_MD_PROGRAMS_FOR_CLINICIANS]: Record<PhdMdProgramsClaim, ClaimData>
  }

  science: {
    [ScienceField.RESEARCH_FUNDING]:        Record<ResearchFundingClaim, ClaimData>
    [ScienceField.GENE_EDITING_REGULATION]: Record<GeneEditingClaim, ClaimData>
  }

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: Record<LongevityAgencyClaim, ClaimData>
    [TranslationField.ADAPTIVE_LICENSING]:            Record<AdaptiveLicensingClaim, ClaimData>
    [TranslationField.SYNTHETIC_CONTROL_ARMS]:        Record<SyntheticControlClaim, ClaimData>
    [TranslationField.REGULATORY_SANDBOXES]:          Record<RegulatorySandboxClaim, ClaimData>
    [TranslationField.RIGHT_TO_TRY]:                  Record<RightToTryClaim, ClaimData>
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
    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: Record<TrialEndpointsClaim, ClaimData>
  }

  international: {
    [InternationalField.PERTURBATION_SCREENING]: Record<PerturbationScreeningClaim, ClaimData>
    [InternationalField.MUTUAL_RECOGNITION]:     Record<MutualRecognitionClaim, ClaimData>
    [InternationalField.SHARED_INFRASTRUCTURE]:  Record<SharedInfraClaim, ClaimData>
    [InternationalField.PUBLIC_ENGAGEMENT]:      Record<PublicEngagementClaim, ClaimData>
  }
}
