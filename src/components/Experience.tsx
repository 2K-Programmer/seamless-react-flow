
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading the frontend development team in building scalable web applications using React, TypeScript, and modern development practices.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led a team of 5 developers in delivering 3 major product releases",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartUp Solutions",
      location: "Remote",
      duration: "2021 - 2022",
      type: "Full-time",
      description: "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL.",
      achievements: [
        "Built 5+ responsive web applications from scratch",
        "Integrated third-party APIs and payment gateways",
        "Mentored 2 junior developers"
      ]
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Digital Agency Pro",
      location: "New York, NY",
      duration: "Summer 2021",
      type: "Internship",
      description: "Collaborated with design and development teams to create responsive user interfaces.",
      achievements: [
        "Contributed to 10+ client projects",
        "Learned modern frontend frameworks and tools",
        "Received outstanding intern performance review"
      ]
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Creative Studios",
      location: "Boston, MA",
      duration: "Summer 2020",
      type: "Internship",
      description: "Assisted in developing websites and web applications for various clients.",
      achievements: [
        "Developed responsive landing pages",
        "Gained experience with version control and team collaboration",
        "Completed 3 months training program successfully"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My journey through various roles and companies, building expertise in web development and leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 hidden md:block"></div>

                <div className="md:ml-20 bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Building size={16} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        exp.type === 'Internship' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
