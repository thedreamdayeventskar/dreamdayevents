import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/919113046593";

const testimonials = [
  {
    name: "Ranjith",
    event: "Dreamday Events client",
    image: "/images/testimonials/ranjith.jpg",
    review:
      "The Dreamday Events team was organised, supportive, and attentive to the details that mattered to us. They helped our celebration run smoothly and created a warm experience for our family and guests.",
  },
  {
    name: "Anusha",
    event: "Dreamday Events client",
    image: "/images/testimonials/anusha.jpg",
    review:
      "From planning to execution, the Dreamday Events team made the process feel easy and well coordinated. The décor and arrangements came together beautifully, and we could enjoy the occasion without stress.",
  },
  {
    name: "Keerthana",
    event: "Dreamday Events client",
    image: "/images/testimonials/keerthana.jpg",
    review:
      "The team understood our requirements and handled the event with care and professionalism. Their coordination, creativity, and friendly support helped make our special day memorable.",
  },
];

function QuoteIcon() {
  return (
    <svg
      className="h-10 w-10 text-gold-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.7 10.2c0-2.1 1.3-4 3.3-4.8L10 3.2C6.8 4.4 5 7.1 5 10.4 5 14 7.2 16.5 10.2 17l.7-1.8c-2.1-.5-3.2-2.1-3.2-5Zm8.2 0c0-2.1 1.3-4 3.3-4.8l-1-2.2c-3.2 1.2-5 3.9-5 7.2 0 3.6 2.2 6.1 5.2 6.6l.7-1.8c-2.1-.5-3.2-2.1-3.2-5Z" />
    </svg>
  );
}

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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-navy-950 py-16 sm:py-24"
    >
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-300">
            <QuoteIcon />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Client stories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Celebrations Remembered for the Right Reasons.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300">
            Thoughtful planning, beautiful details, and seamless execution for
            celebrations that feel personal from start to finish.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="relative flex min-h-[350px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
            >
              <span className="absolute right-5 top-3 text-7xl font-bold leading-none text-gold-400/10">
                0{index + 1}
              </span>

              <blockquote className="relative flex-1">
                <p className="text-base leading-7 text-gray-200">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </blockquote>

              <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold-400/40 bg-gold-500/10">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}, Dreamday Events client`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gold-400/20 bg-gold-500/5 px-6 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="text-base font-bold text-white">
              Planning a celebration of your own?
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-300">
              Let&apos;s discuss your vision and create a celebration worth
              remembering.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition duration-300 hover:bg-gold-400"
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