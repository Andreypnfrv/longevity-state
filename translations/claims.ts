import {
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField,
  VisasScientistsClaim, VisasCliniciansClaim, PhdProgramsClaim, PhdMdProgramsClaim,
  ResearchFundingClaim, GeneEditingClaim,
  LongevityAgencyClaim, AdaptiveLicensingClaim, SyntheticControlClaim, RegulatorySandboxClaim, RightToTryClaim,
  PopulationScreeningClaim, BiomarkerCollectionClaim, PreventiveTrialsClaim, GeroEndpointsClaim,
  OpenDataClaim, InteroperabilityClaim, TrialEndpointsClaim,
  PerturbationScreeningClaim, MutualRecognitionClaim, SharedInfraClaim, PublicEngagementClaim,
} from '../schema'
import { Locale } from './index'

export interface ClaimTranslation {
  title: string
  description: string
}

// Nested: claimLabels[fieldKey][claimKey][locale]
// Prevents key collisions between enums from different fields that share the same string value.
export const claimLabels: Record<string, Record<string, Record<Locale, ClaimTranslation>>> = {

  // ── Talents: Visas for Scientists ────────────────────────────────────────
  [TalentsField.VISAS_FOR_SCIENTISTS]: {
    [VisasScientistsClaim.DEDICATED_CATEGORY]: { [Locale.EN]: {
      title: 'Dedicated visa category exists',
      description: 'A specific visa or permit category for researchers/scientists, distinct from general skilled-worker visas.',
    }},
    [VisasScientistsClaim.FAST_PROCESSING]: { [Locale.EN]: {
      title: 'Processing under 3 months',
      description: 'Standard end-to-end processing time for a researcher visa is under 3 months.',
    }},
    [VisasScientistsClaim.CREDENTIAL_RECOGNITION]: { [Locale.EN]: {
      title: 'Foreign credentials recognised',
      description: 'Foreign academic degrees and research credentials are automatically or streamlined-recognised without lengthy re-evaluation.',
    }},
    [VisasScientistsClaim.EARLY_CAREER_ACCESSIBLE]: { [Locale.EN]: {
      title: 'Accessible to early-career researchers',
      description: 'Fees, income thresholds, and documentation requirements do not effectively exclude early-career (postdoc-level) researchers.',
    }},
  },

  // ── Talents: Visas for Clinicians ────────────────────────────────────────
  [TalentsField.VISAS_FOR_CLINICIANS]: {
    [VisasCliniciansClaim.EU_AUTO_RECOGNITION]: { [Locale.EN]: {
      title: 'EU/EEA licences auto-recognised',
      description: 'Medical licences from EU/EEA countries are automatically recognised without a re-examination process.',
    }},
    [VisasCliniciansClaim.NON_EU_PATHWAY]: { [Locale.EN]: {
      title: 'Clear pathway for non-EU clinicians',
      description: 'A defined, publicly documented process exists for non-EU clinicians to obtain a licence to practise.',
    }},
    [VisasCliniciansClaim.PROCESSING_UNDER_6M]: { [Locale.EN]: {
      title: 'Licensing process under 6 months',
      description: 'End-to-end licence assessment for a foreign clinician takes under 6 months in standard cases.',
    }},
    [VisasCliniciansClaim.NO_LANGUAGE_BARRIER]: { [Locale.EN]: {
      title: 'No prohibitive language requirement',
      description: 'Language proficiency requirements do not effectively bar clinicians who would practise in international or research settings.',
    }},
  },

  // ── Talents: PhD Programs ─────────────────────────────────────────────────
  [TalentsField.PHD_PROGRAMS]: {
    [PhdProgramsClaim.DEDICATED_AGING_TRACK]: { [Locale.EN]: {
      title: 'Dedicated aging biology track',
      description: 'At least one PhD programme with a dedicated track or specialisation in aging biology, biogerontology, or longevity science.',
    }},
    [PhdProgramsClaim.PUBLICLY_FUNDED]: { [Locale.EN]: {
      title: 'Publicly funded positions',
      description: 'PhD positions in aging research are funded by public grants or national training programmes, not solely by tuition or self-funding.',
    }},
    [PhdProgramsClaim.INTERNATIONAL_RECRUITMENT]: { [Locale.EN]: {
      title: 'Active international recruitment',
      description: 'Programmes actively recruit internationally and have mechanisms (fellowships, visa support) to attract foreign PhD students.',
    }},
    [PhdProgramsClaim.INDUSTRY_ACADEMIA_LINKS]: { [Locale.EN]: {
      title: 'Industry–academia training links',
      description: 'PhD programmes include structured industry exposure — placements, co-supervision, or joint funding with biotech/pharma.',
    }},
  },

  // ── Talents: PhD/MD-PhD Programs ─────────────────────────────────────────
  [TalentsField.PHD_MD_PROGRAMS_FOR_CLINICIANS]: {
    [PhdMdProgramsClaim.COMBINED_PROGRAM_EXISTS]: { [Locale.EN]: {
      title: 'Combined MD–PhD programme exists',
      description: 'A formal, structured combined clinical and research degree programme exists (not just informal parallel enrolment).',
    }},
    [PhdMdProgramsClaim.PUBLICLY_FUNDED]: { [Locale.EN]: {
      title: 'Publicly funded',
      description: 'Combined MD–PhD positions are funded by public agencies or national training grants, not solely self-funded.',
    }},
    [PhdMdProgramsClaim.AGING_TRACK_AVAILABLE]: { [Locale.EN]: {
      title: 'Aging/longevity specialisation available',
      description: 'MD–PhD students can specialise in aging biology, geriatric medicine, or longevity science within the programme.',
    }},
    [PhdMdProgramsClaim.RETENTION_MECHANISMS]: { [Locale.EN]: {
      title: 'Career retention mechanisms',
      description: 'Specific mechanisms (protected research time, dual appointments, career tracks) exist to retain MD–PhDs in research after graduation.',
    }},
  },

  // ── Science: Research Funding ─────────────────────────────────────────────
  [ScienceField.RESEARCH_FUNDING]: {
    [ResearchFundingClaim.DEDICATED_AGING_BUDGET]: { [Locale.EN]: {
      title: 'Dedicated aging research budget line',
      description: 'A named, ring-fenced public budget line specifically for aging or longevity research.',
    }},
    [ResearchFundingClaim.NOT_DISEASE_SILOED]: { [Locale.EN]: {
      title: 'Not siloed into single disease',
      description: 'Aging research funding is not overwhelmingly dominated by a single disease at the expense of basic aging biology.',
    }},
    [ResearchFundingClaim.LONG_TERM_HORIZON]: { [Locale.EN]: {
      title: 'Long-term funding horizon (>5 years)',
      description: 'Researchers can access multi-year (>5 year) funding cycles, reducing short-termism in aging biology research.',
    }},
    [ResearchFundingClaim.BASIC_RESEARCH_PROTECTED]: { [Locale.EN]: {
      title: 'Basic research protected from translational pressure',
      description: 'Funding mechanisms explicitly protect fundamental aging biology from being replaced by applied/translational requirements.',
    }},
  },

  // ── Science: Gene Editing ─────────────────────────────────────────────────
  [ScienceField.GENE_EDITING_REGULATION]: {
    [GeneEditingClaim.NO_BLANKET_BAN]: { [Locale.EN]: {
      title: 'No blanket ban on somatic editing',
      description: 'Somatic gene editing in humans is not categorically prohibited — a regulatory pathway for therapeutic applications exists.',
    }},
    [GeneEditingClaim.RISK_PROPORTIONATE]: { [Locale.EN]: {
      title: 'Risk-proportionate framework',
      description: 'Regulatory oversight is tiered by risk level; low-risk somatic editing faces lighter oversight than germline.',
    }},
    [GeneEditingClaim.APPROVED_TRIALS_EXIST]: { [Locale.EN]: {
      title: 'Approved somatic gene therapy trials',
      description: 'At least one approved clinical trial or approved therapy using somatic gene editing is active or completed.',
    }},
    [GeneEditingClaim.GERMLINE_PATHWAY_DEFINED]: { [Locale.EN]: {
      title: 'Germline pathway defined (even if restricted)',
      description: 'A clear legal/regulatory position on germline editing exists — whether permitted with conditions, moratorium, or explicit prohibition.',
    }},
  },

  // ── Translation: Longevity Agency ─────────────────────────────────────────
  [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
    [LongevityAgencyClaim.DEDICATED_AGENCY_EXISTS]: { [Locale.EN]: {
      title: 'Dedicated longevity/healthspan agency',
      description: 'A government agency with an explicit mandate for longevity or healthy-aging research translation exists.',
    }},
    [LongevityAgencyClaim.CHALLENGE_DRIVEN]: { [Locale.EN]: {
      title: 'Challenge-driven, not grant-based',
      description: 'Agency operates on ARPA/DARPA model — directed challenges with competitive execution.',
    }},
    [LongevityAgencyClaim.NON_DILUTIVE_FUNDING]: { [Locale.EN]: {
      title: 'Non-dilutive funding available',
      description: 'Agency provides non-dilutive funding (grants, contracts, prizes) — developers do not give up equity.',
    }},
    [LongevityAgencyClaim.IP_RETAINED_BY_DEVS]: { [Locale.EN]: {
      title: 'IP retained by developers',
      description: 'IP from publicly funded longevity research is retained by the developer, not assigned to the funding agency.',
    }},
  },

  // ── Translation: Adaptive Licensing ──────────────────────────────────────
  [TranslationField.ADAPTIVE_LICENSING]: {
    [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL_EXISTS]: { [Locale.EN]: {
      title: 'Conditional/accelerated approval pathway',
      description: 'A formal pathway exists for conditional or accelerated drug approval based on interim or surrogate data.',
    }},
    [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS_ACCEPTED]: { [Locale.EN]: {
      title: 'Surrogate endpoints accepted',
      description: 'Regulatory authority accepts validated surrogate endpoints in place of hard clinical endpoints for approval.',
    }},
    [AdaptiveLicensingClaim.POST_MARKET_CONFIRMATION]: { [Locale.EN]: {
      title: 'Post-market confirmatory trials required',
      description: 'Conditional approvals require post-market confirmatory evidence — not permanent without proof of clinical benefit.',
    }},
    [AdaptiveLicensingClaim.AGING_SPECIFIC_PATHWAY]: { [Locale.EN]: {
      title: 'Aging-specific guidance or pathway',
      description: 'Regulatory authority has issued specific guidance or pathway for aging/longevity interventions.',
    }},
  },

  // ── Translation: Synthetic Control Arms ──────────────────────────────────
  [TranslationField.SYNTHETIC_CONTROL_ARMS]: {
    [SyntheticControlClaim.REGULATORY_ACCEPTED]: { [Locale.EN]: {
      title: 'Regulator accepts synthetic controls',
      description: 'The regulatory authority has formally accepted synthetic/external control arms as valid comparators in submissions.',
    }},
    [SyntheticControlClaim.NATIONAL_DATA_AVAILABLE]: { [Locale.EN]: {
      title: 'National health data available for controls',
      description: 'Sufficiently rich, accessible national health data exists to construct valid synthetic comparator populations.',
    }},
    [SyntheticControlClaim.AI_READY_INFRASTRUCTURE]: { [Locale.EN]: {
      title: 'AI-ready data infrastructure',
      description: 'National health data infrastructure supports AI/ML-based synthetic control construction.',
    }},
    [SyntheticControlClaim.USED_IN_APPROVALS]: { [Locale.EN]: {
      title: 'Already used in regulatory approvals',
      description: 'At least one approved drug used a synthetic or external control arm as part of the regulatory submission.',
    }},
  },

  // ── Translation: Regulatory Sandbox ──────────────────────────────────────
  [TranslationField.REGULATORY_SANDBOXES]: {
    [RegulatorySandboxClaim.SANDBOX_EXISTS]: { [Locale.EN]: {
      title: 'Formal regulatory sandbox exists',
      description: 'A legally defined regulatory sandbox for health interventions with explicit safe-harbour provisions exists and is operational.',
    }},
    [RegulatorySandboxClaim.COMBINATION_THERAPIES]: { [Locale.EN]: {
      title: 'Covers combination therapies',
      description: 'The sandbox explicitly covers combination therapies (drug + device, drug + biologic, etc.).',
    }},
    [RegulatorySandboxClaim.REPURPOSED_DRUGS]: { [Locale.EN]: {
      title: 'Covers repurposed drugs',
      description: 'The sandbox explicitly facilitates testing of repurposed/off-label drugs for new aging indications.',
    }},
    [RegulatorySandboxClaim.LEGAL_SAFE_HARBOUR]: { [Locale.EN]: {
      title: 'Legal safe harbour for participants',
      description: 'Patients and physicians participating in sandbox trials have explicit legal protection from standard liability.',
    }},
  },

  // ── Translation: Right to Try ─────────────────────────────────────────────
  [TranslationField.RIGHT_TO_TRY]: {
    [RightToTryClaim.LAW_EXISTS]: { [Locale.EN]: {
      title: 'Right-to-try law exists',
      description: 'A law or regulation explicitly granting patients access to investigational treatments outside standard trial enrolment.',
    }},
    [RightToTryClaim.COVERS_TERMINAL]: { [Locale.EN]: {
      title: 'Covers terminally ill patients',
      description: 'The law explicitly covers patients with terminal or life-threatening conditions who have exhausted standard treatment options.',
    }},
    [RightToTryClaim.PHYSICIAN_PROTECTION]: { [Locale.EN]: {
      title: 'Legal protection for prescribing physicians',
      description: 'Physicians who prescribe investigational treatments under RTT are explicitly protected from professional or legal liability.',
    }},
    [RightToTryClaim.COMPANY_PARTICIPATION]: { [Locale.EN]: {
      title: 'Company participation mandated',
      description: 'Developers are legally required to provide access when requested, or strong incentives ensure near-universal access.',
    }},
  },

  // ── Healthcare: Population Screening ─────────────────────────────────────
  // Screening claims share a standardised implementation scale:
  // 1 = no national programme / not officially recommended
  // 2 = exists but limited (restricted eligibility, pilot only, or insurance-gated)
  // 3 = national programme, partially funded, moderate uptake
  // 4 = national programme, fully funded, high uptake (>70% of eligible)
  // 5 = proactively invited (letter/system), fully free, near-universal (>90%)
  [HealthcareField.POPULATION_SCREENINGS]: {
    [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: { [Locale.EN]: {
      title: 'Cardiovascular risk screening',
      description: 'Systematic population-level assessment of cardiovascular risk — blood pressure, lipids, glucose, BMI, smoking — with proactive follow-up. Score reflects whether this is routinely offered free of charge to the general population.',
    }},
    [PopulationScreeningClaim.BREAST_CANCER]: { [Locale.EN]: {
      title: 'Breast cancer screening (mammography)',
      description: 'Population-level mammography programme for women in the recommended age range. Score reflects universality, cost, and whether women are proactively invited rather than self-referring.',
    }},
    // ── Established screenings ──────────────────────────────────────────────
    [PopulationScreeningClaim.COLORECTAL_CANCER]: { [Locale.EN]: {
      title: 'Colorectal cancer screening (FIT / colonoscopy)',
      description: 'Population-level colorectal cancer screening using fecal immunochemical test (FIT) annually or colonoscopy every 10 years. FIT is the preferred mass-screening approach: non-invasive, cheap, high compliance. Score reflects whether the programme is invitation-based, free, and achieves high uptake in the eligible age group.',
    }},
    [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: { [Locale.EN]: {
      title: 'Cervical cancer screening (HPV primary testing)',
      description: 'Population-level cervical screening using HPV DNA testing as the primary screen (preferred over cytology alone). Score reflects whether women are proactively invited, the test is free, and the programme achieves high uptake. HPV vaccination reduces future burden but does not replace screening for current cohorts.',
    }},
    [PopulationScreeningClaim.AAA_ULTRASOUND]: { [Locale.EN]: {
      title: 'Abdominal aortic aneurysm (AAA) ultrasound',
      description: 'One-time abdominal ultrasound for men aged 65–75 who have ever smoked. Among the highest benefit-to-harm ratios of any screening: ~50% AAA mortality reduction. Score reflects whether the programme is invitation-based, free, and reaches eligible men — not whether it extends to non-smokers (where evidence is weaker).',
    }},
    [PopulationScreeningClaim.DIABETES_METABOLIC]: { [Locale.EN]: {
      title: 'Type 2 diabetes / prediabetes screening',
      description: 'Population-level screening for type 2 diabetes or prediabetes using HbA1c or fasting plasma glucose, paired with a structured lifestyle intervention offer for those at risk. Score reflects universality, frequency, and whether a follow-up lifestyle programme is integrated.',
    }},
    [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: { [Locale.EN]: {
      title: 'Osteoporosis screening (DEXA scan)',
      description: 'Bone mineral density measurement (DEXA) for women aged 65+ and men aged 70+, or earlier for high-risk individuals assessed via FRAX. Fragility fractures are a leading cause of longevity loss in older adults. Score reflects whether the programme is population-wide, free, and invitation-based rather than purely referral-driven.',
    }},
    [PopulationScreeningClaim.LUNG_CANCER_CT]: { [Locale.EN]: {
      title: 'Lung cancer screening (low-dose CT, heavy smokers)',
      description: 'Annual low-dose CT for adults aged 50–80 with ≥20 pack-year smoking history. In this specific population, LDCT reduces lung cancer mortality by ~20%. Score reflects whether the programme has national coverage, correct eligibility criteria, and systematic invitation — not whether it applies to the general population (where evidence supports harm).',
    }},
    // ── Longevity-frontier screenings ───────────────────────────────────────
    // Growing evidence but not yet universal national guideline.
    // Same 1–5 scale; score reflects current clinical integration, not research alone.
    // → Add new frontier targets here as national guidance solidifies
    [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: { [Locale.EN]: {
      title: 'Atrial fibrillation detection',
      description: 'Systematic detection of undiagnosed atrial fibrillation — via single-lead ECG, pulse palpation, or wearable monitoring — linked to anticoagulation therapy. Early AF detection dramatically reduces stroke risk. Score reflects whether the country has moved beyond opportunistic case-finding to a structured population-level approach.',
    }},
    [PopulationScreeningClaim.COGNITIVE_DECLINE]: { [Locale.EN]: {
      title: 'Cognitive decline / dementia screening',
      description: 'Systematic population-level screening for early cognitive decline or MCI using validated tools (e.g., MoCA, MMSE, digital cognitive tests). Emerging as increasingly actionable with disease-modifying therapies (lecanemab, donanemab). Score is intentionally conservative until treatment pathways are widely available.',
    }},
    [PopulationScreeningClaim.POLYGENIC_RISK]: { [Locale.EN]: {
      title: 'Polygenic risk score (PRS) integration',
      description: 'Use of genome-wide polygenic risk scores to stratify population disease risk and personalise screening intervals or prevention strategies. Currently frontier: a small number of countries (Iceland, UK) are piloting PRS in clinical pathways. Score reflects whether PRS has moved from research into funded, accessible clinical use.',
    }},
    // → add new screening targets here; use the 0–6 SCREENING_SCALE from schema.ts
  },

  // ── Healthcare: Biomarker Collections ────────────────────────────────────
  [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
    [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: { [Locale.EN]: {
      title: 'Participation model',
      description: 'How people are enrolled: from opt-in volunteer cohorts (0–2) through residual-sample defaults (3) to universal opt-out coverage (5).',
    }},
    [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: { [Locale.EN]: {
      title: 'Re-sampling frequency',
      description: 'How often biosamples are retaken: from one-time collection (0) through 5–10 year intervals (3) to dense ≤3 year re-contact (5).',
    }},
    [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: { [Locale.EN]: {
      title: 'Biomarker depth',
      description: 'Which molecular layers are measured: from standard clinical samples (0) through single-omic (2–3) to full multi-omic + functional aging phenotypes (5).',
    }},
    [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: { [Locale.EN]: {
      title: 'Clinical data linkage',
      description: 'Whether biobank data is linked to health records: from no linkage (0) through registry-level (2) and full EHR (3) to real-time bidirectional integration (5).',
    }},
    [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: { [Locale.EN]: {
      title: 'Researcher access',
      description: 'Who can access the data and how easily: from internal only (1) through international application (3) to open / federated access (5).',
    }},
  },

  // ── Healthcare: Preventive Trials ────────────────────────────────────────
  [HealthcareField.PREVENTIVE_TRIALS]: {
    [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: { [Locale.EN]: {
      title: 'Trial efficiency',
      description: 'How cheaply and seamlessly patients can be enrolled at scale: from standalone academic trials (0–1) through register-based RCT infrastructure (3–4) to fully invisible participation (5).',
    }},
    [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: { [Locale.EN]: {
      title: 'Regulatory RWE acceptance',
      description: 'Whether the regulator accepts real-world evidence from pragmatic trials: from pharmacovigilance only (1) through some primary evidence (3) to full regulatory equivalence (5).',
    }},
    [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: { [Locale.EN]: {
      title: 'Longevity endpoints used',
      description: 'Aging-specific endpoints in active trials: from disease endpoints only (0) through functional/composite scores (1–2) to validated biological age surrogate with regulatory acceptance (4–5).',
    }},
    [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: { [Locale.EN]: {
      title: 'Aging agents in prevention trials',
      description: 'Active trials of agents targeting aging mechanisms (senolytics, rapamycin analogues, NAD precursors, etc.) in a primary prevention context.',
    }},
    [PreventiveTrialsClaim.NATIONAL_COORDINATION]: { [Locale.EN]: {
      title: 'National coordination',
      description: 'Whether a national body coordinates aging trial infrastructure and standardises endpoints: from no coordination (0) through aging-mandated national body (3) to international harmonised platform (5).',
    }},
  },

  // ── Healthcare: Gero Endpoints ────────────────────────────────────────────
  [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
    [GeroEndpointsClaim.AGING_AS_INDICATION]: { [Locale.EN]: {
      title: 'Aging as a targetable indication',
      description: 'Whether the regulatory system recognises aging itself as an indication: from organ-specific aging conditions (sarcopenia, frailty) to systemic aging as a primary target.',
    }},
    [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: { [Locale.EN]: {
      title: 'Aging endpoint acceptance',
      description: 'Which aging endpoints the regulator formally accepts: from single functional measures (grip, gait) through composites to validated biological age surrogates as primary endpoints.',
    }},
    [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: { [Locale.EN]: {
      title: 'Healthspan valuation methodology',
      description: 'Whether HTA bodies can quantify the economic value of healthspan extension: from standard QALY only (0) to an established framework with positive assessment precedent (4–5).',
    }},
    [GeroEndpointsClaim.COVERAGE_PATHWAY]: { [Locale.EN]: {
      title: 'Coverage pathway for geroprotectors',
      description: 'Whether a funded route exists for patients to access aging-prevention agents: from no pathway (0) through pilot reimbursement (2–3) to value-based coverage linked to aging endpoints (5).',
    }},
    [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: { [Locale.EN]: {
      title: 'Expedited regulatory pathway',
      description: 'Whether aging-prevention agents can qualify for accelerated review: from standard timelines only (0) through Breakthrough/PRIME designations (2) to a dedicated aging-prevention pathway (4–5).',
    }},
  },

  // ── Data: Open Access ─────────────────────────────────────────────────────
  [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
    [OpenDataClaim.FREE_RESEARCHER_ACCESS]: { [Locale.EN]: {
      title: 'Free access for qualified researchers',
      description: 'Qualified researchers can access anonymised national health data at no cost through a defined application process.',
    }},
    [OpenDataClaim.AI_USE_PERMITTED]: { [Locale.EN]: {
      title: 'AI applications explicitly permitted',
      description: 'Use of national health data for AI and machine learning applications is explicitly permitted.',
    }},
    [OpenDataClaim.ANONYMIZATION_STANDARD]: { [Locale.EN]: {
      title: 'Robust anonymisation standard in place',
      description: 'A defined, audited anonymisation standard governs data releases, providing both privacy protection and research usability.',
    }},
    [OpenDataClaim.CROSS_BORDER_SHARING]: { [Locale.EN]: {
      title: 'Cross-border data sharing enabled',
      description: 'Legal and technical infrastructure supports sharing anonymised health data with foreign researchers or international consortia.',
    }},
  },

  // ── Data: Interoperability ────────────────────────────────────────────────
  [DataField.INTEROPERABILITY_STANDARDS]: {
    [InteroperabilityClaim.NATIONAL_STANDARD_EXISTS]: { [Locale.EN]: {
      title: 'National EHR interoperability standard',
      description: 'A nationally mandated standard for EHR data exchange exists and is enforced across health providers.',
    }},
    [InteroperabilityClaim.FHIR_IMPLEMENTED]: { [Locale.EN]: {
      title: 'FHIR implemented at national scale',
      description: 'HL7 FHIR is mandated and implemented consistently across major health systems.',
    }},
    [InteroperabilityClaim.REGISTRIES_LINKED]: { [Locale.EN]: {
      title: 'Health registries linked to EHR',
      description: 'National health registries are linked to EHR data, enabling longitudinal research without manual data collection.',
    }},
    [InteroperabilityClaim.REAL_TIME_ACCESS]: { [Locale.EN]: {
      title: 'Near-real-time research data access',
      description: 'Researchers can access up-to-date health data (near-real-time or quarterly-updated), not just annual historical batches.',
    }},
  },

  // ── Data: Trial Endpoints ─────────────────────────────────────────────────
  [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
    [TrialEndpointsClaim.STANDARDIZED_DEFINED]: { [Locale.EN]: {
      title: 'Standardised endpoints defined',
      description: 'Standardised endpoint definitions for aging or longevity trials have been formally published.',
    }},
    [TrialEndpointsClaim.REGULATORY_ACCEPTED]: { [Locale.EN]: {
      title: 'Accepted by regulatory authority',
      description: 'The standardised endpoints are formally accepted by the regulatory authority for use in submissions.',
    }},
    [TrialEndpointsClaim.CROSS_STUDY_COMPARABLE]: { [Locale.EN]: {
      title: 'Enables cross-study comparability',
      description: 'Endpoint definitions are consistent enough to enable meaningful meta-analysis across independent trials.',
    }},
    [TrialEndpointsClaim.AGING_SPECIFIC_INCLUDED]: { [Locale.EN]: {
      title: 'Aging-specific composite endpoints included',
      description: 'Standardised endpoints include at least one aging-specific composite (biological age, functional decline, healthspan measure).',
    }},
  },

  // ── International: Perturbation Screening ────────────────────────────────
  [InternationalField.PERTURBATION_SCREENING]: {
    [PerturbationScreeningClaim.NATIONAL_HTS_EXISTS]: { [Locale.EN]: {
      title: 'National HTS infrastructure exists',
      description: 'National high-throughput screening infrastructure for genetic or pharmacological perturbations exists and is accessible.',
    }},
    [PerturbationScreeningClaim.AI_READY]: { [Locale.EN]: {
      title: 'AI-ready outputs and APIs',
      description: 'Screening outputs are structured, annotated, and accessible via APIs suitable for AI/ML analysis.',
    }},
    [PerturbationScreeningClaim.SHARED_ACCESS]: { [Locale.EN]: {
      title: 'Shared access for external researchers',
      description: 'Infrastructure and data are accessible to researchers from other institutions or countries.',
    }},
    [PerturbationScreeningClaim.AGING_PROGRAM]: { [Locale.EN]: {
      title: 'Aging-specific screening programme',
      description: 'A dedicated programme explicitly screens for perturbations that modulate aging biology or healthspan endpoints.',
    }},
  },

  // ── International: Mutual Recognition ────────────────────────────────────
  [InternationalField.MUTUAL_RECOGNITION]: {
    [MutualRecognitionClaim.BILATERAL_AGREEMENTS]: { [Locale.EN]: {
      title: 'Bilateral regulatory agreements',
      description: 'Bilateral or multilateral regulatory recognition agreements exist with major partner jurisdictions.',
    }},
    [MutualRecognitionClaim.TRIAL_RESULTS_ACCEPTED]: { [Locale.EN]: {
      title: 'Foreign clinical trial results accepted',
      description: 'Clinical trial results from approved foreign jurisdictions are accepted without requiring full local replication.',
    }},
    [MutualRecognitionClaim.SANDBOX_OUTCOMES_SHARED]: { [Locale.EN]: {
      title: 'Regulatory sandbox outcomes shared',
      description: 'Outcomes and learnings from regulatory sandbox programmes are formally shared with partner jurisdictions.',
    }},
    [MutualRecognitionClaim.HARMONIZED_STANDARDS]: { [Locale.EN]: {
      title: 'Harmonised trial conduct standards',
      description: 'Trial conduct standards are harmonised with major partner jurisdictions, enabling multi-country trials without parallel submissions.',
    }},
  },

  // ── International: Shared Infrastructure ─────────────────────────────────
  [InternationalField.SHARED_INFRASTRUCTURE]: {
    [SharedInfraClaim.WET_LAB_SHARING]: { [Locale.EN]: {
      title: 'Shared wet lab infrastructure',
      description: 'Wet lab facilities for aging research are formally shared with international partners.',
    }},
    [SharedInfraClaim.COMPUTE_SHARING]: { [Locale.EN]: {
      title: 'Shared HPC/AI compute',
      description: 'High-performance computing or AI infrastructure for aging data analysis is formally shared with international partners.',
    }},
    [SharedInfraClaim.MODEL_ORGANISMS_SHARED]: { [Locale.EN]: {
      title: 'Shared model organism facilities',
      description: 'Model organism facilities for aging research are shared with or open to international researchers.',
    }},
    [SharedInfraClaim.OPEN_TO_FOREIGN]: { [Locale.EN]: {
      title: 'Open to foreign researchers',
      description: 'National research infrastructure is formally open to researchers from other countries with defined access procedures.',
    }},
  },

  // ── International: Public Engagement ─────────────────────────────────────
  [InternationalField.PUBLIC_ENGAGEMENT]: {
    [PublicEngagementClaim.NATIONAL_PROGRAM]: { [Locale.EN]: {
      title: 'National science communication programme',
      description: 'A nationally coordinated programme specifically communicating longevity science to the general public exists.',
    }},
    [PublicEngagementClaim.COUNTER_MISINFORMATION]: { [Locale.EN]: {
      title: 'Active counter-misinformation effort',
      description: 'Government or publicly funded bodies actively counter misinformation about aging science.',
    }},
    [PublicEngagementClaim.EQUITY_NARRATIVE]: { [Locale.EN]: {
      title: 'Equity and access narrative present',
      description: 'Public communication explicitly frames healthy aging as a public good, not a luxury.',
    }},
    [PublicEngagementClaim.HIGH_PUBLIC_TRUST]: { [Locale.EN]: {
      title: 'High measured public trust',
      description: 'Surveys show high public trust in health/science institutions, creating a favourable environment for longevity research acceptance.',
    }},
  },
}
