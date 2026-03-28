import {
  Country, CountryData, ScreeningLevel,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField, SocietalField,
  ResearcherImmigrationClaim, ClinicianImmigrationClaim, ResearchTrainingClaim, ClinicianAgingTrainingClaim, ClinicianScientistClaim,
  ResearchFundingClaim, GeneEditingClaim,
  BreakthroughAgencyClaim, AdaptiveLicensingClaim, TrialDesignClaim, RegulatorySandboxClaim, AgingEndpointClaim,
  PopulationScreeningClaim, BiomarkerCollectionClaim, PreventiveTrialsClaim, GeroEndpointsClaim,
  OpenDataClaim, InteroperabilityClaim, ResearchClinicalClaim,
  RegulatoryHarmonizationClaim, SharedPhysicalInfraClaim, IntlResearchNetworkClaim,
  SocialReadinessClaim, PoliticalReadinessClaim,
} from '../schema'

const germany: CountryData = {
  country: Country.GERMANY,

  metrics: {
    lifeExpectancy:        { value: 80.6, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 70.8, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.295, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'Germany offers a dedicated researcher permit under § 20 AufenthG (implementing EU Directive 2016/801). Covers PhD students, postdocs, and senior researchers affiliated with recognised research institutions. EU Blue Card also available for higher-salary positions. Within-EU portability is a structural advantage.',
        links: [{ label: '§ 20 AufenthG Researcher Permit', url: 'https://www.gesetze-im-internet.de/aufenthg/__20.html', comment: 'Statutory basis for researcher-specific immigration' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 2,
        text: 'Ausländerbehörde processing varies dramatically by Bundesland — Bavaria and Munich typically process in 4–8 weeks; Berlin is notorious for 3–6 month waits. No national fast-track for research institutions. Premium processing does not exist in the German system.',
        links: [{ label: 'DAAD Immigration Guide', url: 'https://www.daad.de/en/study-and-research-in-germany/immigration/', comment: 'DAAD practical immigration guide for researchers' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 3,
        text: 'The anabin database (KMK) classifies foreign degrees; EU degrees auto-recognised. Non-EU PhD holders need evaluation by the Central Office for Foreign Education (KMK/ZAB), typically 4–8 weeks. Peer recognition by research institutions is usually faster and sufficient for grant purposes.',
        links: [{ label: 'anabin Database', url: 'https://anabin.kmk.org/', comment: 'Official foreign credential recognition database' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 2,
        text: 'Income thresholds for § 20 researcher permit are set by the host institution agreement, not a fixed salary floor — theoretically accessible for postdocs. In practice, DFG stipend holders (non-employment status) face legal ambiguity and must use alternative visa categories. Bureaucratic friction significant for early-career applicants.',
        links: [],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 3,
        text: 'EU Blue Card holders can apply for permanent residency (Niederlassungserlaubnis) after 27 months (with B1 German) or 33 months. Standard researcher permit leads to PR after 5 years. Germany has active Make it in Germany campaign targeting international researchers, though real-world retention is dampened by language barriers and bureaucracy.',
        links: [{ label: 'Make it in Germany', url: 'https://www.make-it-in-germany.com/', comment: 'Official German skilled worker recruitment portal' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 2,
        text: 'EU/EEA medical licences are mutually recognised under EU Directive 2005/36/EC. Non-EU foreign-trained physicians must apply for Approbation or Berufserlaubnis via state health ministries — requiring qualification equivalence review, language certification (medical German B2/C1), and knowledge examination if equivalence not met. Process takes 6–18 months.',
        links: [{ label: 'Bundesärztekammer Foreign Qualification', url: 'https://www.bundesaerztekammer.de/aerzte/auslandsstudium/auslaendische-aerzte-in-deutschland/', comment: 'BÄK guidance on foreign physician licensing' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 2,
        text: 'Process is documented but fragmented across 16 Bundesländer — each state health ministry applies slightly different criteria. The federal portal ANERKENNUNG IN DEUTSCHLAND provides guidance but no unified digital processing. Clinicians typically require local advisory support to navigate.',
        links: [{ label: 'Anerkennung in Deutschland', url: 'https://www.anerkennung-in-deutschland.de/', comment: 'Federal credential recognition portal — starting point but not single-window' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 2,
        text: 'Approbation processing for non-EU physicians typically takes 6–18 months from application submission. State-level variation is significant: Bavaria and Baden-Württemberg are faster; Berlin and NRW are consistently slow. Total time from arrival to independent practice often exceeds 18 months including German language preparation.',
        links: [],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 2,
        text: 'Berufserlaubnis (temporary limited licence) allows supervised practice in a single institution while the Approbation is pending. Scope is meaningful at university hospitals but requires a named supervising physician. Not all employers offer this arrangement proactively.',
        links: [],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 2,
        text: 'Combined clinical-research positions exist at university hospitals (Universitätsklinikum) but are not actively promoted for foreign clinicians. The German hospital system is heavily clinically load-bearing; research time is negotiated individually rather than built into standard Stellenpläne.',
        links: [],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 2,
        text: 'Aging biology appears in standard biochemistry and physiology courses but without dedicated geroscience modules in most medical and life-science curricula. A few research universities (Cologne, Heidelberg) offer aging-specific electives. Undergraduate-to-lab research pipelines are less formalised than in the US.',
        links: [],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 3,
        text: 'Strong aging biology PhD ecosystem centred on Max Planck Institute for Biology of Ageing (Cologne), CECAD Excellence Cluster (Cologne), DZNE (neurodegenerative aging, multiple sites), and Helmholtz centers. DFG Graduiertenkollegs (Research Training Groups) fund structured cohort-based PhD programs. Internationally competitive for aging basic science.',
        links: [{ label: 'MPI Biology of Ageing', url: 'https://www.age.mpg.de/', comment: 'World-leading aging biology institute in Cologne' }, { label: 'CECAD Cologne', url: 'https://cecad.uni-koeln.de/', comment: 'DFG Cluster of Excellence in aging research' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 3,
        text: 'DFG Emmy Noether Programme funds junior group leaders — a prestigious route equivalent to K99/R00. EMBO and Marie Skłodowska-Curie fellowships available. Postdoc stipends are reasonable at €2,200–2,800/month but compressed against living costs in Munich or Hamburg. Career transition to permanent faculty positions is competitive.',
        links: [{ label: 'DFG Emmy Noether Programme', url: 'https://www.dfg.de/en/research-funding/funding-opportunities/programmes/individual/emmy-noether', comment: 'Junior group leader funding — main postdoc career track' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 3,
        text: 'Most PhD positions in university research groups are funded through DFG project grants or Graduiertenkollegs. BMBF funds structured aging programs (e.g., Netzwerke für gesundes Altern). Stipend levels adequate but below UK Research Council or NIH levels in real terms. Near-universal coverage for competitive aging PhD programs.',
        links: [{ label: 'DFG Graduiertenkollegs', url: 'https://www.dfg.de/en/research-funding/funding-opportunities/programmes/groups/research-training-groups', comment: 'DFG structured PhD funding programme' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 2,
        text: 'Fraunhofer Gesellschaft provides applied research bridge; some industry co-supervision in pharma-adjacent PhD programmes. However German academic culture retains strong separation between Grundlagenforschung and industry; longevity biotech co-supervision is sparse. Formal IP frameworks for student inventions lag behind Bayh-Dole-type systems.',
        links: [],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 2,
        text: 'Geriatrie is a recognised Facharzt specialty (5-year training including internal medicine base). Approximately 1,000 certified geriatricians for a population of 84M — well below projected need for a country with 29.5% population over 60. Specialty is low-prestige and underpaid relative to surgery or cardiology.',
        links: [{ label: 'Deutsche Gesellschaft für Geriatrie', url: 'https://www.dggeriatrie.de/', comment: 'German Geriatrics Society — workforce data and standards' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 2,
        text: 'The reformed Approbationsordnung für Ärzte (ÄApprO 2025 reform) includes geriatrics as a required clinical rotation. Aging biology in basic science years is limited to physiology modules. Longevity medicine and preventive aging interventions are not part of the core curriculum.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 2,
        text: 'Geriatrics Facharztausbildung is a 5-year program including internal medicine base plus geriatric specialisation at certified centers. Training quality at university hospitals is good. However, certified training positions are concentrated in a few centres; most hospitals provide general internal medicine care of elderly without geriatric specialisation.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 2,
        text: 'German Geriatrics Society (DGG) and Bundesärztekammer offer CME modules in geriatrics and frailty. Aging medicine CME is not mandatory for specialties regularly treating older patients (cardiology, orthopedics). Longevity-specific CME covering biological aging interventions is not formalised.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 2,
        text: 'The Bundesärztekammer publishes physician statistics showing chronic geriatrics undersupply. BMBF has funded geriatrics workforce analysis. National plan exists in principle but training position expansion is slow and funding is distributed across Länder, making coordination difficult.',
        links: [],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 3,
        text: 'The standard German medical degree (Staatsexamen) is followed by a Dr. med. thesis — formally combined but the Dr. med. is typically a data-collection exercise, not a research PhD. True MD-PhD programs exist at Charité-MDC Berlin, IMPRS programs at MPI sites, and LMU Munich Research School — structured research MD-PhDs with protected PhD time.',
        links: [{ label: 'Charité MD-PhD Programme', url: 'https://www.charite.de/forschung/foerderung/charite_-_mdphd-programm/', comment: 'Germany\'s best-known combined MD-research PhD programme' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 3,
        text: 'DFG Klinische Forschungsgruppen and Sonderforschungsbereiche include clinician-scientist positions. BMBF funds translational programs explicitly targeting clinician-researchers. Helmholtz Inkubator includes MD-PhD tracks. Stipends are competitive but below consultant salary — financial penalty still exists.',
        links: [],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 2,
        text: 'Aging biology is available as a PhD track at a handful of institutions (MPI Biology of Ageing, CECAD) but is not prominently featured as a clinician-scientist track. Neurodegenerative disease (DZNE) is the better-supported aging-adjacent clinician-scientist pathway.',
        links: [],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 2,
        text: 'University hospital employment contracts (Arbeitnehmerverträge) can include research time allocation but clinical workload pressure is high and protected time is frequently eroded. No structural national mechanism to enforce protected research time for clinician-scientists comparable to the UK Academic Clinical Fellow system.',
        links: [],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 2,
        text: 'Clinician-scientist career is possible but difficult in the German hospital system. The dual burden of Habilitation (required for professorship) and clinical certification, combined with the DRG-driven hospital economy, makes the dual career path narrower than in the UK or US. Those who succeed tend to be at university hospitals in large cities.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 3,
        text: 'Germany has a substantial aging research base: DFG (€3.4B annual budget, significant aging allocation), BMBF Gesundheitsforschung (aging-adjacent ~€300M/year), DZNE (Helmholtz center for neurodegenerative diseases, €80M/year). No single ring-fenced aging institute at NIH scale, but aggregate investment is meaningful.',
        links: [{ label: 'DZNE German Center for Neurodegenerative Diseases', url: 'https://www.dzne.de/', comment: 'Largest dedicated German aging-adjacent research center' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 3,
        text: 'Portfolio includes basic aging biology (MPI, CECAD), neurodegenerative disease (DZNE), metabolic aging (DZD), and translational programs. No single disease dominates at >50%. Basic aging mechanisms are explicitly funded through DFG and Max Planck programs. Longevity as a cross-cutting theme is underrepresented relative to the scientific opportunity.',
        links: [],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 3,
        text: 'DFG Sonderforschungsbereiche (SFB/CRC) are funded for up to 12 years (3 renewable 4-year phases). Max Planck institutes have permanent institutional funding. Helmholtz programs run on 5-year cycles. German publicly-funded research infrastructure is structurally stable compared to annual-appropriation systems.',
        links: [],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 2,
        text: 'The Arbeitnehmererfindungsgesetz (ArbnErfG) assigns IP to the employing institution by default; universities took on IP rights after the 2002 reform of the Hochschullehrerprivileg. TTO quality varies greatly — top institutions (Charité, TU Munich) have functional spinout processes; many regional universities do not. Spinout timelines of 12–24 months are common; no national Bayh-Dole-equivalent standard.',
        links: [],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 2,
        text: 'Germany has limited longevity-focused private investment. The BioNTech success story is exceptional, not typical. Longevity VC is sparse — most German biotech VC targets oncology or platform technology. Philanthropic giving to aging research is limited; no German equivalent of Glenn Foundation or Wellcome Trust in aging.',
        links: [],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 2,
        text: 'DFG peer review is conservative — systematic, rigorous, but risk-averse. SPRIND (Bundesagentur für Sprunginnovationen, est. 2019) is explicitly ARPA-modeled and has attempted challenge-based funding. However SPRIND\'s annual budget (~€100M across all sectors) is far too small to shift the culture, and its longevity-specific programs are absent.',
        links: [{ label: 'SPRIND Federal Agency for Leap Innovations', url: 'https://www.sprind.org/', comment: 'Germany\'s ARPA-style agency — limited longevity focus' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 3,
        text: 'Somatic gene editing trials are regulated by the Paul Ehrlich Institut (PEI) under the EU ATMP framework and AMG. Multiple somatic gene therapy and gene editing trials are active in Germany. PEI has established ATMP expertise and maintains specialist scientific advisory capacity. EU-level framework applies.',
        links: [{ label: 'Paul Ehrlich Institut ATMPs', url: 'https://www.pei.de/EN/medicinal-products/atmp/atmp-node.html', comment: 'PEI\'s advanced therapy medicinal products oversight' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 3,
        text: 'PEI CTA review for gene editing trials typically takes 6–12 months from submission. PEI is considered among the more scientifically rigorous and faster EU national competent authorities. Pre-submission scientific advice is available and commonly used. No fast-track below 6 months.',
        links: [],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 3,
        text: 'PEI proactively issues guidance on emerging gene editing modalities (base editing, prime editing) within the EU regulatory framework. CHMP scientific advice processes allow dialogue before IND/CTA submission. Germany participates actively in EMA expert working groups on novel gene therapy modalities.',
        links: [],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 1,
        text: 'The Embryonenschutzgesetz (ESchG) of 1990 imposes a blanket criminal prohibition on germline modification, with no exceptions for basic research or scientific exploration. Creating, altering, or using embryos for research purposes is explicitly criminalised. Germany is one of the most restrictive developed countries on this dimension.',
        links: [{ label: 'Embryonenschutzgesetz 1990', url: 'https://www.gesetze-im-internet.de/eschg/', comment: 'Blanket criminal prohibition on embryo manipulation — restricts all germline research' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 2,
        text: 'No specific regulatory pathway for longevity endpoints in gene editing applications. Aging biomarkers accepted as exploratory secondary endpoints in line with standard EMA practice. German regulatory culture frames aging as a disease-risk modifier rather than a primary therapeutic target.',
        links: [],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 2,
        text: 'SPRIND (Bundesagentur für Sprunginnovationen) was founded in 2019 with an explicit ARPA-style mandate — programme manager model, challenge-based funding, non-dilutive contracts. However it remains small (€100M/year across all sectors including non-biotech) and has not yet achieved ARPA-style scale or culture.',
        links: [{ label: 'SPRIND', url: 'https://www.sprind.org/', comment: 'German ARPA equivalent — small but programme-manager modelled' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 1,
        text: 'Aging appears in BMBF\'s health research strategy as a theme, but no SPRIND programme is explicitly focused on longevity biology or healthspan. SPRIND current challenges (as of 2024) focus on sustainability, quantum technology, and digital health — aging mechanisms are not a named challenge area.',
        links: [],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 2,
        text: 'SPRIND offers non-dilutive challenge contracts — a structural improvement over traditional DFG grants. BMBF also uses Verbundprojekte (collaborative grants) and Zuwendungen. For longevity specifically, no dedicated non-dilutive challenge mechanism exists; researchers use general BMBF health research grants.',
        links: [],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 2,
        text: 'SPRIND\'s standard terms allow foreground IP to vest with the performing party, consistent with innovation-agency best practice. However SPRIND\'s framework is still developing and terms are not yet as consistently published or as spinout-friendly as DARPA BAA standards. BMBF Verbundprojekte have more traditional IP terms.',
        links: [],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 1,
        text: 'SPRIND challenges are defined as broad sectoral goals rather than quantified biological targets. No active SPRIND challenge specifies measurable aging biology or healthspan outcomes. German innovation policy framing remains at the disease-prevention level, not at biological age or hallmarks of aging.',
        links: [],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'Germany benefits fully from EMA adaptive pathways as an EU member: PRIME designation (Priority Medicines), conditional marketing authorisation, and accelerated assessment. BfArM and PEI are active NCAs that regularly serve as rapporteur/co-rapporteur for EMA procedures including adaptive approvals.',
        links: [{ label: 'EMA PRIME Scheme', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/prime-priority-medicines', comment: 'EU priority medicine designation — full access for German applicants' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'EMA rolling review is fully accessible to German marketing authorisation applicants. During COVID-19, Germany was central to the first EMA rolling reviews. PEI has active capacity in the rolling review process. For biotech products, rolling review is now standard practice for any PRIME or priority designation.',
        links: [],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'EMA accepts validated surrogates for many indications; aging-adjacent surrogates (frailty indices, functional composites) accepted in geriatric indications. Germany applies EMA standards. No Germany-specific advancement beyond EMA practice. True aging-biology surrogates (epigenetic clocks) remain exploratory under current EMA guidance.',
        links: [],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 4,
        text: 'Germany has both the EMA PASS/PAES post-market framework and the distinctive German AMNOG (Arzneimittelmarkt-Neuordnungsgesetz) HTA system. AMNOG requires comparative effectiveness evidence at launch — creating one of the world\'s most rigorous post-market benefit assessment systems. Conditional approvals face real effectiveness scrutiny.',
        links: [{ label: 'AMNOG', url: 'https://www.g-ba.de/themen/arzneimittel/arzneimittel-richtlinie-anlagen/nutzenbewertung-35a/', comment: 'German early benefit assessment — mandatory for all new drugs' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 3,
        text: 'Compassionate use under § 21(2) AMG and named patient programs are available in Germany. The process typically takes 4–6 weeks and requires PEI or BfArM confirmation. Physician liability is defined. German statutory health insurance (GKV) can sometimes cover compassionate use, giving Germany practical advantages for patient access.',
        links: [],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 4,
        text: 'EMA reflection papers on adaptive designs are fully applicable to German CTAs. BfArM/PEI accept adaptive Phase 2/3 and biomarker-adaptive enrichment designs. Germany participates in the European Clinical Trials Regulation (EU CTR) through the CTIS portal. Pre-submission scientific advice facilitates adaptive design planning.',
        links: [],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'EMA guidance on synthetic controls and external comparators applies in Germany. BfArM participates in EMA procedures accepting external control arms for rare diseases and situations where randomisation is ethically infeasible. Published EMA guidance is followed nationally.',
        links: [],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'EMA DCT framework and EU CTR allow decentralised trial elements in Germany: remote consent, home nursing visits, local lab sample collection, and telemedicine follow-up. CTIS implementation is underway. BfArM has issued guidance permitting remote assessments within the EU regulatory framework.',
        links: [],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 4,
        text: 'Germany is active in EU platform trial infrastructure. BfArM/PEI collaborate in EU Innovative Medicines Initiative (IMI/IHI)-funded platform trials in oncology and neurology. EU CTR streamlines amendment-based arm addition. Platform protocols are well-established practice in academic-pharmaceutical collaboration.',
        links: [],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 3,
        text: 'AMNOG explicitly uses real-world evidence (Versorgungsstudien) for post-launch comparative effectiveness assessment. EMA RWE framework applies for EU-level evidence packages. German GKV claims data from >90% of the population is increasingly used for observational research and regulatory supporting evidence.',
        links: [],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 3,
        text: 'Germany\'s DiGA (Digitale Gesundheitsanwendungen) pathway is a structured fast-track for digital health applications — a functional health-sector regulatory sandbox equivalent with defined entry criteria, time-limited provisional listing, and evidence-generation requirements. BVA (Bundesamt für Soziale Sicherung) administers the process.',
        links: [{ label: 'DiGA Pathway', url: 'https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA/', comment: 'Germany\'s digital health app regulatory fast-track' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 1,
        text: 'DiGA explicitly covers only digital health applications — apps, software, and wearable-connected tools classified as Class I or IIa medical devices. Drugs, biologics, gene therapies, and cell therapies are excluded. No equivalent regulatory sandbox for novel biotech therapeutics exists.',
        links: [],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 2,
        text: 'DiGA is available to GKV-insured patients with a physician prescription — real patients with real reimbursement. For biotech interventions outside DiGA, compassionate use provides some access. No patient-access sandbox for longevity interventions or prevention-focused biologics.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 2,
        text: 'DiGA has a defined legal framework with clear liability rules for manufacturers. For interventions outside DiGA, standard AMG liability applies. No dedicated safe harbour for biotech innovation sandboxes. Physician liability in experimental contexts follows standard German medical liability law.',
        links: [],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 1,
        text: 'DiGA longevity-adjacent apps (sleep, exercise, metabolic tracking with clinical claims) can in principle be listed. However, no drug or biologic longevity sandbox exists, and longevity as a primary indication has no regulatory pathway in Germany beyond standard disease-based approvals.',
        links: [],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'Germany follows EMA guidance where aging biomarkers are accepted as exploratory secondary endpoints in aging-adjacent indications. Functional composites (frailty indices, SPPB, grip strength) accepted in geriatric indications. True aging biology surrogates (epigenetic clocks, proteomic age) remain exploratory without formal qualification.',
        links: [],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 2,
        text: 'EMA Qualification of Novel Methodologies for Drug Development is the available pathway. Process requires a Letter of Intent, Scientific Advice, and full qualification package — typically 5–10 years for a novel aging biomarker. Germany participates via BfArM in EMA processes. No national shortcut.',
        links: [{ label: 'EMA Biomarker Qualification', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/scientific-guidelines/novel-methodology/biomarker-qualification', comment: 'EU framework for novel biomarker qualification' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'EMA companion diagnostic framework allows co-development but is primarily designed for treatment-selection biomarkers in oncology. For aging endpoints, co-development with a novel aging biomarker requires standard IND/CTA plus separate qualification track — no integrated pathway exists.',
        links: [],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 3,
        text: 'NAKO Gesundheitsstudie (200,000 participants, longitudinal, 5-year intervals) provides a well-characterised reference population with aging biomarkers including genome, serum samples, and functional assessments. This is a strong normative reference for aging biomarker validation. Researcher access via FDZ process.',
        links: [{ label: 'NAKO Gesundheitsstudie', url: 'https://nako.de/', comment: 'Germany\'s major population cohort — key aging biomarker reference' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 3,
        text: 'Germany participates in EU and international aging biomarker standardisation working groups. NAKO uses standardised protocols for sample collection and biomarker measurement. The Medizininformatik-Initiative (MII) is establishing harmonised clinical data models. Cross-study comparison is feasible for major aging biomarkers.',
        links: [],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Gesundheits-Check-up every 3 years from age 35 includes blood pressure, lipids, glucose, BMI, and CVD risk assessment. GPs are remunerated per check-up and actively invite patients. High population coverage through GKV (>90% insured). Structured and proactive.',
        links: [{ label: 'Gesundheits-Check-up (KBV)', url: 'https://www.kbv.de/html/check-up.php', comment: 'Germany\'s comprehensive preventive check-up programme' }],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.INTEGRATED,
        text: 'National Mammography Screening Programme (2005): invitation letters every 2 years to women aged 50–69. Results documented and linked to treating physician. Radiology quality assurance is among the most rigorous in Europe. Participation ~50% nationally.',
        links: [{ label: 'Mammographie-Screening', url: 'https://www.mammo-programm.de/', comment: 'National organised mammography programme' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Colonoscopy programme from age 50 (previously 55); FIT stool test annually from age 50 as alternative. Active patient invitation letters introduced in 2017. GKV-funded. One of the most comprehensive colorectal screening programmes in Europe.',
        links: [],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'HPV primary testing introduced in 2020 for women aged 20–65 in Germany. Co-testing (HPV + cytology) for women 35+ under the organised programme. GKV-funded; gynaecologist sends reminder letters.',
        links: [],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No systematic national AAA screening programme in Germany. Ultrasound can be ordered by GPs for at-risk men but is not a structured invitation-based programme and is not routinely reimbursed without clinical indication. IGeL (self-pay) market covers it.',
        links: [],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'HbA1c and fasting glucose included in the Gesundheits-Check-up from age 35. Positive results trigger structured Disease Management Programmes (DMP) for diabetes with lifestyle intervention and follow-up. GKV-funded and proactive via GP invitation.',
        links: [],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'DEXA scanning is reimbursed in Germany only for women with confirmed fractures or high clinical risk. Risk-assessment tools (FRAX) are used but no population-wide invitation programme exists. IGeL self-pay market offers DEXA without clinical indication.',
        links: [],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national lung cancer CT screening programme yet in Germany. The European position statement supporting LDCT screening has been adopted in principle by DGHO and DGT, but GBA has not yet commissioned a national programme. Pilot programmes underway; implementation expected post-2025.',
        links: [],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'ECG is available within the cardiovascular component of the Gesundheits-Check-up but is not routinely ordered for AF detection; pulse palpation is standard. No national programme for systematic AF screening. Consumer devices (Apple Watch) are filling the gap but without clinical integration.',
        links: [],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No national cognitive screening programme. GPs perform opportunistic cognitive assessment using MMSE or MoCA when symptoms are reported. The GBA has not commissioned population-level dementia screening. Memory clinics are available in academic centres.',
        links: [],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.ABSENT,
        text: 'Polygenic risk score screening is limited to research settings in Germany. The Gendiagnostikgesetz (GenDG) regulates genetic testing and requires genetic counselling for predictive testing. No clinical programme using PRS-based risk stratification is reimbursed.',
        links: [],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'Sarcopenia screening is not part of any national programme. Bioelectrical impedance analysis and grip strength measurement are performed in geriatric assessments at specialist centres but not systematically in primary care.',
        links: [],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'GKV reimburses polysomnography for symptomatic patients (snoring, daytime fatigue) upon physician referral. No population-based screening; questionnaire-based (STOP-BANG) screening is not a formal national programme. Reimbursement is symptom-triggered.',
        links: [],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'The Gemeinsamer Bundesausschuss (GBA) governs all GKV-covered screening additions via the Bewertungsverfahren — evidence review process typically taking 3–5 years. No rapid pilot pathway comparable to NHS England\'s Accelerated Access Collaborative. EU screening recommendations trigger national review but implementation is slow.',
        links: [{ label: 'G-BA Bewertungsverfahren', url: 'https://www.g-ba.de/beschluesse/', comment: 'GBA formal benefit assessment — main route for adding screenings' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 2,
        text: 'NAKO Gesundheitsstudie enrolled 200,000 participants via active opt-in recruitment (2014–2019). Biobank at Charité and regional biobanks add capacity. No population-based opt-out biobank exists. Coverage is approximately 0.2% of the population — large by research standards but not nationally representative by design.',
        links: [{ label: 'NAKO Gesundheitsstudie', url: 'https://nako.de/', comment: 'Germany\'s major longitudinal population cohort' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 3,
        text: 'NAKO is designed with baseline and follow-up visits at approximately 5-year intervals. Interim surveys and accelerometer follow-ups occur within that window. Active re-contact protocol exists. This represents a systematic follow-up design, though not the denser ≤3 year intervals of the most advanced biobanks.',
        links: [],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 3,
        text: 'NAKO includes genome-wide SNP array, whole exome sequencing in subsets, extensive serum biomarker panel, accelerometry, MRI, and grip strength measurements. Epigenomics and proteomics are available in sub-cohorts. Multi-omic depth is strong but not yet as comprehensive as UK Biobank or FinnGen.',
        links: [],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 3,
        text: 'NAKO data is linked to GKV insurance claims data via pseudonymised national identifier, enabling complete medication, hospitalisation, and procedure history. Prescription and diagnosis codes available longitudinally. Full EHR linkage is in progress through the Medizininformatik-Initiative.',
        links: [],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 2,
        text: 'NAKO data is accessible to German researchers via the Forschungsdatenzentrum (FDZ NAKO) through a formal application process. International researcher access is possible but subject to DSGVO compliance requirements and requires data use agreements. Process is functional but time-consuming relative to UK Biobank RAP.',
        links: [],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 2,
        text: 'GKV claims data can support register-based outcome capture in pragmatic trials — a structural advantage over US-style claims. Electronic consent and eCRF are widely used. However, GBA oversight, federal ethics committees (Landesärztekammern), and CTIS compliance add layers that increase per-patient cost and setup time above Scandinavian levels.',
        links: [],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'AMNOG (early benefit assessment) uses comparative effectiveness data systematically, including GKV real-world data for reference arm construction. EMA RWE framework applies for regulatory submissions. Germany has one of Europe\'s strongest formal frameworks for pragmatic RWE use in HTA, if not in primary approval.',
        links: [],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 1,
        text: 'German clinical trials use disease-focused endpoints (MI, mortality, hospitalisation). Functional aging endpoints (grip strength, gait speed) appear in geriatric trial context. Validated aging biology surrogates (epigenetic clocks, proteomic age) are not used as pre-specified endpoints in any registered German national trial.',
        links: [],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 1,
        text: 'No national Phase II/III trials of aging-mechanism agents (senolytics, mTOR inhibitors for longevity, NAD precursors as primary aging prevention) are active in Germany. Academic interest exists at MPI and CECAD but has not translated into registered prevention trials at scale.',
        links: [],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 2,
        text: 'TMF (Technologie- und Methodenplattform für die vernetzte medizinische Forschung) coordinates medical research infrastructure. The Medizininformatik-Initiative provides university hospital data infrastructure. No coordination body has an explicit aging or longevity prevention trial mandate.',
        links: [{ label: 'TMF e.V.', url: 'https://www.tmf-ev.de/', comment: 'German medical research infrastructure coordination' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 2,
        text: 'Deutsches Register Klinischer Studien (DRKS) is the national trial registry with a public search interface. Lay summaries are available but variable in quality. No EHR-based patient matching or proactive GP-triggered trial invitation system is implemented nationally.',
        links: [{ label: 'DRKS', url: 'https://drks.de/', comment: 'German clinical trials registry — public search available' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 1,
        text: 'Aging is not recognised as a therapeutic indication in Germany or under EMA guidance. Disease-specific aging conditions (sarcopenia, frailty as complication) have limited regulatory recognition. The BMBF and DZNE frame aging as a disease risk modifier, not a primary intervention target.',
        links: [],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'Multi-domain functional composites (e.g., SPPB, Barthel index, frailty index) are accepted as primary endpoints in some geriatric indications under EMA and German regulatory practice. Single functional aging endpoints have precedent. Validated aging biology surrogates have no regulatory precedent in Germany.',
        links: [],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 2,
        text: 'IQWiG (Institut für Qualität und Wirtschaftlichkeit im Gesundheitswesen) conducts AMNOG benefit assessments. Standard QALY framework can in principle capture healthspan. IQWiG has not published methodology specifically for aging-prevention interventions or morbidity compression valuation.',
        links: [],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 1,
        text: 'No reimbursement pathway for aging-prevention agents under GKV. AMNOG covers novel drugs approved for disease indications. Preventive use of off-label agents is not reimbursed. Private insurance covers some prevention; self-pay longevity clinics operate in a legal grey area.',
        links: [],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 2,
        text: 'Aging-adjacent drugs (e.g., sarcopenia treatments) can in principle apply for PRIME designation via EMA. No aging-specific expedited pathway exists at the German national level. BfArM/PEI participate in EMA processes that could accelerate aging-targeted products but no dedicated designation.',
        links: [],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 2,
        text: 'The Forschungsdatenzentrum Gesundheit (FDZ) provides a standardised access route to GKV claims data. Process requires a multi-step application (Antrag), ethics approval, and data use agreement — typically 4–8 months. DSGVO compliance requirements add complexity. Multiple agencies are involved for linked data.',
        links: [{ label: 'FDZ Gesundheit', url: 'https://www.forschungsdatenzentrum-gesundheit.de/', comment: 'German health research data centre — main access route for GKV data' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 3,
        text: 'Germany has a national health insurance identifier (Krankenversicherungsnummer) enabling cross-domain linkage. GKV claims can be linked to cancer registries, hospitalisation data, and death certificates. NAKO is linked to GKV data. The Medizininformatik-Initiative links university hospital EHR data through standardised FHIR interfaces.',
        links: [],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 3,
        text: 'FDZ operates a controlled data environment with pseudonymisation. Secure on-site or remote analytical environments (Datentreuhänder model) are in development. Output checking is required. DSGVO compliance is rigorous. Quality is adequate for research use but not best-in-class relative to ONS SRS or OpenSAFELY.',
        links: [],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 2,
        text: 'AI use on German health data is theoretically permitted under DSGVO but requires explicit justification in the data access application. No dedicated AI researcher fast-track exists. Case-by-case review is standard; typical process takes 3–6 months for novel AI use cases. EU AI Act adds another regulatory layer.',
        links: [],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 3,
        text: 'GDPR adequacy framework and EU-wide health data sharing are structurally enabled. Germany is actively preparing for the European Health Data Space (EHDS). Cross-border federated analysis with EU research partners is increasingly feasible. Non-EU data sharing requires more cumbersome bilateral arrangements.',
        links: [],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 2,
        text: 'The elektronische Patientenakte (ePA) was a decade-long implementation failure before the opt-out redesign launched in early 2025. As of 2024, actual coverage remains fragmented; most clinical data is held in proprietary hospital systems (Orbis, SAP i.s.h.med) with limited interoperability. MII is improving university hospital data exchange.',
        links: [{ label: 'ePA Bundesgesundheitsministerium', url: 'https://www.bundesgesundheitsministerium.de/elektronische-patientenakte.html', comment: 'German national EHR — major reform underway in 2025' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 2,
        text: 'ICD-10-GM is mandated for DRG billing. KBV mandates standardised coding in ambulatory care. FHIR R4 adoption is in progress under the MII and ePA mandates but compliance is uneven. SNOMED CT is being introduced but is not yet widely implemented.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 3,
        text: 'Germany has strong cancer registries (Zentrum für Krebsregisterdaten at RKI), a national hospital discharge database (DRG-Statistik), and prescription data via GKV. Rare disease registries (ACHSE) are maturing. API access to registries is improving through the FDZ and MII programs.',
        links: [],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 2,
        text: 'GKV annual data releases typically have 12–18 month lag from clinical event. Hospital data (Krankenhausstatistik) is published with 1–2 year delay. Near-real-time access for researchers does not exist. The MII is working toward shorter lag times at university hospital level.',
        links: [],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 2,
        text: 'The MII has established the Medical Informatics Platform (MII-Kerndatensatz) with standardised FHIR phenotypes for common conditions. Validated phenotyping algorithms are available for select diseases. National phenotype library with self-service API query is in development but not yet production-ready.',
        links: [{ label: 'MII Medizininformatik-Initiative', url: 'https://www.medizininformatik-initiative.de/', comment: 'German health data interoperability programme' }],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 3,
        text: 'The MII mandates OMOP CDM, FHIR R4, and SNOMED CT for all participating university hospitals. HPO integration for rare disease phenotyping is active. National ontology harmonisation is genuine and improving. Research datasets increasingly use the same standards as clinical data.',
        links: [],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 2,
        text: 'NAKO has established linkage to GKV data with standardised consent. Research cohort linkage is possible through pseudonymised identifiers. However, each study requires its own negotiated linkage agreement; no automatic linkage for all publicly-funded cohorts. DSGVO makes passive follow-up difficult.',
        links: [],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 3,
        text: 'BMBF requires FAIR data principles for publicly-funded research. National Research Data Infrastructure (NFDI) programme, including NFDI4Health for health data, is establishing FAIR-compliant repositories with persistent identifiers and machine-readable metadata. Compliance is improving but not yet universal.',
        links: [{ label: 'NFDI4Health', url: 'https://www.nfdi4health.de/', comment: 'German health research data FAIR infrastructure' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 3,
        text: 'BfArM operates the national pharmacovigilance system integrated with EMA EudraVigilance. Signal detection from GKV administrative data is growing. The MII Datenintegrationszentren (DIZe) at university hospitals enable semi-automated safety signal generation from EHR data. Feedback loop into research is developing.',
        links: [],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 3,
        text: 'DFG mandates data sharing for publicly-funded research (Leitlinien zur guten wissenschaftlichen Praxis). DRKS requires trial registration and results reporting within 12 months. Code sharing is encouraged. Pre-registration is increasingly expected. Compliance is monitored; enforcement is improving.',
        links: [],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 5,
        text: 'As an EMA member state, Germany automatically accepts all ICH-compliant trial data from the full ICH network (US, Japan, EU, Canada, Switzerland, South Korea, Singapore, etc.) without domestic replication. EMA centralised procedures directly generate German marketing authorisations. Full mutual acceptance in practice.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 5,
        text: 'BfArM and PEI are among EMA\'s most active national competent authorities. Germany regularly serves as rapporteur and co-rapporteur in CHMP and CAT procedures. Germany participates in Project Orbis and the ACCESS consortium. PEI leads ATMP assessments at EMA level. Leadership position within the EU regulatory system.',
        links: [{ label: 'BfArM EU cooperation', url: 'https://www.bfarm.de/EN/Federal-Institute/Collaboration-Europe/', comment: 'BfArM\'s EU and international regulatory cooperation' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'Germany was a founding member of the ICH (1990, along with US FDA, EMA, and Japan MHLW). BfArM and PEI participate in ICH Expert Working Groups across multiple guidelines. German regulatory scientists chair or co-chair several ICH EWGs. Germany is a standard-setting leader within the international regulatory community.',
        links: [{ label: 'ICH Founding Members', url: 'https://www.ich.org/page/history-ich', comment: 'ICH founding — Germany via EMA/EU since 1990' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'EMA centralised procedure approvals are valid across all EU member states including Germany — no additional national review required. EMA routinely relies on FDA data packages and vice versa through the ICH framework. For non-EU approvals, the EMA abbreviated assessment of FDA-approved products is the main pathway.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 4,
        text: 'Germany, as an EU member, benefits from the EU\'s MRAs with the US (FDA GMP inspections), Japan, Canada, Australia, and Switzerland. EU-wide mutual recognition of GMP inspections and certain product approvals is fully operational. Multilateral recognition network via EU external agreements.',
        links: [],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'Robert Koch Institut (RKI) has BSL-3 capacity. Multiple university hospitals and research institutes (BNI Hamburg, Bernhard Nocht Institute) maintain BSL-3 laboratories accessible to national researchers. Germany does not have a domestic BSL-4 facility but access to European BSL-4 (Lyon, Marburg BNITM) is available.',
        links: [],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 4,
        text: 'Germany has a deep GMP manufacturing ecosystem: Wacker Biotech (Munich, biopharmaceuticals), Rentschler Biopharma, IDT Biologika, CLS Behring. Multiple CDMOs specialise in cell and gene therapy manufacturing. Fraunhofer Institutes operate public GMP suites for academic groups. A mature CDMO ecosystem attracting global biotech.',
        links: [{ label: 'Wacker Biotech', url: 'https://www.wacker.com/cms/en-gb/products/product-groups/biotech/wacker-biotech.html', comment: 'Major German CDMO in biopharmaceutical manufacturing' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 5,
        text: 'Germany hosts some of Europe\'s most powerful supercomputers: JUWELS at Jülich Forschungszentrum (petaflop-scale, regularly in top-5 EU), HAWK and HLRS at Stuttgart, and SuperMUC-NG at LRZ Munich. The National High-Performance Computing Alliance (NHR) coordinates access. World-class bioinformatics and AI compute available to German researchers.',
        links: [{ label: 'Jülich JUWELS', url: 'https://www.fz-juelich.de/en/ias/jsc/systems/supercomputers/juwels', comment: 'Germany\'s flagship supercomputer — top-5 European HPC' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 3,
        text: 'German Human Genome-Phenome Archive (GHGA) coordinates national genomics data infrastructure. NAKO includes genomic data for 200,000 participants. Multiple sequencing facilities across Helmholtz and university centres. Population-scale sequencing throughput (10k–100k) is well-established; long-read and multi-omics capability emerging.',
        links: [{ label: 'GHGA', url: 'https://www.ghga.de/', comment: 'German genomics data archive and infrastructure' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 3,
        text: 'Max Planck Institute for Biology of Ageing (Cologne) is a world-leading aging model organism centre — C. elegans, Drosophila, and mouse aging programs. CECAD Excellence Cluster shares model organism resources. Standardised protocols exist; national shared platform access is available to affiliated researchers.',
        links: [{ label: 'MPI Biology of Ageing', url: 'https://www.age.mpg.de/', comment: 'World-leading aging model organism centre in Cologne' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 4,
        text: 'Germany is a core contributor to major EU aging consortia under Horizon Europe (JPI MYBL, Active & Assisted Living, aging hallmarks networks). German PI roles in DECODE, UK Biobank collaborations, CHARGE consortium. Multiple ERC grants to German aging researchers. DZNE leads European neurodegenerative disease networks.',
        links: [],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 3,
        text: 'GDPR-compliant data sharing frameworks are in place for EU research partners. GA4GH implementation is underway through GHGA and NFDI4Health. NAKO has bilateral agreements for international data access. Cross-border federated analysis is increasingly feasible under EHDS preparation. Non-EU sharing requires more negotiation.',
        links: [],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 4,
        text: 'Germany is fully integrated into Horizon Europe — one of the largest recipient nations. DFG and BMBF have active bilateral R&D agreements with major research nations (NIH-BMBF joint calls, BMBF-MOST Israel, BMBF-JST Japan). Large-scale joint grants with European and global counterparts are routine for German research groups.',
        links: [],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 4,
        text: 'Germany is a major force in aging biology globally. Adam Antebi, Linda Partridge (MPI Biology of Ageing), David Vilchez (CECAD), and other MPI-based researchers lead internationally cited research programs. DZNE researchers lead major neurodegenerative aging consortia. German longevity science ranks in the global top tier by citation impact.',
        links: [],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 4,
        text: 'Germany is a core EPO member state and is among the largest filers of PCT applications in Europe. German academic tech transfer offices (TUM Venture Labs, Charité TTO) actively prosecute patents. Strong biomedical IP culture in pharma cluster (Rhine-Main, Munich, Berlin). IP framework attracts foreign biotech partnerships.',
        links: [],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {

      [SocialReadinessClaim.PUBLIC_TRUST_CLINICAL_SYSTEM]: {
        score: 4,
        text: 'Hospitals and physicians above EU averages; residual vaccine and system-stress debates post-COVID but front-line care retains majority confidence.',
        links: [
          { label: 'European Commission — Eurobarometer S&T (press)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_25_396', date: 'Feb 2025', comment: 'Fieldwork Sep–Oct 2024 — Germany vs EU aggregate S&T attitudes' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_SCIENCE_RESEARCH]: {
        score: 3,
        text: 'Feb 2025 Eurobarometer (science & tech) release on Sep–Oct 2024 fieldwork: EU-average enthusiasm for S&T softened vs the prior comparable wave in commission reporting; Germany remains broadly pro-science but gene tech and some novel biotech frames stay more contested than in Nordics.',
        links: [
          { label: 'European Commission — Eurobarometer S&T (press)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_25_396', date: 'Feb 2025', comment: 'Special EB — EU27+ attitudes to science and technology' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_STATE_HEALTH]: {
        score: 4,
        text: 'RKI remains the default credible source for outbreak science; federal–Länder fragmentation caps a single “national voice” but technical PHA trust stayed high through COVID.',
        links: [
          { label: 'European Commission — Eurobarometer S&T (press)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_25_396', date: 'Feb 2025', comment: 'EU institutional-trust context wave Sep–Oct 2024' },
        ],
      },
      [SocialReadinessClaim.AGING_MEDIA_FRAMING]: {
        score: 2,
        text: 'Healthy aging and prevention are respectable; radical life extension is culturally marginal. Mass media treat ageing as demography, life expectancy, care strain, and diseases of old age (e.g. dementia) — not a unified popular narrative of targeting aging biology. Longevity medicine as a consumer subculture remains niche.',
        links: [
          { label: 'Der Spiegel — life expectancy vs Western Europe', url: 'https://www.spiegel.de/wissenschaft/mensch/neue-studie-deutschland-faellt-bei-lebenserwartung-zurueck-a-6cd7cc03-291d-41bc-a0dd-33537afaa603', comment: 'Mainstream weekly — mortality trends, prevention, ageing society' },
          { label: 'Der Spiegel — Alzheimer / early detection', url: 'https://www.spiegel.de/gesundheit/diagnose/demenz-bluttest-spuert-alzheimer-jahre-vor-den-ersten-symptomen-auf-a-1280544.html', comment: 'Health desk — disease-of-ageing frame typical of general press' },
        ],
      },
      [SocialReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 2,
        text: 'HWG (Heilmittelwerbegesetz) tightly constrains advertising for medicines, devices, and many health-related offers in the mainstream economy. The Heilpraktiker statute still authorises a parallel non-medical practitioner class that can diagnose and treat within its scope — IV “wellness”, ozone, and hormone-style anti-aging offers often route through that channel and cap the composite vs peers. Composite rung 2: strong ad law for classical health products alongside a structural carve-out.',
        links: [
          { label: 'Heilpraktikergesetz (HeilprG)', url: 'https://www.gesetze-im-internet.de/heilprg/', comment: 'L — statutory basis for Heilpraktiker practice (weakest-link factor)' },
          { label: 'HWG — Gesetz über die Werbung auf dem Gebiete des Heilwesens', url: 'https://www.gesetze-im-internet.de/heilmwerbg/BJNR006049965.html', comment: 'L — federal health advertising law (medicines, devices, therapeutic claims)' },
        ],
      },
    },
    [SocietalField.POLITICAL_READINESS]: {
      [PoliticalReadinessClaim.POLICY_COMMITMENT]: {
        score: 2,
        text: 'R: BMBF health-research framework (Rahmenprogramm Gesundheitsforschung) funds ageing-related biomedical work as one theme — L with budget pool but not a standalone longevity line; typical rung-2 single-bucket horizon before coalition renegotiation. P: federal dementia strategy and prevention discourse exist but the last national dementia strategy window was time-bounded; renewal is not treated here as multi-cycle C in primary law. I: Gematik / electronic health record law and hospital digitisation provide digital-health L, but explicit L+B tying AI/data programmes to ageing-health KPIs in one appropriation document is thin vs methodology rung 3. ESchG still constrains embryo research (germline-relevant), not general ageing biology — not rung 0. LTCI (Pflege) financing is out of scope for this score.',
        links: [
          { label: 'BMBF — Gesundheitsforschung', url: 'https://www.bmbf.de/bmbf/de/forschung/gesundheit-ernaehrung-umwelt/gesundheitsforschung/gesundheitsforschung_node.html', comment: 'R+L+B — federal health research programme (thematic funding)' },
          { label: 'Bundesgesundheitsministerium — Nationale Demenzstrategie', url: 'https://www.bundesgesundheitsministerium.de/themen/pflege/unsere-politik-fuer-menschen-mit-demenz.html', comment: 'P+L — federal dementia / older-age brain-health policy context' },
        ],
      },
      [PoliticalReadinessClaim.LEGISLATIVE_SALIENCE]: {
        score: 1,
        text: 'Bundestag plenary and commissions in 2024 centred Pflegeversicherung financing, demographic pressure on social insurance, and prevention in care — classic "demographic burden" debate (Statistisches Bundesamt projections cited in federal press). Occasional health-research mentions do not produce cross-party geroscience language, manifesto competition on longevity biotechnology, or a head-of-government mission framed as biological healthy-life extension.',
        links: [
          { label: 'Deutscher Bundestag — Aktuelle Stunde Pflegeversicherung', url: 'https://www.bundestag.de/dokumente/textarchiv/2024/kw41-de-aktuelle-stunde-pflegeversicherung-1023348', date: 'Oct 2024', comment: 'Plenary debate — long-term care insurance financing and demography' },
          { label: 'Deutscher Bundestag — Plenary debate on prevention in care', url: 'https://www.bundestag.de/dokumente/textarchiv/2024/kw20-de-pflegebeduerftigkeit-1000384', date: 'May 2024', comment: 'Motion/debate — demography and prevention in nursing care' },
        ],
      },
    },

  },
}

export default germany
