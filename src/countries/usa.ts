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

const usa: CountryData = {
  country: Country.USA,

  metrics: {
    lifeExpectancy: { value: 78.4, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 63.9, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.245, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'O-1A (extraordinary ability) and EB-1A (outstanding researcher) are well-established researcher-specific categories. The EB-2 NIW is increasingly used by longevity researchers. Covers a wide range of career stages but still employer-tied.',
        links: [{ label: 'USCIS O-1A Visa', url: 'https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement', comment: 'Primary researcher visa category' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 2,
        text: 'Standard O-1A processing takes 3–6 months. Premium processing (15 business days) costs $2,805 — a significant burden for postdocs and early-career researchers seeking expedited entry.',
        links: [{ label: 'USCIS Processing Times', url: 'https://egov.uscis.gov/processing-times/', comment: 'Current USCIS processing time tracker' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 4,
        text: 'Foreign academic credentials are recognised for NIH grants and federal employment. No centralised re-accreditation required — institution-level evaluation is standard and typically fast for top-university PhDs.',
        links: [],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 2,
        text: 'O-1A requires demonstrated "extraordinary ability" — a high bar for postdocs. Legal fees ($3–8k) and long timelines effectively exclude early-career researchers. J-1 is cheaper but carries a 2-year home-residency obligation.',
        links: [{ label: 'J-1 Exchange Visitor Program', url: 'https://j1visa.state.gov/', comment: 'Common pathway for postdocs — but home residency requirement is a barrier' }],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 2,
        text: 'Green card backlog for Indian and Chinese nationals (the two largest researcher cohorts) stretches decades via EB-2/EB-3. EB-1A is faster but hard to qualify for. Many researchers leave for Canada or Europe rather than wait.',
        links: [{ label: 'USCIS Employment-Based Green Cards', url: 'https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-employment-based-immigrants', comment: 'Employment-based permanent residency — multi-decade backlog for high-demand nationalities' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 2,
        text: 'The US does not recognise any foreign medical licences. All foreign-trained physicians must complete full US residency regardless of prior experience. ECFMG certification + USMLE Steps 1–3 required as prerequisites.',
        links: [{ label: 'ECFMG Certification', url: 'https://www.ecfmg.org/', comment: 'Required for all foreign medical graduates before US residency' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 3,
        text: 'ECFMG + USMLE + NRMP matching is a well-documented, standardised pathway. Timelines and requirements are publicly available. Dedicated advisory services exist, though navigating state-by-state variation adds friction.',
        links: [{ label: 'ECFMG Pathway', url: 'https://www.ecfmg.org/certification/applying-for-ecfmg-certification.html', comment: 'Documented multi-step pathway for foreign medical graduates' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 1,
        text: 'End-to-end licensure from arrival to independent practice (ECFMG + residency matching + state licence) realistically takes 3–7 years — among the longest pipelines of any high-income country.',
        links: [],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 1,
        text: 'Foreign clinicians cannot practice at all prior to ECFMG certification and residency matching. No provisional licence exists for internationally trained physicians outside narrow J-1 exchange slots.',
        links: [],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 3,
        text: 'Academic medical centres (Harvard, Hopkins, Mayo, UCSF) offer well-structured combined research-practice contracts. However, these positions are concentrated in elite institutions and not accessible as a general pathway for foreign clinicians.',
        links: [],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'Aging biology integrated across pre-med and life science curricula at research universities. Dedicated geroscience electives at schools near aging research hubs (USC, UCSF, UW). Undergrad research opportunities in aging labs widely available via NIH SURF and similar programmes.',
        links: [{ label: 'NIH Summer Research Fellowship', url: 'https://www.training.nih.gov/programs/sip', comment: 'NIH undergraduate summer research — many placements in aging labs' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 4,
        text: 'World-class aging PhD ecosystem: USC Leonard Davis, Buck Institute, Mayo, UW, Harvard, Stanford. NIA Nathan Shock Centers run formal T32 training grants exclusively in aging biology at 6+ institutions. Multiple top-ranked programmes with strong global recruitment.',
        links: [{ label: 'NIA Nathan Shock Centers', url: 'https://www.nia.nih.gov/research/dab/nathan-shock-centers-excellence-biology-aging', comment: '6 NIA-funded aging biology training centers' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 3,
        text: 'NIH postdoctoral fellowships (F32, T32 postdoc slots) fund aging-focused postdocs at $58k–70k/year. Career transition awards (K99/R00) exist. However, postdoc positions remain precarious relative to cost of living in major biotech hubs.',
        links: [{ label: 'NIH Postdoctoral Fellowships', url: 'https://researchtraining.nih.gov/programs/fellowships', comment: 'F32 and T32 postdoc funding mechanisms' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 3,
        text: 'NIA T32 training grants cover stipends ($26k–34k/year) for both PhD students and postdocs. Over 60 active aging-focused T32 grants nationally. Highly competitive; not all qualified trainees receive support.',
        links: [{ label: 'NIH T32 Training Grants', url: 'https://researchtraining.nih.gov/programs/training-grants', comment: 'NIH training grant mechanism funding PhD and postdoc stipends' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 4,
        text: 'Strong biotech clusters (Boston, Bay Area, San Diego) create dense industry-academia pipelines. NIH BEST program funds industry rotations for PhD trainees. Buck Institute has formal Genentech/AbbVie collaborations. Dual appointments common in longevity biotech.',
        links: [{ label: 'NIH BEST Program', url: 'https://commonfund.nih.gov/BEST', comment: 'Broadening Experiences in Scientific Training — industry rotations for PhD students' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 3,
        text: 'Geriatrics is a recognised ABIM subspecialty with a structured fellowship pathway. ~300 new geriatricians certified annually — chronically below workforce demand. Prestige and compensation lag behind other internal medicine subspecialties.',
        links: [{ label: 'ABIM Geriatric Medicine', url: 'https://www.abim.org/certification/policies/internal-medicine-subspecialty-policies/geriatric-medicine/', comment: 'American Board of Internal Medicine geriatrics certification pathway' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 2,
        text: 'Geriatrics rotations required in most US medical schools but vary widely in quality and duration. Aging biology (mechanistic geroscience) largely absent from basic science years. Association of American Medical Colleges standards do not mandate longitudinal aging content.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 3,
        text: 'Geriatrics fellowship (1 year post-residency) is ACGME-accredited across many academic centres. Exposure to preventive and longevity-oriented care varies significantly by programme. Research components present at major academic centres.',
        links: [{ label: 'ACGME Geriatric Medicine', url: 'https://www.acgme.org/specialties/geriatric-medicine/overview/', comment: 'ACGME-accredited geriatrics fellowship programme requirements' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 2,
        text: 'CME in geriatrics broadly available (AGS, AMDA). Longevity medicine-specific CME (preventive geroscience, biomarkers, longevity interventions) is emerging but not yet standardised. No national mandate for aging CME outside geriatrics specialty.',
        links: [{ label: 'AGS Annual Meeting CME', url: 'https://www.americangeriatrics.org/education-and-career/education/cme', comment: 'American Geriatrics Society continuing medical education' }],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 2,
        text: 'HRSA projects severe geriatrics shortage by 2030. National plan exists on paper but training expansion has been slow. Fellowship fill rates are low (<50% at many programmes). No funded emergency expansion programme.',
        links: [{ label: 'HRSA Geriatrics Workforce', url: 'https://bhw.hrsa.gov/data-research/projecting-health-workforce-supply-demand/geriatrics', comment: 'Federal workforce projections showing deepening geriatrics shortage' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 4,
        text: 'NIH MSTP (Medical Scientist Training Program) funds MD–PhD training at 49 institutions, ~170 new students/year. The largest and most structured national MD–PhD programme globally. Multiple aging-focused tracks available.',
        links: [{ label: 'NIH MSTP', url: 'https://www.nigms.nih.gov/Training/InstPredoc/Pages/PredocOverview-MSTP.aspx', comment: 'Federally funded MD–PhD programme at 49 institutions, $178M/year' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 4,
        text: 'MSTP provides full tuition waiver + stipend (~$34k/year) for 7–8 year programmes, completely publicly funded through NIH. K08/K23 career development awards extend public support post-degree. Salary parity with pure clinical tracks not achieved.',
        links: [{ label: 'NIH Career Development Awards', url: 'https://researchtraining.nih.gov/programs/career-development', comment: 'K-series awards providing protected research time for clinician-scientists post-degree' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 3,
        text: 'Aging/longevity tracks at MSTP programmes at Mayo, UCSF, Columbia, UW. Paul Glenn Foundation funds aging-focused MD–PhD fellowships. Growing but not yet a systematically resourced national priority track.',
        links: [{ label: 'Glenn Foundation Fellowships', url: 'https://glennfoundation.org/', comment: 'Private funder of aging-focused clinician-scientist training' }],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 3,
        text: 'K08/K23 awards fund 75% protected research time for 3–5 years in academic centres. Standard for junior clinician-scientists but requires competitive renewal; clinical income gap creates pressure to drift toward full clinical roles.',
        links: [],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 3,
        text: 'Clinician-scientist career is viable at major academic medical centres but remains a niche path nationally. Clinical debt pressure and income gap vs. pure clinical practice causes significant mid-career attrition. Compensation at research-active institutions improving.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 5,
        text: 'NIA (National Institute on Aging) has a standalone $4.06B budget in FY2023 — the world\'s largest dedicated aging research funder by a wide margin. Independent institute within NIH with its own protected mandate and budget line.',
        links: [{ label: 'NIA Budget', url: 'https://www.nia.nih.gov/about/budget', comment: '$4.06B FY2023 — world-leading' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 2,
        text: '~70% of NIA\'s budget goes to Alzheimer\'s/ADRD, leaving ~$1.2B for all other aging biology. Basic aging mechanisms (hallmarks, senolytics, epigenetic clocks) are chronically underfunded. Nathan Shock Centers protect some basic science but represent <1% of NIA budget.',
        links: [{ label: 'NIA Alzheimer\'s Funding', url: 'https://www.nia.nih.gov/research/alzheimers-dementia', comment: 'AD/ADRD budget dominates; basic biology underfunded' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 3,
        text: 'NIH R01 grants run 5 years, renewable. P01 programme projects can extend 10+ years. However, 20% funding rates and annual Congressional appropriations uncertainty create meaningful short-termism. Political variance in NIH appropriations has grown.',
        links: [],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 4,
        text: 'Bayh-Dole (1980): universities, non-profits, and small businesses may elect to retain title to inventions from federally funded research; standard practice assigns rights to the grantee institution with inventor royalty-sharing policies. Strong TTO ecosystem and predictable licensing to spinouts. Does not mean individual faculty hold patents personally — the grantee institution is the default assignee.',
        links: [{ label: 'Bayh-Dole Act', url: 'https://www.nist.gov/tpo/bayh-dole-act', comment: 'Grantee may retain title; typical university policy assigns to institution with inventor share' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 4,
        text: 'Strong private ecosystem: Glenn Foundation (~$100M/year aging), Bezos-backed Altos Labs ($3B), Milner-backed Arc Institute. Dense longevity VC cluster in Bay Area and Boston (Calico, Unity, Ora, NewLimit). NIH public-private partnership mechanisms active.',
        links: [{ label: 'Glenn Foundation', url: 'https://glennfoundation.org/', comment: 'Dedicated aging philanthropy — major co-funder of academic aging labs' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 3,
        text: 'NIH Director\'s Pioneer Award and New Innovator Award fund unconventional ideas (~$250M/year combined). ARPA-H (est. 2022) specifically targets transformative biomedical research. However, mainstream R01 peer review heavily favors established paradigms — unconventional longevity targets face high rejection rates.',
        links: [{ label: 'ARPA-H', url: 'https://arpa-h.gov/', comment: 'Advanced Research Projects Agency for Health — $1.5B FY2023' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 4,
        text: 'FDA leads globally in somatic gene editing approvals. Casgevy (CRISPR, sickle cell/beta-thalassemia) approved Dec 2023 — first CRISPR therapy anywhere. Multiple active INDs across oncology, metabolic disease, and rare conditions. Dedicated OTAT (Office of Therapeutic Products) with gene editing expertise.',
        links: [{ label: 'FDA Casgevy Approval', url: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/casgevy', comment: 'First approved CRISPR therapy — Dec 2023' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 3,
        text: 'IND review typically 30-day clock, but manufacturing, safety, and RAC review add 6–12 months pre-trial. Pre-IND meetings standard and scientifically substantive. Breakthrough Therapy Designation available for gene editing. Faster than EU but still significant burden for early-stage programmes.',
        links: [{ label: 'FDA Pre-IND Meetings', url: 'https://www.fda.gov/vaccines-blood-biologics/biologics-guidances/guidance-documents-cellular-gene-therapy-products', comment: 'FDA guidance on gene therapy IND process' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 4,
        text: 'OTAT has published guidance covering AAV, LNP, base editing, and in vivo delivery. RAC oversight streamlined in 2019 for lower-risk somatic approaches. FDA engaged early with base editing and prime editing developers. ARPA-H partnership enables regulatory science co-investment.',
        links: [{ label: 'FDA OTAT Guidance', url: 'https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products', comment: 'Office of Therapeutic Products — dedicated gene therapy regulatory science' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 2,
        text: 'Annual Congressional rider on FDA appropriations (since 2016) prevents FDA from reviewing clinical applications of heritable germline editing. Basic research on embryos is possible with private funding (NIH-funded research blocked by Dickey-Wicker). No defined oversight framework for germline research — technically legal but institutionally discouraged.',
        links: [{ label: 'Dickey-Wicker Amendment', url: 'https://www.science.org/content/article/congress-quietly-bars-human-embryo-editing', comment: 'Federal prohibition on FDA review of germline editing clinical applications' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 1,
        text: 'No regulatory pathway for longevity-specific gene editing applications. FDA requires disease-specific endpoints for approval — aging hallmarks, biological age clocks, or composite longevity biomarkers are not recognised as primary registration endpoints. TAME trial (metformin/aging) represents the frontier but not gene editing-specific.',
        links: [],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 4,
        text: 'ARPA-H (launched 2022, $1.5B budget) uses the full DARPA programme-manager model with directed challenges, milestone-based contracts, and competitive execution. NIH remains a traditional grant agency — ARPA-H is the PM-model component. NIA ITP is challenge-adjacent.',
        links: [{ label: 'ARPA-H', url: 'https://arpa-h.gov/', comment: 'DARPA-model agency for health — PM-driven challenges, $1.5B budget' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 2,
        text: 'ARPA-H has aging-adjacent programmes (cancer, Alzheimer\'s) but no explicit longevity or healthspan mandate. NIA funds aging research but is a traditional grant agency. No agency has a published longevity/lifespan challenge target.',
        links: [{ label: 'NIA Research Portfolio', url: 'https://www.nia.nih.gov/research', comment: 'Aging research funder — grant model, not ARPA model' }],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 4,
        text: 'ARPA-H contracts are fully non-dilutive (no equity). NIH grants and SBIR/STTR are non-dilutive. Strong non-dilutive funding ecosystem for all company sizes. Some ARPA-H OT (Other Transaction) mechanisms provide even greater flexibility.',
        links: [{ label: 'NIH SBIR/STTR', url: 'https://seed.nih.gov/', comment: 'Non-dilutive funding for small biotech — $1B+/year' }],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 5,
        text: 'ARPA-H uses Other Transaction (OT) agreements and milestone-based contracts where performers typically retain foreground IP with narrow government-purpose rights — no agency equity. NIH grants are a separate instrument (see Science / university IP). This is close to the global benchmark for PM-agency biomedical funding.',
        links: [{ label: 'ARPA-H', url: 'https://arpa-h.gov/', comment: 'OT and milestone contracts; performer foreground IP; federal march-in rarely used in practice' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 2,
        text: 'ARPA-H challenges are somewhat quantified (specific disease endpoints, milestones) but lack explicit biological age or healthy lifespan targets. NIA ITP tests compounds against mouse lifespan — the closest thing to a quantified longevity challenge, but small-scale.',
        links: [{ label: 'NIA ITP', url: 'https://www.nia.nih.gov/research/dab/interventions-testing-program-itp', comment: 'Multi-site mouse longevity compound testing — quantified lifespan endpoints' }],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 5,
        text: 'FDA leads globally: Accelerated Approval, Breakthrough Therapy, Fast Track, Priority Review, and Accelerated Approval are well-established. Multiple longevity-adjacent drugs have used these pathways. System is mature, well-understood by industry, and actively used.',
        links: [{ label: 'FDA Accelerated Approval', url: 'https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/accelerated-approval-program', comment: 'Multiple accelerated pathways — world-leading' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'FDA rolling review available for Breakthrough Therapy Designation and RTOR (Real-Time Oncology Review) programmes. Sponsors can submit data modules as they become available. Pre-IND engagement deeply embedded in culture.',
        links: [{ label: 'FDA RTOR', url: 'https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/real-time-oncology-review', comment: 'Real-Time Oncology Review — rolling submission model' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'FDA accepts validated surrogate endpoints across many disease areas. PDUFA VII includes broader guidance commitments. Not yet for aging-specific biomarkers — TAME trial is the test case for whether aging can be an FDA indication.',
        links: [{ label: 'FDA Surrogate Endpoint Table', url: 'https://www.fda.gov/drugs/development-resources/table-surrogate-endpoints-were-basis-drug-approval-or-licensure', comment: 'FDA-accepted surrogates by indication — no aging endpoints yet' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 4,
        text: 'Omnibus Act 2022 gave FDA explicit authority to withdraw Accelerated Approval if confirmatory trial not completed on schedule. Multiple withdrawals executed post-2022. Real-world evidence Sentinel system active for safety.',
        links: [{ label: 'FDA Withdrawal Authority', url: 'https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/accelerated-approval-program', comment: '2022 law strengthened withdrawal authority; multiple withdrawals executed' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 4,
        text: 'Federal Right to Try Act (2018) + FDA Expanded Access Programme. Streamlined single-patient IND; physician liability protection defined. Company participation voluntary — major gap; many decline citing supply or liability. FDA requires sponsors to respond to requests within 30 days.',
        links: [{ label: 'FDA Expanded Access', url: 'https://www.fda.gov/patients/learn-about-expanded-access-and-other-treatment-options', comment: 'Formal compassionate use programme alongside Right to Try' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 4,
        text: 'FDA has published comprehensive adaptive trial guidance (2019). Biomarker-adaptive enrichment, seamless Phase 2/3, and response-adaptive randomisation all accepted. FDA proactively engages on novel designs pre-IND. Used across oncology, rare disease, and increasingly non-oncology.',
        links: [{ label: 'FDA Adaptive Design Guidance', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/adaptive-design-clinical-trials-drugs-and-biologics-guidance-industry', comment: '2019 comprehensive adaptive design guidance' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'FDA RWE framework accepts external controls for rare disease and certain oncology approvals. CDER and CBER have issued guidance. Not yet systematically applied to aging/longevity indications. Medicare/Medicaid and VA data usable but fragmented.',
        links: [{ label: 'FDA RWE Framework', url: 'https://www.fda.gov/science-research/science-and-research-special-topics/real-world-evidence', comment: 'FDA RWE framework — accepted for defined contexts' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'FDA published comprehensive DCT guidance in 2023. Home visits, local labs, telemedicine visits, and ePRO as primary outcomes accepted. Wearable endpoints being qualified. COVID-era experience accelerated framework development.',
        links: [{ label: 'FDA DCT Guidance 2023', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/decentralized-clinical-trials-drugs-biological-products-and-devices', comment: '2023 comprehensive DCT guidance' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 3,
        text: 'Platform/master protocols accepted and actively used: I-SPY breast cancer, MASTER NSCLC, NCI MATCH. FDA has issued platform trial guidance. Adaptive arm addition with expedited review established in oncology.',
        links: [{ label: 'FDA Master Protocol Guidance', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/master-protocols-efficient-clinical-trial-design-strategies-expedite-development-oncology-drugs-and', comment: 'FDA guidance on master protocols and platform trials' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 3,
        text: 'FDA Sentinel system integrates claims and EHR data for post-market safety surveillance. RWE accepted as supportive evidence in label extensions and some approvals. Not yet routine for primary efficacy dossiers outside oncology.',
        links: [{ label: 'FDA Sentinel System', url: 'https://www.sentinelinitiative.org/', comment: 'FDA active post-market surveillance using real-world data — 100M+ patients' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 1,
        text: 'No formal regulatory sandbox for health interventions. FDA does not have a designated sandbox programme. Investigator IND provides limited individual researcher flexibility but no system-level sandbox with safe-harbour provisions.',
        links: [],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 1,
        text: 'No sandbox covering drugs, biologics, or gene therapies. FDA Combination Products Office handles multi-component products but is a regulatory pathway, not a sandbox.',
        links: [{ label: 'FDA Combination Products', url: 'https://www.fda.gov/combination-products', comment: 'Regulatory pathway — not a sandbox with safe harbour' }],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 1,
        text: 'No sandbox allowing real patient participation outside standard IND/trial frameworks. Investigator IND + IRB provides some individual case flexibility but no sandbox-level patient cohort access.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 1,
        text: 'No formal legal safe harbour for sandbox participants. Standard product liability and malpractice law applies fully. No regulatory sandbox framework providing indemnity or liability shield.',
        links: [],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 1,
        text: 'No sandbox mechanism applicable to longevity interventions. Aging prevention and healthspan applications have no defined exploratory pathway outside standard IND/clinical trial requirements.',
        links: [],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'TAME trial (metformin/aging) is the test case for whether FDA will accept aging as a registered indication. Aging biomarkers (epigenetic clocks, proteomics) used as exploratory secondary endpoints. No aging-specific primary endpoint has been accepted for registration.',
        links: [{ label: 'TAME Trial', url: 'https://www.afar.org/tame-trial', comment: 'First trial designed to qualify aging as FDA indication using composite endpoint' }],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 2,
        text: 'FDA Biomarker Qualification Program (BQP) exists for formal surrogate qualification. No aging biomarker has been successfully qualified. BQP process is 5–10 years and requires consortium-level evidence. No expedited track for aging-specific biomarkers.',
        links: [{ label: 'FDA Biomarker Qualification Program', url: 'https://www.fda.gov/drugs/drug-development-tool-qualification-programs/biomarker-qualification-program', comment: 'Formal qualification process — no aging biomarkers qualified yet' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'FDA Companion Diagnostic framework (CDx) allows co-development of diagnostic + therapeutic. Designed for treatment selection, not aging endpoint co-development. No dedicated pathway for co-developing novel aging biomarker endpoints alongside longevity therapies.',
        links: [{ label: 'FDA CDx Framework', url: 'https://www.fda.gov/medical-devices/in-vitro-diagnostics/companion-diagnostics', comment: 'Companion diagnostic co-development framework — not designed for aging endpoints' }],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 3,
        text: 'NIH All of Us (~750k participants), UK Biobank (US-accessible), Medicare/CMS longitudinal data, and FHS/CARDIA cohorts provide aging biomarker reference populations. Coverage is substantial but fragmented across systems, not unified as a synthetic control resource.',
        links: [{ label: 'NIH All of Us', url: 'https://allofus.nih.gov/', comment: '750k+ diverse participants with longitudinal health data — growing aging biomarker coverage' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 2,
        text: 'NIA and NIH Common Fund support some aging biomarker standardization efforts. Methylation clock protocols vary across labs. No regulatory-grade harmonized measurement standards for aging biomarkers. Cross-study comparison limited.',
        links: [],
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

      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: 2,
        text: 'No national sarcopenia screening programme. DEXA is available but primarily used for bone density (osteoporosis). BIA-based assessment exists in some academic and sports medicine settings but is not part of routine clinical pathways. Some geriatric medicine clinics screen opportunistically.',
        links: [{ label: 'Foundation for the NIH – Sarcopenia Biomarkers', url: 'https://fnih.org/our-programs/biomarkers-consortium/programs/sarcopenia/', comment: 'Research consortium — not yet a clinical screening standard' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: 3,
        text: 'No national population-level screening programme. USPSTF found insufficient evidence to recommend universal screening for asymptomatic adults (2017; under review). High-risk screening is common in primary care via STOP-BANG, Epworth. Home sleep testing covered by Medicare/most insurers on clinical indication. Significant underdiagnosis persists.',
        links: [{ label: 'USPSTF – Obstructive Sleep Apnea', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/obstructive-sleep-apnea-in-adults-screening', comment: 'I-grade recommendation — insufficient evidence for universal screening' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 3,
        text: 'USPSTF provides a formal evidence review process (typically 2–4 years per recommendation) that shapes coverage under ACA § 2713. Faster pathways exist for urgent public health priorities, but the default process is slow. Individual states can move faster.',
        links: [{ label: 'USPSTF Methodology', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/about-uspstf/methods-and-processes/procedure-manual', comment: 'USPSTF evidence review process — 2–4 years typical' }],
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
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'ClinicalTrials.gov is the world\'s largest trials registry (450k+ studies) with improved patient-facing search since 2023 redesign. NIH ResearchMatch and individual CTSA patient recruitment platforms exist. No nationwide EHR-based automated eligibility matching. CTSA institutions run local recruitment systems but no national interoperable layer.',
        links: [
          { label: 'ClinicalTrials.gov', url: 'https://clinicaltrials.gov/', comment: 'US national trials registry — 450k+ studies with improved patient search' },
          { label: 'NIH ResearchMatch', url: 'https://www.researchmatch.org/', comment: 'Volunteer-trial matching platform — opt-in, 175k+ volunteers' },
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
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 2,
        text: 'NIH data sharing policy (2023) provides a formal process, but it remains multi-step: researchers need a DUA plus IRB approval, often from multiple agencies. Typical wait: 2–4 months. No tiered accreditation or self-service provisioning.',
        links: [{ label: 'NIH Data Sharing Policy', url: 'https://sharing.nih.gov/data-management-and-sharing-policy', comment: 'NIH 2023 data sharing mandate — formal but multi-step process' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 2,
        text: 'No national personal identifier; linkage relies on probabilistic matching (name + DOB + SSN fragments). Medicare/Medicaid claims linkable within CMS. Cross-agency linkage (NIH biobanks + CMS + registries) is fragmented and inconsistent.',
        links: [{ label: 'CMS Research Data', url: 'https://resdac.org/', comment: 'ResDAC — Medicare/Medicaid data access; limited cross-agency linkage' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 2,
        text: 'HIPAA Safe Harbor (18-identifier removal) is the dominant standard — relatively weak by modern re-identification standards. dbGaP uses controlled access but no TRE; researchers download data locally. All of Us Research Program offers some cloud-based enclave access but not yet the norm.',
        links: [{ label: 'HIPAA De-identification', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html', comment: 'HIPAA Safe Harbor — legally standard but scientifically weak' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 2,
        text: 'NIH data sharing policy permits AI/ML use on shared data in principle. However, DUAs routinely restrict commercial AI applications; large-model training on health data remains legally ambiguous. No dedicated AI researcher tier or fast-track.',
        links: [],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 1,
        text: 'No bilateral health data sharing framework. Each cross-border transfer requires a separately negotiated DUA. GDPR incompatibility with US surveillance law creates substantial friction for EU–US research data flows.',
        links: [],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 3,
        text: '21st Century Cures Act mandates EHR adoption and prohibits information blocking (ONC USCDI). EHR penetration is near-universal among hospitals and large practices. Enforcement via CMS incentives exists. Patient-reported outcomes and SDOH not systematically structured.',
        links: [{ label: '21st Century Cures Act', url: 'https://www.healthit.gov/curesrule/', comment: 'Mandates EHR interoperability and prohibits information blocking' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 3,
        text: 'FHIR R4 mandated by ONC rule. ICD-10-CM and LOINC required for billing and lab data. SNOMED CT used in clinical documentation inconsistently. Implementation quality varies significantly across EHR vendors.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 2,
        text: 'SEER (cancer), NHSN (infections), and NVSS (vital statistics) exist as separate systems with limited interoperability. No national linked registry — cross-registry analysis requires case-by-case agreements and probabilistic matching without a national ID.',
        links: [{ label: 'SEER Cancer Registry', url: 'https://seer.cancer.gov/', comment: 'Surveillance, Epidemiology, and End Results — one of the better US registries, but siloed' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 2,
        text: 'CMS Medicare/Medicaid claims data typically available with 12–18 month lag. SEER data updated annually. No quarterly or near-real-time research access at national scale.',
        links: [],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 3,
        text: 'OMOP CDM widely used across research networks (PCORnet, TriNetX, N3C). PheWAS phenotype libraries available. Validated phenotyping algorithms exist via eMERGE network. Cross-institutional queries feasible within networks, not at national scale.',
        links: [{ label: 'N3C Data Enclave', url: 'https://ncats.nih.gov/n3c', comment: 'National COVID Cohort Collaborative — best US example of cross-institutional computable phenotyping' }],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 3,
        text: 'OMOP CDM is widely used across research networks (PCORnet, N3C, TriNetX), creating a common data model that bridges research and clinical data. However, adoption is network-specific — not mandated nationally. Joining external research datasets to clinical EHR still requires manual ontology curation in most cases.',
        links: [{ label: 'OMOP CDM', url: 'https://ohdsi.github.io/CommonDataModel/', comment: 'Common data model used by major US research networks — de facto standard' }],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 2,
        text: 'No national infrastructure for automatic registry follow-up of research participants. Possible via CMS Medicare/Medicaid linkage for older populations, or state cancer registry linkages — but each requires separate DUA negotiation. No national personal identifier makes probabilistic matching error-prone.',
        links: [{ label: 'CMS Research Data Linkage', url: 'https://resdac.org/', comment: 'Medicare/Medicaid linkage to research cohorts — possible but heavily procedural' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 3,
        text: 'NIH 2023 Data Management and Sharing Policy mandates data sharing plans for all funded research. FAIR principles endorsed but not technically enforced. Repositories (dbGaP, Figshare, Zenodo) used, but metadata quality is highly variable and machine-readability not systematically audited.',
        links: [{ label: 'NIH Data Sharing Policy', url: 'https://sharing.nih.gov/data-management-and-sharing-policy', comment: 'Mandates data sharing plans — FAIR in intent, inconsistent in execution' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 3,
        text: 'FDA Sentinel System performs active automated surveillance across 100M+ patient records. MedWatch collects voluntary reports. OpenFDA provides machine-readable access to FAERS data. However, the loop from signal to triggered research protocol is not automated — researchers access signal data but must initiate studies independently.',
        links: [{ label: 'FDA Sentinel System', url: 'https://www.fda.gov/safety/fdas-sentinel-initiative', comment: 'Active pharmacovigilance across 100M+ patients — best-in-class signal detection' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 2,
        text: 'ClinicalTrials.gov registration required for IND trials and most NIH-funded research. Results reporting required within 12 months of completion. However, compliance is poor — ~50% of trials fail to report results on time. Code and data sharing mandated by NIH (2023) but enforcement is limited.',
        links: [{ label: 'ClinicalTrials.gov Compliance', url: 'https://clinicaltrials.gov/', comment: 'Registration required; results reporting compliance historically weak (~50%)' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 2,
        text: 'FDA generally requires US-based data to support approval. Foreign trial data is accepted as supporting evidence but not as primary evidence for most submissions. Project Orbis enables parallel review but not mutual acceptance. ICH E5 allows bridging studies for ethnic data, not full substitution.',
        links: [{ label: 'Project Orbis', url: 'https://www.fda.gov/about-fda/oncology-center-excellence/project-orbis', comment: 'Parallel oncology review with international partners — not mutual data acceptance' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 4,
        text: 'FDA is the core participant and often the leader of Project Orbis (oncology joint review with Canada, Australia, UK, Singapore, Switzerland, Brazil). FDA also participates in ICMRA (International Coalition of Medicines Regulatory Authorities) and bilateral scientific advice programmes with EMA.',
        links: [{ label: 'ICMRA', url: 'https://www.icmra.info/', comment: 'International Coalition of Medicines Regulatory Authorities — FDA core member' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'FDA is an ICH founding member and active in setting international standards. FDA GCP (ICH E6), GMP, and trial conduct standards are the global reference point. FDA staff chair and co-chair multiple ICH Expert Working Groups. US standards are adopted internationally, not vice versa.',
        links: [{ label: 'FDA ICH Participation', url: 'https://www.fda.gov/international-programs/international-regulatory-harmonization/ich', comment: 'FDA as founding ICH member and standard-setter' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 2,
        text: 'FDA does not formally rely on foreign approvals. PDUFA VII includes provisions for considering foreign regulatory actions in rare disease contexts. No automatic or pathway-level reliance on EMA/MHRA/TGA decisions.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 3,
        text: 'US–EU MRA for GMP facility inspections covers most pharmaceutical manufacturers. Bilateral MRAs with Switzerland, Canada, Australia, Japan, Israel on GMP. No clinical trial data or approval-level recognition agreements.',
        links: [{ label: 'FDA Mutual Recognition Agreements', url: 'https://www.fda.gov/international-programs/international-arrangements/mutual-recognition-agreements-mra', comment: 'GMP inspection MRAs — manufacturing quality, not clinical data' }],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 5,
        text: 'US has more BSL-3 and BSL-4 facilities than any other country — over 1,400 registered BSL-3 facilities as of 2023. NIH/NIAID, CDC, and major academic medical centres provide extensive access. National Emerging Infectious Diseases Laboratories (NEIDL) and similar facilities are accessible to academic researchers via proposal.',
        links: [{ label: 'NEIDL', url: 'https://www.neidl.bu.edu/', comment: 'Boston University National Emerging Infectious Diseases Laboratories — BSL-4 with academic access' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 5,
        text: 'World\'s largest and most diverse GMP/CDMO ecosystem: Lonza, Catalent, Fujifilm Diosynth, WuXi, Samsung Biologics US facilities — full clinical-stage and commercial capacity. Academic GMP suites at most major medical schools (UPenn, Stanford, Johns Hopkins). Cell and gene therapy CDMO capacity growing rapidly.',
        links: [{ label: 'ISPE GMP Resources', url: 'https://ispe.org/', comment: 'GMP standards and manufacturing ecosystem — US is the global CDMO hub' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 5,
        text: 'NSF ACCESS (successor to XSEDE), NIH STRIDES, and DOE national labs (ORNL, ANL, NERSC) provide the world\'s largest academic HPC/AI infrastructure. NIH Cloud Platform includes GPU-accelerated nodes for genomics. Multiple NIH-funded bioinformatics cores at major research universities.',
        links: [{ label: 'NSF ACCESS', url: 'https://access-ci.org/', comment: 'National advanced computing ecosystem — largest in the world for academic research' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 5,
        text: 'All of Us (~750k genomes), UKBB US access, TOPMed (~200k WGS), VA MVP (~900k veterans), and ClinSeq. Multiple commercial sequencing hubs (Illumina HQ in San Diego, PacBio). Academic genomics cores at scale. National sequencing capacity unmatched globally.',
        links: [{ label: 'NIH All of Us', url: 'https://allofus.nih.gov/', comment: '750k+ diverse participants — growing toward 1M WGS; open researcher access' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 5,
        text: 'NIA ITP — the only multi-site rigorous aging compound testing programme in the world (UT Health, Michigan, Jackson Lab). JAX distributes aging mouse strains globally (Aged Rodent Colonies). NIA Aged Rodent Colonies provide standardised aged animals to funded researchers. C. elegans and Drosophila aging research centred in US labs.',
        links: [
          { label: 'NIA ITP', url: 'https://www.nia.nih.gov/research/dab/interventions-testing-program-itp', comment: 'Multi-site mouse longevity compound testing — gold standard globally' },
          { label: 'JAX Aged Mice', url: 'https://www.jax.org/jax-mice-and-services/find-and-order-jax-mice/most-popular-jax-mice/aged-mice', comment: 'Global distribution of standardised aging mouse models' },
        ],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 5,
        text: 'US researchers lead or co-lead most major international aging consortia: CALERIE (caloric restriction), TAME (metformin/aging), ITP, Human Cell Atlas, ENCODE, TOPMed, GTEx, UK Biobank consortium. NIH international collaboration grants fund partnerships globally. Buck Institute, UCSF, Harvard, and Stanford are de facto global hubs.',
        links: [{ label: 'Buck Institute', url: 'https://www.buckinstitute.org/', comment: 'Leading US aging research institute — extensive international consortium leadership' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 4,
        text: 'NIH Data Management and Sharing Policy (2023) mandates open data sharing for all NIH-funded research. GA4GH frameworks adopted by NIH. dbGaP, GEO, and SRA host and share large-scale genomic and omics datasets internationally. FAIR data principles integrated into NIH grant requirements.',
        links: [{ label: 'NIH Data Sharing Policy', url: 'https://sharing.nih.gov/data-management-and-sharing-policy', comment: '2023 mandate — all NIH-funded research must share data' }],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 4,
        text: 'NIH Fogarty International Center funds global health research partnerships. NSF international collaboration supplements. Bilateral science and technology agreements with 50+ countries. No Horizon Europe equivalent but extensive bilateral co-funding. NIH grants can fund foreign investigators as co-investigators.',
        links: [{ label: 'NIH Fogarty Center', url: 'https://www.fic.nih.gov/', comment: 'NIH international funding arm — global health research partnerships' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 5,
        text: 'US-based researchers produce the plurality of high-impact longevity science publications. Nature Aging, Cell, Science, NEJM — editorial boards and senior authorship dominated by US institutions. NIA, Buck, Calico, Unity, and academic medical centres set the global research agenda. Most longevity society presidents and guideline committee chairs are US-based.',
        links: [{ label: 'Nature Aging', url: 'https://www.nature.com/nataging/', comment: 'Leading longevity journal — US editorial leadership and primary author pool' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 5,
        text: 'US is the global leader in biomedical patent cooperation. Bayh-Dole Act (1980): federally funded inventions are owned by the university/company, not the government — the model copied worldwide. Full PCT membership, bilateral patent treaties with all major economies, active USPTO biotech patent examination capacity.',
        links: [{ label: 'Bayh-Dole Act', url: 'https://www.nist.gov/tpo/bayh-dole-act', comment: 'Gold standard IP framework — university/company ownership of publicly funded inventions' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 3,
        text: 'Pew Research (2022) shows ~55% of Americans trust scientists "a lot" — moderate and declining. Trust is politically polarised: Republicans significantly less trusting of scientists and medical institutions post-COVID. Vaccine hesitancy and anti-establishment health movements are measurable factors. Above average globally but below Scandinavian norms.',
        links: [{ label: 'Pew Research on Science Trust', url: 'https://www.pewresearch.org/science/2022/02/15/americans-trust-in-scientists-other-groups-declines/', comment: 'Pew 2022 — 55% trust scientists "a lot", declining trend, politically polarised' }],
      },
      [SocietalReadinessClaim.AGING_MEDIA_FRAMING]: {
        score: 3,
        text: 'The US has the deepest mainstream geroscience discourse among large democracies: bestsellers, podcasts, and national newspapers routinely treat biological age, organ-specific ageing, NAD+/metabolism, and related trials as consumer-relevant science — not science fiction. Biological-age products and "longevity" as a category are culturally visible. Coverage falls short of rung 4 (indefinite healthspan as a default cultural goal) but clearly exceeds healthy-ageing lifestyle-only framing.',
        links: [
          { label: 'The Washington Post — organ ageing and disease risk', url: 'https://www.washingtonpost.com/wellness/2024/11/25/longevity-organ-aging-disease/', date: 'Nov 2024', comment: 'National daily wellness desk — differential organ ageing for a general audience' },
          { label: 'AFAR — public engagement on ageing research', url: 'https://www.afar.org/', comment: 'NGO — longevity and ageing biology in public-facing programmes' },
        ],
      },
      [SocietalReadinessClaim.POLICY_COMMITMENT]: {
        score: 3,
        text: 'NIA, established by statute in 1974, has sustained a $4B+ annual budget across 50+ years and administrations from both parties — the strongest evidence of policy durability in aging science globally. The bipartisan National Alzheimer\'s Project Act (NAPA, 2011) and its multi-year successors demonstrate cross-party funding continuity for an aging disease. ARPA-H (2022) includes longevity-adjacent health moonshot programmes. However, no explicit statutory mandate for healthy lifespan extension as a distinct policy goal exists — all major commitments are disease-framed (Alzheimer\'s, cancer) rather than geroscience-framed, and no quantified healthspan target has been adopted.',
        links: [{ label: 'NIA Strategic Directions 2020–2025', url: 'https://www.nia.nih.gov/about/aging-strategic-directions-research', comment: 'NIA — 50-year statutory institute; largest aging science budget globally' }],
      },
      [SocietalReadinessClaim.LEGISLATIVE_SALIENCE]: {
        score: 2,
        text: 'Federal politics remain dominated by Medicare, Social Security solvency, and NIH/NIA Alzheimer\'s and cancer lines — fiscal and disease-of-aging framing in budgets and oversight hearings. The bipartisan Congressional Longevity Science Caucus (launched Feb 2023) educates members on aging and longevity biotechnology but does not make geroscience a general-election wedge; platform competition still centres on entitlements and specific diseases, not biological aging as a unified mandate.',
        links: [
          { label: 'House press release — Longevity Science Caucus launch', url: 'https://bilirakis.house.gov/media/press-releases/bilirakis-and-tonko-kick-longevity-science-caucus', date: 'Feb 2023', comment: 'Official launch statement (Bilirakis/Tonko)' },
          { label: 'Alliance for Longevity Initiatives — caucus page', url: 'https://a4li.org/longevity-science-caucus/', comment: 'Caucus description and stated mission (third-sector reference)' },
        ],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 2,
        text: 'FTC has enforcement authority over false advertising including anti-aging product claims, and has issued guidance explicitly warning against unsubstantiated "reverses aging" marketing. However, enforcement is reactive and complaint-driven — no pre-market review. The DSHEA (1994) supplements law creates a regulatory gap: supplement makers don\'t need to prove claims before marketing. A4M operates freely, offers board certifications unchallenged by state medical licensing boards.',
        links: [
          { label: 'FTC – Anti-Aging Claims Guidance', url: 'https://www.ftc.gov/business-guidance/resources/ftcs-revised-endorsement-guides-what-people-are-asking', comment: 'FTC guidance on substantiation — applies to anti-aging claims' },
          { label: 'DSHEA Supplement Regulation', url: 'https://www.fda.gov/food/dietary-supplements/overview-dietary-supplements', comment: 'FDA supplement framework — manufacturers do not need FDA approval before marketing' },
        ],
      },
    },
  },
}

export default usa
