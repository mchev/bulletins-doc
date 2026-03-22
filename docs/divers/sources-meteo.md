# Sources météo

Le portail des bulletins permet d'intégrer des données météorologiques issues de différentes sources.

Ces données sont utilisés dans trois modules clés du bulletin : 

- les prévisions météo
- les prévisions de traitements
- l'historique pluviométrique

## OpenMeteo

https://open-meteo.com/

OpenMeteo est la source météo recommandée pour son intégration du modèle global ARPEGE combiné avec le modèle AROME à haute résolution. Elle offre l'avantage d'être gratuite et de charger rapidement.

## Sencrop

https://sencrop.com/fr/

C'est une source payante.

:::info Clé API
Vos services doivent fournir une clé API afin d'utiliser cette source.
:::

## Meteoblue

https://www.meteoblue.com

C'est une source payante.

:::info Clé API
Vos services doivent fournir une clé API afin d'utiliser cette source.
:::

## Weenat

https://weenat.com/

Source payante, disponible lorsque votre déploiement est configuré avec une clé API Weenat.

:::info Clé API
Vos services doivent fournir une clé API afin d'utiliser cette source.
:::

## Choisir la source depuis le tableau de bord

Dans les modules **prévisions météo** et **historique pluviométrique**, un menu **Source** permet de sélectionner le fournisseur de données (parmi ceux configurés sur le portail).

- Si la source sélectionnée rencontre une erreur, vous pouvez en **choisir une autre** dans ce menu **sans recharger la page**.
- **Meteoblue** est une source payante ; en cas de problème d’affichage ou de disponibilité, basculer temporairement vers une autre source (par ex. OpenMeteo) peut permettre de continuer à consulter les prévisions.

## OpenWeatherMap

https://openweathermap.org/

La source est gratuite avec une limite d'usage.
Elle est considérée comme moins précise et ne sert qu'en cas de panne des autres sources.