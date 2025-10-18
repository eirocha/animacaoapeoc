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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Fundo com padrão de espelhos */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 border border-white/10"
              style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 25}%`,
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Efeito de luzes de discoteca */}
      <div className="absolute inset-0">
        {/* Luzes rotativas principais */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent opacity-20 blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-transparent opacity-20 blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-transparent opacity-20 blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-1/3 w-96 h-96"
          animate={{
            rotate: [-360, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500 to-transparent opacity-20 blur-3xl" />
        </motion.div>

        {/* Luzes piscantes menores */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'][i % 6],
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Spotlights de alta velocidade saindo do chão */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`spotlight-${i}`}
            className="absolute bottom-0 w-4 origin-bottom"
            style={{
              left: `${8 + i * 8}%`,
              height: '150vh',
              background: `linear-gradient(to top, 
                ${['#FF0080', '#00FF88', '#00D4FF', '#FFD700', '#FF1493', '#00CED1'][i % 6]} 0%, 
                transparent 70%)`,
              transform: `rotate(${-30 + i * 5}deg)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0, 1.2, 0],
              rotate: [`${-30 + i * 5}deg`, `${-20 + i * 5}deg`, `${-30 + i * 5}deg`],
            }}
            transition={{
              duration: 0.8 + Math.random() * 0.4,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Feixes de spotlight horizontais de alta velocidade */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute h-2 origin-left"
            style={{
              bottom: `${10 + i * 10}%`,
              left: 0,
              width: '200vw',
              background: `linear-gradient(to right, 
                ${['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'][i]} 0%, 
                transparent 60%)`,
              transform: `rotate(${-15 + i * 3}deg)`,
            }}
            animate={{
              opacity: [0, 0.9, 0],
              translateX: ['-100vw', '100vw'],
              scaleY: [0, 1.5, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          />
        ))}

        {/* Cone lights de alta velocidade do chão */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cone-${i}`}
            className="absolute bottom-0 origin-bottom"
            style={{
              left: `${15 + i * 15}%`,
              width: 0,
              height: 0,
              borderLeft: '50px solid transparent',
              borderRight: '50px solid transparent',
              borderBottom: `200px solid ${['rgba(255,0,128,0.3)', 'rgba(0,255,136,0.3)', 'rgba(0,212,255,0.3)', 'rgba(255,215,0,0.3)', 'rgba(255,20,147,0.3)', 'rgba(0,206,209,0.3)'][i]}`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.3, 0.5],
              rotate: [-20, 20, -20],
            }}
            transition={{
              duration: 0.6 + Math.random() * 0.3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated GIF from Giphy */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 z-0"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2xmajd1eXU4cnJvaHJqYnA2aG55a3F2aWh6djJkMTlvZHk3MTRmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/niRklIvglHNl8SA8WL/giphy.gif"
          alt="Disco Ball"
          className="w-48 h-48 rounded-full shadow-2xl"
        />
      </motion.div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center px-8"
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black mb-8 text-white"
            style={{
              fontFamily: 'var(--font-mexcellent)',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)',
              letterSpacing: '4px',
              fontWeight: 400,
            }}
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)',
                '0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8)',
                '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)',
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
            className="text-4xl md:text-7xl font-black mb-8 text-white"
            style={{
              fontFamily: 'var(--font-mexcellent)',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)',
              fontWeight: 400,
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
            CAMOCIM - 2025
          </motion.div>

          <motion.div
            className="text-3xl md:text-5xl font-black text-white"
            style={{
              fontFamily: 'var(--font-mexcellent)',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)',
              fontWeight: 400,
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
            SEJAM BEM VINDOS!
          </motion.div>
        </motion.div>
      </div>

      {/* Silhuetas de pessoas dançando */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-8 h-24 bg-black/60 rounded-t-full"
            style={{
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -10, 0],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}