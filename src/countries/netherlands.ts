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

const netherlands: CountryData = {
  country: Country.NETHERLANDS,

  metrics: {
    lifeExpectancy:        { value: 81.7, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 72.4, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.267, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 4,
        text: 'The Kennismigrant (Highly Skilled Migrant) scheme is one of the most researcher-friendly entry routes in Europe. Recognised sponsors — all Dutch universities and public research institutes qualify automatically — can issue a residence permit within 2 weeks under an accelerated IND procedure. No labour market test; no occupation list restriction. A separate Scientific Researcher permit (kennis en verblijf voor wetenschappelijk onderzoek) exists for those not on a standard employment contract, implementing EU Directive 2016/801.',
        links: [
          { label: 'IND Highly Skilled Migrant', url: 'https://ind.nl/en/residence-permits/work/highly-skilled-migrant', comment: 'Official IND page for the Kennismigrant scheme' },
          { label: 'IND Scientific Researcher Permit', url: 'https://ind.nl/en/residence-permits/study/scientific-research', comment: 'EU Directive 2016/801 implementation for researchers' },
        ],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 4,
        text: 'Recognised sponsor organisations (erkend referent) enjoy a streamlined IND track with guaranteed 2-week processing for Kennismigrant applications. The IND digital portal supports online submission and real-time status tracking. Regular researchers not on a recognised-sponsor payroll face standard 3–6 month processing but can apply for 90-day provisional entry while awaiting decision. Processing is notably faster and more predictable than neighbouring Germany.',
        links: [
          { label: 'IND Recognised Sponsor', url: 'https://ind.nl/en/organisations/recognised-sponsor', comment: 'Explains 2-week fast track for recognised sponsors' },
        ],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 4,
        text: 'EU/EEA degrees are automatically recognised under EU Directive 2005/36/EC. Non-EU academic credentials are assessed via Nuffic\'s NOAS service, which issues a Statement of Comparability within 3–5 weeks; Nuffic cooperates with ENIC-NARIC. For Kennismigrant visa purposes the employer institution (often a university) certifies equivalence internally, so Nuffic certification is rarely required as a prerequisite — removing a significant bottleneck present in Germany and France.',
        links: [
          { label: 'Nuffic NOAS Credential Recognition', url: 'https://www.nuffic.nl/en/subjects/recognition-and-credential-evaluation/noas', comment: 'Dutch credential evaluation service for non-EU qualifications' },
        ],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 4,
        text: 'The Kennismigrant salary threshold is significantly lower for researchers at academic institutions than the general threshold, explicitly accommodating PhD-level and postdoctoral salaries. NWO-funded postdocs and those on collective academic labour agreements (CAO Nederlandse Universiteiten) meet the threshold from the first year of appointment. Fellowship holders on stipend (non-payroll) can use the Scientific Researcher permit with no income floor requirement — a meaningful distinction from Germany where stipend-funded researchers face legal ambiguity.',
        links: [],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 3,
        text: 'Highly Skilled Migrants who have lived in the Netherlands for 5 years can apply for permanent residence (verblijfsvergunning voor onbepaalde tijd) without integration exam waiver complexity. The Netherlands maintains expat programmes (including the 30% tax ruling for incoming specialists, though scope reduced since 2024). NWO talent grants (Veni/Vidi/Vici) and tenure-track positions at Dutch universities provide career stability, but brain drain to the UK and Germany remains a structural concern.',
        links: [
          { label: 'NWO Talent Programme', url: 'https://www.nwo.nl/en/talent-programme', comment: 'Veni/Vidi/Vici career grants for researchers at all stages' },
        ],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 3,
        text: 'The BIG register (Beroepen in de Individuele Gezondheidszorg) governs all regulated health professions. EU/EEA medical licences are recognised under EU Directive 2005/36/EC without re-examination. Non-EU foreign-trained physicians must apply for BIG registration via CIBG, submitting proof of qualification, medical Dutch language proficiency (B2 at minimum), and may be required to complete a period of supervised practice (adaptation period). The process is well-documented and typically takes 3–8 months — significantly faster than comparable processes in France.',
        links: [
          { label: 'BIG Register Foreign Qualifications', url: 'https://www.bigregister.nl/en/beroepen/artsen/buitenlandse-artsen', comment: 'CIBG guidance for foreign-trained physicians' },
        ],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 3,
        text: 'The BIG register pathway is national and unified — unlike Germany\'s 16-state fragmentation. CIBG publishes step-by-step guidance, required document checklists, and typical timelines. A single digital portal handles applications. The main complication is demonstrating Dutch language proficiency (B2) and in some cases completing an adaptation programme — requirements that are transparent but non-trivial for non-Dutch-speaking clinicians.',
        links: [
          { label: 'CIBG BIG Registration Portal', url: 'https://www.bigregister.nl/en/register', comment: 'National single-window BIG registration system' },
        ],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 3,
        text: 'Standard BIG registration for non-EU clinicians with comparable qualifications takes 3–6 months, including document verification and in some cases an adaptation period. EU/EEA physicians can be registered within 4–6 weeks under the mutual recognition pathway. An Advance Notice procedure allows physicians to practise provisionally for 3 months in urgent situations while full registration is pending.',
        links: [],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 3,
        text: 'During an adaptation period (aanpassingsstage) foreign-trained physicians practise under supervision in a hospital or practice setting with meaningful clinical scope — active patient care, not purely observational. Following successful adaptation, full independent BIG registration with unrestricted scope follows. Academic medical centres (UMCs) are experienced in hosting clinicians in both research and clinical roles simultaneously.',
        links: [],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 4,
        text: 'Dutch academic medical centres (the eight UMCs: AMC, VUmc, Erasmus MC, LUMC, UMCG, RadboudUMC, MUMC+, UMCU) actively recruit foreign clinician-researchers and have established contractual models combining clinical service with protected research time. The Arts-Onderzoeker (Clinician-Researcher) career track exists at all UMCs with defined fractional arrangements. Foreign clinicians can hold simultaneous BIG registration and NWO/ZonMw research grants without additional permissions.',
        links: [
          { label: 'Dutch Academic Medical Centres (NFU)', url: 'https://www.nfu.nl/en', comment: 'Umbrella organisation for 8 Dutch university medical centres' },
        ],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'Aging biology is integrated into life sciences and biomedical curricula at the major research universities (Leiden, Erasmus, Utrecht, Groningen, Nijmegen). The Rotterdam Study and research outputs from Erasmus MC have created a culture where aging research is visible to undergraduates. Honours programmes and summer research placements at UMCs expose motivated undergraduates to active aging cohort science. However, aging is not uniformly required across all degree programmes.',
        links: [],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 4,
        text: 'The Netherlands has outstanding aging-focused PhD programmes, anchored by Erasmus MC\'s molecular epidemiology and aging programmes (home of the Rotterdam Study), LUMC\'s longevity genetics group (Slagboom/Beekman), and Radboudumc\'s systems biology approaches. NWO and ZonMw fund national aging research schools (e.g., Netherlands Institute for Regenerative Medicine, IMAGINE). Graduate school coordination through ONCODE-INSTITUTE and CGC links cancer biology to aging mechanisms. Multiple active international PhD exchanges.',
        links: [
          { label: 'LUMC Longevity Genetics Group', url: 'https://www.lumc.nl/research/research-groups/longevity/', comment: 'Eline Slagboom group — leading longevity genetics globally' },
        ],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 4,
        text: 'The NWO Talent programme (Veni: up to €280k for postdocs, 3 years) is open to researchers within 3 years of PhD and is internationally competitive. KNAW Early Career Awards and ZonMw Translational Research grants provide additional postdoctoral career support. Dutch postdoc positions at UMCs typically come with good benefits (CAO terms), visa sponsorship via Kennismigrant, and strong international networks. The Netherlands retains a higher fraction of postdocs in academic careers than most EU neighbours, though competition for permanent positions remains fierce.',
        links: [
          { label: 'NWO Veni Grant', url: 'https://www.nwo.nl/en/calls/nwo-talent-programme-veni', comment: 'Main NWO postdoc independence grant' },
        ],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 4,
        text: 'Nearly all PhD positions at Dutch universities and UMCs are fully funded — a combination of NWO project grants, ZonMw programme grants, university direct funding (eerste geldstroom), and EU Horizon funding. Stipend-based PhDs are rare; employment contracts with salary and benefits are the norm, including pension accrual and healthcare contributions. Public funding rate for PhD positions approaches 95%+ in biomedical fields, among the highest in Europe.',
        links: [],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 4,
        text: 'The Netherlands has deliberately built industry-academia bridges in life sciences through Leiden Bio Science Park (largest science park in Europe by company count), Amsterdam Science Park, and the Utrecht Science Park. NWO-TTW (Applied and Technical Sciences) funds industry-co-supervised PhD projects (VIDI/Perspectief programmes). Public-Private Partnerships coordinated via Health Holland and Top Sector Life Sciences & Health (LSH) provide co-funding with pharma and biotech. IP framework is governed by institutional TTOs (valorisation offices) at all universities.',
        links: [
          { label: 'Health Holland LSH Top Sector', url: 'https://www.health-holland.com/', comment: 'NL government-industry life sciences coordination body' },
        ],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 4,
        text: 'Klinische Geriatrie (Clinical Geriatrics) is a recognised 3-year medical specialty in the Netherlands, with well-staffed residency programmes at all UMCs and many regional teaching hospitals. The specialty is considered moderately prestigious — not at the level of cardiology or neurology but competitive for motivated candidates. The Dutch Society of Geriatric Medicine (NVKG) actively promotes the discipline. A sub-specialisation in complex elderly care (verpleeghuisgeneeskunde) is separately trained, providing integrated care model coverage.',
        links: [
          { label: 'NVKG Dutch Geriatrics Society', url: 'https://www.nvkg.nl/', comment: 'Nederlandse Vereniging voor Klinische Geriatrie' },
        ],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 3,
        text: 'Aging biology and geriatric medicine are integrated across multiple years of the 6-year Dutch medical curriculum (bachelor-master geneeskunde). All medical schools include a mandatory geriatrics clinical rotation. Erasmus MC and Leiden include aging biology in basic science modules connected to longevity research outputs. The curriculum is outcomes-based and standardised across Dutch medical faculties via the Nederlandse Visitatiecommissie Geneeskunde (NVMG), ensuring floor-level consistency.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 4,
        text: 'Clinical geriatrics residency is 3 years in duration, hospital-based, with structured competency assessment (CBME approach). All 8 UMCs and many large regional hospitals participate in residency training. Research exposure — attendance at grand rounds, optional research year — is common. An emerging trend is bridging clinical geriatrics with the translational aging science at UMC research groups. The Dutch Internist-Geriatrician (internist-geriater) model enables dual competence in internal medicine plus geriatrics for a subset of trainees.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 3,
        text: 'NVKG offers structured CME in geriatric medicine including longevity prevention components. The Accreditatiebureau Cluster I (ABC) accredits CME activities across medical specialties. ZonMw and Dutch Heart Foundation co-fund continuing education in healthy aging for primary care physicians. However, longevity medicine as a distinct CME discipline — covering senolytics, epigenetic interventions, metabolic geroscience — is not yet systematically included in national CME frameworks; emerging in academic settings only.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 4,
        text: 'The Capaciteitsorgaan (Dutch capacity body for medical specialties) produces regular projections of geriatrics workforce supply and demand, with 5-year and 10-year horizon assessments. Training capacity is adjusted based on these projections — a systematic model not present in most countries. The 2020–2024 Capaciteitsplan predicted a persistent shortage, leading to modest expansion of training positions. Verpleeghuisgeneeskunde (nursing home medicine) training capacity was separately expanded under long-term care reform.',
        links: [
          { label: 'Capaciteitsorgaan Workforce Planning', url: 'https://www.capaciteitsorgaan.nl/', comment: 'Dutch body for medical workforce planning including geriatrics' },
        ],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 4,
        text: 'All 8 Dutch UMCs offer a formal Arts-Onderzoeker (Clinician-Researcher) pathway, which can be pursued as an intercalated research programme during residency or as a structured combined MD-PhD track from medical school. The MD-PhD route (typically 4+4 years) is distinct from the standard clinical training and provides comprehensive research training alongside clinical qualification. NWO Rubicon grants support clinician-researchers to pursue postdoctoral training abroad. Multiple aging-focused options at Erasmus MC, LUMC, and Amsterdam UMC.',
        links: [
          { label: 'Amsterdam UMC Clinician Scientist Programme', url: 'https://www.amsterdamumc.org/en/research/researcher-at-amsterdamumc/arts-onderzoeker.htm', comment: 'Example of Dutch UMC clinician-scientist pathway' },
        ],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 4,
        text: 'ZonMw funds multiple clinician-scientist career pathways: the MD-PhD grants (junior researcher tracks), the Off-Road programme for career flexibility, and the Translational Research grants. NWO Veni is accessible for researchers within 3 years of PhD including clinicians. During the arts-onderzoeker research phase, salary is covered by the hosting UMC or grant, with pension and benefits maintained — removing the financial disincentive common in other countries. The Netherlands has no financial penalty for choosing the clinician-scientist path.',
        links: [
          { label: 'ZonMw Arts-Onderzoeker Funding', url: 'https://www.zonmw.nl/nl/subsidie/arts-onderzoeker', comment: 'ZonMw clinician-scientist funding overview' },
        ],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 4,
        text: 'Erasmus MC (Rotterdam Study, Department of Epidemiology), LUMC (longevity genetics, Slagboom/Beekman group), and Radboudumc (systems aging biology) offer flagship aging-focused tracks for clinician-scientists. Supervision quality in aging biology is world-class — Cornelia van Duijn (Oxford/Erasmus), Eline Slagboom, Marian Beekman, and Wouter Mooijaart represent internationally leading mentors. ZonMw\'s Healthy Ageing programme funds translational work that bridges bench-to-bedside — a natural home for clinician-scientists.',
        links: [],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 4,
        text: 'Academic hospital contracts (UMC CAO) formally allocate 40–50% of time for research for clinician-researcher positions. Protected time is funded separately from the clinical budget — the UMC research budget (tweede geldstroom and derde geldstroom) covers research FTE, not clinical tariff income. This structural separation ensures research time is not squeezed by clinical demand. Sabbatical structures also exist for senior clinician-scientists to pursue extended research programmes.',
        links: [],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 4,
        text: 'The clinician-scientist career at Dutch UMCs is an established, recognised pathway with full Professor (hoogleraar) and Associate Professor tracks available. Clinical compensation for UMC-employed clinicians is competitive (not fee-for-service like in private systems), removing financial pressure to maximise clinical throughput at the expense of research. The Netherlands has a proportionally high density of active clinician-scientists relative to population size, suggesting a functioning pipeline. ZonMw and NWO actively track and report on translational research output.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 3,
        text: 'NWO (Dutch Research Council) has a total budget of approximately €800M/year across all sciences; aging and longevity research captures a meaningful share through the Healthy Ageing programme, the Gravitation programme, and project grants from NWO-ENW (Exact and Natural Sciences) and NWO-ZGW (Social Sciences and Humanities). ZonMw manages approximately €350M/year in health research, with a dedicated Healthy Ageing programme. Combined, dedicated aging-relevant public funding approaches €150–200M/year — meaningful but below the UK MRC Aging cluster or NIH NIA levels.',
        links: [
          { label: 'NWO Healthy Ageing Programme', url: 'https://www.nwo.nl/en/researchprogrammes/healthy-ageing', comment: 'NWO\'s coordinated healthy ageing research investment' },
          { label: 'ZonMw Healthy Ageing', url: 'https://www.zonmw.nl/en/health-topics/ageing', comment: 'ZonMw health research funder: aging programme' },
        ],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 4,
        text: 'The NWO/ZonMw portfolio spans basic aging mechanisms (Gravitation programme: Slagboom group\'s longevity genetics, LUMC ageing research centre), population cohort science (Rotterdam Study, LifeLines, LASA), translational/clinical research (ZonMw Healthy Ageing), and implementation science (ZonMw Prevention). No single disease dominates: funding explicitly covers hallmarks of aging, molecular epidemiology, biological clocks, metabolic aging, cognitive decline prevention, and frailty interventions in a coordinated strategic portfolio.',
        links: [],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 4,
        text: 'NWO Gravitation grants (10 years, up to €28M per consortium) provide exceptional long-term stability for flagship research groups. ZonMw programme grants run 5–7 year cycles. Rotterdam Study has been continuously funded since 1990 — over 35 years of unbroken epidemiological cohort research, representing one of the longest-running prospective cohorts globally. Centre funding at LUMC (aging genetics), Erasmus MC (epidemiology), and Radboudumc (systems biology) is institutionally embedded and largely protected from annual budget cycles.',
        links: [
          { label: 'NWO Gravitation Programme', url: 'https://www.nwo.nl/en/calls/nwo-gravitation', comment: '10-year large-scale research consortium grants' },
        ],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 4,
        text: 'Dutch universities operate Technology Transfer Offices (TTOs, valorisatiecentra) that follow broadly Bayh-Dole-aligned principles — PI and institution co-own IP from publicly funded research, with defined spinout licensing terms and inventor royalty shares (typically 1/3 to inventor, 1/3 to department, 1/3 to institution). Utrecht Holdings, Leiden Technology Transfer, and TechTransfer AMC are among Europe\'s more active academic TTOs. The Netherlands ranks consistently high on the European Innovation Scoreboard for knowledge valorisation, with strong biotech spinout rates.',
        links: [
          { label: 'Utrecht Holdings TTO', url: 'https://www.utrechtholdings.com/', comment: 'Example of active Dutch university TTO' },
        ],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 3,
        text: 'Health~Holland (Top Sector Life Sciences & Health) coordinates public-private co-funding, enabling matching industry investment for ZonMw programme grants and NWO-TTW applied science grants. Dutch biotech has notable longevity-adjacent firms (AM-Pharma, Astellia, various Leiden/Utrecht spinouts). The Longevity Centre Netherlands (LCN) provides some coordination. Major philanthropic aging investors (Glenn Foundation, Wellcome) have Dutch grantees but do not anchor here. The private leverage is solid but not at the level of the USA, Israel, or the UK (Wellcome/ARIA).',
        links: [
          { label: 'Health~Holland PPP Co-funding', url: 'https://www.health-holland.com/funding/ppp-allowance', comment: 'Public-private partnership co-funding mechanism for NL life sciences' },
        ],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 4,
        text: 'NWO Open Competition and the Vici programme explicitly fund high-risk, high-reward science. NWO\'s Science-ENW domain has funded unconventional aging hypotheses (epigenetic reprogramming, senolytics mechanism, extreme longevity genetics in families). NWO\'s Athena Award and NWO Bridge grants encourage cross-disciplinary approaches. The Gravitation programme requires genuinely transformative research agendas. Compared to MRC or DFG, the Dutch system is considered more receptive to paradigm-challenging longevity science — partly a function of small country size enabling opinion-leader influence.',
        links: [],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 3,
        text: 'Somatic gene editing trials are governed by the Wet medisch-wetenschappelijk onderzoek met mensen (WMO) and reviewed by the CCMO (Central Committee on Research Involving Human Subjects) and relevant accredited METCs (medical ethics committees). ATMP trials (gene-modified cell therapies) additionally require CAT review at EMA. The Netherlands has active somatic gene editing trials — primarily in oncology (CAR-T, HSC gene correction). Framework is functional, outcomes-based, and aligned with the EU Clinical Trials Regulation (CTR 536/2014). Approval for novel approaches requires dialogue but is achievable within 6–12 months.',
        links: [
          { label: 'CCMO Gene Therapy Guidance', url: 'https://www.ccmo.nl/onderzoekers/soorten-onderzoek/gentherapie', comment: 'CCMO guidance on gene therapy research oversight' },
        ],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 3,
        text: 'CCMO review for complex gene editing trials (ATMP classification) takes 6–12 months for initial review, including CCMO + METC + CAT-EMA pathway. Pre-submission scientific advice is available and actively used. The CCMO\'s dedicated ATMP expertise and experience with Amsterdam UMC and Erasmus MC submissions makes the Dutch pathway somewhat faster and more predictable than comparably regulated EU states. Post-CTR, there is a single coordinated EU-wide CTA review for multi-country trials, which the Netherlands participates in.',
        links: [],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 3,
        text: 'The CCMO engages proactively with novel modalities (base editing, prime editing, epigenetic reprogramming) through its ATMP working group and CAT liaison. Guidance is issued within 2–3 years of new modality emergence by leveraging EMA/CAT coordination. The Netherlands participates in ECRIN (European Clinical Research Infrastructure Network) and supports regulatory harmonisation for new editing technologies. Not quite at the proactive standard-setting level of FDA/EMA leadership, but clearly ahead of most EU members.',
        links: [],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 2,
        text: 'The Embryowet (Wet houdende regels inzake handelingen met geslachtscellen en embryo\'s) explicitly prohibits germline modification for clinical use. Basic research on human embryos is permitted under strict conditions: embryos must be donated surplus IVF embryos with informed consent, and research must be approved by a licensed CCMO-designated committee. Research use up to 14 days post-fertilisation is legally defined. This places the Netherlands in the same bracket as France — research is explicitly legal with oversight, but clinical application is prohibited. No law change is imminent.',
        links: [
          { label: 'Embryowet', url: 'https://wetten.overheid.nl/BWBR0013797/2021-07-01', comment: 'Dutch Embryo Act governing germline research' },
        ],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 2,
        text: 'The CBG-MEB (Dutch medicines regulator) follows EMA guidance; aging/longevity is not yet a recognised standalone indication category for gene editing. Gene editing trials for aging-relevant indications (progeria, sarcopenia-linked genetic variants, epigenetic age reversal) would be processed as disease-specific applications. Exploratory aging biomarkers are acceptable as secondary endpoints in gene editing trial submissions. No Dutch-specific longevity gene editing precedent exists yet, though academic interest is high.',
        links: [],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 3,
        text: 'The Netherlands does not have a standalone ARPA-model agency, but NWO\'s Missiegedreven Innovatiebeleid (Mission-Driven Innovation Policy) and ZonMw\'s Health Challenge programmes adopt a directed challenge model with defined milestones and programme manager oversight. Health Holland coordinating structure links public research funding to commercial scale-up. The national Knowledge and Innovation Agenda 2020–2023 includes health as a key challenge area with directed funding. Some NWO calls operate on output-based milestone criteria rather than classical peer-reviewed grants.',
        links: [
          { label: 'NWO Mission-driven Research', url: 'https://www.nwo.nl/en/researchprogrammes/mission-driven-research', comment: 'NL government mission-driven research funding approach' },
        ],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 2,
        text: 'Aging and healthy ageing are present in both NWO and ZonMw priority areas (Missie B: Health & Care), but this is framed around prevention of age-related disease and compression of morbidity rather than lifespan or healthspan extension explicitly. A dedicated standalone longevity mandate — with quantified healthy lifespan targets as primary programme objectives — does not exist. The National Prevention Agreement (Nationaal Preventieakkoord) covers healthy weight, smoking, and alcohol, but not longevity biology interventions.',
        links: [],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 3,
        text: 'ZonMw challenge grants and NWO-TTW applied science grants are non-dilutive, milestone-based, and do not require investor co-funding as a primary condition — though Health~Holland PPP co-funding is often available as a top-up. Innovation contracts between research institutions and industry (kennisgebaseerde publiek-private samenwerking) provide structured challenge funding for defined deliverables. No dedicated longevity challenge contract equivalent to ARPA-H or ARIA exists, but the general non-dilutive grant infrastructure is well developed.',
        links: [],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 3,
        text: 'NWO and ZonMw grants follow national knowledge valorisation guidelines: foreground IP vests with the performing institution or PI, with published TTO frameworks defining inventor shares, spinout licensing options, and abandonment procedures. The Netherlands ranks among the top 5 EU countries on European Innovation Scoreboard knowledge valorisation indicators. Spinout options under standard grant terms are typically exercisable within 6 months for most standard cases. No government equity stake or march-in right is standard in NWO/ZonMw grants for non-defence research.',
        links: [],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 2,
        text: 'NWO mission-driven calls are framed around broad health challenges — reducing multimorbidity, improving quality of life in old age, reducing cardiovascular and dementia burden — but lack specific biological age targets, healthspan extension metrics, or longevity biomarker milestones. The challenge specificity is at the disease-reduction level rather than mechanistic aging biology level. This limits the precision of scientific direction compared to systems like the ARPA-H longevity challenge calls.',
        links: [],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'As an EMA member state, the Netherlands benefits from the full EU conditional marketing authorisation (CMA) pathway, EU rolling review, PRIME designation, and EMA accelerated assessment — all routinely accessible for medicines addressing unmet need including aging-adjacent indications. The CBG-MEB as a highly active NCA participates in EMA Committee for Medicinal Products for Human Use (CHMP) and CAT reviews. The Netherlands ranks among the top 3 EU countries for early access programme utilisation and EMA engagement.',
        links: [
          { label: 'CBG-MEB EMA Engagement', url: 'https://www.cbg-meb.nl/eng', comment: 'Dutch medicines regulator: full EMA pathway access' },
        ],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'EMA rolling review is fully accessible for medicines reviewed via the centralised procedure — which includes all ATMPs, oncology, and most novel therapeutic modalities. The CBG-MEB participates in EMA rolling reviews as a co-rapporteur NCA. For nationally authorised products, a simplified notification procedure exists. The Netherlands does not add an additional layer of rolling review burden on top of EMA processes; no pre-submission duplication is required.',
        links: [],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'CBG-MEB follows EMA guidance on surrogate endpoints. Aging-adjacent surrogates (functional composite outcomes, frailty indices, organ-specific decline measures) are accepted for geriatric indications. Biological age surrogates — epigenetic clocks, proteomic aging scores — remain exploratory at the EU/NL level and are not yet accepted as primary endpoints for registration. CBG-MEB has participated in EMA reflection papers on aging endpoints and has signalled openness to surrogate qualification pathways for novel aging biomarkers.',
        links: [],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 4,
        text: 'The CBG-MEB has a strong post-market surveillance tradition, actively enforcing EMA post-authorisation study commitments (PASCs/PASSs) and using the Lareb pharmacovigilance network for adverse event monitoring. Post-market RWE collection is embedded in Dutch national EHR systems — enabling CBG-MEB to access real-world utilisation and safety data directly. The Netherlands participates in EMA accelerated post-market access initiatives including multi-country RWE studies.',
        links: [
          { label: 'Lareb Pharmacovigilance', url: 'https://www.lareb.nl/en', comment: 'Netherlands Pharmacovigilance Centre — world-class real-world safety surveillance' },
        ],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 4,
        text: 'The Netherlands has a well-defined compassionate use pathway under the CBG-MEB: named patient programmes, cohort compassionate use, and hospital exemptions are streamlined and clearly documented. Physicians can request compassionate use for individual patients within 2–4 weeks for most non-ATMPs. The Dutch government covers significant costs of compassionate use through Tijdelijk Toelating (temporary authorisation) schemes. Evidence collection from expanded access is systematically encouraged and feeds into post-authorisation RWE databases.',
        links: [
          { label: 'CBG-MEB Compassionate Use', url: 'https://www.cbg-meb.nl/geneesmiddelen/noodprocedures', comment: 'Dutch CBG-MEB compassionate use and named patient programme guidance' },
        ],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 4,
        text: 'The Netherlands has a tradition of methodological innovation in trial design — partly driven by the Dutch Cochrane Centre, the Julius Centre for Health Sciences (UMC Utrecht), and Erasmus MC\'s biostatistics group. Adaptive designs including seamless Phase 2/3, response-adaptive randomisation, and biomarker-adaptive enrichment are routinely approved by CCMO and CBG-MEB with scientific advice. The CCMO published specific guidance on adaptive trials and the Netherlands participates in the EU adaptive trial initiative (ACT EU).',
        links: [
          { label: 'CCMO Adaptive Trial Guidance', url: 'https://www.ccmo.nl/onderzoekers/publicaties/wetgeving/adaptieve-designs', comment: 'CCMO guidance on adaptive clinical trial designs' },
        ],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'The CBG-MEB accepts synthetic/external controls for rare disease indications where randomisation is ethically or practically infeasible, following EMA guidance. Dutch clinical trial statisticians (e.g., at Erasmus MC and UMC Utrecht) have published extensively on synthetic control methodology. For aging trials, external control arms using the Rotterdam Study or CBS linkage data as reference populations are methodologically feasible and have been discussed in academic publications, though regulatory precedents are limited.',
        links: [],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 4,
        text: 'Post-COVID, the Netherlands rapidly scaled decentralised clinical trial (DCT) infrastructure. CCMO issued DCT guidance allowing home visits, local laboratory collection, and remote monitoring under investigator oversight. The Dutch GP network (huisarts infrastructure) enables community-based trial execution. Wearable-derived endpoints have been accepted in Dutch trials (including cardiovascular and mobility endpoints). The Netherlands participated in the EU pilot for decentralised trials and is among the leading EU states for DCT adoption.',
        links: [
          { label: 'CCMO DCT Framework', url: 'https://www.ccmo.nl/onderzoekers/publicaties/wetgeving/decentraal-klinisch-onderzoek', comment: 'CCMO guidance on decentralised clinical trials in the Netherlands' },
        ],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 4,
        text: 'The Netherlands participated in multiple EU and global platform trial programmes (RECOVERY, SOLIDARITY, EU-SolidAct for COVID) and the NFU (Netherlands Federation of University Medical Centres) maintains standing infrastructure for platform trial execution across UMCs. Pre-agreed master protocols can be extended with expedited CCMO review for additional arms. The Academic Collaborative Centre model (e.g., Dutch Cancer Cooperative) provides platform-trial-like infrastructure for oncology, with aging being an emerging area.',
        links: [
          { label: 'NFU Clinical Research', url: 'https://www.nfu.nl/themas/klinisch-onderzoek', comment: 'NFU coordination of multi-centre clinical research in NL UMCs' },
        ],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 4,
        text: 'The Netherlands is among the global leaders for RWE integration in regulatory decision-making. CBG-MEB accepts RWE for label extensions, post-market commitments, and as supportive evidence in primary applications for several indications. The Dutch ZIS (hospital information system) and GP EHR data are routinely used in pharmaco-epidemiological studies that inform CBG-MEB reviews. Erasmus MC\'s EHR4CR initiative and NIVEL Primary Care Database are referenced in EMA guidance as best-practice RWE sources.',
        links: [
          { label: 'NIVEL Primary Care Database', url: 'https://www.nivel.nl/en/nivel-primary-care-database', comment: 'Dutch GP network RWE database — major EU RWE source' },
        ],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 3,
        text: 'The Netherlands has a regulatory sandbox in the broader sense through ZonMw challenge programmes and the CBG-MEB\'s scientific advice procedures. A formal "regulatory sandbox" with named status exists in the Dutch digital health sector (through the Healthcare Authority NZa). For biotech and gene therapy, the CCMO\'s proactive engagement and named-indication pilot programmes function as de facto sandboxes, though without a formally named "biotech regulatory sandbox" label. Participation in the EU Pharmaceutical Legislation reform sandbox discussions.',
        links: [],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 3,
        text: 'Through the CCMO/CBG-MEB scientific advice procedures, novel drug modalities (gene editing, novel ATMPs, RNA therapies) can receive pre-IND regulatory engagement with defined outcome scenarios. Novel drug combinations, regenerative medicine, and gene editing are explicitly accommodated in existing regulatory science frameworks. Not a formally labelled sandbox but functions equivalently for most sponsor purposes.',
        links: [],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 3,
        text: 'Ethics-approved studies can include patients with the target indication in the Netherlands from early Phase I for ATMPs and gene therapies. The CCMO\'s Central Review committee enables rapid national authorisation for studies where all sites go through a single review. Prevention studies (including healthy aging cohorts) are explicitly permitted under WMO. Healthy participant involvement is routinely approved for early-phase longevity-relevant biomarker studies.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 3,
        text: 'Dutch law (WMO, Wet BIG) provides liability protections for clinical investigators operating within CCMO/METC-approved frameworks, including compensation insurance requirements. The CCMO\'s ATMP inspection programme gives sponsors regulatory certainty. No specific "sandbox safe harbour" statute exists — liability protection derives from standard clinical trial law — but this is comparable to most EU jurisdictions and operationally sufficient for most development programmes.',
        links: [],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 2,
        text: 'Aging-adjacent indications (frailty, sarcopenia, metabolic syndrome in older adults) can be brought through standard CCMO/CBG-MEB pathways without significant additional barriers. General longevity — lifespan extension or systemic biological age modification — remains without an established regulatory channel. No dedicated longevity pilot or sandbox track exists. CBG-MEB has not issued guidance on aging as a primary indication. The academic interest in longevity science at Dutch UMCs has not yet translated into regulatory path-finding.',
        links: [],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'CBG-MEB (via EMA CHMP) accepts composite aging endpoints as primary for defined aging-adjacent indications such as sarcopenia, frailty, and dementia prevention. Functional composite endpoints (SPPB, PSQI-validated multi-domain instruments) have been used in CBG-reviewed submissions. Biological age surrogates (epigenetic clocks, proteomic aging scores) remain at secondary/exploratory status for regulatory purposes in the Netherlands, mirroring EMA\'s current position. The Rotterdam Study has been used as reference normative data in endpoint qualification discussions.',
        links: [],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 3,
        text: 'Biomarker qualification via EMA\'s Qualification of Novel Methodologies procedure is fully accessible for Dutch-based sponsors and academic groups. The typical timeline of 2–4 years for aging biomarkers reflects EMA capacity; the Netherlands participates via CBG-MEB co-rapporteurship. IMI2/Horizon Europe-funded projects with Dutch co-leadership (including aging biomarker consortia) are exploring accelerated qualification strategies. Rotterdam Study data is available to support qualification packages for several candidate aging endpoints.',
        links: [
          { label: 'EMA Biomarker Qualification Procedure', url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/scientific-advice-protocol-assistance/novel-methodologies-qualification-procedure', comment: 'EMA qualification pathway accessible to Dutch sponsors' },
        ],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 3,
        text: 'The CBG-MEB participates in EMA\'s biomarker co-development framework through CHMP/SAWP. Combined IND/CTA submissions covering both therapeutic and novel aging endpoints are handled via the EU Clinical Trials Regulation (CTR 536/2014) single-application portal. Dutch CCMO is experienced with multi-modal submissions. IMI-funded projects in the Netherlands have demonstrated co-development of aging biomarker platforms alongside therapeutic candidates.',
        links: [],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 4,
        text: 'The Rotterdam Study (Erasmus MC, ongoing since 1990, n>15,000, 30+ years follow-up) is one of the world\'s premier aging biomarker reference databases, with WGS, epigenomics, proteomics, metabolomics, and comprehensive functional aging phenotypes linked to GP and hospital records. This population resource is explicitly available to international researchers via application and has been used as reference data for aging endpoint development and synthetic control construction. Additionally, LifeLines (n>167,000), LASA, and the Netherlands Biobank Lifelines provide complementary normative reference populations.',
        links: [
          { label: 'Rotterdam Study', url: 'https://www.erasmusmc.nl/en/research/the-rotterdam-study', comment: 'World-leading aging epidemiology cohort at Erasmus MC' },
        ],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 4,
        text: 'The Netherlands participates in BBMRI-ERIC (Biobanking and BioMolecular Resources Research Infrastructure), EATRIS (European Infrastructure for Translational Medicine), and ECRIN, all of which include Dutch nodes actively developing aging biomarker measurement standards. Rotterdam Study SOPs for epigenetic clock measurement (Horvath, GrimAge), grip strength, gait speed, and cognitive battery are referenced internationally. Dutch groups participated in developing EMA\'s Integrated Research Action Committee consensus on aging outcome measures.',
        links: [
          { label: 'BBMRI-NL Node', url: 'https://www.bbmri.nl/', comment: 'Dutch national node of BBMRI-ERIC — European biobanking infrastructure with aging biomarker standards' },
        ],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'National Cardiovascular Risk Management (CVRM) protocol: GPs actively identify patients aged 45–80 with elevated risk using practice-based data, send proactive invitations, and measure lipids, BP, and glucose. Results are recorded in structured EHR fields and trigger evidence-based treatment protocols. Uptake among identified-risk patients exceeds 70%. The Hartstichting and NHG (Dutch GP College) publish guidelines updated every 3–5 years; the programme is fully embedded in GP contracts.',
        links: [{ label: 'NHG CVRM Guideline', url: 'https://richtlijnen.nhg.org/standaarden/cardiovasculair-risicomanagement', comment: 'Dutch GP standard on cardiovascular risk management' }],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.INTEGRATED,
        text: 'The Dutch national breast cancer screening programme (bevolkingsonderzoek borstkanker) invites women aged 50–75 by letter every 2 years; mammography results are linked to the PALGA pathology registry and GP EHR automatically. Uptake is approximately 80% — one of the highest in Europe. Abnormal results trigger standardised care pathways with direct hospital referral. The programme is coordinated by RIVM and run by 5 regional screening organisations.',
        links: [{ label: 'RIVM Breast Cancer Screening', url: 'https://www.rivm.nl/borstkanker/bevolkingsonderzoek-borstkanker', comment: 'RIVM programme overview' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.INTEGRATED,
        text: 'The national colorectal cancer screening programme (bevolkingsonderzoek darmkanker) uses biennial FIT (faecal immunochemical test) for adults aged 55–75 (2-yearly invitation). Uptake reached approximately 73% in 2023. Positive FIT results automatically trigger colonoscopy referral within 4 weeks via a structured pathway. Results are linked to the Dutch Cancer Registry (NKR) and GP records. The programme is managed by RIVM with proven mortality reduction impact.',
        links: [{ label: 'RIVM Colorectal Cancer Screening', url: 'https://www.rivm.nl/darmkanker/bevolkingsonderzoek-darmkanker', comment: 'Dutch national CRC screening programme — among EU\'s best for uptake' }],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.INTEGRATED,
        text: 'The Netherlands was the first EU country to transition to HPV primary screening in 2017, replacing cytology with HPV testing every 5 years (women 30–60). Automated EHR notification system sends invitations and tracks outcomes. HPV-positive women proceed to cytology triage and colposcopy if indicated, with results linked to GP and specialist records. This represents the most advanced cervical screening approach in the EU; multiple countries have cited the Dutch rollout as the implementation model.',
        links: [{ label: 'RIVM Cervical Cancer Screening', url: 'https://www.rivm.nl/baarmoederhalskanker/bevolkingsonderzoek-baarmoederhalskanker', comment: 'Dutch HPV-primary cervical screening programme — EU first mover' }],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'The national AAA screening programme (bevolkingsonderzoek buikaorta aneurysma) invites all men aged 65 by letter for a one-time ultrasound. Introduced in 2016, uptake exceeds 80%. Results are communicated to GP with risk-stratified follow-up intervals; surgery referral is automated for AAA >5.5 cm. The programme is run by RIVM alongside the cardiovascular screening infrastructure.',
        links: [{ label: 'RIVM AAA Screening', url: 'https://www.rivm.nl/buikaorta-aneurysma/bevolkingsonderzoek-aorta-aneurysma', comment: 'Dutch national AAA screening programme' }],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'NHG Diabetes type 2 standard mandates proactive identification of at-risk adults (based on age, BMI, waist circumference, family history) by GP practice nurses, with fasting glucose or HbA1c screening. At-risk patients are actively recalled by GP practices as part of structured disease prevention contracts (ketenzorg). Lifestyle intervention referrals are integrated with the results. Not a national letter-based invite programme but embedded in GP systematic care, which in the Netherlands has near-universal primary care registration.',
        links: [],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'DEXA scanning is fully covered by the Dutch basic health insurance (basisverzekering) for adults aged 50+ with FRAX risk above threshold (clinical risk factors). GPs use the NOGG/CBO guideline to identify patients for DEXA; however, this requires clinical contact — the system is passive (patient or doctor must initiate) rather than a proactive national invite programme. Fragility fracture liaison services exist at most hospitals, automatically identifying patients post-fracture for DEXA and osteoporosis management.',
        links: [],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'The Netherlands is the country that conducted the landmark NELSON trial (the world\'s only large RCT of lung cancer CT screening with mortality as primary outcome), demonstrating 26% mortality reduction in men and 39–61% in women. Following NELSON results, RIVM recommended a national programme. Pilot implementation (LuCaS pilot) began in 2023 with ring-fenced funding; formal national expansion is anticipated 2025–2026. Currently not a proactive national invitation but funded for eligible heavy smokers 50–74 who know to request it.',
        links: [{ label: 'NELSON Trial Results', url: 'https://www.nejm.org/doi/10.1056/NEJMoa1911793', comment: 'NELSON trial demonstrating lung cancer CT screening benefit — conducted in NL/Belgium' }],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No proactive national AF screening programme exists. Opportunistic pulse check and single-lead ECG (AliveCor or similar) screening is performed by GPs at routine consultations for patients 65+ with risk factors, driven by NHG guideline recommendations. SAFER-type device-based screening trials have been run in the Netherlands (Maastricht UMC). Expanding to a systematic invitation-based programme is under Gezondheidsraad review; not yet commissioned.',
        links: [],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No national cognitive screening programme. The Deltaplan Dementie (National Dementia Plan) focuses on care coordination and research, not primary prevention screening. NHG guidelines recommend case-finding (assessing cognition if patient or family raises concern), not proactive population-level screening, reflecting the lack of approved disease-modifying treatments. Memory clinics at UMCs offer private/insured detailed assessments for symptomatic individuals. Academic interest in preventive dementia screening is high given Rotterdam Study data on risk factors.',
        links: [],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national polygenic risk score (PRS) screening programme. PRS research is active at Erasmus MC and LUMC, and the Dutch genome data infrastructure (BBMRI-NL, GoNL) is world-class. A Gezondheidsraad advisory report on genetic screening acknowledged PRS potential but recommended against population deployment until clinical utility frameworks are clearer. Research programmes (like UMCU\'s cardiovascular PRS pilot) are underway but pre-clinical-implementation.',
        links: [],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'Sarcopenia assessment (EWGSOP2 criteria) is performed in geriatric outpatient clinics and by physical therapists for frail older adults referred by GPs. No national invite programme exists. BIA (bioelectrical impedance) and grip strength assessments are available in clinical settings and covered by insurance if medically indicated. The Rotterdam Study has extensively characterised sarcopenia epidemiology in NL, but this has not yet driven population screening policy.',
        links: [],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Sleep apnea screening by polysomnography or home sleep testing is covered by basic health insurance if clinically indicated by symptoms (snoring + apnea witnessed, daytime sleepiness, Epworth score). GP practices use the Stop-Bang questionnaire as a screening tool opportunistically. A structured proactive programme does not exist. The Netherlands Sleep Foundation supports improved screening in primary care, but a national programme is under review without commissioned implementation.',
        links: [],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 4,
        text: 'The Gezondheidsraad (Health Council of the Netherlands) conducts systematic evidence reviews of proposed screening programmes and typically produces advisory opinions within 12–18 months. RIVM has a dedicated Centre for Population Screening (Centrum Bevolkingsonderzoek) that can operationalise new programmes rapidly once policy decision is made. The Netherlands transitioned to HPV primary cervical screening within 2 years of policy approval — a benchmark for agility. Pilot-to-national scaling for lung CT screening is proceeding in approximately 5–6 years, somewhat slower than ideal.',
        links: [{ label: 'Gezondheidsraad Screening Advice', url: 'https://www.gezondheidsraad.nl/en/task-and-procedure/areas-of-activity/prevention/preventive-health/population-screening', comment: 'Gezondheidsraad screening advisory procedure' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 3,
        text: 'Rotterdam Study operates as a large opt-in cohort (n>15,000, ~40% participation rate in the target population) with active re-contact and renewal for new sub-cohorts. LifeLines (north NL, n>167,000) is opt-in but broad-consent population-level. A separate category of clinical residual sample collection (ZIS-linked biobanks at UMCs) operates under soft opt-out. There is no universal opt-out national biobank — collection is opt-in at large scale, which is above the EU median but below the ideal level (UK Biobank opt-in but at 500k scale).',
        links: [],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 4,
        text: 'Rotterdam Study has conducted 12+ examination rounds since 1990, with inter-wave intervals of 3–5 years — meeting the ≤5 years threshold for regular re-sampling. Each round includes biospecimen collection. LifeLines follows up participants every 1.5–5 years. The LASA (Longitudinal Aging Study Amsterdam) and NESTOR programmes add additional wave-based data. This longitudinal density is among the best in the world for aging biomarker research, enabling epigenetic clock validation, proteomic trajectory analysis, and phenotypic aging trajectories.',
        links: [{ label: 'LifeLines Cohort', url: 'https://www.lifelines.nl/researcher', comment: 'Large Dutch population cohort with multi-wave follow-up including biomarkers' }],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 4,
        text: 'Rotterdam Study includes whole-genome sequencing (GoNL + targeted subsets), DNA methylation (Illumina 450k/EPIC arrays for multiple cohort waves), plasma proteomics (Olink, SomaScan panels), metabolomics, lipidomics, and comprehensive imaging (MRI brain and body, DXA, echocardiography, retinal imaging). Multi-omic aging phenotyping is state-of-the-art. Functional aging measures (grip strength, gait speed, cognitive battery, frailty index) are also collected, meeting the top-tier criteria.',
        links: [],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 4,
        text: 'Rotterdam Study participants are linked to GP EHR (continuous medication and diagnosis records), hospital discharge records (LMR), PALGA pathology, NKR cancer registry, and national mortality registry (CBS Doodsoorzaken) — all via pseudonymised BSN linkage. This provides EHR + passive data capture level linkage. LifeLines has similar linkage infrastructure. Wearable data collection is being integrated in recent waves. Real-time bidirectional linkage (biobank informing care) is not yet operational.',
        links: [],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 4,
        text: 'Rotterdam Study data is accessible to international researchers via a formal data access request procedure (approximately 4–8 weeks for standard requests). BBMRI-NL provides harmonised access to all Dutch research biobanks through a single portal. LifeLines is similarly internationally accessible under GDPR-compliant framework. Pre-built data packages for common aging biomarker analyses are available. Access is genuinely international — researchers from the USA, UK, Scandinavia, and elsewhere routinely work with Dutch cohort data.',
        links: [{ label: 'BBMRI-NL Data Access', url: 'https://www.bbmri.nl/access-use', comment: 'Harmonised international access portal for Dutch research biobanks' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 4,
        text: 'Dutch GP network infrastructure (all 17M Dutch residents are registered with a GP; NIVEL primary care network covers >95% of practices electronically) enables point-of-care randomisation and near-passive outcome capture for pragmatic trials. The Huisartsen Onderzoek Netwerk (HON) and NIVEL facilitate electronic consent, EHR-based randomisation triggers, and passive follow-up using national registries (mortality, hospitalisation, prescriptions). Several register-based randomised trials (RRCTs) have been completed in primary care, approaching the efficiency of the Nordic systems.',
        links: [{ label: 'NIVEL Primary Care Research Network', url: 'https://www.nivel.nl/en/research/nivel-primary-care-database', comment: 'Dutch primary care research network enabling efficient pragmatic trials' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 4,
        text: 'CBG-MEB has an explicit framework for accepting RWE from pragmatic trials for label extension and post-market confirmation. The Netherlands is among EMA\'s most active RWE-contributing NCAs. NIVEL Primary Care Database RWE has been used in multiple CBG-MEB pharmacovigilance and label extension submissions. A draft EU RWE framework for primary prevention indications is being actively developed, with Dutch experts from Erasmus MC and Radboudumc leading methodological development.',
        links: [],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'The Rotterdam Study has validated and published multiple composite aging scores (Rotterdam Frailty Index, Healthy Aging Index) that are used as secondary endpoints in Dutch trials of aging interventions. Epigenetic clock-based biological age measures (GrimAge, PhenoAge) have been pre-specified as secondary outcomes in Dutch aging trials including VITAL-NL and PRESTO. A validated proteomic aging score developed at Erasmus MC is entering use in active clinical trials. Not yet primary endpoints for regulatory submissions.',
        links: [],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 2,
        text: 'Academic Phase II pilots are underway in the Netherlands including senolytic trials (dasatinib/quercetin in idiopathic pulmonary fibrosis; IPF is aging-adjacent), rapamycin trials in immunosenescence (Amsterdam UMC), and NAD+ precursor trials at Maastricht UMC. No national-scale Phase III trial of an aging-mechanism agent in healthy older adults has been commissioned yet. The MAESTRO programme and ZonMw Healthy Ageing call are beginning to bridge toward Phase II/III scale.',
        links: [],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 4,
        text: 'The NFU (Netherlands Federation of University Medical Centres) coordinates clinical research infrastructure across all 8 UMCs, including standardised SOPs, shared REDCap infrastructure, and coordinated ethics review (CCMO coordination). ZonMw\'s Healthy Ageing programme includes coordination mandates requiring consortium structures. The Netherlands participates in ECRIN (European Clinical Research Infrastructure Network) as a full member. For aging specifically, the Dutch Ageing Consortium and LUMC Longevity Clinic initiative are adding network coordination.',
        links: [{ label: 'ECRIN Netherlands Node', url: 'https://ecrin.org/participating-organisations/clinical-research-organisations/netherlands', comment: 'Dutch ECRIN participation for European trial coordination' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'ToetsingOnline.nl (managed by CCMO) provides a searchable register of all Dutch-approved clinical trials with lay summaries. GP practice EHR systems (notably in the Huisartsen Netwerk) can automatically flag eligible patients for open trials in certain therapeutic areas. The Netherlands Trials Register (NTR/LNKR) links to patient-facing summaries. Full EHR-triggered automated enrolment at population level (NHS/HMO style) is not yet operational for most aging trials, but GP-mediated identification reaches most older adults efficiently.',
        links: [{ label: 'Netherlands Trial Register', url: 'https://www.trialregister.nl/', comment: 'Dutch clinical trial registry with patient-facing search' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 2,
        text: 'CBG-MEB, as an EMA member NCA, follows the EMA position that aging per se is not yet a recognised regulatory indication. Organ-specific aging indications (sarcopenia, frailty, age-related macular degeneration, cognitive decline in MCI) are recognised and have approved drugs or active regulatory development. Systemic aging as a primary indication is under active regulatory science discussion at EMA level, with Dutch experts (Erasmus MC, LUMC) contributing to the EMA Aging Task Force.',
        links: [],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'CBG-MEB follows EMA\'s evolving position on aging endpoints. Multi-domain functional composites (Comprehensive Geriatric Assessment components, 4-metre gait speed, SPPB) are accepted as primary for geriatric indications. Biological age surrogates (epigenetic clocks validated in Dutch cohorts, proteomic aging scores developed at Erasmus MC) have been discussed in scientific advice meetings as secondary endpoints with regulatory agreement for specific frailty/sarcopenia submissions. Not yet primary endpoints for registration.',
        links: [],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 2,
        text: 'Zorginstituut Nederland (ZIN) uses QALY-based HTA (following EUnetHTA guidelines) and acknowledges that standard QALY models may not fully capture healthspan extension value for aging interventions. ZIN has published a methodological brief acknowledging the limitations. The Netherlands participates in the BeNeFIT and EUnetHTA21/HTAR initiatives exploring alternative value frameworks for aging prevention. A validated health-economic model applied in a completed positive HTA assessment for an aging-mechanism intervention does not yet exist.',
        links: [],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 2,
        text: 'Basic health insurance (basisverzekering) covers drugs reimbursed by Zorginstituut Nederland following standard HTA, including some aging-adjacent drugs (bisphosphonates, cholinesterase inhibitors). A conditional coverage (voorwaardelijke toelating) pathway exists for innovative interventions requiring further evidence — this is the most plausible route for emerging aging-mechanism agents. Off-label coverage for aging prevention drugs is possible via individual physician request but not systematically funded. No geroprotector class is currently on the Dutch formulary.',
        links: [],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 2,
        text: 'Dutch aging-mechanism drug candidates can access EMA\'s Breakthrough designation or PRIME scheme if they meet standard criteria — qualifying for accelerated assessment. No Dutch-specific aging designation or expedited pathway exists beyond EMA pathways. CBG-MEB participates in EMA PRIME applications as co-rapporteur for relevant submissions. Growing academic-regulatory dialogue on expediting aging biology trials is occurring through ECRIN and EMA reflection papers.',
        links: [],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 4,
        text: 'CBS (Statistics Netherlands) Microdata Services provides the world\'s most comprehensive administrative health data access system. Accredited researchers from recognised institutions apply online and receive access to microdata environments within days to weeks. Access is through secure remote access environments (RA); a tiered accreditation system means repeat users have lightweight re-application. RIVM and CBS also provide FAIR data packages for common research questions. BBMRI-NL portal enables single-window access to multiple Dutch biobanks with harmonised application processes.',
        links: [
          { label: 'CBS Microdata Access', url: 'https://www.cbs.nl/en-gb/onze-diensten/customised-services-microdata/microdata-doing-research-with-cbs-data', comment: 'CBS secure microdata research access — world-class model' },
        ],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 5,
        text: 'CBS microdata enables complete deterministic linkage of: all 17M Dutch residents\' administrative records (demographics, income, education, housing), hospitalisation (LMR), prescription dispensing (SFK pharmacy data), GP visits (NIVEL aggregates), mortality and cause of death (CBS), social security and long-term care, and more — linked by pseudonymised BSN. This is the most comprehensive population-wide health data linkage infrastructure globally for routine administrative data, allowing researchers to construct complete life-course datasets without additional consent steps.',
        links: [
          { label: 'CBS Microdata Catalogue', url: 'https://www.cbs.nl/nl-nl/onze-diensten/maatwerk-en-microdata/microdata/catalogus-microdata', comment: 'Full CBS microdata catalogue showing linked administrative + health domains' },
        ],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 4,
        text: 'CBS operates a Trusted Research Environment (TRE) — a remote access environment where code runs inside the CBS server, and only aggregated output (checked for disclosure risk) leaves the environment. Rich analytical tooling (R, Stata, Python, SAS) is available. Automated output checking reduces human review bottlenecks. Synthetic twin datasets derived from CBS microdata are available for exploration and algorithm development. DTLS (Datatoegangsprotocol Longitudinale Studies) provides additional frameworks for health cohort data TRE.',
        links: [],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 4,
        text: 'CBS permits ML/AI model training on microdata within the TRE environment, with output disclosure review covering trained model parameters as well as summary statistics. Registered AI research institutions receive a fast-track accreditation. SURF (national IT infrastructure) has signed data processing agreements with CBS to enable computational pipelines. ELSI (ethical, legal, and social implications) guidance for AI on CBS health data was updated in 2023.',
        links: [],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 4,
        text: 'CBS microdata is available to international researchers affiliated with recognised foreign institutions under GDPR Article 89 research exemption. Federated analysis frameworks (no data export required) are being developed through Dutch participation in the European Health Data Space (EHDS) and the EOSC (European Open Science Cloud). GA4GH-aligned Beacon Protocol is implemented by several Dutch biobanks. Full international federated compute is not yet self-service, but standard cross-border researcher access is operationally mature.',
        links: [
          { label: 'Netherlands EHDS Participation', url: 'https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en', comment: 'EU-level data sharing framework actively implemented in NL' },
        ],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 4,
        text: 'Over 98% of Dutch GP practices use electronic HIS (Huisarts Informatie Systeem) — among the highest globally. Hospitals use ZIS (Ziekenhuis Informatie Systeem) with near-universal structured EHR. NICTIZ (Netherlands Institute for ICT in Health) mandates and enforces national interoperability standards. GP-to-hospital and GP-to-pharmacy electronic data exchange (LSP — national patient data exchange system) is fully operational, enabling longitudinal data across primary and secondary care. Structured medication, diagnosis (ICPC), and lab data are standardised.',
        links: [
          { label: 'NICTIZ Netherlands Health IT', url: 'https://www.nictiz.nl/en', comment: 'Dutch national health interoperability standards body' },
        ],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 4,
        text: 'NICTIZ mandates SNOMED CT (full NL National Release Centre), FHIR R4 (MedMij personal health environment standard), LOINC for laboratory results, ICD-10-NL for hospital diagnosis coding, and ATC for medicines. Machine-readable FHIR APIs are mandatory for hospitals and pharmacies under the Wet aanvullende bepalingen verwerking persoonsgegevens in de zorg. Near-complete semantic interoperability across GP, hospital, pharmacy, and lab systems — a benchmark for the EU.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 4,
        text: 'The Netherlands operates complete national registries including: PALGA (all pathology, 100% coverage), NKR (cancer incidence, 100% coverage), LMR (all hospital discharges), SFK (all pharmacy dispensing), NIVEL (GP consultations for 95% of population), CBS mortality and cause of death, DHD hospital procedures, and specialist registers (RIVM PERINED for neonates, Lareb for adverse events). Almost all registries are digital, API-accessible for researchers, and linked via BSN pseudonym.',
        links: [
          { label: 'PALGA National Pathology Registry', url: 'https://www.palga.nl/en/', comment: 'Complete national pathology registry — unique globally for coverage' },
        ],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 4,
        text: 'CBS mortality and hospitalisation data are updated monthly; prescription data is updated quarterly (SFK). NIVEL primary care data is updated quarterly. PALGA pathology is near-real-time (weekly updates for linked research access). Hospital ZIS data is extractable for research purposes with 1–3 month lag typical. Overall, the Netherlands provides monthly-updated data for most key health registries — among the best in the EU for research-relevant data currency.',
        links: [],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 4,
        text: 'SNOMED CT-based computable phenotype definitions are available through NICTIZ and the Dutch clinical data science community (NethMap, OHDSI-NL). Erasmus MC, UMCU, and Amsterdam UMC have built OMOP-CDM implementations enabling federated phenotyping queries across UMC EHR systems without data transfer. The HDR-NL (Health Data Research Netherlands) initiative is building a national open computable phenotype library. Self-service API cohort queries across CBS and NIVEL data are achievable for standard aging phenotypes.',
        links: [
          { label: 'OHDSI Netherlands', url: 'https://www.ohdsi.org/resources/collaborators/', comment: 'Dutch OMOP-CDM implementations enabling harmonised phenotyping across UMCs' },
        ],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 4,
        text: 'Dutch research data infrastructure uses OMOP-CDM as the primary common data model across UMC research databases, HPO for phenotype terms, OBO Foundry ontologies for molecular data, and FHIR profiles for clinical research data exchange. NWO mandates FAIR data deposit including machine-readable metadata with persistent identifiers for all funded research outputs. Automated joins between research cohorts and clinical registries are achievable for HPO, ICD-10-NL, and SNOMED-coded conditions without manual curation.',
        links: [],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 5,
        text: 'CBS microdata enables automatic and comprehensive linkage of research cohort participants to all national administrative and health registries — mortality, hospitalisation, prescriptions, diagnoses, social care — for lifetime follow-up. Rotterdam Study participants consented once at enrolment; clinical events are passively captured through CBS linkage without additional procedures. This fully bidirectional model (where clinical events automatically update the research database) represents the gold standard globally and is used as an exemplar in international biobanking guidelines.',
        links: [],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 5,
        text: 'The Netherlands is the founding home of the FAIR principles (Findable, Accessible, Interoperable, Reusable): Wilkinson et al. 2016, which originated from the DANS/NWO Dutch open science programme. NWO mandates full FAIR compliance for all funded research since 2016 — including public deposit with persistent identifiers (DOI), machine-readable metadata using standard ontologies, and open licensing or clearly defined access conditions. Go FAIR International Support and Coordination Office is based in Hamburg/Leiden. NL is globally the leader in FAIR implementation.',
        links: [
          { label: 'GO FAIR Initiative', url: 'https://www.go-fair.org/', comment: 'FAIR data principles — founded in the Netherlands' },
        ],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 4,
        text: 'Lareb (Netherlands Pharmacovigilance Centre) operates a real-time signal detection system for adverse drug events, integrating spontaneous reports, GP EHR signals (via NIVEL), and hospital data. Lareb participates in the EMA Pharmacovigilance Risk Assessment Committee (PRAC) as a key contributor. EHR-based disproportionality analysis algorithms automatically flag emerging safety signals and link them to prescription and diagnostic data for rapid cohort identification. Research access to Lareb signals for hypothesis generation is available for registered researchers.',
        links: [{ label: 'Lareb Pharmacovigilance Research', url: 'https://www.lareb.nl/en/research', comment: 'Lareb research access for pharmacovigilance-linked hypothesis generation' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 4,
        text: 'NWO is internationally recognised as a world leader in open science policy. Open Access publication is mandatory for all NWO-funded outputs (100% compliance required). Research data management plans and open data deposit are mandatory since 2016. Code sharing is strongly encouraged and increasingly required. NWO participates in the cOAlition S (Plan S) framework. Automated compliance auditing through NARCIS (Netherlands Research Portal) and EASY/DANS repository system. Non-compliance triggers funding investigation.',
        links: [
          { label: 'NWO Open Science Policy', url: 'https://www.nwo.nl/en/open-science', comment: 'NWO world-leading open science requirements for funded research' },
        ],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 5,
        text: 'As an EU member state, the Netherlands/CBG-MEB operates fully within the EU centralised procedure — trial data from any ICH-compliant country is accepted without duplication. EMA mutual recognition between EU member states is complete. The Netherlands also benefits from bilateral MRAs between the EU and key non-EU partners (US FDA, Japan PMDA, Canada, Australia) covering GMP inspection and in many cases supporting data acceptability. For EMA-approved products, no additional Dutch national review is required.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 5,
        text: 'CBG-MEB is among the most active rapporteur NCAs in the EMA system — consistently in the top 2–3 EU NCAs for CHMP rapporteurship, CAT rapporteurship (ATMPs), and PRAC membership. The Netherlands participates in Project Orbis (international parallel review for oncology) through EMA and co-chairs multiple EMA working groups. CBG-MEB experts chair or lead multiple ICH Expert Working Groups. This level of engagement is matched only by Germany (BfArM/PEI) and Sweden (MPA) in Europe.',
        links: [{ label: 'CBG-MEB CHMP Participation', url: 'https://www.cbg-meb.nl/in-english/cbg-meb-within-the-european-framework', comment: 'CBG-MEB\'s active role in EMA committees and joint reviews' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'The Netherlands, as an EU member, is an ICH founding member (through EU) and a full ICH participant. CBG-MEB experts participate in multiple ICH Expert Working Groups — E6 (GCP), E14/E17 (cardiac safety/multi-regional trials), and M7 (genotoxic impurities), among others. Dutch regulatory scientists contribute to setting global ICH standards, not merely implementing them. EMA alignment is complete; no domestic divergence from ICH guidelines exists.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'EMA-approved products are automatically valid across the Netherlands without additional CBG-MEB review. For nationally authorised products, CBG-MEB has defined Mutual Recognition Procedure (MRP) and Decentralised Procedure (DCP) pathways. Unilateral reliance on FDA approvals for national procedure products requires CBG-MEB assessment, but this is streamlined. There is no Dutch-specific re-approval requirement for EMA centralised procedure medicines — the EU framework completely covers this.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 5,
        text: 'Full EU/EEA mutual recognition of medicines approvals and GMP inspections. The EU has operational MRAs with USA (FDA), Japan, Canada, Switzerland, Australia, New Zealand, and Israel covering GMP inspection avoidance — meaning Dutch-manufactured ATMPs or drugs do not require re-inspection in partner countries. EU-level mutual recognition is the broadest globally. Through EMA/EU, the Netherlands participates in the broadest multilateral recognition network in the world.',
        links: [],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'The Netherlands has BSL-3 facilities at Erasmus MC (one of the world\'s leading influenza/coronavirus BSL-3 research centres), Wageningen University, and several UMC biosafety laboratories. BSL-4 is not available domestically but accessible through European facilities (Institut Pasteur Paris, RIVM has interim access to consortium BSL-4). Shared national access to Erasmus BSL-3 is formally organised through research agreements. For longevity science, BSL-2 to BSL-3 is typically sufficient; this limitation is minor.',
        links: [],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 4,
        text: 'The Netherlands has an established GMP manufacturing ecosystem for ATMPs including cell therapy and gene therapy. Leiden Good Manufacturing Practice (LGMP at LUMC), Erasmus MC GMP facility (for viral vectors and cell therapies), and the Amsterdam UMC ATMP manufacturing suite provide academic-to-clinical phase GMP capacity. Commercial CDMOs include Batavia Biosciences (Leiden) and uniQure (gene therapy, Amsterdam). Public ATMP manufacturing capacity has been expanded through EU-ATMP programme and Health Holland investment.',
        links: [
          { label: 'Batavia Biosciences NL CDMO', url: 'https://www.bataviabiosciences.com/', comment: 'Netherlands-based CDMO for viral vectors and cell therapy — leading ATMP capacity' },
        ],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'SURF (Dutch national compute and network organisation) operates Snellius — the Dutch national HPC supercomputer (2021, Intel Ice Lake + AMD EPYC, ~7 PFLOPS peak) — accessible to all Dutch academic researchers. A dedicated Dutch National Genomics Infrastructure (NGI) provides bioinformatics pipelines and compute for genomics workloads. GPU clusters for AI/deep learning are available at SURF and at individual UMC data science units. The Netherlands also benefits from PRACE/EuroHPC access including LUMI and MareNostrum 5.',
        links: [
          { label: 'SURF Snellius HPC', url: 'https://www.surf.nl/en/dutch-national-supercomputer-snellius', comment: 'Dutch national supercomputer — major compute for bioinformatics and aging research' },
        ],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 4,
        text: 'The Dutch National Genomics Initiative (NGI) / GenomeScan and Genome of the Netherlands (GoNL, n=250 whole genomes of Dutch family trios) have established national sequencing infrastructure with 10k–100k+ throughput capacity. UMCU Genomics facility, Erasmus MC Genome Diagnostic Molecular Pathology, and LUMC Clinical Genetics support >50,000 clinical sequencing samples/year. Short-read WGS is routinely available at competitive cost; long-read sequencing is expanding through NANOPORE platforms at multiple UMCs. Population-scale longevity genomics is feasible.',
        links: [
          { label: 'Dutch Genomics Infrastructure NGI', url: 'https://www.dtl.nl/services/ngi/', comment: 'Dutch national genomics sequencing infrastructure' },
        ],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 3,
        text: 'The Hubrecht Institute (Utrecht, KNAW) hosts world-class Drosophila and zebrafish aging platforms, and is internationally recognised for organoid and stem cell aging biology (Clevers group). The NIN (Netherlands Institute for Neuroscience) and several UMC experimental animal facilities have mouse aging colonies. The Netherlands Animal Aging facility (NAAF) provides coordinated mouse lifespan and healthspan study infrastructure. Not at ITP (USA) scale for compound testing, but a competent and accessible shared platform for academic researchers.',
        links: [
          { label: 'Hubrecht Institute', url: 'https://www.hubrecht.eu/research/', comment: 'KNAW Hubrecht Institute — model organism aging biology world-class' },
        ],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 5,
        text: 'The Netherlands is a founding and leading member of virtually every major international aging epidemiology consortium: CHARGE (Cohorts for Heart and Aging Research in Genomic Epidemiology — Rotterdam Study is a founding cohort), IGSR (international genome cohort), INTERMAP, EPIC-NL, and multiple GWAS meta-consortia. Dutch groups co-lead the LONGEVICA, MARK-AGE, and LINK-DEMO EU consortia. Rotterdam Study investigators have co-authored >5,000 papers using international consortium data. Dutch aging researchers hold chairs at international aging societies (ISAR, AGS, BSRA).',
        links: [],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 5,
        text: 'The Netherlands created the FAIR data principles (Go FAIR — Leiden), leads the EOSC (European Open Science Cloud) implementation for health data, and hosts the ELIXIR Netherlands node. CBS microdata infrastructure is a globally referenced model for administrative health data access (cited in Nature Medicine, NEJM, and multiple WHO reports as exemplary). BBMRI-NL provides pan-European biobank access infrastructure. The Netherlands consistently scores first or second in the European Open Data Maturity Assessment for health data.',
        links: [
          { label: 'ELIXIR Netherlands Node', url: 'https://www.dtl.nl/', comment: 'Dutch node of European life science data infrastructure' },
        ],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 5,
        text: 'Full Horizon Europe participation (NL net contributor at €1.6B+/year); Dutch researchers receive disproportionately high ERC grants relative to population size. Active bilateral research agreements with USA (NWO-NSF, NWO-NIH), Japan (NWO-JSPS), China (NWO-NSFC), and Canada (NWO-NSERC). NWO coordinates with DFG (Germany), ANR (France), and UKRI (UK) for large-scale co-funding programmes. Health Holland facilitates EU Innovative Health Initiative (IHI) and IMI projects with industry co-funding.',
        links: [],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 5,
        text: 'Dutch scientists define the global agenda in aging epidemiology. Rotterdam Study has produced >1,500 publications; Cornelia van Duijn and Albert Hofman have H-index >100 in aging epidemiology. Eline Slagboom and Marian Beekman (LUMC) set the standard for longevity genetics research globally. Wouter Mooijaart chairs the Leiden Longevity clinic network. Dutch contributions include seminal work on epigenetic aging clocks, Centenarian genetics (Leiden 100-Plus Study), and GrimAge (Bocklandt, closely tied to Rotterdam data). The Netherlands is the highest per-capita contributor to aging science among EU nations.',
        links: [
          { label: 'Leiden Longevity Study', url: 'https://www.leidenlangleven.nl/', comment: 'World-leading centenarian genetics cohort at LUMC' },
        ],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 4,
        text: 'The Netherlands is a full PCT member and active EPO user; Dutch universities file substantive patent portfolios through their TTOs. Leiden University Holdings, Utrecht Holdings, and TechTransfer AMC are among the most active European academic patent filers in life sciences. NL ranks in the top 5 EU countries for academic patent applications per research euro spent. Strong bilateral IP protection agreements via EU-level frameworks. Researcher-retention norms are established and routinely applied in NWO/ZonMw grant contracts.',
        links: [],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 5,
        text: 'The Netherlands consistently ranks among the top 3 countries globally for public trust in science, medicine, and public health institutions. Eurobarometer surveys place NL trust in science at 85–90%. Vaccine uptake typically exceeds 90% for childhood programmes. Trust in the national public health institute (RIVM) and the Gezondheidsraad is institutionally embedded and supported by transparent public communication practices. The Dutch social contract with public health — embedded in the Calvinist tradition of collective responsibility — creates exceptional conditions for population-level health research and screening participation.',
        links: [
          { label: 'Eurobarometer Science Trust 2021', url: 'https://europa.eu/eurobarometer/surveys/detail/2237', comment: 'EU survey placing NL among highest-trust nations for science and medicine' },
        ],
      },
      [SocietalReadinessClaim.AGING_MEDIA_FRAMING]: {
        score: 2,
        text: 'Healthy aging (gezond oud worden) is a familiar phrase in policy and public life. Public broadcast and national press foreground demography, care pressure, and prevention — not biological aging as a unified popular science theme. Speculative life-extension claims get limited traction in mainstream outlets; geroscience vocabulary has not crossed into general consciousness the way lifestyle and disease frames have.',
        links: [
          { label: 'NOS — greying population outnumbers youth', url: 'https://nos.nl/artikel/2594782-vergrijzing-zet-door-voor-het-eerst-meer-ouderen-dan-jongeren-in-nederland', date: '2024', comment: 'Public broadcaster — demographic milestone; care and society framing' },
          { label: 'NOS Nieuwsuur — greying and hard choices in care', url: 'https://nos.nl/nieuwsuur/artikel/2505083-vergrijzing-dwingt-tot-harde-keuzes-in-de-zorg-niet-alleen-arbeidsmigratie', comment: 'Current affairs — workforce, prevention, technology; burden-of-ageing narrative' },
        ],
      },
      [SocietalReadinessClaim.POLICY_COMMITMENT]: {
        score: 3,
        text: 'ZonMw\'s Healthy Ageing programme is a multi-year government-funded commitment that has survived multiple coalition governments (VVD-PvdA, VVD-CDA, Rutte III, IV, and the Schoof cabinet). The Deltaplan Dementie (2012, renewed 2018, 2023) demonstrates cross-party renewal capacity for an aging disease programme over a decade. NWO Gravitation grants (10-year commitments) provide institutionalised aging science funding independent of annual budget cycles. The National Prevention Agreement is coalition-signed. However, no ring-fenced longevity science budget with quantified healthspan targets exists; framing remains disease prevention and social care quality.',
        links: [],
      },
      [SocietalReadinessClaim.LEGISLATIVE_SALIENCE]: {
        score: 2,
        text: 'The Tweede Kamer treats Wonen, Ondersteuning en Zorg voor Ouderen (WOZO) and eldercare as a standing theme (dossier ouderenzorg); government letters to Parliament in 2024 report implementation (e.g. WOZO workstreams, local dialogue on gezond ouder worden). This is ministerial and parliamentary process on healthy aging, care technology, and housing — not party competition on geroscience or biological longevity.',
        links: [
          { label: 'Tweede Kamer — dossier Ouderenzorg', url: 'https://www.tweedekamer.nl/debat_en_vergadering/uitgelicht/ouderenzorg', comment: 'House of Representatives — debates and documents on older people\'s care' },
          { label: 'Rijksoverheid — Kamerbrief WOZO programme', url: 'https://www.rijksoverheid.nl/documenten/kamerstukken/2024/12/20/kamerbrief-over-programma-wonen-ondersteuning-en-zorg-voor-ouderen', date: 'Dec 2024', comment: 'Government letter to Parliament — WOZO follow-up' },
        ],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 3,
        text: 'The Netherlands Inspection for Health Care and Youth (IGJ) actively enforces standards for healthcare advertising, including anti-aging claims. There is no equivalent to the German Heilpraktiker system. The Keuringsraad Openbare Aanprijzing Geneesmiddelen (KOAG/KAG) enforces advertising standards for health products and supplements. However, the Dutch supplement and wellness market is active, and online direct-to-consumer marketing of NAD+ precursors, senolytics, and other longevity supplements is common and operates largely outside the medical framework, as in most EU countries.',
        links: [
          { label: 'IGJ Healthcare Advertising Enforcement', url: 'https://www.igj.nl/en', comment: 'Dutch healthcare inspection including anti-quackery enforcement' },
        ],
      },
    },
  },
}

export default netherlands
