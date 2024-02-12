"use client";
import useAppData from "@hooks/useAppData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "About",
    link: "/about",
  },
];

const HeaderNav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav>
      <ul className={cn("flex items-center gap-8", className)}>
        {navItems.map((item, index) => (
          <NavItem key={index} title={item.title} link={item.link} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isOnPage, setIsOnPage] = useState(false);
  const { locale } = useAppData();
  const pathname = usePathname();
  const url = useMemo(() => `/${locale}${link}`, [locale, link]);

  useEffect(() => setIsOnPage(pathname === url), [pathname, url]);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Link href={url}>
        <motion.span
          className="relative"
          initial={isActive || isOnPage ? "hover" : "default"}
          animate={isActive || isOnPage ? "hover" : "default"}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.1 }}
          variants={{
            hover: {
              opacity: 0,
            },
            default: {
              opacity: 1,
            },
          }}
        >
          {title}
        </motion.span>
        <motion.span
          className="!absolute bottom-0 left-0"
          initial={isActive || isOnPage ? "hover" : "default"}
          animate={isActive || isOnPage ? "hover" : "default"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          variants={{
            hover: {
              bottom: 0,
              opacity: 1,
              color: "#45cc62",
              pointerEvents: "auto",
            },
            default: {
              bottom: "-100%",
              opacity: 0,
              color: "#45cc62",
              pointerEvents: "none",
            },
          }}
        >
          {title}
        </motion.span>
      </Link>
    </li>
  );
};

export { HeaderNav };