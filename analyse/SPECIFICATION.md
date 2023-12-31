# Spécification
## Diagram Use Case

### afficher listes

| Catégorie      |                                           Valeur                                            |
|----------------|:-------------------------------------------------------------------------------------------:|
| Nom            |                                       afficher listes                                       |
| pré condition  |                                              /                                              |
| post condition |                                              /                                              |
| acteur(s)      |                                            tous                                             |
| description    | afficher la liste des items en fonction des filtres sélectionné ou de la catégorie choisis  |

---

### filtrer items

| Catégorie      |                            Valeur                       |
|----------------|:-------------------------------------------------------:|
| Nom            |                        filtrer items                    |
| pré condition  |                              /                          |
| post condition |                              /                          |
| acteur(s)      |                             tous                        |
| description    | Filtrer les objects en fonction des options sélectionné |

---

### créer stuffs

| Catégorie      |                         Valeur                          |
|----------------|:-------------------------------------------------------:|
| Nom            |                      créer stuffs                       |
| pré condition  |              se connecter, créer un compte              |
| post condition |                            /                            |
| acteur(s)      |                      user et admin                      |
| description    |        l'user ou l'admin pourra créer des stuffs        |

---

### gérer stuffs

| Catégorie      |                                      Valeur                                       |
|----------------|:---------------------------------------------------------------------------------:|
| Nom            |                                   gérer stuffs                                    |
| pré condition  |                           se connecter, créer un compte                           |
| post condition |                                         /                                         |
| acteur(s)      |                                   user et admin                                   |
| description    |       l'user pourra gérer ses stuffs, l'admin pourra gérer tout les stuffs        |

---

### voir item

| Catégorie      |            Valeur            |
|----------------|:----------------------------:|
| Nom            |          voir stuff          |
| pré condition  |              /               |
| post condition |              /               |
| acteur(s)      |             tous             |
| description    | afficher l'objet séléctionné |

---

### commenter item

| Catégorie      |                Valeur                |
|----------------|:------------------------------------:|
| Nom            |            Commenter item            |
| pré condition  |     se connecter, créer un compte    |
| post condition |                   /                  |
| acteur(s)      |             user et admin            |
| description    | pouvoir commenter l'item ou le stuff |

---

### gérer profile

| Catégorie      |             Valeur              |
|----------------|:-------------------------------:|
| Nom            |          gérer profile          |
| pré condition  |  se connecter, créer un compte  |
| post condition |                /                |
| acteur(s)      |           User, Admin           |
| description    | modifier, supprimer son profile |

---

### gérer commentaire

| Catégorie      |                                       Valeur                                       |
|----------------|:----------------------------------------------------------------------------------:|
| Nom            |                                 gérer commentaire                                  |
| pré condition  |                             se connecter, créer compte                             |
| post condition |                                         /                                          |
| acteur(s)      |                                    User, Admin                                     |
| description    | modifier, supprimer son commentaire ou un commentaire si connecté en tant qu'Admin |

--

### répondre commentaire

| Catégorie      |                         Valeur                          |
|----------------|:-------------------------------------------------------:|
| Nom            |                  répondre commentaire                   |
| pré condition  |               se connecter, créer compte                |
| post condition |                            /                            |
| acteur(s)      |                       User, Admin                       |
| description    | pouvoir répondre à des commentaires d'autre utilisateur |

---

### créer compte

| Catégorie      |             Valeur             |
|----------------|:------------------------------:|
| Nom            |          créer compte          |
| pré condition  |               /                |
| post condition |               /                |
| acteur(s)      |            Anonyme             |
| description    | se créer un compte sur le site |

--

### se connecter

| Catégorie      |          Valeur          |
|----------------|:------------------------:|
| Nom            |       se connecter       |
| pré condition  |            /             |
| post condition |            /             |
| acteur(s)      |         Anonyme          |
| description    | se connecter sur le site |