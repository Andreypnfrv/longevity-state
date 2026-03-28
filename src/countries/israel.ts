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

const israel: CountryData = {
  country: Country.ISRAEL,

  metrics: {
    lifeExpectancy: { value: 83.2, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 70.8, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.156, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'The B-1 work visa with employer sponsorship is the primary route for foreign researchers. Israel\'s tech ecosystem and academic institutions (Weizmann, Hebrew University, Technion) actively recruit globally. Jewish researchers benefit from the Law of Return — immediate citizenship and unrestricted work rights, creating a diaspora pipeline unparalleled among small nations. Non-Jewish researchers require institutional sponsorship but the process is well-trodden by Israeli universities.',
        links: [{ label: 'PIBA Work Visa B1', url: 'https://www.gov.il/en/departments/guides/foreign_worker_academics', comment: 'Population and Immigration Authority — academic work visa procedures for foreign researchers' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 3,
        text: 'Work visa processing through the Population and Immigration Authority (PIBA) typically takes 4–8 weeks for academic roles. Priority processing is available for senior researchers sponsored by universities with existing PIBA agreements. For Jewish immigrants under the Law of Return, entry and work rights are immediate — functionally zero processing time. Non-Jewish early-career researchers face 2–3 month standard processing.',
        links: [{ label: 'Population and Immigration Authority', url: 'https://www.gov.il/en/departments/immigration_and_population', comment: 'PIBA — Israeli immigration authority; processes academic researcher work visas' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 4,
        text: 'Israeli universities and the Israel Science Foundation (ISF) recognise foreign PhDs from accredited institutions without re-examination for grant eligibility and academic appointments. The Council for Higher Education (CHE) maintains equivalency frameworks for degrees from ~100 countries. Major-university PhDs (MIT, Oxford, Max Planck) are accepted instantly. Weizmann Institute explicitly lists accepted degree equivalencies for fellowship eligibility.',
        links: [{ label: 'CHE Degree Equivalency', url: 'https://www.che.org.il/en/', comment: 'Council for Higher Education — degree recognition; maintained for 100+ countries' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 3,
        text: 'Weizmann Institute offers its own international postdoctoral fellowship programme with full salary support, independent of Israeli immigration sponsorship. ISF and BSF (US-Israel Binational Science Foundation) fund postdoc stipends at Israeli institutions for international candidates. Income thresholds for B-1 visas are calibrated to academic salary levels. Jewish postdocs have immediate unrestricted access under the Law of Return — making Israel uniquely attractive for the global Jewish scientific diaspora.',
        links: [{ label: 'Weizmann Postdoctoral Fellowships', url: 'https://www.weizmann.ac.il/pages/postdoctoral-fellowships', comment: 'Weizmann international postdoc programme — full fellowship support for international candidates' }],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 3,
        text: 'Law of Return provides instant permanent residency and a pathway to citizenship for Jewish researchers — a structurally unique retention mechanism with no analogue globally. For non-Jewish researchers, permanent residency requires 5 years of continuous employment-based residence. Israeli academia has a significant "brain drain" challenge — top researchers often leave for US/EU academic salaries and laboratory resources. The Returning Israeli Scientists programme (MAOF) offers financial incentives for diaspora return.',
        links: [{ label: 'MAOF Returning Scientists', url: 'https://www.vatat.org.il/', comment: 'VATAT (Planning and Budgeting Committee) — funds returning Israeli scientists with grants for the first 3 years' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 2,
        text: 'Foreign medical graduates must pass the Israeli Medical Licensing Examination (IMLE) in Hebrew — including theoretical and clinical components — regardless of country of origin. No bilateral recognition agreements with EU or US that exempt physicians from full re-examination. Process typically takes 2–4 years from arrival to independent practice. The Hebrew language requirement is a significant additional barrier for non-Hebrew-speaking physicians. Jewish immigrant physicians may receive some procedural support but face the same substantive examination requirements.',
        links: [{ label: 'Israeli Medical Licensing (MOH)', url: 'https://www.health.gov.il/English/Services/Staff_License/Physician/Pages/default.aspx', comment: 'Israeli Ministry of Health — foreign medical graduate licensing requirements' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 3,
        text: 'The Israeli Ministry of Health publishes a detailed step-by-step guide for foreign medical graduates on its website in Hebrew and English. The IMA (Israeli Medical Association) provides advisory services. Jewish Agency counselling services assist olim (Jewish immigrants) with medical licensing navigation. The process is fully documented but lengthy — the main clarity challenge is managing realistic timeline expectations given the examination load.',
        links: [{ label: 'MOH Physician Licensing Guide', url: 'https://www.health.gov.il/English/Services/Staff_License/Physician/Pages/default.aspx', comment: 'Israeli MOH — English-language guidance for foreign physician licensing' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 2,
        text: 'Full IMLE passage and provisional license: 12–24 months typical from arrival. Hebrew proficiency must be demonstrated before exam eligibility. For physicians from countries with strong Hebrew programmes (Russia, FSU), some advantages exist. NHS-equivalent supervised practice during licensing process is not structured in Israel — clinical work is restricted until provisional license issued. Net timeline to independent clinical practice: 18–36 months.',
        links: [{ label: 'IMLE Examination Schedule', url: 'https://www.health.gov.il/English/Services/Staff_License/Physician/Pages/default.aspx', comment: 'Israeli MOH — IMLE examination schedule and eligibility requirements' }],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 2,
        text: 'During the licensing period, foreign-trained physicians may work as medical assistants or in supervised research positions but cannot practise independently or in a primary clinical role. Academic hospital positions may allow some supervised clinical exposure during the examination period. There is no provisional practice scheme comparable to the UK\'s or Canada\'s — clinical scope during licensing is very limited.',
        links: [{ label: 'Israeli Medical Association', url: 'https://www.ima.org.il/ENG/', comment: 'IMA — professional body providing guidance on scope of practice for licensing physicians' }],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 3,
        text: 'Israeli academic hospitals (Hadassah, Sheba, Ichilov/Tel Aviv Sourasky, Rambam) have strong clinician-researcher cultures. Foreign clinicians who complete licensing and obtain academic hospital positions have defined research time in senior academic posts. ISF and MOH fund clinician-scientist positions at academic hospitals. The dual-role career is well-established in Israeli academic medicine, even if the entry path for foreigners is prolonged.',
        links: [{ label: 'Sheba Medical Center Research', url: 'https://www.shebaresearch.org/', comment: 'Sheba Medical Center ARC Innovation — Israel\'s largest academic hospital research programme' }],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'Hebrew University, Tel Aviv University, Bar-Ilan, Ben-Gurion, and Haifa universities all incorporate aging biology into biomedical and life science undergraduate programmes. Israel\'s high STEM participation rate (one of the world\'s highest relative to population) means that undergrads entering longevity-adjacent research fields are well-prepared in biology, computation, and chemistry. Dedicated aging electives are available at Tel Aviv and Hebrew University. Technion focuses more on engineering biology but links to longevity applications are growing.',
        links: [{ label: 'Hebrew University Faculty of Science', url: 'https://en.huji.ac.il/en', comment: 'Hebrew University — biomedical science undergraduate programme with aging biology modules' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 4,
        text: 'Weizmann Institute of Science is a graduate-only institution and one of the world\'s best for aging biology PhD training — structural biology of aging proteins, epigenetics, metabolism, proteostasis, transgenerational epigenetic inheritance. Hebrew University (Hadassah Faculty of Medicine, Alexander Silberman Institute), Tel Aviv University (Faculty of Life Sciences), and Technion all have strong aging-adjacent PhD programmes. ISF funds dedicated aging PhD positions. Israel produces a disproportionately large number of top-tier aging biology papers relative to its population.',
        links: [{ label: 'Weizmann Institute PhD', url: 'https://www.weizmann.ac.il/pages/phd-program', comment: 'Weizmann PhD programme — world-class aging biology training; fully funded positions' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 4,
        text: 'Weizmann Institute postdoctoral programme is globally competitive — offering international stipends, a vibrant scientific community, and access to outstanding experimental infrastructure. ISF Career Development Grants support independent postdoc-to-PI transitions. BSF (US-Israel Binational Science Foundation) funds bilateral postdoc exchanges with US institutions. The Israel Academy of Sciences funds returning postdocs. The main limitation is salary competitiveness vs. Swiss, UK, or US postdoc rates for non-Weizmann positions.',
        links: [{ label: 'BSF Postdoctoral Fellowship', url: 'https://www.bsf.org.il/', comment: 'BSF — US-Israel bilateral postdoc fellowships; supports aging biology researchers at Israeli institutions' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 3,
        text: 'ISF fully funds PhD stipends at Israeli universities (~NIS 5,000/month, approximately €1,250 — adequate in Israel\'s cost structure outside Tel Aviv). Weizmann Institute provides enhanced stipends and housing allowances making its PhD positions internationally competitive. VATAT (Planning and Budgeting Committee) provides supplemental funding for STEM PhD positions. Public funding coverage is near-universal for PhD positions, though stipend levels are modest by Swiss or US standards.',
        links: [{ label: 'Israel Science Foundation', url: 'https://www.isf.org.il/', comment: 'ISF — primary public funder of PhD stipends and postdoc fellowships in Israel' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 4,
        text: 'Israel\'s "startup nation" ethos creates exceptionally strong industry-academia bridges. Yeda Research and Development (Weizmann TTO), Ramot (Tel Aviv TTO), and T3 (Technion TTO) are among the world\'s most productive technology transfer offices — Yeda licenses have generated billions in royalties. PhD students routinely participate in startup creation during or immediately after training. TEVA, Taro, and major biotech companies co-fund academic positions. The cultural expectation of commercial application is deeply embedded in Israeli research training.',
        links: [{ label: 'Yeda Research and Development', url: 'https://www.yeda.org/', comment: 'Weizmann TTO — one of world\'s most productive; billions in licensed revenue from academic aging research' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 3,
        text: 'Geriatric Medicine is a recognised specialty in Israel with a 4-year post-internship residency. The Israeli Board of Geriatrics certifies specialists. Academic geriatrics departments exist at all major academic medical centres (Hadassah, Sheba, Ichilov, Rambam). Israel\'s aging demographic (20%+ over 65) creates clinical demand. Geriatrics is respected but faces the same recruitment challenges as elsewhere — lower compensation and prestige than internal medicine or cardiology.',
        links: [{ label: 'Israeli Board of Geriatrics', url: 'https://www.health.gov.il/English/MinistryUnits/HealthCouncil/Pages/default.aspx', comment: 'Israeli MOH Health Council — certifies geriatric medicine specialty training' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 3,
        text: 'Israeli medical schools (Hebrew University-Hadassah, Tel Aviv-Sackler, Technion-Ruth, Ben-Gurion, Bar-Ilan-Azrieli) include geriatrics rotations and some aging biology content. The 6-year MD programme includes mandatory geriatric clerkship at most schools. Aging biology (senescence, inflammaging, age-related disease mechanisms) is increasingly integrated into pre-clinical years at Hebrew University and Tel Aviv. The integration depth is above average but not yet placing aging mechanisms at the core of pre-clinical training.',
        links: [{ label: 'Hebrew University-Hadassah Medical School', url: 'https://medicine.ekmd.huji.ac.il/en/', comment: 'Hebrew University medical school — 6-year programme with geriatrics rotation and aging biology' }],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 3,
        text: 'Geriatrics residency in Israel covers comprehensive geriatric assessment, frailty, dementia management, falls, and rehabilitation — aligned with Israeli Gerontological Society standards. Rotations include community geriatrics (HMO-based), acute care, rehabilitation, and palliative care. Academic centres (Hadassah Mount Scopus, Sheba) provide research exposure. Quality is solid though clinical volume pressure and ward sizes limit the depth of mentoring vs. specialty programmes in smaller countries.',
        links: [{ label: 'Israeli Gerontological Society', url: 'https://www.gerontology.org.il/', comment: 'IGS — professional body setting geriatric residency standards and running CME' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 2,
        text: 'CME in Israel is managed through the IMA\'s continuing education framework. The Israeli Gerontological Society runs an annual conference with aging medicine content. Longevity science specifically (geroprotectors, biological age, senolytics) is not yet in formal CME tracks — it appears at academic conferences but not as mandated or systematically structured CME for practising clinicians. This is a gap relative to the UK or US continuing education landscape.',
        links: [{ label: 'Israeli Gerontological Society CME', url: 'https://www.gerontology.org.il/', comment: 'IGS annual conference — primary CME for geriatric medicine; aging biology content increasing' }],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 3,
        text: 'Israeli MOH publishes healthcare workforce projections. The rapid growth of the 75+ population (expected to double by 2040) has prompted policy response: expanded geriatric training positions at academic hospitals, new long-term care medical directorships requiring geriatrics certification, and salary supplements for geriatric specialists in shortage areas. The planning exists and is evidence-based; execution is ongoing with acknowledged shortfalls.',
        links: [{ label: 'Israeli MOH Workforce Plan', url: 'https://www.health.gov.il/English/MinistryUnits/ClinicalProfessions/Pages/default.aspx', comment: 'Israeli MOH — healthcare workforce planning including geriatrics specialty expansion' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 3,
        text: 'MD-PhD programmes exist at Hebrew University-Hadassah Medical School, Tel Aviv University-Sackler, and Technion. These are 7–8 year programmes with integrated basic science PhD alongside medical training. Numbers are small (10–20 per year nationally). Weizmann Institute, though not having a medical school, actively collaborates with Hadassah Hospital on clinical-translational research — creating a de facto parallel pathway for PhD scientists to work in clinical settings.',
        links: [{ label: 'Hebrew University MD-PhD', url: 'https://medicine.ekmd.huji.ac.il/en/research/Pages/research.aspx', comment: 'Hebrew University-Hadassah — integrated MD-PhD programme in academic medicine' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 3,
        text: 'ISF and MOH jointly fund clinical research career development fellowships at academic hospitals. The Israel Cancer Research Fund supports oncology clinician-scientists. VATAT funds joint academic hospital-university positions. Salary parity during MD-PhD training is not fully achieved — residents in clinical training earn clinical salaries (reasonable), while research-phase stipends can be lower. No significant financial disincentive, but also no specific salary-boosting mechanism comparable to NIHR fellowships.',
        links: [{ label: 'ISF Clinical Research Grants', url: 'https://www.isf.org.il/', comment: 'ISF — funds clinical research career development grants for clinician-scientists at academic hospitals' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 3,
        text: 'Weizmann Institute\'s collaborations with Hadassah and Sheba hospitals create a de facto aging clinician-scientist pathway — several groups work on clinical translation of aging biology discoveries. ISF funds joint aging research across Weizmann and academic hospitals. Hebrew University\'s Lautenberg Centre for Immunology and Cancer Research has aging components. A formally named aging clinician-scientist track does not exist, but the collaborative ecosystem enables it.',
        links: [{ label: 'Weizmann-Hadassah Collaboration', url: 'https://www.weizmann.ac.il/', comment: 'Weizmann Institute clinical translation — formal collaboration with Hadassah academic hospital for clinical aging research' }],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 3,
        text: 'Israeli academic hospital contracts at senior level (attending/attending equivalent) allow 20–30% research time through academic appointment parallel to clinical duties. MOH funds "research day" provisions at academic hospital clinical departments. This is less formalised and funded than the UK\'s ACF structure — it depends heavily on departmental support and individual negotiation rather than national contractual guarantee.',
        links: [{ label: 'Israeli Academic Hospitals', url: 'https://www.health.gov.il/English/MinistryUnits/ClinicalProfessions/Pages/default.aspx', comment: 'Israeli MOH — academic hospital guidelines; research time provisions for senior clinical academic staff' }],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 3,
        text: 'The clinician-scientist career is viable and respected in Israel. Several world-leading aging researchers have clinical backgrounds (e.g. Elchanan Zlotkin, groups at Hadassah). Academic hospital promotion rewards research output. The main challenge is the structural competition for clinical hours in an underfunded NHS-equivalent system — public hospital doctors work extremely long hours, leaving limited energy for science. Private practice offers higher income, pulling talented clinicians away from academic tracks.',
        links: [{ label: 'Sheba Research Institute', url: 'https://www.shebaresearch.org/', comment: 'Sheba Medical Center Research — Israel\'s largest clinical research hub; clinician-scientist career track' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 3,
        text: 'Israel\'s total R&D spend is 6.3% of GDP — the world\'s highest ratio. ISF annual budget ~$120M across all disciplines; aging and longevity receive ~$15–25M in dedicated ISF funding. Weizmann Institute\'s endowment (~$3B) generates significant independent research capital. Total private + public aging-specific spend is estimated at $50–100M — meaningful for a country of 9.7M but modest in absolute terms vs. the US or UK. The efficiency of Israeli research output per dollar is remarkably high.',
        links: [{ label: 'Israel Science Foundation', url: 'https://www.isf.org.il/', comment: 'ISF — primary public research funder; Israel\'s R&D as % of GDP is world\'s highest' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 4,
        text: 'Weizmann Institute covers aging biology comprehensively: structural biology of age-related misfolded proteins (David Fass, Ron Elber), epigenetics (Amos Tanay, Nir Friedman), metabolism (Eran Segal, Eran Elinav), protein quality control (Ayelet Acker), transgenerational inheritance (Oded Rechavi), and aging genetics. ISF explicitly funds mechanisms of aging as a priority theme. The portfolio balance across mechanistic, translational, and computational aging is genuinely strong — covering most hallmarks of aging with active programmes.',
        links: [{ label: 'Weizmann Aging Research', url: 'https://www.weizmann.ac.il/', comment: 'Weizmann Institute — broad aging biology portfolio spanning epigenetics, proteostasis, metabolism, and genetics' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 3,
        text: 'ISF provides 3–5 year grants with renewal pathways — moderate stability. Weizmann Institute core funding is endowment-based (stable). ERC (European Research Council) grants are now available to Israeli researchers under Horizon Europe association, providing 5-year grants with strong stability. Israel Innovation Authority provides multi-year industrial research support. Budget stability is adequate but research programmes are more sensitive to annual ISF cycles than those funded through large national institutes.',
        links: [{ label: 'Israel ERC Association', url: 'https://erc.europa.eu/news-events/news/erc-extends-association-israel', comment: 'Israel-ERC association — Israeli researchers eligible for ERC grants; 5-year stability for top investigators' }],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 5,
        text: 'World-class university TTOs (Yeda, Ramot, T3, BIRAD) monetise academic science at high per-researcher rates; Israeli employment and funding practice generally supports company retention of IP when commercialising with IIA support. University-owned background IP is licensed on active commercial terms with meaningful inventor upside.',
        links: [{ label: 'Yeda', url: 'https://www.yeda.org/', comment: 'Weizmann TTO — reference Israeli academic commercialisation' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 4,
        text: 'Yeda Research and Development (Weizmann TTO) has generated over $2B in cumulative licensing revenue — reinvested in Weizmann research. Major philanthropic donors include the Azrieli Foundation, Morris Kahn, and international Jewish diaspora philanthropy channelled through American Friends of Weizmann and similar. Israeli biotech VC (JVP, Pitango, Magma) is active in longevity-adjacent sectors. TEVA\'s research partnership with Hebrew University provides additional leverage. Private-to-public funding ratio in Israel is among the highest globally.',
        links: [{ label: 'Yeda Research and Development', url: 'https://www.yeda.org/', comment: 'Yeda TTO — $2B+ cumulative licensing; reinvested into Weizmann aging research programmes' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 4,
        text: 'Israeli research culture is characterised by genuine risk appetite — the "hutzpah" (audacity) cultural norm is not merely a cliché. ISF\'s Pioneer Grants fund high-risk, transformative hypotheses with relaxed peer review criteria. Weizmann encourages its scientists to pursue unconventional directions — Oded Rechavi\'s work on heritable epigenetics in C. elegans is a canonical example of disruptive, initially scepticism-provoking science that flourished in this environment. ERC Advanced and Synergy grants available to Israeli researchers also support long-horizon risk-taking.',
        links: [{ label: 'ISF Pioneer Grants', url: 'https://www.isf.org.il/en/pages/pioneer.aspx', comment: 'ISF Pioneer Programme — specifically funds transformative, high-risk aging hypotheses' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 4,
        text: 'Israeli MOH regulates somatic gene therapy under the Pharmaceutical Act and the Genetic Information Act. Clinical trials with gene editing therapies (CAR-T, gene correction) are ongoing at Hadassah and Sheba hospitals — Israel was among the early adopters of CAR-T clinical programmes. Israeli regulatory science has progressively expanded somatic gene editing approval. Clinical Innovation Hub at Sheba (ARC — Accelerate, Redesign, Collaborate) provides a fast-track clinical translation environment.',
        links: [{ label: 'Sheba ARC Innovation', url: 'https://www.shebaresearch.org/', comment: 'Sheba ARC Innovation — Israel\'s fastest clinical translation pathway; somatic gene therapy trials active' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 4,
        text: 'Israeli MOH clinical trial approvals are typically completed in 3–6 months from submission — faster than EMA and comparable to UK MHRA. The Helsinki Committee (institutional ethics) runs in parallel with MOH review. Israel\'s regulatory agility is partly enabled by its small national system: the MOH Division of Pharmaceutical Products interacts directly with academic hospital research committees without the multi-layer bureaucracy of larger regulatory systems. Manufacturer presence in Israel (Novartis, GSK, J&J) facilitates rapid scientific engagement with regulators.',
        links: [{ label: 'Israeli MOH Clinical Trials', url: 'https://www.health.gov.il/English/Topics/ClinicalTrials/Pages/default.aspx', comment: 'Israeli MOH — clinical trial authorisation; 3–6 month review for novel therapeutic programmes' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 3,
        text: 'Israeli MOH scientific advisory committees can address new gene editing modalities relatively quickly. Dedicated guidance for base editing and prime editing is not yet published — Israel follows a case-by-case scientific advice model. The National Council for Bioethics advises on novel modality governance. Israel adopted CRISPR guidance by analogy to existing gene therapy frameworks. Speed of guidance development is adequate but the system lacks dedicated gene editing expertise comparable to MHRA\'s Advanced Therapy team.',
        links: [{ label: 'National Bioethics Council Israel', url: 'https://www.health.gov.il/English/MinistryUnits/HealthCouncil/Pages/default.aspx', comment: 'Israeli National Bioethics Council — advises MOH on novel gene editing modalities' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 3,
        text: 'Clinical germline editing is prohibited under Israeli law (The Genetic Information Law and MOH regulations). Basic research on human embryos is permitted under ethics committee oversight, with a 14-day limit consistent with international standards. The National Bioethics Council has explicitly engaged with germline editing ethics — publishing a nuanced position that acknowledges the scientific distinction between disease prevention and enhancement applications. Israel\'s Jewish legal tradition (Halacha) includes progressive interpretations regarding medical interventions, providing some cultural space for eventual regulatory evolution.',
        links: [{ label: 'Israel Genetic Information Law', url: 'https://www.health.gov.il/English/Topics/Genetics/Pages/GeneticLaw.aspx', comment: 'Israeli Genetic Information Law — governs germline editing; basic research permitted; clinical prohibited' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 2,
        text: 'No dedicated regulatory pathway for longevity or aging gene editing applications exists in Israel. Aging-adjacent indications (progeria-like conditions, age-related macular degeneration, Duchenne) have been approved for Israeli clinical trials via standard gene therapy pathways. Weizmann Institute researchers have engaged with MOH on aging biology gene editing pre-submissions. A longevity-specific regulatory track would require explicit MOH policy action — not yet initiated but the scientific community and Innovation Authority are beginning to advocate for it.',
        links: [{ label: 'Weizmann Gene Editing Research', url: 'https://www.weizmann.ac.il/', comment: 'Weizmann — active aging gene editing research; pre-regulatory discussions with MOH underway' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 3,
        text: 'The Israel Innovation Authority (IIA, formerly Office of the Chief Scientist) operates programme-led R&D support with some mission-oriented challenge structures. The Magnet Programme funds industry-academia consortia on defined technology challenges. IIA\'s Accelerate programme has ARPA-like features — industry teams compete for milestone-based contracts. The model is not a full Programme Manager-led ARPA but is considerably more directed than traditional grant-making councils.',
        links: [{ label: 'Israel Innovation Authority', url: 'https://www.innovationisrael.org.il/en/', comment: 'IIA — Israel\'s primary technology and innovation funding agency; programme-led with challenge grants' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 2,
        text: 'IIA does not have an explicit longevity mandate. Precision medicine, digital health, and MedTech are stated IIA priorities; aging is a component of these areas but not a named programme. The Ministry of Innovation, Science, and Technology (established 2020) has a digital health focus but has not published longevity-specific targets. Israel Precision Medicine Partnership (IPMP) — a joint NCI/NIH-MOH initiative — addresses cancer but is increasingly relevant to aging biology. A formal longevity mandate for any Israeli agency is yet to emerge.',
        links: [{ label: 'Israel Precision Medicine Partnership', url: 'https://cancercontrol.cancer.gov/brp/sfrb/israel-precision-medicine-partnership', comment: 'IPMP — NCI-Israeli MOH precision medicine initiative; aging biology increasingly in scope' }],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 3,
        text: 'IIA provides non-dilutive grants and matching grants for industrial R&D. The R&D Grant Programme provides non-dilutive support covering up to 50% of approved R&D costs for biotech companies. MAGNET consortia (industry-academia) are funded with non-dilutive grants for pre-competitive research. BSF and BIRD Foundations provide non-dilutive bilateral grants with the US. Compared to EU or UK innovation funding, the non-dilutive envelope specifically for longevity is moderate.',
        links: [{ label: 'IIA R&D Grant Programme', url: 'https://www.innovationisrael.org.il/en/programs', comment: 'IIA — non-dilutive R&D grants for biotech; up to 50% of approved costs; longevity companies eligible' }],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 4,
        text: 'IIA R&D grants and Magnet consortia are non-dilutive for the academic side; the R&D Law framework lets developing companies retain IP when using government R&D support — strong performer-friendly terms versus many European innovation agencies. Challenge structure is more industrial than ARPA-H but encumbrance on foreground IP is typically manageable.',
        links: [{ label: 'IIA programmes', url: 'https://www.innovationisrael.org.il/en/programs', comment: 'Industrial R&D support — company IP retention under R&D Law' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 2,
        text: 'IIA challenge grants are formulated around technology domains (MedTech, digital health, agriculture biotech) rather than specific biological aging challenges. There are no Israeli challenge grants with quantified healthy lifespan or biological age targets. The IPMP precision medicine programme has disease-specific targets. Israel\'s challenge infrastructure is well-designed but has not yet been specifically directed at aging biology as a measurable national goal.',
        links: [{ label: 'IIA Challenge Programmes', url: 'https://www.innovationisrael.org.il/en/programs', comment: 'IIA — technology challenge programmes; MedTech and digital health focus; aging specificity lacking' }],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 3,
        text: 'Israeli MOH has a conditional approval mechanism (Temporary Marketing Authorisation) for drugs with significant unmet medical need that have received FDA or EMA approval. Conditional approvals come with confirmatory post-market requirements. A dedicated adaptive licensing framework comparable to MHRA\'s ILAP or FDA\'s Breakthrough Therapy designation does not yet exist — Israel relies primarily on reliance-based pathways referencing foreign conditional approvals rather than generating its own adaptive evidence.',
        links: [{ label: 'Israeli MOH Drug Registration', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/default.aspx', comment: 'Israeli MOH drug registration — conditional (temporary) authorisation pathway for unmet medical need' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 3,
        text: 'Israeli MOH can conduct rolling review of drug applications where submissions are received as data packages are completed — this is standard practice for priority drugs and was explicitly used during COVID vaccine evaluation. The Pfizer-Israel COVID vaccine effectiveness study demonstrated Israel\'s capacity for real-time drug evaluation using HMO data in parallel with regulatory review. A formalised rolling review programme outside of emergency use is in development.',
        links: [{ label: 'Israel COVID Vaccine Regulatory Pathway', url: 'https://www.health.gov.il/English/Topics/corona/Pages/default.aspx', comment: 'Israeli MOH COVID pathway — demonstrated rolling review capacity using Clalit HMO data' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 2,
        text: 'Israeli MOH accepts internationally validated surrogates (HbA1c, LDL, viral load) consistent with FDA and EMA precedent. For aging-specific endpoints, Israel follows international precedent rather than generating its own qualification decisions. Functional composites for geriatric indications are accepted on the basis of international guidelines. Proprietary aging biomarker surrogates (epigenetic clocks, proteomic age) are not yet part of Israeli regulatory guidance.',
        links: [{ label: 'Israeli MOH Guideline Adoption', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/default.aspx', comment: 'Israeli MOH — adopts ICH guidelines including endpoint acceptance frameworks; aging surrogates via international precedent' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 3,
        text: 'Israeli pharmacovigilance is managed by the Israeli Pharmacological Centre (IMPA) within the MOH. Post-market studies are required as conditions of temporary authorisations. HMO data (particularly Clalit) is increasingly used for post-market effectiveness evaluation — the COVID vaccine effectiveness study is the model. Confirmatory trial requirements are defined but enforcement mechanisms are less formalised than UK or US systems.',
        links: [{ label: 'Israeli Pharmacovigilance', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/pharmacovigilance.aspx', comment: 'Israeli MOH pharmacovigilance — post-market requirements; Clalit HMO increasingly used for RWE confirmation' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 3,
        text: 'Israel has a compassionate use pathway for pre-approval access to novel medicines through the MOH\'s special authorisation mechanism. The process is relatively streamlined — physicians apply to MOH with patient-specific justification and typically receive response within 2–4 weeks. Israel\'s HMOs include compassionate use medicines in their authorisations for serious conditions. The expanded access ecosystem is functional but lacks the systematic evidence-collection framework of UK\'s EAMS.',
        links: [{ label: 'Israeli MOH Compassionate Use', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/Compassionate_use.aspx', comment: 'Israeli MOH — compassionate use authorisation; 2–4 week process for pre-approval access' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 3,
        text: 'Israeli MOH accepts adaptive trial designs consistent with ICH E9(R1) and FDA/EMA guidance. Academic medical centres (Sheba, Hadassah, Ichilov) have biostatistics units capable of adaptive trial design and execution. Israel has participated in international adaptive platform trials (COVID, oncology). A dedicated adaptive design guidance document has not been published by Israeli MOH — it defers to international guidelines — but adaptive designs are routinely approved in practice.',
        links: [{ label: 'Sheba Clinical Trials Unit', url: 'https://www.shebaresearch.org/', comment: 'Sheba Medical Center — clinical trials unit with adaptive design capability; active platform trial participation' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'Clalit and Maccabi HMO data have been used as external control arms in published Israeli studies submitted to international journals and regulatory bodies. The Dagan et al. 2021 NEJM paper (COVID vaccine effectiveness using Clalit matched cohort design) established the methodological credibility of Israeli HMO data for synthetic control-equivalent analyses. Israeli MOH has accepted HMO-derived historical controls in case-by-case submissions for rare disease applications.',
        links: [{ label: 'Dagan et al NEJM Clalit', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2101765', comment: 'Dagan et al. NEJM 2021 — landmark Clalit HMO matched cohort; establishes Israeli RWD for regulatory-grade synthetic controls' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'Israel\'s small geography (the country is roughly the size of New Jersey) makes decentralised trial execution practical — home visits, community nurse sample collection, and telemedicine assessments are all feasible within modest travel distances. Israeli MOH has adapted to telemedicine-based participant monitoring during COVID. HMO digital health platforms (Clalit Digital, Maccabi Digital) provide infrastructure for remote participant monitoring in clinical trials.',
        links: [{ label: 'Maccabi Digital Health', url: 'https://www.maccabi4u.co.il/', comment: 'Maccabi Healthcare Services digital platform — remote monitoring infrastructure applicable to decentralised trial execution' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 2,
        text: 'Platform trial infrastructure in Israel is nascent. Sheba Medical Center\'s ARC Innovation has developed some platform-like multi-arm protocols in oncology and COVID, but there is no national platform trial programme. Israeli MOH handles master protocol submissions case-by-case without a dedicated expedited arm-addition procedure. Israel participates as a site in international platform trials (SOLIDARITY, REMAP-CAP) rather than leading them. National platform trial infrastructure is a gap.',
        links: [{ label: 'Israel SOLIDARITY Participation', url: 'https://www.health.gov.il/', comment: 'Israeli MOH — Israel participated in WHO SOLIDARITY COVID platform trial as national recruitment site' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 4,
        text: 'Israeli HMO data — Clalit (4.7M patients) and Maccabi (2.3M) — represent one of the world\'s richest real-world evidence sources. The Clalit COVID vaccine effectiveness study (Dagan et al., NEJM 2021) directly informed WHO and national regulatory decisions — demonstrating regulatory-grade RWE generation from Israeli population data. Israeli MOH now formally considers HMO-derived RWE in regulatory evaluations. Eran Segal\'s group (Weizmann) has used Clalit data to generate RWE for metabolic and aging interventions.',
        links: [{ label: 'Clalit Research Institute', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — primary RWE generation engine; data used in regulatory-grade international publications' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 3,
        text: 'Sheba Medical Center\'s ARC Innovation (Accelerate, Redesign, Collaborate) functions as Israel\'s most prominent informal regulatory sandbox — providing a structured environment for de novo clinical development of novel therapeutics, digital health, and AI diagnostics. The Israel Innovation Authority operates biotech accelerator programmes that provide a sandbox-like funded development track. The MOH has engaged in informal sandbox-style dialogues for novel MedTech. A formal statutory biotech regulatory sandbox does not yet exist.',
        links: [{ label: 'Sheba ARC Innovation', url: 'https://www.shebaresearch.org/arc-innovation/', comment: 'Sheba ARC — Israel\'s leading innovation hub; informal sandbox for clinical development of novel therapies' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 3,
        text: 'Sheba ARC Innovation explicitly covers drugs, biologics, gene therapies (CAR-T, gene correction), digital diagnostics, and AI-decision support tools. MOH special compassionate use and named patient pathways extend to novel ATMP modalities. Israeli biotech companies (Brainsway, InVivo Therapeutics, Kitov Pharma) have navigated Israeli regulatory approvals for novel modalities. Advanced gene therapies and cell therapy products can be developed in Israel\'s innovation ecosystem, though manufacturing scale-up capacity is limited.',
        links: [{ label: 'IIA Biotech Programme', url: 'https://www.innovationisrael.org.il/en/programs', comment: 'IIA biotech programmes — cover drugs, biologics, and digital health; ATMP-capable' }],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 3,
        text: 'Compassionate use and clinical trial patient eligibility in Israel is broad — HMO members have access to trials through their healthcare provider\'s ethics committees (Helsinki Committees). Seriously ill patients and prevention-focused indications both have routes into clinical development programmes. Healthy volunteer studies for longevity prevention are possible under Israeli institutional ethics frameworks though regulatory precedent for healthy-aging indications is limited.',
        links: [{ label: 'Israel Helsinki Committees', url: 'https://www.health.gov.il/English/Topics/ClinicalTrials/Pages/Helsinki.aspx', comment: 'Israeli Helsinki Committees — institutional ethics review for clinical trials including healthy volunteer studies' }],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 3,
        text: 'Israeli MOH compassionate use authorisations provide legal basis for physicians prescribing pre-approval medicines. Institutional ethics committee (Helsinki) approval provides procedural legal protection. Liability framework for innovative clinical programmes is defined under the Patient Rights Law (1996). The framework is adequate but lacks the specific sandbox legal protections of UK\'s EAMS MHRA Scientific Opinion — each programme is handled case-by-case rather than under a statutory safe harbour.',
        links: [{ label: 'Israeli Patient Rights Law', url: 'https://www.health.gov.il/English/Topics/RightsInHealth/Pages/default.aspx', comment: 'Patient Rights Law 1996 — legal framework for experimental treatment access; governs compassionate use liability' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 2,
        text: 'Aging-adjacent indications (frailty, sarcopenia, Alzheimer\'s, age-related macular degeneration) can access Israeli regulatory and compassionate use pathways. Pure longevity prevention programmes (targeting biological aging in healthy individuals) do not yet have regulatory precedent in Israel. Weizmann Institute aging biology groups have had informal discussions with MOH regarding aging endpoint clinical development. A dedicated longevity regulatory track would require MOH policy development — currently not initiated.',
        links: [{ label: 'Weizmann Institute Aging', url: 'https://www.weizmann.ac.il/', comment: 'Weizmann — aging biology groups engaged in pre-regulatory discussions for longevity endpoint clinical development' }],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'Israeli MOH follows FDA and EMA precedent on endpoint acceptance — accepting internationally validated surrogate and functional endpoints for geriatric indications. Aging-specific endpoints (epigenetic clocks, proteomic age, biological age composites) are used in Israeli academic research publications but are not yet formally accepted by Israeli MOH as regulatory endpoints. Israel\'s regulatory science capacity for endpoint qualification is limited — it imports international qualification decisions.',
        links: [{ label: 'Israeli MOH Guidelines', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/default.aspx', comment: 'Israeli MOH drug guidelines — follows ICH and FDA/EMA endpoint acceptance precedent' }],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 2,
        text: 'No formal Israeli aging biomarker qualification pathway exists. Israeli MOH would consider biomarker qualification submissions referencing international precedent (FDA, EMA, MHRA qualification decisions). The Clalit and Maccabi data are extraordinarily well-positioned to support aging biomarker reference population studies for qualification purposes, but this infrastructure has not been formally deployed for regulatory biomarker qualification. Academic use of Clalit for aging biomarker validation is extensive.',
        links: [{ label: 'Clalit Research Institute Biomarkers', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — uses HMO data for aging biomarker validation studies; regulatory qualification not yet pursued' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'Israeli MOH handles co-development of companion diagnostics alongside therapeutics case-by-case. No formal co-development pathway for aging endpoints and therapeutics exists. Weizmann Institute has internal biomarker-therapeutic co-development projects where aging biology measurements are developed alongside therapeutic programmes, but these operate within academic settings rather than under a specific regulatory framework.',
        links: [{ label: 'Weizmann Institute Translational', url: 'https://www.weizmann.ac.il/', comment: 'Weizmann — biomarker-therapeutic co-development in aging biology; pre-regulatory academic stage' }],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 4,
        text: 'Clalit Health Services\' longitudinal EHR database (4.7M patients, continuous from 1990s) is one of the world\'s best aging biomarker reference populations — with complete clinical trajectory, prescriptions, labs, hospitalisation, and mortality data. Eran Segal\'s computational group at Weizmann has published landmark aging reference studies using Clalit data (including biological age clocks from standard blood tests). The Israeli Biobank (under development) aims to add genomic depth. The data infrastructure is exceptional; formal biomarker qualification use remains underexploited.',
        links: [{ label: 'Segal Lab Weizmann', url: 'https://segallab.weizmann.ac.il/', comment: 'Segal Lab — landmark aging clock publications using Clalit HMO data; clinical biological age reference infrastructure' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 3,
        text: 'Clalit and Maccabi use standardised laboratory protocols across their provider networks — ensuring internal consistency in blood chemistry, CBC, and metabolic panel measurements that are critical for aging biomarker standardisation. Eran Segal\'s group published standardised biological age measurement protocols using Clalit standard labs (already collected). Weizmann epigenomics group uses standardised methylation measurement protocols. Israel contributes to international aging biomarker standardisation discussions through Weizmann\'s consortial participation.',
        links: [{ label: 'Clalit Data Standards', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — standardised lab and clinical measurement protocols across 4.7M patient network' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: { score: ScreeningLevel.PROACTIVE, text: 'All four Israeli HMOs (Clalit, Maccabi, Meuhedet, Leumit) run proactive CVD risk stratification programmes for adults 35+. Clalit\'s Diabetes and Cardiovascular Prevention Programme proactively contacts at-risk members by phone and sends invitation letters. Blood pressure, lipid profile, and smoking status are tracked and trigger automated clinical alerts for GPs. Israel\'s HMO model enables proactive prevention at a level matched by very few national health systems.', links: [{ label: 'Clalit Cardiovascular Prevention', url: 'https://www.clalit.co.il/en/Pages/default.aspx', comment: 'Clalit — proactive CVD prevention programme; automated risk stratification triggers GP contact' }] },
      [PopulationScreeningClaim.BREAST_CANCER]: { score: ScreeningLevel.PROACTIVE, text: 'Israel\'s National Breast Cancer Screening Programme (managed through HMOs) invites all women aged 50–74 by letter for biennial mammography. Clalit and Maccabi operate digital call-recall systems. Coverage is approximately 70%. AI-assisted mammography reading is being piloted. Israeli breast cancer screening is one of the most complete in the Middle East and comparable to top European programmes.', links: [{ label: 'Israeli MOH Breast Screening', url: 'https://www.health.gov.il/English/Topics/cancerScreening/Pages/Breast.aspx', comment: 'Israeli MOH — national breast screening programme; biennial mammography for all women 50–74' }] },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: { score: ScreeningLevel.PROACTIVE, text: 'HMOs proactively send FIT (fecal immunochemical test) kits by mail to members aged 50–74 on a biennial basis. Positive FIT triggers automatic colonoscopy scheduling. Clalit\'s colorectal cancer screening programme is fully digital with automated recall. Coverage ~65%. Israel adopted the FIT-based programme nationally — one of the earlier adopters in the region.', links: [{ label: 'Israeli MOH Colorectal Screening', url: 'https://www.health.gov.il/English/Topics/cancerScreening/Pages/Colorectal.aspx', comment: 'Israeli MOH — FIT-based colorectal screening; proactive HMO invitation every 2 years' }] },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: { score: ScreeningLevel.PROACTIVE, text: 'Israel\'s HMOs run proactive Pap smear / HPV co-testing invitation programmes for women aged 25–64. HPV primary screening is transitioning in as per European guidelines. Israel\'s national HPV vaccination programme (girls and boys since 2011) will progressively shift the cervical cancer burden, but the current screening programme remains proactive and digitally managed by HMOs.', links: [{ label: 'Israeli MOH Cervical Screening', url: 'https://www.health.gov.il/English/Topics/cancerScreening/Pages/Cervical.aspx', comment: 'Israeli MOH — proactive cervical screening; transitioning to HPV primary; HMO invitation system' }] },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: { score: ScreeningLevel.FUNDED_PASSIVE, text: 'AAA ultrasound screening is included in the Israeli National Health Basket for men aged 65+ at elevated risk. GP-initiated referral is the primary pathway — there is no proactive invitation letter programme equivalent to the UK\'s national AAA screening. Screening rates are moderate; awareness among GPs is high given explicit MOH guideline inclusion.', links: [{ label: 'Israeli National Health Basket', url: 'https://www.health.gov.il/English/Topics/Medicines/Pages/Health_Basket.aspx', comment: 'Israeli National Health Basket — includes AAA ultrasound for eligible men 65+; GP-initiated' }] },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: { score: ScreeningLevel.PROACTIVE, text: 'Clalit\'s Diabetes Prevention Programme uses risk algorithms on EHR data to identify pre-diabetic members and proactively contacts them for lifestyle interventions. HbA1c testing is included in annual health maintenance packages for adults 45+. Israel has one of the most technologically advanced proactive diabetes identification systems globally — driven by the quality of Clalit\'s longitudinal data and analytics capability.', links: [{ label: 'Clalit Diabetes Prevention', url: 'https://www.clalit.co.il/en/Pages/default.aspx', comment: 'Clalit — algorithm-driven proactive diabetes prevention; risk-stratified from EHR data' }] },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: { score: ScreeningLevel.FUNDED_PASSIVE, text: 'DEXA scanning for osteoporosis is covered by the National Health Basket for women 65+ and high-risk groups. GP-initiated on clinical risk assessment (FRAX equivalent). Fracture Liaison Services exist at major academic hospitals. No proactive population invitation programme — relies on GP opportunistic assessment during annual health maintenance visits.', links: [{ label: 'Israeli Osteoporosis Screening', url: 'https://www.health.gov.il/', comment: 'Israeli MOH — DEXA covered in National Health Basket; GP-initiated for eligible women' }] },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: { score: ScreeningLevel.COST_SHARING, text: 'Low-dose CT lung cancer screening is not part of the Israeli National Health Basket. Some HMOs offer it as a supplemental (Mashov) service with partial cost sharing. Israeli academic hospitals (Sheba, Ichilov) have lung cancer CT screening programmes for high-risk patients but these are not nationally proactive. Policy discussion is active given NELSON trial evidence; national adoption has not yet occurred.', links: [{ label: 'Israeli MOH Cancer Screening', url: 'https://www.health.gov.il/English/Topics/cancerScreening/Pages/default.aspx', comment: 'Israeli MOH cancer screening — lung CT not yet in National Health Basket; under active policy review' }] },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: { score: ScreeningLevel.FUNDED_PASSIVE, text: 'AF detection is recommended by Israeli cardiology guidelines as opportunistic screening during primary care visits for patients over 65. HMOs include pulse rhythm assessment in annual health maintenance examinations. Wearable device-based AF detection (Apple Watch, KardiaMobile) is increasingly used but not systematically integrated into HMO clinical workflows. No proactive national invitation programme exists for AF.', links: [{ label: 'Israeli Heart Society AF Guidelines', url: 'https://www.heart.org.il/', comment: 'Israeli Heart Society — AF screening recommendations; opportunistic at primary care visits' }] },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: { score: ScreeningLevel.FUNDED_PASSIVE, text: 'Israeli HMOs include cognitive assessment (MMSE, MoCA) as part of annual health maintenance for patients 70+. GP-initiated cognitive screening is incentivised through HMO quality metrics. Memory clinics at academic hospitals are well-established. No proactive population-wide invitation for cognitive screening. The PREVENT Dementia-equivalent Israeli research programme (IYCAR — Israeli Consortium for Alzheimer Research) conducts research-based mid-life screening.', links: [{ label: 'IYCAR Alzheimer Research', url: 'https://www.health.gov.il/', comment: 'Israeli Consortium for Alzheimer Research — mid-life cognitive screening cohort studies' }] },
      [PopulationScreeningClaim.POLYGENIC_RISK]: { score: ScreeningLevel.COST_SHARING, text: 'Israel\'s unique population genetics — multiple distinct founder populations (Ashkenazi, Sephardi, Mizrahi, Ethiopian, Arab Israeli) with known disease-associated variants — makes PRS particularly powerful and clinically actionable. Israeli genome studies (e.g. Carmi et al.) have characterised population-specific variants. Clalit and Maccabi are piloting PRS return to patients. National PRS programme is in pilot phase; carrier screening for founder variants (BRCA, GBA, etc.) is already proactively offered through HMOs.', links: [{ label: 'Israeli Population Genomics', url: 'https://www.haplogenomics.com/', comment: 'Israeli genomics — unique founder population structure; PRS clinically powerful; national programme in pilot phase' }] },

      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: 3,
        text: 'Israeli HMOs include physical function assessments in annual health maintenance for older adults (65+). Clalit\'s geriatric protocols include muscle-strength testing (grip dynamometry) and walking speed as part of frailty assessments. DEXA is available through HMO referral for osteoporosis, and some geriatricians extend it to muscle mass.',
        links: [{ label: 'Clalit Research Institute – Geriatric Frailty Data', url: 'https://clalitresearch.org/', comment: 'Clalit Institute publishes sarcopenia prevalence and trajectory data from HMO cohorts' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: 3,
        text: 'No national population screening programme. Israeli HMOs provide funded home sleep testing on clinical referral; high-risk patients (hypertension, metabolic syndrome, obesity) are typically screened by GP or relevant specialist. HMO integration enables faster referral pathways than fragmented systems.',
        links: [{ label: 'Israeli Society of Pulmonology', url: 'https://www.pulmonology.org.il/', comment: 'OSA guidelines and referral standards within Israeli HMOs' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 3,
        text: 'The Israeli Health Basket (Sal Briut) is updated annually by a statutory committee using explicit cost-effectiveness criteria. New screening programmes enter via Health Basket Committee, which reviews submissions and makes decisions within one annual cycle (typically 6–12 months). Pilots can be run through HMO research arms and feed directly into the next annual cycle.',
        links: [{ label: 'Israeli Health Basket Committee', url: 'https://www.health.gov.il/English/Topics/InsuranceLaws/Pages/health_basket.aspx', comment: 'Annual Health Basket — 6–12 month evidence-to-decision cycle' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 3,
        text: 'Israel does not have a large opt-in research biobank comparable to UK Biobank. However, HMO membership is near-universal (98%+ of Israelis covered), and routine clinical data is accumulated continuously under broad healthcare consent. The Israeli Biobank (National Biobank) was established at Sheba Medical Center — aiming for 200k participants with biological samples. Clalit Research Institute operates under its own IRB-approved data access framework covering research use of HMO records.',
        links: [{ label: 'Israel National Biobank', url: 'https://www.shebaresearch.org/', comment: 'Israeli National Biobank at Sheba Medical Center — 200k participant target with biological sample collection' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 4,
        text: 'Continuous clinical EHR data collection is a defining feature of Israeli HMO data. Clalit patients have annual blood tests as part of mandatory preventive health examinations — creating effectively continuous longitudinal sampling every 1–2 years for standard biochemistry and CBC. Research biobank resampling is more limited — Israeli National Biobank is new. The continuous EHR-based data stream is unusually dense for a general population.',
        links: [{ label: 'Clalit Research Institute Data', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — continuous annual blood test data; longitudinal from 1990s for 4.7M patients' }],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 3,
        text: 'Standard clinical biochemistry (CBC, metabolic panel, lipids, glucose, thyroid, liver function) is available for nearly all Clalit and Maccabi members longitudinally. Genomics is being added through the National Biobank and specific research programmes. Eran Segal\'s group demonstrated that standard blood test variables can compute biological age clocks with high predictive validity — making the clinical lab panel itself a source of aging biomarker data. Multi-omic (proteomics, metabolomics, epigenetics) at population scale is not yet achieved.',
        links: [{ label: 'Segal Lab Aging Clocks from Blood Tests', url: 'https://segallab.weizmann.ac.il/', comment: 'Segal Lab Weizmann — developed biological age clocks from standard clinical blood tests in Clalit cohort' }],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 5,
        text: 'Israeli HMO data is the world\'s gold standard for clinical linkage depth. Clalit Health Services maintains a fully integrated longitudinal clinical record for 4.7M patients including: GP visits, hospital admissions, specialist referrals, prescriptions, lab results, imaging, mental health contacts, and mortality — continuously updated since the 1990s. This is genuine cradle-to-grave data with no gaps for hospital-only episodes. The linkage completeness is unrivalled: a researcher can trace the full health trajectory of a patient from birth to death within a single, consistently structured database.',
        links: [{ label: 'Clalit Research Institute', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — 4.7M patient fully-integrated lifetime EHR; world-class clinical linkage depth' }],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 4,
        text: 'Clalit Research Institute processes external researcher applications with typical review in 4–6 weeks. International collaborations are well-established — major publications in NEJM, Lancet, and Nature have used Clalit data with international co-authors. Maccabi Health Services has a similar research access programme. Researchers must sign data access agreements and work within a secure analysis environment. The process is streamlined relative to European alternatives, though less automated than UK Biobank\'s fully digital application pipeline.',
        links: [{ label: 'Clalit Research Access', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — external researcher access programme; international collaborations routinely approved' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 4,
        text: 'Israel\'s HMO infrastructure enables highly efficient clinical trial execution. HMOs can identify, contact, and enrol eligible patients from their electronic records — Clalit demonstrated this during COVID with the world\'s first large-scale vaccine effectiveness study assembled within weeks (Dagan et al., NEJM). Small geography means multi-site logistics are minimal. Israel\'s Trial Management Organisation (Israel Clinical Trials) and Sheba\'s CRO function provide professional trial coordination. Efficiency is high; scale is limited by the 9.7M national population.',
        links: [{ label: 'Dagan COVID Vaccine NEJM', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2101765', comment: 'Dagan et al. NEJM 2021 — demonstrates world-class Israeli HMO trial efficiency; assembled in weeks from Clalit EHR' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 4,
        text: 'Israeli MOH formally accepted HMO-derived RWE from Clalit and Maccabi in COVID vaccine regulatory evaluations — a precedent with lasting implications. The Dagan et al. NEJM study directly informed Israeli MOH booster dose decisions and was cited in WHO and FDA decision-making globally. Israeli MOH is now developing a formal framework for HMO RWE in regulatory submissions, following the COVID proof of concept.',
        links: [{ label: 'Israeli MOH RWE Framework', url: 'https://www.health.gov.il/', comment: 'Israeli MOH — HMO RWE accepted post-COVID; formal framework for regulatory submissions in development' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 2,
        text: 'Eran Segal\'s group has published aging endpoint studies using Clalit data (biological age clocks, metabolic aging trajectories). Weizmann Institute aging intervention research includes epigenetic clock measurements. However, formal clinical trials in Israel with pre-specified biological aging endpoints accepted by the Israeli MOH as primary or secondary registration endpoints are not yet established. This remains in academic rather than regulatory territory.',
        links: [{ label: 'Segal Lab Aging Research', url: 'https://segallab.weizmann.ac.il/', comment: 'Segal Lab — aging endpoint research using Clalit; biological age clocks from standard clinical measurements' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 2,
        text: 'Academic aging intervention studies are active in Israel: Weizmann Institute\'s hyperbaric oxygen trial (Shai Efrati, 2021) reported telomere lengthening and senescent cell clearance — generating significant international attention though methodology is debated. Weizmann groups are pursuing rapamycin and NAD precursor pilot studies. Phase II aging prevention trials with formal regulatory registration are not yet established. Israeli biotech (Leucid Bio, TwoXAR Israel) is working on aging-adjacent therapeutics.',
        links: [{ label: 'Efrati Hyperbaric Aging Trial', url: 'https://doi.org/10.18632/aging.202659', comment: 'Efrati et al. Aging 2021 — Israeli hyperbaric oxygen aging trial; telomere and senescent cell endpoints' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 2,
        text: 'Israel does not have a dedicated national aging trial coordination body. The Israeli Society of Gerontology and Geriatrics, the Weizmann Institute, and Sheba\'s ARC Innovation provide informal coordination. Israel Precision Medicine Partnership (IPMP) provides some coordination infrastructure for precision medicine trials. A formal aging trial network with standardised endpoints and multi-site coordination protocol would represent a significant advancement over the current ad-hoc model.',
        links: [{ label: 'Israeli Society Gerontology', url: 'https://www.gerontology.org.il/', comment: 'Israeli Society of Gerontology — informal coordination for clinical aging research; no formal national trial network' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 4,
        text: 'Israel\'s HMO infrastructure gives uniquely efficient patient trial access. Clalit Research Institute can identify trial-eligible patients from 4.7M members within days using EHR criteria. COVID-19 vaccine efficacy studies enrolled matched HMO cohorts in near real-time. The HMO model means patient-trial matching is feasible at population scale.',
        links: [
          { label: 'Clalit Research Institute', url: 'https://clalitresearch.org/', comment: 'HMO-based patient identification; COVID vaccine study assembled matched cohorts in days' },
        ],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 2,
        text: 'Israeli MOH does not formally recognise aging as an indication. Organ-specific aging indications (frailty, age-related macular degeneration, Alzheimer\'s) are accepted. Israeli academic dialogue on systemic aging as an indication is growing — Weizmann Institute researchers participate in international meetings where this is debated. Policy action from MOH on aging as an indication is not yet on the near-term horizon.',
        links: [{ label: 'Israeli MOH Drug Indications', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/default.aspx', comment: 'Israeli MOH drug registration — disease-specific indications; systemic aging not yet recognised' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 2,
        text: 'Israeli MOH follows international precedent: functional composites (grip, gait, SPPB) accepted for geriatric indications; biological age surrogates used in academic research but not yet formally accepted in regulatory submissions. The rich Clalit data environment could support rapid endpoint qualification if the regulatory science capacity were directed toward aging biomarker acceptance — this is an underexploited opportunity.',
        links: [{ label: 'Israeli MOH Regulatory Guidelines', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/default.aspx', comment: 'Israeli MOH — follows ICH endpoint acceptance; aging biomarker surrogates not yet formally qualified' }],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 1,
        text: 'Israel\'s Health Technology Assessment body (MOH technology assessment unit) uses QALYs as standard. No explicit guidance for healthspan valuation or morbidity compression has been published. Israeli HTA is less developed as a formal discipline than NICE or IQWIG. The concept of valuing aging prevention as an economic outcome is not embedded in Israeli healthcare economic frameworks.',
        links: [{ label: 'Israeli MOH HTA', url: 'https://www.health.gov.il/', comment: 'Israeli MOH — HTA uses standard QALY; no healthspan-specific valuation framework published' }],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 3,
        text: 'Israel\'s National Health Basket update process (annual committee decision) is relatively accessible for novel prevention agents. Statins for broad cardiovascular prevention, bone anti-resorptives for osteoporosis prevention, and other aging-adjacent preventive agents are in the Basket. An aging geroprotector that obtained international regulatory approval would have a plausible route to Health Basket inclusion through the annual assessment process, particularly if HMO data could support cost-effectiveness demonstration.',
        links: [{ label: 'Israel National Health Basket', url: 'https://www.health.gov.il/English/Topics/Medicines/Pages/Health_Basket.aspx', comment: 'National Health Basket — annual update; prevention agents eligible; HMO data supports cost-effectiveness analysis' }],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 2,
        text: 'Israeli MOH expedited review is available for drugs that received FDA or EMA approval under accelerated pathways — reliance-based acceleration rather than domestically generated expedited review. A drug approved by FDA under Breakthrough Therapy designation would receive expedited Israeli MOH review (typically 6–12 months vs. standard 18–24 months). No domestic Israeli designation equivalent to Breakthrough Therapy or PRIME for aging agents exists.',
        links: [{ label: 'Israeli MOH Priority Review', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/default.aspx', comment: 'Israeli MOH — priority review for FDA/EMA Breakthrough-designated drugs; reliance-based acceleration' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 4,
        text: 'Clalit Research Institute and Maccabi Health Services both have structured research access processes — online applications, standard data access agreements, and IRB approval — with typical review timelines of 4–6 weeks. International researchers have accessed Clalit data for major published studies. The process is not as automated as UK Biobank\'s digital pipeline but is significantly faster and less bureaucratic than most European national health data systems. Privacy Protection Authority (PPA) oversight is proportionate.',
        links: [{ label: 'Clalit Research Institute', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — external researcher access; 4–6 week review; international collaborations approved' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 4,
        text: 'Within Clalit Health Services, data linkage is exceptionally comprehensive: GP records, specialist visits, hospital admissions, emergency visits, lab results, prescriptions, imaging, and mortality are all linked via Israeli national ID number. Maccabi achieves similar within its own system. Cross-HMO linkage is possible for national research through the MOH National Health Information System but requires additional governance approval. The within-HMO linkage depth is world-class.',
        links: [{ label: 'Israel National Health Information System', url: 'https://www.health.gov.il/English/MinistryUnits/HealthInformationDivision/Pages/default.aspx', comment: 'Israeli MOH NHIS — enables cross-HMO data linkage for national research; national ID-based' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 4,
        text: 'Israel has a Privacy Protection Law (equivalent to GDPR in scope) and Privacy Protection Authority. HMO research data is pseudonymised for researcher access. Clalit and Maccabi operate secure research data environments where analysis occurs on pseudonymised datasets with disclosure controls. Privacy law compliance is strong; the technical infrastructure (secure analysis environment) is well-developed but not yet at OpenSAFELY\'s code-to-data standard.',
        links: [{ label: 'Israeli Privacy Protection Authority', url: 'https://www.gov.il/en/departments/the-privacy-protection-authority', comment: 'Israeli PPA — GDPR-equivalent oversight; HMO research data access governed by privacy law' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 4,
        text: 'Israel is a global leader in health AI, particularly AI diagnostics. Clalit and Maccabi have approved AI research partnerships with Intel, Google Health, IBM Research, and multiple Israeli health AI startups (Zebra Medical Vision, Aidoc, Medial EarlySign). The MOH has published an AI in Healthcare policy framework. IRB approval for AI research on HMO data is well-established. Israeli health AI is a mature field with functioning governance — Zebra Medical Vision\'s FDA-cleared algorithms were developed on Clalit data.',
        links: [{ label: 'Zebra Medical Vision Clalit', url: 'https://www.zebra-med.com/', comment: 'Zebra Medical Vision — AI algorithms trained on Clalit data; FDA-cleared; proof of Israeli health AI governance maturity' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 3,
        text: 'Israel has data sharing agreements facilitating research collaboration with US institutions (IPMP, BSF-funded research) and European institutions. Israeli privacy law is broadly compatible with GDPR, enabling data sharing with EU researchers. Security considerations (some Israeli health data is subject to national security classification) can add friction for cross-border sharing of certain datasets. The US-Israel Data Access Agreement is in active use for NCI-IPMP collaborations.',
        links: [{ label: 'US-Israel IPMP Data Sharing', url: 'https://cancercontrol.cancer.gov/brp/sfrb/israel-precision-medicine-partnership', comment: 'IPMP — US-Israel precision medicine data sharing framework; NCI and Israeli MOH bilateral agreement' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 5,
        text: 'Israel\'s HMO-based health system achieves near-100% EHR coverage — every Israeli citizen is registered with one of four HMOs, all of which have been fully electronic since the 1990s (Clalit since 1999, Maccabi since 1997). HealthIL (the national health information exchange established in 2019) enables cross-HMO data exchange. Israel effectively has universal EHR coverage from birth — a structural advantage that even leading Nordic countries have only recently achieved.',
        links: [{ label: 'HealthIL National Exchange', url: 'https://healthil.gov.il/', comment: 'HealthIL — Israeli national health information exchange; enables cross-HMO and hospital data linkage' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 3,
        text: 'Israeli HMOs use ICD-10 coding for diagnoses; HL7 messaging for inter-system communication. SNOMED CT adoption is progressing — MOH is driving SNOMED CT implementation across HMOs and hospitals as part of the national digital health strategy. FHIR R4 compliance is at earlier stages — HealthIL is building FHIR-based APIs but adoption is incomplete. The journey to full SNOMED/FHIR compliance is underway but not yet complete.',
        links: [{ label: 'Israeli Digital Health Strategy', url: 'https://www.gov.il/en/departments/policies/digital_health_policy', comment: 'Israeli national digital health strategy — SNOMED CT and FHIR adoption roadmap for HMOs' }],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 4,
        text: 'Israel maintains comprehensive national registries: National Cancer Registry (complete since 1960), Population Registry (births, deaths, marriages via national ID), Hospital Registry (all inpatient admissions), Dialysis Registry, and Congenital Anomalies Registry. MOH electronic national registries are linked via national ID. Rare disease registries are developing. The completeness of core registries is excellent; rare disease and subspecialty registries lag behind Nordic standards.',
        links: [{ label: 'Israeli National Cancer Registry', url: 'https://www.health.gov.il/English/MinistryUnits/NCR/Pages/default.aspx', comment: 'Israeli National Cancer Registry — complete since 1960; one of oldest continuous cancer registries globally' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 4,
        text: 'HMO data is updated continuously for clinical purposes — EHR events are recorded in real-time. Research datasets from Clalit and Maccabi are refreshed annually for external researchers but can be assembled more rapidly for approved studies (demonstrated in the COVID weeks-to-dataset turnaround). Population registry data has 1–2 month lag for death certificates. The data freshness is excellent by European standards.',
        links: [{ label: 'Clalit Research Data Freshness', url: 'https://clalitresearch.org/', comment: 'Clalit Research — continuous real-time EHR capture; research datasets assembled rapidly for approved studies' }],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 4,
        text: 'Clalit Research Institute has developed validated computable phenotyping algorithms for hundreds of conditions using ICD codes, drug prescription patterns, and lab values. These algorithms are used for cohort identification in published studies. Eran Segal\'s group has created machine-learning-based phenotype algorithms for metabolic conditions and biological age from standard clinical data. External researchers can request pre-built cohort definitions from Clalit analytics teams. The computable phenotyping capacity is mature if not as formally catalogued as UK\'s HDR UK Phenotype Library.',
        links: [{ label: 'Clalit Analytics', url: 'https://clalitresearch.org/', comment: 'Clalit Research Institute — validated ICD-based phenotyping algorithms; ML-enhanced cohort identification' }],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 3,
        text: 'Some OMOP CDM mapping of Israeli HMO data has been conducted for international research collaborations (OHDSI network). Clalit participates in EHDEN (European Health Data Evidence Network). HL7 FHIR is being adopted nationally. Ontology harmonisation is in progress — Israel is moving toward shared standards but full OMOP/FHIR implementation across all HMOs and hospitals is not yet complete. Individual research projects successfully bridge Israeli HMO data to international standards through custom mapping.',
        links: [{ label: 'OHDSI Israel', url: 'https://www.ohdsi.org/', comment: 'OHDSI — Clalit HMO data mapped to OMOP CDM for international network research' }],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 4,
        text: 'Research cohort linkage to HMO clinical data in Israel is structurally robust. Participants in Israeli research cohorts (Weizmann nutrition study, Israeli gut microbiome cohort) are routinely linked to their full Clalit or Maccabi EHR via national ID with appropriate consent and IRB approval. Long-term follow-up through HMO records is effectively automatic — a feature that is unique to health systems with universal electronic HMO membership.',
        links: [{ label: 'Elinav Microbiome Study Clalit Linkage', url: 'https://doi.org/10.1016/j.cell.2015.11.001', comment: 'Elinav et al. Cell 2015 — Weizmann research cohort linked to Clalit EHR; landmark example of Israeli cohort-HMO linkage' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 3,
        text: 'ISF requires data management plans for funded research. Israeli journals increasingly require data availability statements. Weizmann Institute has adopted FAIR data principles for published datasets. However, a national mandate with automated compliance audit (comparable to UKRI) does not exist. Data sharing in practice depends on researcher initiative rather than institutional enforcement. Cultural norms around open science are developing — better than many countries but below UK or Netherlands standards.',
        links: [{ label: 'ISF Data Management', url: 'https://www.isf.org.il/', comment: 'ISF — data management plans required; FAIR principles encouraged for publicly funded research' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 4,
        text: 'Israeli pharmacovigilance is a global model for HMO-enabled signal detection. COVID vaccine adverse events (VITT with AstraZeneca, myocarditis with mRNA vaccines) were first identified or rapidly confirmed in Israel using Clalit and Maccabi data — directly informing WHO, FDA, and EMA decisions. The Israeli MOH built a real-time vaccine safety monitoring dashboard during COVID. This demonstrated the fastest signal-to-regulatory-feedback loop of any national system during COVID.',
        links: [{ label: 'Israeli MOH Vaccine Safety Monitoring', url: 'https://www.health.gov.il/English/Topics/corona/Pages/vaccine-safety.aspx', comment: 'Israeli MOH — HMO-based real-time vaccine safety monitoring; world-first myocarditis signal identification' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 3,
        text: 'ISF and major Israeli universities encourage open access publication. Weizmann Institute has an institutional open access policy. Trial registration on ClinicalTrials.gov is required for MOH approval. Results reporting mandates are less stringent than UK or US — some Israeli trial results remain unpublished. Open science culture is improving but enforcement mechanisms (funding consequences for non-compliance) are not yet in place at national scale.',
        links: [{ label: 'ISF Open Science Policy', url: 'https://www.isf.org.il/', comment: 'ISF — open access publication encouraged; trial registration required for MOH approval' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 3,
        text: 'Israeli MOH accepts ICH E5-compliant trial data from partner countries as primary evidence. No domestic replication of foreign trial data is required for drugs approved by FDA or EMA. ICH membership ensures harmonised data acceptability. Israel is a small market — most regulatory submissions are based on foreign trial data with Israeli efficacy/safety supplement rather than domestically generated primary evidence.',
        links: [{ label: 'Israeli MOH ICH Compliance', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/default.aspx', comment: 'Israeli MOH — ICH E5 compliance; foreign trial data accepted as primary evidence' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 2,
        text: 'Israel does not participate in Project Orbis, the Access Consortium, or EMA committee joint reviews as a formal member. Israel participates in ICMRA (International Coalition of Medicines Regulatory Authorities) as an associated member. Informal bilateral scientific exchange occurs with FDA and MHRA. Israel\'s regulatory system is well-respected but geographically and politically somewhat isolated from the major international joint review programmes. Association with EMA joint review would require special bilateral agreement.',
        links: [{ label: 'ICMRA Israel', url: 'https://www.icmra.info/', comment: 'ICMRA — Israel is an associated member; participates in international regulatory science working groups' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 3,
        text: 'Israel is a full ICH member, having joined in 2016. All major ICH guidelines are adopted by Israeli MOH. Israel participates in ICH Expert Working Group discussions. Regulatory standards are well-aligned with global norms. Israel does not chair ICH working groups (relatively new member) but actively implements and provides scientific input to standards development.',
        links: [{ label: 'Israel ICH Membership', url: 'https://www.ich.org/', comment: 'Israel — full ICH member since 2016; all ICH guidelines adopted by Israeli MOH' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'Israeli MOH has a formal Reliance Procedure: drugs approved by FDA or EMA (or a small list of other trusted regulators including TGA, Health Canada) can receive Israeli marketing authorisation within 90 days of application based on the foreign approval package — without requiring independent Israeli clinical evaluation. This pathway is widely used and has significantly accelerated Israeli drug access. The reliance scope is among the broadest of any non-G7 health authority.',
        links: [{ label: 'Israeli MOH Reliance Procedure', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/MoHregistration.aspx', comment: 'Israeli MOH — 90-day reliance approval based on FDA/EMA authorisation; among broadest non-G7 reliance scopes' }],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 3,
        text: 'Israel has bilateral GMP inspection recognition with EU countries and FDA via ICH Q10 standard. Some bilateral MRAs for specific product categories exist. Israel is not part of a multilateral regulatory recognition agreement (not EU, not Access Consortium). Israeli GMP inspections are internationally respected — Teva\'s global manufacturing sites are jointly inspected. Full multilateral reciprocal recognition remains limited by Israel\'s political situation with some trading partners.',
        links: [{ label: 'Israeli MOH GMP Inspection', url: 'https://www.health.gov.il/English/Topics/Drugs/Pages/GMP.aspx', comment: 'Israeli MOH GMP — bilateral inspection recognition with FDA and EU countries; ICH Q10 compliant' }],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'Israel Institute for Biological Research (IIBR, Nes Ziona) maintains BSL-4 capability — one of relatively few in the Middle East. Academic BSL-3 facilities exist at Hebrew University, Tel Aviv University, and Ben-Gurion University. IIBR\'s facilities are primarily government/defence-focused with limited academic access protocols. For longevity-relevant infectious aging research, Israeli academic BSL-3 is adequate; BSL-4 access for civilian researchers requires special arrangements.',
        links: [{ label: 'IIBR Biological Research', url: 'https://www.iibr.gov.il/', comment: 'Israel Institute for Biological Research — BSL-4 capable; primarily government; academic access limited' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 2,
        text: 'Israeli GMP capacity for ATMPs (gene and cell therapy) is limited. There is no major commercial CDMO in Israel specialising in gene therapy manufacturing — Israeli biotech companies requiring GMP ATMP production typically contract EU or US CDMOs. Hadassah Hospital has an academic GMP unit for early-phase cell therapy (CAR-T) production. Kibbutz-based agricultural biotechnology infrastructure is strong but not ATMP-relevant. Building domestic ATMP GMP capacity is an acknowledged priority for the Israeli biotech ecosystem.',
        links: [{ label: 'Hadassah GMP Cell Therapy', url: 'https://www.hadassah.org.il/', comment: 'Hadassah Hospital GMP unit — academic cell therapy manufacturing for early clinical trials' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 3,
        text: 'Israeli National Infrastructure for High Performance Computing (operated by IUCC) serves academic institutions. Weizmann Institute has dedicated HPC clusters for computational biology and AI workloads — among the best in the Middle East. Ben-Gurion University\'s AI centre and Technion\'s data science labs add compute capacity. Israel has a strong AI sector (Intel Mobileye, Google AI Israel, Meta AI Tel Aviv, Amazon AWS research) providing spillover compute access for academic collaborators. National health data AI compute infrastructure is developing through MOH digital health investments.',
        links: [{ label: 'IUCC High Performance Computing', url: 'https://www.iucc.ac.il/en/', comment: 'IUCC — Israeli national academic HPC network; Weizmann Institute cluster serves longevity biology computing needs' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 3,
        text: 'Weizmann Institute Genomics Core provides next-generation sequencing services at research scale. Hebrew University, Tel Aviv University, and Hadassah Hospital have sequencing facilities. The Israeli Genome Project sequenced approximately 30k whole genomes covering diverse Israeli founder populations. For a nation of 9.7M, sequencing capacity is adequate for research programmes but not at population-scale deployment (Genomics England equivalent). National Biobank at Sheba will add sequencing scale systematically.',
        links: [{ label: 'Weizmann Genomics Core', url: 'https://www.weizmann.ac.il/core-facilities/NGS', comment: 'Weizmann Institute NGS Core — research-scale whole genome sequencing; Israeli Genome Project partner' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 3,
        text: 'Weizmann Institute maintains C. elegans, Drosophila, and mouse model organism platforms for aging research — Oded Rechavi\'s C. elegans work on transgenerational epigenetics is globally recognised. Hebrew University has shared mouse facilities. Israel\'s model organism infrastructure is well-suited for hypothesis-generation aging research. Shared access protocols for external academic researchers exist at Weizmann. The scale is appropriate for a research institution rather than a national shared infrastructure programme (no ITP equivalent).',
        links: [{ label: 'Rechavi Lab Weizmann', url: 'https://www.weizmann.ac.il/LS/RechavLab/', comment: 'Rechavi Lab — Weizmann C. elegans aging platform; transgenerational epigenetic inheritance research' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 4,
        text: 'Israel participates actively in major international aging and genomics consortia: CHARGE (CVD and aging genome associations), GIANT, the Global Burden of Disease Study, and multiple Alzheimer\'s disease consortia. Weizmann Institute researchers are co-investigators in dozens of international research consortia. The Elinav-Segal nutrition and microbiome research generated one of the most widely cited aging-adjacent papers of the decade (Zeevi et al., Cell 2015). Israeli teams are core contributors to, and increasingly lead, major international aging biology collaborations.',
        links: [{ label: 'Zeevi et al Cell 2015', url: 'https://doi.org/10.1016/j.cell.2015.11.001', comment: 'Zeevi et al. Cell 2015 — personalized nutrition from gut microbiome; Israeli-led international aging biology landmark paper' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 4,
        text: 'Clalit Research Institute has established data sharing frameworks enabling international collaborations — the COVID vaccine effectiveness work (Dagan et al.) was a collaboration between Clalit, Harvard, and Pfizer. Maccabi has co-published with European and US institutions. Israeli HMO data has been shared internationally for precision medicine research (IPMP with NCI). Data sharing frameworks are functional and internationally trusted, though less formally institutionalised than UK Biobank\'s open access model.',
        links: [{ label: 'Clalit International Collaborations', url: 'https://clalitresearch.org/', comment: 'Clalit Research — international data sharing; Harvard, Pfizer, NCI collaborations established' }],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 4,
        text: 'Israel has an exceptional bilateral research funding portfolio: BSF (US-Israel Binational Science Foundation, ~$30M/year), BIRD (US-Israel industrial R&D, ~$25M/year), GIF (German-Israeli Foundation), MINERVA (German-Israeli), and ISF-NRF (Israel-South Korea). Israel is an associated country in Horizon Europe since 2024 — restoring access to ERC grants and Horizon collaborations. The diversity and volume of bilateral research funding programmes exceeds most comparably-sized nations.',
        links: [{ label: 'BSF US-Israel Binational Foundation', url: 'https://www.bsf.org.il/', comment: 'BSF — $30M/year US-Israel bilateral research funding; aging biology is a supported theme' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 4,
        text: 'Weizmann Institute\'s global scientific impact is extraordinary relative to Israel\'s size. Key field-defining aging biology contributions: Oded Rechavi (transgenerational epigenetic inheritance in C. elegans — challenges central dogma), Eran Segal (computational aging clocks, personalised nutrition and aging), Eran Elinav (gut microbiome in aging and immunity), Yosef Yarden (growth factor receptor biology and aging), Amos Tanay (epigenetic aging landscapes). Israel generates a disproportionate volume of high-impact aging biology research per capita.',
        links: [{ label: 'Rechavi Transgenerational Epigenetics', url: 'https://www.weizmann.ac.il/LS/RechavLab/', comment: 'Rechavi Lab — transgenerational epigenetic inheritance in aging; field-defining work in Nature and Cell' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 5,
        text: 'Israel\'s technology transfer ecosystem generates more patents per researcher than almost any nation globally. Yeda Research and Development (Weizmann TTO) is consistently ranked among the world\'s most productive TTOs — Copaxone alone generated over $20B in global sales. Ramot (Tel Aviv) and T3 (Technion) are internationally active. Israel is a PCT member with active international patent filing. Israeli aging biology patents (from Weizmann senescence, Segal aging clocks, Elinav microbiome) are actively licensed to international pharma. The commercialisation infrastructure is a genuine world benchmark.',
        links: [{ label: 'Yeda Revenue and Patents', url: 'https://www.yeda.org/', comment: 'Yeda — $2B+ cumulative licensing revenue; most productive TTO per researcher globally; active aging biology portfolio' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {

      [SocialReadinessClaim.PUBLIC_TRUST_CLINICAL_SYSTEM]: {
        score: 5,
        text: '2020–2021 COVID campaign: fastest proportional full-vaccination rollout globally — a hard benchmark of mass trust in the health system and front-line delivery.',
        links: [
          { label: 'Our World in Data — COVID-19 vaccinations', url: 'https://ourworldindata.org/covid-vaccinations', comment: 'National time series — Dec 2020–2021 rollout vs population (historical benchmark)' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_SCIENCE_RESEARCH]: {
        score: 4,
        text: 'Weizmann and peer institutions retain very high public recognition; science-led vaccination messaging worked at scale in 2021 even though wider political polarisation later stressed other institutions.',
        links: [
          { label: 'Our World in Data — COVID-19 vaccinations', url: 'https://ourworldindata.org/covid-vaccinations', comment: 'Proxy for acceptance of biomedical guidance during 2021 campaign' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_STATE_HEALTH]: {
        score: 3.5,
        text: 'MOH operational credibility during COVID was high; Israeli Democracy Index 2025 (May + Nov 2025 waves) documents persistently low trust in most state institutions — a cooler long-run ceiling for “national government” legitimacy than the pandemic peak, even where healthcare delivery still works.',
        links: [
          { label: 'IDI — Israeli Democracy Index 2025 (press)', url: 'https://en.idi.org.il/articles/62722', date: 'Dec 2025', comment: 'May 4–28 and Nov 2025 replicates — low trust in majority of institutions' },
          { label: 'Our World in Data — COVID-19 vaccinations', url: 'https://ourworldindata.org/covid-vaccinations', comment: 'Historical MOH-led programme performance (2020–21)' },
        ],
      },
      [SocialReadinessClaim.AGING_MEDIA_FRAMING]: {
        score: 3,
        text: 'Pikuach Nefesh and high regard for medical innovation help life-extension research land as a respectable topic. Major English-language outlets cover Israeli aging biology (senescent cells, immunotherapy, healthspan) for a general readership — biological aging as a research object appears beyond a pure lifestyle or pensions frame. It is not yet ambient "longevity escape velocity" culture (rung 4), but geroscience-adjacent reporting is visible in mainstream media.',
        links: [
          { label: 'The Times of Israel — senescent cells and ageing research', url: 'https://www.timesofisrael.com/medical-holy-grail-israeli-researchers-isolate-elusive-cells-that-may-slow-down-aging/', comment: 'National daily — senescent cells and immune clearance; popular science frame' },
          { label: 'Davidson Institute (Weizmann)', url: 'https://davidson.weizmann.ac.il/', comment: 'Science education arm — ageing and biology outreach to the Israeli public' },
        ],
      },
      [SocialReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 2,
        text: 'MOH pre-approves OTC pharmaceutical advertising under pharmacist regulations; publishes public warnings on misleading device/supplement-style pitches (e.g. 2024 stem-cell/anti-aging patch claims). Consumer Protection Law and the Economy Ministry consumer-protection unit address unfair trade practices. NAD+/IV longevity clinics and influencer health marketing still spread faster than probe throughput reported in third-party monitoring — composite rung 2 (rules + warnings; uneven proactive enforcement).',
        links: [
          { label: 'Israel MOH — Public warning: misleading ads (X39 patches)', url: 'https://www.gov.il/en/pages/29012024-01', date: 'Jan 2024', comment: 'L+B — ministry warning on unapproved anti-aging / stem-cell style claims' },
          { label: 'Israel — Consumer Protection (Economy Ministry)', url: 'https://www.gov.il/en/departments/ministry_of_economy_and_industry/consumer_protection', comment: 'L — unfair-trade / misleading commercial practices' },
        ],
      },
    },
    [SocietalField.POLITICAL_READINESS]: {
      [PoliticalReadinessClaim.POLICY_COMMITMENT]: {
        score: 2,
        text: 'I+R: Israel Innovation Authority and national digital-health / biotech programmes provide L+B for digital health, genomics, and data infrastructure (I) with applied research leverage (partial R). P: MOH prevention and screening frameworks exist but federal L+B lines are less visible as multi-year, named appropriations vs methodology rung 3. Coalition churn through 2019–2022 weakens documented C for single flagship lines. No statutory quantified national healthspan target tying R+P+I. Score 2: real I+R activity with public money; P and durability below rung 3.',
        links: [
          { label: 'Israel Innovation Authority', url: 'https://innovationisrael.org.il/en/', comment: 'I+R+L — government tech funding; digital health and life-science programmes' },
          { label: 'Israel MOH — Digital health (English hub)', url: 'https://www.health.gov.il/English/Topics/DigitalHealth/Pages/default.aspx', comment: 'I+L — ministry digital-health policy and programmes' },
        ],
      },
      [PoliticalReadinessClaim.LEGISLATIVE_SALIENCE]: {
        score: 2,
        text: 'National policy on dementia and older people\'s health has a documented Knesset and ministry lineage: the National Dementia Program (MOH, adopted 2013) was developed with expert groups and parliamentary Health Committee engagement; welfare and special committees still hear dementia, carers, and older-adult care. National campaigns and coalition politics remain dominated by security and judicial issues — there is no party competition on geroscience or biological longevity — but Alzheimer\'s/dementia and elder care meet the "disease-of-aging / healthy-aging programme" parliamentary band, not rung 1 (pensions-only).',
        links: [
          { label: 'Israel MOH — Dementia overview (older adults)', url: 'https://me.health.gov.il/en/older-adult/keep-me-healthy/common-conditions/dementia-and-alzheimer/did-you-know/dementia-overview/', comment: 'MOH English site — clinical context and epidemiology' },
          { label: 'Brookdale — Israeli national dementia strategy (expert summary)', url: 'https://brookdale.jdc.org.il/en/publication/addressing-alzheimers-types-dementiaisraeli-national-strategy-summary-document-interdisciplinary-inter-organizational-group-of-experts/', date: '2013–', comment: 'JDC/Brookdale — expert summary informing national programme adoption' },
          { label: 'Alzheimer Europe — Israel policy note', url: 'https://www.alzheimer-europe.org/policy/national-dementia-strategies/israel', comment: 'European NGO file — Knesset committee context (secondary)' },
        ],
      },
    },

  },
}

export default israel
