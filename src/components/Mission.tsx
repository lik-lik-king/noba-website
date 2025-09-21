import { motion } from 'motion/react';
import { Target, Heart, Star, Trophy } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Play Hard",
      description: "We believe in giving 100% effort in everything we do, on and off the court."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Dream Big", 
      description: "We encourage our players to set ambitious goals and work relentlessly to achieve them."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Shine Bright",
      description: "We help every player discover their unique talents and let their light shine through."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Build Champions",
      description: "We develop champions in character, academics, and basketball fundamentals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Nebraska Outlaws Basketball Association is dedicated to developing young athletes in grades 7-14 
            through basketball, character building, and academic excellence in the Omaha community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-red-600 mb-4 group-hover:text-red-700 transition-colors"
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-red-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            "Play Hard. Dream Big. Shine Bright."
          </h3>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            This isn't just our motto—it's the foundation of everything we do. 
            We're building the next generation of leaders, both on the basketball court and in life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}