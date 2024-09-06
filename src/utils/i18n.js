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
    }
  },
  // WEBDA // // // // /// // / / // /// // /
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
