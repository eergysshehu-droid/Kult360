import type {Language} from '../lib/site-config';

type LocalizedText = Record<Language, string>;

export interface ThemeLens {
  title: LocalizedText;
  body: LocalizedText;
  article?: LocalizedText[];
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
      {
        title:{en:'Learn by making',sq:'Mëso duke krijuar'},
        body:{
          en:'Hands-on artistic processes turn abstract questions into material experience, giving people room to test, revise and understand through practice.',
          sq:'Proceset artistike praktike i kthejnë pyetjet abstrakte në përvojë konkrete, duke krijuar hapësirë për të provuar, rishikuar dhe kuptuar përmes praktikës.'
        },
        article:[
          {
            en:'In cultural learning, making is not simply the final activity after an idea has been explained. It is part of how the idea is understood. Working with image, sound, movement, text, objects or digital tools lets participants test a question in real time, notice what changes when a material resists, and discover forms of knowledge that rarely appear in a lecture.',
            sq:'Në mësimin kulturor, krijimi nuk është thjesht aktiviteti i fundit pasi një ide është shpjeguar. Ai është pjesë e mënyrës si ideja kuptohet. Puna me imazh, tingull, lëvizje, tekst, objekte ose mjete digjitale u lejon pjesëmarrësve ta provojnë një pyetje në kohë reale, të vërejnë çfarë ndryshon kur materiali kundërshton dhe të zbulojnë forma dijeje që rrallë shfaqen në një leksion.'
          },
          {
            en:'This approach values process as much as outcome. Sketches, rehearsals, prototypes and unsuccessful attempts become evidence of thinking rather than mistakes to hide. Artists and educators can guide the process without prescribing one correct result, leaving room for curiosity, experimentation and different ways of learning.',
            sq:'Kjo qasje i jep procesit po aq vlerë sa rezultatit. Skicat, provat, prototipet dhe përpjekjet që nuk funksionojnë bëhen dëshmi e të menduarit dhe jo gabime për t’u fshehur. Artistët dhe edukatorët mund ta udhëheqin procesin pa diktuar një rezultat të vetëm të saktë, duke lënë hapësirë për kuriozitet, eksperimentim dhe mënyra të ndryshme të të nxënit.'
          },
          {
            en:'For KULT360, learning by making means designing workshops and cultural encounters where participants leave with more than information. They gain a method: observe, try, discuss, adjust and make again. That method can travel into artistic practice, education and everyday civic life.',
            sq:'Për KULT360, të mësuarit përmes krijimit do të thotë të projektojmë punëtori dhe takime kulturore ku pjesëmarrësit largohen me më shumë se informacion. Ata fitojnë një metodë: vëzhgo, provo, diskuto, përshtat dhe krijo sërish. Kjo metodë mund të kalojë në praktikën artistike, arsim dhe jetën e përditshme qytetare.'
          }
        ]
      },
      {
        title:{en:'Exchange knowledge',sq:'Shkëmbe dije'},
        body:{
          en:'Artists, educators and communities meet as peers, bringing distinct experience, methods and local knowledge into the same conversation.',
          sq:'Artistët, edukatorët dhe komunitetet takohen si të barabartë, duke sjellë në të njëjtën bisedë përvoja, metoda dhe dije lokale të ndryshme.'
        },
        article:[
          {
            en:'Cultural knowledge does not live in one institution or profession. It can be found in studios and classrooms, but also in archives, neighbourhoods, family memory, craft practices and lived experience. Meaningful exchange begins when these sources are treated as contributions rather than placed in a fixed hierarchy.',
            sq:'Dija kulturore nuk jeton vetëm në një institucion apo profesion. Ajo gjendet në studio dhe klasa, por edhe në arkiva, lagje, kujtesë familjare, praktika zejtare dhe përvojë të jetuar. Shkëmbimi me kuptim fillon kur këto burime trajtohen si kontribute dhe jo vendosen në një hierarki të pandryshueshme.'
          },
          {
            en:'A strong exchange format gives people enough structure to listen, compare and question without turning the encounter into a one-way presentation. Artists can share process, educators can frame context, and communities can add knowledge that changes the reading of a work or a place. Documentation and clear attribution help that knowledge travel without losing where it came from.',
            sq:'Një format i mirë shkëmbimi u jep njerëzve strukturë të mjaftueshme për të dëgjuar, krahasuar dhe pyetur, pa e kthyer takimin në një prezantim njëkahësh. Artistët mund të ndajnë procesin, edukatorët mund të vendosin kontekstin dhe komunitetet mund të sjellin dije që ndryshon mënyrën si lexohet një vepër ose një vend. Dokumentimi dhe atribuimi i qartë ndihmojnë që kjo dije të qarkullojë pa humbur origjinën e saj.'
          },
          {
            en:'For KULT360, exchange is reciprocal. Invited experts are not only speakers, and local participants are not only an audience. Each encounter should leave something usable behind: a method, a note, a recording, a new relationship, a sharper question or the beginning of a collaboration. In this way, knowledge exchange becomes cultural infrastructure rather than a single event.',
            sq:'Për KULT360, shkëmbimi është i ndërsjellë. Ekspertët e ftuar nuk janë vetëm folës dhe pjesëmarrësit lokalë nuk janë vetëm publik. Çdo takim duhet të lërë pas diçka të përdorshme: një metodë, një shënim, një regjistrim, një marrëdhënie të re, një pyetje më të qartë ose fillimin e një bashkëpunimi. Në këtë mënyrë, shkëmbimi i dijes bëhet infrastrukturë kulturore dhe jo vetëm një ngjarje e vetme.'
          }
        ]
      },
      {
        title:{en:'Open participation',sq:'Hap pjesëmarrjen'},
        body:{
          en:'Welcoming formats create several ways to enter cultural life, contribute and remain part of the process.',
          sq:'Formatet mikpritëse krijojnë disa mënyra për të hyrë në jetën kulturore, për të kontribuar dhe për të mbetur pjesë e procesit.'
        },
        article:[
          {
            en:'Participation is not created by simply opening the door. It is designed through practical choices: where an activity happens, when it takes place, how much it costs, what language is used and whether people understand what is expected of them. These details can determine who feels invited before the artistic programme even begins.',
            sq:'Pjesëmarrja nuk krijohet vetëm duke hapur derën. Ajo projektohet përmes zgjedhjeve praktike: ku zhvillohet një aktivitet, kur ndodh, sa kushton, çfarë gjuhe përdoret dhe nëse njerëzit e kuptojnë çfarë pritet prej tyre. Këto hollësi mund të përcaktojnë se kush ndihet i ftuar përpara se programi artistik të fillojë.'
          },
          {
            en:'Inclusive cultural formats offer more than one way to take part. Someone may want to make, another to speak, another to observe first, respond privately or return later. Giving participants different entry points can widen access without forcing everyone into the same behaviour or level of visibility.',
            sq:'Formatet kulturore gjithëpërfshirëse ofrojnë më shumë se një mënyrë pjesëmarrjeje. Dikush mund të dëshirojë të krijojë, dikush të flasë, një tjetër të vëzhgojë fillimisht, të përgjigjet privatisht ose të rikthehet më vonë. Ofrimi i pikave të ndryshme të hyrjes mund ta zgjerojë qasjen pa i detyruar të gjithë në të njëjtën sjellje ose nivel dukshmërie.'
          },
          {
            en:'The aim is not to erase difference, but to create a common frame where different ages, backgrounds and levels of experience can contribute with dignity. When participation is treated as part of the artistic and educational design, audiences can become collaborators and cultural spaces can become places of belonging.',
            sq:'Qëllimi nuk është të fshihen dallimet, por të krijohet një kornizë e përbashkët ku mosha, prejardhje dhe nivele të ndryshme përvoje mund të kontribuojnë me dinjitet. Kur pjesëmarrja trajtohet si pjesë e dizajnit artistik dhe edukativ, publiku mund të bëhet bashkëpunëtor dhe hapësirat kulturore mund të bëhen vende përkatësie.'
          }
        ]
      }
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
