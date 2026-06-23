// ============================================================
// SITE CONFIG — Edit this file to update your entire website
// ============================================================

const CONFIG = {
  // ── Business Identity ──────────────────────────────────────
  businessName: "YOUR BUSINESS NAME",
  tagline: "YOUR CITY's Most Trusted Epoxy & Polyaspartic Flooring Contractor",
  phone: "(000) 000-0000",
  phoneRaw: "0000000000",           // Digits only for tel: links — must match phone
  email: "hello@yourbusiness.com",
  city: "Your City, ST",
  state: "Your State",
  stateShort: "ST",
  address: "Your Address, City, ST 00000",
  licenseNumber: "YOUR-LICENSE-NUMBER",

  // ── Branding ─────────────────────────────────────────────
  // Industrial grey + electric blue — change hex values to rebrand the entire site
  colors: {
    primary: "#2563EB",    // Electric blue — trust / precision / technology
    secondary: "#1C2333",  // Industrial charcoal — strength / durability
  },

  // ── Social Proof ─────────────────────────────────────────
  rating: "4.9",
  reviewCount: 0,           // Update with real review count
  yearsExperience: 0,       // Update with years in business
  projectsCompleted: "0+",  // Update with real number
  satisfactionRate: "98%",

  // ── Webhook ───────────────────────────────────────────────
  // Paste your Make.com / Zapier / n8n / GHL webhook URL here
  webhookUrl: "",

  // ── Meta Pixel / Conversions API ───────────────────────────
  // Paste your Meta Pixel ID here (16-digit number from Events Manager).
  // Leave empty ("") to disable Pixel + attribution tracking site-wide.
  metaPixelId: "",

  // ── Hero Section ─────────────────────────────────────────
  hero: {
    headline: "Floors That Work as Hard as You Do",
    subheadline: "Professional epoxy and polyaspartic coatings for garages, basements, commercial spaces and pool decks — installed right, built to last decades.",
    ctaPrimary: "Get My Free Quote",
    ctaSecondary: "See Our Floors",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=75&fm=webp&auto=format",
  },

  // ── Services ─────────────────────────────────────────────
  // Each service auto-creates a card on the homepage and a full page at /services/[slug].html
  services: [
    {
      slug: "epoxy-garage-floors",
      name: "Epoxy Garage Floors",
      desc: "Transform your garage from an eyesore into a showroom-quality space that's easy to clean and built to last.",
      image: "https://images.unsplash.com/photo-1558618047-f4e60cef8b3e?w=800&q=75&fm=webp&auto=format",
      longDesc: "Your garage floor takes more abuse than any other surface in your home — hot tyres, oil drips, heavy equipment, and constant foot traffic. Our epoxy garage floor systems are engineered to handle all of it. We grind the concrete, fill all cracks, apply a penetrating primer, and install a high-build epoxy basecoat topped with a UV-stable polyaspartic topcoat. The result is a floor that looks incredible and won't peel, chip, or yellow.",
      benefits: [
        "Diamond-ground concrete prep for maximum adhesion",
        "Full crack and spall repair before coating",
        "High-build epoxy basecoat with decorative flake",
        "UV-stable polyaspartic topcoat — won't yellow",
        "Ready to drive on in 24 hours",
        "Available in 30+ flake colour blends",
      ],
      faqs: [
        { q: "How long does a garage floor coating take?", a: "Most 2–3 car garages are completed in one day. We grind, prep, and coat in a single visit. You can walk on it that evening and drive on it the next morning." },
        { q: "Will the coating peel or chip?", a: "Not with proper prep. The most common reason epoxy fails is inadequate surface preparation. We diamond-grind every floor and apply a penetrating primer — this is why our coatings bond permanently and won't delaminate." },
        { q: "Can you coat a garage floor with existing paint or sealer?", a: "Yes — we grind through any existing coatings down to bare concrete before applying our system. This ensures a bond to the actual slab, not a previous coating." },
        { q: "How do I maintain my epoxy floor?", a: "A damp mop with a pH-neutral cleaner is all you need. Epoxy resists oil, chemicals, and stains — most spills wipe clean immediately." },
      ],
    },
    {
      slug: "polyaspartic-coatings",
      name: "Polyaspartic Coatings",
      desc: "The fastest-curing, most durable floor coating available. One-day installs with superior UV and chemical resistance.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=75&fm=webp&auto=format",
      longDesc: "Polyaspartic aliphatic polyurea is the most advanced floor coating technology available today. It cures up to 4x faster than traditional epoxy, bonds at temperatures down to -20°F, and resists UV degradation that causes epoxy to yellow over time. We use 100% solids polyaspartic for full-thickness coatings that outperform standard epoxy in every measurable way.",
      benefits: [
        "100% solids — no solvents, no shrinkage",
        "UV stable — never yellows outdoors or in sunlit spaces",
        "Cures in hours, not days",
        "Resists hot-tyre pickup",
        "Handles -20°F to 140°F temperature range",
        "10-year manufacturer-backed warranty available",
      ],
      faqs: [
        { q: "What's the difference between polyaspartic and epoxy?", a: "Polyaspartic cures faster, is UV stable (doesn't yellow), handles more extreme temperatures, and is more flexible. It costs more but outperforms epoxy in almost every category. We use polyaspartic as the topcoat on all our epoxy systems." },
        { q: "Is polyaspartic safe for outdoor use?", a: "Yes — it's one of the few floor coatings that's truly UV stable. Pool decks, patios, and driveways are ideal applications because it won't degrade or yellow from sun exposure." },
        { q: "Can polyaspartic be applied in one day?", a: "Yes — that's one of its biggest advantages. A full polyaspartic system (primer, basecoat, topcoat) can be installed and cured to foot traffic in under 6 hours." },
      ],
    },
    {
      slug: "metallic-epoxy",
      name: "Metallic Epoxy Floors",
      desc: "Stunning 3D visual effects that turn any floor into a statement piece. Perfect for showrooms, restaurants, and luxury homes.",
      image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=75&fm=webp&auto=format",
      longDesc: "Metallic epoxy creates flowing, three-dimensional visual effects that look like polished stone, molten metal, or the ocean floor. Each installation is completely unique — the metallic pigments react differently every time, making your floor a one-of-a-kind work of art. These systems are perfect for retail spaces, restaurants, car showrooms, home entertainment rooms, and anywhere you want maximum visual impact.",
      benefits: [
        "Completely unique — no two floors are identical",
        "Endless colour combinations and effects",
        "Same durability as standard epoxy",
        "Seamless — no grout lines, no dirt traps",
        "High-gloss finish that photographs beautifully",
        "Available with anti-slip additive for safety",
      ],
      faqs: [
        { q: "How do I choose a metallic epoxy colour?", a: "We bring colour samples to your free estimate and can show you photos of previous installations. We'll work with your existing décor and lighting to choose the right combination." },
        { q: "Is metallic epoxy slippery?", a: "The high-gloss finish can be slippery when wet. We always recommend and offer a shark-grip anti-slip additive for any metallic floor in a high-traffic or wet area." },
        { q: "How do metallic effects differ between installations?", a: "The metallic pigment swirls and flows differently based on application temperature, humidity, and technique. This means your floor is genuinely unique — we can control the general direction but each floor has its own character." },
      ],
    },
    {
      slug: "commercial-warehouse-floors",
      name: "Commercial & Warehouse Floors",
      desc: "Heavy-duty coatings for industrial, commercial, and warehouse environments. OSHA-compliant, fast-turnaround installs.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&fm=webp&auto=format",
      longDesc: "Commercial and industrial floors need coatings that can handle forklift traffic, chemical spills, heavy loads, and constant abuse — while meeting safety and compliance requirements. We install industrial-grade epoxy and polyurea systems used in food processing facilities, automotive shops, warehouses, and manufacturing plants. All work scheduled to minimise downtime.",
      benefits: [
        "Chemical-resistant formulations for industrial use",
        "OSHA safety line marking and demarcation",
        "Anti-slip and anti-static options",
        "Coved base detailing for food-safe environments",
        "After-hours and weekend installs to minimise downtime",
        "Bulk pricing for large square footage",
      ],
      faqs: [
        { q: "What coating thickness is right for forklift traffic?", a: "For forklift and heavy equipment areas we recommend a minimum 20-mil broadcast system with a polyurea or polyaspartic topcoat. We assess your specific traffic patterns and load requirements during the free estimate." },
        { q: "Can you do safety line marking?", a: "Yes — we install OSHA-compliant safety lines, pedestrian walkways, hazard zones, and equipment outlines using durable epoxy-based traffic coatings." },
        { q: "How quickly can a warehouse floor be back in service?", a: "With polyaspartic topcoats, most warehouse floors are back to light foot traffic in 4–6 hours and full forklift traffic in 24 hours." },
      ],
    },
    {
      slug: "pool-deck-coatings",
      name: "Pool Deck Coatings",
      desc: "Slip-resistant, UV-stable deck coatings that look great and stay cool underfoot — even in direct sun.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=75&fm=webp&auto=format",
      longDesc: "Pool decks demand coatings that can handle UV exposure, chlorine splash, constant wet-dry cycles, and bare feet. Standard epoxy fails outdoors — it yellows and peels within a year. We use UV-stable polyaspartic and acrylic systems specifically formulated for exterior concrete. The result is a slip-resistant, cool-to-the-touch surface that looks fresh season after season.",
      benefits: [
        "UV-stable polyaspartic — won't fade or yellow",
        "Mandatory anti-slip texture for wet areas",
        "Cool-deck technology reduces surface temperature",
        "Chlorine and saltwater resistant",
        "Available in natural stone and solid colour finishes",
        "Waterproof membrane option for covered decks",
      ],
      faqs: [
        { q: "Will the coating get too hot in the sun?", a: "We use cool-deck and heat-reflective formulations for pool decks that significantly reduce surface temperature compared to bare concrete or standard coatings." },
        { q: "How does pool deck coating hold up to chlorine?", a: "Our polyaspartic and polyurea systems are chemically resistant to chlorine splash, pool chemicals, and saltwater. They won't degrade, bubble, or delaminate from chemical exposure." },
        { q: "How long does pool deck coating last?", a: "With proper prep and quality materials, 10–15 years is typical. UV stability is the key factor — that's why we never use standard epoxy outdoors." },
      ],
    },
    {
      slug: "basement-floor-coatings",
      name: "Basement Floor Coatings",
      desc: "Turn your unfinished basement into a clean, bright, usable space with a professional floor coating system.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&fm=webp&auto=format",
      longDesc: "Basement floors present unique challenges — moisture vapour transmission, low temperatures, and often heavily contaminated or pitted concrete. We use moisture-mitigating primer systems designed specifically for below-grade applications. The finished floor is seamless, easy to clean, and transforms dark unfinished basements into bright, functional spaces.",
      benefits: [
        "Moisture-mitigating primer for below-grade slabs",
        "Crack and joint repair included",
        "Brightens dark spaces with high-gloss finish",
        "Seamless — eliminates hard-to-clean grout lines",
        "Transforms unfinished basements into liveable space",
        "Mould and mildew resistant surface",
      ],
      faqs: [
        { q: "Can you coat a basement floor with moisture issues?", a: "Yes — we use a moisture-mitigating epoxy primer that blocks vapour transmission up to 25 lbs/1000 sq ft/24 hrs. We test moisture levels before every installation." },
        { q: "How do you prep a basement floor that has old paint?", a: "We diamond-grind through any existing paint, sealer, or contamination down to bare concrete. This is non-negotiable — coating over existing paint always fails eventually." },
        { q: "Will the floor coating make my basement brighter?", a: "Significantly. A high-gloss white or light grey epoxy floor reflects light and makes dark basements feel much larger and more inviting." },
      ],
    },
  ],

  // ── Service Areas ─────────────────────────────────────────
  // Replace with your actual service cities
  // Each entry auto-creates a full SEO page at /[slug].html
  serviceAreas: [
    { slug: "your-city", name: "Your City", county: "Your County" },
    { slug: "city-two", name: "City Two", county: "Your County" },
    { slug: "city-three", name: "City Three", county: "Your County" },
    { slug: "city-four", name: "City Four", county: "Your County" },
    { slug: "city-five", name: "City Five", county: "Your County" },
    { slug: "city-six", name: "City Six", county: "Your County" },
  ],

  // ── Maps ──────────────────────────────────────────────────
  // Controls every Google Map embed across the site.
  // Option A — paste a full embed URL from Google Maps → Share → Embed a map
  // Option B — leave mapEmbedUrl blank and we auto-build from mapSearchQuery
  maps: {
    // Full Google Maps embed src URL (most precise — recommended)
    // e.g. "https://www.google.com/maps/embed?pb=!1m18!1m12!..."
    // Leave "" to fall back to mapSearchQuery below.
    mapEmbedUrl: "",

    // Plain-text search query used when mapEmbedUrl is empty.
    // Be specific — include city, state, and trade for best results.
    mapSearchQuery: "Your City ST epoxy flooring contractor",

    // Height of every map iframe in pixels (applies site-wide)
    mapHeight: 420,
  },


  // ── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      name: "Mike T.",
      location: "Your City",
      text: "They coated our 3-car garage and it looks absolutely incredible. The prep work was thorough, the crew was professional, and the finished floor is better than anything I've seen. Worth every penny.",
      stars: 5,
      service: "Epoxy Garage Floor",
    },
    {
      name: "Sarah & James K.",
      location: "Your City",
      text: "We wanted a metallic floor for our showroom and couldn't be happier. Every single customer comments on it. The install was fast and clean — done in one day.",
      stars: 5,
      service: "Metallic Epoxy",
    },
    {
      name: "Dave R.",
      location: "Your City",
      text: "Had them coat our 8,000 sqft warehouse over a weekend so we didn't lose production time. Flawless execution, zero issues. Already quoted our second facility.",
      stars: 5,
      service: "Commercial Warehouse",
    },
    {
      name: "Linda M.",
      location: "Your City",
      text: "Our pool deck was cracking and stained. They repaired everything and coated it in a beautiful cool-grey finish. It's cooler underfoot and looks brand new.",
      stars: 5,
      service: "Pool Deck Coating",
    },
  ],

  // ── Process Steps ─────────────────────────────────────────
  processSteps: [
    { title: "Free Site Visit", desc: "We assess your concrete, test for moisture, measure the space, and give you a detailed written quote on the spot." },
    { title: "Surface Prep", desc: "Diamond grinding, crack repair, and primer application — the foundation that makes coatings last decades, not years." },
    { title: "Coating Installation", desc: "Basecoat, decorative flake or metallic layer, and a UV-stable polyaspartic topcoat applied by trained installers." },
    { title: "Final Inspection", desc: "We do a thorough walkthrough with you before we pack up. Your floor isn't done until you're completely satisfied." },
  ],

  // ── FAQs ─────────────────────────────────────────────────
  faqs: [
    { q: "What's the difference between epoxy and polyaspartic?", a: "Epoxy is the workhorse — durable and cost-effective. Polyaspartic is the premium upgrade — faster cure, UV stable, and more flexible. We use epoxy as the basecoat and polyaspartic as the topcoat on most systems for the best of both." },
    { q: "How long does installation take?", a: "Most residential garages and basements are completed in one day. Commercial projects depend on square footage. Polyaspartic systems can be walked on in 4–6 hours and driven on in 24 hours." },
    { q: "Do you fix cracks before coating?", a: "Always. Crack and spall repair is included in every installation. Coating over unfilled cracks causes the coating to crack — we never skip this step." },
    { q: "How long will the coating last?", a: "With proper prep and quality materials, 10–20 years is realistic for interior floors. Exterior coatings like pool decks typically last 10–15 years. We back our work with a written warranty." },
    { q: "Are you licensed and insured?", a: "Yes — we're fully licensed and carry $2M in general liability insurance. All installers are trained and background-checked." },
    { q: "How do I prepare for my installation day?", a: "Clear the floor of all items — we'll handle moving heavy equipment. Cars should be out of the garage. Turn off any pilot lights near the work area. That's it." },
    { q: "Can you coat concrete with existing paint or sealer?", a: "Yes — we grind through existing coatings down to bare concrete. Bonding to the slab directly is what makes our coatings permanent." },
    { q: "Do you offer financing?", a: "Ask us during your free estimate — we work with several financing partners to make premium floor coatings accessible for any budget." },
  ],

  // ── Portfolio Projects ────────────────────────────────────
  // Project photos moved to PROJECTS.js (sibling file) — see that file
  // for why: frequent updates + isolating a malformed write from the
  // rest of the site config.

  // ── Social Media ─────────────────────────────────────────
  // Leave any URL blank ("") to hide that icon in the footer.
  social: {
    facebook:  "",   // e.g. "https://www.facebook.com/yourbusiness"
    instagram: "",   // e.g. "https://www.instagram.com/yourbusiness"
    youtube:   "",   // e.g. "https://www.youtube.com/@yourbusiness"
    yelp:      "",   // e.g. "https://www.yelp.com/biz/yourbusiness"
    nextdoor:  "",   // e.g. "https://nextdoor.com/pages/yourbusiness"
  },

  // ── Google Reviews ────────────────────────────────────────
  // Paste your Google Business Profile review link here.
  // Badge + "Read Our Reviews on Google" button appear in the reviews section.
  // Leave blank ("") to hide the badge entirely.
  googleReviewsUrl: "",  // e.g. "https://g.page/r/XXXXXXXXXXXXXXXX/review"

  // ── Legal ─────────────────────────────────────────────────
  legal: {
    privacyPolicyDate: "May 1, 2025",
    termsDate: "May 1, 2025",
  },
};
