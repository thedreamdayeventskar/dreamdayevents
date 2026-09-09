const WHATSAPP_URL = "https://wa.me/919113046593";

function PlanningIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <path d="M8 14h3" />
      <path d="M8 17h6" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m14.5 4.5 5 5" />
      <path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" />
      <path d="m13.5 7.5 3 3" />
      <path d="M4 4h5" />
      <path d="M4 8h3" />
    </svg>
  );
}

function CoordinationIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21c.7-4.1 3-6.2 7-6.2s6.3 2.1 7 6.2" />
      <path d="M4 11.5a3 3 0 0 1 2.4-2.9" />
      <path d="M20 11.5a3 3 0 0 0-2.4-2.9" />
    </svg>
  );
}

function ExecutionIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.3 2.3L16 9.2" />
    </svg>
  );
}

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

const values = [
  {
    number: "01",
    title: "Thoughtful Planning",
    description:
      "We begin by understanding your occasion, preferences, guests, and vision—then shape a plan that feels right for you.",
    Icon: PlanningIcon,
  },
  {
    number: "02",
    title: "Personalised Design",
    description:
      "Every décor choice, theme, layout, and detail is designed to reflect the mood and story behind your celebration.",
    Icon: DesignIcon,
  },
  {
    number: "03",
    title: "Smooth Coordination",
    description:
      "We coordinate the moving parts so you can stay present with your family, friends, guests, and the moments that matter.",
    Icon: CoordinationIcon,
  },
  {
    number: "04",
    title: "Confident Execution",
    description:
      "From setup to celebration, our focus is on delivering a polished experience with care and attention to every detail.",
    Icon: ExecutionIcon,
  },
];

export default function Pricing() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gold-50/60 py-16 dark:bg-gray-900/40 sm:py-24"
    >
      <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/30 blur-3xl dark:bg-gold-500/10" />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-600 dark:text-gold-400">
              Why The Dreamday Events
            </p>

            <h2 className="max-w-xl mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl dark:text-white">
              Your Celebration Deserves More Than a Checklist.
            </h2>

            <p className="max-w-xl mt-6 text-base leading-8 text-gray-600 dark:text-gray-300">
              A meaningful event is built from a thousand thoughtful decisions.
              The Dreamday Events brings the planning, creative direction,
              vendor coordination, and on-ground execution together—so your
              experience feels effortless from the first conversation to the
              final farewell.
            </p>

            <p className="max-w-xl mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              Based in Bengaluru and serving celebrations across Karnataka, we
              create weddings, family occasions, corporate events, décor, and
              event experiences shaped around what matters most to you.
            </p>

            <div className="flex flex-col gap-3 mt-8 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-gold-600 hover:shadow-lg dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
              >
                Start Planning
                <span className="ml-2">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-gold-400 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition duration-300 hover:bg-gold-50 dark:bg-transparent dark:text-gold-300 dark:hover:bg-gold-500/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(({ number, title, description, Icon }) => (
              <article
                key={number}
                className="group relative overflow-hidden rounded-2xl border border-gold-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gold-500/50"
              >
                <span className="absolute right-5 top-4 text-5xl font-bold leading-none text-gold-100 transition duration-300 group-hover:text-gold-200 dark:text-white/5 dark:group-hover:text-gold-500/10">
                  {number}
                </span>

                <div className="relative flex h-13 w-13 items-center justify-center rounded-xl bg-navy-900 text-gold-300 transition duration-300 group-hover:bg-gold-500 group-hover:text-navy-950 dark:bg-gold-500 dark:text-navy-950">
                  <Icon />
                </div>

                <h3 className="relative mt-6 text-lg font-bold text-navy-900 dark:text-white">
                  {title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-gold-200 pt-8 dark:border-white/10">
          <div className="flex flex-col justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-navy-900 dark:text-white">
                Plan. Design. Execute. Celebrate.
              </span>{" "}
              One experienced team for your complete celebration journey.
            </p>

            <a
              href="#services"
              className="inline-flex items-center justify-center text-sm font-semibold text-gold-700 transition hover:text-navy-900 dark:text-gold-300 dark:hover:text-white"
            >
              Explore Our Services
              <span className="ml-2">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}