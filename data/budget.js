// =========================================================
// BUDGET QUÉBEC — DONNÉES PRINCIPALES
// Remplacer ce fichier complet mercredi avec les nouvelles données
// =========================================================

const BUDGET = {
  annee: "2025-2026",
  titre: "Budget du Québec",
  date_depot: "21 mars 2024",
  ministre: "Eric Girard",
  tag: "Prudence et résilience",

  // --- Chiffres clés ---
  chiffres: [
    { label: "Solde budgétaire", valeur: "-11,0 G$", note: "Déficit avant versements au FGR", variation: "Hausse vs 2024-2025", direction: "down" },
    { label: "Revenus totaux", valeur: "150,8 G$", note: "Hausse de 4,6 G$ vs l'an dernier", variation: "+3,1 %", direction: "up" },
    { label: "Dépenses totales", valeur: "161,8 G$", note: "Inclut les dépenses de programmes", variation: "+5,2 %", direction: "down" },
    { label: "Dette nette", valeur: "226 G$", note: "43,5 % du PIB", variation: "Stabilisation prévue", direction: "neutral" },
    { label: "Croissance du PIB réel", valeur: "1,4 %", note: "Prévision 2025", variation: "En reprise", direction: "up" },
    { label: "Plan d'infrastructure", valeur: "153 G$", note: "Horizon 10 ans (PQI 2025-2035)", variation: "Nouveau record", direction: "up" },
  ],

  // --- Secteurs ---
  secteurs: [
    {
      id: "sante",
      titre: "Santé et services sociaux",
      depenses: "61,4 G$",
      variation: "+5,9 %",
      priorite: "haute",
      resume: "Les dépenses en santé franchissent 61 G$ pour la première fois, avec un accent sur la réduction des listes d'attente, les soins à domicile et la santé mentale.",
      points: [
        "1,5 G$ supplémentaires pour réduire les délais d'attente",
        "500 M$ pour les soins à domicile et le maintien en autonomie",
        "320 M$ pour la santé mentale et la réduction des dépendances",
        "Objectif : 80 % des Québécois avec accès à un médecin de famille d'ici 2026",
      ],
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
