import type {Language} from '../lib/site-config';

type LocalizedText = Record<Language, string>;
export type ProjectMediaMode = 'photo' | 'poster' | 'archive';

export interface ProjectEditorialProfile {
  mediaMode: ProjectMediaMode;
  overview: LocalizedText;
  approach: LocalizedText;
  relatedThemeSlugs: string[];
}

export const projectEditorial: Record<string, ProjectEditorialProfile> = {
  'recognition-herbie-hancock-unesco': {
    mediaMode: 'archive',
    overview: {
      en: 'An archive recognition record documenting a public commendation connected to International Jazz Day and Eda Zari’s support for the initiative.',
      sq: 'Një regjistër arkivor njohjeje që dokumenton një vlerësim publik të lidhur me International Jazz Day dhe mbështetjen e Eda Zarit për nismën.'
    },
    approach: {
      en: 'This page preserves the recognition as part of KULT360’s wider cultural archive. It is presented as an archival record rather than as a project outcome.',
      sq: 'Kjo faqe e ruan vlerësimin si pjesë të arkivit më të gjerë kulturor të KULT360. Paraqitet si regjistër arkivor dhe jo si rezultat projekti.'
    },
    relatedThemeSlugs: ['artists-practice','digital-culture-media']
  },
  'project-qyteti-brenda-oborrit': {
    mediaMode: 'photo',
    overview: {
      en: 'A one-year cultural impact gathering framed around bringing culture from the periphery to the centre and opening KULT360’s current work to a live public.',
      sq: 'Një takim për një vit ndikim kulturor, i konceptuar rreth sjelljes së kulturës nga periferia në qendër dhe hapjes së punës aktuale të KULT360 ndaj publikut.'
    },
    approach: {
      en: 'The event functioned as a meeting point: performance, presentation and conversation were used to make the foundation’s activity visible in one shared setting.',
      sq: 'Eventi funksionoi si pikë takimi: performanca, prezantimi dhe biseda u përdorën për ta bërë veprimtarinë e fondacionit të dukshme në një hapësirë të përbashkët.'
    },
    relatedThemeSlugs: ['public-space-environment','learning-participation']
  },
  'project-terminal-europe-week-2026': {
    mediaMode: 'photo',
    overview: {
      en: 'A site-specific audio-visual intervention at the old Shkodra railway station, bringing sound, archive, moving image and collective memory into one spatial experience.',
      sq: 'Një ndërhyrje audio-vizuale site-specific në stacionin e vjetër hekurudhor të Shkodrës, që bashkon tingullin, arkivin, imazhin në lëvizje dhe kujtesën kolektive në një përvojë hapësinore.'
    },
    approach: {
      en: 'Rather than treating the station as a backdrop, the work uses the site itself as material: a place where arrival, departure, memory and present-day attention can overlap.',
      sq: 'Në vend që ta trajtojë stacionin si sfond, puna përdor vetë vendin si material: një hapësirë ku mbërritja, nisja, kujtesa dhe vëmendja e së tashmes mund të mbivendosen.'
    },
    relatedThemeSlugs: ['heritage-memory','public-space-environment','digital-culture-media']
  },
  'project-luzatart-culture': {
    mediaMode: 'photo',
    overview: {
      en: 'A rural residency and cultural exchange initiative in Luzat, bringing together visual artists, music producers and regional collaborators.',
      sq: 'Një nismë rezidence rurale dhe shkëmbimi kulturor në Luzat, që bashkon artistë pamorë, producentë muzikorë dhe bashkëpunëtorë rajonalë.'
    },
    approach: {
      en: 'The residency places artistic exchange inside a local setting, using time together, place and collaboration as the core conditions for making and conversation.',
      sq: 'Rezidenca e vendos shkëmbimin artistik brenda një konteksti lokal, duke përdorur kohën e përbashkët, vendin dhe bashkëpunimin si kushte themelore për krijim dhe bisedë.'
    },
    relatedThemeSlugs: ['artists-practice','learning-participation','heritage-memory']
  },
  'project-artist-hub-lab': {
    mediaMode: 'poster',
    overview: {
      en: 'A creative production and cinematic-scoring residency for student producers, focused on original film music, studio practice, copyright and intellectual property.',
      sq: 'Një rezidencë krijuese për prodhim dhe kompozim kinematografik për producentë studentë, me fokus te muzika origjinale për film, praktika në studio, e drejta e autorit dhe pronësia intelektuale.'
    },
    approach: {
      en: 'The format connects creative experimentation with professional knowledge, treating production technique and rights literacy as part of the same artistic practice.',
      sq: 'Formati lidh eksperimentimin krijues me dijen profesionale, duke trajtuar teknikën e prodhimit dhe njohjen e të drejtave si pjesë të së njëjtës praktikë artistike.'
    },
    relatedThemeSlugs: ['artists-practice','rights-access','digital-culture-media']
  },
  'project-literary-voices-heine-poradeci': {
    mediaMode: 'poster',
    overview: {
      en: 'A literary and music encounter in Pristina bringing lyric poetry, vinyl and conversation into dialogue through the work of Lasgush Poradeci and Heinrich Heine.',
      sq: 'Një takim letrar dhe muzikor në Prishtinë që sjell poezinë lirike, vinyl-in dhe bisedën në dialog përmes veprës së Lasgush Poradecit dhe Heinrich Heine.'
    },
    approach: {
      en: 'The event treats literature as a living encounter, connecting reading, listening and discussion rather than separating text from sound and audience.',
      sq: 'Eventi e trajton letërsinë si takim të gjallë, duke lidhur leximin, dëgjimin dhe diskutimin në vend që ta ndajë tekstin nga tingulli dhe publiku.'
    },
    relatedThemeSlugs: ['heritage-memory','learning-participation','artists-practice']
  },
  'project-open-spaces-lost-culture': {
    mediaMode: 'poster',
    overview: {
      en: 'An interactive cultural format around vinyl, slow culture, conversation, heritage and audience engagement.',
      sq: 'Një format kulturor interaktiv rreth vinyl-it, kulturës së ngadaltë, bisedës, trashëgimisë dhe angazhimit të publikut.'
    },
    approach: {
      en: 'The project frames listening and conversation as cultural practice, creating a slower public setting for attention, memory and exchange.',
      sq: 'Projekti e trajton dëgjimin dhe bisedën si praktikë kulturore, duke krijuar një ritëm publik më të ngadaltë për vëmendje, kujtesë dhe shkëmbim.'
    },
    relatedThemeSlugs: ['rights-access','heritage-memory','digital-culture-media']
  },
  'project-save-blue-heart-europe': {
    mediaMode: 'poster',
    overview: {
      en: 'A concert and artistic-advocacy series centred on the protection of Albanian and Balkan wild rivers, including the Vjosa and Valbona.',
      sq: 'Një seri koncertesh dhe advokimi artistik e përqendruar te mbrojtja e lumenjve të egër shqiptarë dhe ballkanikë, përfshirë Vjosën dhe Valbonën.'
    },
    approach: {
      en: 'The archive record shows how musical performance can be placed alongside environmental attention and public advocacy without separating culture from landscape.',
      sq: 'Regjistri arkivor tregon si performanca muzikore mund të vendoset pranë vëmendjes mjedisore dhe advokimit publik, pa e ndarë kulturën nga peizazhi.'
    },
    relatedThemeSlugs: ['public-space-environment','rights-access']
  },
  'project-no-chemical-waste': {
    mediaMode: 'poster',
    overview: {
      en: 'An artistic mobilisation associated with opposition to chemical and toxic-waste importation, including a large public concert in Tirana.',
      sq: 'Një mobilizim artistik i lidhur me kundërshtimin e importit të mbetjeve kimike dhe toksike, përfshirë një koncert të madh publik në Tiranë.'
    },
    approach: {
      en: 'This archive page focuses on the documented cultural action itself: artists using public performance to draw attention to an environmental and civic issue.',
      sq: 'Kjo faqe arkivore fokusohet te veprimi kulturor i dokumentuar: artistë që përdorin performancën publike për të sjellë vëmendje te një çështje mjedisore dhe qytetare.'
    },
    relatedThemeSlugs: ['public-space-environment','rights-access']
  },
  'project-jazz-wine-2017': {
    mediaMode: 'poster',
    overview: {
      en: 'The second Jazz & Wine International Festival Albania edition at Porto Palermo, combining jazz, polyphony, heritage, wine culture and environmental awareness.',
      sq: 'Edicioni i dytë i Jazz & Wine International Festival Albania në Porto Palermo, që bashkoi jazz-in, polifoninë, trashëgiminë, kulturën e verës dhe vëmendjen ndaj mjedisit.'
    },
    approach: {
      en: 'The festival uses a heritage landscape as more than scenery, bringing music, local culture and place into the same visitor experience.',
      sq: 'Festivali e përdor peizazhin e trashëgimisë si më shumë se skenografi, duke sjellë muzikën, kulturën vendase dhe vendin në të njëjtën përvojë.'
    },
    relatedThemeSlugs: ['heritage-memory','public-space-environment','artists-practice']
  },
  'project-jazz-wine-2014': {
    mediaMode: 'poster',
    overview: {
      en: 'The first Jazz & Wine International Festival Albania edition in Berat, connecting international jazz with Albanian heritage sites and regional wine culture.',
      sq: 'Edicioni i parë i Jazz & Wine International Festival Albania në Berat, që lidhi jazz-in ndërkombëtar me sitet e trashëgimisë shqiptare dhe kulturën rajonale të verës.'
    },
    approach: {
      en: 'The programme places live music inside a wider cultural itinerary, connecting performance with heritage and local identity.',
      sq: 'Programi e vendos muzikën live brenda një itinerari më të gjerë kulturor, duke lidhur performancën me trashëgiminë dhe identitetin lokal.'
    },
    relatedThemeSlugs: ['heritage-memory','artists-practice']
  }
};

export const projectEditorialFor = (id: string): ProjectEditorialProfile | undefined => projectEditorial[id];
export const projectMediaMode = (id: string): ProjectMediaMode => projectEditorial[id]?.mediaMode || 'photo';
