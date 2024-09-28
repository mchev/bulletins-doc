# Utilisateurs

> Pour cette étape, vous devez avoir les droits administrateurs sur le portail.

Les utilisateurs sont les abonnés du portail. Il existe trois moyens d'ajouter des utilisateurs :

- L'inscription en ligne : l'utilisateur s'inscrit directement sur le portail. Et peut choisir de s'abonner à un ou plusieurs bulletins si il sont disponible gratuitement.
- L'import : l'utilisateur est importé depuis un fichier Excel.
- La création : un utilisateur est créé par un administrateur.

Un utilisateur peut avoir plusieurs abonnements et les consulter depuis la page d'accueil du site en sélectionnnant l'abonnement dans le menu déroulant.

![Séléction d'un abonnement](/assets/dropdown_plans.png)

Un utilisateur peut également appartenir à un ou plusieurs collectifs. Les collectifs sont des groupes d'utilisateurs partageant les mêmes abonnements. Voir la section [Collectifs](/users/collectifs.md) pour plus d'informations.

:::danger  Première utilisation
Lors de votre première utilisation, votre utilisateur n'a pas d'abonnement. Pour accéder aux bulletins, vous devez d'abord créer un abonnement et l'attribuer à votre utilisateur.
:::

## Créer un utilisateur

1. Cliquez sur "Utilisateurs" dans la barre latérale gauche.

2. Cliquez sur le bouton `Ajouter` en haut à droite.

3. Vous allez voir apparaître un formulaire permettant de saisir les informations de l'utilisateur.

![Création d'un utilisateur](/assets/users_create.png)

Tous les champs sont obligatoires excepté la photo.

:::warning Email
Il est essentiel que l'adresse email soit à la fois valide et unique. C'est sur cette base que la vérification de l'existence d'un utilisateur lors de l'importation est effectuée.
:::

:::warning Ville
L'entrée de la ville est cruciale pour obtenir les coordonnées GPS, ce qui permet d'afficher les données météorologiques.
:::

4. Cliquez sur le bouton `Enregistrer` en haut à droite.

## Rechercher un utilisateur

Pour trouver un utilisateur spécifique, suivez ces étapes :

1. Sélectionnez "Utilisateurs" dans le menu latéral gauche.

Vous disposez de plusieurs options pour filtrer les utilisateurs :

- Utilisez le champ de recherche situé en haut à droite pour chercher par :
    - Nom
    - Email
    - Ville

- Vous pouvez également filtrer les utilisateurs en fonction de :
    - Collectif
    - Abonnement
    - Rôle

Une fois que vous avez trouvé les utilisateurs souhaités, vous pouvez exporter les résultats au format CSV. Vous pouvez ensuite ouvrir le fichier dans Excel ou tout autre programme de tableur compatible.

## Importer des utilisateurs

1. Cliquez sur "Utilisateurs" dans la barre latérale gauche.

2. Cliquez sur le bouton `Importer` en haut à droite.

3. Vous allez voir apparaître un formulaire permettant de saisir les informations des utilisateurs.

4. Cliquez sur le bouton `Enregistrer` en haut à droite.

:::warning Vérifiez votre fichier
Assurez-vous que votre fichier est au format XLSX (Excel) et que les colonnes correspondent aux champs attendus. Vous pouvez télécharger le modèle de fichier XLSX.
:::

![Importer des utilisateurs](/assets/users_import.png)

## Exporter des utilisateurs

1. Cliquez sur "Utilisateurs" dans la barre latérale gauche.

2. Cliquez sur le bouton `Exporter` en haut à droite.

3. Votre fichier est généré et téléchargé automatiquement.

## Supprimer un utilisateur

1. Cliquez sur "Utilisateurs" dans la barre latérale gauche.

2. Séléctionnez l'utilisateur dans la liste.

3. Cliquez sur le bouton `Supprimer` en haut à droite.

4. Une fenêtre de confirmation apparaît. Cliquez sur `Ok` pour confirmer.

## Attribuer un abonnement à un utilisateur

1. Cliquez sur "Utilisateurs" dans la barre latérale gauche.

2. Séléctionnez l'utilisateur dans la liste.    

3. Cliquez sur le bouton `Ajouter un abonnement` dans la section "Abonnements".

4. Un formulaire apparaît, vous permettant de choisir l'abonnement, la date de début et la durée de l'abonnement, exprimée en jours.

5. Cliquez sur le bouton `Enregistrer`.

L'utilisateur à maintenant accès aux bulletins de l'abonnement séléctionné.

## Attribuer un collectif à un utilisateur

1. Cliquez sur "Utilisateurs" dans la barre latérale gauche.

2. Séléctionnez l'utilisateur dans la liste.

3. Cliquez sur le bouton `Joindre un collectif` dans la section "Collectifs".

3. Vous pouvez alors séléctionner un collectif dans la liste déroulante ou créer un nouveau collectif.

4. Cliquez sur le bouton `Joindre`.

## Synchronisation Brevo

La création, modification et suppression d'un utilisateur dans le portail synchronise automatiquement votre compte [Brevo](https://brevo.com){rel="nofollow"}.

Brevo vous permet ensuite d'envoyer des emails ou des campagnes d'informations aux utilisateurs.

Le système Brevo permet également à l'application d'envoyer des emails aux utilisateurs. Par exemple, pour envoyer un email de réinitialisation de mot de passe.

