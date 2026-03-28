import {
  PolicyGroup,
  TalentsField,
  ScienceField,
  TranslationField,
  HealthcareField,
  DataField,
  InternationalField,
  SocietalField,
  SCREENING_SCALE,
  ScreeningLevel,
} from '../schema'

// Re-export so App.tsx can import from one place
export { SCREENING_SCALE, ScreeningLevel }

export enum Locale {
  EN = 'en',
}

export interface FieldTranslation {
  title: string
  description: string
  /** Max score for this field's claims. Defaults to 5. Use 6 for population screening fields. */
  maxScore?: 5 | 6
}

export const groupLabels: Record<PolicyGroup, Record<Locale, string>> = {
  [PolicyGroup.TALENTS]:       { [Locale.EN]: 'Talents' },
  [PolicyGroup.SCIENCE]:       { [Locale.EN]: 'Science' },
  [PolicyGroup.TRANSLATION]:   { [Locale.EN]: 'Translation' },
  [PolicyGroup.HEALTHCARE]:    { [Locale.EN]: 'Healthcare' },
  [PolicyGroup.DATA]:          { [Locale.EN]: 'Data' },
  [PolicyGroup.INTERNATIONAL]: { [Locale.EN]: 'International' },
  [PolicyGroup.SOCIETAL]:      { [Locale.EN]: 'Societal' },
}

