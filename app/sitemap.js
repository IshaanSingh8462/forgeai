// Generates /sitemap.xml automatically. Next.js handles the XML formatting
// and correct content-type — no extra dependency needed.
//
// The site is currently a single page (app/page.js has no nested routes),
// so there's one real URL to list. If dedicated pages are added later
// (e.g. /faq, /tracks, /rules), add them here rather than creating a
// separate static sitemap file.

export default function sitemap() {
  const baseUrl = "https://forgehacks.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
