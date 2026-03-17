// =========================================================
// BUDGET QUÉBEC 2025-2026 — DONNÉES OFFICIELLES
// Source : Budget en bref et Plan budgétaire, 25 mars 2025
// Ministre des Finances : Eric Girard
// =========================================================

const BUDGET = {
  annee: "2025-2026",
  titre: "Pour un Québec fort",
  date_depot: "25 mars 2025",
  ministre: "Eric Girard",
  tag: "Pour un Québec fort",

  chiffres: [
    {
      label: "Déficit comptable",
      valeur: "-11,4 G$",
      note: "Avant versements au Fonds des générations · 1,8 % du PIB",
      variation: "Hausse vs -8,1 G$ en 2024-2025",
      direction: "down"
    },
    {
      label: "Déficit (Loi sur l'équilibre budgétaire)",
      valeur: "-13,6 G$",
      note: "Après versements au Fonds des générations · 2,2 % du PIB",
      variation: "Retour à l'équilibre prévu en 2029-2030",
      direction: "down"
    },
    {
      label: "Nouvelles initiatives",
      valeur: "12,3 G$",
      note: "5,4 G$ création de richesse + 6,8 G$ soutien aux Québécois · sur 5 ans",
      variation: "Budget d'action face aux tarifs",
      direction: "up"
    },
    {
      label: "Dette nette",
      valeur: "38,7 % du PIB",
      note: "Au 31 mars 2025 · Inférieur au niveau pré-pandémie",
      variation: "Cible : 32,5 % d'ici 2037-2038",
      direction: "neutral"
    },
    {
      label: "Croissance du PIB réel",
      valeur: "1,1 %",
      note: "Prévision 2025 · Ralentissement lié aux tarifs américains",
      variation: "1,4 % prévu pour 2026",
      direction: "neutral"
    },
    {
      label: "Plan québécois des infrastructures",
      valeur: "164 G$",
      note: "Horizon 2025-2035 · Hausse de 11 G$ vs l'an dernier",
      variation: "Nouveau record historique",
      direction: "up"
    },
  ],

  secteurs: [
    {
      id: "sante-services-sociaux",
      titre: "Santé et services sociaux",
      depenses: "3,9 G$ (nouvelles initiatives sur 5 ans)",
      variation: "Priorité no 1 du budget",
      priorite: "haute",
      resume: "Le budget investit 3,9 G$ supplémentaires sur cinq ans pour améliorer l'accès aux soins, renforcer les services aux personnes vulnérables, mieux soutenir les aînés et prioriser la prévention en santé.",
      points: [
        "Améliorer l'accès aux soins : financement de traitements pharmaceutiques en milieu hospitalier et formation accélérée de médecins",
        "Renforcer la protection de la jeunesse pour répondre aux besoins croissants des DPJ",
        "Pérenniser le financement de l'harmonisation des CHSLD publics et privés",
        "Prioriser la prévention : élargissement de la vaccination auprès des clientèles vulnérables",
      ],
      tags: ["santé", "services-sociaux", "aînés", "CHSLD", "prévention"]
    },
    {
      id: "economie-tarifs",
      titre: "Économie et réponse aux tarifs américains",
      depenses: "4,1 G$ (sur cinq ans)",
      variation: "Enjeu central du budget",
      priorite: "haute",
      resume: "Face à l'incertitude commerciale avec les États-Unis, le budget déploie 4,1 G$ pour soutenir les entreprises touchées par les tarifs, stimuler l'investissement et diversifier les marchés d'exportation.",
      points: [
        "Aide transitoire aux entreprises touchées par les tarifs américains : prêts représentant 1,6 G$ en liquidités",
        "Prolongation des mesures d'amortissement accéléré pour appuyer les projets d'investissement",
        "Soutien à la diversification des marchés : aide aux projets d'exportation et réseau des représentations à l'étranger",
        "Financement de l'organisme Les Produits du Québec pour faciliter le repérage de produits locaux",
        "Poursuite de l'Offensive formation en construction",
      ],
      tags: ["économie", "tarifs", "PME", "exportations", "investissement"]
    },
    {
      id: "innovation",
      titre: "Innovation et transformation numérique",
      depenses: "604 M$ (sur cinq ans)",
      variation: "Refonte du régime fiscal d'innovation",
      priorite: "haute",
      resume: "Simplification majeure du régime d'aide fiscale avec le nouveau crédit CRIC, qui remplace huit mesures existantes, et soutien ciblé aux secteurs stratégiques comme les sciences de la vie.",
      points: [
        "Instauration du crédit d'impôt pour la recherche, l'innovation et la commercialisation (CRIC) — remplace 8 mesures fiscales",
        "Renouvellement de la Stratégie québécoise des sciences de la vie",
        "Développement de la zone d'innovation Technum Québec à Bromont",
        "Aide aux PME à fort potentiel : propulser les jeunes entreprises innovantes",
        "Modernisation des services publics pour accroître leur efficacité",
      ],
      tags: ["innovation", "CRIC", "sciences-de-la-vie", "PME", "numérique"]
    },
    {
      id: "regions-ressources",
      titre: "Régions et ressources naturelles",
      depenses: "759 M$ (sur cinq ans)",
      variation: "Nouveau plan minéraux critiques 2025-2030",
      priorite: "haute",
      resume: "Appui à la vitalité économique des régions par la valorisation des minéraux critiques et stratégiques, le soutien au secteur forestier, au tourisme et à la nouvelle Politique bioalimentaire 2025-2035.",
      points: [
        "Nouveau Plan québécois pour la valorisation des minéraux critiques et stratégiques 2025-2030",
        "Soutien au secteur forestier : diversification des produits forestiers et innovation",
        "Poursuite du soutien aux festivals et événements touristiques",
        "Mise en œuvre de la Politique bioalimentaire 2025-2035 : plus de 1 G$ sur cinq ans",
        "Initiatives de connectivité numérique pour les régions éloignées",
      ],
      tags: ["régions", "minéraux-critiques", "forêts", "tourisme", "bioalimentaire"]
    },
    {
      id: "education-jeunesse",
      titre: "Éducation et développement des jeunes",
      depenses: "1,1 G$ (sur cinq ans)",
      variation: "Réussite éducative et services de garde",
      priorite: "haute",
      resume: "Investissements pour valoriser la réussite éducative, consolider l'aide aux étudiants, promouvoir le sport et le loisir, et améliorer l'accès aux services de garde.",
      points: [
        "Valorisation de la réussite éducative : soutien aux élèves et au personnel",
        "Consolidation de l'aide aux jeunes et aux étudiants",
        "Développement et maintien des infrastructures récréatives, sportives et de plein air",
        "Conversion de 1 000 places de garde non subventionnées en places à contribution réduite",
      ],
      tags: ["éducation", "jeunesse", "garde-enfants", "sport", "loisir"]
    },
    {
      id: "personnes-vulnerables",
      titre: "Personnes vulnérables et logement",
      depenses: "550 M$ (sur cinq ans)",
      variation: "Aide ciblée aux ménages dans le besoin",
      priorite: "haute",
      resume: "Mesures pour améliorer les conditions de vie des personnes les plus vulnérables, incluant le soutien au logement, l'aide ciblée et l'amélioration des rentes pour les accidentés du travail.",
      points: [
        "Amélioration de la rente de retraite des personnes victimes d'une lésion professionnelle",
        "Soutien à l'accès au logement abordable",
        "Aide ciblée aux personnes dans le besoin et soutien à l'intégration en emploi",
      ],
      tags: ["logement", "personnes-vulnérables", "emploi", "aide-sociale"]
    },
    {
      id: "culture-identite",
      titre: "Culture et identité québécoise",
      depenses: "717 M$ (sur cinq ans)",
      variation: "Renforcement du rayonnement culturel",
      priorite: "moyenne",
      resume: "Investissements pour valoriser la culture, le patrimoine et l'identité québécoise, avec un financement bonifié du Conseil des arts et un soutien maintenu aux entreprises culturelles via la SODEC.",
      points: [
        "Bonification du financement du Conseil des arts et des lettres du Québec",
        "Poursuite du soutien aux entreprises culturelles via la SODEC",
        "Promotion de l'identité du Québec à l'échelle nationale et internationale",
      ],
      tags: ["culture", "identité", "SODEC", "arts", "patrimoine"]
    },
    {
      id: "collectivites-climat",
      titre: "Collectivités et changements climatiques",
      depenses: "636 M$ (sur cinq ans)",
      variation: "Sécurité publique et adaptation climatique",
      priorite: "moyenne",
      resume: "Mesures pour assurer une société juste et sécuritaire, favoriser le développement durable des territoires et renforcer l'adaptation aux changements climatiques.",
      points: [
        "Mise en place de la Stratégie québécoise de lutte contre la criminalité",
        "Soutien au développement durable et à la vitalité des territoires",
        "Renforcement de l'adaptation aux changements climatiques",
      ],
      tags: ["sécurité-publique", "changements-climatiques", "développement-durable"]
    },
    {
      id: "regime-fiscal",
      titre: "Réforme du régime fiscal",
      depenses: "~3,0 G$ dégagés (sur cinq ans)",
      variation: "Optimisation, simplification, équité",
      priorite: "moyenne",
      resume: "Effort de rationalisation fiscale visant à dégager près de 3 G$ sur cinq ans par l'optimisation de l'aide aux entreprises, la simplification du régime et l'élimination des dépenses fiscales inefficaces.",
      points: [
        "Ciblage des activités TI à plus forte valeur ajoutée et recentrage du crédit d'impôt ressources sur les minéraux critiques",
        "Uniformisation du taux de la taxe sur les primes d'assurance avec la TVQ",
        "Révision du régime d'actions accréditives",
        "Élimination des dépenses fiscales inefficaces ou peu utilisées",
        "Fin de l'indexation du seuil d'admissibilité aux taux réduits de la cotisation au Fonds des services de santé",
      ],
      tags: ["fiscalité", "TVQ", "crédits-impôt", "simplification", "équité-fiscale"]
    },
  ],

  audiences: [
    {
      id: "familles",
      titre: "Familles avec enfants",
      priorite: "haute",
      resume: "Les familles bénéficient de la conversion de 1 000 places de garde non subventionnées, d'investissements en réussite éducative et d'un soutien accru aux infrastructures sportives et de loisir.",
      mesures: [
        { label: "Nouvelles places CPE subventionnées", valeur: "1 000", note: "Conversion de places non subventionnées" },
        { label: "Éducation et jeunesse", valeur: "1,1 G$", note: "Nouvelles initiatives sur 5 ans" },
        { label: "Infrastructures sportives et de loisir", valeur: "Inclus", note: "Développement et maintien" },
      ],
      tags: ["famille", "garde-enfants", "éducation", "sport"]
    },
    {
      id: "aines",
      titre: "Aînés",
      priorite: "haute",
      resume: "Le budget pérennise le financement des CHSLD, améliore la qualité des milieux de vie et élargit la vaccination pour les clientèles vulnérables dont les personnes âgées.",
      mesures: [
        { label: "Financement CHSLD harmonisé", valeur: "Pérennisé", note: "Publics et privés" },
        { label: "Vaccination élargie", valeur: "Nouvelles clientèles", note: "Clientèles vulnérables prioritaires" },
        { label: "Santé et services sociaux", valeur: "3,9 G$", note: "Nouvelles initiatives sur 5 ans" },
      ],
      tags: ["aînés", "CHSLD", "santé", "vaccination"]
    },
    {
      id: "travailleurs-accidentes",
      titre: "Travailleurs accidentés",
      priorite: "haute",
      resume: "Amélioration de la rente de retraite pour les personnes victimes d'une lésion professionnelle — une mesure de justice pour les travailleurs les plus vulnérables.",
      mesures: [
        { label: "Rente de retraite CNESST", valeur: "Bonifiée", note: "Victimes de lésions professionnelles" },
        { label: "Intégration en emploi", valeur: "Soutien accru", note: "Aide ciblée" },
        { label: "Enveloppe personnes vulnérables", valeur: "550 M$", note: "Sur 5 ans" },
      ],
      tags: ["travail", "CNESST", "lésions-professionnelles", "rente"]
    },
    {
      id: "entreprises-exportatrices",
      titre: "Entreprises et exportateurs",
      priorite: "haute",
      resume: "Les entreprises touchées par les tarifs américains accèdent à des aides financières directes, à de l'amortissement accéléré et à du soutien pour diversifier leurs marchés d'exportation.",
      mesures: [
        { label: "Liquidités disponibles (prêts)", valeur: "1,6 G$", note: "Aide transitoire aux entreprises affectées" },
        { label: "Amortissement accéléré", valeur: "Prolongé", note: "Pour les projets d'investissement" },
        { label: "Soutien économique global", valeur: "4,1 G$", note: "Sur 5 ans" },
      ],
      tags: ["entreprises", "exportations", "tarifs", "PME", "investissement"]
    },
    {
      id: "innovateurs",
      titre: "Innovateurs et startups",
      priorite: "haute",
      resume: "La réforme avec le nouveau crédit CRIC simplifie radicalement l'accès au soutien pour les entreprises en R&D, et un programme cible spécifiquement les jeunes entreprises à fort potentiel.",
      mesures: [
        { label: "Crédit CRIC (remplace 8 mesures)", valeur: "Nouveau", note: "Simplifié et unifié" },
        { label: "Jeunes pousses innovantes", valeur: "Inclus dans 604 M$", note: "Fort potentiel de croissance" },
        { label: "Zone Technum Québec — Bromont", valeur: "Appuyée", note: "Zone d'innovation stratégique" },
      ],
      tags: ["innovation", "startups", "CRIC", "R&D", "Technum"]
    },
    {
      id: "regions",
      titre: "Régions ressources",
      priorite: "moyenne",
      resume: "Les régions bénéficient d'un nouveau plan sur les minéraux critiques, de soutien au secteur forestier, d'un boost pour le tourisme et de la nouvelle Politique bioalimentaire 2025-2035.",
      mesures: [
        { label: "Plan minéraux critiques 2025-2030", valeur: "Nouveau", note: "Valorisation des ressources stratégiques" },
        { label: "Politique bioalimentaire 2025-2035", valeur: "1 G$+", note: "Sur 5 ans" },
        { label: "Développement régional global", valeur: "759 M$", note: "Sur 5 ans" },
      ],
      tags: ["régions", "minéraux-critiques", "forêts", "bioalimentaire", "tourisme"]
    },
    {
      id: "personnes-besoin",
      titre: "Personnes en situation de précarité",
      priorite: "moyenne",
      resume: "Le budget prévoit une aide ciblée pour les personnes dans le besoin, un soutien à l'accès au logement et des mesures pour favoriser l'intégration en emploi.",
      mesures: [
        { label: "Soutien au logement", valeur: "Inclus dans 550 M$", note: "Accès au logement abordable" },
        { label: "Intégration en emploi", valeur: "Aide ciblée", note: "Personnes éloignées du marché du travail" },
        { label: "Aide aux personnes vulnérables", valeur: "550 M$", note: "Sur 5 ans, ensemble des mesures" },
      ],
      tags: ["logement", "aide-sociale", "emploi", "précarité"]
    },
    {
      id: "acteurs-culturels",
      titre: "Artistes et acteurs culturels",
      priorite: "moyenne",
      resume: "La culture québécoise bénéficie d'un financement bonifié du Conseil des arts et des lettres et du maintien du soutien aux entreprises culturelles via la SODEC.",
      mesures: [
        { label: "Conseil des arts et des lettres", valeur: "Bonifié", note: "Financement accru" },
        { label: "SODEC — entreprises culturelles", valeur: "Maintenu et renforcé", note: "Soutien à la production" },
        { label: "Enveloppe culture et identité", valeur: "717 M$", note: "Sur 5 ans" },
      ],
      tags: ["culture", "arts", "SODEC", "patrimoine", "identité"]
    },
  ],

  parties_prenantes: [
    {
      id: "manufacturiers-exportateurs",
      titre: "Manufacturiers et exportateurs",
      priorite: "haute",
      resume: "Le budget 2025-2026 place la réponse aux tarifs américains au cœur de ses priorités. Les manufacturiers accèdent à 1,6 G$ en liquidités sous forme de prêts et à de l'amortissement accéléré prolongé.",
      enjeux: [
        "Critères d'admissibilité à l'aide transitoire : à surveiller lors de l'opérationnalisation",
        "Diversification des marchés : nécessité d'un accompagnement concret au-delà des annonces",
        "Amortissement accéléré prolongé : à maximiser pour les investissements en équipements",
        "Représentations à l'étranger : occasion d'intensifier les missions commerciales sectorielles",
      ],
      tags: ["manufactures", "tarifs", "exportations", "investissement", "liquidités"]
    },
    {
      id: "secteur-sante",
      titre: "Organisations de santé et services sociaux",
      priorite: "haute",
      resume: "Le budget déploie 3,9 G$ sur cinq ans pour la santé, avec des priorités sur l'accès aux soins, la jeunesse, les aînés et la prévention. La réforme de Santé Québec reste l'enjeu structurant.",
      enjeux: [
        "Formation médicale accélérée : opportunité pour les facultés de médecine et les hôpitaux",
        "Protection de la jeunesse : reconnaissance des besoins croissants, financement à confirmer en détail",
        "CHSLD : pérennisation du financement d'harmonisation — stabilité bienvenue pour le secteur",
        "Vaccination élargie : porte d'entrée pour élargir les programmes de prévention",
      ],
      tags: ["santé", "services-sociaux", "CHSLD", "jeunesse", "prévention"]
    },
    {
      id: "secteur-innovation-tech",
      titre: "Industrie technologique et innovante",
      priorite: "haute",
      resume: "La refonte avec le crédit CRIC est une transformation majeure. Elle simplifie l'accès mais recentre les bénéfices sur des activités à plus forte valeur ajoutée — un gain et un risque selon les acteurs.",
      enjeux: [
        "CRIC — crédit d'impôt unifié : simplification bienvenue, mais les critères d'admissibilité sont décisifs",
        "Recentrage des crédits TI : certaines entreprises aujourd'hui admissibles pourraient ne plus l'être",
        "Technum Québec à Bromont : opportunité de positionnement pour les acteurs en semiconducteurs",
        "Stratégie sciences de la vie renouvelée : fenêtre pour les acteurs pharma et biotech",
      ],
      tags: ["technologie", "CRIC", "innovation", "sciences-de-la-vie", "startups"]
    },
    {
      id: "secteur-construction",
      titre: "Industrie de la construction",
      priorite: "haute",
      resume: "Le PQI 2025-2035 porté à 164 G$ représente un carnet de commandes historique. La capacité de livraison et la disponibilité de la main-d'œuvre demeurent les contraintes critiques.",
      enjeux: [
        "PQI à 164 G$ sur 10 ans : volume sans précédent, concentration des projets à surveiller",
        "Poursuite de l'Offensive formation en construction : signal positif pour l'enjeu de main-d'œuvre",
        "Infrastructures récréatives et sportives : nouveau volet de projets publics à cibler",
        "Défi : dépassements de coûts et délais dans un contexte d'incertitude économique",
      ],
      tags: ["construction", "PQI", "infrastructures", "main-d'œuvre"]
    },
    {
      id: "secteur-minier",
      titre: "Industrie minière et ressources naturelles",
      priorite: "haute",
      resume: "Le nouveau Plan québécois pour la valorisation des minéraux critiques 2025-2030 repositionne le Québec dans la filière batterie et les chaînes d'approvisionnement en transition énergétique.",
      enjeux: [
        "Nouveau plan MCS 2025-2030 : signal fort, contenu et financement détaillé à décortiquer",
        "Recentrage du crédit d'impôt ressources sur les MCS : avantage pour l'exploration ciblée",
        "Tarifs américains : levier potentiel pour valoriser les ressources stratégiques canadiennes",
        "Secteur forestier : diversification et innovation — occasion pour la biomasse et le bois d'ingénierie",
      ],
      tags: ["mines", "minéraux-critiques", "forêts", "ressources-naturelles", "filière-batterie"]
    },
    {
      id: "milieu-culturel",
      titre: "Milieu culturel et médiatique",
      priorite: "moyenne",
      resume: "La culture bénéficie de 717 M$ sur cinq ans. Le renforcement de la SODEC et du CALQ confirme la continuité de l'appui gouvernemental, mais le budget est discret sur les médias régionaux.",
      enjeux: [
        "CALQ : bonification du financement — enjeu clé : répartition entre disciplines artistiques",
        "SODEC : maintien du soutien aux entreprises culturelles dans un contexte de transformation numérique",
        "Médias : budget silencieux sur le soutien aux médias régionaux et à la presse écrite",
        "Identité québécoise : discours politique favorable, à capitaliser pour les demandes sectorielles",
      ],
      tags: ["culture", "SODEC", "CALQ", "médias", "identité"]
    },
    {
      id: "organismes-communautaires",
      titre: "Organismes communautaires",
      priorite: "moyenne",
      resume: "Les 550 M$ pour les personnes vulnérables représentent un signal positif, mais le milieu attend la traduction concrète en financement opérationnel pour les organismes de terrain.",
      enjeux: [
        "Aide ciblée aux personnes dans le besoin : modalités de financement à confirmer pour les organismes",
        "Soutien au logement : coordination avec les villes et les organismes de logement communautaire",
        "Protection de la jeunesse : augmentation des ressources attendue par les DPJ",
        "Intégration en emploi : complémentarité avec les programmes existants d'Emploi-Québec",
      ],
      tags: ["communautaire", "logement", "aide-sociale", "jeunesse", "emploi"]
    },
    {
      id: "municipalites",
      titre: "Municipalités et organisations régionales",
      priorite: "moyenne",
      resume: "Le PQI de 164 G$ inclut des investissements en infrastructures. Le budget est discret sur les transferts directs aux municipalités, un enjeu qui reviendra lors des négociations du prochain pacte fiscal.",
      enjeux: [
        "PQI 2025-2035 : opportunités d'accélération de projets d'infrastructures locales",
        "Stratégie de lutte contre la criminalité : coordination police municipale / SQ / justice à préciser",
        "Connectivité numérique : poursuite des initiatives — priorité pour les municipalités rurales",
        "Pacte fiscal : prochain rendez-vous stratégique pour l'UMQ et la FQM",
      ],
      tags: ["municipalités", "PQI", "régions", "connectivité", "pacte-fiscal"]
    },
  ],

  comparaison: {
    annee_precedente: "2024-2025",
    elements: [
      { label: "Déficit comptable", avant: "-8,1 G$", apres: "-11,4 G$", direction: "down" },
      { label: "Déficit (Loi équilibre budgétaire)", avant: "N/D", apres: "-13,6 G$", direction: "down" },
      { label: "Dette nette (% PIB)", avant: "< 38,7 %", apres: "38,7 %", direction: "down" },
      { label: "Croissance PIB réel prévue", avant: "1,4 %", apres: "1,1 %", direction: "down" },
      { label: "PQI 10 ans", avant: "153 G$", apres: "164 G$", direction: "up" },
      { label: "Nouvelles initiatives (5 ans)", avant: "—", apres: "12,3 G$", direction: "up" },
      { label: "Retour à l'équilibre prévu", avant: "2027-2028", apres: "2029-2030", direction: "down" },
    ]
  }
};      ],
      tags: ["santé", "services-sociaux", "soins-domicile"]
    },
    {
      id: "education",
      titre: "Éducation et enseignement supérieur",
      depenses: "30,2 G$",
      variation: "+4,1 %",
      priorite: "haute",
      resume: "Investissements record en éducation primaire-secondaire et en formation professionnelle pour répondre aux besoins du marché du travail.",
      points: [
        "750 M$ pour la construction et la rénovation d'écoles",
        "450 M$ pour la valorisation de la profession enseignante",
        "280 M$ pour la formation professionnelle et technique",
        "Réduction du ratio élèves-enseignant dans les classes du primaire",
      ],
      tags: ["éducation", "formation", "enseignement-supérieur"]
    },
    {
      id: "infrastructure",
      titre: "Infrastructures et transports",
      depenses: "16,8 G$ (PQI annuel)",
      variation: "+8,3 %",
      priorite: "haute",
      resume: "Le Plan québécois des infrastructures atteint 153 G$ sur 10 ans, avec un accent sur le transport collectif, la réfection des routes et les ponts.",
      points: [
        "4,2 G$ pour le transport collectif (REM, métro, autobus)",
        "3,1 G$ pour la réfection du réseau routier",
        "1,8 G$ pour les ponts et viaducs en déficit de maintien",
        "Accélération des projets de décarbonation des transports",
      ],
      tags: ["transport", "infrastructure", "routes"]
    },
    {
      id: "economie",
      titre: "Économie et innovation",
      depenses: "5,9 G$",
      variation: "+2,8 %",
      priorite: "moyenne",
      resume: "Soutien à la compétitivité des entreprises québécoises face aux défis commerciaux internationaux, avec un accent sur la productivité et l'innovation.",
      points: [
        "600 M$ pour l'aide aux PME face aux tarifs américains",
        "400 M$ pour la transformation numérique des entreprises",
        "250 M$ pour la recherche appliquée et les partenariats université-industrie",
        "Réduction du fardeau administratif pour les entreprises",
      ],
      tags: ["économie", "PME", "innovation", "tarifs"]
    },
    {
      id: "environnement",
      titre: "Environnement et transition climatique",
      depenses: "4,1 G$",
      variation: "+6,2 %",
      priorite: "moyenne",
      resume: "Accélération du Plan pour une économie verte 2030 avec de nouveaux investissements en énergie propre, en adaptation climatique et en protection des milieux naturels.",
      points: [
        "1,1 G$ pour l'électrification des transports",
        "650 M$ pour la rénovation énergétique résidentielle",
        "400 M$ pour la protection des milieux humides et de la biodiversité",
        "Nouveau Fonds d'adaptation aux changements climatiques : 200 M$",
      ],
      tags: ["environnement", "climat", "énergie-propre"]
    },
    {
      id: "ressources-naturelles",
      titre: "Ressources naturelles et forêts",
      depenses: "1,8 G$",
      variation: "-3,1 %",
      priorite: "moyenne",
      resume: "Baisse des dépenses liées à la non-récurrence des coûts exceptionnels de lutte aux incendies de forêt de 2023.",
      points: [
        "Réforme de la Loi sur les mines attendue en 2025",
        "Plan de reboisement accéléré : 75 M$ sur 3 ans",
        "Soutien aux communautés forestières en transition : 120 M$",
        "Relance de la filière batterie : volet amont des matériaux critiques",
      ],
      tags: ["forêts", "mines", "ressources-naturelles"]
    },
  ],

  // --- Audiences ---
  audiences: [
    {
      id: "familles",
      titre: "Familles",
      priorite: "haute",
      resume: "Les familles bénéficient d'une bonification des services de garde, d'un soutien accru à l'éducation et d'une aide au logement abordable.",
      mesures: [
        { label: "Nouvelles places en CPE", valeur: "8 500", note: "D'ici 2026" },
        { label: "Aide au logement", valeur: "900 M$", note: "Incluant AccèsLogis" },
        { label: "Allocation famille", valeur: "+150 $/an", note: "Pour 3 enfants et plus" },
      ],
      tags: ["famille", "garde-enfants", "logement"]
    },
    {
      id: "aines",
      titre: "Aînés",
      priorite: "haute",
      resume: "Priorité aux soins à domicile, à la réduction des listes d'attente en CHSLD et à la bonification des crédits d'impôt pour maintien à domicile.",
      mesures: [
        { label: "Soins à domicile", valeur: "500 M$", note: "Nouveaux investissements" },
        { label: "Crédit maintien à domicile", valeur: "Bonification", note: "+5 % du taux" },
        { label: "Places en maisons des aînés", valeur: "2 600", note: "Nouvelles places prévues" },
      ],
      tags: ["aînés", "soins-domicile", "CHSLD"]
    },
    {
      id: "entreprises",
      titre: "Entrepreneurs et PME",
      priorite: "haute",
      resume: "Face aux incertitudes commerciales avec les États-Unis, le budget prévoit un filet de sécurité pour les PME exportatrices et des mesures de productivité.",
      mesures: [
        { label: "Fonds de résilience PME", valeur: "600 M$", note: "Aide aux exportateurs affectés" },
        { label: "Déduction pour impôt PME", valeur: "Maintenu à 3,2 %", note: "Parmi les plus bas au Canada" },
        { label: "Crédit R&D", valeur: "Bonification 5 %", note: "Pour secteurs stratégiques" },
      ],
      tags: ["PME", "exportations", "fiscalité-entreprise"]
    },
    {
      id: "travailleurs",
      titre: "Travailleurs",
      priorite: "moyenne",
      resume: "Mesures pour améliorer les conditions de travail dans les secteurs publics, bonifier la formation continue et soutenir la mobilité de la main-d'œuvre.",
      mesures: [
        { label: "Formation continue", valeur: "180 M$", note: "Nouveau fonds Compétences Québec" },
        { label: "Conventions collectives", valeur: "Ratifiées", note: "Secteurs public et parapublic" },
        { label: "Salaire minimum prévu", valeur: "16,10 $/h", note: "Hausse annoncée pour mai 2025" },
      ],
      tags: ["travail", "formation", "secteur-public"]
    },
    {
      id: "regions",
      titre: "Régions et municipalités",
      priorite: "moyenne",
      resume: "Transferts accrus aux municipalités, soutien aux régions ressources et investissements en infrastructures régionales.",
      mesures: [
        { label: "Transferts aux municipalités", valeur: "+420 M$", note: "Pacte fiscal 2025" },
        { label: "Régions ressources", valeur: "280 M$", note: "Forêts, mines, transition" },
        { label: "Infrastructures rurales", valeur: "350 M$", note: "Routes, eau potable, égouts" },
      ],
      tags: ["régions", "municipalités", "ruralité"]
    },
  ],

  // --- Notes parties prenantes ---
  parties_prenantes: [
    {
      id: "sante-organisations",
      titre: "Organismes de santé",
      priorite: "haute",
      resume: "Le financement en santé dépasse 61 G$ mais les pressions sur les effectifs infirmiers et les délais d'attente demeurent des enjeux critiques de représentation.",
      enjeux: [
        "Dotation en personnel infirmier toujours déficitaire",
        "Réforme de la gouvernance Santé Québec en cours",
        "Opportunités : soins à domicile, santé mentale, numérique",
      ],
      tags: ["santé", "lobbying", "infirmières"]
    },
    {
      id: "industrie-manufacturiere",
      titre: "Industrie manufacturière",
      priorite: "haute",
      resume: "Les manufacturiers québécois font face à une double pression : tarifs américains et hausse des coûts de l'énergie. Le budget offre un filet partiel mais insuffisant selon l'industrie.",
      enjeux: [
        "Fonds de résilience de 600 M$ : critères d'admissibilité à surveiller",
        "Crédits d'impôt à l'investissement : bonification attendue",
        "Chaînes d'approvisionnement : diversification essentielle",
      ],
      tags: ["manufactures", "tarifs", "exportations"]
    },
    {
      id: "construction",
      titre: "Industrie de la construction",
      priorite: "haute",
      resume: "Le PQI de 153 G$ représente une opportunité majeure, mais la capacité de l'industrie et les délais de réalisation restent des défis opérationnels.",
      enjeux: [
        "PQI 2025-2035 : 153 G$ d'opportunités contractuelles",
        "Pénurie de main-d'œuvre spécialisée freine la réalisation",
        "Enjeux de gestion de projet et dépassements de coûts",
      ],
      tags: ["construction", "infrastructure", "PQI"]
    },
    {
      id: "organisations-municipales",
      titre: "Organisations municipales",
      priorite: "moyenne",
      resume: "Le nouveau pacte fiscal apporte 420 M$ supplémentaires, mais les municipalités réclament une formule pérenne liée à la croissance des revenus provinciaux.",
      enjeux: [
        "Transferts ponctuels vs formule indexée réclamée par l'UMQ/FQM",
        "Déficit de maintien des actifs municipaux : 20 G$ estimé",
        "Logement abordable : rôle des villes dans la réalisation",
      ],
      tags: ["municipal", "transferts", "logement"]
    },
  ],

  // --- Comparaison ---
  comparaison: {
    annee_precedente: "2024-2025",
    elements: [
      { label: "Déficit budgétaire", avant: "-6,3 G$", apres: "-11,0 G$", direction: "down" },
      { label: "Revenus totaux", avant: "146,2 G$", apres: "150,8 G$", direction: "up" },
      { label: "Dépenses totales", avant: "153,8 G$", apres: "161,8 G$", direction: "down" },
      { label: "PQI (10 ans)", avant: "143 G$", apres: "153 G$", direction: "up" },
      { label: "Taux de croissance PIB", avant: "0,8 %", apres: "1,4 %", direction: "up" },
    ]
  }
};
