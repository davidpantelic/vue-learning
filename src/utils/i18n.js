// i18n.js
import { createI18n } from 'vue-i18n'

// Define your translations
const messages = {
  sr: {
    head: {
      title: 'Panić Plast',
      description:
        'Plasticni rezervoari, plasticne septicke jame, plasticni pontoni, plasticne kace, plasticne cevi. Za domacinstva i proizvodnje. Kvalitetno, povoljno, dugotrajno i ekoloski ispravno.'
    },
    nav: {
      home: 'Pocetna',
      products: 'Proizvodi',
      gallery: 'Galerija',
      about: 'O nama',
      contact: 'Kontakt',
      fb: 'Facebook stranica',
      ig: 'Instagram profil',
      email: 'E-mail adresa',
      phone: 'Broj telefona'
    },
    cover: {
      actionWord_1: 'Povoljni',
      actionWord_2: 'Kvalitetni',
      actionWord_3: 'Dugotrajni',
      actionWord_4: 'Ekoloski',
      title: 'proizvodi od plastike',
      button: 'Katalog proizvoda',
      scroll: 'Skroluj na dole do sledece sekcije'
    },
    prod_desc: {
      subtitle_1: 'Environmentally friendly',
      text_1:
        'We understand the importance of protecting the environment, which is why we are committed to producing [environmentally friendly] products. Our products are made from non-toxic, recyclable materials, which ensures that they have a minimal impact on the environment.',
      subtitle_2: 'Products for home, agriculture, and more',
      text_2:
        'We offer a wide range of high-quality plastic products designed to withstand the toughest environmental conditions. Our products, including [reservoirs], [septic tanks], [wastewater purifiers], [pontoons], (and much more), are made from the most durable and weather-resistant materials available on the market.',
      subtitle_3: 'Quality and long-lasting',
      text_3:
        'Our products are [built to last], and we are confident that they will exceed your expectations. They are designed to resist harsh weather conditions, and they are also resistant to UV radiation, which ensures that they maintain their appearance and functionality over time.',
      text_4:
        'We are committed to providing [our customers] with the best possible service, and we pride ourselves on our quality products and customer support. Whether you are looking for a septic tank for your home, a reservoir for your farm, or a pontoon for your dock, we have the perfect product to meet your needs.'
    },
    about: {
      about_products: 'About products',
      about_products_text:
        'Plastic reservoirs, septic tanks, pontoons and other products are made by spiral winding technology of high-density polyethylene (HDPE) and polypropylene (HDPP). Resistant to impacts, aggressive chemicals, suitable for burying partially or completely, and as such represent an ideal and long-term investment. They are practical, easy to manipulate and install, and they guarantee waterproofness and a long-lasting solution, because the material loses only 5% of its properties after 50 years of use. Any plastic product can be fitted with various accessories such as valves, faucets, level indicators, external or internal threaded connections, overflows, inspection openings, chokes, anchoring feet, climbing frames and everything else according to your needs. /nYou can find more details on the Products page, where all our products are presented.',
      our_products: 'High quality',
      our_products_text:
        'Our products are made from the highest quality materials and are designed to withstand the toughest environmental conditions. They are also designed to be easy to install and maintain, which ensures that they will last for many years to come.'
    }
  },
  // WEBDAK // // // // /// // / / // /// // /
  en: {
    head: {
      title: 'Panic Plast',
      description:
        'Plastic tanks, plastic septic tanks, plastic pontoons, plastic tubs, plastic pipes. For households and production. High-quality, affordable, long-lasting and environmentally friendly.'
    },
    nav: {
      home: 'Home',
      products: 'Products',
      gallery: 'Gallery',
      about: 'About Us',
      contact: 'Contact',
      fb: 'Facebook page',
      ig: 'Instagram profile',
      email: 'Email address',
      phone: 'Phone number'
    },
    cover: {
      actionWord_1: 'Cost-effective',
      actionWord_2: 'Quality',
      actionWord_3: 'Long-lasting',
      actionWord_4: 'Ecological',
      title: 'plastic products',
      button: 'Products catalog',
      scroll: 'Scroll Down to the next section'
    }
  }
}

// Create an i18n instance with the defined messages and default locale
const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'sr', // Set the default locale
  fallbackLocale: 'sr',
  messages // Set the translation messages
})

export default i18n
