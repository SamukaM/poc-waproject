# poc-waproject
Prove of Concept - Wa-Project

## Arquitetura:
```
Projeto:.
|   .dockerignore
|   .env
|   .gitignore
|   docker-compose.yaml
|   Dockerfile
|   package-lock.json
|   package.json
|
+---bin
|       server.js
|
\---src
    |   app.js
    |
    +---controllers
    |       association-controller.js
    |       exam-controller.js
    |       laboratory-controller.js
    |
    +---models
    |       association.js
    |       exam.js
    |       laboratory.js
    |
    +---repositories
    |       association-repository.js
    |       exam-repository.js
    |       laboratory-repository.js
    |
    \---routes
            association-routes.js
            exam-routes.js
            index.js
            laboratory-routes.js
```
