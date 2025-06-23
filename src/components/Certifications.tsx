
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/placeholder.svg",
      credentialId: "AWS-CSA-2023-001",
      verifyLink: "#"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2023",
      image: "/placeholder.svg",
      credentialId: "META-REACT-2023-002",
      verifyLink: "#"
    },
    {
      id: 3,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      image: "/placeholder.svg",
      credentialId: "GCP-PRO-2022-003",
      verifyLink: "#"
    },
    {
      id: 4,
      title: "Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      image: "/placeholder.svg",
      credentialId: "CKA-2022-004",
      verifyLink: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar size={16} />
                  {cert.date}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-slate-400 mb-4">{cert.issuer}</p>
              
              <div className="text-sm text-slate-500 mb-6">
                Credential ID: {cert.credentialId}
              </div>

              <motion.a
                href={cert.verifyLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                <ExternalLink size={16} />
                Verify Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
