// 1. Imports always first
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { motion } from 'motion/react'
import { Heart } from 'lucide-react'

// 2. Stripe setup after ALL imports
const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
if (!publishableKey) {
  throw new Error('Missing VITE_STRIPE_PUBLISHABLE_KEY in environment')
}
const stripePromise = loadStripe(publishableKey)

// Donation Form Component
function DonationForm () {
  const stripe = useStripe()
  const elements = useElements()
  const [amount, setAmount] = useState(5)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setLoading(true)

    try {
      // Create payment intent on your server (we'll simulate this for now)
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Stripe uses cents
          donor: donorInfo
        })
      })

      const { client_secret } = await response.json()

      // Confirm payment
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: donorInfo.name,
            email: donorInfo.email
          }
        }
      })

      if (result.error) {
        console.error(result.error)
      } else {
        setSuccess(true)
      }
    } catch (error) {
      console.error('Payment failed:', error)
    }

    setLoading(false)
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className='text-center bg-green-50 p-8 rounded-2xl'
      >
        <Heart className='w-16 h-16 text-green-600 mx-auto mb-4' />
        <h3 className='text-2xl font-bold text-green-800 mb-2'>Thank You!</h3>
        <p className='text-lg text-green-700'>
          Your ${amount} donation helps Nebraska Outlaws continue developing
          young athletes!
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-gray-700 mb-3 font-semibold'>
          Select Donation Amount
        </label>
        <div className='grid grid-cols-5 gap-2 mb-4'>
          {[1, 5, 10, 20, 50].map(value => (
            <button
              key={value}
              type='button'
              onClick={() => setAmount(value)}
              className={`py-3 px-4 rounded-lg font-semibold border-2 transition-colors ${
                amount === value
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-red-600 border-red-600 hover:bg-red-50'
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-gray-700'>Custom: $</span>
          <input
            type='number'
            min='1'
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className='border border-gray-300 rounded px-3 py-2 w-20'
          />
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-gray-700 mb-2'>Full Name *</label>
          <input
            type='text'
            required
            value={donorInfo.name}
            onChange={e => setDonorInfo({ ...donorInfo, name: e.target.value })}
            className='w-full border border-gray-300 rounded px-3 py-2'
            placeholder='Your full name'
          />
        </div>
        <div>
          <label className='block text-gray-700 mb-2'>Email Address *</label>
          <input
            type='email'
            required
            value={donorInfo.email}
            onChange={e =>
              setDonorInfo({ ...donorInfo, email: e.target.value })
            }
            className='w-full border border-gray-300 rounded px-3 py-2'
            placeholder='your@email.com'
          />
        </div>
      </div>

      <div>
        <label className='block text-gray-700 mb-2'>
          Payment Information *
        </label>
        <div className='border border-gray-300 rounded px-3 py-3'>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                }
              }
            }}
          />
        </div>
      </div>

      <motion.button
        type='submit'
        disabled={loading || !stripe}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-red-600 hover:bg-red-700'
        } text-white`}
      >
        {loading ? 'Processing...' : `Donate $${amount}`}
      </motion.button>
    </form>
  )
}

// Main Donate Component
export function Donate () {
  return (
    <section id='donate' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            Support Our Mission
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Your donation helps provide equipment, training, and opportunities
            for young athletes in our community to grow both on and off the
            court.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8'
        >
          <Elements stripe={stripePromise}>
            <DonationForm />
          </Elements>
        </motion.div>
      </div>
    </section>
  )
}
