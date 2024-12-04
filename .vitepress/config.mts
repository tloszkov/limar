import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Limar i krov",
  description: "Pokrivanje krovova",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
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
      message: 'Limar i krov',
      copyright: 'Copyright © 2024'
    },
  }
})
