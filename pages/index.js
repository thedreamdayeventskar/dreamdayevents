import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import BackToTop from "../components/BackToTop";

const WHATSAPP_URL = "https://wa.me/919113046593";

const heroSlides = [
  {
    src: "/images/placeholder.webp",
    alt: "Dreamday Events celebration setup",
    label: "Beautifully planned celebrations",
  },
  {
    src: "/images/placeholder-2.webp",
    alt: "Dreamday Events wedding decor",
    label: "Moments made unforgettable",
  },
  {
    src: "/images/placeholder-3.webp",
    alt: "Dreamday Events event arrangement",
    label: "Designed with every detail in mind",
  },
];

const gallerySlides = [
  {
    src: "/images/placeholder-2.webp",
    alt: "Wedding event decor by The Dreamday Events",
    title: "Weddings",
  },
  {
    src: "/images/placeholder-3.webp",
    alt: "Naming ceremony by The Dreamday Events",
    title: "Naming Ceremonies",
  },
  {
    src: "/images/placeholder-4.webp",
    alt: "Corporate event by The Dreamday Events",
    title: "Corporate Events",
  },
  {
    src: "/images/placeholder-5.webp",
    alt: "Event decoration by The Dreamday Events",
    title: "Decoration & Styling",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Event photography by The Dreamday Events",
    title: "Photography",
  },
];

function ArrowLeftIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CalendarIcon() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setGallerySlide((current) => (current + 1) % gallerySlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const previousHeroSlide = () => {
    setHeroSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextHeroSlide = () => {
    setHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  const previousGallerySlide = () => {
    setGallerySlide(
      (current) => (current - 1 + gallerySlides.length) % gallerySlides.length
    );
  };

  const nextGallerySlide = () => {
    setGallerySlide((current) => (current + 1) % gallerySlides.length);
  };

  return (
    <div className="min-h-screen bg-white text-navy-900 dark:bg-gray-950 dark:text-white">
      <NextSeo
        title="The Dreamday Events | Weddings, Celebrations & Events"
        description="The Dreamday Events plans, designs, and executes memorable weddings, naming ceremonies, corporate events, decoration, catering, and photography."
        openGraph={{
          type: "website",
          title: "The Dreamday Events | Plan. Design. Execute. Celebrate.",
          description:
            "Memorable weddings, naming ceremonies, corporate events, decoration, catering, and photography by The Dreamday Events.",
          site_name: "The Dreamday Events",
          images: [
            {
              url: "/images/dreamday-events-logo.png",
              width: 1080,
              height: 1080,
              alt: "The Dreamday Events logo",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <Head>
  <link rel="icon" href="/favicon.ico" />
  <meta name="theme-color" content="#071D36" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "The Dreamday Events",
        description:
          "The Dreamday Events plans, designs, and executes weddings, naming ceremonies, corporate events, decoration, catering coordination, and photography across Bengaluru and Karnataka.",
        image: "/images/dreamday-events-logo.png",
        logo: "/images/dreamday-events-logo.png",
        telephone: "+91-91130-46593",
        email: "contact@thedreamdayevents.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "180, 8th Cross Road, Dasarahalli",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560024",
          addressCountry: "IN",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Bengaluru",
          },
          {
            "@type": "AdministrativeArea",
            name: "Karnataka",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-91130-46593",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Kannada", "Hindi"],
        },
      }),
    }}
  />
</Head>

      <Header />

      <main>
        {/* Hero section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gold-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
          <div className="absolute top-0 left-0 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-200/30 blur-3xl dark:bg-gold-500/10" />
          <div className="absolute right-0 bottom-0 w-96 h-96 translate-x-1/3 translate-y-1/3 rounded-full bg-navy-100/50 blur-3xl dark:bg-navy-900/30" />

          <div className="relative grid items-center max-w-6xl gap-12 px-4 py-14 mx-auto sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center px-5 py-2 mb-6 text-xs font-semibold tracking-[0.22em] uppercase rounded-full text-gold-700 bg-gold-100 dark:bg-gold-500/10 dark:text-gold-300">
                Plan · Design · Execute · Celebrate
              </p>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl md:text-6xl dark:text-white">
                Every Celebration
                <span className="block mt-2 text-gold-500">
                  Deserves a Dreamday.
                </span>
              </h1>

              <p className="max-w-xl mx-auto mt-6 text-base leading-8 text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-300">
                From intimate naming ceremonies to unforgettable weddings and
                professional corporate events, we plan and create celebrations
                that stay with you forever.
              </p>

              <div className="flex flex-col items-center gap-3 mt-8 sm:flex-row lg:items-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-7 py-3.5 text-sm font-semibold text-white transition duration-300 rounded-md shadow-lg bg-navy-900 hover:bg-gold-600 hover:shadow-xl sm:w-auto dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
                >
                  Plan Your Event

                  <svg
                    className="w-4 h-4 ml-2"
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
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-7 py-3.5 text-sm font-semibold transition duration-300 bg-white border rounded-md border-gold-400 text-navy-900 hover:bg-gold-50 hover:shadow-md sm:w-auto dark:bg-transparent dark:text-gold-300 dark:hover:bg-gold-500/10"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.84 11.84 0 0 0 12.05 0C5.48 0 .14 5.34.14 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.43-8.42Zm-8.47 18.3h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.45-9.91 9.92-9.91 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.47-4.45 9.91-9.91 9.91Zm5.44-7.42c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.07-1.78-.89-2.95-1.58-4.13-3.58-.31-.54.31-.5.88-1.67.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.71.25-1.31.17-1.44-.08-.12-.28-.2-.58-.35Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 mt-9 text-sm text-gray-600 lg:justify-start dark:text-gray-300">
                {[
                  "Weddings",
                  "Naming Ceremonies",
                  "Corporate Events",
                  "Decoration",
                  "Catering",
                  "Photography",
                ].map((service) => (
                  <span key={service} className="inline-flex items-center">
                    <span className="w-2 h-2 mr-2 rounded-full bg-gold-500" />
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Right hero photo carousel */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold-300/60 via-gold-100/30 to-navy-100/50 blur-2xl dark:from-gold-500/20 dark:to-navy-500/20" />

              <div className="relative overflow-hidden bg-navy-950 shadow-2xl rounded-3xl aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={[
                      "absolute inset-0 transition-opacity duration-700",
                      index === heroSlide ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

                    <div className="absolute right-0 left-0 px-6 bottom-6 sm:px-8 sm:bottom-8">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
                        The Dreamday Events
                      </p>

                      <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                        {slide.label}
                      </p>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={previousHeroSlide}
                  aria-label="Show previous hero photo"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-gold-500 hover:text-navy-950"
                >
                  <ArrowLeftIcon />
                </button>

                <button
                  type="button"
                  onClick={nextHeroSlide}
                  aria-label="Show next hero photo"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-gold-500 hover:text-navy-950"
                >
                  <ArrowRightIcon />
                </button>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setHeroSlide(index)}
                      aria-label={`Show hero photo ${index + 1}`}
                      className={[
                        "h-2 rounded-full transition-all",
                        index === heroSlide
                          ? "w-7 bg-gold-400"
                          : "w-2 bg-white/60 hover:bg-white",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling notice/ticker */}
        <section className="overflow-hidden border-y border-gold-200 bg-navy-900 py-3 text-gold-100 dark:border-gold-500/30 dark:bg-black">
          <div className="flex min-w-max items-center whitespace-nowrap animate-[marquee_26s_linear_infinite] motion-reduce:animate-none">
            <span className="inline-flex items-center px-8 text-sm font-medium tracking-wide">
              <CalendarIcon />
              <span className="ml-3">
                Now taking bookings for weddings, naming ceremonies, corporate
                events, decoration, catering and photography.
              </span>
            </span>

            <span className="text-gold-400">✦</span>

            <span className="inline-flex items-center px-8 text-sm font-medium tracking-wide">
              Personalised planning • Beautiful décor • Seamless execution
            </span>

            <span className="text-gold-400">✦</span>

            <span className="inline-flex items-center px-8 text-sm font-medium tracking-wide">
              Call or WhatsApp us at +91 91130 46593 to plan your celebration.
            </span>

            <span className="text-gold-400">✦</span>

            <span className="inline-flex items-center px-8 text-sm font-medium tracking-wide">
              Now taking bookings for weddings, naming ceremonies, corporate
              events, decoration, catering and photography.
            </span>

            <span className="text-gold-400">✦</span>
          </div>
        </section>

        {/* Wide rectangular photo carousel */}
        <section id="gallery" className="bg-gold-50/50 py-16 dark:bg-gray-900/40 sm:py-20">
          <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-5 mb-9 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-600 dark:text-gold-400">
                  Our celebrations
                </p>

                <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl dark:text-white">
                  Moments Crafted With Love
                </h2>

                <p className="max-w-2xl mt-3 text-gray-600 dark:text-gray-300">
                  A glimpse of the experiences we create—thoughtful details,
                  elegant styling, and celebrations made memorable.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 text-sm font-semibold transition duration-300 border rounded-md border-gold-500 text-navy-900 hover:bg-gold-100 dark:text-gold-300 dark:hover:bg-gold-500/10"
              >
                Enquire for Your Event
                <ArrowRightIcon />
              </a>
            </div>

            <div className="relative overflow-hidden bg-navy-950 shadow-xl rounded-2xl aspect-[16/9] sm:aspect-[16/7]">
              {gallerySlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={[
                    "absolute inset-0 transition-opacity duration-700",
                    index === gallerySlide ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1152px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />

                  <div className="absolute right-0 left-0 px-6 bottom-6 sm:px-10 sm:bottom-9">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-300">
                      The Dreamday Events
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={previousGallerySlide}
                aria-label="Show previous gallery photo"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-gold-500 hover:text-navy-950 sm:left-6"
              >
                <ArrowLeftIcon />
              </button>

              <button
                type="button"
                onClick={nextGallerySlide}
                aria-label="Show next gallery photo"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-gold-500 hover:text-navy-950 sm:right-6"
              >
                <ArrowRightIcon />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {gallerySlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setGallerySlide(index)}
                    aria-label={`Show gallery photo ${index + 1}`}
                    className={[
                      "h-2 rounded-full transition-all",
                      index === gallerySlide
                        ? "w-7 bg-gold-400"
                        : "w-2 bg-white/60 hover:bg-white",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Sponsors />
        <Features />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}