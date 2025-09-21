const nobaLogo = '/images/logo.png'

import { motion } from 'motion/react'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer () {
  const socialLinks = [
    { icon: <Facebook className='w-5 h-5' />, href: '#', label: 'Facebook' },
    { icon: <Instagram className='w-5 h-5' />, href: '#', label: 'Instagram' },
    { icon: <Twitter className='w-5 h-5' />, href: '#', label: 'Twitter' }
  ]

  const quickLinks = [
    { name: 'About NOBA', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Player Stories', href: '#players' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact Us', href: '#contact' }
  ]

  const programs = [
    { name: 'Youth Development', href: '#programs' },
    { name: 'Competitive League', href: '#programs' },
    { name: 'Elite Training', href: '#programs' },
    { name: 'Summer Camps', href: '#programs' }
  ]

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <div className='flex items-center gap-3 mb-6'>
              <img src={nobaLogo} alt='NOBA Logo' className='h-12 w-12' />
              <div>
                <h3 className='text-xl font-bold'>Nebraska Outlaws</h3>
                <p className='text-gray-400'>Basketball Association</p>
              </div>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Building champions on and off the court since 2024. We develop
              young athletes through basketball, character building, and
              academic excellence.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className='bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors'
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className='text-lg font-bold mb-6'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group'
                  >
                    <span className='w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className='text-lg font-bold mb-6'>Our Programs</h4>
            <ul className='space-y-3'>
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className='text-gray-300 hover:text-red-400 transition-colors flex items-center gap-2 group'
                  >
                    <span className='w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className='text-lg font-bold mb-6'>Contact Us</h4>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <Phone className='w-5 h-5 text-red-600 mt-1' />
                <div>
                  <p className='text-white'>(402) 555-NOBA</p>
                  <p className='text-gray-400 text-sm'>Call or text anytime</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Mail className='w-5 h-5 text-red-600 mt-1' />
                <div>
                  <p className='text-white'>info@nebraska-outlaws.org</p>
                  <p className='text-gray-400 text-sm'>24-hour response time</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-red-600 mt-1' />
                <div>
                  <p className='text-white'>Greater Omaha Area</p>
                  <p className='text-gray-400 text-sm'>
                    Multiple training locations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-gray-800 mt-12 pt-8 text-center'
        >
          <blockquote className='text-2xl md:text-3xl font-bold text-red-400 mb-4'>
            "Play Hard. Dream Big. Shine Bright."
          </blockquote>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            More than a motto—it's our commitment to developing champions in
            life, not just basketball. Every child deserves the chance to
            discover their potential.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-gray-400 text-sm'>
              © 2024 Nebraska Outlaws Basketball Association. All rights
              reserved.
            </div>
            <div className='flex gap-6 text-sm'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
