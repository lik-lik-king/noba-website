import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users, Star, ArrowRight } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      title: "Youth Development (Grades 7-8)",
      description: "Building fundamental skills and character in our youngest athletes",
      features: [
        "Basic basketball fundamentals",
        "Character development workshops", 
        "Academic support programs",
        "Team building activities"
      ],
      schedule: "Tuesdays & Thursdays, 4:00-6:00 PM",
      location: "Omaha Community Center",
      spots: "20 players"
    },
    {
      title: "Competitive League (Grades 9-12)",
      description: "Advanced training for athletes ready to take their game to the next level",
      features: [
        "Advanced skill development",
        "College prep assistance",
        "Leadership training",
        "Tournament competition"
      ],
      schedule: "Mondays, Wednesdays & Fridays, 6:00-8:00 PM", 
      location: "North High School Gym",
      spots: "24 players"
    },
    {
      title: "Elite Training Program (Grades 11-14)",
      description: "Intensive program for serious athletes pursuing college opportunities",
      features: [
        "Individual skill coaching",
        "College recruiting support",
        "Academic excellence mentoring",
        "Community service projects"
      ],
      schedule: "Daily training available",
      location: "Multiple Facilities",
      spots: "16 players"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored programs designed to meet young athletes where they are and help them reach their full potential, 
            both on the court and in life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Star className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{program.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span className="text-sm text-gray-600">{program.schedule}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span className="text-sm text-gray-600">{program.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span className="text-sm text-gray-600">{program.spots}</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Program Highlights</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div 
                className="px-8 pb-8"
                whileHover={{ x: 5 }}
              >
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join the Outlaws Family?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Don't wait to start your journey. Our programs fill up quickly, and we want to make sure 
              your young athlete has the opportunity to grow with us.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Register Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}