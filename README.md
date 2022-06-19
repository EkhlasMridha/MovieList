

## Description

Bakcend API project developed in NestJs to create and manage your favourite movielist.

## Installation

After cloning the repository to your local machine run command ```npm install``` inside the project directory to install necessary packages.
```bash
$ npm install
```
## Setting up the Database
MySql database is used in this project. To simply setup your mysql database server on your machine at first you have to download [xampp](https://www.apachefriends.org/download.html).
After the installation run the xamp panel and start ```Apache``` and ```MySql``` server as shown in the image. Make sure the port ```3306``` is same on your machine to o on which mysql server is running. If the mysql port is different than the image then you have to set your mysql server port to the project db configuration file. ![xampp](/xamp.png)

Goto your project directory the src>app.module.ts file and check the port number is same as the port mysql is running on your machine. ![config](/config.png) 

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
