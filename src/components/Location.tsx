import ScrollReveal from "./ScrollReveal";

const hours = [
  { day: "Monday", time: "11 AM – 10 PM" },
  { day: "Tuesday", time: "11 AM – 10 PM" },
  { day: "Wednesday", time: "11 AM – 10 PM" },
  { day: "Thursday", time: "11 AM – 10 PM" },
  { day: "Friday", time: "11 AM – 2 AM" },
  { day: "Saturday", time: "11 AM – 2 AM" },
  { day: "Sunday", time: "12 PM – 9 PM" },
];

export default function Location() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="location" className="py-20 md:py-28 scroll-mt-20 section-glow">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="inline-block border-l-2 border-accent pl-3 text-accent font-semibold text-sm tracking-wide mb-3">
              Find Us
            </p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-text-primary mb-4 leading-tight">
              The light&apos;s on. Come on in.
            </h2>
          </div>
        </ScrollReveal>

        {/* Map — full width, zoomed into a small-town area */}
        <ScrollReveal>
          <div className="map-container relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden border border-border mb-8">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-92.46%2C34.715%2C-92.41%2C34.745&layer=mapnik&marker=34.73%2C-92.435"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Porch Light Pizza area"
            />
          </div>
        </ScrollReveal>

        {/* Info — address & contact on left, hours on right */}
        <div className="grid sm:grid-cols-2 gap-4">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-xl p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-base font-semibold text-text-primary mb-2">Address</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  142 Lamplighter Lane<br />
                  Ember Creek, AR 72401
                </p>
              </div>
              <div>
                <div className="border-t border-border pt-5">
                  <h3 className="font-heading text-base font-semibold text-text-primary mb-3">Contact</h3>
                  <div className="space-y-2">
                    <a href="tel:+18705550199" className="flex items-center gap-3 text-text-secondary text-sm hover:text-accent transition-colors">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      (870) 555-0199
                    </a>
                    <a href="mailto:hello@porchlightpizza.com" className="flex items-center gap-3 text-text-secondary text-sm hover:text-accent transition-colors">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      hello@porchlightpizza.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-surface border border-border rounded-xl p-6 h-full">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary mb-4">Hours</h3>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between text-sm ${
                      h.day === today
                        ? "text-accent font-semibold"
                        : "text-text-secondary"
                    }`}
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
