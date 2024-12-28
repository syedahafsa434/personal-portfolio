"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "react-hot-toast";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formEndpoint = "https://formspree.io/f/xwpeykon";

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send the message. Please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Toaster for Notifications */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-muted-foreground">
          Let&apos;s discuss your next project
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input name="name" placeholder="Your Name" required />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <Input name="subject" placeholder="Subject" required />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                className="min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-5 h-full">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 text-primary" />
              <span>syedahafsa2345@gmail.com</span>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" size="icon">
                <Link
                  href={"https://github.com/syedahafsa434"}
                  target="_blank"
                >
                  <GithubIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link
                  href={"https://www.linkedin.com/in/syeda-hafsa-4587352ba/"}
                  target="_blank"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link
                  href={"mailto:syedahafsa2345@gmail.com"}
                  target="_blank"
                >
                  <MailIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
