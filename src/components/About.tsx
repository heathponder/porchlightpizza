import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-20 section-glow">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image placeholder */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img src="/images/making.jpg" alt="Hand-tossing pizza dough" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-primary font-bold text-sm px-5 py-3 rounded-xl shadow-lg animate-float accent-glow">
                Est. 2019
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <div>
            <ScrollReveal>
              <p className="inline-block border-l-2 border-accent pl-3 text-accent font-semibold text-sm tracking-wide mb-4">
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-text-primary mb-6 leading-tight">
                A porch light on,<br />a pizza in the oven.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed mb-5">
                It started the way most good things do — with family, a dream, and way too much flour
                on the kitchen counter. In 2019, we opened our doors on Main Street with a 900-degree
                wood-fired oven, a recipe book from Nonna, and a promise: real ingredients, real dough,
                no shortcuts.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-text-secondary leading-relaxed mb-5">
                The name came from the old porch light at our first location — the one we&apos;d leave on
                so people knew we were still open. Turns out, folks liked knowing there was a warm place
                to grab a slice at midnight. So we kept the light on a little longer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed mb-8">
                Every pizza is hand-tossed to order, topped with ingredients we actually care about,
                and fired in an oven hot enough to blister the crust in under 90 seconds. We don&apos;t
                do frozen. We don&apos;t do microwaved. We do it right.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "900°", label: "Wood-fired" },
                  { number: "90s", label: "Cook time" },
                  { number: "100%", label: "From scratch" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-accent font-heading text-2xl font-bold">{stat.number}</div>
                    <div className="text-text-secondary text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}