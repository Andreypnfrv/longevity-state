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

const france: CountryData = {
  country: Country.FRANCE,

  metrics: {
    lifeExpectancy:        { value: 82.3, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 73.1, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.268, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'The "Passeport Talent – Chercheur" (implementing EU Researcher Directive 2016/801) provides a 4-year renewable permit for researchers with a hosting agreement from an approved research institution. Covers postdocs, senior researchers, and PhD students. EU free-movement applies to EU nationals. Process is reasonably clear though institution-dependent.',
        links: [{ label: 'Passeport Talent Chercheur', url: 'https://www.service-public.fr/particuliers/vosdroits/F16922', comment: 'Official French researcher visa pathway' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 2,
        text: 'Processing time varies significantly by préfecture — Paris préfecture is notoriously slow (2–4 months); provincial préfectures typically 4–8 weeks. No national fast-track for research institutions. The ANEF digital portal reduced some friction but backlogs persist in major cities where most research institutions are located.',
        links: [],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 3,
        text: 'ENIC-NARIC France (CIEP) evaluates foreign academic credentials. EU degrees are auto-recognised. Non-EU PhDs require a recognition certificate, typically issued within 4–8 weeks. For NIH-style grant purposes, institutional-level recognition by INSERM, CNRS, or universities is generally sufficient without formal CIEP evaluation.',
        links: [{ label: 'ENIC-NARIC France', url: 'https://www.ciep.fr/enic-naric-france/', comment: 'French foreign credential recognition service' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 3,
        text: 'Passeport Talent is accessible for postdoc contracts, which are standard employment contracts in French public research. INSERM and CNRS "contrat de chercheur" typically meet the hosting agreement requirement. Income thresholds for Passeport Talent are calibrated to academic salaries. Earlier-career friction exists if not formally contracted.',
        links: [],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 3,
        text: 'Carte de résident (permanent residency) is available after 5 years. CNRS and INSERM CR/DR permanent positions offer long-term stability competitive with any system globally. France\'s research career track provides tenure-equivalent security. Language requirements (French B1) for PR can be a barrier for non-Francophone researchers.',
        links: [],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 2,
        text: 'EU/EEA clinicians are recognised under EU Directive 2005/36/EC. Non-EU physicians must complete the Procédure d\'Autorisation d\'Exercice (PAE) — now partially reformed via PADHUE (2019–2021). Process requires degree verification, French language examination, and potentially competency tests. Significant backlog remains despite reform.',
        links: [{ label: 'PADHUE Reform', url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038624990', comment: 'PADHUE reform law simplifying foreign physician licensing' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 2,
        text: 'The PAE/PADHUE process is documented by the Centre National de Gestion (CNG) but remains complex — involving dossier submission, evaluation commission review, practical assessment, and language exam. No digital single-window. Regional variation in administration adds friction.',
        links: [{ label: 'CNG PAE Process', url: 'https://www.cng.sante.fr/praticiens-etrangers', comment: 'CNG guidance on foreign medical practitioner licensing' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 2,
        text: 'End-to-end PAE processing for non-EU physicians typically takes 12–24 months. A waiting period for competency assessment slots and the commission review cycle means even qualified applicants face multi-year timelines before independent practice. Backlog persists despite PADHUE reforms.',
        links: [],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 2,
        text: 'Foreign physicians awaiting PAE completion can hold FFI (Faisant Fonction d\'Interne) status — supervised practice in a single hospital service. This provides meaningful clinical exposure but is structurally subordinate. Independent practice requires full Autorisation d\'Exercice.',
        links: [],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 3,
        text: 'France\'s PU-PH (Professeur des Universités – Praticien Hospitalier) system explicitly and legally combines an academic university position with a hospital clinical position. This dual-appointment model is well-funded and prestigious. Foreign clinicians who qualify can access this structure, though the Habilitation à Diriger des Recherches (HDR) requirement is a high bar.',
        links: [],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 2,
        text: 'Aging biology appears in PACES/PASS (first year health) and L3/M1 life science curricula but without dedicated geroscience modules. Undergraduate research opportunities exist through INSERM and CNRS summer programmes but are less formalised than NIH SURF equivalents. Longevity science as a named discipline is absent from bachelor-level teaching.',
        links: [],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 3,
        text: 'Strong aging PhD ecosystem: INSERM units specialised in aging (U1074, U1167 for neurodegeneration, multiple Paris/Lyon/Bordeaux sites), Institut Pasteur aging and microbiology programs, CEA ageing biology at Fontenay. Écoles Doctorales in Paris (BIOSPC, BioSPC) include aging tracks. International recruitment via INSERM "Poste d\'Accueil Étranger".',
        links: [{ label: 'INSERM Research Units', url: 'https://www.inserm.fr/recherche-en-sante/unites-et-structures-de-recherche/', comment: 'INSERM research unit directory including aging units' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 3,
        text: 'ANR postdoctoral fellowships and INSERM "Contrats Post-Doctoraux" fund aging-focused postdocs at €2,300–2,900/month net. EMBO and Marie Skłodowska-Curie fellowships widely used. Career transition to permanent CNRS/INSERM positions (highly competitive, ~5% success rate) is prestigious but creates a bottleneck.',
        links: [{ label: 'ANR Postdoctoral Programme', url: 'https://anr.fr/fr/labelisations-et-certifications/labcom/', comment: 'ANR postdoctoral funding — French research council postdoc track' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 3,
        text: 'Most PhD positions in INSERM and CNRS labs are funded through project grants (ANR, ERC, H2020/HE) or contrats doctoraux from Ministère de l\'Enseignement Supérieur. Stipends are regulated (minimum €2,025/month since 2023 reform). Near-universal coverage for competitive aging PhD programs at major institutions.',
        links: [],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 2,
        text: 'CIFRE (Convention Industrielle de Formation par la Recherche) funds industry co-supervised PhD projects — about 1,400/year nationally but limited longevity-biotech examples. France lacks a dense longevity biotech cluster compared to Cambridge/Basel/Munich. Sanofi and Ipsen maintain academic collaborations but not systematically in longevity.',
        links: [{ label: 'CIFRE Scheme', url: 'https://www.anrt.asso.fr/fr/le-dispositif-cifre-7844', comment: 'French industry co-PhD funding — limited longevity application' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 3,
        text: 'Gériatrie is a well-established DES (Diplôme d\'Études Spécialisées) specialty in France — 4-year training following internat. Approximately 3,000 geriatricians for 68M population; adequate relative to EU average though below projected demographic need. The Société Française de Gériatrie et Gérontologie (SFGG) is active and the specialty has reasonable academic prestige.',
        links: [{ label: 'SFGG', url: 'https://sfgg.org/', comment: 'French Geriatrics Society — specialty standards and advocacy' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 2,
        text: 'Geriatrics clinical rotation is mandatory in the DCEM cycle (clinical years). Aging biology in the pre-clinical PCEM/PASS years is limited to physiology. The 2020 medical curriculum reform (R2C) maintained geriatrics as a defined learning objective but did not introduce longevity medicine or preventive aging science.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 3,
        text: 'DES Gériatrie (4 years, including internal medicine and geriatric-specific stages) is well-structured, particularly at AP-HP Paris, HCL Lyon, and Bordeaux. Academic geriatrics with a translational aging research component is available at CHU-university interfaces. Clinical care of older patients at CHUs is generally of high quality.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 2,
        text: 'SFGG and Conseil National de l\'Ordre des Médecins offer CME modules in geriatrics and frailty. Longevity medicine CME covering biological aging interventions (senolytics, mTOR, caloric restriction) is not formalised. DPC (Développement Professionnel Continu) programs on aging are available but not targeted at longevity science.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 2,
        text: 'ONDPS (Observatoire National de la Démographie des Professions de Santé) publishes geriatrician supply-demand projections showing moderate shortage. The 2022 PLFSS included measures to expand geriatrics training posts. Implementation is slower than projections indicate is needed for an aging population of 68M.',
        links: [],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 3,
        text: 'France has structured MD+PhD pathways: the "Médecin-Chercheur" track at major CHUs (AP-HP, HCL) and INSERM; the 4th-year thesis option within internat for motivated clinicians; and formal MD-PhD programs at some medical schools (Paris-Cité, Sorbonne). INSERM\'s "Poste d\'Accueil" allows practicing clinicians to do research periods.',
        links: [],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 3,
        text: 'INSERM funds "Contrats d\'Interface" enabling hospital clinicians to spend 50% time in research labs. PHRC (Programme Hospitalier de Recherche Clinique) provides competitive grants for clinician-led studies. MD-PhD programs have public stipends. The PU-PH funding model (dual academic + hospital salary) provides long-term financial viability.',
        links: [{ label: 'INSERM Contrats Interface', url: 'https://www.inserm.fr/chercheurs-et-personnels/accompagnement-carriere/medecins-chercheurs/', comment: 'INSERM funding for clinician-researcher dual careers' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 2,
        text: 'Aging research is available as a PhD track within INSERM units but is not prominently advertised as a clinician-scientist specialisation. Neurodegenerative disease (Alzheimer, Parkinson) is the strongest aging-adjacent clinician-scientist pathway, via Institut du Cerveau and DZNE-equivalent French centres. Pure geroscience clinician-scientist track is nascent.',
        links: [],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 3,
        text: 'PU-PH contracts legally allocate time between clinical practice (Praticien Hospitalier) and academic research (Professeur des Universités). INSERM Contrats d\'Interface explicitly protect 50% research time. These are contractualised and enforceable — a stronger protection mechanism than in Germany, though clinical pressure still erodes it in practice.',
        links: [],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 3,
        text: 'The PU-PH track is prestigious and well-compensated in the French academic medical system. Clinician-scientists are respected in the medical hierarchy. Research performance (publications, grants, HDR) is assessed separately from clinical performance. The career path is genuinely viable for motivated individuals at major CHUs, though positions are highly competitive.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 3,
        text: 'INSERM total budget ~€1B+ per year (across all biomedical research); ANR allocates ~€100–150M annually to aging-adjacent programs; Plan France 2030 health investments include aging-related IHUs (Institut Hospitalo-Universitaire). No single ring-fenced aging institute at NIA scale, but aggregate investment is significant.',
        links: [{ label: 'INSERM', url: 'https://www.inserm.fr/', comment: 'French national biomedical research institute — primary aging funder' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 3,
        text: 'Portfolio spans basic aging biology (INSERM/CNRS units), neurodegenerative disease (Institut du Cerveau, INRAe aging-metabolism), cancer-aging interface, and translational programs. No single disease captures >50% of aging-relevant funding. INSERM explicitly funds hallmarks-of-aging research at multiple units.',
        links: [],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 3,
        text: 'INSERM and CNRS permanent research positions (CR, DR) provide structural funding stability unmatched in most systems. ANR project grants are 3–4 years; ERC grants extend to 5. Équipes INSERM labelisées receive base operating funding. France 2030 IHU endowments create 10-year funding commitments at flagship centres.',
        links: [],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 2,
        text: 'SATT (Sociétés d\'Accélération du Transfert de Technologies) network handles tech transfer from public research — 14 regional SATTs covering all universities and INSERM units. TTO performance varies significantly. Spinout process averages 12–18 months. Inventor share is defined by code (10–50% after costs). Improving but below Bayh-Dole-type standards.',
        links: [{ label: 'SATT Network', url: 'https://www.gouvernement.fr/les-societes-d-acceleration-du-transfert-de-technologies-satt', comment: 'French tech transfer office network' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 2,
        text: 'Fondation pour la Recherche Médicale (FRM) and Fondation de France provide philanthropic aging grants. Institut Pasteur has its own fundraising. French longevity VC is limited — no equivalent of California longevity cluster. Large pharma (Sanofi, Ipsen, Servier) maintain academic partnerships but not in core geroscience.',
        links: [],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 2,
        text: 'ANR peer review is methodical but conservative. The Agence d\'Innovation en Santé (AIS, est. 2021) was created to enable more directed, ARPA-adjacent health innovation funding. Programme Prioritaire de Recherche (PPR) for aging was launched. However the culture of rigor and consensus review still dominates; radical aging hypotheses remain hard to fund.',
        links: [{ label: 'Agence Innovation Santé', url: 'https://innovationsante.gouv.fr/', comment: 'French health innovation agency — more directed than ANR' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 3,
        text: 'Somatic gene editing trials are regulated by ANSM under the EU ATMP framework (Règlement ATMPs). Multiple French gene therapy trials are active via Généthon, Institut Imagine, and CHU sites. AFM-Téléthon\'s manufacturing infrastructure has positioned France as a gene therapy clinical trial hub, particularly in rare monogenic diseases.',
        links: [{ label: 'Généthon Gene Therapy', url: 'https://www.genethon.fr/', comment: 'French gene therapy institute — major somatic gene editing trial hub' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 3,
        text: 'ANSM CTA review for gene editing trials typically takes 6–12 months. Pre-submission scientific advice (ATMP Committee) is available and recommended. ANSM is considered a competent and scientifically rigorous NCA within EMA. No fast-track below 6 months; complex ATMPs may require CHMP referral.',
        links: [],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 3,
        text: 'ANSM has dedicated ATMP expertise and participates actively in EMA CAT (Committee for Advanced Therapies) working groups. Guidance for new modalities (base editing, prime editing, in vivo gene editing) is issued within the EU framework. Pre-submission meetings enable iterative regulatory strategy development.',
        links: [],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 2,
        text: 'French Loi de Bioéthique (last revised 2021) prohibits germline clinical application. Research on human embryos is technically permitted under strict conditions with Agence de la Biomédecine (ABM) and CCNE authorization — unlike Germany\'s blanket criminal prohibition. In practice, basic germline research is possible under ethics oversight, but clinical pathways are absent.',
        links: [{ label: 'Loi de Bioéthique 2021', url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043884384', comment: '2021 bioethics law revision — permits supervised embryo research' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 2,
        text: 'No specific regulatory pathway for longevity endpoints in gene editing applications. ANSM follows EMA standards where aging biomarkers are exploratory secondary endpoints. Longevity as a primary indication is not recognised. AFM-Téléthon infrastructure is focused on disease treatment, not aging prevention.',
        links: [],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 2,
        text: 'Bpifrance Innovation runs challenge-based calls and direct investment programmes. The Agence d\'Innovation en Santé (AIS, 2021) was explicitly created to adopt a more directed, programme-manager approach to health innovation — closer to ARPA model than traditional ANR. Scale remains modest and longevity is not a named programme area.',
        links: [{ label: 'AIS', url: 'https://innovationsante.gouv.fr/', comment: 'French health innovation agency with directed-programme mandate' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 1,
        text: 'No French innovation agency has an explicit longevity mandate. INCa (cancer) and Inserm-dominated health priorities dominate AIS programming. Aging appears as a horizontal theme in France 2030 health investments but no dedicated longevity programme with measurable healthspan targets has been announced.',
        links: [],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 2,
        text: 'AIS and Bpifrance offer non-dilutive grants and challenge contracts for health innovation. ANR provides traditional peer-reviewed grants. For longevity, instruments are non-dilutive but not challenge-based with quantified aging biology targets. PPR Longévité (Programme Prioritaire de Recherche) exists but is more like a traditional consortium grant.',
        links: [],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 2,
        text: 'Bpifrance and AIS standard terms allow foreground IP to vest with the performing company or institution. Terms are published but less uniformly structured than DARPA BAA. SATT involvement in public-sector IP adds a layer of complexity. Improving under the France 2030 simplification agenda.',
        links: [],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 1,
        text: 'French health innovation challenges are framed around disease areas and care efficiency, not quantified aging biology metrics. No active challenge specifies reversal of a hallmark of aging, reduction in biological age, or extension of healthspan as a measurable programme goal.',
        links: [],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'France benefits fully from EMA adaptive pathways: PRIME designation, conditional marketing authorisation, and accelerated assessment. ANSM is an active NCA serving as rapporteur/co-rapporteur. Additionally, France\'s national accès précoce system (post-ATU reform) provides conditional early reimbursement with evidence generation requirements.',
        links: [{ label: 'Accès Précoce HAS', url: 'https://www.has-sante.fr/jcms/p_3230641/fr/acces-precoce', comment: 'French early access system — conditional reimbursement with evidence generation' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'EMA rolling review is fully accessible. ANSM participated actively in COVID-19 rolling reviews. For products in PRIME or with accelerated designation, rolling review is standard practice. ANSM scientific capacity is respected within the EMA network.',
        links: [],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'EMA surrogate endpoint standards apply. Aging-adjacent surrogates (frailty indices, functional composites) are accepted in geriatric indications per EMA guidance. France follows EMA standards. No France-specific advancement. True aging biology surrogates remain exploratory.',
        links: [],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 4,
        text: 'HAS\'s REEVALUATION system and accès précoce mandatory cohort studies create real post-market evidence generation. ANSM integrates SNDS-based pharmacovigilance (via EPI-PHARE) into drug safety reviews. France\'s combination of EMA PASS/PAES and national HAS reassessment creates one of Europe\'s most rigorous post-market frameworks.',
        links: [{ label: 'EPI-PHARE', url: 'https://www.epi-phare.fr/', comment: 'ANSM-CNAM joint epidemiology unit — world-class pharmacovigilance using SNDS' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 5,
        text: 'France\'s accès précoce (formerly Autorisation Temporaire d\'Utilisation, ATU) is arguably the world\'s best compassionate/early access system: broad eligibility, systematic cohort data collection, mandatory real-world evidence generation, Assurance Maladie reimbursement during access, and formal integration into HAS benefit assessment. No comparable system exists globally.',
        links: [{ label: 'HAS Accès Précoce Guide', url: 'https://www.has-sante.fr/jcms/p_3230641/fr/acces-precoce', comment: 'World-leading early access programme — mandatory RWE collection' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 4,
        text: 'EMA adaptive design guidance fully applies. France is a leader in adaptive oncology trials through UNICANCER platform (AcSé series, INCa-funded adaptive designs). CAPRI network (Centre pour l\'Amélioration des Pratiques de Recherche et d\'Innovation en santé) promotes adaptive methodology. ANSM pre-submission meetings support protocol development.',
        links: [],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'EMA guidance on synthetic and external controls applies. SNDS provides exceptionally rich real-world data for external control arm construction — France has structural advantages for synthetic control quality relative to most countries. ANSM follows EMA standards for acceptance in submissions.',
        links: [],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'ANSM permits DCT elements under EU CTR: home nursing visits, telemedicine follow-up, local lab sample collection, ePRO. The HAS and ANSM issued joint guidance on virtual and decentralised trial components. CHU infrastructure supports hybrid trial models. Full virtual primary endpoint trials are not yet standard.',
        links: [],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 4,
        text: 'France is a European leader in oncology platform trials: AcSé programmes (INCa-funded, multiple tumour types), molecular profiling-driven adaptive trials (SHIVA, SAFIR), and LYSA lymphoma platforms. UNICANCER provides the national sponsor infrastructure for multi-arm platform designs. EMA collaboration for EU-level platform protocol harmonisation.',
        links: [{ label: 'AcSé Platform Trials', url: 'https://www.e-cancer.fr/Professionnels-de-sante/Les-essais-cliniques/Essais-cliniques-de-precision/AcSe', comment: 'INCa-funded adaptive platform trial programme' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 4,
        text: 'SNDS (67M person-years linked health data) makes France structurally advantaged for RWE. EPI-PHARE conducts systematic real-world safety and effectiveness studies for ANSM/HAS. HAS uses SNDS-based cohort studies in ASMR reassessments. France\'s accès précoce system explicitly generates cohort RWE for coverage decisions — a world-leading integration model.',
        links: [],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 3,
        text: 'France has multiple health innovation sandbox mechanisms: Article 51 LFSS (Loi de Financement de la Sécurité Sociale) allows experimental healthcare delivery models with defined derogation from standard rules; Agence du Numérique en Santé operates a digital health innovation sandbox; and AIS runs directed "programmes d\'accélération" for priority health challenges.',
        links: [{ label: 'Article 51 LFSS', url: 'https://www.has-sante.fr/jcms/p_3237396/fr/article-51', comment: 'French healthcare innovation experimentation framework' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 2,
        text: 'Article 51 primarily covers organisational and care pathway innovations; digital health; some combination products. Novel drugs and biologics are excluded — standard ANSM/EMA pathway required. No equivalent sandbox for gene therapy or senolytic innovations outside standard clinical trial authorisation.',
        links: [],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 3,
        text: 'Article 51 experiments enrol real Assurance Maladie-covered patients with defined eligibility. Digital health sandbox includes patient-facing applications with real users. For drug innovation, compassionate use (accès précoce) functions as a de facto sandbox for real patient access before approval.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 3,
        text: 'Article 51 experiments have a defined legal derogation framework with explicit ministerial authorisation. Accès précoce provides legal cover for pre-approval drug use with Assurance Maladie reimbursement. Physician liability in approved experimental contexts is structured though not equivalent to full indemnity.',
        links: [],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 1,
        text: 'No French sandbox has been applied to longevity interventions. Article 51 experiments to date cover digital therapeutics, care coordination, and screening organisation. Biological aging prevention applications have no dedicated regulatory innovation pathway in France beyond standard ATMPs and clinical trials.',
        links: [],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'ANSM follows EMA guidance: aging biomarkers accepted as exploratory secondary endpoints; functional composites (frailty index, SPPB, grip strength) accepted in geriatric indications. No France-specific advancement beyond EMA practice. Biological age surrogates (epigenetic clocks, proteomic age) are not used in submission dossiers.',
        links: [],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 2,
        text: 'EMA CHMP Biomarker Qualification procedure is the available pathway; ANSM participates in EMA processes. Typical timeline 5–10 years for novel aging biomarkers. No national shortcut. France\'s SNDS provides exceptional normative data that could accelerate qualification submissions for epidemiologically-grounded aging biomarkers.',
        links: [],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'Standard EMA companion diagnostic co-development framework applies. Institut Imagine and Centre de Référence Maladies Rares have some co-development experience for rare disease diagnostics. No dedicated aging endpoint co-development pathway. INCa biomarker programmes target cancer indications.',
        links: [],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 3,
        text: 'CONSTANCES cohort (200,000 opt-in participants, linked to SNDS, longitudinal 5-year follow-up) is a world-class aging biomarker reference. 3C cohort, PAQUID, and GAZEL provide supplementary aging reference populations. SNDS provides complete claims-based follow-up. Infrastructure rivals UK Biobank in linkage depth.',
        links: [{ label: 'CONSTANCES Cohort', url: 'https://www.constances.fr/', comment: '200k French population cohort with SNDS linkage — key aging reference' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 3,
        text: 'INSERM coordinates aging biomarker measurement protocols across its units. CONSTANCES uses harmonised protocols enabling cross-cohort comparison. France participates in EU aging biomarker standardisation (MARK-AGE, JPI MYBL consortia). SNDS-based biomarker endpoints have defined coding standards.',
        links: [],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Cardiovascular risk assessment (lipids, blood pressure, glucose) is reimbursed in primary care and included in the bilan de santé (preventive health check) via Assurance Maladie. No systematic proactive invitation programme equivalent to Germany\'s Check-up. GP-initiated rather than proactive, but fully funded.',
        links: [],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.INTEGRATED,
        text: 'National organised mammography programme (ages 50–74, every 2 years): personal invitation letters, double reading, quality assurance managed by regional structures. Results transmitted to treating GP. One of the most comprehensively organised breast cancer screening programmes in Europe; ~50% participation rate.',
        links: [{ label: 'Programme National Dépistage Cancer du Sein', url: 'https://www.e-cancer.fr/Comprendre-prevenir-depister/Se-faire-depister/Depistage-du-cancer-du-sein', comment: 'French national breast cancer screening programme' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'National organised FIT stool test programme (ages 50–74, every 2 years): personal invitation letters from Assurance Maladie since 2009. Positive FIT triggers colonoscopy. National coordination by INCa and Assurance Maladie. Participation ~34% nationally — below target but structured.',
        links: [{ label: 'Programme Dépistage CCR', url: 'https://www.e-cancer.fr/Comprendre-prevenir-depister/Se-faire-depister/Depistage-du-cancer-colorectal', comment: 'French national colorectal cancer screening' }],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'National organised cervical cancer screening programme (ages 25–65): cytology for 25–29, HPV primary test for 30–65, 3-year intervals. Personal invitation letters from Assurance Maladie since 2018 reform. Co-testing extended under HAS guidance. French programme is well-organised by EU comparison.',
        links: [],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national AAA ultrasound screening programme in France. Ultrasound can be ordered by physicians with clinical indication but is not a systematic population-level programme. No HAS recommendation for organised AAA screening as of 2024.',
        links: [],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'HbA1c and fasting glucose are reimbursed as part of cardiovascular bilan in primary care. Assurance Maladie\'s Sophia programme provides active disease management for diagnosed diabetics. Risk-based GP-triggered screening rather than population invitation. Fully funded but relies on GP initiative.',
        links: [{ label: 'Sophia Programme', url: 'https://www.ameli.fr/medecin/exercice-liberal/prise-charge-patients/programmes-sophia-prado/programme-sophia', comment: 'Assurance Maladie diabetes prevention and management programme' }],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'DEXA reimbursed by Assurance Maladie only for women with specific risk factors (prior fracture, corticosteroid use, early menopause) or upon clinical indication. FRAX-based risk assessment recommended by HAS. No systematic population invitation programme; patient co-pay applies in most cases.',
        links: [],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national lung cancer CT screening programme yet. INCa published favourable assessment (2022) and pilot programmes are underway in several regions. National programme launch anticipated post-2025. Currently IGeL-equivalent: available privately, not systematically reimbursed.',
        links: [{ label: 'INCa Lung Cancer Screening', url: 'https://www.e-cancer.fr/Comprendre-prevenir-depister/Se-faire-depister/Depistage-du-cancer-du-poumon', comment: 'INCa assessment of lung cancer CT screening' }],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No systematic AF screening programme. Pulse palpation and opportunistic ECG are standard in French primary care consultations for cardiovascular risk. Wearable-based AF detection (Apple Watch, Kardia) growing but without clinical integration. HAS has not recommended organised AF screening.',
        links: [],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No national cognitive screening programme. Plan Maladies Neurodégénératives (PMND 2021–2025) focuses on care pathways and research rather than population screening. Cognitive assessment is GP-triggered on symptom presentation. Memory clinics (Centres Mémoire de Ressources et de Recherche, CMRR) are available nationwide.',
        links: [],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.ABSENT,
        text: 'Polygenic risk scoring is limited to research settings. France\'s Loi de Bioéthique requires specific consent and genetic counselling for predictive genetic testing. No clinical programme using PRS-based population stratification is reimbursed or in development.',
        links: [],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national sarcopenia screening programme. Muscle mass assessment (grip strength, DEXA, BIA) is performed in geriatric consultations but not as a systematic primary care programme. SFGG guidelines exist for sarcopenia diagnosis but without a screening infrastructure.',
        links: [],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Polysomnography and polygraphie ventilatoire reimbursed by Assurance Maladie on GP or specialist prescription for symptomatic patients. No proactive population-level screening programme. Questionnaire-based screening (Epworth, Berlin) is in GP use but not standardised nationally.',
        links: [],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'HAS methodical evaluation process for adding new screenings to the national programme typically takes 3–5 years from evidence review to INCa/DGS commissioning. Pilot programmes under Article 51 can test new screenings regionally. No systematic rapid evaluation pathway. EU-level recommendations trigger national review but implementation lag persists.',
        links: [],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 2,
        text: 'CONSTANCES cohort enrolled 200,000 participants (2012–2018) via opt-in recruitment through CPAM (Assurance Maladie) — leveraging insurance contact points for recruitment. 3C, PAQUID, and GAZEL provide additional aging cohorts. Total research biobank coverage substantial but not population-level opt-out.',
        links: [{ label: 'CONSTANCES', url: 'https://www.constances.fr/', comment: 'French flagship population cohort — 200k participants' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 3,
        text: 'CONSTANCES participants are re-contacted for annual questionnaire follow-up and periodic clinical re-examination visits (~5-year intervals). Active re-contact protocol exists. SNDS provides continuous passive follow-up between visits. The combination of active re-contact and passive SNDS linkage creates a dense longitudinal record.',
        links: [],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 3,
        text: 'CONSTANCES includes genotyping (GWAS array), blood sample storage, cognitive assessments, audiometry, physical performance, and functional tests. Multi-omic expansion (proteomics, metabolomics sub-cohorts) is underway. Biomarker depth is good but full multi-omic coverage (genomics + epigenomics + proteomics + metabolomics) is available only in sub-cohorts.',
        links: [],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 4,
        text: 'CONSTANCES is linked to SNDS — providing complete hospital (PMSI), drug dispensing, long-term disease (ALD), and death records for all participants. SNDS linkage covers 100% of France\'s 67M population. This clinical linkage depth — complete national health records for all participants — is world-class and exceeds most biobanks.',
        links: [],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 3,
        text: 'CONSTANCES data access via INDS (Institut National des Données de Santé) with standard application; typical approval 4–8 weeks. SNDS access through Health Data Hub has improved significantly since 2019. International researcher access possible under GDPR framework. Application process is reasonable though not yet as fast as UK Biobank RAP.',
        links: [{ label: 'Health Data Hub', url: 'https://www.health-data-hub.fr/', comment: 'French health data access platform — SNDS and linked datasets' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 3,
        text: 'SNDS enables register-based outcome capture reducing per-patient follow-up costs. CAPRI network supports adaptive trial methodology. CPP (Comités de Protection des Personnes) ethics approval takes 2–3 months. Overall: better than Germany or US for SNDS-linked outcomes; complex multinational approval still adds cost.',
        links: [],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 4,
        text: 'HAS accès précoce with mandatory cohort data collection explicitly integrates RWE into coverage decisions. EPI-PHARE studies using SNDS inform HAS reassessments. ANSM accepts SNDS-based pharmacovigilance as primary safety evidence. France has one of Europe\'s clearest frameworks for RWE in regulatory and HTA contexts.',
        links: [],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 1,
        text: 'French clinical trials use standard disease endpoints. Functional aging assessments (frailty, ADL, MMSE) appear in geriatric trials. Validated biological age surrogates are not used as pre-specified endpoints in any registered national prevention trial.',
        links: [],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 1,
        text: 'No national Phase II/III trials of primary aging-mechanism prevention agents (senolytics, mTOR inhibitors for longevity, NAD precursors as prevention) are registered in France. Academic interest at INSERM units exists but has not translated into national prevention trial infrastructure for geroscience agents.',
        links: [],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 3,
        text: 'France has strong national trial coordination for oncology (INCa, UNICANCER), neurology (FCRIN INNOVATIVE-OH network), and cardiovascular (CARDIF network). GIRCI (Groupements Interrégionaux de Recherche Clinique et d\'Innovation) coordinate academic trials by region. No longevity-specific coordination body but multi-disease infrastructure is mature.',
        links: [],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'Registre des Essais Cliniques (clinicaltrials.gov mandatory for French trials + ANSM notification). Health Data Hub has prototyped SNDS-based patient matching for trial eligibility. Some CHUs implement EHR-triggered trial alerts. Uptake not yet universal but infrastructure improving — among better in Europe.',
        links: [],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 1,
        text: 'Aging is not recognised as a therapeutic indication in France. HAS ASMR/SMR benefit ratings are disease-focused. No regulatory or reimbursement pathway exists for systemic aging prevention. INSERM frames aging research within disease prevention, not longevity science.',
        links: [],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'Multi-domain functional composites (frailty index, Short Physical Performance Battery, Barthel, MMSE) accepted as primary endpoints in geriatric indication trials per EMA/ANSM standards. Single functional endpoints have precedent in sarcopenia. Biological age surrogates not used in submission dossiers.',
        links: [],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 2,
        text: 'HAS uses standard QALY methodology (Chol, EQ-5D) for economic assessments. No dedicated HAS methodology for valuing healthspan extension or morbidity compression. IQWiG equivalent (HAS) has not published aging-specific HTA frameworks beyond standard QALY.',
        links: [],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 1,
        text: 'No reimbursement pathway for aging-prevention agents. ASMR assessment framework is disease-benefit focused. Off-label preventive use is not reimbursed by Assurance Maladie. Accès précoce requires an indication with defined benefit and unmet medical need.',
        links: [],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 2,
        text: 'Aging-adjacent drugs can apply for EMA PRIME designation and French accès précoce. No aging-specific expedited designation exists at the national level. ANSM participates in EMA processes that could accelerate aging-targeted products through standard fast-track mechanisms.',
        links: [],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 3,
        text: 'The Health Data Hub provides a single-window access point for SNDS and linked datasets. Standard research projects receive approval decisions within 4–8 weeks. Tiered researcher authorisation (CESREES committee) has improved significantly since 2019. Digital application portal. Significantly improved relative to the pre-2019 fragmented process.',
        links: [{ label: 'Health Data Hub', url: 'https://www.health-data-hub.fr/', comment: 'Single-window access to French national health data' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 5,
        text: 'SNDS is one of the world\'s most comprehensively linked health databases: complete medication dispensing, hospitalisation (PMSI with DRG-level detail), cause of death, long-term disease status (ALD), and soon EHR for all 67M French residents. Deterministic linkage via pseudonymised NIR (social security number). Research cohorts (CONSTANCES, 3C) linked by default.',
        links: [{ label: 'SNDS', url: 'https://www.health-data-hub.fr/snds', comment: 'Système National des Données de Santé — world-class linked health database' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 4,
        text: 'Health Data Hub provides a secure processing environment (Espace de Traitement des Données) with code-to-data paradigm. Pseudonymisation is robust (CNIL-validated). Synthetic data generation capability is in development. Privacy controls are best-in-class for European standards; approaching OpenSAFELY tier for standard analytical use cases.',
        links: [],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 3,
        text: 'Health Data Hub has a dedicated AI/ML access track. AI projects reviewed by CESREES with a 4–8 week standard timeline. Model output checking required. Under France 2030 and the national AI strategy, AI health data infrastructure is a priority — improving faster than most EU countries.',
        links: [],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 3,
        text: 'GDPR adequacy framework enables EU data sharing. France is actively preparing for EHDS (European Health Data Space). GA4GH-aligned federated analysis protocols being implemented. SNDS data can be made available to EU research partners under standard INDS protocols. Non-EU sharing requires more negotiation.',
        links: [],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 2,
        text: 'Mon Espace Santé (the successor to the Dossier Médical Partagé) launched in January 2022 as an opt-out longitudinal patient record. Uptake has been growing but EHR integration from hospital systems (ORBIS, Crossway, DXCare) remains fragmented and incomplete. Data is fed from a patchwork of proprietary systems without enforced standards.',
        links: [{ label: 'Mon Espace Santé', url: 'https://www.monespacesante.fr/', comment: 'French national patient health record — opt-out, still ramping up' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 2,
        text: 'ICD-10 mandated for PMSI (hospital) billing. LOINC adoption growing through CI-SIS standards framework. FHIR R4 adoption mandated for new health applications under ANS (Agence du Numérique en Santé) but compliance is uneven across legacy systems. SNOMED CT deployment slower than planned.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 4,
        text: 'France has exceptional registry coverage: SNDS (complete national claims), PMSI (100% hospital discharges), FRANCIM cancer registries, RNIAM (rare diseases), PMSI-MCO, PMSI-PSY, cause of death registry. Near-complete population coverage. API access through Health Data Hub. One of the strongest registry ecosystems in the EU.',
        links: [],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 3,
        text: 'SNDS quarterly updates are available with approximately 6–9 month lag for researchers (faster for ANSM regulatory use). Hospitalisation data (PMSI) available with 6-month lag. Death registry near-real-time for pharmacovigilance. Annual public release with 12-month lag for most datasets. Quarterly access improving.',
        links: [],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 3,
        text: 'Health Data Hub is building a national phenotype library based on SNDS. Validated algorithms for common conditions (diabetes, AF, cancer) exist. CONSTANCES and cohort studies use validated phenotyping protocols. Self-service API for cohort queries is in development. EPI-PHARE uses computable SNDS phenotypes routinely for pharmacoepidemiology.',
        links: [],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 3,
        text: 'ANS CI-SIS (Cadre d\'Interopérabilité des Systèmes d\'Information de Santé) defines national FHIR profiles and SNOMED CT usage. HL7 France and IHE France coordinate. Research and clinical datasets increasingly use compatible ontologies. Cross-dataset joins for major entities are feasible; not yet seamless API-level interoperability.',
        links: [],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 3,
        text: 'CONSTANCES and major INSERM cohorts are routinely linked to SNDS for passive longitudinal follow-up — one of the strongest research-clinical linkage models globally. Standardised consent framework exists. Additional steps required for novel data types. SNDS provides automatic follow-up for enrolled participants.',
        links: [],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 3,
        text: 'ANR mandates data management plans and FAIR data principles for grant recipients. Recherche Data Gouv platform provides national deposit infrastructure. INSERM data sharing policy covers all publicly funded research. FAIR compliance is genuine for major INSERM and ANR-funded programs; community-level compliance still variable.',
        links: [{ label: 'Recherche Data Gouv', url: 'https://recherche.data.gouv.fr/', comment: 'French national research data repository' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 4,
        text: 'EPI-PHARE (joint ANSM-CNAM unit) conducts systematic real-world safety and effectiveness studies using full SNDS — a world-leading model. Signal detection from SNDS triggers prospective cohort studies. Results feed into ANSM safety decisions and HAS benefit reassessments. The loop from EHR signal to regulatory action is the most complete in Europe.',
        links: [{ label: 'EPI-PHARE', url: 'https://www.epi-phare.fr/', comment: 'ANSM-CNAM pharmacoepidemiology unit — world-class SNDS-based signal detection' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 3,
        text: 'Loi pour une République numérique (2016) mandates open access for publicly funded research. ANR requires pre-registration and results reporting for grant recipients. ANSM requires trial registration in EU CTR. Code sharing encouraged. Compliance monitoring improving under France 2030 open science agenda.',
        links: [],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 5,
        text: 'As an EMA member state, France automatically accepts all ICH-compliant trial data from the full ICH network. EMA centralised procedure approvals are valid across all member states. Full mutual acceptance in practice — identical to Germany\'s position within the EU regulatory framework.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 4,
        text: 'ANSM regularly serves as rapporteur and co-rapporteur in CHMP and CAT procedures. France participates in Project Orbis for oncology. ANSM is an active and respected NCA within the EMA network. Slightly less central than BfArM/PEI but consistently engaged in joint review programmes.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'France was an ICH founding member (1990, via EU). ANSM contributes to multiple ICH Expert Working Groups. French regulatory scientists serve in leadership positions in EMA scientific committees. France is fully ICH-aligned and a standard-setting contributor.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'EMA centralised procedure approvals are directly valid in France. EMA abbreviated assessment of FDA-approved products provides the main reliance pathway. No additional national review required for centrally approved products. Same position as all EMA member states.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 4,
        text: 'France as an EU member benefits from the EU\'s MRAs with US FDA (GMP inspections), Japan PMDA, Canada, Australia, and Switzerland. EU-wide mutual recognition of GMP inspections and approval procedures fully operational. Multilateral recognition via EU external agreements.',
        links: [],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'France has a significant containment advantage: Laboratoire P4 Jean Mérieux (Lyon) is one of only two BSL-4 facilities in Western Europe, operated by INSERM and accessible to French researchers. Multiple P3 (BSL-3) facilities at Institut Pasteur, INSERM units, and CHU-based research labs. International access to P4 is available for approved projects.',
        links: [{ label: 'P4 Jean Mérieux INSERM', url: 'https://www.inserm.fr/nos-recherches/plateformes-et-infrastructures/p4/', comment: 'One of two European BSL-4 labs — operated by INSERM in Lyon' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 3,
        text: 'Généthon (AFM-Téléthon funded) is a world-class gene therapy GMP facility. Institut Imagine and Cryobanque nationale add manufacturing capacity. Sanofi and smaller CDMOs provide commercial GMP services. France has focused GMP capacity in gene therapy but lacks Germany\'s breadth of CDMO ecosystem.',
        links: [{ label: 'Généthon GMP', url: 'https://www.genethon.fr/nos-expertises/bioproduction/', comment: 'French gene therapy manufacturing hub' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'GENCI (Grand Équipement National de Calcul Intensif) operates three national supercomputing centres: Jean Zay (IDRIS, dedicated AI, petaflop-scale), Joliot-Curie (CEA, Tier-0 PRACE), and Occigen (CINES). Jean Zay is among Europe\'s leading AI research computers. GPU capacity for biological sequence analysis and AI drug discovery is world-competitive.',
        links: [{ label: 'Jean Zay IDRIS', url: 'http://www.idris.fr/jean-zay/', comment: 'French national AI supercomputer — top European AI research infrastructure' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 3,
        text: 'France Génomique national infrastructure supports 100k+ scale sequencing. Programme France Médecine Génomique 2025 targets WGS for all rare disease and cancer patients. Institut Imagine, CNRGH (Centre National de Recherche en Génomique Humaine at CEA), and Génopole support population-scale sequencing for research cohorts.',
        links: [{ label: 'France Génomique', url: 'https://www.france-genomique.org/', comment: 'French national genomics infrastructure' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 2,
        text: 'Institut Pasteur maintains aging and model organism research (C. elegans, Drosophila programs). IGBMC (Strasbourg) has mouse aging research platforms. Less nationally coordinated than Germany\'s MPI Biology of Ageing infrastructure. No formal ITP-equivalent national aging intervention programme.',
        links: [],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 4,
        text: 'France is a core contributor to EU aging consortia: JPI MYBL (More Years Better Lives), JPND (neurodegenerative diseases), Mark-AGE, and multiple Horizon Europe aging networks. INSERM has bilateral agreements enabling joint PI roles internationally. Institut Pasteur\'s global network (30+ international institutes) provides unique research reach.',
        links: [{ label: 'JPI MYBL', url: 'https://www.jp-demographic.eu/', comment: 'EU Joint Programming Initiative on healthy aging — France core contributor' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 4,
        text: 'Health Data Hub is referenced as a model for European health data infrastructure. GA4GH protocols are being implemented. SNDS-CONSTANCES is accessible to international researchers under INDS protocols. France is actively engaged in EHDS preparation and is among the more advanced EU countries on cross-border health data sharing.',
        links: [],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 4,
        text: 'Full Horizon Europe participation — France is a major recipient and contributor. ANR bilateral R&D agreements with NIH (US), DFG (Germany), JST (Japan), and others. INSERM bilateral agreements independently. France\'s research institutions are deeply embedded in global aging research funding networks.',
        links: [],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 4,
        text: 'France is a significant force in aging biology: INSERM units with top-cited aging research (proteostasis, metabolism-aging, neurodegenerative aging), Institut Pasteur microbiology-aging interface, CONSTANCES-based epidemiological aging science. French researchers hold positions in major journals and international aging society committees.',
        links: [],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 3,
        text: 'INPI (Institut National de la Propriété Industrielle) is active in PCT; France is a major EPO filer. SATT network has improved academic tech transfer and patent prosecution. IP culture in French academia is growing but trails UK and Germany in longevity-biotech commercialisation. Improving under France 2030.',
        links: [],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 3,
        text: 'France has significant vaccine hesitancy historically — among the highest in Western Europe — and a culturally embedded méfiance toward institutions. Trust in medicine itself is reasonable but trust in government-directed health interventions is lower than in Scandinavia or Germany. Science communication is a political priority but baseline scepticism persists.',
        links: [],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 2,
        text: 'Vieillir bien (aging well) is a positive cultural framing in France; preventive medicine is respected. Radical life extension is less culturally salient than in the US or Singapore. CCNE (Comité Consultatif National d\'Éthique) tends toward ethical precaution on life-extension technologies. Longevity science is not a mainstream political topic.',
        links: [],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 2,
        text: 'France 2030 Plan includes health and aging research as investment priorities — €7.5B for health innovation. Plan Maladies Neurodégénératives and national Alzheimer strategy demonstrate political engagement with aging disease. However, no dedicated longevity science programme with measurable healthspan targets exists at the national level.',
        links: [{ label: 'France 2030 Santé', url: 'https://www.gouvernement.fr/france-2030', comment: 'France 2030 plan — includes health innovation investment but not longevity-specific mandate' }],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 3,
        text: 'ANSM proactively challenges unsubstantiated health claims and is among the more active EU regulators on cosmetic and supplement advertising enforcement. DGCCRF (consumer protection) enforces EU Cosmetics Regulation strictly. The Ordre des Médecins has explicit positions against pseudo-scientific medicine. France lacks a Heilpraktiker-equivalent class, making the regulatory environment somewhat cleaner than Germany for unregulated anti-aging practitioners.',
        links: [],
      },
    },
  },
}

export default france
