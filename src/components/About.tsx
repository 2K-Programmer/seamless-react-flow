
import { motion } from 'framer-motion';
import { Code, Rocket, Star, Users, Database, Globe, FileCode2, Layers, Flame, Terminal, Github, Settings } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: FileCode2, color: "text-orange-400" },
        { name: "CSS", icon: Layers, color: "text-blue-400" },
        { name: "JavaScript", icon: Code, color: "text-yellow-400" },
        { name: "React Js", icon: Globe, color: "text-cyan-400" },
        { name: "Bootstrap", icon: Layers, color: "text-purple-400" }
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Python", icon: Code, color: "text-blue-400" },
        { name: "MongoDB", icon: Database, color: "text-green-400" },
        { name: "Firebase", icon: Flame, color: "text-orange-400" }
      ]
    },
    {
      title: "Others",
      skills: [
        { name: "Git", icon: Terminal, color: "text-red-400" },
        { name: "GitHub", icon: Github, color: "text-gray-400" },
        { name: "Netlify", icon: Globe, color: "text-teal-400" },
        { name: "VS Code", icon: Settings, color: "text-blue-400" }
      ]
    }
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
          className="space-y-12"
        >
          {/* Header Section */}
          <div className="text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Skills
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Here are some of my skills on which I have been working on for the past 2 years.
            </motion.p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <motion.h4 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (categoryIndex * 0.2) + 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-white mb-8 text-center"
                >
                  {category.title}
                </motion.h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.4,
                        duration: 0.4 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className={`p-2 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors duration-300`}>
                        <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      </div>
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
