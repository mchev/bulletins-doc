# Paramètres

> Pour cette étape, vous devez avoir les droits administrateurs sur le portail.

Pour initialiser le portail, commencez par accéder aux paramètres en cliquant sur "Paramètres" dans la barre latérale gauche.

![Paramètres](/assets/menu_parametres.png)

## Coordonnées

Les coordonnées sont indispensables pour le bon fonctionnement du portail. Elles sont utilisées dans les bulletins générés et contiennent des mentions obligatoires.

![Coordonnées](/assets/parametres_coordonnees.png)

Tous les champs doivent être remplis minutieusement.

> "Service" est le nom du service s'occupant de la publication du bulletin.

> "Direction de publication" est le nom de la personne responsable du service.

> "Rédaction" sont les noms des personnes qui rédigent le bulletin.

## Logo de la chambre

Le logo de la chambre sera affiché sur la page de connexion ainsi qu'en bas de toutes les pages du portail.

Privilégiez une image avec un fond transparent pour un meilleur rendu.

> Le logo doit être un fichier de type: jpeg, png, jpg, gif, svg.

> Le logo ne doit pas être plus grand que 500 kilobytes.

## Logo du service

Le logo du service sera affiché en haut à gauche dans la barre de navigation principale.

Privilégiez une image avec un fond transparent pour un meilleur rendu.

> Le logo doit être un fichier de type: jpeg, png, jpg, gif, svg.

> Le logo ne doit pas être plus grand que 500 kilobytes.

## Image de la page de connexion

L'image s'affiche sur la page de connexion.

> L'image doit être un fichier de type: jpeg, png, jpg, gif, svg.

> L'image ne doit pas être plus grande que 1Mo.

## Icône de l'application

L'icône de l'application est utilisée dans les onglets des navigateurs.

> Les dimensions de l'icône doivent être de 512x512 pixels.

> L'icône doit être un fichier de type: jpeg, png, jpg, gif, svg.

> L'icône ne doit pas être plus grande que 1Mo.

## Pied de page

Le pied de page est optionnel.

S'affiche en bas de chaque page du portail.

## Brevo {#brevo}

Une section **Brevo** permet de lancer une **synchronisation** entre les contacts du portail et les **listes Brevo** rattachées aux abonnements (abonnements directs et **collectifs**).

- Cliquez sur **Synchroniser Brevo maintenant** pour déclencher la mise à jour. Le traitement s’exécute **en arrière-plan** et peut prendre quelques minutes selon le volume.
- Cette action est utile après des changements d’abonnements ou pour s’assurer que les **destinataires** des envois automatiques de bulletins correspondent bien aux abonnés actuels — voir aussi [Brevo (abonnement)](/settings/plans#brevo-templates-et-envoi-automatique) et [Envoi automatique depuis l’éditeur de bulletin](/posts/create#envoi-automatique-par-e-mail-brevo).

::: tip Clé API
La synchronisation et les envois automatiques nécessitent une **configuration Brevo** valide côté serveur (clé API). En l’absence de configuration, les boutons ou messages d’erreur vous l’indiquent.
:::

## Scripts

Les scripts seront insérés dans la balise head du site. Ils permettent par exemple d'intégrer un outil de statistique.

::: danger
Soyez prudent. Ne modifiez ce champ qu'avec des compétences en programmation.
:::