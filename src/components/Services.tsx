
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, Vue, and modern CSS frameworks.",
      features: ["React/Vue.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with React Native and Flutter.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"]
    },
    {
      id: 3,
      title: "Full Stack Development",
      icon: Globe,
      description: "End-to-end web application development with modern backend technologies.",
      features: ["Node.js", "Python/Django", "PostgreSQL", "REST/GraphQL APIs"]
    },
    {
      id: 4,
      icon: Database,
      title: "Database Design",
      description: "Designing and optimizing database structures for performance and scalability.",
      features: ["PostgreSQL", "MongoDB", "Database Optimization", "Data Migration"]
    },
    {
      id: 5,
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, SEO, and better user experience.",
      features: ["Core Web Vitals", "SEO Optimization", "Code Splitting", "Caching Strategies"]
    },
    {
      id: 6,
      icon: Users,
      title: "Technical Consulting",
      description: "Providing technical guidance and code reviews for development teams.",
      features: ["Code Review", "Architecture Planning", "Team Mentoring", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive web development services to help bring your ideas to life with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl w-fit mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                <service.icon className="w-8 h-8 text-blue-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-8">
            Ready to start your next project? Let's discuss how I can help you achieve your goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
