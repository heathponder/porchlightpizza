import ScrollReveal from "./ScrollReveal";

const photos = [
  { label: "The wood-fired oven at work", image: "/images/oven.jpg", span: "md:col-span-2 md:row-span-2" },
  { label: "Late night vibes", image: "/images/vibes.jpg", span: "" },
  { label: "Fresh dough, every morning", image: "/images/dough.jpg", span: "" },
  { label: "The Porch Light Special", image: "/images/pizza.jpg", span: "md:col-span-2" },
  { label: "Our dining room", image: "/images/patio.jpg", span: "" },
  { label: "Family night", image: "/images/family.jpg", span: "" },
  { label: "Wood-fired wings", image: "/images/wings.jpg", span: "" },
  { label: "Craft drinks", image: "/images/drinks.jpg", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="inline-block border-l-2 border-accent pl-3 text-accent font-semibold text-sm tracking-wide mb-3">
              The Atmosphere
            </p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-text-primary mb-4 leading-tight">
              Come for the pizza.<br />Stay for the vibe.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.label} delay={i * 0.08} className={photo.span}>
              <div className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer">
                <img src={photo.image} alt={photo.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
