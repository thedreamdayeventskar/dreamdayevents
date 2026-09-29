const services = [
  {
    title: "Wedding Planning",
    description:
      "From intimate ceremonies to grand celebrations, we design and execute weddings that reflect your unique story and traditions.",
    image: "/images/wedding.jpg",
  },
  {
    title: "Naming Ceremony",
    description:
      "Thoughtfully curated naming ceremonies that honour family traditions while creating memorable moments for your loved ones.",
    image: "/images/naming_ceremony.jpg",
  },
  {
    title: "Corporate Event",
    description:
      "Professional event management for conferences, product launches, team outings, and corporate gatherings across Karnataka.",
    image: "/images/Corporate_event.jpg",
  },
  {
    title: "Decoration & Styling",
    description:
      "End-to-end decor solutions including floral arrangements, lighting, stage design, and thematic styling for any celebration.",
    image: "/images/Decoration_Styling.jpg",
  },
  {
    title: "Catering Coordination",
    description:
      "Seamless coordination with trusted caterers to ensure exceptional food experiences that complement your event vision.",
    image: "/images/Catering_Coordination.jpg",
  },
  {
    title: "Photography",
    description:
      "Professional photography services to capture every precious moment, from candid shots to formal portraits.",
    image: "/images/Photography.jpg",
  },
];

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

export default function Features() {
  return (
    <section id="features" className="relative py-16 bg-white dark:bg-gray-950 sm:py-24">
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-100/70 blur-3xl dark:bg-gold-500/5" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-navy-100/60 blur-3xl dark:bg-navy-900/30" />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-600 dark:text-gold-400">
            What we do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
            Services Crafted for Unforgettable Celebrations.
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
            Every celebration is unique. Our team works closely with you to
            understand your vision and bring it to life with precision and care.
          </p>
        </div>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-gold-200 bg-white shadow-sm transition duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 transition duration-300 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-700 dark:text-white dark:group-hover:text-gold-300">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-xs font-semibold tracking-wide uppercase text-gold-600 dark:text-gold-400">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}