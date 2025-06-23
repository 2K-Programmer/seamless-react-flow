
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Zap, Users, ShoppingCart, FileText, Rocket, Building, Wrench } from 'lucide-react';

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
    },
    {
      id: 7,
      icon: Code,
      title: "Portfolio Websites",
      description: "Beautiful, interactive, and modern portfolios to showcase your personal brand or creative work.",
      features: ["Personal Branding", "Interactive Design", "Modern Layouts", "Responsive Design"]
    },
    {
      id: 8,
      icon: ShoppingCart,
      title: "E-commerce Sites",
      description: "Fully functional online stores with secure payments, product catalogs, and user-friendly checkout flows.",
      features: ["Payment Integration", "Product Catalogs", "Secure Checkout", "Inventory Management"]
    },
    {
      id: 9,
      icon: FileText,
      title: "CMS Websites",
      description: "Custom content management systems for easy updates, blogging, or team collaboration with admin dashboards.",
      features: ["Content Management", "Admin Dashboards", "User Roles", "Blog Systems"]
    },
    {
      id: 10,
      icon: Rocket,
      title: "Landing Pages",
      description: "High-converting landing pages tailored for product launches, promotions, and lead generation.",
      features: ["Lead Generation", "Conversion Optimization", "A/B Testing", "Analytics Integration"]
    },
    {
      id: 11,
      icon: Building,
      title: "Business Websites",
      description: "Professional and scalable websites for businesses to showcase services, clients, and contact info effectively.",
      features: ["Professional Design", "Service Showcase", "Client Testimonials", "Contact Forms"]
    },
    {
      id: 12,
      icon: Wrench,
      title: "Custom Web Applications",
      description: "Tailor-made full-stack apps with features like authentication, data dashboards, and automation tools.",
      features: ["User Authentication", "Data Dashboards", "Automation Tools", "Custom Features"]
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
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            I specialize in building all types of websites to meet your personal and business goals.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
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
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl animate-pulse" />
              </div>

              <motion.div 
                className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl w-fit mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 relative z-10"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <service.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </motion.div>
              </motion.div>

              <motion.h3 
                className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.title}
              </motion.h3>

              <motion.p 
                className="text-slate-400 mb-6 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-300"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {service.description}
              </motion.p>

              <div className="space-y-2 relative z-10">
                {service.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (i * 0.1) }}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      whileHover={{ 
                        scale: 1.5,
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.6)"
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
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
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
