export type ProfileItem = {
  title?: string;
  body: string;
  meta?: string;
};

export type ProfileSection = {
  title: string;
  items: ProfileItem[];
};

export type TeamProfile = {
  quote?: string;
  quoteBy?: string;
  bio: string[];
  highlightColumns: {
    title: string;
    items: ProfileItem[];
  }[];
  languages?: string;
  sections: ProfileSection[];
};

export const teamProfiles: Record<string, TeamProfile> = {
  'person-eda-zari': {
    quote: 'I believe music is the foundational language that breaks all borders: it goes beyond the colour of skin, countries, or cultural differences. My mission is to inspire people to work together to educate, nourish, and protect our new generation.',
    quoteBy: 'Eda Zari',
    bio: [
      'Born in Tirana, Albania (1971) and relocated to Germany at age 18, Eda Zari is a multifaceted artist who stands as a visionary force with a diverse range of roles, including music producer, singer, composer, festival curator, project manager, and activist. With a diverse background in cultural development, she has made significant contributions to the arts and has facilitated cross-cultural collaborations.'
    ],
    highlightColumns: [
      {
        title: 'Key Highlights',
        items: [
          {title: 'Pioneer of World Music', body: 'Masterfully fusing traditional Albanian music with jazz to create an authentic niche in the global music scene.'},
          {title: 'Artistic & Academic Excellence', body: 'A creative force with fifteen music albums and a Master of Arts in Opera and Dramaturgy from the Cologne University of Music.'},
          {title: 'Cultural Heritage', body: 'Deeply rooted in the thousand-year vocal tradition of Albanian music since childhood.'}
        ]
      },
      {
        title: 'Strategic Leadership',
        items: [
          {title: 'Music Production', body: 'Co-founder of Mirela Records and Neon Media Prod (Germany), and Founder/Executive Producer of Kaba Music Prod.'},
          {title: 'Founder/Director', body: 'Established and directs the Jazz & Wine International Festival Albania since 2014.'},
          {title: 'Industry Expertise', body: '30 years of expertise with German copyright agencies GEMA and GVL.'}
        ]
      }
    ],
    languages: 'Albanian (mother tongue), German (fluent / professional proficiency), English (fluent).',
    sections: [
      {
        title: 'Select Performance Highlights',
        items: [
          {body: 'Cologne Philharmonic, Germany'},
          {body: 'World Trade Center, New York, USA'},
          {body: 'Blue Note, New York City, USA'},
          {body: 'The Palace of Congresses, Tirana'},
          {body: 'The Albanian Opera Hall, Tirana'},
          {body: 'Beethoven Hall, Bonn, Germany'},
          {body: 'Expo 2000, Hanover, Germany'},
          {body: 'The Düsseldorf Philharmonic Tonhalle'}
        ]
      },
      {
        title: 'Discography',
        items: [
          {title: 'Art of Time', body: 'Laika Records, Germany', meta: '1997'},
          {title: 'Lazy Standard', body: 'K&K Verlagsanstalt, Germany', meta: '1998'},
          {title: 'The Spirit of Jazz', body: 'Greenhouse Label, Germany', meta: '1999'},
          {title: 'Statement', body: 'Intuition Music, Germany', meta: '2002'},
          {title: 'Toka Incognita', body: 'Intuition, Germany', meta: '2011'},
          {title: 'Entropy', body: 'Enja Records, Germany', meta: '2016'},
          {title: 'Palimpsest (Double LP)', body: 'Kaba Music Rec., Germany', meta: '2022'}
        ]
      },
      {
        title: 'Mission in Focus',
        items: [
          {title: 'Intangible Cultural Heritage', body: 'Champions Albania’s living traditions by revitalizing and reinterpreting ancient forms like iso-polyphony and epic songs for contemporary audiences.'},
          {title: 'Natural Heritage & Sustainability', body: 'A leading voice in campaigns to protect the Vjosa and Valbona rivers, using her platform to defend Albania’s natural monuments.'},
          {title: 'Dissonant Heritage / Collective Memory', body: 'Uses her art to address Albania’s difficult past, advocating for remembrance and treating the communist dictatorship as an essential nexus for understanding Albanian identity.'},
          {title: 'Revitalization of Historic Sites', body: 'Transforms static monuments into vibrant stages for cultural exchange by hosting international events such as the Jazz & Wine International Festival Albania.'},
          {title: 'Community Cohesion', body: 'Advocates for the use of music for healing and conflict resolution, serving as a tool for engaging marginalized communities.'}
        ]
      }
    ]
  },

  'person-ergys-shehu': {
    quote: 'Vision does not ask for permission. It demands a field of action. In the digital age, man is the important creative mind, not the algorithm. True art is complicated human simplicity; it is the clear voice amidst the noise.',
    quoteBy: 'Ergys Shehu',
    bio: [
      'Ergys Shehu is a systematic and multifunctional visual professional who merges classical painting skills with the mastery of digital production. As a commercial photographer and an award-winning director, he provides a unique aesthetic advantage to cultural development. In his role as Executive Director of the Kult 360 Foundation, he connects heritage with technology through creative leadership.',
      'Shehu is a dominant figure in Islamic Decorative Arts, with mural projects in over 40 worship sites across the Balkans and Europe. His work masterfully synthesizes Arabic Calligraphy, Geometric Patterns, and Arabesque motifs, bridging tradition and contemporary sacred design.'
    ],
    highlightColumns: [
      {
        title: 'Key Highlights',
        items: [
          {title: 'Conceptual Artist', body: 'Murals in 40+ worship sites, specializing in calligraphy and sacred motifs.'},
          {title: 'Commercial Master', body: '10+ years as expert commercial photographer for top advertising campaigns.'},
          {title: 'Award-Winning Director', body: 'Best Director at Netët e Klipit Shqiptar (2020).'}
        ]
      },
      {
        title: 'Strategic Leadership',
        items: [
          {title: 'Cultural Innovation', body: 'Implements AR/VR and immersive tech for heritage programs at Kult 360.'},
          {title: 'Founder', body: 'Established ALERT Visual Production Studio in 2017.'},
          {title: 'Academic Foundation', body: 'BA in Painting and Graphic Design, informing all visual mediums.'}
        ]
      }
    ],
    languages: 'Albanian (mother tongue), English (fluent).',
    sections: [
      {
        title: 'Professional Timeline',
        items: [
          {body: 'Launched career in Islamic Decorative Arts at age 20 (40+ sacred sites)'},
          {body: 'Bachelor of Arts in Painting and Graphic Design'},
          {body: '10+ years in commercial photography and digital retouching'},
          {body: 'Founded ALERT Visual Production Studio', meta: '2017'},
          {body: 'Best Director Award at Netët e Klipit Shqiptar', meta: '2020'},
          {body: 'Executive Director, Kult 360 Foundation (AR/VR Curation)'}
        ]
      },
      {
        title: 'Core Competencies',
        items: [
          {title: 'Ad Photography & Videography', body: 'Full-cycle project management for global brands.'},
          {title: 'Islamic Decorative Arts', body: 'Calligraphy, geometry, and arabesques for sacred spaces.'},
          {title: 'Digital Post-Production', body: 'High-end retouching for commercial and artistic outcomes.'},
          {title: 'Creative Direction & DoP', body: 'Directing music videos and cultural documentaries.'},
          {title: 'Cultural Curation', body: 'Immersive AR/VR exhibitions bridging heritage and tech.'}
        ]
      },
      {
        title: 'Mission in Focus',
        items: [
          {title: 'Heritage-Tech Fusion', body: 'Using AR/VR to make sacred traditions accessible to global audiences.'},
          {title: 'Artistic Synergy', body: 'Elevating cultural projects with high-value advertising production standards.'},
          {title: 'Sacred Preservation', body: 'Documenting and revitalizing Balkan worship sites through non-figurative motifs.'},
          {title: 'Executive Vision', body: 'Directing programs that blend painting, graphics, and sustainable development.'}
        ]
      }
    ]
  },

  'person-eda-elbasani': {
    quote: 'My vision is an equal and flourishing society, because we cannot achieve full success when half of us is held back. As a woman, a mother, and a professional, I aim to inspire and empower the endless potential of women, building a healthier and more just future for all.',
    quoteBy: 'Enkelejda Elbasani',
    bio: [
      'Enkelejda Elbasani is an influential figure in Albania, renowned for her commanding presence in media and her profound contributions to healthcare. With a diverse educational foundation, she graduated as a Dental Surgeon from the Faculty of Medicine in Tirana in 1999, followed by a Master’s in Public Health from the ASPHER Postgraduate School of Public Health in 2005.',
      'Her healthcare leadership includes pivotal roles such as Head of the Stomatological Service at the Ministry of Health and Chief Inspector at the State Stomatological Inspectorate. Parallel to this, her media career is equally dynamic: moderating news on national channels including Top Channel and Albanian Screen TV. Since 2018, she has been a presenter on RTSH 24, tackling critical issues with authority.'
    ],
    highlightColumns: [
      {
        title: 'Key Highlights',
        items: [
          {title: 'Academic Excellence', body: 'Dental Surgeon (1999) and Master in Public Health (2005, ASPHER).'},
          {title: 'Healthcare Leadership', body: 'Head of Stomatological Service/Sector at Ministry of Health; Representative to FDI.'},
          {title: 'Educational Roles', body: 'External lecturer in Oro-Maxillofacial Pathology since 2004.'}
        ]
      },
      {
        title: 'Strategic Leadership',
        items: [
          {title: 'Media Milestones', body: 'Editor-in-Chief at RTSH (2013); Moderator for Top Channel and Albanian Screen.'},
          {title: 'Current Roles', body: 'Presenter and Moderator on RTSH 24 since 2018.'},
          {title: 'Social Advocacy', body: 'Co-initiator of Strategy and Action Plan for Aging in Albania with ASAG.'}
        ]
      }
    ],
    languages: 'Albanian (mother tongue), English (fluent), Italian (fluent).',
    sections: [
      {
        title: 'Career Milestones',
        items: [
          {body: 'Graduated as Dental Surgeon, Tirana', meta: '1999'},
          {body: 'Master in Public Health, ASPHER', meta: '2005'},
          {body: 'External Lecturer, Oro-Maxillofacial Pathology', meta: 'since 2004'},
          {body: 'Ethics Committee Member, National Order of Stomatologists'},
          {body: 'Head of Stomatological Service, Ministry of Health'},
          {body: 'Chief Inspector, State Stomatological Inspectorate'},
          {body: 'Representative to FDI and European Commission'},
          {body: 'News Moderator, Top Channel & Albanian Screen TV'},
          {body: 'Editor-in-Chief of Information Unit, RTSH', meta: '2013'},
          {body: 'Author/Moderator, Spektër Aktualiteti', meta: '2014–2015'},
          {body: 'Presenter and Moderator, RTSH 24', meta: 'since 2018'},
          {body: 'Co-Initiator, Strategy for Aging in Albania'}
        ]
      },
      {
        title: 'Advocacy & Social Impact',
        items: [
          {title: 'Gender Equality Champion', body: 'Promoting women’s rights and empowerment in Albanian media and society.'},
          {title: 'Social Causes', body: 'Initiator in strategies for aging and public health with inter-institutional focus.'},
          {title: 'Media Influence', body: 'Addressing critical issues through insightful journalism and discourse.'},
          {title: 'Policy Strategy', body: 'Bridging healthcare needs with governmental action plans for senior citizens.'}
        ]
      },
      {
        title: 'Mission in Focus',
        items: [
          {title: 'Gender Empowerment', body: 'Fostering inclusive narratives that drive societal progress and equity in media.'},
          {title: 'Public Health Advocacy', body: 'Bridging clinical expertise with strategic communication for better health outcomes.'},
          {title: 'Ethical Reporting', body: 'Ensuring accurate, empathetic coverage of health and social issues in journalism.'},
          {title: 'Social Cohesion', body: 'Collaborating across sectors to build resilient, just communities for all ages.'}
        ]
      }
    ]
  },

  'person-eros-dibra': {
    bio: [
      'Born in Shkodër, Albania (1991) and now based in Tirana, Eros Dibra is a visionary contemporary artist renowned for his international acclaim and conceptual depth. His innovative practice, particularly the renowned Love Letters series, explores love, loss, and transformation through iterative text and mixed media, fostering thought-provoking artistic dialogue. With a Master’s in Multimedia from the University of Arts, Tirana, Eros combines artistic innovation with educational leadership to mentor emerging artists and promote Albania’s cultural heritage.'
    ],
    highlightColumns: [
      {
        title: 'Key Highlights',
        items: [
          {title: 'International Recognition', body: 'Recipient of the 2023 Ardhje Award and first prize at the Onufri 21st edition (2015).'},
          {title: 'Global Presence', body: 'Exhibited in Paris, Washington DC, The Hague, Strasbourg, and Düsseldorf.'},
          {title: 'Conceptual Innovation', body: 'Creator of the Love Letters series, a profound exploration of love and absence.'}
        ]
      },
      {
        title: 'Strategic Leadership',
        items: [
          {title: 'Curatorial Vision', body: 'Architect of visual arts programs, fostering platforms for innovative global dialogues.'},
          {title: 'Educational Leadership', body: 'Mentors emerging artists through educational initiatives and university lectures.'},
          {title: 'Global Residency', body: 'Selected for an artist residency in Düsseldorf, Germany (2016).'}
        ]
      }
    ],
    languages: 'Albanian (mother tongue), English (fluent).',
    sections: [
      {
        title: 'Select Exhibition Highlights',
        items: [
          {body: 'Legend of a Castle, Place de Louvre, Paris', meta: '2017'},
          {body: 'Legend of a Castle, Council of Europe, Strasbourg', meta: '2017'},
          {body: 'Legend of a Castle, The Hague, Netherlands', meta: '2017'},
          {body: 'The Plagues – Die Wunden, Düsseldorf, Germany', meta: '2016'},
          {body: 'Viewpoints, Galeria Kalo, Tirana', meta: '2016'},
          {body: 'Pamur, Galeria Zeta, Tirana', meta: '2014'},
          {body: 'PRISM Tramlines, Sheffield, UK', meta: '2014'},
          {body: 'Biennial of Marrakech Video Art, Morocco', meta: '2014'},
          {body: 'Burned Sensations, Solo Show, Galeria FAB', meta: '2013'},
          {body: 'Love at Morgue, Video Art, Tirana', meta: '2013'},
          {body: 'Silence Neighbors, Belgrade, Serbia', meta: '2013'},
          {body: 'Welcome to Tirana, Solo Show', meta: '2010'},
          {body: 'The Lost City, Solo Show, Shkodër', meta: '2008'},
          {body: 'Whims of Age, Solo Show, Shkodër', meta: '2007'}
        ]
      },
      {
        title: 'Awards & Residencies',
        items: [
          {title: 'Ardhje Award', body: 'Young Visual Artists, Albania', meta: '2023'},
          {title: 'First Prize, Onufri 21st', body: 'National Gallery of Arts, Tirana', meta: '2015'},
          {title: 'Piktori i Vitit', body: 'Agjencia Buna1', meta: '2016'},
          {title: 'Çmimi Idromeno', body: 'Shkodër Gallery', meta: '2015'},
          {title: 'Artist Residency', body: 'Düsseldorf, Germany', meta: '2016'},
          {title: 'Representation', body: 'Ministry of Culture, Germany', meta: '2016'}
        ]
      },
      {
        title: 'Workshops & Lectures',
        items: [
          {title: 'On Video Art and Sound', body: 'Galeria e Arteve, Shkodër', meta: '2016'},
          {title: 'Design and Concepts', body: 'Workshop with art students', meta: '2016'},
          {title: 'Morphology of Image', body: 'European University of Tirana', meta: '2017'},
          {title: 'Sound in Antiquity', body: 'University Aleksandër Moisiu', meta: '2017'}
        ]
      },
      {
        title: 'Mission in Focus',
        items: [
          {title: 'Cultural Dialogue', body: 'Fostering cross-cultural exchanges that connect local talent with global audiences.'},
          {title: 'Educational Empowerment', body: 'Mentorship programs to guide emerging artists in innovative mediums.'},
          {title: 'Heritage Promotion', body: 'Curating exhibitions that reinterpret traditional motifs through contemporary lenses.'},
          {title: 'Community Art', body: 'Using public participation as a tool for social cohesion and critical reflection.'}
        ]
      }
    ]
  },

  'person-teufik-bashi': {
    quote: 'He doesn’t just see numbers on a balance sheet; he understands the value of an artistic project and the resources required to bring it to life at the highest standard.',
    bio: [
      'Teufik Bashi is the Director of Finance and Resources at the Kult 360 Foundation, a professional with a unique profile that merges the analytical precision of an economist with the dynamic creativity of a media producer. He ensures the foundation’s financial health, enabling its artistic vision to flourish on a secure foundation.',
      'Parallel to his financial career, Teufik has cultivated an extensive career in media production. This dual expertise allows him to create realistic budgets that empower creativity. With his multilingual proficiency, he also plays a key role in facilitating international partnerships and operational transparency.'
    ],
    highlightColumns: [
      {
        title: 'Strategic Expertise',
        items: [
          {title: 'Dual Focus', body: 'Merges Finance & Accounting with hands-on video editing and post-production experience.'},
          {title: 'Financial Models', body: 'Designs sustainable models for cultural non-profits, ensuring operational transparency.'}
        ]
      },
      {
        title: 'Global Operations',
        items: [
          {title: 'Creative Economics', body: 'Bridging the gap between artistic vision and real production costs.'},
          {title: 'International Reach', body: 'Leveraging multilingual skills to coordinate with diverse stakeholders and partners.'}
        ]
      }
    ],
    languages: 'Albanian (mother tongue), Italian (fluent), English.',
    sections: [
      {
        title: 'Professional Timeline',
        items: [
          {title: 'Director of Finance & Resources', body: 'Kult 360 Foundation'},
          {title: 'Economist', body: 'Progres Metal-G & Visi Shop'},
          {title: 'Post-Production Specialist', body: 'TV Antena Nord & Studio Faslija'},
          {title: 'Finance & Accounting Graduate', body: 'European University of Tirana (UET)'}
        ]
      },
      {
        title: 'Core Competencies',
        items: [
          {title: 'Non-Profit Strategy', body: 'Managing grants and building fundraising strategies for cultural growth.'},
          {title: 'Resource Management', body: 'Overseeing realistic budgets that ensure fiscal responsibility.'},
          {title: 'Production Economics', body: 'Analyzing logistics to ensure high-quality outcomes within budget.'},
          {title: 'Operational Transparency', body: 'Clear financial reporting to build trust with partners and donors.'}
        ]
      }
    ]
  }
};

export const getTeamProfile = (personId: string): TeamProfile | undefined => teamProfiles[personId];
