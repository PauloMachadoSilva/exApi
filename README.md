COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto com nodemon
### nodemon app.js



SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install express

Rodar o projeto 
### node app.js

Acessar o projeto no navegador
### http://localhost:8080

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
### npm install -g nodemon
### npm install --save-dev nodemon

Rodar o projeto com nodemon
### nodemon app.js

Sequelize é uma biblioteca Javascript que facilita o gerenciamento de um banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Abrir o PowerShell na pasta documentos aonde esta guardada a chave 248487-aws.pem

Executar o comando
ssh -i "248487.pem" ubuntu@ec2-18-228-225-102.sa-east-1.compute.amazonaws.com

pm2 list - Lista de Processo node rodando
pm2 start index.js --name-deploy_api

IP da AWS
http://18.228.225.102:3030/produtos