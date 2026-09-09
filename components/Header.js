import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMobileMenu = () => {
    setNavbarOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex items-center shrink-0"
          aria-label="The Dreamday Events home"
        >
          <img
            src="/images/rec-logo.png"
            alt="The Dreamday Events"
            className="object-contain w-auto h-16 sm:h-20"
          />
        </Link>

        <button
          className="p-2 ml-4 text-navy-900 rounded-md outline-none hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 md:hidden"
          type="button"
          aria-label={navbarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div
          className={[
            "absolute left-0 right-0 top-full border-b border-gray-100 bg-white px-4 pb-5 shadow-lg dark:border-gray-800 dark:bg-gray-950 md:static md:flex md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:md:bg-transparent",
            navbarOpen ? "block" : "hidden md:flex",
          ].join(" ")}
        >
          <nav
            className="flex flex-col items-center gap-5 pt-5 md:flex-row md:gap-8 md:pt-0"
            aria-label="Main navigation"
          >
            <a
              href="/#services"
              onClick={closeMobileMenu}
              className="text-base text-navy-900 transition duration-300 hover:text-gold-600 dark:text-gray-300 dark:hover:text-gold-400"
            >
              Services
            </a>

            <a
              href="/#gallery"
              onClick={closeMobileMenu}
              className="text-base text-navy-900 transition duration-300 hover:text-gold-600 dark:text-gray-300 dark:hover:text-gold-400"
            >
              Gallery
            </a>

            <a
              href="/#about"
              onClick={closeMobileMenu}
              className="text-base text-navy-900 transition duration-300 hover:text-gold-600 dark:text-gray-300 dark:hover:text-gold-400"
            >
              About Us
            </a>

            <a
              href="/#contact"
              onClick={closeMobileMenu}
              className="text-base text-navy-900 transition duration-300 hover:text-gold-600 dark:text-gray-300 dark:hover:text-gold-400"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center justify-center gap-3 mt-5 md:mt-0 md:ml-8">
            <button
              aria-label="Toggle dark mode"
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-gold-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-navy-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21.75 15.002A9.717 9.717 0 0112 21.75 9.75 9.75 0 0112 2.25c.344 0 .683.018 1.017.053A7.5 7.5 0 0021.75 15.002z" />
                </svg>
              )}
            </button>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-4 py-2 text-sm font-semibold text-navy-900 transition duration-300 border border-gold-500 rounded-md hover:bg-gold-50 dark:text-gold-300 dark:hover:bg-gray-800"
            >
              Get a Quote
            </a>

            <a
              href="https://wa.me/919113046593"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="px-4 py-2 text-sm font-semibold text-white transition duration-300 rounded-md bg-navy-900 hover:bg-gold-600 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}