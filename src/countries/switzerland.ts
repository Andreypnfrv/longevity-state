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

const switzerland: CountryData = {
  country: Country.SWITZERLAND,

  metrics: {
    lifeExpectancy: { value: 84.1, year: 2023, source: 'World Bank WDI SP.DYN.LE00.IN' },
    healthyLifeExpectancy: { value: 71.1, year: 2021, source: 'IHME via Our World in Data' },
    populationShare60Plus: { value: 0.273, year: 2023, source: 'UN WPP 2024' },
  },

  talents: {
    [TalentsField.RESEARCHER_IMMIGRATION]: {
      [ResearcherImmigrationClaim.VISA_PATHWAY]: {
        score: 4,
        text: 'Switzerland (non-EU) offers a straightforward permit system for qualified researchers. EU/EEA nationals need only register for a residence permit. Non-EU researchers obtain L or B permits via employer sponsorship — ETH Zurich and EPFL have dedicated HR pipelines that handle the full process. Switzerland has a bilateral treaty with the EU enabling free movement, making it functionally open to all EU researchers. The permit system works well; the main friction is the non-EU third-country quota system which can cause wait times for researchers from outside Europe.',
        links: [{ label: 'SEM Swiss Residence Permits', url: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta/ausuebung-einer-erwerbstaetigkeit.html', comment: 'SEM — researcher residence permit system; EU bilateral free movement; non-EU quota system' }],
      },
      [ResearcherImmigrationClaim.PROCESSING_SPEED]: {
        score: 4,
        text: 'Cantonal migration offices process researcher permits in 4–8 weeks for EU nationals and 6–12 weeks for non-EU. ETH Zurich and EPFL have dedicated immigration support desks that pre-validate documents and reduce processing time. Swiss bureaucracy, while real, is efficient by international standards.',
        links: [{ label: 'ETH Zurich Immigration Support', url: 'https://ethz.ch/en/the-eth-zurich/working-teaching-and-research/staff/newcomers/immigration.html', comment: 'ETH — dedicated immigration support; pre-validated document processing; 4–8 week typical timeline for EU' }],
      },
      [ResearcherImmigrationClaim.CREDENTIAL_RECOGNITION]: {
        score: 5,
        text: 'Switzerland is a signatory to the Lisbon Recognition Convention and automatically recognises doctoral degrees from all Bologna Process signatories. ETH Zurich, EPFL, and Swiss universities have no re-qualification requirements for foreign PhDs. swissuniversities has a fast-track academic equivalence recognition process. For industry (pharma, biotech), recognition is at employer discretion and is universally straightforward.',
        links: [{ label: 'swissuniversities Recognition', url: 'https://www.swissuniversities.ch/en/higher-education-area/recognition-and-qualifications', comment: 'swissuniversities — automatic degree recognition under Lisbon Convention; all Bologna signatory PhDs recognised' }],
      },
      [ResearcherImmigrationClaim.EARLY_CAREER_ACCESS]: {
        score: 4,
        text: 'Swiss postdoctoral salaries (SNF-funded, CHF 87k+) well exceed income thresholds for residence permits. ETH Zurich and EPFL offer institutional sponsorship pipelines that cover junior researchers automatically. SNSF Early Postdoc Mobility fellowships are explicitly designed for incoming international postdocs. Income thresholds are calibrated to academic salaries; early-career researchers are not disadvantaged.',
        links: [{ label: 'SNSF Early Postdoc.Mobility', url: 'https://www.snf.ch/en/XIZpsPt6Yf7z5B5v/funding/early-postdoc-mobility', comment: 'SNSF — Early Postdoc.Mobility fellowships for international early-career researchers; institutional sponsorship pipeline' }],
      },
      [ResearcherImmigrationClaim.LONG_TERM_RETENTION]: {
        score: 4,
        text: 'Switzerland offers a clear pathway from research permit to permanent residency (typically 5 years for B-permit holders; faster via C-permit for long-term residents). ETH and EPFL alumni retention in Swiss industry (Novartis, Roche, Lonza, deeptech startups) is high. Switzerland actively recruits through EPFL and ETH global alumni networks. Competitive salaries and quality of life support retention of top researchers.',
        links: [{ label: 'SEM Permanent Residency', url: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta/niederlassungsbewilligung-c.html', comment: 'SEM — C-permit permanent residency pathway; researchers qualify via employment route' }],
      },
    },

    [TalentsField.CLINICIAN_IMMIGRATION]: {
      [ClinicianImmigrationClaim.LICENSE_RECOGNITION]: {
        score: 4,
        text: 'Switzerland has automatic mutual recognition of medical degrees from all EU/EEA member states. Non-EU graduates must apply to Medregom (federal medical professions register) — a competency review process taking 3–6 months, which is efficient by international standards. The Swiss Medical Association recognises degrees from ~100 countries. For specialists, the FMH specialist title requires Swiss-training or equivalence review.',
        links: [{ label: 'Medregom Federal Medical Register', url: 'https://www.medregom.admin.ch/', comment: 'Medregom — EU/EEA automatic recognition; non-EU 3–6 month equivalence review; ~100 countries recognised' }],
      },
      [ClinicianImmigrationClaim.PATHWAY_CLARITY]: {
        score: 4,
        text: 'Medregom provides a clear, documented pathway for foreign physicians online — process steps, required documents, and timelines are publicly accessible in German and French. Academic medical centres (Inselspital, USZ, HUG, CHUV) have dedicated international recruitment HR teams that guide candidates through Medregom and FMH processes. The pathway is well-documented and consistently applied for EU/EEA; non-EU processing is slightly less predictable.',
        links: [{ label: 'Medregom Online Portal', url: 'https://www.medregom.admin.ch/', comment: 'Medregom — documented online process; EU/EEA clear path; academic hospital HR teams provide non-EU support' }],
      },
      [ClinicianImmigrationClaim.PROCESSING_TIME]: {
        score: 3,
        text: 'EU/EEA clinicians can begin practice within 4–8 weeks of completing Medregom registration. Non-EU clinicians face a 3–6 month Medregom review. FMH specialist title equivalence takes 4–6 months for non-EU specialists. Total time to independent practice for non-EU non-EU specialists: 6–12 months — reasonable by international standards, though not the fastest.',
        links: [{ label: 'FMH Specialist Recognition Timeline', url: 'https://www.fmh.ch/en/services/fmh-specialist-title.html', comment: 'FMH — specialist recognition timelines; EU 4–8 weeks; non-EU 4–6 months for specialist title review' }],
      },
      [ClinicianImmigrationClaim.SCOPE_OF_PRACTICE]: {
        score: 4,
        text: 'Once licensed, foreign-trained physicians in Switzerland have full scope of practice equivalent to domestically trained physicians. FMH specialist title holders practice their specialty without restriction. The Swiss hospital system actively employs international physicians in full clinical roles — a significant fraction of university hospital medical staff are non-Swiss. Scope constraints are minimal once the recognition process is complete.',
        links: [{ label: 'Swiss Medical Association International Doctors', url: 'https://www.fmh.ch/', comment: 'FMH — full scope of practice for licensed foreign physicians; international staff prevalent in university hospitals' }],
      },
      [ClinicianImmigrationClaim.RESEARCH_PRACTICE_BALANCE]: {
        score: 4,
        text: 'SNF Ambizione and PRIMA grants provide substantial protected research time (50%+) for clinician-scientists. ETH Zurich and EPFL have formal clinician-scientist tracks with protected time at partner hospitals (Inselspital, USZ, HUG, CHUV). The Swiss Network for Translational Research enables clinician-scientist collaboration. Protected time arrangements are better than most EU countries and accessible to international clinician-scientists post-licensure.',
        links: [{ label: 'SNF Ambizione Grants', url: 'https://www.snf.ch/en/m1NtWp4nqcLudPBI/funding/ambizione', comment: 'SNF Ambizione — protected research time for early-career clinician-scientists; 4-year grants' }],
      },
    },

    [TalentsField.RESEARCH_TRAINING_PIPELINE]: {
      [ResearchTrainingClaim.UNDERGRADUATE_EXPOSURE]: {
        score: 3,
        text: 'ETH Zurich and EPFL integrate aging biology into biomedical and pharmaceutical sciences undergraduate programmes. EPFL\'s Auwerx lab and ETH ageing groups take undergraduate thesis students. University of Geneva and University of Zurich offer aging-relevant modules in medicine and biology. Swiss undergraduate exposure to aging research is above European average but concentrated at elite institutions — broader university system coverage is uneven.',
        links: [{ label: 'EPFL Auwerx Lab Undergraduate', url: 'https://www.epfl.ch/labs/auwerx-lab/', comment: 'EPFL — undergraduate research opportunities in aging biology; NAD metabolism and mitochondrial aging projects' }],
      },
      [ResearchTrainingClaim.GRADUATE_PROGRAMS_DEPTH]: {
        score: 3,
        text: 'Switzerland produces ~4,000 doctoral graduates per year — small in absolute terms but very high per capita (top 3 OECD). ETH Zurich and EPFL account for ~30% of all Swiss PhDs; over 50% of PhD students there are international. EPFL\'s Laboratory of Integrative Systems Physiology (Auwerx) and ETH longevity groups provide world-class aging biology PhD training. Quality is consistently world-class; absolute numbers in aging-specific PhDs are limited.',
        links: [{ label: 'FSO Swiss PhD Statistics', url: 'https://www.bfs.admin.ch/bfs/en/home/statistics/education-science/graduations.html', comment: 'FSO — 4,000 PhDs/year; 47 per 10,000 population (top 3 OECD); 50%+ international at ETH/EPFL' }],
      },
      [ResearchTrainingClaim.POSTDOC_ECOSYSTEM]: {
        score: 4,
        text: 'Swiss postdoctoral salaries (SNF-funded) are among the highest globally: CHF 87,000 (senior postdoc) per year. ETH Zurich career development for postdocs is structured — explicit timelines, mentorship, and industry placement support. Swiss National Science Foundation (SNF) fellowship rates are highly competitive. The main challenge is high cost of living in Zurich/Geneva, though net salaries remain competitive.',
        links: [{ label: 'SNF Postdoc Salary Scales', url: 'https://www.snf.ch/en/XIZpsPt6Yf7z5B5v/topic/personnel-salaries-and-living-costs', comment: 'SNF — CHF 87k senior postdoc salary; structured career development at ETH/EPFL; competitive global standing' }],
      },
      [ResearchTrainingClaim.PUBLIC_FUNDING_COVERAGE]: {
        score: 4,
        text: 'SNF funds PhD and postdoc positions through project grants, NCCR programmes, and direct fellowships (Early Postdoc.Mobility, Advanced Postdoc.Mobility). ETH Board and EPFL federal funding provides institutional PhD stipends. Swiss National Science Foundation distributes CHF 1B+ annually; coverage of PhD positions in basic science is near-universal at top institutions. Tuition at ETH and EPFL is nominal (CHF 730/semester).',
        links: [{ label: 'SNF Fellowships Overview', url: 'https://www.snf.ch/en/XIZpsPt6Yf7z5B5v/funding/fellowships', comment: 'SNF — near-universal PhD funding coverage at ETH/EPFL; Early and Advanced Postdoc Mobility fellowships' }],
      },
      [ResearchTrainingClaim.INDUSTRY_ACADEMIA_BRIDGE]: {
        score: 5,
        text: 'Switzerland has the world\'s most intense industry-academia bridge for aging research. Novartis Institutes for BioMedical Research (NIBR, Basel) and Roche Pharma Research collaborate deeply with ETH and EPFL — joint labs, secondments, and co-supervised PhDs are standard. Innosuisse co-funds industry-academia projects; CTI-funded projects between pharma and universities are numerous. The Basel-Zurich corridor has the densest pharma-academia collaboration pipeline globally for aging-relevant science.',
        links: [{ label: 'Novartis NIBR–ETH Collaboration', url: 'https://www.novartis.com/research-development/research-locations/nibr-basel', comment: 'Novartis NIBR — joint labs with ETH Zurich; co-supervised PhD programmes; aging biology collaboration flagship' }],
      },
    },

    [TalentsField.CLINICIAN_AGING_TRAINING]: {
      [ClinicianAgingTrainingClaim.GERIATRICS_AS_SPECIALTY]: {
        score: 4,
        text: 'Switzerland has a well-structured geriatric medicine specialty (Geriatrie FMH) with a 4-year residency programme. All Swiss medical schools include mandatory geriatrics rotations. The Swiss Society of Geriatrics (SGG-SSG) runs comprehensive continuing education. Switzerland has one of Europe\'s highest per-capita geriatrician densities. The training quality is high — ETH/EPFL research environment cross-fertilises clinical geriatric training with basic science.',
        links: [{ label: 'Swiss Society of Geriatrics', url: 'https://www.sgg-ssg.ch/en/', comment: 'SGG-SSG — Swiss geriatrics specialty; 4-year FMH residency; mandatory university curriculum rotations; high geriatrician density' }],
      },
      [ClinicianAgingTrainingClaim.MEDICAL_SCHOOL_INTEGRATION]: {
        score: 4,
        text: 'All five Swiss medical schools (Zurich, Bern, Basel, Geneva, Lausanne) include geriatric medicine modules in their curriculum. University Hospital Zurich and Inselspital Bern have well-developed geriatric medicine departments that serve as primary teaching hospitals. Aging biology concepts (hallmarks of aging, epigenetics, senescence) are increasingly integrated into preclinical medical education at ETH-affiliated schools. Integration is stronger than most European peers.',
        links: [{ label: 'Swiss Medical School Curricula (MedK)', url: 'https://www.mebeko.ch/', comment: 'Swiss medical licencing — standardised curriculum includes geriatric medicine; aging biology integration at ETH-affiliated schools' }],
      },
      [ClinicianAgingTrainingClaim.RESIDENCY_QUALITY]: {
        score: 4,
        text: 'Swiss geriatric medicine residencies at university hospitals (USZ, Inselspital, HUG, CHUV) are consistently rated among the strongest in Europe. The FMH-accredited residency programme has structured competency assessment, mandatory research exposure, and ties to the SNF-funded aging science ecosystem. Resident research time is available at ETH/EPFL-affiliated hospitals. The small number of residency positions is the main constraint — demand exceeds capacity.',
        links: [{ label: 'FMH Geriatrics Residency', url: 'https://www.fmh.ch/en/training/specialty-training/geriatrics.html', comment: 'FMH — accredited geriatric medicine residency; structured competency framework; university hospital training settings' }],
      },
      [ClinicianAgingTrainingClaim.LONGEVITY_CME]: {
        score: 3,
        text: 'Swiss Society of Geriatrics and the Swiss Academy of Medical Sciences (SAMS) include longevity biology in CME modules. EPFL/ETH run public lectures and continuing education on aging science accessible to clinicians. Biomarker-guided aging assessment is emerging in Swiss CME but not yet systematic. Switzerland\'s proximity to major European geroscience congresses (EuGMS, EUGMS) facilitates access to cutting-edge CME.',
        links: [{ label: 'Swiss Academy of Medical Sciences CME', url: 'https://www.samw.ch/en/Education.html', comment: 'SAMS — CME for Swiss physicians; aging science increasingly featured; longevity biomarkers emerging topic' }],
      },
      [ClinicianAgingTrainingClaim.WORKFORCE_PLANNING]: {
        score: 3,
        text: 'The Swiss Observatory on Health (Obsan) has published projections of geriatrician demand given Switzerland\'s rapidly aging population (20%+ over 65 by 2030). FOPH\'s national strategy for aging integrates workforce planning. However, formal binding targets for geriatric physician numbers do not exist. Workforce shortages in community geriatrics and nursing home care are documented; strategic response remains fragmented across cantons.',
        links: [{ label: 'Obsan Swiss Health Observatory', url: 'https://www.obsan.admin.ch/en', comment: 'Obsan — geriatric workforce projections; aging population demand modelling; cantonal variation in implementation' }],
      },
    },

    [TalentsField.CLINICIAN_SCIENTIST_PATHWAY]: {
      [ClinicianScientistClaim.COMBINED_DEGREE_EXISTS]: {
        score: 3,
        text: 'Swiss medical schools do not have a formal MD-PhD programme in the US sense, but ETH Zurich and EPFL offer joint doctoral programmes with university hospitals where MD students can complete a PhD alongside clinical training. The MD-PhD track at University of Zurich (with ETH affiliation) is the closest Swiss equivalent. The pathway exists but is informal and small-volume relative to the US or UK.',
        links: [{ label: 'ETH Zurich MD-PhD Programme', url: 'https://ethz.ch/en/doctorate.html', comment: 'ETH Zurich — joint PhD tracks with University Hospital Zurich for clinician-scientists; growing programme' }],
      },
      [ClinicianScientistClaim.PUBLIC_FUNDING]: {
        score: 4,
        text: 'SNF Ambizione, PRIMA, and the NCCR programmes explicitly fund clinician-scientists with protected research time. Inselspital/USZ/HUG/CHUV have institutional MD-researcher funding lines. The SNSF Early Postdoc.Mobility and Advanced Postdoc.Mobility schemes are accessible to physician-researchers. Swiss public funding for clinician-scientist positions is among the most generous in continental Europe relative to population.',
        links: [{ label: 'SNF Ambizione and PRIMA', url: 'https://www.snf.ch/en/m1NtWp4nqcLudPBI/funding/ambizione', comment: 'SNF — Ambizione and PRIMA for clinician-scientists; explicit protected research time component; 4-year grants' }],
      },
      [ClinicianScientistClaim.AGING_SPECIALIZATION]: {
        score: 3,
        text: 'Aging-focused clinician-scientist positions exist at ETH-affiliated hospitals and EPFL partner institutions. AGEN (Aging Network) Switzerland and individual aging biology groups actively recruit physician-researchers for translational aging projects. No formal national aging clinician-scientist programme; positions are funded project-by-project through SNF and EPFL/ETH institutional grants. The ecosystem exists; the scale is limited.',
        links: [{ label: 'Swiss Aging Network', url: 'https://www.sgg-ssg.ch/en/', comment: 'Swiss aging research ecosystem — clinician-scientist positions at EPFL/ETH-affiliated hospitals; project-based funding' }],
      },
      [ClinicianScientistClaim.PROTECTED_RESEARCH_TIME]: {
        score: 4,
        text: 'SNF Ambizione and PRIMA grants provide substantial protected research time for clinician-scientists. ETH Zurich and EPFL have formal clinician-scientist tracks with 50% protected research time at partner hospitals (Inselspital, USZ, HUG, CHUV). The Swiss Network for Translational Research in Genomic Medicine enables clinician-scientist collaboration. Protected time arrangements are better than most EU countries.',
        links: [{ label: 'SNF Ambizione Grants', url: 'https://www.snf.ch/en/m1NtWp4nqcLudPBI/funding/ambizione', comment: 'SNF Ambizione — protected research time for early-career clinician-scientists; 4-year grants' }],
      },
      [ClinicianScientistClaim.CAREER_VIABILITY]: {
        score: 4,
        text: 'Clinician-scientists at ETH-affiliated hospitals and EPFL partners have well-defined career tracks: SNF-funded research positions lead to Privatdozent (habilitation) and ultimately full professorship at ETH, EPFL, or cantonal university hospitals. Industry pathways (Novartis, Roche) provide an alternative exit for aging clinician-scientists. The dual academic-clinical career is socially normalised in Switzerland\'s academic medicine culture.',
        links: [{ label: 'Swiss Academic Medicine Career Tracks', url: 'https://www.samw.ch/en.html', comment: 'SAMS — Swiss academic medicine career framework; clinician-scientist habilitation track well-established' }],
      },
    },
  },

  science: {
    [ScienceField.RESEARCH_FUNDING]: {
      [ResearchFundingClaim.FUNDING_SCALE]: {
        score: 5,
        text: 'Switzerland spends ~3.5% of GDP on R&D (highest in Europe) with public R&D at ~0.8% GDP. SNF distributes CHF 1B+ per year in research grants. The ETH Domain (ETH Zurich, EPFL, four research institutes) receives CHF 3.7B annually from the federal government. Switzerland\'s per-capita public research investment is the highest in continental Europe. Aging research is funded within this world-class envelope, even without a dedicated national aging institute.',
        links: [{ label: 'SNF Annual Report', url: 'https://www.snf.ch/en/WbgaEXHeQyBCNqKg/page/the-snf', comment: 'SNF — CHF 1B+ annual grants; highest per-capita research investment in continental Europe; aging well-funded within general portfolio' }],
      },
      [ResearchFundingClaim.PORTFOLIO_BREADTH]: {
        score: 3,
        text: 'SNF funds aging research through National Research Programme NRP 67 (End of Life), NRP 77 (Digital Transformation Health), and general grants to ETH/EPFL aging labs. No dedicated national aging longevity programme equivalent to Singapore\'s Healthy Longevity or Japan\'s Moonshot Goal 7. The portfolio spans basic aging biology (Auwerx lab mitochondria, ETH epigenetics) through clinical frailty trials, but without a unified national mandate the breadth is programme-dependent.',
        links: [{ label: 'SNF National Research Programmes', url: 'https://www.snf.ch/en/tV5L2PvqXPEFJAV7/topic/national-research-programmes', comment: 'SNF NRP — aging-related themes (NRP 67, 77); no dedicated longevity science NRP; basic-to-translational coverage exists' }],
      },
      [ResearchFundingClaim.FUNDING_STABILITY]: {
        score: 4,
        text: 'ETH Zurich and EPFL receive multi-year federal block grants (CHF 3.7B over 4-year federal contribution periods) providing structural stability independent of annual SNF cycles. ETH\'s institutional budget and EPFL strategic plans create long-term commitments for aging research groups. Individual SNF grants run 3–4 years with competitive renewal. The ETH Domain institutional funding provides a stable base that insulates top aging labs from annual grant cycle risk.',
        links: [{ label: 'ETH Domain Federal Contribution', url: 'https://www.ethrat.ch/en/eth-domain/federal-contribution', comment: 'ETH Domain — 4-year federal block grants; structural stability for ETH Zurich and EPFL aging research programmes' }],
      },
      [ResearchFundingClaim.IP_FRAMEWORK]: {
        score: 3,
        text: 'Employee inventions at ETH/EPFL and other employers generally vest with the university under employment law; ETH transfer and EPFL TTO provide professional licensing and spinout deals with published frameworks. Spinouts often license or acquire IP from the university — clearer than weak TTO systems but not PI-owned title; transaction cost can be material for cash-poor founders.',
        links: [{ label: 'ETH Transfer', url: 'https://ethz.ch/en/industry/transfer.html', comment: 'ETH technology transfer — licensing and spinout' }],
      },
      [ResearchFundingClaim.PRIVATE_LEVERAGE]: {
        score: 5,
        text: 'Switzerland is home to the world\'s highest concentration of major pharmaceutical companies with aging pipelines: Novartis (senolytic compounds, rapamycin analogues), Roche (neurodegeneration, sarcopenia), Lonza (cell therapy manufacturing), and dozens of longevity-adjacent biotechs (Juvena Therapeutics, Insilico Medicine Zurich). The Basel-Zurich-Geneva axis is the world\'s most pharma-dense longevity research corridor per square kilometer. Private investment in aging science dwarfs public SNF funding.',
        links: [{ label: 'Novartis Senescence Research', url: 'https://www.novartis.com/research-development/research-focus/aging-and-cellular-senescence', comment: 'Novartis — major aging biology research programme; senolytic and aging hallmark focused pipeline; deep ETH/EPFL collaboration' }],
      },
      [ResearchFundingClaim.RISK_APPETITE]: {
        score: 3,
        text: 'SNF\'s Sinergia and NCCR programmes accept higher-risk interdisciplinary research. EPFL and ETH have internal seed funding mechanisms for unconventional ideas. However, Swiss science funding culture is conservative relative to the US or Singapore — incremental excellence is rewarded; moonshot ambition is less systematically funded through public channels. The private pharma sector (Novartis, Roche) provides the risk-tolerant capital in Switzerland; public agencies are more conservative.',
        links: [{ label: 'SNF Sinergia Programme', url: 'https://www.snf.ch/en/lWYpBqCovb8sJSJr/funding/sinergia', comment: 'SNF Sinergia — interdisciplinary high-risk grants; moderate risk tolerance relative to global peers; pharma sector fills the gap' }],
      },
    },

    [ScienceField.GENE_EDITING_REGULATION]: {
      [GeneEditingClaim.SOMATIC_PERMISSIVENESS]: {
        score: 3,
        text: 'Switzerland\'s Federal Act on Research involving Human Beings (HRA) and the Gene Technology Act govern gene editing research. Somatic gene editing research is permitted with ethics commission approval. CRISPR-based aging research is permitted at the somatic level without specific restrictions. Switzerland is more permissive than Germany but more conservative than the UK. Multiple CRISPR-based trials have run through Swiss university hospitals.',
        links: [{ label: 'Swiss Gene Technology Act', url: 'https://www.bag.admin.ch/bag/en/home/medizin-und-forschung/biomedizin-und-forschung-am-menschen/stammzellen-forschung.html', comment: 'Swiss HRA — somatic editing permitted with ethics approval; CRISPR research active at Swiss university hospitals' }],
      },
      [GeneEditingClaim.APPROVAL_SPEED]: {
        score: 4,
        text: 'Swissmedic is consistently ranked among the world\'s most efficient regulatory agencies. Approval timelines for gene therapy clinical trials are shorter than EMA — typically 3–6 months from complete IND/CTA submission to approval. Several gene therapies have been approved in Switzerland before EMA. BASEC (centralised ethics commission) provides a single national ethics review without multi-site delays. Pre-submission scientific advice is readily available.',
        links: [{ label: 'Swissmedic ATMP Pathway', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/advanced-therapy-medicinal-products.html', comment: 'Swissmedic — ATMP expedited pathway; faster than EMA; several gene therapies first approved in Switzerland' }],
      },
      [GeneEditingClaim.REGULATORY_ADAPTABILITY]: {
        score: 4,
        text: 'Swissmedic proactively engages with sponsors on novel modalities through its scientific advice programme — equivalent to FDA Breakthrough Therapy consultations. Regulatory guidance for new gene editing modalities (base editing, prime editing) is being developed in alignment with EMA and FDA. Swissmedic\'s size advantage (small, expert, responsive) makes it faster to adapt guidance than larger agencies. Regulatory science staff actively publish on novel therapy frameworks.',
        links: [{ label: 'Swissmedic Scientific Advice', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/scientific-advice-and-protocol-assistance.html', comment: 'Swissmedic — proactive scientific advice for novel modalities; faster guidance adaptation than EMA' }],
      },
      [GeneEditingClaim.GERMLINE_PERMISSIVENESS]: {
        score: 2,
        text: 'Germline editing on human embryos is prohibited by Swiss law (stricter than UK or Singapore). The Federal Commission for Bioethics (EKAH) regularly discusses the ethics of germline modification but has not recommended legalisation. Basic somatic and tissue research on gene editing is permitted; clinical germline application is not on the policy horizon. Switzerland is more conservative than the UK\'s HFEA framework on germline research.',
        links: [{ label: 'Swiss Federal Commission Bioethics EKAH', url: 'https://www.ekah.admin.ch/en/home.html', comment: 'EKAH — bioethics discussions on germline editing; prohibition maintained; somatic research permitted' }],
      },
      [GeneEditingClaim.LONGEVITY_PATHWAY]: {
        score: 3,
        text: 'Swissmedic accepts aging-adjacent indications (frailty, sarcopenia) for gene therapy trials and does not explicitly exclude longevity endpoints as secondary measures. The EPFL Auwerx lab and ETH longevity groups use aging biomarkers as secondaries in IND filings. No formal longevity-specific gene editing pathway has been established, but Swissmedic\'s pragmatic evidence-based approach means aging endpoints are accepted where scientifically justified.',
        links: [{ label: 'Swissmedic ATMP Scientific Advice', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/advanced-therapy-medicinal-products.html', comment: 'Swissmedic — ATMP framework; aging biomarkers as secondary endpoints accepted; no formal longevity pathway defined' }],
      },
    },
  },

  translation: {
    [TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES]: {
      [BreakthroughAgencyClaim.AGENCY_MODEL]: {
        score: 2,
        text: 'Switzerland lacks a DARPA/ARPA-H equivalent. Innosuisse (Swiss Innovation Agency) funds applied research and startup development but is primarily SME and innovation-focused, not a breakthrough science agency with programme managers. The Hasler Foundation and Gebert Rüf Stiftung fund high-risk research but are private and small. ETH Board and strategic EPFL-ETH initiatives partially fill this gap. Switzerland relies on private pharma (Novartis, Roche) to fund breakthrough longevity science.',
        links: [{ label: 'Innosuisse Swiss Innovation Agency', url: 'https://www.innosuisse.ch/inno/en/home.html', comment: 'Innosuisse — applied research funding; SME and startup focus; not a breakthrough science agency equivalent to DARPA/ARPA-H' }],
      },
      [BreakthroughAgencyClaim.LONGEVITY_MANDATE]: {
        score: 2,
        text: 'No Swiss public agency has an explicit longevity or healthy aging science mandate. Innosuisse\'s mandate is economic competitiveness through innovation. SNF\'s mandate is basic research quality without disease or aging focus. FOPH runs a Healthy Aging strategy focused on care quality, not research funding. The longevity mandate that Japan\'s AMED Moonshot or Singapore\'s Healthy Longevity Initiative carry does not exist in the Swiss public sector.',
        links: [{ label: 'FOPH Healthy Aging Strategy', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/gesundes-altern.html', comment: 'FOPH — healthy aging strategy is service-quality focused; no explicit longevity research science mandate' }],
      },
      [BreakthroughAgencyClaim.FUNDING_TYPE]: {
        score: 3,
        text: 'Swiss breakthrough funding for aging comes primarily through ETH Domain block grants (institutional, stable), SNF project grants (competitive, 3–4 years), and Innosuisse co-funded industry-academia projects (matched, applied). This funding mix is diversified and substantial in scale, though lacking the mission-driven challenge grant model of ARPA-H. Novartis and Roche\'s internal R&D budgets represent a parallel private-sector funding type at enormous scale.',
        links: [{ label: 'SNF Funding Types Overview', url: 'https://www.snf.ch/en/tV5L2PvqXPEFJAV7/topic/funding', comment: 'SNF — diversified funding types: project grants, programme grants, centres of excellence; no challenge grant model' }],
      },
      [BreakthroughAgencyClaim.AGENCY_FOREGROUND_IP]: {
        score: 2,
        text: 'Innosuisse projects are co-funded applied partnerships — IP is negotiated per consortium agreement rather than following a single national PM-agency template. There is no Swiss ARPA-H analogue with statutory performer-first foreground IP; agency-like instruments are thin relative to ETH/SNF core funding.',
        links: [{ label: 'Innosuisse', url: 'https://www.innosuisse.ch/inno/en/home.html', comment: 'Co-innovation funding — IP terms project-specific' }],
      },
      [BreakthroughAgencyClaim.CHALLENGE_SPECIFICITY]: {
        score: 2,
        text: 'No Swiss public funder has issued longevity-specific challenge grants or Moonshot-style research goals. SNF National Research Programmes (NRPs) can address aging themes but are broad and evidence-driven rather than challenge-driven. Innosuisse does not run longevity-specific innovation challenges. Switzerland\'s exceptional private pharma sector partially compensates — Novartis sets its own challenge targets internally — but national coordinated challenges do not exist.',
        links: [{ label: 'SNF National Research Programmes Overview', url: 'https://www.snf.ch/en/tV5L2PvqXPEFJAV7/topic/national-research-programmes', comment: 'SNF NRP — broad themed programmes; no longevity-specific challenge or Moonshot goals; FOPH Healthy Aging is service-focused' }],
      },
    },

    [TranslationField.ADAPTIVE_LICENSING]: {
      [AdaptiveLicensingClaim.CONDITIONAL_APPROVAL]: {
        score: 4,
        text: 'Swissmedic has a conditional approval mechanism (Zulassung unter Auflagen) for innovative products with promising early evidence. Switzerland was among the first countries to implement adaptive licensing concepts and has granted conditional approvals faster than EMA in several oncology and gene therapy cases. Swissmedic\'s size advantage makes adaptive pathways genuinely faster than larger agencies.',
        links: [{ label: 'Swissmedic Conditional Approval', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/authorisation-of-medicinal-products-for-human-use/conditional-authorisation.html', comment: 'Swissmedic — conditional authorisation pathway; faster than EMA; used for innovative therapies with early data' }],
      },
      [AdaptiveLicensingClaim.ROLLING_REVIEW]: {
        score: 4,
        text: 'Swissmedic accepts rolling submissions for innovative products, allowing companies to submit study modules as data becomes available. Switzerland participated in the EMA-FDA-Health Canada joint rolling review for COVID-19 vaccines — demonstrating world-leading adaptive review capacity. For aging biologics, Swissmedic\'s rolling review is formally available and practically accessible.',
        links: [{ label: 'Swissmedic Rolling Review', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — rolling submission; participated in international joint rolling review for COVID vaccines' }],
      },
      [AdaptiveLicensingClaim.SURROGATE_ENDPOINTS]: {
        score: 3,
        text: 'Swissmedic follows EMA guidance on surrogate endpoint acceptance and has an active EMA work-sharing arrangement. EMA-qualified aging surrogates (frailty indices, SPPB, grip strength) are accepted by Swissmedic. The EPFL Auwerx lab and ETH longevity groups have published extensively on epigenetic clock validation — creating a body of evidence that could support future Swissmedic surrogate endpoint qualification for aging trials.',
        links: [{ label: 'Swissmedic EMA Work-Sharing', url: 'https://www.swissmedic.ch/swissmedic/en/home/international/bilateral.html', comment: 'Swissmedic — EMA work-sharing; surrogate endpoint acceptance tracks EMA guidance; aging surrogates accepted where EMA-qualified' }],
      },
      [AdaptiveLicensingClaim.POST_MARKET_FRAMEWORK]: {
        score: 3,
        text: 'Switzerland\'s BROCACEF registry and cantonal health registries provide post-market surveillance linkage for conditional approvals. The national cancer registry and vital statistics are linkable to clinical data. EHR fragmentation (cantonal hospital systems) and linguistic complexity (DE, FR, IT) limit seamless national-scale registry linkage, but SPHN\'s BioMedIT infrastructure is progressively enabling better post-market data integration.',
        links: [{ label: 'SAQM Quality Registries Switzerland', url: 'https://www.saqm.ch/en.html', comment: 'SAQM — Swiss quality registries for clinical outcomes; conditional approval post-market surveillance; SPHN BioMedIT improving linkage' }],
      },
      [AdaptiveLicensingClaim.EXPANDED_ACCESS]: {
        score: 3,
        text: 'Switzerland has a compassionate use programme (Zulassungsüberschreitender Einsatz) for unapproved or off-label products where standard treatment is unavailable and evidence supports use. This is accessible for aging-mechanism agents (senolytics, NAD precursors) in appropriate cases. Swissmedic processes expanded access requests efficiently. Coverage by mandatory health insurance (KVG) for compassionate use is limited; hospital absorbs costs in academic settings.',
        links: [{ label: 'Swissmedic Compassionate Use', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/special-authorisations.html', comment: 'Swissmedic — compassionate use framework; aging mechanism agents accessible to patients in academic settings' }],
      },
    },

    [TranslationField.TRIAL_DESIGN_MODERNIZATION]: {
      [TrialDesignClaim.ADAPTIVE_DESIGNS]: {
        score: 4,
        text: 'Swissmedic and the cantonal ethics commissions accept Bayesian adaptive trial designs — Swiss regulatory culture is pragmatic and evidence-focused. University of Basel and EPFL have strong biostatistics groups active in adaptive design methodology. Basel has historically been a centre for Bayesian statistics in pharma (Novartis Basel is a global leader in Bayesian adaptive trial design). This expertise diffuses into academic trial design.',
        links: [{ label: 'Novartis Bayesian Trial Design', url: 'https://www.novartis.com/research-development/research-technologies/statistics', comment: 'Novartis — global leader in Bayesian adaptive design; expertise concentrated in Basel and diffuses to academic sector' }],
      },
      [TrialDesignClaim.SYNTHETIC_CONTROLS]: {
        score: 3,
        text: 'Switzerland has condition-specific registries (cardiac surgery, oncology, orthopaedic) that have been used for registry-based evidence generation. SENIORAGILITY and other Swiss aging registries exist for frailty surveillance. Synthetic controls and register-based RCT methodology are feasible but not yet deployed at national scale for aging — the cantonal structure and linguistic diversity complicate Switzerland-wide register-based trials.',
        links: [{ label: 'Swiss Frailty Network SFN', url: 'https://www.swissfrailtynetwork.ch/', comment: 'Swiss Frailty Network — frailty registry infrastructure; aging endpoint validation; basis for future register-based trials' }],
      },
      [TrialDesignClaim.DECENTRALIZED_TRIALS]: {
        score: 3,
        text: 'BASEC (centralised national ethics commission since 2019) enables single-approval decentralised trial design across all Swiss cantons — eliminating the multi-IRB obstacle. Swissmedic accepts decentralised trial approaches for appropriate indications. The Swiss EPD rollout and SwissRDL (clinical data linkage) infrastructure support remote patient monitoring. Uptake of fully decentralised trials in aging is emerging but not yet widespread.',
        links: [{ label: 'BASEC Swiss Ethics Commission', url: 'https://www.basec.unibe.ch/index_eng.html', comment: 'BASEC — single national ethics review enabling decentralised trials; single approval covers all Swiss cantons' }],
      },
      [TrialDesignClaim.PLATFORM_PROTOCOLS]: {
        score: 3,
        text: 'Switzerland has participated in major international platform trials (RECOVERY, REMAP-CAP) through Basel, Bern, and Zurich university hospitals. No Switzerland-initiated aging platform trial exists. SAKK (Swiss Group for Clinical Cancer Research) has platform trial experience. The capability exists; aging-specific platform trial leadership has not yet emerged domestically.',
        links: [{ label: 'SAKK Swiss Cancer Research Group', url: 'https://www.sakk.ch/en/', comment: 'SAKK — Swiss platform trial expertise in oncology; RECOVERY/REMAP-CAP participation; aging platform trials not yet initiated' }],
      },
      [TrialDesignClaim.RWE_INTEGRATION]: {
        score: 3,
        text: 'Swissmedic accepts real-world evidence for post-market surveillance and some label extension applications. RWE is not accepted as primary evidence for de novo approval. The Swiss quality registries and administrative data (Swiss National Cohort) provide useful post-market evidence. Swissmedic participates in international RWE harmonisation working groups and will likely expand RWE acceptance in alignment with EMA.',
        links: [{ label: 'Swissmedic RWE Guidance', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — RWE accepted for post-market and label extension; primary approval still requires traditional evidence' }],
      },
    },

    [TranslationField.REGULATORY_SANDBOXES]: {
      [RegulatorySandboxClaim.SANDBOX_EXISTENCE]: {
        score: 3,
        text: 'Switzerland has an "agile" regulatory environment rather than a formally named sandbox. Swissmedic offers extensive pre-submission scientific advice, early dialogue programmes (comparable to FDA Breakthrough Therapy consultations), and customised regulatory pathways. The Swiss Digital Health regulatory framework (2024) includes sandbox principles for digital health. A formal sandbox name does not exist; the equivalent capability does.',
        links: [{ label: 'Swissmedic Scientific Advice', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/scientific-advice-and-protocol-assistance.html', comment: 'Swissmedic — scientific advice programme; early dialogue for innovative products; functional sandbox equivalent' }],
      },
      [RegulatorySandboxClaim.BIOTECH_COVERAGE]: {
        score: 3,
        text: 'Swissmedic\'s ATMP pathway covers all advanced therapy medicinal products including gene therapies, cell therapies, and gene editing applications. Novel drug modalities can access Swissmedic\'s scientific advice and expedited review channels. The agile regulatory approach is available for any therapeutic modality where evidence supports use; gene therapy for aging-adjacent indications (sarcopenia, neurodegeneration) is explicitly within scope.',
        links: [{ label: 'Swissmedic ATMP Overview', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products/advanced-therapy-medicinal-products.html', comment: 'Swissmedic — ATMP pathway covers gene and cell therapies; novel modalities within scope; aging-adjacent applications included' }],
      },
      [RegulatorySandboxClaim.PATIENT_SCOPE]: {
        score: 3,
        text: 'Swissmedic\'s compassionate use programme and clinical trial authorisation framework allow patients with target indications to participate in early-phase trials. BASEC ethics approval extends to prevention studies in healthy adults. Frailty and aging-adjacent prevention studies can recruit from community settings. Broad patient eligibility for experimental aging interventions is achievable through existing ethics and regulatory pathways.',
        links: [{ label: 'BASEC Ethics Review Scope', url: 'https://www.basec.unibe.ch/index_eng.html', comment: 'BASEC — ethics review covers prevention studies; aging intervention participants eligible; community recruitment feasible' }],
      },
      [RegulatorySandboxClaim.LEGAL_PROTECTION]: {
        score: 3,
        text: 'Swiss law provides defined liability frameworks for clinical trial sponsors and investigators under the Human Research Act (HRA). Institutional indemnity coverage at ETH Zurich, EPFL, and university hospitals protects participating researchers. The Swiss liability framework for clinical research is clear and established. There is no explicit legal safe harbour specifically for sandbox-style novel therapy development — standard research liability applies.',
        links: [{ label: 'Swiss Human Research Act', url: 'https://www.bag.admin.ch/bag/en/home/medizin-und-forschung/biomedizin-und-forschung-am-menschen/humanforschungsgesetz.html', comment: 'Swiss HRA — defined liability framework for clinical research; institutional indemnity at ETH/EPFL/university hospitals' }],
      },
      [RegulatorySandboxClaim.LONGEVITY_APPLICABILITY]: {
        score: 2,
        text: 'No longevity-specific regulatory sandbox or named pathway exists. Novartis and Roche have informal early regulatory dialogue access with Swissmedic on aging programmes, reflecting industry density. The EKAH Federal Bioethics Commission regularly discusses aging biology policy. A formal longevity regulatory innovation programme has not been announced; aging interventions must use general Swissmedic pathways.',
        links: [{ label: 'Swiss Federal Commission Bioethics EKAH', url: 'https://www.ekah.admin.ch/en/home.html', comment: 'EKAH — bioethics and aging biology policy discussions; no formal longevity regulatory sandbox; general pathways apply' }],
      },
    },

    [TranslationField.AGING_ENDPOINT_ECOSYSTEM]: {
      [AgingEndpointClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'Swissmedic accepts EMA-qualified endpoints for aging indications: frailty indices, SPPB, grip strength, multi-domain composites. The Swissmedic-EMA work-sharing arrangement means Swiss regulatory endpoint science tracks EMA closely. No independent Swiss endpoint qualification process. EPFL and ETH have published extensively on epigenetic clock validation that could inform future Swissmedic endpoint qualification.',
        links: [{ label: 'Swissmedic EMA Collaboration', url: 'https://www.swissmedic.ch/swissmedic/en/home/international/bilateral.html', comment: 'Swissmedic — EMA work-sharing agreement; endpoint acceptance tracks EMA; frailty and functional composites accepted' }],
      },
      [AgingEndpointClaim.QUALIFICATION_PATHWAY]: {
        score: 3,
        text: 'Swissmedic follows EMA guidance on biomarker qualification — no additional formal processes beyond EMA alignment. The EPFL Auwerx lab and ETH longevity groups are among the world\'s leading developers of aging biomarker science (NAD metabolism, mitochondrial aging, epigenetic clocks). The Swiss Personalized Health Network (SPHN) includes aging biomarker standardisation as a priority. Qualification science is world-class; formal regulatory process tracks EMA.',
        links: [{ label: 'Swiss Personalized Health Network SPHN', url: 'https://sphn.ch/', comment: 'SPHN — national personalized health infrastructure; aging biomarker standardisation priority; qualification follows EMA pathways' }],
      },
      [AgingEndpointClaim.CODEV_FRAMEWORK]: {
        score: 3,
        text: 'Swissmedic supports companion diagnostic and biomarker co-development within its ATMP and personalised medicine frameworks. The close alignment with EMA means co-development IND frameworks used in Europe are available in Switzerland. EPFL and ETH\'s work on epigenetic clocks and proteomic aging scores has been conducted in parallel with therapy development in academic settings, demonstrating co-development feasibility.',
        links: [{ label: 'Swissmedic Personalised Medicine', url: 'https://www.swissmedic.ch/swissmedic/en/home.html', comment: 'Swissmedic — companion diagnostic co-development supported; EMA-aligned; EPFL aging biomarker research informs pathway' }],
      },
      [AgingEndpointClaim.REFERENCE_INFRASTRUCTURE]: {
        score: 3,
        text: 'The CoLaus cohort (Lausanne, 7,000+ participants, cardiometabolic aging) and the Swiss National Cohort (SNC, 8M+ individuals) provide reference population data with aging biomarkers. SPHN\'s biobank harmonisation programme is building a national aging biomarker reference infrastructure. The existing infrastructure is above continental European average but below what is needed for a fully operational regulatory reference dataset.',
        links: [{ label: 'Swiss National Cohort', url: 'https://www.swissnationalcohort.ch/', comment: 'SNC + CoLaus — aging biomarker reference infrastructure; SPHN harmonisation underway; strong but not yet regulatory-grade reference' }],
      },
      [AgingEndpointClaim.STANDARDIZATION]: {
        score: 3,
        text: 'SPHN has adopted standardised measurement protocols for core aging biomarkers across Swiss university hospital biobanks. ISBER and BBMRI-ERIC standards are followed by SBP member biobanks. ETH and EPFL publish extensively on aging biomarker standardisation methodology. Cross-study comparisons of aging biomarkers from Swiss cohorts are feasible. Full regulatory-grade harmonisation across all platforms is in progress.',
        links: [{ label: 'Swiss Biobanking Platform Standards', url: 'https://www.swissbiobanking.ch/', comment: 'SBP — BBMRI-ERIC and ISBER standard protocols; aging biomarker standardisation across 40+ biobanks; SPHN harmonisation mandate' }],
      },
    },
  },

  healthcare: {
    [HealthcareField.POPULATION_SCREENINGS]: {
      [PopulationScreeningClaim.CARDIOVASCULAR_RISK]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'FOPH recommends cardiovascular risk assessment (SCORE2) for adults 40–70. General practitioners conduct opportunistic cardiovascular screening but there is no systematic population-level invitation programme. The Swiss Heart Foundation coordinates awareness but not delivery. Screening rates are good among regularly consulting adults; those without regular GP contact are underserved.',
        links: [{ label: 'Swiss Heart Foundation', url: 'https://www.swissheartfoundation.ch/en/', comment: 'Swiss Heart Foundation — cardiovascular risk awareness; FOPH SCORE2 recommendation; GP-initiated; no population invitation' }],
      },
      [PopulationScreeningClaim.BREAST_CANCER]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Switzerland has national mammography screening recommendations but implementation is cantonal — resulting in significant geographic variation. Organised programmes exist in Vaud, Geneva, Zurich, and several other cantons; others offer opportunistic screening only. National rollout has been ongoing for over a decade without full cantonal coverage. Reimbursement by mandatory health insurance (KVG) is available for eligible women.',
        links: [{ label: 'FOPH Cancer Screening Switzerland', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/nationale-krebsstrategie/krebsfrueherkennung.html', comment: 'FOPH — national recommendations; cantonal mammography programmes; geographic variation persists; KVG reimbursement available' }],
      },
      [PopulationScreeningClaim.COLORECTAL_CANCER]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Colorectal cancer screening (FIT or colonoscopy) is recommended by FOPH from age 50 but implementation is cantonal. Organised bowel cancer screening programmes operate in only a handful of cantons (Vaud, Zurich, Basel-Stadt). This is a recognised gap relative to France, Germany, and Sweden. KVG reimbursement is available; uptake remains low outside organised cantonal programmes.',
        links: [{ label: 'FOPH Colorectal Cancer Screening', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/nationale-krebsstrategie/krebsfrueherkennung.html', comment: 'FOPH — colorectal screening recommended; cantonal organised programmes only in some cantons; coverage gap persists' }],
      },
      [PopulationScreeningClaim.CERVICAL_CANCER_HPV]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Swiss national cervical cancer screening guidelines recommend HPV primary testing every 5 years from age 25. Cantonal cervical screening programmes exist (organised in some cantons, opportunistic in others). KVG mandates reimbursement of HPV testing for eligible women. National HPV vaccination programme is well-established at over 80% coverage for adolescents. Cervical cancer rates are among the lowest in Europe.',
        links: [{ label: 'FOPH Cervical Cancer Prevention', url: 'https://www.bag.admin.ch/bag/en/home/medizin-und-forschung/impfungen/empfohlene-impfungen/hpv.html', comment: 'FOPH — HPV vaccination 80%+ coverage; cervical screening recommendations; KVG reimbursement; cantonal delivery' }],
      },
      [PopulationScreeningClaim.AAA_ULTRASOUND]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'One-time AAA ultrasound screening for men 65+ (or 55+ with smoking history) is recommended by Swiss Society of Angiology and cardiology societies. KVG reimbursement is available for eligible men. No organised national or cantonal invitation programme exists — screening is opportunistic via GP referral. Awareness among eligible men is limited without systematic invitation.',
        links: [{ label: 'Swiss Society of Angiology', url: 'https://angiologie.ch/', comment: 'Swiss angiology — AAA ultrasound recommendation; KVG-covered; opportunistic via GP; no organised programme' }],
      },
      [PopulationScreeningClaim.DIABETES_METABOLIC]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Diabetes screening follows FOPH and SGED (Swiss Society of Endocrinology) guidelines via GP opportunistic screening. No national diabetes screening programme equivalent to Japan\'s Tokutei Kenshin. Switzerland has near-universal GP registration enabling GP-based screening, but uptake depends on patient-initiated consultation. The annual check-up (Vorsorgeuntersuchung) is incentivised; HbA1c testing is reimbursed for at-risk groups.',
        links: [{ label: 'Swiss Society of Endocrinology SGED', url: 'https://www.sged.ch/en/', comment: 'SGED — diabetes screening guidelines; GP opportunistic model; KVG-reimbursed for at-risk; no systematic national programme' }],
      },
      [PopulationScreeningClaim.OSTEOPOROSIS_DEXA]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Swiss Society of Rheumatology and SGR (Swiss Geriatrics Society) recommend DXA for high-risk groups. SVGO (Swiss Association against Osteoporosis) runs awareness campaigns. No mandatory national programme; opportunistic screening via GP for post-menopausal women and older adults with risk factors. KVG reimburses DXA for eligible groups. Switzerland\'s high-quality healthcare ensures access for those seeking it; proactive population-level reach is limited.',
        links: [{ label: 'Swiss Association against Osteoporosis SVGO', url: 'https://www.svgo.ch/en/', comment: 'SVGO — osteoporosis screening guidance; high-risk group DXA; KVG-reimbursed; GP-initiated; no universal population programme' }],
      },
      [PopulationScreeningClaim.LUNG_CANCER_CT]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Swiss Society of Pneumology and oncology societies recommend low-dose CT (LDCT) for heavy smokers 50–74 years. KVG has not yet mandated routine reimbursement for LDCT lung cancer screening — individual cantons and private insurers sometimes cover it. A Swiss evaluation of population-wide LDCT is ongoing. Current access is primarily through research programmes and private insurance.',
        links: [{ label: 'Swiss Lung Association', url: 'https://www.lung.ch/en/', comment: 'Swiss Lung Association — LDCT awareness; specialist recommendation in place; KVG reimbursement pending; coverage patchy' }],
      },
      [PopulationScreeningClaim.ATRIAL_FIBRILLATION]: {
        score: ScreeningLevel.COST_SHARING,
        text: 'Swiss Society of Cardiology recommends opportunistic AF screening (pulse palpation or ECG) for adults 65+ during GP visits. No systematic population-level AF screening programme. Smartwatch-based AF detection is discussed in Swiss cardiology guidelines but not integrated into care pathways. KVG reimburses ECG when indicated; proactive population-wide pulse screening is not incentivised.',
        links: [{ label: 'Swiss Society of Cardiology', url: 'https://www.sgk.ch/en/', comment: 'Swiss Cardiology — AF screening recommendation for 65+; GP opportunistic model; no systematic programme; KVG reimbursement when indicated' }],
      },
      [PopulationScreeningClaim.COGNITIVE_DECLINE]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Alzheimer Switzerland and Memory Clinics at university hospitals operate cognitive screening, mainly targeting symptomatic individuals. No national population-based cognitive screening programme. FOPH has not recommended universal asymptomatic cognitive screening. Several cantonal programmes exist (Geneva Memory Clinic, Bern) but are resource-constrained and referral-driven. KVG covers assessment when clinically indicated.',
        links: [{ label: 'Alzheimer Switzerland', url: 'https://www.alzheimer-schweiz.ch/en/', comment: 'Alzheimer Switzerland — awareness and screening referral; Memory Clinics for symptomatic; no national population screening' }],
      },
      [PopulationScreeningClaim.POLYGENIC_RISK]: {
        score: ScreeningLevel.PRIVATE_ONLY,
        text: 'No Swiss national polygenic risk score (PRS) screening programme exists. Research use of PRS is active at EPFL and ETH — both are contributors to UK Biobank and SNC-linked PRS studies. Commercial PRS testing is available privately. Swiss SPHN biobank infrastructure supports PRS-based research but no clinical integration programme has been announced. PRS for longevity risk stratification remains research-stage.',
        links: [{ label: 'SPHN Genomics Infrastructure', url: 'https://sphn.ch/', comment: 'SPHN — PRS research active at ETH/EPFL; no national clinical PRS programme; private testing available' }],
      },
      [PopulationScreeningClaim.SARCOPENIA_MUSCLE_MASS]: {
        score: ScreeningLevel.FUNDED_PASSIVE,
        text: 'Swiss Frailty Network and Swiss Society of Geriatrics recommend SARC-F and grip strength assessment for older adults in geriatric care settings. Not part of any systematic population-level screening programme. University hospital geriatric assessment units conduct comprehensive frailty screening. Community-level sarcopenia screening coverage is limited.',
        links: [{ label: 'Swiss Society of Geriatrics Frailty', url: 'https://www.sgg-ssg.ch/en/', comment: 'SGG-SSG — frailty and sarcopenia screening in geriatric settings; SARC-F recommended; no population programme' }],
      },
      [PopulationScreeningClaim.SLEEP_APNEA]: {
        score: ScreeningLevel.ABSENT,
        text: 'No national OSA screening programme. Sleep Medicine Switzerland and cantonal sleep centres handle referral-based diagnosis. The STOP-BANG tool is used in some GP practices opportunistically. High-quality portable monitoring is reimbursed by mandatory health insurance once suspected — but proactive screening is absent.',
        links: [{ label: 'Sleep Medicine Switzerland', url: 'https://www.sgssc.ch/en/', comment: 'Swiss Society of Sleep Research — referral-based OSA diagnosis; no national proactive screening programme' }],
      },
      [PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY]: {
        score: 2,
        text: 'Switzerland\'s federated cantonal system is the main barrier to screening programme agility. New national programmes require FOPH recommendation, cantonal adoption, and funding agreement — a process that typically takes 5–8 years. Colorectal cancer screening expansion has been ongoing for over a decade without reaching all cantons. Scientific evidence quality is high; political implementation speed is among the lowest in Western Europe for screening programmes.',
        links: [{ label: 'FOPH Screening Programme Process', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/nationale-krebsstrategie/krebsfrueherkennung.html', comment: 'FOPH — cantonal screening programme adoption; 5–8 year FOPH-to-canton implementation timeline; structural cantonal barrier' }],
      },
    },

    [HealthcareField.AGING_BIOMARKER_COLLECTIONS]: {
      [BiomarkerCollectionClaim.PARTICIPATION_MODEL]: {
        score: 3,
        text: 'The Swiss National Cohort (SNC, 8M+ individuals, administrative data linkage) is one of Europe\'s largest admin-data cohorts and provides residual data by default linkage. CoLaus (Lausanne, 7,000+ opt-in participants, cardiometabolic aging) and Zurich Cohort Studies are large opt-in cohorts. The SPECCHIO cohort (Geneva, post-COVID aging) adds a novel dimension. No universal opt-out population biobank exists; participation is opt-in with good but not population-representative coverage.',
        links: [{ label: 'Swiss National Cohort SNC', url: 'https://www.swissnationalcohort.ch/', comment: 'SNC — 8M+ administrative data cohort; CoLaus 7,000+ opt-in; no opt-out universal biobank; diverse participation model' }],
      },
      [BiomarkerCollectionClaim.RESAMPLING_FREQUENCY]: {
        score: 3,
        text: 'CoLaus has completed three longitudinal waves (2003, 2009–2012, 2014–2017) with a fourth wave underway — approximately 5–8 year intervals of systematic resampling. Swiss Biobanking Platform (SBP) coordinates re-contact capability across 40+ biobanks. The Zurich Cohort and SHCS (HIV cohort with accelerated aging focus) have more frequent resampling. Overall, systematic 5–8 year re-sampling is available for major Swiss cohorts.',
        links: [{ label: 'CoLaus Cohort Lausanne', url: 'https://www.colaus-psycolaus.ch/', comment: 'CoLaus — three longitudinal waves; cardiometabolic aging biomarkers; 5–8 year resampling intervals; fourth wave planned' }],
      },
      [BiomarkerCollectionClaim.BIOMARKER_DEPTH]: {
        score: 5,
        text: 'EPFL (Auwerx lab, Bhatt lab) and ETH Zurich are global leaders in aging multi-omics: metabolomics of NAD metabolism, proteomics of aging hallmarks, single-cell transcriptomics of aging tissues, epigenetic clock development. Nestlé Research in Lausanne contributes nutrition-aging multi-omics. Roche and Novartis internal aging omics programmes are among the most advanced in industry. Switzerland\'s omics depth for aging is second only to the US in some specific domains.',
        links: [{ label: 'EPFL Auwerx Lab Multi-Omics', url: 'https://www.epfl.ch/labs/auwerx-lab/', comment: 'EPFL — world-leading NAD metabolism and mitochondrial aging multi-omics; single-cell, epigenetic, proteomic, metabolomic panels' }],
      },
      [BiomarkerCollectionClaim.CLINICAL_LINKAGE]: {
        score: 3,
        text: 'SPHN\'s BioMedIT secure data network enables EHR-biobank linkage across Swiss university hospitals. Cantonal hospital EHR systems (USZ eKAT, HUG/CHUV OpenEHR) are being harmonised under SPHN. The Swiss EPD (Electronic Patient Dossier) is in rollout phase — 2024 coverage remains low. Research EHR linkage is feasible at individual institution level; national-scale linkage requires multi-institutional agreements.',
        links: [{ label: 'SPHN BioMedIT Secure Network', url: 'https://sphn.ch/network/biomedit/', comment: 'SPHN BioMedIT — EHR-biobank linkage at university hospitals; national EPD rollout in progress; institutional-level linkage feasible' }],
      },
      [BiomarkerCollectionClaim.RESEARCHER_ACCESS]: {
        score: 3,
        text: 'Swiss Biobanking Platform (SBP) enables international researcher sample requests with a 2–4 month access process. BioMedIT provides secure data access to Swiss university hospital data for approved researchers. The EU-Switzerland data adequacy decision enables seamless data sharing with EU partners. Switzerland\'s biobanks are well-governed and actively accessible to international researchers — better than most continental European systems.',
        links: [{ label: 'Swiss Biobanking Platform Access', url: 'https://www.swissbiobanking.ch/', comment: 'SBP — international researcher access; 2–4 month process; EU adequacy enables seamless data sharing; SPHN BioMedIT for EHR data' }],
      },
    },

    [HealthcareField.PREVENTIVE_TRIALS]: {
      [PreventiveTrialsClaim.TRIAL_EFFICIENCY]: {
        score: 4,
        text: 'Swiss university hospitals are among Europe\'s most efficient clinical trial sites. Swissmedic\'s fast approval timelines, BASEC (single national ethics review since 2019), and English-language trial capacity make Switzerland highly attractive to international sponsors. Average approval-to-first-patient: 2–3 months — among the fastest in Europe. Switzerland punches above its weight in international trial portfolio.',
        links: [{ label: 'BASEC Swiss Ethics Commission', url: 'https://www.basec.unibe.ch/index_eng.html', comment: 'BASEC — centralised Swiss ethics review since 2019; single decision covers all cantons; 2–3 month approval-to-enrolment' }],
      },
      [PreventiveTrialsClaim.REGULATORY_RWE_ACCEPTANCE]: {
        score: 3,
        text: 'Swissmedic accepts real-world evidence for post-market surveillance and some label extension applications. RWE is not accepted as primary evidence for de novo approval. The Swiss quality registries and administrative data provide useful post-market evidence. Swissmedic participates in international RWE harmonisation (EMA-FDA-Health Canada working group).',
        links: [{ label: 'Swissmedic RWE Framework', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — RWE for post-market and label extension; primary approval still requires traditional evidence' }],
      },
      [PreventiveTrialsClaim.LONGEVITY_ENDPOINTS_USED]: {
        score: 3,
        text: 'Functional aging composites (SPPB, grip strength, EQ-5D) are used in Swiss aging trials and accepted by Swissmedic and BASEC. Epigenetic clock endpoints are used as exploratory secondaries in EPFL and University of Zurich trials. No biological age primary endpoint has been used in a regulatory submission to Swissmedic. Switzerland follows EMA precedents on endpoint acceptance.',
        links: [{ label: 'Swiss Clinical Trial Portal', url: 'https://clinicaltrials.gov/search?cntry=CH', comment: 'Swiss aging trials — functional endpoints used; exploratory biomarker endpoints in academic trials; EMA precedent followed' }],
      },
      [PreventiveTrialsClaim.AGING_AGENTS_IN_PREVENTION]: {
        score: 3,
        text: 'Swiss academic centres (EPFL, ETH, Basel, Zurich) have ongoing aging mechanism trials: NAD+ precursor studies (NMN, NR), senolytics (fisetin, dasatinib pilot studies), metformin aging pilot (Swiss TAME collaboration), and caloric restriction studies. Novartis has Phase I/II internal aging compound trials based in Switzerland. The academic pipeline is smaller than Japan or the US but the industry pipeline (Novartis, Roche) is substantial.',
        links: [{ label: 'ETH Zurich Aging Intervention Trials', url: 'https://ethz.ch/en/research.html', comment: 'ETH Zurich — active aging mechanism trials; NAD precursors, senolytics, caloric restriction; Novartis Phase I/II aging compounds' }],
      },
      [PreventiveTrialsClaim.NATIONAL_COORDINATION]: {
        score: 3,
        text: 'SCTO (Swiss Clinical Trial Organisation) coordinates multi-site clinical trials across Swiss university hospitals. SAKK handles oncology; no equivalent aging-specific coordinating body exists. BASEC\'s single national ethics review eliminates the multi-IRB problem. The coordination infrastructure is good — aging-specific mandate is absent.',
        links: [{ label: 'SCTO Swiss Clinical Trial Organisation', url: 'https://www.scto.ch/en/', comment: 'SCTO — national clinical trial coordination; covers all Swiss university hospitals; single-IRB BASEC review; no aging mandate' }],
      },
      [PreventiveTrialsClaim.PATIENT_TRIAL_ACCESS]: {
        score: 3,
        text: 'kofam (Swiss clinical trial registry, part of ICTRP) lists all Swiss-approved trials. The Swiss TPF (Trial Participation Facilitation) project at SCTO is developing patient-facing trial matching. University hospital websites list open trials. No national EHR-based automated patient-trial matching exists. Switzerland\'s small population partially compensates — researchers can contact clinician networks directly.',
        links: [{ label: 'kofam Swiss Trial Registry', url: 'https://www.kofam.ch/', comment: 'kofam — Swiss national trial registry; patient-facing search in DE/FR/IT; SCTO TPF improving trial matching' }],
      },
    },

    [HealthcareField.GERO_THERAPEUTIC_ENDPOINTS]: {
      [GeroEndpointsClaim.AGING_AS_INDICATION]: {
        score: 2,
        text: 'Swissmedic does not recognise aging as a therapeutic indication and follows EMA\'s current position. Frailty and sarcopenia are accepted indication categories. Switzerland\'s private pharma companies (Novartis, Roche) are the most active global proponents of aging indication recognition in regulatory policy forums — but Swissmedic as a regulator has not moved ahead of EMA on this.',
        links: [{ label: 'Swissmedic Indication Framework', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — follows EMA on indication recognition; frailty and sarcopenia accepted; aging not yet an independent indication' }],
      },
      [GeroEndpointsClaim.ENDPOINT_ACCEPTANCE]: {
        score: 3,
        text: 'Swissmedic accepts EMA-qualified endpoints for aging indications: frailty indices, SPPB, grip strength, multi-domain composites. The Swissmedic-EMA work-sharing arrangement means Swiss regulatory endpoint science tracks EMA closely. No independent Swiss endpoint qualification process. EPFL and ETH have published extensively on epigenetic clock validation that could inform future qualification submissions.',
        links: [{ label: 'Swissmedic EMA Collaboration', url: 'https://www.swissmedic.ch/swissmedic/en/home/international/bilateral.html', comment: 'Swissmedic — EMA work-sharing; endpoint acceptance tracks EMA; no independent qualification; EPFL clock research as future evidence base' }],
      },
      [GeroEndpointsClaim.HEALTHSPAN_VALUATION]: {
        score: 2,
        text: 'Switzerland\'s HTA body (Swiss Medical Board, FOPH) uses standard QALY-based assessments. No explicit Swiss HTA guidance on healthspan valuation or aging-prevention economics has been published. The Swiss quality-adjusted life year framework theoretically captures some healthspan value, but no Switzerland-specific methodology for aging intervention value has been developed. Novartis and Roche internal health economics teams are developing such frameworks, but these are not yet public HTA standards.',
        links: [{ label: 'Swiss Medical Board HTA', url: 'https://www.medical-board.ch/', comment: 'Swiss Medical Board — QALY-based HTA; no explicit healthspan valuation guidance; pharma sector developing frameworks internally' }],
      },
      [GeroEndpointsClaim.COVERAGE_PATHWAY]: {
        score: 2,
        text: 'KVG (mandatory health insurance) reimburses treatments that are effective, appropriate, and economical. No dedicated coverage pathway for aging-prevention agents exists under KVG. Off-label compassionate use of senolytics or NAD precursors is not routinely reimbursed. Academic hospital protocols can provide access within funded clinical trial settings. Switzerland\'s coverage gap for experimental aging agents is significant.',
        links: [{ label: 'KVG Swiss Mandatory Insurance', url: 'https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung.html', comment: 'KVG — effectiveness and economical criteria; no aging prevention coverage category; trial settings provide access' }],
      },
      [GeroEndpointsClaim.EXPEDITED_PATHWAY_ACCESS]: {
        score: 3,
        text: 'Swissmedic\'s expedited review (comparable to FDA Breakthrough Therapy designation) is available for innovative products that address unmet need. Aging-adjacent indications (sarcopenia, frailty, age-related neurodegeneration) have accessed expedited review at Swissmedic. No aging-specific designation category exists. Switzerland\'s small and responsive regulatory agency means that expedited review timelines are already shorter than EMA/FDA for all submissions.',
        links: [{ label: 'Swissmedic Expedited Review', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — expedited pathway for unmet medical need; aging-adjacent indications eligible; faster than EMA by default' }],
      },
    },
  },

  data: {
    [DataField.OPEN_ACCESS_TO_HEALTH_DATA]: {
      [OpenDataClaim.ACCESS_PROCESS]: {
        score: 3,
        text: 'SPHN (Swiss Personalized Health Network) is building a national health data platform linking university hospital EHR data via the BioMedIT secure infrastructure. SPHN data access via BioMedIT takes 2–4 months with IRB and data governance review. Individual hospital data access (USZ, CHUV, HUG) is faster — typically 4–8 weeks. Compared to Denmark (days) or Sweden (weeks), Switzerland\'s research data access is moderate. BASEC\'s centralised ethics review has improved speed substantially since 2019.',
        links: [{ label: 'SPHN Swiss Personalized Health Network', url: 'https://sphn.ch/', comment: 'SPHN — national health data platform; BioMedIT linking university hospitals; 2–4 month access process; improving with time' }],
      },
      [OpenDataClaim.LINKABILITY]: {
        score: 3,
        text: 'BioMedIT enables linkage of EHR, biobank, and registry data within the secure SPHN infrastructure. Swiss National Cohort links administrative data to death and cancer registries. Individual hospital linkage is good; cross-cantonal real-time linkage is developing. Switzerland\'s data linkage capability is above average for continental Europe but below Nordic standards.',
        links: [{ label: 'Swiss National Cohort Data Linkage', url: 'https://www.swissnationalcohort.ch/', comment: 'SNC — administrative + death registry + cancer registry linkage; BioMedIT for EHR linkage; below Nordic capability' }],
      },
      [OpenDataClaim.PRIVACY_RESOLUTION]: {
        score: 3,
        text: 'BioMedIT implements a code-to-data paradigm where algorithms execute at data sources without raw data export. The Swiss Federal Act on Data Protection (nFADP 2023) provides strong privacy framework. DataSHIELD and OPAL implementations at Swiss university hospitals support privacy-preserving federated computation. Standard de-identification and secure computing environments are established. Full TRE with automated disclosure control is in development.',
        links: [{ label: 'BioMedIT Secure Infrastructure', url: 'https://sphn.ch/network/biomedit/', comment: 'BioMedIT — code-to-data; DataSHIELD/OPAL; nFADP 2023; growing TRE capability; below OpenSAFELY tier' }],
      },
      [OpenDataClaim.AI_USE_GOVERNANCE]: {
        score: 3,
        text: 'Switzerland\'s nFADP (2023) and SPHN data governance framework define AI use pathways for health data. Researchers can apply for AI/ML workloads on BioMedIT infrastructure with ethics and data governance approval — 2–4 month process. EPFL and ETH AI research groups have established access protocols for health data ML projects. No dedicated AI researcher fast-track; standard process applies, but Swissmedic and SPHN are developing AI-specific guidance.',
        links: [{ label: 'SPHN AI/ML Data Access', url: 'https://sphn.ch/services/biomedit/', comment: 'SPHN — AI/ML workloads supported on BioMedIT; 2–4 month review; nFADP 2023 framework; dedicated AI tier in development' }],
      },
      [OpenDataClaim.CROSS_BORDER_SHARING]: {
        score: 4,
        text: 'Switzerland has an adequacy decision from the EU under GDPR — equivalent data protection is recognised. Switzerland participates in EHDS (European Health Data Space) preparatory discussions as an associated country. Cross-border research data sharing with EU partners is legally straightforward. Switzerland-EU data flows for research are among the most legally clear in Europe for a non-EU country, enabling near-seamless federated analysis with European partners.',
        links: [{ label: 'Switzerland EU Data Adequacy', url: 'https://www.edoeb.admin.ch/edoeb/en/home/data-protection/handel-und-wirtschaft/switzerland-eu.html', comment: 'Switzerland — EU adequacy decision; EHDS participation; streamlined cross-border research data sharing; model non-EU sharing environment' }],
      },
    },

    [DataField.INTEROPERABILITY_STANDARDS]: {
      [InteroperabilityClaim.EHR_COVERAGE]: {
        score: 3,
        text: 'Swiss cantonal hospital systems have achieved near-universal digital record adoption within their institutions. National EPD (Electronic Patient Dossier) rollout is legally mandated but adoption is slow — 2024 coverage remains low due to cantonal variation and citizen opt-in structure. University hospitals (USZ, CHUV, HUG, Inselspital) have well-developed EHR systems; community practices are more fragmented.',
        links: [{ label: 'Swiss Electronic Patient Dossier EPD', url: 'https://www.patientendossier.ch/en/', comment: 'EPD — legally mandated national EHR; slow adoption; university hospitals advanced; community practice fragmented' }],
      },
      [InteroperabilityClaim.TERMINOLOGY_COMPLIANCE]: {
        score: 4,
        text: 'Switzerland has mandated FHIR for the national EPD system — all EPD-certified systems must be FHIR-compliant. SPHN has adopted FHIR for its data sharing framework. HL7 Switzerland actively develops Swiss FHIR implementation guides. ICD-10-GM, LOINC, and SNOMED CT are adopted across university hospital EHR systems. Swiss adoption is ahead of most EU member states.',
        links: [{ label: 'HL7 Switzerland', url: 'https://www.hl7.ch/', comment: 'HL7 Switzerland — national FHIR implementation guides; EPD mandates FHIR; SNOMED CT + LOINC adopted at university hospitals' }],
      },
      [InteroperabilityClaim.REGISTRY_COMPLETENESS]: {
        score: 3,
        text: 'Switzerland has digital national registries for cancer, cardiovascular diseases, diabetes, and vital statistics. The Swiss National Cohort provides comprehensive administrative data linkage. Rare disease and mental health registries are in development. Cantonal variation means some condition registries are more complete in some regions. Registry coverage is above EU average but below Nordic benchmark.',
        links: [{ label: 'Swiss Cancer Registry', url: 'https://www.nkrs.admin.ch/', comment: 'Swiss National Cancer Registry — complete digital coverage; cardiovascular and diabetes registries digital; rare disease in progress' }],
      },
      [InteroperabilityClaim.DATA_FRESHNESS]: {
        score: 3,
        text: 'SPHN university hospital data is updated on quarterly or near-quarterly schedules for core clinical endpoints. Swiss National Cohort administrative data has an annual lag. Disease registry data (cancer, cardiovascular) typically has a 6–12 month lag from clinical event to research availability. BASEC\'s centralised review helps reduce administrative delays. Near-real-time access is available for select research partnerships at individual hospitals.',
        links: [{ label: 'SPHN Data Services', url: 'https://sphn.ch/services/', comment: 'SPHN — quarterly university hospital data updates; SNC annual lag; disease registries 6–12 months; improving via BioMedIT' }],
      },
      [InteroperabilityClaim.COMPUTABLE_PHENOTYPING]: {
        score: 3,
        text: 'SPHN has developed validated computable phenotyping algorithms for common conditions (cardiovascular risk, frailty, cancer) accessible to researchers through BioMedIT. The OHDSI Switzerland chapter provides OMOP-CDM cohort definition tools. Swiss Ageing Network uses validated frailty phenotype algorithms across university hospitals. A national phenotype library is emerging; self-service API queries are feasible for major disease categories.',
        links: [{ label: 'SPHN Phenotyping and BioMedIT', url: 'https://sphn.ch/services/biomedit/', comment: 'SPHN — validated phenotyping algorithms; OMOP OHDSI tools; frailty phenotypes; national library developing' }],
      },
    },

    [DataField.STANDARDIZED_TRIAL_ENDPOINTS]: {
      [ResearchClinicalClaim.SHARED_ONTOLOGIES]: {
        score: 4,
        text: 'SPHN has adopted OMOP-CDM as a primary common data model across Swiss university hospitals. All four university hospital systems (USZ, CHUV, HUG, Inselspital) are mapped to OMOP through BioMedIT. Switzerland is one of the more complete OMOP adopters in continental Europe. OHDSI Switzerland chapter is active. SPHN additionally uses Swiss-specific FHIR profiles harmonised with international ontologies.',
        links: [{ label: 'SPHN OMOP-CDM Implementation', url: 'https://sphn.ch/services/', comment: 'SPHN — OMOP-CDM mandated for BioMedIT network; all 4 university hospitals mapped; OHDSI participation; strong ontology standardisation' }],
      },
      [ResearchClinicalClaim.RESEARCH_COHORT_LINKAGE]: {
        score: 4,
        text: 'BioMedIT explicitly enables federated analysis — algorithms execute at data sources without raw data export. DataSHIELD and OPAL implementations at Swiss university hospitals support privacy-preserving federated computation. Swiss National Cohort provides research-registry linkage at population scale. Switzerland is among Europe\'s most advanced countries for federated health analytics infrastructure, driven by SPHN\'s national mandate.',
        links: [{ label: 'BioMedIT Federated Analytics', url: 'https://sphn.ch/services/biomedit/', comment: 'BioMedIT — federated compute at all Swiss university hospitals; DataSHIELD/OPAL; SNC population-scale research linkage' }],
      },
      [ResearchClinicalClaim.FAIR_DATA_COMPLIANCE]: {
        score: 3,
        text: 'SNF mandates data management plans and encourages FAIR data principles for all funded research. SPHN has adopted FAIR principles for its data sharing infrastructure. Swiss universities are signatories to FAIR data guidelines. Machine-readable metadata and persistent identifiers (DOI, ORCID) are standard for SNF-funded publications. A national machine-readable research data catalog is under development through SPHN and swissuniversities.',
        links: [{ label: 'SNF Data Management Plans', url: 'https://www.snf.ch/en/FihrMCfaKDBNYgmr/page/research-policies/open-research-data', comment: 'SNF — FAIR data mandate; data management plans required; open data deposit for funded research; catalog in development' }],
      },
      [ResearchClinicalClaim.PHARMACOVIGILANCE_FEEDBACK]: {
        score: 3,
        text: 'Switzerland\'s pharmacovigilance system (Swissmedic ElViS — electronic vigilance system) collects adverse event reports linked to Swiss authorised products. Swissmedic participates in EudraVigilance data sharing. Automated signal detection feeds into Swissmedic\'s regulatory decisions. BioMedIT infrastructure enables pharmacovigilance signals to be linked to Swiss biobank and EHR data for research hypothesis generation. Fully automated research feedback loops are in development.',
        links: [{ label: 'Swissmedic ElViS Pharmacovigilance', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/market-surveillance/pharmacovigilance.html', comment: 'Swissmedic ElViS — electronic pharmacovigilance; EudraVigilance participation; BioMedIT enabling research linkage' }],
      },
      [ResearchClinicalClaim.OPEN_SCIENCE_MANDATE]: {
        score: 3,
        text: 'SNF requires open access publication for all funded research (2020 mandate). Results reporting and data sharing plans are required for all SNF grants. Trial registration on kofam (Swiss national registry) is mandatory before participant enrolment. Code sharing is encouraged but not universally mandated. Switzerland\'s open science implementation is above EU average, driven primarily by SNF requirements.',
        links: [{ label: 'SNF Open Research Data Policy', url: 'https://www.snf.ch/en/FihrMCfaKDBNYgmr/page/research-policies/open-research-data', comment: 'SNF — open access mandate 2020; results reporting required; trial registration mandatory; code sharing encouraged' }],
      },
    },
  },

  international: {
    [InternationalField.REGULATORY_HARMONIZATION]: {
      [RegulatoryHarmonizationClaim.TRIAL_DATA_ACCEPTANCE]: {
        score: 4,
        text: 'Swissmedic routinely accepts foreign trial data from ICH-member countries as primary evidence for regulatory submissions. Switzerland\'s GMP mutual recognition agreements with EU, USA, Japan, Canada, and Australia mean regulatory data generated under these agreements is directly accepted. Swissmedic\'s simplified assessment for EMA-approved products reflects the highest level of trial data acceptance among non-EU regulators.',
        links: [{ label: 'Swissmedic MRA Agreements', url: 'https://www.swissmedic.ch/swissmedic/en/home/international/bilateral/mra.html', comment: 'Swissmedic MRA — trial data accepted from EU, USA, Japan, Canada, Australia; simplified EMA-approved product assessment' }],
      },
      [RegulatoryHarmonizationClaim.JOINT_REVIEW_PARTICIPATION]: {
        score: 4,
        text: 'Swissmedic participates in Project Orbis (FDA-led international oncology review programme) and bilateral joint review programmes with EMA, FDA, and Health Canada. Switzerland participated in the landmark joint rolling review of COVID-19 vaccines — demonstrating world-leading joint review capacity. Swissmedic\'s size enables agile participation; joint reviews are a standard offering for eligible submissions.',
        links: [{ label: 'Swissmedic Project Orbis', url: 'https://www.swissmedic.ch/swissmedic/en/home/international.html', comment: 'Swissmedic — Project Orbis participant; joint COVID-19 rolling review; FDA/EMA/Health Canada joint review programmes' }],
      },
      [RegulatoryHarmonizationClaim.STANDARD_ALIGNMENT]: {
        score: 5,
        text: 'Swissmedic is an ICH member (joined as full member 2018 after years as observer). Switzerland hosts the ICH Secretariat in Geneva — the highest possible participation level. Swissmedic co-authors ICH guidelines and implements them immediately. Switzerland\'s ICH engagement is exceptional for a non-EU, non-US, non-Japan country.',
        links: [{ label: 'ICH Secretariat Geneva', url: 'https://www.ich.org/page/organisation', comment: 'ICH — secretariat hosted in Geneva; Swissmedic full member; co-authors international regulatory guidelines; immediate implementation' }],
      },
      [RegulatoryHarmonizationClaim.FOREIGN_APPROVAL_RELIANCE]: {
        score: 4,
        text: 'Swissmedic implements a simplified assessment (abgekürzte Zulassung) for products already approved by EMA — significantly reducing review burden. FDA-approved products also benefit from expedited Swissmedic review. This reliance pathway is operational and regularly used. Switzerland grants approvals faster than many countries via this mechanism.',
        links: [{ label: 'Swissmedic Simplified Assessment', url: 'https://www.swissmedic.ch/swissmedic/en/home/medicinal-products/authorisation-of-medicinal-products.html', comment: 'Swissmedic — abgekürzte Zulassung for EMA-approved products; FDA-expedited review; active and regularly used' }],
      },
      [RegulatoryHarmonizationClaim.RECIPROCAL_RECOGNITION]: {
        score: 5,
        text: 'Switzerland has GMP mutual recognition agreements with EU, USA (FDA), Canada, Japan (PMDA), Australia (TGA), and others — one of the most extensive mutual recognition networks of any regulator. Swissmedic-approved products are accepted by EMA under simplified assessment. The EU-Switzerland MRA (Mutual Recognition Agreement) on medicinal products has been fully operational since 2002.',
        links: [{ label: 'Swissmedic MRA Network', url: 'https://www.swissmedic.ch/swissmedic/en/home/international/bilateral/mra.html', comment: 'Swissmedic — MRA with EU, USA, Canada, Japan, Australia; among broadest recognition networks globally; EMA simplified assessment' }],
      },
    },

    [InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE]: {
      [SharedPhysicalInfraClaim.BSL_ACCESS]: {
        score: 3,
        text: 'Swiss university hospitals and research institutes (EPFL, ETH, University of Bern, University of Zurich) maintain BSL-3 facilities accessible to approved researchers. Spiez Laboratory (federal biological defence laboratory) provides national BSL-3/4 capacity. EPFL and ETH have modern biosafety infrastructure for gene editing and cell biology research. Access is well-governed and available to Swiss and international academic researchers through institutional applications.',
        links: [{ label: 'Spiez Laboratory Switzerland', url: 'https://www.labor-spiez.ch/en/', comment: 'Spiez — national BSL-3/4 capacity; ETH/EPFL BSL-3 for research; accessible with institutional application' }],
      },
      [SharedPhysicalInfraClaim.GMP_CAPACITY]: {
        score: 5,
        text: 'Switzerland is the global capital of GMP pharmaceutical and CDMO manufacturing. Lonza (Visp and Basel) is the world\'s leading contract manufacturer of biologics and cell/gene therapies. Novartis and Roche operate world-class GMP manufacturing in Basel and the wider Swiss corridor. Multiple academic GMP suites at ETH Zurich and EPFL support clinical-grade cell therapy manufacturing for IIT (investigator-initiated trials). Switzerland\'s GMP ecosystem is unmatched globally for longevity-relevant advanced therapies.',
        links: [{ label: 'Lonza Cell and Gene Therapy Manufacturing', url: 'https://www.lonza.com/cell-gene-therapy', comment: 'Lonza — world\'s leading CDMO for cell/gene therapies; Visp and Basel GMP manufacturing; academic GMP suites at ETH/EPFL' }],
      },
      [SharedPhysicalInfraClaim.COMPUTE_INFRA]: {
        score: 4,
        text: 'CSCS (Swiss National Supercomputing Centre, Lugano) operates Alps — world-class supercomputer (top 10 globally) available to academic researchers through competitive access. BioMedIT secure cloud infrastructure supports genomics and aging research compute workloads. SIB (Swiss Institute of Bioinformatics) provides shared computational and bioinformatics tools. Switzerland\'s computing infrastructure per capita is among the best globally.',
        links: [{ label: 'CSCS Swiss Supercomputing', url: 'https://www.cscs.ch/', comment: 'CSCS — Alps supercomputer top 10 globally; academic access via proposals; SIB bioinformatics tools; BioMedIT secure cloud' }],
      },
      [SharedPhysicalInfraClaim.SEQUENCING_SCALE]: {
        score: 3,
        text: 'Swiss Biobanking Platform (SBP) coordinates sequencing across 40+ institutions. University of Zurich\'s Functional Genomics Center and EPFL\'s genomics core provide WGS and WES at research scale. Swiss national sequencing capacity supports 10k–50k scale cohorts. Long-read sequencing (Oxford Nanopore) is available at ETH and EPFL. Population-scale (100k+) programme does not exist; academic-scale sequencing is well-served.',
        links: [{ label: 'UZH Functional Genomics Center', url: 'https://www.fgcz.ch/', comment: 'FGCZ — Swiss research-scale genomics core; WGS and multi-omics; 10k–50k cohort scale; academic research served well' }],
      },
      [SharedPhysicalInfraClaim.MODEL_ORGANISM_PLATFORMS]: {
        score: 3,
        text: 'ETH Zurich and EPFL maintain dedicated aging model organism facilities including mouse lifespan studies, Caenorhabditis elegans platforms, and Drosophila facilities. The EPFL Auwerx lab is world-renowned for mitochondrial aging research in mouse models. EPFL and ETH share access to model organism facilities with Swiss and international collaborators. No national multi-site aging model organism programme (ITP-equivalent) exists; institutional platforms are excellent.',
        links: [{ label: 'EPFL Animal Facilities', url: 'https://www.epfl.ch/research/facilities/research-infrastructure/animal-facilities/', comment: 'EPFL — aging model organism platforms; C. elegans, Drosophila, mouse; shared access with collaborators; Auwerx lab mouse aging world-class' }],
      },
    },

    [InternationalField.INTERNATIONAL_RESEARCH_NETWORK]: {
      [IntlResearchNetworkClaim.CONSORTIUM_DEPTH]: {
        score: 5,
        text: 'Switzerland participates in virtually every major international aging research consortium: TAME trial network, Human Cell Atlas, OHDSI, ELIXIR (bioinformatics infrastructure), BBMRI-ERIC (biobanking), IMI (Innovative Medicines Initiative) aging projects, and numerous bilateral agreements. Swiss researchers (EPFL Auwerx, ETH Grosshans) lead international aging consortia. ETH Zurich\'s network of international collaborations is among the densest of any research institution globally.',
        links: [{ label: 'Switzerland ELIXIR Node', url: 'https://www.sib.swiss/elixir', comment: 'SIB — Switzerland\'s ELIXIR node; bioinformatics infrastructure for European aging research; major aging data contributor' }],
      },
      [IntlResearchNetworkClaim.DATA_SHARING_FRAMEWORKS]: {
        score: 5,
        text: 'Switzerland\'s EU adequacy decision, ICH membership, and extensive bilateral MRAs create the most internationally connected regulatory and research data sharing environment of any non-G7 country. Swiss researchers routinely participate in EU FP/Horizon consortia as associated country members. GA4GH-aligned federated data frameworks are implemented at EPFL and SIB. Data sharing with almost any research partner worldwide is legally streamlined.',
        links: [{ label: 'Switzerland Horizon Europe Association', url: 'https://www.sbfi.admin.ch/sbfi/en/home/research-and-innovation/international-cooperation-r-and-i/eu-framework-programmes-for-research.html', comment: 'SBFI — Switzerland Horizon Europe association; full research participation; EU adequacy + MRA network = best non-G7 data sharing' }],
      },
      [IntlResearchNetworkClaim.JOINT_FUNDING_ACCESS]: {
        score: 5,
        text: 'Switzerland has full Horizon Europe associated status, giving Swiss researchers equivalent access to EU funding as EU member states. Bilateral R&D agreements are active with the US (NSF-SNF), UK, Israel, Japan, and Singapore. Swiss universities co-PI on major EU ERC grants. The scale of joint funding access — Horizon + bilateral programmes + ETH/EPFL-specific partnerships — is exceptional for a country of 8.8M.',
        links: [{ label: 'SNF International Cooperation', url: 'https://www.snf.ch/en/FihrMCfaKDBNYgmr/page/international', comment: 'SNF — Horizon Europe associated; bilateral agreements with US/UK/Japan/Israel; full international co-PI grant access' }],
      },
      [IntlResearchNetworkClaim.FIELD_INFLUENCE]: {
        score: 4,
        text: 'Swiss aging researchers have outsized global influence relative to the country\'s size. EPFL\'s Auwerx lab (NAD metabolism, mitochondrial aging) and ETH Zurich aging groups are among the most-cited globally. Swiss researchers chair international geroscience societies and sit on editorial boards of Nature Aging, Cell Metabolism, and Aging Cell. The Lausanne-Basel-Zurich triangle is a primary European node for longevity science.',
        links: [{ label: 'EPFL Auwerx Lab Publications', url: 'https://www.epfl.ch/labs/auwerx-lab/publications/', comment: 'EPFL Auwerx — top-cited aging biology; Nature/Cell publications; international society leadership; European aging science hub' }],
      },
      [IntlResearchNetworkClaim.PATENT_COOPERATION]: {
        score: 5,
        text: 'Switzerland is a founding member of PCT and EPC (European Patent Convention). ETH Transfer and EPFL Technology Transfer are among Europe\'s most productive academic tech transfer offices. Novartis and Roche file more aging-related patents than any other companies globally. Switzerland\'s per-capita biotech patent filing rate is the highest in continental Europe. IP protection for longevity-relevant innovations is among the strongest globally.',
        links: [{ label: 'ETH Transfer IP Filing', url: 'https://ethz.ch/en/industry/transfer.html', comment: 'ETH Transfer — top academic tech transfer; Novartis/Roche aging patents world-leading; PCT+EPC founding member; highest per-capita biotech patents' }],
      },
    },
  },

  societal: {
    [SocietalField.SOCIETAL_READINESS]: {

      [SocialReadinessClaim.PUBLIC_TRUST_CLINICAL_SYSTEM]: {
        score: 4,
        text: 'Strong confidence in medical quality and access; Swiss residents cluster with high-trust neighbours on routine care and prevention.',
        links: [
          { label: 'OECD — Government at a Glance (Switzerland)', url: 'https://www.oecd.org/gov/switzerland-government-at-a-glance.htm', comment: 'Composite governance and institutional indicators' },
          { label: 'European Commission — Eurobarometer S&T (press)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_25_396', date: 'Feb 2025', comment: 'Regional comparator — EU fieldwork Sep–Oct 2024' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_SCIENCE_RESEARCH]: {
        score: 4,
        text: 'Domestic pharma and research culture support high science credibility; EU-wide 2024-field S&T barometer (Feb 2025 release) underscores a still broadly pro-science European public opinion environment around Switzerland.',
        links: [
          { label: 'European Commission — Eurobarometer S&T (press)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_25_396', date: 'Feb 2025', comment: 'EU27+ science attitudes — regional benchmark' },
        ],
      },
      [SocialReadinessClaim.PUBLIC_TRUST_STATE_HEALTH]: {
        score: 4,
        text: 'Federal and cantonal health governance (FOPH/BAG) retain comparatively high legitimacy; direct-democratic fights on single issues are normal politics, not PHA collapse.',
        links: [
          { label: 'OECD — Government at a Glance (Switzerland)', url: 'https://www.oecd.org/gov/switzerland-government-at-a-glance.htm', comment: 'Trust in national government context' },
          { label: 'European Commission — Eurobarometer S&T (press)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_25_396', date: 'Feb 2025', comment: 'Neighbouring EU sentiment on institutions and S&T' },
        ],
      },
      [SocialReadinessClaim.AGING_MEDIA_FRAMING]: {
        score: 2,
        text: 'Public discourse treats ageing as demographics, dignity, and care — plus lifestyle and prevention. Swiss PSB and English-language national media report population ageing and how people experience old age; pharmaceutical R&D on age-related disease does not translate into geroscience as ambient popular culture. End-of-life autonomy debates sit alongside pragmatic health reporting, not longevity escape velocity.',
        links: [
          { label: 'SWI swissinfo.ch — more older people in Switzerland', url: 'https://www.swissinfo.ch/eng/demographics/more-and-more-older-people-are-living-in-switzerland/87414790', comment: 'National PSB affiliate — statistics and social framing' },
          { label: 'SWI swissinfo.ch — when Swiss people "feel old"', url: 'https://www.swissinfo.ch/eng/demographics/swiss-people-only-feel-old-from-the-age-of-80/87438761', comment: 'Survey coverage — quality of life and perceptions of age' },
        ],
      },
      [SocialReadinessClaim.QUACKERY_RESISTANCE]: {
        score: 4,
        text: 'Swissmedic borderline guidance centres on presentation and pharmacological claims: products marketed with therapeutic or systemic rejuvenation claims fall under medicinal authorisation. SWK/Lauterkeitscode sets unfairness rules for health advertising. Supplement and cosmetic sectors are less aggressive than US/UK peers; rung 4 reflects strong borderline and advertising discipline — not asserted as global “drug-parity biomarker list” rung 5.',
        links: [
          { label: 'Swissmedic — Questions on delimitation', url: 'https://www.swissmedic.ch/swissmedic/en/home/services/questions-on-delimitation.html', comment: 'L+B — medicines vs food/cosmetics/devices; case-by-case classification' },
          { label: 'SWK — Swiss Fairness Commission (advertising self-regulation)', url: 'https://www.lauterkeit.ch/en/', comment: 'L+B — fairness code including health-related advertising' },
        ],
      },
    },
    [SocietalField.POLITICAL_READINESS]: {
      [PoliticalReadinessClaim.POLICY_COMMITMENT]: {
        score: 2,
        text: 'R: SNSF (SNF) funds biomedical and public-health research including ageing and chronic disease through competitive project grants (L+B at programme level) but without a federal ring-fenced “healthy longevity” line — typical rung-2 breadth. P: FOPH prevention and NCD strategy elements touch population health; national “healthy ageing” strategy text is primarily care-system and quality framing — only the parts that are prevention/NCD policy count toward P, not LTCI capacity. I: federal digital-health / interoperability policy (eHealth Suisse, EPR law) supplies I; cantonal execution fragments a single national B line. No multi-year federal flagship tying R+P+I for ageing in one statute. Private pharma R&D does not substitute for L+B here.',
        links: [
          { label: 'SNSF — funding areas (life sciences / medicine)', url: 'https://www.snf.ch/en/2BpF5JUPdEymO2mx/funding/funding-instruments', comment: 'R+B — federal research foundation; competitive grants' },
          { label: 'FOPH — Non-communicable diseases strategy', url: 'https://www.bag.admin.ch/bag/en/home/strategie-und-politik/nationale-gesundheitsstrategien/nicht-uebertragbare-krankheiten.html', comment: 'P+L — federal NCD / prevention strategy' },
          { label: 'eHealth Suisse', url: 'https://www.e-health-suisse.ch/en/', comment: 'I+L — national eHealth coordination' },
        ],
      },
      [PoliticalReadinessClaim.LEGISLATIVE_SALIENCE]: {
        score: 1,
        text: 'Federal Assembly and Federal Council decisions in 2024–2025 focused on implementing the 13th AHV pension payment and financing (Ständerat approval Dec 2024; VAT/contribution options) — pension-system and fiscal-demography framing. Palliative and eldercare strategy (BAG) remains social-protection led. No major-party or parliamentary line treats biological aging research or geroscience as a competing national mission.',
        links: [
          { label: 'Federal Assembly — news on 13th AHV implementation', url: 'https://www.parlament.ch/de/services/news/Seiten/2024/20241204090540715194158159026_bsd038.aspx', date: 'Dec 2024', comment: 'Council of States vote — 13th AHV-Rente timetable' },
          { label: 'Federal Social Insurance Office — 13th AHV implementation', url: 'https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ahv/reformen-revisionen/umsetzung-13-ahv-rente.html', date: 'from Oct 2024', comment: 'BSV — implementation and financing of 13th pension payment' },
        ],
      },
    },

  },
}

export default switzerland
