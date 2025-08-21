import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Award } from 'lucide-react';

const BingOptimization = () => {
  const locations = [
    "New York", "California", "Florida", "Texas", "Illinois", "Pennsylvania",
    "Ohio", "Georgia", "North Carolina", "Michigan", "New Jersey", "Virginia"
  ];

  const serviceAreas = [
    {
      region: "Northeast",
      states: ["New York", "New Jersey", "Pennsylvania", "Connecticut", "Massachusetts", "Rhode Island"],
      description: "Comprehensive commercial and private lending services throughout the Northeast corridor"
    },
    {
      region: "Southeast", 
      states: ["Florida", "Georgia", "North Carolina", "South Carolina", "Virginia", "Tennessee"],
      description: "Fast approval private money loans and bridge financing across the Southeast"
    },
    {
      region: "Midwest",
      states: ["Illinois", "Ohio", "Michigan", "Indiana", "Wisconsin", "Minnesota"],
      description: "Commercial real estate financing and construction loans throughout the Midwest"
    },
    {
      region: "West Coast",
      states: ["California", "Washington", "Oregon", "Nevada", "Arizona", "Colorado"],
      description: "High-value commercial loans and specialty financing on the West Coast"
    },
    {
      region: "Southwest",
      states: ["Texas", "Arizona", "New Mexico", "Oklahoma", "Arkansas", "Louisiana"],
      description: "Oil & gas, commercial real estate, and private money lending in the Southwest"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Bing-Optimized Location Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nationwide{' '}
            <span className="text-blue-500">Private Money Lending</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Anchor Commercial Capital provides private money loans, bridge financing, and commercial 
            lending services in all 50 states. Our nationwide network of lenders and local market 
            expertise ensures competitive rates and fast closings wherever your property is located.
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {area.region} Region
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              <div className="space-y-2">
                {area.states.map((state, stateIndex) => (
                  <span
                    key={stateIndex}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-slate-700 mr-2 mb-2"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Business Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Contact Our Lending Specialists
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Speak directly with experienced lending professionals who understand 
              your local market and can structure the right financing solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-blue-500" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">
                Call Today
              </h4>
              <p className="text-2xl font-bold text-blue-500 mb-2">
                (555) 123-LOAN
              </p>
              <p className="text-slate-600">
                Speak with a lending specialist
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-green-500" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">
                Business Hours
              </h4>
              <p className="text-lg font-semibold text-slate-700 mb-2">
                Mon-Fri: 8AM-8PM EST
              </p>
              <p className="text-slate-600">
                Weekend appointments available
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-purple-500" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">
                Nationwide Service
              </h4>
              <p className="text-lg font-semibold text-slate-700 mb-2">
                All 50 States
              </p>
              <p className="text-slate-600">
                Nationwide coverage
              </p>
            </div>
          </div>
        </motion.div>

        {/* Popular Locations for Bing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Popular Markets We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border-2 border-blue-100 px-6 py-3 rounded-full text-slate-700 font-medium hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                {location} Private Money Loans
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BingOptimization;