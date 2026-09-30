const WHATSAPP_URL = "https://wa.me/919113046593";

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

function WeddingIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="13" r="4.5" />
      <circle cx="16" cy="13" r="4.5" />
      <path d="M5.5 9.3 8 3l2.5 6.3" />
      <path d="M13.5 9.3 16 3l2.5 6.3" />
    </svg>
  );
}

function NamingCeremonyIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 18c1.8-4.1 4.5-6.1 8-6.1s6.2 2 8 6.1" />
      <circle cx="12" cy="7" r="3" />
      <path d="M3 21h18" />
      <path d="M8.5 4.5 7.3 3.3" />
      <path d="m15.5 4.5 1.2-1.2" />
    </svg>
  );
}

function CorporateIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function DecorIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21V8" />
      <path d="M12 12c-4.5 0-7.5-2.5-8-7 4.5 0 7.5 2.5 8 7Z" />
      <path d="M12 16c4.5 0 7.5-2.5 8-7-4.5 0-7.5 2.5-8 7Z" />
      <path d="M7 21h10" />
    </svg>
  );
}

function CateringIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 17h18" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M12 5v2" />
      <path d="M9 5h6" />
      <path d="M4 20h16" />
    </svg>
  );
}

function PhotographyIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 7h4l1.4-2h5.2L16 7h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

const services = [
  {
    title: "Wedding Planning",
    description:
      "From intimate ceremonies to grand celebrations, we coordinate every detail of your wedding with care, creativity, and seamless execution.",
    Icon: WeddingIcon,
  },
  {
    title: "Naming Ceremonies",
    description:
      "Thoughtful, joyful celebrations for your little one, designed around family traditions, comfort, beautiful décor, and lasting memories.",
    Icon: NamingCeremonyIcon,
  },
  {
    title: "Corporate Events",
    description:
      "Professional planning and coordinated event experiences for launches, celebrations, team gatherings, conferences, and business occasions.",
    Icon: CorporateIcon,
  },
  {
    title: "Décor & Styling",
    description:
      "Elegant themes, personalised stage décor, floral details, lighting, and styling that make your venue feel truly special.",
    Icon: DecorIcon,
  },
  {
    title: "Catering Coordination",
    description:
      "Well-organised food and catering coordination to ensure every guest enjoys a smooth, memorable dining experience.",
    Icon: CateringIcon,
  },
  {
    title: "Photography & Memories",
    description:
      "Capture meaningful moments with photography coordination that preserves the emotion, energy, and beauty of your celebration.",
    Icon: PhotographyIcon,
  },
];

export default function Sponsors() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 sm:py-24"
    >
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-100/60 blur-3xl dark:bg-gold-500/5" />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-600 dark:text-gold-400">
            What we create
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
            Celebrations Planned Around You
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300">
            The Dreamday Events brings planning, design, coordination, and
            execution together to create celebrations that feel personal,
            effortless, and unforgettable.
          </p>
        </div>

        <div className="grid gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-gold-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gold-500/50"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gold-100 text-gold-700 transition duration-300 group-hover:bg-navy-900 group-hover:text-gold-300 dark:bg-gold-500/10 dark:text-gold-300 dark:group-hover:bg-gold-500 dark:group-hover:text-navy-950">
                <Icon />
              </div>

              <h3 className="mt-6 text-xl font-bold text-navy-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center mt-6 text-sm font-semibold text-navy-900 transition duration-300 group-hover:text-gold-600 dark:text-gold-300"
              >
                Plan this event
                <span className="ml-2">
                  <ArrowIcon />
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-5 p-6 mt-12 border rounded-2xl border-gold-200 bg-gold-50 sm:flex-row sm:p-8 dark:border-gold-500/20 dark:bg-gold-500/5">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-navy-900 dark:text-white">
              Planning something special?
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Speak with our team and start planning your celebration in
              Bengaluru or anywhere across Karnataka.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-gold-600 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
          >
            Enquire Now
            <span className="ml-2">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}