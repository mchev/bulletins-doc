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
      { text: 'Démarrer', link: '/settings/login' },
      { text: 'Bulletins', link: '/posts/create' },
    ],

    sidebar: [
      {
        text: 'Paramétrage',
        items: [
          { text: 'Accès à l\'administration', link: '/settings/login' },
          { text: 'Tableau de bord', link: '/settings/dashboard' },
          { text: 'Configuration', link: '/settings/settings' },
          { text: 'Themes', link: '/settings/themes' },
          { text: 'Abonnements', link: '/settings/plans' },
          { text: 'Pages', link: '/settings/pages' },
          { text: 'Parcelles', link: '/settings/parcelles' },
          { text: 'Ressources', link: '/settings/resources' },
          { text: 'Journal des modifications', link: '/settings/changelog' },
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
          { text: 'Les modules', link: '/posts/modules' },
          { text: 'Télécharger le PDF', link: '/posts/download' },
          { text: 'Commentaires', link: '/posts/comments' },
        ]
      },
      {
        text: 'Contenu',
        items: [
          { text: 'Articles', link: '/posts/articles' },
        ]
      },
      {
        text: 'Divers',
        items: [
          { text: 'Cropscan', link: '/divers/cropscan' },
          { text: 'Sources météo', link: '/divers/sources-meteo' },
          { text: 'Tickets (signalements)', link: '/support-tickets' },
        ]
      },
    ],

    socialLinks: []
  }
})
