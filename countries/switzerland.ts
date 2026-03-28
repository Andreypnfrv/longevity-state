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

const switzerland: CountryData = {
  country: Country.SWITZERLAND,

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 4,
        text: 'Switzerland (non-EU) offers a straightforward permit system for qualified researchers. EU/EEA nationals need only register for a residence permit. Non-EU researchers obtain L or B permits via employer sponsorship — ETH Zurich and EPFL have dedicated HR pipelines that handle the full process. Switzerland has a bilateral treaty with the EU enabling free movement, making it functionally open to all EU researchers. The permit system works well; the main friction is the non-EU third-country quota system which can cause wait times for researchers from outside Europe.',
        links: [{ label: 'SEM Swiss Residence Permits', url: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta/ausuebung-einer-erwerbstaetigkeit.html', comment: 'SEM — researcher residence permit system; EU bilateral free movement; non-EU quota system' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 4,
        text: 'Cantonal migration offices process researcher permits in 4–8 weeks for EU nationals and 6–12 weeks for non-EU. ETH Zurich and EPFL have dedicated immigration support desks that pre-validate documents and reduce processing time. Swissmedic\'s regulatory speed is world-class and transfers to the administrative culture more broadly — Swiss bureaucracy, while real, is efficient by international standards.',
        links: [{ label: 'ETH Zurich Immigration Support', url: 'https://ethz.ch/en/the-eth-zurich/working-teaching-and-research/staff/newcomers/immigration.html', comment: 'ETH — dedicated immigration support; pre-validated document processing; 4–8 week typical timeline for EU' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 5,
        text: 'Switzerland is a signatory to the Lisbon Recognition Convention and automatically recognises doctoral degrees from all Bologna Process signatories. ETH Zurich, EPFL, and Swiss universities have no re-qualification requirements for foreign PhDs. swissuniversities has a fast-track academic equivalence recognition process. For industry (pharma, biotech), recognition is at employer discretion and is universally straightforward at the international company level.',
        links: [{ label: 'swissuniversities Recognition', url: 'https://www.swissuniversities.ch/en/higher-education-area/recognition-and-qualifications', comment: 'swissuniversities — automatic degree recognition under Lisbon Convention; all Bologna signatory PhDs recognised' }],
      },
    },
    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.MEDICAL_LICENCE_PORTABILITY]: {
        score: 4,
        text: 'Switzerland has automatic mutual recognition of medical degrees from all EU/EEA member states. Non-EU graduates must apply to Medregom (federal medical professions register) — a competency review process taking 3–6 months, which is efficient by international standards. The Swiss Medical Association recognises degrees from ~100 countries. For specialists, the FMH specialist title is the gold standard and requires Swiss-training or equivalence review.',
        links: [{ label: 'Medregom Federal Medical Register', url: 'https://www.medregom.admin.ch/', comment: 'Medregom — EU/EEA automatic recognition; non-EU 3–6 month equivalence review; ~100 countries recognised' }],
      },
      [ClinicianImmigrationClaim.FAST_TRACK_SPECIALIST]: {
        score: 3,
        text: 'Academic medical centres (Inselspital Bern, University Hospital Zurich, Geneva HUG, Lausanne CHUV) actively recruit international senior specialists. FMH specialist title equivalence assessment typically takes 4–6 months. No formal fast-track exists, but Swiss academic hospitals have well-developed HR processes for international specialists. Geriatric medicine specialists from EU countries join within typical FMH review timeframes.',
        links: [{ label: 'FMH Specialist Recognition', url: 'https://www.fmh.ch/en/services/fmh-specialist-title.html', comment: 'FMH — specialist recognition; EU automatic; non-EU 4–6 month review; academic hospital pipeline efficient' }],
      },
    },
    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.PHD_THROUGHPUT]: {
        score: 3,
        text: 'Switzerland produces ~4,000 doctoral graduates per year (per FSO) — small in absolute terms but very high per capita (47 per 10,000 population, top 3 in OECD). ETH Zurich and EPFL account for ~30% of all Swiss PhDs. Over 50% of PhD students at ETH/EPFL are international — Switzerland is one of the most internationalised PhD pipelines globally. Quality is consistently world-class.',
        links: [{ label: 'FSO Swiss PhD Statistics', url: 'https://www.bfs.admin.ch/bfs/en/home/statistics/education-science/graduations.html', comment: 'FSO — 4,000 PhDs/year; 47 per 10,000 population (top 3 OECD); 50%+ international at ETH/EPFL' }],
      },
      [ResearchTrainingClaim.POSTDOC_CONDITIONS]: {
        score: 4,
        text: 'Swiss postdoctoral salaries (SNF-funded) are among the highest globally: CHF 87,000 (senior postdoc) per year, plus substantial benefits. Cost of living is very high in Zurich/Geneva, but net-of-cost quality of life is competitive. ETH Zurich career development for postdocs is structured — explicit timelines, mentorship, and industry placement support. Swiss National Science Foundation (SNF) fellowship rates are highly competitive.',
        links: [{ label: 'SNF Postdoc Salary Scales', url: 'https://www.snf.ch/en/XIZpsPt6Yf7z5B5v/topic/personnel-salaries-and-living-costs', comment: 'SNF — CHF 87k senior postdoc salary; structured career development at ETH/EPFL' }],
      },
      [ResearchTrainingClaim.AGING_SPECIFIC_TRAINING]: {
        score: 3,
        text: 'ETH Zurich\'s Laboratory of Molecular Biogerontology (Dillin lab collaboration), EPFL\'s Laboratory of Integrative Systems Physiology (Johan Auwerx), University of Geneva aging biology groups, and University of Zurich Centre on Aging provide dedicated aging research training. The NCCR Microbiomes and NCCR RNA & Disease programmes have aging components. Per-capita aging research training density is above EU average but absolute numbers are small.',
        links: [{ label: 'EPFL Lab Integrative Systems Physiology', url: 'https://www.epfl.ch/labs/auwerx-lab/', comment: 'EPFL Auwerx lab — world-leading mitochondrial aging research; PhD training in longevity biology' }],
      },
    },
    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_CURRICULUM]: {
        score: 4,
        text: 'Switzerland has a well-structured geriatric medicine specialty (Geriatrie FMH) with a 4-year residency programme. All Swiss medical schools include mandatory geriatrics rotations. The Swiss Society of Geriatrics runs a comprehensive continuing education programme. Switzerland has one of Europe\'s highest per-capita geriatrician densities. The training quality is high — ETH/EPFL research environment cross-fertilises clinical geriatric training with basic science.',
        links: [{ label: 'Swiss Society of Geriatrics', url: 'https://www.sgg-ssg.ch/en/', comment: 'SGG — Swiss geriatrics specialty; 4-year FMH residency; mandatory university curriculum rotations' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_SCIENCE_IN_CME]: {
        score: 3,
        text: 'Swiss Society of Geriatrics and the Swiss Academy of Medical Sciences (SAMS) include longevity biology in CME modules. EPFL/ETH run public lectures and continuing education on aging science accessible to clinicians. Biomarker-guided aging assessment is emerging in Swiss CME but not yet systematic. Switzerland\'s proximity to major European geroscience congresses (EuGMS, EUGMS) facilitates access to cutting-edge CME.',
        links: [{ label: 'Swiss Academy of Medical Sciences CME', url: 'https://www.samw.ch/en/Education.html', comment: 'SAMS — CME for Swiss physicians; aging science increasingly featured; longevity biomarkers emerging' }],
      },
    },
    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 4,
        text: 'SNF Ambizione and PRIMA grants provide substantial protected research time for clinician-scientists. ETH Zurich and EPFL have formal clinician-scientist tracks with 50% protected research time at partner hospitals (Inselspital, USZ, HUG, CHUV). The Swiss Network for Translational Research in Genomic Medicine enables clinician-scientist collaboration. Protected time arrangements are better than most EU countries.',
        links: [{ label: 'SNF Ambizione Grants', url: 'https://www.snf.ch/en/m1NtWp4nqcLudPBI/funding/ambizione', comment: 'SNF Ambizione — protected research time for early-career clinician-scientists; 4-year grants' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.PUBLIC_FUNDING_INTENSITY]: {
        score: 5,
        text: 'Switzerland spends ~3.5% of GDP on R&D (highest in Europe) with public R&D at ~0.8% GDP. SNF (Swiss National Science Foundation) distributes CHF 1B+ per year in research grants. The ETH Domain (ETH Zurich, EPFL, four research institutes) receives CHF 3.7B annually from the federal government. Switzerland\'s per-capita public research investment is the highest in continental Europe.',
        links: [{ label: 'SNF Annual Report', url: 'https://www.snf.ch/en/WbgaEXHeQyBCNqKg/page/the-snf', comment: 'SNF — CHF 1B+ annual grants; highest per-capita research investment in continental Europe' }],
      },
      [ResearchFundingClaim.AGING_SPECIFIC_PROGRAMMES]: {
        score: 3,
        text: 'SNF funds aging research through the National Research Programme NRP 67 (End of Life), NRP 77 (Digital Transformation Health), and general grants to ETH/EPFL aging labs. No dedicated national aging longevity programme equivalent to Singapore\'s Healthy Longevity or Japan\'s Moonshot Goal 7. The Swiss Gerontological Society and individual cantonal health initiatives partially fill this gap. Strong aging research exists; dedicated national funding envelope does not.',
        links: [{ label: 'SNF National Research Programmes', url: 'https://www.snf.ch/en/tV5L2PvqXPEFJAV7/topic/national-research-programmes', comment: 'SNF NRP — aging-related themes (NRP 67, 77); no dedicated longevity science NRP yet' }],
      },
      [ResearchFundingClaim.PRIVATE_LONGEVITY_INVESTMENT]: {
        score: 5,
        text: 'Switzerland is home to the world\'s highest concentration of major pharmaceutical companies with aging pipelines: Novartis (senolytic compounds, rapamycin analogues), Roche (neurodegeneration, sarcopenia), Lonza (cell therapy manufacturing), and dozens of longevity-adjacent biotechs (Juvena Therapeutics, Insilico Medicine Zurich operations, Unity Biotechnology collaboration). The Basel-Zurich-Geneva axis is the world\'s most pharma-dense longevity research corridor per square kilometer.',
        links: [{ label: 'Novartis Senescence Research', url: 'https://www.novartis.com/research-development/research-focus/aging-and-cellular-senescence', comment: 'Novartis — major aging biology research programme; senolytic and aging hallmark focused pipeline' }],
      },
    },
    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.RESEARCH_PERMISSIVENESS]: {
        score: 3,
        text: 'Switzerland\'s Federal Act on Research involving Human Beings (HRA) and the Gene Technology Act govern gene editing research. Somatic gene editing research is permitted with ethics commission approval. Germline editing on human embryos is prohibited (stricter than UK or Singapore). CRISPR-based aging research is permitted at the somatic level without specific restrictions. Switzerland is more permissive than Germany but more conservative than the UK.',
        links: [{ label: 'Swiss Gene Technology Act', url: 'https://www.bag.admin.ch/bag/en/home/medizin-und-forschung/biomedizin-und-forschung-am-menschen/stammzellen-forschung.html', comment: 'Swiss Gene Technology Act — somatic editing permitted; germline prohibited; ethics commission review required' }],
      },
      [GeneEditingClaim.CLINICAL_TRANSLATION_PATHWAY]: {
        score: 4,
        text: 'Swissmedic has an expedited review pathway for ATMPs (Advanced Therapy Medicinal Products) including gene therapies. Switzerland is not bound by EMA regulations but has equivalent ATMP frameworks and Swissmedic accepts EMA-approved products under simplified review. Swissmedic is consistently ranked among the world\'s most efficient regulatory agencies — approval timelines are shorter than EMA. Several gene therapies have been approved in Switzerland before EMA.',
        links: [{ label: 'Swissmedic ATMP Pathway', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/advanced-therapy-medicinal-products.html', comment: 'Swissmedic — ATMP expedited pathway; faster than EMA; several gene therapies first approved in Switzerland' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.DEDICATED_BODY]: {
        score: 3,
        text: 'Switzerland lacks a DARPA/ARPA-H equivalent. Innosuisse (Swiss Innovation Agency) funds applied research and startup development but is primarily SME and innovation-focused, not a breakthrough science agency. The Hasler Foundation and Gebert Rüf Stiftung fund high-risk research but are private. ETH Board and strategic EPFL-ETH initiatives partially fill this gap. Switzerland relies on the private pharma sector (Novartis, Roche) to fund breakthrough longevity science — which is substantial but not government-directed.',
        links: [{ label: 'Innosuisse Swiss Innovation Agency', url: 'https://www.innosuisse.ch/inno/en/home.html', comment: 'Innosuisse — applied research funding; SME and startup focus; not a breakthrough science agency equivalent' }],
      },
      [BreakthroughAgencyClaim.FUNDING_SCALE]: {
        score: 4,
        text: 'Total public R&D investment: CHF 3.7B (ETH Domain) + CHF 1B+ (SNF) + cantonal contributions. Per capita, this is among the highest in the world. Private pharma R&D (Novartis: CHF 9B, Roche: CHF 13B annually) dwarfs public investment — and a significant fraction of this is aging-adjacent. The total ecosystem funding for longevity-relevant science is extraordinary relative to Switzerland\'s population of 8.8M.',
        links: [{ label: 'ETH Domain Federal Funding', url: 'https://ethz.ch/en/the-eth-zurich/information/facts-and-figures.html', comment: 'ETH Zurich — CHF 2B+ annual federal budget; EPFL and four research institutes additional; largest public science investment in CH' }],
      },
      [BreakthroughAgencyClaim.RISK_TOLERANCE]: {
        score: 3,
        text: 'SNF\'s Sinergia and NCCR programmes accept higher-risk interdisciplinary research. EPFL and ETH have internal "seed funding" mechanisms for unconventional ideas. However, Swiss science funding culture is conservative relative to the US or Singapore — incremental excellence is rewarded; moonshot ambition is less systematically funded through public channels. The private pharma sector provides the risk-tolerant capital in Switzerland.',
        links: [{ label: 'SNF Sinergia Programme', url: 'https://www.snf.ch/en/lWYpBqCovb8sJSJr/funding/sinergia', comment: 'SNF Sinergia — interdisciplinary high-risk grants; moderate risk tolerance relative to global peers' }],
      },
    },
    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'Swissmedic has a conditional approval mechanism (Zulassung unter Auflagen) for innovative products with promising early evidence. Switzerland was among the first countries to implement EMA\'s adaptive licensing concept and has granted conditional approvals faster than EMA in several oncology and gene therapy cases. Swissmedic\'s size advantage (small, expert, responsive) makes adaptive pathways genuinely faster than larger agencies.',
        links: [{ label: 'Swissmedic Conditional Approval', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/authorisation-of-medicinal-products-for-human-use/conditional-authorisation.html', comment: 'Swissmedic — conditional authorisation pathway; faster than EMA; used for innovative therapies with early data' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'Swissmedic accepts rolling submissions for innovative products, allowing companies to submit study modules as data becomes available. Switzerland participated in the EMA-FDA-Health Canada joint rolling review for COVID-19 vaccines — demonstrating world-leading adaptive review capacity. For aging biologics, Swissmedic\'s rolling review is formally available and practically accessible.',
        links: [{ label: 'Swissmedic Rolling Review', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — rolling submission; participated in international joint rolling review for COVID vaccines' }],
      },
      [AdaptiveLicensingClaim.REGISTRY_LINKAGE]: {
        score: 3,
        text: 'Switzerland\'s BROCACEF registry for post-market data collection and cantonal health registries provide some post-market surveillance linkage for conditional approvals. The national cancer registry and vital statistics are linkable to clinical data for research. EHR fragmentation (cantonal hospital systems) and language complexity (German, French, Italian) limit seamless registry linkage for adaptive approval surveillance.',
        links: [{ label: 'SAQM Quality Registries Switzerland', url: 'https://www.saqm.ch/en.html', comment: 'SAQM — Swiss quality registries for clinical outcomes; used for conditional approval post-market surveillance' }],
      },
    },
    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.PLATFORM_TRIALS]: {
        score: 3,
        text: 'Switzerland has participated in major international platform trials (RECOVERY, REMAP-CAP) through Basel, Bern, and Zurich university hospitals. No Switzerland-initiated aging platform trial exists. SAKK (Swiss Group for Clinical Cancer Research) has platform trial experience. The capability exists; aging-specific platform trial leadership has not yet emerged.',
        links: [{ label: 'SAKK Swiss Cancer Research Group', url: 'https://www.sakk.ch/en/', comment: 'SAKK — Swiss platform trial expertise in oncology; transferable model for aging platform trials' }],
      },
      [TrialDesignClaim.REGISTER_BASED_TRIALS]: {
        score: 3,
        text: 'Switzerland has condition-specific registries (cardiac surgery, oncology, orthopaedic) that have been used for registry-based evidence generation. SENIORAGILITY and other Swiss aging registries exist for frailty surveillance. Full register-based RCT methodology is feasible but has not been implemented at national scale for aging — the cantonal structure and linguistic diversity complicate Switzerland-wide register-based trials.',
        links: [{ label: 'Swiss Frailty Network SFN', url: 'https://www.swissfrailtynetwork.ch/', comment: 'Swiss Frailty Network — frailty registry infrastructure; used for aging endpoint validation across cantons' }],
      },
      [TrialDesignClaim.BAYESIAN_ADAPTIVE]: {
        score: 4,
        text: 'Swissmedic and the cantonal ethics commissions accept Bayesian adaptive trial designs — Swiss regulatory culture is pragmatic and evidence-focused. University of Basel and EPFL have strong biostatistics groups active in adaptive design methodology. Basel has historically been a centre for Bayesian statistics in pharma (Novartis Basel is a global leader in Bayesian adaptive trial design). This expertise diffuses into academic trial design.',
        links: [{ label: 'Novartis Bayesian Trial Design', url: 'https://www.novartis.com/research-development/research-technologies/statistics', comment: 'Novartis — global leader in Bayesian adaptive design; expertise concentrated in Basel and diffuses to academic sector' }],
      },
    },
    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTS]: {
        score: 3,
        text: 'Switzerland has an "agile" regulatory environment rather than a formal sandbox. Swissmedic offers extensive pre-submission scientific advice, early dialogue programmes (comparable to FDA Breakthrough Therapy consultations), and customised regulatory pathways. The Swiss Digital Health regulatory framework (2024) includes sandbox principles for digital health products. A formal named sandbox does not exist; the equivalent capability does.',
        links: [{ label: 'Swissmedic Scientific Advice', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/scientific-advice-and-protocol-assistance.html', comment: 'Swissmedic — scientific advice programme; early dialogue for innovative products; effective sandbox equivalent' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_SPECIFIC]: {
        score: 2,
        text: 'No longevity-specific regulatory sandbox or named pathway. Novartis and Roche have informal access to Swissmedic for early regulatory dialogue on aging programmes, reflecting industry density. The Federal Commission for Bioethics (EKAH) regularly discusses aging biology policy. A formal longevity regulatory innovation programme has not been announced.',
        links: [{ label: 'Swiss Federal Commission Bioethics EKAH', url: 'https://www.ekah.admin.ch/en/home.html', comment: 'EKAH — bioethics and aging biology policy discussions; no longevity regulatory sandbox yet' }],
      },
    },
    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.BIOMARKER_QUALIFICATION]: {
        score: 3,
        text: 'Swissmedic follows EMA guidance on biomarker qualification — no additional formal processes. The EPFL Auwerx lab and ETH longevity groups are among the world\'s leading developers of aging biomarker science (NAD metabolism, mitochondrial aging, epigenetic clocks). The Swiss Personalized Health Network (SPHN) includes aging biomarker standardisation as a priority. Qualification science is world-class; formal regulatory process tracks EMA.',
        links: [{ label: 'Swiss Personalized Health Network SPHN', url: 'https://sphn.ch/', comment: 'SPHN — national personalized health infrastructure; aging biomarker standardisation included as priority area' }],
      },
      [AgingEndpointClaim.COMPOSITE_ENDPOINTS]: {
        score: 3,
        text: 'Swissmedic accepts composite functional aging endpoints per EMA and ICH guidance. Swiss academic groups have contributed to European frailty and sarcopenia endpoint consensus (EuGMS, EUGMS). The Swiss Frailty Network has validated composite frailty indices in Swiss population samples. No Swiss-specific endpoint standards beyond EMA guidance.',
        links: [{ label: 'Swiss Frailty Network Endpoints', url: 'https://www.swissfrailtynetwork.ch/', comment: 'Swiss Frailty Network — frailty composite endpoint validation in Swiss population cohort; EMA-aligned standards' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CANCER_SCREENING_COVERAGE]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Switzerland has national mammography and colorectal cancer screening recommendations (FOPH guidelines) but implementation is cantonal — resulting in significant geographic variation in programme existence and quality. Bowel cancer screening programmes operate in only a handful of cantons (Vaud, Zurich, Basel). This is a recognised gap relative to France, Germany, and Sweden. Cervical cancer screening recommendations are national but delivery is fragmented.',
        links: [{ label: 'FOPH Cancer Screening Recommendations', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/nationale-krebsstrategie.html', comment: 'FOPH — national recommendations; cantonal implementation creates geographic variation; bowel cancer in only some cantons' }],
      },
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'FOPH recommends cardiovascular risk assessment (SCORE2) for adults 40–70. General practitioners conduct opportunistic cardiovascular screening but there is no systematic population-level programme. The Swiss Heart Foundation coordinates awareness but not delivery. Screening rates are good among regularly consulting adults; those without regular GP contact are underserved.',
        links: [{ label: 'Swiss Heart Foundation', url: 'https://www.swissheartfoundation.ch/en/', comment: 'Swiss Heart Foundation — cardiovascular risk awareness; no systematic national population screening programme' }],
      },
      [PopulationScreeningClaim.METABOLIC_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Diabetes screening follows FOPH and SGED (Swiss Society of Endocrinology) guidelines via GP opportunistic screening. No national diabetes screening programme equivalent to Japan\'s Tokutei Kenshin. Switzerland has one of Europe\'s highest health insurance coverage rates, enabling GP-based screening, but uptake depends on patient-initiated consultation. The check-up ("Vorsorgeuntersuchung") is incentivised but not mandated.',
        links: [{ label: 'Swiss Society of Endocrinology SGED', url: 'https://www.sged.ch/en/', comment: 'SGED — diabetes screening guidelines; GP opportunistic model; no systematic national programme' }],
      },
      [PopulationScreeningClaim.COGNITIVE_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Alzheimer Switzerland and Memory Clinics at university hospitals operate cognitive screening, mainly targeting symptomatic individuals. No national population-based cognitive screening programme. FOPH has not recommended universal asymptomatic cognitive screening. Several cantonal programmes exist (Geneva Memory Clinic, Bern) but they are resource-constrained and referral-driven.',
        links: [{ label: 'Alzheimer Switzerland', url: 'https://www.alzheimer-schweiz.ch/en/', comment: 'Alzheimer Switzerland — awareness and screening referral; no national population cognitive screening programme' }],
      },
      [PopulationScreeningClaim.BONE_DENSITY_SCREENING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Swiss Society of Rheumatology and SGR (Swiss Geriatrics Society) recommend DXA for high-risk groups. SVGO (Swiss Association against Osteoporosis) runs awareness campaigns. No mandatory national programme; opportunistic screening via GP for post-menopausal women and older adults with risk factors. Switzerland\'s high-quality healthcare ensures access for those seeking it; proactive population-level reach is limited.',
        links: [{ label: 'Swiss Association against Osteoporosis SVGO', url: 'https://www.svgo.ch/en/', comment: 'SVGO — osteoporosis screening guidance; high-risk group DXA; no universal population programme' }],
      },
      [PopulationScreeningClaim.VISION_HEARING]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Swiss recommendations include periodic ophthalmology checks for diabetic retinopathy and glaucoma risk groups. Hearing screening is available via audiologists but not systematically offered nationally. The "Age Platform Switzerland" promotes hearing health but no national programme exists. GP-level opportunistic hearing assessment is inconsistent.',
        links: [{ label: 'Age Platform Switzerland', url: 'https://www.age-platform.ch/en', comment: 'Age Platform — healthy aging promotion including sensory health; no systematic national hearing/vision screening programme' }],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.PARTIAL_PROGRAMMES,
        text: 'Swiss Frailty Network and Swiss Society of Geriatrics recommend SARC-F and grip strength assessment for older adults in geriatric care settings. Not part of any systematic population-level screening programme. University hospital geriatric assessment units conduct comprehensive frailty screening. Community-level sarcopenia screening coverage is limited.',
        links: [{ label: 'Swiss Society of Geriatrics Frailty', url: 'https://www.sgg-ssg.ch/en/', comment: 'SGG — frailty and sarcopenia screening in geriatric settings; SARC-F recommended; no population programme' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.NO_PROGRAMME,
        text: 'No national OSA screening programme. Sleep Medicine Switzerland and cantonal sleep centres handle referral-based diagnosis. The STOP-BANG tool is used in some GP practices opportunistically. High-quality portable monitoring is reimbursed by mandatory health insurance once suspected — but proactive screening is absent.',
        links: [{ label: 'Sleep Medicine Switzerland', url: 'https://www.sgssc.ch/en/', comment: 'Swiss Society of Sleep Research — referral-based OSA diagnosis; no national proactive screening programme' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'Switzerland\'s federated cantonal system is the main barrier to screening programme agility. New national programmes require FOPH recommendation, cantonal adoption, and funding agreement — a process that typically takes 5–8 years. Colorectal cancer screening expansion has been ongoing for over a decade without reaching all cantons. Scientific evidence quality is high; political implementation speed is among the lowest in Western Europe for screening programmes.',
        links: [{ label: 'FOPH Screening Programme Process', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/nationale-krebsstrategie/krebsfrueherkennung.html', comment: 'FOPH — cantonal screening programme adoption; 5–8 year FOPH-to-canton implementation timeline' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.LONGITUDINAL_COHORT]: {
        score: 4,
        text: 'The Swiss Cohort of HIV-Infected Patients (SHCS, 20,000 participants) uniquely captures accelerated aging. CoLaus (Lausanne, 7,000+ participants, cardiometabolic aging) and the Zurich Cohort Studies provide longitudinal aging data. The SPECCHIO cohort (Geneva, post-COVID aging) adds a novel dimension. Swiss National Cohort (SNC, 8M+ individuals, administrative data linkage) is one of Europe\'s largest admin-data cohorts.',
        links: [{ label: 'Swiss National Cohort SNC', url: 'https://www.swissnationalcohort.ch/', comment: 'SNC — 8M+ individual administrative data cohort; death registry linkage; population aging surveillance' }],
      },
      [BiomarkerCollectionClaim.BIOBANK_DEPTH]: {
        score: 4,
        text: 'Swiss Biobanking Platform (SBP) coordinates 40+ biobanks across university hospitals and research institutes. The Biobank of the University of Lausanne (Lausanne, CoLaus samples) and Geneva Biobank have deep phenotyping with aging biomarkers. SPHN (Swiss Personalized Health Network) is harmonising biobank data nationally. Private biobanks at Novartis and Roche add a significant industry dimension.',
        links: [{ label: 'Swiss Biobanking Platform SBP', url: 'https://www.swissbiobanking.ch/', comment: 'SBP — national biobank coordination; 40+ institutions; aging biomarker harmonisation under SPHN' }],
      },
      [BiomarkerCollectionClaim.OMICS_DEPTH]: {
        score: 5,
        text: 'EPFL (Auwerx lab, Bhatt lab) and ETH Zurich are global leaders in aging multi-omics: metabolomics of NAD metabolism, proteomics of aging hallmarks, single-cell transcriptomics of aging tissues, epigenetic clock development. Nestlé Research in Lausanne contributes nutrition-aging multi-omics. Roche and Novartis internal aging omics programmes are among the most advanced in industry. Switzerland\'s omics depth for aging is second only to the US in some specific domains.',
        links: [{ label: 'EPFL Auwerx Lab Multi-Omics', url: 'https://www.epfl.ch/labs/auwerx-lab/', comment: 'EPFL — world-leading NAD metabolism and mitochondrial aging multi-omics; Swiss cohort validation' }],
      },
      [BiomarkerCollectionClaim.EHR_LINKAGE]: {
        score: 3,
        text: 'SPHN\'s BioMedIT secure data network enables EHR-biobank linkage across Swiss university hospitals. Cantonal hospital EHR systems (USZ eKAT, HUG/CHUV OpenEHR) are being harmonised. The Swiss EPD (Electronic Patient Dossier, national EHR) is being rolled out but adoption is slow — 2024 coverage remains low. Research EHR linkage is feasible at individual institution level but national-scale linkage requires multi-institutional agreements.',
        links: [{ label: 'SPHN BioMedIT Secure Network', url: 'https://sphn.ch/network/biomedit/', comment: 'SPHN BioMedIT — secure EHR-biobank linkage for research; covering Swiss university hospitals; national EPD rollout in progress' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 4,
        text: 'Swiss university hospitals are among Europe\'s most efficient clinical trial sites. Swissmedic\'s fast approval timelines, BASEC (Swiss ethics commission) coordinated review (single national committee since 2019), and English-language trial capacity make Switzerland highly attractive to international sponsors. Average approval-to-first-patient: 2–3 months — among the fastest in Europe. Switzerland punches above its weight in international trial portfolio.',
        links: [{ label: 'BASEC Swiss Ethics Commission', url: 'https://www.basec.unibe.ch/index_eng.html', comment: 'BASEC — centralised Swiss ethics review since 2019; single decision covers all cantons; 2–3 month approval-to-enrolment' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'Swissmedic accepts real-world evidence for post-market surveillance and some label extension applications. RWE is not accepted as primary evidence for de novo approval in Switzerland. The Swiss quality registries and administrative data provide useful post-market evidence. Swissmedic participates in international RWE harmonisation (EMA-FDA-Health Canada working group) and will likely adopt expanded RWE acceptance in alignment with EMA.',
        links: [{ label: 'Swissmedic RWE Guidance', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — RWE accepted for post-market and label extension; primary approval still requires traditional evidence' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'Functional aging composites (SPPB, grip strength, EQ-5D) are used in Swiss aging trials and accepted by Swissmedic and BASEC. Epigenetic clock endpoints are used as exploratory secondaries in EPFL and University of Zurich trials. No biological age primary endpoint has been used in a regulatory submission to Swissmedic. Switzerland follows EMA precedents on endpoint acceptance.',
        links: [{ label: 'Swiss Clinical Trial Portal', url: 'https://clinicaltrials.gov/search?cntry=CH', comment: 'Swiss aging trials on ClinicalTrials.gov — functional endpoints used; exploratory biomarker endpoints in academic trials' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 3,
        text: 'Swiss academic centres (EPFL, ETH, Basel, Zurich) have ongoing aging mechanism trials: NAD+ precursor studies (NMN, NR), senolytics (fisetin, dasatinib pilot studies), metformin aging pilot (Swiss TAME collaboration), and caloric restriction studies. Novartis has Phase I/II internal aging compound trials based in Switzerland. The academic pipeline is smaller than Japan or the US but the industry pipeline (Novartis, Roche) is substantial.',
        links: [{ label: 'ETH Zurich Aging Intervention Trials', url: 'https://ethz.ch/en/research.html', comment: 'ETH Zurich — active aging mechanism trials; NAD precursors, senolytics, mTOR pathway interventions' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 3,
        text: 'SCTO (Swiss Clinical Trial Organisation) coordinates multi-site clinical trials across Swiss university hospitals. SAKK handles oncology; no equivalent aging-specific coordinating body exists. BASEC\'s single national ethics review eliminates the multi-IRB problem that plagues other countries. The coordination infrastructure is good — aging-specific mandate is absent.',
        links: [{ label: 'SCTO Swiss Clinical Trial Organisation', url: 'https://www.scto.ch/en/', comment: 'SCTO — national clinical trial coordination; covers all Swiss university hospitals; single-IRB BASEC review' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'kofam (Swiss clinical trial registry, part of ICTRP) lists all Swiss-approved trials. The Swiss TPF (Trial Participation Facilitation) project at SCTO is developing patient-facing trial matching. University hospital websites list open trials. No national EHR-based automated patient-trial matching exists. Switzerland\'s small population (8.8M) partially compensates — researchers can contact clinician networks directly.',
        links: [{ label: 'kofam Swiss Trial Registry', url: 'https://www.kofam.ch/', comment: 'kofam — Swiss national trial registry; part of WHO ICTRP; patient-facing search available in German/French/Italian' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 2,
        text: 'Swissmedic does not recognise aging as a therapeutic indication and follows EMA\'s current position. Frailty and sarcopenia are accepted indication categories. Switzerland\'s private pharma companies (Novartis, Roche) are the most active global proponents of aging indication recognition in regulatory policy forums — but Swissmedic as a regulator has not moved ahead of EMA on this.',
        links: [{ label: 'Swissmedic Indication Framework', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — follows EMA on indication recognition; frailty and sarcopenia accepted; aging not yet an indication' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'Swissmedic accepts EMA-qualified endpoints for aging indications: frailty indices, SPPB, grip strength, multi-domain composites. The Swissmedic-EMA work-sharing arrangement means Swiss regulatory endpoint science tracks EMA closely. No independent Swiss endpoint qualification process. EPFL and ETH have published extensively on epigenetic clock validation that could inform future Swissmedic endpoint qualification.',
        links: [{ label: 'Swissmedic EMA Collaboration', url: 'https://www.swissmedic.ch/swissmedic/en/home/international/bilateral.html', comment: 'Swissmedic — EMA work-sharing agreement; endpoint acceptance tracks EMA; no independent qualification process' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.NATIONAL_HEALTH_DATA_PLATFORM]: {
        score: 3,
        text: 'SPHN (Swiss Personalized Health Network) is building a national health data platform linking university hospital EHR data via the BioMedIT secure infrastructure. The national EPD (Electronic Patient Dossier) is being rolled out under the EPD Act. Neither is yet at the scale or accessibility of Denmark\'s Sundhedsdatastyrelsen or Sweden\'s registers. Cantonal fragmentation and linguistic diversity (DE/FR/IT) are persistent structural challenges.',
        links: [{ label: 'SPHN Swiss Personalized Health Network', url: 'https://sphn.ch/', comment: 'SPHN — national health data platform in development; BioMedIT linking university hospitals; EPD rollout ongoing' }],
      },
      [OpenDataClaim.RESEARCH_ACCESS_SPEED]: {
        score: 3,
        text: 'SPHN data access via BioMedIT takes 2–4 months with IRB and data governance review. Individual hospital data access (USZ, CHUV, HUG) is faster — typically 4–8 weeks. Compared to Denmark (days) or Sweden (weeks), Switzerland\'s research data access is moderate. BASEC\'s centralised ethics review has improved speed substantially since 2019.',
        links: [{ label: 'SPHN Data Access', url: 'https://sphn.ch/services/biomedit/', comment: 'SPHN BioMedIT — 2–4 month access process; improving; BASEC centralised ethics helps reduce review burden' }],
      },
      [OpenDataClaim.DATA_LINKAGE_CAPABILITY]: {
        score: 3,
        text: 'BioMedIT enables linkage of EHR, biobank, and registry data within the secure SPHN infrastructure. Swiss National Cohort links administrative data to death and cancer registries. Individual hospital linkage is good; cross-cantonal real-time linkage is developing. Switzerland\'s data linkage capability is above average for continental Europe but below Nordic standards.',
        links: [{ label: 'Swiss National Cohort Data Linkage', url: 'https://www.swissnationalcohort.ch/', comment: 'SNC — administrative data + death registry + cancer registry linkage; research-accessible with ethics approval' }],
      },
    },
    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.HL7_FHIR_ADOPTION]: {
        score: 4,
        text: 'Switzerland has mandated FHIR for the national EPD (Electronic Patient Dossier) system — all EPD-certified systems must be FHIR-compliant. SPHN has adopted FHIR for its data sharing framework. HL7 Switzerland actively develops Swiss FHIR implementation guides. Swiss adoption is ahead of most EU member states and is driven by the EPD mandate.',
        links: [{ label: 'HL7 Switzerland', url: 'https://www.hl7.ch/', comment: 'HL7 Switzerland — national FHIR implementation guides; EPD mandates FHIR compliance; strong adoption trajectory' }],
      },
      [InteroperabilityClaim.CROSS_BORDER_DATA]: {
        score: 4,
        text: 'Switzerland has an adequacy decision from the EU under GDPR — equivalent data protection is recognised. Switzerland participates in EHDS (European Health Data Space) preparatory discussions as an associated country. Cross-border research data sharing with EU partners is legally straightforward. Switzerland-EU data flows for research are among the most legally clear in Europe for a non-EU country.',
        links: [{ label: 'Switzerland EU Data Adequacy', url: 'https://www.edoeb.admin.ch/edoeb/en/home/data-protection/handel-und-wirtschaft/switzerland-eu.html', comment: 'Switzerland — EU adequacy decision; streamlined cross-border research data flows with EU member states' }],
      },
    },
    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.COMMON_DATA_MODELS]: {
        score: 4,
        text: 'SPHN has adopted OMOP-CDM as a primary common data model across Swiss university hospitals. All four university hospital systems (USZ, CHUV, HUG, Inselspital) are mapped to OMOP through BioMedIT. Switzerland is one of the more complete OMOP adopters in continental Europe. OHDSI Switzerland chapter is active.',
        links: [{ label: 'SPHN OMOP-CDM Implementation', url: 'https://sphn.ch/services/', comment: 'SPHN — OMOP-CDM mandated for BioMedIT network; all 4 university hospitals mapped; OHDSI participation' }],
      },
      [ResearchClinicalClaim.FEDERATED_ANALYSIS]: {
        score: 4,
        text: 'BioMedIT is explicitly designed for federated analysis — algorithms execute at data sources without raw data export. DataSHIELD and OPAL implementations at Swiss university hospitals support privacy-preserving federated computation. Switzerland is among Europe\'s most advanced countries for federated health analytics infrastructure, driven by SPHN\'s national mandate.',
        links: [{ label: 'BioMedIT Federated Analytics', url: 'https://sphn.ch/services/biomedit/', comment: 'BioMedIT — federated compute infrastructure; DataSHIELD/OPAL at all Swiss university hospitals; no raw data export' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.ICH_PARTICIPATION]: {
        score: 5,
        text: 'Swissmedic is an ICH member (joined as full member 2018 after years as observer). Switzerland hosts the ICH Secretariat in Geneva — the highest possible participation level. Swissmedic co-authors ICH guidelines and implements them immediately. Switzerland\'s ICH engagement is exceptional for a non-EU, non-US, non-Japan country.',
        links: [{ label: 'ICH Secretariat Geneva', url: 'https://www.ich.org/page/organisation', comment: 'ICH — secretariat hosted in Geneva; Swissmedic full member; co-author of international regulatory guidelines' }],
      },
      [RegulatoryHarmonizationClaim.MUTUAL_RECOGNITION]: {
        score: 5,
        text: 'Switzerland has GMP mutual recognition agreements with EU, USA (FDA), Canada, Japan (PMDA), Australia (TGA), and others — one of the most extensive mutual recognition networks of any regulator. Swissmedic-approved products are accepted by EMA under simplified assessment. The EU-Switzerland MRA (Mutual Recognition Agreement) on medicinal products has been fully operational since 2002.',
        links: [{ label: 'Swissmedic MRA Agreements', url: 'https://www.swissmedic.ch/swissmedic/en/home/international/bilateral/mra.html', comment: 'Swissmedic — MRA with EU, USA, Canada, Japan, Australia; Swissmedic approval accepted in simplified EU review' }],
      },
    },
    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BIOBANK_ACCESS]: {
        score: 4,
        text: 'Swiss Biobanking Platform makes samples accessible to international researchers via sample request process (typically 2–4 months). EPFL and ETH have active international sample sharing. The EU-Switzerland data adequacy decision enables seamless biobank data sharing with EU partners. Switzerland\'s biobanks are well-governed, well-characterised, and actively accessible — better than most continental European systems.',
        links: [{ label: 'Swiss Biobanking Platform Access', url: 'https://www.swissbiobanking.ch/', comment: 'SBP — international researcher access; 2–4 month process; EU adequacy enables seamless data sharing' }],
      },
      [SharedPhysicalInfraClaim.COMPUTING_INFRASTRUCTURE]: {
        score: 4,
        text: 'CSCS (Swiss National Supercomputing Centre, Lugano) operates Piz Daint and Alps — world-class supercomputers available to academic researchers through competitive access. The BioMedIT secure cloud infrastructure is fully operational. SIB (Swiss Institute of Bioinformatics) provides shared computational and bioinformatics tools for aging research. Switzerland\'s computing infrastructure per capita is among the best globally.',
        links: [{ label: 'CSCS Swiss Supercomputing', url: 'https://www.cscs.ch/', comment: 'CSCS — Swiss national supercomputing; Piz Daint and Alps systems; academic access via proposals' }],
      },
    },
    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_MEMBERSHIP]: {
        score: 5,
        text: 'Switzerland participates in virtually every major international aging research consortium: TAME trial network, Human Cell Atlas, OHDSI, ELIXIR (bioinformatics infrastructure), BBMRI-ERIC (biobanking), IMI (Innovative Medicines Initiative) aging projects, and numerous bilateral agreements. Swiss researchers (EPFL Auwerx, ETH Grosshans) lead international aging consortia. ETH Zurich\'s network of international collaborations is among the densest of any research institution globally.',
        links: [{ label: 'Switzerland ELIXIR Node', url: 'https://www.sib.swiss/elixir', comment: 'SIB — Switzerland\'s ELIXIR node; bioinformatics infrastructure for European aging research; major aging data contributor' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_AGREEMENTS]: {
        score: 5,
        text: 'Switzerland\'s EU adequacy decision, ICH membership, and extensive bilateral MRAs create the most internationally connected regulatory and research data sharing environment of any non-G7 country. Swiss researchers routinely participate in EU FP/Horizon consortia as associated country members. Data sharing with almost any research partner worldwide is legally streamlined.',
        links: [{ label: 'Switzerland Horizon Europe Association', url: 'https://www.sbfi.admin.ch/sbfi/en/home/research-and-innovation/international-cooperation-r-and-i/eu-framework-programmes-for-research.html', comment: 'SBFI — Switzerland Horizon Europe association status; full research participation rights equivalent to EU member states' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 4,
        text: 'Switzerland has consistently high institutional trust — OECD Better Life Index shows ~65–70% trust in national government, and Edelman shows ~70% in science/medicine. Direct democracy (initiative and referendum) reinforces citizen-institution dialogue and tends to produce broadly trusted policy outcomes. Trust in healthcare and research institutions is high; the pharmaceutical industry (home of Novartis, Roche) enjoys relatively positive public perception.',
        links: [{ label: 'OECD Government at a Glance – Switzerland', url: 'https://www.oecd.org/gov/switzerland-government-at-a-glance.htm', comment: 'OECD — Switzerland institutional trust indicators; government and science trust above OECD average' }],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 3,
        text: 'Switzerland has a rapidly aging population (20%+ over 65 by 2030) and "Healthy Aging Switzerland" (Gesundes Altern) is a recognised policy topic. Public discourse on longevity science is beginning to emerge, driven partly by pharma industry communications. However, cultural emphasis on quality of life and dignified aging (rather than maximum lifespan extension) creates some ambivalence about longevity science beyond healthy functioning. The Swiss assisted dying law (Exit International presence) reflects cultural acceptance of death as a quality-controlled outcome — different from a longevity-maximising orientation.',
        links: [{ label: 'Swiss Strategy Healthy Aging', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/gesundes-altern.html', comment: 'FOPH — Healthy Aging strategy; quality of life focus; longevity science awareness growing but not dominant narrative' }],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 3,
        text: 'No explicit national longevity science programme exists in Switzerland. The FOPH Healthy Aging strategy focuses on healthy aging services and care quality, not longevity research mandates. SNF does not have a dedicated longevity research call. Political will is present for eldercare quality and healthy aging services; it has not yet translated into longevity science as a national R&D priority comparable to Singapore, Japan, or even the UK.',
        links: [{ label: 'FOPH Healthy Aging Switzerland', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/gesundes-altern.html', comment: 'FOPH — healthy aging strategy focuses on care quality; no dedicated longevity science funding mandate' }],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 4,
        text: 'Swissmedic enforces strict drug/cosmetic borderlines — products making systemic anti-aging claims are classified as medicinal products requiring approval. The Swiss Advertising Code (SWK) prohibits unsubstantiated health claims. SGfE (Swiss Society of Gerontology) and FMH have ethical guidelines against unproven anti-aging treatments. The anti-aging supplement market is less aggressive than in the UK or US; Swissmedic\'s pre-market control of health claims is among Europe\'s most rigorous.',
        links: [
          { label: 'Swissmedic Borderline Products', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/borderline.html', comment: 'Swissmedic — systemic anti-aging claims trigger medicinal product classification; strict borderline enforcement' },
          { label: 'Swiss Advertising Code Health Claims', url: 'https://www.lauterkeit.ch/en/', comment: 'SWK Swiss Advertising Code — prohibits unsubstantiated health and anti-aging claims; actively enforced' },
        ],
      },
    },
  },
}

export default switzerland
