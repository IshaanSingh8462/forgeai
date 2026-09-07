// Structured data (JSON-LD) helpers.
//
// IMPORTANT: every value here must be traceable to real, visible content
// elsewhere on the site (Footer.js, FAQ.js, Hero.js, About.js, Tracks.js).
// Do not add ratings, prices, participant counts, or people here unless
// they are already stated on the page — fabricated schema is a policy
// violation with Google and can trigger manual actions.

const SITE_URL = "https://forgehacks.dev";
const LOGO_URL = `${SITE_URL}/ForgeHacks-Cinder-Face-RBG.png`;

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ForgeHacks",
    url: SITE_URL,
    logo: LOGO_URL,
    email: "team@forgehacks.dev",
    // Only official ForgeHacks-owned profiles that already appear in Footer.js.
    sameAs: [
      "https://www.instagram.com/forgehackathon/",
      "https://discord.gg/RXENwZ5nc4",
      "https://forgehacks-2026.devpost.com/",
    ],
  };
  return <JsonLd data={data} />;
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ForgeHacks",
    url: SITE_URL,
  };
  return <JsonLd data={data} />;
}

export function EventJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ForgeHacks 2026",
    description:
      "ForgeHacks 2026 is an online AI hackathon where high school and college students build AI projects across six tracks: Healthcare, Education, Climate, Business, Cybersecurity, and Creativity.",
    // Matches the countdown target in components/Hero.js.
    startDate: "2026-10-03T12:00:00-04:00",
    endDate: "2026-10-10T12:00:00-04:00",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: SITE_URL,
    },
    image: [LOGO_URL],
    organizer: {
      "@type": "Organization",
      name: "ForgeHacks",
      url: SITE_URL,
    },
    url: SITE_URL,
  };
  return <JsonLd data={data} />;
}

// items: [{ q: string, a: string }] — plain-text only (Answer text can't be JSX).
export function FaqJsonLd({ items }) {
  if (!items || items.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return <JsonLd data={data} />;
}
