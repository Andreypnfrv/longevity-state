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

const china: CountryData = {
  country: Country.CHINA,

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 2,
        text: 'China offers the R Visa ("high-end foreign expert" category) and the Foreign Expert Certificate for senior researchers. In practice, the system is bureaucratic, institution-dependent, and poorly documented in English. Processing requires employer sponsorship through State Administration of Foreign Experts Affairs (SAFEA). No independent researcher visa; early-career scientists are poorly served.',
        links: [{ label: 'SAFEA Foreign Experts', url: 'https://www.safea.gov.cn/', comment: 'State Administration of Foreign Experts Affairs — manages R Visa and expert permits' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 2,
        text: 'Processing times for Foreign Expert Certificates vary from 1–6 months depending on institution, with limited transparency. Fast-track exists for "top talents" under the Thousand Talents Program, but general researcher pathways lack predictable timelines. Language barriers in the administrative process add friction.',
        links: [],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 3,
        text: 'Foreign academic credentials are assessed by institutional HR and the China Academic Degree and Graduate Education Development Center (CDGDC). PhD credentials from major universities are generally accepted for faculty positions. Process is institution-dependent rather than a standardised national assessment system.',
        links: [{ label: 'CDGDC', url: 'https://www.cdgdc.edu.cn/', comment: 'China Academic Degrees assessment — evaluates foreign doctoral credentials' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 2,
        text: 'Early-career foreign researchers face high barriers: R visa requires institutional sponsorship; postdoc salaries are below living cost in major cities without substantial housing subsidies. Restrictions on independent grant applications for foreign nationals further limit the pathway for junior researchers.',
        links: [],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 2,
        text: 'Permanent residency ("Chinese Green Card") is notoriously difficult to obtain — among the most restrictive globally, with <10,000 granted cumulatively by 2020. Political climate, data restrictions, academic freedom concerns, and US-China tensions have increased emigration of internationally trained Chinese researchers and deterred foreign talent from long-term settlement.',
        links: [{ label: 'China PR Difficulties', url: 'https://www.economist.com/china/2020/09/05/china-wants-to-attract-more-foreigners-but-few-want-to-stay', comment: 'China green card rarity — <10k granted total vs. millions living in China' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 1,
        text: 'Foreign medical licences are not recognised in China. Foreign doctors cannot practice medicine independently. They may work in international hospitals or clinics serving foreign nationals under restricted permits, but cannot treat Chinese nationals in the general health system. No mutual recognition agreements with any country.',
        links: [],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 1,
        text: 'No clear or standardised pathway for foreign clinicians to obtain a Chinese medical licence. The licensing exam (执业医师考试) is in Chinese and requires Chinese medical education or recognised equivalent. Foreign practitioners can apply for short-term work permits in special contexts (e.g., international hospitals, Hainan FTP) but this is not a general pathway.',
        links: [],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 2,
        text: 'For the limited contexts where foreign clinicians can work (international clinics, free trade zones), permits take 2–6 months. The restricted scope makes this a niche pathway rather than a meaningful immigration route for research-active clinicians.',
        links: [],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 1,
        text: 'Foreign clinicians without a Chinese licence are limited to treating foreign nationals in designated international medical facilities. They cannot practice in public hospitals, research hospitals, or clinical trial sites accessible to the general population.',
        links: [],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 3,
        text: 'For Chinese-licensed clinicians at major academic medical centres (PUMCH, SYSMH, Ruijin Hospital), combined research-clinical roles are well-established. Top-tier hospitals are affiliated with leading medical schools (Peking, Fudan, SJTU) and actively support academic clinician careers. Foreign-trained Chinese returnees benefit from this system; foreign nationals largely cannot access it.',
        links: [{ label: 'PUMCH Research', url: 'https://www.pumch.cn/', comment: 'Peking Union Medical College Hospital — academic research-clinical integration' }],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'China\'s top universities (Peking University, Tsinghua, Fudan, Zhejiang) have expanding aging biology curricula within life sciences programmes. Dedicated aging research undergraduate courses are rare, but biology/biochemistry education is strong. NSFC funds undergraduate research opportunities. The scale of China\'s biology graduate pipeline is extraordinary — over 100k life sciences graduates per year.',
        links: [{ label: 'PKU School of Life Sciences', url: 'https://www.bio.pku.edu.cn/en/', comment: 'Leading Chinese life sciences programme — expanding aging research focus' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 4,
        text: 'China has the world\'s largest PhD production in life sciences. Major programs at PKU, Tsinghua, CAS (Chinese Academy of Sciences), SJTU, and Fudan produce thousands of aging-adjacent PhDs annually. CAS Institute of Biophysics and Institute of Genetics have strong aging research groups. Scale is unmatched globally; depth in aging-specific training is growing rapidly.',
        links: [{ label: 'CAS Institute of Biophysics', url: 'http://www.ibp.cas.cn/en/', comment: 'Chinese Academy of Sciences — active aging biology research programs' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 3,
        text: 'Postdoc salaries at Chinese institutions have improved substantially (¥200k–350k/year at top CAS institutes, with housing subsidies). Government talent programs (Thousand Talents, Young Thousand Talents) provide competitive packages for returnee postdocs. Domestic postdoc market is large. Career progression to faculty is competitive, driven by publication metrics.',
        links: [{ label: 'CAS Postdoc Program', url: 'https://www.cas.cn/jr/zcfg/202304/t20230414_4888055.shtml', comment: 'CAS postdoc positions — competitive salaries with housing support' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 4,
        text: 'All Chinese PhD students at public universities receive full stipends (¥6,000–15,000/month at top institutions). No tuition for domestic students. State-funded training pipeline is massive. "Double First-Class" university initiative provides additional funding for top programs. Returnee scholars receive substantial top-up funding through national talent schemes.',
        links: [{ label: 'Double First-Class Initiative', url: 'https://www.moe.gov.cn/jyb_xxgk/moe_1777/moe_1778/202109/t20210923_558985.html', comment: 'National initiative for building world-class universities and disciplines' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 3,
        text: 'China\'s booming biotech sector (BioIsland Guangzhou, Zhangjiang Shanghai, Beijing Life Science Park) provides growing industry-academia links. BeiGene, Zymeworks China, Zai Lab, and BioAtla partner with academic centres. Government-mandated technology transfer offices at universities. Still maturing — dual career tracks less formalised than US.',
        links: [{ label: 'Zhangjiang Biotech', url: 'https://www.zhangjiang.gov.cn/', comment: 'Shanghai Zhangjiang Hi-Tech Park — major pharma/biotech industry-academia hub' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 3,
        text: 'Geriatrics (老年医学) is a recognised specialty in China with residency programs at major academic hospitals. China\'s massive aging population (21% over 60 by 2023) has driven rapid capacity expansion. However, geriatrics remains less prestigious than internal medicine or surgery — a workforce shortage persists relative to the demographic need.',
        links: [{ label: 'National Geriatrics Center China', url: 'http://www.nhc.gov.cn/', comment: 'National Health Commission — geriatrics specialty accreditation and training' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 3,
        text: 'Chinese medical schools increasingly incorporate aging biology into core curricula in response to demographic pressure. The National Health Commission mandates geriatrics content in medical education guidelines. Depth varies substantially across the ~170 medical schools — top schools (PKU, Fudan, SYSMH) have stronger programs.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 3,
        text: 'Geriatrics residency standardisation is improving under the National Standardised Residency Training system (住院医师规范化培训) launched in 2013. All graduates must complete 3-year standardised residency. Quality varies significantly between tier-1 academic hospitals and lower-tier facilities. Aging-specific competencies are explicitly included in geriatrics training standards.',
        links: [{ label: 'China Residency Training', url: 'http://www.nhc.gov.cn/', comment: 'National standardised residency programme — geriatrics track included' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 2,
        text: 'CME requirements exist (25 credits/year) but longevity-science-specific content (senolytics, biological aging clocks, healthspan interventions) is not systematically available. Most CME focuses on disease management rather than aging mechanisms. Chinese Society of Geriatrics conferences address some aging biology topics.',
        links: [],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 4,
        text: 'China has explicit national workforce planning for aging healthcare — the "14th Five-Year Plan for Aging Services" mandates rapid expansion of geriatric physician supply. Target of training 100k+ geriatrics specialists by 2025. National Geriatrics Center network established. Direct response to demographic urgency makes this one of China\'s most actively managed healthcare workforce priorities.',
        links: [{ label: '14th Five-Year Plan for Aging Services', url: 'http://www.nhc.gov.cn/lljks/s3577/202203/b11d5a7ea0ea4add8b3cbb0e22cd4b85.shtml', comment: 'National plan for expanding geriatrics workforce to 2025' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 3,
        text: 'MD-PhD programmes exist at Peking University, Fudan, and SJTU medical schools — typically 8-year integrated programmes. Numbers are small (50–100 graduates per year nationally). Post-Mao era rebuilding of clinical-academic culture means these programmes are still maturing compared to US MD-PhD infrastructure.',
        links: [{ label: 'PKU MD-PhD Program', url: 'https://www.pku.edu.cn/', comment: 'Peking University 8-year integrated medical-research programme' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 3,
        text: 'NSFC has clinician-scientist grant tracks (National Clinical Research Center programs). Top academic hospitals receive state funding for research programs. National Key Clinical Specialty programs fund research at designated centres. Funding is available but competitive; many clinician-scientists struggle with protected time.',
        links: [{ label: 'NSFC Clinical Research', url: 'https://www.nsfc.gov.cn/english/site_1/index.html', comment: 'National Natural Science Foundation — funds clinician-scientist research grants' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 3,
        text: 'National Clinical Research Centers for Geriatrics (at PUMCH, West China Hospital, Huashan Hospital) explicitly support clinician-scientist careers in aging. Demographic pressure is driving institutional investment. Growing number of academic physician-researchers publish in international longevity journals.',
        links: [{ label: 'National Clinical Research Center for Geriatrics', url: 'http://www.nhc.gov.cn/', comment: 'NHC-designated centres — combine clinical care with aging research mandates' }],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 2,
        text: 'Protected research time is not systematically guaranteed for clinician-scientists. Major academic hospitals in China operate under extreme patient volume pressure — a typical attending sees 50–100 outpatients per session. Senior researchers may negotiate protected time; junior clinician-scientists rarely achieve meaningful research blocks.',
        links: [],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 3,
        text: 'Academic clinician-scientist is a viable and increasingly prestigious career track at China\'s top hospitals. Publication records in Nature Medicine, Lancet, etc. are now valued for promotion. However, the academic-clinical dual burden is high, and many talented clinical researchers emigrate for better research environments.',
        links: [],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 4,
        text: 'China is the world\'s #2 R&D spender (¥3.09 trillion / ~$430B in 2022). NSFC aging-specific portfolio has grown substantially under the "Healthy Aging" national initiative. The 14th Five-Year Plan allocates multi-billion RMB to aging research. Absolute scale is large — though still below NIH in aging-specific basic research funding.',
        links: [{ label: 'China R&D Statistics 2022', url: 'http://www.stats.gov.cn/english/', comment: 'National Bureau of Statistics — China R&D spending at ¥3.09 trillion in 2022' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 3,
        text: 'NSFC funds across basic aging biology, translational aging research, and clinical aging medicine. State priority projects (National Key R&D Programs) cover longevity markers, centenarian studies, and aging intervention trials. Portfolio is broader than pure disease-specific funding but skewed toward applied/translational vs. basic science relative to NIH.',
        links: [{ label: 'NSFC Aging Research', url: 'https://www.nsfc.gov.cn/english/site_1/index.html', comment: 'NSFC — major funder of aging biology across all career stages' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 4,
        text: 'Five-Year Plan funding cycles provide multi-year stability for national priority areas including aging. Key Research Institutes (CAS, National Geriatrics Centers) receive rolling base funding. However, geopolitical risks and government priority shifts can redirect funding rapidly. The demographic urgency of aging provides institutional protection for this funding stream.',
        links: [],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 4,
        text: 'Major Chinese tech companies (Tencent, Alibaba/Alibaba Health, Bytedance/Xiaohe Health) and pharma (Fosun Pharma, BeiGene, Zai Lab) invest heavily in health and longevity-adjacent research. Tencent invested in Insilico Medicine; Alibaba Health runs preventive medicine platforms. Private longevity-specific investment is growing rapidly though still nascent vs. public funding.',
        links: [{ label: 'Insilico Medicine', url: 'https://insilico.com/', comment: 'AI longevity company with major Chinese backing — drug discovery for aging diseases' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 2,
        text: 'State funding strongly favours established research directions with clear translational potential. High-risk, paradigm-challenging basic aging research is less well funded than applied aging medicine. Peer review culture rewards incremental advances. Bottom-up researcher-driven high-risk projects possible via NSFC but face institutional pressure toward "safe" directions.',
        links: [],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 4,
        text: 'China has been notably permissive for somatic gene therapy clinical trials. NMPA approvals have been faster than FDA for some cell/gene therapies. China approved Fosun Kite\'s CD19 CAR-T (axicabtagene ciloleucel) and multiple domestic CAR-T products. Somatic editing trials proceed with fewer regulatory barriers than in the US or EU, and hospital-based gene therapies have broad latitude.',
        links: [{ label: 'NMPA Gene Therapy Regulation', url: 'https://www.nmpa.gov.cn/', comment: 'National Medical Products Administration — gene therapy and cell therapy approvals' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 4,
        text: 'NMPA has demonstrated fast approval timelines for priority therapies and has been actively reforming to reduce clinical trial backlogs. Priority review for innovative drugs can achieve 6–12 month review times. Several gene therapies have been approved in China before FDA approval. However, process transparency and predictability remain lower than FDA.',
        links: [{ label: 'NMPA Priority Review', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA priority review pathway — innovative drugs targeting unmet needs' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 3,
        text: 'NMPA has undergone substantial reform since 2015, shifting toward more evidence-based review. Has adopted conditional approval mechanisms and accelerated pathways. However, regulatory consistency and transparency remain concerns — decisions can reflect policy considerations alongside scientific evidence. Has joined ICH (2017) and is implementing international guidelines.',
        links: [{ label: 'China NMPA ICH Membership', url: 'https://www.ich.org/page/membership', comment: 'NMPA became ICH member in 2017 — implementing international regulatory standards' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 1,
        text: 'Clinical germline editing is legally prohibited following the He Jiankui scandal (2018). New regulations (2019, updated 2023) explicitly ban clinical application of heritable germline editing and impose criminal penalties. Basic research on human embryos is subject to ethics oversight. The framework is clearer than before 2018 but remains a hard prohibition on clinical germline editing.',
        links: [{ label: 'China Gene Editing Regulations 2019', url: 'https://www.nmpa.gov.cn/', comment: 'Post-He Jiankui regulations — criminal penalties for clinical germline editing' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 2,
        text: '"Healthy Aging" is an explicit national priority, and NMPA is developing indications for age-related conditions (frailty, sarcopenia). China has approved aging-adjacent biologics (e.g., anti-VEGF for AMD) faster than some regulators. However, no formal longevity indication or biological age endpoint pathway exists. The direction is positive but not yet implemented.',
        links: [{ label: 'Healthy China 2030', url: 'https://www.gov.cn/xinwen/2016-10/25/content_5124174.htm', comment: 'National health strategy — aging explicitly framed as national priority' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 3,
        text: 'China\'s Ministry of Science and Technology (MOST) runs National Key R&D Programs with directed challenges and milestone-based management — closer to an ARPA model than a pure grant agency. The National Natural Science Foundation (NSFC) is more traditional. Beijing and Shanghai operate local innovation agencies with programme-manager-style directed calls for biotech.',
        links: [{ label: 'MOST National Key R&D', url: 'https://www.most.gov.cn/eng/', comment: 'Directed R&D programs with milestones — more ARPA-adjacent than NSFC' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 3,
        text: '"Healthy Aging" is embedded in the 14th Five-Year Plan and Healthy China 2030 as an explicit national goal. MOST and NSFC have dedicated aging research programme tracks. National Clinical Research Centers for Geriatrics receive directed mission funding. More explicit than most countries — but still framed as aging medicine rather than longevity science.',
        links: [{ label: '14th Five-Year Plan Health', url: 'http://www.nhc.gov.cn/', comment: 'National health plan — healthy aging as explicit national priority with funded targets' }],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 3,
        text: 'NSFC grants and MOST national programs are fully non-dilutive. State-guided funds (政府引导基金) co-invest with VC but involve government equity stakes. No clean separation between non-dilutive grant and state equity investment — state often takes equity in companies it funds through industrial policy programs. Strong non-dilutive base for academic research; mixed for commercial biotech.',
        links: [{ label: 'NSFC Grants', url: 'https://www.nsfc.gov.cn/english/site_1/index.html', comment: 'Fully non-dilutive for academic researchers — equity models apply to commercial R&D programs' }],
      },
      [BreakthroughAgencyClaim.IP_FRAMEWORK]: {
        score: 2,
        text: 'IP framework is improving but remains a significant concern for longevity research translation. China\'s IP protection has strengthened (IP courts, Patent Law Amendment 2021) but enforcement gaps and state-owned enterprise IP complications persist. Foreign companies worry about compulsory licensing and technology transfer requirements. University IP ownership rules are clearer than before but inconsistent.',
        links: [{ label: 'China Patent Law 2021', url: 'https://www.cnipa.gov.cn/', comment: 'CNIPA — 2021 Patent Law amendment strengthened IP protection' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 2,
        text: 'Challenge-based funding calls in aging research exist (MOST centenarian studies, precision medicine programs) but lack the quantified biological age targets or healthspan extension goals of the NIA ITP model. Challenges are framed around disease prevention and healthcare cost reduction rather than explicit longevity endpoints.',
        links: [],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 3,
        text: 'NMPA has conditional approval (附条件批准) and breakthrough therapy designation (突破性治疗药物) mechanisms. Several cell therapies and oncology drugs have been approved conditionally. Post-2017 reform has substantially accelerated conditional pathways. Less mature than FDA Accelerated Approval — fewer longevity-adjacent drugs have used these pathways.',
        links: [{ label: 'NMPA Conditional Approval', url: 'https://www.nmpa.gov.cn/', comment: 'Post-2017 NMPA reform — conditional approval and breakthrough therapy designation' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 3,
        text: 'NMPA priority review and rolling submission mechanisms exist for innovative drugs in unmet need areas. Pre-IND meetings and early dialogue with NMPA are increasingly possible. Process is less transparent and less predictable than FDA rolling review — engagement quality depends on the review division.',
        links: [],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'NMPA accepts validated surrogate endpoints for conditional approval in oncology and rare disease. No aging-specific surrogates defined. Follows a trajectory similar to FDA in disease areas but lags in novel endpoint acceptance. Large EHR databases could support endpoint validation if access frameworks were clearer.',
        links: [],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 3,
        text: 'NMPA conditional approvals require post-market confirmatory data. Pharmacovigilance requirements have been strengthened post-2017. Real-world pharmacovigilance enforcement is inconsistent compared to FDA — but formal framework now exists and is being built out.',
        links: [{ label: 'NMPA Pharmacovigilance', url: 'https://www.nmpa.gov.cn/', comment: 'Post-market safety system — improving but still maturing' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 3,
        text: 'NMPA compassionate use (拓展性临床试验) framework exists since 2017 for patients with life-threatening conditions. Several approved drugs have been accessed via this mechanism. Company participation has been fairly cooperative for domestic drugs; less standardised than FDA Expanded Access with respect to foreign drugs.',
        links: [{ label: 'NMPA Compassionate Use', url: 'https://www.nmpa.gov.cn/', comment: '2017 expanded access framework for life-threatening conditions' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 3,
        text: 'NMPA issued guidance on adaptive trial designs following ICH E9(R1) adoption. Biomarker-enrichment and seamless phase 2/3 designs are accepted in principle. Industry awareness and NMPA engagement on adaptive designs is growing rapidly, driven by multinational sponsors seeking approval in China alongside FDA/EMA.',
        links: [{ label: 'NMPA ICH E9(R1)', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA adopted ICH E9(R1) statistical principles including adaptive designs' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'China has among the world\'s largest hospital EHR datasets — major academic medical centres have millions of records. RWE frameworks are emerging at NMPA. CNCBD (China National Clinical Database) and hospital-linked biobanks provide substantial data. Cross-institutional data sharing is limited by data localisation laws, but within large hospital networks synthetic controls are increasingly feasible.',
        links: [{ label: 'NMPA RWE Guidelines', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA real-world evidence technical guidance — growing framework for RWE in approvals' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 2,
        text: 'DCT framework is nascent in China. WeChat and Alipay health platforms provide digital infrastructure for remote consent and ePRO. Regulatory guidance on DCT elements is limited. COVID-19 accelerated some digital trial elements but national DCT framework has not kept pace with US/EU developments.',
        links: [{ label: 'WeChat Health Platform', url: 'https://www.tencent.com/en-us/index.html', comment: 'WeChat ecosystem — digital health infrastructure relevant to decentralised trial elements' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 2,
        text: 'Platform and master protocol approaches exist in oncology (e.g., some China-specific basket trials) but are not well-developed for aging or longevity indications. No major multi-arm platform trial for aging in the public domain. Regulatory framework does not explicitly facilitate multi-arm platform trial protocol amendments.',
        links: [],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 3,
        text: 'China\'s scale of hospital EHR data is enormous — large academic centres like West China Hospital, PUMCH, and Zhongshan Hospital each have millions of records. NMPA RWE guidance (2020) enables RWE for post-market studies. Cross-institution data integration is limited by data siloes and localisation rules, but single-institution RWE at scale is a genuine strength.',
        links: [{ label: 'NMPA RWE Framework 2020', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA 2020 real-world evidence guidance — approved use in regulatory submissions' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 2,
        text: 'Hainan Free Trade Port has a health innovation sandbox — Hainan Boao Lecheng International Medical Tourism Pilot Zone allows faster access to foreign unapproved drugs, medical devices, and innovative therapies for patients in the zone. This is a functional sandbox model, not just a proposed framework, though geographic scope is limited.',
        links: [{ label: 'Hainan Lecheng Medical Zone', url: 'https://www.leao.gov.cn/', comment: 'Health innovation pilot zone — approved foreign drugs accessible before NMPA approval' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 2,
        text: 'Hainan zone covers foreign drugs, biologics, and medical devices approved by recognised foreign regulators (FDA/EMA/MHRA). Gene therapies and cell therapies can be provided to patients in the zone. Coverage is real but geographically restricted to the Hainan pilot area and requires patients to travel there.',
        links: [{ label: 'Lecheng Innovative Drugs List', url: 'https://www.leao.gov.cn/', comment: 'Annual list of approved foreign therapies accessible in the Hainan zone' }],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 2,
        text: 'Hainan zone is open to any patient who travels to the zone — not limited to terminally ill. Foreign-approved drugs are accessible to patients with serious conditions who cannot access them domestically. In practice, mostly affluent patients who can afford travel and accommodation.',
        links: [],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 1,
        text: 'No formal legal safe harbour for practitioners in the Hainan zone providing therapies not yet NMPA-approved. Liability framework is unclear. Outside Hainan, there is no sandbox safe harbour of any kind for experimental therapies.',
        links: [],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 1,
        text: 'Hainan zone sandbox is oriented toward accessing foreign-approved therapies for serious diseases, not toward testing novel longevity interventions. No mechanism exists for longevity-specific agents or preventive aging interventions outside standard NMPA clinical trial requirements.',
        links: [],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'NMPA accepts disease-specific surrogate endpoints across approved categories (oncology, rare disease). Aging-specific endpoints (biological age clocks, frailty composites, multi-organ functional composites) are not formally accepted as primary endpoints. Some aging-adjacent endpoints (sarcopenia, frailty index) are accepted in geriatric indication trials.',
        links: [],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 1,
        text: 'No formal biomarker qualification programme equivalent to FDA BQP or EMA qualification procedure. NMPA relies on ad-hoc scientific advice for novel endpoints. No aging biomarker has been formally submitted for qualification in China. NMPA is building methodological capacity post-ICH accession but lags FDA/EMA by 5–10 years on biomarker qualification infrastructure.',
        links: [],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'NMPA companion diagnostic co-development guidance exists for oncology indications. No dedicated framework for co-developing aging biomarker endpoints alongside longevity therapies. China\'s large genomics infrastructure (BGI, WuXi) could support co-development, but regulatory pathway for aging co-development is absent.',
        links: [],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 3,
        text: 'China Kadoorie Biobank (CKB, 500k participants), National Biobank of China, and major hospital biobanks (West China, PUMCH) provide substantial reference populations. BGI\'s genomic infrastructure enables large-scale omics profiling. Population scale is world-class, but data access for aging biomarker validation research — especially for international researchers — is restricted.',
        links: [{ label: 'China Kadoorie Biobank', url: 'https://www.ckbiobank.org/', comment: '500k participants with >10 years follow-up — major aging research resource' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 2,
        text: 'No national consensus on aging biomarker assay standards for trial use. BGI has internal sequencing standards, and NHSA is working toward EHR standardisation, but aging-specific endpoint standardisation (epigenetic clocks, proteomics reference panels, frailty index standardisation) is fragmented across institutions.',
        links: [],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'China\'s National Basic Public Health Services package includes proactive cardiovascular risk assessment for adults 35+ at community health centres — blood pressure, blood glucose, and lipids offered annually as part of the universal primary care package. The programme is implemented nationwide through community health service centres with invitation-based outreach. Coverage is substantial in urban areas; rural coverage improving. Scored PROACTIVE (4): systematic national invitation and delivery, though rural-urban quality gaps persist.',
        links: [{ label: 'China NBPHS Program', url: 'http://www.nhc.gov.cn/', comment: 'National Basic Public Health Services — free CVD screening at community health centres' }],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'National Breast Cancer Screening Programme (宫颈癌和乳腺癌检查项目) offers free mammography to rural and urban women aged 35–64 through the National Cancer Screening Program for Women. Coverage is not yet universal — prioritises rural and low-income women. Urban insured women can access screening at subsidised cost. Overall uptake below 50% nationally. Scored FUNDED_PASSIVE (3): funded and accessible but not delivered via universal systematic invitation.',
        links: [{ label: 'China Two-Cancer Screening Program', url: 'http://www.nhc.gov.cn/', comment: 'National two-cancer (breast + cervical) screening for women — free for target groups' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'National Colorectal Cancer Early Detection Program offers free faecal occult blood testing (FOBT) + colonoscopy for high-risk individuals at designated cancer screening centres in participating cities. Programme expanded to 280+ cities. Not yet universal — relies on physician referral and patient self-presentation at screening centres. Uptake varies widely by region. Scored FUNDED_PASSIVE (3).',
        links: [{ label: 'China CRC Early Detection Program', url: 'http://www.nhc.gov.cn/', comment: 'National CRC screening program — expanding city coverage, not yet universal invitation' }],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'National "Two-Cancer" Screening Program provides free cervical screening (HPV or Pap smear) to rural women aged 35–64. Urban implementation varies by city. China approved domestic HPV vaccines (Cecolin, Walrinvax) and is scaling vaccination rapidly. National screening coverage is growing but not yet a universal invitation-based programme. Scored FUNDED_PASSIVE (3).',
        links: [{ label: 'China Two-Cancer Screening', url: 'http://www.nhc.gov.cn/', comment: 'Free cervical screening for rural women — urban scaling underway' }],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national AAA screening programme. AAA ultrasound available in public hospitals — covered by basic medical insurance once ordered. No population invitation or systematic programme. Awareness among Chinese physicians of proactive AAA screening is lower than in Western systems. Scored COST_SHARING (2).',
        links: [],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'National Basic Public Health Services includes annual blood glucose screening for adults 35+ at community health centres with free fasting glucose and HbA1c testing. China\'s massive diabetes burden (140M diagnosed, 40M+ undiagnosed) has driven aggressive proactive screening policy. National Standard Management Programme for Diabetes integrates screening with care pathways. Scored PROACTIVE (4): systematic national programme with annual active outreach.',
        links: [{ label: 'China Diabetes Management Programme', url: 'http://www.nhc.gov.cn/', comment: 'National diabetes screening and management — integrated into community health centres' }],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national osteoporosis screening programme. DEXA available at major hospitals, covered by basic medical insurance. 2022 Chinese guidelines recommend DEXA for women 65+ and high-risk individuals but no proactive population invitation exists. Scored COST_SHARING (2): available and insurer-subsidised when clinician-ordered, but no proactive outreach.',
        links: [{ label: 'Chinese Osteoporosis Guidelines 2022', url: 'http://www.nhc.gov.cn/', comment: 'National guidelines recommend DEXA for women 65+ — no population screening programme' }],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'National Lung Cancer Screening and Early Diagnosis Programme (2021) provides free low-dose CT (LDCT) for high-risk adults (40–74, heavy smokers or occupational exposure) at designated hospitals in 51 cities. Expanding but not yet national. Uptake limited by access to designated hospitals. Scored FUNDED_PASSIVE (3): government-funded and growing, but not delivered through universal proactive invitation.',
        links: [{ label: 'China LDCT Lung Cancer Screening', url: 'http://www.nhc.gov.cn/', comment: 'National lung cancer screening in 51 cities — free LDCT for high-risk groups' }],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national AF screening programme. AF detection occurs opportunistically in community health centre visits and cardiology outpatient settings — covered by basic insurance. Single-lead ECG devices increasingly available. Some pilot programmes using AI-enabled ECG in community settings. Scored COST_SHARING (2): government-funded opportunistic detection but no systematic programme.',
        links: [],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'National Basic Public Health Services includes cognitive function assessment (MMSE/MoCA) for adults 65+ in community health centres as part of the annual elderly health examination. Assessment is actively offered at annual visits — not a passive referral model. However, follow-up pathways from positive screening to memory clinic to care are inconsistent. Scored FUNDED_PASSIVE (3): free and offered, but care pathway post-screening is not systematically integrated.',
        links: [{ label: 'China Elderly Health Service', url: 'http://www.nhc.gov.cn/', comment: 'NBPHS annual exam for 65+ includes cognitive screening — free nationwide' }],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'BGI and commercial providers offer polygenic risk score tests in China\'s consumer genomics market. BGI\'s Complete Genomics platform, WeGene, and similar services provide DTC genomics including some PRS. No clinical or national programme for PRS-based screening. Regulatory framework for clinical PRS is not defined. Scored COST_SHARING (2): commercially accessible but without clinical validation or public funding.',
        links: [{ label: 'BGI Group Genomics', url: 'https://www.bgi.com/', comment: 'BGI — world\'s largest genomics company; consumer and research PRS services in China' }],
      },

      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: 2,
        text: 'No national sarcopenia screening programme. NHC has issued guidelines on sarcopenia management (2021), and some tertiary hospitals screen in geriatric outpatient settings. DEXA available in major urban hospitals but limited rural access.',
        links: [{ label: 'Chinese Expert Consensus on Sarcopenia', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8531450/', comment: 'NHC-endorsed consensus — not a national screening mandate' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: 1,
        text: 'No national sleep apnoea screening programme. Polysomnography and home sleep testing available in major urban centres, primarily via pulmonology and ENT specialist referral. Significant underdiagnosis — estimated >40 million undiagnosed cases. Limited primary care integration.',
        links: [],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'China\'s NHC can mandate national screening programmes rapidly when political priority is given (e.g. early cancer screening rollouts under Healthy China 2030). However, new programme adoption is typically driven by central government directives rather than evidence-based horizon-scanning. Pilot programmes require NHC approval and typically take 2–3+ years to become policy.',
        links: [{ label: 'Healthy China 2030 Action Plan', url: 'http://www.nhc.gov.cn/', comment: 'National cancer screening expansion — illustrates top-down rapid deployment' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 3,
        text: 'China Kadoorie Biobank (500k participants, active re-consent for follow-up), National Biobank of China, and hospital biobanks (West China, PUMCH) use opt-in models. Some hospital systems collect residual clinical samples for research under broad institutional consent frameworks. National standards are being harmonised under the 2021 Biosecurity Law. Score: 3 (multiple large opt-in cohorts with broad institutional consent; no national opt-out default).',
        links: [{ label: 'China Kadoorie Biobank', url: 'https://www.ckbiobank.org/', comment: '500k participants — ongoing longitudinal follow-up with re-consent for new studies' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 2,
        text: 'CKB has had three major follow-up waves (2004–08 baseline, 2008–09, 2013–14 resurvey — approximately 5–9 year intervals). Hospital biobanks generally collect single-time point samples. Longitudinal molecular biomarker collection (epigenetics, proteomics) is infrequent. Score: 2 (longitudinal subset; infrequent re-sampling at 5–9 year intervals).',
        links: [],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 3,
        text: 'BGI\'s BGI-Research and CKB have generated large-scale WGS and WES data. Some CKB subsamples include metabolomics and proteomics profiling. Aging-specific biomarkers (epigenetic clocks, telomeres) are measured in research subsets at leading institutions (PKU, Fudan). Scale of genomic data is world-class; multi-omic aging panel coverage is emerging. Score: 3.',
        links: [{ label: 'CKB Genomics', url: 'https://www.ckbiobank.org/research/genome-wide-association-studies', comment: 'CKB GWAS — large-scale genomic data from 500k Chinese participants' }],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 3,
        text: 'CKB is actively linked to death certificates and hospital discharge data (Disease Surveillance Points). Major hospital biobanks are linked to in-hospital EHR systems. National Health Insurance claims data (NHSA) can be linked for pharmacoepidemiological research with approval. Linkage is feasible but requires multi-institutional coordination and regulatory approval. Score: 3.',
        links: [],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 2,
        text: 'CKB data access is available to international collaborators through formal data access agreements (DAC review). However, China\'s 2021 Data Security Law and Biosecurity Law impose data localisation requirements — genetic data cannot leave China without government approval. This significantly restricts international research collaboration. Domestic researcher access is easier but still requires institutional approvals. Score: 2.',
        links: [{ label: 'China Data Security Law 2021', url: 'https://www.gov.cn/', comment: 'Data Security Law — genetic data classified as important national data; export restrictions apply' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 3,
        text: 'China\'s major academic medical centres have massive patient volumes enabling rapid enrolment — West China Hospital, PUMCH, and Zhongshan Hospital each see millions of outpatient visits annually. Electronic consent and EHR systems are increasingly used. National Clinical Trial Network is established. However, trial conduct quality varies widely across sites, and register-based outcomes are less developed than Scandinavian models.',
        links: [{ label: 'China Clinical Trials Registry', url: 'https://www.chictr.org.cn/', comment: 'ChiCTR — national clinical trial registry; active and growing' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 2,
        text: 'NMPA RWE guidance (2020) enables RWE for post-market and label expansion contexts. Not yet accepted as primary evidence for preventive trial approvals. Register-based RCT model is not established in China. Pragmatic trial acceptance is growing but NMPA still primarily expects traditional RCT evidence.',
        links: [],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 2,
        text: 'Some Chinese aging trials include functional aging composites (frailty index, ADL/IADL, grip strength, gait speed) as secondary endpoints. Biological age surrogates (epigenetic clocks, proteomic aging scores) appear in research publications from Chinese groups but not in registered trial endpoints for regulatory purposes.',
        links: [],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 2,
        text: 'Academic pilot trials of aging-mechanism interventions exist in China (NMN, rapamycin analogues, senolytics) primarily at individual research centres. The scale and regulatory engagement is at Phase I–II. No national Phase III trial of an aging-prevention agent is registered. Chinese biotech is increasingly interested in this space (Insilico Medicine, Calico analogues).',
        links: [],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 3,
        text: 'National Clinical Research Centers for Geriatrics (PUMCH, West China, Huashan) coordinate multi-site aging trials. National Health Commission has established aging research coordination. ChiCTR provides national trial registration. Not yet integrated with international harmonised platforms at the standard of EMA CTIS or FDA CTG, but domestic coordination infrastructure is real.',
        links: [{ label: 'National Clinical Research Centers', url: 'http://www.nhc.gov.cn/', comment: 'NHC-designated centres — coordinate multi-site aging clinical research nationally' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 2,
        text: 'ChiCTR (Chinese Clinical Trial Registry) provides a national registry with lay summaries. No national EHR-based patient-matching platform. Hospital-based recruitment is the norm — patients learn of trials through their treating physician. Major academic hospitals have internal matching systems. No systematic nationwide proactive notification.',
        links: [{ label: 'Chinese Clinical Trial Registry (ChiCTR)', url: 'http://www.chictr.org.cn/enindex.aspx', comment: 'National WHO-registered clinical trials registry — patient-facing search available' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 2,
        text: '"Healthy aging" is a national policy goal but aging is not yet a regulatory indication in China. Organ-specific aging indications (sarcopenia, frailty, AMD, osteoporosis) are recognised. NMPA is developing geriatric medicine frameworks. The trajectory is positive given demographic pressure — the policy environment is ready but regulatory science is not yet there.',
        links: [],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'NMPA accepts functional geriatric endpoints (gait speed, grip strength, MMSE) in organ-specific aging indications. No biological age surrogate has been accepted as a secondary endpoint with NMPA agreement in the context of a systemic aging indication. Emerging — but behind FDA and EMA.',
        links: [],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 2,
        text: 'Chinese HTA (National Healthcare Security Administration, NHSA) uses cost-effectiveness analysis for reimbursement decisions but relies on QALY-equivalent metrics without explicit healthspan extension methodology. No HTA guidance specifically addresses healthy aging or longevity intervention valuation.',
        links: [],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 2,
        text: 'No defined reimbursement pathway for aging-prevention agents. Off-label use is possible in clinical practice for drugs like metformin (widely used in Chinese longevity research), but not formally reimbursed for anti-aging purposes. Conditional reimbursement for innovative drugs is available for approved indications.',
        links: [],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 2,
        text: 'NMPA Breakthrough Therapy Designation is available for drugs targeting serious conditions. Some aging-adjacent therapies (frailty, sarcopenia) could qualify. No dedicated aging-prevention expedited pathway. NMPA is developing frameworks for complex geriatric conditions as part of post-ICH regulatory modernisation.',
        links: [],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 2,
        text: 'Research data access requires multi-level approvals: institutional ethics committee, data controller, and for human genetic data, additional approval from CNCB/CNSA or MOST. Processing can take 3–12 months. For international collaborators, additional export approval from MOST is required for genetic data. Process is improving but remains burdensome by international standards.',
        links: [{ label: 'CNCB/CNSA Data Access', url: 'https://ngdc.cncb.ac.cn/', comment: 'China National Center for Bioinformation — access process for national genomic data' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 3,
        text: 'Within major hospital networks, EHR-biobank-registry linkage at the individual patient level is feasible using citizen ID numbers. National Health Insurance (NHSA) claims data can be linked to hospital records. Cross-institutional linkage is more challenging due to data siloes and localisation rules. Within large centres (West China, PUMCH), linkage quality approaches Nordic standards.',
        links: [],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 2,
        text: 'China\'s Personal Information Protection Law (PIPL, 2021) and Data Security Law (2021) create strong data protection requirements. Research exemptions exist but are not clearly defined. Human genetic data faces stricter controls under the Biosecurity Law. The regulatory framework is present but creates significant compliance burdens and restricts data flows.',
        links: [{ label: 'China PIPL 2021', url: 'https://www.gov.cn/', comment: 'Personal Information Protection Law — research exemptions exist but inconsistently interpreted' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 3,
        text: 'China has issued AI governance regulations (Generative AI Interim Measures, 2023; Algorithm Recommendation Rules, 2022). For health AI, NMPA has issued AI medical device guidance. The regulatory framework is active and evolving. Large-scale health AI is being deployed (WeDoctor, Ping An Good Doctor, Alibaba Health AI). Governance is present but focused on commercial deployment rather than research access.',
        links: [{ label: 'NMPA AI Medical Device Guidance', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA AI/ML medical device regulatory guidance — 2019 and 2022 guidance documents' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 1,
        text: 'Cross-border health data sharing faces significant legal barriers. Human genetic data requires MOST approval for export. EHR data is subject to PIPL cross-border transfer requirements (standard contract or government certification). In practice, international collaborative research requires data analysis to occur within China or through approved federated analysis frameworks. Major barrier to international longevity research collaboration.',
        links: [{ label: 'China Biosecurity Law 2021', url: 'https://www.gov.cn/', comment: 'Human genetic resource regulation — export approval required from MOST' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 3,
        text: 'China has mandated EHR adoption across all tier-3 (tertiary) hospitals and most tier-2 hospitals. National Health Information Standards are enforced at top-tier facilities. Rural and low-tier hospital EHR coverage remains incomplete. Major national EHR platforms (Cerner China, local EMR vendors) cover most high-volume care. Near-universal at top-tier; significant gaps at the community level.',
        links: [{ label: 'China Health Informatisation Plan', url: 'http://www.nhc.gov.cn/', comment: 'NHC health IT standards — EHR mandate at tertiary hospitals' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 2,
        text: 'ICD-10 CM (Chinese version) is mandated nationally. LOINC and SNOMED CT adoption is partial and not enforced consistently. HL7 FHIR is being piloted in some regions (Guangzhou, Shanghai). National Health Information Standards define coding requirements but implementation inconsistency is the norm outside top-tier facilities.',
        links: [],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 3,
        text: 'Core national registries exist: National Cancer Registry (NCCR), Death Registry, Hospital Discharge Data (National Centre for Cardiovascular Diseases). Key registries are digital. Coverage gaps exist in rural areas and for rare diseases. Registries are linked to some EHR systems at national research centres but not uniformly nationwide.',
        links: [{ label: 'NCCR National Cancer Registry', url: 'https://www.nccr.org.cn/', comment: 'National Cancer Center Registry — covers 500+ million population' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 2,
        text: 'National registry data typically has 12–24 month lag time. Hospital-level EHR data is more current but not uniformly accessible for research. Real-time data access for researchers is not systematically available. NHSA insurance claims data released annually with significant lag.',
        links: [],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 2,
        text: 'Validated phenotyping algorithms for common conditions exist at individual research centres (West China Hospital has published algorithms). No national phenotype library or shared API infrastructure. Cross-site cohort queries without manual chart review are possible within large hospital systems but not across institutions.',
        links: [],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 2,
        text: 'ICD-10 is nationally mandated. Alignment with international ontologies (SNOMED CT, OMOP CDM) is limited and project-specific. Some research networks (CKB, China Stroke Registry) use harmonised data definitions but these are not extended to general research infrastructure.',
        links: [],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 3,
        text: 'CKB is linked to disease registries and death data. Major hospital biobanks are linked to institutional EHR. NHSA claims data can be linked to research cohorts with approval. National linkage capability exists for major cohorts but requires extensive negotiation and approval — not a self-service research infrastructure.',
        links: [{ label: 'CKB Linkage Methods', url: 'https://www.ckbiobank.org/', comment: 'CKB linkage to national death and hospital data — ongoing longitudinal follow-up' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 2,
        text: 'FAIR data principles are not systematically implemented in Chinese health research infrastructure. Some genomics datasets deposited at CNCB/CNSA follow international metadata standards. National policy does not mandate FAIR compliance for publicly funded research. Horizon Europe-style open data mandates do not apply.',
        links: [],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 3,
        text: 'China National ADR Monitoring Centre (CNADR) operates the national pharmacovigilance system. Post-2017 NMPA reform strengthened ADR reporting requirements. AI-assisted signal detection is being explored. The system is functional but has historically been weaker than EMA/FDA in active post-market surveillance; improving rapidly.',
        links: [{ label: 'China ADR Monitoring Centre', url: 'https://www.adrs.org.cn/', comment: 'National adverse drug reaction surveillance — mandatory reporting, growing AI integration' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 2,
        text: 'NSFC requires trial registration (ChiCTR) for funded clinical trials. Results reporting requirements are weaker than NIH or EU. Open data sharing is not mandated. Pre-registration of observational studies is not required. Growing culture of open science at top institutions but no national mandate equivalent to NIH data sharing policy.',
        links: [],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 3,
        text: 'NMPA joined ICH in 2017 and is implementing ICH E5 — allowing use of foreign multiregional clinical trial (MRCT) data to support China registration without requiring bridging studies in many cases. Since 2018, NMPA explicitly accepts foreign MRCT data where Chinese patients were included. Cannot yet use foreign-only data as primary evidence, but the policy has substantially reduced duplication requirements.',
        links: [{ label: 'NMPA MRCT Policy', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA accepts multiregional clinical trial data including Chinese subpopulation requirements' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 2,
        text: 'NMPA is an ICH member and participates in ICH Expert Working Groups. No participation in Project Orbis or equivalent joint review programmes — China is not part of any multilateral joint drug review network. Some bilateral scientific exchange with FDA and EMA exists at the working level.',
        links: [],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 3,
        text: 'NMPA has adopted most ICH guidelines since 2017 membership — ICH E1–E6, Q1–Q11, and S1–S9 are being implemented in Chinese regulatory practice. Implementation is incomplete — some guidelines lag by 2–5 years from adoption to enforcement. China is moving toward alignment but not yet fully harmonised.',
        links: [{ label: 'NMPA ICH Implementation', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA implementing ICH guidelines since 2017 — rolling adoption timeline' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 3,
        text: 'NMPA\'s 2018 reform allows reference to FDA/EMA approvals for priority review designation and expedited timelines. Drugs approved in the US and EU and classified as innovative can receive conditional approval in China based on foreign trial data with a Chinese sub-study. Not full reliance — Chinese-specific data still required in most cases.',
        links: [{ label: 'NMPA Priority Approval Reform 2018', url: 'https://www.nmpa.gov.cn/', comment: 'NMPA reform allowing reference to foreign approvals — partial reliance mechanism' }],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 2,
        text: 'China has bilateral pharmaceutical regulatory cooperation agreements with multiple countries (EU, US, Japan, Australia) but these cover regulatory information sharing and GMP inspections, not mutual recognition of clinical trial data or marketing authorisations. No multilateral pharmaceutical MRA that includes China. Limited GMP recognition through bilateral agreements.',
        links: [],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 4,
        text: 'China has multiple BSL-3 facilities at academic and government institutions, and the Wuhan National Biosafety Laboratory (Level 4) — the first BSL-4 facility in mainland China, affiliated with the Wuhan Institute of Virology. Additional BSL-4 facilities are under construction. BSL-3 capacity has grown rapidly post-COVID. Access for academic researchers is available through institutional channels, though access protocols for foreign researchers are unclear.',
        links: [{ label: 'Wuhan BSL-4 Lab', url: 'http://www.whiov.ac.cn/en/', comment: 'Wuhan Institute of Virology BSL-4 — first in mainland China; growing national BSL capacity' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 4,
        text: 'China has become a major global CDMO hub: WuXi Biologics, WuXi AppTec, Lonza Guangzhou, Samsung Biologics China, and dozens of domestic CDMOs provide substantial GMP manufacturing capacity. Cell and gene therapy GMP facilities are growing rapidly. Chinese CDMO costs are competitive globally. Regulatory quality for international GMP standards is improving but variable across sites.',
        links: [{ label: 'WuXi Biologics', url: 'https://www.wuxibiologics.com/', comment: 'World\'s largest CDMO — China-headquartered with GMP manufacturing across multiple sites' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'China has world-class HPC infrastructure: Tianhe-2 (NUDT), Sunway TaihuLight, and a growing network of national supercomputing centres (Tianjin, Guangzhou, Wuxi, Shanghai). National AI computing clusters are expanding for health AI applications. Frontier computing restrictions from US chip export controls are creating pressure but China\'s existing compute base is substantial.',
        links: [{ label: 'China Supercomputer Network', url: 'http://www.nscc.cn/', comment: 'National Supercomputing Centers — major HPC infrastructure for research' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 5,
        text: 'BGI Group — the world\'s largest genomics company — is headquartered in Shenzhen. China produces the majority of global sequencing output by volume. BGI\'s DNBSEQ platform, Complete Genomics (BGI subsidiary), and MGI Tech dominate domestic sequencing. China Precision Medicine Initiative and various national programs have generated tens of millions of genome sequences. Unmatched globally at scale.',
        links: [{ label: 'BGI Group', url: 'https://www.bgi.com/', comment: 'World\'s largest genomics company — dominates global sequencing capacity' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 3,
        text: 'China has large mouse model facilities — National Mouse Phenotyping Center (NMPC) at Guangzhou, Institute of Laboratory Animal Sciences (CAMS), and Beijing Vital River (major rodent vendor). Growing C. elegans and zebrafish aging research communities. No ITP-equivalent multi-site aging compound testing programme. Scale is significant; standardisation and international integration are developing.',
        links: [{ label: 'National Mouse Phenotyping Center', url: 'https://www.infrafrontier.eu/emma-resources/member-nodes/china', comment: 'China NMPC — contributing to international mouse phenotyping; large-scale rodent facilities' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 3,
        text: 'China participates in key international consortia: CKB is a major contributor to global epidemiological consortia. Chinese institutions are members of Human Cell Atlas, GWAS consortia (COGENT, GIANT), and cancer genomics networks. Political tensions have reduced Chinese participation in some US-led consortia. China leads the China Genomics Alliance and participates in GA4GH, but with data access constraints.',
        links: [{ label: 'China Kadoorie Biobank International', url: 'https://www.ckbiobank.org/about-us/collaborators', comment: 'CKB — major international collaboration hub involving Oxford, NIH, and others' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 2,
        text: 'China\'s data localisation laws (Biosecurity Law, Data Security Law, PIPL) significantly restrict international data sharing for genomic and health data. GA4GH frameworks are adopted at CNCB/CNSA in principle but data export restrictions effectively prevent the federated analysis models used in Europe and North America. International collaboration requires data analysis to occur within China.',
        links: [],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 2,
        text: 'China is not eligible for Horizon Europe as a full associated country. NSFC has bilateral agreements with DFG (Germany), ANR (France), NWO (Netherlands), and some others — enabling joint grants. US-China research funding is significantly constrained by geopolitical restrictions and US CHIPS/PREVENT Act provisions. Limited international joint funding access compared to peer economies.',
        links: [{ label: 'NSFC International Cooperation', url: 'https://www.nsfc.gov.cn/english/site_1/index.html', comment: 'NSFC bilateral funding agreements with selected European research councils' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 4,
        text: 'China is #2 globally by life science publication volume and growing rapidly by citation impact. Chinese authors account for ~25% of global longevity-adjacent publications. Top institutions (PKU, Tsinghua, CAS, Fudan) publish in Nature Aging, Cell, Science. Chinese researchers increasingly hold editorial board positions and society memberships. Impact relative to volume is still below the US, but growing.',
        links: [{ label: 'Nature Aging Chinese Authors', url: 'https://www.nature.com/nataging/', comment: 'Nature Aging — Chinese author proportion growing rapidly; multiple Chinese editorial board members' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 3,
        text: 'China is a PCT member. Chinese universities and companies are filing patents at unprecedented scale — China passed the US in PCT international applications in 2019. Biomedical patent quality and international enforceability remain concerns. IP framework requires government approval for transfer of certain technologies (including human genetic data, genomic IP). University-researcher IP allocation is improving.',
        links: [{ label: 'WIPO PCT China Statistics', url: 'https://www.wipo.int/pct/en/filing/filing.html', comment: 'China #1 in PCT filings globally since 2019' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 4,
        text: 'Edelman Trust Barometer (2023) shows China with among the highest institutional trust globally — ~89% trust in government, ~82% trust in science/medicine. Confucian cultural values around respect for authority and collective welfare reinforce institutional trust. COVID-19 response maintained, not damaged, trust in health institutions by government messaging. Very high baseline — enables rapid adoption of health programmes.',
        links: [{ label: 'Edelman Trust Barometer 2023', url: 'https://www.edelman.com/trust/2023/trust-barometer', comment: 'China among highest globally for trust in government and science — ~89%' }],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 4,
        text: 'Longevity and healthy aging are deeply embedded in Chinese culture — traditional medicine (TCM) has millennia-long focus on longevity enhancement (百岁). Confucian filial piety creates strong cultural motivation for extending healthy life. Rapid aging of the population (超老龄社会) has made longevity a mainstream social and political concern. Public acceptance of longevity research is high; "Jian Kang Zhong Guo 2030" makes it explicit policy.',
        links: [{ label: 'Healthy China 2030 Action Plan', url: 'https://www.gov.cn/xinwen/2016-10/25/content_5124174.htm', comment: 'National strategy — health as core national goal; aging explicitly addressed' }],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 5,
        text: 'Longevity and healthy aging are among China\'s most explicitly political health priorities. The 14th Five-Year Plan (2021–2025) includes dedicated chapters on aging population management and healthy aging R&D. "Healthy China 2030" is a top-level national strategy. Specific targets: life expectancy to 79 by 2030, healthy life expectancy extended significantly. Multiple ministry coordination (NHC, MOST, NDRC, MCA) with dedicated funding streams. China\'s political system enables sustained multi-decade commitment unavailable in electoral democracies.',
        links: [{ label: '14th Five-Year Plan — Aging', url: 'http://www.gov.cn/xinwen/2021-03/13/content_5592681.htm', comment: 'National plan — explicit aging population management and healthy aging R&D targets' }],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 1,
        text: 'China has one of the world\'s most active anti-aging supplement, cosmetic, and Traditional Chinese Medicine (TCM) markets. SAMR has enforcement authority over false advertising but enforcement is inconsistent and primarily targets egregious fraud after complaints. TCM anti-aging claims occupy a regulatory grey zone — many products with no Western biomarker evidence are formally registered. The "health food" category allows approved products to make vague vitality claims without clinical evidence.',
        links: [{ label: 'SAMR Advertising Law Enforcement', url: 'http://www.samr.gov.cn/', comment: 'Chinese advertising regulator — enforcement of false health/anti-aging claims; reactive and inconsistent' }],
      },
    },
  },
}

export default china
