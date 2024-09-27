import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/bulletins-doc/',
  lang: 'fr-FR',
  title: "Documentation",
  description: "Documentation permettant de guider les administrateurs et éditeurs des bulletins.",
  locales: {
    root: {
      label: 'Français',
      lang: 'fr'
    },
  },
  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Tickets', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Paramétrage',
        items: [
          { text: 'Accès à l\'administration', link: '/settings/login' },
          { text: 'Configuration', link: '/settings/settings' },
          { text: 'Themes', link: '/settings/themes' },
          { text: 'Abonnements', link: '/settings/plans' }
        ]
      },
      {
        text: 'Gestion des abonnés',
        items: [
          { text: 'Utilisateurs', link: '/users/users' },
          { text: 'Collectifs', link: '/users/collectifs' },
          { text: 'Importer des utilisateurs', link: '/users/import' },
          { text: 'Exporter des utilisateurs', link: '/users/export' }
        ]
      },
      {
        text: 'Bulletins',
        items: [
          { text: 'Créer un bulletin', link: '/login' },
          { text: 'Les sections', link: '/settings' },
          { text: 'Les modules', link: '/settings' },
          { text: 'Télécharger le PDF', link: '/settings' },
          { text: 'Commentaires', link: '/themes' },
        ]
      },
      {
        text: 'Pages',
        items: [
          { text: 'Présentation', link: '/login' },
          { text: 'Créer une page', link: '/login' },
        ]
      },
      {
        text: 'Carte des observations',
        items: [
          { text: 'Cropscan', link: '/login' },
          { text: 'Gestion des parcelles', link: '/login' },
          { text: 'Importer des observations', link: '/settings' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
