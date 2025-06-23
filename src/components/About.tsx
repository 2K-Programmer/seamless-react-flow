
import { motion } from 'framer-motion';
import { Code, Rocket, Star, Users } from 'lucide-react';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker',
    'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Kubernetes', 'Git'
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Star, label: 'GitHub Stars', value: '500+' },
    { icon: Rocket, label: 'Years Experience', value: '5+' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            data-aos="fade-right"
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-slate-300 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working
              with startups and established companies to build scalable, user-friendly applications.
              My passion lies in creating seamless digital experiences that solve real-world problems.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I specialize in React, Node.js, and cloud technologies, constantly learning and
              adapting to new frameworks and best practices. When I'm not coding, you'll find me
              contributing to open-source projects or mentoring fellow developers.
            </p>
          </motion.div>

          <motion.div
            data-aos="fade-left"
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700/50"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          data-aos="fade-up"
          className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
