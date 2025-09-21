import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Hero () {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
  {
    image: '/images/team/team.jpg',
    title: 'Play Hard. Dream Big. Shine Bright.',
    subtitle: 'Where young athletes become champions on and off the court',
    isLocal: true
  },
  {
    image: '/images/team/team2.jpg',
    title: 'Building Character Through Basketball',
    subtitle: 'Developing skills, confidence, and leadership in grades 7-14',
    isLocal: true
  },
  {
    image: '/images/players/team3.jpg',
    title: 'More Than Just Basketball',
    subtitle: 'Creating lasting friendships and community connections',
    isLocal: true
  }
]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)

  return (
    <section className='relative h-screen overflow-hidden'>
      {/* Image Slides */}
      <div className='relative w-full h-full'>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1 }}
            className='absolute inset-0'
          >
            <div
              className='w-full h-full bg-cover bg-center'
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className='absolute inset-0 bg-black bg-opacity-40' />
          </motion.div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className='absolute inset-0 flex items-center justify-center text-center text-white z-10'>
        <motion.div
          key={currentSlide}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='max-w-4xl mx-auto px-4'
        >
          <motion.h1
            className='text-5xl md:text-7xl font-bold mb-6 text-shadow-lg'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            className='text-xl md:text-2xl mb-8 text-shadow'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
            >
              Join Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
            >
              Watch Our Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-20'
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-20'
      >
        <ChevronRight size={48} />
      </button>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
