/**
 * Schema.org structured data (JSON-LD) for Tech & Us.
 *
 * Emitted once in the root layout. Helps Google build the Knowledge Panel
 * and qualify the site for rich results / local search.
 *
 * TODO: add real social profile URLs to `sameAs` (LinkedIn, X, GitHub, etc.) —
 * `sameAs` is the strongest signal Google uses to reconcile the entity.
 */

const BASE_URL = "https://www.techandus.com";

const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORGANIZATION_ID,
      name: "Tech & Us",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo_icon.png`,
      },
      image: `${BASE_URL}/logo_icon.png`,
      description:
        "Tech & Us builds scalable web and mobile applications, business systems, and smart solutions that help companies operate better — locally and globally.",
      email: "support@techandus.com",
      telephone: "+250780840983",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kigali",
        addressCountry: "RW",
      },
      areaServed: ["RW", { "@type": "Place", name: "Worldwide" }],
      knowsAbout: [
        "Web development",
        "Mobile app development",
        "Business process digitization",
        "Workflow automation",
        "API integration",
        "AI integration",
      ],
      // sameAs: ["https://www.linkedin.com/company/..."],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BASE_URL,
      name: "Tech & Us",
      inLanguage: "en",
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
} as const;
