import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919113046593";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Tell us about your occasion, style, guest list, venue, and the moments that matter most to you.",
  },
  {
    number: "02",
    title: "Plan & Curate",
    description:
      "We shape the flow, décor direction, vendors, and details into a celebration designed around you.",
  },
  {
    number: "03",
    title: "Coordinate Every Detail",
    description:
      "Our team manages the moving parts, follows up with partners, and keeps every element on track.",
  },
  {
    number: "04",
    title: "Celebrate Without Stress",
    description:
      "On the day, you stay present with your loved ones while we focus on smooth, thoughtful execution.",
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

function SparkleIcon() {
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
      <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
    </svg>
  );
}

export default function Sponsors() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setVisibleSteps(steps.map((_, index) => index));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.stepIndex);

          setVisibleSteps((current) =>
            current.includes(index) ? current : [...current, index]
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const currentRefs = stepRefs.current;

    currentRefs.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const completedSteps = visibleSteps.length;
  const lineProgress = Math.min(completedSteps / steps.length, 1);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 sm:py-24"
    >
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-100/70 blur-3xl dark:bg-gold-500/5" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-navy-100/60 blur-3xl dark:bg-navy-900/30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-300">
            <SparkleIcon />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">
            Our approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
            From Your First Idea to Your Best Memory.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300">
            Planning a meaningful celebration should feel exciting—not
            overwhelming. Watch your celebration journey take shape, one
            thoughtful step at a time.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* Desktop-only curved zig-zag path. */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1000 1280"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M170 130 C460 210 540 260 830 360 C560 470 440 550 170 660 C450 760 550 870 830 970 C580 1080 430 1130 170 1210"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-gold-200 dark:text-white/10"
            />

            <path
              d="M170 130 C460 210 540 260 830 360 C560 470 440 550 170 660 C450 760 550 870 830 970 C580 1080 430 1130 170 1210"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={100 - lineProgress * 100}
              className="text-gold-500 transition-[stroke-dashoffset] duration-[1400ms] ease-out dark:text-gold-400"
            />
          </svg>

          {/* Mobile-only vertical connector. */}
          <div className="absolute bottom-10 left-7 top-10 w-px bg-gold-200 dark:bg-white/10 sm:left-9 lg:hidden" />

          <div
            className="absolute bottom-10 left-7 top-10 w-px origin-top bg-gold-500 transition-transform duration-700 ease-out dark:bg-gold-400 sm:left-9 lg:hidden"
            style={{
              transform: `scaleY(${lineProgress})`,
            }}
          />

          <div className="relative space-y-10 sm:space-y-14 lg:space-y-24">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const isRight = index % 2 === 1;

              return (
                <article
                  key={step.number}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  data-step-index={index}
                  className={[
                    "relative grid grid-cols-[56px_1fr] gap-5 transition-all duration-700 ease-out sm:grid-cols-[72px_1fr] sm:gap-7 lg:grid-cols-2 lg:gap-24",
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : isRight
                        ? "translate-x-12 opacity-0"
                        : "-translate-x-12 opacity-0",
                  ].join(" ")}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Mobile number node */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-sm font-bold text-gold-300 shadow-lg dark:border-gray-950 dark:bg-gold-500 dark:text-navy-950 sm:h-[72px] sm:w-[72px] sm:text-base lg:hidden">
                    {step.number}
                  </div>

                  {/* Desktop left slot */}
                  <div
                    className={[
                      "hidden lg:flex",
                      isRight ? "justify-end" : "justify-start",
                    ].join(" ")}
                  >
                    {!isRight ? (
                      <div className="w-full max-w-md">
                        <WorkflowCard step={step} />
                      </div>
                    ) : (
                      <div
                        className={[
                          "flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-base font-bold text-gold-300 shadow-xl transition duration-500 dark:border-gray-950 dark:bg-gold-500 dark:text-navy-950",
                          isVisible ? "scale-100" : "scale-75",
                        ].join(" ")}
                      >
                        {step.number}
                      </div>
                    )}
                  </div>

                  {/* Desktop right slot / mobile card */}
                  <div
                    className={[
                      "lg:flex",
                      isRight ? "lg:justify-start" : "lg:justify-end",
                    ].join(" ")}
                  >
                    <div className="w-full max-w-md">
                      {isRight ? (
                        <WorkflowCard step={step} />
                      ) : (
                        <div
                          className={[
                            "hidden h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-base font-bold text-gold-300 shadow-xl transition duration-500 dark:border-gray-950 dark:bg-gold-500 dark:text-navy-950 lg:flex",
                            isVisible ? "scale-100" : "scale-75",
                          ].join(" ")}
                        >
                          {step.number}
                        </div>
                      )}

                      <div className="lg:hidden">
                        <WorkflowCard step={step} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gold-200 bg-gold-50 p-6 text-center sm:flex-row sm:p-8 sm:text-left dark:border-gold-500/20 dark:bg-gold-500/5">
          <div>
            <p className="text-lg font-bold text-navy-900 dark:text-white">
              Ready to begin your celebration journey?
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Share your idea with us, and we will help turn it into an
              experience your guests will remember.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-gold-600 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
          >
            Start Planning
            <span className="ml-2">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({ step }) {
  return (
    <div className="rounded-2xl border border-gold-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gold-500/50 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
        Step {step.number}
      </p>

      <h3 className="mt-2 text-xl font-bold text-navy-900 dark:text-white sm:text-2xl">
        {step.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
        {step.description}
      </p>
    </div>
  );
}