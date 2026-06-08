# 🍩 Comfort Store

Uma aplicação full stack desenvolvida para simular a operação de uma confeitaria moderna, permitindo o gerenciamento de produtos, pedidos e clientes através de uma API REST construída com Java e Spring Boot.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)
![Maven](https://img.shields.io/badge/Maven-Build-blue)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

---

## 📌 Sobre o Projeto

A **Comfort Store** é um projeto desenvolvido para fins de estudo e portfólio, com o objetivo de demonstrar a construção de uma aplicação moderna utilizando o ecossistema Spring.

O sistema simula o backend de uma confeitaria, oferecendo recursos para gerenciamento de produtos, clientes e regras de negócio relacionadas ao catálogo da loja.

Durante o desenvolvimento, são aplicados conceitos como:

* Desenvolvimento de APIs REST
* Arquitetura em camadas
* Boas práticas de programação orientada a objetos
* Persistência de dados com JPA/Hibernate
* Tratamento centralizado de exceções
* Segurança de aplicações com Spring Security
* Organização e escalabilidade de projetos Spring Boot

---

## 🛠️ Tecnologias Utilizadas

* Java 17
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* Maven
* JUnit
* Supabase

---

## 🎯 Objetivos do Projeto

Este projeto foi criado para consolidar conhecimentos em desenvolvimento backend e demonstrar competências relacionadas a:

* Criação de APIs REST escaláveis
* Modelagem de entidades e relacionamentos
* Implementação de regras de negócio
* Integração com banco de dados
* Testes automatizados
* Boas práticas de arquitetura de software

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

* Java 17+
* Git
* Maven (opcional)


## 🖥️ Frontend

O frontend foi desenvolvido utilizando React e consome a API da Comfort Store para exibição e gerenciamento dos produtos.

### Pré-requisitos

* Node.js 20+ (ou versão compatível)
* npm

Verifique a instalação:

```bash
node -v
npm -v
```

### Clonar o projeto

```bash
git clone https://github.com/Deceitful1/Comfort-Store.git
```

### Acessar a pasta do frontend

```bash
cd frontend
```

### Instalar as dependências

```bash
npm install
```



### Executar a aplicação

```bash
npm run dev
```

Após iniciar, a aplicação estará disponível em:

```text
http://localhost:5173
```

### Configuração da API
 O projeto utiliza React Router com BrowserRouter. Em ambientes de produção, o servidor deve ser configurado para redirecionar todas as rotas para `index.html`.

Caso necessário, altere a URL da API no arquivo de configuração do frontend para apontar para o backend local:
```text
http://localhost:8080
```

