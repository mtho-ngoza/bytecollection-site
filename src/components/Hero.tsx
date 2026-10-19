import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years Enterprise Experience" },
  { value: "2000+", label: "Automated Tests Shipped" },
  { value: "86%+", label: "Code Coverage Achieved" },
];

export default function Hero() {
  return (
    <section className="min-h-screen grid-bg relative pt-32 pb-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 text-sm mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400">
              AWS Certified | Enterprise Experience | CIPC Registered
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Enterprise-Grade{" "}
            <span className="gradient-text">Software Engineering</span> for Growing Businesses
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Byte Collection brings software engineering expertise from BMW, WesBank and FNB
            to businesses that need production-ready applications. Full-stack development
            from concept to deployment, with the quality standards of enterprise environments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-center font-medium transition-all duration-200 glow hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="#work"
              className="border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-full text-center font-medium transition-all duration-200 hover:bg-gray-800/50"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-gray-800"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
