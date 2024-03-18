"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StrapiResponse, Media } from "@/modules/common/types/common";
import Link from "next/link";
import { AppConfig } from "@/config/app.config";

export type ProjectCardProps = {
  image: StrapiResponse<Media>;
  title: string;
  summary: string;
  slug: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (card) => {
  const link = card.slug ? `/work/${card.slug}` : "#";

  return (
    <motion.div
      className="w-full max-w-[750px]"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30%" }}
      transition={{ ease: "backInOut" }}
    >
      <Link href={link}>
        <Image
          src={`${AppConfig.strapi.url}${card.image.data.attributes.url}`}
          alt={card.image.data.attributes.alternativeText || card.title}
          width={750}
          height={440}
          className="rounded-xl"
        />
        <div className="flex flex-col mt-6">
          <h3 className="text-2xl">{card.title}</h3>
          <p className="text-[16px] text-white-56">{card.summary}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
