import type {Language} from '../lib/site-config';

type LocalizedText = Record<Language, string>;

export interface ThemeLens {
  title: LocalizedText;
  body: LocalizedText;
}

export interface CultureTheme {
  slug: string;
  number: string;
  title: LocalizedText;
  summary: LocalizedText;
  statement: LocalizedText;
  introduction: LocalizedText;
  lenses: ThemeLens[];
  relatedProjectIds: string[];
  relatedProgramSlugs: string[];
  accent: string;
}

export const cultureThemes: CultureTheme[] = [
  {
    slug: 'artists-practice',
    number: '01',
    title: {en: 'Artists & Practice', sq: 'Artistë & Praktikë'},
    summary: {
      en: 'Space, knowledge and exchange that help artistic practice develop with confidence.',
      sq: 'Hapësirë, dije dhe shkëmbim që ndihmojnë praktikën artistike të zhvillohet me siguri.'
    },
    statement: {
      en: 'Creative work needs more than visibility. It needs time, tools, rights knowledge and relationships.',
      sq: 'Puna krijuese kërkon më shumë se dukshmëri. Kërkon kohë, mjete, njohuri mbi të drejtat dhe marrëdhënie.'
    },
    introduction: {
      en: 'This theme brings together residencies, laboratories, production formats, professional learning and exchange. It focuses on the conditions that allow artists to test ideas, strengthen their practice and connect with wider cultural networks.',
      sq: 'Kjo temë bashkon rezidenca, laboratorë, formate prodhimi, mësim profesional dhe shkëmbim. Ajo fokusohet te kushtet që u mundësojnë artistëve të provojnë ide, të forcojnë praktikën dhe të lidhen me rrjete më të gjera kulturore.'
    },
    lenses: [
      {title:{en:'Develop',sq:'Zhvillo'},body:{en:'Residencies and laboratories create room to experiment, produce and learn by doing.',sq:'Rezidencat dhe laboratorët krijojnë hapësirë për eksperimentim, prodhim dhe të nxënë përmes praktikës.'}},
      {title:{en:'Protect',sq:'Mbro'},body:{en:'Copyright and intellectual-property literacy strengthen independence and professional confidence.',sq:'Njohja e të drejtës së autorit dhe pronësisë intelektuale forcon pavarësinë dhe sigurinë profesionale.'}},
      {title:{en:'Connect',sq:'Lidhu'},body:{en:'Exchange links artists with peers, institutions, audiences and new contexts.',sq:'Shkëmbimi lidh artistët me kolegë, institucione, publik dhe kontekste të reja.'}}
    ],
    relatedProjectIds:['project-artist-hub-lab','project-luzatart-culture','project-literary-voices-heine-poradeci'],
    relatedProgramSlugs:['art-professional-empowerment','culture-inclusive-education'],
    accent:'#f0cf22'
  },
  {
    slug: 'rights-access',
    number: '02',
    title: {en: 'Rights & Cultural Access', sq: 'Të Drejta & Qasje Kulturore'},
    summary: {
      en: 'Culture as a field of participation, authorship, fair access and public voice.',
      sq: 'Kultura si fushë pjesëmarrjeje, autorësie, qasjeje të drejtë dhe zëri publik.'
    },
    statement: {
      en: 'Access to culture includes the freedom to create, participate, understand your rights and be heard.',
      sq: 'Qasja në kulturë përfshin lirinë për të krijuar, për të marrë pjesë, për të njohur të drejtat dhe për t’u dëgjuar.'
    },
    introduction: {
      en: 'This theme connects cultural participation with rights literacy. It looks at how artists and communities can enter cultural life on fairer terms and how artistic work can open space for difficult public conversations.',
      sq: 'Kjo temë lidh pjesëmarrjen kulturore me njohjen e të drejtave. Ajo shqyrton si artistët dhe komunitetet mund të hyjnë në jetën kulturore në kushte më të drejta dhe si puna artistike mund të hapë hapësirë për biseda publike të vështira.'
    },
    lenses: [
      {title:{en:'Authorship',sq:'Autorësi'},body:{en:'Creators need practical knowledge to understand and manage the rights attached to their work.',sq:'Krijuesve u duhen njohuri praktike për të kuptuar dhe administruar të drejtat që lidhen me punën e tyre.'}},
      {title:{en:'Participation',sq:'Pjesëmarrje'},body:{en:'Clear and welcoming cultural formats reduce barriers and invite wider publics in.',sq:'Formatet e qarta dhe mikpritëse kulturore ulin barrierat dhe ftojnë publik më të gjerë.'}},
      {title:{en:'Public voice',sq:'Zë publik'},body:{en:'Art can make complex questions visible without reducing them to slogans.',sq:'Arti mund t’i bëjë pyetjet komplekse të dukshme pa i reduktuar në slogane.'}}
    ],
    relatedProjectIds:['project-open-spaces-lost-culture','project-save-blue-heart-europe','project-no-chemical-waste'],
    relatedProgramSlugs:['advancing-equity-rights','art-professional-empowerment'],
    accent:'#78c5e5'
  },
  {
    slug: 'learning-participation',
    number: '03',
    title: {en: 'Learning & Participation', sq: 'Mësim & Pjesëmarrje'},
    summary: {
      en: 'Inclusive cultural learning built through making, exchange and shared experience.',
      sq: 'Mësim kulturor gjithëpërfshirës i ndërtuar përmes krijimit, shkëmbimit dhe përvojës së përbashkët.'
    },
    statement: {
      en: 'People learn culture most deeply when they can enter it, question it and help shape it.',
      sq: 'Njerëzit e mësojnë kulturën më thellë kur mund të hyjnë në të, ta pyesin dhe të ndihmojnë në formësimin e saj.'
    },
    introduction: {
      en: 'Workshops, conversations, encounters and intergenerational exchange turn cultural activity into a shared learning environment. Participation is treated as contribution, not passive attendance.',
      sq: 'Punëtoritë, bisedat, takimet dhe shkëmbimi ndërbrezor e kthejnë veprimtarinë kulturore në një mjedis të përbashkët mësimi. Pjesëmarrja trajtohet si kontribut, jo si prani pasive.'
    },
    lenses: [
      {title:{en:'Make',sq:'Krijo'},body:{en:'Hands-on processes make ideas tangible and memorable.',sq:'Proceset praktike i bëjnë idetë të prekshme dhe të paharrueshme.'}},
      {title:{en:'Exchange',sq:'Shkëmbe'},body:{en:'Artists, educators and communities contribute different forms of knowledge.',sq:'Artistët, edukatorët dhe komunitetet sjellin forma të ndryshme dijeje.'}},
      {title:{en:'Include',sq:'Përfshi'},body:{en:'Welcoming formats create more entry points into cultural life.',sq:'Formatet mikpritëse krijojnë më shumë pika hyrjeje në jetën kulturore.'}}
    ],
    relatedProjectIds:['project-artist-hub-lab','project-literary-voices-heine-poradeci','project-luzatart-culture'],
    relatedProgramSlugs:['culture-inclusive-education','advancing-equity-rights'],
    accent:'#e98cab'
  },
  {
    slug: 'heritage-memory',
    number: '04',
    title: {en: 'Heritage & Memory', sq: 'Trashëgimi & Kujtesë'},
    summary: {
      en: 'Living heritage carried through sound, place, archives, storytelling and contemporary practice.',
      sq: 'Trashëgimi e gjallë e përcjellë përmes tingullit, vendit, arkivave, tregimit dhe praktikës bashkëkohore.'
    },
    statement: {
      en: 'Heritage stays alive when it can be heard, re-read, documented and shared across generations.',
      sq: 'Trashëgimia mbetet e gjallë kur mund të dëgjohet, rilexohet, dokumentohet dhe ndahet mes brezave.'
    },
    introduction: {
      en: 'This theme approaches heritage as a living resource rather than a fixed display. Sound, literature, place, collective memory and digital documentation become ways of connecting past experience with present cultural practice.',
      sq: 'Kjo temë e trajton trashëgiminë si burim të gjallë dhe jo si ekspozim të ngrirë. Tingulli, letërsia, vendi, kujtesa kolektive dhe dokumentimi digjital bëhen mënyra për të lidhur përvojën e së kaluarës me praktikën kulturore të sotme.'
    },
    lenses: [
      {title:{en:'Document',sq:'Dokumento'},body:{en:'Archives preserve material while making it easier to encounter again.',sq:'Arkivat ruajnë materiale duke i bërë më të lehta për t’u rizbuluar.'}},
      {title:{en:'Interpret',sq:'Interpreto'},body:{en:'Contemporary practice can reopen inherited stories from new perspectives.',sq:'Praktika bashkëkohore mund t’i rihapë historitë e trashëguara nga këndvështrime të reja.'}},
      {title:{en:'Transmit',sq:'Përcill'},body:{en:'Intergenerational exchange keeps knowledge active rather than ornamental.',sq:'Shkëmbimi ndërbrezor e mban dijen aktive dhe jo vetëm dekorative.'}}
    ],
    relatedProjectIds:['project-terminal-europe-week-2026','project-literary-voices-heine-poradeci','project-jazz-wine-2014','project-jazz-wine-2017'],
    relatedProgramSlugs:['heritage-sustainability','culture-inclusive-education'],
    accent:'#c7a26a'
  },
  {
    slug: 'public-space-environment',
    number: '05',
    title: {en: 'Public Space & Environment', sq: 'Hapësirë Publike & Mjedis'},
    summary: {
      en: 'Artistic work that connects place, ecology, public encounter and cultural responsibility.',
      sq: 'Punë artistike që lidh vendin, ekologjinë, takimin publik dhe përgjegjësinë kulturore.'
    },
    statement: {
      en: 'Culture changes meaning when it leaves the conventional venue and enters the places people share.',
      sq: 'Kultura ndryshon kuptim kur del nga hapësira konvencionale dhe hyn në vendet që njerëzit ndajnë.'
    },
    introduction: {
      en: 'This theme brings artistic practice into public and environmental contexts. It includes site-specific work, cultural encounters in shared spaces and artistic advocacy around landscape and ecological questions.',
      sq: 'Kjo temë e çon praktikën artistike në kontekste publike dhe mjedisore. Ajo përfshin punë site-specific, takime kulturore në hapësira të përbashkëta dhe advokim artistik rreth peizazhit dhe çështjeve ekologjike.'
    },
    lenses: [
      {title:{en:'Place',sq:'Vend'},body:{en:'The setting becomes part of the work, not simply its backdrop.',sq:'Vendi bëhet pjesë e punës dhe jo thjesht sfond i saj.'}},
      {title:{en:'Ecology',sq:'Ekologji'},body:{en:'Art can create attention around environmental questions and shared resources.',sq:'Arti mund të krijojë vëmendje rreth çështjeve mjedisore dhe burimeve të përbashkëta.'}},
      {title:{en:'Encounter',sq:'Takim'},body:{en:'Public-space formats bring cultural experience closer to everyday life.',sq:'Formatet në hapësirë publike e afrojnë përvojën kulturore me jetën e përditshme.'}}
    ],
    relatedProjectIds:['project-terminal-europe-week-2026','project-save-blue-heart-europe','project-no-chemical-waste','project-qyteti-brenda-oborrit'],
    relatedProgramSlugs:['heritage-sustainability','advancing-equity-rights'],
    accent:'#83a77b'
  },
  {
    slug: 'digital-culture-media',
    number: '06',
    title: {en: 'Digital Culture & Media', sq: 'Kulturë Digjitale & Media'},
    summary: {
      en: 'Archives, moving image, sound and cultural media as tools for access, memory and circulation.',
      sq: 'Arkiva, imazh në lëvizje, tingull dhe media kulturore si mjete për qasje, kujtesë dhe qarkullim.'
    },
    statement: {
      en: 'Digital tools matter when they help cultural work travel, remain accessible and preserve context.',
      sq: 'Mjetet digjitale kanë vlerë kur ndihmojnë punën kulturore të udhëtojë, të mbetet e aksesueshme dhe të ruajë kontekstin.'
    },
    introduction: {
      en: 'This theme connects documentation, archives, moving image, sound and new-media formats. The focus is not technology for its own sake, but how digital tools can extend cultural access, preserve material and create new forms of storytelling.',
      sq: 'Kjo temë lidh dokumentimin, arkivat, imazhin në lëvizje, tingullin dhe formatet e reja mediatike. Fokusi nuk është teknologjia në vetvete, por mënyra si mjetet digjitale mund të zgjerojnë qasjen kulturore, të ruajnë materialin dhe të krijojnë forma të reja tregimi.'
    },
    lenses: [
      {title:{en:'Archive',sq:'Arkivo'},body:{en:'Digital records make cultural material easier to preserve, find and revisit.',sq:'Regjistrat digjitalë e bëjnë materialin kulturor më të lehtë për t’u ruajtur, gjetur dhe rikthyer.'}},
      {title:{en:'Tell',sq:'Trego'},body:{en:'Sound, film and media formats create new ways to carry cultural stories.',sq:'Tingulli, filmi dhe formatet mediatike krijojnë mënyra të reja për të përcjellë histori kulturore.'}},
      {title:{en:'Circulate',sq:'Qarkullo'},body:{en:'Digital access can connect local practice with audiences beyond one place.',sq:'Qasja digjitale mund ta lidhë praktikën vendase me publik përtej një vendi të vetëm.'}}
    ],
    relatedProjectIds:['project-terminal-europe-week-2026','project-artist-hub-lab','project-open-spaces-lost-culture'],
    relatedProgramSlugs:['art-professional-empowerment','heritage-sustainability'],
    accent:'#b78fd6'
  }
];

export const themeBySlug = (slug: string) => cultureThemes.find((theme) => theme.slug === slug);
