# Projet front end Nouira/Malattia

Ceci est le répertoire du front end du mini projet proposé par M.Buffa

## Travail réalisé 
 * Login et inscription grâce à l'api avec des mots de passe encryptés avec bcrypt (réalisé à l'aide du code d'un précédent projet personnel et en suivant le tutoriel de Open Classrooms) Ce code en node js a été partagé au groupe de Pierre Bihannic
 * Json web token implémenté en back end uniquement
 * Ajout de propriétés au modèle des assignments (le nom des élèves, de la matière, du prof, un avatar pour la matière, la possibilité de noter un devoir etc...)
 * Amélioration des affichages (Pagination, colonnes triables)
 * Utilisation de pipe custom pour le statut du rendu et pour la note

## Contributions :
Ward Nouira : Pagination, colonnes triables, affichage dans une table avec un dataset. Une partie des nouvelles propriétés sur le modèle des assignments

Alexis Malattia : Connexion et inscription, l'autre partie des nouvelles propriété sur le modèle des assignments, les pipes customs.

## Les liens :
Hébergement du front et du back sur `Render.com` [L'application](https://frontend-projetm-buffa-malattia-nouira.onrender.com) et [l'api](https://api-projet-m-buffa-malattia-nouira.onrender.com)
La vidéo [Présentation du projet](https://www.youtube.com/watch?v=fCBzAEXD97A)
Possibilité de créer un compte admin ou de se connecter avec le compte admin déjà créé : 

```pseudo: alexis mot de passe: alexis```

# IMPORTANT :
Il semblerait que l'api ne soit pas accessible par moment sur Render, si l'application d'affiche aucun assignment et que la connexion et création de compte ne font rien, il s'agit d'un problème provenant de render.
