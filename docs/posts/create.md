# Créer un bulletin

Pour créer un bulletin, commencez par vous rendre dans la section `Bulletins` en cliquant sur le bouton correspondant dans la barre latérale gauche.

Enuite cliquez sur le bouton `Ajouter un bulletin` en haut à droite.

Un menu déroulant vous permet de choisir pour quel abonnement ce bulletin sera destiné.

Sélectionnez l'abonnement et vous serez redirigé vers l'éditeur de bulletin.

## Éditer un bulletin

L'éditeur de bulletin comprend trois zones principales :

- Les onglets correspondant aux modules activés pour l'abonnement lié au bulletin.
- La barre latéral droite contenant les informations générales et les actions.
- La zone d'édition du contenu.

### Barre d'actions

Dans cette barre vous pouvez `Mettre à jour` le bulletin pour sauvegarder vos modifications.
Cliquez sur `Aperçu` pour voir le rendu du bulletin tel que les abonnés le verront.

Vous pouvez également modifier le titre, changer l'abonnement, sélectionner son statut et l'auteur.

Il est possible de `Supprimer` le bulletin en cliquant sur le bouton `Supprimer` dans la barre d'actions.

## Envoi automatique par e-mail (Brevo) {#envoi-automatique-par-e-mail-brevo}

Si votre portail est relié à **Brevo**, un bloc **« Envoi email (Brevo) »** peut apparaître dans la **barre latérale droite** de l’éditeur de bulletin. Il permet de diffuser le bulletin par **campagne e-mail** vers la liste d’abonnés associée à l’abonnement.

### Prérequis pour que l’envoi soit déclenché

Pour qu’un envoi soit possible (et qu’il soit réellement lancé à la publication), il faut notamment :

- un **template e-mail Brevo** (SMTP transactionnel) sélectionné sur l’**abonnement** — voir l’onglet **Brevo** dans [Abonnements](/settings/plans#brevo-templates-et-envoi-automatique) ;
- l’option **d’envoi automatique** activée au niveau de l’abonnement **ou** du bulletin (le bulletin peut reprendre le réglage du plan ou le surcharger) ;
- au moins un **destinataire** : la liste Brevo liée à l’abonnement doit refléter les abonnés (comptes directs et collectifs). En cas de doute sur la liste, utilisez la synchronisation décrite dans [Paramètres — Brevo](/settings/settings#brevo).

Si le template n’est pas configuré sur l’abonnement, le bloc l’indique et renvoie vers la configuration du plan.

### Comportement selon le type de publication

- **Publication manuelle** : lorsque vous passez le bulletin au statut **Publié** et enregistrez, une **campagne** peut être créée côté Brevo pour la liste du plan. Un message de confirmation indique le nombre de destinataires pris en compte (ou un message d’erreur en cas d’échec partiel).
- **Publication planifiée** : lorsque la date et l’heure de publication sont atteintes, le bulletin est publié automatiquement ; l’envoi par e-mail suit les **mêmes règles** que ci-dessus. Les **administrateurs** peuvent recevoir un **récapitulatif** par e-mail après l’envoi (notamment pour les publications automatiques).

### Options dans l’éditeur

Selon la configuration, vous pouvez :

- activer ou désactiver l’**envoi automatique** pour **ce** bulletin (si vous ne fixez rien au niveau bulletin, c’est le **réglage par défaut de l’abonnement** qui s’applique) ;
- voir une **estimation du nombre de destinataires** (basée sur la liste Brevo du plan) ;
- lancer un **envoi de test** ou, en cas d’incident, **renvoyer** la campagne (boutons prévus à cet effet).

Le suivi détaillé (ouvertures, clics) se fait dans **Brevo**.

### Variables transmises au template

Le message utilise en général des paramètres tels que le **titre** du bulletin, la **date** de publication, le **lien** vers le bulletin en ligne et le **lien** vers le **PDF**. La liste exacte des champs disponibles est rappelée dans l’onglet **Brevo** de l’abonnement lors de la configuration du template.

### Modules

En cliquant sur les différents onglets, vous pouvez modifier le contenu de chaque module.
Chaque module a ses propres règles de contenu.

Le module principale est le module `Conseils` qui permet de rédiger le contenu du bulletin.

Vous pouvez retrouver le détail d'édition de chaque module dans la [documentation des modules](/posts/modules).

