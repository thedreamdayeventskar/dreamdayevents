import { useState } from "react";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/919113046593";
const PHONE_NUMBER = "+91 91130 46593";
const PHONE_LINK = "tel:+919113046593";
const EMAIL = "contact@thedreamdayevents.com";

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.63a2 2 0 0 1-.45 2.11L8.04 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.31 1.73.53 2.63.65A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.6 1.6-1.6h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.7v8h3.4Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="1,6 8,3 16,6 23,3 23,18 16,21 8,18 1,21" />
      <path d="M8 3v15" />
      <path d="M16 6v15" />
    </svg>
  );
}

function DisabledSocialLink({ label, children }) {
  return (
    <span
      title={`${label} link will be added soon`}
      aria-label={`${label} link will be added soon`}
      className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-white/15 text-gray-500"
    >
      {children}
    </span>
  );
}

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);

      window.setTimeout(() => {
        setEmailCopied(false);
      }, 2500);
    } catch {
      window.prompt("Copy this email address:", EMAIL);
    }
  };

  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <section className="relative -top-px overflow-hidden rounded-b-2xl border border-gold-400/30 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-6 py-9 shadow-xl sm:px-10 sm:py-11">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-gold-400/15 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-300">
                Let&apos;s create something memorable
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Ready to Plan Your Dreamday?
              </h2>

              <p className="max-w-2xl mt-3 text-sm leading-7 text-gray-300 sm:text-base">
                Tell us about your celebration. The Dreamday Events team will
                help turn your vision into a beautifully planned event.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition duration-300 hover:bg-gold-400 hover:shadow-lg"
            >
              Start on WhatsApp
              <span className="ml-2">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </section>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-bold tracking-wide text-white transition hover:text-gold-300"
              aria-label="The Dreamday Events home"
            >
              THE DREAMDAY
              <span className="ml-2 text-gold-400">EVENTS</span>
            </Link>

            <p className="max-w-xs mt-5 text-sm leading-7 text-gray-400">
              We plan, design, coordinate, and execute celebrations that feel
              personal, seamless, and truly unforgettable.
            </p>

            <p className="mt-5 text-sm font-semibold text-gold-300">
              Bengaluru &amp; across Karnataka
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.16em] uppercase text-gold-300">
              Explore
            </h3>

            <nav
              className="flex flex-col gap-3 mt-5 text-sm"
              aria-label="Footer navigation"
            >
              <a className="transition hover:text-gold-300" href="/#services">
                Our Services
              </a>

              <a className="transition hover:text-gold-300" href="/#gallery">
                Our Gallery
              </a>

              <a className="transition hover:text-gold-300" href="/#about">
                About Dreamday
              </a>

              <a className="transition hover:text-gold-300" href="/#contact">
                Contact Us
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.16em] uppercase text-gold-300">
              Contact
            </h3>

            <div className="flex flex-col gap-4 mt-5 text-sm">
              <a
                href={PHONE_LINK}
                className="flex items-start gap-3 transition hover:text-gold-300"
              >
                <span className="mt-0.5 text-gold-400">
                  <PhoneIcon />
                </span>

                <span>
                  <span className="block text-xs text-gray-500">
                    Call:
                  </span>
                  {PHONE_NUMBER}
                </span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="flex items-start gap-3 text-left transition hover:text-gold-300"
                aria-label={`Copy email address ${EMAIL}`}
              >
                <span className="mt-0.5 text-gold-400">
                  <MailIcon />
                </span>

                <span>
                  <span className="block text-xs text-gray-500">
                    {emailCopied ? "Email copied to clipboard" : "Email us"}
                  </span>
                  {EMAIL}
                </span>
              </button>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold-400">
                  <LocationIcon />
                </span>

                <address className="not-italic leading-6 text-gray-400">
                  180, 8th Cross Road, Dasarahalli,
                  <br />
                  Bengaluru, Karnataka 560024, India
                </address>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.16em] uppercase text-gold-300">
              Follow our work
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Our social channels and Google Maps profile will be linked here
              soon.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <DisabledSocialLink label="Instagram">
                <InstagramIcon />
              </DisabledSocialLink>

              <DisabledSocialLink label="Facebook">
                <FacebookIcon />
              </DisabledSocialLink>

              <DisabledSocialLink label="YouTube">
                <YouTubeIcon />
              </DisabledSocialLink>

              <DisabledSocialLink label="Google Maps">
                <MapIcon />
              </DisabledSocialLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} The Dreamday Events. All rights
            reserved.
          </p>

          <p>
            Website designed &amp; developed by{" "}
            <span className="font-bold text-gold-400">Pruthvi Deepam L A</span>
          </p>
        </div>
      </div>
    </footer>
  );
}