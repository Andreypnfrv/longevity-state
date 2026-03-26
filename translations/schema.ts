import {
  PolicyGroup,
  TalentsField,
  ScienceField,
  TranslationField,
  HealthcareField,
  DataField,
  InternationalField,
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
}

export const fieldLabels: Record<string, Record<Locale, FieldTranslation>> = {
  // Talents
  [TalentsField.VISAS_FOR_SCIENTISTS]: {
    [Locale.EN]: {
      title: 'Visas for Scientists',
      description: 'Fast-track visa pathways and credential recognition for foreign researchers in aging biology, biogerontology, and longevity science.',
    },
  },
  [TalentsField.VISAS_FOR_CLINICIANS]: {
    [Locale.EN]: {
      title: 'Visas for Clinicians',
      description: 'Streamlined entry and license recognition for clinicians specializing in geriatrics, preventive medicine, and longevity-related practice.',
    },
  },
  [TalentsField.PHD_PROGRAMS]: {
    [Locale.EN]: {
      title: 'PhD Programs',
      description: 'Doctoral programs bridging aging biology, data science, and translational medicine to build a pipeline of longevity researchers.',
    },
  },
  [TalentsField.PHD_MD_PROGRAMS_FOR_CLINICIANS]: {
    [Locale.EN]: {
      title: 'PhD / MD-PhD Programs for Clinicians',
      description: 'Combined MD-PhD tracks enabling clinicians to develop deep expertise in aging science and drive bench-to-bedside translation.',
    },
  },

  // Science
  [ScienceField.RESEARCH_FUNDING]: {
    [Locale.EN]: {
      title: 'Fundamental Research Funding',
      description: 'Dedicated, long-term public funding specifically earmarked for basic aging research — independent of disease-specific budget cycles.',
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
      description: 'Dedicated longevity funding agencies modeled on DARPA/ARPA-H: directed challenges, competitive execution, non-dilutive funding, IP retained by developers.',
    },
  },
  [TranslationField.ADAPTIVE_LICENSING]: {
    [Locale.EN]: {
      title: 'Adaptive Licensing',
      description: 'Regulatory pathways that allow conditional early approval based on interim data, with post-market evidence generation requirements.',
    },
  },
  [TranslationField.SYNTHETIC_CONTROL_ARMS]: {
    [Locale.EN]: {
      title: 'Synthetic Control Arms',
      description: 'Use of national health data to construct synthetic comparator arms for longevity trials, reducing the need for placebo-only controls.',
    },
  },
  [TranslationField.REGULATORY_SANDBOXES]: {
    [Locale.EN]: {
      title: 'Regulatory Sandboxes',
      description: 'Defined safe-harbour environments for testing combination therapies and repurposed drugs with relaxed but monitored approval requirements.',
    },
  },
  [TranslationField.RIGHT_TO_TRY]: {
    [Locale.EN]: {
      title: 'Right-to-Try',
      description: 'Legal frameworks allowing terminally ill or high-risk patients to access investigational longevity therapies outside standard trial pathways.',
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
      title: 'Standardized Trial Endpoints',
      description: 'Common endpoint definitions for gero-therapeutic trials to enable cross-study comparability, meta-analysis, and regulatory harmonization.',
    },
  },

  // International
  [InternationalField.PERTURBATION_SCREENING]: {
    [Locale.EN]: {
      title: 'AI-Ready Perturbation Screening',
      description: 'Shared international programs for high-throughput, AI-assisted screening of genetic and pharmacological perturbations relevant to aging.',
    },
  },
  [InternationalField.MUTUAL_RECOGNITION]: {
    [Locale.EN]: {
      title: 'Mutual Recognition of Trial Results',
      description: 'Bilateral and multilateral agreements to accept clinical trial results and regulatory sandbox outcomes across jurisdictions, reducing duplication.',
    },
  },
  [InternationalField.SHARED_INFRASTRUCTURE]: {
    [Locale.EN]: {
      title: 'Shared Research Infrastructure',
      description: 'Jointly funded and operated facilities — wet labs, model organism platforms, HPC compute, perturbation screening — accessible to researchers across member states.',
    },
  },
  [InternationalField.PUBLIC_ENGAGEMENT]: {
    [Locale.EN]: {
      title: 'Public Engagement & Counter-Misinformation',
      description: 'Coordinated public communication to build societal support for longevity science and counter misinformation around anti-aging interventions.',
    },
  },
}

// ── Screening maturity ladder — ordered array for rendering ──────────────────
// Derived directly from SCREENING_SCALE; no duplication.
export interface ScaleLevelLabel { level: number; label: string; description: string }
export const screeningScaleLabels: ScaleLevelLabel[] = Object.entries(SCREENING_SCALE)
  .map(([k, v]) => ({ level: Number(k), label: v.label, description: v.description }))
  .sort((a, b) => a.level - b.level)
