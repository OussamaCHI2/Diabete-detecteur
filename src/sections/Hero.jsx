import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { Heart } from '../components/heart.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.p 
            className="sm:text-5xl text-3xl font-bold text-white font-generalsans mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Diabète Détecteur
            </motion.span>
            <motion.span 
              className="waving-hand inline-block ml-3"
              variants={floatingVariants}
              animate="animate"
            >
              👋
            </motion.span>
          </motion.p>
          
          <motion.p 
            className="hero_tag text-gray_gradient text-xl sm:text-2xl"
            variants={itemVariants}
          >
            Diabetes Risk Scanner
          </motion.p>
        </motion.div>

        {/* Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-6"
          variants={itemVariants}
        >
          {['IA Avancée', 'Analyse Rapide', 'Résultats Précis', 'Interface Intuitive'].map((feature, index) => (
            <motion.div
              key={feature}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderColor: 'rgba(255,0,0,0.4)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="flex justify-center gap-8 mt-12  "
          variants={itemVariants}
        >
          {[
            { label: 'Précision', value: '96%' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1,
                borderRadius: 20,
              backgroundColor: 'rgba(255,255,0,0.2)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05}}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-white"
                animate={{ 
                  textShadow: [
                    '0 0 5px rgba(59, 130, 246, 0.5)',
                    '0 0 10px rgba(147, 51, 234, 0.5)',
                    '0 0 5px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 3D Canvas with Enhanced Animations */}
      <motion.div 
        className="w-full h-full absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Heart scale={9} position={-1.5} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div 
        className="absolute bottom-7 left-0 right-0 w-full z-10 c-space"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Scroll indicator */}
          <motion.div
            className="hidden sm:flex flex-col items-center gap-2 mb-4"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-gray-400 text-sm">Découvrez plus</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.a 
            href="#models" 
            className="w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              name="Vérifions le risque du diabète" 
              isBeam 
              containerClass="sm:w-fit w-full sm:min-w-96" 
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.div
            className="flex gap-4 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Action Elements */}
      <motion.div
        className="absolute top-1/2 left-8 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="flex flex-col gap-4">
          {['💓', '🔬', '📊'].map((icon, index) => (
            <motion.div
              key={icon}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl border border-white/20"
              whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.2)' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.01 }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-8 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <div className="flex flex-col gap-4">
          {['🎯', '⚡', '🛡️'].map((icon) => (
            <motion.div
              key={icon}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl border border-white/20"
              whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.2)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.02 }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;