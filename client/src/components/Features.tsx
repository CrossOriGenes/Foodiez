import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "../utils/helpers";

interface FeaturesProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const FeaturesBlock: React.FC<FeaturesProps> = ({
  title,
  description,
  icon,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col justify-center items-center sm:px-8 px-0 md:mb-4 mb-8"
    >
      <div className="relative w-40 h-40 rounded-full flex justify-center items-center p-3">
        <img src={icon} alt="" className="absolute inset-0 object-cover" />
      </div>
      <h3 className="text-3xl font-extrabold text-white text-center my-6">
        {title}
      </h3>
      <p className="font-medium text-gray-400 text-center leading-5">
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative bg-[url(/images/slide_3.jpg)] bg-cover bg-fixed bg-transparent">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-1" />
        <div className="relative lg:px-35 px-25 lg:py-30 py-20 place-items-center z-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, idx) => (
              <FeaturesBlock key={idx} delay={idx * 0.3} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
