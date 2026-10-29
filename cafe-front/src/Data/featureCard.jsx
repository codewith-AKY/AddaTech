import { motion } from "framer-motion";
import { featureData } from "../Data/featureData";
export const FeatureCard=({ feature }) => {
    const Icon = feature.icon;
    return (
        <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white/80 backdrop-blur-sm border border-orange-300/60 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-300/50 flex items-center justify-center text-orange-600 mb-4">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {feature.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
    );
};

