import {
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField, SocietalField,
  ResearcherImmigrationClaim, ClinicianImmigrationClaim, ResearchTrainingClaim, ClinicianAgingTrainingClaim, ClinicianScientistClaim,
  ResearchFundingClaim, GeneEditingClaim,
  BreakthroughAgencyClaim, AdaptiveLicensingClaim, TrialDesignClaim, RegulatorySandboxClaim, AgingEndpointClaim,
  PopulationScreeningClaim, BiomarkerCollectionClaim, PreventiveTrialsClaim, GeroEndpointsClaim,
  OpenDataClaim, InteroperabilityClaim, ResearchClinicalClaim,
  RegulatoryHarmonizationClaim, SharedPhysicalInfraClaim, IntlResearchNetworkClaim,
  SocialReadinessClaim, PoliticalReadinessClaim,
} from '../schema'
import { Locale } from './index'

export interface ClaimTranslation {
  title: string
  description: string
  /** Long-form scoring methodology; shown in the left rubric column when expanded. */
  methodology?: string
  maxScore?: number
}

// Nested: claimLabels[fieldKey][claimKey][locale]
// Prevents key collisions between enums from different fields that share the same string value.
export const claimLabels: Record<string, Record<string, Record<Locale, ClaimTranslation>>> = {

  // ── Talents: Researcher Immigration ──────────────────────────────────────
  [TalentsField.RESEARCHER_IMMIGRATION]: {
    [ResearcherImmigrationClaim.VISA_PATHWAY]: { [Locale.EN]: {
      title: 'Visa pathway quality',
      description: 'Whether a dedicated, flexible researcher visa category exists — distinct from employer-tied skilled-worker permits — covering all career stages from postdoc to senior PI.',
    }},
    [ResearcherImmigrationClaim.PROCESSING_SPEED]: { [Locale.EN]: {
      title: 'Processing speed',
      description: 'How long it takes to obtain a researcher visa from application to approval — from unpredictable/multi-year to under 2 weeks.',
    }},
    [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: { [Locale.EN]: {
      title: 'Foreign credential recognition',
      description: 'Whether foreign academic degrees and research qualifications are automatically recognised or require lengthy re-evaluation by a local authority.',
    }},
    [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: { [Locale.EN]: {
      title: 'Early-career accessibility',
      description: 'Whether income thresholds, documentation requirements, and employer sponsorship rules realistically include postdocs and junior researchers — not just senior faculty.',
    }},
    [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: { [Locale.EN]: {
      title: 'Long-term retention pathway',
      description: 'Whether a research career provides a viable route to permanent residency or citizenship — including whether academic careers are treated equivalently to industry in points-based systems.',
    }},
  },

  // ── Talents: Clinician Immigration ───────────────────────────────────────
  [TalentsField.CLINICIAN_IMMIGRATION]: {
    [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: { [Locale.EN]: {
      title: 'Medical licence recognition',
      description: 'Whether foreign medical licences are recognised automatically (EU/EEA) or via a competency-based pathway rather than requiring full re-examination — which can add 2+ years.',
    }},
    [ClinicianImmigrationClaim.PATHWAY_CLARITY]: { [Locale.EN]: {
      title: 'Pathway clarity & support',
      description: 'Whether a clear, well-documented, digitally accessible process exists for foreign clinicians — with a designated support contact and predictable outcome.',
    }},
    [ClinicianImmigrationClaim.PROCESSING_TIME]: { [Locale.EN]: {
      title: 'Licensing processing time',
      description: 'Total time from arrival to licensed independent practice — from >2 years (full re-examination required) to <1 month (fast-track with provisional scope).',
    }},
    [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: { [Locale.EN]: {
      title: 'Provisional scope of practice',
      description: 'What foreign clinicians are permitted to do while their licence is being processed — from no practice at all to near-full independent scope from day 1.',
    }},
    [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: { [Locale.EN]: {
      title: 'Research–practice balance',
      description: 'Whether foreign clinicians can hold combined research-practice roles — not just choose one or the other — with structural support for dual-role careers in academic settings.',
    }},
  },

  // ── Talents: Research Training Pipeline ──────────────────────────────────
  [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
    [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: { [Locale.EN]: {
      title: 'Undergraduate aging exposure',
      description: 'Whether aging biology is systematically integrated into undergraduate life science and pre-medical curricula — creating a pipeline of students who see longevity research as a career option.',
    }},
    [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: { [Locale.EN]: {
      title: 'Graduate programme depth',
      description: 'Quantity and quality of dedicated aging research PhD programmes — from absent to a world-class national ecosystem with strong international talent attraction.',
    }},
    [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: { [Locale.EN]: {
      title: 'Postdoc ecosystem quality',
      description: 'Whether postdoc positions in aging research are structured, well-supported, and lead to real career options — rather than being uncoordinated, precarious, and career-dead-end.',
    }},
    [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: { [Locale.EN]: {
      title: 'Public funding coverage',
      description: 'Whether PhD and postdoc positions are funded by public training grants at competitive stipend levels — not left to self-funding, tuition, or individual PI grants.',
    }},
    [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: { [Locale.EN]: {
      title: 'Industry–academia bridge',
      description: 'Whether training programmes include structured exposure to biotech and pharma — co-supervision, rotations, joint funding — creating researchers who can move between sectors.',
    }},
  },

  // ── Talents: Clinician Aging Training ────────────────────────────────────
  [TalentsField.CLINICIAN_AGING_TRAINING]: {
    [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: { [Locale.EN]: {
      title: 'Geriatrics as a recognised specialty',
      description: 'Whether geriatrics and aging medicine are a formally recognised, well-resourced, and socially valued medical specialty — or a low-prestige underfunded afterthought.',
    }},
    [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: { [Locale.EN]: {
      title: 'Medical school integration',
      description: 'Whether aging biology — not just geriatric clinical management — is integrated systematically across the medical school curriculum, creating doctors who understand the mechanisms of aging.',
    }},
    [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: { [Locale.EN]: {
      title: 'Aging medicine residency quality',
      description: 'Quality and breadth of geriatrics / aging medicine residency training — from absent to world-class programmes including longevity interventions and integrated clinical research.',
    }},
    [ClinicianAgingTrainingClaim.LONGEVITY_CME]: { [Locale.EN]: {
      title: 'Longevity continuing medical education',
      description: 'Whether practising clinicians across all specialties can access structured continuing education in longevity medicine and aging interventions — not just geriatricians.',
    }},
    [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: { [Locale.EN]: {
      title: 'Aging medicine workforce planning',
      description: 'Whether a national plan exists to match the supply of aging medicine specialists to projected demographic demand — with funded expansion of training capacity.',
    }},
  },

  // ── Talents: Clinician-Scientist Pathway ─────────────────────────────────
  [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
    [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: { [Locale.EN]: {
      title: 'Combined degree programme exists',
      description: 'Whether a formal, structured MD-PhD or equivalent exists — not just informal parallel enrolment — with protected research time and a clear curriculum.',
    }},
    [ClinicianScientistClaim.PUBLIC_FUNDING]: { [Locale.EN]: {
      title: 'Public funding',
      description: 'Whether combined MD-PhD positions are publicly funded at stipend levels that do not impose a financial penalty for choosing the clinician-scientist path over a clinical career.',
    }},
    [ClinicianScientistClaim.AGING_SPECIALIZATION]: { [Locale.EN]: {
      title: 'Aging specialisation track',
      description: 'Whether a dedicated aging / longevity track exists within combined programmes — with specialist supervisors, aging-specific coursework, and industry links.',
    }},
    [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: { [Locale.EN]: {
      title: 'Protected research time in career',
      description: 'Whether clinicians in academic posts can formally protect 40–50% of their time for research — funded separately from the clinical budget, without informal negotiation or career penalty.',
    }},
    [ClinicianScientistClaim.CAREER_VIABILITY]: { [Locale.EN]: {
      title: 'Long-term career viability',
      description: 'Whether a clinician-scientist career is genuinely sustainable long-term — with competitive compensation, equivalent prestige to pure clinical or academic paths, and active pipeline management.',
    }},
  },

  // ── Science: Research Funding ─────────────────────────────────────────────
  [ScienceField.RESEARCH_FUNDING]: {
    [ResearchFundingClaim.FUNDING_SCALE]: { [Locale.EN]: {
      title: 'Funding scale',
      description: 'The absolute size of ring-fenced public investment in aging and longevity research — from no dedicated budget line to a world-leading independent institute.',
    }},
    [ResearchFundingClaim.PORTFOLIO_BREADTH]: { [Locale.EN]: {
      title: 'Portfolio breadth',
      description: 'Whether funding covers the full spectrum — basic aging mechanisms, biomarkers, translational, and clinical — without being captured by a single disease or a single research stage.',
    }},
    [ResearchFundingClaim.FUNDING_STABILITY]: { [Locale.EN]: {
      title: 'Funding stability & horizon',
      description: 'Whether researchers can access long-term, structurally protected funding — from annual discretionary grants to decade-long institutional commitments immune to political cycles.',
    }},
    [ResearchFundingClaim.IP_FRAMEWORK]: { [Locale.EN]: {
      title: 'University & public R&D IP',
      description: 'How a PI or founder can move inventions from classic public grants and university employment into a company — default ownership, TTO speed and templates, inventor upside, and exit from dead patents.',
    }},
    [ResearchFundingClaim.PRIVATE_LEVERAGE]: { [Locale.EN]: {
      title: 'Private capital leverage',
      description: 'The degree to which public funding attracts and coordinates private investment — philanthropy, longevity biotech venture capital, and industry co-funding.',
    }},
    [ResearchFundingClaim.RISK_APPETITE]: { [Locale.EN]: {
      title: 'Risk appetite for radical hypotheses',
      description: 'Whether the funding system actively supports unconventional, high-risk aging theories and novel targets — beyond what conservative peer review would fund.',
    }},
  },

  // ── Science: Gene Editing ─────────────────────────────────────────────────
  [ScienceField.GENE_EDITING_REGULATION]: {
    [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: { [Locale.EN]: {
      title: 'Somatic gene editing permissiveness',
      description: 'How open the regulatory environment is to somatic gene editing trials — from blanket prohibition to a world-leading approval record across many therapeutic areas.',
    }},
    [GeneEditingClaim.APPROVAL_SPEED]: { [Locale.EN]: {
      title: 'Clinical trial approval speed',
      description: 'Time from IND/CTA submission to trial start — from multi-year delays to adaptive, months-long co-development with the regulator.',
    }},
    [GeneEditingClaim.REGULATORY_ADAPTABILITY]: { [Locale.EN]: {
      title: 'Regulatory adaptability to new modalities',
      description: 'How quickly and proactively the regulator extends guidance to new gene editing technologies — base editing, prime editing, epigenetic reprogramming — rather than leaving them in legal limbo.',
    }},
    [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: { [Locale.EN]: {
      title: 'Germline editing permissiveness',
      description: 'How open the framework is to germline gene editing — from legal vacuum or blanket prohibition through structured basic-research permission to a defined clinical pathway.',
    }},
    [GeneEditingClaim.LONGEVITY_PATHWAY]: { [Locale.EN]: {
      title: 'Longevity/aging application pathway',
      description: 'Whether aging and longevity endpoints are recognised as valid regulatory targets for gene editing — from complete absence to a formal longevity medicine pathway.',
    }},
  },

  // ── Translation: Breakthrough Agencies ───────────────────────────────────
  [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
    [BreakthroughAgencyClaim.AGENCY_MODEL]: { [Locale.EN]: {
      title: 'Agency model',
      description: 'Whether the country has an ARPA/DARPA-style programme-manager model innovation agency — distinct from traditional grant-making councils.',
    }},
    [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: { [Locale.EN]: {
      title: 'Longevity mandate',
      description: 'Whether any innovation agency has an explicit aging or longevity mandate, ring-fenced budget, and published goals.',
    }},
    [BreakthroughAgencyClaim.FUNDING_TYPE]: { [Locale.EN]: {
      title: 'Funding type',
      description: 'Whether public innovation funding is truly non-dilutive and challenge-based — or only co-investment and match-grants with private sector.',
    }},
    [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: { [Locale.EN]: {
      title: 'Agency foreground IP',
      description: 'Who holds IP from breakthrough-agency instruments (PM contracts, challenge funding, prizes) — performer retention, sponsor licences, and predictability of spinout clearance vs state claw-back.',
    }},
    [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: { [Locale.EN]: {
      title: 'Challenge specificity',
      description: 'How specific and quantified longevity challenge objectives are — from vague "improve health" to measurable biological age targets with prize mechanisms.',
    }},
  },

  // ── Translation: Adaptive Licensing ──────────────────────────────────────
  [TranslationField.ADAPTIVE_LICENSING]: {
    [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: { [Locale.EN]: {
      title: 'Conditional/accelerated approval',
      description: 'How well-developed the conditional and accelerated approval ecosystem is — from no mechanism to world-leading integrated pathways.',
    }},
    [AdaptiveLicensingClaim.ROLLING_REVIEW]: { [Locale.EN]: {
      title: 'Rolling review availability',
      description: 'Whether the regulator accepts data packages as they accumulate during development, rather than requiring the full dossier at submission.',
    }},
    [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: { [Locale.EN]: {
      title: 'Surrogate endpoint breadth',
      description: 'How broadly surrogate endpoints are accepted — from disease-specific only to composite aging and longevity endpoints for registration.',
    }},
    [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: { [Locale.EN]: {
      title: 'Post-market confirmation framework',
      description: 'Whether conditional approvals have enforceable confirmatory requirements — from no enforcement to real-world evidence feeding back into label updates.',
    }},
    [AdaptiveLicensingClaim.EXPANDED_ACCESS]: { [Locale.EN]: {
      title: 'Expanded access / compassionate use',
      description: 'How streamlined individual patient access to investigational treatments is — from no mechanism to proactive structured access with insurer coverage.',
    }},
  },

  // ── Translation: Trial Design Modernization ───────────────────────────────
  [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
    [TrialDesignClaim.ADAPTIVE_DESIGNS]: { [Locale.EN]: {
      title: 'Adaptive trial design acceptance',
      description: 'How broadly adaptive designs (dose-finding, seamless Phase 2/3, response-adaptive randomisation) are accepted — from rejection to full co-design with regulator.',
    }},
    [TrialDesignClaim.SYNTHETIC_CONTROLS]: { [Locale.EN]: {
      title: 'Synthetic control arm acceptance',
      description: 'Whether synthetic or external control arms using real-world data are accepted — from never to standard tool across therapeutic areas.',
    }},
    [TrialDesignClaim.DECENTRALIZED_TRIALS]: { [Locale.EN]: {
      title: 'Decentralized trial support',
      description: 'Regulatory and infrastructure support for decentralized, home-based, and digitally-monitored clinical trials.',
    }},
    [TrialDesignClaim.PLATFORM_PROTOCOLS]: { [Locale.EN]: {
      title: 'Platform/master protocol trials',
      description: 'Whether platform trials (multiple interventions, shared control, adaptive arm addition) are supported by regulatory guidance and active infrastructure.',
    }},
    [TrialDesignClaim.RWE_INTEGRATION]: { [Locale.EN]: {
      title: 'Real-world evidence integration',
      description: 'Extent to which real-world evidence from registries, EHRs, and claims data is accepted in regulatory submissions — from safety-only to routine pivotal evidence.',
    }},
  },

  // ── Translation: Regulatory Sandbox ──────────────────────────────────────
  [TranslationField.REGULATORY_SANDBOXES]: {
    [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: { [Locale.EN]: {
      title: 'Sandbox existence & maturity',
      description: 'Whether a formal regulatory sandbox with defined rules, legal status, and active cohorts exists in the health/biotech sector.',
    }},
    [RegulatorySandboxClaim.BIOTECH_COVERAGE]: { [Locale.EN]: {
      title: 'Biotech therapeutic coverage',
      description: 'Whether the sandbox covers drugs, biologics, gene therapies, and novel modalities — or is limited to digital health only.',
    }},
    [RegulatorySandboxClaim.PATIENT_SCOPE]: { [Locale.EN]: {
      title: 'Patient participation scope',
      description: 'Whether real patients — including prevention and longevity cohorts — can participate in sandbox programmes with appropriate protections.',
    }},
    [RegulatorySandboxClaim.LEGAL_PROTECTION]: { [Locale.EN]: {
      title: 'Legal safe harbour',
      description: 'Whether developers, physicians, and institutions participating in the sandbox have explicit legal protection — from no safe harbour to comprehensive indemnity and admissible data.',
    }},
    [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: { [Locale.EN]: {
      title: 'Longevity applicability',
      description: 'Whether aging and longevity interventions can explicitly enter the sandbox — from disease-specific only to a dedicated longevity sandbox track.',
    }},
  },

  // ── Translation: Aging Endpoint Ecosystem ────────────────────────────────
  [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
    [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: { [Locale.EN]: {
      title: 'Regulatory endpoint acceptance',
      description: 'Whether aging biomarkers and composite longevity endpoints are accepted as primary endpoints — from exploratory-only to registration-grade.',
    }},
    [AgingEndpointClaim.QUALIFICATION_PATHWAY]: { [Locale.EN]: {
      title: 'Biomarker qualification pathway',
      description: 'Whether a formal, accelerated process exists to qualify novel aging biomarkers as regulatory-grade surrogates, independent of any specific drug.',
    }},
    [AgingEndpointClaim.CODEV_FRAMEWORK]: { [Locale.EN]: {
      title: 'Co-development framework',
      description: 'Whether aging biomarker endpoints can be co-developed and validated alongside a therapeutic within the same regulatory submission.',
    }},
    [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: { [Locale.EN]: {
      title: 'Reference population infrastructure',
      description: 'Whether publicly accessible, validated normative aging biomarker databases exist for synthetic control arm construction.',
    }},
    [AgingEndpointClaim.STANDARDIZATION]: { [Locale.EN]: {
      title: 'Measurement standardization',
      description: 'Whether aging biomarker measurement protocols are harmonised across studies — enabling cross-study comparison, data pooling, and synthetic control construction.',
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
    [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: { [Locale.EN]: {
      title: 'Sarcopenia / muscle-mass screening',
      description: 'Population screening for low muscle mass using DEXA or BIA. Low muscle mass is an independent predictor of mortality, falls, and metabolic disease. Score reflects national programme existence, access, and follow-up pathway.',
    }},
    [PopulationScreeningClaim.SLEEP_APNEA]: { [Locale.EN]: {
      title: 'Sleep apnoea screening',
      description: 'Systematic screening for obstructive sleep apnoea (OSA); ~10–15% of adults are undiagnosed. OSA is a strong independent predictor of dementia, cardiovascular disease, and metabolic dysfunction. Score reflects whether screening is proactive or clinician-initiated, and whether treatment is accessible.',
    }},
    [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: { [Locale.EN]: {
      title: 'Screening programme agility',
      description: 'Meta-capability: how quickly can the national screening system adopt, pilot, and decommission individual programmes? Ranges from statute-bound, decade-long processes (0) to adaptive commissioning with continuous evaluation and sub-12-month cycles (5). Uses its own 0–5 scale, not the standard screening presence scale.',
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
    [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: { [Locale.EN]: {
      title: 'Patient trial access',
      description: 'How easily patients can discover, match to, and enrol in relevant prevention or longevity trials: from chance-only referral (0) through automated EHR eligibility matching (3) to proactive population-level identification with near-zero-friction enrolment (4–5).',
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
    [OpenDataClaim.ACCESS_PROCESS]: { [Locale.EN]: {
      title: 'Access process speed & ease',
      description: 'How fast and frictionless it is to get approved for health data access — number of steps, wait time, digitisation of workflow. Centralization of data is a separate axis (Linkability).',
    }},
    [OpenDataClaim.LINKABILITY]: { [Locale.EN]: {
      title: 'Cross-domain data linkability',
      description: 'Whether data from different sources (EHR, disease registries, biobanks, prescriptions, wearables) can be linked at the individual level using a consistent identifier.',
    }},
    [OpenDataClaim.PRIVACY_RESOLUTION]: { [Locale.EN]: {
      title: 'Privacy-preserving access quality',
      description: 'Quality of the privacy infrastructure from a researcher\'s perspective — from basic pseudonymisation to best-in-class TREs (code-to-data, rich tooling, synthetic twins). Higher scores mean more data richness at less friction, not necessarily more cryptographic sophistication.',
    }},
    [OpenDataClaim.AI_USE_GOVERNANCE]: { [Locale.EN]: {
      title: 'AI/ML use governance',
      description: 'Whether there is an explicit, fast pathway for AI and ML applications on national health data — from prohibited to proactive federated training infrastructure.',
    }},
    [OpenDataClaim.CROSS_BORDER_SHARING]: { [Locale.EN]: {
      title: 'Cross-border data sharing',
      description: 'Legal and technical infrastructure for sharing health data with foreign researchers or international consortia — from no framework to full federated international infrastructure.',
    }},
  },

  // ── Data: Interoperability ────────────────────────────────────────────────
  [DataField.INTEROPERABILITY_STANDARDS]: {
    [InteroperabilityClaim.EHR_COVERAGE]: { [Locale.EN]: {
      title: 'EHR coverage & structure',
      description: 'How much of the population\'s healthcare is captured in structured, standardised electronic health records — from paper-dominant to full structured coverage including patient-reported outcomes.',
    }},
    [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: { [Locale.EN]: {
      title: 'Terminology & standard compliance',
      description: 'Consistent national use of ICD, LOINC, SNOMED CT, and FHIR — the coding systems that allow data from different providers to be compared. Without consistent terminology, combining data across systems produces noise, not signal.',
    }},
    [InteroperabilityClaim.REGISTRY_COMPLETENESS]: { [Locale.EN]: {
      title: 'National registry completeness',
      description: 'How comprehensive and machine-readable national health registries are (cancer, hospitalisation, prescriptions, mortality, rare diseases) — and whether they are linked to EHR via a national identifier.',
    }},
    [InteroperabilityClaim.DATA_FRESHNESS]: { [Locale.EN]: {
      title: 'Data freshness (lag to research)',
      description: 'Time between a clinical event occurring and the data becoming available to approved researchers — from multi-year batches to near-real-time access.',
    }},
    [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: { [Locale.EN]: {
      title: 'Computable phenotyping capability',
      description: 'Whether researchers can define and retrieve patient cohorts programmatically without manual chart review. Requires validated code-set algorithms that resolve the same condition consistently across institutions — the core metadata harmonisation challenge.',
    }},
  },

  // ── Data: Research-Clinical Integration ──────────────────────────────────
  [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
    [ResearchClinicalClaim.SHARED_ONTOLOGIES]: { [Locale.EN]: {
      title: 'Shared ontologies (research ↔ clinical)',
      description: 'Whether research and clinical systems use the same controlled vocabularies (HPO, OBO, OMOP, SNOMED). Without shared ontologies, joining a research dataset to a clinical registry requires months of manual mapping — if it\'s possible at all.',
    }},
    [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: { [Locale.EN]: {
      title: 'Research cohort → registry linkage',
      description: 'Whether participants enrolled in research studies can be automatically followed in national health registries — enabling long-term outcome tracking without separate data collection.',
    }},
    [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: { [Locale.EN]: {
      title: 'FAIR data compliance',
      description: 'Whether publicly funded research data is Findable, Accessible, Interoperable, and Reusable — with machine-readable metadata, persistent identifiers, and standard ontologies — rather than locked in lab servers after publication.',
    }},
    [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: { [Locale.EN]: {
      title: 'Pharmacovigilance feedback loop',
      description: 'Whether clinical safety signals (adverse events, unexpected drug interactions) automatically feed back into the research pipeline — triggering new hypotheses, cohort identification, or trial protocols.',
    }},
    [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: { [Locale.EN]: {
      title: 'Open science mandate',
      description: 'Whether pre-registration, results reporting, data sharing, and code sharing are legally or contractually required for publicly funded research — reducing dark data and making all outputs machine-readable and reusable.',
    }},
  },

  // ── International: Perturbation Screening ────────────────────────────────
  // ── International: Regulatory Harmonization ──────────────────────────────
  [InternationalField.REGULATORY_HARMONIZATION]: {
    [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: { [Locale.EN]: {
      title: 'Foreign trial data acceptance',
      description: 'Whether clinical trial data generated in foreign jurisdictions can be used as primary evidence for domestic regulatory approval, reducing duplication.',
    }},
    [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: { [Locale.EN]: {
      title: 'Joint review participation',
      description: 'Participation in formal international joint review programmes (Project Orbis, EMA/FDA/PMDA alignment) for concurrent multi-jurisdiction evaluation.',
    }},
    [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: { [Locale.EN]: {
      title: 'ICH/GCP standard alignment',
      description: 'Depth of integration into global regulatory standards — from ICH signatory status to active participation in developing new guidelines.',
    }},
    [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: { [Locale.EN]: {
      title: 'Foreign approval reliance',
      description: 'Whether the country can formally rely on a foreign regulator\'s approval decision — ranging from expedited review to automatic recognition.',
    }},
    [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: { [Locale.EN]: {
      title: 'Reciprocal recognition agreements',
      description: 'Number and scope of bilateral or multilateral mutual recognition agreements covering GMP inspection, trials, and/or marketing authorisations.',
    }},
  },

  // ── International: Shared Physical Infrastructure ─────────────────────────
  [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
    [SharedPhysicalInfraClaim.BSL_ACCESS]: { [Locale.EN]: {
      title: 'BSL-3/4 containment access',
      description: 'Availability and accessibility of BSL-3/4 biosafety containment facilities for viral vector work, gene editing, and infectious disease aging research.',
    }},
    [SharedPhysicalInfraClaim.GMP_CAPACITY]: { [Locale.EN]: {
      title: 'GMP/CDMO manufacturing capacity',
      description: 'Domestic or regionally accessible clinical-grade GMP manufacturing capacity for cell and gene therapies — academic GMP suites through commercial CDMOs.',
    }},
    [SharedPhysicalInfraClaim.COMPUTE_INFRA]: { [Locale.EN]: {
      title: 'HPC/AI compute infrastructure',
      description: 'Dedicated high-performance computing and GPU infrastructure purpose-built for biological research workloads — not generic cloud compute.',
    }},
    [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: { [Locale.EN]: {
      title: 'Population-scale sequencing capacity',
      description: 'National throughput for genomic and proteomic sequencing at the cohort scale relevant for aging research — from academic capacity to 500k+ population programmes.',
    }},
    [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: { [Locale.EN]: {
      title: 'Aging model organism platforms',
      description: 'Shared, standardised facilities for aging biology research in model organisms — from individual lab colonies to ITP-style multi-site lifespan intervention programmes.',
    }},
  },

  // ── International: International Research Network ─────────────────────────
  [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
    [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: { [Locale.EN]: {
      title: 'Aging consortium participation',
      description: 'Depth of participation in major international aging and longevity research consortia — from observer status to consortium leadership and agenda-setting roles.',
    }},
    [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: { [Locale.EN]: {
      title: 'International data sharing frameworks',
      description: 'Formal frameworks for sharing national health data with international researchers — GA4GH alignment, FAIR data principles, federated analysis capability.',
    }},
    [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: { [Locale.EN]: {
      title: 'Joint international funding access',
      description: 'Access to international research funding mechanisms — Horizon Europe participation, bilateral R&D agreements, NIH foreign grants, multilateral co-funding programmes.',
    }},
    [IntlResearchNetworkClaim.FIELD_INFLUENCE]: { [Locale.EN]: {
      title: 'Longevity field influence',
      description: 'The country\'s publication impact, leadership roles in international societies, and contribution to setting the global longevity research agenda.',
    }},
    [IntlResearchNetworkClaim.PATENT_COOPERATION]: { [Locale.EN]: {
      title: 'Patent cooperation infrastructure',
      description: 'PCT membership, bilateral patent treaties, IP framework quality for biomedical inventions, and whether academic inventors retain rights to publicly funded research.',
    }},
  },

  // ── Societal: Societal Readiness (public / media / market) ─────────────────
  [SocietalField.SOCIETAL_READINESS]: {
    [SocialReadinessClaim.PUBLIC_TRUST_CLINICAL_SYSTEM]: { [Locale.EN]: {
      title: 'Public trust — clinical system',
      description: 'Pillar A: trust in physicians, nurses, hospitals, and “medicine in general” in representative surveys (e.g. Eurobarometer health, national health barometers). Independent from science-in-the-lab and from trust in national health agencies.',
    }},
    [SocialReadinessClaim.PUBLIC_TRUST_SCIENCE_RESEARCH]: { [Locale.EN]: {
      title: 'Public trust — biomedical science',
      description: 'Pillar B: trust in scientists, universities, and medical research as a basis for health — trial participation, novel therapy legitimacy, research uses of data (e.g. Wellcome Global Monitor, Eurobarometer S&T).',
    }},
    [SocialReadinessClaim.PUBLIC_TRUST_STATE_HEALTH]: { [Locale.EN]: {
      title: 'Public trust — national health authority',
      description: 'Pillar C: trust in the ministry of health, public-health institute (CDC-style), and regulator as source of official guidance and population programmes — not the same as generic “trust in government”.',
    }},
    [SocialReadinessClaim.AGING_MEDIA_FRAMING]: { [Locale.EN]: {
      title: 'Aging media framing',
      description: 'At what level of ambition does mainstream media frame aging — from fatalism and elder care through healthy-aging lifestyle, up to geroscience (hallmarks, biological age reversal, senolytics) and indefinite healthspan as a cultural goal. The score reflects the highest ambition level with sustained mainstream presence, not fringe coverage.',
    }},
    [SocialReadinessClaim.QUACKERY_RESISTANCE]: { [Locale.EN]: {
      title: 'Anti-aging quackery resistance',
      description: 'Single composite score: how strongly law, regulators, and professional discipline constrain unproven anti-aging marketing (cosmetics, supplements, ads), borderline health products, and clinical "longevity" practice. Not the same as public trust in science. Expand the left column for methodology.',
      methodology: `One axis — the weakest link among (1) marketing and advertising enforcement for systemic / whole-body "anti-aging" or rejuvenation claims, (2) how borderline products are classified and controlled (cosmetic vs drug vs procedure), and (3) whether medical licensing credibly sanctions clinicians who sell unproven longevity protocols or rely on non-recognised "anti-aging" credentials. Public trust surveys do not set this score.

Evidence: primary regulator guidance, statutes, published enforcement or rulings (e.g. advertising authority case law), and medical-board conduct codes — not media sentiment. Where law is federal but enforcement is regional, the score reflects the effective national regime; narrative should mention gaps (e.g. cross-border e-commerce, traditional-medicine carve-outs) if they cap the rung.

Scoring: assign the highest rung (0–5) fully supported by documentary evidence. Detailed rung text is under Scale.`,
    }},
  },

  // ── Societal: Political Readiness (state + elite discourse) ────────────────
  [SocietalField.POLITICAL_READINESS]: {
    [PoliticalReadinessClaim.POLICY_COMMITMENT]: { [Locale.EN]: {
      title: 'Policy commitment',
      description: 'State follow-through for research (R), prevention (P), and AI/data for ageing-related health (I) — statute plus budget where named; long-term care alone is out of scope. Expand the left column for methodology and rubric.',
      methodology: `Scope: state-backed commitment in three buckets only — (R) Research: aging biology, geroscience, translation and trials infrastructure with an explicit aging/longevity R&D mandate (not generic hospital spend). (P) Prevention: national programmes — screening, healthy ageing, NCD risk reduction for older adults — with a named line and appropriation. (I) AI / data / digital: national AI-in-health, biobanks, digital tools for early detection or monitoring, explicitly tied to health and ageing/longevity (not a generic national AI strategy without health linkage).

Out of scope for this claim: long-term care insurance, dependency systems, nursing-home capacity, pensions. A large LTCI budget does not raise the score unless there is also qualifying R, P, or I with L+B.

Evidence codes (primary documents in country links): L = statute / plan-law / cabinet act naming the programme or body. B = official budget or multi-year programme annex with amount and time horizon. A = permanent agency or centre plus budget attribution. C = same mandate or line continuing after a government or plan cycle change (use the analogue for single-party plan systems).

Scoring: assign the highest rung (0–5) whose conditions are met using only R/P/I commitments. Ring-fence means traceable in L+B, not press-only announcements. Country narrative should name which bucket(s) anchor the score. Detailed rung definitions are listed below under Scale.`,
    }},
    [PoliticalReadinessClaim.LEGISLATIVE_SALIENCE]: { [Locale.EN]: {
      title: 'Legislative salience',
      description: 'At what ambition level MPs, party leaders, and heads of state publicly discuss aging: from pensions-only speech (0) through economic demographic burden (1), healthy aging and disease-of-aging agendas (2), geroscience with a documentary record (3), to longevity as a competing electoral and executive mandate (4). Scored 0–4.',
      maxScore: 4,
    }},
  },
}

export function claimMaxScore(fieldKey: string, claimKey: string, fieldDefault: number): number {
  return claimLabels[fieldKey]?.[claimKey]?.[Locale.EN]?.maxScore ?? fieldDefault
}
