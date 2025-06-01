export const navLinks = [
  {
    id: 1,
    name: 'Accueil',
    href: '#home',
  },
  
  {
    id: 2,
    name: 'Modeles',
    href: '#models',
  },
  {
    id: 3,
    name: 'Histoire',
    href: '#historique',
  },
 
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'À propos',
    href: '#about',
  },
];



export const myProjects = [
  {
    id: 1,
    title: "Régression Logistique",
    desc: "La régression logistique est un modèle utilisé pour les problèmes de classification binaire. Elle prédit la probabilité qu'une observation appartienne à une classe à l'aide d'une fonction sigmoïde.",
    subdesc: "Elle est efficace pour les données linéaires et facile à interpréter.",
    texture: '/textures/project/LR.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
   id: 2,
    title: "Arbre de Décision",
    desc: "Un arbre de décision divise les données en branches selon des conditions sur les caractéristiques. Chaque feuille correspond à une classe prédite.",
    subdesc: "Simple à comprendre, mais peut surapprendre si non régularisé.",
    texture: '/textures/project/Arbre.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    id: 3,
    title: "Forêt Aléatoire (Random Forest)",
    desc: "La forêt aléatoire combine plusieurs arbres de décision formés sur des sous-échantillons pour améliorer la précision et la robustesse.",
    subdesc: "Elle réduit le surapprentissage et gère bien les données bruitées.",
    texture: '/textures/project/Randomf.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    id: 4,
    title: "k-Nearest Neighbors (k-NN)",
    desc: "Le k-NN classe une observation selon la majorité des 'k' voisins les plus proches. Il n’a pas besoin d’entraînement préalable.",
    subdesc: "Il est simple mais devient coûteux avec de grandes bases de données.",
    texture: '/textures/project/KNN.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
     id: 5,
    title: "Support Vector Machine (SVM)",
    desc: "Le SVM cherche le meilleur hyperplan pour séparer les classes. Il peut utiliser des noyaux pour modéliser des séparations non linéaires.",
    subdesc: "Efficace dans des espaces de haute dimension, utilisé en texte et image.",
    texture: '/textures/project/Svm.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
     id: 6,
    title: "Naive Bayes",
    desc: "Naive Bayes est un classificateur probabiliste basé sur le théorème de Bayes avec une hypothèse d’indépendance entre les variables.",
    subdesc: "Très rapide et performant pour le filtrage d’emails et la classification de texte.",
    texture: '/textures/project/Naive.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    id: 7,
    title: "AdaBoost",
    desc: "AdaBoost combine plusieurs modèles faibles (souvent des arbres) en ajustant les poids à chaque itération pour se concentrer sur les erreurs.",
    subdesc: "Idéal pour des jeux de données simples à modérément complexes.",
    texture: '/textures/project/Adaboost.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
     id: 8,
    title: "XGBoost",
    desc: "XGBoost est un algorithme de boosting par gradient très optimisé, connu pour sa performance, sa vitesse et ses capacités de régularisation.",
    subdesc: "Souvent gagnant dans les compétitions Kaggle et projets industriels.",
    texture: '/textures/project/Xgboost.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    id: 9,
    title: "Gradient Boosting",
    desc: "Le Gradient Boosting est une technique d’ensemble qui construit des modèles faibles (comme des arbres) de manière séquentielle. Chaque nouveau modèle corrige les erreurs du précédent.",
    subdesc: "Très précis mais peut être lent à entraîner. Requiert un bon réglage des hyperparamètres pour éviter le surapprentissage.",
    texture: '/textures/project/Gradient.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
     
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    id: 10,
    title: "Réseaux de Neurones Artificiels (ANN)",
    desc: "Les ANN sont composés de couches de neurones connectés qui apprennent des représentations complexes des données.",
    subdesc: "Utilisés pour la classification, la régression, et plus encore.",
    texture: '/textures/project/Ann.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
     id: 11,
  title: "Bagging (Bootstrap Aggregating)",
  desc: "Le bagging est une méthode d’ensemble qui crée plusieurs modèles indépendants sur des échantillons bootstrap (tirages aléatoires avec remise) des données, puis agrège leurs prédictions.",
  subdesc: "Il réduit la variance du modèle et améliore la stabilité, notamment avec des modèles instables comme les arbres de décision.",
    texture: '/textures/project/Bagging.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const Diabetetimelines = [
  {
    id: 1,
    name: 'Découverte de l’insuline',
    pos: '',
    duration: '1921',
    title: "C’est le tournant le plus important. Avant l’insuline, le diabète—surtout de type 1—était souvent mortel. Grâce à Frederick Banting et Charles Best, l’insuline a permis de sauver des millions de vies en rendant la maladie contrôlable.",
    icon: '/assets/insulin.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Premier traitement à l’insuline',
    pos: '',
    duration: '1922',
    title: "Un an après la découverte, l’insuline est utilisée pour la première fois sur un patient : Leonard Thompson, un garçon de 14 ans. Son amélioration rapide a prouvé l’efficacité de l’insuline et a ouvert la voie à son utilisation mondiale.",
    icon: '/assets/tretement.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Distinction entre diabète de type 1 et type 2',
    pos: '',
    duration: 'fin du 20e siècle',
    title: "La reconnaissance que le diabète comprend plusieurs types a permis une meilleure compréhension : le type 1 est une maladie auto-immune, tandis que le type 2 est souvent lié au mode de vie. Cette distinction a permis d’adapter les traitements.",
    icon: '/assets/Diabete.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Surveillance de la glycémie à domicile',
    pos: '',
    duration: 'années 1970–1980',
    title: "Les glucomètres portables ont permis aux patients de mesurer leur glycémie eux-mêmes. Cela a donné plus d’autonomie aux personnes diabétiques et a amélioré la gestion quotidienne de la maladie.",
    icon: '/assets/gly.png',
    animation: 'clapping',
  },
  {
    id: 5,
    name: 'Pancréas artificiel',
    pos: '',
    duration: '2016',
    title: "L’approbation du premier système automatique de délivrance d’insuline (pancréas artificiel) représente une avancée technologique majeure. Il ajuste l’insuline en temps réel, réduisant le besoin d’interventions manuelles.",
    icon: '/assets/Pancreas.png',
    animation: 'salute',
  },
  
];
