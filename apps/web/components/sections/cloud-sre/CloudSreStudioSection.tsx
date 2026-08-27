"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { CLOUD_SRE_ACCENT } from "@/data/capabilities/cloudSre";

export default function CloudSreStudioSection() {
  return (
    <section id="studio" className="bg-[#F4F6FA] text-default">
      <div className="rounded-b-[12px] bg-white py-16 md:rounded-b-[12px]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 107 76.3"
                fill={CLOUD_SRE_ACCENT}
                aria-hidden
                className="mb-6 h-9 w-12"
              >
                <path d="M104.5,35.2c-1-2.5-2.5-4.7-4.4-6.6c-0.5-0.5-1.1-1-1.7-1.5c6.9-9,9.4-16.9,6.2-21.9c-4-6.3-15.9-6.6-32.7-0.7c-1.5,0.5-3,1.1-4.5,1.7c-0.2,0.1-0.3,0.2-0.4,0.4c-2.8-1.5-5.9-2.5-9-2.8c-5.4-0.5-11,0.8-15.5,3.8c-4.4,2.9-7.7,7.1-9.4,12c-0.1,0-0.3,0-0.4,0c-5.8,0-11.3,2.3-15.5,6.4c-4.1,4.1-6.4,9.6-6.4,15.5c0,1.3,0.1,2.6,0.4,3.9C1,56.5-2.1,64.8,1.7,70.7c2.1,3.2,6.3,4.9,12.2,4.9c3.3,0,7.2-0.5,11.5-1.5c8.3-2,17.6-5.7,27.2-10.7h33.1c2.7,0,5.3-0.5,7.8-1.5c2.5-1,4.7-2.5,6.6-4.4c1.9-1.9,3.4-4.1,4.4-6.6c1-2.5,1.5-5.1,1.5-7.8C106,40.3,105.5,37.7,104.5,35.2z M72.6,6.4C88,1,99.6,1,103,6.3c2.7,4.3,0.1,11.5-6.2,19.7c-1-0.7-2.1-1.3-3.3-1.7c-2.5-1-5.1-1.5-7.8-1.5c-2.2,0-4.4,0.3-6.4,1c-0.8-5-3.2-9.6-6.8-13.1c-1.1-1.1-2.2-2-3.5-2.8C70.2,7.3,71.4,6.8,72.6,6.4z M18.6,27.4c3.8-3.8,8.7-5.8,14-5.8c0,0,0,0,0.1,0c0.3,0,0.7,0,1,0c0.5,0,0.9-0.3,1-0.7c1.5-4.8,4.7-8.9,8.9-11.7c4.2-2.8,9.2-4,14.2-3.5c5,0.5,9.7,2.7,13.3,6.2c3.6,3.5,5.8,8.2,6.4,13.2c0,0.3,0.2,0.6,0.5,0.7c0.3,0.2,0.6,0.2,0.9,0.1c2.2-0.9,4.5-1.3,6.8-1.3c2.4,0,4.8,0.5,7.1,1.4c1,0.4,1.9,0.9,2.8,1.5C88.3,36.3,77.1,46,63.7,54.6c-3.9,2.5-7.8,4.7-11.6,6.8H32.6c-5.3,0-10.3-2.1-14-5.8c-3.8-3.8-5.8-8.7-5.8-14C12.7,36.2,14.8,31.2,18.6,27.4z M25,72.1C13.9,74.8,6,73.9,3.3,69.6c-3.1-4.9-0.4-12,8.3-21.9c1,3.4,2.9,6.6,5.5,9.2c4.1,4.1,9.6,6.4,15.5,6.4h15.6C40,67.4,32.1,70.4,25,72.1z M102.6,50c-0.9,2.2-2.3,4.2-4,5.9c-1.7,1.7-3.7,3-5.9,4c-2.2,0.9-4.6,1.4-7,1.4H56.3c2.8-1.6,5.7-3.3,8.5-5.1C78.7,47.4,90,37.6,97.2,28.7c0.5,0.4,1,0.8,1.5,1.3c1.7,1.7,3,3.7,4,5.9c0.9,2.2,1.4,4.6,1.4,7C104,45.4,103.6,47.8,102.6,50z" />
              </svg>
              <h2 className="text-[36px] font-semibold leading-tight">
                Embrace cloud-native solutions
              </h2>
              <p className="mt-4 text-lg font-semibold text-default">The Studio</p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-black">
                Our Cloud, SRE, and DevOps Studio brings deep expertise across
                AWS, Google Cloud, and Azure — helping teams design reliable
                platforms and operate them with confidence.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-black">
                We support cloud migrations, modernization, automation, security,
                and cost optimization—ensuring your infrastructure is agile,
                efficient, and future-ready.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] md:rounded-[12px]"
            >
              <Image
                src="/assets/final-images/capabilities/cloud-sre/Embrace_cloud-native_solutions.jpg"
                alt="Engineers collaborating on cloud infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
