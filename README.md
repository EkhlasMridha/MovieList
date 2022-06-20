

## Description

Bakcend API project developed with NestJs and ReactJs to create and manage your favourite movielist.<br/>
Tools and Technology used:
* ***Backend*** : NestJs
* ***Frontentd UI*** : ReactJs
* ***Database*** : MySql
* ***Database local server tool*** : Xamp
* ***Code Editor*** : VS Code

## NestJs Backend Project Setup

After cloning the repository to your local machine run command ```npm install``` inside the project directory to install necessary packages.
```bash
$ npm install
```
## Database Setup
MySql database is used in this project. To simply setup your mysql database server on your machine at first you have to download and install [xampp](https://www.apachefriends.org/download.html). on your local macine.<br/>
After installation run xamp and on xamp panel start ```Apache``` and ```MySql``` server as shown in the image. Make sure the port ```3306``` is same on your machine 
too on which mysql server is running. If the mysql port is different then you have to change the Project DB configuration.
![xampp](/xamp.png)

Goto your project directory then ```src>app.module.ts``` and check the port number is same as the port of mysql running on your machine. If it is not same then change port on the DB configuration to the port on which MySql server is running on your machine.<br/> ![config](/config.png) 

## Running the app
After install packages and setting up the MySql database on your machine got the project directory and run command ```npm run start``` to run the NestJs api project. The api app will start running on http://localhost:4000.
If the app starts successfully, Your can assume that backend project setup is completed.

```bash
# start backend server
$ npm run start
```
## Setting up React Frontend UI
After setting up the backend let's setup the frontend React app.<br/>
React project repository is linked to the backend api project repository as a submodule. To clone/download that submodule on your local machine simply run this command on your project directory:
```bash
$ git submodule update --init --recursive
```
After that goto directory MovieListreact. If the previous command has executed successfully then you should see the react frontend code in this directory.<br/>
Now on MovieListReact directory run command ```npm install``` again to install the node_modules.
```bash
#install react project dependencies
$ npm install
```
 After the installation of dependencies of React app, run this command to run the react development server:
```bash
# start react development server
$ npm start
```

After the react app server runs successfully open your web browser and browse http://localhost:3000 to browse the movie list application.<br/>
***Congrats! You have completed the project setup***

## Using Movie List App
* To use this app you have signup first. Click on the signup button, Fill up the form and click on submit to sign up on the portal.
* Now login into the portal by giving your email and password you have set during the signup process
* After a successfull login you will be redirected to the movie list page. Now you can add movies to your list and manage them from here.
