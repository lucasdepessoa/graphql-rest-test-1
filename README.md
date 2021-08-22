# graphql-rest-test-1

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/lucasdepessoa/curriculum/blob/main/LICENSE)

Simple REST API test, using GraphQL-yoga and mongodb locally.

# About this Project

In this project I use the GraphQL-Yoga to create a simple REST API with MongoDb.

## Layout mobile
Under development.

## Layout web
Under development.

# Technologies Used

## Back end
  - NodeJs
  - graphql-yoga

## Front end
  - 

## Deployment Into Production
  - Back end: localhost
  - Database: MongoDB Localhost

# How can i use?
 Access on the browser: 'localhost:4000/' and use the interface below:

 For this example was made it two querys. One query to create user, and other to get all users or user by id.

### For example GET All users:
 In this example the query "users" is looking for all users in the database, and what is inside "{ id name email}" will be returned.
 
 <img src="https://raw.githubusercontent.com/lucasdepessoa/graphql-rest-test-1/main/backend/src/img/getAllUsersPassingTheFilter.jpg">

### For example GET User By ID:
 Note where "id, name and email" are written, inside "(id: '612 ..')" is defined the id that will be searched and right below the query "user". Inside the "{id name email}", it is defined what will be returned after the execution of the query.

 <img src="https://raw.githubusercontent.com/lucasdepessoa/graphql-rest-test-1/main/backend/src/img/getUserByIdAndReturnByFilter.jpg">

### For example Create User:
 Notice where "id" is written, just below the "createUser" query. Inside the "{ id }", it is defined what will be returned after the execution of the query.

 <img src="https://raw.githubusercontent.com/lucasdepessoa/graphql-rest-test-1/main/backend/src/img/createAndReturnId.JPG">


## Status
Finished.

# Autor
Lucas Fernandes Pessoa

www.linkedin.com/in/lucasdepessoa