export const fieldLabels: Record<string, Record<Locale, FieldTranslation>> = {
  // Talents
  [TalentsField.RESEARCHER_IMMIGRATION]: {
    [Locale.EN]: {
      title: 'Researcher Immigration',
      description: 'How easy it is for foreign scientists and researchers to enter, work, and build long-term careers — covering visa pathways, processing speed, credential recognition, early-career access, and permanent residency routes.',
    },
  },
  [TalentsField.CLINICIAN_IMMIGRATION]: {
    [Locale.EN]: {
      title: 'Clinician Immigration',
      description: 'How easy it is for foreign-trained clinicians to enter and practice — a distinct challenge from researcher immigration, requiring medical board recognition, scope of practice rules, and support for combined research-practice roles.',
    },
  },
  [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
    [Locale.EN]: {
      title: 'Research Training Pipeline',
      description: 'Whether the country builds its own longevity research talent — from undergraduate exposure to aging biology through PhD programmes, postdoc ecosystems, public funding coverage, and industry-academia training links.',
    },
  },
  [TalentsField.CLINICIAN_AGING_TRAINING]: {
    [Locale.EN]: {
      title: 'Clinician Aging Training',
      description: 'How well clinicians are trained to work with aging — geriatrics as a recognised and well-resourced specialty, integration of aging biology in medical school, residency quality, longevity-specific CME, and national workforce planning.',
    },
  },
  [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
    [Locale.EN]: {
      title: 'Clinician-Scientist Pathway',
      description: 'Infrastructure for the rarest and most valuable talent in longevity: clinicians who can also conduct research. Covers combined degree programmes, public funding, aging specialisation, protected research time, and long-term career viability.',
    },
  },

  // Science
  [ScienceField.RESEARCH_FUNDING]: {
    [Locale.EN]: {
      title: 'Fundamental Research Funding',
      description: 'Dedicated, long-term public funding for basic aging research — scale, portfolio, stability, university/public R&D IP rules for spinouts, private leverage, and risk appetite.',
    },
  },
  [ScienceField.GENE_EDITING_REGULATION]: {
    [Locale.EN]: {
      title: 'Gene Editing Regulation',
      description: 'Risk-proportionate regulatory framework for human gene editing in aging contexts, replacing blanket prohibitions with tiered oversight.',
    },
  },

  // Translation
  [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
    [Locale.EN]: {
      title: 'Biotech Breakthrough Agencies (ARPA model)',
      description: 'ARPA-style agencies: directed challenges, non-dilutive funding, and foreground IP terms on agency contracts and prizes (university grant IP is under Science / research funding).',
    },
  },
  [TranslationField.ADAPTIVE_LICENSING]: {
    [Locale.EN]: {
      title: 'Adaptive Licensing',
      description: 'Regulatory pathways that allow conditional early approval based on interim data, with post-market evidence generation requirements.',
    },
  },
  [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
    [Locale.EN]: {
      title: 'Trial Design Modernization',
      description: 'Regulatory acceptance of modern trial design innovations — adaptive designs, synthetic control arms, decentralized trials, platform protocols, and real-world evidence integration.',
    },
  },
  [TranslationField.REGULATORY_SANDBOXES]: {
    [Locale.EN]: {
      title: 'Regulatory Sandboxes',
      description: 'Defined legal safe-harbour environments for testing novel therapeutic approaches — including gene editing, combinations, and longevity interventions — with real patients under ethics oversight.',
    },
  },
  [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
    [Locale.EN]: {
      title: 'Aging Endpoint Ecosystem',
      description: 'Infrastructure and regulatory frameworks for co-developing therapies with their aging biomarker endpoints — including endpoint acceptance, qualification pathways, reference databases, and measurement standardization.',
    },
  },

  // Healthcare
  [HealthcareField.POPULATION_SCREENINGS]: {
    [Locale.EN]: {
      title: 'Population-Scale Screenings',
      description: 'National programmes for early detection of major disease risks. Each screening target is scored on the 0–6 maturity ladder (see screeningScaleLabels).',
      maxScore: 6,
    },
  },
  [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
    [Locale.EN]: {
      title: 'Aging Biomarker Collections',
      description: 'Longitudinal collection of functional and molecular biomarkers across the population, opt-out by default, to power aging research and clinical monitoring.',
    },
  },
  [HealthcareField.PREVENTIVE_TRIALS]: {
    [Locale.EN]: {
      title: 'Preventive Trials in Clinical Practice',
      description: 'Systematic integration of preventive intervention trials into routine clinical workflows, enabling large-scale evidence generation at low marginal cost.',
    },
  },
  [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
    [Locale.EN]: {
      title: 'Gero-Therapeutic Endpoints',
      description: 'Incorporation of aging-specific endpoints — biological age, functional decline, multi-morbidity — into health technology assessment and reimbursement decisions.',
    },
  },

  // Data
  [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
    [Locale.EN]: {
      title: 'Open Access to Health Data',
      description: 'Secure, free access to anonymized population health data for any qualified researcher or AI application, under unified governance frameworks.',
    },
  },
  [DataField.INTEROPERABILITY_STANDARDS]: {
    [Locale.EN]: {
      title: 'Interoperability Standards',
      description: 'Unified technical standards enabling seamless data exchange across health systems, research registries, and biobanks at national and international level.',
    },
  },
  [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
    [Locale.EN]: {
      title: 'Research-Clinical Data Integration',
      description: 'Infrastructure connecting scientific research data to clinical systems — shared ontologies, research cohort linkage to registries, FAIR data compliance, pharmacovigilance feedback loops, and open science mandates.',
    },
  },

  // International
  [InternationalField.REGULATORY_HARMONIZATION]: {
    [Locale.EN]: {
      title: 'Regulatory Harmonization',
      description: 'How deeply integrated the country is into the global regulatory ecosystem — mutual acceptance of foreign trial data, joint review programmes, ICH standard alignment, foreign approval reliance pathways, and reciprocal recognition agreements.',
    },
  },
  [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
    [Locale.EN]: {
      title: 'Shared Physical Infrastructure',
      description: 'Access to the physical infrastructure that no single country needs to own independently: BSL-3/4 containment, GMP/CDMO manufacturing, HPC compute, population-scale sequencing, and aging model organism platforms.',
    },
  },
  [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
    [Locale.EN]: {
      title: 'International Research Network',
      description: 'The country\'s integration into global longevity science — depth of consortium participation, data sharing frameworks, access to joint funding, publication influence, and IP cooperation infrastructure.',
    },
  },

  // Societal
  [SocietalField.SOCIETAL_READINESS]: {
    [Locale.EN]: {
      title: 'Societal Readiness',
      description: 'Public trust, media framing of aging, anti-quackery safeguards, institutional policy commitment (budget and statute), and legislative salience (how elites publicly talk about aging — 0–4).',
    },
  },
}

// ── Screening maturity ladder — ordered array for rendering ──────────────────
// Derived directly from SCREENING_SCALE; no duplication.
export interface ScaleLevelLabel { level: number; label: string; description: string }
export const screeningScaleLabels: ScaleLevelLabel[] = Object.entries(SCREENING_SCALE)
  .map(([k, v]) => ({ level: Number(k), label: v.label, description: v.description }))
  .sort((a, b) => a.level - b.level)
