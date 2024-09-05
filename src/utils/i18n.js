// i18n.js
import { createI18n } from 'vue-i18n'

// Define your translations
const messages = {
  sr: {
    nav: {
      home: 'Pocetna',
      products: 'Proizvodi',
      about: 'O nama',
      contact: 'Kontakt',
      fb: 'Facebook stranica',
      ig: 'Instagram profil',
      email: 'E-mail adresa',
      phone: 'Broj telefona'
    }
  },
  //////////
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
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
