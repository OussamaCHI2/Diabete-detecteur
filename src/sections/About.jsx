import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });



  const gridItems = [
    {
      id: 1,
      title: "1. Grossesses",
      image: "public/assets/preg.png",
      description: "Le nombre de grossesses peut influencer le risque de diabète, surtout chez les femmes ayant eu un diabète gestationnel.",
      importance: "Moyenne",
      goodValue: "0 à 3 grossesses",
      badValue: "Plus de 6 grossesses",
      gradient: "from-pink-500/20 to-purple-500/20",
      iconColor: "text-pink-400",
      span: "col-span-1 xl:row-span-3"
    },
    {
      id: 2,
      title: "2. Glycémie",
      image: "public/assets/gly.png",
      description: "Le taux de sucre dans le sang est le facteur le plus important pour diagnostiquer le diabète.",
      importance: "Très élevée",
      goodValue: "90 à 110 mg/dL",
      badValue: "Plus de 126 mg/dL (à jeun)",
      gradient: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-400",
      span: "col-span-1 xl:row-span-3"
    },
    {
      id: 3,
      title: "3. Pression artérielle",
      image: "public/assets/blood.png",
      description: "L'hypertension est souvent liée au diabète.",
      importance: "Moyenne",
      goodValue: "Autour de 80 mmHg",
      badValue: "Plus de 90 mmHg",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      span: "col-span-1 xl:row-span-3"
    },
    {
      id: 4,
      title: "4. Épaisseur du pli cutané",
      image: "public/assets/pli.png",
      description: "Indique la masse grasse sous la peau.",
      importance: "Faible à moyenne",
      goodValue: "10 à 25 mm",
      badValue: "Plus de 35 mm",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      span: "col-span-1 xl:row-span-3"
    },
    {
      id: 5,
      title: "5. Insuline",
      image: "public/assets/insulin.png",
      description: "L'insuline contrôle le sucre dans le sang. Des anomalies indiquent un risque de diabète.",
      importance: "Élevée",
      goodValue: "16 à 166 µU/mL",
      badValue: "Très faible (0) ou très élevée (plus de 200)",
      gradient: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
      span: "col-span-1 xl:row-span-3"
    },
    {
      id: 6,
      title: "6. IMC (Indice de Masse Corporelle)",
      image: "public/assets/Bmi.png",
      description: "Le surpoids est un facteur principal de risque.",
      importance: "Très élevée",
      goodValue: "18.5 à 24.9",
      badValue: "Plus de 30 (obésité)",
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
      span: "col-span-1 xl:row-span-3"
    },
    {
      id: 7,
      title: "7. Antécédents familiaux",
      image: "public/assets/gen.png",
      description: "Plus le score est élevé, plus la personne a de risques à cause de l'hérédité.",
      importance: "Moyenne à élevée",
      goodValue: "Plus de 0.3",
      badValue: "Moins de 0.5",
      gradient: "from-teal-500/20 to-blue-500/20",
      iconColor: "text-teal-400",
      span: "xl:col-span-2 xl:row-span-3"
    },
    {
      id: 8,
      title: "8. Âge",
      image: "public/assets/Age.png",
      description: "Le risque augmente avec l'âge.",
      importance: "Moyenne",
      goodValue: "Moins de 40 ans",
      badValue: "Plus de 45 ans",
      gradient: "from-gray-500/20 to-slate-500/20",
      iconColor: "text-gray-400",
      span: "col-span-1 xl:row-span-3"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance.toLowerCase()) {
      case 'très élevée':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'élevée':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'moyenne à élevée':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'moyenne':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Facteurs
            </span>
            <span className="text-white"> de Risque</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Découvrez les 8 facteurs clés que notre IA analyse pour évaluer votre risque de diabète
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full"
        >
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className={`${item.span} group`}
            >
              <motion.div 
                className={`
                  relative h-full bg-gradient-to-br ${item.gradient} backdrop-blur-lg 
                  rounded-3xl border border-white/20 p-6 shadow-2xl overflow-hidden
                  hover:border-white/40 transition-all duration-500
                `}
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                
                {/* Content */}
                <div className="relative z-10 h-96 flex flex-col">
                  {/* Image Container */}
                  <motion.div 
                    className="relative mb-6 overflow-hidden rounded-3xl bg-black/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full sm:h-23 h-21 object-cover"
                    />
                    {/* Image Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Importance Badge */}
                    <motion.div
                      className={`
                        absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
                        border backdrop-blur-sm ${getImportanceColor(item.importance)}
                      `}
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {item.importance}
                    </motion.div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1 space-y-4">
                    <motion.h3 
                      className={`text-xl font-bold ${item.iconColor} group-hover:text-white transition-colors duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Values Section */}
                    <motion.div 
                      className="space-y-2 pt-4 border-t border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 text-sm">✅</span>
                        <span className="text-green-300 text-sm font-medium">Faible risque:</span>
                        <span className="text-gray-300 text-sm">{item.goodValue}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-red-400 text-sm">❌</span>
                        <span className="text-red-300 text-sm font-medium">Risque élevé:</span>
                        <span className="text-gray-300 text-sm">{item.badValue}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        
      </div>

      {/* Custom CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default About;