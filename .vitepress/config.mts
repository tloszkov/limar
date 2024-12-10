import { defineConfig } from 'vitepress'
const { VITE_GOOGLE_TAG } = import.meta.env

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Limar i krov",
  description: "Pokrivanje krovova",
  head: [
    ['meta', { name: 'google-site-verification', content: 'zOUbNfJtygrWbs5JoTP--zMewQTQ3x-1c_oEZhJ7d0g' }],
    ['meta', { name: 'keywords', content: 'limar, krov, pokrivanje, krovova, krovna, rješenja, krovopokrivačka, rješenja, pokrivanje, krovopokrivačka, rješenja, pokrivanje, krova, krovna, rješenja, krovopokrivačka, rješenja'}],
    ['meta', { name: 'description', content: 'Naša tvrtka pruža vrhunske krovopokrivačke usluge. Obratite nam se s povjerenjem!' }],
    ['title', { content: 'Limar i Krov - Stručnjaci za krovopokrivanje' }],
     [
         'script',
         {async: '', src:`https://www.googletagmanager.com/gtag/js?id=${VITE_GOOGLE_TAG}`}
     ],
     [
         'script',
          {},
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${VITE_GOOGLE_TAG});`
     ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpg',
    nav: [
      { text: 'Početna', link: '/' },
      { text: 'O nama', link: '/onama' },
      { text: 'Usluge', link: '/usluge' },
      { text: 'Kontakt', link: '/kontakt' },

    ],


    socialLinks: [
      {icon: 'facebook', link: 'https://facebook.com/'},
      {icon: 'instagram', link: 'https://instagram.com/'}
    ],

    footer: {
      message: 'Limar i krov' +
      '<br/>' +'Ante Baraba : +385 915 467 811',
      copyright: 'Copyright © 2024',


    },
  }
})
