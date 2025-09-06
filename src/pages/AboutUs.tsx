import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, ArrowLeft, Building2, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '5000+', label: 'Loans Funded', icon: Users },
    { number: '24-48hr', label: 'Approval Time', icon: Clock },
    { number: '$2B+', label: 'Loans Originated', icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver accurate loan matching and precise financing solutions tailored to your specific needs.'
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Our streamlined processes ensure you get term sheets in 24-48 hours, not weeks or months.'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'We treat every client with respect and provide personalized attention throughout the entire process.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Built on transparency, integrity, and a proven track record of successful loan closings.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="text-blue-400">Anchor Commercial Capital</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in commercial and private lending since 2009. 
              We connect borrowers with the right lenders to achieve their financing goals.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Founded in 2009, Anchor Commercial Capital was born from a simple mission: 
                  to bridge the gap between borrowers seeking financing and lenders looking for quality deals.
                </p>
                <p>
                  Over the past 15+ years, we've built an extensive network of private lenders, 
                  institutional investors, and specialty financing sources across all 50 states. 
                  Our team has facilitated over $2 billion in loans, helping thousands of borrowers 
                  achieve their real estate and business objectives.
                </p>
                <p>
                  What sets us apart is our commitment to speed and service. While traditional 
                  lenders can take months to provide answers, we deliver qualified term sheets 
                  in 24-48 hours, allowing our clients to move quickly on time-sensitive opportunities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
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
            </div>
          </div>
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're driven by core values that guide every interaction and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-blue-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Commitment to You
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every member of our team is dedicated to providing exceptional service 
                and finding the right financing solution for your unique situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="text-blue-500" size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Industry Expertise
                </h3>
                <p className="text-slate-600">
                  Our team brings decades of combined experience in commercial real estate, 
                  private lending, and alternative financing solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-green-500" size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Personalized Service
                </h3>
                <p className="text-slate-600">
                  We believe every borrower is unique. Our personalized approach ensures 
                  you get the right financing solution for your specific situation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-purple-500" size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let us help you find the perfect financing solution for your needs. 
              Contact us today for a free consultation.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center space-x-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              <span>Get Started Today</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;