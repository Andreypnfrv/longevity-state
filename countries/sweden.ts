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

const sweden: CountryData = {
  country: Country.SWEDEN,

  talents: {
    [TalentsField.VISAS_FOR_SCIENTISTS]: {
      [VisasScientistsClaim.DEDICATED_CATEGORY]: {
        score: 4,
        text: 'Sweden has a dedicated "researcher permit" (forskartillstånd) for non-EU scientists, in addition to EU Blue Card. Covers both employed researchers and visiting scholars.',
        links: [{ label: 'Swedish Researcher Permit', url: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Researcher.html', comment: 'Dedicated researcher visa — 1–3 month processing' }],
      },
      [VisasScientistsClaim.FAST_PROCESSING]: {
        score: 4,
        text: 'Researcher permit processing typically 1–3 months. Faster than most EU peers. Digital application system reduces friction.',
        links: [],
      },
      [VisasScientistsClaim.CREDENTIAL_RECOGNITION]: {
        score: 3,
        text: 'EU credentials automatically recognised. Non-EU credentials assessed by UHR (Swedish Council for Higher Education) — takes 2–4 months. Well-defined process.',
        links: [{ label: 'UHR Credential Assessment', url: 'https://www.uhr.se/en/start/recognition-and-assessment-of-foreign-qualifications/', comment: 'Swedish authority for foreign credential recognition' }],
      },
      [VisasScientistsClaim.EARLY_CAREER_ACCESSIBLE]: {
        score: 3,
        text: 'Researcher permit is affordable (~SEK 2,000 / €175). However, Stockholm\'s high cost of living (among highest in EU) limits competitiveness for postdoc-level recruits vs. US stipend levels.',
        links: [],
      },
    },

    [TalentsField.VISAS_FOR_CLINICIANS]: {
      [VisasCliniciansClaim.EU_AUTO_RECOGNITION]: {
        score: 5,
        text: 'EU/EEA medical licences are automatically recognised under the EU Professional Qualifications Directive. Nordic mutual recognition is seamless.',
        links: [{ label: 'EU Professional Qualifications Directive', url: 'https://single-market-economy.ec.europa.eu/single-market/services/free-movement-professionals/qualifications-recognition_en', comment: 'Automatic recognition of medical qualifications across EU/EEA' }],
      },
      [VisasCliniciansClaim.NON_EU_PATHWAY]: {
        score: 3,
        text: 'Non-EU clinicians apply to Socialstyrelsen for licence assessment. Process is defined and publicly documented. Takes 12–18 months.',
        links: [{ label: 'Socialstyrelsen Licensing', url: 'https://www.socialstyrelsen.se/en/regler-och-riktlinjer/legitimation/', comment: 'National licensing authority — non-EU assessment pathway' }],
      },
      [VisasCliniciansClaim.PROCESSING_UNDER_6M]: {
        score: 2,
        text: 'Non-EU clinician licensing takes 12–18 months in practice — well above the 6-month threshold.',
        links: [],
      },
      [VisasCliniciansClaim.NO_LANGUAGE_BARRIER]: {
        score: 2,
        text: 'Swedish language proficiency (TISUS test or equivalent) is effectively required for clinical practice. Significant barrier for non-Scandinavian clinicians.',
        links: [{ label: 'TISUS Language Test', url: 'https://www.su.se/tisus', comment: 'Swedish language proficiency test required for clinical licensing' }],
      },
    },

    [TalentsField.PHD_PROGRAMS]: {
      [PhdProgramsClaim.DEDICATED_AGING_TRACK]: {
        score: 4,
        text: 'KI Department of Biosciences and Nutrition, Uppsala University aging biology group, and SciLifeLab PhD programme offer aging-focused tracks. Swedish Longevity Cluster growing as training hub.',
        links: [{ label: 'KI Aging Research', url: 'https://ki.se/en/research/aging', comment: 'Karolinska Institutet aging research environment' }],
      },
      [PhdProgramsClaim.PUBLICLY_FUNDED]: {
        score: 5,
        text: 'Swedish PhD students are employed (not merely stipended) — full salary (~SEK 30,000/month), pension, and benefits. Entirely publicly funded. Strong welfare state model.',
        links: [],
      },
      [PhdProgramsClaim.INTERNATIONAL_RECRUITMENT]: {
        score: 3,
        text: 'Active international recruitment at KI and SciLifeLab. EU Blue Card facilitates non-EU students. However, absolute programme sizes are small vs. US.',
        links: [{ label: 'SciLifeLab Graduate School', url: 'https://www.scilifelab.se/education/graduate-school/', comment: 'National infrastructure-backed PhD programme' }],
      },
      [PhdProgramsClaim.INDUSTRY_ACADEMIA_LINKS]: {
        score: 3,
        text: 'Swedish Longevity Cluster connects KI, SciLifeLab, and industry. ALF funding system links clinical and research training. Industry collaboration is growing but smaller scale than US.',
        links: [{ label: 'Swedish Longevity Cluster', url: 'https://swedishlongevitycluster.se/', comment: 'Industry-academia consortium — growing but nascent' }],
      },
    },

    [TalentsField.PHD_MD_PROGRAMS_FOR_CLINICIANS]: {
      [PhdMdProgramsClaim.COMBINED_PROGRAM_EXISTS]: {
        score: 4,
        text: 'KI has a formal combined clinical-research degree programme. The kombinationstjänst system allows clinicians to formally split time between clinical and research roles.',
        links: [{ label: 'KI Combined Programmes', url: 'https://ki.se/en/education/graduate-education/phd-education/combined-degree-programmes', comment: 'Formal combined clinical and research training at KI' }],
      },
      [PhdMdProgramsClaim.PUBLICLY_FUNDED]: {
        score: 5,
        text: 'ALF (Avtal om Läkarutbildning och Forskning) funding from government-region agreements specifically funds physician-researcher positions. ~200 active MD–PhD students nationally.',
        links: [{ label: 'ALF Funding', url: 'https://www.vr.se/english/calls-and-decisions/calls/2022-04-01-alf-funding-for-clinical-research.html', comment: 'Government-region agreement funding physician-researcher dual roles' }],
      },
      [PhdMdProgramsClaim.AGING_TRACK_AVAILABLE]: {
        score: 3,
        text: 'Aging tracks available at KI but not at all institutions. Growing, but not yet as systematic as other specialisations.',
        links: [],
      },
      [PhdMdProgramsClaim.RETENTION_MECHANISMS]: {
        score: 4,
        text: 'Kombinationstjänst provides permanent framework for clinical-research career. Public sector employment makes retention more stable than private sector. Lower income gap vs. pure clinical practice than in the US.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.DEDICATED_AGING_BUDGET]: {
        score: 3,
        text: 'Swedish Research Council (VR) has aging-relevant grants but no ring-fenced aging budget line. Wallenberg Foundations (~SEK 2B/year total) fund some aging biology. Swedish Longevity Cluster adds coordination.',
        links: [{ label: 'Swedish Research Council', url: 'https://www.vr.se/english.html', comment: 'Main public funder — no dedicated aging budget line' }, { label: 'Swedish Longevity Cluster', url: 'https://swedishlongevitycluster.se/', comment: 'Coordinates aging research funding and infrastructure' }],
      },
      [ResearchFundingClaim.NOT_DISEASE_SILOED]: {
        score: 4,
        text: 'Swedish aging research funding is distributed across mechanisms (basic biology, clinical, translational) without heavy concentration on one disease. No Alzheimer\'s dominance effect.',
        links: [],
      },
      [ResearchFundingClaim.LONG_TERM_HORIZON]: {
        score: 4,
        text: 'Wallenberg programme grants run 10+ years. VR grants are typically 4 years. NEAR infrastructure funded for sustained periods. Long-term horizon is better than most countries.',
        links: [{ label: 'Wallenberg Foundations', url: 'https://www.wallenberg.com/en', comment: 'Long-term programme grants — 10+ year commitments' }],
      },
      [ResearchFundingClaim.BASIC_RESEARCH_PROTECTED]: {
        score: 4,
        text: 'Strong tradition of protecting basic research. VR "Vetenskapsrådet" explicitly funds curiosity-driven research. Wallenberg grants are explicitly long-term basic science.',
        links: [],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.NO_BLANKET_BAN]: {
        score: 2,
        text: 'EU GMO Directive 2001/18/EC applies — includes somatic gene editing under restrictive precautionary framework. EU New Genomic Techniques regulation (2024) may ease some restrictions but not for human therapeutics.',
        links: [{ label: 'EU GMO Directive', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001L0018', comment: 'Applies in Sweden — highly restrictive for gene editing applications' }],
      },
      [GeneEditingClaim.RISK_PROPORTIONATE]: {
        score: 2,
        text: 'EU regulatory framework does not apply risk-proportionate tiering for gene editing. Precautionary principle dominates. Sweden has no national carve-out.',
        links: [],
      },
      [GeneEditingClaim.APPROVED_TRIALS_EXIST]: {
        score: 2,
        text: 'Very few approved gene therapy trials in Sweden. EU regulatory framework makes early-phase approval slower than in the US. No longevity-specific gene editing trial approved.',
        links: [],
      },
      [GeneEditingClaim.GERMLINE_PATHWAY_DEFINED]: {
        score: 3,
        text: 'EU position on germline editing is effectively a moratorium — clearly defined as prohibited under current regulatory interpretation. Well-defined prohibition, but not a pathway.',
        links: [],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [LongevityAgencyClaim.DEDICATED_AGENCY_EXISTS]: {
        score: 1,
        text: 'No dedicated longevity or healthspan agency. Vinnova (innovation agency) and VR (research council) fund health research but have no longevity mandate.',
        links: [{ label: 'Vinnova', url: 'https://www.vinnova.se/en/', comment: 'Sweden\'s innovation agency — general mandate, no longevity focus' }],
      },
      [LongevityAgencyClaim.CHALLENGE_DRIVEN]: {
        score: 2,
        text: 'Vinnova runs some challenge-based funding calls. But primary model is traditional competitive grants, not ARPA-style directed challenges with programme managers.',
        links: [],
      },
      [LongevityAgencyClaim.NON_DILUTIVE_FUNDING]: {
        score: 4,
        text: 'VR grants, Vinnova grants, and Swelife programme are all non-dilutive. Strong public grant ecosystem.',
        links: [{ label: 'Swelife', url: 'https://swelife.se/en/', comment: 'Strategic innovation programme — non-dilutive grants for life science' }],
      },
      [LongevityAgencyClaim.IP_RETAINED_BY_DEVS]: {
        score: 4,
        text: 'Swedish "Professor\'s Privilege" (lärarundantaget) — unlike most EU countries, individual researchers (not universities) retain IP from their research. Strong IP protection for individual inventors.',
        links: [],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL_EXISTS]: {
        score: 3,
        text: 'EMA Adaptive Pathways and PRIME designation apply through Swedish MPA. Conditional approval (CMA) is a standard EMA tool available in Sweden.',
        links: [{ label: 'EMA Adaptive Pathways', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/adaptive-pathways', comment: 'EU framework — fully available in Sweden through MPA' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS_ACCEPTED]: {
        score: 3,
        text: 'EMA accepts surrogate endpoints for conditional approval in various disease areas. No aging-specific surrogate accepted. Follows EMA guidance, which is similar to FDA in this respect.',
        links: [],
      },
      [AdaptiveLicensingClaim.POST_MARKET_CONFIRMATION]: {
        score: 4,
        text: 'EMA Conditional Marketing Authorisation explicitly requires post-market confirmatory data within defined timeframe. Well-enforced mechanism.',
        links: [{ label: 'EMA CMA', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/conditional-marketing-authorisation', comment: 'Conditional marketing authorisation — post-market confirmatory data required' }],
      },
      [AdaptiveLicensingClaim.AGING_SPECIFIC_PATHWAY]: {
        score: 1,
        text: 'No aging-specific regulatory pathway or guidance at EMA or Swedish MPA level.',
        links: [],
      },
    },

    [TranslationField.SYNTHETIC_CONTROL_ARMS]: {
      [SyntheticControlClaim.REGULATORY_ACCEPTED]: {
        score: 3,
        text: 'EMA RWE framework accepts external controls in defined contexts. Swedish MPA as reference member state applies EMA guidance.',
        links: [{ label: 'EMA RWE Framework', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/post-authorisation-guidance-data-collection/real-world-evidence', comment: 'EU framework for real-world evidence in regulatory submissions' }],
      },
      [SyntheticControlClaim.NATIONAL_DATA_AVAILABLE]: {
        score: 5,
        text: 'Swedish national registers (patient register, prescription register, cause-of-death register, cancer register) are among the world\'s richest for synthetic control construction. Linked by personal ID number.',
        links: [{ label: 'Swedish National Registers', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/registers/', comment: 'Comprehensive linked registers — world-class for synthetic controls' }],
      },
      [SyntheticControlClaim.AI_READY_INFRASTRUCTURE]: {
        score: 3,
        text: 'MONA remote access platform enables structured data analysis. SciLifeLab bioinformatics infrastructure is AI-capable. Cross-register linkage is possible but requires ethics approval — not frictionless.',
        links: [{ label: 'MONA', url: 'https://www.scb.se/en/services/research-and-statistics/mona/', comment: 'Statistics Sweden\'s secure remote data access — AI analysis possible' }],
      },
      [SyntheticControlClaim.USED_IN_APPROVALS]: {
        score: 2,
        text: 'Register data used in observational longevity studies but not yet in a Swedish regulatory approval using synthetic controls for aging/longevity indication.',
        links: [],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTS]: {
        score: 1,
        text: 'No formal regulatory sandbox. EU discussions ongoing but not implemented. Sweden has no national health innovation sandbox.',
        links: [],
      },
      [RegulatorySandboxClaim.COMBINATION_THERAPIES]: {
        score: 1,
        text: 'No sandbox for combination therapies. EMA handles via standard combination product pathway.',
        links: [],
      },
      [RegulatorySandboxClaim.REPURPOSED_DRUGS]: {
        score: 2,
        text: 'Hospital exemption for ATMPs provides some flexibility for hospital-prepared repurposed therapies. Limited in scope.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_SAFE_HARBOUR]: {
        score: 1,
        text: 'No legal safe harbour provisions for experimental therapies outside standard trial enrolment.',
        links: [],
      },
    },

    [TranslationField.RIGHT_TO_TRY]: {
      [RightToTryClaim.LAW_EXISTS]: {
        score: 2,
        text: 'No RTT law. Access to investigational treatments via EMA compassionate use framework and Swedish MPA named patient programmes only.',
        links: [{ label: 'EMA Compassionate Use', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/compassionate-use', comment: 'EU compassionate use — applies in Sweden' }],
      },
      [RightToTryClaim.COVERS_TERMINAL]: {
        score: 2,
        text: 'Compassionate use can cover terminally ill patients on a case-by-case basis. No systematic or automatic right.',
        links: [],
      },
      [RightToTryClaim.PHYSICIAN_PROTECTION]: {
        score: 2,
        text: 'No explicit legal protection for physicians using compassionate use outside standard practice. Professional liability applies.',
        links: [],
      },
      [RightToTryClaim.COMPANY_PARTICIPATION]: {
        score: 1,
        text: 'Company participation in compassionate use is voluntary. No mandate.',
        links: [],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Hälsosamtal (Health Dialogue) programme proactively invites all residents at ages 40, 50, and 60 for free cardiovascular risk assessment covering blood pressure, cholesterol, blood glucose, BMI, and smoking. Proactive letter invitation, free of charge, near-universal reach across 21 regions. Scored PROACTIVE (4) rather than INTEGRATED (5): results are documented in the GP\'s medical record but Hälsosamtal does not feed a dedicated national screening registry with structured data linkage.',
        links: [
          { label: 'Folkhälsomyndigheten – Hälsosamtal', url: 'https://www.folkhalsomyndigheten.se/livsvillkor-levnadsvanor/halsa-i-olika-grupper/halsa-i-olika-skeden-av-livet/aldres-halsa/', comment: 'National public health agency overview of health dialogues at ages 40/50/60' },
          { label: 'Region Stockholm – Hälsokontroll 40/50/60', url: 'https://www.1177.se/Stockholm/sjukdomar--besvar/hjarta-och-blodkarlssjukdomar/halsosamtal/', comment: 'Example regional implementation — free invitation-based CVD risk check' },
        ],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        // Upgraded from INTEGRATED (5) to ACTIONABLE_LOOP (6): the national mammography programme has a
        // systematic recall system — abnormal results trigger automatic callback letters and additional imaging.
        // This is a structured, programme-level automated follow-up pathway, not ad hoc clinical discretion.
        score: ScreeningLevel.ACTIONABLE_LOOP,
        text: 'Mammografiscreening: women aged 40–74 receive a proactive invitation letter every 18–24 months for a free mammogram. Uptake ~80–85%. Double reading by independent radiologists reduces false positives. Results are registered in Bröstcancerregistret (national quality registry). Abnormal findings trigger an automated recall — women receive a callback letter for additional imaging without needing to self-initiate. This systematic recall loop is the basis for the ACTIONABLE_LOOP score.',
        links: [
          { label: 'Socialstyrelsen – Mammografiscreening', url: 'https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/artikelkatalog/nationella-screeningprogram/2019-12-6437.pdf', comment: 'National Board of Health and Welfare guidance on mammography screening programme' },
          { label: 'Bröstcancerregistret', url: 'https://www.cancercentrum.se/samverkan/cancerdiagnoser/brost/kvalitetsregister/', comment: 'National quality registry — abnormal results trigger structured follow-up pathway' },
        ],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'National invitation-based colorectal cancer screening using FIT (fecal immunochemical test) for adults aged 60–74. Proactively invited by letter, free of charge, fully rolled out across all 21 regions by 2023. Uptake ~70%. Positive FIT results trigger an automatic colonoscopy invitation — a structured follow-up pathway exists, but the programme is newer (2023 full rollout) and not yet linked to a dedicated national screening registry with EHR integration. Scored PROACTIVE (4); expected to reach INTEGRATED (5) as the programme matures.',
        links: [
          { label: 'Socialstyrelsen – Tjocktarmscancer screening', url: 'https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/artikelkatalog/nationella-screeningprogram/2021-6-7396.pdf', comment: 'National Board guidance on colorectal cancer screening programme' },
          { label: 'Cancerfonden – Tarmcancer screening', url: 'https://www.cancerfonden.se/om-cancer/cancerformer/tarmcancer/screening', comment: 'Patient-facing overview of invitation-based colorectal screening' },
        ],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        // Upgraded from INTEGRATED (5) to ACTIONABLE_LOOP (6): NKCx (national cervical screening registry)
        // systematically tracks results and abnormal HPV findings automatically trigger colposcopy referral.
        score: ScreeningLevel.ACTIONABLE_LOOP,
        text: 'National invitation-based cervical screening: women 23–49 invited every 3 years for HPV primary testing; women 50–64 every 5 years. Free, proactive letter invitation, uptake ~80%. Results registered in NKCx (Nationellt Kvalitetsregister för Cervixcancerprevention). Abnormal HPV results automatically trigger referral for colposcopy within the national programme — systematic follow-up care pathway confirms ACTIONABLE_LOOP level.',
        links: [
          { label: 'Socialstyrelsen – Gynekologisk cellprovtagning', url: 'https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/artikelkatalog/nationella-screeningprogram/2015-12-2.pdf', comment: 'National Board guidance on the cervical screening programme' },
          { label: 'NKCx – Nationellt Kvalitetsregister för Cervixcancerprevention', url: 'https://nkcx.se/', comment: 'National quality registry — abnormal results trigger automatic colposcopy referral pathway' },
        ],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        // Upgraded from INTEGRATED (5) to ACTIONABLE_LOOP (6): SweAAA register systematically assigns
        // surveillance intervals based on aneurysm size with automatic re-invitation — a textbook actionable loop.
        score: ScreeningLevel.ACTIONABLE_LOOP,
        text: 'National AAA programme since 2008: all men turning 65 proactively invited for a free one-time ultrasound. Uptake ~90%. All findings (including sub-threshold aneurysms) entered into SweAAA national register. Size-based protocol automatically assigns follow-up: small AAA → surveillance re-invitation at defined intervals; large AAA → automatic vascular surgery referral. This structured, protocol-driven follow-up loop qualifies as ACTIONABLE_LOOP.',
        links: [
          { label: 'Socialstyrelsen – Bukaortaaneurysm (AAA) screening', url: 'https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/artikelkatalog/nationella-screeningprogram/2019-6-16.pdf', comment: 'National Board guidance — men 65, one-time invitation, SweAAA follow-up protocol' },
          { label: 'SweAAA – Swedish AAA Register', url: 'https://www.sweaaa.se/', comment: 'Protocol-driven surveillance: size determines automatic follow-up interval or surgical referral' },
        ],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Hälsosamtal at ages 40, 50, and 60 includes fasting blood glucose and/or HbA1c alongside lipids, BP, BMI, and smoking — a structured metabolic screening for the general population at 10-year intervals, proactively invited by letter. Positive results trigger follow-up and lifestyle counselling. Scored PROACTIVE (4): results documented in clinical record but not linked to a dedicated national diabetes screening registry.',
        links: [
          { label: 'Folkhälsomyndigheten – Hälsosamtal 40/50/60', url: 'https://www.folkhalsomyndigheten.se/livsvillkor-levnadsvanor/halsa-i-olika-grupper/halsa-i-olika-skeden-av-livet/aldres-halsa/', comment: 'Overview of health dialogues including metabolic risk assessment' },
          { label: 'Diabetesregistret (NDR)', url: 'https://www.ndr.nu/', comment: 'National Diabetes Register — tracking treatment outcomes for diagnosed patients' },
        ],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'No national invitation-based osteoporosis screening programme. DEXA available on referral through county council health system at no cost. FRAX embedded in clinical practice for risk stratification. National guidelines (Socialstyrelsen) recommend DEXA for women 65+ and fracture cases, but proactive population invitation does not exist. Scored FUNDED_PASSIVE (3): government pays once referred, but patient or doctor must initiate.',
        links: [
          { label: 'Socialstyrelsen – Osteoporosriktlinjer', url: 'https://www.socialstyrelsen.se/regler-och-riktlinjer/nationella-riktlinjer/riktlinjer-och-utvarderingar/rorelseorganens-sjukdomar/', comment: 'National guidelines on osteoporosis — DEXA recommended for at-risk groups; no population invitation' },
        ],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national lung cancer CT screening programme. Sweden participated in NELSON trial research but has not translated this into a national programme. Some county councils have piloted LDCT for heavy smokers (not nationally funded). Swedish cancer strategy (2023) acknowledges lung screening as under evaluation. Scored COST_SHARING (2) to reflect pilot/limited access — not ABSENT because regional pilots exist, but not FUNDED_PASSIVE because there is no national funded pathway.',
        links: [
          { label: 'Cancerstrategin 2023 – Lungcancer', url: 'https://www.regeringen.se/contentassets/b16e8b9614b4488fb92be73da56d8a31/nationell-cancerstrategi.pdf', comment: 'National cancer strategy — lung screening under evaluation but not yet a funded programme' },
        ],
      },
      // ── Longevity-frontier ──────────────────────────────────────────────────
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No dedicated national AF screening programme. Opportunistic pulse palpation is standard of care in government-funded primary visits; Hälsosamtal includes cardiovascular assessment where AF may be incidentally detected. Some county councils use single-lead ECG for older at-risk patients. SBU has reviewed AF screening evidence. Scored COST_SHARING (2): government-funded primary care enables opportunistic detection, but no structured screening programme exists — detection depends on whether a patient attends a visit and the clinician checks.',
        links: [
          { label: 'SBU – Screening för förmaksflimmer', url: 'https://www.sbu.se/sv/publikationer_lisa/screening-for-formaksflimmer/', comment: 'Swedish Agency for Health Technology Assessment review of AF screening evidence' },
        ],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national population-level cognitive screening programme. Government-funded memory clinics available across Sweden for referral-based assessment. SBU (2022) found insufficient evidence for mass cognitive screening. SNAC and BioFINDER are world-class research platforms but not clinical screening pathways. Scored COST_SHARING (2): access exists through the government-funded healthcare system but only on referral — no proactive or systematic invitation.',
        links: [
          { label: 'SBU – Screening av kognitiv funktion', url: 'https://www.sbu.se/sv/publikationer_lisa/kognitiv-nedsattning-och-demens/', comment: 'SBU review of cognitive screening — insufficient evidence for population programme' },
          { label: 'BioFINDER Study', url: 'https://biofinder.se/', comment: 'World-leading Alzheimer biomarker research — Lund University; research, not a clinical pathway' },
        ],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        // Was incorrectly scored as COST_SHARING (2). There is no accessible clinical or private pathway
        // for PRS in Sweden — unlike the US where DTC services like 23andMe are commercially available.
        // Research participation (free) exists but is not a screening programme. Correct level: ABSENT.
        score: ScreeningLevel.ABSENT,
        text: 'No clinical or accessible private PRS pathway. Unlike the US where DTC genetic testing is commercially available, there is no regulated PRS consumer service in Sweden. Research participation via Genome Sweden or Karolinska studies is possible but is not a screening programme. Scored ABSENT (0): no national programme and no accessible private clinical pathway.',
        links: [
          { label: 'Genome Sweden', url: 'https://genomsverige.se/en/', comment: 'National genomic research capacity — not a clinical PRS screening pathway' },
          { label: 'SciLifeLab – Precision Medicine', url: 'https://www.scilifelab.se/capabilities/precision-medicine/', comment: 'Research infrastructure — not accessible as population screening' },
        ],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        // Residual clinical samples collected by default under the Biobank Act — soft opt-out at regional level.
        // Research cohorts (Twin Registry, SATSA) remain opt-in. Not yet uniform nationally. Score: 3.
        score: 3,
        text: 'The Swedish Biobank Act enables collection of residual clinical samples by default (soft opt-out) in participating regions — Biobank Sweden links 27 regional biobanks. Research cohorts (Swedish Twin Registry, SATSA) are opt-in. National uniformity is still incomplete. Score: 3 (residual samples by default; dedicated re-contact capability exists but coverage not universal).',
        links: [
          { label: 'Biobank Sweden', url: 'https://biobanksverige.se/en/', comment: 'National network of 27 regional biobanks — residual sample default in participating regions' },
          { label: 'Swedish Biobank Register', url: 'https://biobanksverige.se/en/about-biobank-sweden/', comment: 'Legal framework for residual sample collection' },
        ],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        // SATSA: ~2.6 collections over 20 years (~8–9 years apart). SNAC-K: 3–6 year intervals.
        // Residual biobank samples are one-time by definition. Score: 2 (infrequent / irregular; >10-year gaps in key cohorts).
        score: 2,
        text: 'SATSA/Twin Registry epigenetic samples collected on average 2.6 times over 20 years (~8–9 year intervals). SNAC-K Stockholm aging cohort: every 3–6 years. Residual clinical biobank samples are one-time by definition. Score: 2 (longitudinal subset, infrequent — most key aging biomarkers collected less than once per decade).',
        links: [
          { label: 'SATSA Study', url: 'https://ki.se/en/research/satsa-swedish-adoption-twin-study-of-aging', comment: 'Swedish Adoption/Twin Study of Aging — epigenetic samples ~every 8–9 years' },
          { label: 'SNAC-K Study', url: 'https://www.snac-k.se/', comment: 'Stockholm aging cohort — 3–6 year follow-up intervals' },
        ],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        // SciLifeLab: Olink proximity extension assay (proteomics) + Karolinska/SATSA: genomics + methylation.
        // Genomics + one aging-specific layer (proteomics). Score: 3.
        score: 3,
        text: 'Genome Sweden provides WGS capacity (SciLifeLab). SATSA/Twin Registry collects epigenetic clock markers (DNA methylation) in subsets. SciLifeLab Olink platform enables large-scale proteomics (proximity extension assay, 3000+ proteins) in research cohorts. Systematic metabolomics not yet population-wide. Score: 3 (genomics + one aging-specific layer — epigenetics or proteomics — but not yet combined).',
        links: [
          { label: 'Genome Sweden', url: 'https://genomsverige.se/en/', comment: 'National WGS infrastructure' },
          { label: 'SciLifeLab Olink Proteomics', url: 'https://www.scilifelab.se/capabilities/precision-medicine/', comment: 'Large-scale proximity extension proteomics used in Swedish cohorts' },
        ],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        // Swedish national registers (NPR, Cancer Register, Cause of Death Register, Prescribed Drug Register)
        // are world-class — full EHR-level linkage via personal identity number. No wearable integration. Score: 3.
        score: 3,
        text: 'Sweden\'s national personal identity number enables deterministic linkage of biobank samples to the National Patient Register, Cancer Register, Cause of Death Register, and Prescribed Drug Register — longitudinal, population-wide. No systematic wearable or passive data integration at biobank level. Score: 3 (full EHR linkage via registry — longitudinal clinical records accessible).',
        links: [
          { label: 'Swedish National Patient Register', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/registers/national-patient-register/', comment: 'Full EHR linkage via personal identity number' },
          { label: 'NEAR – National E-infrastructure for Aging Research', url: 'https://www.near-aging.se/', comment: '15 longitudinal aging databases linked to national registers' },
        ],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        // International research access via application. The Biobank Act adds complexity (ethics board + regional approval).
        // Well-documented data models (NEAR, SciLifeLab). Score: 3.
        score: 3,
        text: 'International researchers can apply for access to Swedish biobank data, but must navigate the Biobank Act — requiring ethics board approval, regional biobank consent, and sometimes separate agreements per region. NEAR and SciLifeLab provide well-documented data models. Process is slower than UK Biobank. Score: 3 (international access via application; legal complexity reduces streamlining relative to score 4).',
        links: [
          { label: 'NEAR Data Access', url: 'https://www.near-aging.se/about/data-access/', comment: 'Application process for NEAR longitudinal aging data' },
          { label: 'SciLifeLab Data Centre', url: 'https://www.scilifelab.se/data/', comment: 'Swedish research data infrastructure and access models' },
        ],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        // TASTE (2014) via SWEDHEART: point-of-care randomisation, register-based outcomes,
        // ~$500 marginal cost per patient. Participation indistinguishable from routine care. Score: 4.
        score: 4,
        text: 'Sweden pioneered register-based RCTs (RRCTs) — TASTE trial (2014) randomised 7,244 STEMI patients through the SWEDHEART registry at point of care; outcomes captured entirely from registers; estimated marginal cost ~$500/patient vs $20k+ in standard RCTs. SCAPIS enrolled 30k participants through clinical infrastructure. Score: 4 (point-of-care randomisation + register-based outcomes; participation indistinguishable from routine care).',
        links: [
          { label: 'TASTE Trial — NEJM', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1405312', comment: 'First large register-based RCT — 7,244 patients, outcomes from SWEDHEART registry' },
          { label: 'SCAPIS', url: 'https://scapis.se/en/', comment: '30k participants — cardiovascular imaging embedded in clinical infrastructure' },
        ],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        // EMA (EU-level) has an RWE framework; Sweden follows EMA via MPA.
        // Some label expansions accepted; not yet primary prevention specific. Score: 3.
        score: 3,
        text: 'Sweden follows EMA regulatory framework. EMA\'s RWE programme accepts register-based RCT evidence for some regulatory decisions; MPA (Swedish Medical Products Agency) applies EMA guidance. No dedicated framework for aging prevention agents. Score: 3 (register-based RCTs recognised as primary evidence in some EMA approval categories).',
        links: [
          { label: 'EMA Real-World Evidence', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/real-world-evidence', comment: 'EMA RWE framework — applies to Sweden via MPA' },
        ],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        // SCAPIS measures grip strength, 6MWT, pulmonary function — functional endpoints.
        // No composite aging scores or biological age surrogates as pre-specified secondary. Score: 1.
        score: 1,
        text: 'SCAPIS includes functional measurements (grip strength, 6-minute walk test, pulmonary function, cognition) but these are observational endpoints, not pre-specified trial outcomes. No Swedish preventive trial uses a composite aging score or biological age surrogate as a pre-specified secondary endpoint. Disease endpoints dominate. Score: 1 (functional aging endpoints measured in some studies; not pre-specified trial secondaries).',
        links: [
          { label: 'SCAPIS Endpoints', url: 'https://scapis.se/en/about-scapis/', comment: 'SCAPIS measurement battery — includes functional aging measures as observational endpoints' },
        ],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        // No national Swedish trials of senolytics, rapamycin, or aging-mechanism agents.
        // Academic interest exists but no active Phase II. Score: 1.
        score: 1,
        text: 'No active Swedish national trials of agents targeting aging mechanisms (senolytics, rapamycin analogues, NAD precursors, etc.) in a primary prevention context. Academic interest is growing — Karolinska and Uppsala have aging biology programmes — but no Phase II prevention trial has been launched. Score: 1 (academic-only pilots; no Phase II prevention trials of aging agents).',
        links: [],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        // UCR: national trial coordination. Nordic Trial Alliance: cross-Nordic. NEAR: aging research network.
        // No dedicated aging prevention trial platform. Score: 4.
        score: 4,
        text: 'Uppsala Clinical Research Center (UCR) provides national trial coordination infrastructure, including standardised endpoints and data management. The Nordic Trial Alliance enables cross-Nordic harmonisation. NEAR (National E-infrastructure for Aging Research) coordinates 15 longitudinal aging databases. No dedicated aging prevention trial platform with standardised longevity endpoints. Score: 4 (national body + active international collaboration; aging mandate present in research networks).',
        links: [
          { label: 'Uppsala Clinical Research Center', url: 'https://www.ucr.uu.se/en/', comment: 'National trial coordination — standardised endpoints, data management' },
          { label: 'Nordic Trial Alliance', url: 'https://www.nordictrialalliance.org/', comment: 'Cross-Nordic harmonisation of trial methodology' },
        ],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        // Sweden follows EMA. EMA recognises sarcopenia and frailty as aging-adjacent indications.
        // Systemic aging not an indication. No approved geroprotector with aging as primary target. Score: 2.
        score: 2,
        text: 'Sweden follows EMA regulatory framework. EMA recognises sarcopenia and frailty as aging-adjacent indications and has approved drugs for osteoporosis and muscle wasting, but aging per se is not a primary indication. No systemic aging pathway under active EMA development. EMA Geriatric Expert Group advises on age-related conditions but not a geroscience-specific indication category. Score: 2 (organ-specific aging-adjacent indications recognised; no systemic aging pathway).',
        links: [
          { label: 'EMA Geriatric Expert Group', url: 'https://www.ema.europa.eu/en/committees/working-parties-other-groups/chmp/geriatric-expert-group', comment: 'EMA advisory group on age-related medicines' },
        ],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        // EMA accepts SPPB, 6MWT, gait speed in geriatric indications (e.g., muscle wasting, frailty).
        // Multi-domain functional composites used in some EMA approvals. No biological age surrogate precedent. Score: 2.
        score: 2,
        text: 'EMA accepts single functional endpoints (SPPB, 6-minute walk test, gait speed, grip strength) in geriatric and neuromuscular indications — several approvals in muscle wasting and frailty use these. Multi-domain functional composites have precedent in some EMA approvals. No biological age surrogate (epigenetic clock, proteomic age, organ functional composite) has been accepted as a regulatory endpoint under EMA or MPA. Score: 2 (multi-domain functional composite accepted as primary in some geriatric indications).',
        links: [
          { label: 'EMA Guideline on Frailty', url: 'https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-frailty-geroscience-aspects-clinical-trials_en.pdf', comment: 'EMA guidance on clinical endpoints in frailty and geroscience trials' },
        ],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        // TLV uses QALY. EUnetHTA (EU HTA body) acknowledges functional outcomes beyond QALY in principle.
        // No published framework for valuing compression of morbidity or healthspan. Score: 2.
        score: 2,
        text: 'TLV (Swedish HTA body) uses a QALY-based framework. EUnetHTA 21 (EU-level joint HTA from 2025) mentions "relative effectiveness" and quality of life outcomes, and guidance acknowledges that standard QALY may undervalue prevention and compression of morbidity. No published methodology specifically for aging-prevention interventions. Healthspan acknowledged as relevant but not operationalised. Score: 2 (HTA guidance explicitly acknowledges healthspan as relevant; no specific framework yet).',
        links: [
          { label: 'TLV', url: 'https://www.tlv.se/en/', comment: 'Swedish HTA body — QALY framework' },
          { label: 'EUnetHTA 21', url: 'https://www.eunethta.eu/', comment: 'EU joint HTA body from 2025 — broader outcome framework in development' },
        ],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        // No approved geroprotectors. TLV reimburses per QALY assessment for approved indications.
        // Off-label prescribing possible but not reimbursed for aging. Score: 1.
        score: 1,
        text: 'No reimbursement pathway for aging-prevention agents in Sweden. TLV reimburses medicines based on QALY cost-effectiveness for approved indications only. Off-label prescribing of metformin or rapamycin for aging is possible but not covered by Swedish public insurance (Försäkringskassan). No pilot or conditional coverage pathway has been defined. Score: 1 (off-label coverage theoretically possible; no funded pathway).',
        links: [
          { label: 'TLV Reimbursement Process', url: 'https://www.tlv.se/beslut-och-regelverk/lakemedel.html', comment: 'TLV pharmaceutical reimbursement framework' },
        ],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        // EMA PRIME designation available. Some geroscience-adjacent drugs have received PRIME for disease indications.
        // No EMA aging-specific expedited pathway. Score: 2.
        score: 2,
        text: 'Sweden follows EMA. EMA\'s PRIME (PRIority MEdicines) scheme provides early support for drugs targeting unmet medical needs — some geroscience-adjacent agents (e.g., drugs for rare progeria-like conditions, IPF) have received PRIME designation for disease indications. No aging-specific expedited pathway exists at EMA level. EMA has not published guidance on geroscience as a category for PRIME. Score: 2 (some aging-adjacent agents received PRIME for disease indications; no aging-specific framework).',
        links: [
          { label: 'EMA PRIME Scheme', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/prime-priority-medicines', comment: 'EMA expedited pathway for medicines with major therapeutic advantage' },
        ],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.FREE_RESEARCHER_ACCESS]: {
        score: 4,
        text: 'Swedish national registers accessible via Socialstyrelsen and SCB after ethics approval and data agreement. Fees are minimal (cost-recovery). Process is comparatively streamlined.',
        links: [{ label: 'Swedish National Registers', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/registers/', comment: 'National health register access for research' }],
      },
      [OpenDataClaim.AI_USE_PERMITTED]: {
        score: 3,
        text: 'AI use on register data is not explicitly prohibited but requires case-by-case ethical review. GDPR and Swedish data protection law create some ambiguity for large-scale AI applications.',
        links: [],
      },
      [OpenDataClaim.ANONYMIZATION_STANDARD]: {
        score: 4,
        text: 'Swedish data is accessed via secure remote environments (MONA), not raw exports. Statistical disclosure control is applied. Strong privacy-while-usable model.',
        links: [{ label: 'MONA Platform', url: 'https://www.scb.se/en/services/research-and-statistics/mona/', comment: 'Secure remote analysis — data never leaves the environment' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 3,
        text: 'Intra-EU sharing is facilitated by GDPR adequacy. Sweden participates in EHDS (European Health Data Space) development. Non-EU cross-border sharing requires specific agreements.',
        links: [{ label: 'European Health Data Space', url: 'https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en', comment: 'EU framework enabling cross-border health data for research — Sweden is participant' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.NATIONAL_STANDARD_EXISTS]: {
        score: 5,
        text: 'Inera manages national digital health infrastructure with enforced interoperability standards. Sweden has one of the most mature national eHealth infrastructures in Europe.',
        links: [{ label: 'Inera', url: 'https://www.inera.se/en/', comment: 'National digital health infrastructure — enforced national standards' }],
      },
      [InteroperabilityClaim.FHIR_IMPLEMENTED]: {
        score: 4,
        text: 'FHIR implementation is advanced relative to EU peers. Inera has FHIR-based national APIs. Implementation is more consistent than fragmented US market.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRIES_LINKED]: {
        score: 5,
        text: 'Swedish national registers are linked via personal identity number (personnummer). Patient register, prescription register, cause-of-death register, and cancer register are all systematically linked.',
        links: [{ label: 'Register Linkage in Sweden', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/registers/linking-of-registers/', comment: 'Systematic linkage via personnummer — unique global asset' }],
      },
      [InteroperabilityClaim.REAL_TIME_ACCESS]: {
        score: 3,
        text: 'NPÖ provides near-real-time clinical data access for care purposes. Research data access via MONA is typically based on annual or semi-annual extracts, not real-time.',
        links: [],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [TrialEndpointsClaim.STANDARDIZED_DEFINED]: {
        score: 3,
        text: 'UCR has developed standardised cardiovascular trial endpoints adopted across Nordic countries. Some aging-relevant standards exist. No specifically gero-therapeutic composite defined.',
        links: [{ label: 'UCR Endpoint Development', url: 'https://www.ucr.uu.se/en/', comment: 'Uppsala Clinical Research Center — cardiovascular standards with Nordic adoption' }],
      },
      [TrialEndpointsClaim.REGULATORY_ACCEPTED]: {
        score: 3,
        text: 'EMA standards apply. UCR cardiovascular endpoints accepted. No aging-specific composite endpoint accepted by EMA or MPA.',
        links: [],
      },
      [TrialEndpointsClaim.CROSS_STUDY_COMPARABLE]: {
        score: 4,
        text: 'Nordic Trial Alliance promotes cross-study comparability across Nordic countries. Strong tradition of harmonised data collection in Nordic cohorts.',
        links: [{ label: 'Nordic Trial Alliance', url: 'https://www.nordictrialalliance.org/', comment: 'Formal Nordic endpoint harmonisation initiative' }],
      },
      [TrialEndpointsClaim.AGING_SPECIFIC_INCLUDED]: {
        score: 1,
        text: 'No validated aging-specific composite endpoint included in any standardised Swedish or EMA framework.',
        links: [],
      },
    },
  },

  international: {
    [InternationalField.PERTURBATION_SCREENING]: {
      [PerturbationScreeningClaim.NATIONAL_HTS_EXISTS]: {
        score: 3,
        text: 'SciLifeLab Chemical Biology Consortium Sweden provides HTS capabilities across KI, Uppsala, Stockholm, Umeå universities.',
        links: [{ label: 'SciLifeLab', url: 'https://www.scilifelab.se/', comment: 'National research infrastructure — includes HTS capabilities' }],
      },
      [PerturbationScreeningClaim.AI_READY]: {
        score: 3,
        text: 'Human Protein Atlas (KTH/Uppsala) provides structured, API-accessible protein expression data. SciLifeLab bioinformatics is AI-ready. Not purpose-built for aging perturbation screening.',
        links: [{ label: 'Human Protein Atlas', url: 'https://www.proteinatlas.org/', comment: 'Global protein expression reference — API-accessible, aging-relevant data' }],
      },
      [PerturbationScreeningClaim.SHARED_ACCESS]: {
        score: 4,
        text: 'SciLifeLab infrastructure is formally open to external researchers with defined access procedures. Human Protein Atlas is fully open access.',
        links: [],
      },
      [PerturbationScreeningClaim.AGING_PROGRAM]: {
        score: 2,
        text: 'No dedicated aging perturbation screening programme. Some aging-relevant work embedded in general SciLifeLab programmes.',
        links: [],
      },
    },

    [InternationalField.MUTUAL_RECOGNITION]: {
      [MutualRecognitionClaim.BILATERAL_AGREEMENTS]: {
        score: 4,
        text: 'EU membership provides full EMA mutual recognition. ICH membership. EU–US MRA for GMP inspections applies.',
        links: [{ label: 'EMA Mutual Recognition', url: 'https://www.ema.europa.eu/en/partners-networks/eu-partners/eu-member-states/mutual-recognition-procedure', comment: 'EU mutual recognition of marketing authorisations' }],
      },
      [MutualRecognitionClaim.TRIAL_RESULTS_ACCEPTED]: {
        score: 4,
        text: 'EU Clinical Trials Regulation creates a single trial area — results from EU trials accepted across member states. EMA accepts multi-regional clinical trials.',
        links: [{ label: 'EU Clinical Trials Regulation', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/clinical-trials-human-medicines/clinical-trials-regulation', comment: 'Single EU-wide clinical trial authorisation' }],
      },
      [MutualRecognitionClaim.SANDBOX_OUTCOMES_SHARED]: {
        score: 1,
        text: 'No sandbox exists — no outcomes to share.',
        links: [],
      },
      [MutualRecognitionClaim.HARMONIZED_STANDARDS]: {
        score: 5,
        text: 'Sweden is ICH member through EU. Full ICH E6 GCP harmonisation. MPA is an EMA reference member state with strong participation in EU regulatory committees.',
        links: [{ label: 'Swedish MPA', url: 'https://www.lakemedelsverket.se/en/', comment: 'EMA reference member state — strong EU regulatory alignment' }],
      },
    },

    [InternationalField.SHARED_INFRASTRUCTURE]: {
      [SharedInfraClaim.WET_LAB_SHARING]: {
        score: 4,
        text: 'SciLifeLab is de facto shared infrastructure with Denmark, Finland, Norway. Formal collaborations through Nordic EMBL partnership.',
        links: [{ label: 'Nordic EMBL Partnership', url: 'https://www.embl.org/about/partnerships/nordic-embl-partnership/', comment: 'Formal Nordic sharing of life science infrastructure' }],
      },
      [SharedInfraClaim.COMPUTE_SHARING]: {
        score: 4,
        text: 'ELIXIR-SE (SciLifeLab node) provides shared European bioinformatics infrastructure. SNIC/NAISS national supercomputing open to Nordic and EU collaborators.',
        links: [{ label: 'ELIXIR-SE', url: 'https://www.scilifelab.se/elixir-sweden/', comment: 'Swedish node of European bioinformatics infrastructure' }],
      },
      [SharedInfraClaim.MODEL_ORGANISMS_SHARED]: {
        score: 3,
        text: 'Nordic Biobank Network formalises biobank sharing. Model organism facilities less formally shared than biobanks.',
        links: [{ label: 'Nordic Biobank Network', url: 'https://www.nordicbiobanknetwork.org/', comment: 'Formal Nordic biobank collaboration' }],
      },
      [SharedInfraClaim.OPEN_TO_FOREIGN]: {
        score: 4,
        text: 'SciLifeLab has defined access procedures for foreign researchers. Human Protein Atlas is fully open. ELIXIR provides EU-wide access framework.',
        links: [],
      },
    },

    [InternationalField.PUBLIC_ENGAGEMENT]: {
      [PublicEngagementClaim.NATIONAL_PROGRAM]: {
        score: 2,
        text: 'VR runs general science communication. No nationally coordinated longevity-specific programme. Swedish Longevity Cluster organises public events but this is not a national programme.',
        links: [],
      },
      [PublicEngagementClaim.COUNTER_MISINFORMATION]: {
        score: 2,
        text: 'No specific counter-misinformation effort for longevity science. Läkemedelsverket (MPA) can act on fraudulent products but does not run a proactive counter-narrative programme.',
        links: [],
      },
      [PublicEngagementClaim.EQUITY_NARRATIVE]: {
        score: 3,
        text: 'Sweden\'s welfare state tradition means longevity discussions naturally frame healthy aging as a public good. No specific equity campaign but the baseline framing is favourable.',
        links: [],
      },
      [PublicEngagementClaim.HIGH_PUBLIC_TRUST]: {
        score: 5,
        text: 'Sweden consistently ranks among highest globally for trust in science and public institutions. Eurobarometer: ~75–80% of Swedes trust scientists. Strong asset for longevity science acceptance.',
        links: [{ label: 'Eurobarometer Science Trust', url: 'https://europa.eu/eurobarometer/surveys/detail/2237', comment: 'Sweden among highest EU countries for trust in science' }],
      },
    },
  },
}

export default sweden
