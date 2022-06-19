

## Description

Bakcend API project developed in NestJs to create and manage your favourite movielist. Code editor used to develop both of this app is ```VS Code```.

## Installation

After cloning the repository to your local machine run command ```npm install``` inside the project directory to install necessary packages.
```bash
$ npm install
```
## Setting up the Database
MySql database is used in this project. To simply setup your mysql database server on your machine at first you have to download [xampp](https://www.apachefriends.org/download.html).
After the installation run the xamp panel and start ```Apache``` and ```MySql``` server as shown in the image. Make sure the port ```3306``` is same on your machine 
too on which mysql server is running. If the mysql port is different then you have to change the DB configuration.
![xampp](/xamp.png)

Goto your project directory then src>app.module.ts file and check the port number is same as the port of mysql running on your machine. ![config](/config.png) 

## Running the app
Now run command ```npm run start``` on your project to run the api project. The api app will start running on http://localhost:4000.
If the app starts successfully, Your backend project setup will be completed.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Setting up Frontend
After setting up the backend let's setup the frontend React app.
React project repository is linked as a submodule on the backend api project repository.
So run command 
```bash
$ git submodule update --init --recursive
```
On your project directory to clone the frontend app. After that goto directory MovieListreact. If the previous command has executed successfully then you should see the react frontend code in this directory.
On MovieListReact directory run command
```bash
$ npm install
```
to install the node_modules. After the necessary node_module files downloaded successfully run command,
```bash
$ npm start
```
to run the development server of react app.
After the react app server runs successfully open your web browser and browse http://localhost:3000 to browse the movie list application.

## Using Movie List App
* To use this app you have signup first. Click on the signup button, Fill up the form and click on submit to sign up on the portal.
* Now login into the portal by giving your email and password you have set during the signup process
* After a successfull login you will be redirected to the movie list page. Now you can add movies to your list and manage them from here.
