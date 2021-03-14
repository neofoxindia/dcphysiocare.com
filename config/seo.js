export const json_ld = {
  type: 'application/ld+json', json: {
    "@context": "http://www.schema.org",
    "@type": "Physician",
    "name": "DC Physiocare",
    "url": "http://www.dcphysiocare.com/",
    "logo": "logo_url",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nahar Road, Lohiya Mill",
      "addressLocality": "Gangapur",
      "addressRegion": "Rajasthan",
      "postalCode": "322201",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.47868814581174",
      "longitude": "76.72863757309054"
    },
    "hasMap": "https://www.google.co.in/maps/place/Dr+Dc+Sharma+Physiotherapist/@26.4785585,76.7285732,17z/data=!4m12!1m6!3m5!1s0x3971f7dc3fae2ac5:0xea223318b1102df6!2sDr+Dc+Sharma+Physiotherapist!8m2!3d26.4786873!4d76.7286363!3m4!1s0x3971f7dc3fae2ac5:0xea223318b1102df6!8m2!3d26.4786873!4d76.7286363",
    "openingHours": "Mo 07:00-20:00 Tu 07:00-20:00 We 07:00-20:00 Th 07:00-20:00 Fr 07:00-20:00 Sa 07:00-20:00 Su 07:00-20:00"
  }
}


export const meta = [
  {charset: 'utf-8'},
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: "DC Physiocare"
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: "desc"
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: "cover"
  },
  {
    hid: 'twitter:image:alt',
    name: 'twitter:image:alt',
    content: "DC Physiocare"
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: "DC Physiocare"
  },
  {
    hid: "twitter:url",
    name: "twitter:url",
    content: "https://www.dcphysiocare.com/",
  },
  {
    hid: "og:url",
    name: "og:url",
    content: "https://www.dcphysiocare.com/",
  },
  {
    hid: 'og:type',
    property: 'og:type',
    content: "Physician"
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: "desc"
  },
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: 'NEOFOX'
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: "cover"
  },
  {
    hid: 'og:image:secure_url',
    property: 'og:image:secure_url',
    content: "cover"
  },
  {
    hid: 'og:image:alt',
    property: 'og:image:alt',
    content: "DC Physiocare"
  },
  {
    hid: 'description', name: 'description',
    content: "desc",
  },
  {
    hid: 'title', name: 'title',
    content: "DC Physiocare",
  },
  {
    hid: 'robots',
    name: 'robots',
    content: 'index, follow'
  },
  {
    hid: 'keywords',
    'http-equiv': 'Content-Type',
    content: 'text/html; charset=utf-8'
  },
  {
    hid: 'revisit-after',
    name: 'revisit-after',
    content: '1 day'
  },
  {
    hid: 'author',
    name: 'author',
    content: 'neofox'
  },
]

