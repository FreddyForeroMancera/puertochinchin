import { siteMeta } from '@/lib/seo';
import { restaurantInfo } from '@/lib/data';

export default function Head() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantInfo.name,
    description: restaurantInfo.description,
    url: siteMeta.siteUrl,
    telephone: restaurantInfo.phone,
    email: restaurantInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantInfo.address,
      addressLocality: restaurantInfo.city,
      addressRegion: restaurantInfo.region,
      addressCountry: 'CO'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    sameAs: ['https://www.instagram.com/piqueteaderopuertochinchin'],
    priceRange: '$$'
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
