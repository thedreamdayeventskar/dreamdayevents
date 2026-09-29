import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/919113046593";

const founders = [
  {
    name: "Jagadeesh",
    role: "Founder",
    image: "/images/team/jagadeesh.jpg",
    alt: "Jagadeesh, Founder of The Dreamday Events",
    description:
      "Jagadeesh leads The Dreamday Events with a focus on thoughtful planning, dependable coordination, and celebrations that feel personal from the very first conversation.",
  },
  {
    name: "Co-Founder",
    role: "Co-Founder",
    image: "/images/team/co-founder.jpg",
    alt: "Co-Founder of The Dreamday Events",
    description:
      "Bringing creativity, care, and attention to detail to every celebration, our co-founder helps transform ideas into warm, memorable event experiences.",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
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

function HeartIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gold-50/60 py-16 dark:bg-gray-900/40 sm:py-24"
    >
      <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/30 blur-3xl dark:bg-gold-500/10" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/3 rounded-full bg-navy-100/60 blur-3xl dark:bg-navy-900/30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-300">
            <HeartIcon />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">
            The people behind the celebration
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
            Meet the Founders of The Dreamday Events.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300">
            We believe every celebration should feel effortless for you and
            unforgettable for everyone who shares it. Our team brings planning,
            creativity, coordination, and care together under one roof.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.role}
              className="group overflow-hidden rounded-2xl border border-gold-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gold-500/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                <Image
                  src={founder.image}
                  alt={founder.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                    {founder.role}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {founder.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {founder.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-gold-300/70 bg-white/80 px-6 py-6 text-center shadow-sm backdrop-blur-sm sm:flex-row sm:px-8 sm:text-left dark:border-gold-500/20 dark:bg-gray-900/70">
          <div>
            <p className="text-base font-bold text-navy-900 dark:text-white">
              Ready to create a celebration that feels like you?
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Tell us your vision and let&apos;s begin planning the details.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-gold-600 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
          >
            Start a Conversation
            <span className="ml-2">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}