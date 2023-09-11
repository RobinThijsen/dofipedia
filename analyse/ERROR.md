# ERROR
## Dofipedia

* 101 => email not valid
* 201 => email incorrect
* 202 => mdp incorrect
* 203 => name already use
* 301 => user existing
* 401 => nothing found
* 402 => user not found
* 404 => page not found
* 500 => error server

1. login page

|   |                                   Description                                    |  Location  |                             Message                              |
|---|:--------------------------------------------------------------------------------:|:----------:|:----------------------------------------------------------------:|
| 1 |         Lors de la connexion l'utilisateur à rentré un email non valide          | login page |                 Cet email n'est pas valide (101)                 |
| 1 |           Lors de la connexion l'utilisateur à rentré un mdp incorrect           | login page |                   mot de passe incorrect (202)                   |
| 2 |          Lors de la connexion l'utilisateur à rentré un email incorrect          | login page |                      email incorrect (201)                       |
| 3 | Lors de la connexion l'utilisateur essaye de se connecter à un compte inexistant | login page |                   Ce compte n'existe pas (402)                   |
| 4 |                      Erreur quelconque lors de la connexion                      | login page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---

2. register page

|   |                                   Description                                    |  Location  |                             Message                              |
|---|:--------------------------------------------------------------------------------:|:----------:|:----------------------------------------------------------------:|
| 2 |     Lors de la création du compte l'utilisateur à rentré un email non valide     | login page |                 Cet email n'est pas valide (101)                 |
| 2 | Lors de la création du compte l'utilisateur à rentré des informations existantes | login page |                Cet utilisateur existe déjà (301)                 |
| 4 |                 Erreur quelconque lors de la création du compte                  | login page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---

3. afficher items page

|   |                  Description                   |  Location  |                             Message                              |
|---|:----------------------------------------------:|:----------:|:----------------------------------------------------------------:|
| 1 | Lors du chargement, aucun item n'as été trouvé | items page |                    Rien n'a été trouvé (401)                     |
| 2 |      Erreur quelconque lors du chargement      | items page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---

4. afficher item page

|   |                     Description                     | Location  |                             Message                              |
|---|:---------------------------------------------------:|:---------:|:----------------------------------------------------------------:|
| 1 | Lors du chargement, rien n'a été trouvé pour l'item | item page |             Rien n'a été trouvé pour cet item (401)              |
| 2 |        Erreur quelconque lors du chargement         | item page | Une erreur à été rencontré. Veuillez ré-essayer plus tard. (500) |

---

5. créer stuff

|   |                         Description                          |  Location  |        Message         |
|---|:------------------------------------------------------------:|:----------:|:----------------------:|
| 1 | Lors de la connexion l'utilisateur à rentré un mdp incorrect | login page | mot de passe incorrect |
| 2 |                                                              |            |                        |
| 3 |                                                              |            |                        |
| 4 |                                                              |            |                        |
| 5 |                                                              |            |                        |

---

6. gérer stuff

|   |                         Description                          |  Location  |        Message         |
|---|:------------------------------------------------------------:|:----------:|:----------------------:|
| 1 | Lors de la connexion l'utilisateur à rentré un mdp incorrect | login page | mot de passe incorrect |
| 2 |                                                              |            |                        |
| 3 |                                                              |            |                        |
| 4 |                                                              |            |                        |
| 5 |                                                              |            |                        |

---

7. créer commentaire

|   |                         Description                          |  Location  |        Message         |
|---|:------------------------------------------------------------:|:----------:|:----------------------:|
| 1 | Lors de la connexion l'utilisateur à rentré un mdp incorrect | login page | mot de passe incorrect |
| 2 |                                                              |            |                        |
| 3 |                                                              |            |                        |
| 4 |                                                              |            |                        |
| 5 |                                                              |            |                        |

---

8. gérer commentaire

|   |                         Description                          |  Location  |        Message         |
|---|:------------------------------------------------------------:|:----------:|:----------------------:|
| 1 | Lors de la connexion l'utilisateur à rentré un mdp incorrect | login page | mot de passe incorrect |
| 2 |                                                              |            |                        |
| 3 |                                                              |            |                        |
| 4 |                                                              |            |                        |
| 5 |                                                              |            |                        |
