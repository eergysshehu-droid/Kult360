import type {Language} from '../lib/site-config';

type LocalizedText = Record<Language, string>;

export interface ProgramPrinciple {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProgramFocusArea {
  slug: string;
  number: string;
  title: LocalizedText;
  summary: LocalizedText;
  statement: LocalizedText;
  introduction: LocalizedText;
  principles: ProgramPrinciple[];
  relatedProjectIds: string[];
  accent: string;
}

export const programFocusAreas: ProgramFocusArea[] = [
  {
    slug: 'art-professional-empowerment',
    number: '01',
    title: {
      en: 'ART & PROFESSIONAL EMPOWERMENT',
      sq: 'ART & FUQIZIM PROFESIONAL'
    },
    summary: {
      en: 'Supporting artists with practical tools, stronger networks and room to develop ambitious work.',
      sq: 'Mbështesim artistët me mjete praktike, rrjete më të forta dhe hapësirë për të zhvilluar punë ambicioze.'
    },
    statement: {
      en: 'Artistic practice becomes sustainable when talent is matched by knowledge, infrastructure and connection.',
      sq: 'Praktika artistike bëhet e qëndrueshme kur talenti shoqërohet me dije, infrastrukturë dhe lidhje.'
    },
    introduction: {
      en: 'This focus connects creative development with the professional conditions artists need to work with confidence: production space, peer exchange, rights literacy and pathways into wider cultural networks.',
      sq: 'Kjo fushë lidh zhvillimin krijues me kushtet profesionale që u duhen artistëve për të punuar me besim: hapësirë prodhimi, shkëmbim mes kolegësh, njohuri mbi të drejtat dhe hyrje në rrjete më të gjera kulturore.'
    },
    principles: [
      {
        title: {en: 'Develop practice', sq: 'Zhvillo praktikën'},
        body: {en: 'Residencies, laboratories and production formats create time to test ideas and make new work.', sq: 'Rezidencat, laboratorët dhe formatet e prodhimit krijojnë kohë për të provuar ide dhe për të realizuar punë të reja.'}
      },
      {
        title: {en: 'Protect the work', sq: 'Mbro punën'},
        body: {en: 'Copyright and intellectual-property knowledge strengthen artistic agency and long-term independence.', sq: 'Njohuritë mbi të drejtën e autorit dhe pronësinë intelektuale forcojnë autonominë artistike dhe pavarësinë afatgjatë.'}
      },
      {
        title: {en: 'Build networks', sq: 'Ndërto rrjete'},
        body: {en: 'Local and international exchange connects artists with collaborators, audiences and new contexts.', sq: 'Shkëmbimi vendor dhe ndërkombëtar i lidh artistët me bashkëpunëtorë, publik dhe kontekste të reja.'}
      }
    ],
    relatedProjectIds: ['project-artist-hub-lab', 'project-luzatart-culture', 'project-literary-voices-heine-poradeci'],
    accent: '#f0cf22'
  },
  {
    slug: 'advancing-equity-rights',
    number: '02',
    title: {
      en: 'ADVANCING EQUITY & RIGHTS',
      sq: 'BARAZI & TË DREJTA'
    },
    summary: {
      en: 'Advocating for cultural rights, fair access and the freedom to create and participate.',
      sq: 'Mbrojmë të drejtat kulturore, qasjen e barabartë dhe lirinë për të krijuar e marrë pjesë.'
    },
    statement: {
      en: 'Culture is a public right: a way to be heard, to take part and to shape the places we share.',
      sq: 'Kultura është e drejtë publike: një mënyrë për t’u dëgjuar, për të marrë pjesë dhe për të formësuar vendet që ndajmë.'
    },
    introduction: {
      en: 'This focus treats artistic expression as civic infrastructure. It brings visibility to overlooked voices, supports informed participation and creates cultural formats where questions of justice can be experienced together.',
      sq: 'Kjo fushë e trajton shprehjen artistike si infrastrukturë qytetare. Ajo u jep dukshmëri zërave të anashkaluar, mbështet pjesëmarrjen e informuar dhe krijon formate kulturore ku çështjet e drejtësisë përjetohen së bashku.'
    },
    principles: [
      {
        title: {en: 'Open access', sq: 'Qasje e hapur'},
        body: {en: 'Cultural encounters should welcome wider publics and reduce social, physical and informational barriers.', sq: 'Takimet kulturore duhet të mirëpresin publik më të gjerë dhe të zvogëlojnë barrierat shoqërore, fizike e informative.'}
      },
      {
        title: {en: 'Public voice', sq: 'Zë publik'},
        body: {en: 'Art can make urgent issues visible and create space for dialogue without flattening complexity.', sq: 'Arti mund t’i bëjë çështjet urgjente të dukshme dhe të krijojë hapësirë për dialog pa e thjeshtuar kompleksitetin.'}
      },
      {
        title: {en: 'Cultural agency', sq: 'Veprim kulturor'},
        body: {en: 'Rights literacy helps creators and communities participate on fairer, more confident terms.', sq: 'Njohja e të drejtave i ndihmon krijuesit dhe komunitetet të marrin pjesë në kushte më të drejta dhe me më shumë siguri.'}
      }
    ],
    relatedProjectIds: ['project-save-blue-heart-europe', 'project-no-chemical-waste', 'project-open-spaces-lost-culture'],
    accent: '#78c5e5'
  },
  {
    slug: 'culture-inclusive-education',
    number: '03',
    title: {
      en: 'CULTURE & INCLUSIVE EDUCATION',
      sq: 'KULTURË & EDUKIM GJITHËPËRFSHIRËS'
    },
    summary: {
      en: 'Opening culture to more people through inclusive learning, exchange and shared knowledge.',
      sq: 'E hapim kulturën për më shumë njerëz përmes të nxënit gjithëpërfshirës, shkëmbimit dhe dijes së përbashkët.'
    },
    statement: {
      en: 'Learning through culture is active, intergenerational and rooted in curiosity rather than hierarchy.',
      sq: 'Të nxënit përmes kulturës është aktiv, ndërbrezor dhe i rrënjosur te kureshtja, jo te hierarkia.'
    },
    introduction: {
      en: 'This focus turns artistic practice into a shared learning environment. Workshops, conversations and encounters connect different forms of knowledge and invite people to become contributors rather than spectators.',
      sq: 'Kjo fushë e kthen praktikën artistike në një mjedis të përbashkët të nxëni. Punëtoritë, bisedat dhe takimet lidhin forma të ndryshme dijeje dhe i ftojnë njerëzit të bëhen kontribues, jo vetëm spektatorë.'
    },
    principles: [
      {
        title: {en: 'Learn by making', sq: 'Mëso duke krijuar'},
        body: {en: 'Hands-on artistic processes make complex ideas tangible, social and memorable.', sq: 'Proceset artistike praktike i bëjnë idetë komplekse të prekshme, shoqërore dhe të paharrueshme.'}
      },
      {
        title: {en: 'Exchange knowledge', sq: 'Shkëmbe dije'},
        body: {en: 'Artists, educators and communities meet as peers with distinct experience to contribute.', sq: 'Artistët, edukatorët dhe komunitetet takohen si të barabartë, secili me përvojë të veçantë për të ndarë.'}
      },
      {
        title: {en: 'Invite participation', sq: 'Fto pjesëmarrjen'},
        body: {en: 'Clear, welcoming formats help more people enter cultural conversations and shape their outcomes.', sq: 'Formatet e qarta dhe mikpritëse ndihmojnë më shumë njerëz të hyjnë në biseda kulturore dhe të ndikojnë në rezultatet e tyre.'}
      }
    ],
    relatedProjectIds: ['project-qyteti-brenda-oborrit', 'project-artist-hub-lab', 'project-literary-voices-heine-poradeci'],
    accent: '#dd98ae'
  },
  {
    slug: 'heritage-sustainability',
    number: '04',
    title: {
      en: 'HERITAGE & SUSTAINABILITY',
      sq: 'TRASHËGIMI & QËNDRUESHMËRI'
    },
    summary: {
      en: 'Keeping living heritage active while building sustainable cultural futures.',
      sq: 'E mbajmë trashëgiminë e gjallë aktive ndërsa ndërtojmë të ardhme kulturore të qëndrueshme.'
    },
    statement: {
      en: 'Heritage stays alive when it can be heard, questioned and carried into new forms.',
      sq: 'Trashëgimia mbetet e gjallë kur mund të dëgjohet, të vihet në dialog dhe të bartet në forma të reja.'
    },
    introduction: {
      en: 'This focus joins memory with experimentation. It works across sound, place, archives and environmental awareness so that cultural inheritance remains relevant to the communities who carry it forward.',
      sq: 'Kjo fushë bashkon kujtesën me eksperimentimin. Ajo punon me tingullin, vendin, arkivat dhe ndërgjegjësimin mjedisor, në mënyrë që trashëgimia kulturore të mbetet e rëndësishme për komunitetet që e çojnë përpara.'
    },
    principles: [
      {
        title: {en: 'Activate memory', sq: 'Aktivizo kujtesën'},
        body: {en: 'Archives and inherited practices become material for new artistic encounters, not static display.', sq: 'Arkivat dhe praktikat e trashëguara bëhen material për takime të reja artistike, jo ekspozim statik.'}
      },
      {
        title: {en: 'Listen to place', sq: 'Dëgjo vendin'},
        body: {en: 'Site, landscape and local knowledge guide work that belongs to its cultural and ecological context.', sq: 'Vendi, peizazhi dhe dija lokale udhëheqin punën që i përket kontekstit të vet kulturor dhe ekologjik.'}
      },
      {
        title: {en: 'Carry it forward', sq: 'Çoje përpara'},
        body: {en: 'Sustainable cultural work builds continuity through documentation, exchange and responsible production.', sq: 'Puna kulturore e qëndrueshme ndërton vazhdimësi përmes dokumentimit, shkëmbimit dhe prodhimit të përgjegjshëm.'}
      }
    ],
    relatedProjectIds: ['project-terminal-europe-week-2026', 'project-jazz-wine-2017', 'project-open-spaces-lost-culture'],
    accent: '#86ad87'
  }
];

export const findProgramFocus = (slug: string): ProgramFocusArea | undefined =>
  programFocusAreas.find((program) => program.slug === slug);
