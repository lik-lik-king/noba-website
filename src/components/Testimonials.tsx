import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Marcus (Grade 8)",
      image: "https://images.unsplash.com/photo-1583725596997-8e7a07cbe019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGJhc2tldGJhbGwlMjBhY3Rpb24lMjBraWRzJTIwcGxheWluZ3xlbnwxfHx8fDE3NTgzNzg4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "NOBA has been transformative for Marcus. He's not just a better basketball player—he's more confident, responsible, and focused on his academics. The coaches really care about the whole child.",
      rating: 5
    },
    {
      name: "David Williams",
      role: "Parent of Jasmine (Grade 10)",
      image: "https://images.unsplash.com/photo-1720716430227-82ce7abf761d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJhc2tldGJhbGwlMjB0ZWFtJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzU4Mzc4ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The values-based approach at NOBA sets them apart. Jasmine has learned leadership, teamwork, and perseverance that she applies in every area of her life. We couldn't be happier.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Parent of Carlos (Grade 9)",
      image: "https://images.unsplash.com/photo-1615130336273-8d990d47770a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBraWRzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzU4Mzc4ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Carlos struggled with self-esteem before joining NOBA. The coaches believed in him when he didn't believe in himself. Now he's thriving academically and socially. This program changes lives.",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Parent of twin boys (Grade 7)",
      image: "https://images.unsplash.com/photo-1720716430860-482552fc6e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGJhc2tldGJhbGwlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc1ODM3ODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "NOBA understands that every child is different. They've helped both my sons develop their unique strengths while building character and discipline. The community here is like family.",
      rating: 5
    },
    {
      name: "Angela Davis",
      role: "Parent of Destiny (Grade 11)",
      image: "https://images.unsplash.com/photo-1583725596997-8e7a07cbe019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGJhc2tldGJhbGwlMjBhY3Rpb24lMjBraWRzJTIwcGxheWluZ3xlbnwxfHx8fDE3NTgzNzg4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The college preparation support is outstanding. NOBA doesn't just talk about academic excellence—they provide the tools and mentorship to make it happen. Destiny is now looking at full scholarships.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "Parent of David (Grade 12)",
      image: "https://images.unsplash.com/photo-1720716430227-82ce7abf761d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJhc2tldGJhbGwlMjB0ZWFtJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzU4Mzc4ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "David came to NOBA as a freshman with big dreams. The coaches and staff never stopped believing in him. Now he's heading to college on a full scholarship. NOBA makes dreams come true.",
      rating: 5
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Families Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the families who have experienced 
            the NOBA difference firsthand and seen their children thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <Quote className="w-6 h-6" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Building a Stronger Community
            </h3>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Our impact extends far beyond the basketball court. We're building character, 
              strengthening families, and creating lasting positive change in Omaha.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold mb-2">500+</h4>
              <p className="text-red-100">Young Lives Impacted</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">95%</h4>
              <p className="text-red-100">Parent Satisfaction</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">8</h4>
              <p className="text-red-100">Years Serving Omaha</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">100+</h4>
              <p className="text-red-100">Families in Our Community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}