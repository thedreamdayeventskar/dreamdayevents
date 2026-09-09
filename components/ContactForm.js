import { useState } from "react";

const WHATSAPP_NUMBER = "919113046593";

const eventTypes = [
  "Wedding",
  "Naming Ceremony",
  "Corporate Event",
  "Birthday / Family Celebration",
  "Decoration & Styling",
  "Catering Coordination",
  "Photography",
  "Other",
];

const guestRanges = [
  "Less than 50 guests",
  "50–100 guests",
  "100–250 guests",
  "250–500 guests",
  "500+ guests",
  "Not sure yet",
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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guests: "",
    location: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.eventType) {
      setError("Please enter your name, phone number, and event type.");
      return;
    }

    setError("");

    const message = [
      "Hello The Dreamday Events,",
      "",
      "I would like to enquire about an event.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Event type: ${form.eventType}`,
      `Preferred date: ${form.eventDate || "Not decided"}`,
      `Expected guests: ${form.guests || "Not decided"}`,
      `Location: ${form.location || "Not decided"}`,
      `Requirements: ${form.message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 sm:py-24"
    >
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-100/70 blur-3xl dark:bg-gold-500/5" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-navy-100/60 blur-3xl dark:bg-navy-900/30" />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-600 dark:text-gold-400">
              Begin your celebration
            </p>

            <h2 className="max-w-lg mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl dark:text-white">
              Tell Us About Your Special Day.
            </h2>

            <p className="max-w-lg mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              Share a few details and our team will understand your
              requirements before helping you plan a celebration that feels
              truly yours.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="tel:+919113046593"
                className="group flex items-start gap-4 rounded-xl border border-gold-100 bg-gold-50/70 p-4 transition duration-300 hover:border-gold-300 hover:bg-gold-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gold-500/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-300 dark:bg-gold-500 dark:text-navy-950">
                  <PhoneIcon />
                </span>

                <span>
                  <span className="block text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                    Call or WhatsApp
                  </span>
                  <span className="block mt-1 text-lg font-bold text-navy-900 group-hover:text-gold-700 dark:text-white dark:group-hover:text-gold-300">
                    +91 91130 46593
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-gold-100 bg-gold-50/70 p-4 dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-300 dark:bg-gold-500 dark:text-navy-950">
                  <LocationIcon />
                </span>

                <span>
                  <span className="block text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                    Serving
                  </span>
                  <span className="block mt-1 text-base font-bold text-navy-900 dark:text-white">
                    Bengaluru &amp; Across Karnataka
                  </span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gold-200 bg-white p-6 shadow-xl sm:p-8 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Your name <span className="text-gold-600">*</span>
                </span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none placeholder:text-gray-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Phone / WhatsApp <span className="text-gold-600">*</span>
                </span>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none placeholder:text-gray-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Email address
                </span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none placeholder:text-gray-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Event type <span className="text-gold-600">*</span>
                </span>

                <select
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((eventType) => (
                    <option key={eventType} value={eventType}>
                      {eventType}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Preferred event date
                </span>

                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Expected guests
                </span>

                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                >
                  <option value="">Select guest count</option>
                  {guestRanges.map((guestRange) => (
                    <option key={guestRange} value={guestRange}>
                      {guestRange}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Event location / city
                </span>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="For example: Bengaluru, Mysuru, Mangaluru"
                  autoComplete="address-level2"
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none placeholder:text-gray-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-navy-900 dark:text-white">
                  Tell us about your celebration
                </span>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Share your vision, venue details, special requirements, or anything else you would like us to know."
                  className="w-full px-4 py-3 mt-2 text-sm text-gray-900 transition bg-white border border-gray-200 rounded-md outline-none resize-y placeholder:text-gray-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gold-400 dark:focus:ring-gold-500/20"
                />
              </label>
            </div>

            {error ? (
              <p className="mt-5 text-sm font-medium text-red-600 dark:text-red-400">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col gap-4 mt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                Your enquiry opens securely in WhatsApp so you can speak with
                our team directly.
              </p>

              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-gold-600 hover:shadow-lg dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
              >
                Send Enquiry
                <span className="ml-2">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}