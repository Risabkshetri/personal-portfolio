// Renders a JSON-LD <script> block. Server component; the JSON is inlined
// into the static HTML so crawlers and AI answer engines read it directly.

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
