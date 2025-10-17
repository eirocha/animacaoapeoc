'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function FestaArte() {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setSpotlightPosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Efeito de luzes de festa piscantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`blue-${i}`}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.3, 1.2, 0.3],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`pink-${i}`}
            className="absolute w-2 h-2 bg-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.4, 1.3, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Holofotes tipo Batman - projetando para cima */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-32"
        animate={{
          rotate: [-30, 30, -30],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"
          style={{
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.8)',
          }}
        />
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '80px solid transparent',
            borderRight: '80px solid transparent',
            borderBottom: '600px solid rgba(255, 255, 0, 0.3)',
            filter: 'blur(8px)',
            transformOrigin: 'bottom center',
          }}
        />
        {/* Logo da coruja na ponta do holofote */}
        <motion.div
          className="absolute bottom-[600px] left-1/2 transform -translate-x-1/2"
          animate={{
            opacity: [0.4, 0.9, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: 'drop-shadow(0 0 40px rgba(255, 255, 0, 0.8))',
          }}
        >
          <img 
            src="/apeoc-logo.png" 
            alt="Logo APEOC" 
            className="w-[300px] h-[300px] object-contain"
            style={{
              filter: 'brightness(1.5) sepia(1) hue-rotate(45deg) saturate(2)',
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-1/4 w-32"
        animate={{
          rotate: [25, -25, 25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-300 rounded-full"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
          }}
        />
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '90px solid transparent',
            borderRight: '90px solid transparent',
            borderBottom: '700px solid rgba(0, 255, 255, 0.25)',
            filter: 'blur(10px)',
            transformOrigin: 'bottom center',
          }}
        />
        {/* Logo da coruja na ponta do holofote */}
        <motion.div
          className="absolute bottom-[700px] left-1/2 transform -translate-x-1/2"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: 'drop-shadow(0 0 35px rgba(0, 255, 255, 0.8))',
          }}
        >
          <img 
            src="/apeoc-logo.png" 
            alt="Logo APEOC" 
            className="w-[300px] h-[300px] object-contain"
            style={{
              filter: 'brightness(1.5) sepia(1) hue-rotate(180deg) saturate(2)',
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 w-32"
        animate={{
          rotate: [20, -20, 20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-300 rounded-full"
          style={{
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.8)',
          }}
        />
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '85px solid transparent',
            borderRight: '85px solid transparent',
            borderBottom: '650px solid rgba(255, 0, 255, 0.2)',
            filter: 'blur(12px)',
            transformOrigin: 'bottom center',
          }}
        />
        {/* Logo da coruja na ponta do holofote */}
        <motion.div
          className="absolute bottom-[650px] left-1/2 transform -translate-x-1/2"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: 'drop-shadow(0 0 30px rgba(255, 0, 255, 0.8))',
          }}
        >
          <img 
            src="/apeoc-logo.png" 
            alt="Logo APEOC" 
            className="w-[300px] h-[300px] object-contain"
            style={{
              filter: 'brightness(1.5) sepia(1) hue-rotate(270deg) saturate(2)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Quarto holofote - Verde */}
      <motion.div
        className="absolute bottom-0 right-1/3 w-32"
        animate={{
          rotate: [-35, 35, -35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-300 rounded-full"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)',
          }}
        />
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '75px solid transparent',
            borderRight: '75px solid transparent',
            borderBottom: '550px solid rgba(0, 255, 0, 0.25)',
            filter: 'blur(11px)',
            transformOrigin: 'bottom center',
          }}
        />
        {/* Logo da coruja na ponta do holofote */}
        <motion.div
          className="absolute bottom-[550px] left-1/2 transform -translate-x-1/2"
          animate={{
            opacity: [0.35, 0.75, 0.35],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: 'drop-shadow(0 0 32px rgba(0, 255, 0, 0.8))',
          }}
        >
          <img 
            src="/apeoc-logo.png" 
            alt="Logo APEOC" 
            className="w-[300px] h-[300px] object-contain"
            style={{
              filter: 'brightness(1.5) sepia(1) hue-rotate(90deg) saturate(2)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center p-12 bg-black/30 backdrop-blur-md rounded-3xl border-2 border-white/20 shadow-2xl max-w-4xl mx-4"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
              letterSpacing: '2px',
            }}
            animate={{
              textShadow: [
                '0 0 30px rgba(255, 255, 255, 0.5)',
                '0 0 50px rgba(255, 255, 255, 0.8)',
                '0 0 30px rgba(255, 255, 255, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            XXII FESTA DA APEOC
          </motion.h1>

          <motion.div
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Camocim - 2025
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl font-semibold text-yellow-300"
            style={{
              fontFamily: 'Brush Script MT, cursive',
              textShadow: '0 0 25px rgba(255, 255, 0, 0.8)',
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Sejam Bem Vindos!
          </motion.div>

          {/* Decorações adicionais */}
          <div className="mt-8 flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Efeito de confete */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`confetti-${i}`}
            className="absolute w-1 h-8"
            style={{
              backgroundColor: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#98FB98'][i % 5],
              left: `${Math.random() * 100}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '100vh'],
              rotate: [0, 360],
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}