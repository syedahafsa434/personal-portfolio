"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowRightIcon,
  CodeIcon,
  BrainIcon,
  RocketIcon,
} from "lucide-react";
import Link from "next/link";
import { GradientTracker } from "@/components/gradient-tracker";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import Typewriter from "typewriter-effect";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { icon: SiHtml5, label: "HTML", color: "#E44D26" },
    { icon: SiCss3, label: "CSS", color: "#264DE4" },
    { icon: SiTypescript, label: "TypeScript", color: "#007ACC" },
    { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { icon: SiNodedotjs, label: "Node.js", color: "#83CD29" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
    { icon: SiReact, label: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, label: "Next.js", color: "#808080" },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <GradientTracker />
      <motion.div
        variants={itemVariants}
        className="text-center space-y-6 hero-gradient p-12 rounded-2xl glass"
      >
        <motion.div
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 mx-auto mb-8 rounded-full glow flex items-center justify-center glass"
        >
          <CodeIcon className="w-16 h-16" />
        </motion.div>
        <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
          Syeda Hafsa
        </h1>
        <div className="text-2xl text-muted-foreground">
          <Typewriter
            options={{
              strings: [
                " Crafting Digital Experiences with Code ✨",
                " Transforming Ideas into Reality 🚀",
                " Building Scalable Web Solutions 🌐",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 80,
            }}
          />
        </div>
        <div className="flex justify-center gap-4">
          {[
            {
              Icon: GithubIcon,
              href: "https://github.com/syedahafsa434",
            },
            {
              Icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/syeda-hafsa-4587352ba/",
            },
            { Icon: MailIcon, href: "mailto:syedahafsa2345@gmail.com" },
          ].map(({ Icon, href }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="glass">
                  <Icon className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: CodeIcon,
            title: "Full Stack Developer 💻",
            description:
              "Building scalable applications with modern technologies",
          },
          {
            icon: BrainIcon,
            title: "Problem Solver 🧠",
            description: "Turning complex challenges into elegant solutions",
          },
          {
            icon: RocketIcon,
            title: "Innovation Driven 🚀",
            description: "Always exploring new technologies and methodologies",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <Card className="p-6 glass h-full">
              <item.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <Card className="p-8 glass">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a solid foundation in web development, I'm an aspiring Full
              Stack Developer specializing in HTML5, CSS3, TypeScript, Tailwind
              CSS, React.js, and Next.js. Currently pursuing advanced learning
              in Generative AI and Cloud Computing, I&apos;m passionate about
              building responsive and user-centric applications. My focus is on
              crafting innovative solutions that align with modern technology
              trends and address real-world challenges.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ icon: SkillIcon, label, color }) => (
                <motion.span
                  key={label}
                  whileHover={{
                    scale: 1.1,
                    textShadow: `0px 0px 8px ${color}`,
                    boxShadow: `0px 0px 15px ${color}`,
                  }}
                  className="px-4 py-2 rounded-full glass text-sm font-medium flex items-center gap-2"
                  style={{ color }}
                >
                  <SkillIcon className="w-4 h-4" style={{ color }} /> {label}{" "}
                </motion.span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/projects">
          <Button
            className="w-full glass bg-primary text-gray-500 hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-md"
            size="lg"
          >
            Explore My Work 🌟
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
