// Generates /robots.txt automatically at build time.
// Allows all crawlers and points them at the sitemap.

export default function robots() {
  const baseUrl = "https://forgehacks.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
