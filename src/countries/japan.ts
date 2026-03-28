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

const japan: CountryData = {
  country: Country.JAPAN,

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 3,
        text: 'Japan\'s Highly Skilled Professional (HSP) visa offers a points-based fast-track for researchers. The J-SKIP visa (2023) targets world-leading researchers and allows permanent residency from day 1 without employer sponsorship. MEXT and JSPS fund incoming international researchers through fellowship programmes (JSPS Postdoctoral Fellowships, Invitational Fellowships). In practice, most foreign researchers enter on the standard specialist/researcher visa requiring institutional sponsorship — streamlined but not friction-free.',
        links: [{ label: 'J-SKIP Visa – MOJ Japan', url: 'https://www.moj.go.jp/isa/applications/procedures/nyuukokukanri07_00129.html', comment: 'J-SKIP — world-leading researcher visa; PR from day 1; no employer sponsorship required for top-tier researchers' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 3,
        text: 'Standard researcher visa processing: 3–5 weeks from complete application. Designated universities (Tokyo, Kyoto, Osaka, RIKEN) have priority processing channels at immigration offices — typical 2–3 week turnaround. HSP points calculation adds some documentation burden. J-SKIP is faster by design. Language barrier (all documents accepted in Japanese or English) is not a major obstacle for research institutions, which have international offices to assist.',
        links: [{ label: 'JSPS International Fellowship', url: 'https://www.jsps.go.jp/english/e-fellow/', comment: 'JSPS — postdoctoral fellowship processing; institutional support for immigration at partner universities' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 3,
        text: 'Foreign PhD degrees from internationally accredited institutions are automatically accepted for researcher visa eligibility and institutional hiring by Japanese universities and RIKEN. Ministry of Education recognition of foreign degrees is standard for major partner countries. No re-examination required for research positions. JSPS and JST both accept foreign PhDs for fellowship eligibility without case-by-case review.',
        links: [{ label: 'JSPS Fellowship Eligibility', url: 'https://www.jsps.go.jp/english/e-fellow/', comment: 'JSPS — foreign PhD eligibility; international degree recognition from accredited institutions' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 2,
        text: 'JSPS Postdoctoral Fellowships are available to international early-career researchers with stipends of JPY 360,000/month. Income thresholds for standard researcher visa are calibrated to academic salaries. However, postdoc culture in Japan features hierarchical lab structures that can disadvantage foreign early-career researchers unfamiliar with Japanese academic norms. Fixed-term contracts (3 years typical) create instability.',
        links: [{ label: 'JSPS Postdoctoral Fellowship', url: 'https://www.jsps.go.jp/english/e-fellow/postdoctoral.html', comment: 'JSPS — postdoctoral fellowships for international researchers; JPY 360k/month stipend' }],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 2,
        text: 'Japan\'s Highly Skilled Professional visa offers an accelerated 3-year PR pathway (vs. standard 10 years); J-SKIP provides immediate PR. However, retention of foreign researchers is a recognised challenge — language barriers, academic hierarchy, salary gaps vs. US/EU, and limited PI positions create "brain circulation" rather than retention. AMED and JST have launched specific programmes to improve retention of foreign researchers who have completed fellowships.',
        links: [{ label: 'Highly Skilled Professional Visa PR', url: 'https://www.moj.go.jp/isa/applications/procedures/nyuukokukanri07_00129.html', comment: 'HSP — accelerated PR pathway; 3 years for high-point scorers vs. standard 10-year pathway' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 1,
        text: 'Japan requires all foreign-trained physicians to pass the Japanese Medical Licensing Examination (国家試験) regardless of their country of origin or specialty. The exam is conducted entirely in Japanese. No bilateral recognition agreements exist with any country. This is among the most restrictive physician licensing frameworks in any developed nation — effectively prohibiting foreign physicians from independent practice without years of preparation.',
        links: [{ label: 'Japan Medical Licensing Exam (MHLW)', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/senmoni/index.html', comment: 'MHLW — full exam in Japanese required for all foreign physicians regardless of origin or specialty' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 2,
        text: 'The pathway for foreign physicians is technically documented by MHLW: pass Japanese language proficiency (JLPT N1 or equivalent), then pass all components of the national medical exam in Japanese. MHLW publishes process guidance primarily in Japanese. Academic medical centres assist foreign physician-researchers, but independent clinical practice by non-Japanese-speaking foreign clinicians is effectively impossible.',
        links: [{ label: 'MHLW Physician Licensing Information', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/senmoni/', comment: 'MHLW — licensing process documentation; Japanese-language guidance; foreign pathway technically documented' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 1,
        text: 'Realistically 3–5 years from arrival to independent practice for a foreign-trained physician: 1–2 years of Japanese language study, 1 year of exam preparation, 1 year of exam cycles. For foreign physician-researchers in academic settings, supervised research is possible immediately but clinical practice is blocked for this entire period. The timeline is among the longest of any OECD country.',
        links: [{ label: 'Japan Medical Council', url: 'https://jmc.or.jp/', comment: 'Japan Medical Council — certifying body; exam schedule and requirements for foreign-trained physicians' }],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 1,
        text: 'Foreign-trained physicians without Japanese licensure may not provide clinical care to patients in Japan, including during any academic period. They may participate in research, attend clinical rounds as observers, and teach — but the scope of medical practice is zero without the Japanese licence. National strategic special zones theoretically allow limited exceptions, but implementation has been minimal.',
        links: [{ label: 'National Strategic Special Zone (Medical)', url: 'https://www.kantei.go.jp/jp/singi/tiiki/kokusentoc/index.html', comment: 'Special zone — limited exceptions theoretically available; implementation for foreign clinicians remains minimal' }],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 2,
        text: 'Academic hospitals do offer dual research-practice positions for Japanese-licensed clinicians with AMED and MEXT funding for protected research time. For foreign physician-researchers without Japanese licensure, the research role is available but clinical practice is entirely blocked. The research-practice balance infrastructure exists; foreign access is gate-kept by the licensing barrier.',
        links: [{ label: 'AMED Clinician-Scientist Programme', url: 'https://www.amed.go.jp/en/', comment: 'AMED — clinician-scientist funding at academic hospitals; requires Japanese medical licence for clinical component' }],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'Japanese universities (Tokyo, Kyoto, Osaka, Tohoku, Nagoya) integrate aging biology into biomedical and pharmacology undergraduate programmes. The Institute for Frontier Life and Medical Sciences (Kyoto) offers undergraduate research programmes in aging. JSPS undergraduate research fellowships support aging-focused student projects. Japan\'s large biomedical undergraduate cohort includes meaningful aging biology exposure, though depth varies by institution.',
        links: [{ label: 'Kyoto University Life Sciences', url: 'https://www.kyoto-u.ac.jp/en/research/fields/life-sciences', comment: 'Kyoto University — frontier life sciences including aging biology; undergraduate research opportunities' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 4,
        text: 'Japan has one of the world\'s most developed aging research PhD ecosystems. RIKEN BioSystems Dynamics Research (BDR) and Centre for Biosystems Dynamics Research are world-class training environments. University of Tokyo, Kyoto, and Osaka have dedicated geroscience PhD tracks. AMED Moonshot Goal 7 explicitly funds PhD positions in aging biology. Japan produces proportionally among the highest number of aging biology publications per capita globally.',
        links: [{ label: 'RIKEN BDR PhD Training', url: 'https://www.bdr.riken.jp/en/research/index.html', comment: 'RIKEN BDR — world-class aging biology PhD programme; systems biology of aging; elite international training' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 3,
        text: 'JSPS Postdoctoral Fellowships (JPY 360k/month) and RIKEN research scientist positions provide competitive postdoc infrastructure. AMED and JST offer independent research fellowships for early-career scientists. The main challenges are cultural (hierarchical lab structures, limited English-language mentoring culture at some institutions) and contractual (fixed-term positions, limited industry transition pathways). RIKEN and Tokyo University are exceptions with more internationally competitive environments.',
        links: [{ label: 'JSPS Research Fellowship', url: 'https://www.jsps.go.jp/english/e-fellow/', comment: 'JSPS — JPY 360k/month stipend; most widely used postdoc support mechanism in Japan' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 4,
        text: 'JSPS funds the overwhelming majority of PhD and postdoc positions in aging biology through KAKENHI grants (JPY 350B+ annually across all fields), Research Fellowship for Young Scientists, and institutional grants. AMED provides additional medical research training funding. MEXT covers tuition for graduate students at national universities. Near-universal public funding for PhD positions; stipend levels are adequate at major institutions.',
        links: [{ label: 'JSPS KAKENHI Funding', url: 'https://www.jsps.go.jp/english/e-grants/', comment: 'JSPS KAKENHI — JPY 350B+ annual research budget; PhD and postdoc position coverage across institutions' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 3,
        text: 'Japan\'s pharma industry (Takeda, Astellas, Eisai, Daiichi Sankyo) runs academic collaboration programmes in aging. JST Strategic Basic Research Programs (CREST, PRESTO) include industry co-supervision components. The "open innovation" reform of Japanese academia (2019 MEXT policy) has increased industry-academic collaboration. However, traditional culture and strict IP norms historically created barriers; reforms are improving but not yet fully effective.',
        links: [{ label: 'JST Industry-Academia Collaboration', url: 'https://www.jst.go.jp/en/index.html', comment: 'JST — CREST and PRESTO programmes; industry co-supervision components; open innovation reform' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 5,
        text: 'Japan has the world\'s most developed geriatric medicine specialty. The Japan Geriatrics Society (founded 1959) board certifies 7,000+ geriatric specialists — more than any other country by absolute number. Geriatric medicine is a high-prestige specialty driven by Japan\'s unique demographic reality (30%+ over 65). Longevity medicine is an emerging formalised sub-field. Geriatrics training programmes are fully resourced and competitive.',
        links: [{ label: 'Japan Geriatrics Society', url: 'https://www.jpn-geriat-soc.or.jp/', comment: 'Japan Geriatrics Society — 7,000+ board-certified geriatricians; world-leading specialist density' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 4,
        text: 'All Japanese medical schools include substantial geriatrics content in their 6-year curriculum, driven by the clinical reality that >30% of hospital patients are elderly. Aging biology (frailty, sarcopenia, polypharmacy, dementia pathophysiology) is taught across pre-clinical and clinical years. Japan\'s demographic urgency has made geroscience a central rather than peripheral medical school topic. MHLW guidelines require geriatrics competencies for all physicians.',
        links: [{ label: 'Japanese Association of Medical Sciences', url: 'https://www.jams.med.or.jp/en/', comment: 'JAMS — mandates geriatric competencies in medical education; aging biology across curriculum' }],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 4,
        text: 'Geriatric medicine residency in Japan covers comprehensive geriatric assessment, frailty, falls, dementia, polypharmacy, and rehabilitation — to Japan Geriatrics Society standards across hundreds of certified training hospitals. Academic centres (Tokyo Medical University, Keio, Osaka) provide research exposure. Japan\'s clinical volume creates exceptional hands-on training density. A formal longevity medicine sub-specialisation is under development.',
        links: [{ label: 'Japan Geriatrics Society Training', url: 'https://www.jpn-geriat-soc.or.jp/', comment: 'JGS — certified training hospitals nationwide; comprehensive geriatric medicine residency curriculum' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 3,
        text: 'Japan Geriatrics Society and Japan Medical Association run extensive CME programmes including frailty, aging biology, and longevity interventions. Biological aging biomarkers are appearing in specialist CME but not yet in mandated CME for all physicians. AMED Moonshot-funded clinical translation results are disseminated through academic conferences. Coverage is strong for geriatricians; breadth to other specialties is improving.',
        links: [{ label: 'Japan Medical Association CME', url: 'https://www.med.or.jp/english/', comment: 'JMA — CME framework including aging medicine; specialist updates on longevity science' }],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 4,
        text: 'MHLW publishes detailed healthcare workforce projections by specialty including geriatric medicine supply-demand analysis with 10–20 year horizons. Japan\'s demographic crisis creates politically compelling case for geriatrics workforce investment. Training capacity expansion is consistently funded. Geriatrics is one of the few medical specialties in Japan with active government-sponsored workforce growth targets.',
        links: [{ label: 'MHLW Healthcare Workforce Plan', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000116974.html', comment: 'MHLW — 10–20 year geriatric medicine workforce projections; supply-demand gap actively managed' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 3,
        text: 'MD-PhD combined programmes exist at major Japanese universities (Tokyo, Kyoto, Osaka). The standard route is 6-year MD then 4-year PhD — sequential rather than integrated. Joint MD-PhD tracks with concurrent enrolment are available at some institutions (Keio, Juntendo) but are less common than in the US or UK. AMED and JSPS offer dedicated fellowships for clinician-scientists pursuing PhD training after medical school.',
        links: [{ label: 'University of Tokyo MD-PhD Programme', url: 'https://www.m.u-tokyo.ac.jp/en/', comment: 'UTokyo — MD-PhD pathway; sequential enrolment; JSPS and AMED fellowship support for clinician-scientists' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 3,
        text: 'JSPS Research Fellowship for Young Scientists and AMED Translational Research Programme provide stipend support for clinician-scientists pursuing research. Funding covers the PhD period and early-career research phase. Stipends are adequate but below clinical salary levels — creating a financial disincentive relative to clinical practice. MHLW has acknowledged this gap and launched pilot programmes to reduce the financial penalty for clinician-scientists.',
        links: [{ label: 'AMED Translational Research Programme', url: 'https://www.amed.go.jp/en/', comment: 'AMED — clinician-scientist research funding; PhD period support; below-clinical-salary stipend levels' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 4,
        text: 'AMED Moonshot Goal 7 (extending healthy lifespan) explicitly funds clinician-scientist investigators working on aging biology in human clinical cohorts. Japan Geriatrics Society supports aging-specialised clinician-scientist training. RIKEN and Keio University have specific aging research tracks for physician-scientists. The scientific and clinical infrastructure for aging-specialised clinician-scientists is world-class.',
        links: [{ label: 'AMED Moonshot Goal 7', url: 'https://www.amed.go.jp/en/program/list/04/01/005.html', comment: 'AMED Moonshot Goal 7 — healthy lifespan extension; clinician-scientist investigator grants for aging biology' }],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 3,
        text: 'Academic hospital contracts in Japan typically include 20–40% protected research time for clinician-scientists in academic positions. AMED and JST grants fund salary for protected time. However, clinical throughput pressure at Japanese hospitals — some of the highest in the world — often erodes formally allocated research time in practice. The contractual protection exists; enforcement varies by institution.',
        links: [{ label: 'JST PRESTO Researcher Grants', url: 'https://www.jst.go.jp/kisoken/presto/en/', comment: 'JST PRESTO — independent researcher grants; 3–4 years protected salary for early-career clinician-scientists' }],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 3,
        text: 'Clinician-scientist career is viable in Japan but faces structural challenges: limited PI positions, strong competition for academic hospital posts, lifetime employment norms that slow career progression, and cultural pressure to choose clinical or research identity at senior career stages. Top institutions (UTokyo, Kyoto, RIKEN) have established clinician-scientist tracks with competitive compensation; the broader landscape is more constrained.',
        links: [{ label: 'Japan Geriatrics Society Academic Track', url: 'https://www.jpn-geriat-soc.or.jp/', comment: 'JGS — academic geriatrician pathway; clinician-scientist career track in aging medicine' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 4,
        text: 'AMED (Japan Agency for Medical Research and Development) has an annual budget of JPY 130B (~USD 900M) for medical R&D including aging. JSPS KAKENHI provides JPY 350B+ across all research fields. The Moonshot R&D Programme (Goal 7: healthy lifespan extension to 2050) is funded at JPY 50B (~USD 340M). Japan\'s aging research funding is substantial but fragmented across agencies, and per-researcher funding trails the USA.',
        links: [{ label: 'AMED Moonshot Goal 7', url: 'https://www.amed.go.jp/en/program/list/04/01/005.html', comment: 'AMED — Moonshot Goal 7; JPY 50B for healthy lifespan extension by 2050' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 4,
        text: 'Japan\'s aging research portfolio spans basic biology (RIKEN, JST CREST), translational science (AMED), clinical trials (TMIG, geriatric medicine nationwide), and population epidemiology (JAGES, Hisayama). AMED Moonshot Goal 7 explicitly funds across hallmarks of aging, biomarker development, and intervention trials. The portfolio is genuinely diversified — no single disease dominates the aging research budget.',
        links: [{ label: 'JST CREST Aging Research', url: 'https://www.jst.go.jp/kisoken/crest/en/', comment: 'JST CREST — basic aging biology; mechanisms of senescence, proteostasis, metabolism; diverse portfolio' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 3,
        text: 'KAKENHI grants provide 3–5 year research support, with renewal pathways. AMED programmes run in 5–7 year cycles. Moonshot goal funding is a 9-year commitment (2021–2030). However, Japanese R&D budgets have been relatively stagnant in real terms over the past decade. Fixed-term academic contracts create career instability that undermines long-term institutional commitment to researchers.',
        links: [{ label: 'JSPS KAKENHI Programmes', url: 'https://www.jsps.go.jp/english/e-grants/', comment: 'KAKENHI — 3–5 year research grants; structured renewal pathway; stagnant real-terms budget trend' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 3,
        text: 'Japan\'s pharmaceutical industry (Takeda, Astellas, Eisai, Daiichi Sankyo, Shionogi) invests substantially in aging-related R&D — Eisai\'s lecanemab investment alone represents billions. Industry-academic collaboration in aging is growing through JST open innovation programmes. Japan-based longevity VC ecosystem is modest; major private leverage comes from established pharma rather than early-stage longevity biotech.',
        links: [{ label: 'Eisai Lecanemab Development', url: 'https://www.eisai.com/', comment: 'Eisai — major private aging R&D investment; Alzheimer\'s drug co-developed with Biogen; tens of billions in private aging investment' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 3,
        text: 'The Moonshot R&D Programme explicitly funds speculative, high-risk aging research — Goal 7 targets a 2050 lifespan goal that requires breakthrough science. JST ERATO (exploratory research) and FOREST programmes support radical hypotheses in aging biology. However, Japanese grant review culture has historically favoured incremental, safe science. The Moonshot structure is an explicit policy response to this recognised gap.',
        links: [{ label: 'Moonshot R&D Programme', url: 'https://www.jst.go.jp/moonshot/en/', comment: 'Moonshot — designed for transformative, speculative research; Goal 7 is aging lifespan extension by 2050' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 3,
        text: 'Japan permits somatic cell gene editing research and clinical trials under MHLW/AMED regulatory frameworks. PMDA (Pharmaceuticals and Medical Devices Agency) oversees gene therapy clinical trials. Japan approved its first CAR-T cell therapy (Kymriah) in 2019, establishing a regulatory precedent. CRISPR-based somatic editing trials are feasible under existing frameworks; aging-specific gene therapy trials are not yet running but would be assessed within the standard framework.',
        links: [{ label: 'PMDA Gene Therapy Guidance', url: 'https://www.pmda.go.jp/english/review-services/reviews/0001.html', comment: 'PMDA — gene therapy regulatory review; approved CAR-T precedent; somatic editing clinical pathway exists' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 2,
        text: 'PMDA gene therapy CTA processing takes 12–24 months — slower than FDA but comparable to many EU competent authorities. Pre-submission consultation with PMDA (RS Strategy Consultations) is available and typically takes 3–6 months for gene therapy modalities. Japan has a dedicated consultation programme for advanced therapies, reducing surprise rejections, but overall approval speed is below world-leading standards.',
        links: [{ label: 'PMDA RS Strategy Consultation', url: 'https://www.pmda.go.jp/english/rs-sb-std/rs/0001.html', comment: 'PMDA — RS consultation for gene therapy; 3–6 months; CTA processing 12–24 months' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 3,
        text: 'MHLW and PMDA have updated gene editing guidance in response to CRISPR (2019) and base editing emergence. Guidance updates take 2–3 years after new modality emergence — moderate speed. PMDA actively participates in ICH S12 (gene therapy standards) development. Regulatory science capacity is genuinely embedded in PMDA\'s structure.',
        links: [{ label: 'MHLW Gene Editing Regulatory Update', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — updated gene editing guidance for CRISPR; PMDA participates in ICH S12 standard-setting' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 2,
        text: 'Japan clinically prohibits germline gene editing but explicitly permits basic research on human embryos including gene editing under the Human Embryo Research Guidelines (2019 revision). The 14-day rule applies. Research requires National Science Council ethics review. The regulatory position is clear: research permitted with oversight, clinical application prohibited.',
        links: [{ label: 'Japan Human Embryo Research Guidelines', url: 'https://www8.cao.go.jp/cstp/tyousakai/life2/6kai/siryo3.pdf', comment: 'Cabinet Office — human embryo gene editing research permitted under 2019 revised guidelines; clinical application prohibited' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 2,
        text: 'No specific longevity gene therapy regulatory pathway in Japan. PMDA does not recognise aging as a primary indication. Aging-adjacent indications (sarcopenia, age-related macular degeneration) have regulatory precedent. The Moonshot Goal 7 longevity mandate creates political context for future pathway development, and AMED-funded aging gene therapy preclinical work is building toward clinical applications.',
        links: [{ label: 'AMED Advanced Therapy Programme', url: 'https://www.amed.go.jp/en/', comment: 'AMED — advanced therapy including gene editing for aging-adjacent indications; longevity-specific pathway not yet formalised' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 3,
        text: 'AMED functions as Japan\'s medical research ARPA-equivalent, with milestone-based programme management for translational goals. JST Moonshot Programme uses directed challenge methodology (quantified 2050 goals) explicitly modelled on ARPA. Japan\'s Innovation Network Corporation (INC) and INCJ provide bridge funding for translational spinouts. The agencies are competent but the programme-manager model is less developed than US DARPA or UK ARIA.',
        links: [{ label: 'AMED Translational Research', url: 'https://www.amed.go.jp/en/', comment: 'AMED — milestone-based medical translational research; bridge to clinical development' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 4,
        text: 'Moonshot R&D Goal 7 is Japan\'s explicit government-mandated longevity target: "Realise a society in which people can be free from disease and disability by 2050 through the development of aging suppression technologies." JPY 50B committed. This is one of the world\'s most explicit national longevity science mandates, with a quantified timeline and dedicated agency implementation. Japan\'s demographic reality gives this mandate unusual political durability.',
        links: [{ label: 'Moonshot Goal 7', url: 'https://www.amed.go.jp/en/program/list/04/01/005.html', comment: 'AMED Moonshot Goal 7 — JPY 50B; healthy lifespan extension to 2050; explicit national longevity mandate' }],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 3,
        text: 'AMED Moonshot provides non-dilutive grants with no IP encumbrance for public researchers. JST Bridge programme and INC provide co-investment for spinouts. Research grants are non-dilutive; commercialisation vehicles involve equity. Japan does not have a Bayh-Dole equivalent — universities and research institutes historically retained IP with negotiated licensing, though reforms since 2015 are improving developer IP access.',
        links: [{ label: 'JST Technology Transfer', url: 'https://www.jst.go.jp/tt/en/', comment: 'JST — technology licensing and transfer; non-dilutive research funding; IP retained by institution with licensing pathway' }],
      },
      [BreakthroughAgencyClaim.IP_FRAMEWORK]: {
        score: 2,
        text: 'Japan does not have a Bayh-Dole equivalent — universities historically retained IP from publicly funded research. Reform efforts (2015 University Reform Law, 2018 Open Innovation Act) have improved but not fully matched the US model. IP transfer from university to spinout is possible but takes 6–18 months. RIKEN has a more efficient IP transfer model. Individual researcher IP retention is not the default.',
        links: [{ label: 'JST Technology Transfer Programme', url: 'https://www.jst.go.jp/tt/en/', comment: 'JST — IP transfer programme; university retains IP; licensing pathways improving but slower than Bayh-Dole' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 4,
        text: 'Moonshot Goal 7 specifies quantified targets: "dramatic extension of healthy lifespan" and "suppression of the onset of age-related diseases" by 2050, with interim milestone metrics. Individual Moonshot programmes define specific biological aging targets (epigenetic reset, cellular senescence clearance, metabolic restoration). This is among the more specific challenge formulations of any national longevity programme globally.',
        links: [{ label: 'Moonshot R&D Goal 7 Targets', url: 'https://www.amed.go.jp/en/program/list/04/01/005.html', comment: 'Moonshot Goal 7 — specific biological aging targets with 2030 interim and 2050 final milestones' }],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'Japan\'s Sakigake (Cutting-Edge Medical Products) designation provides priority review and conditional approval for innovative therapies — a Japan-originated innovation that predated and influenced FDA Breakthrough Therapy designation. For regenerative medicine, Japan\'s Act on Safety of Regenerative Medicine (2014) allows conditional/time-limited approval of regenerative medicine products. This is a world-leading mechanism for adaptive licensing of novel therapies.',
        links: [{ label: 'PMDA Sakigake Designation', url: 'https://www.pmda.go.jp/english/review-services/expedited-programs/0002.html', comment: 'Sakigake — conditional approval for innovative therapies; predated FDA Breakthrough designation; uniquely permissive for regenerative medicine' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 3,
        text: 'PMDA accepts rolling submission for Sakigake-designated products and select innovative therapies. Pre-submission consultation (RS Strategy Consultation) is used as an effective rolling dialogue. For general products, rolling review is less systematised than in the US or EU. Japan\'s Sakigake track is the most advanced rolling review mechanism in Asia.',
        links: [{ label: 'PMDA RS Consultation', url: 'https://www.pmda.go.jp/english/rs-sb-std/rs/', comment: 'PMDA RS — rolling dialogue for Sakigake products; pre-submission consultation accepted' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'PMDA accepts functional aging endpoints (grip strength, SPPB, cognitive measures) in geriatric indications. Biological age surrogates are not yet accepted in regulatory submissions, though they appear in academic papers. Japan\'s AMED-funded aging trials are building the evidence base for surrogate qualification. Sarcopenia and frailty functional composites have the strongest regulatory acceptance.',
        links: [{ label: 'PMDA Geriatric Drug Guidelines', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA — functional aging endpoints per ICH E7 accepted; biological age surrogates research-stage only' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 3,
        text: 'Japan has a mandatory post-marketing surveillance (PMS) system for all new products, including re-examination periods (4–10 years) where real-world data must be collected and submitted. For conditionally approved products (Sakigake, regenerative medicine), confirmatory data requirements are clearly defined. PMDA actively enforces PMS requirements and has precedents for withdrawal of conditionally approved products where confirmatory data was inadequate.',
        links: [{ label: 'PMDA Post-Marketing Surveillance', url: 'https://www.pmda.go.jp/english/safety/post-market-safety/0001.html', comment: 'PMDA PMS — mandatory re-examination; real-world data collection; active enforcement of confirmatory data' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 3,
        text: 'Japan has a Named Patient Programme (individual patient use of unapproved drugs) and physician-initiated clinical trials framework. Compassionate use of unapproved products is regulated by MHLW — feasible but requires formal application. The Sakigake conditional approval pathway serves as a structured expanded access route for innovative therapies. Processing time for named patient access: 4–8 weeks.',
        links: [{ label: 'MHLW Compassionate Use', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — named patient programme; compassionate use pathway; 4–8 week processing for approved indications' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 3,
        text: 'PMDA accepts adaptive designs in submissions and has published guidance on Bayesian adaptive dose-finding. Japanese academic statisticians (Keio, Tokyo, Osaka) are leaders in adaptive trial methodology. AMED funds adaptive aging trials. Adaptive designs are accepted in oncology and increasingly in other areas. The culture of trial conservatism in Japan is changing with PMDA guidance evolution.',
        links: [{ label: 'PMDA Adaptive Design Guidance', url: 'https://www.pmda.go.jp/english/review-services/reviews/0001.html', comment: 'PMDA — Bayesian adaptive design guidance; accepted in regulatory submissions' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'PMDA accepts historical and external controls for orphan and rare disease indications where randomisation is infeasible. Japan\'s JAGS and national disease registries provide high-quality data for synthetic control arm construction. Real-world data from the Japan National Database (NDB) supports synthetic arm development. Formal PMDA guidance on synthetic controls for aging indications has not been published.',
        links: [{ label: 'Japan National Database (NDB)', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/reseputo/index.html', comment: 'NDB — national claims database; high-quality data for synthetic control arm construction' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 2,
        text: 'MHLW issued DCT guidelines in 2022, permitting remote consent, home visits by nurses, and electronic PRO in some trial categories. Full DCT implementation remains early — Japanese clinical practice favours in-person site visits, and implementation of the DCT framework has been cautious. Wearable-derived endpoints are in early regulatory dialogue but not yet accepted as primary in submissions.',
        links: [{ label: 'MHLW DCT Guidelines 2022', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — 2022 DCT framework; remote consent and e-PRO permitted; implementation cautious and early-stage' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 2,
        text: 'Platform trials have been used in Japan for oncology (Japan Master Protocol for Lung Cancer, MONSTAR-SCREEN) but have not been extended to aging-mechanism interventions. PMDA has reviewed platform protocol submissions in oncology. AMED has proposed aging-focused master protocols. The operational infrastructure exists; regulatory acceptance for aging-specific platform protocols has not yet been tested.',
        links: [{ label: 'Japan Master Protocol for Lung Cancer', url: 'https://www.jcog.jp/', comment: 'JCOG — platform trial precedent in oncology; PMDA has reviewed master protocol submissions' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 3,
        text: 'PMDA has published RWE guidance and accepted real-world evidence for label extensions and post-market decisions. Japan\'s National Database (NDB — 1B+ insurance claims) is among the world\'s richest sources of longitudinal health data for RWE studies. PMDA has conditionally accepted RWE for some approval purposes. The database infrastructure is exceptional; regulatory integration for primary approvals is still developing.',
        links: [{ label: 'PMDA Real World Data Guidance', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA RWE guidance — accepted for label extension; primary approval RWE integration developing' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 3,
        text: 'Japan\'s Act on Safety of Regenerative Medicine (2014) created a conditional approval pathway that functions as a regulatory sandbox for regenerative medicine and advanced therapies — time-limited approval with mandatory confirmatory data collection. MHLW also has a Regulatory Science research programme that pre-competitively engages with novel modalities. PMDA consultations function as informal sandboxes for truly novel products.',
        links: [{ label: 'Act on Regenerative Medicine Safety', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — 2014 Act; conditional approval for regenerative medicine; built-in real-world data collection sandbox' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 3,
        text: 'Regenerative medicine sandbox covers cell therapies, gene therapies, and tissue engineering — including aging-adjacent applications. Novel drug modalities (senolytics, geroprotectors) fall under standard drug regulation without sandbox accommodation. PMDA\'s RS consultation programme provides quasi-sandbox conditions for novel modalities. Digital health is covered under a separate SaMD (Software as Medical Device) framework.',
        links: [{ label: 'PMDA Advanced Therapy Consultation', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA — gene and cell therapy consultation; regenerative medicine sandbox; novel drugs under standard pathway' }],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 3,
        text: 'Regenerative medicine conditional approval allows patients with target indications to access therapies under mandatory real-world data collection. Prevention and healthy aging participants are not yet included in sandbox programmes. Ethics review by Special Committee under MHLW permits wider patient scopes for academic studies. Healthy volunteer aging intervention studies are conducted under the standard clinical trial framework.',
        links: [{ label: 'MHLW Regenerative Medicine Special Committee', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — regenerative medicine patient access; mandatory follow-up; prevention studies under standard CT framework' }],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 3,
        text: 'Conditional approval under the Regenerative Medicine Act provides defined legal status for developers and physicians — a formal safe harbour for the duration of the conditional approval period. Standard clinical trial indemnity framework applies to all MHLW-approved trials. Liability protection for physicians administering conditionally approved regenerative medicines is explicitly defined in the Act.',
        links: [{ label: 'Regenerative Medicine Act Legal Framework', url: 'https://www.mhlw.go.jp/english/', comment: 'Regenerative Medicine Act — explicit physician and developer liability framework; defined safe harbour' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 2,
        text: 'Longevity interventions are not explicitly included in Japan\'s existing sandbox mechanisms. Aging-adjacent indications (sarcopenia, frailty, age-related macular degeneration) can use standard and accelerated pathways. The Moonshot Goal 7 mandate creates political context for eventual longevity-specific regulatory pathway development, but no named longevity sandbox exists.',
        links: [{ label: 'AMED Moonshot and PMDA Interface', url: 'https://www.amed.go.jp/en/', comment: 'AMED Moonshot Goal 7 — creates regulatory context; PMDA consultation used for longevity product pathway-finding' }],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'PMDA accepts functional aging endpoints (grip strength, gait speed, SPPB, MMSE) in geriatric indications per ICH E7. Composite aging biomarkers have been used as secondary endpoints in AMED-funded trials. Biological age surrogates (epigenetic clocks, proteomic age) are research tools, not yet accepted in regulatory submissions. Japan\'s aging trial volume is the highest globally — creating the evidence base for future endpoint qualification.',
        links: [{ label: 'PMDA Geriatric Drug Development', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA — functional aging endpoints per ICH E7; composite secondaries accepted; biological age not yet regulatory' }],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 3,
        text: 'PMDA participates in ICH biomarker qualification processes and has its own biomarker qualification pilot programme. Japanese academic consortia (AMED-funded) are developing qualification packages for aging biomarkers. Tokyo Metropolitan Institute of Gerontology (TMIG) maintains normative aging data for endpoint reference. The qualification pathway exists within the ICH framework; aging-specific applications are in early stages.',
        links: [{ label: 'PMDA Biomarker Qualification', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA — biomarker qualification pilot programme; ICH participation; TMIG normative aging data for reference' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 2,
        text: 'Japan has a companion diagnostic framework (PMDA guidance) designed for treatment-selection diagnostics. Co-development of aging endpoints with therapeutics is not specifically accommodated. Standard IND/CTA applications can include aging biomarker secondary endpoints, but integrated co-development submissions require case-by-case negotiation with PMDA.',
        links: [{ label: 'PMDA Companion Diagnostic Guidance', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA — companion diagnostic framework; aging endpoint co-development case-by-case negotiation required' }],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 5,
        text: 'Japan has unparalleled aging biomarker reference infrastructure: the Hisayama Study (60+ years of longitudinal follow-up, 1,700+ participants with autopsy-confirmed diagnoses), JAGES (Japan Gerontological Interdisciplinary Study, 350,000+ participants), Okinawa Centenarian Study, TMIG longitudinal data, and the National Longevity Medical Research Centre cohorts. No country has deeper longitudinal aging reference data extending over multiple generations.',
        links: [
          { label: 'Hisayama Study', url: 'https://www.hisayama.med.kyushu-u.ac.jp/', comment: 'Hisayama — 60+ year longitudinal aging cohort; autopsy-confirmed; world\'s most complete aging reference dataset' },
          { label: 'JAGES Study', url: 'https://www.jages.net/', comment: 'JAGES — 350,000+ participant aging study; national scale reference population for aging biomarkers' },
        ],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 4,
        text: 'Japan Geriatrics Society, TMIG, and AMED have published standardised measurement protocols for functional aging endpoints that are widely adopted in Japanese aging trials. Japan participates in Asian Working Group for Sarcopenia (AWGS) — the standard-setting body for sarcopenia endpoints in Asian populations. Japanese norms for grip strength, gait speed, and cognitive endpoints are among the best-validated globally for Asian populations.',
        links: [{ label: 'Asian Working Group for Sarcopenia', url: 'https://www.awgsarcopenia.org/', comment: 'AWGS — Asia-Pacific sarcopenia endpoint standards; Japan is a founding and leading member' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Japan\'s Specific Health Checkup and Guidance programme (特定健診, 2008) mandates annual metabolic syndrome screening for all insured persons aged 40–74. The programme is employer/insurer funded and delivered at high participation rates (55%+). Cardiovascular risk factors (blood pressure, lipids, glucose, waist circumference) are measured with mandatory physician follow-up for high-risk results. Among the most comprehensive CV risk screening systems in any OECD country.',
        links: [{ label: 'MHLW Specific Health Checkup', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000161103.html', comment: 'MHLW — mandatory annual CV and metabolic syndrome screening for all insured 40–74' }],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Japan\'s municipal cancer screening programme provides 2-yearly mammography for women aged 40+. Municipalities actively contact eligible women for screening — proactive invitation system. National Cancer Centre supports programme delivery. Participation rates have been historically around 40% but are improving with digital reminder campaigns and workplace screening initiatives.',
        links: [{ label: 'Japan National Cancer Centre Screening', url: 'https://www.ncc.go.jp/en/', comment: 'NCC — national cancer screening programme; biennial mammography; proactive municipal invitation' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Annual faecal occult blood test (FOBT) is offered by municipalities for adults 40+. Japan has one of the higher colorectal cancer screening participation rates in Asia (~35–40%), supported by employer-based health checkup systems. Positive FOBT results trigger colonoscopy referral. The screening programme has contributed to Japan\'s relatively good colorectal cancer outcomes.',
        links: [{ label: 'Japan Cancer Screening Guidelines', url: 'https://www.ncc.go.jp/en/', comment: 'Japan NCC — annual FOBT from age 40; municipal delivery with proactive invitation' }],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Municipal cervical cancer screening is offered biannually from age 20. Japan had HPV vaccination programme suspended 2013–2022 due to safety concerns; reinstated 2022. HPV primary testing is being phased in to replace cytology-based screening. Participation rates (~40%) are improving post-reinstatement of vaccination. Japan is behind Nordic peers in HPV testing adoption but proactive invitation is in place.',
        links: [{ label: 'Japan Cervical Cancer Screening', url: 'https://www.ncc.go.jp/en/', comment: 'Japan NCC — biennial cervical screening; HPV primary testing phase-in; proactive municipal invitation' }],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No national AAA ultrasound screening programme in Japan. Available at specialist referral and in private human dock (人間ドック) comprehensive health checkup packages at private medical centres. Japan\'s national cancer screening programme does not include AAA. The private human dock system serves as a de facto screening mechanism for motivated individuals who can afford the comprehensive packages.',
        links: [{ label: 'Japan Human Dock Association', url: 'https://www.ningen-dock.jp/', comment: 'Human dock — private comprehensive health screening; AAA ultrasound available in premium packages' }],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.PROACTIVE,
        text: 'Japan\'s Specific Health Checkup mandates annual HbA1c and fasting glucose measurement for all insured adults aged 40–74. Pre-diabetes lifestyle intervention is mandatory for high-risk results. Japan has one of the world\'s most comprehensive metabolic screening systems, embedded in the employment-based health insurance structure. Coverage exceeds 75% of the target population.',
        links: [{ label: 'MHLW Specific Health Checkup – Diabetes', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000161103.html', comment: 'MHLW — annual HbA1c screening mandated for insured adults 40–74; pre-diabetes intervention pathway' }],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Municipal osteoporosis screening is available for women aged 40, 45, 50, 55, 60, 65, 70. Government-funded at municipal level; patients must initiate through health checkup. Coverage is partial — municipal programme delivery varies. Japan\'s high osteoporosis burden (one of the world\'s highest hip fracture rates) has driven investment in screening infrastructure but uptake is inconsistent across municipalities.',
        links: [{ label: 'Japan Osteoporosis Foundation', url: 'https://www.josteo.com/', comment: 'JOF — municipal osteoporosis screening programme; specific age-group targeting; funded but patient-initiated' }],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Japan has no national low-dose CT lung screening programme for the general population. CT chest is available in private human dock packages and some municipal screening programmes. Evidence review by Japan Lung Cancer Society is ongoing. The private human dock system covers CT lung screening for willing payers. National programme deployment is under active policy discussion.',
        links: [{ label: 'Japan Lung Cancer Society', url: 'https://www.haigan.gr.jp/', comment: 'Japan Lung Cancer Society — evidence review for CT screening; private human dock CT available; national programme pending' }],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Pulse palpation is part of the standard Specific Health Checkup. ECG is included in many human dock packages. No systematic national ECG-based AF screening at defined age thresholds. Some municipalities are piloting wearable-based AF detection for seniors. The connection between AF screening and stroke prevention has strong policy resonance in Japan given high stroke incidence.',
        links: [{ label: 'Japan Heart Foundation – AF', url: 'https://www.jhf.or.jp/', comment: 'Japan Heart Foundation — AF awareness; pulse check in specific health checkup; pilot wearable AF detection' }],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Cognitive screening is offered in some municipal long-term care prevention programmes for adults 65+. MMSE and HDS-R tools are used. Japan\'s national dementia plan (New Orange Plan, 2015) includes early diagnosis targets. Not yet a universal age-triggered programme — more opportunistic in primary care and specific prevention programmes. The Integrated Community Care System provides pathway for identified individuals.',
        links: [{ label: 'Japan New Orange Plan', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000064084.html', comment: 'New Orange Plan — national dementia strategy including early detection; municipal cognitive screening pilots' }],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'Genetic testing for disease risk is available from private services. Not incorporated into national screening programmes. MHLW has published guidelines on genetic testing but has not mandated or subsidised PRS-based risk screening. Japan\'s ToMMo (Tohoku Medical Megabank) has generated large-scale Japanese-specific genetic reference data that could underpin a national PRS programme.',
        links: [{ label: 'Tohoku Medical Megabank (ToMMo)', url: 'https://www.megabank.tohoku.ac.jp/english/', comment: 'ToMMo — 200,000+ whole genome sequences; Japanese-specific reference for PRS development; clinical deployment pending' }],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Japan\'s long-term care prevention system includes sarcopenia and frailty screening for community-dwelling elderly via municipal health promotion programmes. The Kihon Checklist (25-item frailty screening tool) is widely used in community settings. Grip strength and gait speed are measured in some comprehensive health checks. Formal national sarcopenia screening using AWGS criteria is not yet a universal proactive programme.',
        links: [{ label: 'MHLW Long-Term Care Prevention', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/', comment: 'MHLW — long-term care prevention including frailty and sarcopenia screening; municipal delivery; AWGS criteria' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'No national sleep apnea screening programme. Japanese Society of Sleep Research guidelines recommend screening for high-risk individuals (obesity, witnessed apnea, daytime sleepiness). Some employers and municipalities include STOP-BANG questionnaire in health checkups. Sleep clinics at major hospitals handle referrals. Japan\'s high-work-culture OSA burden is acknowledged but not yet addressed by a structured national programme.',
        links: [{ label: 'Japanese Society of Sleep Research', url: 'https://jssr.jp/', comment: 'JSSR — OSA screening guidelines for high-risk individuals; no national systematic programme' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'New national screening programmes in Japan require MHLW evidence review (typically 3–5 years), health technology assessment, and municipal implementation planning. The municipal delivery model creates a further 1–3 year lag between national policy and local deployment. Pilot programmes are possible with MHLW approval. The system is deliberate and evidence-based but slow to respond to emerging screening evidence.',
        links: [{ label: 'MHLW Screening Evidence Review', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — evidence review process for new screenings; 3–5 year evaluation before national deployment; municipal lag adds further time' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 3,
        text: 'Japan\'s major aging cohorts (Hisayama, JAGES, Okinawa Centenarian, TMIG cohorts) operate on opt-in volunteer models. Tohoku Medical Megabank (ToMMo) has enrolled 150,000+ participants on broad research consent. Japan\'s cultural emphasis on contributing to community health creates good participation rates in academic cohorts. No national opt-out biobank model exists, but the scale of volunteer participation is globally significant.',
        links: [{ label: 'Tohoku Medical Megabank', url: 'https://www.megabank.tohoku.ac.jp/english/', comment: 'ToMMo — 150,000+ participants; broad research consent; community participation model' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 5,
        text: 'The Hisayama Study has followed participants annually or biennially for 60+ years — the world\'s longest aging cohort with continuous biomarker follow-up. TMIG cohorts resample every 3–5 years. JAGES resurveys every 2–3 years across 350,000+ participants. Japan\'s longitudinal depth in aging biomarker follow-up is unmatched globally, providing aging trajectory data spanning multiple generations.',
        links: [{ label: 'Hisayama Study 60-Year Data', url: 'https://www.hisayama.med.kyushu-u.ac.jp/', comment: 'Hisayama — 60+ year continuous follow-up; annual/biennial assessments; world\'s longest aging cohort' }],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 4,
        text: 'ToMMo provides WGS-level genomic data linked to biobank samples. RIKEN and AMED-funded aging cohorts conduct multi-omics profiling (genomics, proteomics, metabolomics). Japan Aging Brain (JAB) consortium profiles neuro-aging biomarkers including tau, amyloid, TDP-43. Functional aging phenotypes (grip, gait, cognition) are integrated with molecular data in several cohorts.',
        links: [{ label: 'RIKEN Aging Biology Research', url: 'https://www.riken.jp/en/research/labs/bdr/', comment: 'RIKEN BDR — multi-omics aging profiling; molecular hallmarks of aging in human cohorts' }],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 3,
        text: 'Japan\'s National Database (NDB, 1B+ insurance claims) is a major resource but is operationally separate from research cohort data. Linkage between research cohort biomarkers and NDB claims data is possible but requires complex data governance processes. Hisayama cohort has exceptional clinical linkage (including autopsy data). The national health insurance claims system covers 100% of the population — the potential for universal clinical linkage is high but implementation lags.',
        links: [{ label: 'Japan National Database (NDB)', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/reseputo/', comment: 'NDB — 1B+ insurance claims; research linkage to biobank data possible with governance approval' }],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 3,
        text: 'NDB access requires MHLW application (3–6 months). ToMMo and academic biobank access is via institutional application to the respective biobank committee (2–4 months). International researcher access to Japanese biobanks requires bilateral data sharing agreements in addition to local governance. Processes are transparent and functional but not fast. DDBJ provides open access to public genomic data.',
        links: [{ label: 'DDBJ Data Access', url: 'https://www.ddbj.nig.ac.jp/index-e.html', comment: 'DDBJ — open access genomic data; NDB and biobank access via institutional application 2–6 months' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 3,
        text: 'Japan\'s large elderly population and universal healthcare system create strong enrolment potential for aging trials. Japan Society for Clinical Trials coordinates multi-site trial networks. However, Japan trial processes are deliberate — site activation takes 6–9 months and IRB processes at each institution are independent (no single-IRB equivalent). AMED has invested in trial infrastructure efficiency, bringing timelines closer to international standards.',
        links: [{ label: 'AMED Clinical Trials Infrastructure', url: 'https://www.amed.go.jp/en/', comment: 'AMED — clinical trial infrastructure investment; 6–9 month site activation typical; improving efficiency' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'PMDA has published RWE guidance and accepted real-world evidence for label extensions and post-market studies. Japan\'s NDB is among the richest RWE sources globally. For primary prevention aging trials, PMDA has conditionally accepted register-based outcome capture for some applications. The regulatory acceptance of RWE as primary evidence for prevention approvals is developing.',
        links: [{ label: 'PMDA Real World Data', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA RWE — NDB-based evidence accepted for post-market; primary prevention RWE in developing regulatory dialogue' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'Japan has the highest volume of active aging intervention trials globally. Functional aging endpoints (grip strength, gait speed, SPPB, cognitive tests) are widely used as primary endpoints. Composite frailty indices (Fried, Kihon) are standard as pre-specified secondary endpoints. Biological age surrogates (epigenetic clocks) appear as exploratory endpoints in some AMED-funded studies.',
        links: [{ label: 'JAGES Longitudinal Aging Studies', url: 'https://www.jages.net/', comment: 'JAGES — functional aging endpoints validated at scale; Japan leads globally in aging trial volume' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 4,
        text: 'Japan has the most active aging intervention trial landscape of any country by volume. Phase II trials of senolytics (dasatinib+quercetin), NMN, spermidine, rapamycin (in PEARL trial collaboration), and NAD precursors are running at multiple Japanese institutions. AMED Moonshot funds Phase II aging prevention trials. Japan\'s geriatric clinical trial network enables recruitment at scale for aging mechanism interventions.',
        links: [{ label: 'AMED Moonshot Clinical Research', url: 'https://www.amed.go.jp/en/program/list/04/01/005.html', comment: 'AMED Moonshot — Phase II aging intervention trials; Japan has most active global aging trial volume' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 3,
        text: 'AMED coordinates national aging research trial networks including NCGG (National Centre for Geriatrics and Gerontology) and TMIG. National Longevity Sciences Centre (NCGG) runs multi-site aging trials. Japan Geriatrics Society provides trial endpoint standards. However, individual institutional IRB independence and no single-IRB system creates duplication. AMED has been working to establish more coordinated aging trial infrastructure.',
        links: [{ label: 'National Centre for Geriatrics and Gerontology', url: 'https://www.ncgg.go.jp/index-e.html', comment: 'NCGG — national aging research centre; multi-site trial coordination; AMED-linked aging trial network' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 2,
        text: 'Japan\'s clinical trial registry (jRCT) provides public listings, but the patient-facing search interface is poorly optimised and primarily Japanese-language. No EHR-based automated patient-trial matching system exists nationally. Patients learn of trials primarily through physicians or academic centre outreach. Japan\'s language barrier compounds the access problem for non-Japanese speakers.',
        links: [{ label: 'Japan Registry of Clinical Trials (jRCT)', url: 'https://jrct.niph.go.jp/', comment: 'jRCT — Japan trial registry; public listing available; patient-facing interface limited; Japanese-language primary' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 2,
        text: 'PMDA does not recognise aging as a therapeutic indication. Organ-specific aging indications (sarcopenia, frailty, age-related macular degeneration, osteoporosis) have approved drug precedents. Systemic aging as a primary indication is not on PMDA\'s current regulatory development agenda. The Moonshot Goal 7 mandate may eventually create pressure for indication recognition, but this has not yet translated into regulatory pathway development.',
        links: [{ label: 'PMDA Geriatric Indication Framework', url: 'https://www.pmda.go.jp/english/', comment: 'PMDA — organ-specific aging indications accepted; systemic aging indication not yet recognised' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'PMDA accepts functional aging endpoints in geriatric indications following ICH E7 — grip strength, gait speed, SPPB, MMSE. Composite frailty indices accepted as secondary endpoints. Biological age surrogates not yet in regulatory submissions. Japan\'s unique strength is the normative reference data (Hisayama, JAGES) for endpoint calibration — Japanese-norm aging endpoints are the world\'s best validated.',
        links: [{ label: 'TMIG Aging Endpoint Standards', url: 'https://www.tmig.or.jp/en/', comment: 'TMIG — Japanese normative reference for aging endpoints; validation data for regulatory submissions' }],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 2,
        text: 'Japan\'s HTA framework (established 2019 under MHLW) uses QALY-based cost-effectiveness analysis but has not published guidance on valuing healthspan extension beyond standard QALY. The economic case for healthy aging investment is well-established in Japanese health economics literature — the cost of frailty and dementia is enormous and well-quantified — but formal HTA methodology for aging-prevention interventions has not been developed.',
        links: [{ label: 'MHLW HTA Framework', url: 'https://www.mhlw.go.jp/english/', comment: 'Japan HTA — QALY-based; healthspan-specific methodology not yet published; aging economic burden well-documented' }],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 2,
        text: 'Japan\'s national health insurance (NHI) does not currently have a reimbursement pathway for aging-prevention agents not yet approved for disease indications. Drugs with aging-adjacent indications (osteoporosis, sarcopenia, dementia) are reimbursed. Novel geroprotectors would require standard HTA-based reimbursement assessment. Value-based pricing for aging outcomes has not been implemented.',
        links: [{ label: 'MHLW Drug Reimbursement', url: 'https://www.mhlw.go.jp/english/', comment: 'Japan NHI — standard HTA reimbursement pathway; aging-prevention category not yet established' }],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 3,
        text: 'Japan\'s Sakigake designation provides priority review and conditional approval for innovative therapies — available to aging-mechanism agents meeting the criteria (first-in-class, significant clinical benefit, no comparable therapy). Some aging-adjacent agents have received priority review for disease indications. PMDA RS consultation helps aging product developers identify the fastest available pathway.',
        links: [{ label: 'PMDA Sakigake for Aging Agents', url: 'https://www.pmda.go.jp/english/review-services/expedited-programs/0002.html', comment: 'Sakigake — available to first-in-class aging-mechanism agents meeting criteria; fastest available expedited pathway' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 2,
        text: 'Japan\'s National Database (NDB, 1B+ insurance claims) access requires MHLW application — a multi-agency process taking 3–6 months with detailed research plan review. Data is provided as anonymised extracts, not via federated compute. Administrative burden is significant; forms are primarily Japanese-language. International researchers face additional translation and bilateral agreement requirements. The data is extraordinarily valuable but access friction is high.',
        links: [{ label: 'NDB Access Process', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/reseputo/', comment: 'NDB — MHLW application; 3–6 months; Japanese-language process; extraordinary data value but high access friction' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 3,
        text: 'Japan\'s NDB covers insurance claims for 100% of the population. Disease registries (cancer, stroke, myocardial infarction) are nationwide. However, linkage between NDB, disease registries, and research cohort biobanks is operationally complex — each source has separate governance and no universal patient linkage identifier. Hisayama cohort has exceptional clinical linkage (including autopsy data).',
        links: [{ label: 'Japan NDB Research', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/reseputo/', comment: 'NDB — 100% population claims coverage; limited cross-database linkage capability; governance coordination needed' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 2,
        text: 'NDB data is provided as anonymised extracts with disclosure control — no trusted research environment (TRE) equivalent. Analysis must be conducted on pre-extracted anonymised files rather than via secure on-site computation. Japan\'s privacy law (Act on Protection of Personal Information) is being updated but has not yet produced a TRE infrastructure comparable to UK or Nordic models.',
        links: [{ label: 'Japan PPC Privacy Framework', url: 'https://www.ppc.go.jp/en/', comment: 'Japan PPC — privacy law reform underway; no TRE equivalent yet; NDB provided as anonymised extracts' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 2,
        text: 'No dedicated AI health data governance framework equivalent to UK or Singapore models. MHLW has published general AI in healthcare guidelines but specific AI use on NDB data requires case-by-case approval. Japan\'s Digital Agency is working on a next-generation health data infrastructure that would include AI-ready formats, but implementation timeline is 2025–2028.',
        links: [{ label: 'Japan Digital Agency Health Data', url: 'https://www.digital.go.jp/en/', comment: 'Digital Agency — health data infrastructure reform; AI-ready formats in development for 2025–2028 deployment' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 2,
        text: 'Japan\'s Act on Protection of Personal Information (APPI) requires case-by-case authorisation for cross-border health data transfers. No general adequacy determination with the EU covers health data. Bilateral research data sharing agreements are negotiated individually (NDB data export is particularly restricted). Japan participates in OHDSI federated networks where data does not need to cross borders.',
        links: [{ label: 'APPI Cross-Border Data Rules', url: 'https://www.ppc.go.jp/en/', comment: 'APPI — case-by-case cross-border approval; NDB export heavily restricted; federated analysis preferred' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 3,
        text: 'Japan has near-universal EHR adoption in hospitals (>95% of acute hospitals) driven by financial incentive programmes. However, fragmentation across hospital systems and limited clinic-level EHR coverage create gaps. The Japan Medical Association\'s OR-CA/ORCA platform is widely used. A national standard for EHR interoperability (SS-MIX2) is in place but compliance is uneven.',
        links: [{ label: 'MHLW Health IT Strategy', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — near-universal hospital EHR; SS-MIX2 standard; fragmentation across systems remains a challenge' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 2,
        text: 'Japan uses its own medical coding systems (ICD-10-J, MEDIS-DC) alongside international standards. FHIR adoption is in early stages — MHLW published FHIR R4 Japan implementation guide in 2022. SNOMED CT is not widely mandated. Machine-readable interoperability across hospital systems is limited. Japan\'s health IT modernisation programme aims to achieve FHIR-based interoperability by 2030.',
        links: [{ label: 'MHLW FHIR Japan Implementation', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW FHIR R4 — Japan implementation guide 2022; FHIR adoption early stage; 2030 full implementation target' }],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 4,
        text: 'Japan has comprehensive national disease registries: Japan Cancer Registry (all cancer diagnoses nationwide since 2016), Stroke Registry, Myocardial Infarction Registry, dementia registry, and rare disease registries. All are digital and nationally mandated. The NDB covers all insurance claims. Death registry is complete and timely. Registry completeness is among the highest in Asia.',
        links: [{ label: 'Japan Cancer Registry', url: 'https://ganjoho.jp/en/public/statistics/registry.html', comment: 'Japan Cancer Registry — mandatory nationwide coverage since 2016; digital and linked to death registry' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 3,
        text: 'NDB is released annually with 12–18 month lag. Cancer registry data has 1–2 year lag. Disease surveillance data (influenza, COVID) is near-real-time. Japan\'s Digital Agency reform aims to reduce NDB lag to 6 months by 2025. For real-time clinical data, hospital EHR access (separately governed) is more current.',
        links: [{ label: 'NDB Data Release Schedule', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/reseputo/', comment: 'NDB — annual release; 12–18 month lag; Digital Agency reform targeting 6-month lag by 2025' }],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 3,
        text: 'Japan participates in OHDSI through NDB OMOP-CDM mapping by several academic institutions. Validated ICD-10-J phenotyping algorithms exist for major conditions. The JMDC (Japan Medical Data Centre) commercial claims database is OMOP-mapped. National phenotype library is not yet published. Academic groups at Kyoto, Tokyo, and Osaka have developed validated cohort-definition algorithms for aging research.',
        links: [{ label: 'Japan OHDSI Network', url: 'https://www.ohdsi.org/', comment: 'Japan participates in OHDSI; NDB OMOP-CDM mapping by academic institutions; validated aging phenotypes developing' }],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 2,
        text: 'Japan uses domestic medical coding (ICD-10-J, MEDIS-DC) alongside limited international ontology adoption. OMOP-CDM mapping has been done for selected databases but is not nationally mandated. HPO and OBO adoption in research is limited to specialist bioinformatics groups. Cross-dataset joins require significant manual curation. Japan\'s health ontology infrastructure trails Scandinavian or UK standards significantly.',
        links: [{ label: 'MHLW Health Informatics Standards', url: 'https://www.mhlw.go.jp/english/', comment: 'MHLW — domestic coding standards; OMOP mapping in select institutions; international ontology adoption limited' }],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 3,
        text: 'Research cohort linkage to NDB, cancer registry, and death registry is possible through formal application processes. Hisayama Study has exceptional linkage including autopsy confirmation. TMIG cohorts maintain linkage to municipal health records. AMED-funded aging cohorts have registry linkage built into study design. The process is administratively intensive but functional for major research cohorts.',
        links: [{ label: 'TMIG Cohort Registry Linkage', url: 'https://www.tmig.or.jp/en/', comment: 'TMIG — aging cohort with mortality, hospitalisation, and cause-of-death registry linkage' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 2,
        text: 'MEXT and AMED have published open data policies for publicly funded research requiring data availability on reasonable request. Formal FAIR mandate is not yet enforced; compliance is voluntary and variable. DDBJ provides open access for genomic data. Clinical trial data sharing requirements are weaker than FDA or EMA requirements.',
        links: [{ label: 'AMED Open Data Policy', url: 'https://www.amed.go.jp/en/', comment: 'AMED — open data policy; voluntary FAIR compliance; DDBJ for genomic data; clinical data sharing weak' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 3,
        text: 'PMDA\'s MIHARI (Medical Information for Risk Assessment Initiative) programme uses NDB data for automated pharmacovigilance signal detection — a world-leading capability using population-scale real-world data for safety surveillance. MIHARI signals have triggered regulatory action on multiple occasions. The feedback loop from NDB signal to research hypothesis is functional.',
        links: [{ label: 'PMDA MIHARI Programme', url: 'https://www.pmda.go.jp/safety/surveillance-analysis/0016.html', comment: 'PMDA MIHARI — NDB-based automated pharmacovigilance; 1B+ claims for signal detection; regulatory actions taken' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 2,
        text: 'Trial registration is required in Japan (jRCT mandatory since 2018). Results reporting within 12 months is required for AMED-funded trials but enforcement is inconsistent. Data sharing and code sharing are encouraged but not mandated. Japan has a significant dark data problem in clinical research — many trials remain unpublished or selectively published.',
        links: [{ label: 'jRCT Trial Registration', url: 'https://jrct.niph.go.jp/', comment: 'jRCT — mandatory trial registration since 2018; results reporting required for AMED grants; compliance variable' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 5,
        text: 'Japan is a founding member of ICH and PMDA routinely accepts international trial data as primary evidence. Japan adopted ICH E17 (multi-regional clinical trial guidelines) as a domestic standard — a guideline Japan co-developed. PMDA does not require separate Japanese arms for most product categories if the sponsor can demonstrate appropriate Japanese representation in the global trial or provide bridging data.',
        links: [{ label: 'PMDA ICH Participation', url: 'https://www.pmda.go.jp/english/rs-sb-std/standards-guidelines/ICH/0001.html', comment: 'PMDA — ICH founding member; ICH E17 co-developer; foreign trial data accepted as primary evidence' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 4,
        text: 'PMDA participates actively in Project Orbis (international oncology joint review) and is one of its most active members — participating in ~50% of all Project Orbis submissions alongside FDA, EMA, and Health Canada. PMDA co-chairs several ICH Expert Working Groups. Japan chairs ICH quality standards working groups and was lead developer of ICH E17.',
        links: [{ label: 'PMDA Project Orbis', url: 'https://www.pmda.go.jp/english/review-services/reviews/0001.html', comment: 'PMDA — active Project Orbis member; ICH EWG co-chair; one of most internationally engaged regulators' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'Japan is a founding ICH member and PMDA has adopted all ICH guidelines as domestic regulatory standards. Japan actively contributes to developing new ICH guidelines — co-authoring E17, leading quality guidelines (Q11, Q12), and chairing multiple expert working groups. PMDA\'s regulatory science capacity is globally referenced. Japan is the highest-capacity regulatory system in Asia and one of the top five globally.',
        links: [{ label: 'PMDA ICH Contribution', url: 'https://www.pmda.go.jp/english/rs-sb-std/standards-guidelines/ICH/', comment: 'PMDA — ICH founding member; co-authored E17 and multiple quality guidelines; chairs EWGs' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 3,
        text: 'Japan does not have a formal foreign approval reliance pathway equivalent to Singapore\'s Immediate Access. FDA or EMA approval is taken as strong supporting evidence that can trigger expedited review, but domestic PMDA assessment is required. For Sakigake-designated products, foreign approval from trusted regulators can accelerate the domestic review timeline.',
        links: [{ label: 'PMDA Expedited Review', url: 'https://www.pmda.go.jp/english/review-services/expedited-programs/', comment: 'PMDA — foreign approval as supporting evidence for expedited review; domestic assessment still required' }],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 3,
        text: 'Japan has GMP mutual recognition agreements with the EU, US, and several other jurisdictions — PMDA inspection results are accepted by FDA and EMA. Japan is not part of a formal mutual recognition network for product approvals equivalent to the EU single market. Bilateral MRAs cover manufacturing inspections but not full approval equivalence.',
        links: [{ label: 'PMDA International GMP Cooperation', url: 'https://www.pmda.go.jp/english/rs-sb-std/std-gmp/', comment: 'PMDA — GMP MRA with FDA and EMA; inspection reciprocity; product approval equivalence not formalised' }],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'BSL-3 facilities are available at multiple Japanese research institutions including RIKEN, Osaka University, and Nagasaki University BCRC. BSL-4 is available at NIID (National Institute of Infectious Diseases), Nagasaki, and Hokkaido University. Shared access programmes exist for academic researchers at BSL-3 level. Aging-specific gene therapy work (viral vector production, gene editing) can be conducted at existing BSL-3 facilities.',
        links: [{ label: 'NIID BSL-4 Facility', url: 'https://www.niid.go.jp/niid/en/', comment: 'NIID — BSL-4 facility; BSL-3 distributed across RIKEN and university medical centres' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 3,
        text: 'Japan has established GMP manufacturing capacity for cell and gene therapy, including academic GMP suites at RIKEN BDR, NCGG, and major university hospitals. FUJIFILM Diosynth and CDMOs have Japanese operations. Gene therapy GMP manufacturing is feasible but the CDMO sector is less developed than UK or Singapore for novel modalities. AMED has funded GMP infrastructure at academic centres.',
        links: [{ label: 'RIKEN BDR GMP Facility', url: 'https://www.bdr.riken.jp/en/', comment: 'RIKEN BDR — academic GMP manufacturing; cell and gene therapy for aging research clinical trials' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'Japan has world-class HPC infrastructure: Fugaku (RIKEN, previously world\'s #1 supercomputer) is available for biomedical research through a competitive allocation process. TSUBAME at Tokyo Institute of Technology and SQUID at Osaka University provide additional capacity. Multiple petaflop-scale systems are accessible to academic researchers. Biomedical AI compute is well-resourced; allocation competition is intense.',
        links: [{ label: 'RIKEN Fugaku Supercomputer', url: 'https://www.riken.jp/en/research/facilities/r-ccs/', comment: 'Fugaku — available for biomedical research; petaflop-scale capacity; competitive allocation for aging research' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 4,
        text: 'ToMMo (Tohoku Medical Megabank) has generated 200,000+ whole-genome sequences from the Tohoku earthquake recovery cohort — one of the largest national sequencing programmes globally. RIKEN and NCGG maintain sequencing infrastructure for aging cohorts. Japan\'s sequencing scale is substantial; the ToMMo cohort provides Japanese-specific genome reference data of direct use for aging genetics research.',
        links: [{ label: 'ToMMo 200K Genome Project', url: 'https://www.megabank.tohoku.ac.jp/english/', comment: 'ToMMo — 200,000+ WGS; Japanese reference genome; world-scale sequencing cohort for aging genetics' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 4,
        text: 'Japan has a world-class model organism research infrastructure for aging: RIKEN BRC is a world-leading repository of genetically modified mouse models. C. elegans aging research is highly active at multiple Japanese universities. Japan leads globally in centenarian and longevity genetics studies using human cohort models. NIG (National Institute of Genetics) manages mouse and Drosophila aging model repositories.',
        links: [{ label: 'RIKEN BRC Mouse Repository', url: 'https://www.brc.riken.jp/en/', comment: 'RIKEN BRC — world-class genetically modified mouse models; aging model repository; shared access programme' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 4,
        text: 'Japan participates in: Global Alliance for Genomics and Health (GA4GH), OHDSI, Human Cell Atlas, International Centenarian Consortium, and bilateral aging research networks with US (NIA), EU (Horizon collaborations), and China. AMED and JSPS maintain active international collaboration frameworks. Japan is particularly dominant in geriatrics science (JGS) and in aging-biology basic research (RIKEN-led consortia).',
        links: [{ label: 'AMED International Collaboration', url: 'https://www.amed.go.jp/en/', comment: 'AMED — bilateral aging research collaborations; NIA, NIH, EU Horizon, and Asian network participation' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 2,
        text: 'Japan\'s APPI cross-border data transfer restrictions make data sharing with international partners complex. Bilateral MoUs are needed for most health data export. Japan participates in OHDSI federated network where analysis code rather than data crosses borders. ToMMo has bilateral sharing agreements with UK Biobank and selected European biobanks.',
        links: [{ label: 'Japan international data sharing', url: 'https://www.ppc.go.jp/en/', comment: 'APPI — bilateral agreements needed; OHDSI federated model avoids data export; ToMMo UK Biobank agreement' }],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 3,
        text: 'Japan-US collaboration through JST-NSF bilateral programmes and NIA-AMED bilateral grants provides joint funding for aging research. EU-Japan partnership enables Horizon-adjacent joint funding. JSPS International Collaboration grants fund bilateral and multilateral aging research projects. Japan\'s science budget for international collaboration is substantial but bilateral rather than multilateral.',
        links: [{ label: 'JST International Collaboration', url: 'https://www.jst.go.jp/inter/index_en.html', comment: 'JST — Japan-US NSF bilateral grants; Japan-EU collaboration; NIA-AMED bilateral aging grants' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 5,
        text: 'Japan is the world\'s leading nation in longevity science by several metrics: highest volume of aging biology publications, world\'s most advanced geriatric medicine specialty, the Hisayama study (most cited aging cohort globally), and Japanese Blue Zones (Okinawa) as a model for longevity research. Japanese researchers lead major international aging science societies. Japan\'s demographic reality gives it unique authority in translating aging science to policy.',
        links: [{ label: 'Japan Geriatrics Society International', url: 'https://www.jpn-geriat-soc.or.jp/', comment: 'JGS — world leader in geriatric medicine; highest aging publication volume; Okinawa longevity model globally referenced' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 4,
        text: 'Japan is a major PCT user — Japanese institutions and companies file among the world\'s largest patent volumes (JPO is one of the IP5 offices). RIKEN and universities hold significant aging-biology patent portfolios. Japan-US IP cooperation frameworks (JSPS-NSF joint IP arrangements) facilitate co-patent development. Japan\'s IP framework is mature and internationally credible.',
        links: [{ label: 'JPO Patent Cooperation', url: 'https://www.jpo.go.jp/e/', comment: 'JPO — IP5 office; major PCT volume; RIKEN aging biology patent portfolio; Japan-US IP cooperation framework' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {
      [SocietalReadinessClaim.PUBLIC_TRUST]: {
        score: 4,
        text: 'Japan has high institutional trust in healthcare — trust in physicians and hospitals is consistently above 80% in surveys. Science and government trust are moderate (~55–65% in Edelman measures), somewhat lowered by post-Fukushima regulatory credibility questions and the HPV vaccine suspension controversy (2013–2022). Trust in the national health insurance system is very high. Overall, Japan\'s public trust environment is favourable for health research and preventive programmes.',
        links: [{ label: 'Edelman Trust Barometer – Japan', url: 'https://www.edelman.com/trust', comment: 'Japan: moderate government trust (~60%); high healthcare system trust; HPV saga historically reduced vaccine confidence' }],
      },
      [SocietalReadinessClaim.LONGEVITY_ACCEPTANCE]: {
        score: 5,
        text: 'Japan\'s society is the world\'s most demographically aged (30%+ over 65) and has uniquely high cultural acceptance of longevity science. "Healthy aging" is a national cultural goal (健康寿命 — healthy lifespan) with government campaigns stretching back decades. Japanese cultural values (ikigai, hara hachi bu, strong social ties) are globally cited as longevity factors. Public demand for aging research and preventive medicine is structurally embedded in Japanese society.',
        links: [{ label: 'Ministry of Health Healthy Japan 21', url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kenkounippon21.html', comment: 'Healthy Japan 21 — multi-decade national healthy aging campaign; healthy lifespan extension as public goal' }],
      },
      [SocietalReadinessClaim.POLITICAL_WILL]: {
        score: 4,
        text: 'Japan has among the strongest political commitment to healthy aging of any government — driven by demographic necessity. The Moonshot Goal 7 is a PM-office endorsed commitment with JPY 50B funding. MHLW\'s comprehensive long-term care and prevention programmes have had sustained cross-party political support for three decades. Japan\'s healthcare spending and aging research investment are explicitly framed as a national security and economic growth issue.',
        links: [{ label: 'Japan Moonshot R&D Programme', url: 'https://www.jst.go.jp/moonshot/en/', comment: 'PM-office endorsed Moonshot — JPY 50B for healthy aging by 2050; cross-party political support for three decades' }],
      },
      [SocietalReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 2,
        text: 'Japan has a large and poorly regulated anti-aging supplement and cosmetic market. The FOSHU (Foods for Specified Health Uses) system allows health claims with scientific substantiation, but enforcement against exaggerated anti-aging claims is inconsistent. TCM-adjacent (Kampo) anti-aging practices occupy a significant grey zone — sold through pharmacies with limited evidence requirements. Japan\'s cultural openness to supplement and food-based anti-aging approaches creates a permissive environment for unproven claims.',
        links: [{ label: 'Japan FOSHU System', url: 'https://www.mhlw.go.jp/english/topics/foodsafety/fhc/02.html', comment: 'FOSHU — functional food health claims system; substantiation required but anti-aging claim enforcement inconsistent' }],
      },
    },
  },
}

export default japan
