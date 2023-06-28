Le projet vise à développer une plateforme web réactive avec une base de données utilisant une API Rails. L'objectif principal est de permettre aux utilisateurs de s'inscrire, de se connecter afin d’accéder aux radios, de les filtrer par genres musicaux et de les mettre dans leurs favoris.

Fonctionnalités principales :

Inscription et connexion des utilisateurs :• Les utilisateurs pourront créer un compte en fournissant des informations telles que leur  adresse e-mail et mot de passe.• Une fois inscrits, les utilisateurs pourront se connecter en utilisant leurs identifiants.

Caractéristiques clés de Sound Spectrum :• Radios filtrables par genre musical : Que vous soyez fan de pop, de rock, de jazz, de hip-hop ou de tout autre genre, notre vaste collection de radios couvre une gamme diversifiée de styles musicaux. Utilisez nos filtres intuitifs pour explorer et trouver les radios correspondant à vos goûts personnels.• Favoris personnalisés : Vous pouvez créer votre propre liste de radios favorites en les ajoutant à vos favoris. Cela vous permet d'accéder rapidement à vos stations préférées et de les écouter en un seul clic, sans avoir à chercher à chaque fois.• Interface conviviale et facile à utiliser : Nous avons conçu Sound Spectrum pour offrir une expérience utilisateur fluide et agréable. Notre interface conviviale et intuitive vous permet de naviguer facilement entre les stations, de régler le volume et d'explorer les différentes fonctionnalités sans effort.

Intégration de l'API radio-browser :• L'application utilisera l'API radio-browser à l'aide de la bibliothèque Axios pourrécupérer une liste de radios musicales.• Des filtres par genre musicaux permettront à l'utilisateur d'afficher les radios correspondantes à ses goûts musicaux.• Les radios recommandées seront présentées à l'utilisateur sous la forme d'une listeavec des informations telles que le nom de la station, le genre musical, et un boutonde lecture, avec la possibilité de les mettre en favoris.

Lecture en continu :• Lorsque l'utilisateur clique sur le bouton de lecture d'une radio recommandée,l'application commencera à diffuser la station de radio en continu.• L'utilisateur aura la possibilité de mettre en pause, de reprendre la lecture et derégler le volume.

Profil utilisateur :• Chaque utilisateur aura un profil personnel où il pourra consulter et modifier sesinformations d'inscription.

Gestion de la base de données :• L'API Rails gérera la persistance des données d' informations utilisateurdans une base de données.

Les préférences musicales seront stockées en local storageTechnologies utilisées :• React : Une bibliothèque JavaScript pour la création d'interfaces utilisateur réactives.• API Rails : Un framework Ruby pour le développement d'API RESTful.• Axios : Une bibliothèque JavaScript pour effectuer des requêtes HTTP.• Base de données : Une base de données sera mise en place à l'aide d'un système de gestionde base de données pris en charge par Rails, comme PostgreSQL ou MySQL.

En résumé, ce projet permettra aux utilisateurs de s'inscrire puis de se connecter  afin d’accéder aux radios, avec la possibilité de les filtrer par genre musicaux et de les ajouter en favoris. L'application utilisera une API Rails pour la gestion des données utilisateurs  et l'API radio-browser sera utilisée pour récupérer les stations de radio recommandées. La plateforme sera développée en utilisant React pour créer une interface réactive et conviviale.

Sound Spectrum link : https://soundspectrum.netlify.app/
