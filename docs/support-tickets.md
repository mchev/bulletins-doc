# Tickets techniques (GitHub)

Les **administrateurs** et **éditeurs** peuvent consulter les **issues GitHub** du dépôt configuré et **créer un ticket** depuis l’administration du portail — sans utiliser l’interface GitHub au quotidien.

## Accès dans l’application

1. Connectez-vous avec un compte **administrateur** ou **éditeur**.
2. Dans le menu latéral, ouvrez **Tickets** (ou allez à l’URL `/admin/support/tickets` sur votre instance).

Vous y trouvez :

- la **liste** des tickets (statut ouvert / fermé, libellés, date de mise à jour, nombre de commentaires) ;
- le **détail** d’un ticket : description, **commentaires** synchronisés depuis GitHub (réponses et discussions faites sur GitHub y apparaissent, avec un léger délai dû au cache serveur) ;
- un bouton pour **ouvrir le ticket sur GitHub** si vous devez utiliser des fonctions avancées côté GitHub.

::: tip Rafraîchissement
Les données affichées sont mises en cache **environ 1 à 2 minutes**. Après une action sur GitHub, revenez sur la page un instant plus tard ou rechargez pour voir le dernier état.
:::

## Création d’un ticket

Menu **Tickets** → **Nouveau ticket**. Le message crée une **issue** sur le dépôt GitHub configuré (même mécanisme que précédemment côté serveur, avec le jeton secret).

::: warning Réservé à l’administration
Ce n’est **pas** une page publique : seuls les comptes avec accès à l’administration peuvent créer ou consulter les tickets depuis le site.
:::

## Configuration serveur (`.env`)

| Variable | Rôle |
|----------|------|
| `GITHUB_ISSUE_TOKEN` | Jeton avec au minimum **lecture** des issues et **création** d’issues sur le dépôt (souvent scope `repo` en PAT classique, ou droits *Issues* en jeton affiné). |
| `GITHUB_ISSUE_REPO_OWNER` | Propriétaire du dépôt (utilisateur ou organisation). |
| `GITHUB_ISSUE_REPO_NAME` | Nom du dépôt. |
| `GITHUB_ISSUE_LABELS` | *(Optionnel)* Libellés existants sur le dépôt, séparés par des virgules. |

La documentation statique (GitHub Pages) ne contient **pas** de formulaire public : tout passe par **votre** instance (`/admin/support/tickets`).
