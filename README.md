<h1 align="center">
  <img alt="Laravel" title="Laravel" src="assets/react_laravel_logo.png" width="550" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jeffersonSantos13/Laravel_React_BoilerPlate?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jeffersonSantos13/Laravel_React_BoilerPlate">

  <a href="https://www.linkedin.com/in/lucasdeveloperti/">
    <img alt="Jefferson Yuiti dos Santos" src="https://img.shields.io/badge/made%20by-Jefferson Santos-%2304D361">
  </a>

  <a href="https://github.com/jeffersonSantos13/Laravel_React_BoilerPlate/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jeffersonSantos13/Laravel_React_BoilerPlate">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/jeffersonSantos13/Laravel_React_BoilerPlate/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jeffersonSantos13/Laravel_React_BoilerPlate?style=social">
  </a>
</p>

# Laravel + React

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Laravel com ReactJS.
# 🛠 Requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

  - PHP versão 7.0 +
  - [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://yarnpkg.com/)
  - [Composer](https://getcomposer.org/) 
  - [Git](https://git-scm.com)
  - [Node.js](https://nodejs.org/en/)
  - Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🧭 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/jeffersonSantos13/Laravel_React_BoilerPlate.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Laravel_React_BoilerPlate

# Instale as dependências
$ yarn install or npm install
$ composer update

```

### Configurar as variáveis do Banco de Dados
Editar o arquivo .env

```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

### Migration
Para criar as tabelas do projeto execute o comando:

```bash
php artisan migrate
```

# Execute a aplicação em modo de desenvolvimento
A aplicação será aberta: http://127.0.0.1:8000

```bash
$ php artisan serve
```
