import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '5000+', label: 'Loans Funded', icon: Users },
    { number: '24-48hr', label: 'Approval Time', icon: Clock },
    { number: '$2B+', label: 'Loans Originated', icon: Shield }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" itemProp="name">
              About{' '}
              <span className="text-blue-500">Anchor Commercial Capital</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed" itemProp="description">
              With over 15 years of experience in commercial and private lending, we've built 
              a reputation as a trusted partner for borrowers seeking fast, reliable financing solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Industry Expertise
                  </h3>
                  <p className="text-slate-600">
                    Our team of lending professionals brings decades of combined experience 
                    across all sectors of commercial and private lending.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Personalized Service
                  </h3>
                  <p className="text-slate-600">
                    We believe every borrower is unique. Our personalized approach ensures 
                    you get the right financing solution for your specific situation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-purple-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Trusted Network
                  </h3>
                  <p className="text-slate-600">
                    Our extensive network of lenders and investors allows us to find 
                    competitive rates and terms for even the most challenging deals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              To provide fast, reliable, and competitive financing solutions that help our clients 
              achieve their real estate and business goals. We're committed to building long-term 
              relationships based on trust, transparency, and exceptional service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;