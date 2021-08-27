FORMAT: 1A

# Documentação API-Hospital
API desenvolvida para prova de conceito da WaProject.

# Base: /

## GET

Requisição para verificar a API e sua versão.

+ Response 200:

        {
            "title": "HospitalAPI",
            "version": "1.0.0"
        }

---
# Exame: /exam

## GET

Retorna todos os exames ativos.

+ Response 200:

        [
            {
                "_id": "id",
                "tipo": [
                    {
                      "analise_clinica": "Analise",
                      "imagem": "Base_64"
                    }
                  ],
                "nome": "Exame 1",
                "status": true,
                "__v": 0
            }
        ]

+ Response 500:

        'Falha ao carregar os Exames.'

---
## POST

Faz a criação de um novo exame.

+ Attributes
    + nome: (string, required)
    + tipo: (Object, required)
        + analise_clinica: (String, required)
        + imagem: (String[Base_64], required)
    + status: (Boolean, required)
<br/><br/>
+ Headers:

        Content-Type: application/json

+ Body:
        
        {
	        "nome": "",
	        "tipo":{
		            "analise_clinica": "",
		            "imagem": ""
	            },
	        "status": true
        }

+ Response 201:

        Exame cadastrado com sucesso!

+ Response 500:

        Falha ao cadastrar o Exame.

---

## PUT [ /exam/:id ]
Faz a alteração de um exame.

+ Parameters
    + id (string)
<br/><br/>
+ Attributes
    + nome: (string, required)
    + tipo: (Object, required)
        + analise_clinica: (String, required)
        + imagem: (String[Base_64], required)
    + status: (Boolean, required)
<br/><br/>
+ Headers:

        Content-Type: application/json

+ Body:
        
        {
	        "nome": "",
	        "tipo":{
		            "analise_clinica": "",
		            "imagem": ""
	            },
	        "status": true
        }

+ Response 200:

        Exame atualizado com sucesso!

+ Response 500:

        Falha ao atualizar Exame.

---
## DELETE [ /exam/:id ]
Faz a exclusão de um exame.

+ Parameters
    + id (string)

+ Response 200:

        Exame e associação removidos com sucesso!

+ Response 500:

        Falha ao remover o Exame e suas associações.

---

# Laboratório: /laboratory

## GET

Retorna todos os laboratórios ativos.

+ Response 200:

        [
            {
                "_id": "id",
                "nome": "Laboratorio 1",
                "endereco": "R.Testando-3, nº333",
                "status": true,
                "__v": 0
            }
        ]

+ Response 500:

        'Falha ao carregar os laboratórios.'

---
## POST

Faz a criação de um novo laboratório.

+ Attributes
    + nome: (String, required)
    + endereco: (String, required)
    + status: (Boolean, required)
<br/><br/>
+ Headers:

        Content-Type: application/json

+ Body:
        
        {
	        "nome": "",
	        "endereco": "",
	        "status": true
        }

+ Response 201:

        Laboratório cadastrado com sucesso!

+ Response 500:

        Falha ao cadastrar o laboratório.

---

## PUT [ /laboratory/:id ]
Faz a alteração de um laboratório.

+ Parameters
    + id (string)
<br/><br/>
+ Attributes
    + nome: (string, required)
    + endereco: (String, required)
    + status: (Boolean, required)
<br/><br/>
+ Headers:

        Content-Type: application/json

+ Body:
        
        {
	        "nome": "",
	        "endereco": "",
	        "status": true
        }

+ Response 200:

        Laboratório atualizado com sucesso!

+ Response 500:

        Falha ao atualizar o laboratório.

---
## DELETE [ /laboratory/:id ]
Faz a exclusão de um laboratório.

+ Parameters
    + id (string)

+ Response 200:

        Laboratório removido com sucesso!

+ Response 500:

        Falha ao remover o laboratório.

---
# Associações: /association

## PUT - CREATE [ /association/create ]

Faz a associação entre um exame a um laboratório.

+ Attributes
    + id_exame: (String, required)
    + id_laboratorio: (String, required)
<br/><br/>
+ Headers:

        Content-Type: application/json

+ Body:
        
        {
	        "id_exame": "",
	        "id_laboratorio": "",
        }

+ Response 200:

        Associação criada com sucesso!

+ Response 500:

        Falha ao criar associação.

---

## PUT - DELETE [ /association/delete ]

Desfaz a associação entre um exame a um laboratório.

+ Attributes
    + id_exame: (String, required)
    + id_laboratorio: (String, required)
<br/><br/>
+ Headers:

        Content-Type: application/json

+ Body:
        
        {
	        "id_exame": "",
	        "id_laboratorio": "",
        }

+ Response 200:

        Associação excluida com sucesso!

+ Response 500:

        Falha ao excluir associação.

---
# Função Extra: (Pesquisa Exame)

## GET [ /exam/:nome ]

Realiza pesquisa de exame por nome e retorna todos os laboratórios associados.

+ Parameters
    + nome (string)
<br/><br/>
+ Response 200:

        [
            {
                "_id": "612589a6edfe9f24d419e913",
                "nome": "Laboratorio - 1",
                "endereco": "R.Testando-1, nº111",
                "status": true,
                "__v": 0
            },
            {
                "_id": "6127c7bacfd8cd339c6b8825",
                "nome": "Laboratorio - 2",
                "endereco": "R.Testando-2, nº222",
                "status": true,
                "__v": 0
            }
        ]

+ Response 500:

        Falha ao carregar os laboratorios pertencente ao exame.