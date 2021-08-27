# Prove of Concept
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
---
## Instruções de Uso:

Para iniciar, é necessario instanciar os containers do docker-compose. Para isso basta entrar na pasta do projeto pelo terminal e executar o comando:

```CMD
docker-compose up --build
```

> Após execução a API estará executando juntamente ao banco de dados.</br>
> A porta padrão da aplicação é a 8080
</br>

Para melhor utilização da API está disponibilizado uma [Collection](https://github.com/SamukaM/poc-waproject/tree/main/Collection%20-%20Insominia) Insominia

---

## Documentação:

+ [Documentação](https://github.com/SamukaM/poc-waproject/blob/main/Documentacao.md) 