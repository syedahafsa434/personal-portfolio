"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/syedahafsa434/hackathon",
    demo: "https://hackathon-beta-smoky.vercel.app/"
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using DALL-E API",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80",
    tags: ["Next.js", "Tailwind CSS", "TyepeScript"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-muted-foreground">A selection of my favorite works</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={"https://github.com/syedahafsa434/hackathon"} target="blank">
                  <Button variant="outline" size="sm">
                    <GithubIcon className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  </Link>
                  <Link href={"https://hackathon-beta-smoky.vercel.app"} target="blank">
                  <Button size="sm">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}