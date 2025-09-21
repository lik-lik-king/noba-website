import { motion } from 'motion/react'
import { Send, Phone, Mail, MapPin, Calendar, DollarSign } from 'lucide-react'

export function Registration () {
  return (
    <section id='registration' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            Join the Outlaws Family
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Ready to give your child the opportunity to grow, learn, and thrive?
            Complete the form below to start their journey with NOBA.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl p-8 shadow-lg'
          >
            <h3 className='text-2xl font-bold text-gray-800 mb-6'>
              Registration Form
            </h3>
            <form
              action='https://formspree.io/f/mnngaary'
              method='POST'
              className='space-y-6'
            >
              <input type='text' name='_honey' style={{ display: 'none' }} />
              <input type='hidden' name='_format' value='json' />

              <div>
                <label className='block text-gray-700 mb-2'>
                  Player Name *
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                  placeholder='Full name of the player'
                />
              </div>

              <div>
                <label className='block text-gray-700 mb-2'>
                  Player Grade *
                </label>
                <select
                  name='playerAge'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                >
                  <option value=''>Select grade</option>
                  <option value='7'>7th Grade</option>
                  <option value='8'>8th Grade</option>
                  <option value='9'>9th Grade</option>
                  <option value='10'>10th Grade</option>
                  <option value='11'>11th Grade</option>
                  <option value='12'>12th Grade</option>
                  <option value='post-grad'>Post Grad</option>
                </select>
              </div>

              <div>
                <label className='block text-gray-700 mb-2'>
                  Parent/Guardian Name *
                </label>
                <input
                  type='text'
                  name='parent'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                  placeholder='Your full name'
                />
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-gray-700 mb-2'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                    placeholder='your.email@example.com'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 mb-2'>
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                    placeholder='(402) 555-0123'
                  />
                </div>
              </div>

              <div>
                <label className='block text-gray-700 mb-2'>
                  Preferred Program *
                </label>
                <select
                  name='program'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                >
                  <option value=''>Select a program</option>
                  <option value='youth-development'>
                    Youth Development (Grades 7-8)
                  </option>
                  <option value='competitive-league'>
                    Competitive League (Grades 9-12)
                  </option>
                  <option value='elite-training'>
                    Elite Training Program (Grades 11-14)
                  </option>
                </select>
              </div>

              <div>
                <label className='block text-gray-700 mb-2'>
                  Basketball Experience
                </label>
                <select
                  name='experience'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                >
                  <option value=''>Select experience level</option>
                  <option value='beginner'>Beginner</option>
                  <option value='some-experience'>Some Experience</option>
                  <option value='intermediate'>Intermediate</option>
                  <option value='advanced'>Advanced</option>
                </select>
              </div>

              <div>
                <label className='block text-gray-700 mb-2'>
                  Player Goals & Expectations
                </label>
                <textarea
                  name='message'
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent'
                  placeholder="Tell us about your child's goals..."
                />
              </div>

              <motion.button
                type='submit'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2'
              >
                Submit Registration
                <Send className='w-5 h-5' />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Get in Touch
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <Phone className='w-6 h-6 text-red-600' />
                  <div>
                    <p className='font-semibold text-gray-800'>
                      (402) 555-NOBA
                    </p>
                    <p className='text-gray-600'>Call or text anytime</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <Mail className='w-6 h-6 text-red-600' />
                  <div>
                    <p className='font-semibold text-gray-800'>
                      info@nebraska-outlaws.org
                    </p>
                    <p className='text-gray-600'>We respond within 24 hours</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <MapPin className='w-6 h-6 text-red-600' />
                  <div>
                    <p className='font-semibold text-gray-800'>
                      Multiple Locations
                    </p>
                    <p className='text-gray-600'>Serving Greater Omaha Area</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
