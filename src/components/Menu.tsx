import ScrollReveal from "./ScrollReveal";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const signatures: MenuItem[] = [
  {
    name: "The Porch Light Special",
    description: "Pepperoni, Italian sausage, roasted garlic, Calabrian chili oil, hot honey drizzle.",
    price: "18.99",
    tag: "Fan Favorite",
  },
  {
    name: "Midnight Margherita",
    description: "San Marzano tomatoes, hand-pulled mozzarella, fresh basil, extra virgin olive oil.",
    price: "16.99",
  },
  {
    name: "The Moth",
    description: "Calabrian chili, sopressata, jalapeño, pepper jack, red onion, Mike's Hot Honey.",
    price: "19.99",
    tag: "Spicy",
  },
  {
    name: "Firefly",
    description: "Roasted red peppers, caramelized onion, goat cheese, arugula, balsamic glaze.",
    price: "17.99",
    tag: "Veggie",
  },
  {
    name: "The Night Owl",
    description: "BBQ pulled pork, pickled red onion, smoked gouda, cilantro, ranch drizzle.",
    price: "19.99",
  },
  {
    name: "Ember",
    description: "Wood-roasted mushrooms, truffle cream, fontina, thyme, black pepper.",
    price: "20.99",
  },
];

const classics: MenuItem[] = [
  {
    name: "Classic Cheese",
    description: "Our house red sauce, whole-milk mozzarella, oregano.",
    price: "13.99",
  },
  {
    name: "Pepperoni",
    description: "Cup-and-char pepperoni, mozzarella, house red sauce.",
    price: "15.99",
  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, mozzarella.",
    price: "18.99",
  },
  {
    name: "Supreme",
    description: "Pepperoni, sausage, green pepper, onion, mushroom, black olive.",
    price: "18.99",
  },
];

const sides: MenuItem[] = [
  { name: "Garlic Knots (6)", description: "House-made, brushed with garlic butter and parmesan.", price: "6.99" },
  { name: "Wood-Fired Wings (10)", description: "Tossed in your choice: buffalo, garlic parm, or hot honey.", price: "12.99" },
  { name: "Caesar Salad", description: "Romaine, house-made croutons, shaved parm, Caesar dressing.", price: "8.99" },
  { name: "Mozzarella Sticks (6)", description: "Hand-breaded, served with marinara.", price: "8.99" },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="menu-card bg-surface border border-border rounded-xl p-6 h-full">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-heading text-lg font-semibold text-text-primary">{item.name}</h3>
          <span className="text-accent font-bold text-lg whitespace-nowrap">${item.price}</span>
        </div>
        {item.tag && (
          <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${
            item.tag === "Spicy" ? "bg-highlight/15 text-highlight" :
            item.tag === "Veggie" ? "bg-green-900/30 text-green-400" :
            "bg-accent/15 text-accent"
          }`}>
            {item.tag}
          </span>
        )}
        <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
      </div>
    </ScrollReveal>
  );
}

function MenuSection({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mb-14 last:mb-0">
      <ScrollReveal>
        <h3 className="font-heading text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
          <div className="w-8 h-0.5 bg-accent rounded-full" />
          {title}
        </h3>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-surface-alt scroll-mt-20 section-glow">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="inline-block border-l-2 border-accent pl-3 text-accent font-semibold text-sm tracking-wide mb-3">
              The Menu
            </p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-text-primary mb-4 leading-tight">
              Wood-fired & hand-tossed.
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Every pie is made to order with fresh dough, house-made sauce, and ingredients
              we&apos;d feed our own family.
            </p>
          </div>
        </ScrollReveal>

        <MenuSection title="Signature Pies" items={signatures} />
        <MenuSection title="The Classics" items={classics} />
        <MenuSection title="Sides & Apps" items={sides} />

        <ScrollReveal>
          <div className="text-center mt-10">
            <p className="text-text-secondary text-sm mb-1">
              Gluten-free crust available on any pizza — add $3
            </p>
            <p className="text-text-secondary text-sm">
              Build your own starting at $13.99 — ask about our toppings
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
