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

const spain: CountryData = {
  country: Country.SPAIN,

  metrics: {
    lifeExpectancy:        { value: 83.3, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 73.4, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.279, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'The "Autorización de residencia para investigación" (implementing EU Researcher Directive 2016/801) provides a pathway for non-EU researchers with a hosting agreement from a registered research organisation. EU free movement applies to EU nationals. The "Visado para investigación" allows entry within 90 days of authorisation.',
        links: [{ label: 'Residencia Investigación', url: 'https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/residencia-temporal/autorización-de-residencia-para-actividades-de-investigacion/', comment: 'Spanish research residency permit' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 2,
        text: 'Extranjería office processing times vary significantly by province: Madrid and Barcelona offices have 3–5 month backlogs; smaller cities are faster. The digital application system (MERCURIO) has reduced some friction but pre-appointment waits remain a structural bottleneck for non-EU researchers.',
        links: [],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 3,
        text: 'ANECA (Agencia Nacional de Evaluación de la Calidad y Acreditación) and RUCT evaluate foreign academic qualifications. EU degrees are auto-recognised. Non-EU doctoral degrees require homologación (2–4 months). For most CSIC/university appointments, institutional recognition of credentials is sufficient in practice.',
        links: [{ label: 'ANECA Reconocimiento', url: 'https://www.aneca.es/reconocimiento-y-certificacion', comment: 'Spanish credential recognition authority' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 2,
        text: 'Research permit is accessible for contracted postdocs. The deeper problem is financial: Spanish postdoc salaries (€25,000–32,000/year gross) are among the lowest in Western Europe, making retention of international talent genuinely difficult regardless of visa accessibility. Early-career researchers face visa access but economic deterrence.',
        links: [],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 2,
        text: 'Spain has severe brain drain among researchers — estimated 50,000+ Spanish scientists working abroad. Permanent residency is available after 5 years, but the underlying problem is that tenured positions (científico titular at CSIC, profesor titular at universities) are few, slowly filled, and poorly paid. Many international researchers leave before qualifying.',
        links: [],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 2,
        text: 'EU/EEA clinicians recognised under Directiva 2005/36/CE. Non-EU physicians must obtain homologación del título through the Ministerio de Educación, then register with the Colegio de Médicos. The two-ministry process (education + health) creates duplication. Non-EU process takes 12–24 months and requires Spanish language certification.',
        links: [],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 2,
        text: 'Process is documented but split between Ministerio de Educación (homologación) and Ministerio de Sanidad (habilitación/registro). No digital single-window. Regional Colegios de Médicos have their own registration steps. Clinicians typically need specialist advisory support to navigate the full pathway.',
        links: [],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 2,
        text: 'End-to-end homologación plus Colegio registration for non-EU physicians typically takes 12–24 months. Ministerio de Educación evaluation is a bottleneck with substantial backlogs. Even with homologación in hand, independent SNS practice requires Colegio registration which adds weeks.',
        links: [],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 2,
        text: 'Foreign physicians awaiting homologación can work as "médico residente" (MIR position) in SNS hospitals with supervision. This provides meaningful clinical scope. Some CCAA have introduced provisional supervised practice authorisations for foreign specialists to address shortages. Not a nationally uniform system.',
        links: [],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 2,
        text: 'Combined research-practice positions exist within IIS (Institutos de Investigación Sanitaria) attached to major university hospitals. However salaries are modest and clinical workload in SNS hospitals is high. Foreign clinicians accessing this structure face the same pay constraints as Spanish clinician-researchers.',
        links: [],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 2,
        text: 'Aging biology features in cell biology, physiology, and biochemistry modules at Spanish universities but without dedicated geroscience curricula. Carlos López-Otín\'s hallmarks of aging paper (Oviedo) is widely cited but did not lead to curriculum reform. Undergraduate research opportunities are limited relative to Northern Europe.',
        links: [],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 2,
        text: 'Dedicated aging PhD programs exist at a handful of institutions: CNIO (telomere biology, Blasco group), IRB Barcelona (cellular senescence, Serrano group), CIBERFES-affiliated units. Quality at these centres is world-class. However the national ecosystem is small and positions are scarce relative to the scientific opportunity.',
        links: [{ label: 'CNIO Telomeres Group', url: 'https://www.cnio.es/investigacion/grupos-de-investigacion/programa-de-oncologia-molecular/grupo-de-telomeros-y-telomerasa/', comment: 'María Blasco\'s group — world-leading telomere/aging biology' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 2,
        text: 'Juan de la Cierva (incorporation) and Ramón y Cajal (5-year tenure-track) fellowships are prestigious but extremely competitive and poorly compensated by EU comparison. Marie Skłodowska-Curie fellowships are widely used by Spanish institutions. Postdoc to permanent position conversion rate is very low, driving significant emigration.',
        links: [{ label: 'Juan de la Cierva', url: 'https://www.ciencia.gob.es/Convocatorias-de-Ayudas-y-Becas/Juan-de-la-Cierva.html', comment: 'Spanish postdoc fellowship — prestigious but scarce and low-paid' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 2,
        text: 'FPI (Formación del Personal Investigador) and FPU (Formación del Profesorado Universitario) contracts fund PhD students in competitive grants — approximately 3,000 new FPI contracts per year nationally across all fields. Stipends (~€1,400–1,700/month net) are below living costs in Madrid or Barcelona. Coverage below 50% of qualified applicants.',
        links: [],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 1,
        text: 'Spain\'s biotech and pharmaceutical ecosystem is primarily oriented toward clinical trial execution, not R&D. Industry-co-supervised PhDs in longevity or aging are rare. The CDTI Torres Quevedo programme funds industrial postdocs but in generalist areas. No structured longevity industry-academia PhD bridge exists.',
        links: [],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 2,
        text: 'Geriatría is a recognised MIR specialty (4 years). Approximately 3,500 geriatricians serve a population of 47M with a rapidly aging demographic — below projected need. Sociedad Española de Geriatría y Gerontología (SEGG) is active but the specialty lacks the prestige and compensation of surgery, cardiology, or internal medicine.',
        links: [{ label: 'SEGG', url: 'https://www.segg.es/', comment: 'Spanish Geriatrics and Gerontology Society' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 2,
        text: 'Geriatrics rotation is mandatory in most Spanish medical school curricula (Grado en Medicina). Aging biology in preclinical years is limited to physiology sections. Longevity medicine and preventive aging interventions are not part of the standard national curriculum. Implementation quality varies across the ~40 medical schools.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 2,
        text: 'MIR Geriatría (4 years) provides a structured training programme. Quality varies significantly between university hospitals (La Paz Madrid, Ramón y Cajal, Vall d\'Hebron Barcelona) and peripheral hospitals. A longevity medicine component is absent from the standard programme. Research integration depends on individual centre commitment.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 1,
        text: 'SEGG and regional medical councils offer CME in geriatrics and frailty. Longevity medicine CME covering biological aging interventions (senolytics, mTOR pathways) is effectively absent nationally. DPC (Desarrollo Profesional Continuo) in aging is available but confined to clinical geriatrics, not geroscience.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 2,
        text: 'Ministerio de Sanidad publishes workforce projections showing geriatrician shortage. Some expansion of MIR geriatrics places in recent years. However 17-CCAA system means training capacity expansion requires coordinated regional decisions, which proceed slowly. National workforce plan lacks binding implementation mechanisms.',
        links: [],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 2,
        text: 'MD+PhD is possible in Spain — medical doctors can pursue doctoral theses at IIS (Institutos de Investigación Sanitaria) attached to university hospitals. A small number of dedicated MD-PhD programs exist (some via CSIC-university agreements). Structure is less formalised than France\'s Médecin-Chercheur track or UK\'s ACF/ACL system.',
        links: [],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 2,
        text: 'ISCIII "Contratos Sara Borrell" (postdoctoral clinician-researchers) and "Contratos Miguel Servet" (senior clinician-researcher stabilisation) fund dual-career clinicians. Positions are competitive and stipends modest. ISCIII budget constraints limit the number of available contracts significantly relative to demand.',
        links: [{ label: 'ISCIII Contratos Sara Borrell', url: 'https://www.isciii.es/QueHacemos/Financiacion/isciii/Modalidades/Paginas/SaraBorrell.aspx', comment: 'ISCIII postdoctoral clinician-researcher contracts' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 1,
        text: 'No aging-specific clinician-scientist pathway or track is formally established in Spain. The few Spanish clinician-researchers working in geroscience (at CNIO, IRB, CIBERFES) are exceptions rather than products of a systematic career structure. Cancer is the dominant MD-PhD track nationally.',
        links: [],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 2,
        text: 'IIS contracts aim to protect research time but SNS clinical pressure is acute — particularly in primary care and internal medicine. Protected time is theoretically defined in IIS appointments but frequently eroded by clinical staffing shortfalls. No national enforcement mechanism comparable to the UK ACF system.',
        links: [],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 2,
        text: 'Clinician-scientist career is financially precarious in Spain: SNS clinical salaries are among the lowest in Western Europe; academic salaries are worse. Brain drain specifically targets Spanish clinician-researchers. Those who succeed tend to be at CNIO, IRB, or major IIS — exceptions driven by personal motivation rather than systemic support.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 2,
        text: 'Spain\'s total R&D spending is ~1.4% GDP — well below the EU average of ~2.2% and far behind France (2.2%) or Germany (3.1%). ISCIII annual budget ~€250M across all health research. Aging-specific funding through CIBERFES (Frailty and Healthy Aging network) and ISCIII calls is meaningful but not at national-institute scale.',
        links: [{ label: 'ISCIII', url: 'https://www.isciii.es/', comment: 'Spanish health research institute — primary aging research funder' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 2,
        text: 'CIBERFES (Centro de Investigación Biomédica en Red – Frailty and Healthy Aging) is a dedicated national aging research network — a genuine structural commitment. However cancer (CIBERONC) and neurodegenerative disease dominate ISCIII portfolio. Basic aging mechanisms are funded at world-class labs (Blasco, López-Otín, Serrano) but not at scale.',
        links: [{ label: 'CIBERFES', url: 'https://www.ciberfes.es/', comment: 'Spanish national network for frailty and healthy aging research' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 2,
        text: 'Spanish science funding has been subject to repeated budget cuts — most severely during the 2008–2014 crisis, but volatility continues with political cycles. CSIC and universities have permanent positions but grant funding is 2–4 year cycles. No 10-year endowed programme equivalent to French IHU or German Max Planck permanence.',
        links: [],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 2,
        text: 'OTRIs (Oficinas de Transferencia de Resultados de Investigación) at universities and CSIC manage technology transfer. Quality is highly variable — major institutions (UPM, UB, UAB, CSIC) have functional OTRIs; many smaller universities do not. Spinout timelines average 18–24 months. Inventor share defined in Ley de la Ciencia but poorly implemented in practice.',
        links: [],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 1,
        text: 'Spain\'s longevity private investment ecosystem is very limited. The main pharma companies use Spain for clinical trial execution, not R&D partnerships. Philanthropic giving to aging research is minimal. No longevity VC cluster comparable to France\'s or Germany\'s. Brain drain concentrates Spanish aging talent in other countries\' ecosystems.',
        links: [],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 2,
        text: 'AEI (Agencia Estatal de Investigación) peer review is conservative. CDTI (Centro para el Desarrollo Tecnológico Industrial) funds applied innovation but not challenge-based longevity science. ISCIII "proyectos de investigación en salud" (PI grants) are rigorous but disease-focused and risk-averse. No Spanish ARPA equivalent exists.',
        links: [],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 3,
        text: 'Somatic gene editing trials are regulated by AEMPS under the EU ATMP framework. Gene therapy research is active at CIMA (Centro de Investigación Médica Aplicada, Pamplona), CNIO, and Hospital La Fe Valencia. Spain\'s clinical trial infrastructure makes it attractive for multi-site ATMP trials. AEMPS is a competent NCA.',
        links: [{ label: 'CIMA Gene Therapy', url: 'https://www.cima.es/en/', comment: 'CIMA — Spain\'s leading gene therapy and ATMP research centre' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 3,
        text: 'AEMPS CTA review for ATMPs typically takes 6–12 months. Pre-submission meetings are available. AEMPS participates in EMA CAT (Committee for Advanced Therapies). Processing speed is competent but not exceptional within the EU NCA network.',
        links: [],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 2,
        text: 'AEMPS adapts to new gene editing modalities within the EU/EMA framework but is less proactive than BfArM/PEI or ANSM in issuing national guidance for novel modalities. Pre-IND scientific advice is available through EMA channels. Reactive rather than anticipatory regulatory science culture.',
        links: [],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 2,
        text: 'Ley de Técnicas de Reproducción Humana Asistida (2006) prohibits germline modification for clinical use. Basic research on human embryos is technically permitted under specific CNRHA (Comisión Nacional de Reproducción Humana Asistida) authorisation with ethics committee oversight. Similar to France — more permissive than Germany\'s blanket criminal prohibition.',
        links: [],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 2,
        text: 'No specific longevity regulatory pathway. AEMPS follows EMA standards where aging biomarkers are exploratory secondary endpoints. No dedicated Spanish guidance on aging endpoint use in ATMP applications.',
        links: [],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 1,
        text: 'Spain has no ARPA-style programme manager model agency. CDTI (Centro para el Desarrollo Tecnológico Industrial) provides traditional competitive innovation grants and subsidised loans. Agencia Española de Investigación (AEI) is a standard research funding council. No challenge-based directed programme agency has been established.',
        links: [{ label: 'CDTI', url: 'https://www.cdti.es/', comment: 'Spanish technology and industrial development centre — traditional grant model' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 1,
        text: 'No Spanish innovation agency has a longevity or aging science mandate. ISCIII strategy mentions aging as a health priority, and CIBERFES exists as a network, but no directed challenge programme with quantified healthspan targets has been established at any level of government.',
        links: [],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 2,
        text: 'CDTI offers non-dilutive grants (subvenciones) and subsidised loans (préstamos) for technology development. AEI provides competitive research grants. Instruments are non-dilutive but not challenge-based. For longevity specifically, only standard ISCIII health research grants apply.',
        links: [],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 2,
        text: 'CDTI standard terms allow foreground IP with the performing company or institution. Ley de la Ciencia defines inventor rights for public research. Terms are adequate but not systematically published or optimised for spinout velocity. OTRI quality variation creates IP handling inconsistency across institutions.',
        links: [],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 1,
        text: 'No active Spanish innovation challenge specifies measurable aging biology outcomes, healthspan targets, or hallmarks-of-aging reversal metrics. Health innovation calls are framed around disease burden reduction at the population level, not biological aging mechanisms.',
        links: [],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'Full EMA adaptive pathway access as an EU member state. AEMPS participates in PRIME designation, conditional marketing authorisation, and accelerated assessment procedures. Spanish patients and sponsors benefit fully from EU-level adaptive licensing without additional national requirements.',
        links: [],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'EMA rolling review is fully accessible. AEMPS participates as NCA in rolling review procedures. Used actively during COVID-19 and increasingly for oncology and ATMPs.',
        links: [],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'EMA surrogate endpoint standards apply in Spain. Aging-adjacent functional composites accepted in geriatric indications per EMA guidance. AEMPS follows EMA practice without national augmentation.',
        links: [],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 3,
        text: 'EMA PASS/PAES framework applies. AEMPS post-market pharmacovigilance is integrated with EudraVigilance. Spain\'s national HTA process (through Consejo de Ministros and IPT — Informe de Posicionamiento Terapéutico) assesses comparative effectiveness but is less systematic than France\'s AMNOG-equivalent or HAS. No mandatory post-market cohort collection.',
        links: [],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 3,
        text: '"Uso compasivo" (individual compassionate use) and "acceso expandido" (cohort compassionate use) are regulated by AEMPS under RD 1015/2009. Process is documented, typically 4–6 weeks for approval. Physician liability is defined. Adequate but not as comprehensive or systematically data-generating as France\'s accès précoce.',
        links: [{ label: 'AEMPS Uso Compasivo', url: 'https://www.aemps.gob.es/medicamentos-de-uso-humano/acceso-a-medicamentos/uso-compasivo-medicamentos-en-investigacion/', comment: 'Spanish compassionate use framework' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 4,
        text: 'EMA adaptive design guidance fully applies. Spain is one of the EU\'s most active clinical trial countries by volume — major university hospitals (La Paz, Ramón y Cajal, Vall d\'Hebron, Clínica Universidad de Navarra) run sophisticated adaptive designs. SCReN and SOLTI support platform trial methodology.',
        links: [],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'EMA guidance on external and synthetic controls applies. BIFAP database (primary care) and regional SNS data provide real-world comparator populations. AEMPS follows EMA standards for synthetic control acceptance.',
        links: [],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'AEMPS permits decentralised trial elements under EU CTR: telemedicine follow-up, home nursing visits, local sample collection. Spanish clinical research networks support hybrid models. EU CTR implemented via CTIS.',
        links: [],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 3,
        text: 'Spain participates actively in European oncology platform trials (SOLTI for breast cancer, GELTAMO for lymphoma, SEOM/TTD oncology platforms). Platform trial methodology is established in academic oncology. EMA framework enables arm-addition with expedited amendment. Less developed in aging or non-oncology areas.',
        links: [{ label: 'SOLTI', url: 'https://www.gruposolti.org/', comment: 'Spanish breast oncology platform trial consortium' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 3,
        text: 'BIFAP (Base de datos para la Investigación Farmacoepidemiológica en Atención Primaria) is AEMPS\'s primary RWE resource — ~6M patient-records in primary care. Regional SNS administrative databases provide supplementary RWE. EMA RWE framework applies. Less integrated than France\'s SNDS but functional for pharmacoepidemiology.',
        links: [{ label: 'BIFAP', url: 'https://www.bifap.org/', comment: 'AEMPS primary care pharmacoepidemiology database' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 2,
        text: 'Spain has been developing a digital health regulatory sandbox framework under the "sandbox regulatorio" initiative (Ley 11/2020). A Ministerio de Sanidad digital health sandbox for medical devices and apps is in early implementation. As of 2024, it lacks the maturity of France\'s Article 51 or Germany\'s DiGA.',
        links: [],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 1,
        text: 'The digital health sandbox, where it exists, targets medical software and apps (SaMD). Novel drugs, biologics, and gene therapies are excluded — standard AEMPS clinical trial authorisation required. No biotech or ATMP sandbox pathway exists.',
        links: [],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 1,
        text: 'Digital health sandbox pilots may involve real patients through SNS channels. For drug innovation, uso compasivo provides limited patient access outside clinical trials. No preventive longevity intervention sandbox exists.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 1,
        text: 'No dedicated safe harbour for health innovation sandbox participants. Standard Spanish medical liability (Ley 41/2002) applies. Regulatory sandbox legislation is under development but not yet enacted with defined liability protections.',
        links: [],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 1,
        text: 'No Spanish sandbox has been applied to longevity interventions. Regulatory innovation in Spain remains at the digital health application level, not at biological aging prevention.',
        links: [],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'AEMPS follows EMA guidance: functional aging composites accepted in geriatric indications as primary endpoints; aging biomarkers exploratory. No Spain-specific guidance augmenting EMA practice. CIBERFES research uses aging endpoints in academic trials but not in regulatory submissions.',
        links: [],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 2,
        text: 'EMA CHMP biomarker qualification procedure applies. AEMPS participates in EMA processes. No national shortcut or dedicated aging biomarker qualification programme. Typical 5–10 year EMA qualification timeline.',
        links: [],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'Standard EMA co-development framework. Spain\'s active ATMP sector (CIMA, Hospital La Fe) has some companion diagnostic experience in oncology. No aging endpoint co-development pathway.',
        links: [],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 2,
        text: 'Cohort resources are limited relative to population size: ENRICA cohort (~3,000 elderly, cross-sectional), PREDIMED sub-studies (Mediterranean diet, cardiovascular aging), EPIC-Spain. Red de Biobancos ISCIII provides sample access. Infrastructure is adequate for specific research questions but less comprehensive than CONSTANCES or NAKO.',
        links: [{ label: 'Red de Biobancos ISCIII', url: 'https://www.redbiobancos.es/', comment: 'Spanish national biobank network' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 2,
        text: 'Spain participates in EU aging biomarker standardisation efforts via CIBERFES and JPI MYBL participation. ISCIII biobanks use defined collection protocols. National standardisation is partial; cross-cohort comparison possible for standard aging biomarkers but not consistently achieved.',
        links: [],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Cardiovascular risk assessment (blood pressure, cholesterol, glucose, BMI) is part of the "Examen de Salud" in SNS primary care — fully funded but GP-triggered rather than population-invitation. The Basque Country (Osakidetza) operates a more proactive systematic health check programme. National coverage is variable by CCAA.',
        links: [],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'National breast cancer screening programme covers women 50–69 (some CCAA extend to 45–74), with personalised invitation letters every 2 years. All 17 CCAA have implemented the programme. Participation ~70% nationally — among the highest in Europe. Quality assurance via Spanish Network of Cancer Screening Programmes.',
        links: [{ label: 'Red de Programas de Cribado de Cáncer', url: 'https://www.mscbs.gob.es/profesionales/saludPublica/prevPromocion/cancer/programas.htm', comment: 'Spanish national cancer screening network' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'National FIT-based colorectal cancer screening programme (50–69, every 2 years) with invitation letters rolled out across most CCAA since ~2009–2018. Positive FIT triggers colonoscopy. Coverage and uptake (~30–40%) vary by CCAA — Basque Country and Catalonia lead; some regions still expanding.',
        links: [],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'CCAES recommended HPV primary testing in 2019; implementation rolling out across CCAA at variable pace. National organised programme with invitation letters is not uniformly active — some CCAA (Catalonia, Basque) have proactive models; others rely on opportunistic GP visits. Transitioning but not yet fully proactive nationally.',
        links: [],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national AAA screening programme in Spain. Ministerio de Sanidad has not commissioned an organised AAA ultrasound programme. Ultrasound can be ordered clinically but no systematic population invitation exists.',
        links: [],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'HbA1c and fasting glucose testing is available and reimbursed in SNS primary care for patients with risk factors. GP-triggered rather than population invitation. RedGDPS (diabetes specialists in primary care) and SEEN promote metabolic screening. No national invitation-based diabetes prevention programme equivalent to France\'s Sophia.',
        links: [],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'DEXA scanning is reimbursed in SNS for women with specific risk factors (post-menopausal with fracture history, corticosteroid use). No systematic population invitation programme. FRAX tool recommended by SEIOMM for risk stratification but not standardised nationally. Some CCAA patient co-pay applies.',
        links: [],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national lung cancer CT screening programme. SEPAR (pulmonology society) and AECC support implementation but Ministerio de Sanidad has not yet commissioned a national programme. Some CCAA pilot studies underway. Implementation expected post-2025 following EU recommendations.',
        links: [],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No systematic national AF screening programme. Pulse palpation and opportunistic ECG occur in primary care consultations. Wearable-based AF detection growing but without clinical integration infrastructure. Ministerio de Sanidad has not commissioned organised AF screening.',
        links: [],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national cognitive screening programme. Estrategia en Enfermedades Neurodegenerativas (2016) focuses on care pathways rather than screening. Cognitive assessment is GP-triggered on symptom presentation. Memory clinics (Unidades de Memoria) available at hospital level.',
        links: [],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.ABSENT,
        text: 'PRS-based screening limited to research. Ley de Investigación Biomédica (2007) governs genetic testing with consent and counselling requirements. No clinical population screening using polygenic risk scores is reimbursed or in development.',
        links: [],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national sarcopenia programme. SEGG and SEMEG publish sarcopenia diagnostic guidelines (EWGSOP2) but no systematic primary care screening infrastructure exists. Specialist geriatric assessments include muscle mass measurement but not as a population programme.',
        links: [],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Polysomnography and nocturnal polygraphy are reimbursed in SNS for symptomatic patients on physician referral. No proactive national screening programme. SEPAR promotes questionnaire-based case-finding (Berlin, STOP-BANG) in primary care but without national standardisation.',
        links: [],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'Adding new screenings to the SNS portfolio requires Consejo Interterritorial del SNS (CISNS) agreement across 17 CCAA plus Ministerio de Sanidad health technology assessment — typically 3–5 years and requiring political consensus at multiple levels. The 17-CCAA federal structure is the main bottleneck for agile national screening commissioning.',
        links: [],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 2,
        text: 'Red de Biobancos del ISCIII is a distributed network of ~60 hospital biobanks — one of the largest in Europe by number of centres. Population cohort coverage is limited: ENRICA, PREDIMED sub-studies, EPIC-Spain are research opt-in cohorts totalling ~50,000 participants nationally. No opt-out population biobank.',
        links: [{ label: 'Red de Biobancos ISCIII', url: 'https://www.redbiobancos.es/', comment: 'Spanish national biobank network — distributed but not population-level opt-out' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 2,
        text: 'Most Spanish aging cohorts are primarily cross-sectional or have infrequent follow-up visits (5–10 year intervals). PREDIMED-Plus has structured 5-year follow-up. Red de Biobancos focuses on disease-linked sample collection rather than systematic longitudinal aging biomarker re-sampling.',
        links: [],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 2,
        text: 'ISCIII biobanks store serum and DNA samples. Genome-wide SNP arrays are available for some cohorts (CIBERFES studies, PREDIMED sub-studies). Multi-omic depth (proteomics, epigenomics, metabolomics) is available only in specific sub-cohorts at major research centres (CNIO, IRB Barcelona).',
        links: [],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 2,
        text: 'Spain lacks a unified national health identifier for research linkage across all 17 CCAA. Some CCAA (Catalonia via CatSalut, Basque via Osakidetza) have well-linked regional health databases. National BDCAP (primary care) and CMBD (hospitalisation) exist but cross-CCAA linkage is operationally complex.',
        links: [],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 2,
        text: 'ISCIII Biobank network access via coordinated application; Red de Biobancos has a joint portal. Regional SNS data access requires CCAA-specific agreements. No national single-window research data platform equivalent to France\'s Health Data Hub. Process is functional but fragmented.',
        links: [],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 3,
        text: 'Spain is consistently among the EU\'s most active clinical trial countries by site volume. Cost-competitive, with a large multilingual population and strong CRO infrastructure in Barcelona, Madrid, and Valencia. Hospital SNS networks provide access to patient populations. Regional SNS databases can support register-based outcomes. CEIC (ethics committee) approval: 2–3 months.',
        links: [],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'AEMPS uses BIFAP for pharmacoepidemiology and accepts RWE as supporting evidence per EMA framework. Regional SNS databases increasingly used for comparative effectiveness. No formal RWE-into-coverage framework equivalent to France\'s HAS accès précoce, but EMA standards apply.',
        links: [],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 1,
        text: 'Standard disease endpoints dominate. Functional aging assessments (Barthel, frailty index) appear in geriatric trials. No validated biological age surrogate (epigenetic clock, proteomic age) has been used as a pre-specified endpoint in any registered Spanish national prevention trial.',
        links: [],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 1,
        text: 'No national Phase II/III trials of aging-mechanism prevention agents are active in Spain. CIBERFES research produces academic evidence on frailty interventions but has not translated into registered geroscience agent trials at scale.',
        links: [],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 2,
        text: 'SCReN (Spanish Clinical Research Network, ISCIII-managed) coordinates academic clinical trials. Platforms exist for oncology (SOLTI, GELTAMO) and cardiovascular. No longevity or aging mechanism trial coordination body. CIBERFES coordinates observational aging research but not interventional trials.',
        links: [{ label: 'SCReN', url: 'https://www.scren.es/', comment: 'Spanish Clinical Research Network — ISCIII coordination platform' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 2,
        text: 'REEC (Registro Español de Estudios Clínicos) is the national trial registry with public search. Lay summaries variable in quality. No EHR-based automated patient matching or proactive GP-triggered trial invitation system is implemented nationally. SNS primary care databases have potential for this but not yet operationalised.',
        links: [{ label: 'REEC', url: 'https://reec.aemps.es/', comment: 'Spanish clinical trials registry' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 1,
        text: 'Aging is not recognised as a therapeutic indication in Spain or under EMA guidance. AEMPS and the national HTA process (IPT) are disease-indication focused. CIBERFES frames frailty and sarcopenia as conditions, not systemic aging as a primary therapeutic target.',
        links: [],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'Multi-domain functional composites (Barthel, SPPB, frailty index) are accepted as primary endpoints in Spanish geriatric indication trials per EMA guidance. Single functional endpoints have clinical precedent. Biological age surrogates not used in Spanish regulatory submissions.',
        links: [],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 1,
        text: 'Spanish HTA (IPT process via Ministerio de Sanidad, AQuAS for Catalonia) uses standard QALY methodology. No framework for valuing morbidity compression or healthspan extension specifically. IQWiG or HAS-equivalent aging-specific HTA guidance does not exist in Spain.',
        links: [],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 1,
        text: 'No reimbursement pathway for aging-prevention agents in the SNS formulary. IPT assessment process is disease-indication focused. Off-label preventive use is not SNS-reimbursed. Self-pay longevity clinics operate in a legal grey area.',
        links: [],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 2,
        text: 'Aging-adjacent drugs can apply for standard EMA PRIME designation accessible to Spanish applicants. No Spain-specific expedited aging pathway. AEMPS participates in EMA procedures that could accelerate aging-targeted products through standard EU mechanisms.',
        links: [],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 2,
        text: 'Health data access is fragmented across 17 CCAA health systems and national databases (BDCAP, CMBD, ENSE). No national single-window platform equivalent to France\'s Health Data Hub. ISCIII coordinates some data access. Researchers typically negotiate with each CCAA separately — multiple ethics committees, multiple DPAs, lengthy processes.',
        links: [],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 2,
        text: 'No unified national health identifier enabling complete cross-domain linkage across all 17 CCAA. Catalonia (CatSalut) and Basque Country (Osakidetza) have well-linked regional databases. National CMBD (hospitalisation) and BDCAP (primary care) are accessible but not routinely linked to each other or to biobank data at the national level.',
        links: [],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 2,
        text: 'LOPD-GDD (Spanish GDPR implementation) and AEPD (data protection agency) oversight. Pseudonymisation required. Secure analytical environments (TRE model) are available at some regional centres (CatSalut, Osakidetza) but not nationally standardised. Output checking not systematically enforced.',
        links: [],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 2,
        text: 'AI use on Spanish health data requires case-by-case AEPD and ethics committee approval. No dedicated AI health data access track. Spain\'s AI strategy (Plan Nacional de Inteligencia Artificial) is developing a governance framework but not yet implemented for health data specifically.',
        links: [],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 3,
        text: 'GDPR adequacy framework enables EU data sharing. Spain actively participates in EHDS preparation. Cross-border federated analysis possible with EU research partners under standard GDPR protocols. Non-EU sharing requires bilateral arrangements.',
        links: [],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 2,
        text: 'Spain has 17 different regional EHR systems (SAP/HCIS, OSABIDE, HC3, DIRAYA, etc.) with limited national interoperability. HCDSNS (Historia Clínica Digital del SNS) is a national portal that aggregates key clinical summary data, but real-time cross-CCAA EHR access for clinical care or research is limited.',
        links: [{ label: 'HCDSNS', url: 'https://www.mscbs.gob.es/profesionales/hcdsns/home.htm', comment: 'Spanish national clinical history portal — aggregates CCAA data' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 2,
        text: 'ICD-10-ES mandated for hospital billing (CMBD). Ministerio de Sanidad\'s terminological mapping centre (MSSSI) working on SNOMED CT deployment. FHIR R4 adoption initiated under national interoperability plan (ENS/SEIS standards). Implementation uneven across 17 CCAA systems.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 3,
        text: 'Spain has CMBD (hospitalisation, near-complete), RNTI (rare diseases in progress), AECC cancer registries (most CCAA), mortality registry, and RNT (transplant registry). National coverage is reasonable though cancer registries are CCAA-based with variable completeness. API access limited.',
        links: [],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 2,
        text: 'CMBD and BDCAP data available with 12–18 month lag for researchers. Near-real-time data access does not exist for research purposes. AEMPS BIFAP (primary care) has ~12 month lag. No streaming or quarterly researcher access.',
        links: [],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 2,
        text: 'Validated CMBD phenotyping algorithms exist for common conditions. SCReN is developing phenotyping tools. No national phenotype library with self-service API access. Each research project typically develops its own algorithms. Catalonia\'s CatSalut has the most developed phenotyping infrastructure nationally.',
        links: [],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 2,
        text: 'Ministerio de Sanidad interoperability standards (JCSC, ENS) define some shared coding requirements but implementation across 17 CCAA is uneven. OMOP CDM adoption beginning in some research hospitals. Cross-dataset joins require manual curation in most cases.',
        links: [],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 2,
        text: 'Research cohort linkage to SNS administrative data is possible through ISCIII coordination but requires separate negotiated agreements with each relevant CCAA. No automatic or standardised linkage pathway for all publicly-funded cohorts. LOPD compliance requirements add procedural friction.',
        links: [],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 2,
        text: 'AEI mandates data management plans for funded projects. Digital.CSIC and other repositories available for data deposit. FAIR compliance improving but not consistently enforced. Open access mandate for publications is more mature than for underlying data.',
        links: [{ label: 'Digital.CSIC', url: 'https://digital.csic.es/', comment: 'CSIC open access research data repository' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 2,
        text: 'AEMPS uses BIFAP for systematic pharmacoepidemiology and integrates with EudraVigilance. Signal detection is improving. Less automated and less comprehensively integrated into research pipelines than France\'s EPI-PHARE. CCAA health databases provide supplementary signal detection capacity.',
        links: [],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 2,
        text: 'Ley de la Ciencia (2011, revised 2022) mandates open access for publicly funded research. AEI requires pre-registration and results reporting. REEC requires trial registration. Compliance monitoring is improving but enforcement remains limited. Code sharing is encouraged but not mandatory.',
        links: [],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 5,
        text: 'As an EMA member state, Spain automatically accepts all ICH-compliant trial data from the full ICH network. EMA centralised procedures directly generate Spanish marketing authorisations. Identical position to all EU member states.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 3,
        text: 'AEMPS participates in EMA CHMP and CAT procedures, serving as rapporteur and co-rapporteur for selected products. Participates in Project Orbis for oncology products. Competent and engaged but less central to EU regulatory leadership than BfArM/PEI (Germany) or ANSM (France).',
        links: [],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'Spain is an ICH founding member via EU (1990). AEMPS participates in ICH Expert Working Groups. Full ICH implementation and standard alignment — same structural position as all founding EU member states.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'EMA centralised procedure approvals are valid in Spain without additional national review. Same position as all EMA member states. EMA abbreviated assessment of FDA-approved products is the main reliance pathway.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 4,
        text: 'Spain benefits from EU MRAs with FDA, PMDA, Health Canada, TGA, and Swissmedic. EU-wide GMP inspection mutual recognition fully operational. Same position as France and Germany as EU member states.',
        links: [],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 2,
        text: 'BSL-3 (P3) facilities at CNB-CSIC (Madrid), ISCIII National Centre for Microbiology, and select university hospitals. No domestic BSL-4 — researchers needing BSL-4 access must travel to France (Lyon) or Germany. Limited shared-access national P3 programme.',
        links: [],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 2,
        text: 'Academic GMP units at CIMA (Pamplona), Hospital La Fe (Valencia), and Hospital 12 de Octubre. Small commercial CDMO sector. Spain is primarily used as a clinical trial site by multinational pharma, not as a manufacturing hub. GMP capacity for gene therapy and cell therapy is limited relative to France or Germany.',
        links: [],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 3,
        text: 'MareNostrum 5 at the Barcelona Supercomputing Centre (BSC-CNS) is one of Europe\'s significant HPC resources — ~314 petaflops peak, Tier-0 EuroHPC node. Biomedical and AI workloads are supported. Spanish National HPC network (RES) provides access to researchers. Solid infrastructure though trailing Jülich (Germany) and Jean Zay (France) in AI specialisation.',
        links: [{ label: 'MareNostrum 5 / BSC', url: 'https://www.bsc.es/marenostrum/marenostrum-5', comment: 'Spanish flagship supercomputer — major European HPC resource' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 2,
        text: 'CNAG (Centre Nacional d\'Anàlisi Genòmica, Barcelona) provides national sequencing services. Genome Spain initiative is in early development. Sequencing throughput is at the 10k–50k research cohort scale; no national programme-level genomics infrastructure at France Génomique or GHGA scale.',
        links: [{ label: 'CNAG', url: 'https://www.cnag.eu/', comment: 'Spanish national genomics centre — main sequencing infrastructure' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 2,
        text: 'CNIO Telomeres and Telomerase Group (Blasco) operates aging model organism platforms — C. elegans and mouse aging studies. IRB Barcelona (Serrano) has cellular senescence model platforms. No nationally coordinated shared aging model organism platform. Excellent at individual lab level but not systematically accessible.',
        links: [],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 3,
        text: 'Spain participates in EU aging consortia through CIBERFES (JPI MYBL, JPND) and individual PI networks. CNIO\'s telomere biology and IRB\'s senescence groups have international co-PI roles. Moderate depth of participation — active contributor but rarely in leadership positions in major aging consortia.',
        links: [],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 2,
        text: 'GDPR-compliant EU sharing frameworks apply. EHDS preparation underway. Spain\'s fragmented CCAA health data architecture limits national data sharing capacity for international researchers. Cross-border access requires CCAA-by-CCAA negotiation for comprehensive Spanish SNS data.',
        links: [],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 3,
        text: 'Full Horizon Europe participation. ISCIII bilateral agreements with NIH, DFG, and ANR. AEI international calls active. Spanish researchers are competitive Horizon Europe applicants, particularly in health sciences. Funding integration moderate but functional.',
        links: [],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 3,
        text: 'Spain punches above its research spending level in aging biology: María Blasco (telomere biology, CNIO) is globally cited; Carlos López-Otín (hallmarks of aging, Oviedo) co-authored the defining review paper; Manuel Serrano (cellular senescence, IRB) is a field leader. These individuals have international society positions. The ecosystem around them is thin but the top researchers are world-class.',
        links: [{ label: 'Carlos López-Otín Lab', url: 'https://www.uniovi.es/investigacion/grupos/bioquimica_molecular/oncologia_molecular', comment: 'Oviedo — co-author of Hallmarks of Aging, highly cited internationally' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 2,
        text: 'OEPM (Spanish patent office) is active; PCT participation standard. Spanish academic IP culture is developing — OTRI improvements since 2015 but commercialisation rates remain low relative to Northern Europe. Brain drain reduces patent generation from the most productive researchers.',
        links: [],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 3,
        text: 'Spain had among the highest COVID-19 vaccination uptake in the EU (>80%), demonstrating strong public trust in health authorities relative to regional neighbours. General institutional trust in medicine is good. Anti-science movements are present but not dominant. Trust in public health guidance is higher than in France or Eastern Europe.',
        links: [],
      },
      [SocietalReadinessClaim.AGING_MEDIA_FRAMING]: {
        score: 2,
        text: 'Mediterranean culture values "envejecer bien"; active ageing is a familiar policy phrase. Leading newspapers cover brain ageing, dementia risk, and lifestyle with solid science reporting, but the dominant popular frame is healthy habits and disease outcomes — not geroscience (hallmarks, senolytics, biological age) as mass vocabulary. Pensions and dependency remain the political face of ageing.',
        links: [
          { label: 'El País — patterns of brain ageing (imaging study)', url: 'https://elpais.com/salud-y-bienestar/2024-09-03/un-estudio-identifica-cinco-formas-distintas-de-envejecer-gracias-a-los-datos-de-50000-escaneres-cerebrales.html', date: 'Sep 2024', comment: 'Major daily — individual variation in how the brain ages; disease-risk framing' },
          { label: 'El País — Ana María Cuervo on autophagy and ageing', url: 'https://elpais.com/salud-y-bienestar/2024-05-17/ana-maria-cuervo-biologa-la-vejez-es-como-una-enfermedad-que-aun-no-se-ha-manifestado-si-no-haces-nada-se-manifestara.html', date: 'May 2024', comment: 'Interview — cellular ageing and lifestyle; still healthspan/prevention led for a general reader' },
        ],
      },
      [SocietalReadinessClaim.POLICY_COMMITMENT]: {
        score: 2,
        text: 'The Estrategia Nacional para el Envejecimiento Activo y Saludable provides a policy framework, and the 2022 Ley de la Ciencia included some aging research provisions. IMSERSO channels significant social care funding toward older adults. However, dedicated longevity science funding with ring-fenced budget and multi-year commitment is absent; the 17-CCAA structure makes national coordination difficult; and coalition instability (Spain has had five governments since 2018) works against long-cycle programme commitments. No longevity agency or statutory healthspan target exists.',
        links: [],
      },
      [SocietalReadinessClaim.LEGISLATIVE_SALIENCE]: {
        score: 1,
        text: 'National political energy on aging concentrates on pension sustainability (revalorisation, MEI/solidarity contributions, contribution bases) and dependency-system financing — demographic and social-protection framing in Congreso/Budget law. The Ministry of Health maintains an active and healthy ageing promotion stream under the SNS, but Cortes salience and party platforms do not treat geroscience or biological longevity as a competing electoral mandate.',
        links: [
          { label: 'Ministerio de Sanidad — Envejecimiento activo y saludable', url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/envejecimientoSaludable/activo/home.htm', comment: 'National healthy/active ageing framework (executive; not party geroscience)' },
          { label: 'BOE — consolidated legal text (pensions / social security)', url: 'https://www.boe.es/buscar/pdf/2024/BOE-A-2024-1691-consolidado.pdf', date: '2024', comment: 'State gazette PDF — pension / social-security architecture' },
        ],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 2,
        text: 'AEMPS enforces regulations on health product claims. The Consejo General de Colegios Oficiales de Médicos has positions against unproven therapies. However, "naturopatía", homeopathy, and unproven anti-aging treatments (ozone, IV vitamins, hormone optimisation) are widespread in Spain, with partial institutionalisation in some CCAA health policies. Enforcement is reactive and inconsistent.',
        links: [],
      },
    },
  },
}

export default spain
