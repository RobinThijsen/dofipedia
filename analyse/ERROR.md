# ERROR
## Dofipedia

<<<<<<< HEAD
* 101 => email not valid
* 201 => email incorrect
* 202 => mdp incorrect
* 203 => name already use
* 301 => user existing
* 401 => nothing found
* 402 => user not found
* 404 => page not found
* 500 => error server

### login page

|   |                                   Description                                    |  Location  |                             Message                              |
|---|:--------------------------------------------------------------------------------:|:----------:|:----------------------------------------------------------------:|
| 1 |         Lors de la connexion l'utilisateur à rentré un email non valide          | login page |                 Cet email n'est pas valide (101)                 |
| 1 |           Lors de la connexion l'utilisateur à rentré un mdp incorrect           | login page |                   mot de passe incorrect (202)                   |
| 2 |          Lors de la connexion l'utilisateur à rentré un email incorrect          | login page |                      email incorrect (201)                       |
| 3 | Lors de la connexion l'utilisateur essaye de se connecter à un compte inexistant | login page |                   Ce compte n'existe pas (402)                   |
| 4 |                      Erreur quelconque lors de la connexion                      | login page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---

### register page

|   |                                   Description                                    |  Location  |                             Message                              |
|---|:--------------------------------------------------------------------------------:|:----------:|:----------------------------------------------------------------:|
| 2 |     Lors de la création du compte l'utilisateur à rentré un email non valide     | login page |                 Cet email n'est pas valide (101)                 |
| 2 | Lors de la création du compte l'utilisateur à rentré des informations existantes | login page |                Cet utilisateur existe déjà (301)                 |
| 4 |                 Erreur quelconque lors de la création du compte                  | login page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---

### afficher items page

|   |                  Description                   |  Location  |                             Message                              |
|---|:----------------------------------------------:|:----------:|:----------------------------------------------------------------:|
| 1 | Lors du chargement, aucun item n'as été trouvé | items page |                    Rien n'a été trouvé (401)                     |
| 2 |      Erreur quelconque lors du chargement      | items page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---

### afficher item page

|   |                     Description                     | Location  |                             Message                              |
|---|:---------------------------------------------------:|:---------:|:----------------------------------------------------------------:|
| 1 | Lors du chargement, rien n'a été trouvé pour l'item | item page |             Rien n'a été trouvé pour cet item (401)              |
| 2 |        Erreur quelconque lors du chargement         | item page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---
                                               |            |                        |
### créer stuff page

|   |                                      Description                                      |  Location   |          Message          |
|---|:-------------------------------------------------------------------------------------:|:-----------:|:-------------------------:|
| 1 |            Lors de la création d'un set de stuff, l'objet est introuvable             | créer stuff | Object introuvable. (401) |
| 2 | Lors de la création de stuff, le stuff ne s'est pas enregister dans la base de donnée | créer stuff |   Erreur serveur. (500)   |
| 3 |                                                                                       |             |                           |
| 4 |                                                                                       |             |                           |
| 5 |                                                                                       |             |                           |

---

### gérer stuff page

|   |                                     Description                                      |  Location   |        Message        |
|---|:------------------------------------------------------------------------------------:|:-----------:|:---------------------:|
| 1 | Lors de la modification d'un set de stuff, la modification n'est pas prise en compte | gérer stuff | Erreur serveur. (500) |
| 2 |                                                                                      |             |                       |
| 3 |                                                                                      |             |                       |
| 4 |                                                                                      |             |                       |
| 5 |                                                                                      |             |                       |

---

### créer commentaire page


|   |             Description             |             Location              |                   Message                   |
|---|:-----------------------------------:|:---------------------------------:|:-------------------------------------------:|
| 1 |  Un commentaire qui ne se crée pas  |         créer commentaire         |  Impossible de créer un commentaire. (500)  |
| 2 | un commentaire qui ne se publi pas  |         créer commentaire         | Impossible de publier un commentaire. (500) |
| 3 |                                     |                                   |                                             |
| 4 |                                     |                                   |                                             |
| 5 |                                     |                                   |                                             |

---

## gérer commentaire page


|   |                     Description                      |             Location              |                   Message                    |
|---|:----------------------------------------------------:|:---------------------------------:|:--------------------------------------------:|
| 1 | L'utilisateur n'arrive pas à modifier un commentaire |         gérer commentaire         | Impossible de modifier le commentaire. (500) |
| 2 |               Commentaire introuvable                |         gérer commentaire         | Le commentaire est introuvable. (401 / 500)  |
| 3 |                                                      |                                   |                                              |
| 4 |                                                      |                                   |                                              |
| 5 |                                                      |                                   |                                              |
