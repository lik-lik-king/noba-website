import { motion } from 'motion/react'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Award, BookOpen, Users } from 'lucide-react'

export function PlayerSpotlights () {
  const [currentPlayer, setCurrentPlayer] = useState(0)

  const players = [
    {
      name: 'Marcus Johnson',
      age: 'Grade 8',
      image: '/images/team/team2.jpg',
      story:
        "When Marcus joined NOBA, he was shy and struggled with confidence. Through our program, he's become a team leader and improved his GPA from 2.8 to 3.6.",
      achievements: [
        'Most Improved Player 2024',
        'Honor Roll Student',
        'Team Captain'
      ],
      quote:
        'NOBA taught me that basketball is just the beginning. Now I believe I can achieve anything I set my mind to.'
    },
    {
      name: 'Jasmine Williams',
      age: 'Grade 10',
      image: '/images/team/team2.jpg',
      story:
        'Jasmine started with us in 7th grade and has grown into an exceptional point guard and student leader. She now mentors younger players.',
      achievements: [
        'Academic Excellence Award',
        'Varsity Team Starter',
        'Community Volunteer (200+ hours)'
      ],
      quote:
        "The coaches here see potential in you even when you don't see it in yourself. They never give up on you."
    },
    {
      name: 'David Chen',
      age: 'Grade 12',
      image: '/images/team/team2.jpg',
      story:
        "David joined NOBA as a freshman with big dreams. Now he's earned a full basketball scholarship to the University of Nebraska.",
      achievements: [
        'Full Basketball Scholarship',
        'Regional All-Star Team',
        '4.0 GPA Valedictorian'
      ],
      quote:
        "NOBA didn't just make me a better player—they made me a better person. I'm ready for college because of what I learned here."
    }
  ]

  const nextPlayer = () => setCurrentPlayer(prev => (prev + 1) % players.length)
  const prevPlayer = () =>
    setCurrentPlayer(prev => (prev - 1 + players.length) % players.length)

  return (
    <section id='players' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            Player Success Stories
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Meet some of our amazing athletes who are living proof that with
            hard work, dedication, and the right support, dreams really do come
            true.
          </p>
        </motion.div>

        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            key={currentPlayer}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='grid md:grid-cols-2 gap-12 items-center'
          >
            {/* Player Image */}
            <div className='relative'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='relative overflow-hidden rounded-2xl shadow-2xl'
              >
                <img
                  src={players[currentPlayer].image}
                  alt={players[currentPlayer].name}
                  className='w-full h-96 object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <h3 className='text-2xl font-bold'>
                    {players[currentPlayer].name}
                  </h3>
                  <p className='text-lg'>{players[currentPlayer].age}</p>
                </div>
              </motion.div>
            </div>

            {/* Player Story */}
            <div className='space-y-6'>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='text-lg text-gray-600 leading-relaxed'
              >
                {players[currentPlayer].story}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='space-y-3'
              >
                <h4 className='font-bold text-gray-800 flex items-center gap-2'>
                  <Award className='w-5 h-5 text-red-600' />
                  Achievements
                </h4>
                <ul className='space-y-2'>
                  {players[currentPlayer].achievements.map(
                    (achievement, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-2 text-gray-600'
                      >
                        <div className='w-2 h-2 bg-red-600 rounded-full' />
                        {achievement}
                      </li>
                    )
                  )}
                </ul>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='border-l-4 border-red-600 pl-4 py-2 italic text-gray-700 bg-gray-50 rounded-r-lg'
              >
                "{players[currentPlayer].quote}"
              </motion.blockquote>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className='flex justify-center items-center mt-12 space-x-4'>
            <button
              onClick={prevPlayer}
              className='p-3 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors'
            >
              <ChevronLeft size={24} />
            </button>

            <div className='flex space-x-2'>
              {players.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPlayer(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentPlayer === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPlayer}
              className='p-3 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors'
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-20 grid md:grid-cols-3 gap-8'
        >
          <div className='text-center p-6 bg-red-50 rounded-xl'>
            <BookOpen className='w-12 h-12 text-red-600 mx-auto mb-4' />
            <h3 className='text-3xl font-bold text-gray-800'>95%</h3>
            <p className='text-gray-600'>High School Graduation Rate</p>
          </div>
          <div className='text-center p-6 bg-blue-50 rounded-xl'>
            <Award className='w-12 h-12 text-blue-600 mx-auto mb-4' />
            <h3 className='text-3xl font-bold text-gray-800'>78%</h3>
            <p className='text-gray-600'>Players Earn College Scholarships</p>
          </div>
          <div className='text-center p-6 bg-green-50 rounded-xl'>
            <Users className='w-12 h-12 text-green-600 mx-auto mb-4' />
            <h3 className='text-3xl font-bold text-gray-800'>500+</h3>
            <p className='text-gray-600'>Young Lives Impacted</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
