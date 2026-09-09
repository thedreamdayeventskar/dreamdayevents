const WHATSAPP_URL = "https://wa.me/919113046593";

function QuoteIcon() {
  return (
    <svg
      className="w-10 h-10 text-gold-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.7 10.2c0-2.1 1.3-4 3.3-4.8L10 3.2C6.8 4.4 5 7.1 5 10.4 5 14 7.2 16.5 10.2 17l.7-1.8c-2.1-.5-3.2-2.1-3.2-5Zm8.2 0c0-2.1 1.3-4 3.3-4.8l-1-2.2c-3.2 1.2-5 3.9-5 7.2 0 3.6 2.2 6.1 5.2 6.6l.7-1.8c-2.1-.5-3.2-2.1-3.2-5Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
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

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-24">
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-300">
            <QuoteIcon />
          </div>

          <p className="mt-5 text-xs font-semibold tracking-[0.22em] uppercase text-gold-300">
            Client stories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Celebrations Remembered for the Right Reasons.
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-base leading-8 text-gray-300">
            Every event carries a personal story. We are collecting genuine
            experiences from Dreamday families and clients to share here soon.
          </p>
        </div>

        <div className="grid gap-5 mt-12 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="relative min-h-[245px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
            >
              <span className="absolute right-5 top-3 text-7xl font-bold leading-none text-gold-400/10">
                0{item}
              </span>

              <div className="relative">
                <div className="flex items-center text-gold-300">
                  <SparkleIcon />
                  <SparkleIcon />
                  <SparkleIcon />
                  <SparkleIcon />
                  <SparkleIcon />
                </div>

                <div className="mt-7 h-3 w-4/5 rounded-full bg-white/10" />
                <div className="mt-3 h-3 w-full rounded-full bg-white/[0.07]" />
                <div className="mt-3 h-3 w-3/5 rounded-full bg-white/[0.07]" />

                <div className="flex items-center gap-3 mt-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10 text-xs font-bold text-gold-300">
                    TD
                  </div>

                  <div>
                    <div className="h-3 w-28 rounded-full bg-white/15" />
                    <div className="mt-2 h-2.5 w-20 rounded-full bg-white/[0.08]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-5 mt-10 rounded-2xl border border-gold-400/20 bg-gold-500/5 px-6 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
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