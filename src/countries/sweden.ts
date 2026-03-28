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

const sweden: CountryData = {
  country: Country.SWEDEN,

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'Dedicated "researcher permit" (forskartillstånd) for non-EU scientists, plus EU Blue Card. Covers employed researchers and visiting scholars. Institutional affiliation required; self-employed researchers less well served.',
        links: [{ label: 'Swedish Researcher Permit', url: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Researcher.html', comment: 'Dedicated researcher visa — typically 1–3 month processing' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 3,
        text: 'Researcher permit typically processed in 1–3 months — faster than most EU peers. Digital application system reduces friction. Expedited pathways exist for KI and SciLifeLab-affiliated applicants.',
        links: [],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 4,
        text: 'EU credentials automatically recognised. Non-EU credentials assessed by UHR (Swedish Council for Higher Education) — typically 2–4 months, with a well-defined process. Major-university PhDs generally fast-tracked.',
        links: [{ label: 'UHR Credential Assessment', url: 'https://www.uhr.se/en/start/recognition-and-assessment-of-foreign-qualifications/', comment: 'Swedish authority for foreign credential recognition' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 3,
        text: 'Researcher permit fee is low (~SEK 2,000 / €175). Income thresholds calibrated to academic salaries — postdocs qualify on standard permit. High cost of living in Stockholm partially offsets the accessibility advantage.',
        links: [],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 3,
        text: 'Research career counts toward permanent residency (4-year pathway for most non-EU nationals). EU Blue Card holders on accelerated PR track. Active SUHF and Vinnova initiatives to retain international talent post-PhD.',
        links: [{ label: 'Swedish Migration Agency PR', url: 'https://www.migrationsverket.se/English/Private-individuals/Becoming-a-Swedish-citizen/Permanent-residence-permit.html', comment: 'Permanent residency pathway for researchers' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 3,
        text: 'EU/EEA medical licences automatically recognised under the EU Professional Qualifications Directive. Non-EU clinicians assessed by Socialstyrelsen via competency review — no full re-examination required, but supervised period needed.',
        links: [{ label: 'EU Professional Qualifications Directive', url: 'https://single-market-economy.ec.europa.eu/single-market/services/free-movement-professionals/qualifications-recognition_en', comment: 'Automatic recognition of medical qualifications across EU/EEA' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 3,
        text: 'Socialstyrelsen licensing pathway is publicly documented with published steps and expected timelines. Designated support contact available. Non-EU pathway (12–18 months) is well-defined but paperwork-heavy.',
        links: [{ label: 'Socialstyrelsen Licensing', url: 'https://www.socialstyrelsen.se/en/regler-och-riktlinjer/legitimation/', comment: 'National licensing authority — documented non-EU pathway' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 3,
        text: 'EU/EEA clinicians licensed within weeks. Non-EU clinicians typically 12–18 months from application to independent practice — reasonable by international comparison but still a meaningful barrier.',
        links: [],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 2,
        text: 'During Socialstyrelsen assessment, non-EU clinicians may work under supervision at academic hospitals. Scope is restricted to approved settings; independent practice only after full licence issuance.',
        links: [],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 4,
        text: 'ALF-funded kombinationstjänst positions allow formally contracted split between clinical and research time. Accessible to foreign-licensed clinicians at KI and major university hospitals. Active recruitment of EU clinician-researchers.',
        links: [{ label: 'ALF Funding', url: 'https://www.vr.se/english/calls-and-decisions/calls/2022-04-01-alf-funding-for-clinical-research.html', comment: 'Government-region agreement funding combined clinical-research positions' }],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'Aging biology integrated across life science and pre-med curricula at KI, Uppsala, and SciLifeLab-affiliated universities. Dedicated electives emerging. Undergraduate research placements at SciLifeLab labs available but not systematically pipeline-managed.',
        links: [{ label: 'SciLifeLab Undergraduate', url: 'https://www.scilifelab.se/education/', comment: 'SciLifeLab education programmes including undergraduate exposure' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 3,
        text: 'KI aging biology group, Uppsala University aging programme, and SciLifeLab PhD tracks offer strong aging-focused options. Absolute scale is small vs. US — ~15–25 aging-focused PhD positions per year nationally.',
        links: [{ label: 'KI Aging Research', url: 'https://ki.se/en/research/aging', comment: 'Karolinska Institutet aging research environment' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 3,
        text: 'Postdoc positions fully employed (salary + benefits) under Swedish labour law. VR and Wallenberg postdoctoral fellowships available. Career transition to faculty is structured but competitive. Small absolute numbers limit ecosystem depth.',
        links: [{ label: 'Wallenberg Foundations', url: 'https://www.wallenberg.com/en', comment: 'Major private funder of postdoc fellowships in Sweden' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 4,
        text: 'All Swedish PhD students are fully funded as employees — full salary (~SEK 30,000/month), pension, and benefits. No tuition; entirely public funding. One of the best-funded PhD models globally.',
        links: [],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 3,
        text: 'Swedish Longevity Cluster connects KI, SciLifeLab, and industry (AstraZeneca, Hansa Biopharma). ALF system links clinical and academic training. Industry-academia mobility growing but smaller scale and fewer dual-track positions than US hubs.',
        links: [{ label: 'Swedish Longevity Cluster', url: 'https://swedishlongevitycluster.se/', comment: 'Industry-academia consortium for longevity research coordination' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 4,
        text: 'Geriatrics (geriatrik) is a recognised, well-resourced medical specialty in Sweden. National workforce well above OECD median per capita. Longevity medicine increasingly visible as a sub-focus within geriatrics at KI and Uppsala.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 3,
        text: 'Aging biology and geriatric medicine integrated across clinical years at Swedish medical schools. KI curriculum includes longevity science exposure. Not fully longitudinal — basic mechanistic geroscience still underrepresented in preclinical years.',
        links: [{ label: 'KI Medical Programme', url: 'https://ki.se/en/education/programmes-and-courses/medical-programme', comment: 'Karolinska Institutet medical education with aging integration' }],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 4,
        text: 'Geriatrics residency (ST-tjänst) is well-structured and nationally standardised. Longevity prevention exposure present at academic centres. Research components standard at KI-affiliated hospitals.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 3,
        text: 'SFAM and Swedish Geriatric Society offer CME in aging medicine. Longevity-specific content (preventive geroscience, biomarkers) growing within national CME catalogue, though not yet mandated across non-geriatric specialties.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 3,
        text: 'National healthcare commission (Socialstyrelsen) tracks geriatrics workforce and publishes shortage projections. Funded training expansion programmes in place. Regional distribution planning active, though rural-urban gaps remain.',
        links: [{ label: 'Socialstyrelsen Workforce', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/statistics/statistical-databases/healthcare-personnel/', comment: 'Swedish healthcare workforce statistics and planning' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 4,
        text: 'KI has a formal combined clinical-research degree programme. The kombinationstjänst system institutionalises split clinical-research roles across all Swedish university hospitals, not just elite institutions.',
        links: [{ label: 'KI Combined Programmes', url: 'https://ki.se/en/education/graduate-education/phd-education/combined-degree-programmes', comment: 'Formal combined clinical and research training at KI' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 5,
        text: 'ALF (Avtal om Läkarutbildning och Forskning) agreements between government and regions specifically fund physician-researcher dual roles — salary parity built in. ~200 active clinician-PhD students funded nationally. No financial disincentive to research track.',
        links: [{ label: 'ALF Funding', url: 'https://www.vr.se/english/calls-and-decisions/calls/2022-04-01-alf-funding-for-clinical-research.html', comment: 'Government-region agreement: dedicated clinician-scientist funding' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 3,
        text: 'Aging tracks in clinician-scientist programmes at KI. Growing collaboration with SciLifeLab for aging biology PhDs. Not yet a nationally designated priority track across all institutions.',
        links: [],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 4,
        text: 'Kombinationstjänst contracts formally allocate 40–50% research time, funded separately from clinical budget. No performance penalty for research time. One of the most institutionalised protected-time systems globally.',
        links: [],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 4,
        text: 'Clinician-scientist career is a mainstream, well-compensated track in Swedish academic medicine. Lower income gap vs. pure clinical than in the US. Public sector employment provides career stability. Strong retention within academia.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 2,
        text: 'No dedicated ring-fenced national aging research institute. VR has aging-relevant grants within general life science portfolio. Wallenberg Foundations (~SEK 2B/year total) fund some aging biology, but this is dispersed across topics — not exclusively aging.',
        links: [{ label: 'Swedish Research Council', url: 'https://www.vr.se/english.html', comment: 'Main public funder — no dedicated aging budget line' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 4,
        text: 'No disease dominance: Swedish aging funding is distributed across basic biology (KI, SciLifeLab), clinical (ALF), and translational (Vinnova). Strong basic science tradition; hallmarks research well-represented. No Alzheimer\'s capture effect.',
        links: [{ label: 'SciLifeLab Infrastructure', url: 'https://www.scilifelab.se/', comment: 'National research infrastructure supporting aging biology across stages' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 4,
        text: 'Wallenberg programme grants run 10+ years — among the longest-horizon funding structures in Europe. VR grants typically 4 years. NEAR population cohort infrastructure funded on sustained multi-year basis. Better structural stability than most EU peers.',
        links: [{ label: 'Wallenberg Foundations', url: 'https://www.wallenberg.com/en', comment: 'Long-term programme grants — 10+ year commitments, endowment-backed' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 3,
        text: 'Wallenberg Foundations are the dominant private actors (~SEK 2B/year across all science). Swedish Longevity Cluster emerging as coordination hub. AstraZeneca co-funds select KI projects. Limited longevity VC concentration compared to US hubs.',
        links: [{ label: 'Swedish Longevity Cluster', url: 'https://swedishlongevitycluster.se/', comment: 'Growing industry-academia coordination for longevity research' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 3,
        text: 'VR (Vetenskapsrådet) explicitly funds curiosity-driven basic research without translational requirements. Wallenberg grants allow unconventional long-term bets. However, no ARPA-style radical innovation programme; Swedish funding culture is rigorous but conservative in selecting targets.',
        links: [],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 2,
        text: 'EU ATMP (Advanced Therapy Medicinal Product) framework legally permits somatic gene editing under EMA oversight, and Casgevy was approved in EU in 2023. However, the precautionary principle and multi-layer approval burden (EMA + national competent authority) make Sweden/EU significantly more restrictive than the US in practice.',
        links: [{ label: 'EMA ATMP Framework', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/advanced-therapies', comment: 'EU framework for gene therapy products — permissive in principle, burdensome in practice' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 2,
        text: 'EMA CHMP review for ATMPs typically adds 12–18 months on top of clinical data package. Swedish competent authority (MPA) involved in national assessment. No equivalent of FDA\'s 30-day IND clock. Gene therapy companies routinely run Phase 1 in US before approaching EMA.',
        links: [{ label: 'EMA CHMP Review', url: 'https://www.ema.europa.eu/en/committees/committee-medicinal-products-human-use-chmp', comment: 'Central assessment committee — slow for gene therapy applications' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 3,
        text: 'EMA has dedicated ATMP guidance and a Committee on Advanced Therapies (CAT) that includes gene editing expertise. Guidance updated periodically. EMA engages in regulatory dialogue (PRIME programme) for innovative therapies. Slower than FDA on new modalities (base editing, prime editing) but improving.',
        links: [{ label: 'EMA PRIME Scheme', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/prime-priority-medicines', comment: 'EMA early regulatory support for innovative medicines including gene therapies' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 3,
        text: 'Clinical germline editing prohibited under EU law. However, Sweden has a relatively clear framework for basic embryo research: the Genetic Integrity Act permits research on surplus IVF embryos up to 14 days under ethics committee approval. Better-defined than US, which lacks a national research ethics framework for embryos.',
        links: [{ label: 'Swedish Genetic Integrity Act', url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2006351-om-genetisk-integritet-m.m_sfs-2006-351/', comment: 'Regulates embryo research — allows basic research under ethics oversight' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 1,
        text: 'No EU or Swedish regulatory pathway for longevity-specific gene editing. EMA requires disease-defined endpoints for ATMP approval. Aging biomarkers not accepted as primary registration endpoints. No European equivalent to the FDA\'s TAME trial initiative.',
        links: [],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 2,
        text: 'No ARPA-model agency in Sweden. Vinnova (innovation agency) runs programme-based funding with some directed calls, but operates as a traditional grant agency without dedicated programme managers or milestone-based contracts. Swelife coordinates life-science strategy across agencies.',
        links: [{ label: 'Vinnova', url: 'https://www.vinnova.se/en/', comment: 'Sweden\'s innovation agency — programme-based model, not ARPA-PM model' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 2,
        text: 'No agency has an explicit longevity or healthspan mandate. VR (Swedish Research Council) and Vinnova fund aging-adjacent research but treat it as one priority among many. Swelife has a general life-science mandate without longevity-specific targets.',
        links: [{ label: 'Swelife', url: 'https://swelife.se/en/', comment: 'Strategic innovation programme — general life-science mandate, no longevity focus' }],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 3,
        text: 'VR grants, Vinnova grants, and Swelife are fully non-dilutive. Strong public grant base covers early-stage research. No co-investment or match-grant mechanisms pairing public funding with VC at scale. Horizon Europe participation adds additional non-dilutive access.',
        links: [{ label: 'VR Funding', url: 'https://www.vr.se/english/applying-for-funding.html', comment: 'Swedish Research Council — fully non-dilutive grants' }],
      },
      [BreakthroughAgencyClaim.IP_FRAMEWORK]: {
        score: 4,
        text: 'Swedish "Professor\'s Privilege" (lärarundantaget) — unlike most EU countries, individual researchers (not universities) retain IP from their research. Strong IP protection for individual inventors. Universities cannot claim IP on academic inventions — competitive advantage for recruiting and retaining entrepreneurial scientists.',
        links: [{ label: 'Swedish Teacher\'s Exception', url: 'https://www.vinnova.se/en/m/research-and-innovation/innovation-and-entrepreneurship/intellectual-property/', comment: 'Individual researchers retain IP from publicly funded research — rare globally' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 1,
        text: 'No quantified longevity, healthspan, or biological age challenges exist. Vinnova calls are broadly framed innovation priorities without specific longevity endpoints or milestones. No Swedish equivalent to NIA ITP or targeted lifespan challenge.',
        links: [],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 3,
        text: 'EMA Adaptive Pathways and PRIME designation apply through Swedish MPA. Conditional Marketing Authorisation (CMA) is a standard EMA tool available in Sweden. EMA framework is well-established but less flexible than FDA — no direct equivalent to FDA Accelerated Approval for disease-modifying agents.',
        links: [{ label: 'EMA Adaptive Pathways', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/adaptive-pathways', comment: 'EU adaptive licensing framework — fully available in Sweden through MPA' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 3,
        text: 'EMA rolling review (used prominently during COVID-19) is available for medicines of major public health interest. Allows data module submission as trials progress. Not routinely used for longevity therapies. PRIME designation provides early and enhanced scientific advice.',
        links: [{ label: 'EMA Rolling Review', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/rolling-review', comment: 'EMA rolling review — available for significant public health need' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'EMA accepts validated surrogate endpoints across disease areas for CMA. No aging-specific surrogate endpoint accepted — EMA follows same position as FDA. Aging biomarkers (epigenetic clocks, proteomics) are exploratory. Swedish register infrastructure could support endpoint validation studies.',
        links: [{ label: 'EMA Surrogate Endpoints', url: 'https://www.ema.europa.eu/en/documents/scientific-guideline/ich-e10-choice-control-group-and-related-issues-clinical-trials-step-5_en.pdf', comment: 'EMA guidance on surrogate endpoints in clinical trials' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 4,
        text: 'EMA Conditional Marketing Authorisation explicitly requires post-market confirmatory data within defined timeframes. Well-enforced: failure to submit confirmatory data triggers suspension. PASS (Post-Authorisation Safety Studies) mandatory for many approvals. Robust European pharmacovigilance system.',
        links: [{ label: 'EMA CMA', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/conditional-marketing-authorisation', comment: 'CMA — post-market confirmatory data required within defined timeframe' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 2,
        text: 'No Right to Try law. Compassionate use via EMA named patient and Swedish MPA expanded access programmes. Access is case-by-case, physician-initiated, and requires MPA approval. No systematic right for patients; company participation voluntary. Slower and less structured than FDA expanded access.',
        links: [{ label: 'EMA Compassionate Use', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/compassionate-use', comment: 'EU compassionate use framework — applies in Sweden via MPA' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 3,
        text: 'EMA adaptive design guidance (2007, updated 2016) applies in Sweden. Biomarker-adaptive enrichment and seamless Phase 2/3 designs accepted. EMA scientific advice available pre-trial. Less proactive engagement than FDA on novel designs; EMA guidance is more conservative and requires earlier alignment.',
        links: [{ label: 'EMA Adaptive Design Guidance', url: 'https://www.ema.europa.eu/en/documents/scientific-guideline/reflection-paper-methodological-issues-confirmatory-clinical-trials-planned-adaptive-design_en.pdf', comment: 'EMA reflection paper on adaptive designs in confirmatory trials' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 4,
        text: 'World-class position: Swedish national registers (patient register, prescription, cause-of-death, cancer register) are linked by personal ID number and are among the richest globally for synthetic control arm construction. EMA RWE framework accepts external controls in defined contexts. MONA and SciLifeLab infrastructure support analysis.',
        links: [{ label: 'Swedish National Registers', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/registers/', comment: 'Comprehensive linked population registers — world-class for synthetic control construction' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'EMA DCT reflection paper (2022) applies across EU including Sweden. Home nursing visits, local lab draws, and telemedicine allowed as DCT elements. Swedish primary care integration with digital health records facilitates remote data collection. No Sweden-specific accelerated DCT framework beyond EU level.',
        links: [{ label: 'EMA DCT Reflection Paper', url: 'https://www.ema.europa.eu/en/documents/scientific-guideline/reflection-paper-decentralised-elements-clinical-trials_en.pdf', comment: 'EMA 2022 guidance on decentralised clinical trial elements' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 2,
        text: 'Platform and master protocols accepted under EMA guidance but less developed in Swedish practice than FDA context. No major Swedish-led aging or longevity platform trial. Participation in EU platform trials (e.g., RECOVERY, EU-TRIAL-NETWORK) possible. National scale too small for independent multi-arm platform designs.',
        links: [{ label: 'EMA Master Protocol Guidance', url: 'https://www.ema.europa.eu/en/documents/scientific-guideline/reflection-paper-use-master-protocols-oncology-clinical-drug-development_en.pdf', comment: 'EMA guidance on master protocols in oncology — framework for broader use' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 4,
        text: 'Sweden\'s linked register infrastructure is world-leading for RWE generation. Register data feeds into pharmacoepidemiology studies, comparative effectiveness research, and EMA post-market surveillance. Swedish data used in multiple EMA PASS and regulatory submissions. Cross-register linkage at personal ID level enables longitudinal RWE rarely possible elsewhere.',
        links: [{ label: 'MONA Platform', url: 'https://www.scb.se/en/services/research-and-statistics/mona/', comment: 'Secure remote access platform for linked Swedish register analysis' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 1,
        text: 'No formal regulatory sandbox in Sweden. EU regulatory sandbox discussions are ongoing (EU Life Sciences Strategy 2021) but not yet implemented. Sweden has no national health innovation sandbox at MPA or Vinnova level.',
        links: [],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 1,
        text: 'No sandbox covering drugs, biologics, ATMPs, or gene therapies. EMA Adaptive Pathways and hospital exemption for ATMPs provide limited flexibility but operate as regulatory pathways, not sandboxes with safe-harbour provisions.',
        links: [],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 1,
        text: 'No sandbox allowing structured patient participation outside standard clinical trial frameworks. Hospital exemption for ATMPs allows hospital-prepared therapies for individual patients but is limited to that context and not a sandbox model.',
        links: [{ label: 'EMA ATMP Hospital Exemption', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/advanced-therapy-medicinal-products/hospital-exemption', comment: 'Limited hospital-prepared ATMP flexibility — not a sandbox' }],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 1,
        text: 'No legal safe harbour for sandbox participants. Standard product liability, professional liability, and EU pharmaceutical law apply fully. No indemnity framework or liability shield for experimental interventions outside registered trials.',
        links: [],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 1,
        text: 'No sandbox mechanism applicable to longevity or preventive aging interventions. Healthspan and biological age applications have no defined exploratory pathway outside standard EU/EMA clinical trial requirements.',
        links: [],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'EMA accepts disease-specific surrogate endpoints but has no aging or healthspan endpoint guidance. Aging biomarkers (epigenetic clocks, proteomics, functional composites) are exploratory at EMA level. Swedish register-based outcomes (mortality, hospitalisation, multimorbidity) could serve as hard endpoints for aging indications but no formal acceptance established.',
        links: [{ label: 'EMA Biomarker Qualification', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/biomarkers-clinical-development', comment: 'EMA biomarker framework — no aging-specific endpoints qualified' }],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 2,
        text: 'EMA Biomarker Qualification Procedure exists for formal surrogate qualification. No aging biomarker has been submitted or qualified. Process requires consortium-level evidence and multi-year timelines. No expedited track for aging-specific biomarkers. EMA and FDA have aligned through ICH but neither has initiated aging endpoint qualification.',
        links: [{ label: 'EMA Qualification Procedure', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/scientific-advice-protocol-assistance/qualification-novel-methodologies', comment: 'EMA biomarker qualification procedure — multi-year consortium process' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'EMA guidance on co-development of therapeutics and companion diagnostics exists but is oriented toward treatment selection (oncology), not aging endpoint qualification. No dedicated framework for co-developing novel aging biomarker endpoints alongside longevity therapies. Swedish MPA participates in EMA scientific advice but has no national co-development initiative.',
        links: [{ label: 'EMA CDx Co-development', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/companion-diagnostics', comment: 'EMA companion diagnostic co-development guidance' }],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 5,
        text: 'World-class: Swedish national registers (patient, prescription, cause-of-death, cancer, quality registers) are linked by personal ID number and cover the full population longitudinally. SATSA/Twin Registry, SNAC-K/SNAC-N, BioFINDER, and Genome Sweden provide deep phenotyping. Biobank Sweden links 27 regional biobanks. Unmatched as a reference infrastructure for aging biomarker validation and synthetic control construction.',
        links: [
          { label: 'Biobank Sweden', url: 'https://biobanksverige.se/en/', comment: 'Network of 27 regional biobanks — world-class for aging biomarker reference populations' },
          { label: 'Swedish National Registers', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/registers/', comment: 'Full-population longitudinal registers linked by personal ID — reference infrastructure for aging endpoints' },
        ],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 3,
        text: 'Genome Sweden and SciLifeLab are driving biomarker assay standardisation nationally. National quality registers (over 100) use standardised data definitions. BioFINDER has established protocols for Alzheimer biomarkers now adopted internationally. Aging-specific endpoint standardisation less advanced — no national consensus on epigenetic clock or proteomics reference panels for trial use.',
        links: [{ label: 'Genome Sweden', url: 'https://genomsverige.se/en/', comment: 'National genome capacity — pushing standardisation of genomic and proteomic assays' }],
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

      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: 2,
        text: 'No national sarcopenia screening programme. DEXA is available via referral for osteoporosis indication. BIA available in some rehabilitation and geriatric settings. The Swedish National Board of Health and Welfare does not have a sarcopenia screening recommendation. Opportunistic assessment occurs in geriatric medicine.',
        links: [{ label: 'Socialstyrelsen – Osteoporosis Screening', url: 'https://www.socialstyrelsen.se/', comment: 'DEXA funded for osteoporosis — not sarcopenia' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: 2,
        text: 'No national screening programme for sleep apnoea. High-risk groups (e.g. drivers, patients with treatment-resistant hypertension) are typically screened by specialist referral. Home sleep testing (polygraphy) is available but requires clinical indication. No universal population offer.',
        links: [{ label: 'Swedish Sleep Society', url: 'https://www.sosf.se/', comment: 'Swedish professional society for sleep disorders' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 4,
        text: 'Socialstyrelsen publishes National Guidelines that can update on a 2–3 year basis. Regional HTA bodies (SBU) conduct rapid evidence reviews. Pilots are routinely funded through SBU or regional research arms. Sweden participates in EU Best Practice Portal and IAEA/WHO screening evaluations.',
        links: [
          { label: 'Socialstyrelsen – National Guidelines', url: 'https://www.socialstyrelsen.se/regler-och-riktlinjer/nationella-riktlinjer/', comment: 'Swedish national clinical guidelines — update process' },
          { label: 'SBU – Swedish Agency for HTA', url: 'https://www.sbu.se/en/', comment: 'HTA body producing rapid and full evidence reviews' },
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
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'Sweden has no centralised national patient-facing trial matching portal, but the infrastructure for EHR-based identification is world-class. Register-based RCTs demonstrate that national registers can identify and contact eligible patients. Uppsala CRC and NEAR provide eligibility matching tools for researchers. No systematic nationwide proactive patient notification.',
        links: [
          { label: 'Uppsala Clinical Research Center – Recruitment', url: 'https://www.ucr.uu.se/en/', comment: 'EHR-based patient identification for trials' },
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
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 3,
        text: 'Single-window digital application via Socialstyrelsen/SCB. Decisions typically within 2–4 weeks for approved research institutions. Ethics board approval required separately, but the data access workflow itself is streamlined by international standards.',
        links: [{ label: 'Socialstyrelsen Register Access', url: 'https://www.socialstyrelsen.se/en/statistics-and-data/registers/', comment: 'Swedish national health registers — single agency, comparatively fast' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 4,
        text: 'The personnummer (personal identity number) enables near-perfect deterministic linkage across all national registers: cancer registry, hospital discharge, prescriptions, cause of death, and biobanks. Cross-domain linkage is the norm, not the exception.',
        links: [{ label: 'Swedish Biobank Register', url: 'https://biobanksverige.se/english/', comment: 'Biobanks linked to registers via personnummer — gold-standard linkability' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 4,
        text: 'MONA (SCB) provides a best-in-class TRE: code-to-data, remote analysis, statistical disclosure control on all outputs, data never exported. Equivalent to SAIL / OpenSAFELY tier. Synthetic data generation not yet systematically offered; federated compute limited.',
        links: [{ label: 'MONA Secure Environment', url: 'https://www.scb.se/en/services/research-and-statistics/mona/', comment: 'Code-to-data TRE — data never leaves the secure environment' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 3,
        text: 'AI use on register data is not prohibited but no dedicated AI researcher tier exists. Ethics review required case-by-case for large-scale ML applications. GDPR creates some ambiguity for model training; no fast-track or pre-approved model classes.',
        links: [],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 3,
        text: 'Intra-EU sharing covered by GDPR adequacy framework. Sweden is an active EHDS (European Health Data Space) participant. Non-EU sharing requires bilateral DUA. No federated cross-border compute infrastructure yet.',
        links: [{ label: 'European Health Data Space', url: 'https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en', comment: 'EHDS — EU-level health data sharing framework, Sweden participates' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 4,
        text: 'Inera manages national digital health infrastructure (NPÖ, Pascal, Journalen). EHR adoption is near-universal; national data elements are mandated and audited. Structured SDOH not yet systematically required.',
        links: [{ label: 'Inera', url: 'https://www.inera.se/en/', comment: 'National health IT infrastructure — enforced standards across all regions' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 3,
        text: 'FHIR-based national APIs deployed by Inera. SNOMED CT actively being adopted (Sweden is a member nation). ICD-10-SE and LOINC used consistently. More uniform than fragmented US market but full SNOMED CT coverage not yet complete.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 5,
        text: 'Among the best in the world. Patient register, cancer register, cause-of-death register, prescribed drug register, birth register, and 100+ disease-specific quality registries — all linked via personnummer. Coverage is near-complete for the entire population since the 1960s.',
        links: [{ label: 'Swedish Quality Registries', url: 'https://www.kvalitetsregister.se/englishpages.2788.html', comment: '100+ disease-specific quality registries linked via personnummer' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 3,
        text: 'Major registers (patient, prescriptions) updated quarterly; some with 3–6 month lag. Research extracts via MONA typically based on semi-annual or annual cuts. NPÖ provides near-real-time clinical access for care, not research.',
        links: [],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 3,
        text: 'Strong foundation: ICD/SNOMED linkage via personnummer enables cross-registry cohort queries. Some validated phenotype algorithms available (cardiovascular, diabetes). National phenotype library not yet formalised; OMOP CDM being piloted at some centres.',
        links: [],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 3,
        text: 'Personnummer provides a shared patient identifier across research and clinical data. SNOMED CT adoption underway nationally. OMOP CDM being piloted at major academic centres (KI, Uppsala). Full automated join between arbitrary research datasets and clinical registries not yet routine.',
        links: [{ label: 'SciLifeLab Data Centre', url: 'https://www.scilifelab.se/data/', comment: 'National research data infrastructure — FAIR data and ontology harmonisation efforts' }],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 4,
        text: 'Personnummer enables near-automatic linkage of research cohort participants to all national registers (mortality, hospitalisation, prescriptions, cancer). Swedish biobank research routinely uses this — participants enrolled in studies are followed in registries for decades. Standard ethics consent framework covers longitudinal follow-up.',
        links: [{ label: 'Swedish Twin Registry', url: 'https://ki.se/en/meb/the-swedish-twin-registry', comment: 'Classic example: research cohort with full register follow-up via personnummer' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 3,
        text: 'SciLifeLab Data Centre promotes FAIR principles for life science data. Swedish Research Council mandates data management plans for funded research. Repositories (SciLifeLab Data Repository, EGA Sweden) available. Enforcement and metadata quality auditing not yet systematic.',
        links: [{ label: 'SciLifeLab Data Repository', url: 'https://www.scilifelab.se/data/repository/', comment: 'National life science data repository — FAIR-aligned' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 3,
        text: 'Medical Products Agency (MPA/Läkemedelsverket) runs active pharmacovigilance via EudraVigilance. Swedish Pharmacovigilance network can trigger register-based studies using personnummer linkage. Signal-to-study pipeline is possible but not fully automated.',
        links: [{ label: 'Läkemedelsverket Pharmacovigilance', url: 'https://www.lakemedelsverket.se/en/safety-and-inspections/report-adverse-events', comment: 'MPA pharmacovigilance — EudraVigilance linked, register studies possible' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 3,
        text: 'Swedish Research Council requires data management plans and open access publication for funded research. Clinical trial registration in EU CTR or ClinicalTrials.gov required. Results reporting compliance is higher than EU average. Code sharing encouraged but not mandated. Nordic Trial Alliance promotes harmonised reporting.',
        links: [{ label: 'Swedish Research Council Open Science', url: 'https://www.vr.se/english/mandates/open-science.html', comment: 'National open science mandate — covers data and publication' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 4,
        text: 'As an EU member state, Sweden operates under the EU Clinical Trials Regulation — trial data generated anywhere in the EU is accepted for marketing authorisation across all member states without replication. EMA accepts multi-regional clinical trial data including from ICH partner regions. MPA applies EMA decisions directly.',
        links: [{ label: 'EU Clinical Trials Regulation', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/clinical-trials-human-medicines/clinical-trials-regulation', comment: 'Single EU-wide clinical trial authorisation — data accepted across 27 member states' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 3,
        text: 'Swedish MPA is an EMA reference member state and co-rapporteur for multiple marketing authorisation applications, participating in formal joint reviews at EU level. MPA participates in CHMP, CVMP, and PRAC. Sweden joined ACCESS Consortium (Canada, Australia, Singapore, Switzerland) for joint review of select therapies.',
        links: [{ label: 'Swedish MPA', url: 'https://www.lakemedelsverket.se/en/', comment: 'EMA reference member state — co-rapporteur in EU joint reviews' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'Sweden is ICH member through EU participation. Full ICH E6 GCP, GMP, and quality standards implemented. MPA has a strong reputation in EU regulatory committees as a scientifically rigorous member. Swedish regulatory science contributes to shaping EMA guidelines via expert working group participation.',
        links: [{ label: 'EMA ICH Guidelines', url: 'https://www.ema.europa.eu/en/ich-guidelines', comment: 'ICH guidelines implemented in EU — Sweden fully aligned via EMA' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'EMA Decentralised Procedure and Mutual Recognition Procedure mean that approval in one EU state can be extended to Sweden without full re-review. EMA/MHRA work-sharing arrangements post-Brexit allow some reliance on UK decisions. No automatic reliance on FDA decisions, but PRIME and Breakthrough designation alignment exists.',
        links: [{ label: 'EMA Mutual Recognition Procedure', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/mutual-recognition-procedure', comment: 'EU approval in one state recognised across member states — Sweden benefits' }],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 5,
        text: 'Full EU mutual recognition framework covering 27 member states plus EEA countries. EU–US MRA for GMP inspections applies to Sweden. EU MRAs with Switzerland, Japan, Australia, Canada cover inspection and GMP. EU is the world\'s most extensive multilateral pharmaceutical recognition network.',
        links: [{ label: 'EU Pharmaceutical MRAs', url: 'https://www.ema.europa.eu/en/partners-networks/international-activities/bilateral-regulatory-programmes/pharmaceutical-regulatory-programmes', comment: 'EU bilateral regulatory programmes — GMP and inspection MRAs worldwide' }],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'Sweden has BSL-3 facilities at KI, Uppsala University, and the Public Health Agency of Sweden (FoHM). BSL-4 facility exists at FoHM (Solna) — one of a few in the Nordic region. SciLifeLab nodes include containment infrastructure. Accessible to academic researchers via proposal, with formal access procedures. Smaller absolute capacity than US.',
        links: [{ label: 'Public Health Agency Sweden', url: 'https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/', comment: 'FoHM — houses BSL-4 facility in Solna; national reference laboratory' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 3,
        text: 'AstraZeneca\'s Södertälje manufacturing hub provides large-scale GMP capacity. Academic GMP suites at KI and Sahlgrenska. SciLifeLab Drug Discovery and Development platform supports early-stage GMP. Smaller CDMO ecosystem than US/Germany. Cell and gene therapy GMP emerging but limited.',
        links: [{ label: 'SciLifeLab Drug Discovery', url: 'https://www.scilifelab.se/capabilities/drug-discovery-and-development/', comment: 'National drug discovery platform including GMP support for academic groups' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'NAISS (National Academic Infrastructure for Supercomputing in Sweden) provides national HPC/AI infrastructure — Dardel at KTH, Alvis GPU cluster at Chalmers, Berzelius AI cluster at NSC. ELIXIR-SE integrates this into European bioinformatics infrastructure. Competitive allocation, purpose-built for research. Among the best in Europe per capita.',
        links: [{ label: 'NAISS', url: 'https://www.naiss.se/', comment: 'National Academic Infrastructure for Supercomputing — HPC/GPU for research' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 4,
        text: 'Genome Sweden programme targeting 100k+ genomes linked to national registers. SciLifeLab Genomics platform provides national sequencing capacity (short- and long-read). National Genomics Infrastructure (NGI) at SciLifeLab serves academic researchers nationally. Among the highest per-capita sequencing capacity in the world.',
        links: [{ label: 'Genome Sweden', url: 'https://genomsverige.se/en/', comment: 'National genome sequencing programme — 100k+ target, linked to registers' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 2,
        text: 'No dedicated national aging model organism platform equivalent to NIA ITP. Individual aging biology labs maintain model organism colonies (KI, Uppsala). SciLifeLab Genome Engineering Zebrafish platform is shared. Small national scale limits the scope of multi-site aging intervention programmes.',
        links: [{ label: 'SciLifeLab Zebrafish', url: 'https://www.scilifelab.se/capabilities/genome-engineering/', comment: 'Zebrafish genome engineering platform — not aging-specific' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 4,
        text: 'Sweden leads or co-leads major international aging consortia: INTERVENE (federated genomics + lifestyle), EPAD (Alzheimer\'s prevention), UK Biobank consortium membership, BioFINDER (international AD biomarker standard-setter). SciLifeLab is a node in Human Cell Atlas, ENCODE, and ELIXIR. Nordic collaboration formalised through NordForsk.',
        links: [
          { label: 'INTERVENE Consortium', url: 'https://www.interveneproject.eu/', comment: 'EU-funded federated genomics and longevity risk consortium — KI as core partner' },
          { label: 'NordForsk', url: 'https://www.nordforsk.org/', comment: 'Nordic research funding body — formalises multi-country aging collaboration' },
        ],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 4,
        text: 'Sweden is GDPR-compliant with well-developed research data access procedures. ELIXIR-SE provides FAIR data infrastructure. Federated analysis enabled via MONA (Statistics Sweden) and SciLifeLab secure compute. GA4GH frameworks adopted by Genome Sweden. Swedish register data accessible to international researchers under formal data access agreements.',
        links: [{ label: 'ELIXIR-SE', url: 'https://www.scilifelab.se/elixir-sweden/', comment: 'European bioinformatics infrastructure node — FAIR data and federated analysis' }],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 5,
        text: 'Full Horizon Europe participation — Swedish researchers access the world\'s largest public research funding programme. NordForsk provides Nordic multilateral co-funding. Bilateral R&D agreements with US (through NSF-VR partnership), Japan, and Canada. VR co-funds with international partners. Swedish researchers eligible for NIH foreign co-investigator roles.',
        links: [{ label: 'Horizon Europe in Sweden', url: 'https://www.vr.se/english/calls-and-decisions/eu-research-funding/horizon-europe.html', comment: 'VR coordinates Swedish participation in Horizon Europe' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 4,
        text: 'Sweden punches well above its weight in global longevity science. BioFINDER (Lund) is the global reference for Alzheimer biomarker standardisation. KI is top-20 global life science institution by citation impact. Human Protein Atlas (Uppsala/KTH) is cited in >20k publications. Swedish researchers hold multiple editorships and society leadership roles in aging journals.',
        links: [{ label: 'BioFINDER', url: 'https://biofinder.se/', comment: 'Lund University — global standard-setter for AD biomarker discovery and validation' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 4,
        text: 'Full PCT membership and active patent prosecution culture. Swedish "Professor\'s Privilege" (lärarundantaget) — individual researchers retain IP from publicly funded research, unlike most EU countries where universities own IP. Strong tech transfer offices at KI, Uppsala, and Chalmers. EU-harmonised patent system via EPO membership.',
        links: [{ label: 'Sweden EPO Member', url: 'https://www.epo.org/about-us/foundation/member-states/se.html', comment: 'European Patent Office membership — harmonised patent protection across EU' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 5,
        text: 'Sweden consistently ranks among the top countries globally for trust in science and public institutions. Eurobarometer surveys show ~75–80% of Swedes trust scientists. Trust in healthcare, government, and research institutions is a defining feature of Swedish civil society. High baseline makes longevity science acceptance substantially easier.',
        links: [{ label: 'Eurobarometer Science Trust', url: 'https://europa.eu/eurobarometer/surveys/detail/2237', comment: 'Sweden among highest EU countries for institutional and scientific trust' }],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 3,
        text: 'Sweden\'s welfare state tradition frames healthy aging as a public good — not a luxury. Preventive medicine is mainstream; longevity research is increasingly visible through the Swedish Longevity Cluster and KI outreach. However, longevity extension as a distinct societal goal (beyond disease prevention) is not yet a mainstream political or cultural concept in Sweden.',
        links: [{ label: 'Swedish Longevity Cluster', url: 'https://swedishlongevitycluster.se/', comment: 'Industry-academia longevity cluster — raising public awareness of longevity research' }],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 2,
        text: 'No explicit national longevity strategy or dedicated programme. Healthy aging features in broader welfare and eldercare policy but is not elevated as a longevity science priority. VR and Vinnova fund aging-adjacent research without longevity mandates. No cross-party political momentum for longevity as a distinct policy axis.',
        links: [{ label: 'Swedish Life Science Strategy', url: 'https://www.government.se/government-policy/life-science/', comment: 'National life science strategy — mentions aging but no longevity-specific mandate' }],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 3,
        text: 'Läkemedelsverket (Swedish MPA) enforces EU cosmetics regulations strictly — cosmetics cannot carry systemic anti-aging claims without reclassification as drugs. Reklamombudsmannen proactively reviews and removes unsubstantiated anti-aging claims. The Swedish Medical Association has issued guidelines against members promoting unproven interventions, and IVO can sanction healthcare providers for pseudoscientific practice. The supplement and "biohacking" market is smaller and less aggressive than in the US or UK.',
        links: [
          { label: 'Läkemedelsverket – Cosmetics Regulation', url: 'https://www.lakemedelsverket.se/en/cosmetics', comment: 'Swedish MPA — systemic anti-aging claims trigger drug classification' },
          { label: 'Reklamombudsmannen', url: 'https://www.reklamombudsmannen.se/', comment: 'Swedish advertising standards — proactive review; removes unsubstantiated claims' },
        ],
      },
    },
  },
}

export default sweden
