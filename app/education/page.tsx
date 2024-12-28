"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCapIcon, BookOpenIcon } from "lucide-react";

const education = [
  {
    degree: "Certified Agentic, and Robotic AI Engineer",
    school: "Governor Initiative For AI",
    year: "2024 - present",
    description:
      "Advanced training in AI, Machine Learning, and Robotics, focusing on the design and implementation of intelligent systems.",
    icon: BookOpenIcon,
  },
  {
    degree: "Bachelor in Doctor of Physical Therapy",
    school: "Karachi University",
    year: "2024 - present",
    description:
      "In-depth study of human behavior, cognition, emotion, and mental processes, with a focus on psychological theories, research methods, and clinical practices.",
    icon: GraduationCapIcon,
  },
];

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-primary-500 transition-all duration-300 ease-in-out hover:text-primary-700">
          Education 🎓
        </h1>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-primary-600">
            My Educational Background
          </h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 ease-in-out">
                  <div className="flex gap-4 items-center">
                    <motion.div
                      whileHover={{
                        rotate: 15,
                        scale: 1.2,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                      className="mt-1"
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-primary-500 hover:text-primary-700 transition-all duration-200 ease-in-out">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground">{item.school}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.year}
                      </p>
                      <motion.p
                        className="text-gray-400"
                        whileHover={{
                          color: "#4F46E5",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
