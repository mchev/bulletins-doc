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
          { text: 'Abonnements', link: '/settings/plans' },
          { text: 'Pages', link: '/settings/pages' },
        ]
      },
      {
        text: 'Gestion des abonnés',
        items: [
          { text: 'Utilisateurs', link: '/users/users' },
          { text: 'Collectifs', link: '/users/collectifs' },
        ]
      },
      {
        text: 'Bulletins',
        items: [
          { text: 'Créer un bulletin', link: '/posts/create' },
          { text: 'Les sections', link: '/posts/sections' },
          { text: 'Les modules', link: '/posts/modules' },
          { text: 'Télécharger le PDF', link: '/posts/download' },
          { text: 'Commentaires', link: '/posts/comments' },
        ]
      },
      {
        text: 'Carte des observations',
        items: [
          { text: 'Cropscan', link: '/cropscan/presentation' },
          { text: 'Gestion des parcelles', link: '/cropscan/parcelles' },
          { text: 'Importer des observations', link: '/cropscan/imports' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
