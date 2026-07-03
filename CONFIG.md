# CONFIG.md

## Project: Casa Seda
**URL:** `https://casa-seda.refinedislandcreations.com`

### GEO & SEO Implementation

#### robots.txt
Deploy the standard portfolio `robots.txt` file to the site root.
*File content defined in the global AGENTS.md.*

#### Title & Meta
No changes needed. The existing tags are correct and require no updates.

#### Structured Data
Add the `CreativeWork` schema to the `<head>`. This explicitly connects the concept site to the Refined Island Creations portfolio.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Casa Seda - Custom-Coded Website by Refined Island Creations",
  "description": "A concept website for a Spanish-Asian fine dining restaurant in Bali. Designed and built by Refined Island Creations as a portfolio demonstration of cinematic, editorial custom-coded restaurant website design.",
  "url": "https://casa-seda.refinedislandcreations.com",
  "creator": {
    "@type": "Organization",
    "name": "Refined Island Creations",
    "url": "https://refinedislandcreations.com"
  },
  "isPartOf": {
    "@type": "CollectionPage",
    "name": "Portfolio - Refined Island Creations",
    "url": "https://refinedislandcreations.com/portfolio.html"
  },
  "about": {
    "@type": "FoodEstablishment",
    "name": "Casa Seda",
    "servesCuisine": ["Spanish", "Asian Fusion"],
    "address": { "@type": "PostalAddress", "addressLocality": "Bali", "addressCountry": "ID" }
  }
}
</script>