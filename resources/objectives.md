# Carnet d'adresses
## Contexte
Fort de votre expérience en relation clientèle avec tante Ursule, vous parvenez à lui vendre à bon prix
un carnet d'adresses grâce auquel elle pourra stocker les nouveaux contacts qu'elle se fait chaque semaine au club de bridge.

## Choix techniques
L'application web que vous allez développer sera entièrement "***client side***", c'est-à-dire côté client.
Vous utiliserez donc les langages HTML, CSS et JavaScript. Pour être plus efficace, la librairie ***jQuery*** sera utilisée. Ce sera
l'occasion de découvrir cet outil très populaire qui est une alternative à l'API DOM.

Par ailleurs il va falloir trouver un moyen de ***persister les données***, c'est-à-dire de les stocker quelque part... côté client, dans le navigateur ! 
Il existe pour cela l'***API Web Storage*** que vous aller apprendre à utiliser pour écrire et lire des données. Ce sera l'occasion d'appréhender 
également le format de données ***JSON***. 

## Fonctionnalités

L'application web permettra à tante Ursule d'effectuer les actions suivantes :

### 1. Voir la liste des contacts 
La liste des contacts est affichée dès le chargement de la page. Si des contacts ont déjà été ajoutés, ils doivent être visibles dès le départ, sans aucune action particulière.
Pour chaque contact on affichera un pictogramme, le nom et le prénom du contact. 

Les contacts sont affichés par ordre d'ajout.

Si le carnet d'adresses est vide, un message renseigne tante Ursule : "Aucun contact pour le moment".

### 2. Ajouter un contact

Au clic sur un bouton "Nouveau contact" un formulaire apparaît. Il contient les champs suivants :

- Civilité (Madame / Mademoiselle / Monsieur)
- Prénom
- Nom
- Numéro de téléphone
- Bouton "Enregistrer"

Une fois les champs remplis, au click sur le bouton "Enregistrer", le contact est sauvegardé et :

- la liste des contacts est mise à jour (le nouveau contact est visible)
- le formulaire disparaît

***Remarque*** : un bouton "Effacer" permet de réinitialiser le formulaire
 
### 3. Afficher les détails d'un contact

Au clic sur le nom d'un contact dans la liste, un encart apparaît et montre toutes les informations du contact (civilité, nom, prénom, téléphone), 
ainsi qu'un bouton "Editer le contact", donnant accès à la modification du contact. 

### 4. Modifier un contact
Au clic sur le bouton "Editer le contact" présent sur l'encart de détails d'un contact, 
le formulaire apparaît (le même formulaire que pour l'ajout d'un contact), pré-rempli avec les données du contact.
Au clic sur le bouton "Enregistrer", les données du contact sont sauvegardées, le formulaire disparaît et le contact est mis à jour dans la liste.

### 5. Supprimer l'ensemble du carnet d'adresses
Un bouton permet de vider le carnet d'adresses. Tous les contacts sont supprimés. 

## Indications

- Comme pour la liste de tâches, il va falloir trouver un moyen de persister les données du carnet d'adresses, 
mais cette fois, côté client, directement dans le navigateur...!
- Comme toujours il sera intéressant de structurer le code en fonctions, et de ranger ces fonctions dans différents fichiers pour s'y retrouver plus facilement. 

## Mockups
![MockUp1](resources/mockups/1.jpg)

![MockUp2](resources/mockups/2.png)

![MockUp3](resources/mockups/3.png)

## BONUS
### Bonus 1 : mise en exergue du contact cliqué
Au clic sur un contact pour afficher ses informations, il pourrait être utile à tante Ursule de voir dans la liste quel contact elle vient de cliquer.
Il s'agira de le mettre en valeur visuellement. 

### Bonus 2 : Affichage des détails après enregistrement
Lors de l'enregistrement d'un contact, que ce soit pour un ajout ou une modification, il pourrait être utile d'afficher les détails du contact enregistré.
Cela permettra à tante Ursule de vérifier que tout s'est bien passé. 

### Bonus 3 : tri des contacts
Lors de l'ajout ou de la modification d'un contact, l'idée serait de trier le carnet d'adresses
afin que les contacts soient affichés par ordre alphabétique du nom, puis du prénom. 