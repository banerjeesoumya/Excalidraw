"use client";

import { Button } from "@repo/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#3D5AF1] to-[#9B87F5]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(61,90,241,0.5)_0%,rgba(155,135,245,0.2)_100%)]" />
            
            <div className="absolute inset-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/5"
                />
                <motion.div
                  animate={{
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-1/2 right-1/4 w-24 h-24 rounded-lg bg-white/5"
                />
              </motion.div>
            </div>
          </div>

          <div className="relative px-6 py-16 md:py-20 md:px-12 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
                Ready to Bring Your Ideas to Life?
              </h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
                Join thousands of people who use our collaborative drawing tool to express their ideas visually.
                No sign up required to get started.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-[#3D5AF1] text-base px-6 py-4 hover:bg-white/90 rounded-full px-8">
                  Start Drawing Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
                  Watch Tutorial
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}