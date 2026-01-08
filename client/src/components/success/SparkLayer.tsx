import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SparkProps {
  x: number;
  y: number;
}
interface SparkItem {
  id: number;
  x: number;
  y: number;
}

const Spark: React.FC<SparkProps> = ({ x, y }) => {
  const size = Math.random() * 12 + 8;
  const duration = Math.random() * 3 + 2.4;

  return (
    <motion.span
      className="absolute rounded-full bg-amber-400/90"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0.8],
        y: -10,
      }}
      transition={{
        duration,
        ease: "easeOut",
      }}
    />
  );
};

const SparkLayer = () => {
  const [sparks, setSparks] = useState<SparkItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpark: SparkItem = {
        id: Date.now(),
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
      };
      setSparks((prev) => [...prev, newSpark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 2500);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparks.map((spark) => (
        <Spark key={spark.id} {...spark} />
      ))}
    </div>
  );
};

export default SparkLayer;
