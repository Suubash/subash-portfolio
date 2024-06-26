import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-tertiary dark:bg-tertiary_dark">
      <div className="max-w-custom py-20 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="mb-5 font-bold">SUBHASH CHAUDHARY</h2>
          <div className="flex flex-col gap-2">
            <Link
              className="hover:text-accent dark:hover:text-accent_dark"
              href="/"
              passHref
            >
              Home
            </Link>
            <Link
              href="/my-projects"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark"
            >
              My Projects
            </Link>
            <Link
              href="/about"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark"
            >
              About
            </Link>
            <Link
              href="/contact"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark"
            >
              Contact
            </Link>
            <Link
              href="/sitemap.xml"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark"
            >
              Sitemap
            </Link>
            <Link
              href="/blog"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-xl font-bold mb-5">Social Links</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.facebook.com/imsuubash"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACEBOOK
            </a>

            <a
              href="https://github.com/subhash-chy"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://www.instagram.com/_subhash_chy"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
