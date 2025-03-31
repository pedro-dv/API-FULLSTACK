# 📌 CRUD de Usuários (API + Front-End)

![Tela do sistema](./assets/Screenshot2025-03-31at19-04-11VIteReact.png)

![Screenshot 2025-03-31 at 19-04-11 Vite React](https://github.com/user-attachments/assets/6dd3698d-9313-41f3-887b-d151e9adf37e)

Este é um projeto full-stack simples que permite **cadastrar, listar, editar e excluir usuários**. A aplicação consiste em uma **API REST** desenvolvida com **Node.js** e um **front-end** em **React.js**, consumindo a API.

---

## 🚀 Tecnologias utilizadas

### 🔹 Backend (API)
- **Node.js**
- **Express.js**
- **MySQL** (Banco de dados)
- **Cors**
- **dotenv**

### 🔹 Frontend (React.js)
- **React.js**
- **Styled-components**
- **Axios**
- **React-toastify**
- **React-icons**

---

 ### Criar o banco de dados MySQL

A API usa MySQL como banco de dados. Você precisa criar a tabela usuarios com a seguinte estrutura:

```bash

CREATE DATABASE usuarios_db;

USE usuarios_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fone VARCHAR(20),
    data_nascimento DATE
);

```
---

Configurar o acesso ao MySQL

Crie um arquivo .env no diretório backend/ e configure suas credenciais do banco:

```bash 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=usuarios_db

```


---

##📌 Estrutura do Projeto:
```bash  

📂 backend/
 ├── 📂 controllers/        # Lógica dos endpoints da API
 ├── 📂 routes/             # Rotas da API
 ├── 📂 db.js               # Configuração do MySQL
 ├── 📂 index.js            # Servidor Node.js
 ├── 📂 .env                # Variáveis de ambiente
 ├── 📂 package.json        # Dependências do backend
 └── 📂 README.md           # Documentação

📂 frontend/
 ├── 📂 src/
 │   ├── 📂 components/     # Componentes React
 │   ├── 📂 styles/         # Estilos globais
 │   ├── 📂 App.jsx         # Componente principal
 │   ├── 📂 index.js        # Ponto de entrada do React
 ├── 📂 package.json        # Dependências do frontend
 ├── 📂 README.md           # Documentação

```
---

🎨 Funcionalidades do Front-end (React.js)

✔️ Listagem de usuários em uma tabela
✔️ Formulário para cadastrar novos usuários
✔️ Edição de usuários existentes
✔️ Exclusão de usuários com confirmação
✔️ Notificações visuais com React-Toastify
✔️ Interface responsiva e estilizada com Styled-components

---

## 🛠️ Como rodar o projeto

### 📌 **1. Clonar o repositório**
```bash
git clone https://github.com/pedro-dv/API-FULLSTACK.git
cd API-FULLSTACK
