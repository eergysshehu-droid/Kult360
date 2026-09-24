import type {Language} from '../lib/site-config';

type Copy = Record<Language, string>;

export const copy = {
  heroEyebrow: {en: 'KULT360 Foundation', sq: 'Fondacioni KULT360'} as Copy,
  heroTitle: {en: 'Empowering Albanian artists & culture.', sq: 'Fuqizojmë artistët dhe kulturën shqiptare.'} as Copy,
  heroBody: {
    en: 'A cultural platform connecting artistic practice, rights, inclusive education, heritage and sustainability.',
    sq: 'Një platformë kulturore që lidh praktikën artistike, të drejtat, edukimin gjithëpërfshirës, trashëgiminë dhe qëndrueshmërinë.'
  } as Copy,
  exploreProjects: {en: 'Explore projects', sq: 'Shiko projektet'} as Copy,
  getInvolved: {en: 'Get involved', sq: 'Përfshihu'} as Copy,
  featuredProjects: {en: 'Selected projects', sq: 'Projekte të zgjedhura'} as Copy,
  focusAreas: {en: 'Focus areas', sq: 'Fushat e fokusit'} as Copy,
  journal: {en: 'From the Journal', sq: 'Nga Ditari'} as Copy,
  people: {en: 'People', sq: 'Ekipi'} as Copy,
  partners: {en: 'Partners & collaborators', sq: 'Partnerë & bashkëpunëtorë'} as Copy,
  readMore: {en: 'View record', sq: 'Shiko më shumë'} as Copy,
  archiveNote: {
    en: 'This local preview uses verified public migration data. Full editorial copy is still under review where the source archive was incomplete.',
    sq: 'Ky preview lokal përdor të dhëna publike të verifikuara nga migrimi. Teksti i plotë editorial mbetet në rishikim aty ku arkivi burimor ishte i paplotë.'
  } as Copy
};
