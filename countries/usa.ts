import {
  Country, CountryData, ScreeningLevel,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField,
  VisasScientistsClaim, VisasCliniciansClaim, PhdProgramsClaim, PhdMdProgramsClaim,
  ResearchFundingClaim, GeneEditingClaim,
  LongevityAgencyClaim, AdaptiveLicensingClaim, SyntheticControlClaim, RegulatorySandboxClaim, RightToTryClaim,
  PopulationScreeningClaim, BiomarkerCollectionClaim, PreventiveTrialsClaim, GeroEndpointsClaim,
  OpenDataClaim, InteroperabilityClaim, TrialEndpointsClaim,
  PerturbationScreeningClaim, MutualRecognitionClaim, SharedInfraClaim, PublicEngagementClaim,
} from '../schema'

const usa: CountryData = {
  country: Country.USA,

  talents: {
    [TalentsField.VISAS_FOR_SCIENTISTS]: {
      [VisasScientistsClaim.DEDICATED_CATEGORY]: {
        score: 4,
        text: 'O-1A (extraordinary ability) and EB-1A (outstanding researcher) visas are well-established researcher-specific categories. The EB-2 National Interest Waiver is increasingly used by longevity researchers.',
        links: [{ label: 'USCIS O-1A Visa', url: 'https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement', comment: 'Primary researcher visa category' }],
      },
      [VisasScientistsClaim.FAST_PROCESSING]: {
        score: 2,
        text: 'Standard O-1A processing takes 3–6 months. Premium processing (15 business days) costs $2,805 — a significant burden for postdocs and early-career researchers.',
        links: [{ label: 'USCIS Processing Times', url: 'https://egov.uscis.gov/processing-times/', comment: 'Current USCIS processing time tracker' }],
      },
      [VisasScientistsClaim.CREDENTIAL_RECOGNITION]: {
        score: 4,
        text: 'Foreign academic credentials are recognised for NIH grants and federal employment. No centralised re-accreditation required — institution-level evaluation is standard.',
        links: [],
      },
      [VisasScientistsClaim.EARLY_CAREER_ACCESSIBLE]: {
        score: 2,
        text: 'O-1A requires demonstrated "extraordinary ability" — a high bar for postdocs. Legal fees ($3–8k) and long timelines effectively exclude many early-career researchers. J-1 is cheaper but requires a 2-year home residency obligation.',
        links: [{ label: 'J-1 Exchange Visitor Program', url: 'https://j1visa.state.gov/', comment: 'Common pathway for postdocs — but home residency requirement is a barrier' }],
      },
    },

    [TalentsField.VISAS_FOR_CLINICIANS]: {
      [VisasCliniciansClaim.EU_AUTO_RECOGNITION]: {
        score: 1,
        text: 'The US does not recognise foreign medical licences. All foreign-trained physicians must complete US residency regardless of prior experience or EU licensing.',
        links: [],
      },
      [VisasCliniciansClaim.NON_EU_PATHWAY]: {
        score: 3,
        text: 'ECFMG certification + USMLE Steps 1–3 provide a defined pathway. Process is well-documented but takes 2–5 years and requires full US residency training.',
        links: [{ label: 'ECFMG Certification', url: 'https://www.ecfmg.org/', comment: 'Required for foreign medical graduates before US residency' }],
      },
      [VisasCliniciansClaim.PROCESSING_UNDER_6M]: {
        score: 1,
        text: 'End-to-end licensure for a foreign clinician (ECFMG + residency matching + state licence) takes 3–7 years, not 6 months.',
        links: [],
      },
      [VisasCliniciansClaim.NO_LANGUAGE_BARRIER]: {
        score: 3,
        text: 'No formal language test requirement beyond USMLE (English), but US residency interviews and state licensing exams are English-only. Practical barrier is moderate.',
        links: [],
      },
    },

    [TalentsField.PHD_PROGRAMS]: {
      [PhdProgramsClaim.DEDICATED_AGING_TRACK]: {
        score: 5,
        text: 'Multiple NIA-funded dedicated aging PhD programmes exist: Buck Institute, USC Leonard Davis School, Mayo Clinic, UW, Harvard, Stanford. NIA Nathan Shock Centers run formal training grants (T32) exclusively in aging biology.',
        links: [{ label: 'NIA Nathan Shock Centers', url: 'https://www.nia.nih.gov/research/dab/nathan-shock-centers-excellence-biology-aging', comment: '6 NIA-funded aging biology centers with T32 training grants' }],
      },
      [PhdProgramsClaim.PUBLICLY_FUNDED]: {
        score: 5,
        text: 'NIA T32 training grants fund PhD students at $26,000–32,000/year stipend. Over 60 active aging-focused T32 grants nationally.',
        links: [{ label: 'NIH T32 Training Grants', url: 'https://researchtraining.nih.gov/programs/training-grants', comment: 'NIH training grant mechanism funding PhD stipends' }],
      },
      [PhdProgramsClaim.INTERNATIONAL_RECRUITMENT]: {
        score: 4,
        text: 'US PhD programmes actively recruit internationally. F-1 student visa is straightforward. ~40% of biomedical PhD students in the US are international. Funding for international students varies by programme.',
        links: [],
      },
      [PhdProgramsClaim.INDUSTRY_ACADEMIA_LINKS]: {
        score: 4,
        text: 'Strong biotech clusters around Boston, Bay Area, San Diego. NIH BEST program funds industry training for PhD students. Buck Institute has formal Genentech/AbbVie collaborations.',
        links: [{ label: 'NIH BEST Program', url: 'https://commonfund.nih.gov/BEST', comment: 'Broadening Experiences in Scientific Training — industry rotations' }],
      },
    },

    [TalentsField.PHD_MD_PROGRAMS_FOR_CLINICIANS]: {
      [PhdMdProgramsClaim.COMBINED_PROGRAM_EXISTS]: {
        score: 5,
        text: 'NIH MSTP (Medical Scientist Training Program) funds MD–PhD training at 49 institutions, ~170 new students/year. Largest and most structured MD–PhD system globally.',
        links: [{ label: 'NIH MSTP', url: 'https://www.nigms.nih.gov/Training/InstPredoc/Pages/PredocOverview-MSTP.aspx', comment: 'Federally funded MD–PhD programme, $178M/year' }],
      },
      [PhdMdProgramsClaim.PUBLICLY_FUNDED]: {
        score: 5,
        text: 'MSTP provides full tuition waiver + stipend (~$34,000/year) for 7–8 year programmes. Completely publicly funded through NIH.',
        links: [],
      },
      [PhdMdProgramsClaim.AGING_TRACK_AVAILABLE]: {
        score: 4,
        text: 'Aging/longevity tracks available at MSTP programmes at Mayo, UCSF, Columbia, UW. Paul Glenn Foundation funds aging-focused MD–PhD fellowships.',
        links: [{ label: 'Glenn Foundation', url: 'https://glennfoundation.org/', comment: 'Private funder of aging-focused MD–PhD training' }],
      },
      [PhdMdProgramsClaim.RETENTION_MECHANISMS]: {
        score: 3,
        text: 'K08/K23 NIH career development awards provide protected research time post-MD–PhD. However, clinical debt pressure and income gap vs. pure clinical practice leads to significant attrition from research.',
        links: [{ label: 'NIH Career Development Awards', url: 'https://researchtraining.nih.gov/programs/career-development', comment: 'K-series awards providing protected research time for clinician-researchers' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.DEDICATED_AGING_BUDGET]: {
        score: 5,
        text: 'NIA (National Institute on Aging) has a standalone $4.06B budget in FY2023 — the world\'s largest dedicated aging research funder.',
        links: [{ label: 'NIA Budget', url: 'https://www.nia.nih.gov/about/budget', comment: '$4.06B FY2023' }],
      },
      [ResearchFundingClaim.NOT_DISEASE_SILOED]: {
        score: 2,
        text: '~70% of NIA\'s budget goes to Alzheimer\'s disease research, leaving ~$1.2B for all other aging biology. Basic aging mechanisms are chronically underfunded relative to their importance.',
        links: [{ label: 'NIA Alzheimer\'s Funding', url: 'https://www.nia.nih.gov/research/alzheimers-dementia', comment: 'NIA AD/ADRD budget dwarfs basic aging biology allocation' }],
      },
      [ResearchFundingClaim.LONG_TERM_HORIZON]: {
        score: 3,
        text: 'NIH R01 grants are typically 5 years, renewable. However, funding rates (~20%) and annual appropriation uncertainty create effective short-termism. Some P01 programme projects extend 10+ years.',
        links: [],
      },
      [ResearchFundingClaim.BASIC_RESEARCH_PROTECTED]: {
        score: 3,
        text: 'Nathan Shock Centers explicitly protect basic aging biology. But NIH-wide pressure toward translational impact and clinical relevance increasingly affects basic science funding decisions.',
        links: [{ label: 'Nathan Shock Centers', url: 'https://www.nia.nih.gov/research/dab/nathan-shock-centers-excellence-biology-aging', comment: 'Explicitly basic-science aging biology centers — ~$25M/year' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.NO_BLANKET_BAN]: {
        score: 5,
        text: 'No blanket prohibition on somatic gene editing. FDA regulates gene therapies as biologics under standard IND/BLA pathway.',
        links: [{ label: 'FDA Gene Therapy Guidance', url: 'https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products', comment: 'FDA regulatory framework for gene therapies' }],
      },
      [GeneEditingClaim.RISK_PROPORTIONATE]: {
        score: 3,
        text: 'Somatic vs. germline editing treated differently. However, FDA\'s IND requirements apply uniformly — no formal tiering by editing risk level. NIH RAC oversight streamlined in 2019.',
        links: [{ label: 'NIH RAC 2019 Streamlining', url: 'https://www.nih.gov/about-nih/who-we-are/nih-director/statements/nih-makes-changes-oversight-genomic-data', comment: 'RAC oversight streamlined for lower-risk somatic gene therapy' }],
      },
      [GeneEditingClaim.APPROVED_TRIALS_EXIST]: {
        score: 5,
        text: 'Casgevy (CRISPR-based, sickle cell/beta-thalassemia) approved Dec 2023. Multiple active IND somatic gene therapy trials. US leads globally in approved gene therapy products.',
        links: [{ label: 'Casgevy Approval', url: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/casgevy', comment: 'First CRISPR therapy approved — Dec 2023' }],
      },
      [GeneEditingClaim.GERMLINE_PATHWAY_DEFINED]: {
        score: 2,
        text: 'Germline editing effectively prohibited by annual Congressional rider on FDA appropriations since 2016, but no permanent law. The prohibition is administrative rather than a defined regulatory framework.',
        links: [{ label: 'Congressional Rider on Germline Editing', url: 'https://www.science.org/content/article/congress-quietly-bars-human-embryo-editing', comment: 'Annual appropriations rider — not a permanent law or regulatory framework' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [LongevityAgencyClaim.DEDICATED_AGENCY_EXISTS]: {
        score: 2,
        text: 'ARPA-H (launched 2022) has aging-adjacent programmes but no explicit longevity mandate. No agency equivalent to "DARPA for aging" exists. NIA is a funder, not an ARPA-model agency.',
        links: [{ label: 'ARPA-H', url: 'https://arpa-h.gov/', comment: '$1B budget, some aging-adjacent programs but no longevity mandate' }],
      },
      [LongevityAgencyClaim.CHALLENGE_DRIVEN]: {
        score: 3,
        text: 'ARPA-H uses programme manager model with directed challenges — closer to DARPA than NIH. NIA Interventions Testing Program is challenge-adjacent. But no longevity-specific challenge programme exists.',
        links: [{ label: 'NIA ITP', url: 'https://www.nia.nih.gov/research/dab/interventions-testing-program-itp', comment: 'Multi-site mouse longevity compound testing programme' }],
      },
      [LongevityAgencyClaim.NON_DILUTIVE_FUNDING]: {
        score: 4,
        text: 'NIH grants and ARPA-H contracts are non-dilutive. SBIR/STTR provide non-dilutive funding for small biotech. Strong non-dilutive funding ecosystem.',
        links: [{ label: 'NIH SBIR/STTR', url: 'https://seed.nih.gov/', comment: 'Non-dilutive funding for small biotech companies' }],
      },
      [LongevityAgencyClaim.IP_RETAINED_BY_DEVS]: {
        score: 5,
        text: 'Bayh-Dole Act (1980) gives universities and small businesses IP rights from federally funded research. Inventors retain patent rights. Strong foundation for IP retention in public-funded longevity research.',
        links: [{ label: 'Bayh-Dole Act', url: 'https://www.nist.gov/tpo/bayh-dole-act', comment: 'Grants IP to developers for federally funded inventions — landmark 1980 law' }],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL_EXISTS]: {
        score: 5,
        text: 'FDA Accelerated Approval, Breakthrough Therapy, Fast Track, and Priority Review designations are well-established. Multiple longevity-adjacent drugs have used these pathways.',
        links: [{ label: 'FDA Accelerated Approval', url: 'https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/accelerated-approval-program', comment: 'Allows approval on surrogate endpoints with confirmatory trial requirement' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS_ACCEPTED]: {
        score: 4,
        text: 'FDA accepts validated surrogate endpoints across many disease areas. PDUFA VII commitments include broader surrogate endpoint guidance. Not yet for aging-specific biomarkers.',
        links: [{ label: 'FDA Surrogate Endpoint Table', url: 'https://www.fda.gov/drugs/development-resources/table-surrogate-endpoints-were-basis-drug-approval-or-licensure', comment: 'List of FDA-accepted surrogate endpoints by indication' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_CONFIRMATION]: {
        score: 4,
        text: 'Required under Accelerated Approval — Omnibus Act 2022 gave FDA authority to withdraw approval if confirmatory trial not completed. Several withdrawals executed post-2022.',
        links: [{ label: 'Omnibus Act 2022 AA Provisions', url: 'https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/accelerated-approval-program', comment: '2022 law strengthened FDA withdrawal authority for failed confirmatory trials' }],
      },
      [AdaptiveLicensingClaim.AGING_SPECIFIC_PATHWAY]: {
        score: 1,
        text: 'No aging-specific regulatory pathway or guidance document. TAME trial is the test case for whether FDA will accept aging as an indication at all. Critical gap.',
        links: [{ label: 'TAME Trial', url: 'https://www.afar.org/tame-trial', comment: 'First trial designed to establish aging as FDA indication' }],
      },
    },

    [TranslationField.SYNTHETIC_CONTROL_ARMS]: {
      [SyntheticControlClaim.REGULATORY_ACCEPTED]: {
        score: 3,
        text: 'FDA has issued RWE guidance accepting external controls in certain contexts, particularly oncology. Not systematically applied to longevity trials.',
        links: [{ label: 'FDA RWE Framework', url: 'https://www.fda.gov/science-research/science-and-research-special-topics/real-world-evidence', comment: 'FDA\'s framework for real-world evidence in regulatory decisions' }],
      },
      [SyntheticControlClaim.NATIONAL_DATA_AVAILABLE]: {
        score: 3,
        text: 'Medicare/Medicaid claims data, VA data, and NIH All of Us provide large populations. But linkage across sources and EHR fragmentation limit synthetic control quality vs. Nordic registries.',
        links: [{ label: 'NIH All of Us', url: 'https://allofus.nih.gov/', comment: '750k+ participants — largest US longitudinal health cohort' }],
      },
      [SyntheticControlClaim.AI_READY_INFRASTRUCTURE]: {
        score: 2,
        text: 'Data is fragmented across CMS, VA, NIH, and private EHR systems. No unified, AI-ready national health data API. NCATS N3C cloud environment is a partial solution for COVID-era data.',
        links: [{ label: 'NCATS N3C', url: 'https://ncats.nih.gov/n3c', comment: 'National COVID Cohort Collaborative — model for unified health data, not yet replicated broadly' }],
      },
      [SyntheticControlClaim.USED_IN_APPROVALS]: {
        score: 3,
        text: 'External controls used in several oncology approvals (e.g. paediatric rare cancers). Not yet used in aging/longevity context.',
        links: [],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTS]: {
        score: 1,
        text: 'No formal regulatory sandbox exists. FDA does not have a designated sandbox programme for health interventions.',
        links: [],
      },
      [RegulatorySandboxClaim.COMBINATION_THERAPIES]: {
        score: 2,
        text: 'FDA Combination Products Office handles multi-component products but is a regulatory pathway, not a sandbox with safe-harbour provisions.',
        links: [{ label: 'FDA Combination Products', url: 'https://www.fda.gov/combination-products', comment: 'Regulatory pathway — not a sandbox' }],
      },
      [RegulatorySandboxClaim.REPURPOSED_DRUGS]: {
        score: 3,
        text: 'Investigator IND allows off-label/repurposed drug testing. No systematic sandbox, but flexibility exists for individual investigators.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_SAFE_HARBOUR]: {
        score: 1,
        text: 'No formal legal safe harbour for sandbox participants. Standard liability rules apply.',
        links: [],
      },
    },

    [TranslationField.RIGHT_TO_TRY]: {
      [RightToTryClaim.LAW_EXISTS]: {
        score: 5,
        text: 'Federal Right to Try Act signed 2018. All 50 states have RTT laws. One of the most comprehensive RTT legal frameworks globally.',
        links: [{ label: 'Right to Try Act 2018', url: 'https://www.congress.gov/bill/115th-congress/senate-bill/204', comment: 'Federal law — applies in all 50 states' }],
      },
      [RightToTryClaim.COVERS_TERMINAL]: {
        score: 5,
        text: 'Explicitly covers patients with life-threatening conditions who have exhausted approved treatments and completed Phase 1.',
        links: [],
      },
      [RightToTryClaim.PHYSICIAN_PROTECTION]: {
        score: 4,
        text: 'Federal RTT provides liability protection for manufacturers, prescribers, and dispensers. Physicians cannot be sanctioned solely for RTT prescribing.',
        links: [],
      },
      [RightToTryClaim.COMPANY_PARTICIPATION]: {
        score: 2,
        text: 'Company participation is voluntary — no mandate to provide access. Uptake has been modest; many companies decline RTT requests citing liability or supply concerns.',
        links: [{ label: 'RTT Utilisation Analysis', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2780736', comment: 'JAMA study showing limited uptake due to voluntary company participation' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF recommends blood pressure screening for all adults (A grade) and statins for adults 40–75 with elevated CVD risk (B grade) — both covered without cost-sharing under ACA. No unified national programme delivers these proactively: screening happens opportunistically at provider visits, not via population invitation. ~8% uninsured have no guaranteed access.',
        links: [
          { label: 'USPSTF Blood Pressure Screening', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening', comment: 'A-grade recommendation — ACA-covered without cost-sharing' },
          { label: 'USPSTF Statin Preventive Medication', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-for-the-primary-prevention-of-cardiovascular-events-in-adults-preventive-medication', comment: 'B-grade for adults 40–75 with elevated CVD risk' },
        ],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF recommends biennial mammography for women 40–74 (2024 update lowered from 50 to 40) — ACA-covered without cost-sharing. Medicare covers annual mammograms for women 40+. Uptake ~67% of eligible women. No national invitation system — women self-refer or are reminded by their provider. CDC\'s NBCCEDP fills part of the gap for low-income uninsured women.',
        links: [
          { label: 'USPSTF Breast Cancer Screening 2024', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening', comment: '2024 update: biennial mammography from age 40' },
          { label: 'CDC NBCCEDP', url: 'https://www.cdc.gov/nbccedp/', comment: 'Free mammograms for low-income uninsured women — partial gap filler' },
          { label: 'NHIS Mammography Uptake Data', url: 'https://www.cdc.gov/nchs/fastats/mammography.htm', comment: '~67% of eligible women screened in past 2 years' },
        ],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF A-grade: colorectal cancer screening for adults 45–75, choice of FIT annually, stool DNA every 1–3 years, or colonoscopy every 10 years. ACA-covered without cost-sharing for the insured. Medicare covers annual FIT and colonoscopy. However, ~60% of eligible adults are up to date (CDC 2022), and the 8% uninsured population faces significant barriers. No national invitation system; reminder outreach is provider- or insurer-level.',
        links: [
          { label: 'USPSTF Colorectal Cancer Screening', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening', comment: 'A-grade recommendation, adults 45–75' },
          { label: 'CDC CRC Screening Uptake', url: 'https://www.cdc.gov/cancer/colorectal/statistics/use-screenings-adults.htm', comment: '~60% up-to-date uptake in eligible adults' },
        ],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF A-grade: HPV testing every 5 years for women 30–65 (or Pap every 3 years, or co-test every 5 years). ACA covers without cost-sharing for the insured. Uptake ~76% of eligible women (NHIS 2021). No national invitation system; no-insurance gap remains.',
        links: [
          { label: 'USPSTF Cervical Cancer Screening', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening', comment: 'A-grade; HPV primary testing recommended from 2018' },
          { label: 'NHIS Cervical Cancer Screening Data', url: 'https://www.cdc.gov/nchs/fastats/cervical-cancer-screening.htm', comment: '~76% screened in past 3 years among eligible women' },
        ],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF B-grade: one-time abdominal ultrasound for men 65–75 who have ever smoked. Medicare covers it under Welcome to Medicare visit. Uptake low (~34% of eligible men per BRFSS). No national invitation; access depends on whether a man has a Medicare Welcome visit within the first year of eligibility.',
        links: [
          { label: 'USPSTF AAA Screening', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening', comment: 'B-grade; one-time ultrasound for men 65–75 ever-smokers' },
          { label: 'Medicare Welcome to Medicare visit', url: 'https://www.medicare.gov/coverage/welcome-to-medicare-visit', comment: 'Covers one-time AAA ultrasound — but only if claimed in year 1' },
        ],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF B-grade: screening for prediabetes and type 2 diabetes in adults 35–70 with overweight or obesity. ACA covers without cost-sharing. Medicare Diabetes Prevention Program (DPP) offers lifestyle intervention for prediabetes. Uptake ~23% of eligible adults. No universal invitation system; provider-initiated.',
        links: [
          { label: 'USPSTF Prediabetes/T2D Screening', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prediabetes-and-type-2-diabetes-screening', comment: 'B-grade; adults 35–70 with overweight/obesity' },
          { label: 'Medicare Diabetes Prevention Program', url: 'https://www.cms.gov/medicare/coverage/diabetes-prevention', comment: 'Lifestyle intervention covered for eligible Medicare beneficiaries' },
        ],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF B-grade: bone density screening for women 65+ (or younger postmenopausal women with elevated fracture risk by FRAX). Medicare covers DEXA every 2 years for eligible women. Uptake ~66% of women 65+ (NHIS). No national invitation programme; referral-based.',
        links: [
          { label: 'USPSTF Osteoporosis Screening', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening', comment: 'B-grade; women 65+ or younger women with elevated FRAX risk' },
          { label: 'Medicare DEXA Coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements', comment: 'Covered every 24 months for eligible women' },
        ],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        // Was incorrectly scored as COST_SHARING (2). CMS fully covers for eligible smokers — that is FUNDED_PASSIVE.
        // Poor uptake (~6%) reflects execution failure, not what the system offers.
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'USPSTF B-grade (2021): annual low-dose CT for adults 50–80, ≥20 pack-year history, currently smoking or quit within past 15 years. CMS fully covers since 2015. However, uptake is severely low: only ~6% of eligible high-risk smokers were screened in 2022 (ACS) — one of the worst implementation gaps in US preventive medicine. Key barriers: providers do not systematically identify eligible smokers, and patients are rarely proactively informed.',
        links: [
          { label: 'USPSTF Lung Cancer Screening 2021', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening', comment: 'B-grade; expanded from age 55 to 50, pack-years from 30 to 20' },
          { label: 'ACS Lung Cancer Screening Uptake', url: 'https://acsjournals.onlinelibrary.wiley.com/doi/10.1002/cncr.34748', comment: '~6% of eligible adults screened — major implementation gap despite full CMS coverage' },
        ],
      },
      // ── Longevity-frontier ──────────────────────────────────────────────────
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        // Was incorrectly scored as PRIVATE_ONLY (1). USPSTF explicitly states "insufficient evidence" —
        // meaning there is no recommended clinical pathway, not just no public funding. Correct level: ABSENT.
        score: ScreeningLevel.ABSENT,
        text: 'USPSTF (2022): insufficient evidence (I statement) for AF screening in asymptomatic adults — no recommended clinical pathway exists. Detection is purely opportunistic via pulse check or incidental wearable finding. AHA/ACC do not endorse mass screening. Some research movement via Apple Heart Study and Fitbit Heart Study, but no policy translation to date.',
        links: [
          { label: 'USPSTF Atrial Fibrillation Screening 2022', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/atrial-fibrillation-screening', comment: 'I statement — no recommended screening pathway for asymptomatic adults' },
        ],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        // Half-point: Medicare AWV fully covers cognitive assessment (→ FUNDED_PASSIVE = 3),
        // but only for Medicare beneficiaries and AWV uptake is ~20%. Narrow demographic + low reach = 2.5.
        score: 2.5,
        text: 'Medicare Annual Wellness Visit (AWV) includes free cognitive assessment via validated tools (Mini-Cog, GPCOG) for Medicare beneficiaries — fully funded, no cost-sharing. However, AWV uptake is only ~20% of eligible beneficiaries, and no pathway exists for non-Medicare adults. USPSTF (2020): insufficient evidence for population-level cognitive screening in asymptomatic adults. Scored 2.5: fully funded for those who access it, but limited demographic reach and very low utilisation.',
        links: [
          { label: 'Medicare Annual Wellness Visit – Cognitive Assessment', url: 'https://www.cms.gov/medicare/prevention/pvns/downloads/cognitive_assessment_toolkit.pdf', comment: 'Cognitive impairment tool in AWV — free for Medicare beneficiaries' },
          { label: 'USPSTF Cognitive Impairment 2020', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cognitive-impairment-in-older-adults-screening', comment: 'I statement — insufficient evidence for population-level cognitive screening' },
        ],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No national or clinical programme using polygenic risk scores (PRS). PRS research is highly active (NIH All of Us, eMERGE, TOPMed) but not translated into funded clinical pathways. Direct-to-consumer PRS (23andMe, AncestryDNA) is available privately but lacks clinical-grade validation and is not integrated into care. FDA regulatory clarity for PRS-based diagnostics remains limited.',
        links: [
          { label: 'NIH All of Us – Genomics', url: 'https://allofus.nih.gov/about/program-overview/genomics', comment: 'Research programme — not yet a clinical PRS pathway' },
        ],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        // Large opt-in cohort >100k (All of Us 750k+), general research consent. No opt-out mechanism.
        score: 2,
        text: 'All US biobank participation is opt-in by law (HIPAA). NIH All of Us has >750k participants — a large voluntary cohort — but there is no residual-sample default or opt-out framework. Score: 2 (large opt-in, >100k, general research consent).',
        links: [
          { label: 'NIH All of Us', url: 'https://allofus.nih.gov/', comment: '750k+ participants with biosamples, EHR, wearables — opt-in' },
        ],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        // Longitudinal subset with irregular intervals: HRS every 2 years (survey), biomarkers every 4–6 years. Score: 2.
        score: 2,
        text: 'HRS (Health and Retirement Study) follows up every 2 years for surveys, but biomarker collection (epigenetics, metabolomics) occurs every 4–6 years in subsamples. All of Us aims for annual follow-up, but biomarker re-collection is irregular. Score: 2 (longitudinal subset, infrequent / irregular intervals).',
        links: [
          { label: 'Health and Retirement Study', url: 'https://hrs.isr.umich.edu/', comment: 'Longitudinal aging study — biomarker subset every 4–6 years' },
        ],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        // All of Us: WGS for >250k participants. HRS: epigenetic clocks, telomere length. Metabolomics/proteomics only in subsets. Score: 2–3; call 2 (genomics present, aging-specific layers not yet systematic).
        score: 2,
        text: 'All of Us includes WGS for >250k participants. HRS collects DNA methylation (epigenetic age) and telomere length in subsamples. Metabolomics and proteomics present in a subset of All of Us, but not systematic. Score: 2 (genomics added; aging-specific layers not yet population-wide).',
        links: [
          { label: 'HRS Biomarkers', url: 'https://hrs.isr.umich.edu/data-products/biomarker-data', comment: 'Biomarker collection including epigenetic age in subsamples' },
          { label: 'All of Us Genomics', url: 'https://allofus.nih.gov/about/program-overview/genomics', comment: 'WGS for >250k participants' },
        ],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        // All of Us links EHR for consenting participants; HRS links Medicare/Medicaid claims. Score: 3 (full EHR linkage for participants who consent).
        score: 3,
        text: 'All of Us links EHR records for participants who consent — full longitudinal clinical records accessible in the Researcher Workbench. HRS links Medicare and Medicaid claims data. No wearable-level passive capture systematically integrated. Score: 3 (full EHR linkage for enrolled participants).',
        links: [
          { label: 'All of Us Researcher Workbench', url: 'https://workbench.researchallofus.org/', comment: 'EHR + genomics + wearables for consenting participants' },
        ],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        // All of Us Researcher Workbench: international access, streamlined registration, well-documented data models. Score: 4.
        score: 4,
        text: 'All of Us Researcher Workbench provides streamlined international access — any qualifying researcher can register, with well-documented data models and tiered access (registered vs. controlled). HRS data available internationally via application. Score: 4 (streamlined international access with well-documented models).',
        links: [
          { label: 'All of Us Researcher Workbench', url: 'https://workbench.researchallofus.org/', comment: 'International access, tiered data tiers, documented APIs' },
          { label: 'HRS Data Access', url: 'https://hrs.isr.umich.edu/data-products', comment: 'Publicly available — international researchers can apply' },
        ],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        // PCORnet enables some pragmatic trials with electronic consent + partial EHR integration,
        // but outcomes still require active follow-up. No register-based RCT methodology. Score: 2.
        score: 2,
        text: 'Most US preventive trials are standalone academic studies — separate sites, paper or e-consent, active outcome collection. PCORnet enables electronic consent and partial EHR integration but outcomes still require active follow-up. No national register-based RCT methodology comparable to Nordic model. Score: 2 (electronic consent + partial EHR; outcomes still active).',
        links: [
          { label: 'PCORnet', url: 'https://pcornet.org/', comment: 'National patient-centred research network — some pragmatic trial embedding' },
        ],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        // FDA 21st Century Cures Act (2016) created formal RWE framework.
        // RWE used for some label expansions; register-based RCTs recognised in select categories. Score: 3.
        score: 3,
        text: 'FDA\'s 21st Century Cures Act (2016) created a formal real-world evidence framework. RWE accepted for some supplemental approvals and label expansions. FDA has issued RWE guidance documents. Not yet an explicit framework for primary prevention approvals or aging-specific pathways. Score: 3 (register-based RCTs recognised as primary evidence in some categories).',
        links: [
          { label: 'FDA Real-World Evidence Framework', url: 'https://www.fda.gov/science-research/science-and-research-special-topics/real-world-evidence', comment: '21st Century Cures Act RWE programme' },
        ],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        // TAME trial uses composite aging endpoint (multi-morbidity + functional outcomes).
        // This qualifies as level 2 (composite aging score as pre-specified secondary in a national trial).
        score: 2,
        text: 'TAME (Targeting Aging with Metformin) is the landmark example — a Phase III trial using a composite aging endpoint (incidence of disease, functional decline, mortality) as primary outcome. Isolated exception rather than standard practice; disease endpoints still dominate US preventive trials. Score: 2 (composite aging score as pre-specified primary in ≥1 national trial — TAME).',
        links: [
          { label: 'TAME Trial', url: 'https://www.afar.org/tame-trial', comment: 'First Phase III trial with aging itself as primary endpoint — metformin in healthy older adults' },
        ],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        // TAME = metformin Phase III. PEARL = rapamycin Phase II pilot. Both ongoing but no national coordination.
        score: 2,
        text: 'TAME trial (metformin, Phase III, ~3,000 participants) and PEARL trial (rapamycin, Phase II) are active prevention trials targeting aging mechanisms. Dasatinib + quercetin senolytic pilots exist but are small (<100 participants). No national coordination of aging agent trials; each runs independently. Score: 2 (Phase II trials of aging-mechanism agents; no national coordination).',
        links: [
          { label: 'TAME Trial — AFAR', url: 'https://www.afar.org/tame-trial', comment: 'Metformin in primary prevention of aging — Phase III' },
          { label: 'PEARL Trial', url: 'https://www.perltrials.org/', comment: 'Rapamycin in healthy older adults — Phase II' },
        ],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        // CTSA network, NIA-funded trial networks. No longevity-specific coordination mandate. Score: 3.
        score: 3,
        text: 'NIH CTSA (Clinical and Translational Science Awards) network provides national trial coordination infrastructure across 60+ academic medical centres. NIA (National Institute on Aging) funds aging-specific trial networks. No dedicated longevity prevention trial platform with standardised endpoints. Score: 3 (national coordination body with aging mandate; standardised endpoints partial).',
        links: [
          { label: 'CTSA Program', url: 'https://ncats.nih.gov/ctsa', comment: 'NIH Clinical and Translational Science Awards — 60+ centres' },
          { label: 'NIA Clinical Trials', url: 'https://www.nia.nih.gov/research/clinical-trials', comment: 'NIA-funded aging trial portfolio' },
        ],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        // Sarcopenia not formally an FDA indication yet. Frailty has no approved drug.
        // Age-related conditions (osteoporosis, AMD) approved but as disease not aging.
        // Aging per se not an indication. Score: 2 (organ-specific aging-adjacent recognised).
        score: 2,
        text: 'FDA has not recognised aging itself as an indication. Sarcopenia, frailty, and age-related macular degeneration are discussed but have no approved geroprotector with aging as primary indication. Osteoporosis and muscle-wasting agents exist but are approved as disease treatments, not aging interventions. TAME (metformin) is testing the boundary but no regulatory decision yet. Score: 2 (organ-specific aging-adjacent indications recognised; no approved drug, no systemic aging pathway).',
        links: [
          { label: 'FDA — Geroscience Interest Group', url: 'https://www.nia.nih.gov/research/dbsr/geroscience-interest-group', comment: 'NIA-led effort to build FDA pathway for aging indication' },
        ],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        // FDA accepts SPPB, gait speed, 6MWT in geriatric indications (e.g., Duchenne, sarcopenia pilots).
        // Multi-domain composites emerging. No biological age surrogate with regulatory agreement. Score: 2.
        score: 2,
        text: 'FDA accepts single functional endpoints (SPPB, gait speed, grip strength) in geriatric and neuromuscular indications. TAME trial will be the first major test of a multi-domain composite aging endpoint as primary. No biological age surrogate (epigenetic clock, proteomic age, organ function composite) has been accepted as a regulatory endpoint. Score: 2 (multi-domain composite emerging as primary in TAME; no validated surrogate yet).',
        links: [
          { label: 'FDA Guidance — Sarcopenia Endpoints', url: 'https://www.fda.gov/media/133885/download', comment: 'FDA guidance on functional endpoints in sarcopenia trials' },
        ],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        // No formal HTA body in the US. ICER uses standard QALY without aging-specific adaptation.
        // No published methodology for valuing healthspan or compression of morbidity. Score: 1.
        score: 1,
        text: 'The US has no formal HTA body — ICER operates privately and uses standard QALY methodology with no aging-specific adaptation. CMS cost-effectiveness assessments are minimal. No published framework for valuing compression of morbidity or healthspan extension. QALY can theoretically capture some healthspan value but has not been applied. Score: 1 (standard QALY available in principle; no explicit healthspan guidance).',
        links: [
          { label: 'ICER', url: 'https://icer.org/', comment: 'Private US HTA body — standard QALY framework' },
        ],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        // No approved geroprotectors. Off-label use of metformin/rapamycin possible but not covered for aging.
        // No defined reimbursement pathway for aging prevention. Score: 1.
        score: 1,
        text: 'No reimbursement pathway exists for aging-prevention agents in the US. Off-label prescribing of metformin or rapamycin for aging is legally possible but insurance does not cover it for this indication. CMS reimburses specific approved indications only. No pilot or conditional coverage pathway for geroprotectors. Score: 1 (off-label coverage theoretically possible via physician request; no funded pathway).',
        links: [],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        // Some geroscience drugs (senolytics for IPF, idiopathic pulmonary fibrosis) received Breakthrough designation.
        // No aging-specific pathway. FDA Geroscience Interest Group working on this. Score: 2.
        score: 2,
        text: 'No aging-specific expedited pathway exists. Aging agents can apply for Breakthrough Therapy, Fast Track, or Accelerated Approval — some geroscience-adjacent drugs (e.g., senolytics for IPF) have received Breakthrough designation for disease indications. FDA Geroscience Interest Group and NIA are working toward a geroscience regulatory pathway but no published guidance yet. Score: 2 (some aging-adjacent agents received Breakthrough for disease indications; no aging-specific framework).',
        links: [
          { label: 'FDA Breakthrough Therapy Designation', url: 'https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/breakthrough-therapy', comment: 'Expedited pathway — available to aging agents for disease indications' },
        ],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.FREE_RESEARCHER_ACCESS]: {
        score: 3,
        text: 'dbGaP provides controlled-access genomic data. NIH mandates data sharing for funded research (2023 policy). Access is available but requires DUA and IRB — not frictionless.',
        links: [{ label: 'dbGaP', url: 'https://www.ncbi.nlm.nih.gov/gap/', comment: 'Database of Genotypes and Phenotypes — controlled access' }],
      },
      [OpenDataClaim.AI_USE_PERMITTED]: {
        score: 3,
        text: 'NIH data sharing policy permits AI/ML applications on shared data. However, DUAs often restrict commercial AI use. Legal ambiguity remains for large-model training.',
        links: [],
      },
      [OpenDataClaim.ANONYMIZATION_STANDARD]: {
        score: 3,
        text: 'HIPAA Safe Harbor and Expert Determination methods are defined standards. Widely used but HIPAA\'s 18-identifier Safe Harbor is relatively weak by modern re-identification standards.',
        links: [{ label: 'HIPAA De-identification', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html', comment: 'HIPAA Safe Harbor — defined but not state-of-the-art' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 2,
        text: 'No bilateral health data sharing framework. Individual DUAs handle cross-border sharing case by case. GDPR incompatibility with US law creates friction for EU–US data flows.',
        links: [],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.NATIONAL_STANDARD_EXISTS]: {
        score: 4,
        text: '21st Century Cures Act mandates interoperability and prohibits information blocking. ONC USCDI defines required data elements. Legally mandated standard.',
        links: [{ label: '21st Century Cures Act', url: 'https://www.healthit.gov/curesrule/', comment: 'Mandates interoperability, prohibits information blocking' }],
      },
      [InteroperabilityClaim.FHIR_IMPLEMENTED]: {
        score: 3,
        text: 'FHIR R4 mandated by ONC rule. Implementation is uneven — major EHR vendors (Epic, Oracle/Cerner) have FHIR APIs but quality and completeness vary significantly.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRIES_LINKED]: {
        score: 2,
        text: 'No national linked registry system. SEER (cancer), NHSN (infections), and NVSS (vital statistics) exist as siloed registries. Cross-registry linkage requires case-by-case agreements.',
        links: [],
      },
      [InteroperabilityClaim.REAL_TIME_ACCESS]: {
        score: 2,
        text: 'Research data access is typically through retrospective data requests. Real-time or quarterly-updated research databases do not exist at national scale.',
        links: [],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [TrialEndpointsClaim.STANDARDIZED_DEFINED]: {
        score: 2,
        text: 'FDA-NIH BEST resource provides endpoint classification framework. Critical Path Institute working on specific aging endpoints. No finalised gero-specific standard published.',
        links: [{ label: 'FDA-NIH BEST Resource', url: 'https://www.ncbi.nlm.nih.gov/books/NBK338448/', comment: 'Framework for biomarker and endpoint classification' }],
      },
      [TrialEndpointsClaim.REGULATORY_ACCEPTED]: {
        score: 1,
        text: 'No aging-specific composite endpoint has been accepted by FDA. This is the central regulatory bottleneck for the entire longevity field.',
        links: [],
      },
      [TrialEndpointsClaim.CROSS_STUDY_COMPARABLE]: {
        score: 2,
        text: 'Lack of standardised gero endpoints means each trial defines its own measures. Meta-analysis across longevity trials is severely limited.',
        links: [],
      },
      [TrialEndpointsClaim.AGING_SPECIFIC_INCLUDED]: {
        score: 1,
        text: 'No validated aging-specific composite endpoint exists. TAME trial will attempt to establish multi-morbidity onset as a primary endpoint — outcome pending.',
        links: [{ label: 'TAME Trial Design', url: 'https://www.afar.org/tame-trial', comment: 'Multi-morbidity composite as aging endpoint — regulatory test case' }],
      },
    },
  },

  international: {
    [InternationalField.PERTURBATION_SCREENING]: {
      [PerturbationScreeningClaim.NATIONAL_HTS_EXISTS]: {
        score: 4,
        text: 'NCATS HTS infrastructure, Broad Institute Chemical Biology, and NIH Molecular Libraries Program provide substantial HTS capacity.',
        links: [{ label: 'NCATS HTS', url: 'https://ncats.nih.gov/research/research-activities/preclinical-drug-development', comment: 'National HTS infrastructure at NIH' }],
      },
      [PerturbationScreeningClaim.AI_READY]: {
        score: 3,
        text: 'Broad Institute\'s Chemical Biology and Therapeutics Science program generates AI-ready perturbation data. CZ Biohub building perturbation atlases. Not yet standardised nationally.',
        links: [{ label: 'CZ Biohub', url: 'https://www.czbiohub.org/', comment: 'Building perturbation atlases relevant to aging biology' }],
      },
      [PerturbationScreeningClaim.SHARED_ACCESS]: {
        score: 3,
        text: 'NIH data sharing mandate applies to HTS outputs. PubChem hosts compound activity data. Academic sharing is strong; coordination across centres is informal.',
        links: [{ label: 'PubChem', url: 'https://pubchem.ncbi.nlm.nih.gov/', comment: 'Public repository of compound screening data' }],
      },
      [PerturbationScreeningClaim.AGING_PROGRAM]: {
        score: 3,
        text: 'NIA ITP screens compounds for mouse lifespan extension. No equivalent human-cell or AI-ready aging perturbation atlas programme.',
        links: [{ label: 'NIA ITP', url: 'https://www.nia.nih.gov/research/dab/interventions-testing-program-itp', comment: 'Mouse lifespan screening — rapamycin, acarbose, canagliflozin' }],
      },
    },

    [InternationalField.MUTUAL_RECOGNITION]: {
      [MutualRecognitionClaim.BILATERAL_AGREEMENTS]: {
        score: 3,
        text: 'US–EU MRA covers GMP inspections. ICH membership ensures harmonised trial conduct standards. FDA–EMA parallel scientific advice available.',
        links: [{ label: 'FDA–EU MRA', url: 'https://www.fda.gov/international-programs/international-arrangements/mutual-recognition-agreements-mra', comment: 'GMP inspection mutual recognition — not clinical trial data' }],
      },
      [MutualRecognitionClaim.TRIAL_RESULTS_ACCEPTED]: {
        score: 2,
        text: 'FDA requires US data for most approvals. Project Orbis enables parallel oncology review with international partners but does not constitute acceptance of foreign-only data.',
        links: [{ label: 'Project Orbis', url: 'https://www.fda.gov/about-fda/oncology-center-excellence/project-orbis', comment: 'Parallel oncology review — not mutual acceptance of trial results' }],
      },
      [MutualRecognitionClaim.SANDBOX_OUTCOMES_SHARED]: {
        score: 1,
        text: 'No sandbox exists to share outcomes from.',
        links: [],
      },
      [MutualRecognitionClaim.HARMONIZED_STANDARDS]: {
        score: 4,
        text: 'US is ICH founding member. FDA GCP harmonised with EU, Japan, Canada. Trials conducted to ICH E6 standards are accepted in submissions.',
        links: [{ label: 'ICH E6 GCP', url: 'https://www.ich.org/page/efficacy-guidelines', comment: 'Harmonised trial conduct standards — FDA fully aligned' }],
      },
    },

    [InternationalField.SHARED_INFRASTRUCTURE]: {
      [SharedInfraClaim.WET_LAB_SHARING]: {
        score: 2,
        text: 'No formal international wet lab sharing programme for aging research. Individual academic collaborations exist but no national programme.',
        links: [],
      },
      [SharedInfraClaim.COMPUTE_SHARING]: {
        score: 3,
        text: 'NIH participates in GA4GH. XSEDE/ACCESS national supercomputing network accessible to international collaborators with US PI.',
        links: [{ label: 'NSF ACCESS', url: 'https://access-ci.org/', comment: 'National supercomputing network — accessible to international collaborators' }],
      },
      [SharedInfraClaim.MODEL_ORGANISMS_SHARED]: {
        score: 3,
        text: 'JAX (Jackson Laboratory) distributes mouse strains globally. NIA-funded aged rodent colonies available to researchers. Formal international sharing is limited beyond strain distribution.',
        links: [{ label: 'NIA Aged Rodent Colonies', url: 'https://www.nia.nih.gov/research/dab/aged-rodent-colonies-handbook', comment: 'NIA-funded aged mouse and rat colonies — available to researchers' }],
      },
      [SharedInfraClaim.OPEN_TO_FOREIGN]: {
        score: 3,
        text: 'NIH intramural programmes and national labs nominally open to foreign researchers. In practice, security restrictions and visa barriers limit access, especially for AI/computing infrastructure.',
        links: [],
      },
    },

    [InternationalField.PUBLIC_ENGAGEMENT]: {
      [PublicEngagementClaim.NATIONAL_PROGRAM]: {
        score: 2,
        text: 'No nationally coordinated longevity science communication programme. NIA runs public outreach focused on Alzheimer\'s. Private advocacy (AFAR, Alliance for Aging Research) operates independently.',
        links: [{ label: 'Alliance for Aging Research', url: 'https://www.agingresearch.org/', comment: 'Main public advocacy organisation — privately funded' }],
      },
      [PublicEngagementClaim.COUNTER_MISINFORMATION]: {
        score: 2,
        text: 'No government-led counter-misinformation effort for longevity science. FTC takes action on egregious anti-aging product fraud but does not engage with scientific misinformation.',
        links: [],
      },
      [PublicEngagementClaim.EQUITY_NARRATIVE]: {
        score: 2,
        text: '"Billionaire longevity" framing dominates US media coverage, creating equity and credibility concerns. No coordinated public counter-narrative framing longevity as a public good.',
        links: [],
      },
      [PublicEngagementClaim.HIGH_PUBLIC_TRUST]: {
        score: 3,
        text: 'Pew Research shows ~55% of Americans trust scientists "a lot" — moderate. Trust declined post-COVID. Science trust is politically polarised, affecting longevity science acceptance.',
        links: [{ label: 'Pew Research on Science Trust', url: 'https://www.pewresearch.org/science/2022/02/15/americans-trust-in-scientists-other-groups-declines/', comment: 'Pew 2022: trust in scientists declining, politically polarised' }],
      },
    },
  },
}

export default usa
