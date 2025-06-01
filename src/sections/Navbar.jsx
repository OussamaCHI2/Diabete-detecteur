import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';

// Mock navigation data
const navLinks = [
  { id: 1, name: 'Accueil', href: '#home' },
  { id: 2, name: 'à propos', href: '#about' },
  { id: 3, name: 'historique', href: '#historique' },
  { id: 4, name: 'Modeles', href: '#models' },
  { id: 5, name: 'Contact', href: '#contact' }
];

const NavItems = ({ onClick = () => {}, isMobile = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 20 : -10,
      rotateX: isMobile ? 15 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.ul 
      className={`${isMobile ? 'flex flex-col space-y-6' : 'flex space-x-8'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navLinks.map((item, index) => (
        <motion.li key={item.id} variants={itemVariants}>
          <motion.a
            href={item.href}
            className={`relative group ${
              isMobile 
                ? 'text-white text-lg font-medium block py-2' 
                : 'text-gray-300 hover:text-white font-medium transition-colors duration-300'
            }`}
            onClick={onClick}
            whileHover={{ 
              scale: 1.05,
              rotateY: isMobile ? 0 : 5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {item.name}
            
            {/* Animated underline for desktop */}
            {!isMobile && (
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                whileHover={{
                  width: "100%",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              />
            )}
            
            {/* Glow effect for mobile */}
            {isMobile && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.2 }
                }}
              />
            )}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Backdrop blur and glassmorphism effect
  const navbarVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      rotateX: -15
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20, rotateY: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const menuButtonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(236,72,153,0.1) 100%)",
            "linear-gradient(90deg, rgba(236,72,153,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
            "linear-gradient(90deg, rgba(147,51,234,0.1) 0%, rgba(236,72,153,0.1) 50%, rgba(59,130,246,0.1) 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center py-5 px-6">
          {/* Logo with 3D animation */}
          <motion.a
            href="/"
            className="flex items-center space-x-2 group"
            variants={logoVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Activity className="w-8 h-8 text-red-700" />
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.span 
              className="text-white font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ 
                backgroundPosition: "200% center",
                transition: { duration: 0.5 }
              }}
            >
              Diabete Detecteur
            </motion.span>
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            className="sm:hidden relative p-2 text-gray-300 hover:text-white focus:outline-none"
            variants={menuButtonVariants}
            animate={isOpen ? "open" : "closed"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop navigation */}
          <nav className="hidden sm:block">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile menu with 3D animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden overflow-hidden backdrop-blur-xl bg-black/80 border-t border-white/10"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'top center'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <nav className="relative p-6">
              <NavItems onClick={closeMenu} isMobile={true} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.header>
  );
};

export default Navbar;