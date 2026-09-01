"use client";

import Container from "@/components/atoms/Container";
import { aboutLocations } from "./locationsData";
import { motion } from "@/lib/replayMotion";

export default function AboutLocationsSection() {
  return (
    <section className="w-full bg-default py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-pink">
            Locations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white md:text-xl lg:text-4xl">
            Where eForte builds and delivers
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 md:mt-14 md:gap-6">
          {aboutLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px", amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[12px] border border-white/10 bg-white/5 px-6 py-5 text-center"
            >
              <p className="text-base font-semibold text-white md:text-lg">
                {location.name}
              </p>
              {location.detail ? (
                <p className="mt-1 text-sm text-white">{location.detail}</p>
              ) : null}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
